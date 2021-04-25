import React from 'react'
import Balance from '../components/Balance'
import CurrencyConverter from '../components/CurrencyConverter'
import RecentActivity from '../components/RecentActivity'


const mainscreen = () => {
    return (
        <div>
            <Balance />
            <CurrencyConverter />
            <RecentActivity />
            
            
        </div>
    )
}


export default mainscreen
