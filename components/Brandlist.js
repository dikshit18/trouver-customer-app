import { Form, Select, InputNumber, Switch, Slider, Button } from "antd";

// Custom DatePicker that uses Day.js instead of Moment.js
import DatePicker from "../components/DatePicker";
import { List, Typography, Divider, Checkbox } from "antd";
import "antd/dist/antd.css";
const data = [<Checkbox> Racing car sprays burning fuel into crowd.</Checkbox>];

const content = {
  marginTop: "100px"
};

export default function Brandlist() {
  return (
    <div style={content}>
      <List
        size="large"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
    </div>
  );
}
