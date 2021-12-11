import React, { useState, useEffect, useCallback, useRef } from "react";
import "./Header.css";
import logo from "../../public/B-LOGO.png";
import Button from "../Button/Button";
import { ethers } from "ethers";

const passedY = 50;
var Web3 = require("web3");
var web3 = new Web3(
    Web3.givenProvider || "ws://some.local-or-remote.node:8546"
);

const Header = ({ setConnected, setBalance, setAccountAddress }) => {
    const [y, setY] = useState(0);
    const [headerClass, setHeaderClass] = useState("header");
    const [walletClass, setWalletClass] = useState("wallet-connect");
    const [walletText, setWalletText] = useState("Connect Wallet");
    const [errorMessage, setErrorMessage] = useState(null);

    const [timerRunning, setTimer] = useState(false);
    const [showWalletButton, setShowWalletButton] = useState(true);
    const headerEl = useRef(null);
    const ethereum = window.ethereum;
    if (ethereum) {
        ethereum.on("chainChanged", (accounts) => {});
    }
    const hideHeaderTimer = (timeInMS) => {
        setTimeout(() => {
            setHeaderClass("header");
            setTimer(false);
        }, timeInMS);
    };
    const handleNavigation = useCallback(
        (e) => {
            const window = e.currentTarget;
            if (timerRunning) return;
            if (y > passedY && !timerRunning && y < window.scrollY) {
                setHeaderClass("header scrolled");
                setWalletClass("wallet-connect");
                setWalletText("Connect Wallet");
                setShowWalletButton(true);
                setTimer(true);
                hideHeaderTimer(2000);
            } else {
                setHeaderClass("header");
                if (y >= passedY && showWalletButton) {
                    setWalletText("");
                    setWalletClass("wallet-connect disappear");
                    setTimeout(() => {
                        setShowWalletButton(false);
                    }, 750);
                }
                if (y < passedY && !showWalletButton) {
                    setShowWalletButton(true);
                    setWalletClass("wallet-connect");
                    setWalletText("Connect Wallet");
                }
            }

            setY(window.scrollY);
        },
        [y, timerRunning, showWalletButton]
    );
    window.ethereum.on("chainChanged", function () {
        window.ethereum
            .request({ method: "eth_requestAccounts" })
            .then((res) => {
                accountChangedHandler(res[0]);
            });
    });
    const connectWalletHandler = () => {
        if (window.ethereum) {
            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then((res) => {
                    accountChangedHandler(res[0]);
                })
                .then(() => {
                    setWalletText("Connected");
                });
        } else {
            setErrorMessage("Install MetaMask");
        }
    };
    const accountChangedHandler = (newAccount) => {
        setAccountAddress(newAccount);
        getUserBalance(newAccount);
    };
    const getUserBalance = (address) => {
        window.ethereum
            .request({ method: "eth_getBalance", params: [address, "latest"] })
            .then((res) => {
                setBalance(
                    parseFloat(ethers.utils.formatEther(res)).toFixed(7)
                );
            });
    };
    const onClick = (e) => {
        setWalletText("Loading...");
        setConnected(true);
        connectWalletHandler();
    };

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    return (
        <div className={headerClass} ref={headerEl}>
            <img src={logo} alt='logo' className='logo' />
            {showWalletButton && (
                <Button
                    text={walletText}
                    classN={walletClass}
                    onClick={onClick}
                />
            )}
        </div>
    );
};

export default Header;
