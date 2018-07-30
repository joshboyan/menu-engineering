const app = require('express')()
const port = process.env.PORT || 3001

app.get('*', (req, res) =>{
  console.log('Fallthrough route')
  res.send('Fallthrough route \n')
})

app.listen(port, () => console.log(`App listening on port: ${port}`))