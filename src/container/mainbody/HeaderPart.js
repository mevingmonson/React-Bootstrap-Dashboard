import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import InputField from "../InputField";

const HeaderPart = () => {
  const [description, setDescription] = useState("");
  return (
    <>
      <div className="row">
        <h2 className="col-6">Web design</h2>
        <div className="d-flex align-items-center col-6 ">
          <span className="mr-2">
            <i className="fas fa-video" />
          </span>
          <p className="m-0">Start Zoom Call</p>
        </div>
      </div>
      <InputField
        className="w-1 border-0"
        type="text"
        onChange={(text) => setDescription(text)}
        placeholder="add board description"
      />
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Table
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Action2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Action3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <hr />
    </>
  );
};

export default HeaderPart;
