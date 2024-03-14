import React from "react";
import "../styles/header.css";
import fotoHeader from "../assets/fondoheader2.jpg";

export const Header = () => {
  return (
    <header className="container mb-4">
      <div className="container">
        <div className="row">
          <div>
            <div
              className="parallaxImgHeader content rounded-1"
              id="parallaxHeader"
            >
              {/* <img src={fotoHeader}></img> */}
              <div className="internalText">
                <h2>
                  Hey! I'm <span> MJ</span>
                </h2>
                <h2>Full Stack student at 4Geeks Academy.</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
