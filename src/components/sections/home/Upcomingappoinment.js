import React, { Component } from 'react';

const appointmentlist = [
    {
        patientimg: 'assets/img/dashboard/patient-1.jpg',
        patientname: 'Bernardo Galaviz',
        doctorname: 'Dr. Cristina Groves',
        date: '01 Dec 2021',
        time: '5:00 PM',
        phoneno: '+01-789-654-123',
        status: true,
    },
    {
        patientimg: 'assets/img/dashboard/patient-5.jpg',
        patientname: 'Jenni',
        doctorname: 'Dr. Richard Miles',
        date: '01 Dec 2021',
        time: '8:00 PM',
        phoneno: '+10-654-654-991',
        status: true,
    },
    {
        patientimg: 'assets/img/dashboard/patient-6.jpg',
        patientname: 'John Doe',
        doctorname: 'Dr. Andrew',
        date: '01 Dec 2021',
        time: '10:00 AM',
        phoneno: '+10-709-254-445',
        status: false,
    },
    {
        patientimg: 'assets/img/dashboard/patient-8.jpg',
        patientname: 'Alesdro Guitto',
        doctorname: 'Dr. Robert',
        date: '01 Dec 2021',
        time: '2:00 PM',
        phoneno: '+10-102-225-333',
        status: true,
    },
    {
        patientimg: 'assets/img/dashboard/patient-1.jpg',
        patientname: 'Richard',
        doctorname: 'Dr. Adwerd',
        date: '07 Dec 2021',
        time: '5:00 PM',
        phoneno: '+01-222-111-356',
        status: false,
    },
];

class Upcomingappoinment extends Component {
    render() {
        return (
            <div className="col-xl-8 col-md-12">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>Upcoming Appointments</h6>
                    </div>
                    <div className="ms-panel-body">
                        <div className="table-responsive">
                            <table className="table table-hover thead-primary">
                                <thead>
                                    <tr>
                                        <th scope="col">Patient</th>
                                        <th scope="col">Doctor</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Timing</th>
                                        <th scope="col">Contact</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {appointmentlist.map((item, i) => (
                                        <tr key={i}>
                                            <td className="ms-table-f-w"> <img src={process.env.PUBLIC_URL+'/'+item.patientimg} alt="people" /> {item.patientname} </td>
                                            <td>{item.doctorname}</td>
                                            <td>{item.date}</td>
                                            <td>{item.time}</td>
                                            <td>{item.phoneno}</td>
                                            <td>
                                                {
                                                    item.status === true ? <label className="ms-switch"> <input type="checkbox" defaultChecked /> <span className="ms-switch-slider ms-switch-success round" /> </label> : <label className="ms-switch"> <input type="checkbox" /> <span className="ms-switch-slider ms-switch-success round" /> </label>
                                                }
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Upcomingappoinment;