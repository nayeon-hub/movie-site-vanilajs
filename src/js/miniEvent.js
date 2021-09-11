export default () => {
  const axios = require("axios");
  const homeHeader = document.querySelector(".home-header");
  const searchForm = homeHeader.querySelector("form");
  const searchInput = searchForm.querySelector("input");
  const searchBtn = homeHeader.querySelector(".search-btn");

  const div = document.createElement("div");
  div.className = "title-list";

  // 검색창 보여주기
  searchBtn.addEventListener("click", () => {
    searchForm.className = "";
  });

  searchForm.addEventListener("blur", () => {
    searchForm.className = "hiding-search";
    div.remove();
    console.log("hey");
  });

  searchInput.addEventListener("input", () => {
    getInfo(searchInput.value);
  });

  function createBox(title) {
    const span = document.createElement("span");
    span.innerHTML = title;
    return span;
  }

  const getInfo = async (value) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=cdf3f17915090757a86f6a63885f852e&language=ko&query=${value}&page=1&include_adult=false`
      )
      .then((response) => {
        const data = response.data.results;
        div.innerHTML = "";
        data.forEach((ele) => {
          console.log(ele.title);
          div.append(createBox(ele.title));
        });
        searchForm.append(div);
      })
      .catch((error) => {
        // console.log("not input");
      });
  };
};
