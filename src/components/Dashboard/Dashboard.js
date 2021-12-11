import React, { useState } from "react";
import BaliGames from "../BaliGames/BaliGames";
import CurrentBalance from "../CurrentBalance/CurrentBalance";
import PriceGraph from "../PriceGraph/PriceGraph";
import "./Dashboard.css";

const Dashboard = ({ balance, setBalance, accountAddress }) => {
    const [usdBalance, setUsdBalance] = useState(0);

    return (
        <div className='dashboard'>
            <CurrentBalance
                usdBalance={usdBalance}
                setUsdBalance={setUsdBalance}
                balance={balance}
                accountAddress={accountAddress}
            />
            <BaliGames />
            <PriceGraph />
        </div>
    );
};

export default Dashboard;
