import React, {
  SetStateAction,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import "./MultipleChoiceOneAnswer.scss";
import ErrorMessage from "./ErrorMessage";
import { errorMessageNoAnswer } from "../config";
import { DivRefType } from "./UnderstandingQuestion";

type OptionType = {
  text: string;
  key: string;
  allowTextEntry?: boolean;
  placeholder?: string;
};

type Props = {
  question: string;
  options: OptionType[];
  chosenOptions: Set<string>;
  setChosenOptions: React.Dispatch<SetStateAction<Set<string>>>;
  showErrorMessage: boolean;
  textEntry?: string;
  setTextEntry?: React.Dispatch<SetStateAction<string>>;
};

const MultipleChoiceOneAnswer = forwardRef<DivRefType, Props>(
  (
    {
      question,
      options,
      chosenOptions,
      setChosenOptions,
      showErrorMessage,
      textEntry,
      setTextEntry,
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
        <ErrorMessage
          errorVariable={showErrorMessage}
          text={errorMessageNoAnswer}
        />

        <div
          ref={divRef}
          className={`understanding-question ${
            showErrorMessage ? "answer-error" : ""
          }`}>
          <h4>{question}</h4>
          <div className="options-container">
            {options.map(option => (
              <React.Fragment key={option.key}>
                <button
                  className={`option ${
                    chosenOptions.has(option.text) ? "option-selected" : ""
                  }`}
                  onClick={() => {
                    if (chosenOptions.has(option.text))
                      return setChosenOptions(prevOptions => {
                        const newSet = new Set(prevOptions);
                        newSet.delete(option.text);
                        return newSet;
                      });

                    setChosenOptions(
                      prevOptions => new Set([...prevOptions, option.text])
                    );
                  }}
                  key={option.key}>
                  {option.text}
                </button>
                {option.allowTextEntry && (
                  <input
                    autoCorrect="false"
                    className="text-entry"
                    value={textEntry}
                    onChange={e => {
                      const target = e.target;
                      if (!setTextEntry) return;
                      if (!chosenOptions.has(option.text)) return;
                      setTextEntry(target.value);
                    }}
                    placeholder={option.placeholder}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </>
    );
  }
);
export default MultipleChoiceOneAnswer;
