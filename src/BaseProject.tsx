import React from "react";
import "./styles/App.css";
import MyCounterApp from "./components/MyCounterApp";
import ReduxApp from "./components/ReduxApp";
import { Provider } from "react-redux";
import { store } from "./features/store";

const BaseProject = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="bg-[#282c34] flex flex-col items-center justify-center text-slate-50 p-5">
          <div className="container bg-blue-300 bg-opacity-40 p-4">
            <MyCounterApp />
          </div>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <ReduxApp />
      </div>
    </Provider>
  );
};

export default BaseProject;
