import { SetStateAction } from "react";
import "./DropdownMenu.scss";
import ErrorMessage from "./ErrorMessage";
import { errorMessageNoAnswer } from "../config";

export type DivRefType = {
  scrollToDiv: () => void;
  div: HTMLDivElement | null;
};

export type InputRefType = {
  scrollToDiv: () => void;
};

export type OptionType = {
  text: string;
  key: string;
  allowTextEntry?: boolean;
  placeholder?: string;
  correct?: boolean;
};

type Props = {
  question: string;
  options: OptionType[];
  chosenOption: string;
  showErrorMessage: boolean;
  setChosenOption: React.Dispatch<SetStateAction<string>>;
};

const DropdownMenu = ({
  question,
  options,
  chosenOption,
  showErrorMessage,
  setChosenOption,
}: Props) => {
  return (
    <>
      <ErrorMessage
        text={errorMessageNoAnswer}
        errorVariable={showErrorMessage}
      />
      <div className={`dropdown-menu`}>
        <h4>{question}</h4>
        <div className="dropdown-menu--container">
          <select
            value={chosenOption}
            onChange={e => {
              const target = e.target;
              setChosenOption(target.value);
            }}>
            {options.map(option => (
              <option
                key={option.key}
                value={option.text}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default DropdownMenu;
