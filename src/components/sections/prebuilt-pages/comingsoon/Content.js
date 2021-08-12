import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return <Fragment><li>
            <p classname="ms-duration" id="days">
                {days}
            </p>
            <p classname="ms-duration">Days</p>
        </li>
            <li>
                <p classname="ms-duration" id="hours">
                    {hours}
                </p> 
                <p classname="ms-duration">Hours</p>
            </li>
            <li>
                <p classname="ms-duration" id="minutes">
                    {minutes}
                </p>
                <p classname="ms-duration">Minutes</p>
            </li>
            <li>
                <p classname="ms-duration" id="seconds">
                    {seconds}
                </p>
                <p classname="ms-duration">Seconds</p>
            </li></Fragment>;
    }
};

class Content extends Component {
    render() {
        return (
            <main className="body-content ms-coming-soon">
                {/* Body Content Wrapper */}
                <div className="ms-content-wrapper">
                    <h1>We Are Coming Soon</h1>
                    <p className="ms-duration">Our Exciting Website is Under Construction</p>
                    <ul id="countdown-duration" className="ms-list-flex">
                        <Countdown
                            date={Date.now() + 31622400000}
                            renderer={renderer}
                        />
                    </ul>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Your Email" />
                        <div className="input-group-append">
                            <button type="button" name="update" className="btn btn-primary">Get Updated</button>
                        </div>
                    </div>
                    <ul className="ms-list-flex ms-social-container">
                        <li> <Link className="ms-social ms-fb" to="#"><i className="fab fa-facebook-f" /></Link> </li>
                        <li> <Link className="ms-social ms-pnt" to="#"><i className="fab fa-pinterest-p" /></Link> </li>
                        <li> <Link className="ms-social ms-tw" to="#"><i className="fab fa-twitter" /></Link> </li>
                        <li> <Link className="ms-social ms-wa" to="#"><i className="fab fa-whatsapp" /></Link> </li>
                        <li> <Link className="ms-social ms-skype" to="#"><i className="fab fa-skype" /></Link> </li>
                        <li> <Link className="ms-social ms-g-plus" to="#"><i className="fab fa-google-plus-g" /></Link> </li>
                    </ul>
                </div>
            </main>
        );
    }
}

export default Content;