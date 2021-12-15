import React, { useState, useEffect } from "react";
import "./CurrentBalance.css";
import "axios";
import axios from "axios";

const CurrentBalance = ({
    accountAddress,
    balance,
    setUsdBalance,
    usdBalance,
}) => {
    const [ethPrice, setEthPrice] = useState(0);
    const [color, setColor] = useState("black");

    useEffect(() => {
        setInterval(() => {
            axios
                .get(
                    "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"
                )
                .then((response) => {
                    if (
                        parseFloat(response.data.USD) !== 0.0 &&
                        parseFloat(balance) !== 0.0
                    ) {
                        setEthPrice((prev) => {
                            let price = parseFloat(response.data.USD);
                            if (prev < price) setColor("green");
                            else if (prev > price) setColor("red");
                            else setColor("black");
                            return parseFloat(response.data.USD);
                        });
                        setUsdBalance((prev) => {
                            let price = parseFloat(response.data.USD);

                            return (price * balance).toFixed(3);
                        });
                    }
                });
        }, 6000);
        return () => {};
    }, [balance, setUsdBalance]);
    return (
        <div className='balance'>
            <h1 className='title'>Current Wallet Balance:</h1>
            <h5 className='wallet-address'>
                <b>
                    <u>Account:</u>
                </b>{" "}
                {accountAddress}
            </h5>
            <p className='balance-number'>{balance} Ξ</p>
            <p className='estimated-usd-balance'>~{usdBalance} $</p>
            <h1 className='title eth-price-title'>ETH Price:</h1>
            <p className={`price-number ${color}`}>{ethPrice} $</p>
        </div>
    );
};

export default CurrentBalance;
