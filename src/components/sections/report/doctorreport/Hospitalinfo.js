import React, { Component } from 'react';

const hospitalinfolist = [
    {
        headname: 'Daniel',
        departmentname: 'Dental',
        otherstaff: 20,
        impression: 17.24,
        status: true,
    },
    {
        headname: 'Jenni',
        departmentname: 'Medicine',
        otherstaff: 28,
        impression: 12.24,
        status: false,
    },
    {
        headname: 'Elly',
        departmentname: 'Gynaecology',
        otherstaff: 12,
        impression: 32.04,
        status: true,
    },
    {
        headname: 'Jacob',
        departmentname: 'Cardiology',
        otherstaff: 9,
        impression: 20.75,
        status: false,
    },
    {
        headname: 'Richard',
        departmentname: 'V.D.',
        otherstaff: 10,
        impression: 13.38,
        status: true,
    }, {
        headname: 'Nick',
        departmentname: 'Infectious disease',
        otherstaff: 10,
        impression: 13.38,
        status: true,
    },
    {
        headname: 'Jennifer',
        departmentname: 'Surgery',
        otherstaff: 10,
        impression: 13.38,
        status: true,
    },
    {
        headname: 'Robert',
        departmentname: 'Plastic surgery',
        otherstaff: 10,
        impression: 13.38,
        status: true,
    },
    {
        headname: 'William',
        departmentname: 'Orthopaedics',
        otherstaff: 10,
        impression: 13.38,
        status: true,
    }
]

class Hospitalinfo extends Component {
    render() {
        return (
            <div className="ms-panel pb-4">
                <div className="ms-panel-header">
                    <h6>Hospital Department Head information</h6>
                </div>
                <div className="ms-panel-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover thead-primary">
                            <thead>
                                <tr>
                                    <th scope="col">Department Head Name</th>
                                    <th scope="col">Department Name</th>
                                    <th scope="col">Other Staff</th>
                                    <th scope="col">Impressions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {hospitalinfolist.map((item, i) => (
                                    <tr key={i}>
                                        <td>{item.headname}</td>
                                        <td>{item.departmentname}</td>
                                        <td>{item.otherstaff}</td>
                                        {
                                            item.status === true ? <td className="ms-text-success">+{item.impression}%</td> : <td className="ms-text-danger">-{item.impression}%</td>
                                        }
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hospitalinfo;