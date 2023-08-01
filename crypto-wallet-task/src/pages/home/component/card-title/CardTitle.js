import './cardtitle.css'

function CardTitle({title, avatar, currency}) {
  return (
    <div className="card-header">
      <div className="card-title">
        <img src={avatar} width="40px" height="40px" alt="coin-logo"/>
        <h4>{title}</h4>
      </div>
      <span>{currency}</span>
    </div>
  );
}

export default CardTitle;
