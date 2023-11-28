import React from 'react'
import "./page8.css"
import blog1 from "../image/Frame 1000005523.png"
import blog2 from "../image/Frame 1000005526.png"
import blog3 from "../image/Frame 1000005527.png"



const Page8 = () => {
    return (
        <div className='container-3'>

            <div className="titel-3">
                <h1>Don’t take our word for it.</h1>
            </div>
            <div className='paragraph'>
                <p>Hear it from our expert community of traders who have made </p>
                <p>insane amounts in a short amount of time</p>
            </div>

            <div className="blogs">
                <div>
                    <img src={blog1} alt="" />
                </div>
                <div>
                    <img src={blog2} alt="" />
                </div>
                <div>
                    <img src={blog3} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Page8