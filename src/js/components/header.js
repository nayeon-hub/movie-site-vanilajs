const header = `
      <div class="header-box">
        <div class="header-wrap">
          <ul class="wrap-miniNav">
            <li><a>로그인</a></li>
            <li><a>이용권</a></li>
            <li><a>편성표</a></li>
            <li><a>이벤트</a></li>
            <li><a>인재채용</a></li>
            <li><a href="/wishlist" data-link>위시리스트</a></li>
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
