#!/bin/bash
for i in {1..5}; do
  echo "🧪 Running test iteration $i"
  npx playwright test tests/employee.spec.ts
  if [ $? -ne 0 ]; then
    echo "❌ Test failed on iteration $i. Stopping loop."
    break
  fi
done
