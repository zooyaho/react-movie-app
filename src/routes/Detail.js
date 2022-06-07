import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieInfo(json);
  };
  
  useEffect(() => {
    getMovie();
  }, []);
  
  console.log(movieInfo);
  // const {background_image_original,title, year, description_full, genres } = movieInfo.data.movie;
  // console.log(background_image_original);

  return (
    <div>
      {/* <img src={background_image_original} alt={title} />
      <h2>{title}</h2>
      <p>{year}</p>
      <p>{description_full}</p>
      <ul>
        {genres.map((g) => {
          return <li key={g}>{g}</li>;
        })}
      </ul> */}
    </div>
  );
};

export default Detail;
