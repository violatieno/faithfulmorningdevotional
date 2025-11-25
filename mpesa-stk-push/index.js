require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

const generateToken = async () => {
  const { CONSUMER_KEY, CONSUMER_SECRET } = process.env;
  const auth = Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString('base64');

  const response = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
    headers: {
      Authorization: `Basic ${auth}`
    }
  });

  return response.data.access_token;
};

const stkPush = async (req, res) => {
  const token = await generateToken();
  const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14);
  const password = Buffer.from(`${process.env.BUSINESS_SHORTCODE}${process.env.PASSKEY}${timestamp}`).toString('base64');

  const payload = {
    BusinessShortCode: process.env.BUSINESS_SHORTCODE,
    Password: password,
    Timestamp: timestamp,
    TransactionType: "CustomerPayBillOnline",
    Amount: "1",
    PartyA: "254712345678", // customer's phone number
    PartyB: process.env.BUSINESS_SHORTCODE,
    PhoneNumber: "254712345678",
    CallBackURL: process.env.CALLBACK_URL,
    AccountReference: "Test123",
    TransactionDesc: "Payment for Test123"
  };

  const response = await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', payload, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  res.json(response.data);
};

app.post('/pay', stkPush);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});