"use client"

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import type { DataPoint } from '@/lib/csv-parser'
import { excelDateToString } from '@/lib/csv-parser'

interface MapViewProps {
  data: DataPoint[]
  selectedPoint: DataPoint | null
  onSelectPoint: (point: DataPoint | null) => void
}

function getSeverityColor(severity: number): string {
  if (severity <= 1) return '#4ade80' // green
  if (severity <= 1.5) return '#facc15' // yellow (primary)
  if (severity <= 2) return '#fb923c' // orange
  return '#ef4444' // red
}

function getSeverityRadius(severity: number, dead: number, displaced: number): number {
  const impact = Math.log10((dead || 1) + (displaced || 1) / 100 + 1)
  return Math.max(8, Math.min(30, 8 + impact * 4 + severity * 3))
}

export default function MapView({ data, selectedPoint, onSelectPoint }: MapViewProps) {
  const mapRef = useRef<L.Map | null>(null)
  const markersRef = useRef<L.CircleMarker[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    mapRef.current = L.map(containerRef.current, {
      center: [20, 0],
      zoom: 2,
      zoomControl: true,
      attributionControl: true,
    })

    // Dark tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(mapRef.current)

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (!mapRef.current) return

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove())
    markersRef.current = []

    if (data.length === 0) return

    // Add new markers
    data.forEach(point => {
      const radius = getSeverityRadius(point.severity, point.dead, point.displaced)
      const color = getSeverityColor(point.severity)

      const marker = L.circleMarker([point.latitude, point.longitude], {
        radius,
        fillColor: color,
        color: color,
        weight: 2,
        opacity: 0.9,
        fillOpacity: 0.6,
      })

      const beganDate = !isNaN(Number(point.began)) ? excelDateToString(Number(point.began)) : point.began
      const endedDate = !isNaN(Number(point.ended)) ? excelDateToString(Number(point.ended)) : point.ended

      marker.bindPopup(`
        <div style="font-family: system-ui; min-width: 200px;">
          <h3 style="margin: 0 0 8px 0; font-weight: 600; color: #1a1a1a;">${point.country}</h3>
          <div style="display: grid; gap: 4px; font-size: 13px; color: #444;">
            <div><strong>Cause:</strong> ${point.mainCause}</div>
            <div><strong>Category:</strong> ${point.categorisedCause}</div>
            <div><strong>Severity:</strong> ${point.severity}</div>
            ${point.dead > 0 ? `<div><strong>Deaths:</strong> ${point.dead.toLocaleString()}</div>` : ''}
            ${point.displaced > 0 ? `<div><strong>Displaced:</strong> ${point.displaced.toLocaleString()}</div>` : ''}
            ${beganDate ? `<div><strong>Started:</strong> ${beganDate}</div>` : ''}
            ${endedDate ? `<div><strong>Ended:</strong> ${endedDate}</div>` : ''}
            ${point.area > 0 ? `<div><strong>Area:</strong> ${point.area.toLocaleString()} km²</div>` : ''}
          </div>
        </div>
      `)

      marker.on('click', () => onSelectPoint(point))
      marker.addTo(mapRef.current!)
      markersRef.current.push(marker)
    })

    // Fit bounds to show all markers
    if (data.length > 0) {
      const bounds = L.latLngBounds(data.map(p => [p.latitude, p.longitude]))
      mapRef.current.fitBounds(bounds, { padding: [50, 50] })
    }
  }, [data, onSelectPoint])

  // Highlight selected point
  useEffect(() => {
    if (!mapRef.current || !selectedPoint) return

    mapRef.current.setView([selectedPoint.latitude, selectedPoint.longitude], 6, {
      animate: true,
    })
  }, [selectedPoint])

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full rounded-lg overflow-hidden"
      style={{ minHeight: '400px' }}
    />
  )
}
