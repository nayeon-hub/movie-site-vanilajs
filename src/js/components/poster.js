function hey(title, overview, popularity, path) {
  const appDiv = document.getElementById("app");
  const template = `
  <div class="movie-info">
      <img src=https://image.tmdb.org/t/p/original/${path} alt="" />
      <h2>${title}</h2>
      <p>${overview}</p>
      <span>${popularity}</span>
    </div>`;
  appDiv.innerHTML = template;
}

export default hey;
