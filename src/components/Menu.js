import React, {useState} from 'react'
import {Link} from "react-router-dom";

import home from './img/home.png'
import activity from './img/activity.png'
import wallet from './img/wallet.png'
import market from './img/market.png'
import earn from './img/earn.png'


const Menu = () => {

    const [activeClass, setActiveClass ] = useState('home');

    return (
        <div className = 'menu-flex'>
            <div id="home">
                <div className={`menu-box ${activeClass === 'home'? 'menu-box-active' : ''} `}>
                <img src={home} alt="home"/>
                <h5 onClick = {() => setActiveClass('home')}> <Link to ="/">Home</Link> </h5>
                </div>
            </div>
            <div id="activity">
                <div className={`menu-box ${activeClass === 'activity' ? 'menu-box-active' : ''} `}>
                <img src={activity} alt="activity"/>
                <h5 onClick = {() => setActiveClass('activity')}> <Link to="/Activity">Activity</Link> </h5>
                </div> 
            </div>
            
            <div id="wallet">
                <div className={`menu-box ${activeClass === 'wallet' ? 'menu-box-active' : ''} `}>
                <img src={wallet} alt=""/>
                <h5 onClick = {() => setActiveClass('wallet')}> <Link to="/Wallet">Wallet</Link> </h5>
                </div>
            
            </div>
            
            <div id="market">
                <div className={`menu-box ${activeClass === 'market'? 'menu-box-active' : ''} `}>
                <img src={market} alt=""/>
                <h5 onClick =  {() => setActiveClass('market') }> <Link to="/Market">Market</Link> </h5>
                </div>
            </div>
            
            <div id="earn">
                <div className={`menu-box ${activeClass === 'earn' ? 'menu-box-active' : ''} `}>
                <img src={earn} alt=""/>
                <h5 onClick =  {() => setActiveClass('earn')}> <Link to="/Earn">Earn</Link> </h5>
                </div>
            </div>

            
        </div>
    )
}


export default Menu
