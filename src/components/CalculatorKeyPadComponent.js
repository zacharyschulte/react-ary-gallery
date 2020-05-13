import React, { Component } from 'react';

export default class CalculatorKeyPadComponent extends Component {

    render() {
        return (
            <div className="button">
                <div class="cf">
                    <div class="fl w-25  tc pv4 ">
                        <button class="f4 h3 w3 br-100 ph3 pv3 mb2 dib near-black bg-light-yellow " name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                    </div>
                    <div class="fl w-25  tc pv4 ">
                        <button class="f4 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-red" name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                    </div>
                    <div class="fl w-25  tc pv4 ">
                        <button class="f4 h3 w3 br-100 ph3 pv3 mb2 dib near-black bg-light-yellow " name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                    </div>
                    <div class="fl w-25  tc pv4 ">
                        <button class="f4 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-red" name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>
                    </div>
                </div>

                <div class="cf">
                    <div class="fl w-25  tc pv4 ">
                        <button class="f4 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-blue" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                    </div>
                    <div class="fl w-25  tc pv4 ">
                        <button class="f4 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-blue" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                    </div>
                    <div class="fl w-25  tc pv4 ">
                        <button class="f4 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-blue" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                    </div>
                    <div class="fl w-25  tc pv4 ">
                        <button class="f4 h3 w3 br-100 ph3 pv3 mb2 dib near-black bg-light-yellow " name="+" onClick={e => this.props.onClick(e.target.name)}>+</button></div>
                </div>

                <div class="cf">
                    <div class="fl w-25  tc pv4 ">
                        <button class="f4 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-blue" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                    </div>
                    <div class="fl w-25  tc pv4 ">
                        <button class="f4 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-blue" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                    </div>
                    <div class="fl w-25  tc pv4 ">
                        <button class="f4 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-blue" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                    </div>
                    <div class="fl w-25  tc pv4 ">
                        <button class="f4 h3 w3 br-100 ph3 pv3 mb2 dib near-black bg-light-yellow " name="-" onClick={e => this.props.onClick(e.target.name)}>-</button></div>
                </div>

                <div class="cf">
                    <div class="fl w-25  tc pv4 ">
                        <button class="f4 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-blue" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                    </div>
                    <div class="fl w-25  tc pv4 ">
                        <button class="f4 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-blue" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                    </div>
                    <div class="fl w-25  tc pv4 ">
                        <button class="f4 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-blue" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                    </div>
                    <div class="fl w-25  tc pv4 ">
                        <button class="f4 h3 w3 br-100 ph3 pv3 mb2 dib near-black bg-light-yellow" name="*" onClick={e => this.props.onClick(e.target.name)}>x</button></div>
                </div>

                <div class="cf">
                    <div class="fl w-25  tc pv4 ">
                        <button class="f4 h3 w3 br-100 ph3 pv3 mb2 dib near-black bg-light-yellow " name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                    </div>
                    <div class="fl w-25  tc pv4 ">
                        <button class="f4 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-blue" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                    </div>
                    <div class="fl w-25  tc pv4 ">
                        <button class="f4 h3 w3 br-100 ph3 pv3 mb2 dib near-black bg-light-yellow " name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                    </div>
                    <div class="fl w-25  tc pv4 ">
                        <button class="f4 h3 w3 br-100 ph3 pv3 mb2 dib near-black bg-light-yellow " name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button></div>
                </div>
            </div>
        );
    }
}

