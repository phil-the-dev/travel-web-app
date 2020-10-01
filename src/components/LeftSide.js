import React from 'react';
import SearchBox from './SearchBox';
import FindYourStay from './FindYourStay';

const LeftSide = (props) => (
  <div style={{width: "45%", padding: "25px 20px"}}>
    <SearchBox />
    <FindYourStay />
  </div>
);

export default LeftSide;