import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Row, Col } from "antd";
import Layout from "./LayoutContainer";
import Brandlist from "../components/Brandlist";

const OrdersContainer = (props) => {
  const router = useRouter();
  useEffect(() => {
    // Check Auth here
    // console.log("router", window.location.origin + router.route);
    // window.location.href = `${window.location.origin}/auth?continueUrl=${
    //   window.location.origin + router.route
    // }`;
  }, []);
  return (
    <Layout>
      <Row style={{ width: "100%", display: "flex" }}>
        <Col span={5}>
          <Brandlist />
        </Col>
        <Col span={19}></Col>
      </Row>
    </Layout>
  );
};

export default OrdersContainer;
