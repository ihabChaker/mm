import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import totalreport from '../../../data/totalreport.json';

class Reportlist extends Component {
    render() {
        return (
            <div className="col-xl-12 col-md-12">
                <div className="ms-panel ms-panel-fh">
                    <div className="ms-panel-header">
                        <h6>Total Report</h6>
                    </div>
                    <div className="ms-panel-body">
                        <div className="table-responsive">
                            <table className="table thead-primary">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Id No.</th>
                                        <th scope="col">Admit Date</th>
                                        <th scope="col">Patient Name</th>
                                        <th scope="col">Doctor Name</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Mobile No.</th>
                                        <th scope="col">Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {totalreport.map((item, i) => (
                                        <tr key={i}>
                                            <th scope="row">{i+1}</th>
                                            <th scope="row">{item.id}</th>
                                            <td>{item.admitdate}</td>
                                            <td>{item.patientname}</td>
                                            <td>{item.doctorname}</td>
                                            <td>{item.description}</td>
                                            <td>{item.mobileno}</td>
                                            <td><Link to="#"><i className="fas fa-pencil-alt ms-text-primary" /></Link> <Link to="#"><i className="far fa-trash-alt ms-text-danger" /></Link></td>
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

export default Reportlist;