const axios = require("axios");
import hey from "./components/poster.js";

const getInfo = async () => {
  const movieId = await location.pathname.split("/")[2];
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=cdf3f17915090757a86f6a63885f852e&language=en-US`
    )
    .then((response) => {
      const movie = response.data;
      const appDiv = document.getElementById("app");
      appDiv.innerHTML = "";
      hey(movie.title, movie.overview, movie.popularity, movie.poster_path);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default getInfo;
