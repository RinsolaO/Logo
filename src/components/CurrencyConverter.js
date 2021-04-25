import React from 'react'


const CurrencyConverter = () => {
    return (
        <div className = "currency-converter">
            <p> Select Currency : </p>
            
            <div className="white-container">
                <div className="input-flex">
                    <select>
                    <option value="AFYA">TOKEN</option>
                    <option value="WALLET"> WALLET </option>
                    <option value="NAIRA"> NAIRA </option>
                    
                    </select>
                    <input type="number" placeholder = '0.000000001'/>
                    </div>

                    <div className="button-margin">
                    <input type="button" value = 'Send'/>
                    <input type="button" value = "Receive"/>
                    </div>
                    

            </div>
            
        </div>
    )
}

export default CurrencyConverter
