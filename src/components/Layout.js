import React from 'react';
import styled from 'styled-components';

const LayoutStyle = styled.div`
  display: flex;
  height: 100%;
  margin: 10px;
`

const Layout = (props) => (
  <LayoutStyle>
    {props.children}
  </LayoutStyle>
);

export default Layout;