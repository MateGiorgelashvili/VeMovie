import React, { useState, useEffect } from 'react';
import { Navbar } from '../../components/Navbar/Navbar.jsx';
import { Cover } from '../../components/Cover/Cover.jsx';
import { Mov1 } from '../mov1/mov1.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';
import { Movies } from '../../components/Moviesect/Movie.jsx';

const Home = () => {
  const [movie, setMovie] = useState(true);

  useEffect(() => {
    const handleImageClick = () => {
      setMovie(false);
    };

    const goBackToHome = () => {
      setMovie(true);
    };

    const movOneElement = document.getElementById('movone');
    const goBackElement = document.getElementById('home');

    if (movOneElement) {
      movOneElement.addEventListener('click', handleImageClick);
    }

    if (goBackElement) {
      goBackElement.addEventListener('click', goBackToHome);
    }

    return () => {
      if (movOneElement) {
        movOneElement.removeEventListener('click', handleImageClick);
      }
      if (goBackElement) {
        goBackElement.removeEventListener('click', goBackToHome);
      }
    };
  }, [movie]);

  return (
    <>
      {movie ? (
        <>
          <Navbar />
          <Cover />
          <Movies />
          <Footer />
        </>
      ) : (
        <Mov1 />
      )}
    </>
  );
};

export { Home };