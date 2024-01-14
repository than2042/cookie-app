import { useState } from "react";
import Button from "../button/Button";
import "./cookieSetting.scss";

const CookieSetting = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleSetting = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {isOpen && (
        <div className="cookieAccept">
          <h3>Cookies Setting</h3>
          <p>
            We use cookies and similar technologies to provide our services and
            to measure and improve your experience. If you choose ‘Accept’, the
            online marketing you see about ITV will be more relevant to you. See
            our Privacy & Cookie Information for more info.
          </p>
          <div className="settingBtn">
            <Button className={"accept"} onClick={handleSetting}>
              Accept
            </Button>
            <Button className={"reject"} onClick={handleSetting}>
              Reject
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieSetting;
