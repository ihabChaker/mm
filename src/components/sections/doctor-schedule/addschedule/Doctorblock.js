import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, NavLink } from 'react-bootstrap';

const doctorblock = [
    {
        img: '../assets/img/dashboard/doctor-4.jpg',
        name: 'Michael Sullivan',
        designation: 'Ophthalmologist',
        scheduledate: '25 Jan 2021',
    },
    {
        img: '../assets/img/dashboard/doctor-2.jpg',
        name: 'Linda Barrett',
        designation: 'Dentist',
        scheduledate: '22 Jan 2021',
    },
    {
        img: '../assets/img/dashboard/doctor-1.jpg',
        name: 'Ronald Jacobs',
        designation: 'Oncologist',
        scheduledate: '19 Jan 2021',
    },
    {
        img: '../assets/img/dashboard/doctor-5.jpg',
        name: 'Mark Hunter',
        designation: 'Cardiologist',
        scheduledate: '21 Jan 2021',
    },
    {
        img: '../assets/img/dashboard/doctor-2.jpg',
        name: 'Cristina Groves',
        designation: 'Psychiatrist',
        scheduledate: '15 Jan 2021',
    },
    {
        img: '../assets/img/dashboard/doctor-1.jpg',
        name: 'Cristina Groves',
        designation: 'Psychiatrist',
        scheduledate: '21 Jan 2021',
    },
];

class Doctorblock extends Component {
    render() {
        return (
            <div className="col-xl-12 col-md-12">
                <div className="row">
                    {doctorblock.map((item, i) => (
                        <div key={i} className="col-lg-6 col-md-6 col-sm-6">
                            <div className="ms-card">
                                <div className="ms-card-body">
                                    <div className="media fs-14">
                                        <div className="mr-2 align-self-center">
                                            <img src={item.img} className="ms-img-round" alt="people" />
                                        </div>
                                        <div className="media-body">
                                            <h6>{item.name}</h6>
                                            <Dropdown className="float-right">
                                                <Dropdown.Toggle as={NavLink} className="p-0 toggle-icon-none">
                                                    <i className="material-icons">more_vert</i>
                                                </Dropdown.Toggle>
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
                                            <h6 className="mt-2"><span><i className="far fa-calendar" /></span> {item.scheduledate}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Doctorblock;