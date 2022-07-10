import React from 'react';

export function Square(props) {
    const winningSquareStyle = {
      backgroundColor: '#ccc'
    }
    return (
      //source: https://gist.github.com/alvinpascoe/8d0f124a5381578e742669fbffda83bc
      <button className="square" onClick={props.onClick} style={props.winningSquare ? winningSquareStyle : null}>
        {props.value}
      </button>
    );
  }