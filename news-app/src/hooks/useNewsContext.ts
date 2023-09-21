import { useContext } from "react";
import NewsContext from "../context/news.provider";

const useNewsContext = () => {
  return useContext(NewsContext);
};

export default useNewsContext;
