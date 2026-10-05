import { createElement as h } from "react";

function SearchForm({ value, onChange }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return h(
    "form",
    { className: "search-form", onSubmit: handleSubmit },
    h("input", {
      type: "text",
      placeholder: "Tìm kiếm phim...",
      value: value,
      onChange: (e) => onChange(e.target.value),
    }),
    h("button", { type: "button", onClick: () => onChange("") }, "Xóa")
  );
}

export default SearchForm;
