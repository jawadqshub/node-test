const express = require('express');
const errorHandler = require('./Middleware/errorHandler');
const cors = require("cors");
const PORT = process.env.PORT || 5000;



//connceting to db
// const db = require('./DB/db');
require('./DB/db');

// Creating express object
const app = express();
app.use(express.json());
app.use(cors());
app.use(errorHandler);
 


//using routes
app.use("/user", require("./Routes/userRoutes"));
app.use("/listings/", require("./Routes/listingAndReviewsRoute"));


// GET request to check server
app.get('/check', (req, res) => {
    res.send('Node App is running on this server at Port No. ' + PORT)
    res.end()
})

// Server Setup
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});