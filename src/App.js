import Login from "./components/Login";
import Insertform from "./components/Insertform";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import UpdateEvent from "./components/UpdateEvent";
import Store from "./components/redux/store";
import { Provider } from "react-redux";
import React from "react";
import Import from "./components/Import";
class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/insert" element={<Insertform />} />
            <Route path="/update" element={<UpdateEvent />} />
            <Route path="/import" element={<Import />} />
            <Route path="*" element={<div>404 Page not found! <br/><a href="/">Go Home!</a></div>}/>
          </Routes>
        </div>
      </Provider>
    );
  }
}

export default App;
