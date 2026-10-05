import { createElement as h } from "react";

function GenreFilter({ genres, value, onChange }) {
  return h(
    "select",
    { value: value, onChange: (e) => onChange(e.target.value) },
    h("option", { value: "all" }, "Tất cả thể loại"),
    genres.map((genre) => h("option", { key: genre, value: genre }, genre))
  );
}

export default GenreFilter;
