import { useEffect, useState } from "react";

const useTheme = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? "dark" : "";
  }, [dark]);

  return [dark, setDark];
};

export default useTheme;
