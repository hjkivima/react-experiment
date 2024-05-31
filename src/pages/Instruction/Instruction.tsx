import { Card } from "../../UI-components/Card";
import { NextButton } from "../../UI-components/NextButton";
import { Spinner } from "../../UI-components/Spinner";
import useDataContext from "../../hooks/useDataContext";
import { sendData } from "../../utilities/firebase";

type Props = {
  instructionNumber: number;
};
export function Instruction({ instructionNumber }: Props) {
  const { pageNumber, setPageNumber, loading, setLoading, setDataError } =
    useDataContext();

  async function handleButtonClick() {
    window.scrollTo(0, 0);
    const data = {
      pageNumber,
      currentPage: "instruction",
      username: "test",
      more: true,
    } as const;

    setLoading(true);

    await sendData(
      data,
      "nextButtonClicks",
      setDataError,
      setLoading,
      setPageNumber
    );
  }

  if (loading) return <Spinner />;
  return (
    <Card>
      <header>
        <h1>Instruction {instructionNumber}</h1>
      </header>
      <main>
        <p>
          Some text. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Velit, doloremque optio, maiores obcaecati atque dignissimos eius,
          suscipit ipsum minima alias ullam. Voluptate numquam eaque recusandae
          amet praesentium fugit minima dicta.
        </p>
      </main>
      <footer>
        <NextButton onClick={handleButtonClick} />
      </footer>
    </Card>
  );
}
