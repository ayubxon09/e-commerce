import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/CartSlice";

const Card = ({ id, title, category, description, image, price, rating }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart({ id, title, image, price }));
  };

  return (
    <CardStyle>
      <div className="head">
        <img src={image} alt="product" />
      </div>
      <hr />
      <h1>{title}</h1>
      <h2>{category}</h2>
      <h4>{description}</h4>
      <div className="box">
        <button className="btn" onClick={handleAdd}>
          ${price}
        </button>
        <p>Rating: {rating}</p>
      </div>
    </CardStyle>
  );
};

const textAlign = "center";
const padding = "5px 0";

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 20px;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.2);
  margin: 20px;
  position: relative;
  border-radius: 20px;

  /* scroll bar styles */
  &::-webkit-scrollbar {
    background-color: #eee;
    width: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #000;
    border-radius: 4px;
  }
  /* scroll bar styles */

  /* image styles */
  .head {
    width: 100%;
    display: grid;
    place-items: center;
    margin-bottom: 10px;
  }

  img {
    width: 40%;
  }
  /* image styles */

  /* global styles for card */
  h1 {
    font-size: 1.2rem;
    text-align: ${textAlign};
    padding: ${padding};
  }
  h2 {
    font-size: 1rem;
    text-align: ${textAlign};
    padding: ${padding};
  }
  h4 {
    font-size: 0.8rem;
    text-align: ${textAlign};
    padding: ${padding};
  }
  /* global styles for card ended */

  /* box styles */
  .box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: auto;
  }
  /* box styles ended */

  /* btn styles */
  .btn {
    border: none;
    font-size: 1rem;
    color: #fff;
    background-color: #ff8c00;
    font-weight: bold;
    padding: 8px 20px;
    border-radius: 20px;
    transition: all 0.4s linear;
    cursor: pointer;

    &:hover {
      transform: translateY(-5px);
      background-color: #df7b00;
    }
    &:active {
      transform: translateY(5px);
      background-color: #ea8d1b;
    }
  }
  /* btn styles ended */

  /* media query */
  @media (min-width: 0) and (max-width: 699.9px) {
    width: 300px;
  }
  @media (min-width: 700px) and (max-width: 1000px) {
    width: 310px;
  }
`;

export default Card;
