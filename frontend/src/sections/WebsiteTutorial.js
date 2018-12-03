import React from "react";
import TopBar from "../components/topbar";
import SectionHeader from "../components/sectionHeader";
import ArticleContainer from "../components/articleContainer";
import ComponentStructureIMG from "../img/component-structure.png";
import CallComponentIMG from "../img/call-component.png";

const WebsiteTutorialPage = () => {
  const renderReactWay = (
    <ArticleContainer title="The React Way">
      <h4>Components </h4>
      <p>
        As much as possible, code should be broken down into separate
        components.
      </p>
      <p>
        This whole website for example has components: TopBar, SectionHeader,
        and ArticleContainer.
      </p>
      <p>
        These components can be reused accross the website and allow us to keep
        css centralized and easy to manipulate.
      </p>

      <h4> Component Structure </h4>
      <img
        className="instruction-image"
        src={ComponentStructureIMG}
        alt="structure should be here"
      />

      <p> We would call this strucure like this: </p>
      <img
        className="instruction-image"
        src={CallComponentIMG}
        alt="structure should be here"
      />
    </ArticleContainer>
  );

  return (
    <div id="website-tutorial-section">
      <TopBar />
      <div id="main-content">
        <SectionHeader title="Website Tutorial Page" />
        {renderReactWay}
      </div>
    </div>
  );
};

export default WebsiteTutorialPage;
