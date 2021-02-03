const express = require(`express`)
const app = express()
const cors = require(`cors`)

//Importe route files:
const apiMain = require(`./routes/apiMain`)

//Data parsers:
app.use(express.json())
app.use(cors())

//Define route files:
app.use(`/main`, apiMain)

//Application port server:
var port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server running at: http://localhost:` + port)
})