const express = require("express");
const cors = require("cors");
const app = express();
const { createProxyMiddleware } = require("http-proxy-middleware");

app.use(cors());

app.use(
    "/ottUsersService",
    createProxyMiddleware({
        target: "https://ottusersservice-3pp-dai-ar.apps.osep02.claro.amx",
        changeOrigin: true,
        secure: false,
        onProxyRes: (proxyRes, req, res) => {
            proxyRes.headers["Access-Control-Allow-Origin"] = "*";
        },
        logLevel: "debug"
    })
);

// Roles PEC (Node)
app.use(
    "/rolespec",
    createProxyMiddleware({
        target: "http://arpec.claro.amx/PEC_RAC8/api",
        changeOrigin: true,
        secure: false,
        onProxyRes: (proxyRes, req, res) => {
            proxyRes.headers["Access-Control-Allow-Origin"] = "*";
        },
        logLevel: "debug"
    })
);

// Validate User HUB Account ID
app.use(
    "/check-account",
    createProxyMiddleware({
        target: "https://api-validate-user-hub-pec-ar-desa.apps.osen02.claro.amx",
        changeOrigin: true,
        secure: false,
        onProxyRes: (proxyRes, req, res) => {
            proxyRes.headers["Access-Control-Allow-Origin"] = "*";
        },
        logLevel: "debug"
    })
);

// Validate User HUB DNI
app.use(
    "/check-doc",
    createProxyMiddleware({
        target: "https://api-validate-user-hub-pec-ar-desa.apps.osen02.claro.amx",
        changeOrigin: true,
        secure: false,
        onProxyRes: (proxyRes, req, res) => {
            proxyRes.headers["Access-Control-Allow-Origin"] = "*";
        },
        logLevel: "debug"
    })
);

app.use(
    "/pec",
    createProxyMiddleware({
        target: "https://sosneado.claro.amx",
        changeOrigin: true,
        secure: false,
        onProxyRes: (proxyRes, req, res) => {
            proxyRes.headers["Access-Control-Allow-Origin"] = "*";
        },
        logLevel: "debug"
    })
);

app.use(
    "/wscob301.json",
    createProxyMiddleware({
        target: "https://sosneado.claro.amx",
        changeOrigin: true,
        secure: false,
        onProxyRes: (proxyRes, req, res) => {
            proxyRes.headers["Access-Control-Allow-Origin"] = "*";
        },
        logLevel: "debug"
    })
);

app.use(
    "/api-ocp",
    createProxyMiddleware({
        target: "http://arpec.claro.amx",
        changeOrigin: true,
        secure: false,
        onProxyRes: (proxyRes, req, res) => {
            proxyRes.headers["Access-Control-Allow-Origin"] = "*";
        },
        logLevel: "debug"
    })
);

// Validate package reco
app.use(
    "/validate-bonif",
    createProxyMiddleware({
        target: "https://api-bonificacion-portout-validacion-pec-ar-desa.apps.osen02.claro.amx",
        changeOrigin: true,
        secure: false,
        onProxyRes: (proxyRes, req, res) => {
            proxyRes.headers["Access-Control-Allow-Origin"] = "*";
        },
        logLevel: "debug"
    })
);

// Grant package reco
app.use(
    "/grant-bonif",
    createProxyMiddleware({
        target: "https://api-bonificacion-portout-pec-ar-desa.apps.osen02.claro.amx",
        changeOrigin: true,
        secure: false,
        onProxyRes: (proxyRes, req, res) => {
            proxyRes.headers["Access-Control-Allow-Origin"] = "*";
        },
        logLevel: "debug"
    })
);

// Grant bonification reco
app.use(
    "/promotion-qualification/save-promotion-to-cellular",
    createProxyMiddleware({
        target: "https://promotion-qualification-product-dmain-bs-ar.apps.osen02.claro.amx",
        changeOrigin: true,
        secure: false,
        onProxyRes: (proxyRes, req, res) => {
            proxyRes.headers["Access-Control-Allow-Origin"] = "*";
        },
        logLevel: "debug"
    })
);

// Insert contact (bonif)
app.use(
    "/clientsqualification",
    createProxyMiddleware({
        target: "https://client-qualification-portabilidad-ar.apps.osen02.claro.amx",
        changeOrigin: true,
        secure: false,
        onProxyRes: (proxyRes, req, res) => {
            proxyRes.headers["Access-Control-Allow-Origin"] = "*";
        },
        logLevel: "debug"
    })
);

