// function headerBox(eleList) {
//   const headerBox = document.createElement("div");
//   const headerWrap = document.createElement("div");
//   headerBox.className = "header-box";
//   headerWrap.className = "header-wrap";
//   eleList.forEach((ele) => {
//     headerWrap.append(ele);
//     headerBox.append(headerWrap);
//   });

//   return headerBox;
// }

// function headerTop() {
//   const miniNav = document.createElement("ul");
//   const navList = ["로그인", "이용권", "편성표", "이벤트", "인재채용"];
//   const eleList = [];
//   navList.forEach((ele) => {
//     const li = document.createElement("li");
//     const a = document.createElement("a");
//     a.innerHTML = ele;
//     li.append(a);
//     miniNav.append(li);
//   });
//   miniNav.className = "wrap-miniNav";
//   eleList.push(miniNav);
//   return eleList;
// }

// function headerBottom() {
//   const h1 = document.createElement("h1");
//   const a = document.createElement("a");
//   const strong = document.createElement("strong");
//   const nav = document.createElement("nav");
//   const ul = document.createElement("ul");
//   const navList = ["실시간", "TV프로그램", "영화", "티빙몰"];
//   const eleList = [];
//   const form = document.createElement("form");
//   const input = document.createElement("input");
//   const button = document.createElement("button");

//   strong.innerHTML = "TVING";
//   strong.className = "sr-only";
//   a.append(strong);
//   a.href = "/";
//   h1.append(a);
//   eleList.push(h1);

//   navList.forEach((ele) => {
//     const a = document.createElement("a");
//     const h2 = document.createElement("h2");
//     a.innerHTML = ele;
//     h2.append(a);
//     ul.append(h2);
//   });
//   nav.append(ul);
//   eleList.push(nav);

//   form.className = "hiding-search";
//   input.placeholder = "검색어를 입력해주세요";
//   button.className = "search-btn";
//   form.append(input);
//   eleList.push(form);
//   eleList.push(button);

//   return eleList;
// }

const header = `
      <div class="header-box">
        <div class="header-wrap">
          <ul class="wrap-miniNav">
            <li><a>로그인</a></li>
            <li><a>이용권</a></li>
            <li><a>편성표</a></li>
            <li><a>이벤트</a></li>
            <li><a>인재채용</a></li>
          </ul>
        </div>
      </div>
      <div class="header-box">
        <div class="header-wrap">
          <h1>
            <a href="/" data-link><strong class="sr-only">TVING</strong></a>
          </h1>
          <nav>
            <ul>
              <h2><a>실시간</a></h2>
              <h2><a>TV프로그램</a></h2>
              <h2><a>영화</a></h2>
              <h2><a>티빙몰</a></h2>
            </ul>
          </nav>
          <form class="hiding-search">
            <input placeholder="검색어를 입력해주세요" />
          </form>
          <button class="search-btn"></button>
        </div>
      </div>`;

// const header = document.createElement("header");
// header.className = "home-header";
// header.append(headerBox(headerTop()));
// header.append(headerBox(headerBottom()));

// export default [headerBox(headerTop()), headerBox(headerBottom())];
export default header;
