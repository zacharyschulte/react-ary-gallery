import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavComponent from './components/NavComponent';

class Gallery extends React.Component {
    render() {
        return (
            <div class="wrapper flex-auto bg-light-blue system-sans-serif">
                <NavComponent />
                <Footer />
            </div>
        );
    }
}

function Footer(props) {
    return (
        <footer class="footer self-end pv4 ph3 ph5-m ph6-l mid-gray">
            <small class="f6 db tc">2020 <b class="ttu"><a href="https://zacharyschulte.com/"
                class="f6 dib ph2 link mid-gray dim">Zachary Schulte</a></b></small>
        </footer>
    );
}

ReactDOM.render(
    <Gallery />,
    document.getElementById('root')
);
