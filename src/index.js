const express=require('express');
const port= process.env.PORT || 3000;
const app=express();
require("./db/conn");
const router=require('./router/route');

app.use(express.json())
app.use(router);

app.listen(port,()=>{
  console.log(`sever running on the port ${port}`);
})