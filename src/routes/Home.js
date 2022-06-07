import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";

import styles from "./Home.module.css";

const Home = (props) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    // 비동기 처리 async-await
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
    ).json();
    // await은 Promise 객체를 리턴하는 부분 앞에만 붙일 수 있음.
    // const json = await response.json();
    setMovies(json);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.data.movies.map((movie) => {
            return (
              // key는 react.js에서만, map안에서 component들을 render할 때 사용함.
              <Movie
                key={movie.id}
                id={movie.id}
                coverImage={movie.medium_cover_image}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                genres={movie.genres}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;

// useEffect(() => {
//   fetch(
//     "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
//   )
// .then((response) => response.json()) // 응답객체를 json형태로 변환, json을 리턴함.
//     .then((json) => { // 여기서 리턴한 json을 사용하는 것.
//       setMovies(json.data.movies);
//       setLoading(false);
//     });
// }, []);
