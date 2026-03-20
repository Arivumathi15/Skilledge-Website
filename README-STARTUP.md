# Skilledge Website - Startup Guide

## Quick Start

### Option 1: Production Mode (Recommended)
Double-click `start.bat` or run:
```bash
start.bat
```

### Option 2: Development Mode
Double-click `start-dev.bat` or run:
```bash
start-dev.bat
```

## Manual Start

### Production Mode
```bash
npm install
npm run build
$env:NODE_ENV="production"; node dist/index.cjs
```

### Development Mode
```bash
npm install
$env:NODE_ENV="development"; npx tsx server/index.ts
```

## Access
- **Website**: http://localhost:5000
- **Stop**: Press `Ctrl+C` in the terminal

## Troubleshooting

### Port Already in Use
If port 5000 is busy, the server will automatically try alternative ports.

### Build Errors
Run `npm install` to ensure all dependencies are installed.

### Windows PowerShell Issues
The scripts use PowerShell syntax for environment variables. Make sure you're using PowerShell or Command Prompt.

## Project Structure
- `client/` - React frontend
- `server/` - Express backend
- `dist/` - Built production files
- `start.bat` - Production startup script
- `start-dev.bat` - Development startup script
