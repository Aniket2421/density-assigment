import React from 'react'
import chart from '../image/Group 1000003839.png'

import "./page4.css"

const Page4 = () => {
    return (
        <div className='modal'>
            <div className="text-form">
                <h1><span>Unlock</span> New Frontiers.</h1>
                <p>Are you a stock trader looking for new opportunities to make </p>
                <p>money? We got you covered!</p>
            </div>

            <div className="table">

                <div className='box'>
                    <p>Same Strategies</p>
                </div>
                <div className='box'>
                    <p>Same Indicators</p>
                </div>
                <div className='box'>
                    <p>Better Leverage</p>
                </div>
                <div>
                    <p>24x7 Trading</p>
                </div>

            </div>

            <div className="image">
                <img src={chart} alt="" />
            </div>

        </div>
    )
}

export default Page4