import { NextButton } from "../../UI-components/NextButton";
import useDataContext from "../../hooks/useDataContext";

export function Game() {
  const { setPage } = useDataContext();

  return (
    <>
      <h1>Game</h1>
      <main>
        <NextButton onClick={() => setPage(p => p + 1)} />
      </main>
    </>
  );
}
