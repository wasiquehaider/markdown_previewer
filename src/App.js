import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FormGroup from "react-bootstrap/lib/FormGroup";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import FormControl from "react-bootstrap/lib/FormControl";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

let marked = require("marked");

class App extends Component {
  state = {
    markdown: ""
  };

  updateMarkDown = function(markdown) {
    this.setState({ markdown });
  };
  render() {
    let { markdown } = this.state;

    console.log(markdown);
    return (
      <div className="App container">
        <h1 className="text-center">MarkDown Previewer Using React</h1>
        <Grid>
          <Row>
            <Col md={6} mdPush={6}>
              <FormGroup controlId="FormControlsTextArea">
                <ControlLabel>MarkDown Input</ControlLabel>
                <FormControl
                  componentClass="textarea"
                  rows={20}
                  placeholder="Enter Markdown e.g <b>Hello</b>"
                  value={markdown}
                  onChange={e => this.updateMarkDown(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6} mdPush={6}>
              <p>Markdown Output</p>
              <div
                className="markdownOutput"
                dangerouslySetInnerHTML={{ __html: marked(markdown) }}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
