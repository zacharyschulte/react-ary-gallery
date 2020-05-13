import React, { Component } from 'react';
import PomodoroSettingsComponent from './PomodoroSettingsComponent';
import PomodoroTimerComponent from './PomodoroTimerComponent';
import PomodoroControllerComponent from './PomodoroControllerComponent';
{/* Based on a component designed by Edd Yerburgh and coded by Lam Pham.*/ }
export default class PomodoroClockComponent extends Component {
    constructor(props) {
        super(props);

        this.audioBeep = React.createRef();

        this.state = {
            breakLength: Number.parseInt(this.props.defaultBreakLength, 10),
            sessionLength: Number.parseInt(this.props.defaultSessionLength, 10),
            timeLabel: 'Session',
            timeLeftInSecond: Number.parseInt(this.props.defaultSessionLength, 10) * 60,
            isStart: false,
            timerInterval: null
        }

        this.onIncreaseBreak = this.onIncreaseBreak.bind(this);
        this.onDecreaseBreak = this.onDecreaseBreak.bind(this);
        this.onIncreaseSession = this.onIncreaseSession.bind(this);
        this.onDecreaseSession = this.onDecreaseSession.bind(this);
        this.onReset = this.onReset.bind(this);
        this.onStartStop = this.onStartStop.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
        this.phaseControl = this.phaseControl.bind(this);
    }

    onIncreaseBreak() {
        if (this.state.breakLength < 60 && !this.state.isStart) {
            this.setState({
                breakLength: this.state.breakLength + 1
            });
        }
    }

    onDecreaseBreak() {
        if (this.state.breakLength > 1 && !this.state.isStart) {
            this.setState({
                breakLength: this.state.breakLength - 1
            });
        }
    }

    onIncreaseSession() {
        if (this.state.sessionLength < 60 && !this.state.isStart) {
            this.setState({
                sessionLength: this.state.sessionLength + 1,
                timeLeftInSecond: (this.state.sessionLength + 1) * 60
            });
        }
    }

    onDecreaseSession() {
        if (this.state.sessionLength > 1 && !this.state.isStart) {
            this.setState({
                sessionLength: this.state.sessionLength - 1,
                timeLeftInSecond: (this.state.sessionLength - 1) * 60
            });
        }
    }

    onReset() {
        this.setState({
            breakLength: Number.parseInt(this.props.defaultBreakLength, 10),
            sessionLength: Number.parseInt(this.props.defaultSessionLength, 10),
            timeLabel: 'Session',
            timeLeftInSecond: Number.parseInt(this.props.defaultSessionLength, 10) * 60,
            isStart: false,
            timerInterval: null
        });

        this.audioBeep.current.pause();
        this.audioBeep.current.currentTime = 0;
        this.state.timerInterval && clearInterval(this.state.timerInterval);
    }

    onStartStop() {
        if (!this.state.isStart) {
            this.setState({
                isStart: !this.state.isStart,
                timerInterval: setInterval(() => {
                    this.decreaseTimer();
                    this.phaseControl();
                }, 1000)
            })
        } else {
            this.audioBeep.current.pause();
            this.audioBeep.current.currentTime = 0;
            this.state.timerInterval && clearInterval(this.state.timerInterval);

            this.setState({
                isStart: !this.state.isStart,
                timerInterval: null
            });
        }
    }

    decreaseTimer() {
        this.setState({
            timeLeftInSecond: this.state.timeLeftInSecond - 1
        });
    }

    phaseControl() {
        if (this.state.timeLeftInSecond === 0) {
            this.audioBeep.current.play();
        } else if (this.state.timeLeftInSecond === -1) {
            if (this.state.timeLabel === 'Session') {
                this.setState({
                    timeLabel: 'Break',
                    timeLeftInSecond: this.state.breakLength * 60
                });
            } else {
                this.setState({
                    timeLabel: 'Session',
                    timeLeftInSecond: this.state.sessionLength * 60
                });
            }
        }
    }

    render() {
        return (
            <div className="pomodoro-clock">
                <article class="center mw6 hidden ba mv1 bb arch relative">

                    <div class="cf">
                        <div class="fl w-60  tc pv4 br-pill clouds br--top h4">
                        </div>
                        <div class="fl w-40  tc pv4 ">
                        </div>
                    </div>

                    <div class="absolute h5 w5 bottom-2  left-2  w2 pvs tc flex flex-column align-center">
                        <div class="absolute br-100 h-100-ns w-100-ns h-75 w-75 white lips w2 pvs tc flex flex-column  ">
                            <div class="cf flex flex-column align-center items-center ">
                                <div class="fl w-100  tc pv4 flex flex-column items-center ">
                                    <PomodoroTimerComponent
                                        timeLabel={this.state.timeLabel}
                                        timeLeftInSecond={this.state.timeLeftInSecond}
                                    />

                                    <PomodoroControllerComponent
                                        onReset={this.onReset}
                                        onStartStop={this.onStartStop}
                                        isStart={this.state.isStart}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <PomodoroSettingsComponent
                        breakLength={this.state.breakLength}
                        sessionLength={this.state.sessionLength}
                        isStart={this.state.isStart}
                        onDecreaseBreak={this.onDecreaseBreak}
                        onDecreaseSession={this.onDecreaseSession}
                        onIncreaseBreak={this.onIncreaseBreak}
                        onIncreaseSession={this.onIncreaseSession}
                    />
                    <audio id="beep" preload="auto" src="https://goo.gl/65cBl1" ref={this.audioBeep}></audio>
                </article>
            </div>
        );
    }
}