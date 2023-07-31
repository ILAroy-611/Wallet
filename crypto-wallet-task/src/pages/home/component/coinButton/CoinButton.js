import { BsCurrencyDollar } from "react-icons/bs";
import WalletBtn from "../../../../components/button/WalletBtn";
import "./coinbutton.css";

function CoinButton({ coinDetail }) {
  return (
    <>
      <div className="btn-container">
        <BsCurrencyDollar className="dollar-style buy-dollar-style" />
        <WalletBtn block={true} size="large" type="text">
          <p className="btn-text">
            Buy {coinDetail?.symbol ? coinDetail?.symbol.toUpperCase() : ""}
          </p>
        </WalletBtn>
      </div>
      <div className="btn-container">
        <BsCurrencyDollar className="dollar-style sell-dollar-style" />
        <WalletBtn block={true} size="large" type="text">
          <p className="btn-text">
            Sell {coinDetail?.symbol ? coinDetail?.symbol.toUpperCase() : ""}
          </p>
        </WalletBtn>
      </div>
    </>
  );
}

export default CoinButton;
