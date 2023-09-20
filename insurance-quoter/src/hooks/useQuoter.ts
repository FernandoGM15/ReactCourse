import { useContext } from "react";
import { QuoterContext } from "../context/quoter-provider";

const useQuoter = (): QuoterContext => {
  return useContext(QuoterContext);
};

export default useQuoter;
