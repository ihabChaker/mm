import React, { Component } from 'react';
import Scheduler, { Resource } from 'devextreme-react/scheduler';
import { data, resourcesData } from './data.js';
const currentDate = new Date(2021, 2, 25);
const views = ['month', 'week', 'workWeek', "day", "agenda"];

class Calendar extends Component {
    render() {
        return (
            <div className=" col-md-12">
                <div className="ms-panel ms-panel-fh">
                    <div className="ms-panel-body calendar-wedgit">
                        <Scheduler
                            dataSource={data}
                            onAppointmentAdded={e => {
                                console.log(e)
                            }}
                            onAppointmentDeleted={e => {
                                console.log(e)

                            }}
                            views={views}
                            defaultCurrentView="day"
                            defaultCurrentDate={currentDate}
                            firstDayOfWeek={1}
                            startDayHour={3}
                            height={485}
                            cellDuration={10}

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