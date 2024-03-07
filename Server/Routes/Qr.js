const express = require('express');
const QrRouter = express.Router();

const ScanQrCode = require('../Controller/Qr');

QrRouter.post('/ScanQrCode',ScanQrCode);

module.exports = QrRouter;