import React, { Component } from 'react';

const followerlist = [
    { img: 'assets/img/dashboard/doctor-1.jpg', name: 'Nathaniel Bustos', post: 'UI doctor', success: true, primary: false },
    { img: 'assets/img/dashboard/doctor-2.jpg', name: 'Anny Farisha', post: 'UI doctor', success: false, primary: true },
    { img: 'assets/img/dashboard/doctor-3.jpg', name: 'James Zathila', post: 'UI doctor', success: false, primary: true },
    { img: 'assets/img/dashboard/doctor-4.jpg', name: 'Jhon Deo', post: 'UI doctor', success: true, primary: false },
    { img: 'assets/img/dashboard/doctor-5.jpg', name: 'Khadiza Rehna', post: 'UI doctor', success: false, primary: true },
    { img: 'assets/img/dashboard/doctor-3.jpg', name: 'Peter Amber', post: 'UI doctor', success: true, primary: false },
    { img: 'assets/img/dashboard/doctor-2.jpg', name: 'Helen Southern', post: 'UI doctor', success: true, primary: false },
]

class Followers extends Component {
    render() {
        return (
            <div className="col-xl-4 col-md-12">
                <div className="ms-panel ms-panel-fh ms-widget">
                    <div className="ms-panel-header">
                        <h6>Followers</h6>
                    </div>
                    <div className="ms-panel-body p-0">
                        <ul className="ms-followers ms-list ms-scrollable">
                            {followerlist.map((item, i) => (
                                <li key={i} className="ms-list-item media">
                                    <img src={process.env.PUBLIC_URL + '/' + item.img} className="ms-img-small ms-img-round" alt="people" />
                                    <div className="media-body mt-1">
                                        <h4>{item.name}</h4>
                                        <span className="fs-12">{item.post}</span>
                                    </div>
                                    {
                                        item.success === true ? <button type="button" className="ms-btn-icon btn-success" name="button"><i className="material-icons">check</i> </button> : ''
                                    }
                                    {
                                        item.primary === true ? <button type="button" className="ms-btn-icon btn-warning" name="button"><i className="material-icons">person_add</i> </button> : ''
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Followers;