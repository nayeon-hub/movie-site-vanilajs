import "./js/movieAPI.js";
import header_list from "./js/components/header.js";
import banner from "./js/components/main.js";
import "./css/index.css";

const router = async () => {
  const routes = [
    { path: "/", view: banner },
    { path: "/posts", view: null },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });
  let match = potentialMatches.find(
    (potentialMatches) => potentialMatches.isMatch
  );

  //no Match
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }
  document.querySelector("#app").innerHTML = match.route.view;
};

// window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  // header
  let header = document.querySelector("header");
  header.className = "home-header";
  header_list.forEach((ele) => header.append(ele));

  //banner
  // let appDiv = document.getElementById("app");
  // appDiv.innerHTML = banner;

  router();
});
