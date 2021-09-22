function detailPage(movieList) {
  const movieDiv = document.querySelector(".info-content");
  const likeBtn = movieDiv.querySelector(".like-btn");
  const id = window.location.pathname.split("/")[2];

  const check = movieList.find((ele) => ele === id);
  if (check !== undefined) {
    likeBtn.className = "like-btn like";
  }

  likeBtn.addEventListener("click", () => {
    console.log("event");
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
}

function wishPage(movieList) {
  console.log("hey");
  const appDiv = document.getElementById("app");
  appDiv.addEventListener("click", (e) => {
    const name = e.target.classList[0];
    const parentDiv = e.target.parentNode;
    if (name === "like-btn") {
      const id = e.target.previousElementSibling.href.split("details/")[1];
      const idx = movieList.indexOf(id);
      movieList.splice(idx, 1);
      localStorage.setItem("movie", JSON.stringify(movieList));
      parentDiv.remove();
    }
  });
}

function likeBtn() {
  const pathCheck = window.location.pathname.split("/")[1];
  const movieList = JSON.parse(localStorage.getItem("movie"));

  if (pathCheck === "details") {
    console.log("details");
    detailPage(movieList);
  } else if (pathCheck === "wishlist") {
    console.log("wishlist");
    wishPage(movieList);
  }
}

export default likeBtn;
