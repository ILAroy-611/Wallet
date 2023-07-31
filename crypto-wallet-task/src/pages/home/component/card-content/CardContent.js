import { BsChevronCompactDown } from "react-icons/bs";
import { BsChevronCompactUp } from "react-icons/bs";
import WalletBtn from "../../../../components/button/WalletBtn";
import "./cardcontent.css";

function CardContent({ showBtns, handleDownArrowClick,market_data }) {

  const percentageChange= market_data?.price_change_percentage_24h
  return (
    <div className="card-content">
      <h3 className="wallet-coin">3.529020 BTC</h3>
      <div className="wallet-coin-price-container">
      <p className="coin-price">${market_data?.current_price?.usd * 3.529020} USD</p>
      <p className="coin-price-change">{percentageChange <0 ? `-${Math.round(percentageChange,2)}` : Math.round((percentageChange + Number.EPSILON) * 100) / 100}%</p>
      </div>
      {showBtns ? (
        <WalletBtn action={handleDownArrowClick}>
          <BsChevronCompactUp />
        </WalletBtn>
      ) : (
        <WalletBtn action={handleDownArrowClick}>
          <BsChevronCompactDown />
        </WalletBtn>
      )}
    </div>
  );
}

export default CardContent;
