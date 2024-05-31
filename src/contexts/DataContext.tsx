import { SetStateAction, createContext } from "react";
import { Page } from "../App";

type DataContextType = {
  pageNumber: number;
  setPageNumber: React.Dispatch<SetStateAction<number>>;
  loading: boolean;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
  dataError: unknown;
  setDataError: React.Dispatch<SetStateAction<unknown>>;
  pages: Page[];
};

export const DataContext = createContext<DataContextType | null>(null);
