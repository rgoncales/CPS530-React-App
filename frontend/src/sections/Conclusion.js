import React from "react";
import TopBar from "../components/topbar";
import SectionHeader from "../components/sectionHeader";
import ArticleContainer from "../components/articleContainer";

const ConclusionPage = () => {
  const renderFeedback = (
    <ArticleContainer title="Conclusion">
      <h4> React </h4>
      <p>
        {" "}
        The experience with this framework was weird, at first it is confusing
        because it is a new thing, but once you learn it, you get the hang of
        it. Our expectations were set at an average level, and React has
        succeeded our expectations by being easy to use and understandable. Once
        you learn and understand the basics it is very easy to use React to
        create a page, obviously using only html is easier but react is just a
        tad more difficult. In retrospect we think we wouldn’t have done things
        differently for this aspect as we think we used it correctly and the
        easiest. We did not regret our choice of framework for the frontend.
      </p>
    </ArticleContainer>
  );

  return (
    <div id="conclusion-section">
      <TopBar />
      <div id="main-content">
        <SectionHeader title="Conclusion" />
        {renderFeedback}
      </div>
    </div>
  );
};

export default ConclusionPage;
