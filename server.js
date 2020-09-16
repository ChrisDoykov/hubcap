//Install express server
const express = require("express");
const path = require("path");
const sgMail = require("@sendgrid/mail");
const bodyParser = require("body-parser");
const sslRedirect = require("heroku-ssl-redirect");
const compression = require("compression");

const app = express();

// Default to SSL version
app.use(sslRedirect());

// Compress requests for faster loading
app.use(compression());

// Pre-render
app.use(require("prerender-node"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/hubcap"));

app.post("/subscribe", (req, res) => {
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: req.body.email,
    // from: "", // To be filled in with Hubcap official email
    subject: "Thanks for your interest in HUBCAP!",
    text: "", // Add content to be sent to users
  };
  sgMail.send(msg);

  return res.send({ message: "Success" });
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
