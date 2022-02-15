import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { Header } from "./Header/index";
import { Footer } from './Footer/index';
import "./scss/main.css";



const App = (props) => {

    return (
        <>
      <Header />
      <main className="main">
        <Router>
          <Switch>
            <Route exact path={"/"} component={Home} />
          </Switch>
        </Router>
        </main>
        <Footer />
        </>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
