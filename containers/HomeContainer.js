import { Row, Col } from "antd";
import Layout from "./LayoutContainer";
import Brandlist from "../components/Brandlist";

export default function HomeContainer() {
  return (
    <Layout>
      <Row style={{ width: "100%" }}>
        <Col span={8}>
          <Brandlist />
        </Col>
        <Col span={16}>Hello</Col>
      </Row>
    </Layout>
  );
}
