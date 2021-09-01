const axios = require("axios");

const getUsers = () => {
  axios
    .get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=cdf3f17915090757a86f6a63885f852e&language=ko-KR&page=1"
    )
    .then((response) => {
      const movieLists = response.data.results;
      Object.values(movieLists).forEach((ele) => {
        console.log(
          ele.title,
          ele.id,
          ele.genre_ids,
          ele.overview,
          ele.poster_path
        );
      });
    })
    .catch((error) => console.error(error));
};
getUsers();
