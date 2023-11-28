import React from "react";
import graph from "../image/Group 1000003815.png";
import "./page3.css"

const Page3 = () => {
    return (
        <div className="container">
            <div className="text-content">
                <p className="t1">Explore the Markets </p>
                <span className="t2">like it is your <span className="t3">Playground.</span></span>
                <p className="para">Search for your favorite coins and stay ahead of the market</p>
            </div>

            <div className="image-content">
                <img src={graph} alt="" />
            </div>

            <div className="btn">
                <button>Explore Markets</button>
            </div>
        </div>
    );
};

export default Page3;
