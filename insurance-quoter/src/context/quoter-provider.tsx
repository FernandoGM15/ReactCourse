import {
  ChangeEvent,
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import {
  brandCalc,
  currencyFormat,
  getYearDifference,
  planCalc,
} from "../utils/insurance.utils";

type QuoterProviderProps = {
  children: ReactNode;
};

export type QuoterContext = {
  handleChangeData: (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  quoterForm: QuoterForm;
  error: string | null;
  setError: Dispatch<SetStateAction<string | null>>;
  insuranceQuote: () => void;
  result: string | null;
  loading: boolean;
};

type FormInputs = "brand" | "year" | "plan";

type QuoterForm = Record<FormInputs, string>;

export const QuoterProvider = ({ children }: QuoterProviderProps) => {
  /** Quoter form Info */
  const [quoterForm, setQuoterForm] = useState<QuoterForm>({
    brand: "",
    year: "",
    plan: "",
  });

  /** Global error */
  const [error, setError] = useState<string | null>(null);
  /** Result */
  const [result, setResult] = useState<string | null>(null);
  /** Loader */
  const [loading, setLoading] = useState(false);

  /** Handle change form */
  const handleChangeData = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setQuoterForm({
      ...quoterForm,
      [e.target.name]: e.target.value,
    });
  };
  /** Insurance Quote */
  const insuranceQuote = () => {
    setLoading(true);
    setResult(null);
    let result = 2000;
    const difference = getYearDifference(+quoterForm.year);
    result -= (difference * 3 * result) / 100;
    result *= brandCalc(+quoterForm.brand);
    result *= planCalc(+quoterForm.plan);
    const currency = currencyFormat(result);
    setTimeout(() => {
      setResult(currency);
      setLoading(false);
    }, 3000);
  };

  return (
    <QuoterContext.Provider
      value={{
        handleChangeData,
        quoterForm,
        error,
        setError,
        insuranceQuote,
        result,
        loading,
      }}
    >
      {children}
    </QuoterContext.Provider>
  );
};

export const QuoterContext = createContext<QuoterContext>({} as QuoterContext);
