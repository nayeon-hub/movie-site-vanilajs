import movie_list from "../movieAPI.js";

const div = document.createElement("div");
div.className = "movie-list";
const li = document.createElement("li");
movie_list.forEach((ele) => {
  li.innerHTML = `${Object.values(ele)[0]}`;
  div.append(li);
});

const banner = `
<div class="banner">
<a href="/posts" class="banner-item" data-link>
<p class="banner-item-info">
[업데이트💡] 팀버튼 감독의 천재성을 지금 바로 확인하세요
</p>
<div class="btn">자세히보기</div>
</a>
</div>
`;

console.log(div);

export default banner;
