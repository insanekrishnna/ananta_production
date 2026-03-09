import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full text-text-secondary hover:text-text-primary transition-colors duration-200"
      aria-label="Toggle theme"
    >
      <Sun size={16} strokeWidth={1.5} className="hidden dark:block" />
      <Moon size={16} strokeWidth={1.5} className="block dark:hidden" />
    </button>
  );
};

export default ThemeToggle;
