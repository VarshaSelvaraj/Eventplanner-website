http = require('http')
url = require('url')
qs = require('querystring')

let user="a";
let em="b";
let ema="c";
let ph="d";

function onRequest(request,response)
{
    var path=url.parse(request.url).pathname;
    console.log("Request for "+path+" recieved");
    var query=url.parse(request.url).query;
    var fname=qs.parse(query)["fname"];
    user=fname;
    var pass=qs.parse(query)["pwd"];
    em=pass;
    var email=qs.parse(query)["email"];
    ema=email;
    var phn=qs.parse(query)["phn"];
    ph=phn;


    response.write("Hello "+user+", your registration is successfull! ");
    response.end();
    
    insertdata();
}
http.createServer(onRequest).listen(4022);
console.log("Server is running now....");


const mongoose =require("mongoose")
const urla = "mongodb://localhost:27017/lab";
const name1 = new mongoose.Schema({ name: String, password: String, email: String, phone: String});
const Name= mongoose.model('regs',name1)

const db = async() =>{
    try{    
    console.log("entered")    
    const data=await mongoose.connect(urla,    
    {    
        useNewUrlParser: true,    
        useUnifiedTopology: true,    
        family: 4,    
    }
    )
    console.log("connected")
    }    
    catch(err){    
    console.log(err)    
    }    
}
db()
    


    const insertdata=async()=>{
        const cat = new Name({ name:user , password:em  ,email:ema, phone:ph});        
        cat.save().then(() => console.log('Saved in db'));        
        }