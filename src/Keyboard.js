import React from 'react'
import "./Keyboard.css"

const touches = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

class Keyboard extends React.PureComponent {
  DisplayLine1 = (props) => {
    return touches.map(
      (touch, index) =>
        index === 13 && (<br />)
        !props.letters.has(touch) && (
          <button
            className="touch"
            key={index}
            index={index}
            onClick={() => this.props.addLetter(touch)}
          >
            {touch}
          </button>
        )
    );
  };

  render() {
    return (
      <div className="keyboard-line">
        <this.DisplayLine1
          index="{index}"
          touch="{touch}"
          letters={this.props.usedLetters}
        />
      </div>
    );
  }
}

export default Keyboard;