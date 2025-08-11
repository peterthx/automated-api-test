@echo off
for /l %%i in (1,1,5) do (
  echo Running test iteration %%i
  npx playwright test tests/employee.spec.ts
  if errorlevel 1 (
    echo Test failed on iteration %%i. Stopping loop.
    exit /b
  )
)
