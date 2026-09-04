import { useTheme } from "../context/ThemeContext";
import { useTasks } from "../context/TaskContext";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { stats } = useTasks();

  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">React Project 08</p>
        <h1>Task Board</h1>
        <p className="subtitle">
          Shared application state with the Context API.
        </p>
      </div>

      <div className="header-actions">
        <span className="task-total">{stats.total} tasks</span>

        <button
          type="button"
          className="theme-button"
          onClick={toggleTheme}
          aria-label={`Switch to ${
            theme === "light" ? "dark" : "light"
          } mode`}
        >
          {theme === "light" ? "☾" : "☀"}
        </button>
      </div>
    </header>
  );
}
