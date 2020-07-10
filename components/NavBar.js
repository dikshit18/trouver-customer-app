// components/NavBar.js

import NavButton from "./NavButton";
import styled from "styled-components";
import { Input } from "antd";
const NavBarDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 5px 0;
  background: var(--secondary);
  font-family: var(--core-font);
  color: --var(on-primary-light);
  box-shadow: 0px -2px 15px rgba(50, 50, 50, 0.45);
  a {
    color: inherit;
    text-decoration: none;
  }
  .active {
    color: var(--highlight);
  }
`;

const NavBar = props => (
  <NavBarDiv>
    <Input
      placeholder="Hello, Search your favourite beverage !"
      style={{ width: "50%" }}
    />
    {props.navButtons.map(button => (
      <NavButton
        key={button.path}
        path={button.path}
        label={button.label}
        icon={button.icon}
      />
    ))}
  </NavBarDiv>
);

export default NavBar;
