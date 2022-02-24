var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.urlencoded({extended: true})) 
app.use(bodyParser.json()) 
app.use(express.static(__dirname));
var dbUrl = 'mongodb+srv://admin:123roro123@cluster0.e5llt.mongodb.net/messages?retryWrites=true&w=majority';
mongoose.connect(dbUrl , (err) => { 
    console.log('mongodb connected',err);
 })
 var Message = mongoose.model('Message',{ name : String, message : String})
 app.get('/messages', (req, res) => {
    Message.find({},(err, messages)=> {
      res.send(messages);
    })
  });
  app.post('/messages', (req, res) => {
    var message = new Message(req.body);
    message.save((err) =>{
      if(err)
        sendStatus(500);
      res.sendStatus(200);
    })
  });
var server = app.listen(3000, () => {
    console.log('server is running on port', server.address().port);
   });