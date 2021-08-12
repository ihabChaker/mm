import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, NavLink } from 'react-bootstrap';

const doctorsblock = [
    {
        img: 'assets/img/dashboard/doctor-1.jpg',
        name: 'Michael Sullivan',
        designation: 'Ophthalmologist',
        location: 'United States, San Francisco'
    },
    {
        img: 'assets/img/dashboard/doctor-2.jpg',
        name: 'Linda Barrett',
        designation: 'Dentist',
        location: 'United States, San Francisco'
    },
    {
        img: 'assets/img/dashboard/doctor-3.jpg',
        name: 'Ronald Jacobs',
        designation: 'Oncologist',
        location: 'United States, San Francisco'
    },
    {
        img: 'assets/img/dashboard/doctor-4.jpg',
        name: 'Mark Hunter',
        designation: 'Cardiologist',
        location: 'United States, New York'
    },
    {
        img: 'assets/img/dashboard/doctor-5.jpg',
        name: 'Cristina Groves',
        designation: 'Psychiatrist',
        location: 'United States, California'
    },
    {
        img: 'assets/img/dashboard/doctor-1.jpg',
        name: 'Justin Parker',
        designation: 'Pediatrics',
        location: 'United States, New York'
    },
    {
        img: 'assets/img/dashboard/doctor-2.jpg',
        name: 'Shirley Willis',
        designation: 'Radiologist',
        location: 'United States, San Francisco'
    },
    {
        img: 'assets/img/dashboard/doctor-3.jpg',
        name: 'Diana Bailey',
        designation: 'General Surgery',
        location: 'United States, California'
    },
    {
        img: 'assets/img/dashboard/doctor-4.jpg',
        name: 'Albert Sandoval',
        designation: 'Neurologist',
        location: 'United States, San Francisco'
    },
];

class Doctorsblock extends Component {
    render() {
        return (
            <Fragment>
                {doctorsblock.map((item, i) => (
                    <div key={i} className="col-lg-4 col-md-4 col-sm-6">
                        <div className="ms-card">
                            <div className="ms-card-body">
                                <div className="media fs-14">
                                    <div className="mr-2 align-self-center">
                                        <img src={process.env.PUBLIC_URL + "/" + item.img} className="ms-img-round" alt="people" />
                                    </div>
                                    <div className="media-body">
                                        <h6>{item.name}</h6>
                                        <Dropdown className="float-right">
                                            <Dropdown.Toggle as={NavLink} className="p-0 toggle-icon-none"><i className="material-icons">more_vert</i></Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                                <li className="ms-dropdown-list">
                                                    <Link className="media p-2" to="#">
                                                        <div className="media-body">
                                                            <span>View Details</span>
                                                        </div>
                                                    </Link>
                                                    <Link className="media p-2" to="#">
                                                        <div className="media-body">
                                                            <span>Assign</span>
                                                        </div>
                                                    </Link>
                                                    <Link className="media p-2" to="#">
                                                        <div className="media-body">
                                                            <span>Edit</span>
                                                        </div>
                                                    </Link>
                                                    <Link className="media p-2" to="#">
                                                        <div className="media-body">
                                                            <span>Delete</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <p className="fs-12 my-1 text-disabled">{item.designation}</p>
                                        <h6 className="mt-2">
                                            <span className="fs-14">
                                                <i className="fas fa-map-marker-alt" />
                                            </span> {item.location}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Fragment>
        );
    }
}

export default Doctorsblock;