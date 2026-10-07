// const express = require('express');
// const app = express();
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const userModel = require("./models/user");
// const cookieParser = require('cookie-parser');
// const path = require('path');
// const { hash } = require('crypto');
// const { JsonWebTokenError } = require('jsonwebtoken');
// app.set("view engine","ejs");
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(express.static(path.join(__dirname,'public')));
// app.use(cookieParser());


// app.get('/',(req,res) => {
//     res.render('index');
// });

// //isme password encrypted nhi hai password dikhega 
// // app.post('/create',async(req,res) => {
// //     let {username,email,password,age} = req.body;

// //     let createduser = await userModel.create({
// //         username,
// //         email,
// //         password,
// //         age

// //     })


// //isme password encrypted hai iska passowrd nhi dikhega users ko ki kya hai
// app.post('/create', (req,res) => {
//     let {username,email,password,age} = req.body;
//     bcrypt.genSalt(10,(err,salt) => {
//         bcrypt.hash(password,salt,async(err,hash) => {

//     let createduser = await userModel.create({
//         username,
//         email,
//         password:hash,
//         age

//     })

// ///this is for saving he passowrd
//     let token = jwt.sign({email},"shhhhhhhhh");
//     res.cookie("token",token);
//     res.send(createduser);
// });
//   });
//     });


//     app.post("/login", async function(req,res) {
//       let user = await userModel.findOne({email:req.body.email})
//       if(!user) return res.send("something is wrong");


//       bcrypt.compare(req.body.password,user.password);
//       if(result){
//         let token = jwt.sign({email:user.email},"shhhhhhhh");
//         res.cookie("token",token);
//         res.send("yes you can login");
//     }
    
//     else res.send("something is wrong");
// })
// });

// app.get("/logout",function(req,res){
//     res.cookie("token","");
//     res.redirect("/");
// });

// app.listen(3000);





const express = require('express');
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("./models/user");
const cookieParser = require('cookie-parser');
const path = require('path');

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser());


app.get('/',(req,res) => {
    res.render('index');
});

//isme password encrypted nhi hai password dikhega 
// app.post('/create',async(req,res) => {
//     let {username,email,password,age} = req.body;

//     let createduser = await userModel.create({
//         username,
//         email,
//         password,
//         age

//     })


//isme password encrypted hai iska passowrd nhi dikhega users ko ki kya hai password
app.post('/create', (req,res) => {
    let {username,email,password,age} = req.body;

    bcrypt.genSalt(10,(err,salt) => {
        bcrypt.hash(password,salt,async(err,hash) => {

            let createduser = await userModel.create({
                username,
                email,
                password:hash,
                age
            })

            //this is for saving the password
            let token = jwt.sign({email},"shhhhhhhhh");
            res.cookie("token",token);
            res.send(createduser);
        });
    });
});


app.post("/login", async function(req,res) {

    let user = await userModel.findOne({email:req.body.email});

    if(!user) return res.send("something is wrong");

    let result = await bcrypt.compare(req.body.password,user.password);

    if(result){
        let token = jwt.sign({email:user.email},"shhhhhhhhh");
        res.cookie("token",token);
        res.send("yes you can login");
    }
    
    else {
        res.send("something is wrong");
    }
});


app.get("/logout",function(req,res){
    res.cookie("token","");
    res.redirect("/");
});


app.listen(3000);