import React from 'react';
import styled from 'styled-components';
import { faBuilding, faPlaneDeparture, faTrain, faTaxi, faCampground} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuWrapper = styled.nav`
  background-color: #3E20D9;
  color: white;
  width: 60px;
  text-align: left;
  padding: 10px 5px;
  border-radius: 20px 15px 15px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  .menu-icon {
    padding-top: 50px;
    height: 15px;
  }
`
const Brand = styled.div`
  ::before {
    content: "Good";
    display: block;
  }
  ::after {
    content: "Travel.";
    font-weight: bold;
   }
`


const Menu = (props) => (
  <MenuWrapper>
    <Brand/>
    <FontAwesomeIcon className="menu-icon" icon={faBuilding} />
    <FontAwesomeIcon className="menu-icon" icon={faPlaneDeparture} />
    <FontAwesomeIcon className="menu-icon" icon={faTrain} />
    <FontAwesomeIcon className="menu-icon" icon={faTaxi} />
    <FontAwesomeIcon className="menu-icon" icon={faCampground} />
  </MenuWrapper>
);

export default Menu;