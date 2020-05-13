import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from 'react-router-dom';
import RandomQuoteComponent from './RandomQuoteComponent';
import MarkdownPreviewerComponent from './MarkdownPreviewerComponent';
import DrumMachineComponent from './DrumMachineComponent';
import CalculatorComponent from './CalculatorComponent';
import PomodoroClockComponent from './PomodoroClockComponent';

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
const routes = [
    {
        path: "/home",
        component: Home
    },
    {
        path: "/random-quote-generator",
        component: randomQuoteGenerator
    },
    {
        path: "/markdown-previewer",
        component: markdownPreviewer
    },
    {
        path: "/drum-machine",
        component: drumMachine
    },
    {
        path: "/calculator",
        component: Calculator
    },
    {
        path: "/pomodoro-clock",
        component: pomodoroClock
    },
];

export default function NavComponent() {
    return (
        <Router>
            <nav className="pa3 pa4-ns">
                <NavLink exact activeClassName="link dim dark-blue b f6 f5-ns dib mr3" to="/home" className="link dim gray f6 f5-ns dib mr3" title="Home">React Gallery</NavLink>
                <NavLink exact activeClassName="link dim dark-blue b f6 f5-ns dib mr3" to="/random-quote-generator" className="dim gray link f6 f5-ns dib mr3" title="Home">Random Quotes</NavLink>
                <NavLink exact activeClassName="link dim dark-blue b f6 f5-ns dib mr3" to="/markdown-previewer" className="link dim gray f6 f5-ns dib mr3" title="About">Markdown Previewer</NavLink>
                <NavLink exact activeClassName="link dim dark-blue b f6 f5-ns dib mr3" to="/drum-machine" className="link dim gray f6 f5-ns dib mr3" title="Store">Drum Machine</NavLink>
                <NavLink exact activeClassName="link dim dark-blue b f6 f5-ns dib mr3" to="/calculator" className="link dim gray f6 f5-ns dib mr3" title="Store">Calculator</NavLink>
                <NavLink exact activeClassName="link dim dark-blue b f6 f5-ns dib mr3" to="/pomodoro-clock" className="link dim gray f6 f5-ns dib" title="Contact">Pomodoro Clock</NavLink>
            </nav>
            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>

        </Router>
    );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

function Title(props) {
    return (
        <section class="mw5 mw7-ns center bg-light-gray pa3 ph5-ns ">
            <h1 class="f3 lh-title ttu mt0 tracked-tight">{props.sectTitle}</h1>
        </section>
    );
}

function pomodoroClock(props) {
    return (
        <section class="mw6 mw7-ns center bg-light-gray pa3 ph5-ns">
            <Title
                sectTitle="Pomodoro Clock" />
            <PomodoroClockComponent
                defaultBreakLength='5'
                defaultSessionLength='25'
            />
            {/* <article class="center mw6 hidden ba mv1 bb arch relative">
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
                                <h1 class="f3 lh-title ttu mt0 tracked-tight near-black">Session</h1>
                                <h1 class="f1 lh-title ttu mt0 mb3-ns mb0 tracked-tight near-black">30:00</h1>
                                <div class="w-50 flex flex-row justify-around">
                                    <button class="v-mid f3 h2 w2 br-100 ph1 pv1 mb2 dib near-black bg-light-yellow ">▶</button>
                                    <button class="v-mid f3 h2 w2 br-100 ph1 pv1 mb2 dib near-black bg-light-yellow ">↩︎</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cf">
                    <div class="fl w-60  h5 tc pv4 clouds ">
                    </div>
                    <div class="fl w-40  tc pv4 brick flex flex-column items-center ">
                        <button class="bg-lightest-blue f6 w-75 br-pill ph3 pv2 mb2 dib  near-black">Session Length</button>
                        <button class="bg-lightest-blue f6 w-75 br-pill ph3 pv2 mb2 dib  near-black">25</button>
                        <div class="w-100 flex flex-row justify-around">
                            <button class="v-mid f7 h2 w2 br-100 ph2 pv2 mb2 dib near-black bg-light-yellow ">-</button>
                            <button class="v-mid f7 h2 w2 br-100 ph2 pv2 mb2 dib near-black bg-light-yellow ">+</button>
                        </div>
                    </div>
                </div>
                <div class="cf">
                    <div class="fl w-60  h5 tc pv4 clouds">

                    </div>
                    <div class="fl w-40  tc pv4 brick flex flex-column items-center ">
                        <button class="bg-lightest-blue f6 w-75 br-pill ph3 pv2 mb2 dib  near-black">Break Length</button>
                        <button class="bg-lightest-blue f6 w-75 br-pill ph3 pv2 mb2 dib  near-black">5</button>
                        <div class="w-100 flex flex-row justify-around">
                            <button class="v-mid f7 h2 w2 br-100 ph2 pv2 mb2 dib near-black bg-light-yellow ">-</button>
                            <button class="v-mid f7 h2 w2 br-100 ph2 pv2 mb2 dib near-black bg-light-yellow ">+</button>
                        </div>
                    </div>
                </div>



            </article> */}


        </section>
    );
}

function Home(props) {
    return (
        <section class="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
            <Title
                sectTitle="REACT-ARY SCHULTE" />
            <article class="center mw5 mw6-ns hidden ba mv1 bb">
                <div class="pa3">
                    <p class="f3-ns f5 lh-title measure mv0">
                        WELCOME TO MY REACT GALLERY, THANKS FREECODECAMP!
        </p>
                </div>
            </article>
        </section>
    );
}

function Calculator(props) {
    return (
        <section class="mw6 mw7-ns center bg-light-gray pa3 ph5-ns">
            <Title
                sectTitle="Calculator" />
            <CalculatorComponent />
            {/* <article class="center mw6 hidden ba mv1 bb bg-gold">
                <div class="cf">
                    <div class="fl w-75  tc pv4 ">
                        <button class="bg-lightest-blue f6 h3 w-75 br-pill ph3 pv2 mb2 dib  near-black">8008135</button>
                    </div>
                    <div class="fl w-25  tc pv4 ">
                        <button class="f6 h3 w3 br-100 ph3 pv3 mb2 dib near-black bg-light-yellow ">%</button>
                    </div>
                </div>
                <div class="cf">
                    <div class="fl w-25  tc pv4 ">
                        <button class="f6 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-blue">7</button>
                    </div>
                    <div class="fl w-25  tc pv4 ">
                        <button class="f6 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-blue">8</button>
                    </div>
                    <div class="fl w-25 tc pv4 ">
                        <button class="f6 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-blue">9</button>
                    </div>
                    <div class="fl w-25 tc pv4 ">
                        <button class="f6 h3 w3 br-100 ph3 pv3 mb2 dib near-black bg-light-yellow ">*</button>
                    </div>
                </div>
                <div class="cf">
                    <div class="fl w-25  tc pv4 ">
                        <button class="f6 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-blue">4</button>
                    </div>
                    <div class="fl w-25  tc pv4 ">
                        <button class="f6 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-blue">5</button>
                    </div>
                    <div class="fl w-25 tc pv4 ">
                        <button class="f6 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-blue">6</button>
                    </div>
                    <div class="fl w-25 tc pv4 ">
                        <button class="f6 h3 w3 br-100 ph3 pv3 mb2 dib near-black bg-light-yellow ">-</button>
                    </div>
                </div>
                <div class="cf">
                    <div class="fl w-25  tc pv4 ">
                        <button class="f6 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-blue">1</button>
                    </div>
                    <div class="fl w-25  tc pv4 ">
                        <button class="f6 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-blue">2</button>
                    </div>
                    <div class="fl w-25 tc pv4 ">
                        <button class="f6 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-blue">3</button>
                    </div>
                    <div class="fl w-25 tc pv4 ">
                        <button class="f6 h3 w3 br-100 ph3 pv3 mb2 dib near-black bg-light-yellow ">+</button>
                    </div>
                </div>
                <div class="cf">
                    <div class="fl w-25  tc pv4 ">
                        <button class="f6 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-red">C</button>
                    </div>
                    <div class="fl w-25  tc pv4 ">
                        <button class="f6 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-blue">0</button>
                    </div>
                    <div class="fl w-25 tc pv4 ">
                        <button class="f6 h3 w3 br-100 ph3 pv3 mb2 dib near-black bg-light-yellow ">.</button>
                    </div>
                    <div class="fl w-25 tc pv4 ">
                        <button class="f6 h3 w3 br-100 ph3 pv3 mb2 dib near-black bg-light-yellow ">=</button>
                    </div>
                </div>
            </article> */}


        </section>
    );
}

function drumMachine(props) {
    return (
        <section class="mw6 mw7-ns center bg-light-gray pa3 ph5-ns">
            <Title
                sectTitle="Drum Machine" />
            <DrumMachineComponent />
            {/* <article class="center mw5 mw6-ns hidden ba mv1 bb">
                <div class="cf">
                    <div class="fl w-third  tc pv4 clouds">
                        <button class="f6 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-blue">!!!</button>
                    </div>
                    <div class="fl w-third  tc pv4 arch">
                        <button class="f6 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-blue">!!!</button>
                    </div>
                    <div class="fl w-third tc pv4 lips">
                        <button class="f6 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-blue">!!!</button>
                    </div>
                </div>
                <div class="cf">
                    <div class="fl w-third  tc pv4 clouds">
                        <button class="f6 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-blue">!!!</button>
                    </div>
                    <div class="fl w-third  tc pv4 arch">
                        <button class="f6 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-blue">!!!</button>
                    </div>
                    <div class="fl w-third tc pv4 lips">
                        <button class="f6 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-blue">!!!</button>
                    </div>
                </div>
                <div class="cf">
                    <div class="fl w-third  tc pv4 clouds">
                        <button class="f6 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-blue">!!!</button>
                    </div>
                    <div class="fl w-third  tc pv4 arch">
                        <button class="f6 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-blue">!!!</button>
                    </div>
                    <div class="fl w-third tc pv4 lips">
                        <button class="f6 h3 w3 br-100 ph3 pv3 mb2 dib washed-yellow bg-dark-blue">!!!</button>
                    </div>
                </div>
                <h1 class="f4 bg-near-black white mv0 pv2 ph3 tl tracked-tight ttu">SOUND EFFECT</h1>
            </article> */}


        </section>
    );
}

function markdownPreviewer(props) {
    return (
        <section class="mw6 mw7-ns center bg-light-gray pa3 ph5-ns">
            <Title
                sectTitle="Markdown Previewer" />
            <MarkdownPreviewerComponent />
            {/* <article class="center mw5 mw6-ns hidden  mv1 ">
                <label for="comment" class="f6 b db mb2">Enter Markdown:</label>
                <form class="pa3-ns pa0 black-80 h5">
                    <textarea id="comment" name="comment" class="db border-box hover-black h-100 w-100 measure ba  pa3 br2 mb2"
                        aria-describedby="comment-desc"></textarea>
                </form>


            </article>
            <article class="center mw5 mw6-ns hidden mv1 ">

                <div class="pa3 tc-l flex items-center justify-end">

                    <a class="f4-ns f5 link dim br2 ph3 pv2  dib white bg-dark-blue" href="#0">Preview</a>


                </div>

            </article> */}

        </section>
    );
}


function randomQuoteGenerator(props) {
    return (
        <section class="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
            <Title
                sectTitle="Random Quote Generator" />
            <RandomQuoteComponent />
        </section>
    );
}

