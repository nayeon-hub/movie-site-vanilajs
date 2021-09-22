const axios = require("axios");
import likeEvent from "../function/likeEvent.js";

function createPoster(title, overview, popularity, path, backPath) {
  const appDiv = document.getElementById("app");
  const template = `
  <div class="movie-info">
  <div class="info-background">
    <img src = https://image.tmdb.org/t/p/original/${backPath}>
  </div>
  <div class="info-content">
    <img src=https://image.tmdb.org/t/p/original/${path} alt="" />
    <h2>${title}</h2>
    <span class="like-btn unlike"></span>
    <p>${overview}</p>
    <span>${popularity}</span>
  </div>
</div>`;
  appDiv.innerHTML = template;
}

const getSingleMovie = async () => {
  const lc = await location.pathname.split("/");
  const movieId = lc[2];
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=cdf3f17915090757a86f6a63885f852e&language=en-US`
    )
    .then((response) => {
      const movie = response.data;
      const appDiv = document.getElementById("app");
      appDiv.innerHTML = "";
      createPoster(
        movie.title,
        movie.overview,
        movie.popularity,
        movie.poster_path,
        movie.backdrop_path
      );
      likeEvent();
    })
    .catch((error) => {
      console.error(error);
    });
};

export default getSingleMovie;
