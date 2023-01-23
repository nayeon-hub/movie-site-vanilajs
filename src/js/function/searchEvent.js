import axios from 'axios';

export default () => {
  const homeHeader = document.querySelector('.home-header');
  const searchForm = homeHeader.querySelector('form');
  const searchInput = searchForm.querySelector('input');
  const searchBtn = homeHeader.querySelector('.search-btn');

  const div = document.createElement('div');
  div.className = 'title-list';

  // 검색창 보여주기
  searchBtn.addEventListener('click', () => {
    searchForm.className = '';
  });

  searchInput.addEventListener('blur', (e) => {
    const span = searchForm.querySelectorAll('span');
    span.forEach((ele) => {
      ele.addEventListener('click', (e) => {
        console.log(e.target.innerHTML);
      });
    });
    setTimeout(() => {
      searchForm.className = 'hiding-search';
      div.remove();
    }, 200);
  });

  searchInput.addEventListener('input', () => {
    getInfo(searchInput.value);
  });

  function createBox(title, id) {
    const a = document.createElement('a');
    a.innerHTML = title;
    a.href = `/details/${id}`;
    return a;
  }

  const getInfo = async (value) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=cdf3f17915090757a86f6a63885f852e&language=ko&query=${value}&page=1&include_adult=false`
      )
      .then((response) => {
        const data = response.data.results;
        div.innerHTML = '';
        data.forEach((ele) => {
          const a = createBox(ele.title, ele.id);
          div.append(a);
          console.log(a);
        });
        searchForm.append(div);
      })
      .catch((error) => {
        // console.log("not input");
      });
  };
};
