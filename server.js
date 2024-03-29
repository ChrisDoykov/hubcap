//Install express server
const express = require("express");
const path = require("path");
const sgMail = require("@sendgrid/mail");
const bodyParser = require("body-parser");
const sslRedirect = require("heroku-ssl-redirect");
const compression = require("compression");
const axios = require("axios");

const app = express();

// Default to SSL version
app.use(sslRedirect.default());

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
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: "newsletter@hubcap.eu",
    from: "	hubcapnewsletterfwd@gmail.com",
    subject: "New newsletter subscription!",
    text: `User' email is: ${req.body.email}`,
  };
  sgMail
    .send(msg)
    .then((response) => {
      return res.send({ status: 200, message: "Success" });
    })
    .catch((err) => {
      console.log(err);
      return res.send({ status: 500, message: "Failure" });
    });
});

app.post("/twitter", async (req, res) => {
  let firstTweetId = process.env.FIRST_TWEET_ID;
  let currentLatestId = null;
  let allTweets = [];
  let allMedia = [];
  let latestRes = null;
  const headers = {
    authorization: `Bearer ${process.env.TWITTER_API_BEARER_TOKEN}`,
  };

  if (!latestRes) {
    latestRes = await axios.get(
      `${process.env.TWITTER_API_URL}&since_id=${
        currentLatestId ? currentLatestId : firstTweetId
      }`,
      {
        headers,
      }
    );
    if (latestRes.data.data) {
      allTweets = [...allTweets, ...latestRes.data.data];
      if (latestRes.data.includes.media) {
        allMedia = [...allMedia, ...latestRes.data.includes.media];
      }
      currentLatestId = latestRes.data.data[0].id;
    }
  }

  while (latestRes && latestRes.data.data) {
    latestRes = await axios.get(
      `${process.env.TWITTER_API_URL}&since_id=${
        currentLatestId ? currentLatestId : firstTweetId
      }`,
      {
        headers,
      }
    );
    if (latestRes.data.data) {
      allTweets = [...allTweets, ...latestRes.data.data];
      if (latestRes.data.includes.media) {
        allMedia = [...allMedia, ...latestRes.data.includes.media];
      }
      currentLatestId = latestRes.data.data[0].id;
    }
  }

  let newsItems = [];
  try {
    allTweets.forEach((tweet) => {
      if (tweet.text.length > 10) {
        newsItems.push({
          id: tweet.id,
          description: tweet.text.replace(/amp;/g, ""),
          date: tweet.created_at,
          media_key: tweet.attachments ? tweet.attachments.media_keys[0] : null, // Only 1st image
        });
      }
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e.message });
  }

  newsItems = newsItems.map((item) => {
    if (item.date) {
      let thumbnail;

      if (item.media_key) {
        allMedia.forEach((mediaItem) => {
          if (mediaItem.media_key === item.media_key) {
            thumbnail = mediaItem.url;
          }
        });
      }

      return {
        title: "HUBCAP Twitter Post",
        summary: item.description,
        date: new Date(item.date),
        displayDate: item.date.split("T")[0].replace(/-/g, "."),
        type: "TWEET ITEM",
        url: `https://twitter.com/hubcap_eu/status/${item.id}`,
        modalTarget: item.id,
        buttonText: "See Twitter Post",
        thumbnail: thumbnail ? thumbnail : "",
        thumbnailAlt: "Image from HUBCAP's Twitter",
      };
    }
  });

  res.send({
    newsItems,
  });
});

app.post("/twitter/:untilId", async (req, res) => {
  let allTweets = [];
  let allMedia = [];
  const headers = {
    authorization: `Bearer ${process.env.TWITTER_API_BEARER_TOKEN}`,
  };

  let url;
  if (req.params.untilId === "latest") {
    url = process.env.TWITTER_API_URL;
  } else {
    url = `${process.env.TWITTER_API_URL}&until_id=${req.params.untilId}`;
  }

  const result = await axios.get(url, {
    headers,
  });

  if (result.data.data) {
    allTweets = [...result.data.data];
    if (result.data.includes.media) {
      allMedia = [...result.data.includes.media];
    }
  } else {
    return res.send({
      newsItems,
    });
  }

  let newsItems = [];
  try {
    allTweets.forEach((tweet) => {
      if (tweet.text.length > 10) {
        newsItems.push({
          id: tweet.id,
          description: tweet.text.replace(/amp;/g, ""),
          date: tweet.created_at,
          media_key: tweet.attachments ? tweet.attachments.media_keys[0] : null, // Only 1st image
        });
      }
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e.message });
  }

  newsItems = newsItems.map((item) => {
    if (item.date) {
      let thumbnail;

      if (item.media_key) {
        allMedia.forEach((mediaItem) => {
          if (mediaItem.media_key === item.media_key) {
            thumbnail = mediaItem.url;
          }
        });
      }

      return {
        id: item.id,
        title: "HUBCAP Twitter Post",
        summary: item.description,
        date: new Date(item.date),
        displayDate: item.date.split("T")[0].replace(/-/g, "."),
        type: "TWEET ITEM",
        url: `https://twitter.com/hubcap_eu/status/${item.id}`,
        modalTarget: item.id,
        buttonText: "See Twitter Post",
        thumbnail: thumbnail ? thumbnail : "",
        thumbnailAlt: "Image from HUBCAP's Twitter",
      };
    }
  });

  res.send({
    newsItems,
  });
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/hubcap/index.html"));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
