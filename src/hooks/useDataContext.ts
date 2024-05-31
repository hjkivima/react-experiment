import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

export default function useDataContext() {
  const value = useContext(DataContext);
  if (value == null) throw new Error("Should be within Context.Provider");

  return value;
}
