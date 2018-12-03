import React from "react";
import "./_sectionHeader.css";

const SectionHeader = ({ title, subtitle, className }) => (
  <div className="section-header">
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </div>
);

export default SectionHeader;
