var net = require("net")
 var sockets=[]
var sum = 0
var tcpserver = net.createServer((socket)=>{
    sum =sum +1
    console.log("Connection established between server and client"+sum)
    sockets.push[socket]
    socket.on("data",()=>{
        for(var i=0;i<sum;i++){
            if(sockets[i]!=socket){
            sockets[i].write(data)
            }
        }
    })
})
tcpserver.maxConnections=255;
tcpserver.listen("3000",()=>{
    console.log("server is created....")
})