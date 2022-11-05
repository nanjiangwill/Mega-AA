import { useState } from "react";

function useToggle(init = false) {
  const [value, setValue] = useState(init);
  return [
    value,
    {
      set: setValue,
      toggle: (e) => {
        if (e) {
          e.preventDefault();
        }
        setValue((flag) => !flag);
      },
    },
  ];
}
export default useToggle;
