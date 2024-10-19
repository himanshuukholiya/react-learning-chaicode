import { useState, useEffect } from "react";

/* 
Here we are creating custom hooks. 
naming -> useCurrencyInfo -> 'use' + name -> good practice while naming custom hooks 
*/

function useCurrencyInfo (currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    }, [currency])

    return data;
}

export default useCurrencyInfo;