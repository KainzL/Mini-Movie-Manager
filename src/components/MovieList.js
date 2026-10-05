import { createElement as h } from "react";
import MovieItem from "./MovieItem";

function MovieList({ movies, selectedId, onToggle, onSelect }) {
  if (movies.length === 0) {
    return h("p", { className: "empty" }, "Không có phim nào.");
  }

  return h(
    "ul",
    { className: "movie-list" },
    movies.map((movie) =>
      h(MovieItem, {
        key: movie.id,
        movie: movie,
        selected: movie.id === selectedId,
        onToggle: onToggle,
        onSelect: onSelect,
      })
    )
  );
}

export default MovieList;
