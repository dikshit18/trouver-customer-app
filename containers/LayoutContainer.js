// components/LayoutContainer.js

import NavBar from "../components/NavBar";
import navButtons from "../config/buttons";
import styled from "styled-components";

const LayoutDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  width: 95%;
  background: var(--primary);
  color: var(--on-secondary);
  margin: auto;
  font-family: var(--core-font);
  a {
    color: inherit;
  }
`;

const Layout = props => {
  const appTitle = `> TROUVER`;

  return (
    <LayoutDiv>
      <Content>{props.children}</Content>
      <NavBar navButtons={navButtons} />
    </LayoutDiv>
  );
};

export default Layout;
