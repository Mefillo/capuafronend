import React from 'react'

import './about.style.scss'
import NavBar from '../components/navbar/navbar.component'
import Footer from '../components/footer/footer.component'

import test from '../components/img/test.jpg'
import follow from '../components/img/follow.jpg'
import choose from '../components/img/choose.jpg'
import make from '../components/img/make.jpg'

const About = () => (
    <>
    <NavBar/>
    <div className="body-a">
        
    <div className="title-container">
    <div id="title">
        <h1>What if we can make your life better?</h1>
    </div>
    </div>
        <div className="baner init">
            <div className="slogan description">
                <h5 className="description">We are small but very passionate company of people who believe that we can and have to take out of modern solutoins as much as possible </h5>
            </div>
        </div>
        <div className="we">
                <h5>We:</h5>
        </div>
        <div className="baner colored">
                <img src={choose} alt=""/>
            <div className="slogan">
                <h5> <b>Choose</b> most interesting product </h5>
            </div>
        </div>
        <div className="baner white">
            <img src={make} alt=""/>
            <div className="slogan">
                <h5> <b> Make</b> it better</h5>
            </div>
        </div>
        <div className="baner colored">
            <img src={test} alt=""/>
            <div className="slogan">
                <h5> <b> Test</b> for usability, safety and good-looking</h5>
            </div>
        </div>
        <div className="baner white">
            <img src={follow} alt=""/>
            <div className="slogan">
                <h5> <b> Follow </b> our customers on their experiance, trying to make it even better!</h5>
            </div>
        </div>
        <div className="cntr">
        <a id = 'redirect' href='http://localhost:3000' style={{padding: '0px'}}>
            <button className='btn-amazon'>Products</button>
        </a>
        </div>
        </div>
    <Footer/>
    </>
)

export default About;