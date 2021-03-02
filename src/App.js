import React, { useContext } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SecondPage from "./pages/SecondPage";
import Questions from "./pages/Questions";
import { BDAYContext } from "./shared/context/BDayContext";
import LuckyDraw from "./pages/LuckyDraw";

function App() {
  const [isBDay] = useContext(BDAYContext);

  if (!isBDay) {
    return (
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/Hamm" component={SecondPage} />
      <Route path="/questions" component={Questions} />
      <Route path="/lucky-draw" component={LuckyDraw} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
