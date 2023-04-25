// const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');

// const app = express();

// app.use('/api', createProxyMiddleware({
//   target: 'https://api.binance.com',
//   changeOrigin: true,
//   headers: {
//     'X-MBX-APIKEY': ''
//   }
// }));

// app.listen(3001, () => {
//   console.log('Proxy server listening on port 3001!');
// });

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());

const apiProxy = createProxyMiddleware({
  target: 'https://api.binance.com',
  changeOrigin: true,
  secure: false
});

app.use('/api', (req, res) => {
  console.log('Request:', req);
  apiProxy(req, res, (err) => {
    console.error('Error:', err);
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

