import React from "react";
import { Card, Row, Col, Typography, Tooltip, Tag, Rate } from "antd";
import Link from "next/link";
const { Meta } = Card;
const { Text } = Typography;

export default function BeverageCard(props) {
  const { products } = props;
  return (
    <div style={{ display: "flex" }}>
      <Row gutter={[8, 16]}>
        {products.length &&
          products.map((product) => {
            const {
              mrp,
              discountedPrice,
              alcoholPercent,
              rating,
              category,
              inStock,
              volume,
              cover,
            } = product.meta;
            return (
              <Col id={product.productId} key={product.productId} span={8}>
                <Link href={`/products/${product.productId}`}>
                  <Card
                    style={{
                      margin: "0.5rem",
                      cursor: "pointer",
                    }}
                    cover={<img alt="example" src={cover} />}>
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
                          <Tooltip placement="top" title={product.meta.offers.description}>
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
                          <Tag color="geekblue">{`${volume}`}</Tag>
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
                        <Text type="warning">{inStock ? "In stock" : "Out of stock"}</Text>
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
