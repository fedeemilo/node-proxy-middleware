const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
const { createProxyMiddleware } = require("http-proxy-middleware");

app.use(cors());

app.use(
  "/ottUsersService",
  createProxyMiddleware({
    target:
      "https://ottusersservice-3pp-dai-ar-desa.apps.osen02.claro.amx",
    changeOrigin: true,
    secure: false,
    // secure: false,
    onProxyRes: (proxyRes, req, res) => {
      proxyRes.headers["Access-Control-Allow-Origin"] = "*";
    },
    logLevel: "debug"
  })
);

// app.use(
//   "/clientsqualification",
//   createProxyMiddleware({
//     target:
//       "https://client-qualification-insert-contact-portabilidad-ar.osen01-apps.claro.amx",
//     changeOrigin: true,
//     secure: false,
//     onProxyRes: (proxyRes, req, res) => {
//       proxyRes.headers["Access-Control-Allow-Origin"] = "*";
//     },
//     logLevel: "debug"
//   })
// );

// app.use(
//   "/promotion-qualification",
//   createProxyMiddleware({
//     target:
//       "https://promotion-qualification-save-promotion-product-dmain-bs-ar-desa.osen01-apps.claro.amx",
//     changeOrigin: true,
//     secure: false,
//     onProxyRes: (proxyRes, req, res) => {
//       proxyRes.headers["Access-Control-Allow-Origin"] = "*";
//     },
//     logLevel: "debug"
//   })
// );

// Server listening
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
