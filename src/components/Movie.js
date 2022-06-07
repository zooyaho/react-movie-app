import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const Movie = ({ id,coverImage, title, summary, genres }) => {
  return (
    <div>
      <img src={coverImage} alt={title} />
      <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => {
          return <li key={g}>{g}</li>;
        })}
      </ul>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, // string을 가진 array
};

export default Movie;
