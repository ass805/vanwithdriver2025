import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-white/10 backdrop-blur-sm min-w-[44px] min-h-[44px] flex items-center justify-center"
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      {theme === "dark" ? (
        <Sun className="h-6 w-6 text-white" aria-hidden="true" />
      ) : (
        <Moon className="h-6 w-6 text-white" aria-hidden="true" />
      )}
    </button>
  );
};