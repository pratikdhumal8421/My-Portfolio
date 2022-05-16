import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency Dashboard and Financial Visualization",
    github: "https://github.com/pratikdhumal8421",
    demo: "https://dribbble.com/pra_tik_d97",
  },
  {
    id: 2,
    image: IMG2,
    title: "Charts temlates and infographics in Figma",
    github: "https://github.com/pratikdhumal8421",
    demo: "https://dribbble.com/pra_tik_d97",
  },
  {
    id: 3,
    image: IMG3,
    title: "Figma dashboard UI kit for data design web apps",
    github: "https://github.com/pratikdhumal8421",
    demo: "https://dribbble.com/pra_tik_d97",
  },
  {
    id: 4,
    image: IMG4,
    title: "Maintaining tasks and tracking progress",
    github: "https://github.com/pratikdhumal8421",
    demo: "https://dribbble.com/pra_tik_d97",
  },
  {
    id: 5,
    image: IMG5,
    title: "Charts templates and infographis in Figma",
    github: "https://github.com/pratikdhumal8421",
    demo: "https://dribbble.com/pra_tik_d97",
  },
  {
    id: 6,
    image: IMG6,
    title: "Charts templates and infographis in Figma",
    github: "https://github.com/pratikdhumal8421",
    demo: "https://dribbble.com/pra_tik_d97",
  },
];

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>

              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn ">
                  Github
                </a>
                <a href={demo} taget="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
export default Portfolio;