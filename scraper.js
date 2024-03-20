const axios = require("axios");
const cheerio = require("cheerio");

const scrapeWebsite = async () => {
  try {
    const response = await axios.get("https://www.asqin.org");
    const $ = cheerio.load(response.data);
    const minimumZakahValue = $(
      'tr:contains("Minimum Zakkah") td:nth-child(2)'
    ).text();
    console.log("Minimum Zakah Value:", minimumZakahValue);
    return minimumZakahValue;
  } catch (error) {
    console.log("Error scraping data", error);
    return null;
  }
};

module.exports = scrapeWebsite;
