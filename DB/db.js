const mongoose = require('mongoose');

// const DB_URI = 'mongodb://127.0.0.1:27017/';
// const DB_URI = 'mongodb+srv://abdulrehmankonext:Ah7y5COYolYMYkxR@cluster0.hzd8s9u.mongodb.net/?retryWrites=true&w=majority';

const DB_URI = 'mongodb+srv://khanisonline4u:test123@cluster0.mym951n.mongodb.net/?retryWrites=true&w=majority';
const db_name = "inotebook";
// const db_name = "sample_airbnb";

// const DB_URI = 'mongodb://timebug_app_zti_user:ASre_KoneZTI_3KXtO__@3.13.134.164:27017/?authSource=timebug-app&readPreference=primary&directConnection=true&ssl=false';
// const db_name = "timebug-app";

// mongoose.connect(DB_URI);
mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: db_name
});


const connection = mongoose.connection;

// connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
// connection.once('open', async function () {
//     console.log("connnected to database!");
//     const collection = connection.db.collection("sample_airbnb");
//     collection.find({}).toArray(function (err, data) {
//         console.log("data: ", data); // it will print your collection data
//     });

// });

connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
connection.on('error', (err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
});


module.exports = connection;