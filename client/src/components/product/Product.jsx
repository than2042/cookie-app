import { useEffect, useState } from "react";
import { cookie } from "../../utils/cookie";

import "./product.scss";

const Product = ({ onBuy, disabled }) => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    setStores(cookie);
  }, []);

  return (
    <div className="storeContainer">
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
                <button
                  className="btn storeBtn"
                  onClick={() => onBuy(name)}
                  disabled={disabled(name)}
                >
                  {button}
                </button>
                {disabled(name) && (
                  <p className="insufficientFund">
                    Oops, Insufficient fund to buy!!
                  </p>
                )}
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default Product;
