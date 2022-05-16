import React from "react";
import "./Experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
function Experience() {
  return (
    <div>
      <section id='experience'>
        <h5>What Skills I have</h5>
        <h2>My Experience</h2>

        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>

            <div className="experience__content">
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Fresher</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Fresher</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Fresher</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Javascript</h4>
                  <small className="text-light">Fresher</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>ReactJs</h4>
                  <small className="text-light">Fresher</small>
                </div>
              </article>
            </div>
          </div>

          <div className="experience__backend">
            <h3>Backend Development</h3>

            <div className="experience__content">
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>NodeJs</h4>
                  <small className="text-light">Fresher</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>MOngoDB</h4>
                  <small className="text-light">Fresher</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>SQL</h4>
                  <small className="text-light">Fresher</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
