var express=require("express");

var app=express();

var bodyParser=require('body-parser');
//var port =5000;

app.use(bodyParser.json()); //parse using json format


app.post('/api/message',function(req,res){
	console.log(req.body);
	res.status(200);
});

var server = app.listen(5000,function(){

	console.log("listening on port ",server.address().port);
})
