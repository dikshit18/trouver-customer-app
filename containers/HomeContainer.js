import React from "react";
import { Row, Col } from "antd";
import Layout from "./LayoutContainer";
import Brandlist from "../components/Brandlist";
import BeverageCard from "../components/BeverageCard";

export default function HomeContainer(props) {
  const { products } = props;
  return (
    <Layout>
      <Row style={{ width: "100%" }}>
        <Col span={5}>
          <Brandlist />
        </Col>
        <Col span={19}>
          <BeverageCard products={products} />
        </Col>
      </Row>
    </Layout>
  );
}
