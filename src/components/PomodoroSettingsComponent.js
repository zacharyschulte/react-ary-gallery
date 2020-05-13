import React, { Component } from 'react';


export default class PomodoroSettingsComponent extends Component {
    render() {
        const btnClassName = this.props.isStart ? 'disable' : '';

        return (
            <div>

                <div class="cf">
                    <div class="fl w-60  h5 tc pv4 clouds ">
                    </div>
                    <div class="fl w-40  tc pv4 brick flex flex-column items-center ">
                        <button class="bg-lightest-blue f6 w-75 br-pill ph3 pv2 mb2 dib  near-black">Session Length</button>
                        <button class="bg-lightest-blue f6 w-75 br-pill ph3 pv2 mb2 dib  near-black">                        <span id="session-length">{this.props.sessionLength}</span></button>
                        <div class="w-100 flex flex-row justify-around">
                            <button class="v-mid f7 h2 w2 br-100 ph2 pv2 mb2 dib near-black bg-light-yellow " className={btnClassName} id="session-decrement" onClick={this.props.onDecreaseSession}>-</button>
                            <button class="v-mid f7 h2 w2 br-100 ph2 pv2 mb2 dib near-black bg-light-yellow " className={btnClassName} id="session-increment" onClick={this.props.onIncreaseSession}>+</button>

                        </div>
                    </div>
                </div>
                <div class="cf">
                    <div class="fl w-60  h5 tc pv4 clouds">

                    </div>
                    <div class="fl w-40  tc pv4 brick flex flex-column items-center ">
                        <button class="bg-lightest-blue f6 w-75 br-pill ph3 pv2 mb2 dib  near-black">Break Length</button>
                        <button class="bg-lightest-blue f6 w-75 br-pill ph3 pv2 mb2 dib  near-black">                        <span id="break-length">{this.props.breakLength}</span></button>
                        <div class="w-100 flex flex-row justify-around">
                            <button class="v-mid f7 h2 w2 br-100 ph2 pv2 mb2 dib near-black bg-light-yellow " className={btnClassName} id="break-decrement" onClick={this.props.onDecreaseBreak}>-</button>
                            <button class="v-mid f7 h2 w2 br-100 ph2 pv2 mb2 dib near-black bg-light-yellow " className={btnClassName} id="break-increment" onClick={this.props.onIncreaseBreak}>+</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
