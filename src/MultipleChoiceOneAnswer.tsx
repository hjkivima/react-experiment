import React, { SetStateAction } from "react";
import "./MultipleChoiceOneAnswer.scss";

type OptionType = {
  text: string;
  key: string;
  allowTextEntry?: boolean;
  placeholder?: string;
};

type Props = {
  question: string;
  options: OptionType[];
  chosenOption: string;
  setChosenOption: React.Dispatch<SetStateAction<string>>;

  onClick: (text: string) => void;
};

const MultipleChoiceOneAnswer = ({
  question,
  options,
  chosenOption,
  setChosenOption,

  onClick,
}: Props) => {
  return (
    <>
      <div className={`understanding-question `}>
        <h4>{question}</h4>
        <div className="options-container">
          {options.map(option => {
            return (
              <React.Fragment key={option.key}>
                <button
                  className={`option ${
                    chosenOption === option.text ? "option-selected" : ""
                  }`}
                  onClick={() => {
                    setChosenOption(option.text);
                    onClick(option.text);
                  }}
                  key={option.key}>
                  {option.text}
                </button>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MultipleChoiceOneAnswer;
