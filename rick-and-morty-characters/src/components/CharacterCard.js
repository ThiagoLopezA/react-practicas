import React from "react";
import CharacterStatus from "./CharacterStatus";

class CharacterCard extends React.Component {
  render() {
    const character = this.props.data;

    return (
      <div className="col-lg-2 col-md-5 col-sm-12 m-2">
        <div className="card p-2">
          <img src={character.image} />
          <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <CharacterStatus
              status={character.status}
              specie={character.species}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterCard;
