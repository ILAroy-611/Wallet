import { BsChevronCompactDown } from "react-icons/bs";
import { BsChevronCompactUp } from "react-icons/bs";
import WalletBtn from "../../../../components/button/WalletBtn";
import "./cardcontent.css";

function CardContent({ showBtns, handleDownArrowClick, market_data }) {
  const percentageChange = (
    market_data?.price_change_percentage_24h_in_currency?.usd);

  return (
    <div className="card-content">
      <h3 className="wallet-coin">3.529020 BTC</h3>
      <div className="wallet-coin-price-container">
        <p className="coin-price">
          ${Math.round((market_data?.current_price?.usd * 3.52902 + Number.EPSILON)* 100) / 100} USD
        </p>
        <p className="coin-price-change">
          {percentageChange < 0
            ? `-${Math.round(percentageChange, 2)}`
            : Math.round((percentageChange + Number.EPSILON) * 100) / 100}
          %
        </p>
      </div>
      {showBtns ? (
        <WalletBtn type="text" size="large" action={handleDownArrowClick}>
          <BsChevronCompactUp className="arrow"/>
        </WalletBtn>
      ) : (
        <WalletBtn type="text" size="large" action={handleDownArrowClick}>
          <BsChevronCompactDown className="arrow" />
        </WalletBtn>
      )}
    </div>
  );
}

export default CardContent;
