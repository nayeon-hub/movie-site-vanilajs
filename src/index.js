import header_list from "./js/components/header.js";
import Home from "./js/components/home.js";
import Poster from "./js/components/detail";
import miniEvent from "./js/function/searchEvent.js";
import Wishlist from "./js/components/wishlist.js";
import "./css/index.css";

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "", view: Home },
    { path: "details", view: Poster },
    { path: "wishlist", view: Wishlist },
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
  let lsList = localStorage.getItem("movie");

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

  if (lsList === null) {
    localStorage.setItem("movie", JSON.stringify([]));
  }
});
