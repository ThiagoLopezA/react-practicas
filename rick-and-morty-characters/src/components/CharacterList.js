import React from "react";
import CharacterCard from "./CharacterCard";

class CharacterList extends React.Component {
  render() {
    const characters = this.props.characters;
    return (
      <div className="container mt-5">
        <div className="row">
          {characters.map(character => (
            <CharacterCard data={character} />
          ))}
        </div>
      </div>
    );
  }
}

export default CharacterList;
