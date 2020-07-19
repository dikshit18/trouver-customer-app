import { Row, Col } from "antd";
import Layout from "../containers/LayoutContainer";
import ProductCover from "../components/ProductCover";
import ProductItem from "../components/ProductItem";
import {
  addToLocalStorage,
  fetchFromLocalStorage
} from "../config/localStorage";

export default function ProductContainer(props) {
  const addToCartHandler = item => {
    const items = fetchFromLocalStorage("cartItems");
    if (items) {
      items.products.push(item);
    }
    addToLocalStorage(
      "cartItems",
      JSON.stringify({
        products: [items || item]
      })
    );
  };
  return (
    <Layout>
      <Row style={{ width: "100%" }}>
        <Col span={10}>
          <ProductCover />
        </Col>
        <Col span={14}>
          <ProductItem addToCart={addToCartHandler} />
        </Col>
      </Row>
    </Layout>
  );
}
