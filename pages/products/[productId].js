import React from "react";
import ProductContainer from "../../containers/ProductContainer";
import axios from "../../config/axios";
import * as ENDPOINTS from "../../config/endpoints";

const content = {
  marginTop: "100px",
};

const Product = (props) => {
  console.log("Params are...", props);

  return (
    <div style={content}>
      <ProductContainer product={props?.product} />
    </div>
  );
};
export async function getServerSideProps({ params }) {
  const { productId } = params;
  const response = await axios.get(`${ENDPOINTS.PRODUCTS}/${productId}`);
  const { products } = response?.data;
  return {
    props: {
      product: products[0],
    },
  };
}
export default Product;
