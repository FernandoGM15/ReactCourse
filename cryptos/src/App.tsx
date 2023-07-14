import styled from "@emotion/styled";
import CryptoImage from "./assets/img/imagen-criptos.png";
import Form from "./components/Form/Form";
import { useEffect, useState } from "react";
import Results from "./components/Results/Results";
import Spinner from "./components/Spinner/Spinner";

/**
 * Styled div
 */
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 5rem;

  @media (max-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

/**
 * Styled img
 */
const Image = styled.img`
  max-width: 400px;
  width: 100%;
  display: block;
`;

/**
 * Styled h1
 */
const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

export interface CurrencyI {
  currency: string | (() => JSX.Element);
  crypto: string | (() => JSX.Element);
}

export interface TradeI {
  PRICE: string;
  HIGHDAY: string;
  LOWDAY: string;
  CHANGEPCT24HOUR: string;
  IMAGEURL: string;
  LASTUPDATE: string;
}

function App() {
  const [currency, setCurrency] = useState<CurrencyI>({
    currency: "",
    crypto: "",
  });

  const [trade, setTrade] = useState<TradeI>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currency.crypto !== "" && currency.currency !== "") {
      (async () => {
        setLoading(true);
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${currency.crypto}&tsyms=${currency.currency}`;
        const req = await fetch(url);
        const result = await req.json();
        setTrade(
          result.DISPLAY[currency.crypto as string][currency.currency as string]
        );
        setLoading(false);
      })();
    }
  }, [currency]);
  return (
    <>
      <Container>
        <Image src={CryptoImage} alt="Cryptocurrencies image" />
        <div>
          <Heading>Trade any cryptocurrency</Heading>
          <Form setCurrency={setCurrency} />
          {loading && <Spinner />}
          {trade && !loading && <Results trade={trade} />}
        </div>
      </Container>
    </>
  );
}

export default App;
