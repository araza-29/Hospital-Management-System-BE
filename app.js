const express = require("express")
const app = express()
const cors = require("cors")
app.use(express.json())

const router = require("./router")
app.use(express.urlencoded({ extended: true }))

app.use("/HAS",router)

app.listen(3000,()=>{
    console.log("Server is running on Port: ",3000)
})