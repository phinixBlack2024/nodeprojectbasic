const dotenv = require('dotenv')
dotenv.config({
  path:'./.env'
})
const PORT = process.env.PORT  
const app = require('./main.js')
const mongoRun = require('./db/index.js')
mongoRun().then(() => {
  app.on("error", (error) => {
      console.log(`Error"`, error)
      throw error
  })
  app.listen(process.env.PORT || 8000, () => {
      console.log(`server running in port", ${process.env.PORT}`)
  })
}).catch((error) => {
  console.log("mongoo connnection error", error)
})