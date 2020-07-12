import { Card, Row, Col, Typography, Tooltip, Tag, Rate } from "antd";
import styled from "styled-components";
import Link from "next/link";
const { Meta } = Card;
const { Text } = Typography;
const products = {
  statusCode: 200,
  products: [
    {
      id: "2134567",
      name: "Kingfisher Ultra",
      meta: {
        alcoholPercent: "8",
        category: "Rum",
        inStock: "true",
        cover:
          "https://media-verticommnetwork1.netdna-ssl.com/wines/100-pipers-75cl-1503334-s237_e.jpg",
        quantity: "650ml",
        rating: "2",
        malt: "scotch",
        mrp: "250",
        discountedPrice: "200",
        rating: 3,
        offers: {
          offerId: "56477656789",
          description: "Buy 2 get 1 free."
        }
      }
    },
    {
      id: "2134568",
      name: "Kingfisher ultra ",
      meta: {
        alcoholPercent: "8",
        inStock: "true",
        category: "Beer",
        quantity: "650ml",
        cover: "S3ImageURL",
        rating: "2",
        malt: "scotch",
        mrp: "250",
        rating: 5,
        discountedPrice: "200",
        offers: {
          offerId: "56477656789",
          description: "Buy 2 get 1 free."
        }
      }
    },
    {
      id: "2134568",
      name: "Kingfisher ultra ",
      meta: {
        alcoholPercent: "8",
        category: "Beer",
        quantity: "650ml",
        cover: "S3ImageURL",
        inStock: "true",
        rating: "2",
        malt: "scotch",
        mrp: "250",
        rating: 4.5,
        discountedPrice: "200",
        offers: {
          offerId: "56477656789",
          description: "Buy 2 get 1 free."
        }
      }
    },
    {
      id: "2134568",
      name: "Kingfisher ultra ",
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
        discountedPrice: "200",
        offers: {
          offerId: "56477656789",
          description: "Buy 2 get 1 free."
        }
      }
    },
    {
      id: "2134568",
      name: "Kingfisher ultra",
      meta: {
        alcoholPercent: "8",
        category: "Beer",
        cover: "S3ImageURL",
        quantity: "650ml",
        inStock: "true",
        rating: "2",
        malt: "scotch",
        rating: 4.5,
        mrp: "250",
        discountedPrice: "200",
        offers: {
          offerId: "56477656789",
          description: "Buy 2 get 1 free."
        }
      }
    },
    {
      id: "2134568",
      name: "Kingfisher ultra ",
      meta: {
        alcoholPercent: "8",
        category: "Whiskey",
        quantity: "650ml",
        cover: "S3ImageURL",
        rating: "2",
        inStock: "true",
        malt: "scotch",
        mrp: "250",
        rating: 1,
        discountedPrice: "200",
        offers: {
          offerId: "56477656789",
          description: "Buy 2 get 1 free."
        }
      }
    }
  ]
};

export default function BeverageCard(props) {
  const { products } = props;
  console.log(products);
  return (
    <div style={{ display: "flex" }}>
      <Row gutter={[8, 16]}>
        {products.length &&
          products.map(product => {
            const {
              mrp,
              discountedPrice,
              alcoholPercent,
              rating,
              category,
              inStock,
              quantity,
              cover
            } = product.meta;
            return (
              <Col id={product.id} span={8}>
                <Link href={`/products/${product.id}`}>
                  <Card
                    style={{
                      margin: "0.5rem",
                      cursor: "pointer"
                    }}
                    cover={<img alt="example" src={cover} />}
                  >
                    <Row>
                      <Col span={16}>
                        <Meta title={product.name} />
                      </Col>
                      <Col span={4}>
                        <Text style={{ float: "right" }}>
                          <Tag color="red">{`${category}`}</Tag>
                        </Text>
                      </Col>
                      {product.meta.offers ? (
                        <Col span={4}>
                          <Tooltip
                            placement="top"
                            title={product.meta.offers.description}
                          >
                            <Tag color="#108ee9">OFFERS</Tag>
                          </Tooltip>
                        </Col>
                      ) : null}
                    </Row>
                    <Row style={{ marginTop: ".2rem" }}>
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
                    </Row>
                    <Rate allowHalf defaultValue={rating} disabled />
                  </Card>
                </Link>
              </Col>
            );
          })}
      </Row>
    </div>
  );
}
