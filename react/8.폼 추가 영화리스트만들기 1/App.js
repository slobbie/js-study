import React, {useState} from 'react';
import Movie from './components/Movie';



function App() {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [movies, setMovies] = useState([
    {title: 'sun coder1', year: 2019},
    {title: 'sun coder2', year: 2020},
    {title: 'sun coder3', year: 2021},
]);

  const renderMovies = movies.map(movie => {
    return(
      <Movie movie={movie} key={movie.title} />
    );
  });

  const addMovie = (event) => {
    event.preventDefault();
    setMovies([
      ...movies,{
      title: movieTitle,
      year: movieYear,
    }])
  };
 
  return (
    <div className="App"> 
      <h1>movie list</h1>
      <form onSubmit={addMovie}>
        <input 
        type="text"
        value={movieTitle}
        placeholder="영화제목"
        onChange={e => setMovieTitle(e.target.value)} />
        <br />
        <input 
        type="text"
        value={movieYear}
        placeholder="개봉년도"
        onChange={e => setMovieYear(e.target.value)} />
        <br />
        <button type="submit">영화추가</button>
      </form>
      {renderMovies} 
    </div>
  );
} 

export default App;
