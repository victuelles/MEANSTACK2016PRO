//Message Board App using MEAN Stack

//Install Mongodb
$ brew update
$ brew install mongodb --with-openssl


//initialize database location, create a folder for db
$ sudo mkdir -p /data/db
//start the mongod instance
$ sudo mongod 

//use RoboMongo or mongo cli to access db and collections
$mongo
//switch to test db
$use test



//Yeoman
$ sudo npm install -g yo

//install gulp -task runner
// bower front end package manager
$ sudo npm install -g gulp bower generator-gulp-angular

$ yo gulp-angular my-message-front

no statistics (n)
Angular ver 1.5.x
No modules (use spacebar to deselect)
Jquery None
REST $http
UI Framework - Bootstrap
Angular UI Bootstrap
SASS(node)
JS Processor - Babel ES6
HTML template -None (Standard HTML)

//to compile
$ gulp

//run server

$ gulp serve


//Save GIT repository

//github.com/victuelles 
// 


//create back-end folder, same level as front-end

cd back-end
npm init
(accept defaults)

//save express in dependency list on package.json

npm install express --save 

//create server.js

//add middleware 
 npm install body-parser --save

//install chrome postman
//http://localhost:5000/api/message (POST)
//body type raw
//
//{ "test":"works"}


//install MongoDB
cd back-end/
//no --save since we are going to use mongoose later
$npm install mongodb
//rerun $node server
//open mongo shell
$mongo
> use test
switched to db test
> db.messages.find()
{ "_id" : ObjectId("579d03bd92655d07f8c545f2"), "msg" : "Test" }
> 





