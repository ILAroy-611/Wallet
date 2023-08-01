import { BsChevronCompactDown } from "react-icons/bs";
import './cardcontent.css';
import WalletBtn from "../../../../components/button/WalletBtn";

function CardContent({handleDownArrowClick}) {
  return (
    <div className="card-content">
      <h3>3.529020 BTC</h3>
      <WalletBtn action={handleDownArrowClick}>
        <BsChevronCompactDown />
      </WalletBtn>
    </div>
  );
}

export default CardContent;
