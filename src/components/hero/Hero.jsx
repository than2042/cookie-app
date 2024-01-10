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
      }, 200);
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

  return (
    <div className="heroContainer">
      <h1>Welcome to Cooker Clicker</h1>
      <div>
        <FontAwesomeIcon
          icon={faCookie}
          className="cookie"
          onClick={handleStart}
        />
        <p>Count Cookies: {count}</p>
      </div>
      <div>
        <Button onClick={handleStart}>Start</Button>
        <Button onClick={handleStop}>Stop</Button>
        <Button onClick={handleRest}>Reset</Button>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <FontAwesomeIcon icon={faJar} className="jar" /> */
}
