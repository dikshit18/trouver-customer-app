import React, { useEffect, useState } from "react";
import { Modal, Row, Col } from "antd";
import { fetchFromLocalStorage } from "../config/localStorage";
const products = [
  { name: "Kingfisher Ultra", cover: "", price: 200, quantity: 1 },
  { name: "Kingfisher Premium", cover: "", price: 500, quantity: 2 }
];
const ProductList = props => {
  console.log("askdhasajhd", props);
  const { name } = props.product;
  const { cover, discountedPrice, quantity } = props.product;
  return (
    <>
      <Row>
        <Col span={10}>
          <img
            src={
              "https://media-verticommnetwork1.netdna-ssl.com/wines/100-pipers-75cl-1503334-s237_e.jpg"
            }
          />
        </Col>
        <Col span={14}>
          <Row>
            <Col span={24}>{name}</Col>
            <Col span={24}>{discountedPrice}</Col>
            <Col span={24}>{quantity}</Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default props => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log("Hi");
    const items = fetchFromLocalStorage("cartItems");
    console.log("products", items);
    setProducts(items?.products);
  }, []);
  return (
    <Modal
      title="Your Cart"
      visible={props.visible}
      // onOk={props.handleOk}
      onCancel={props.handleCancel}
      okText="Order Now"
    >
      {products?.map(product => {
        console.log("sdfsjdf", product);
        return <ProductList product={product.meta} />;
      })}
      {/* <Row>
        <Col span={10}>
          <img src="https://media-verticommnetwork1.netdna-ssl.com/wines/100-pipers-75cl-1503334-s237_e.jpg" />
        </Col>
        <Col span={14}>
          <Row>
            <Col span={24}>{name}</Col>
            <Col span={24}>{price}</Col>
            <Col span={24}>{quantity}</Col>
          </Row>
        </Col>
      </Row> */}
    </Modal>
  );
};
