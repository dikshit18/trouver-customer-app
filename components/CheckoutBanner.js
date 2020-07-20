import React from "react";
import styled from "styled-components";
import { Typography, Divider, Descriptions, Row, Col } from "antd";
import Link from "next/link";

const { Title } = Typography;

const Cover = styled.img`
  height: 40%;,
  cursor:pointer
`;
const CheckoutBanner = (props) => {
  return (
    <>
      <Row>
        <Col span={12}>
          {/* <Descriptions title="User Info">
            <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
          </Descriptions> */}
          <Link href="/products/fb076326-e878-4992-8a05-da328f016dd6">
            <Cover
              style={{ cursor: "pointer" }}
              src="https://trouver-products.s3.ap-south-1.amazonaws.com/whiskey/100pipers.jpg"
              alt="order"
            />
          </Link>

          <Divider />
        </Col>
        <Col span={12}>
          <Title level={4} style={{ textAlign: "center" }}>
            Kingfisher 600ml
          </Title>
        </Col>
      </Row>
    </>
  );
};

export default CheckoutBanner;
