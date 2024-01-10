import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookie } from "@fortawesome/free-solid-svg-icons";
// import CookieJar from "../../assets/jar.jpeg";
import "../hero/hero.scss";
import Button from "../button/Button";

const Hero = () => {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    let interval;

    if (isCounting) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 150);
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

  const handleBuy = () => {
    setCount((prevCount) => prevCount - 10);
  };

  return (
    <div className="heroContainer">
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
      <Button className={"buy"} onClick={handleBuy}>
        Buy Cookies
      </Button>
    </div>
  );
};

export default Hero;

{
  /* <FontAwesomeIcon icon={faJar} className="jar" /> */
}
