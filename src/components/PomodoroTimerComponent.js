import React, { Component } from 'react';


const formatTime = (timeLeftInSecond) => {
    let minute = Math.floor(timeLeftInSecond / 60);
    if (minute < 10) minute = '0' + minute;

    let second = timeLeftInSecond - 60 * minute;
    if (second < 10) second = '0' + second;

    return `${minute}:${second}`;
}

export default class PomodoroTimerComponent extends Component {
    render() {
        return (
            <div >
                <h1 class="f3 lh-title ttu mt0 tracked-tight near-black">                    <label id="timer-label">{this.props.timeLabel}</label></h1>
                <h1 class="f1 lh-title ttu mt0 mb3-ns mb0 tracked-tight near-black">                    <span id="time-left">{formatTime(this.props.timeLeftInSecond)}</span></h1>
            </div>
        )
    }
}