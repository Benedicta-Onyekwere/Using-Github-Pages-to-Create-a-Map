'use client'

import { Download, Github, FileCode } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function DownloadPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-lg w-full text-center space-y-8">
        <div className="space-y-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <FileCode className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-balance">Download GeoData Visualizer</h1>
          <p className="text-muted-foreground text-balance">
            A self-contained HTML file that lets you visualize geographic datasets on an interactive map. 
            Works offline in any browser.
          </p>
        </div>

        <div className="space-y-4">
          <a href="/geodata-visualizer.html" download="geodata-visualizer.html">
            <Button size="lg" className="w-full gap-2">
              <Download className="w-5 h-5" />
              Download HTML File
            </Button>
          </a>
          
          <div className="text-sm text-muted-foreground space-y-2">
            <p className="font-medium">To host on GitHub Pages:</p>
            <ol className="text-left space-y-1 list-decimal list-inside">
              <li>Create a new GitHub repository</li>
              <li>Upload the downloaded file as <code className="bg-muted px-1 rounded">index.html</code></li>
              <li>Go to Settings → Pages → Enable GitHub Pages</li>
              <li>Your visualizer will be live at <code className="bg-muted px-1 rounded">username.github.io/repo-name</code></li>
            </ol>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Back to main app
          </Link>
        </div>
      </div>
    </div>
  )
}
