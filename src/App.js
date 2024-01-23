import React, {useState} from 'react';
import HeaderContents from "./header/HeaderContents";
import StockBasics from "./body/StockBasics";
import StockChart from "./body/StockChart";
import StockDescription from "./body/StockDescription";


function App() {
    const [stock, setStock] = useState('');
    return (
        <div>
            <HeaderContents stock={stock} setStock={setStock} />
            <StockBasics stock={stock} />
            <StockChart stock={stock} />
            <StockDescription stock={stock} />
        </div>
    );
}

export default App;
