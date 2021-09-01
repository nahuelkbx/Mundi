import "./App.css";
import Landing from "./components/Landing/Landing.jsx";
import Nav from "./components/Nav/Nav";
import Activity from "./components/Activity/Activity.jsx";
import Footer from "./components/Footer/Footer";
import { Route } from "react-router-dom";
import CountriesDetails from "./components/CountriesDetails/CountriesDetails";
import Countries from "./components/Countries/Countries";
function App() {
  return (
    <div className="App">
      <Route path="/" component={Nav} />

      <Route exact path="/" component={Landing} />

      <Route path="/home" component={Countries} />

      <Route exact path="/countryDetail/:id" component={CountriesDetails} />

      <Route exact path="/filterby/:continent" render={() => <Countries />} />

      <Route exact path="/createactivity" component={Activity} />

      <Route path="/" component={Footer} />
    </div>
  );
}

export default App;
