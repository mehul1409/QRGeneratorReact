const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

const QrRouter = require('./Routes/Qr');

app.use(express.json());
app.use(cors());

app.use('/api',QrRouter);

app.listen(8000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`Server is started at Port ${PORT}`);
    }
})