import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import MoviesList from './components/MoviesList';
import Header from './components/Header';
// import Search from './components/Search';


function App() {


  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {

    const getMovies = async () => {
      let url = `http://jganchozo01-001-site6.ctempurl.com/api/movies/${currentPage}`;
      const resultado = await axios.get(url); 
      console.log(resultado.data.Total);
      setMovies(resultado.data.Data);
      let pages = Math.ceil(resultado.data.Total / 16);
      console.log(pages);
      setTotalPages(pages);

      //mover la pantalla hacia la parte superiror
      const jumbotron = document.querySelector('.navbar');
      jumbotron.scrollIntoView({behavior:'smooth', block:'start'});

    }

    getMovies();

  }, [currentPage]);

  const paginaAnterior = () => {
    let current = currentPage - 1;
    setCurrentPage(current);
  }

  const paginaSiguiente = () => {
    let current = currentPage + 1;
    setCurrentPage(current);
  }

  return (
    <Fragment>
   <Header />
    <div className="app container">
    
   
     <div className="row justify-content-center">
        <MoviesList 
          movies={movies}
        />

        {(currentPage === 1) ? null : (
          <button type="button" onClick={paginaAnterior} className="btn btn-info mr-1 mb-5">&laquo; Previous</button>
        )}
        
        {(currentPage === totalPages) ? null : (
          <button type="button" onClick={paginaSiguiente} className="btn btn-info mb-5">Next &raquo;</button>
        )}
        
      </div>

    </div>
    </Fragment>
  );
}

export default App;
