import React from 'react';
import styled from 'styled-components';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBoxStyle = styled.nav`
  border-bottom: 1px solid black;
  width: 100%;

  form {
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .searchbox {
    border: none;
    padding: 20px 0px;
    font-size: 14px;
    flex-grow: 2;
  }

  button {
    background-color: transparent;
    border: none;
    height: 20px;

    svg {
      width: 100% !important;
      height: 100%;
    }
  }
`
const SearchBox = () => (
  <SearchBoxStyle>
    <form id="searchboxForm" onSubmit={(e)=>{console.log("searchin'");e.preventDefault();}}>
      <input 
        type="text" 
        className="searchbox" 
        placeholder="Destination, attraction, hotel, etc." />
        <button form="searchboxForm">
          <FontAwesomeIcon icon={faSearch} />
        </button>
    </form>
  </SearchBoxStyle>
)

export default SearchBox;