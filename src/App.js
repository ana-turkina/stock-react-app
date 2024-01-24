import React, {useState} from 'react';
import HeaderContents from "./header/HeaderContents";
import StockBasics from "./body/StockBasics";
import StockChart from "./body/StockChart";
import StockDescription from "./body/StockDescription";
import './App.css'


function App() {
    const [stock, setStock] = useState('');
    return (
        <div>
            <HeaderContents stock={stock} setStock={setStock} />
            <div className="basics-chart-description">
            <StockBasics stock={stock} />
            <StockChart stock={stock} />
            <StockDescription stock={stock} />
            </div>
        </div>
    );
}

export default App;
