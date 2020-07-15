import React from "react";
import { Modal, Row, Col } from "antd";
const products = [
  { name: "Kingfisher Ultra", cover: "", price: 200, quantity: 1 },
  { name: "Kingfisher Premium", cover: "", price: 500, quantity: 2 }
];
const ProductList = ({ name, cover, price, quantity }) => {
  return (
    <>
      <Row>
        <Col span={10}>{"s3 image"}</Col>
        <Col span={14}>
          <Row>
            <Col span={24}>{name}</Col>
            <Col span={24}>{price}</Col>
            <Col span={24}>{quantity}</Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default props => {
  return (
    <Modal
      title="Your Cart"
      visible={props.visible}
      // onOk={props.handleOk}
      onCancel={props.handleCancel}
    >
      {/* {products?.map(product => {
        return <ProductList product={product} />;
      })} */}
      <p>Hey</p>
    </Modal>
  );
};
