import React from "react";
import { Row, Col } from "antd";
import ProductCover from "../components/ProductCover";
import ProductItem from "../components/ProductItem";
import Layout from "../containers/LayoutContainer";
import { addToLocalStorage, fetchFromLocalStorage } from "../config/localStorage";

export default function ProductContainer(props) {
  const addToCartHandler = (item) => {
    const items = fetchFromLocalStorage("cartItems");
    if (items) {
      items.products.push(item);
    }
    addToLocalStorage(
      "cartItems",
      JSON.stringify({
        products: [items || item],
      })
    );
  };
  return (
    <Layout>
      <Row style={{ width: "100%" }}>
        <Col span={10}>
          <ProductCover cover={props?.product?.meta?.cover} />
        </Col>
        <Col span={14}>
          <ProductItem addToCart={addToCartHandler} product={props?.product} />
        </Col>
      </Row>
    </Layout>
  );
}
