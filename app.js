const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const userroutes = require('./modules/usermodule.js')
const routes = require('./Routes/userrouter.js')
var methodoverride = require("method-override")
require('dotenv').config()

const app = express();


 app.use(bodyParser.urlencoded({extended:true}));


app.use(methodoverride("_method"))


 app.set("view engine","ejs")


app.use('/api',routes)


// database setup
var uri =process.env.MONGODB_URI||'mongodb://localhost/student';
mongoose.connect(uri,{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>{
	console.log('database connected')
})
.catch((err)=>{
 console.log(err)
})





app.get('',(req,res)=>{
	res.render('landing')
})



var port=process.env.PORT||5000;

app.listen(port,(err)=>{
	if(!err)
	{
		console.log('server connected')
	}
})