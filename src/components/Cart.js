import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "./store/CartSlice";

const Cart = ({ onClose }) => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const checkoutBtn = () => {
    alert("Buyurtmangiz qabul qilindi");
  };

  return (
    <CartOverlay onClick={onClose}>
      {" "}
      <CartContent onClick={(e) => e.stopPropagation()}>
        {" "}
        <div className="cart-header">
          <h2>Savatingiz</h2>
          <button className="close-btn" onClick={onClose}>
            X
          </button>
        </div>
        <div className="cart-items">
          {items.length === 0 ? (
            <p className="empty-msg">Savat hozircha bo'sh</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="item">
                <img src={item.image} alt={item.title} />
                <div className="item-info">
                  <h4>{item.title.slice(0, 25)}...</h4>
                  <p className="price">${item.price}</p>
                  <div className="quantity-controls">
                    <button
                      onClick={() => dispatch(decrementQuantity(item.id))}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => dispatch(incrementQuantity(item.id))}
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="subtotal">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))
          )}
        </div>
        <div className="cart-footer">
          <div className="total-box">
            <span>Umumiy summa:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button onClick={checkoutBtn} className="checkout-btn">
            Sotib olish
          </button>
        </div>
      </CartContent>
    </CartOverlay>
  );
};

// --- STYLED COMPONENTS ---

const CartOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
`;

const CartContent = styled.div`
  width: 450px;
  background-color: white;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);

  .cart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #eee;
    padding-bottom: 15px;

    .close-btn {
      background: #ff4d4d;
      color: white;
      border: none;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      cursor: pointer;
      font-weight: bold;
      transition: 0.3s;
      &:hover {
        background: #cc0000;
      }
    }
  }

  .cart-items {
    flex: 1;
    overflow-y: auto;
    margin: 20px 0;

    .item {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 20px;
      border-bottom: 1px solid #f0f0f0;
      padding-bottom: 10px;

      img {
        width: 60px;
        height: 60px;
        object-fit: contain;
      }
      .item-info {
        flex: 1;
        h4 {
          font-size: 0.9rem;
          margin-bottom: 5px;
        }
        .price {
          color: #ff8c00;
          font-weight: bold;
        }
      }
    }
  }

  .quantity-controls {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 5px;

    button {
      background: #eee;
      border: 1px solid #ddd;
      padding: 2px 10px;
      cursor: pointer;
      border-radius: 4px;
      &:hover {
        background: #ddd;
      }
    }
  }

  .cart-footer {
    border-top: 2px solid #eee;
    padding-top: 20px;

    .total-box {
      display: flex;
      justify-content: space-between;
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .checkout-btn {
      width: 100%;
      padding: 15px;
      background: #28a745;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
      &:hover {
        background: #218838;
      }
    }
  }
`;

export default Cart;
