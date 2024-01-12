import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookie } from "@fortawesome/free-solid-svg-icons";
import Button from "../button/Button";
import Product from "../product/Product";
import { cookie } from "../../utils/cookie";

import "./hero.scss";

const Hero = () => {
  const initialCount = parseInt(localStorage.getItem("count")) || 0;
  const [count, setCount] = useState(initialCount);
  const [isCounting, setIsCounting] = useState(false);
  const [showPorduct, setShowProduct] = useState(false);

  useEffect(() => {
    let interval;
    if (isCounting) {
      interval = setInterval(() => {
        setCount((prevCount) => {
          localStorage.setItem("count", prevCount + 1);
          return prevCount + 1;
        });
      }, 100);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isCounting]);

  const handleStart = () => {
    setIsCounting(true);
  };

  const handleStop = () => {
    setIsCounting(false);
  };

  const handleRest = () => {
    setCount(0);
  };

  const handleBuy = (name) => {
    const updateQuantity = cookie.map((cookieItem) => {
      // decrement store quantity when click buy
      if (cookieItem.name === name) {
        cookieItem.quantity -= 200;
      } else if (cookieItem.name === name) {
        cookieItem.quantity -= 150;
      } else if (cookieItem.name === name) {
        cookieItem.quantity -= 200;
      } else if (cookieItem.name === name) {
        cookieItem.quantity -= 350;
      }

      // decrement count base on the item
      if (cookieItem.name === name) {
        switch (name) {
          case "Nana":
            setCount((prevCount) => prevCount - 20);
            break;
          case "Bank":
            setCount((prevCount) => prevCount - 10);
            break;
          case "Sister Cookies":
            setCount((prevCount) => prevCount - 30);
            break;
          case "Factory":
            setCount((prevCount) => prevCount - 40);
            break;
          default:
            break;
        }
        cookieItem.quantity -= 1;
      }
      // increment count once buy
      if (cookieItem.name === name) {
        switch (name) {
          case "Nana":
            setCount((prevCount) => prevCount + 200);
            break;
          case "Bank":
            setCount((prevCount) => prevCount + 150);
            break;
          case "Sister Cookies":
            setCount((prevCount) => prevCount + 200);
            break;
          case "Factory":
            setCount((prevCount) => prevCount + 350);
            break;
          default:
            break;
        }
        cookieItem.quantity += 1;
      }

      return cookieItem;
    });
    cookie.length = 0;
    Array.prototype.push.apply(cookie, updateQuantity);
  };

  const handleShow = () => {
    setShowProduct(!showPorduct);
  };

  return (
    <div className="heroContainer">
      <div className="container">
        <h1 className="heroText">Welcome to Cooker Clicker!!!</h1>
        <div className="countContainer">
          <FontAwesomeIcon
            icon={faCookie}
            className="cookie"
            onClick={handleStart}
          />
          <p className="count">Count Cookies: {count}</p>
        </div>
        <div className="btnContainer">
          <Button className={"start"} onClick={handleStart}>
            Start
          </Button>
          <Button className={"stop"} onClick={handleStop}>
            Stop
          </Button>
          <Button className={"reset"} onClick={handleRest}>
            Reset
          </Button>
        </div>
        <div>{showPorduct && <Product onBuy={handleBuy} />}</div>
        <Button className={"buy"} onClick={handleShow}>
          Buy Cookies
        </Button>
      </div>
      <div className="displayProduct">
        <Product onBuy={handleBuy} />
      </div>
    </div>
  );
};

export default Hero;
