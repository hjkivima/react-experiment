import "./ErrorMessage.scss";
import React, { forwardRef } from "react";

type Props = {
  errorVariable: boolean;
  text?: string;
  style?: React.CSSProperties;
};

type Ref = HTMLHeadingElement;

const ErrorMessage = forwardRef<Ref, Props>(function ErrorMessage(
  {
    errorVariable,
    text = "Something went wrong. Please refresh the page.",
    style,
  },
  ref
) {
  return (
    <>
      {errorVariable && (
        <h3
          ref={ref}
          style={style}
          className="error">
          {text}
        </h3>
      )}
    </>
  );
});

export default ErrorMessage;
