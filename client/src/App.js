import "./App.css";
import Landing from "./components/Landing/Landing.jsx";
import Home from "./components/Home/Home.jsx";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { Route } from "react-router-dom";
import CountriesDetails from "./components/CountriesDetails/CountriesDetails";
import Countries from "./components/Countries/Countries";
function App() {
  return (
    <div className="App">
      <Route path="/" component={Nav} />

      <Route exact path="/" component={Landing} />

      <Route exact path="/home" component={Home} />

      <Route exact path="/countryDetail/:id" component={CountriesDetails} />

      <Route exact path="/filterby/:continent" render={() => <Countries />} />

      <Route path="/" component={Footer} />
    </div>
  );
}

export default App;