app.use(
    "/profile",
    createProxyMiddleware({
        target: "http://arwmiclaro.claro.amx/csc-cloud-profile/cloud-profile",
        changeOrigin: true,
        secure: false,
        onProxyRes: (proxyRes, req, res) => {
            proxyRes.headers["Access-Control-Allow-Origin"] = "*";
        },
        logLevel: "debug"
    })
);

app.use(
  "/account-profile",
  createProxyMiddleware({
      target: "http://arwmiclaro.claro.amx/csc-cloud-profile/cloud-profile",
      changeOrigin: true,
      secure: false,
      onProxyRes: (proxyRes, req, res) => {
          proxyRes.headers["Access-Control-Allow-Origin"] = "*";
      },
      logLevel: "debug"
  })
);

app.use(
    "/awm-account-status/",
    createProxyMiddleware({
        target: "http://arwmiclaro.claro.amx",
        changeOrigin: true,
        secure: false,
        onProxyRes: (proxyRes, req, res) => {
            proxyRes.headers["Access-Control-Allow-Origin"] = "*";
        },
        logLevel: "debug"
    })
);

app.use(
    "/awm-cellular-balance-CO-service",
    createProxyMiddleware({
        target: "http://arwmiclaro.claro.amx",
        changeOrigin: true,
        secure: false,
        onProxyRes: (proxyRes, req, res) => {
            proxyRes.headers["Access-Control-Allow-Origin"] = "*";
        },
        logLevel: "debug"
    })
);

app.use(
    "/awm-cellularbalance-CR",
    createProxyMiddleware({
        target: "http://arwmiclaro.claro.amx",
        changeOrigin: true,
        secure: false,
        onProxyRes: (proxyRes, req, res) => {
            proxyRes.headers["Access-Control-Allow-Origin"] = "*";
        },
        logLevel: "debug"
    })
);

app.use(
    "/csc-hiredplan",
    createProxyMiddleware({
        target: "http://arwmiclaro.claro.amx",
        changeOrigin: true,
        secure: false,
        onProxyRes: (proxyRes, req, res) => {
            proxyRes.headers["Access-Control-Allow-Origin"] = "*";
        },
        logLevel: "debug"
    })
);

app.use(
    "/insert-log",
    createProxyMiddleware({
        target: "api-logs-pec-pec-ar.apps.osen02.claro.amx",
        changeOrigin: true,
        secure: false,
        onProxyRes: (proxyRes, req, res) => {
            proxyRes.headers["Access-Control-Allow-Origin"] = "*";
        },
        logLevel: "debug"
    })
);

app.use(
    "/gci",
    createProxyMiddleware({
        target: "https://api-globalclientid-service-id-claro-ar.osep01-apps.claro.amx",
        changeOrigin: true,
        secure: false,
        onProxyRes: (proxyRes, req, res) => {
            proxyRes.headers["Access-Control-Allow-Origin"] = "*";
        },
        logLevel: "debug"
    })
);

app.use(
    "/ticklers",
    createProxyMiddleware({
        target: "http://arpec.claro.amx/wdc-stealth",
        changeOrigin: true,
        secure: false,
        onProxyRes: (proxyRes, req, res) => {
            proxyRes.headers["Access-Control-Allow-Origin"] = "*";
        },
        logLevel: "debug"
    })
);

app.use(
    "/line-status-online",
    createProxyMiddleware({
        target: "http://arpec.claro.amx/api-ocp",
        changeOrigin: true,
        secure: false,
        onProxyRes: (proxyRes, req, res) => {
            proxyRes.headers["Access-Control-Allow-Origin"] = "*";
        },
        logLevel: "debug"
    })
);

app.use(
  "/nbr/permission",
  createProxyMiddleware({
      target: "https://api-nbr-abm-service-rtdm-ar.osep01-apps.claro.amx",
      changeOrigin: true,
      secure: false,
      onProxyRes: (proxyRes, req, res) => {
          proxyRes.headers["Access-Control-Allow-Origin"] = "*";
      },
      logLevel: "debug"
  })
);


app.use(
    "/",
    createProxyMiddleware({
        target: "https://api-consume-data-detail-pec-ar.apps.osep02.claro.amx",
        changeOrigin: true,
        secure: false,
        onProxyRes: (proxyRes, req, res) => {
            proxyRes.headers["Access-Control-Allow-Origin"] = "*";
        },
        logLevel: "debug"
    })
);

// Server listening
app.listen(4000);
app.listen(4001);
app.listen(5000);
app.listen(5001);
app.listen(5002);
app.listen(5005);

// /promotion-qualification/save-promotion-to-cellular

// https://promotion-qualification-product-dmain-bs-ar.apps.osen02.claro.amx
