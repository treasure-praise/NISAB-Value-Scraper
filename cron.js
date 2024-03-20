const cron = require("node-cron");
const scrapeWebsite = require("./scraper");
const postData = require("./postData");

cron.schedule("* * * * *", async () => {
  console.log("Running scraping and posting job...");
  const scrapedData = await scrapeWebsite();
  if (scrapedData) {
    await postData(scrapedData);
  }
});
