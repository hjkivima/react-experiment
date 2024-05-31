import React, { SetStateAction, forwardRef } from "react";

type Ref = HTMLButtonElement;
type Props = {
  navigationOpen: boolean;
  setNavigationOpen: React.Dispatch<SetStateAction<boolean>>;
};
const Hamburger = forwardRef<Ref, Props>(
  ({ navigationOpen, setNavigationOpen }, hamburgerRef) => {
    const handleHamburgerClick = () => {
      setNavigationOpen((b: boolean) => !b);
    };

    return (
      <div className="hamburger--container">
        <button
          tabIndex={-1}
          ref={hamburgerRef}
          onClick={handleHamburgerClick}
          className={`hamburger ${navigationOpen ? "x" : ""}`}>
          <span
            className={`hamburger--input ${
              navigationOpen ? "open" : ""
            }`}></span>
          <span
            className={`hamburger--input ${
              navigationOpen ? "open" : ""
            }`}></span>
          <span
            className={`hamburger--input ${
              navigationOpen ? "open" : ""
            }`}></span>
        </button>
      </div>
    );
  }
);

export default Hamburger;
