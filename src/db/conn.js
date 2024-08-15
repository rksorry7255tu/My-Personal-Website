const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/Ravi",{
    // usecreateIndex:true,
    // usenewUrlParser:true,
    // useunifieldTopology:true
}).then(()=>{
    console.log("connecton successfull");
}).catch((error)=>{
    console.log(error);
})




