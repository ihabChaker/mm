import React, { Component } from 'react';

const newpatientlist = [
    {
        img: 'assets/img/dashboard/patient-3.jpg',
        name: 'Richard',
        email: 'Richard288@example.com',
        phone: '+1-202-555-0875',
        disease: 'Fever'
    },
    {
        img: 'assets/img/dashboard/patient-2.jpg',
        name: 'William',
        email: 'William434@example.com',
        phone: '+1-202-534-0112',
        disease: 'Eye'
    },
    {
        img: 'assets/img/dashboard/patient-4.jpg',
        name: 'Jhone Deo',
        email: 'johndeo652@example.com',
        phone: '+1-202-182-0132',
        disease: 'Typhoid'
    },
    {
        img: 'assets/img/dashboard/patient-5.jpg',
        name: 'Martin',
        email: 'Martin876@example.com',
        phone: '+1-202-998-2341',
        disease: 'Cancer'
    },
    {
        img: 'assets/img/dashboard/patient-1.jpg',
        name: 'Robert',
        email: 'Robert082@example.com',
        phone: '+1-202-455-1431',
        disease: 'Diabetes'
    },
];

class Newpatient extends Component {
    render() {
        return (
            <div className="col-xl-8 col-md-12">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>New Patients</h6>
                    </div>
                    <div className="ms-panel-body">
                        <div className="table-responsive">
                            <table className="table table-hover  thead-primary">
                                <thead>
                                    <tr>
                                        <th scope="col">Patient</th>
                                        <th scope="col">E-mail Id</th>
                                        <th scope="col">Contact</th>
                                        <th scope="col">Disease</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {newpatientlist.map((item, i) => (
                                        <tr key={i}>
                                            <td className="ms-table-f-w"> <img src={process.env.PUBLIC_URL+'/'+item.img} alt="people" /> {item.name} </td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.disease}</td>
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

export default Newpatient;