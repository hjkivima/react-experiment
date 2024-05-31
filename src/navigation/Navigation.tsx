import "./Navigation.scss";
import { useNavigation } from "./useNavigation";
import Hamburger from "./Hamburger";
import { NavigationSidebar } from "./NavigationSidebar";

type Props = {
  show: boolean;
};

export const Navigation = ({ show }: Props) => {
  const { navigationIsOpen, setNavigationIsOpen, HamburgerRef, NavigationRef } =
    useNavigation();

  if (!show) return;

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") setNavigationIsOpen(false);
  });

  return (
    <>
      <NavigationSidebar
        navigationIsOpen={navigationIsOpen}
        setNavigationIsOpen={setNavigationIsOpen}
        NavigationRef={NavigationRef}
      />
      <Hamburger
        ref={HamburgerRef}
        navigationOpen={navigationIsOpen}
        setNavigationOpen={setNavigationIsOpen}
      />
    </>
  );
};
