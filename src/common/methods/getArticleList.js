import axios from "axios";

const { gikiToken, userName } = require("./private-config.js");

const getArticleList = () => {
  return axios.get("https://giki.app/api/talks/query?user_name=qi", {
    name: userName,
    headers: { authorization: gikiToken }
  });
};

export default getArticleList;
