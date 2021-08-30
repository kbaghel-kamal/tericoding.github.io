const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/interview_website",{
//    useCreateIndex:true,
//    useFindAndModify:false,
//    useNewUrlParser:true,
//    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection set successfully to the Database");
}).catch((err)=>{
    console.log(err);
})