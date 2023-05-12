import Records from "../json/data.json";

function Projects() {
  return (
      <div className="container">
        <section id="projects" className="project-container">
        <div className="row">
            <div className="col-lg-12">
            <h1>Projects</h1>
            <div className="row">
            {
  Records && Records.map((item) => {
     return (
              <>
              <div className="col-lg-3">
              <div className="card">
                  <div className="card-body">
                    <h4>{item.header}</h4>
                    <p>{item.description}</p>
                    <a href={item.link} target="_blank" className="button-card">{item.buttontext}</a>
                  </div>
                </div>
              </div>
              </>
    )
  }
  )
}
            </div>
            </div>
          </div>
        </section>
      </div>
  );
}



export default Projects;
