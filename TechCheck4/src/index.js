import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// source: https://stackoverflow.com/questions/60289140/react-click-counter-updating-state-of-just-one-element
 class Veggie extends React.Component {
  state = {
    count: 0
  };

  handleClick = () => {
    // Use updater function when new state is derived from old
    this.setState(prev => ({ count: prev.count + 1 }));
  };

  render() {
    return (
      <div>
        <div>
          <img src={this.props.value}/>
        </div>
        <div>
          <button className="veggie" onClick={this.handleClick}>Like</button> 
        </div>
        <div>
          <p className="counter">{this.state.count} likes.</p>
        </div>
      </div>
    );
  }
}


export class Grid extends React.Component {
  renderVeggie(i) {
    return (
      <Veggie value={i} />
    );
  }

  render() {
    return (
      <div className="row">
        <div>
          <p>Parsnip</p>
          {this.renderVeggie('https://media.istockphoto.com/photos/parsnip-isolated-on-the-white-background-close-up-picture-id884855382?s=612x612')}
        </div> 
        <div>
          <p>Carrot</p>
          {this.renderVeggie('https://media.istockphoto.com/photos/fresh-carrots-picture-id133483506?s=612x612')}
        </div>
        <div>
          <p>Potato</p>
          {this.renderVeggie('https://media.istockphoto.com/photos/potatoes-picture-id879133438?s=612x612')}
        </div>
        <div>
          <p>Squash</p>
          {this.renderVeggie('https://media.istockphoto.com/photos/butternut-squash-picture-id505198157?s=612x612')}
        </div>
        <div>
          <p>Pumpkin</p>
          {this.renderVeggie('https://media.istockphoto.com/photos/pumpkin-picture-id184279619?s=612x612')}
        </div>
        <div>
          <p>Peas</p>
          {this.renderVeggie('https://media.istockphoto.com/photos/green-peas-closeup-picture-id628151946?s=612x612')}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
