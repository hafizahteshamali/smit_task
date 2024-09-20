import "./Card.css";
import { useNavigate } from "react-router";

const Card = ({ data }) => {
  const {
    name,
    profession,
    description,
    background,
    profileImage,
    profileLink,
    buttonText,
    id,
  } = data;

  const navigator = useNavigate();
  return (
    <div className="card">
      <div
        className="img-wrapper"
        style={{ backgroundImage: `url(${background})` }}
      >
        <img className="dp" src={profileImage} alt="" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6>{profession}</h6>
        <p className="card-text">{description.slice(0, 40)}...</p>
        <a
          href=""
          onClick={() => navigator(`/product/${id}`)}
          className="btn btn-primary card_btn"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Card;
