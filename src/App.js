import React from "react";

import Keyboard from "./Keyboard";
import Status from "./Status";

import "./App.css";
const mots = ["BONJOUR", "JULIEN", "PENDU", "BONHOMME", "MOTS", "REACT"]

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      phrase: mots[Math.floor(Math.random()*mots.length)],
      usedLetters: new Set(),
      currentPhrase: "",
      won: false,
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
      usedLetters.has(letter) ? letter : "_"
    );
  }

  newGame() {
    this.setState({
      phrase: mots[Math.floor(Math.random()*mots.length)],
      usedLetters: new Set(),
      currentPhrase: "",
      won: false,
    })
  }

  render() {
    const DisplayWord = () => (
      <div className="word">
        {this.computeDisplay(this.state.phrase, this.state.usedLetters)}
      </div>
    );

    this.setState({
      currentPhrase: this.computeDisplay(
        this.state.phrase,
        this.state.usedLetters
      ),
      won: this.state.currentPhrase === this.state.phrase,
    });

    const status = this.state.won
      ? "Vous avez gagné!"
      : "Cliquez sur des lettres pour deviner le mot :";

    return (
      <div className="container-lg conteneur">
        <DisplayWord
          phrase={this.state.phrase}
          usedLetters={this.state.usedLetters}
        />
        <Status message={status} />
        {!this.state.won ? (
          <Keyboard
            addLetter={this.addLetter.bind(this)}
            usedLetters={this.state.usedLetters}
          />
        ) : (
          <button className="btn btn-primary" onClick={() => this.newGame()}>
            Nouvelle partie
          </button>
        )}
      </div>
    );
  }
}

export default App;
