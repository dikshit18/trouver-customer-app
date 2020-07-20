import React from "react";
import styled from "styled-components";
import { Progress, Typography, Form, Input, Select, Button, Row, Divider, Col } from "antd";

const { Title, Text } = Typography;
const { Option } = Select;
const warehouse = [
  "Sonipat",
  "Panipat",
  "Karnal",
  "Kurukshetra",
  "Ambala",
  "Panchkula",
  "Chandigarh",
]; // To be driven by API later

const Cover = styled.img`
  height: 70%;,
  cursor:pointer
`;
const ProgressBar = styled(Progress)`
  margin-top: 10rem;
`;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const CheckoutDetails = (props) => {
  const { onSubmit, isOrdered } = props;
  return (
    <>
      <Row style={{ width: "100%" }}>
        <Title level={4} style={{ textAlign: "center" }}>
          {!isOrdered
            ? `Fill in your personal details`
            : `Thanks for shopping !
          `}
        </Title>
        {!isOrdered ? (
          <Form
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...layout}
            style={{ width: "80%", marginTop: "3rem" }}
            name="nest-messages"
            onFinish={onSubmit}
            validateMessages={validateMessages}>
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              label="Phone Number"
              rules={[
                {
                  required: true,
                },
              ]}>
              <Input />
            </Form.Item>

            <Form.Item name="addressLine1" label="Address Line 1" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="addressLine2" label="Address Line 2">
              <Input />
            </Form.Item>
            <Form.Item name="addressLine3" label="Address Line 3">
              <Input />
            </Form.Item>
            <Form.Item name="district" label="District" rules={[{ required: true }]}>
              <Select placeholder="Select your district" allowClear>
                {warehouse.map((item) => (
                  <Option key={Math.random()} value={item}>
                    {/* To be made API driven */}
                    {item}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Order now
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <>
            <Divider />
            <Row>
              <Col span={8}>
                <div style={{ display: "block" }}>
                  <Progress type="circle" percent={100} width={80} />
                  <Text>Order placed.</Text>
                </div>
              </Col>
              <Col span={16}>
                <Text>This platform is in beta. Payment gateway integration is in development</Text>
              </Col>
            </Row>
          </>
        )}
      </Row>
    </>
  );
};

export default CheckoutDetails;
