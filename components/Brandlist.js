import React from "react";
import { List, Typography, Divider, Checkbox } from "antd";
import styled from "styled-components";

const data = [
  <Checkbox>Beers</Checkbox>,
  <Checkbox>Whiskeys</Checkbox>,
  <Checkbox>Scotch</Checkbox>,
  <Checkbox>Rum</Checkbox>,
  <Checkbox>Vodka</Checkbox>,
  <Checkbox>Tequilla</Checkbox>,
  <Checkbox>Gin</Checkbox>,
];
const ListDiv = styled(List)`
  width: 100%;
`;
export default function Brandlist() {
  return (
    <ListDiv
      style={{
        marginTop: "0.5rem",
      }}
      size="large"
      header={<div>What's your choice?</div>}
      bordered
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  );
}
