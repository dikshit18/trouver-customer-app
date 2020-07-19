import React from "react";
import axios from "../config/axios";
import * as ENDPOINTS from "../config/endpoints";
import HomeContainer from "../containers/HomeContainer";

const content = {
  marginTop: "100px",
};

export default function Home({ products }) {
  return (
    <div style={content}>
      <HomeContainer products={products} />
    </div>
  );
}

export async function getStaticProps() {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  let products = [];
  try {
    const response = await axios.get(ENDPOINTS.PRODUCTS);
    products = response.data.products;
  } catch (error) {}

  // Pass post data to the page via props
  return { props: { products } };
}
