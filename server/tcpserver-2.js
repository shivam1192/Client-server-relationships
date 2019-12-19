var net = require("net");
var sockets = []
var sum = 0
var tcpServer = net.createServer((socket)=>{
       sum=sum+1;
    console.log("connection is build by client "+ sum)
    sockets.push(socket)
    socket.on("data",(data)=>{
        if(sockets[1]!=null){
              if(sockets[0]==socket){
                sockets[1].write(data)
              }
              else{
                sockets[0].write(data)
              }}
        else{
            sockets[0].write("connection is not established")
        }
    })
});

tcpServer.maxConnections = 2;

tcpServer.listen("3000",()=>{
    console.log("server is created")
});