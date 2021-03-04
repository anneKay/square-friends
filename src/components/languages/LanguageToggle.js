import React from "react";
import { withLocalize } from "react-localize-redux";
import "../../assets/stylesheet/shared/lang-toggle.scss";

const LanguageToggle = ({ languages, activeLanguage, setActiveLanguage }) => (
  <ul className="selector">
    {languages.map((lang) => (
      <li key={lang.code} className="justify-content-end">
        <button className="lang" onClick={() => setActiveLanguage(lang.code)}>
          {lang.name}
        </button>
      </li>
    ))}
  </ul>
);

export default withLocalize(LanguageToggle);
