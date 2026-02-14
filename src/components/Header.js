import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { useSelector } from "react-redux"; 

const Header = ({ onOpen }) => { 
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <HeaderStyles>
      <div className="box">
        <h1>Welcome to our product shop</h1>
      </div>
      <div className="cart-container" onClick={onOpen}>
        <FontAwesomeIcon icon={faCartShopping} />
        {totalCount > 0 && <sup>{totalCount}</sup>}
      </div>
    </HeaderStyles>
  );
};

const HeaderStyles = styled.header`
  width: 90%;
  min-height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  .cart-container {
    font-size: 1.5rem;
    position: relative;
    cursor: pointer;

    sup {
      background-color: #ff8c00;
      color: white;
      border-radius: 50%;
      padding: 2px 6px;
      font-size: 0.7rem;
      font-weight: bold;
      margin-left: -5px;
      vertical-align: top;
    }
  }
`;

export default Header;