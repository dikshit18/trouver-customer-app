import { Card, Checkbox } from "antd";
import styled from "styled-components";

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

export default props => {
  return (
    <Card
      style={{ width: 500 }}
      cover={
        <img
          alt="example"
          src="https://images-na.ssl-images-amazon.com/images/I/615zfRYaDcL._SL1280_.jpg"
        />
      }
    />
  );
};
