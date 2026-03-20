@echo off
echo Starting Skilledge Website in Development Mode...
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    npm install
    echo.
)

REM Start server in development mode
echo Starting development server...
echo Server will be available at: http://localhost:5000
echo Press Ctrl+C to stop the server
echo.
$env:NODE_ENV="development"; npx tsx server/index.ts

pause
