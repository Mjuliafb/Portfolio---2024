import React from "react";
import MJphoto from "../assets/photos/fotomj2.jpeg";

export const About = () => {
  return (
    <section className="about" id="aboutSection">
      <div className="container mb-3">
        <h1> About </h1>
        <div className="aboutParagraph d-flex align-items-center p-4">
          <div className="photoParagraph">
            <img
              className="imgParagraph mt-2 mr-3 rounded-circle"
              src={MJphoto}
            />
          </div>
          <div className="textParagraph text-start m-3">
            <p>
              Driven by a lifelong debate between art and science, I blend
              limitless creativity with measurable outcomes for societal impact.
              With a background in dentistry and 4 years of practice, I
              transitioned to Spain, focusing on digital skills—marketing,
              design, and social media.{" "}
            </p>

            <p>
              {" "}
              Working in a large-scale company sparked my interest in digital
              health, bridging my passions. I pursued a master's degree in
              digital health and ventured into full-stack development. Now, I'm
              eager to contribute to the digital transformation, especially in
              healthcare, expanding my skill set, and explore new opportunities.
              🎯{" "}
            </p>

            <p>
              {" "}
              I'm a dynamic programmer driven by the intersection of art and
              science. With a background in dentistry and a passion for digital
              innovation, I've honed my skills in marketing, design, and social
              media. Working in a large-scale company sparked my interest in
              digital health, obtaining a master's degree and diving into
              full-stack development. Now, I'm eager to contribute to the
              digital transformation, especially in healthcare, expanding my
              skill set, and explore new opportunities.
            </p>
          </div>
        </div>
        <div>
          <button className="btn btn-primary">Download CV</button>
        </div>
        {/* <!--quote nuevo comienza aqui --> */}
        <figure className="quoteFlamenco text-center mt-4 mb-0">
          <blockquote className="blockquote d-flex align-items-center text-center justify-content-center rounded-1 p-2">
            <h4>
              ⚡ Did you know? <span className="pinkSpan">Pink</span> flamingos
              aren't born with that color! 🦩
            </h4>
          </blockquote>
          <figcaption className="blockquote-footer mb-0">
            Fun facts by <cite title="Source Title"> ChatGPT</cite>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
