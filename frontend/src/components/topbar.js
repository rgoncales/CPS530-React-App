import React from "react";
import { Link } from "react-router-dom";
import "./_index.css";

const TopBar = ({ children, className, backLink }) => (
  <header id="top-bar" className={className || ""}>
    <Link to="/summary">Summary</Link>
    <Link to="/tutorial_install">Install Tutorial</Link>
    <Link to="/tutorial_website">Website Tutorial</Link>
    <Link to="/conclusion">Conclusion</Link>
    <Link to="/credits">Credits</Link>
  </header>
);

export default TopBar;
