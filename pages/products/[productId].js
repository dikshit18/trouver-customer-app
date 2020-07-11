import ProductContainer from "../../containers/ProductContainer";

const content = {
  marginTop: "100px"
};

export default function Product() {
  return (
    <div style={content}>
      <ProductContainer />
    </div>
  );
}
