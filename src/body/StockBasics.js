import React, {useEffect, useState} from 'react';
import './body.css'
import starIcon from './star-icon.png'
import microsoft from './stock-images/microsoft.png'
import apple from './stock-images/apple.png'
import google from './stock-images/google.png'
import amazon from './stock-images/amazon.png'


const stockFullName = {
    MSFT: 'Microsoft Corporation, Inc.',
    AAPL: 'Apple Computer, Inc.',
    GOOGL: 'Alphabet Inc.',
    AMZN: 'Amazon.com, Inc., Inc.'
}

const stockImage = {
    MSFT: microsoft,
    AAPL: apple,
    GOOGL: google,
    AMZN: amazon,
}

export default function StockBasics({stock}) {
    const [closePrice, setClosePrice] = useState(null);

    useEffect(() => {
        if (stock) {
            const requestOptions = {
                method: 'GET',
                redirect: 'follow',
            };
            fetch(`https://api.polygon.io/v2/aggs/ticker/${stock}/range/1/day/2023-01-09/2023-01-09?apiKey=wU96Rp6clvICXRNdniivAJhr3vZNVGQn`, requestOptions)
                .then(response => response.json())
                .then(result => setClosePrice(result.results[0].c))
                .catch(error => console.log('error', error));
        }
    }, [stock]);
    return (
        <div className="stock-basics-wrapper">
            <div className="stock-basics-left">
                <div className="stock-name-wrapper">
                    <div className="grey-circle-behind">
                        <img className="stock-image" src={stockImage[stock]} alt="stock icon"/>
                    </div>
                    <div className="stock-full-name">{stockFullName[stock]}</div>
                    <div className="stock-ticker">{stock} </div>

                </div>
                <div>
                    <div className="price-of-stock-text">Price of {stockFullName[stock]}</div>
                    <div className="price-of-stock-number">$ {closePrice}</div>
                </div>
            </div>
            <div className="stock-basics-right">
                <img src={starIcon} alt="star"/>
                <button>BUY</button>
            </div>
        </div>
    );
}
;