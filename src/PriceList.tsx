import React, { SetStateAction } from "react";
import "./PriceList.scss";

type Props = {
  minPoints: number;
  maxPoints: number;
  increment: number;
  chosenRowIndex: number | null;
  setChosenRowIndex: React.Dispatch<SetStateAction<number | null>>;
  leftColumnChosen: boolean;
  setLeftColumnChosen: React.Dispatch<SetStateAction<boolean>>;
};

const PriceList = ({
  minPoints,
  maxPoints,
  increment,
  chosenRowIndex,
  setChosenRowIndex,
  leftColumnChosen,
  setLeftColumnChosen,
}: Props) => {
  const createArray = (
    minPoints: number,
    maxPoints: number,
    increment: number
  ) =>
    Array.from(
      { length: Math.floor((maxPoints - minPoints) / increment) + 1 },
      (_, i) => minPoints + i * increment
    );

  const pointsGivenUpArray = createArray(minPoints, maxPoints, increment);

  return (
    <div className="price-list">
      <div className="title price-list-option-left">Option A and (you):</div>
      <div className="title price-list-option-right">Option B and (you):</div>
      {pointsGivenUpArray.map((pointsGivenUp, index) => {
        return (
          <React.Fragment key={`row-${index}`}>
            <div
              className={`price-list-option-left price-list-option ${
                chosenRowIndex && index < chosenRowIndex ? "focused" : ""
              } ${
                chosenRowIndex != null &&
                leftColumnChosen &&
                index === chosenRowIndex
                  ? "focused"
                  : ""
              }
              
              `}
              onClick={() => {
                setChosenRowIndex(index);
                setLeftColumnChosen(true);
              }}>
              Give up {pointsGivenUp} points
            </div>
            <div
              className={`price-list-option-right price-list-option  ${
                chosenRowIndex !== null && index > chosenRowIndex
                  ? "focused"
                  : ""
              } ${
                chosenRowIndex !== null &&
                !leftColumnChosen &&
                index === chosenRowIndex
                  ? "focused"
                  : ""
              } ${chosenRowIndex === 0 && !leftColumnChosen ? "focused" : ""}`}
              onClick={() => {
                setChosenRowIndex(index);
                setLeftColumnChosen(false);
              }}>
              Give up 0 points
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default PriceList;
