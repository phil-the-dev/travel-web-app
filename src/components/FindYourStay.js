import React from "react";
import styled from "styled-components";
import {
  faSearch,
  faMapMarkerAlt,
  faCalendarAlt,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.form`
  display: flex;
  width: 100%;
  border-radius: 30px;
  background-color: white;
  margin-top: 20px;
  justify-content: space-between;

  h2 {
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
  }
  .main {
    padding: 20px 0;
    width: 80%;
    display: flex;
    flex-direction: column;

    > * {
      margin: 0 20px;
    }
  }
`;

const IconWrapper = styled.div`
  background-color: #ebe8fb;
  color: #654de1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  min-width: 50px;
  max-width: 50px;
  height: 50px;

  svg {
    width: 40% !important;
    height: 40%;
  }
`;

const FormElement = styled.fieldset`
  border: none;
  display: flex;
  border-bottom: 1px solid #f0f0f0;
  padding: 20px 0;
  align-items: center;

  input {
    border: none;
    padding: 0 15px;
    font-size: 14px;
    min-width: 0px;
    width: 100%;
    height: 30px;
  }
`;

const SubmitButton = styled.button`
  background-color: #654de1;
  color: white;
  border: none;
  border-radius: 30px;
  width: 20%;
  max-width: 80px;

  svg {
    height: 20px;
    width: 20px !important;
  }
`;

const FindYourStay = () => (
  <Wrapper id="stay_search">
    <div class="main">
      <h2>Find Your Stay</h2>
      {/* Location */}
      <FormElement>
        <IconWrapper>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </IconWrapper>
        <input type="text" placeholder="Location" />
      </FormElement>
      {/* Check in/out */}
      <FormElement>
        <IconWrapper style={{ flexGrow: "1" }}>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </IconWrapper>
        <input
          type="text"
          placeholder="Check-in"
          style={{
            borderRight: "1px solid #F0F0F0",
          }}
        />
        <input type="text" placeholder="Check-out" style={{}} />
      </FormElement>
      {/* Guest Amount */}
      <FormElement style={{ border: "none", paddingBottom: "0" }}>
        <IconWrapper>
          <FontAwesomeIcon icon={faUserFriends} />
        </IconWrapper>
        <input type="text" placeholder="1 Adult, 0 Children, 1 Room" />
      </FormElement>
    </div>
    <SubmitButton form="stay_search">
      <FontAwesomeIcon icon={faSearch} />
    </SubmitButton>
  </Wrapper>
);

export default FindYourStay;
