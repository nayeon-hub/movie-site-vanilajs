const axios = require("axios");
import { banner, movie } from "./components/main.js";

const getBanner = (cd) => {
  axios
    .get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=cdf3f17915090757a86f6a63885f852e&language=ko-KR&page=1"
    )
    .then((response) => {
      const movieLists = response.data.results;
      const appDiv = document.getElementById("app");
      // console.log(appDiv);
      appDiv.innerHTML = "";
      banner(movieLists[2].title, movieLists[2].id, movieLists[2].poster_path);
      cd();
      console.log("home");
    })
    .catch((error) => {
      console.error(error);
    });
};

const getMovies = () => {
  axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=cdf3f17915090757a86f6a63885f852e&language=ko-KR&page=1"
    )
    .then((response) => {
      const movieLists = response.data.results;
      const appDiv = document.getElementById("app");
      const div = document.createElement("div");
      div.className = "movie-list";
      Object.values(movieLists).forEach((ele) => {
        div.append(movie(ele.title, ele.id, ele.poster_path));
      });
      appDiv.append(div);
    })
    .catch((error) => {
      console.error(error);
    });
};

export { getBanner, getMovies };
