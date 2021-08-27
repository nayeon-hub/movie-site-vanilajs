const homeHeader = document.querySelector(".home-header");
const searchForm = homeHeader.querySelector("form");
const searchInput = searchForm.querySelector("input");
const searchBtn = homeHeader.querySelector(".search-btn");
const miniNav = homeHeader.querySelector(".wrap-miniNav");
const miniLists = miniNav.querySelectorAll("li");
const overAnchor = miniLists[1].querySelector("a");
const voucher = miniLists[1].querySelector(".voucher");

// 검색창 보여주기
searchBtn.addEventListener("click", () => {
  searchForm.className = "";
});

searchInput.addEventListener("focusout", () => {
  searchForm.className = "hiding-search";
  console.log("hey");
});

// 이용권 메뉴 보여주기
overAnchor.addEventListener("mouseover", () => {
  voucher.classList.remove("hiding");
  console.log(1);
});

voucher.addEventListener("mouseleave", () => {
  voucher.classList.add("hiding");
  console.log(2);
});
