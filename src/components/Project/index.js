import React from "react";
import './project.css';

function Project(props) {
  const { name, link, repo, image } = props.project;
  return (
    <a href={link} key={name} target="_blank" rel="noreferrer">
      <div
        className="w-96 h-64 m-2 shadow-md shadow-black rounded-md relative"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          // backgroundColor: "gray",
          // backgroundBlendMode: "multiply",
        }}>
        <span className="absolute -bottom-1/3 right-3">
          <a href={repo} target="_blank" rel="noreferrer">
          </a>
        </span>
      </div>
    </a>
  );
}

export default Project;