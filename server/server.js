const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();
const PORT = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));
// app.use('/bizs/:bId', express.static(`${__dirname}/../public`));

app.use('/biz', proxy({ target: 'http://localhost:3001', changeOrigin: true }));
app.use('/biz_photos', proxy({ target: 'http://localhost:3001', changeOrigin: true }));
app.use('/user', proxy({ target: 'http://localhost:3002', changeOrigin: true }));
app.use('/users', proxy({ target: 'http://localhost:3002', changeOrigin: true }));
app.use('/reviews', proxy({ target: 'http://localhost:3002', changeOrigin: true }));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});