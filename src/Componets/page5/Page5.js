import React from 'react'
import "./page5.css"
import data1 from "../image/Frame 1000005523.png"
import data2 from "../image/Frame 1000005524.png"


const Page5 = () => {
    return (
        <div className='containers'>

            <div className="heading">
                <h1>Start Small. Earn Big.</h1>
                <p>Deposity a minimum of 1000 and get a Deposit bonus + </p>
                <p>dedicagted relationship manager</p>
            </div>

            <div className="img">
                <img src={data1} alt="" />
                <img src={data2} alt="" />
            </div>

        </div>
    )
}

export default Page5