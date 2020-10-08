import React from "react";
import styled from "styled-components";
import PopularStay from "./PopularStay";
import kantiang from "../assets/stays/kantiangviewresort.jpg";

const stay_obj = (type, title, cost, rating, rating_amt, image = null) => ({
  type,
  title,
  cost,
  rating,
  rating_amt,
  image,
});

const PopularStays = () => {
  const stays = [
    // prettier-ignore
    stay_obj('Entire bunglow in bay area', 'Kantiang View Resort', 25, 4.55, 60, kantiang),
    stay_obj('Entire house in Koa Lanta Yai', 'Ocean front villa with private beach', 60, 4.55, 60),
    stay_obj('Entire bunglow in bay area', 'Petra - Gloriyo Hillside Villa', 25, 4.55, 60)
  ]

  return (
    <div>
      <h2 style={{ fontSize: "30px", marginBottom: "5px", fontWeight: "600" }}>
        Popular Stays
      </h2>
      <h3 style={{ fontSize: "16px", marginTop: "5px", fontWeight: "normal" }}>
        In Krabi Thailand
      </h3>
      {stays.map((stay) => (
        <PopularStay {...stay} />
      ))}
    </div>
  );
};

export default PopularStays;
