import React from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import { columns, data } from '../../../data/datatable';

function Withscroll() {
    const tableData = {
        columns,
        data,
    };
    return (
        <div className="ms-panel">
            <div className="ms-panel-header">
                <h6>Datatable With Scroll</h6>
            </div>
            <div className="ms-panel-body">
                <div className="datatables">
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

export default Withscroll;