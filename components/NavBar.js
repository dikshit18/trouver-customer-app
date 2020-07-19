// components/NavBar.js
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Input, AutoComplete } from "antd";
import NavButton from "./NavButton";
import { fetchFromLocalStorage } from "../config/localStorage";

const NavBarDiv = styled.div`
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  align-items: center;
  height: 80px;
  width: 100%;
  padding: 5px 0;
  background: var(--primary);
  font-family: var(--core-font);
  box-shadow: 0px -2px 15px rgba(50, 50, 50, 0.45);
  a {
    color: inherit;
    text-decoration: none;
  }
  .active {
    color: var(--highlight);
  }
`;
const Image = styled.img`
  display: block;
  margin-left: 2rem;
  margin-bottom: 1rem;
`;
const NavBar = (props) => {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    const updateCartCount = () => {
      const items = fetchFromLocalStorage("cartItems");
      setCartItemsCount(items?.products.length);
    };
    document.addEventListener(
      "itemInserted",
      () => {
        updateCartCount();
      },
      false
    );
    updateCartCount();
  }, []);

  return (
    <NavBarDiv>
      <Image src="/Trouver-logo.png" />
      <AutoComplete
        dropdownMatchSelectWidth={252}
        style={{
          width: "50%",
        }}
        key="productId"
        options={props?.suggestions}
        // onSelect={onSelect}
        onSearch={props?.onSearch}>
        <Input.Search size="large" placeholder="Search your favourite beverage !" enterButton />
      </AutoComplete>

      {props?.navButtons.map((button) => (
        <NavButton
          key={button.path}
          path={button.path}
          label={button.label}
          icon={button.icon}
          badge={cartItemsCount}
        />
      ))}
    </NavBarDiv>
  );
};

export default NavBar;
