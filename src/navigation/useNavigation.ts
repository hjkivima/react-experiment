import { useEffect, useRef, useState } from "react";

export function useNavigation() {
  const [navigationIsOpen, setNavigationIsOpen] = useState(false);
  const NavigationRef = useRef<HTMLDivElement>(null);
  const HamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutsideNavigationSidebar = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (
        NavigationRef.current?.contains(target) ||
        HamburgerRef.current?.contains(target)
      )
        return;

      setNavigationIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutsideNavigationSidebar);
  }, []);

  return { navigationIsOpen, setNavigationIsOpen, NavigationRef, HamburgerRef };
}
