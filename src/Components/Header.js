import { BODY_LOGO } from "../Utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  //Subscribing to the store to get states using a selector
  const cartItems = useSelector((store) => store.cart.items);

  const { LoggedInUser } = useContext(UserContext);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-40" src={BODY_LOGO}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to={"/cart"}>Cart-({cartItems.length} items)</Link>
          </li>
          <button
            onClick={() => {
              buttonName === "Login"
                ? setButtonName("Logout")
                : setButtonName("Login");
            }}
            className="loginButton"
          >
            {buttonName}
          </button>
          <li className="px-4 font-bold">{LoggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
