var express = require('express');
var app = express();
var http =require("http").Server(app);
var io = require('socket.io')(http);



app.use(express.static(__dirname + '/public'));
app.get('/', function(req,res){
    res.sendFile(__dirname + '/emitir.html');
});
io.on('connection', function(socket){
    socket.on('stream', function(image){
        socket.broadcast.emit('stream', image);
    });
});

http.listen(process.env.PORT, function(){
    console.log('4000 portta server ayağa kalkdı');
});