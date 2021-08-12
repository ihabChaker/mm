import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import { columns, data } from '../../../data/patientlist';

function Patientlist() {
    const tableData = {
        columns,
        data,
    };
    return (
        <div className="ms-panel">
            <div className="ms-panel-header ms-panel-custome">
                <h6>Patient List</h6>
                <Link to="/patient/add-patient" className="ms-text-primary">Add Patient</Link>
            </div>
            <div className="ms-panel-body">
                <div className="thead-primary datatables">
                    <DataTableExtensions {...tableData}>
                        <DataTable
                            columns={columns}
                            data={data}
                            pagination
                            responsive={true}
                            striped
                            noHeader
                        />
                    </DataTableExtensions>
                </div>
            </div>
        </div>
    );
}

export default Patientlist;
