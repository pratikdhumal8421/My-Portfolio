import React from "react";
import "./Services.css";
import { BsCheck } from "react-icons/bs";

function Services() {
  return (
    <div>
      <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>SE0 Services</h3>
            </div>
            <ul className="service__list">
              <li>
                <BsCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon" />
                <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              </li>
            </ul>
          </article>

          {/* Web Developmenet */}

          <article className="service">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>
            <ul className="service__list">
              <li>
                <BsCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon" />
                <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              </li>
            </ul>
          </article>

          {/* Content Creator */}
          <article className="service">
            <div className="service__head">
              <h3> Content Creation</h3>
            </div>
            <ul className="service__list">
              <li>
                <BsCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon" />
                <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Services;
