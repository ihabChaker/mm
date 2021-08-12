import React from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import { Link } from 'react-router-dom';
import { columns, data } from '../../../data/schedulelist';

function Schedulelist() {
    const tableData = {
        columns,
        data,
    };
    return (
        <div className="ms-panel">
            <div className="ms-panel-header ms-panel-custome">
                <h6>Schedule List</h6>
                <Link to="/doctor-schedule/add-schedule" className="ms-text-primary">Add Schedule</Link>
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

export default Schedulelist;