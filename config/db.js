const mongoose = require('mongoose')

const connectionString = process.env.DATABASE;

mongoose.connect(connectionString).then((res)=>{
console.log("Mongo DB connected Successfully")
})
.catch((err)=>{
console.log("MongoDB connection failed");
console.log(err)
})