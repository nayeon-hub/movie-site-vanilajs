import "./js/movieAPI.js";
import header_list from "./js/components/header.js";
import getHome from "./js/movieAPI.js";
import getInfo from "./js/miniRouter.js";
import miniEvent from "./js/miniEvent.js";
import getWish from "./js/wishlist";
import "./css/index.css";

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "", view: getHome },
    { path: "details", view: getInfo },
    { path: "wishlist", view: getWish },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname.split("/")[1] === route.path,
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
  match.route.view();
  miniEvent();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  // header
  let header = document.querySelector("header");
  header.className = "home-header";
  header.innerHTML = header_list;

  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
    if (e.target.parentNode.localName === "a") {
      e.preventDefault();
      navigateTo(e.target.parentNode.href);
    }
  });
  router();
  localStorage.setItem("movie", JSON.stringify([]));
});
