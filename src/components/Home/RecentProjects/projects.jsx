import React from "react";
import "./projects.css";
import devProjects from "./devProjects";
import { Link } from "react-router-dom";

function createCard(element) {
  return (
    <Card
      key={element.id}
      title={element.title}
      back={element.back}
      subtitle={element.subtitle}
      image={element.image}
      height={element.height}
      link={element.link}
      width="450px"
    />
  );
}

function Card(props) {
  return (
    <div
      className="m-5 col-lg-5 col-xs-12"
      ontouchstart="this.classList.toggle('hover');"
    >
      <Link to={{ pathname: `${props.link}` }} target="_blank">
        <div class="p-3 container ">
          <div
            class="front"
            style={{ backgroundImage: props.image, minHeight: props.height }}
          >
            <div class="inner">
              <p>{props.title}</p>
              <span>{props.subtitle}</span>
            </div>
          </div>
          <div class="back" style={{ minHeight: props.height }}>
            <div class="inner">
              <h2>{props.back}</h2>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export const projects = () => {
  return (
    <>
      <div class="container text-center">
        <h2 className="title" id="dev1">
          Some Things I've Built
        </h2>
      </div>
      <div className="row ">{devProjects.map(createCard)}</div>
    </>
  );
};
