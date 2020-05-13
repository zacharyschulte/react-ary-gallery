import React, { Component } from 'react';
import CalculatorResultComponent from "./CalculatorResultComponent";
import CalculatorKeyPadComponent from "./CalculatorKeyPadComponent";

class CalculatorComponent extends Component {
    constructor() {
        super();
        this.state = {
            result: "hello user"
        }
    }

    onClick = button => {

        if (button === "=") {
            this.calculate()
        }

        else if (button === "C") {
            this.reset()
        }
        else if (button === "CE") {
            this.backspace()
        } else if (this.state.result === "hello user") {
            this.setState({
                result: button
            })
        } else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        var checkResult = ''
        if (this.state.result.includes('--')) {
            checkResult = this.state.result.replace('--', '+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "") + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div class="center mw6 hidden ba mv1 bb bg-gold" >
                <CalculatorResultComponent result={this.state.result} />
                <CalculatorKeyPadComponent onClick={this.onClick} />
            </div>
        );
    }
}

export default CalculatorComponent;