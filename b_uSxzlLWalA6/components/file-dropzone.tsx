"use client"

import { useCallback, useState } from 'react'
import { Upload, FileSpreadsheet, AlertCircle } from 'lucide-react'

interface FileDropzoneProps {
  onFileLoad: (content: string) => void
  error: string | null
}

export default function FileDropzone({ onFileLoad, error }: FileDropzoneProps) {
  const [isDragging, setIsDragging] = useState(false)

  const handleFile = useCallback((file: File) => {
    if (!file.name.endsWith('.csv') && !file.name.endsWith('.tsv') && !file.name.endsWith('.txt')) {
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      const content = e.target?.result as string
      onFileLoad(content)
    }
    reader.readAsText(file)
  }, [onFileLoad])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }, [handleFile])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
  }, [handleFile])

  return (
    <div className="space-y-4">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`
          relative border-2 border-dashed rounded-lg p-8 text-center transition-all cursor-pointer
          ${isDragging 
            ? 'border-primary bg-primary/10' 
            : 'border-border hover:border-primary/50 hover:bg-muted/50'
          }
        `}
      >
        <input
          type="file"
          accept=".csv,.tsv,.txt"
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        
        <div className="flex flex-col items-center gap-3">
          <div className={`p-3 rounded-full transition-colors ${isDragging ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
            {isDragging ? <FileSpreadsheet className="w-6 h-6" /> : <Upload className="w-6 h-6" />}
          </div>
          
          <div>
            <p className="font-medium text-foreground">
              {isDragging ? 'Drop your file here' : 'Drag & drop your CSV file'}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              or click to browse
            </p>
          </div>
          
          <p className="text-xs text-muted-foreground">
            Supports CSV, TSV, and TXT files with lat/lon columns
          </p>
        </div>
      </div>

      {error && (
        <div className="flex items-start gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm">
          <AlertCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
          <p className="text-destructive">{error}</p>
        </div>
      )}
    </div>
  )
}
