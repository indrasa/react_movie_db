import { useEffect, useState } from 'react';
import './App.css';

import { getDaftarMovie, cariMovie } from './api';


const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  //lifecycle react
  useEffect(() => {
    // setPopularMovies(getDaftarMovie()) // ini berakibat antrian tidak masuk semua, solusinya
    getDaftarMovie().then((hasil) => {
      setPopularMovies(hasil);
    });
  }, []); //supaya running pas pertama kali aja


  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-Wrapper" key={i}>
          <div className="Movie-Title">{movie.title}</div>
          <img className="Movie-Image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
          <div className="Movie-Date">{movie.release_date}</div>
          <div className="Movie-Rate">{movie.vote_average}</div>
        </div>
      );
    });
  };


  const cari = async (q) => {
    // console.log({ q });
    if (q.length > 3) { //perbolehkan pencarian jika 3 kata atau lebih
      const hasil_pencarian = await cariMovie(q);
      // console.log({ query: hasil_pencarian });
      setPopularMovies(hasil_pencarian.results);
    }

  }

  console.log({ popularMovies: popularMovies });

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Movie DB</h1>
        <input
          type="text"
          placeholder='Cari movie...'
          className='Movie-Search'
          onChange={({ target }) => cari(target.value)}
        />
        <div className="Movie-Container">
          <PopularMovieList />
        </div>

      </header>
    </div>
  );
}

export default App;
