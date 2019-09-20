import React from 'react';

function Movie({movie}) {
    const { titulo, urlDescarga, urlImage } = movie;
    const imagen = `https://espamidiomas.azurewebsites.net/Images/${urlImage}`;
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={imagen} alt="" className="card-img-top" />
                <div className="card-body">
                    <p className="card-text">{titulo} </p>
                   
                </div>
                <div className="card-footer">
                    <a href={urlDescarga} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">Download</a>
                </div>
            </div>
        </div>
    );
}

export default Movie;