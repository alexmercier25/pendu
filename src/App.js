import React from "react";
import Keyboard from "./Keyboard";

import "./App.css";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      phrase: "BONJOUR",
      usedLetters: new Set(),
    };
  }

  addLetter = (letter) => {
    this.setState({
      usedLetters: this.state.usedLetters.add(letter),
    });
    this.forceUpdate();
  };

  // Produit une représentation textuelle de l’état de la partie,
  // chaque lettre non découverte étant représentée par un _underscore_.
  computeDisplay(phrase, usedLetters) {
    return phrase.replace(/\w/g, (letter) =>
      usedLetters.has(letter) ? letter + " " : "_ "
    );
  }

  render() {

    const DisplayWord = () => (
      <div className="word">
        {this.computeDisplay(this.state.phrase, this.state.usedLetters)}
      </div>
    );

    return (
      <div className="container-md conteneur">
        <DisplayWord
          phrase={this.state.phrase}
          usedLetters={this.state.usedLetters}
        />
        <Keyboard
          addLetter={this.addLetter.bind(this)}
          usedLetters={this.state.usedLetters}
        />
      </div>
    );
  }
}

export default App;
