const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();
const PORT = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));

app.use('/biz', proxy({ target: 'localhost/3001', changeOrigin: true }));
app.use('/biz_photos', proxy({ target: 'localhost/3001', changeOrigin: true }));
app.use('/user', proxy({ target: 'localhost/3002', changeOrigin: true }));
app.use('/users', proxy({ target: 'localhost/3002', changeOrigin: true }));
app.use('/reviews', proxy({ target: 'localhost/3002', changeOrigin: true }));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});