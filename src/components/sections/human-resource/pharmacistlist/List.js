import React from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import { Link } from 'react-router-dom';
import { data, columns } from '../../../data/pharmacistlist';

function List() {
    const tableData = {
        columns,
        data,
    };
    return (
        <div className="ms-panel">
            <div className="ms-panel-header ms-panel-custome">
                <h6>Pharmacist List</h6>
                <Link to="/human-resource/add-pharmacist" className="ms-text-primary">Add Pharmacist</Link>
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
                        />
                    </DataTableExtensions>
                </div>
            </div>
        </div>
    );
}

export default List;