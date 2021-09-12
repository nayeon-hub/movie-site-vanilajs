export default () => {
  const movieDiv = document.querySelector(".info-content");
  const likeBtn = movieDiv.querySelector(".like-btn");
  const id = window.location.pathname.split("/")[2];
  const movieList = JSON.parse(localStorage.getItem("movie"));
  likeBtn.addEventListener("click", () => {
    if (likeBtn.classList[1] === "unlike") {
      likeBtn.className = "like-btn like";
      movieList.push(id);
    } else {
      likeBtn.className = "like-btn unlike";
      const idx = movieList.indexOf(id);
      if (idx !== -1) {
        movieList.splice(idx, 1);
      }
    }
    localStorage.setItem("movie", JSON.stringify(movieList));
  });
};
