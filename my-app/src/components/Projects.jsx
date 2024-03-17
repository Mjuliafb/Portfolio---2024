import React from "react";
import oddilogo from "../assets/logotypes/oddimorado.png";
import giftbuddylogo from "../assets/logotypes/giftbuddylogo.png";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      logosrc: oddilogo,
      description:
        "Customized and structured medical templates for different dental specialties.",
      href: "https://www.oddi.es/",
      statusicon: "fa-regular fa-lightbulb",
      status: "Validating idea",
    },
    {
      id: 2,
      logosrc: giftbuddylogo,
      description:
        "Simplify gift-giving for any occasion. Create, share, and discover gift lists publicly.",
      href: "https://github.com/4GeeksAcademy/spain-fs-pt-53-MF-SE-AR",
      statusicon: "fa-solid fa-screwdriver-wrench",
      status: "Prototyping",
    },
  ];
  return (
    <section className="projects">
      <div className="container mb-4">
        <h1>Projects</h1>
        <div className="row">
          {projects.map((item, index) => (
            <div key={item.id} className="col-sm-6 mt-2 mb-3 mb-sm-0">
              <div className="card">
                <div className="card-body text-center">
                  <img className="imgLogoProjects" src={item.logosrc} />
                  <h5 className="card-title"></h5>
                  <p className="card-text">{item.description}</p>
                  <a
                    href={item.href}
                    target="_blank"
                    className="btn btnOddi bg-light rounded-2"
                  >
                    <i className={item.statusicon}></i> {item.status}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
