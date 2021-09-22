const axios = require("axios");
import likeEvent from "../function/likeEvent.js";

function createMiniMovie(title, path, id) {
  const listDiv = document.querySelector(".wishList");
  const movieItem = document.createElement("div");
  movieItem.className = "movie-item";
  const template = `
    <div class="item-content">
      <a href="/details/${id}" data-link>
        <img src=https://image.tmdb.org/t/p/original/${path} alt="" />
        <h2>${title}</h2>
      </a>
      <span class="like-btn like"></span>
    </div>`;
  movieItem.innerHTML = template;
  listDiv.append(movieItem);
}

const getMovie = async (movieId) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=cdf3f17915090757a86f6a63885f852e&language=en-US`
    )
    .then((response) => {
      const movie = response.data;
      createMiniMovie(movie.title, movie.poster_path, movie.id);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default () => {
  const appDiv = document.getElementById("app");
  appDiv.innerHTML = `<div class="wishList">
  <h2>Movie 위시리스트</h2>
  </div>`;
  const wishList = JSON.parse(localStorage.getItem("movie"));
  wishList.forEach((ele) => {
    getMovie(ele);
  });
  likeEvent();
};
