import React, {useState} from 'react'
import {Link} from "react-router-dom";

import home from './img/home.png'
import activity from './img/activity.png'
import wallet from './img/wallet.png'
import market from './img/market.png'
import earn from './img/earn.png'


const Menu = () => {

    const 

    return (
        <div className = 'menu-flex'>
            <div className="menu-box">
            <img src={home} alt="home"/>
            <h5 onClick = ""> <Link to ="/">Home</Link> </h5>
            </div>
            <div className="menu-box">
            <img src={activity} alt="activity"/>
            <h5> <Link to="/Activity">Activity</Link> </h5>
  
            </div>
            <div className="menu-box">
            <img src={wallet} alt=""/>
            <h5> <Link to="/Wallet">Wallet</Link> </h5>
          
            </div>
            <div className="menu-box">
            <img src={market} alt=""/>
            <h5> <Link to="/Market">Market</Link> </h5>
            </div>
            <div className="menu-box">
            <img src={earn} alt=""/>
            <h5> <Link to="/Earn">Earn</Link> </h5>
            </div>
            
        </div>
    )
}


export default Menu
