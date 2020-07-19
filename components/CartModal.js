import React, { useEffect, useState } from "react";
import { Modal, Row, Col, Label } from "antd";
import { fetchFromLocalStorage } from "../config/localStorage";
import styled from "styled-components";
const products = [
  { name: "Kingfisher Ultra", cover: "", price: 200, quantity: 1 },
  { name: "Kingfisher Premium", cover: "", price: 500, quantity: 2 }
];
const Image = styled.img`
  height: 40%;
`;
const ProductList = props => {
  const { name } = props.product;
  const { cover, discountedPrice, quantity } = props.product.meta;
  return (
    <>
      <Row>
        <Col span={10}>
          <Image
            src={
              "https://media-verticommnetwork1.netdna-ssl.com/wines/100-pipers-75cl-1503334-s237_e.jpg"
            }
          />
        </Col>
        <Col span={14}>
          <Row>
            <Col span={24}>
              <p>Name</p>
              {name}
            </Col>
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
    const items = fetchFromLocalStorage("cartItems");
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
        return <ProductList product={product} />;
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
