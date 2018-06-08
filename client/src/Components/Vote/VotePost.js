import React from 'react';

export class VoteUpDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            upscore: this.props.votes,
            downscore: this.props.downvotes
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    
    render() {
        return <div>
            <div>
              {this.state.upscore}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.downscore}
            </div>
            <button className="countUp btn btn-sm btn-success" onClick={this.increment}>
              UP
            </button>
            <button className="countDown btn btn-sm btn-danger" onClick={this.decrement}>
              DOWN
            </button>
          </div>;
    }
    increment() {
        this.setState({
            upscore: this.state.upscore + 1,
        });
    }

    decrement() {
        this.setState({
            downscore: this.state.downscore - 1,
        });
    }
}

export default VoteUpDown;