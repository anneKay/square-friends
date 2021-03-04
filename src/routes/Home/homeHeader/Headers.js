import React from "react";
import { withLocalize } from "react-localize-redux";
import headerTranslation from "../../../translations/headerTranslation.json";
import Header from "./Header";

class Headers extends React.Component {
  constructor(props) {
    super(props);
    this.props.addTranslation(headerTranslation);
  }

  render() {
    return (
      <Header />
    );
  }
}

export default withLocalize(Headers);
