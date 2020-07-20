import React from "react";
import { Row, Checkbox, Divider } from "antd";

const data = ["Beer", "Whiskey", "Scotch", "Rum", "Vodka", "Tequilla", "Gin"];

const Brandlist = (props) => {
  return (
    <>
      <Checkbox.Group onChange={props?.onChangeFilter}>
        {data.map((item, index) => {
          return (
            <Row key={index}>
              <Checkbox
                value={item}
                style={{ marginTop: "1rem", marginLeft: "1.5rem", width: "100%" }}>
                {item}
              </Checkbox>
              <Divider style={{ width: "100%" }} />
            </Row>
          );
        })}
      </Checkbox.Group>
    </>
  );
};

export default Brandlist;
