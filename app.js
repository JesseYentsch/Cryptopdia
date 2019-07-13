//require dependancy statements
var express=require('express');
var app=express();
var path=require ('path');
var bodyParser=require('body-parser');
var request=require ('request');
var dotenv=require('dotenv');
    dotenv.config();
var mongoose=require('mongoose');

//join path directories
app.use(express.static(path.join(__dirname +'/public')));
app.use(express.static(path.join(__dirname +'/images')));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs'); 


//DATABASE

//var url='mongodb://localhost:27017/';

// MongoClient.connect(url,{useNewUrlParser:true},(err,db)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     var database=db.db("cryptopdia");
//     database.createCollection("users", (err,res)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log("collection created");
//         db.close();
//     });
//     console.log("Database connected");
//  });
//Default Mongoose Connection
mongoose.connect('mongodb://localhost:27017/cryptopdiaDB', {useNewUrlParser: true});

//Get mongoose to use global promise library **READ MORE ABOUT THIS**
mongoose.Promise=global.Promise;
//Get default connection 
var  db=mongoose.connection;

db.on('error', console.error.bind(console,"MongoDB connection error"));

//home page
app.get('/',function(req,res){
    res.render('index');
});

//page to choose cryptocurrency and add it to portfolio
app.get('/cryptocurrency',function(req,res){
    console.log("Hey there from cryptocurrency");
    request('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key='+process.env.API_KEY,
        function (error,response,body){
            if(!error && response.statusCode==200){
                var parsedData=JSON.parse(body);
                res.render('crypto', {parsedData:parsedData});
            }
        });
});

//page that displays portfolio
// app.get('/cryptocurrency/portfolio/:id',function(req,res){
//     res.render("portfolio");
// });

//app.post('/cryptocurreny/portfolio:id)
//app.put('/crptocurrency/portfolio:id)
//app.delete('/cryptocurreny/portfolio:id)

app.listen(8080, function(){
    console.log("Serving crypto demo on port 8080");
});