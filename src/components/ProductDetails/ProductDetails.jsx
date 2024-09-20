import { useParams } from "react-router";
import ProductData from "../Product/ProductData";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();

  const singleData = ProductData.find((item) => {
    return item.id == id;
  });

  const { name, profession, description, background, profileImage } =
    singleData;

  return (
    <div
      className="DetailBox_Wrapper"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="box">
        <img src={profileImage} alt="" />
        <h2>{name}</h2>
        <h5>{profession}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
