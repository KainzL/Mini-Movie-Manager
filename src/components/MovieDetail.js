import { createElement as h } from "react";

function MovieDetail({ movie }) {
  return h(
    "aside",
    { className: "detail-box" },
    h("p", { className: "detail-heading" }, "Movie Details"),
    movie
      ? h(
          "div",
          null,
          h("p", null, "Title: " + movie.title),
          h("p", null, "Genre: " + movie.genre),
          h("p", null, "Year: " + movie.year),
          h("p", null, "Rating: " + movie.rating),
          h("p", null, "Duration: " + movie.duration + " minutes"),
          h("p", null, "Director: " + movie.director),
          h("p", null, "Description: " + movie.description)
        )
      : h("p", { className: "empty" }, "Chọn một phim để xem chi tiết.")
  );
}

export default MovieDetail;
