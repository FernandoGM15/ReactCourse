import { TradeI } from "../../App";
import styled from "@emotion/styled";

interface ResultsProsI {
  trade: TradeI;
}

const Container = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap:1rem;
  margin-top: 30px;
`;
const Text = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;
const Price = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

const Image = styled.img`
  display: block;
  width: 130px;
`
const Results = ({ trade }: ResultsProsI) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    trade;

  return (
    <Container>
      <Image src={`https://cryptocompare.com/${IMAGEURL}`}></Image>
      <div>
        <Price>
          Current price: <span>{PRICE}</span>
        </Price>
        <Text>
          Day's highest price: <span>{HIGHDAY}</span>
        </Text>
        <Text>
          Day's lowest price: <span>{LOWDAY}</span>
        </Text>
        <Text>
          Last 24 hours variant: <span>{CHANGEPCT24HOUR}</span>
        </Text>
        <Text>
          Last update: <span>{LASTUPDATE}</span>
        </Text>
      </div>
    </Container>
  );
};
export default Results;
