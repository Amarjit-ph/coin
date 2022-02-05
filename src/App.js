/*
 * Author: Amarjit Pheiroijam
 * OS : Zorin OS 16 Core
 * Editor : Visual Studio Code 1.64.0
 * Created Date: Saturday, February 5th 2022, 4:42:03 pm
 * Year 2022
 */
import React from "react";
import "./Presentation/Styles/App.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Home from "./Presentation/Pages/Home";
import CoinPage from "./Presentation/Pages/CoinPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact render={(props) => <Home />} />
        <Route path="/CoinPage/:id" exact render={(props) => <CoinPage />} />
      </Router>
    </div>
  );
}
export default App;
