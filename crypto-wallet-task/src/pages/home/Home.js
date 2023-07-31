import { useState, useEffect } from "react";
import useCrypto from "../../hooks/useCrypto";
import CoinCard from "../../components/coinCard/CoinCard";
import WalletBtn from "../../components/button/WalletBtn";
import CardTitle from "./component/card-title/CardTitle";
import CardContent from "./component/card-content/CardContent";
import FrequencyTab from "../../components/frequncyTab/FrequencyTab";
import { items } from "./helper";
import "./home.css";
import CoinButton from "./component/coinButton/CoinButton";

function Home() {
  const { coinDetail } = useCrypto();
  const [showBtns, setShowBtns] = useState(false);

  const {market_data} = {...coinDetail}

  // console.log(coinDetail);
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
            <CardTitle
              title={coinDetail?.name}
              avatar={coinDetail?.image?.small}
              currency={
                coinDetail?.symbol ? coinDetail?.symbol.toUpperCase() : ""
              }
            />
          }
        >
          <CardContent
            market_data={market_data}
            showBtns={showBtns}
            handleDownArrowClick={handleDownArrowClick}
          />
          {showBtns ? (
            <div className="wallet-action-bar">
              <CoinButton coinDetail={coinDetail} />
            </div>
          ) : null}
        </CoinCard>
      </div>
      <div className="coin-chart-container">
        <div className="frequency-tabs">
          <FrequencyTab items={items} handleTabChange={handleTabChange} />
        </div>
        <div className="coin-chart"></div>
        <div className="wallet-action-bar">
          <CoinButton coinDetail={coinDetail} />
        </div>
      </div>
    </div>
  );
}

export default Home;
