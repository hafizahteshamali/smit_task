import { useParams } from "react-router";
import ProductData from "../Product/ProductData";
import "./ProductDetails.css";
import "./Responsive.css";

const ProductDetails = () => {
  const { id } = useParams();

  const singleData = ProductData.find((item) => {
    return item.id == id;
  });

  const { name, profession, description, background, profileImage, buttonDetailText } =
    singleData;

  return (
    <div
      className="DetailBox_Wrapper"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="box">
        <div className="img-wrap">
        <img src={profileImage == null ? "../assets/images/profile-not-found.png" : profileImage} alt="" />
        </div>
        <div className="text-wrapper">
        <h2>{name}</h2>
        <h5>{profession}</h5>
        <p>{description}</p>
        <a href="">{buttonDetailText}</a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
