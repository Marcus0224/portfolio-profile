import React from "react";

function About() {
  return (
    <section className="mx-4 about">
      <h1 className="text-align">Marc St louis</h1>
      <div className="d-flex flex-wrap about-container mt-1">
        <div className="flex-row bio-img-container">
          <img
            className="img-fluid rounded bio-img"
            src="./assets/bio-img.jpeg"
         ></img>
        </div>
        <div className="col-md-8 flex-row bio m-auto">
          <p>
            {" "}
            Im a FullStack developer looking for an opportunity to connect and
            showcase my abilities. I have less than a year experience in coding
            but willing to learn and grow within the right organzation. Im a
            proven problem solver with great communication skills to help any
            organzation succeed.
          </p>
          <p>
            {" "}
            When im not prefecting my coding skills, I like to travel the world
            andn learn from the natives of tge country. I so like to workout and
            stay in physical as well as mental shape.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
