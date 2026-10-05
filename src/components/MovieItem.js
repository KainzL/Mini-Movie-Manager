import { createElement as h } from "react";

function MovieItem({ movie, selected, onToggle, onSelect }) {
  return h(
    "li",
    { className: "movie-item" + (selected ? " selected" : "") },
    h(
      "div",
      { className: "movie-left" },
      h(
        "button",
        {
          className: "star" + (movie.favorite ? " active" : ""),
          title: "Yêu thích",
          onClick: () => onToggle(movie.id),
        },
        movie.favorite ? "★" : "☆"
      ),
      h("div", { className: "movie-title" }, "Title: " + movie.title)
    ),
    h(
      "div",
      { className: "movie-right" },
      h(
        "div",
        { className: "movie-meta" },
        "Genre: " + movie.genre +
          " | Year: " + movie.year +
          " | Rating: " + movie.rating
      ),
      h(
        "div",
        { className: "movie-actions" },
        h(
          "button",
          { onClick: () => onToggle(movie.id) },
          movie.favorite ? "Không yêu thích" : "Yêu thích"
        ),
        h("button", { onClick: () => onSelect(movie.id) }, "Chi tiết")
      )
    )
  );
}

export default MovieItem;
