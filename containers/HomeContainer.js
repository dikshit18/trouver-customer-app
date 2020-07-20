import React, { useState } from "react";
import { Row, Col } from "antd";
import Layout from "./LayoutContainer";
import Brandlist from "../components/Brandlist";
import BeverageCard from "../components/BeverageCard";
import axios from "../config/axios";
import * as ENDPOINTS from "../config/endpoints";

export default function HomeContainer(props) {
  const [products, setProducts] = useState(props?.products); // To be removed later.NOT A GOOD PRACTICE
  const onChangeFilter = async (value) => {
    if (!value.length) {
    }
    const searchFilter = value.join(",");
    const response = await axios.get(`${ENDPOINTS.SELECTION}?search=${searchFilter}`);
    const filteredProducts = response?.data?.products;
    setProducts(filteredProducts);
  };
  return (
    <Layout>
      <Row style={{ width: "100%" }}>
        <Col span={5}>
          <Brandlist onChangeFilter={onChangeFilter} />
        </Col>
        <Col span={19}>
          <BeverageCard products={products} />
        </Col>
      </Row>
    </Layout>
  );
}
