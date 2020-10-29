import axios from "axios";

const { gikiToken, userName } = require("@/private-config.js");

const getArticleList = async () => {
  const res = await axios.get("https://giki.app/api/talks/query?user_name=qi", {
    name: userName,
    headers: { authorization: `Basic ${gikiToken}` }
  });

  return res.data;
};

export default getArticleList;
