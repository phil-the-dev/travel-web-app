import React from 'react';
import SearchBox from './SearchBox';
import FindYourStay from './FindYourStay';
import PopularStays from './PopularStays';

const LeftSide = (props) => (
  <div style={{width: "45%", padding: "25px 20px"}}>
    <SearchBox />
    <FindYourStay />
    <PopularStays />
  </div>
);

export default LeftSide;