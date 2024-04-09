const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

//mongodb compass connection

// const dburl = "mongodb://localhost:27017/demoproject14"
const dburl = process.env.mongodburl
mongoose.connect(dburl).then(() => {
    console.log("Connected to DB Successfully")
}).catch((err) => {
    console.log(err.message)
});


//MongoDB Atlas Connection


// const dburl = "mongodb+srv://Ashraf:123@cluster0.ff1y6g0.mongodb.net/demoproject14?retryWrites=true&w=majority&appName=Cluster0"
// mongoose.connect(dburl).then(() => {
//     console.log("Connected to MongoDB Atlas Successfully")
// }).catch((err) => {
//     console.log(err.message)
// }); 


const app = express() 
app.use(cors())
app.use(express.json())  // to parse JSON data

const adminrouter = require("./routes/adminroutes")
const jobseekerrouter = require("./routes/jobseekerroutes")
const recruiterrouter = require("./routes/recruiterroutes")

app.use("",adminrouter) // to include all admin routes
app.use("",jobseekerrouter) // to include all job seeker routes
app.use("",recruiterrouter) // to include all recruiter routes

// const port=2014
const port = process.env.PORT || 2014
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})