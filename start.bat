@echo off
echo Starting Skilledge Website...
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    npm install
    echo.
)

REM Build the project
echo Building project...
npm run build
echo.

REM Start the server
echo Starting server on http://localhost:5000
echo Press Ctrl+C to stop the server
echo.
$env:NODE_ENV="production"; node dist/index.cjs

pause
