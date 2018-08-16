import axios from "axios";
import moment from "moment";
import styled from "styled-components";

import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Header, Guidelines } from "./components";
import "./index.css";

import configureStore from "./store/configureStore";
import getVisibleTasks from "./selectors/tasks";

const Container = styled.div`
	margin: 1rem;
`;

const store = configureStore();

// store.dispatch(addExpense({ description: 'Water bill' }));
// store.dispatch(addExpense({ description: 'Gas bill' }));
// store.dispatch(setTextFilter('water'));

const state = store.getState();
// const visibleTasks = getVisibleTasks(state.tasks, state.filters);
// console.log(visibleTasks);

class App extends Component {
  getTasks() {
    fetch("https://us-central1-routecandidates.cloudfunctions.net/tasks")
      .then(response => response.json)
      .then(data => console.log(data));
  }
  render() {
    const title = "Cesar Catano";
    const github = "https://github.com/codeauslander";
    const data = this.getTasks();

    return (
      <div>
        <Header title={title} url={github} date={"Aug 20th 18"} />

        <Container>
          <Guidelines />

          <button onClick={() => this.getTasks()}>Fetch Tasks</button>
          <p>{data}</p>
        </Container>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
