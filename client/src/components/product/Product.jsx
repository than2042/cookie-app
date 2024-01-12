import { useEffect, useState } from "react";
import { cookie } from "../../utils/cookie";

import "./product.scss";

const Product = ({ onBuy }) => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    setStores(cookie);

    // const handleGetAPI = async () => {
    //   const res = await fetch("../utils/cookie.json");
    //   const data = await res.json();
    //   setStores(data);
    //   console.log("data", data);
    // };
    // handleGetAPI();
  }, []);

  return (
    <div className="storeContainer">
      <h1 className="cookieMall">Cookie Mall</h1>
      <div className="stores">
        {stores &&
          stores?.map(
            ({ id, name, price, quantity, number, image, button }) => (
              <div className="storeList" key={id}>
                <h2>{name}</h2>
                <img src={image} alt={name} className="shopImage" />
                <p className="price">
                  Price: £{price} / <span>{number}</span>
                </p>
                <p className="quantity">Quantity: {quantity}</p>
                <button className="btn storeBtn" onClick={() => onBuy(name)}>
                  {button}
                </button>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default Product;
