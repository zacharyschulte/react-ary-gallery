import React, { Component } from 'react';


export default class PomodoroControllerComponent extends Component {
    render() {
        return (

            <div class="w-50 flex flex-row justify-around">
                <button class="v-mid f3 h2 w2 br-100 ph1 pv1 mb2 dib near-black bg-light-yellow " id="start_stop" onClick={this.props.onStartStop}>
                    {this.props.isStart ? '■' : '▶'}
                </button>
                <button id="reset" onClick={this.props.onReset}>Reset</button>
            </div>

        )
    }
}