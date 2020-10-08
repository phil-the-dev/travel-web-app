import React from "react";
import styled from "styled-components";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StayWrapper = styled.a`
  display: flex;
  text-decoration: none;
  color: black;
  background-color: #e7f7f7;
  margin: 20px 0px;
  border-radius: 20px;
  padding: 8px;
`;

const StayImage = styled.div`
  overflow: hidden;
  width: 140px;
  height: 130px;
  border-radius: 20px;
  background-color: #654de1;

  img {
    height: 100%;
  }
`;

const StayText = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;

  .type {
    color: #8f9292;
  }

  .title {
    margin: 5px 0px;
    font-size: 25px;
    font-weight: bold;
  }

  .cost {
    flex-grow: 1;
  }

  .rating_star {
    color: #654de1;
    margin-right: 5px;
  }

  .rating {
  }

  .rating_amt {
    margin-left: 3px;
    color: #8f9292;
  }
`;

const truncate = (input) =>
  input.length > 30 ? `${input.substring(0, 27)}...` : input;
// 28 chars, chop title
const PopularStay = ({
  type,
  title,
  cost,
  rating,
  rating_amt,
  image = null,
}) => (
  <StayWrapper href="#" onClick={(e) => e.preventDefault()}>
    <StayImage>
      <img src={image} />
    </StayImage>
    <StayText>
      <span className="type">{type}</span>
      <span className="title">{truncate(title)}</span>
      <span className="cost">${cost} / night</span>
      <div>
        <FontAwesomeIcon className="rating_star" icon={faStar} />
        <span className="rating">{rating}</span>
        <span className="rating_amt">({rating_amt})</span>
      </div>
    </StayText>
  </StayWrapper>
);

export default PopularStay;
