import axios from 'axios';
const appDiv = document.getElementById('app');

function banner(title, id, path) {
  const banner = document.createElement('div');
  banner.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${path})`;
  banner.className = 'banner';
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

function movie(title, id, path) {
  const div = document.createElement('div');
  div.className = 'movie-item';
  div.innerHTML = `
  <a href="/details/${id}" data-link>
  <img src="https://image.tmdb.org/t/p/original/${path}" alt="${title}">
  </a>
  <span>${title}</span>
  `;
  return div;
}

const getBanner = (cd) => {
  axios
    .get(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=cdf3f17915090757a86f6a63885f852e&language=ko-KR&page=1'
    )
    .then((response) => {
      const movieLists = response.data.results;
      const appDiv = document.getElementById('app');
      appDiv.innerHTML = '';
      banner(
        movieLists[2].title,
        movieLists[2].id,
        movieLists[2].backdrop_path
      );

      cd();
    })
    .catch((error) => {
      console.error(error);
    });
};

const getMovieList = () => {
  axios
    .get(
      'https://api.themoviedb.org/3/movie/popular?api_key=cdf3f17915090757a86f6a63885f852e&language=ko-KR&page=1'
    )
    .then((response) => {
      const movieLists = response.data.results;
      const appDiv = document.getElementById('app');
      const div = document.createElement('div');
      div.className = 'movie-list';
      Object.values(movieLists).forEach((ele) => {
        div.append(movie(ele.title, ele.id, ele.poster_path));
        // console.log(ele);
      });
      appDiv.append(div);
    })
    .catch((error) => {
      console.error(error);
    });
};

const sumFunc = () => {
  getBanner(getMovieList);
};

export default sumFunc;
