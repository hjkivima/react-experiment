import React, { SetStateAction } from "react";
import useDataContext from "../hooks/useDataContext";

type Props = {
  navigationIsOpen: boolean;
  setNavigationIsOpen: React.Dispatch<SetStateAction<boolean>>;
  NavigationRef: React.RefObject<HTMLDivElement>;
};

export function NavigationSidebar({
  navigationIsOpen,
  setNavigationIsOpen,
  NavigationRef,
}: Props) {
  const { pageNumber, setPageNumber, pages } = useDataContext();

  const maxTitleLength = pages
    .map(page => page.text)
    .map(title => title.length)
    .reduce((acc, titleLength) => Math.max(acc, titleLength), 0);

  return (
    <nav
      ref={NavigationRef}
      className="navigation-sidebar"
      style={{
        transform: navigationIsOpen ? "translateX(0%)" : "translateX(100%)",
      }}>
      <h1 className="navigation-sidebar--heading">Pages:</h1>
      {pages.map((component, id) => (
        <button
          onClick={() => {
            setPageNumber(id);
          }}
          onFocus={() => {
            setNavigationIsOpen(true);
          }}
          onBlur={() => setNavigationIsOpen(false)}
          className={`link-to-component ${id === pageNumber ? "selected" : ""}`}
          style={{ minWidth: maxTitleLength * 2.2 + "ch" }}
          key={id}>
          Page {id + 1}: {component["text"]}
        </button>
      ))}
    </nav>
  );
}
