import React from "react";

export const Portfolio = () => {
  return (
    // TODO: Hacer map de cards
    <section className="portfolio" id="portfolioSection">
      <div className="cardsPortfolio">
        <div className="container mb-4">
          {/* <!-- Aqui se inserta nueva card--> */}
          <h1>Portfolio</h1>
          <div className="row">
            {/* <!-- CARD 1--> */}
            <div className="col-sm-4 mt-2">
              <a
                href="https://friends-collaborative-html-website.vercel.app/"
                target="_blank"
                className="url-box"
              >
                <figure className="newsCard news-Slide-up ">
                  <img src="asset/friends640.jpg" />
                  <div className="newsCaption px-4">
                    <div className="d-flex align-items-center justify-content-between cnt-title">
                      <h5 className="newsCaption-title text-white m-0">
                        Friend's fan page
                      </h5>{" "}
                      <i className="fas fa-arrow-alt-circle-right "></i>
                    </div>
                    <div className="newsCaption-content d-flex ">
                      <p className="col-10 py-3 px-0 d-flex">
                        Landing page about tv hit Friend's in collaboration with
                        Rocio Santos, Albert Viles and Karen Lyon.
                        <img
                          className="portfolioTechs card-img-top"
                          src="asset/htmlicon.png"
                          alt="HTML icon"
                        />
                        <img
                          className="portfolioTechs card-img-top"
                          src="asset/cssicon.png"
                          alt="CSS icon"
                        />
                        <img
                          className="portfolioTechs card-img-top"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1024px-Bootstrap_logo.svg.png"
                          alt="Bootstrap icon"
                        />
                      </p>
                    </div>
                  </div>
                  <span className="overlay"></span>
                </figure>
              </a>
            </div>
            {/* <!-- CARD 2--> */}
            <div className="col-sm-4 mt-2">
              <a
                href="https://mjuliafb-instagram-photo-feed-with-bootstrap.vercel.app/"
                target="_blank"
                className="url-box"
              >
                <figure className="newsCard news-Slide-up ">
                  <img src="asset/instagram640.jpg" />
                  <div className="newsCaption px-4">
                    <div className="d-flex align-items-center justify-content-between cnt-title">
                      <h5 className="newsCaption-title text-white m-0">
                        Instagram photo feed
                      </h5>{" "}
                      <i className="fas fa-arrow-alt-circle-right"></i>
                    </div>
                    <div className="newsCaption-content d-flex ">
                      <p className="col-10 py-3 px-0 d-flex">
                        Feed de instagram con alternativas de visualizacion de
                        fotos.
                        <img
                          className="portfolioTechs card-img-top"
                          src="asset/htmlicon.png"
                          alt="HTML icon"
                        />
                        <img
                          className="portfolioTechs card-img-top"
                          src="asset/cssicon.png"
                          alt="CSS icon"
                        />
                        <img
                          className="portfolioTechs card-img-top"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1024px-Bootstrap_logo.svg.png"
                          alt="Bootstrap icon"
                        />
                      </p>
                    </div>
                  </div>
                  <span className="overlay"></span>
                </figure>
              </a>
            </div>
            {/* <!-- CARD 3--> */}
            <div className="col-sm-4 mt-2">
              <a
                href="https://bold-easy-reader-7m9kycfxz.vercel.app/"
                target="_blank"
                className="url-box"
              >
                <figure className="newsCard news-Slide-up ">
                  <img src="asset/boldeasyreader.jpg" />
                  <div className="newsCaption px-4">
                    <div className="d-flex align-items-center justify-content-between cnt-title">
                      <h5 className="newsCaption-title text-white m-0">
                        Bold Easy Reader
                      </h5>{" "}
                      <i className="fas fa-arrow-alt-circle-right "></i>
                    </div>
                    <div className="newsCaption-content d-flex ">
                      <p className="col-10 py-3 px-0 d-flex">
                        Convertor de texto para mejorar la legibilidad y
                        concentración.
                        <img
                          className="portfolioTechs card-img-top"
                          src="asset/htmlicon.png"
                          alt="HTML icon"
                        />
                        <img
                          className="portfolioTechs card-img-top"
                          src="asset/cssicon.png"
                          alt="CSS icon"
                        />
                        <img
                          className="portfolioTechs card-img-top"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1024px-Bootstrap_logo.svg.png"
                          alt="Bootstrap icon"
                        />
                        <img
                          className="portfolioTechs card-img-top"
                          src="asset/jsicon.png"
                          alt="JS icon"
                        />
                      </p>
                    </div>
                  </div>
                  <span className="overlay"></span>
                </figure>
              </a>
            </div>
            {/* <!-- end card3--> */}
          </div>
        </div>
      </div>
    </section>
  );
};
