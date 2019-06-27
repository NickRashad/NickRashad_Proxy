const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();
const PORT = 3000;
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.static('public'));
app.use('/bizs/:bId', express.static(`${__dirname}/../public`));

app.use('/biz', proxy({ target: process.env.BIZSERVICE, changeOrigin: true }));
app.use('/biz_photos', proxy({ target: process.env.BIZSERVICE, changeOrigin: true }));
app.use('/user', proxy({ target: process.env.REVIEWSERVICE, changeOrigin: true }));
app.use('/users', proxy({ target: process.env.REVIEWSERVICE, changeOrigin: true }));
app.use('/reviews', proxy({ target: process.env.REVIEWSERVICE, changeOrigin: true }));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});