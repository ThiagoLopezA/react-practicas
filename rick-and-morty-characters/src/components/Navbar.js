import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="navbar container-fluid">
          <div className="navbar-brand">
            <a href="/">Rick and Morty characters</a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
