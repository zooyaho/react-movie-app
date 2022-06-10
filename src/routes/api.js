export async function fetchMovie() {
  return await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")).json();
}
export async function fetchMovieDetail(id) {
  return await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
}