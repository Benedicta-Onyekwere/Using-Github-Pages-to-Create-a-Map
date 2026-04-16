"use client"

import type { DataPoint } from '@/lib/csv-parser'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

interface FilterPanelProps {
  data: DataPoint[]
  filters: {
    country: string
    cause: string
  }
  onFilterChange: (key: 'country' | 'cause', value: string) => void
  onClearFilters: () => void
}

export default function FilterPanel({ data, filters, onFilterChange, onClearFilters }: FilterPanelProps) {
  if (data.length === 0) return null

  const countries = [...new Set(data.map(p => p.country))].sort()
  const causes = [...new Set(data.map(p => p.categorisedCause))].filter(Boolean).sort()

  const hasActiveFilters = filters.country !== 'all' || filters.cause !== 'all'

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Filter by:</span>
        
        <Select value={filters.country} onValueChange={(v) => onFilterChange('country', v)}>
          <SelectTrigger className="w-[160px] h-9 bg-card border-border">
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Countries</SelectItem>
            {countries.map(country => (
              <SelectItem key={country} value={country}>{country}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.cause} onValueChange={(v) => onFilterChange('cause', v)}>
          <SelectTrigger className="w-[160px] h-9 bg-card border-border">
            <SelectValue placeholder="Cause" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Causes</SelectItem>
            {causes.map(cause => (
              <SelectItem key={cause} value={cause}>{cause}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {hasActiveFilters && (
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onClearFilters}
          className="h-9 text-muted-foreground hover:text-foreground"
        >
          <X className="w-4 h-4 mr-1" />
          Clear
        </Button>
      )}
    </div>
  )
}
