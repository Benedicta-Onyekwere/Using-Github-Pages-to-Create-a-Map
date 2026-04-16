"use client"

import { useState, useMemo, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { parseCSV, type DataPoint } from '@/lib/csv-parser'
import FileDropzone from '@/components/file-dropzone'
import StatsPanel from '@/components/stats-panel'
import DataTable from '@/components/data-table'
import FilterPanel from '@/components/filter-panel'
import { Globe, Database, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Dynamic import for Leaflet to avoid SSR issues
const MapView = dynamic(() => import('@/components/map-view'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] bg-card rounded-lg flex items-center justify-center">
      <div className="flex items-center gap-2 text-muted-foreground">
        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        <span>Loading map...</span>
      </div>
    </div>
  ),
})

export default function Home() {
  const [rawData, setRawData] = useState<DataPoint[]>([])
  const [selectedPoint, setSelectedPoint] = useState<DataPoint | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [filters, setFilters] = useState({ country: 'all', cause: 'all' })

  const handleFileLoad = useCallback((content: string) => {
    try {
      setError(null)
      const parsed = parseCSV(content)
      if (parsed.length === 0) {
        setError('No valid data points found. Please check your file format.')
        return
      }
      setRawData(parsed)
      setSelectedPoint(null)
      setFilters({ country: 'all', cause: 'all' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to parse file')
    }
  }, [])

  const filteredData = useMemo(() => {
    return rawData.filter(point => {
      if (filters.country !== 'all' && point.country !== filters.country) return false
      if (filters.cause !== 'all' && point.categorisedCause !== filters.cause) return false
      return true
    })
  }, [rawData, filters])

  const handleFilterChange = useCallback((key: 'country' | 'cause', value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }))
    setSelectedPoint(null)
  }, [])

  const handleClearFilters = useCallback(() => {
    setFilters({ country: 'all', cause: 'all' })
    setSelectedPoint(null)
  }, [])

  const handleClearData = useCallback(() => {
    setRawData([])
    setSelectedPoint(null)
    setFilters({ country: 'all', cause: 'all' })
    setError(null)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary text-primary-foreground">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">GeoData Visualizer</h1>
              <p className="text-xs text-muted-foreground">Visualize geographic datasets</p>
            </div>
          </div>
          
          {rawData.length > 0 && (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Database className="w-4 h-4" />
                <span>{filteredData.length} of {rawData.length} points</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleClearData}
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
              >
                <X className="w-4 h-4 mr-1" />
                Clear Data
              </Button>
            </div>
          )}
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* File Upload Section */}
        {rawData.length === 0 ? (
          <div className="max-w-xl mx-auto pt-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Upload Your Dataset</h2>
              <p className="text-muted-foreground">
                Drop a CSV file with latitude and longitude columns to visualize your data on the map
              </p>
            </div>
            <FileDropzone onFileLoad={handleFileLoad} error={error} />
            
            {/* Sample format hint */}
            <div className="mt-8 p-4 rounded-lg bg-card border border-border">
              <h3 className="text-sm font-medium text-foreground mb-2">Expected columns:</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-muted-foreground">
                <span>• Latitude (lat, anonymous_lat, y)</span>
                <span>• Longitude (lon, lng, anonymous_long, x)</span>
                <span>• Country (optional)</span>
                <span>• Severity (optional)</span>
                <span>• Dead/Deaths (optional)</span>
                <span>• Displaced (optional)</span>
                <span>• MainCause (optional)</span>
                <span>• Began/Ended dates (optional)</span>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Stats */}
            <StatsPanel data={filteredData} />

            {/* Filters */}
            <FilterPanel 
              data={rawData}
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
            />

            {/* Map and Table Grid */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Map */}
              <div className="lg:col-span-2 h-[500px] bg-card border border-border rounded-lg overflow-hidden">
                <MapView 
                  data={filteredData} 
                  selectedPoint={selectedPoint}
                  onSelectPoint={setSelectedPoint}
                />
              </div>

              {/* Legend */}
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-3">Severity Legend</h3>
                  <div className="space-y-2">
                    {[
                      { color: 'bg-green-500', label: 'Low (≤1)' },
                      { color: 'bg-primary', label: 'Medium (1-1.5)' },
                      { color: 'bg-orange-500', label: 'High (1.5-2)' },
                      { color: 'bg-red-500', label: 'Critical (>2)' },
                    ].map(item => (
                      <div key={item.label} className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full ${item.color}`} />
                        <span className="text-sm text-muted-foreground">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Marker size indicates impact (deaths + displaced)
                  </p>
                </div>

                {/* Quick upload new file */}
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Load New Dataset</h3>
                  <FileDropzone onFileLoad={handleFileLoad} error={error} />
                </div>
              </div>
            </div>

            {/* Data Table */}
            <DataTable 
              data={filteredData}
              selectedPoint={selectedPoint}
              onSelectPoint={setSelectedPoint}
            />
          </>
        )}
      </div>
    </main>
  )
}
