import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import "./App.css";

import Age from "./Age";
class App extends Component {
  constructor() {
    super();
    this.state = {
      newDate: "",
      birthday: "08/01/1997",
      showAge: false,
    };
  }
  changeBirthday() {
    console.log("change Birthday", this.state.newDate);
    this.setState({ birthday: this.state.newDate, showAge: true });
  }
  render() {
    return (
      <div className="App">
        {/* <h3>I can tell your age</h3> */}
        <Form>
          <h2>Input your Birthday</h2>
          <FormControl
            type="date"
            onChange={(event) => this.setState({ newDate: event.target.value })}
          ></FormControl>
          {"  "}
          <Button onClick={() => this.changeBirthday()}>Submit</Button>
        </Form>
        {this.state.showAge ? (
          <div className="fade age">
            <Age birthday={this.state.birthday} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
export default App;
