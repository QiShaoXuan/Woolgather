import React, { useEffect } from "react";
import getArticleList from "../../common/methods/getArticleList";
import "./style.scss";

const Homepage = () => {
  useEffect(() => {
    getArticleList().then(res => {
      console.log("res", res);
    });
  });
  return (
    <div className="homepage">
      <div className="container"></div>
    </div>
  );
};

export default Homepage;
