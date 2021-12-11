import Dashboard from "../Dashboard/Dashboard";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./App.css";
import { useState } from "react";

function App() {
    const [balance, setBalance] = useState("0.0");
    const [accountAddress, setAccountAddress] = useState(null);
    const [connected, setConnected] = useState(false);
    return (
        <div className='App'>
            <Header
                setConnected={setConnected}
                setBalance={setBalance}
                accountAddress={accountAddress}
                setAccountAddress={setAccountAddress}
            />
            {/* make a state that will show when connected to metamask and only then
            show the dashboard */}
            {connected && (
                <Dashboard
                    balance={balance}
                    setBalance={setBalance}
                    accountAddress={accountAddress}
                />
            )}
            <Sidebar />
            <Footer />
        </div>
    );
}

export default App;
