// components/LayoutContainer.js
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { debounce } from "lodash";
import NavBar from "../components/NavBar";
import navButtons from "../config/buttons";
import axios from "../config/axios";
import * as ENDPOINTS from "../config/endpoints";

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

const Layout = (props) => {
  const [suggestions, setSuggestions] = useState([]);
  const callSuggestionsApi = async (keyword) => {
    if (keyword) {
      const response = await axios.get(`${ENDPOINTS.SUGGESTIONS}?keyword=${keyword}`);
      const data = response?.data?.products.map((product) => {
        return {
          ...product,
          value: product.name,
        };
      });
      setSuggestions(data);
    } else setSuggestions([]);
  };
  const onSearch = useCallback(debounce(callSuggestionsApi, 300), []);
  return (
    <LayoutDiv>
      <Content>{props?.children}</Content>
      <NavBar navButtons={navButtons} onSearch={onSearch} suggestions={suggestions} />
    </LayoutDiv>
  );
};

export default Layout;
