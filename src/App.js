import './App.css';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <div className="hero-image">
        <div className="hero-text">
          <h4>My name is Guptaranjan Satapathy</h4>
          <h1>I am an Front end UI developer</h1>
          <div className="hero-card">
            <p>Experienced UI developer with 7 years experience and specialization in web based pages and applications. Designed web pages that increased user satisfaction and resolved persistent cross browser compatibility issues for users across multiple regions whilst rigorously adhering to project deadlines.Worked with stakeholders from multiple regions for different website needs.</p>
            <h5>Technical Skills</h5>
            <p class="card-container"><span className="small-cards">HTML5</span><span className="small-cards">CSS3</span><span className="small-cards">Bootstrap</span><span className="small-cards">React js</span><span className="small-cards">Javascript</span><span className="small-cards">Jquery</span></p>
          </div>
          <a href="#projects" className="button">Projects</a>
          <a href="./gupta_ranjan_satapathy_resume.docx" target="_blank" className="button" download>Resume</a>
          <a href="https://github.com/guptaranjansatapathy" target="_blank" className="button">Git</a>
        </div>
      </div>
     <Projects />
    </div>
  );
}

export default App;
