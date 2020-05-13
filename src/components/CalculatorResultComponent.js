import React, { Component } from 'react';

export default class CalculatorResultComponent extends Component {


    render() {
        let { result } = this.props;
        return (
            <div class="cf ma2">

                <div class="tc justify-center items-center flex bg-lightest-blue  h3 w-75 br-pill near-black" >
                    <p class="i f2">{result}</p>
                </div>

            </div>
        )
            ;
    }
}