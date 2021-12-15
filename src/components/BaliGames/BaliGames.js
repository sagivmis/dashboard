import React, { useState, useEffect } from "react";
import "./BaliGames.css";
import logo from "../../public/B-LOGO.png";
// import axios from "axios";
// const config = {
//     headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//         "Access-Control-Allow-Headers":
//             "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
//     },
// };
// var proxy_url = "https://cors-anywhere.herokuapp.com/";

const BaliGames = () => {
    const [ssbPrice, setSSBPrice] = useState();

    // useEffect(() => {
    //     axios
    //         .get(
    //                 "https://api.pancakeswap.info/api/v2/tokens/0x55b53855eae06c4744841dbfa06fce335db4355b",
    //             config
    //         )
    //         .then((response) => {
    //             console.log(response);
    //         });
    //     return () => {};
    // }, []);
    return (
        <div className='stats'>
            <img src={logo} alt='logo' className='logo-stats' />
            <h1 className='title-stats'>Stats: </h1>
            <p className='ssb-price'>{ssbPrice}$</p>
        </div>
    );
};

export default BaliGames;
