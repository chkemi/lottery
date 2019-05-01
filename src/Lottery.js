import React, { Component } from 'react';
import LottoBall from './LottoBall';

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 40,
    }

    constructor(props) {
        super(props);
        this.state = { 
            ballNums: Array.from({length: this.props.numBalls})
         }

         this.handleClick = this.handleClick.bind(this);
    }

    generate() {
        this.setState((prevState) => ({
            ballNums: prevState.ballNums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1)
        }))
        
    }

    handleClick() {
        this.generate();
    }

    render() { 
        let balls = this.state.ballNums.map((ballNum, i) => (
            <LottoBall key={i} num={ballNum}/>
        ))

        return ( 
            <section className='Lottery'>
                <h1>{this.props.title}</h1>
                <div>
                    {balls}
                </div>
                <button onClick={this.handleClick}>Generate</button>
            </section>
         );
    }
}
 
export default Lottery;