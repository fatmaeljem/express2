const express=require('express');
const app=express();


app.use('/', function(req,res,next){
    let date=new Date()
    let hour=date.getHours()
    
if (hour>=9&&hour<=17){
  next()
}
else{
    res.send("<h1>we are close</h1>")
}
})

app.get('/',(req,res)=>
res.sendFile(__dirname+'/public/index.html'))
app.get('/services',(req,res)=>
res.sendFile(__dirname+'/public/services.html'))
app.get('/contact',(req,res)=>
res.sendFile(__dirname+'/public/contact.html'))
app.use(express.static(__dirname+'/public'))


app.listen(5000,(err)=>err ? console.error (err):console.log ('server is runnig')  )
