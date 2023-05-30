import { useRef, memo } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return(
    <header className="">
      <div className="upper">
        <Link to='/QuizGame/'><h3 className="font-bungee text-xl">Trivia Ram</h3></Link>
      </div>
      <nav ref={navRef} className="">
        <Link to='/QuizGame'>Game</Link>
        <Link to='/QuizGame/highscores'>High Scores</Link>
        <Link to='/QuizGame/about'>About</Link>
        <Link to='/QuizGame/login'>Log In</Link>
        <button className="nav-btn" onClick={showNavbar}>
              <FaTimes/>
        </button>
      </nav>
      <button className="nav-btn other" onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
  );
};

export default memo(Navbar);
