import React from "react";
import "./App.css";
import {
  Navbar,
  Hero,
  Suggestion,
  SearchSpecialists,
  Expirance,
  Blog,
  Partners,
  ListClientForm,
} from "./components/";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      {/* <Hero />
      <Suggestion />
      <SearchSpecialists />
      <Expirance />
      <Blog />
      <Partners />
      <ListClientForm /> */}
    </div>
  );
};

export default App;
