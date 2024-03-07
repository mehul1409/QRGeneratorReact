import { useState } from "react";
import axios from 'axios';

const Qr = () => {

    const [url, seturl] = useState('');
    const [qrImage, setqrImage] = useState('');

    const generateQrCode = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/ScanQrCode", { url: url }).then(response => {
            console.log(response);
            setqrImage(response.data);
        })
    }
    return (
        <>
            <div>QR GENERATOR</div>

            <div className="qr">
                <label htmlFor="qrText">Write Text</label>
                <input type="text" value={url} onChange={(e) => seturl(e.target.value)} />

                <button onClick={generateQrCode}>GENERATE QR</button>
            </div>

            {
                url.length > 0 && qrImage
                    ?
                    <>
                        <img src={qrImage} />
                    </>
                    :
                    null
            }
        </>
    )
}

export default Qr;