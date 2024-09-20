import Card from "../common/Card/Card";
import "./ProductList.css";
import ProductData from "./ProductData.js";

const ProductList = () => {
  return (
    <div className="product">
      <div className="container">
        <div className="product-wrapper">
          {ProductData.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
