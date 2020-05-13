import React, { Component } from 'react';
import DrumMachinePadComponent from './DrumMachinePadComponent';

{/* Based on a component coded by Lam Pham. */ }

const bankOne = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'High Wood Block',
    bg: 'fl w-third  tc pv4 clouds',
    url: 'https://cdn.glitch.com/579b1987-7920-4efc-b7a6-329cbf15d7e5%2FKorg-M3R-High-Wood-Block.wav?v=1588792483568'
}, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Low Wood Block',
    bg: 'fl w-third  tc pv4 arch',
    url: 'https://cdn.glitch.com/579b1987-7920-4efc-b7a6-329cbf15d7e5%2FKorg-M3R-Low-Wood-Block.wav?v=1588792483736'
}, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Cowbell',
    bg: 'fl w-third  tc pv4 lips',
    url: 'https://cdn.glitch.com/579b1987-7920-4efc-b7a6-329cbf15d7e5%2FRoland-R-8-Cowbell-2.wav?v=1588792483762'
}, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Low Timbale',
    bg: 'fl w-third  tc pv4 clouds',
    url: 'https://cdn.glitch.com/579b1987-7920-4efc-b7a6-329cbf15d7e5%2FKorg-N1R-Low-Timbale.wav?v=1588792483815'
}, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Guiro',
    bg: 'fl w-third  tc pv4 arch',
    url: 'https://cdn.glitch.com/579b1987-7920-4efc-b7a6-329cbf15d7e5%2FRoland-R-8-Long-Guiro.wav?v=1588792483864'
}, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Conga',
    bg: 'fl w-third  tc pv4 lips',
    url: 'https://cdn.glitch.com/579b1987-7920-4efc-b7a6-329cbf15d7e5%2FRoland-SC-88-Open-High-Conga.wav?v=1588792484250'
}, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Maracas",
    bg: 'fl w-third  tc pv4 clouds',
    url: 'https://cdn.glitch.com/579b1987-7920-4efc-b7a6-329cbf15d7e5%2FKorg-N1R-Maracas.wav?v=1588792484341'
}, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Bongo',
    bg: 'fl w-third  tc pv4 arch',
    url: 'https://cdn.glitch.com/579b1987-7920-4efc-b7a6-329cbf15d7e5%2FYamaha-RM50-Low-Bongo.wav?v=1588792484612'
}, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'High Timbale',
    bg: 'fl w-third  tc pv4 lips',
    url: 'https://cdn.glitch.com/579b1987-7920-4efc-b7a6-329cbf15d7e5%2FYamaha-RM50-High-Timbale.wav?v=1588792484626'
},
];

const bankTwo = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    bg: 'fl w-third  tc pv4 clouds',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    bg: 'fl w-third  tc pv4 clouds',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    bg: 'fl w-third  tc pv4 clouds',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    bg: 'fl w-third  tc pv4 clouds',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    bg: 'fl w-third  tc pv4 clouds',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    bg: 'fl w-third  tc pv4 clouds',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    bg: 'fl w-third  tc pv4 clouds',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    bg: 'fl w-third  tc pv4 clouds',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    bg: 'fl w-third  tc pv4 clouds',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];

const banks = [bankOne, bankTwo];

const volumeHandlerStyle = {
    "--min": 0,
    "--max": 100,
    "--val": 50,
    "--width": "100%",
    "--height": "1.5em",
    "--border-radius": "0.5em",
    "--track-height": "0.75em",
    "--track-border-width": "1px",
    "--track-border-color": "#000",
    "--track-border-style": "solid",
    "--track-color": "#aacde7",
    "--progress-height": "0.75em",
    "--progress-color": "#35cac5",
    "--thumb-width": "1.15em",
    "--thumb-height": "1.15em",
    "--thumb-border-radius": "40%",
    "--thumb-color": "#db83c2",
    "--thumb-border": "1px solid #000"
};

export default class DrumMachineComponent extends Component {
    constructor(props) {
        super(props);

        this.volumeHandler = React.createRef();
        this.iconVolume = React.createRef();
        this.displayVolumeValue = React.createRef();
        this.switchBank = React.createRef();
        this.switchBankLabel = React.createRef();
        this.displayTextDefault = "PRESS A BUTTON!";

        this.state = {
            bankIndex: 0,
            volumeValue: 50,
            displayText: this.displayTextDefault
        }

        this.onBankChanged = this.onBankChanged.bind(this);
        this.onVolumeChanged = this.onVolumeChanged.bind(this);
        this.onMouseLeaveInput = this.onMouseLeaveInput.bind(this);
        this.updateDisplayText = this.updateDisplayText.bind(this);
    }

    onBankChanged({ target }) {
        const bankIndex = target.checked ? 1 : 0;

        this.setState({
            bankIndex: bankIndex,
            displayText: this.displayTextDefault
        });
    }

    updateDisplayText(text) {
        this.setState({
            displayText: text
        });
    }

    onVolumeChanged({ target }) {
        const value = Number.parseInt(target.value, 10);
        const volumeHandlerElm = this.volumeHandler.current;
        const iconVolumeElm = this.iconVolume.current;
        const displayVolumeValueElm = this.displayVolumeValue.current;

        volumeHandlerElm.style.setProperty('--val', value);

        if (value === 0) iconVolumeElm.className = "fas fa-volume-off";
        else if (value < 50) iconVolumeElm.className = "fas fa-volume-down";
        else iconVolumeElm.className = "fas fa-volume-up";

        displayVolumeValueElm.style.setProperty('opacity', 1);
        setTimeout(() => {
            displayVolumeValueElm.style.setProperty('opacity', 0);
        }, 1000);

        this.setState({
            volumeValue: value
        });
    }

    onMouseLeaveInput() {
        setTimeout(() => {
            this.displayVolumeValue.current.style.setProperty('opacity', 0);
        }, 1000);
    }

    componentDidUpdate() {
        if (this.hideVolumeTimeout) {
            clearTimeout(this.hideVolumeTimeout);
            this.hideVolumeTimeout = null;
        }
        else {
            this.hideVolumeTimeout = setTimeout(() => {
                this.displayVolumeValue.current.style.setProperty('opacity', 0);
            }, 1000);
        }
    }

    render() {
        return (
            <div class="center mw6 mw7-ns hidden ba mv1 bb">
                <div class="cf">
                    {
                        banks[this.state.bankIndex].map((item, idx) => {
                            return <div class={item.bg} ><DrumMachinePadComponent
                                key={idx}
                                padItem={item}
                                updateDisplayText={this.updateDisplayText}
                                volumeValue={this.state.volumeValue} /> </div>
                        })
                    }
                </div>
                <div class="bg-near-black white mv0 pv2 ph3 tl tracked-tight ttu">
                    <h1 class="f4" >{this.state.displayText}</h1>
                    <div className="drum-control">
                        <div className="drum-control-volumn">
                            <i className="fas fa-volume-down" ref={this.iconVolume}></i>
                            <span> Volume</span>
                            <span className="drum-control-volumn-value" ref={this.displayVolumeValue}> {this.state.volumeValue}</span>
                            <input type="range" onInput={this.onVolumeChanged} onMouseLeave={this.onMouseLeaveInput} style={volumeHandlerStyle} ref={this.volumeHandler} />
                        </div>
                        <div className="drum-control-bank">
                            <div>{this.state.bankIndex ? "Smooth Piano Kit" : "Brazoria Kit"}</div>
                            <label className="switch" title="Switch bank">
                                <input type="checkbox" onChange={this.onBankChanged} ref={this.switchBank} />
                                <span className="slider round" ref={this.switchBankLabel}></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}