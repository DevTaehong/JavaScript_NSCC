import React from 'react';

export class MoveCounter extends React.Component {
    render() {
        return (
            <div>
                <div>X Move Count: {this.props.moveX}</div>
                <div>O Move Count: {this.props.moveO}</div>
            </div>
        );
    }
}