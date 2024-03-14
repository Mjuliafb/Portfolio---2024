import React from "react";

export const ContactData = () => {
  return (
    <section className="contact" id="contactSection">
      <div className="container mb-4">
        <h1> Contact</h1>
        <div className="textIntContact d-flex align-items-center p-2 rounded-1 mb-2">
          <h4 className="w-100">
            Interested in working together? We should queue up a time to chat 🧃{" "}
          </h4>
          <a
            href="https://calendly.com/mjuliafb/collaborations"
            target="_blank"
            className="btn btnCalendly btn-light rounded-1 flex-shrink-1"
            type="button"
          >
            <i
              className="fa-solid fa-hand-peace fa-lg"
              style={{ color: "#f2059f" }}
            ></i>{" "}
            Let's go!
          </a>
        </div>
        <div className="d-grid gap-2 d-sm-block text-center">
          <a
            href="https://www.linkedin.com/in/mjfbalice/"
            target="_blank"
            className="btn btn-light rounded-5"
            type="button"
          >
            <i
              className="fa-brands fa-linkedin-in"
              style={{ color: "#f2059f" }}
            ></i>
          </a>
          <a
            href="https://github.com/Mjuliafb"
            target="_blank"
            className="btn btn-light rounded-5"
            type="button"
          >
            <i className="fa-brands fa-github" style={{ color: "#f2059f" }}></i>
          </a>
          <a
            href="mailto:mjuliafb@gmail.com?subject=Let's Collaborate!&body=Hello! Nice portfolio 🦩, This is my proposal:"
            target="_blank"
            className="btn btn-light rounded-5"
            type="button"
          >
            <i
              className="fa-solid fa-envelope"
              style={{ color: "#f2059f" }}
            ></i>{" "}
            mjuliafb@gmail.com
          </a>
          <a
            href="https://maps.app.goo.gl/BajrnFcyj5xXKW7KA"
            target="_blank"
            className="btn btn-light rounded-5"
            type="button"
          >
            <i className="fa-solid fa-map-pin" style={{ color: "#f2059f" }}></i>{" "}
            Spain
          </a>
        </div>
      </div>
    </section>
  );
};
