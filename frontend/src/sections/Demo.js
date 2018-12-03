import React from "react";
import TopBar from "../components/topbar";
import SectionHeader from "../components/sectionHeader";
import ArticleContainer from "../components/articleContainer";
import IMG_1 from "../img/img1.png";
import IMG_2 from "../img/img2.png";
import CommentList from "../components/CommentsList";

const SummaryPage = () => {
  const renderDesc1 = (
    <ArticleContainer title="">
      <h4>
        A smaller version of the original Playstation loaded with 20 of the best
        games of that console
      </h4>
      <p className="pic-in-text">
        The design of PlayStation®Classic perfectly mirrors the original
        console, with the same logo, button layout and packaging – but 45%
        smaller than 1994’s PlayStation. This miniature console comes with an
        HDMI cable to connect to your TV complete with two wired controllers,
        plus a virtual memory card to save your adventures as you switch between
        titles.
      </p>
      <img className="in-text" src={IMG_1} alt="pic should be here" />
    </ArticleContainer>
  );

  const renderDesc2 = (
    <ArticleContainer title="">
      <h4>Classic Control</h4>
      <p className="pic-in-text">
        The original PlayStation controller changed the way we play, with four
        shoulder buttons and an ergonomic design for perfect grip – and
        PlayStation®Classic comes complete with two of these iconic controllers
        in the box.
      </p>
      <img className="in-text" src={IMG_2} alt="pic should be here" />
    </ArticleContainer>
  );


  const renderComments = (
	<CommentList/>
  );

  return (
    <div id="demo-section">
      <TopBar />
      <div id="main-content">
        <SectionHeader
          title="Playstation Classic"
          subtitle="Relive how it all began"
        />
        {renderDesc1}
        {renderDesc2}
	{renderComments}
      </div>
    </div>
  );
};

export default SummaryPage;
