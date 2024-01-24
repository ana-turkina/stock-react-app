import React from 'react';
import './header.css'

export default function HeaderContents({stock, setStock}) {
    const handleSelectionChange = (e) => {
        const selectedStock = e.target.value;
        setStock(selectedStock);
    }
    return (
        <header className="header">
            <div>
                <div className="logo-text-blue">Stock.</div>
                Change
            </div>
            <select value={stock} required onChange={handleSelectionChange}>
                <option value="" disabled>Choose a Stock...</option>
                <option value="MSFT">MSFT</option>
                <option value="AAPL">AAPL</option>
                <option value="GOOGL">GOOGL</option>
                <option value="AMZN">AMZN</option>
            </select>
            <div className="menu-bar-header">
                <p>Cryptocurrency</p>
                <p>NFT</p>
                <p>Blog</p>
                <p>Help</p>
                <p>Contact</p>
            </div>
            <div>
                <a href>Personal Account</a>
            </div>
        </header>
    )
}
