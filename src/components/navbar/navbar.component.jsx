import React from 'react';
import logo from '../img/favicon.png'
import box from '../img/menu.png'

import './navbar.component.scss'
class NavBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            toggled : this.props.toggled,
        } ;
    }


    render(){
        return(
    <div className="navbar">
            <div className="up">
        <a id = 'redirect' href='https://www.capua.store/' style={{padding: '0px'}}>
                <div className="logo">
                    <div id="logotype"><img src={logo} alt=""/></div><p>Capua</p>
                </div>
            </a>
                <div className="box" onClick={() => this.setState({toggled: !this.state.toggled})}>
                    <img src={box} alt=""/>
                </div>
            </div>
            <div className={this.state.toggled ? "menu untoggled" : "menu toggled"} >
                <ul className={this.state.toggled ? "untoggled" : "toggled"}>
                <a href="https://www.capua.store/"><li>Shopik</li></a>
                <a href="/about/"><li>About</li></a>
                <a href="/contact/"><li>Contact us</li></a>
                </ul>
            </div>
            <div className="menu-s"  >
                <ul>
                <a href="https://www.capua.store/"><li>Shop</li></a>
                <a href="/about/"><li>About</li></a>
                <a href="/contact/"><li>Contact us</li></a>
                </ul>
            </div>

        </div>
        )
    }

    }
export default NavBar;