import React from 'react';
import stockEmoji from './stock-images/default.png'


export default function NoStockSelected() {
    return (
        <div className="stock-basics-wrapper">
            <div className="stock-basics-left">
                <div className="stock-name-wrapper">
                    <div className="grey-circle-behind">
                        <img className="stock-image" src={stockEmoji} alt="stock icon"/>
                    </div>
                    <div>
                        <div className="stock-full-name">Please select a stock</div>
                        <div className="stock-ticker">from the dropdown menu above.</div>
                    </div>
                </div>

            </div>
        </div>
    );
};