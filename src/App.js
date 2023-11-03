import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import PrivacyRecommendation from "./components/Guides/PrivacyRecommendation";
import PrivacyRelevance from "./components/Guides/PrivacyRelevance";
import BrowserSecurity from "./components/Guides/BrowserSecurity";
import ThesisPage from "./components/Projects/ThesisPage";
import TrxPage from "./components/Projects/TrxPage";


function App() {
  return(
    <Fragment>
      <NavBar/>
      <Routes>
        <Route path="/" element= {<HomePage/>} />
        <Route path="/guides/privacyRecommendation" element= {<PrivacyRecommendation/>} />
        <Route path="/guides/privacyRelevance" element= {<PrivacyRelevance/>} />
        <Route path="/guides/browserSecurity" element= {<BrowserSecurity/>} />
        <Route path="/projects/thesis" element= {<ThesisPage/>} />
        <Route path="/projects/trx" element= {<TrxPage/>} />
      </Routes>
    </Fragment>
  )
}
export default App;
