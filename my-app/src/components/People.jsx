import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GabrielaAcevedo from "../assets/photos/GabrielaAcevedoQA.jpeg";
import FrancoDiaz from "../assets/photos/FrancoDiazFS.jpeg";
import AlexMilano from "../assets/photos/AlexMilanoAI.jpeg";
import DavidMora from "../assets/photos/DavidMoraDev.jpeg";
import SabrinaEsmo from "../assets/photos/sabrinaEsmoDev.jpeg";
import RominaTorres from "../assets/photos/RominaTorresFS.jpeg";
import PatriciaPastors from "../assets/photos/PatriciaPastorsCoach.jpeg";
import "../styles/people.css";

export const People = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const mates = [
    {
      id: 1,
      name: "Gaby",
      area: " Quality Assurance",
      href: "https://www.linkedin.com/in/gabriela-acevedo-borrero/",
      img: GabrielaAcevedo,
      alt: "Gabriela Acevedo Collaborator picture",
    },
    {
      id: 2,
      name: "Alex",
      area: "Mentor & CTO",
      href: "https://www.linkedin.com/in/alexmilano/",
      img: AlexMilano,
      alt: "Alexander Milano Collaborator picture",
    },
    {
      id: 3,
      name: "Sabri",
      area: "Developer",
      href: "https://www.linkedin.com/in/sesmo-dev/",
      img: SabrinaEsmo,
      alt: "Sabrina Estevez Collaborator picture",
    },
    {
      id: 4,
      name: "Fran",
      area: "Developer",
      href: "https://www.linkedin.com/in/franco-andres-diaz/",
      img: FrancoDiaz,
      alt: "Franco Diaz Collaborator picture",
    },
    {
      id: 5,
      name: "Romi",
      area: "Developer",
      href: "https://www.linkedin.com/in/romina-veronica-torres/",
      img: RominaTorres,
      alt: "Romina Torres Collaborator picture",
    },
    {
      id: 6,
      name: "David",
      area: "Mentor & Dev",
      href: "https://www.linkedin.com/in/dsmora/",
      img: DavidMora,
      alt: "David Mora Collaborator picture",
    },
    {
      id: 7,
      name: "Pat",
      area: "Coach & Linguistic",
      href: "https://patriciadepastors.club/",
      img: PatriciaPastors,
      alt: "Patricia de Pastors Collaborator picture",
    },
  ];

  return (
    <div className="container collaboratorsSection">
      <h1> Inspirational Network</h1>
      <div className="sliderContainer">
        <Slider {...settings}>
          {mates.map((item, index) => (
            <div key={item.id} className="mateSlide p-3">
              <a href={item.href} target="_blank">
                <img src={item.img} alt={item.alt} />
              </a>
              <p>
                {item.name} - {item.area}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
