import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar-icon">
      <div>
        <i className="fab fa-weebly" />
      </div>
      <div>
        <i className="far fa-bell" />
      </div>
      <div>
        <i className="fas fa-download" />
      </div>
      <div className="upgrade">Upgrade</div>
      <div className="sidebar-icons-bottom">
        <div>
          <i className="far fa-check-square" />
        </div>
        <div>
          <i className="fas fa-user-plus" />
        </div>
        <div>
          <i className="fas fa-search" />
        </div>
        <div>
          <i className="fas fa-question" />
        </div>
        <div>
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
