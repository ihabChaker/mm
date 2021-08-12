import React, { Component } from 'react';

class Pillsocialmedia extends Component {
    render() {
        return (
            <div className="ms-panel ms-btn-display">
                <div className="ms-panel-header">
                    <h6>Pill Social Buttons</h6>
                </div>
                <div className="ms-panel-body">
                    <button type="button" className="btn btn-pill bg-facebook has-icon"><i className="fab fa-facebook-f" /> Facebook</button>
                    <button type="button" className="btn btn-pill bg-twitter has-icon"><i className="fab fa-twitter" /> Twitter</button>
                    <button type="button" className="btn btn-pill bg-linkedin has-icon"><i className="fab fa-linkedin-in" /> Linkedin</button>
                    <button type="button" className="btn btn-pill bg-instagram has-icon"><i className="fab fa-instagram" /> Instagram</button>
                    <button type="button" className="btn btn-pill bg-g-plus has-icon"><i className="fab fa-google-plus-g" /> Google+</button>
                    <button type="button" className="btn btn-pill bg-pinterest has-icon"><i className="fab fa-pinterest-p" /> Pinterest</button>
                    <button type="button" className="btn btn-pill bg-dropbox has-icon"><i className="fab fa-dropbox" /> Dropbox</button>
                    <button type="button" className="btn btn-pill bg-dribble has-icon"><i className="fab fa-dribbble" /> Dribble</button>
                </div>
            </div>
        );
    }
}

export default Pillsocialmedia;