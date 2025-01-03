import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";

export const SkillsDiv = ({ name, description }) => {
  return (
    <div className="skills_div">
      <div className="skills_div_name">
        <p>{name}</p>
      </div>
      <div className="skills_div_description">
        <p>{description}</p>
      </div>
    </div>
  );
};