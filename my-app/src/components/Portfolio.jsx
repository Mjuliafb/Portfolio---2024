import React from "react";
import HTMLicon from "../assets/icons/htmlicon.png";
import CSSicon from "../assets/icons/cssicon.png";
import GitHubicon from "../assets/icons/githubicon.png";
import JSicon from "../assets/icons/jsicon.png";
import Figmaicon from "../assets/icons/figmaicon.png";
import Reacticon from "../assets/icons/reacticon.png";
import SQLicon from "../assets/icons/sqlicon.png";
import Pythonicon from "../assets/icons/pythonicon.jpg";
import friendsbg from "../assets/backgrounds/friends640.jpg";
import instagrambg from "../assets/backgrounds/instagram640.jpg";
import boldeasybg from "../assets/backgrounds/boldeasyreader.jpg";

export const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      href: "https://friends-collaborative-html-website.vercel.app/",
      title: "Friend's collaborative fan page",
      background: friendsbg,
      description:
        "Landing page about tv hit Friend's in collaboration with Rocio Santos, Albert Viles and Karen Lyon.",
      img: [
        {
          id: 1,
          src: HTMLicon,
          alt: "HTML icon",
        },
        {
          id: 2,
          src: CSSicon,
          alt: "CSS icon",
        },
        {
          id: 3,
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1024px-Bootstrap_logo.svg.png",
          alt: "Bootstrap icon",
        },
      ],
    },
    {
      id: 2,
      href: "https://mjuliafb-instagram-photo-feed-with-bootstrap.vercel.app/",
      title: "Instagram photo feed",
      background: instagrambg,
      description: "Instagram feed with photo viewing alternatives.",
      img: [
        {
          id: 1,
          src: HTMLicon,
          alt: "HTML icon",
        },
        {
          id: 2,
          src: CSSicon,
          alt: "CSS icon",
        },
        {
          id: 3,
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1024px-Bootstrap_logo.svg.png",
          alt: "Bootstrap icon",
        },
      ],
    },
    {
      id: 3,
      href: "https://bold-easy-reader-7m9kycfxz.vercel.app/",
      title: "Bold easy reader",
      background: boldeasybg,
      description: "Text converter to improve readability and concentration",
      img: [
        {
          id: 1,
          src: HTMLicon,
          alt: "HTML icon",
        },
        {
          id: 2,
          src: CSSicon,
          alt: "CSS icon",
        },
        {
          id: 3,
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1024px-Bootstrap_logo.svg.png",
          alt: "Bootstrap icon",
        },
        {
          id: 4,
          src: JSicon,
          alt: "Javascript icon",
        },
      ],
    },
  ];
  return (
    // TODO: hacer css para media query
    <section className="portfolio" id="portfolioSection">
      <div className="cardsPortfolio">
        <div className="container mb-4">
          <h1>Portfolio</h1>
          <div className="row">
            {portfolio.map((item, index) => (
              <div key={item.id} className="col-sm-4 mt-2">
                <a href={item.href} target="_blank" className="url-box">
                  <figure className="newsCard news-Slide-up ">
                    <img src={item.background} />
                    <div className="newsCaption px-4">
                      <div className="d-flex align-items-center justify-content-between cnt-title">
                        <h5 className="newsCaption-title text-white m-0">
                          {item.title}
                        </h5>{" "}
                        <i className="fas fa-arrow-alt-circle-right "></i>
                      </div>
                      <div className="newsCaption-content d-flex ">
                        <p className="col-10 py-3 px-0 d-flex">
                          {item.description}
                          {item.img.map((imgItem, imgIndex) => (
                            <img
                              key={imgItem.id}
                              className="portfolioTechs card-img-top"
                              src={imgItem.src}
                              alt={imgItem.alt}
                            />
                          ))}
                        </p>
                      </div>
                    </div>
                    <span className="overlay"></span>
                  </figure>
                </a>
              </div>
            ))}
          </div>
          {/* <button className="btn btn-primary">Download CV</button> */}
        </div>
      </div>
    </section>
  );
};
