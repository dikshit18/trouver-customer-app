import {
  Card,
  Checkbox,
  Row,
  Col,
  Tooltip,
  Tag,
  Button,
  Divider,
  Rate,
  Typography,
  InputNumber
} from "antd";
import styled from "styled-components";
import {
  ShoppingCartOutlined,
  ShoppingOutlined,
  PicCenterOutlined,
  CarOutlined,
  ExclamationCircleOutlined
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
    inStock,
    quantity
  } = product.meta;
  const { addToCart } = props;
  return (
    <>
      <Row>
        <Col span={16}>
          <StyledHeader level={2}>{product.name}</StyledHeader>
          <Row>
            <Col span={8}>
              <Rate allowHalf defaultValue={rating} disabled />
            </Col>
            <Col span={16}>
              <Tooltip placement="top" title={product.meta.offers.description}>
                <Tag color="#108ee9" style={{ float: "right" }}>
                  OFFERS
                </Tag>
              </Tooltip>
              <Text style={{ float: "right" }}>
                <Tag color="red">{`${category}`}</Tag>
              </Text>
              <Text>
                <Tag
                  color="geekblue"
                  style={{ float: "right" }}
                >{`${alcoholPercent}% v/v`}</Tag>
              </Text>

              <Text style={{ float: "right" }}>
                <Tag color="geekblue">{`${quantity}`}</Tag>
              </Text>
            </Col>
          </Row>
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
            <Col style={{ marginBlock: "5rem" }}>
              <Text>You save:</Text>
            </Col>
            <Col>
              <Text
                style={{
                  marginLeft: "0.2rem",
                  //fontSize: "1.5rem",
                  color: "#B6533C"
                }}
              >
                {`₹${+mrp - +discountedPrice}`}
              </Text>
            </Col>
          </Row>
          <Row>
            <Col span={16}>
              <InputNumber
                type="number"
                min={1}
                max={10}
                placeholder="Enter the quantity"
                style={{ width: "60%", marginTop: "1rem" }}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: "2rem" }}>
            <Col span={10}>
              <Button type="primary" style={{ width: "90%" }}>
                <ShoppingOutlined />
                Buy now
              </Button>
            </Col>
            <Col span={10}>
              <Button
                type="primary"
                style={{ width: "90%" }}
                onClick={() => addToCart(product)}
              >
                <ShoppingCartOutlined />
                Add to cart
              </Button>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col>
              <Text
                style={{
                  marginLeft: "0.2rem",
                  fontSize: "1.5rem",
                  color: "#B6533C"
                }}
              >
                {`${inStock ? "In Stock." : "Out of Stock."}`}
              </Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Text
                style={{
                  marginLeft: "0.2rem"
                }}
              >
                Delivered By:
              </Text>
            </Col>
            <Col>
              <Text
                strong
                style={{
                  marginLeft: "0.2rem"
                }}
              >
                Friday,10 July
              </Text>
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
