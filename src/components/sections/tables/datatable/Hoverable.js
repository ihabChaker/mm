import React from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import { columns, data } from '../../../data/datatable';


function Hoverable() {
    const tableData = {
        columns,
        data,
    }; 
    return (
        <div className="ms-panel">
            <div className="ms-panel-header">
                <h6>Hoverable Rows Datatable</h6>
            </div>
            <div className="ms-panel-body">
                <p className="ms-directions">Check <code>/src/components/data/datatable.js</code> for reference</p>
                <div className=" datatables">
                    <DataTableExtensions {...tableData}>
                        <DataTable
                            columns={columns}
                            data={data}
                            pagination
                            responsive={true}
                            highlightOnHover
                            noHeader
                        />
                    </DataTableExtensions>
                </div>
            </div>
        </div>
    );
}

export default Hoverable;