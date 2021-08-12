import React, { Component, Fragment } from 'react';
import Latestpost from './Latestpost';

// Skills
const skills = [
    { title: 'Web Design', limit: 83 },
    { title: 'Development', limit: 50 },
    { title: 'Interface Design', limit: 75 },
    { title: 'Illustration', limit: 92 },
    { title: 'Brand Design', limit: 97 },
    { title: 'Adobe', limit: 90 },
];
// Information
const information = [
    { title: 'Full Name', text: 'Chihoo Hwang' },
    { title: 'Birthday', text: 'January 25th, 1996' },
    { title: 'Language', text: 'English (US)' },
    { title: 'Website', text: 'www.example.com' },
    { title: 'Phone Number', text: '+123 456 789' },
    { title: 'Email Address', text: 'example@mail.com' },
    { title: 'Location', text: 'New York, USA' },
];
// Work Exp
const workexp = [
    { logo: 'assets/img/dashboard/doctor-1.jpg', name: 'User Research Hub', time: 'January 2013 to Present', designation: 'UX Designer' },
    { logo: 'assets/img/dashboard/doctor-2.jpg', name: 'User Research Hub', time: 'January 2013 to Present', designation: 'UX Designer' },
    { logo: 'assets/img/dashboard/doctor-3.jpg', name: 'User Research Hub', time: 'January 2013 to Present', designation: 'UX Designer' },
    { logo: 'assets/img/dashboard/doctor-4.jpg', name: 'User Research Hub', time: 'January 2013 to Present', designation: 'UX Designer' },
    { logo: 'assets/img/dashboard/doctor-5.jpg', name: 'User Research Hub', time: 'January 2013 to Present', designation: 'UX Designer' },
    { logo: 'assets/img/dashboard/doctor-1.jpg', name: 'User Research Hub', time: 'January 2013 to Present', designation: 'UX Designer' },
];
class About extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xl-7 col-md-12">
                    <div className="ms-panel ms-panel-fh">
                        <div className="ms-panel-body">
                            <h2 className="section-title">About Me</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non elit nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            Aenean luctus, justo id pellentesque imperdiet, augue metus ornare quam, in pulvinar massa erat nec dui. Nam at facilisis nulla.
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non elit nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            Aenean luctus, justo id pellentesque imperdiet, augue metus ornare quam, in pulvinar massa erat nec dui. Nam at facilisis nulla.
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non elit nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            Aenean luctus, justo id pellentesque imperdiet, augue metus ornare quam, in pulvinar massa erat nec dui. Nam at facilisis nulla.
                            </p>
                            <div className="ms-profile-skills">
                                <h2 className="section-title">Professional Skills</h2>
                                <ul className="ms-skill-list">
                                    {skills.map((item, i) => (
                                        <li key={i} className="ms-skill">{item.title}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 col-md-12">
                    <div className="ms-panel ms-panel-fh">
                        <div className="ms-panel-body">
                            <ul className="ms-profile-stats">
                                <li>
                                    <h3 className="ms-count">5790</h3>
                                    <span>Followers</span>
                                </li>
                                <li>
                                    <h3 className="ms-count">4.8</h3>
                                    <span>User Rating</span>
                                </li>
                            </ul>
                            <h2 className="section-title">Basic Information</h2>
                            <table className="table ms-profile-information">
                                <tbody>
                                    {information.map((item, i) => (
                                        <tr key={i}>
                                            <th scope="row">{item.title}</th>
                                            <td>{item.text}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="ms-panel">
                        <div className="ms-panel-body">
                            <h2 className="section-title">Work Experience</h2>
                            <div className="row">
                                {workexp.map((item, i) => (
                                    <div key={i} className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="media ms-profile-experience">
                                            <div className="mr-2 align-self-center">
                                                <img src={process.env.PUBLIC_URL + "/" + item.logo} className="ms-img-round ms-img-small" alt="people" />
                                            </div>
                                            <div className="media-body">
                                                <h4>{item.name}</h4>
                                                <p>{item.time}</p>
                                                <p>{item.designation}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-md-12">
                    <div className="ms-panel ms-panel-fh">
                        <div className="ms-panel-body">
                            <h2 className="section-title">Skill level</h2>
                            {skills.map((item, i) => (
                                <Fragment key={i}>
                                    <span className="progress-label">{item.title}</span><span className="progress-status">{item.limit}%</span>
                                    <div className="progress progress-tiny">
                                        <div className="progress-bar bg-primary" role="progressbar" style={{ "width": (item.limit) + '%' }} aria-valuenow={item.limit} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-md-12">
                    <div className="ms-panel">
                        <div className="ms-panel-body">
                            <h2 className="section-title">My Timeline</h2>
                            <ul className="ms-activity-log">
                                <li>
                                    <div className="ms-btn-icon btn-pill icon btn-success">
                                        <i className="flaticon-tick-inside-circle" />
                                    </div>
                                    <h6>Computer Science Degree</h6>
                                    <span> <i className="material-icons">event</i>1 January, 2018</span>
                                    <p className="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, ula in sodales vehicula....</p>
                                </li>
                                <li>
                                    <div className="ms-btn-icon btn-pill icon btn-info">
                                        <i className="flaticon-information" />
                                    </div>
                                    <h6>Landed first Job</h6>
                                    <span> <i className="material-icons">event</i>4 March, 2018</span>
                                    <p className="fs-14">Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
                                </li>
                                <li>
                                    <div className="ms-btn-icon btn-pill icon btn-success">
                                        <i className="flaticon-tick-inside-circle" />
                                    </div>
                                    <h6>Started my own Company</h6>
                                    <span> <i className="material-icons">event</i>1 March, 2021</span>
                                    <p className="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, ula in sodales vehicula....</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Latestpost />
            </div>
        );
    }
}

export default About;