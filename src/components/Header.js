import { createElement as h, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return h(
    "header",
    { className: "header" },
    h("h1", null, "Mini Movie Manager"),
    h(
      "button",
      { onClick: toggleTheme },
      theme === "light" ? "🌙 Dark" : "☀️ Light"
    )
  );
}

export default Header;
