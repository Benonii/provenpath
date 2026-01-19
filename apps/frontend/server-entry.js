import server from "./dist/server/server.js";
import { readFile } from "fs/promises";
import { stat } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { createServer } from "http";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 3000;
const clientDir = join(__dirname, "dist/client");

async function serveStatic(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;

  // Try to serve static files from dist/client
  if (pathname.startsWith("/assets/") || pathname.match(/\.(css|js|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|mp4|webp)$/)) {
    const filePath = join(clientDir, pathname);
    try {
      await stat(filePath); // Check if file exists
      const fileContent = await readFile(filePath);
      res.setHeader("Content-Type", getContentType(pathname));
      res.end(fileContent);
      return;
    } catch (e) {
      // File not found, continue to SSR
    }
  }

  // Serve other static files (favicon, manifest, etc.)
  if (pathname === "/favicon.ico" || pathname === "/manifest.json" || pathname === "/robots.txt" || pathname.match(/\.(svg|png|ico)$/)) {
    const filePath = join(clientDir, pathname);
    try {
      await stat(filePath); // Check if file exists
      const fileContent = await readFile(filePath);
      res.setHeader("Content-Type", getContentType(pathname));
      res.end(fileContent);
      return;
    } catch (e) {
      // File not found
    }
  }

  // Fall back to SSR handler
  try {
    // Convert Node.js request to Web API Request
    const request = new Request(`http://${req.headers.host}${req.url}`, {
      method: req.method,
      headers: req.headers,
      body: req.method !== 'GET' && req.method !== 'HEAD' ? req : undefined,
    });

    const response = await server.fetch(request);

    // Convert Web API Response to Node.js response
    res.statusCode = response.status;
    for (const [key, value] of response.headers) {
      res.setHeader(key, value);
    }

    const body = await response.text();
    res.end(body);
  } catch (error) {
    console.error('SSR Error:', error);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}

function getContentType(pathname) {
  if (pathname.endsWith(".css")) return "text/css";
  if (pathname.endsWith(".js")) return "application/javascript";
  if (pathname.endsWith(".png")) return "image/png";
  if (pathname.endsWith(".jpg") || pathname.endsWith(".jpeg")) return "image/jpeg";
  if (pathname.endsWith(".gif")) return "image/gif";
  if (pathname.endsWith(".svg")) return "image/svg+xml";
  if (pathname.endsWith(".ico")) return "image/x-icon";
  if (pathname.endsWith(".woff")) return "font/woff";
  if (pathname.endsWith(".woff2")) return "font/woff2";
  if (pathname.endsWith(".ttf")) return "font/ttf";
  if (pathname.endsWith(".eot")) return "application/vnd.ms-fontobject";
  if (pathname.endsWith(".mp4")) return "video/mp4";
  if (pathname.endsWith(".webp")) return "image/webp";
  return "application/octet-stream";
}

const httpServer = createServer(serveStatic);

httpServer.listen(port, () => {
  console.log(`TanStack Start server running on port ${port}`);
});

