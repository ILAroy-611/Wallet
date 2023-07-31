import { Avatar, Card } from "antd";

const { Meta } = Card;
function CoinCard({ children, title, extra }) {
  return (
    <>
      <Card
        hoverable
        style={{
          width: '100%',
          margin: '2rem auto',
          padding:'1rem 4rem'
        }}
        title={title}
      >
        {children}
      </Card>
    </>
  );
}

export default CoinCard;
