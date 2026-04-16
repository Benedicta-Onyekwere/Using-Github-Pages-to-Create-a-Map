"use client"

import type { DataPoint } from '@/lib/csv-parser'
import { excelDateToString } from '@/lib/csv-parser'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ScrollArea } from '@/components/ui/scroll-area'

interface DataTableProps {
  data: DataPoint[]
  selectedPoint: DataPoint | null
  onSelectPoint: (point: DataPoint) => void
}

function getSeverityBadgeColor(severity: number): string {
  if (severity <= 1) return 'bg-green-500/20 text-green-400 border-green-500/30'
  if (severity <= 1.5) return 'bg-primary/20 text-primary border-primary/30'
  if (severity <= 2) return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
  return 'bg-red-500/20 text-red-400 border-red-500/30'
}

export default function DataTable({ data, selectedPoint, onSelectPoint }: DataTableProps) {
  if (data.length === 0) return null

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="px-4 py-3 border-b border-border">
        <h3 className="font-semibold text-foreground">Data Points</h3>
        <p className="text-xs text-muted-foreground mt-0.5">Click a row to focus on the map</p>
      </div>
      
      <ScrollArea className="h-[300px]">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-border">
              <TableHead className="text-muted-foreground">Country</TableHead>
              <TableHead className="text-muted-foreground">Cause</TableHead>
              <TableHead className="text-muted-foreground text-right">Severity</TableHead>
              <TableHead className="text-muted-foreground text-right">Deaths</TableHead>
              <TableHead className="text-muted-foreground text-right">Displaced</TableHead>
              <TableHead className="text-muted-foreground">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((point, index) => {
              const isSelected = selectedPoint?.id === point.id
              const beganDate = !isNaN(Number(point.began)) ? excelDateToString(Number(point.began)) : point.began

              return (
                <TableRow
                  key={`${point.id}-${index}`}
                  onClick={() => onSelectPoint(point)}
                  className={`cursor-pointer border-border transition-colors ${
                    isSelected 
                      ? 'bg-primary/10 hover:bg-primary/15' 
                      : 'hover:bg-muted/50'
                  }`}
                >
                  <TableCell className="font-medium text-foreground">{point.country}</TableCell>
                  <TableCell className="text-muted-foreground">{point.categorisedCause}</TableCell>
                  <TableCell className="text-right">
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium border ${getSeverityBadgeColor(point.severity)}`}>
                      {point.severity}
                    </span>
                  </TableCell>
                  <TableCell className="text-right text-foreground">
                    {point.dead > 0 ? point.dead.toLocaleString() : '-'}
                  </TableCell>
                  <TableCell className="text-right text-foreground">
                    {point.displaced > 0 ? point.displaced.toLocaleString() : '-'}
                  </TableCell>
                  <TableCell className="text-muted-foreground">{beganDate || '-'}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  )
}
