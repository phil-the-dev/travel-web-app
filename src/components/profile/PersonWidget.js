import React from "react";
import styled from "styled-components";
import profile_pic from "./profile_pic.png";

const ProfilePicture = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }
`;

const ProfileText = styled.div`
  margin-left: 10px;
`;

const ProfileName = styled.div`
  display: inline-block;
  margin-left: 5px;
  font-weight: bold;
`;

const WidgetWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.75);
  width: max-content;
  padding: 7px 5px;
  border-radius: 20px;
`;

const PersonWidget = (props) => (
  <WidgetWrapper>
    <ProfilePicture>
      <img src={profile_pic} alt="" />
    </ProfilePicture>
    <ProfileText>
      Hello,
      <ProfileName>Jay</ProfileName>
    </ProfileText>
  </WidgetWrapper>
);

export default PersonWidget;
