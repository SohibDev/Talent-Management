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
  Footer
} from "./components/";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Suggestion />
      <SearchSpecialists />
      <Expirance />
      <Blog />
      <Partners />
      <ListClientForm />
      <Footer />
    </div>
  );
};

export default App;
