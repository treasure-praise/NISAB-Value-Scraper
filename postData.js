const axios = require("axios");
const { data } = require("cheerio/lib/api/attributes");

const postData = async (data) => {
  try {
    const response = await axios.post("endpoint", { data });
    console.log("Data posted successfully:", response, data);
  } catch (error) {
    console.log("error posting data:", error);
  }
};

module.exports = postData;
