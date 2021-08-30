const mongoose=require('mongoose');
const validator=require('validator');

const interviewSchema= new mongoose.Schema({
   firstname:{
       type:String,
       required:true
   },
   lastname:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true,
    validate(value){
       if(!validator.isEmail(value))
       {
           throw new error("Inavalid email address");
       }
    }
},
password:{
    type:String,
    required:true,
    unique:true,
    validate(value){
       if(!validator.isStrongPassword(value))
       {
           throw new error("Inavalid password");
       }
    }
},
confirmpassword:{
    type:String,
    required:true,
    unique:true,
    validate(value){
       if(!validator.isStrongPassword(value))
       {
           throw new error("Inavalid password");
       }
    }
},
attemptquestions:{
  type:Array
}
})
const InterviewRegistration=new mongoose.model("InterviewRegistration",interviewSchema);

module.exports=InterviewRegistration;