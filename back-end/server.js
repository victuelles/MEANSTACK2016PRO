var express=require("express");

var app=express();

var bodyParser=require('body-parser');
//var mongo=require('mongodb').MongoClient;

var mongoose=require('mongoose');
//create a model
var Message = mongoose.model('Message',{
	msg:String
});

//var database;
app.use(bodyParser.json()); //parse using json format

//enable CORS - Cross Origin Resource Sharing
//frontend is at port 3000, server is 5000
app.use(function(req,res,next){
	//allow access from any location
	res.header('Access-Control-Allow-Origin','*');
	//type of headers allowed
	res.header('Access-Control-Allow-Headers','Content-Type,Authorization');
	next();

});


app.get('/api/message',GetMessages);

app.post('/api/message',function(req,res){
	//console.log(req.body);
//	database.collection("messages").insertOne({'msg':req.body});
	var message= new Message(req.body);
	message.save();// save to mongo
	res.status(200);
});

function GetMessages(req,res){
	Message.find({}).exec(function(err,result){
		//console.log(result)
		//returns the result back 
		res.send(result);
	});
}

mongoose.connect("mongodb://localhost:27017/test",function(err,db){

	if(!err){
		console.log("we are connected to Mongo");
		//GetMessages();

		//database=db;
		//insert an object in collection 'messages'
		//db.collection("messages").insertOne({'msg':'Test'});
	}
})

var server = app.listen(5000,function(){

	console.log("listening on port ",server.address().port);
})
