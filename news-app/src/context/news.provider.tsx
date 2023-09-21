import { SelectChangeEvent } from "@mui/material";
import axios from "axios";
import {
  ChangeEvent,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from "react";

type NewsProviderProps = {
  children: ReactNode;
};

type NewsContextValue = {
  category: string;
  news: Article[];
  totalArticles: number;
  page: number;
  handleChangePage: (event: ChangeEvent<unknown>, page: number) => void;
  handleChangeCategory: (e: SelectChangeEvent) => void;
};

type NewsResponse = {
  status: string;
  totalResults: number;
  articles: Article[];
};

export type Article = {
  source: { id: string | null; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

const NewsContext = createContext<NewsContextValue>({} as NewsContextValue);

export const NewsProvider = ({ children }: NewsProviderProps) => {
  const [category, setCategory] = useState("general");
  const [news, setNews] = useState<Article[]>([]);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);

  useEffect(() => {
    (async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
      const { data } = await axios<NewsResponse>(url);
      setNews(data.articles);
      setTotalArticles(data.totalResults);
      setPage(1);
    })();
  }, [category]);

  useEffect(() => {
    (async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&page=${page}&category=${category}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
      const { data } = await axios<NewsResponse>(url);
      setNews(data.articles);
      setTotalArticles(data.totalResults);
    })();
  }, [page]);

  const handleChangeCategory = (e: SelectChangeEvent) => {
    setCategory(e.target.value);
  };

  const handleChangePage = (_: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  return (
    <NewsContext.Provider
      value={{
        category,
        news,
        totalArticles,
        page,
        handleChangeCategory,
        handleChangePage,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
