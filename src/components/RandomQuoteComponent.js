import React, { Component } from 'react'
import axios from 'axios'

export default class RandomQuoteComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quote: '',
            author: ''
        }
    }

    componentDidMount() {
        this.getQuote()
    }

    getQuote() {
        let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

        axios.get(url)
            .then(res => {
                let data = res.data.quotes
                let quoteNum = Math.floor(Math.random() * data.length)
                let randomQuote = data[quoteNum]

                this.setState({
                    quote: randomQuote['quote'],
                    author: randomQuote['author']
                })
            })
    }

    getNewQuote = () => { //will be called on clicking the New Quote button
        this.getQuote()
    }

    render() {
        const { quote, author } = this.state //Destructuring
        return (
            <div id="wrapper">
                <div id="quote-box" class="center mw5 mw6-ns hidden ba mv1 bb">
                    <div id="text" class="pa3">
                        <p class="f3-ns f5 lh-title measure mv0">
                            {quote}
                        </p>
                    </div>
                    <div id="author">
                        <h1 class="f4 bg-near-black white mv0 pv2 ph3 tr tracked-tight ttu">{author}</h1>
                    </div>
                </div>
                <article class="center mw5 mw6-ns hidden mv1 ">

                    <div id="buttons" class="pa3 tc-l flex items-center justify-start">
                        <button id='new-quote' className='buttons' class="f4-ns f5 link dim br2 ph3 pv2  dib white bg-dark-blue" onClick={this.getNewQuote}>New Quote</button>
                        <a class="link hover-silver near-black dib h2 w2 mh3" id='tweet-quote' href={`https://twitter.com/intent/tweet?text=${quote} ${author}`} target='_blank' title="Post this quote on twitter!">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd"
                                clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414">
                                <path
                                    d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z"
                                    fill-rule="nonzero" /></svg>
                        </a>
                    </div>
                </article>
            </div>
        )
    }
}