import React from "react";
import pdf from "../../../Sunil-Jhamnani-Resume.pdf";
import image from "./images/profile1.jpeg";

export const about = () => {
  return (
    <section id="about">
      <div class="container">
        <br />
        <h2 className="title">Little about me...</h2>
        <div class="info">
          <div class="col-sm-7">
            <br />
            <p>
              With over a
              decade of experience in the tech industry, my journey in software
              development has been both diverse and rewarding, leading
              cross-functional teams to deliver successful web and mobile
              applications.
            </p>

            <p>
              At Myntra, I have led a team of developers to manage and launch
              enterprise-level projects, significantly improving key performance
              metrics. One of my notable achievements includes spearheading the creation of the Applique
              Design System, which greatly enhanced our design and development
              workflows.
            </p>

            <p>
              My technical expertise spans both frontend and backend
              technologies. I am proficient in JavaScript/ES6+, ReactJS,
              ReactNative, NodeJS, Java, Kotlin, and have extensive experience
              with microservice architecture and scalable system design. I am
              passionate about optimizing performance and ensuring seamless user
              experiences.
            </p>

            <p>
              Collaboration and mentorship are key components of my professional
              ethos. I enjoy working closely with product managers, UX/UI
              designers, and stakeholders to align priorities and execute
              strategic initiatives. Mentoring and developing my team members is
              something I deeply value, fostering a culture of growth and
              innovation.
            </p>

            <p>
              In addition to my technical and managerial skills, I am an active
              member of the developer community, sharing my knowledge at events
              like FOSS United and React Meetup. This not only keeps me updated
              with the latest industry trends but also allows me to contribute
              to the community that has given me so much.
            </p>

            <p>
              I am excited about the future of technology and look forward to
              contributing to innovative projects that make a difference. Feel
              free to explore my portfolio and get in touch if you'd like to
              collaborate or learn more about my work.
            </p>

            <a className="button workButton" href={pdf}>
              Download Resume
            </a>
          </div>
          <br />
          <div class="col-sm-4">
            <img src={image} alt="Sunil Jhamnani" />
          </div>
        </div>
      </div>
    </section>
  );
};
