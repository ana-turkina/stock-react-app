import React, {useState} from 'react';
import HeaderContents from "./header/HeaderContents";
import StockBasics from "./body/StockBasics";
import StockChart from "./body/StockChart";
import StockDescription from "./body/StockDescription";
import './App.css'
import NoStockSelected from "./body/NoStockSelected";


function App() {
    const [stock, setStock] = useState('');
    return (
        <>
            <HeaderContents stock={stock} setStock={setStock}/>
            <div className="basics-chart-description">
                {
                    stock ? <>

                            <StockBasics stock={stock}/>
                            <StockChart stock={stock}/>
                            <StockDescription stock={stock}/>

                        </> :
                        <NoStockSelected/>
                }
            </div>
        </>
    );
}

export default App;
