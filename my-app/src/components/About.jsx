import React from "react";

export const About = () => {
  return (
    <section className="about" id="aboutSection">
      <div className="container mb-3">
        <h1> About </h1>
        <div className="aboutParagraph d-flex align-items-center">
          <div className="photoParagraph">
            <img
              className="imgParagraph mt-2 mr-3 rounded-circle"
              src="asset/fotomj2.jpeg"
            />
          </div>
          <div className="textParagraph m-3">
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
              health, bridging my passions. I pursued a master's in digital
              health and now venture into full-stack development. I'm now eager
              to contribute to the digital transformation in healthcare, expand
              my skill set and explore new opportunities. 🎯{" "}
            </p>
          </div>
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
