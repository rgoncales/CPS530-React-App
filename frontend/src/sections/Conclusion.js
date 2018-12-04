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
      <h4> Django </h4>
      <p>
	{" "}
	Working with Django is a breeze; normally with back-end frameworks, there
	is a lot of set-up involved and a lot of technical knowledge is required.
	Most frameworks try to provide a solution for database management, routing,
	etc, but few manage to simplify things as well as Django.<br/>
	Database setup and migrations was very easy with Django. All that you have
	to do is define Models for the data you will be storing in the database,
	then make some Views to tie everything together, and render the webpage.
	However, most of the difficulty in this project came with hosting the
	application and ensuring that everything was compatible. Since we have to
	use a lot of middleware to serve the Django-app, deployment can be a challenge.
	However, after that is sorted out, Django does most of the work when it comes
	to extracting, storing, and presenting data.
	In retrospect, Django was probably one of the best options for the back-end,
	as it can run neatly within an virtual environment, is quick to set-up, and
	does everything for you out-of-the-box. However, a framework like Flask
	would have made it even easier and faster to set up the RESTful comments API.
	Despite hosting issues, we do not regret our choice of framework for the
	backend.
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
