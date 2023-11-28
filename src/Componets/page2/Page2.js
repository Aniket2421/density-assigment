import React from "react";
import img1 from "../image/Group 1000003825.png";
import img2 from "../image/Group 1000003826.png";
import img3 from "../image/Group 1000003827.png";
import img4 from "../image/Frame 31.png";
import img5 from "../image/Frame 31 (1).png";
import img6 from "../image/Frame 31 (2).png";

import "./page2.css";

const Page2 = () => {
    return (
        <div>
            <div className="pictures">
                <div>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <img src={img2} alt="" />
                </div>
                <div>
                    <img src={img3} alt="" />
                </div>
            </div>
            <div className="footer">
                <div className="content">
                    <h2>
                        Trade More. <span> Pay Less.</span>
                    </h2>
                    <p>Our low Fees Supercharge Your Profits</p>
                </div>

                <div className="contents">
                    <div>
                        <img src={img4} alt="" />
                    </div>
                    <div>
                        <img src={img5} alt="" />
                    </div>
                    <div>
                        <img src={img6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page2;
