import { createElement as h, useState } from "react";

function SearchBar({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = title.trim();
    if (text === "") return;
    onAdd(text);
    setTitle("");
  };

  return h(
    "form",
    { className: "task-form", onSubmit: handleSubmit },
    h("input", {
      type: "text",
      placeholder: "Tìm tên phim...",
      value: title,
      onChange: (e) => setTitle(e.target.value),
    }),
    h("input", {
      type: "text",
      placeholder: "Tìm kiếm...",
      value: search,
      onChange: (e) => setSearch(e.target.value),
    }),
  );
}

export default SearchBar;
