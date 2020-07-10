import { Form, Select, InputNumber, Switch, Slider, Button } from "antd";

import Link from "next/link";
import HomeContainer from "../containers/HomeContainer";

const FormItem = Form.Item;
const Option = Select.Option;

const content = {
  marginTop: "100px"
};

export default function Home() {
  return (
    <div style={content}>
      <HomeContainer />
    </div>
  );
}
