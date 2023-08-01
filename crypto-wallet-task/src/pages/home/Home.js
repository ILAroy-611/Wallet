import { useState, useEffect } from "react";
import useCrypto from "../../hooks/useCrypto";
import CoinCard from "../../components/coinCard/CoinCard";
import WalletBtn from "../../components/button/WalletBtn";
import CardTitle from "./component/card-title/CardTitle";
import CardContent from "./component/card-content/CardContent";
import FrequencyTab from "../../components/frequncyTab/FrequencyTab";
import { items } from "./helper";
import { BsCurrencyDollar } from "react-icons/bs";
import "./home.css";

function Home() {
  // const {response} = useCrypto();
  const [showBtns, setShowBtns] = useState(false);

  const handleTabChange = (key) => {
    console.log(key);
  };

  const handleDownArrowClick = () => {
    setShowBtns(!showBtns);
  };
  return (
    <div className="wallet-container">
      <div className="wallet-card">
        <CoinCard
          title={
            <CardTitle title="Bitcoin" avatar="bitcoin.png" currency="BTC" />
          }
        >
          <CardContent handleDownArrowClick={handleDownArrowClick} />
          {showBtns ? <>Hello</> : null}
        </CoinCard>
      </div>
      <div className="coin-chart-container">
        <div className="frequency-tabs">
          <FrequencyTab items={items} handleTabChange={handleTabChange} />
        </div>
        <div className="coin-chart"></div>
        <div className="wallet-action-bar">
          <div className="btn-container">
            <BsCurrencyDollar className="dollar-style buy-dollar-style" />
            <WalletBtn block={true} size="large" type="text">
              <p className="btn-text">Buy BTC</p>
            </WalletBtn>
          </div>
          <div className="btn-container">
            <BsCurrencyDollar className="dollar-style sell-dollar-style" />
            <WalletBtn block={true} size="large" type="text">
            <p className="btn-text">Sell BTC</p>
            </WalletBtn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
