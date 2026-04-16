export interface DataPoint {
  id: string
  country: string
  latitude: number
  longitude: number
  area: number
  began: string
  ended: string
  dead: number
  displaced: number
  mainCause: string
  severity: number
  categorisedCause: string
  [key: string]: string | number
}

export function parseCSV(csvText: string): DataPoint[] {
  const lines = csvText.trim().split('\n')
  if (lines.length < 2) return []

  const headers = parseCSVLine(lines[0]).map(h => h.trim().toLowerCase())
  
  // Find coordinate columns (flexible naming)
  const latColumn = headers.findIndex(h => 
    h.includes('lat') || h === 'y' || h.includes('anonymous_lat')
  )
  const lonColumn = headers.findIndex(h => 
    h.includes('lon') || h.includes('lng') || h === 'x' || h.includes('anonymous_long')
  )

  if (latColumn === -1 || lonColumn === -1) {
    throw new Error('Could not find latitude/longitude columns. Please ensure your CSV has columns containing "lat" and "lon" (or "lng", "long", "x", "y").')
  }

  const data: DataPoint[] = []

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue
    
    const values = parseCSVLine(lines[i])
    const lat = parseFloat(values[latColumn])
    const lon = parseFloat(values[lonColumn])

    if (isNaN(lat) || isNaN(lon)) continue

    const point: DataPoint = {
      id: getColumnValue(headers, values, ['id', 'glidenumber']) || String(i),
      country: getColumnValue(headers, values, ['country', 'location', 'name']) || 'Unknown',
      latitude: lat,
      longitude: lon,
      area: parseFloat(getColumnValue(headers, values, ['area', 'size']) || '0') || 0,
      began: getColumnValue(headers, values, ['began', 'start', 'start_date', 'startdate']) || '',
      ended: getColumnValue(headers, values, ['ended', 'end', 'end_date', 'enddate']) || '',
      dead: parseInt(getColumnValue(headers, values, ['dead', 'deaths', 'casualties', 'fatalities']) || '0') || 0,
      displaced: parseInt(getColumnValue(headers, values, ['displaced', 'affected', 'evacuated']) || '0') || 0,
      mainCause: getColumnValue(headers, values, ['maincause', 'main_cause', 'cause', 'type']) || 'Unknown',
      severity: parseFloat(getColumnValue(headers, values, ['severity', 'magnitude', 'intensity']) || '1') || 1,
      categorisedCause: getColumnValue(headers, values, ['categorised_cause', 'category', 'categorizedcause']) || 'Unknown',
    }

    // Add all other columns as additional properties
    headers.forEach((header, index) => {
      if (!point[header]) {
        point[header] = values[index] || ''
      }
    })

    data.push(point)
  }

  return data
}

function parseCSVLine(line: string): string[] {
  const result: string[] = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]
    
    if (char === '"') {
      inQuotes = !inQuotes
    } else if ((char === ',' || char === '\t') && !inQuotes) {
      result.push(current.trim())
      current = ''
    } else {
      current += char
    }
  }
  
  result.push(current.trim())
  return result
}

function getColumnValue(headers: string[], values: string[], possibleNames: string[]): string {
  for (const name of possibleNames) {
    const index = headers.findIndex(h => h.includes(name))
    if (index !== -1 && values[index]) {
      return values[index]
    }
  }
  return ''
}

export function excelDateToString(excelDate: number): string {
  if (isNaN(excelDate) || excelDate < 1) return ''
  const date = new Date((excelDate - 25569) * 86400 * 1000)
  return date.toLocaleDateString()
}
