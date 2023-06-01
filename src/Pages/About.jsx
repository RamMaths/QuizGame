import './About.css';
import img from '../assets/character.png';

const About = () => {
  return (
    <div className="content-about">
      <div className="info-about">
        <h2>About me</h2>
        <p>
          Elit est sed quisquam iusto repellat voluptates? Accusantium cum incidunt ducimus sunt et ullam.
          Dolores et commodi sequi eos ea Qui rerum laboriosam minus pariatur iusto? Hic placeat facilis aliquam
        </p>
        <a href="#">Read more</a>
      </div>
      <div className="img-box">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default About;
