const movies = [
  {
    title: "Avatar",
    actors: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
    genre: "science-fiction",
    poster: "./assets/avatar.jpg",
  },
  {
    title: "Avengers",
    actors: [
      "Robert Downey Jr",
      "Chris Evans",
      "Mark Ruffalo",
      "Chris Hemsworth",
      "Scarlett Johannson",
    ],
    genre: "fantastique",
    poster: "./assets/avengers.jpeg",
  },
  {
    title: "Elvis",
    actors: ["Austin Butler", "Tom Hanks"],
    genre: "biographie",
    poster: "./assets/elvis.jpeg",
  },
  {
    title: "Harry Potter",
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    genre: "fantastique",
    poster: "./assets/harry-potter.jpg",
  },
  {
    title: "Harry Potter suite",
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    genre: "fantastique",
    poster: "./assets/harry-potter-2.jpeg",
  },
  {
    title: "Harry Potter Final",
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    genre: "fantastique",
    poster: "./assets/harry-potter-final.jpeg",
  },
  {
    title: "Joker",
    actors: ["Joaquin Phoenix"],
    genre: "thriller",
    poster: "./assets/joker.jpeg",
  },
  {
    title: "Matrix",
    actors: ["Keanu Reeves", "Laurence Fishburne"],
    genre: "science-fiction",
    poster: "./assets/harry-potter.jpg",
  },
  {
    title: "The Notebook",
    actors: ["Ryan Gosling", "Rachel McAdams"],
    genre: "romance",
    poster: "./assets/notebook.jpeg",
  },
  {
    title: "Titanic",
    actors: ["Leonardo DiCaprio", "Kate Winslet"],
    genre: "romance",
    poster: "./assets/titanic.jpg",
  },
];

const moviesContainer = document.querySelector("#movies-container");

function displayMovies(moviesArray) {
  moviesArray.map((movie) => {
    //Je crée le conteneur de la fiche du film
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movie-container");
    moviesContainer.appendChild(movieContainer);

    //Je crée le conteneur du titre du film
    const movieTitle = document.createElement("p");
    movieTitle.innerHTML = movie.title;
    movieContainer.appendChild(movieTitle);

    //Je crée le conteneur de l'affiche du film
    const moviePoster = document.createElement("img");
    moviePoster.src = movie.poster;
    movieContainer.appendChild(moviePoster);

    //Je crée le conteneur de la liste des acteurs du films du film
    const actorsList = document.createElement("ul");
    movie.actors.map((actor) => {
      const actorContainer = document.createElement("li");
      actorContainer.innerHTML = actor;
      actorsList.appendChild(actorContainer);
    });
    movieContainer.appendChild(actorsList);
  });
}

displayMovies(movies);

// Gestion du formulaire

const form = document.querySelector("form");
const searchInput = document.querySelector("#search-input");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Je réinitialise l'affichage en supprimant les films déjà affichés
  let movieContainers = document.querySelectorAll(".movie-container");
  movieContainers = [...movieContainers];
  movieContainers.map((movieContainer) => movieContainer.remove());

  //Je crée un tableau ne contenant que les films répondant au critère défini (titre)
  const searchedMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  displayMovies(searchedMovies);
});
