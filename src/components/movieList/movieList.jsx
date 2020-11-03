import React from "react";
import MovieCard from "../movieCard/movieCard";
import "./movieList.css";
function movieList({ movie, textSearch , searchRate }) {
  return (
    <div className="movies">
      {movie
        .filter((el) =>
          el.title.toUpperCase().includes(textSearch.toUpperCase()) && el.rate>= searchRate
        )
        .map((el, i) => (
          <MovieCard key={i} movies={el} />
        ))}
    </div>
  );
}

export default movieList;
