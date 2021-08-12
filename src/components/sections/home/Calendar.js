import React, { Component } from 'react';
import Scheduler, { Resource } from 'devextreme-react/scheduler';
import { data, resourcesData } from './data.js';
const currentDate = new Date(2021, 2, 25);
const views = ['month'];

class Calendar extends Component {
    render() {
        return (
            <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="ms-panel ms-panel-fh">
                    <div className="ms-panel-body calendar-wedgit">
                        <Scheduler
                            dataSource={data}
                            views={views}
                            defaultCurrentView="month"
                            defaultCurrentDate={currentDate}
                            firstDayOfWeek={1}
                            startDayHour={9}
                            height={485}
                        >
                            <Resource
                                dataSource={resourcesData}
                                fieldExpr="serviceId"
                                label="Select Service"
                            />
                        </Scheduler>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calendar;