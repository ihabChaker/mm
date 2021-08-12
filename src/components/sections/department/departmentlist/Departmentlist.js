import React from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import { Link } from 'react-router-dom';
import { columns, data } from '../../../data/departmentlist';

function Departmentlist() {
    const tableData = {
        columns,
        data,
    };
    return (
        <div className="col-xl-12">
            <div className="ms-panel">
                <div className="ms-panel-header  ms-panel-custome">
                    <h6>Department List</h6>
                    <Link to="/department/add-department" className="ms-text-primary">Add Department</Link>
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
        </div>
    );
}

export default Departmentlist;