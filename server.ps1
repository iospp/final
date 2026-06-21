$port = 3000
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

# Define MIME Types
function Get-MimeType($extension) {
    switch ($extension.ToLower()) {
        ".html" { return "text/html; charset=utf-8" }
        ".css"  { return "text/css" }
        ".js"   { return "application/javascript" }
        ".png"  { return "image/png" }
        ".jpg"  { return "image/jpeg" }
        ".jpeg" { return "image/jpeg" }
        ".gif"  { return "image/gif" }
        ".svg"  { return "image/svg+xml" }
        ".ico"  { return "image/x-icon" }
        default { return "application/octet-stream" }
    }
}

try {
    $listener.Start()
    Write-Host "[Apex Bounce] Local Server started at http://localhost:$port/"
    Write-Host "Opening browser for preview..."
    
    # Launch default browser
    Start-Process "http://localhost:$port/"
    
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $urlPath = $request.Url.LocalPath
        if ($urlPath -eq "/") {
            $urlPath = "/index.html"
        }
        
        # Resolve target file path (remove leading slash)
        $cleanPath = $urlPath.TrimStart('/')
        $localPath = Join-Path (Get-Location) $cleanPath
        
        if (Test-Path $localPath -PathType Leaf) {
            $extension = [System.IO.Path]::GetExtension($localPath)
            $mimeType = Get-MimeType $extension
            
            $bytes = [System.IO.File]::ReadAllBytes($localPath)
            $response.ContentType = $mimeType
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $errorMessage = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found - File Not Found")
            $response.ContentType = "text/plain; charset=utf-8"
            $response.ContentLength64 = $errorMessage.Length
            $response.OutputStream.Write($errorMessage, 0, $errorMessage.Length)
        }
        $response.Close()
    }
} catch {
    Write-Error $_
} finally {
    if ($listener) {
        $listener.Stop()
    }
}
