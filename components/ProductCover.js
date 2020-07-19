import React from "react";
import { Card, Checkbox } from "antd";
import styled from "styled-components";

const ProductCover = (props) => (
  <Card style={{ width: 500 }} cover={<img alt="example" src={props?.cover} />} />
);

export default ProductCover;
