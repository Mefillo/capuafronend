import React from 'react';
import logo from './favicon.png'
import bottle from './B0823KWMP1.png'
import pillow from './B0822S8LDD.png'

import './homepage.styles.scss'
const HomePage = () => (
    <div className="homepage">
        <div className="navbar">
            <div className="logo">
                <div id="logotype"><img src={logo} alt=""/><p>Capua</p></div>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </div>

        </div>

        <div className="content">
            <aside className="control">
                <h2>TRY &nbsp; IT</h2>
                <h3 className='next'>next</h3>
            </aside>
            <div className="cards">
                <div className="card1">
                    <div className="read">
                        <h3>Read more</h3>
                    </div>

                    <div className="product">

                    </div>

                    <div className="price">
                        <h4 className="prod">PILLOW</h4>
                        <h4 className="prod">19.99$</h4>
                    <div className="pillow">
                        <img src={pillow} alt="sds"/>
                    </div>
                    </div>

                </div>
                <div className="card2">
                    <div className="read">
                    <h3>Read more</h3>

                    </div>


                    <div className="price">
                        <h4 className="prod">BOTTLE</h4>
                        <h4 className="prod">12.99$</h4>
                    </div>
                    <div className="bottle">
                        <img src={bottle} alt="sds"/>
                    </div>

                </div>
            </div>
        </div>

        <div className="footer">

        </div>

    </div>
)


export default HomePage;