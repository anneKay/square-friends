import React from "react";
import { withLocalize } from "react-localize-redux";
import cardTranslation from "../../../translations/cardTranslation.json";
import Card from "./Card";

class Headers extends React.Component {
  constructor(props) {
    super(props);
    this.props.addTranslation(cardTranslation);
  }

  render() {
    return (
      <Card />
    )
  }
}

export default withLocalize(Headers);
