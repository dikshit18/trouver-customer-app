import React from "react";
import styled from "styled-components";
import { Row, Col, Progress, Typography } from "antd";
import Link from "next/link";
import Layout from "./LayoutContainer";
const { Text } = Typography;

const Cover = styled.img`
  height: 70%;,
  cursor:pointer
`;
const ProgressBar = styled(Progress)`
  margin-top: 10rem;
`;
const orderId = "11e4f2fc-066d-468f-960a-835ee8728331";
const CheckoutContainer = (props) => {
  return (
    <Layout>
      <Row style={{ width: "100%" }}>
        <Col span={10}>
          <Link href="/products/fb076326-e878-4992-8a05-da328f016dd6">
            <Cover
              src="https://trouver-products.s3.ap-south-1.amazonaws.com/whiskey/100pipers.jpg"
              alt="order"
            />
          </Link>
        </Col>
        <Col span={14}>
          <Row>
            <Col span={6}>
              <ProgressBar type="circle" percent={100} />
            </Col>
            <Col span={18}>
              <Text type="danger">
                Payment gateway is currently in development phase. This is a beta release.
              </Text>
              <Text type="secondary">You order with {orderId} has been placed</Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default CheckoutContainer;
