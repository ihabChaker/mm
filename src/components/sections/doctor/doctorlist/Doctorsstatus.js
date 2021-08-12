import React, { Component } from 'react';
import Scrollbar from 'react-perfect-scrollbar';

const doctorsstatus = [
    {
        img: 'assets/img/dashboard/doctor-3.jpg',
        name: 'James Zathila',
        designation: 'Gynaecologist',
        available: false,
    },
    {
        img: 'assets/img/dashboard/doctor-4.jpg',
        name: 'John Doe',
        designation: 'Radiotherapist',
        available: true,
    },
    {
        img: 'assets/img/dashboard/doctor-5.jpg',
        name: 'Khadiza Rehna',
        designation: 'General Surgeon',
        available: false,
    },
    {
        img: 'assets/img/dashboard/doctor-1.jpg',
        name: 'Peter Amber',
        designation: 'Orthopedic',
        available: true,
    },
    {
        img: 'assets/img/dashboard/doctor-4.jpg',
        name: 'Helen Southern',
        designation: 'Heart Surgeon',
        available: true,
    },
    {
        img: 'assets/img/dashboard/doctor-4.jpg',
        name: 'Jordan',
        designation: 'Heart Surgeon',
        available: false,
    },
];

class Doctorsstatus extends Component {
    render() {
        return (
            <div className="col-xl-5 col-md-12">
                <div className="ms-panel ms-panel-fh ms-widget">
                    <div className="ms-panel-header">
                        <h6>Active/Inactive Doctors</h6>
                    </div>
                    <div className="ms-panel-body p-0">
                        <Scrollbar className="ms-followers ms-list ms-scrollable">
                            {doctorsstatus.map((item, i) => (
                                <li key={i} className="ms-list-item media">
                                    <img src={process.env.PUBLIC_URL + "/" + item.img} className="ms-img-small ms-img-round" alt="people" />
                                    <div className="media-body mt-1">
                                        <h4>{item.name}</h4>
                                        <span className="fs-12"> {item.designation}</span>
                                    </div>
                                    {
                                        item.available === true ? <button type="button" className="ms-btn-icon btn-success" name="button"><i className="material-icons">check</i> </button> : <button type="button" className="ms-btn-icon btn-info" name="button"><i className="material-icons">person_add</i> </button>
                                    }
                                </li>
                            ))}
                        </Scrollbar>
                    </div>
                </div>
            </div>
        );
    }
}

export default Doctorsstatus;