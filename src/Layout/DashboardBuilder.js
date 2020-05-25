import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Workspace from "../container/middlebar/Workspace";
import MainBody from "../container/mainbody/MainBody";

export default class DashboardBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <div className="dashboard d-flex">
          <div className="sidebar bg-dark col-1">
            <Sidebar />
          </div>
          <div className="middlebar border-right col-2">
            <Workspace />
          </div>
          <div className="main-area col-9">
            <Route path="/:id" component={MainBody} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
