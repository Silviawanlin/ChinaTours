import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import LandingPage from "./LandingPage";
import AboutUsPage from "./AboutUsPage";
import TestimonialsPage from "./TestimonialsPage";
import PhotosPage from "./PhotosPage";
import whyChinaPage from "./whyChinaPage";
import ChinaTripPlansPage from "./ChinaTripPlansPage";
import CustomtoursPage from "./CustomtoursPage";
import BookatourPage from "./BookatourPage";
import StudyinChinaPage from "./StudyinChinaPage";
import TeachinChinaPage from "./TeachinChinaPage";
import PassportPage from "./PassportPage";
import VaccinationsPage from "./VaccinationsPage";
import TripplanningPage from "./TripplanningPage";
import ChinaInfoPage from "./ChinaInfoPage";
import ContactPage from "./ContactPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route path="/aboutus" component={AboutUsPage} />
          <Route path="/testimonials" component={TestimonialsPage} /> 
          <Route path="/photos" component={PhotosPage} />
          <Route path="/whyChina" component={whyChinaPage} />
          <Route path="/tripplans" component={ChinaTripPlansPage} />
          <Route path="/bookatour" component={BookatourPage} />
          <Route path="/customtours" component={CustomtoursPage} />
          <Route path="/teachinchina" component={TeachinChinaPage} />
          <Route path="/studyinchina" component={StudyinChinaPage}/>
          <Route path="/passport" component={PassportPage} />
          <Route path="/vaccinations" component={VaccinationsPage} />
          <Route path="/tripplanning" component={TripplanningPage} />
          <Route path="/chinainfo" component={ChinaInfoPage} />
          <Route path="/contact" component={ContactPage} />
        </div>
      </Router>
    );
  }
}

export default App;
