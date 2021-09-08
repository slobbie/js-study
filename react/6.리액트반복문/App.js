import React from 'react';



function App() {
  const movies = [
      {title: 'sun coder1', year: 2019},
      {title: 'sun coder2', year: 2020},
      {title: 'sun coder3', year: 2021},
  ];

  const renderMovies = movies.map(movie => {
    return(
      <div className="movie">
        <div className="movie-title">{movie.title}</div>
        <div className="movie-year">{movie.year}</div>
      </div>
    );
  });
 
  return (
    <div className="App">
      <h1>movie list</h1>
      {renderMovies}
      {/* <div className="movie">
        <div className="movie-title">{movies[0].title}</div>
        <div className="movie-year">{movies[0].year}</div>
      </div>

      <div className="movie">
        <div className="movie-title">{movies[1].title}</div>
        <div className="movie-year">{movies[1].year}</div>
      </div>

      <div className="movie">
        <div className="movie-title">{movies[2].title}</div>
        <div className="movie-year">{movies[2].year}</div>
      </div> */}
     
    </div>
  );
} 

export default App;
