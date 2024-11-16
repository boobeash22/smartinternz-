const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://johnalf1711:yPG6gAswUw7KQNeV@regcomp.7rzdy.mongodb.net/?retryWrites=true&w=majority&appName=regcomp")
.then(()=>{
   console.log("connected to mongodb")
})