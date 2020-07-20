import React, { useState } from "react";
import { Row, Col } from "antd";
import Layout from "./LayoutContainer";
import CheckoutBanner from "../components/CheckoutBanner";
import CheckoutDetails from "../components/CheckoutDetails";

const CheckoutContainer = (props) => {
  const [isOrdered, setIsOrdered] = useState(false);
  const onFormSubmission = (values) => {
    console.log("Values are...", values);
    setIsOrdered(true);
  };
  return (
    <Layout>
      <Row>
        <Col span={14}>
          <CheckoutBanner />
        </Col>
        <Col span={10}>
          <CheckoutDetails onSubmit={onFormSubmission} isOrdered={isOrdered} />
        </Col>
      </Row>
    </Layout>
  );
};

export default CheckoutContainer;
