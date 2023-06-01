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
    <div className="class-cont">
      <header className="">
        <div className="upper">
          <Link to='/QuizGame/'><h3 className="font-bungee text-xl">Trivia Ram</h3></Link>
        </div>
        <nav ref={navRef} className="">
          <Link className="btn-link" to='/QuizGame'>Game</Link>
          <Link className="btn-link" to='/QuizGame/highscores'>High Scores</Link>
          <Link className="btn-link" to='/QuizGame/about'>About</Link>
          <Link className="btn-link login" to='/QuizGame/login'>Log In</Link>
          <button className="nav-btn" onClick={showNavbar}>
            <FaTimes/>
          </button>
        </nav>
        <button className="nav-btn other" onClick={showNavbar}>
          <FaBars/>
        </button>
      </header>
    </div>
  );
};

export default memo(Navbar);
