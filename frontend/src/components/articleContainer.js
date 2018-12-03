import React from "react";
import "./_articleContainer.css";

const ArticleContainer = ({ title, className, children }) => (
  <div className="article-container">
    <div className="article-title"> {title} </div>
    <div className="article-body"> {children} </div>
  </div>
);

export default ArticleContainer;
