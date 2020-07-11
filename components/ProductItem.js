import {
  Card,
  Checkbox,
  Row,
  Col,
  Input,
  Button,
  Divider,
  Rate,
  Typography
} from "antd";
import styled from "styled-components";
import {
  ShoppingCartOutlined,
  ShoppingOutlined,
  PicCenterOutlined
} from "@ant-design/icons";
const { Title, Text } = Typography;
const data = [
  <Checkbox>Beers</Checkbox>,
  <Checkbox>Whiskeys</Checkbox>,
  <Checkbox>Scotch</Checkbox>,
  <Checkbox>Rum</Checkbox>,
  <Checkbox>Vodka</Checkbox>,
  <Checkbox>Tequilla</Checkbox>,
  <Checkbox>Gin</Checkbox>
];
const ListDiv = styled(Card)`
  width: 100%;
`;
const product = {
  id: "2134568",
  name: "Kingfisher Ultra ",
  meta: {
    alcoholPercent: "8",
    category: "Beer",
    cover: "S3ImageURL",
    quantity: "650ml",
    inStock: "true",
    rating: "2",
    malt: "scotch",
    rating: 2.5,
    mrp: "250",
    returnable: false,
    trouverDelivered: true,
    noContactDelivery: true,
    discountedPrice: "200",
    offers: {
      offerId: "56477656789",
      description: "Buy 2 get 1 free."
    },
    description: []
  },
  seller: {
    name: "ABC",
    id: "123213"
  }
};
const StyledHeader = styled(Title)`
  margin-top: 5rem;
`;
export default props => {
  const {
    rating,
    discountedPrice,
    mrp,
    price,
    alcoholPercent,
    category,
    description,
    inStock
  } = product.meta;
  return (
    <>
      <Row>
        <Col span={16}>
          <StyledHeader level={2}>{product.name}</StyledHeader>
          <Rate allowHalf defaultValue={rating} disabled />
          <Divider />
          <Row>
            <Col>
              <Text>M.R.P: </Text>
            </Col>
            <Col>
              <Text delete style={{ marginLeft: "0.2rem" }}>
                {`₹${mrp}` || null}
              </Text>
            </Col>
          </Row>
          <Row>
            <Col style={{ marginBlock: "5rem" }}>
              <Text>Price:</Text>
            </Col>
            <Col>
              <Text
                style={{
                  marginLeft: "0.2rem",
                  //fontSize: "1.5rem",
                  color: "#B6533C"
                }}
              >
                {`₹${discountedPrice}`}
              </Text>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Text>
                <PicCenterOutlined style={{ fontSize: "6rem" }} />
              </Text>
              <Text>No contact delivery</Text>
            </Col>
          </Row>
          <Row>
            <Col span={10}>
              <Button type="primary" style={{ width: "90%" }}>
                <ShoppingOutlined />
                Buy now
              </Button>
            </Col>
            <Col span={10}>
              <Button type="primary" style={{ width: "90%" }}>
                <ShoppingCartOutlined />
                Add to cart
              </Button>
            </Col>
          </Row>
          {/* <Row style={{ marginTop: ".2rem" }}>
            <Col span={16}>
              <Text>₹{discountedPrice}</Text>
              <Text delete style={{ marginLeft: "0.2rem" }}>
                {`₹${mrp}` || null}
              </Text>
            </Col>
            <Col span={4}>
              <Text style={{ float: "right" }}>
                <Tag color="geekblue">{`${quantity}`}</Tag>
              </Text>
            </Col>
            <Col span={4} style={{ float: "right" }}>
              <Text>
                <Tag color="geekblue">{`${alcoholPercent}% v/v`}</Tag>
              </Text>
            </Col>
          </Row>
          <Row style={{ marginTop: ".2rem" }}>
            <Col span={24}>
              <Text type="warning">
                {inStock ? "In stock" : "Out of stock"}
              </Text>
            </Col>
          </Row> */}
        </Col>
      </Row>
    </>
  );
};
