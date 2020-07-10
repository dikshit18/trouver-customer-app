// components/LayoutContainer.js

import NavBar from "../components/NavBar";
import navButtons from "../config/buttons";
import styled from "styled-components";

const Layout = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--secondary);
  color: var(--on-secondary);
  font-family: var(--core-font);
  a {
    color: inherit;
  }
`;

const LayoutContainer = props => {
  const appTitle = `> TROUVER`;

  return (
    <Layout>
      <Content>{props.children}</Content>
      <NavBar navButtons={navButtons} />
    </Layout>
  );
};

export default LayoutContainer;
