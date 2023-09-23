const express = require('express');
const mongoConnection  = require('./db');
mongoConnection();

const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.use(express.json());
app.use('/api',require('./routes/createUser'));
app.use('/api',require('./routes/displayData'));
app.use('/api',require('./routes/orderData'));

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.listen(PORT,()=>{
    console.log("Server Started");
})