const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mini');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", ()=>{
    console.log("DB connected");
});

// module.exports = ()=> {
//     const connect = ()=>{
//         if (process.env.NODE_ENV !== "production"){
//             mongoose.set("debug", true);
//         } 
//         mongoose.connect(
//             "mongodb://localhost:27017/miniProject",
//             {
//                 dbName: "miniProject"
//             },
//             error => {
//                 if (error) {
//                     console.log('mongoDB connection error');
//                 } else {
//                     console.log('mongoDB connection success')
//                 }
//             }
//         );
//     };
//     connect();
//     mongoose.connection.on("error", error => {
//         console.log("mongoDB connection error", error);
//     });
//     mongoose.connection.on("disconnected", ()=>{
//         console.log("mongoDB connection has been terminated. Retrying...");
//         connect();
//     });
//     require('./board');
//     require('./user');
// }