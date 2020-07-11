import { Row, Col } from "antd";
import Layout from "../containers/LayoutContainer";
import ProductCover from "../components/ProductCover";
import ProductItem from "../components/ProductItem";

export default function ProductContainer(props) {
  return (
    <Layout>
      <Row style={{ width: "100%" }}>
        <Col span={10}>
          <ProductCover />
        </Col>
        <Col span={14}>
          <ProductItem />
        </Col>
      </Row>
    </Layout>
  );
}
