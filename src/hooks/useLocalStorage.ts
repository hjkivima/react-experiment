import { useState } from "react";
//import { useEffect } from "react";
// import Cookies from "js-cookie";

// function useLocalStorage<T>(
//   key: string,
//   initialValue: T
// ): [T, React.Dispatch<React.SetStateAction<T>>] {
//   const [value, setValue] = useState(() => {
//     const localValue = localStorage.getItem(key);
//     if (localValue == null) {
//       if (typeof initialValue === "function") {
//         return initialValue();
//       }
//       return initialValue;
//     } else {
//       return JSON.parse(localValue);
//     }
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);

//   return [value, setValue];
// }

// function useLocalStorage<T>(
//   key: string,
//   initialValue: T
// ): [T, React.Dispatch<React.SetStateAction<T>>] {
//   const [value, setValue] = useState<T>(() => {
//     const localValue = Cookies.get(key);
//     if (localValue == null) {
//       if (typeof initialValue === "function") {
//         return initialValue();
//       }
//       return initialValue;
//     } else {
//       return JSON.parse(localValue);
//     }
//   });

//   useEffect(() => {
//     Cookies.set(key, JSON.stringify(value), {
//       expires: (1 / 24) * (10 / 60),
//     }); // Expires in 10 minutes
//   }, [key, value]);

//   return [value, setValue];
// }

function useLocalStorage<T>(_: string, initialValue: T) {
  return useState<T>(initialValue);
}

export default useLocalStorage;
