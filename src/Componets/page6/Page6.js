import React from "react";
import iphone1 from "../image/iPhone 14 Pro Space Black Mockup.png";
import iphone2 from "../image/iPhone 14 Pro Space Black Mockup (1).png";
import iphone3 from "../image/iPhone 14 Pro Space Black Mockup (2).png";
import logo1 from "../image/Group 1000003801.png";
import logo2 from "../image/Group 626789.png";
import logo3 from "../image/Group 1000003802.png";
import "./page6.css";
const Page6 = () => {
    return (
        <div className="container">
            <div className="titel-1">
                <h1>
                    Derivates made simple
                    <span> in 3 Easy</span> Steps
                </h1>
            </div>

            <div className="setup">

                <div className="main">
                    <div>
                        <img src={iphone1} alt="" />
                    </div>
                    <div className="storage">
                        <img src={logo1} alt="" />
                        <h2>Create an Account</h2>
                        <p>Register & Complete your Verification in less than 2 minutes</p>
                        <button>TRADE NOW</button>
                    </div>
                </div>
                <div className="main">
                    <div>
                        <img src={iphone2} alt="" />
                    </div>
                    <div className="storage">
                        <img src={logo2} alt="" />
                        <h2>Create an Account</h2>
                        <p>Add funds quickly using a variety of payment methods</p>
                        <button>TRADE NOW</button>
                    </div>
                </div>
                <div className="main">
                    <div>
                        <img src={iphone3} alt="" />
                    </div>
                    <div className="storage">
                        <img src={logo3} alt="" />
                        <h2>Create an Account</h2>
                        <p>Choose Your Trading Pair & Trade Seamlessly</p>
                        <button>TRADE NOW</button>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Page6;
