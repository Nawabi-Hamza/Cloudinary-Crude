const express = require("express")
const bodyParser = require("body-parser")



// cloudinary configuration with my api keys




const app = express()
const port = 5000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) 
app.get("/",(req,res)=>{
    res.send("Hello World")
})

// use the cloudinary from other folder
const cloudinary = require("./cloudinary")

app.use("/image",cloudinary)

  

app.listen(port,()=>{
    console.log(`Server Is Running In Port ${port}`)
})