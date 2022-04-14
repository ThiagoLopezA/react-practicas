import React from "react";

class CharacterStatus extends React.Component {
  render() {
    const status = this.props.status.toLowerCase();
    const type = this.props.specie;
    return (
      <p className="text-center status-text">
        <i class={"fa-solid fa-circle " + status}></i> {status} - {type}
      </p>
    );
  }
}

export default CharacterStatus;
