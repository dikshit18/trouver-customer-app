import React from "react";
import CheckoutContainer from "../containers/CheckoutContainer";

const content = {
  marginTop: "100px",
};

const Order = (props) => {
  return (
    <div style={content}>
      <CheckoutContainer />
    </div>
  );
};
// export default withAuth(Order);
export default Order;
