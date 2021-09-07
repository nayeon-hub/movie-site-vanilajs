const appDiv = document.getElementById("app");

function banner(title, id, path) {
  const banner = document.createElement("div");
  banner.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${path}`;
  banner.className = "banner";
  banner.innerHTML = `
    <a href="/details/${id}" class="banner-item" data-link>
    <p class="banner-item-info">
    [✨상영 예정작] ${title}
    </p>
    <div class="btn">자세히보기</div>
    </a>
    `;

  appDiv.append(banner);
}

function movie(title, id, path, backPath) {
  const div = document.createElement("div");
  div.className = "movie-item";
  const backDiv = document.createElement("div");
  const backImg = document.createElement("img");
  backImg.src = `https://image.tmdb.org/t/p/original/${backPath}`;
  backDiv.append(backImg);
  div.append(backDiv);

  const a = document.createElement("a");
  a.href = `/details/${id}`;
  const img = document.createElement("img");
  img.src = `https://image.tmdb.org/t/p/original/${path}`;
  img.alt = title;
  a.append(img);
  div.append(a);

  const span = document.createElement("span");
  span.innerHTML = title;
  div.append(span);
  return div;
}

export { banner, movie };
