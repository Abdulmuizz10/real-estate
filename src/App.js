import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="max-w-[1040px] mx-auto bg-white">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/property/:id">
            <PropertyDetails />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
