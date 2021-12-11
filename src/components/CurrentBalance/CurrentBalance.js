import React, { useState } from "react";
import "./CurrentBalance.css";
import { ethers } from "ethers";
import "axios";
import axios from "axios";

const CurrentBalance = ({
    accountAddress,
    balance,
    setUsdBalance,
    usdBalance,
}) => {
    setInterval(() => {
        axios
            .get(
                "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"
            )
            .then((response) => {
                console.log(balance);

                setEthPrice(response.data.USD);
                setUsdBalance(
                    (parseFloat(response.data.USD) * balance).toFixed(3)
                );
            });
    }, 6000);
    const [ethPrice, setEthPrice] = useState(0);

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
            <p className='price-number'>{ethPrice} $</p>
        </div>
    );
};

export default CurrentBalance;
