import { createElement as h, useState, useContext } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import GenreFilter from "./components/GenreFilter";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import { ThemeContext } from "./context/ThemeContext";
import useLocalStorage from "./hooks/useLocalStorage";
import { movies as movieData } from "./datas/movies";

const initialMovies = movieData.map((movie) => ({ ...movie, favorite: false }));
const genres = [...new Set(movieData.map((movie) => movie.genre))];

function App() {
  const { theme } = useContext(ThemeContext);
  const [movies, setMovies] = useLocalStorage("movies", initialMovies);
  const [genre, setGenre] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("none");
  const [selectedId, setSelectedId] = useState(null);
  const [detailOpened, setDetailOpened] = useState(false);

  const toggleFavorite = (id) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, favorite: !movie.favorite } : movie
      )
    );
  };

  const filtered = movies
    .filter((movie) => genre === "all" || movie.genre === genre)
    .filter((movie) =>
      movie.title.toLowerCase().includes(search.trim().toLowerCase())
    );

  const visibleMovies = [...filtered].sort((a, b) => {
    if (sort === "desc") return b.rating - a.rating;
    if (sort === "asc") return a.rating - b.rating;
    return 0;
  });

  const selectMovie = (id) => {
    setDetailOpened(true);
    setSelectedId(selectedId === id ? null : id);
  };

  const selectedMovie = visibleMovies.find((movie) => movie.id === selectedId);

  const total = movies.length;
  const favoriteCount = movies.filter((movie) => movie.favorite).length;
  const showingCount = visibleMovies.length;

  return h(
    "div",
    { className: "app " + theme },
    h(
      "div",
      { className: "layout" },
      h(
        "div",
        { className: "container" },
        h(Header),
        h(SearchForm, { value: search, onChange: setSearch }),
        h(
          "div",
          { className: "toolbar" },
          h(GenreFilter, { genres: genres, value: genre, onChange: setGenre }),
          h(
            "select",
            { value: sort, onChange: (e) => setSort(e.target.value) },
            h("option", { value: "none" }, "Mặc định"),
            h("option", { value: "desc" }, "Rating giảm dần"),
            h("option", { value: "asc" }, "Rating tăng dần")
          )
        ),
        h(
          "p",
          { className: "stats" },
          "Tổng: " + total + " | Yêu thích: " + favoriteCount + " | Đang hiển thị: " + showingCount
        ),
        h(MovieList, {
          movies: visibleMovies,
          selectedId: selectedId,
          onToggle: toggleFavorite,
          onSelect: selectMovie,
        })
      ),
      detailOpened && h(MovieDetail, { movie: selectedMovie })
    )
  );
}

export default App;
