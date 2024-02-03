import {polygonKey} from "../../keys";

export async function getStockInformationClosePrice(stock, setClosePrice){
    try{
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };
        const response = await (await fetch(`https://api.polygon.io/v2/aggs/ticker/${stock}/range/1/day/2023-01-09/2023-01-09?apiKey=${polygonKey}`, requestOptions)).json()
        await console.log("response", response.results[0].c)
        setClosePrice(response.results[0].c)
    }
    catch (error) {
        console.log('error', error)

    }}
