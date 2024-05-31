import { Instruction } from "./pages/Instruction/Instruction";
import { Game } from "./pages/Game/Game";
import { Demographics } from "./pages/Demographics/Demographics";

import { DataContext } from "./contexts/DataContext";

import { useState } from "react";
import { Navigation } from "./navigation/Navigation";

export type Page = {
  text: string;
  component: JSX.Element;
};

const pages: Page[] = [
  {
    text: "Instruction 1",
    component: <Instruction instructionNumber={1} />,
  },
  {
    text: "Instruction 2",
    component: <Instruction instructionNumber={2} />,
  },
  {
    text: "Instruction 3",
    component: <Instruction instructionNumber={3} />,
  },
  { text: "The Game", component: <Game /> },
  {
    text: "Demographic Survey",
    component: <Demographics />,
  },
] as const;

function App() {
  const [pageNumber, setPageNumber] = useState(0);

  const [loading, setLoading] = useState(false);
  const [dataError, setDataError] = useState<unknown>(null);

  console.log("rendered App");
  return (
    <DataContext.Provider
      value={{
        pageNumber,
        setPageNumber,
        loading,
        setLoading,
        dataError,
        setDataError,
        pages,
      }}>
      <Navigation show={true} />
      {pages[pageNumber]["component"]}
    </DataContext.Provider>
  );
}

export default App;
