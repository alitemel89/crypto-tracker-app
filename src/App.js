import React from "react";
import GlobalStyle from "./globalStyles";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/HomePage/Home";
import Cryptocurrencies from "./components/CryptoCurrencies/CryptoCurrencies";
import News from "./components/News/News";
import CryptoDetails from "./components/CryptoDetails/CryptoDetails";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cryptocurrencies" component={Cryptocurrencies} />
        <Route path="/news" component={News} />
        <Route path="/crypto/:coinId" exact component={CryptoDetails} />
      </Switch>
    </Router>
  );
}

export default App;
