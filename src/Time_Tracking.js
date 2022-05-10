import React, { useState } from "react";
import "./Time_Tracking.css";
import data from "./data.js";

const Time_Tracking = () => {
  const [period, setPeriod] = useState("daily");
  return (
    <div className="time__container">
      <div className="time__container__box">
        <div className="time__profile">
          <div className="profile__item1">
            <div className="item1__image">
              <img src="/imagesTime/image-jeremy.png" alt="profile" />
            </div>
            <h6>Report for</h6>
            <h1>Jeremy Robson</h1>
          </div>
          <div className="profile__item2">
            <h5 onClick={() => setPeriod("daily")}>Daily</h5>
            <h5 onClick={() => setPeriod("weekly")}>Weekly</h5>
            <h5 onClick={() => setPeriod("monthly")}>Monthly</h5>
          </div>
        </div>
        <div className="time__card">
          <div className="time__card__item1">
            {data.map((item) => (
              <div className="time__card__item">
                <div
                  style={{
                    backgroundColor: ` ${item.bgColor}`,
                    borderRadius: "10px",
                  }}
                >
                  <img
                    style={{
                      marginLeft: "170px",
                      width: "60px",
                      height: "60px",
                    }}
                    src={item.image}
                    alt="image"
                  />
                </div>
                <div className="item__info">
                  <div className="info__top">
                    <h4>{item.title}</h4>
                    <img src="/imagesTime/icon-ellipsis.svg" alt="icon" />
                  </div>
                  <h1>{item.timeframes[period].current}hrs</h1>
                  <h6>Last Week - {item.timeframes[period].previous}hrs</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time_Tracking;
