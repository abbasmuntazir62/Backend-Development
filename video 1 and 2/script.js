// const fs = require('fs');
 
//copyFile
// fs.copyFile("hello.txt","./copy/chacha.txt",function(err){
//      if (err) console.error(err);
//     else console.log("done");
// })

//unlink
// fs.unlink("hello.txt",function(err){
//      if (err) console.error(err);
//     else console.log("removed");
// })

//remove file
// fs.rm("./copy",{recursive: true},function(err){
//      if (err) console.error(err);
//     else console.log("removed");
// })

const http = require('http');
const server = http.createServer(function(req,res){
    res.end("hello world");
})
server.listen(3000);