import React from 'react';
import styled from 'styled-components';
import { faBuilding, faPlaneDeparture, faTrain, faTaxi, faCampground} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuWrapper = styled.nav`
  background-color: #3E20D9;
  color: white;
  width: 160px;
  text-align: left;
  padding: 10px 5px;
  border-radius: 20px 15px 15px 20px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  .menu-icon {
    padding-top: 50px;
    display: flex;
    justfy-content: center;
    width: 50px;
    height: 50px;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`
const Brand = styled.div`
  ::before {
    font-size: 24px;
    content: "Good";
    display: block;
  }
  ::after {
    font-size: 24px;
    content: "Travel.";
    font-weight: bold;
   }
`
const fontawesome_icons = [
  faBuilding,
  faPlaneDeparture,
  faTrain,
  faTaxi,
  faCampground
]

const Menu = (props) => (
  <MenuWrapper>
    <Brand/>
    {fontawesome_icons.map(icon => (
      <div className="menu-icon">
        <FontAwesomeIcon
          // viewBox="0 0 200 200"
          icon={icon} />
      </div>

    ))}
  </MenuWrapper>
);

export default Menu;