Invoke-RestMethod -Uri http://localhost:3000/api/user `
  -Method Post `
  -ContentType "application/json" `
  -Body '{"name":"Alice","age":20}'


