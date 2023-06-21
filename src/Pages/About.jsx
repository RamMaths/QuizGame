import './About.css';
import img from '../assets/character.png';
import yo from '../assets/yo.jpeg';
import { FaGithub, FaInstagram, FaMailBulk } from 'react-icons/fa';


const About = () => {
  return (
    <div className="content-about">
      <div className="info-about">
        <div className="contact">
          <div className="contact-photo">
            <img src={yo} alt="" />
          </div>
          <div className="pt-3">
            <h3>Contact me</h3>
            <ul>
              <li><a href="https://github.com/RamMaths"><FaGithub className="icons"/>Github</a></li>
              <li><a href="https://www.instagram.com/ramses.cpp/"><FaInstagram className="icons"/>Instagram</a></li>
              <li><a href="#"><FaMailBulk className="icons"/>ramses.hdz30@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="about-me">
          <h2>About me</h2>
          <p className="text-justify">
            My name is Roberto Ramses Mata Hernandez, I am a Computer Systems Engineering. This page was born from an idea checking an api recommendator page, then I saw a trivia API and I came up with this idea.
          </p>
          <a href="#">Read more</a>
        </div>
      </div>
      <div className="img-box">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default About;
