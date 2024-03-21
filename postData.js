const axios = require("axios");
require("dotenv").config();

const postData = async (data) => {
  try {
    const amountWithoutCurrency = data.replace("₦", "").trim();
    const amountNumber = parseFloat(amountWithoutCurrency.replace(/,/g, ""));

    const response = await axios.post(
      `${process.env.POST_URL}/hisab/nisab/update`,
      { value: amountNumber }
    );

    console.log("Data posted successfully:", response.data);
  } catch (error) {
    console.log("error posting data:", error);
  }
};

module.exports = postData;
