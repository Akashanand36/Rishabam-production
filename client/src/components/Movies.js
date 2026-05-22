import React from "react";

function Movies() {
  const movies = [
    {
      title: "The Truth",
      genre: "Thriller",
      image: "/movie1.jpg"
    },
    {
      title: "Coming Soon...",
      
      image: "/movie2.jpg"
    },
  
  ];

  return (
    <section id="movies" className="movies-section">
      <h2 className="movies-title">Our Movies</h2>

      <div className="movies-grid">
        {movies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <img src={movie.image} alt={movie.title} />

            <div className="overlay">
              <h3>{movie.title}</h3>
              <p>{movie.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Movies;