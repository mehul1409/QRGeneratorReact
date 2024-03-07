const Qrcode = require('qrcode');

const ScanQrCode = (req,res) =>{
    const url = req.body.url;
    if(url.length === 0){
        res.send("Empty Data");
    }

    Qrcode.toDataURL(url,function(err,url){
        console.log(url);
        res.send(url);
    })
};

module.exports = ScanQrCode
