import React from "react";

export const Technologies = () => {
  return (
    // TODO: pendiente agregar img todos los logos iconos.png
    <section className="technologies">
      <div className="container mb-4">
        <h1>Languages & Tools </h1>
        <div className="technologiesLearned card-group">
          <div className="card align-items-center pt-4 mt-2 mb-2 ">
            <img
              src="asset/reacticon.png"
              className="card-img-top"
              alt="HTML icon"
            />
            <div className="card-body">
              <h6 className="card-title">HTML</h6>
            </div>
          </div>
          <div className="card align-items-center pt-4 mt-2 mb-2">
            <img
              src="asset/reacticon.png"
              className="card-img-top"
              alt="CSS icon"
            />
            <div className="card-body">
              <h6 className="card-title">CSS</h6>
            </div>
          </div>
          <div className="card align-items-center pt-4 mt-2 mb-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1024px-Bootstrap_logo.svg.png"
              className="card-img-top"
              alt="Bootstrap icon"
            />
            <div className="card-body">
              <h6 className="card-title">Bootstrap</h6>
            </div>
          </div>
          <div className="card align-items-center pt-4 mt-2 mb-2">
            <img
              src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
              className="card-img-top"
              alt="Git icon"
            />
            <div className="card-body">
              <h6 className="card-title">Git</h6>
            </div>
          </div>
          <div className="card align-items-center pt-4 mt-2 mb-2">
            <img
              src="asset/reacticon.png"
              className="card-img-top"
              alt="GitHub icon"
            />
            <div className="card-body">
              <h6 className="card-title">GitHub</h6>
            </div>
          </div>
        </div>
        <h3> Currently learning:</h3>
        <div className="futureTechnologies card-group">
          <div className="card align-items-center pt-4 mt-2 mb-2">
            <img
              src="asset/jsicon.png"
              className="card-img-top"
              alt="JS icon"
            />
            <div className="card-body">
              <h6 className="card-title">Javascript</h6>
            </div>
          </div>
          <div className="card align-items-center pt-4 mt-2 mb-2">
            <img
              src="asset/figmaicon.png"
              className="card-img-top"
              alt="Figma icon"
            />
            <div className="card-body">
              <h6 className="card-title">Figma</h6>
            </div>
          </div>
          <div className="card  align-items-center pt-4 mt-2 mb-2">
            <img
              src="asset/reacticon.png"
              className="card-img-top"
              alt="React icon"
            />
            <div className="card-body">
              <h6 className="card-title">React</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
