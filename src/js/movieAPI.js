const getUsers = () => {
  axios
    .get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=cdf3f17915090757a86f6a63885f852e"
    )
    .then((response) => {
      const users = response.data;
      console.log(`GET users`, users);
    })
    .catch((error) => console.error(error));
};
getUsers();
