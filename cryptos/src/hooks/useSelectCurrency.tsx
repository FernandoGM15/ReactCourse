import styled from "@emotion/styled";
import { OptionI } from "../components/Form/Form";
import { useState } from "react";

interface useSelectCurrencyProps {
  label: string;
  options: OptionI[];
}

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
`;


const useSelectCurrency = ({ label, options }: useSelectCurrencyProps) => {
  const [state, setState] = useState("");

  const SelectCurrency = () => (
    <>
      <Label>{label}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </Select>
    </>
  );

  return [state, SelectCurrency];
};

export default useSelectCurrency;
