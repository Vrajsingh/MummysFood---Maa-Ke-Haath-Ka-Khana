const mongoose = require("mongoose");

// creating a database
mongoose.connect("mongodb+srv://god_07:4127@vishal.hc7k7.mongodb.net/test", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})