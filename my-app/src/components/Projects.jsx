import React from "react";

export const Projects = () => {
  return (
    <section className="projects">
      <div className="container mb-4">
        <h1>Projects</h1>
        <div className="row">
          <div className="col-sm-6 mt-2 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body text-center">
                <img className="imgLogoProjects" src="asset/oddimorado.png" />
                <h5 className="card-title"></h5>
                <p className="card-text">
                  Customized and structured medical templates for different
                  dental specialties.
                </p>
                <a
                  href="https://www.oddi.es/"
                  target="_blank"
                  className="btn btnOddi bg-light rounded-2"
                >
                  <i className="fa-regular fa-lightbulb"></i> Validating idea
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mt-2 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body text-center">
                <img
                  className="imgLogoProjects"
                  src="asset/Maillardamarillo.png"
                />
                <h5 className="card-title"></h5>
                <p className="card-text">
                  Service for inventory management through recipes and sales.
                </p>
                <a
                  aria-disabled="true"
                  className="btn btnMaillard bg-light rounded-2 disabled"
                >
                  <i className="fa-solid fa-screwdriver-wrench"></i> Prototyping
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- arriba termina box nueva--> */}
    </section>
  );
};
