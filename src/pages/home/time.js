import React from "react";
import arrow from "./imgs/arrow.png";
const addZero = num => {
  return num < 10 ? `0${num}` : num;
};

const timestampToTime = date => {
  return `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(
    date.getDate()
  )} ${addZero(date.getHours())}:${addZero(date.getMinutes())}`;
};

const Time = props => {
  const { date } = props;
  return (
    <div className="time">
      <div className="jump-btn">
        <img src={arrow} alt="" />
      </div>
      {timestampToTime(new Date(date))}
    </div>
  );
};

export default Time;
