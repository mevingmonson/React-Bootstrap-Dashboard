import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import InputField from "../InputField";

class Workspace extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterBoard: "",
    };
  }

  render() {
    return (
      <>
        <h4>Workspaces</h4>
        <InputField
          type="text"
          onChange={(text) => this.setState({ filterBoard: text })}
          placeholder="Filter boards..."
        />
        <div className="row p-2">
          <span className="mr-1">
            <ion-icon ios="home-outline" md="home-sharp" />
          </span>
          <h6 className="flex-grow-1">Main</h6>
          <span>
            <ion-icon name="add-circle-outline" />
            {/* <i className="fas fa-plus" /> */}
          </span>
        </div>
        <div className="container">
          <Link to="/webdesign">Web design</Link>
        </div>
      </>
    );
  }
}

export default withRouter(Workspace);
