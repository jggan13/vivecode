import React from 'react';
import Movie from './Movie';


function MoviesList({movies}) {
    return(
        <div className="col-12 p-5 row">
            {movies.map((movie, index) => (
                <Movie
                    key={index}
                    movie={movie}
                />
            ))}
        </div>
    );
}

export default MoviesList;