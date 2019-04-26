import React, { Component } from "react";

export default class DrumKeys extends Component {
  componentDidMount = () => {
    document.addEventListener("keypress", e => this.eventHandler(e));
  };
  // Handles Event

  eventHandler = e => {
    e.keyCode === 113 && this.handleClick("Q");
    e.keyCode === 119 && this.handleClick("W");
    e.keyCode === 101 && this.handleClick("E");
    e.keyCode === 97 && this.handleClick("A");
    e.keyCode === 115 && this.handleClick("S");
    e.keyCode === 100 && this.handleClick("D");
    e.keyCode === 122 && this.handleClick("Z");
    e.keyCode === 120 && this.handleClick("X");
    e.keyCode === 99 && this.handleClick("C");
  };

  // Handles Click Event Play
  handleClick = (target, id) => {
    const sound = document.getElementById(target);
    !this.props.power && sound.mute();
    this.props.handleDisplay(id);
    sound.play();
    sound.volume = this.props.range;
  };
  render() {
    const { keys, power } = this.props;
    return (
      <div className="drum-pad">
        {keys.map(key => {
          const { keyTrigger, id, url } = key;
          return (
            <div className="app-keys" key={keyTrigger}>
              <button
                className="app-key-box"
                onClick={this.handleClick.bind(this, keyTrigger).bind(this, id)}
                disabled={!power}
              >
                {keyTrigger}
                <audio src={url} id={keyTrigger} />
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
