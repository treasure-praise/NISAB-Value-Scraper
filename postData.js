const axios = require("axios");
require("dotenv").config();

const postData = async (data) => {
  try {
    // const response = await axios.post(`${process.env.POST_URL}`, { data });

    console.log("Data posted successfully:", data);
    // console.log("Data posted successfully:", response, data);
  } catch (error) {
    console.log("error posting data:", error);
  }
};

module.exports = postData;
