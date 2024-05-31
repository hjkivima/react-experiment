import React, { SetStateAction, useEffect, useRef } from "react";
import "./Slider.scss";

type Props = {
  value: number;
  isTouched: boolean;
  onChange: (arg: number) => void;
  setIsTouched: React.Dispatch<SetStateAction<boolean>>;
  min: number;
  max: number;
  question: string;
  style?: React.CSSProperties;
};
const Slider = ({
  value,
  isTouched,
  onChange,
  setIsTouched,
  min,
  max,
  question,
  style,
}: Props) => {
  const sliderRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    onChange(+target.value);

    const adjustedSliderValue = (100 * (+target.value - min)) / (max - min);
    sliderRef?.current?.style.setProperty(
      "--slider-value",
      `${adjustedSliderValue}%`
    );
  };

  const handlePointerDown = (event: React.SyntheticEvent) => {
    setIsTouched(true);
    const target = event.target as HTMLInputElement;
    const adjustedSliderValue = (100 * (+target.value - min)) / (max - min);
    sliderRef?.current?.style.setProperty(
      "--slider-value",
      `${adjustedSliderValue}%`
    );
  };

  useEffect(() => {
    const adjustedSliderValue = (100 * (value - min)) / (max - min);
    sliderRef?.current?.style.setProperty(
      "--slider-value",
      `${adjustedSliderValue}%`
    );
  }, [value, max, min]);

  return (
    <div
      className="judge-slider"
      style={style}>
      <div className="judge-slider--text">{question}</div>
      <div className="judge-slider--container">
        <input
          ref={sliderRef}
          type="range"
          min={min || 0}
          max={max || 10}
          value={value}
          onChange={handleChange}
          onPointerDown={handlePointerDown}
          className={`judge-slider--slider ${
            isTouched ? "judge-slider--slider-touched" : ""
          }`}
        />
        <span className="judge-slider--value">{value} points</span>
      </div>
    </div>
  );
};

export default Slider;
