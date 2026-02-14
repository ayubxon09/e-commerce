import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";
import GlobalStyles from "../GlobalStyles";
import styled from "styled-components";
import Header from "./Header";
import Cart from "./Cart";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((data) => {
        setData(data.data);
      })
      .catch((e) => {
        setError(true);
      });
  }, []);

  if (error)
    return <div className="err">Hatolik yuz berdi qayta urinib koring</div>;

  return (
    <div className="container">
      <GlobalStyles />
      <Header onOpen={() => setIsCartOpen(true)} />

      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}

      <AppStyles>
        {data.map((item) => (
          <Product key={item.id} data={item} />
        ))}
      </AppStyles>
    </div>
  );
};

const AppStyles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;

  @media (min-width: 0) and (max-width: 699.9px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 700px) and (max-width: 1099.9px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1100px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default App;
