const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 3000;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    // Parse URL and clean query parameters
    let filePath = req.url.split('?')[0];
    
    // Default to index.html
    if (filePath === '/') {
        filePath = '/index.html';
    }
    
    // Resolve absolute file path
    const absolutePath = path.join(__dirname, filePath);
    
    // Check if file exists
    fs.stat(absolutePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('404 Not Found - 找不到檔案');
            return;
        }
        
        // Read and serve file
        const ext = path.extname(absolutePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        
        res.writeHead(200, { 'Content-Type': contentType });
        
        const readStream = fs.createReadStream(absolutePath);
        readStream.pipe(res);
    });
});

server.listen(PORT, () => {
    const url = `http://localhost:${PORT}`;
    console.log(`[Apex Bounce] 伺服器已啟動於 ${url}`);
    console.log(`正在為您開啟預覽...`);
    
    // Auto-open browser on Windows
    exec(`start ${url}`, (err) => {
        if (err) {
            console.error('無法自動開啟瀏覽器，請手動瀏覽連結:', url);
        }
    });
});
