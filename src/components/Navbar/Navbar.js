import React from 'react';
import "./Navbar.css";
import request from '../../request';


const Navbar = ({setSelectedOptions}) => {
    return (
        <div className='nav'>
            <h2 onClick={() => setSelectedOptions(request.fetchTrending)}>
        Trending
      </h2>
      <h2 onClick={() => setSelectedOptions(request.fetchTopRated)}>
        Top Rated
      </h2>
      <h2 onClick={() => setSelectedOptions(request.fetchActionMovies)}>
        Action
      </h2>
      <h2 onClick={() => setSelectedOptions(request.fetchComedyMovies)}>
        Comedy
      </h2>
      <h2 onClick={() => setSelectedOptions(request.fetchHorrorMovies)}>
        Horror
      </h2>
      <h2 onClick={() => setSelectedOptions(request.fetchRomanceMovies)}>
        Romance
      </h2>
      <h2 onClick={() => setSelectedOptions(request.fetchMystery)}>Mystery</h2>
      <h2 onClick={() => setSelectedOptions(request.fetchSciFi)}>Sci-fi</h2>
      <h2 onClick={() => setSelectedOptions(request.fetchWestern)}>Western</h2>
      <h2 onClick={() => setSelectedOptions(request.fetchAnimation)}>
        Animation
      </h2>
      <h2 onClick={() => setSelectedOptions(request.fetchTV)}>TV Movie</h2>
        </div>
    )
}

export default Navbar
