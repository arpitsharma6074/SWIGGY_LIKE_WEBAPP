import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=>{
    // let btnVal = "Login";
    const [btnVal,setBtnVal] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src ={ LOGO_URL} ></img>
            </div>
            <div className="nav_items">
                <ul>
                    <li>
                        Online status : {onlineStatus?"🟢":"🔴"}
                    </li>
                    <li>
                    <Link to ="/">Home</Link>
                    </li>
                    <li>
                        <Link to ="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to ="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login-btn" 
                        onClick={()=>{
                            btnVal === "Login"?setBtnVal("Logout"):setBtnVal("Login");
                        }}>
                        {btnVal}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;