import React from 'react'
import './Hero.css'
import Crypto from '../../assets/hero-img.png'

const Hero = () => {
    return (
        <div id="hero" className="hero">
            <div className="container">

                {/* Left side */}
                <div className="left">
                    <p>Buy & Sell Crypto 24/7 using your retirement account</p>
                    <h1>Invest in Cryptocurrency with Your IRA</h1>
                    <p>Buy, Sell, and store hundreds of Cryptocurrencies</p>
                    <div className="input-container"></div>
                    <input type="email" placeholder='Enter Your Email' />
                    <button className="btn">Learn More</button>
                </div>


                {/* Right side */}
                <div className="right">
                    <div className="img-container">
                        <img src={Crypto} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero