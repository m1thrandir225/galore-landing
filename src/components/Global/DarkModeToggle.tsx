"use client";

import {Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";
import {useMemo} from "react";

const DarkModeToggle: React.FC = () => {
  const {setTheme, theme, systemTheme} = useTheme();

  const isDark = useMemo(() => {
    return theme === "dark" || (theme === "system" && systemTheme === "dark");
  }, [theme, systemTheme]);
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="text-onBackground"
    >
      {isDark ? <Moon /> : <Sun />}
    </button>
  );
};

export default DarkModeToggle;
