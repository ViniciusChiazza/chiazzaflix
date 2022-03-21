var listaDeFilmes = [
  "https://media.fstatic.com/wf5auRLxFX3E0dpTUFN52R80iIA=/290x478/smart/media/movies/covers/2016/05/oldboy_t5866_TC8ZfDh.jpg",
  "https://img5.cdn.cinoche.com/images/b6c8831e0e5aa584c3f44b71758fb363.jpg",

  "https://cdn.mos.cms.futurecdn.net/p7LYq5FN4SAHk7sYp6zZog.jpg",
  "https://br.web.img3.acsta.net/pictures/17/08/25/11/58/463146.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/c/c0/ForrestGumpPoster.jpg",
  "https://br.web.img3.acsta.net/pictures/16/02/18/14/39/058114.jpg"
];

var linkDeFilmes = [
  "https://www.adorocinema.com/filmes/filme-54137/",
  "https://www.adorocinema.com/filmes/filme-203316/",
  "https://www.adorocinema.com/filmes/filme-211012/",
  "https://www.adorocinema.com/filmes/filme-197686/",
  "https://www.adorocinema.com/filmes/filme-10568/",
  "https://www.adorocinema.com/filmes/filme-215156/"
];

for (var q = 0; q < listaDeFilmes.length; q++) {
  document.write(
    "<a href=" +
      linkDeFilmes[q] +
      ">" +
      "<img src=" +
      listaDeFilmes[q] +
      ">" +
      "</a>"
  );
}