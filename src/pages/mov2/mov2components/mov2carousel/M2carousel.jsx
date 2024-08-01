import React, { useState } from 'react';
import './m1carousel.css';


const M1carousel = () => {
  return (
        <div className="carousel">
          <h1>Recommended</h1>
          <div className="carouselbox">
            <div className="mov1" id="mov1">
              <div className="movie movie-1" id='movone'></div>
              <p>Black Panther</p>
            </div>
            <div className="mov2">
              <div className="movie movie-2"></div>
              <p>Titanic</p>
            </div>
            <div className="mov3">
              <div className="movie movie-3"></div>
              <p>Bohemian Rhapsody</p>
            </div>
            <div className="mov4">
              <div className="movie movie-4"></div>
              <p>Archer</p>
            </div>
            <div className="mov5">
              <div className="movie movie-5"></div>
              <p>John Wick</p>
            </div>
            <div className="mov6">
              <div className="movie movie-6"></div>
              <p>Cold Souls</p>
            </div>
          </div>
        </div>
  );
};

export { M1carousel };