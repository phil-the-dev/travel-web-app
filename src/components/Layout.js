import React from 'react';
import styled from 'styled-components';

const LayoutStyle = styled.div`
  display: flex;
  height: 100%;
  padding: 10px;
  background-color: #D1F0F2;
`

const Layout = (props) => (
  <LayoutStyle>
    {props.children}
  </LayoutStyle>
);

export default Layout;