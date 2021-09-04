import "./App.css";
import Landing from "./components/Landing/Landing.jsx";
import Nav from "./components/Nav/Nav";
import Form from "./components/Form/Form.jsx";
import Footer from "./components/Footer/Footer";
import Activities from "./components/Activities/Activities";
import { Route } from "react-router-dom";
import CountriesDetails from "./components/CountriesDetails/CountriesDetails";
import Countries from "./components/Countries/Countries";
function App() {
  return (
    <div className="App">
      <Route path="/home" component={Nav} />

      <Route exact path="/" component={Landing} />

      <Route exact path="/home" component={Countries} />

      <Route exact path="/countryDetail/:id" component={CountriesDetails} />

      <Route
        exact
        path="/home/filterby/:continent"
        render={() => <Countries />}
      />

      <Route exact path="/home/orderby/:order" render={() => <Countries />} />

      <Route exact path="/home/search/:country" render={() => <Countries />} />

      <Route
        exact
        path="/home/activity/:activity"
        render={() => <Activities />}
      />

      <Route exact path="/createactivity" component={Form} />

      <Route path="/" component={Footer} />
    </div>
  );
}

export default App;
