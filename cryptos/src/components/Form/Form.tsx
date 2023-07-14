import styled from "@emotion/styled";
import useSelectCurrency from "../../hooks/useSelectCurrency";
import { currencies } from "../../data/currency";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Error from "./Error/Error";
import { CurrencyI } from "../../App";

export interface OptionI {
  id: string;
  name: string;
}

export interface DataResponseI {
  Data: {
    CoinInfo: {
      Name: string;
      FullName: string;
    };
  }[];
}

export interface FormPropsI {
  setCurrency: Dispatch<SetStateAction<CurrencyI>>;
}
const SubmitButton = styled.button`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  margin-top: 30px;
  &:hover {
    background-color: #7a7dfe;
  }
`;

const Form = ({ setCurrency }: FormPropsI) => {
  const [cryptos, SetCryptos] = useState<OptionI[]>([]);
  const [error, setError] = useState(false);

  const [currency, SelectCurrency] = useSelectCurrency({
    label: "Choose your currency",
    options: currencies,
  });
  const [crypto, SelectCrypto] = useSelectCurrency({
    label: "Choose your crypto",
    options: cryptos,
  });

  useEffect(() => {
    (async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
      const req = await fetch(url);
      const { Data }: DataResponseI = await req.json();
      const cryptos: OptionI[] = Data.map((crypto) => {
        return {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName,
        };
      });
      SetCryptos(cryptos);
    })();
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if ([crypto, currency].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    setCurrency({ currency, crypto });
  };
  return (
    <>
      {error && <Error>All the fields are required</Error>}
      <form onSubmit={handleSubmit}>
        <SelectCurrency />
        <SelectCrypto />
        <SubmitButton type="submit">Trade</SubmitButton>
      </form>
    </>
  );
};
export default Form;
