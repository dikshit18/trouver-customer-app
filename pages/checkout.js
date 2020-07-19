import React from "react";
import OrdersContainer from "../containers/OrdersContainer";
import withAuth from "./withAuth";

const content = {
  marginTop: "100px",
};

const Order = (props) => {
  return (
    <div style={content}>
      <OrdersContainer />
    </div>
  );
};
export default withAuth(Order);
