import React from "react";
import TopBar from "../components/topbar";
import SectionHeader from "../components/sectionHeader";
import ArticleContainer from "../components/articleContainer";

const CreditsPage = () => {
  const renderMember1 = (
    <ArticleContainer title="Nicolas Barrios-Ruiz">
      <p>
        In charge of the Summary page as well as the Credits page and the Nav
        Bar.
      </p>
    </ArticleContainer>
  );

  const renderMember2 = (
    <ArticleContainer title="Konstantin Oussoltsev">
      <p>
        In charge of Tutorial Install page, Conclusion page and setting up
        hosting.
      </p>
    </ArticleContainer>
  );

  const renderMember3 = (
    <ArticleContainer title="William Pena Ayala">
      <p>In charge of the back-end and the RESTful comment app.</p>
    </ArticleContainer>
  );

  const renderMember4 = (
    <ArticleContainer title="Rodrigo Goncales">
      <p>Setup the react app and hosting it on the digital ocean droplet.</p>
    </ArticleContainer>
  );

  const renderReferences = (
    <ArticleContainer title="References">
      <ul>
        <li>
          <a
            href="https://reactjs.org/docs/getting-started.html"
            target="_blank"
          >
            {" "}
            ReactJS Info
          </a>
        </li>
        <li>
          <a
            href="https://www.digitalocean.com/community/tutorials/how-to-build-a-modern-web-application-to-manage-customer-information-with-django-and-react-on-ubuntu-18-04"
            target="_blank"
          >
            {" "}
            How To Build a Modern Web Application to Manage Customer Information
            with Django and React
          </a>
        </li>
      </ul>
    </ArticleContainer>
  );

  return (
    <div id="credits-section">
      <TopBar />
      <div id="main-content">
        <SectionHeader title="Credits" />
        {renderMember1}
        {renderMember2}
        {renderMember3}
        {renderMember4}
        {renderReferences}
      </div>
    </div>
  );
};

export default CreditsPage;
