
const express=require('express')
const router=express();
const path=require('path');
const hbs=require('hbs');
const InterviewRegistration=require('../models/interviewer');

router.use(express.urlencoded({extended:false}))


const staticPath=path.join(__dirname,"../../public")
const viewsPath=path.join(__dirname,"../../templates/views");
const PartialsPath=path.join(__dirname,"../../templates/partials");




router.set('views',viewsPath);
router.set("view engine",'hbs');
hbs.registerPartials(PartialsPath)
router.use(express.static(staticPath))





router.get("/",(req,res)=>{
    res.render('register')
})
router.get("/login",(req,res)=>{
    res.render('register')
}) 

router.post("/register",async(req,res)=>{
   try {
       auth_password=req.body.password;
       auth_confirmpassword=req.body.confirmpassword;
      if(auth_password===auth_confirmpassword)
      {
          const user=new InterviewRegistration({
          firstname:req.body.firstname,
          lastname:req.body.lastname,
          email:req.body.email,
          password:auth_password,
          confirmpassword:auth_confirmpassword
         
          })
       
       const registered_user=await user.save();
       res.status(201).render('index',{useremail:req.body.email});
      }
      else
        {
            throw new Error("Invalid password data");
        }

   } catch (error) {
       res.status(500).send(error);
   }
})

router.post("/login",async(req,res)=>{
    try {
        const useremail=req.body.email;
        const userpassword=req.body.password;
        const user=await InterviewRegistration.findOne({email:useremail});
      
        if(user.password===userpassword)
                res.status(200).render("index",{useremail:useremail});
     
         
            // console.log(user.firstname);
        else
           res.send("Invalid login details")
 

    } catch (error) {
        res.status(400).send("Invalid Data")
    }
})
















module.exports=router;
