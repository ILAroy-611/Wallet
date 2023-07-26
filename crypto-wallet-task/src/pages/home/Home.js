import { useState, useEffect } from "react";
import useCrypto from "../../hooks/useCrypto";
import CoinCard from "../../components/coinCard/CoinCard";
import CardTitle from "./component/card-title/CardTitle";
import CardContent from "./component/card-content/CardContent";
import FrequencyTab from "../../components/frequncyTab/FrequencyTab";
import { items } from "./helper";
import CoinButton from "./component/coinButton/CoinButton";
import moment from "moment";
import "./home.css";
import { Card } from "antd";
import Chart from "../../components/reCharts/Chart";

function Home() {
  const [showBtns, setShowBtns] = useState(false);
  const { coinDetail, frequency, setFrequency } = useCrypto("bitcoin");

  let coinInfo, coinPrice;
  [coinInfo, coinPrice] = [...coinDetail];
  const { market_data } = { ...coinInfo };

  const coinChartData = coinPrice?.prices.map((value) => ({
    x:
      frequency === 30
        ? moment(value[0]).format("MMM-DD")
        : frequency === 1
        ? moment(value[0]).format("h:mm a")
        : frequency === 365
        ? moment(value[0]).format("MMM -YY")
        : moment(value[0]).format("dddd"),
    y: value[1],
  }));

  const handleTabChange = (key) => {
    setFrequency(key);
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
              title={coinInfo?.name}
              avatar={coinInfo?.image?.small}
              currency={coinInfo?.symbol ? coinInfo?.symbol.toUpperCase() : ""}
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
              <CoinButton coinDetail={coinInfo} />
            </div>
          ) : null}
        </CoinCard>
      </div>
      <div className="coin-chart-container">
        <div className="frequency-tabs">
          <FrequencyTab
            items={items}
            handleTabChange={handleTabChange}
            defaultActiveKey={frequency}
          />
        </div>
        <div className="coin-chart">
          {coinPrice ? (
            <Card>
              <div>
                <p>Lower ${market_data?.low_24h.usd}</p>
                <p>Higher ${market_data?.high_24h.usd}</p>
              </div>
              <Chart
                data={coinChartData}
                areaDataKey={"y"}
                xDatakey={"x"}
                yDatakey={"y"}
                frequency={frequency}
              />
              <p>1BTC=${market_data?.current_price?.usd}</p>
            </Card>
          ) : (
            <></>
          )}
        </div>
        <div className="wallet-action-bar">
          <CoinButton coinDetail={coinInfo} />
        </div>
      </div>
    </div>
  );
}

export default Home;
