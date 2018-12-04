import React from "react";
import TopBar from "../components/topbar";
import SectionHeader from "../components/sectionHeader";
import ArticleContainer from "../components/articleContainer";

const SummaryPage = () => {
  const renderPopularity = (
    <ArticleContainer title="Popularity">
      <p>
        ReactJS has become highly popular because of its extra simplicity and
        flexibility. Many people are even referring to it as the future of web
        development. It is estimated that more than 1,300 developers and over
        94,000 sites utilize ReactJS.
      </p>
      <p>
        ReactJS provided the solution that developers were looking for. It uses
        JSX (a unique syntax that allows HTML quotes as well as HTML tag syntax
        application for rendering specific subcomponents) This is very helpful
        in promoting construction of machine-readable codes and at the same time
        compounding components into a single-time verifiable file.
      </p>
      <p>
        Part of this huge popularity comes from the fact that top corporations
        such as Facebook, PayPal, Uber, Instagram, and Airbnb use it to solve
        user interface related issues.{" "}
      </p>
    </ArticleContainer>
  );

  const renderStrengths = (
    <ArticleContainer title="Strengths">
      <ul>
        <li>Simpler code with fewer bugs</li>
        <li>React is blazingly fast</li>
        <li>It plays nicely with your existing code</li>
        <li>Learn once, write anywhere</li>
        <li>Reactive community is always willing to help</li>
        <li>It’s still JavaScript</li>
        <li>It will affect you anyway. Better prepare for that</li>
      </ul>
    </ArticleContainer>
  );

  const renderWeakness = (
    <ArticleContainer title="Weakness">
      <ul>
        <li>High pace of development</li>
        <li>Poor documentation</li>
        <li>‘HTML in my JavaScript!’ – JSX as a barrier</li>
        <li>Additional SEO hassle</li>
      </ul>
    </ArticleContainer>
  );

  const renderAllDjango = (
		<div>
		<ArticleContainer title="Popularity">
			<p>
					Django is a very popular framework due to the fact that it
					streamlines the development process, so you only have to make
					the parts that are relevant to your specific application. For
					this reason, it is the backend framework of choice for popular
					web services such as Disqus, Bitbucket, and Instagram.<br/>
					Django emphasizes readability, cleanliness, and efficiency,
					borrowing from the strengths of Python itself, and applying
					concepts of neat design throughout the entire development
					process, making it the obvious framework of choice for a
					seasoned Python developer.
			</p>
		</ArticleContainer>
		<ArticleContainer title="Strengths">
			<ul>
					<li>Fast, simple set-up.</li>
					<li>Excellent site, project, and app management tools.</li>
					<li>Comes with a lightweight development server.</li>
					<li>Django code is easily readable.</li>
					<li>Uses a Model-View-Template (MVT) design paradigm.</li>
					<li>Highly extensible through modules and packages.</li>
					<li>Built-in object-relational-mapper (ORM) which takes care of all database needs.</li>
					<li>Does NOT sacrifice security for usability.</li>
					<li>Has many frameworks for APIs and other apps.</li>
			</ul>
		</ArticleContainer>
		<ArticleContainer title="Weaknesses">
			<ul>
					<li>Uses Python, and with that comes a lot of overhead.</li>
					<li>Can be slow depending on the hosting configuration.</li>
					<li>Hosting can be an issue, again because it uses Python.</li>
					<li>Although easy initially, complicated tasks have a high learning curve.</li>
			</ul>
		</ArticleContainer>
	  </div>
  );

  return (
    <div id="summary-section">
      <TopBar />
      <div id="main-content">
        <SectionHeader
          title="ReactJS"
          subtitle="A JavaScript library for building user interfaces."
        />
        {renderPopularity}
        {renderStrengths}
        {renderWeakness}
				<SectionHeader
					title="Django"
					subtitle="A Python back end framework for professionals with deadlines "
				/>
				{renderAllDjango}
      </div>
    </div>
  );
};

export default SummaryPage;
