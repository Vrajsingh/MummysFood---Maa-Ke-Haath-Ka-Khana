const mongoose = require("mongoose");
//const MONGODB_URI = "mongodb+srv://god_07:4127@vishal.hc7k7.mongodb.net/mummyFood?retryWrites=true&w=majority";
// creating a database
mongoose.connect("mongodb+srv://god_07:4127@vishal.hc7k7.mongodb.net/mummyFood?retryWrites=true&w=majority", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})
