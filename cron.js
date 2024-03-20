const cron = require("cron");
const scrapeWebsite = require("./scraper");
const postData = require("./poster");

cron.schedule("* * * * *", async () => {
  console.log("Running scraping and posting job...");
  const scrapedData = await scrapeWebsite();
  if (scrapedData) {
    await postData(scrapedData);
  }
});
