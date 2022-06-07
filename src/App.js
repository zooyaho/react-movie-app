import React, { useState, useEffect } from "react";

function App() {
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
  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.data.movies.map((movie) => {
            return (
              <div key={movie.id}>
                <img src={movie.medium_cover_image}/>
                <h2>{movie.title}</h2>
                <p>{movie.summary}</p>
                <ul>
                  {movie.genres.map((g) => {
                    return <li key={g}>{g}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
