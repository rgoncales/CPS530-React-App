import React from "react";
import TopBar from "../components/topbar";
import SectionHeader from "../components/sectionHeader";
import ArticleContainer from "../components/articleContainer";

const InstallTutorialPage = () => {
  const renderHosting = (
    <ArticleContainer title="Hosting">
      <h4> Install Apache </h4>
      <p>$sudo apt-get update </p>
      <p>sudo apt-get install apache2</p>
      <h4> Make site Directory </h4>
      <p>$sudo mkdir -p /var/www/foo.com/public_html </p>
      <h4> Modify Config </h4>
      <p>$sudo nano /etc/apache2/sites-available/foo.com.conf</p>
      <p>$sudo a2ensite foo.com.conf </p>
      <h4> Start Apache </h4>
      <p> $sudo systemctl start apache2</p>
    </ArticleContainer>
  );

  const renderDomainSetup = (
    <ArticleContainer title="Domain Setup">
      <h4>Register with domain name registrar </h4>
      <p>ie. https://domains.google/#/</p>
      <h4> Specify Name servers</h4>
      <p>ns1.digitalocean.com</p>
      <p>ns2.digitalocean.com</p>
      <p>ns3.digitalocean.com</p>
      <h4> Manage DNS </h4>
      <p>foo.com directs to droplet ip</p>
    </ArticleContainer>
  );

  const renderDjangoSetup = (
    <ArticleContainer title="Django Setup">
      <h4>Installation </h4>
      <p>
        <i>
          Use a virtual environment for Python if you're going to be running
          multiple sites!
        </i>
      </p>
      <p>$ sudo apt-get update</p>
      <p>$ sudo apt-get install django djangorestframework</p>
      <h4> Small project setup</h4>
      <p>For now, we'll just create a project in the home directory...</p>
      <p>$ django-admin startproject &lt;yourprojectname &gt;</p>
      <p>
        $ python &lt;yourprojectname &gt;/manage.py startapp &lt;yourappname
        &gt;
      </p>
      <p>
        Now add the application you created to &lt;yourprojectname &gt;/
        &lt;yourprojectname &gt;/settings.py
      </p>
      <p>Now we will run Django's development server:</p>
      <p>$ python &lt;yourprojectname &gt;/manage.py runserver 0.0.0.0:xxxx</p>
      <p>
        <b>
          Now open up localhost:xxxx and you will see your first Django webpage!
        </b>
      </p>
    </ArticleContainer>
  );

  const renderReactSetup = (
    <ArticleContainer title="React Setup">
      <h4>npm Installation </h4>
      <p> Ensure npm is installed </p>
      <p> npm -v </p>
      <p> if not installed: </p>
      <p> npm install npm@latest -g </p>
      <h4> Create new react app </h4>
      <p> npx create-react-app my-app </p>
      <p> cd my-app </p>
      <p> npm start </p>
      <p> Now open http://localhost:3000/ to see your app </p>
    </ArticleContainer>
  );

  return (
    <div id="install-tutorial-section">
      <TopBar />
      <div id="main-content">
        <SectionHeader title="Install Tutorial Page" />
        {renderHosting}
        {renderDomainSetup}
        {renderDjangoSetup}
        {renderReactSetup}
      </div>
    </div>
  );
};

export default InstallTutorialPage;
