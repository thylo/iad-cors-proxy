const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");

app.use(cors());

const fetchUrl = async (url, res) => {
  try {
    const response = await axios.get(url);
    return res.json(response.data);
  } catch (error) {
    res.status(500);
    if (error.response) {
      return res.json(error.response.status);
    } else if (error.request) {
      return res.json("no response");
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
      return res.json(error.message);
    }
  }
};

app.get("*", async function (req, res, next) {
  const url = req.url.slice(1);
  return fetchUrl(url, res);
});

app.listen(3000, function () {
  console.log("CORS-enabled web server listening on port 3000");
});
