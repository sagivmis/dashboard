import React from "react";
import "./BaliGames.css";
import logo from "../../public/B-LOGO.png";

const BaliGames = () => {
    return (
        <div className='stats'>
            <img src={logo} alt='logo' className='logo-stats' />
            <h1 className='title-stats'>Stats: </h1>
        </div>
    );
};

export default BaliGames;
