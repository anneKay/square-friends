import React from "react";
import Navigation from "../../components/Navbar/Navbar";
import LanguageToggle from "../../components/languages/LanguageToggle";
import Headers from "./homeHeader/Headers";
import Cards from "./card/Cards";
import globalTranslations from "../../translations/global.json";
import { withLocalize } from "react-localize-redux";
import "../../assets/stylesheet/home/home.scss";

class Home extends React.Component{
  
  constructor(props) {

    super(props);
    this.props.initialize({
      languages: [
        { name: "EN", code: "en" },
        { name: "FR", code: "fr" }
      ],
      translation: globalTranslations,
      options: {renderToStaticMarkup: false}
    });
  }

  render() {
    return (
      <div>
        <LanguageToggle />
        <Navigation />
        <div className="main-container">
          <div className="body">
            <Headers />
            <Cards />
          </div>
        </div>
      </div>
    );
  }
}

export default withLocalize(Home);
