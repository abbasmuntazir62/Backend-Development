


// const express = require('express');
// const app = express();

// const userModel = require('./usermodel');



// // Home route
// app.get('/', (req, res) => {
//     res.send("hey");
// });


// // Create user
// app.get('/create', async (req, res) => {

//     let createduser = await userModel.create({
//         name: "harsh",
//         email: "harsh@gmail.com",
//         username: "harsh"
//     });

//     res.send(createduser);
// });


// app.get('/read', async (req, res) => {
//     let users = await usermodel.find();
//     res.send(users);
// })

// // Update user
// app.get('/update', async (req, res) => {

//     let updateuser = await userModel.findOneAndUpdate(
//         { username: "harsh" },
//         { name: "harsh is great" },
//         { new: true }
//     );

//     res.send(updateuser);
// });










// // // Start server
// // app.listen(3000, () => {
// //     console.log("Server is running on port 3000");
// // });





const express = require('express');
const app = express();

const userModel = require('./usermodel');


// Home route
app.get('/', (req, res) => {
    res.send("hey");
});


// Create user
app.get('/create', async (req, res) => {

    let createduser = await userModel.create({
        name: "harsh",
        email: "harsh@gmail.com",
        username: "harsh"
    });

    res.send(createduser);
});


// Read all users
app.get('/read', async (req, res) => {

    let users = await userModel.find();

    res.send(users);
});


// Update user
app.get('/update', async (req, res) => {

    let updateuser = await userModel.findOneAndUpdate(
        { username: "harsh" },
        { name: "harsh is great" },
        { new: true }
    );

    res.send(updateuser);
});

//delete
app.get('/delete', async (req, res) => {
let users= await userModel.findOneAndDelete(
        { username: "harsh" },
);
       res.send(users);
});




// Start server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


