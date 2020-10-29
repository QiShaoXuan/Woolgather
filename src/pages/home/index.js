import React, { useEffect, useState } from "react";
import getArticleList from "@Methods/getArticleList";
import Time from "./time";
import Content from "./content";
import "./style.scss";

const Homepage = () => {
  const [articleList, setArticleList] = useState([]);
  useEffect(() => {
    getArticleList().then(res => {
      console.log("res", res);
      setArticleList(res.data);
    });
  },[]);
  return (
    <div className="homepage">
      <div className="container">
        <div className="wrapper">
          {articleList.map(v => {
            return (
              <div className="timeline-item" key={v.id}>
                <div
                  className="timeline-item-wrapper"
                  onClick={() => {
                    console.log("will jump", v.id);
                  }}
                >
                  <Time date={v.created_at} />
                  <Content content={v.text} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
