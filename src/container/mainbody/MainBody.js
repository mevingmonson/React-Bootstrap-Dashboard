import React, { Component } from "react";
import HeaderPart from "./HeaderPart";
import BodyPart from "./BodyPart";
import MyTable from "./MyTable";

export default class MainBody extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="p-2">
        <HeaderPart />
        {/* <BodyPart /> */}
        <MyTable />
      </div>
    );
  }
}
