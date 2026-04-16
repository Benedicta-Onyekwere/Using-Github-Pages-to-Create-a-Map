"use client"

import type { DataPoint } from '@/lib/csv-parser'
import { MapPin, Users, AlertTriangle, Globe } from 'lucide-react'

interface StatsPanelProps {
  data: DataPoint[]
}

export default function StatsPanel({ data }: StatsPanelProps) {
  if (data.length === 0) return null

  const totalDead = data.reduce((sum, p) => sum + p.dead, 0)
  const totalDisplaced = data.reduce((sum, p) => sum + p.displaced, 0)
  const uniqueCountries = new Set(data.map(p => p.country)).size
  const uniqueCauses = new Set(data.map(p => p.categorisedCause)).size

  const stats = [
    {
      label: 'Data Points',
      value: data.length.toLocaleString(),
      icon: MapPin,
    },
    {
      label: 'Countries',
      value: uniqueCountries.toLocaleString(),
      icon: Globe,
    },
    {
      label: 'Total Deaths',
      value: totalDead.toLocaleString(),
      icon: AlertTriangle,
    },
    {
      label: 'Displaced',
      value: totalDisplaced >= 1000000 
        ? `${(totalDisplaced / 1000000).toFixed(1)}M` 
        : totalDisplaced.toLocaleString(),
      icon: Users,
    },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {stats.map((stat) => (
        <div 
          key={stat.label}
          className="bg-card border border-border rounded-lg p-4"
        >
          <div className="flex items-center gap-2 text-muted-foreground mb-1">
            <stat.icon className="w-4 h-4" />
            <span className="text-xs font-medium uppercase tracking-wider">{stat.label}</span>
          </div>
          <p className="text-2xl font-bold text-primary">{stat.value}</p>
        </div>
      ))}
    </div>
  )
}
