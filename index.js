// Import packages
const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("ReverseSwish is running! 🚀");
});

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

// Endpoints

app.get("/apputils-swish/api/v1/favorite", (req, res) => {
  res.status(200).send('{"result":"200","favorites":[{"alias":"112","nickname":"RevSwish Support"}]}');
});

app.get("/mpc-swish/api/v2/validation/", (req, res) => {
  res.status(200).send('{"result":"200","brandingId":"NDEASE","brandingVersion":"2","timeToLive":300000,"pushMessageCount":0}');
});

// ExecutePayment Endpoint

app.post("/mpc-swish/api/v3/initiateactivation/:param1/:param2", (req, res) => {
  res.status(200).send('{"result":"200","autoStartToken":"9e83a6c0-d8bb-428b-b99b-3a59340c57c7"}');
});

app.post("/mpc-swish/api/v3/executeactivation/", (req, res) => {
  res.status(200).send('{"result":"200","deviceId":"9961741E269E4C149C3DEF394DDE8513","brandingId":"NDEASE","brandingVersion":"2","timeToLive":300000}');
});

app.post("/mpc-swish/api/v3/executepayment/", (req, res) => {
  res.status(200).send('{"result":"200","message":"ReverseSwish test message!"}');
    
});

// Badgecount Endpoints
app.get("/mpc-swish/api/v2/badgecount/", (req, res) => {
  res.status(200).send('{"result":"200","payments":1337}');
});

app.get("/mpc-swish/api/v1/paymentrequest/badgecount", (req, res) => {
  res.status(200).send(
    '{"data":{"pprInfo":1337,"pprRequiresAction":0},"time":"2024-06-18T12:07:37.587+00:00"}',
  );
});

// Consents Endpoint
app.get("/mpc-swish/consents/v1/detailed-notifications/info", (req, res) => {
  res.status(200).send(
    '{"requestReference":"028C557A57064DBC80810213A6320561","devicePublicKey":"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0KzjRPBgtWPFpHYjLE9HK4gfwYXnKpkuL3mNUXgjJvzUTZdBSgV9f2T5cEbiPLQcgifGymtfdjZ4Gt9syoHsqaDIbxjx0bd05T4h26gQtNEfGuhFy6uXMvgKP3PFP5paYzKUJHi+yTFlaSZnKEUrlCu5D2kOqTz6cv5NISUJH0u1H7kesckhdQT7cfEPNdjYnbImrXLZ9P3+3E0UxApEmztwm0lDCHFS0tjgX2Yh4hjxx/tCCk1BMu/HXdYne66DzkOmv63YeAXrR+3VluhgCsj5j576UK6lWgEunsV8/QV0HzjXM/ne2IEsbuceITdSKgcxPfvVW79JafdK0BipWwIDAQAB","version":"2i","optInDate":"2024-06-18T12:07:23.164+00:00","validDays":90}',
  );
});

// PaymentRequest Endpoints
app.get("/mpc-swish/api/v1/paymentrequest/viewSetting", (req, res) => {
  res.status(200).send(
    '{"data":{"privatePaymentRequest":true,"requireParentalConsent":false},"time":"2024-05-23T17:08:25.261+00:00"}',
  );
});

app.get("/mpc-swish/api/v3/paymentrequest/ecom/check/:num", (req, res) => {
  res.status(200).send(
    '{"result":"200","checkInfo":{"status":"NOT_FOUND","mechanism":"longpolling","clientTimeOut":25,"secondsUntilNextRequest":3}}',
  );
});


app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err); // Passes control to the error handling middleware
});

// Error handling middleware for 404 errors
app.use((err, req, res, next) => {
  if (err.status === 404) {
      res.status(200).send(
    '{"result":"200","message":null}',
  );
  } else {
    next(err); // Passes control to the default error handler for other errors
  }
});

app.listen(3000, () => {
  console.log("ReverseSwish is running on port 3000!");
});
;
