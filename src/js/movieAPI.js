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
      console.log(movieLists[1]);
      Object.values(movieLists).forEach((ele) => {
        movie(ele.title, ele.id, ele.poster_path, ele.vote_average);
      });
      console.log(3);
    })
    .catch((error) => {
      console.error(error);
    });
};

const getMain = () => {
  getBanner(getMovies);
};
export default getMain;
