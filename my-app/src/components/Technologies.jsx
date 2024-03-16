import React from "react";
import HTMLicon from "../assets/icons/htmlicon.png";
import CSSicon from "../assets/icons/cssicon.png";
import GitHubicon from "../assets/icons/githubicon.png";
import JSicon from "../assets/icons/jsicon.png";
import Figmaicon from "../assets/icons/figmaicon.png";
import Reacticon from "../assets/icons/reacticon.png";
import SQLicon from "../assets/icons/sqlicon.png";
import Pythonicon from "../assets/icons/pythonicon.jpg";

export const Technologies = () => {
  const learned = [
    {
      id: 1,
      title: "HTML",
      src: HTMLicon,
      alt: "HTML icon",
    },
    {
      id: 2,
      title: "CSS",
      src: CSSicon,
      alt: "CSS icon",
    },
    {
      id: 3,
      title: "Bootstrap",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1024px-Bootstrap_logo.svg.png",
      alt: "Bootstrap icon",
    },
    {
      id: 4,
      title: "Git",
      src: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      alt: "Git icon",
    },
    {
      id: 5,
      title: "GitHub",
      src: GitHubicon,
      alt: "Github icon",
    },
    {
      id: 6,
      title: "Javascript",
      src: JSicon,
      alt: "Javascript icon",
    },
  ];

  const learning = [
    {
      id: 1,
      title: "Figma",
      src: Figmaicon,
      alt: "Figma icon",
    },
    {
      id: 2,
      title: "React",
      src: Reacticon,
      alt: "React icon",
    },
    {
      id: 3,
      title: "SQL",
      src: SQLicon,
      alt: "SQL icon",
    },
    {
      id: 4,
      title: "Python",
      src: Pythonicon,
      alt: "Python icon",
    },
  ];

  return (
    // TODO: pendiente agregar img todos los logos iconos.png
    <section className="technologies">
      <div className="container mb-4">
        <h1>Languages & Tools </h1>
        <div className="technologiesLearned card-group">
          {learned.map((item, index) => (
            <div
              key={item.id}
              className="card align-items-center pt-4 mt-2 mb-2 "
            >
              <img src={item.src} className="card-img-top" alt={item.alt} />
              <div className="card-body">
                <h6 className="card-title">{item.title}</h6>
              </div>
            </div>
          ))}
        </div>
        <h3> Currently learning:</h3>
        <div className="futureTechnologies card-group">
          {learning.map((item, index) => (
            <div
              key={item.id}
              className="card align-items-center pt-4 mt-2 mb-2 "
            >
              <img src={item.src} className="card-img-top" alt={item.alt} />
              <div className="card-body">
                <h6 className="card-title">{item.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
