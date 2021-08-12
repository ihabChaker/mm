import React from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import { Link } from 'react-router-dom';
import { columns, data } from '../../../data/appointmentlist';

function Appointmentlist() {
    const tableData = {
        columns,
        data,
    };
    return (
        <div className="ms-panel">
            <div className="ms-panel-header ms-panel-custome">
                <h6>Appointment List</h6>
                <Link to="/appointment/add-appointment" className="ms-text-primary">Add Appointment</Link>
            </div>
            <div className="ms-panel-body">
                <div className="thead-primary datatables">
                    <DataTableExtensions {...tableData}>
                        <DataTable
                            columns={columns}
                            data={data}
                            pagination
                            responsive={true}
                            noHeader
                            striped
                        />
                    </DataTableExtensions>
                </div>
            </div>
        </div>
    );
}

export default Appointmentlist;