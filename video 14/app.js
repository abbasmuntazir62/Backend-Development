
//cookie kaise set karte hai
// const cookieParser = require('cookie-parser');
// const express = require('express');
//     const app = express();
       
//     app.use(cookieParser());

//     app.get("/",function (req,res)  {
//         res.cookie("name","harsh");
//         res.send("done");
//     })

//     app.get("/read",function(req,res){
//         console.log("req.cookies");
//         res.send("read page");
//     })


// app.listen(3000);

// bcrypt kaise kare password ko encrypt and decrypt

//encrypt kaise kar skte ho
// const express = require('express');
// const app = express();
// const bcrypt = require('bcrypt');

// app.get("/", function (req, res) {
//     bcrypt.genSalt(10, function (err, salt) {
//         bcrypt.hash("poioioio",salt,function(err,hash){
//             console.log(hash);
//     });
// });
// });
// app.listen(3000);


//decryption

// const express = require('express');
// const app = express();
// const bcrypt = require('bcrypt');

// app.get("/", function (req, res) {
//    bcrypt.compare("poioioio",$2b$10$K8V7wQm9xL2pR4sT6uYzAe,function(err,result){
//             console.log(result);
//     });
// })

// app.listen(3000);



//jwt kaise use kare 

const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get("/",function(req,res){
    let token = jwt.sign({email:"harsh@example.com"},"secret");
    res.cookie("token",token);
    res.send("done")
})

app.get("/read",function(req,res){
    let data = jwt.verify(req.cookies.token,"secret");
    console.log(data);
})

app.listen(3000);