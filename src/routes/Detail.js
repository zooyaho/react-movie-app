import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import { fetchMovieDetail } from "./api";
import { useQuery } from "react-query";

const Detail = () => {
  const { id } = useParams();
  const {isLoading , data:movieInfo} = useQuery("MovieInfo", ()=>fetchMovieDetail(id));
  // const [loading, setLoading] = useState(true);
  // const [movieInfo, setMovieInfo] = useState([]);

  // const getMovie = async () => {
  //   const json = await (
  //     await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
  //   ).json();
  //   setMovieInfo(json);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   getMovie();
  // }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.movie}>
          <img
            src={movieInfo.data.movie.background_image_original}
            alt={movieInfo.data.movie.title}
            className={styles.movie__img}
          />
          <div>
            <h2 className={styles.movie__title}>
              {movieInfo.data.movie.title}
            </h2>
            <h3 className={styles.movie__year}>{movieInfo.data.movie.year}</h3>
            <p>
              {movieInfo.data.movie.description_full.length > 235
                ? `${movieInfo.data.movie.description_full.slice(0, 235)}...`
                : movieInfo.data.movie.description_full}
            </p>
            <ul className={styles.movie__genres}>
              {movieInfo.data.movie.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
