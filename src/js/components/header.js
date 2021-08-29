function headerBox(eleList) {
  const headerBox = document.createElement("div");
  const headerWrap = document.createElement("div");
  headerBox.className = "header-box";
  headerWrap.className = "header-wrap";
  eleList.forEach((ele) => {
    headerWrap.append(ele);
    headerBox.append(headerWrap);
  });

  return headerBox;
}

function headerTop() {
  const miniNav = document.createElement("ul");
  const navList = ["로그인", "이용권", "편성표", "이벤트", "인재채용"];
  const eleList = [];
  navList.forEach((ele) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.innerHTML = ele;
    li.append(a);
    miniNav.append(li);
  });
  miniNav.className = "wrap-miniNav";
  eleList.push(miniNav);
  return eleList;
}

function headerBottom() {
  const heading = document.createElement("h1");
  const strong = document.createElement("strong");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const navList = ["실시간", "TV프로그램", "영화", "티빙몰"];
  const eleList = [];
  const form = document.createElement("form");
  const input = document.createElement("input");
  const button = document.createElement("button");

  strong.innerHTML = "TVING";
  strong.className = "sr-only";
  heading.append(strong);
  eleList.push(heading);

  navList.forEach((ele) => {
    const a = document.createElement("a");
    const h2 = document.createElement("h2");
    a.innerHTML = ele;
    h2.append(a);
    ul.append(h2);
  });
  nav.append(ul);
  eleList.push(nav);

  form.className = "hiding-search";
  input.placeholder = "검색어를 입력해주세요";
  button.className = "search-btn";
  form.append(input);
  eleList.push(form);
  eleList.push(button);

  return eleList;
}

const header = document.createElement("header");
header.className = "home-header";
header.append(headerBox(headerTop()));
header.append(headerBox(headerBottom()));

// function showDrop() {
//   const homeHeader = document.querySelector(".home-header");
//   const miniNav = homeHeader.querySelector(".wrap-miniNav");
//   const miniLists = miniNav.querySelectorAll("li");
//   const overAnchor = miniLists[1].querySelector("a");
//   const voucher = miniLists[1].querySelector(".voucher");

//   // 이용권 메뉴 보여주기
//   overAnchor.addEventListener("mouseover", () => {
//     voucher.classList.remove("hiding");
//     console.log(1);
//   });

//   voucher.addEventListener("mouseleave", () => {
//     voucher.classList.add("hiding");
//     console.log(2);
//   });
// }

// function showSearch() {
//   const homeHeader = document.querySelector(".home-header");
//   const searchForm = homeHeader.querySelector("form");
//   const searchInput = searchForm.querySelector("input");
//   const searchBtn = homeHeader.querySelector(".search-btn");

//   // 검색창 보여주기
//   searchBtn.addEventListener("click", () => {
//     searchForm.className = "";
//   });

//   searchInput.addEventListener("focusout", () => {
//     searchForm.className = "hiding-search";
//     console.log("hey");
//   });
// }

// showSearch();
// showDrop();

export default header;
