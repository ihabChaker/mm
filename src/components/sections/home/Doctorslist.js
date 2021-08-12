import React, { Component } from 'react';
import Scrollbar from 'react-perfect-scrollbar'

const doctorlist = [
    {
        img: 'assets/img/dashboard/doctor-1.jpg',
        name: 'Micheal',
        designation: 'MBBS, MD',
        available: true,
    },
    {
        img: 'assets/img/dashboard/doctor-2.jpg', 
        name: 'Jennifer',
        designation: 'MD',
        available: false,
    },
    {
        img: 'assets/img/dashboard/doctor-3.jpg',
        name: 'Adwerd',
        designation: 'BMBS',
        available: false,
    },
    {
        img: 'assets/img/dashboard/doctor-4.jpg',
        name: 'John Doe',
        designation: 'MS, MD',
        available: true,
    },
    {
        img: 'assets/img/dashboard/doctor-5.jpg',
        name: 'Jordan',
        designation: 'MBBS',
        available: false,
    },
];

class Doctorslist extends Component {
    render() {
        return (
            <div className="col-xl-4 col-md-12">
                <div className="ms-panel ms-panel-fh ms-widget">
                    <div className="ms-panel-header ms-panel-custome">
                        <h6>Doctors List</h6>
                    </div>
                    <div className="ms-panel-body p-0">
                        <Scrollbar className="ms-followers ms-list ms-scrollable">
                            {doctorlist.map((item, i) => (
                                <li key={i} className="ms-list-item media">
                                    <img src={process.env.PUBLIC_URL+'/'+item.img} className="ms-img-small ms-img-round" alt="people" />
                                    <div className="media-body mt-1">
                                        <h4>{item.name}</h4>
                                        <span className="fs-12">{item.designation}</span>
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

export default Doctorslist;