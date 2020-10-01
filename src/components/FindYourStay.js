import React from 'react';
import styled from 'styled-components';
import { faSearch, faMapMarkerAlt, faCalendarAlt, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.form`
  display: flex;
  width: 100%;
  border-radius: 30px;
  background-color: white;
  margin-top: 20px;

  div {
    flex-grow: 1;
  }
  h2 {
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
  }
  .main {
    padding: 20px;
  }
`

const IconWrapper = styled.div`
  background-color: #EBE8FB;
  color: #654DE1;
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
`

const FormElement = styled.fieldset`
  border: none;
  display: flex;
  border-bottom: 1px solid #F0F0F0;
  padding: 20px 0;
  align-items: center;

  input {
    border: none;
    margin: 0 15px;
    flex-grow: 1;
    padding: 0;
    height: 30px;
    font-size: 14px;
  }
`

const SubmitButton = styled.button`
  background-color: #654DE1;
  color: white;
  border: none;
  border-radius: 30px;
  width: 80px;
  
  svg {
    height: 20px;
    width: 20px !important;
  }
`

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
        <IconWrapper>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </IconWrapper>
        <div style={{
          display: 'flex'
        }}>
          <input type="text" placeholder="Check-in"  style={{
            borderRight: '1px solid #F0F0F0'
          }} />
          <input type="text" placeholder="Check-out" />
        </div>
      </FormElement>
      {/* Guest Amount */}
      <FormElement style={{border: 'none', paddingBottom: '0'}}>
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
)

export default FindYourStay;