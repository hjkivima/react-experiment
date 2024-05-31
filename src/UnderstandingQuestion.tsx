import React, {
  forwardRef,
  CSSProperties,
  useRef,
  useImperativeHandle,
} from "react";
import "./UnderstandingQuestion.scss";
import ErrorMessage from "./ErrorMessage";

export type DivRefType = {
  scrollToDiv: () => void;
  div: HTMLDivElement | null;
};

type OptionsType = {
  title: string;
  key: string;
  correct: boolean;
};

type Props = {
  options: OptionsType[];
  questionTitle: string;
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  setCorrectChoice: React.Dispatch<React.SetStateAction<boolean>>;
  showErrorMessage: boolean;
  errorText: string;
  style?: CSSProperties;
};

const UnderstandingQuestion = forwardRef<DivRefType, Props>(
  (
    {
      options,
      questionTitle,
      selectedOption,
      setSelectedOption,
      setCorrectChoice,
      showErrorMessage,
      errorText,
      style,
    },
    ref
  ) => {
    const divRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(
      ref,
      () => ({
        scrollToDiv() {
          window.scrollTo(0, window.scrollY);
          divRef.current?.scrollIntoView({ behavior: "smooth" });
        },
        get div() {
          return divRef.current;
        },
      }),
      []
    );
    return (
      <>
        <div
          className={`understanding-question ${
            showErrorMessage ? "answer-error" : ""
          }`}
          ref={divRef}>
          <h4>
            Understanding question:{" "}
            <span className="questionTitle">{questionTitle}</span>
          </h4>
          <div
            className="options-container"
            style={style}>
            {options.map((option, i) => (
              <React.Fragment key={option.key}>
                <button
                  id={option.key}
                  type="button"
                  className={`option ${
                    selectedOption === options[i].title ? "option-selected" : ""
                  }`}
                  onClick={e => {
                    e.preventDefault();
                    setSelectedOption(options[i].title);
                    setCorrectChoice(options[i].correct);
                  }}>
                  {option.title}
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>
        <ErrorMessage
          errorVariable={showErrorMessage}
          text={errorText}
        />
      </>
    );
  }
);

export default UnderstandingQuestion;
