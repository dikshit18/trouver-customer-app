import { List, Typography, Divider, Checkbox } from "antd";
import styled from "styled-components";

const data = [
  <Checkbox>Kingfisher</Checkbox>,
  <Checkbox>Kingfisher</Checkbox>,
  <Checkbox>Budwweiser</Checkbox>,
  <Checkbox>Miller</Checkbox>,
  <Checkbox>Carlsberg</Checkbox>,
  <Checkbox>Stella Artois</Checkbox>,
  <Checkbox>Corona</Checkbox>,
  <Checkbox>Godfather</Checkbox>,
  <Checkbox>Thunderbolt</Checkbox>
];
const ListDiv = styled(List)`
  width: 90%;
  margin: auto;
`;
export default function Brandlist() {
  return (
    <ListDiv
      size="large"
      header={<div>What's your choice?</div>}
      bordered
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
  );
}
