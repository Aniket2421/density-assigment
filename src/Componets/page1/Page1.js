import React from "react";
import "./page1.css";
import density from "../image/Frame.png";
import mobiles from "../image/Group 626822.png";

const Page1 = () => {
    return (
        <div>
            <div className="navbar">
                <div>
                    <img src={density} alt="" />
                </div>
                <div className="elements">
                    <p>Career</p>
                    <p>Blog</p>
                    <p>Leaderboard</p>
                    <p>Fees</p>
                    <button>TRADE NOW</button>
                </div>
            </div>
            <div className="middel">
                <div className="text">
                    <h1>
                        It’s time to trade, the <span>future.</span>
                    </h1>
                    <p>Trade BTC, ETH Futures With 125x Leverage And Earn Rewards.</p>
                </div>
                <div className="images">
                    <img src={mobiles} alt="" />
                </div>
            </div>
            <div className="footer">
                <div className="bottom">
                    <div className="border">
                        <h3>005</h3>
                        <p>Convesion Fees</p>
                    </div>

                    <div className="border">
                        <h3>500 Mn+</h3>
                        <p>Lifetime Volume Traded</p>
                    </div>

                    <div className="border">
                        <h3>250+</h3>
                        <p>Total Tradable Pairs</p>
                    </div>
                    <div className="border">
                        <h3>15,000+</h3>
                        <p>Traders</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page1;
