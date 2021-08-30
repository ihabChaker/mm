import React, { Component, useEffect, useState } from 'react';
import Scheduler, { Resource } from 'devextreme-react/scheduler';
import { resourcesData } from './data.js';
import axios from "axios"


const currentDate = new Date(2021, 2, 25);

const views = ['month', 'week', 'workWeek', "day", "agenda"];


// export const data = [
//     {
//         id: 1,
//         text: 'Heart Operation',
//         serviceId: [1],
//         startDate: new Date('2021-03-01T06:30:00.000Z'),
//         endDate: new Date('2021-03-01T08:00:00.000Z'),

//     },
//     {
//         id: 2,
//         text: 'Group Meeting',
//         serviceId: [1],
//         startDate: new Date('2021-03-03T06:30:00.000Z'),
//         endDate: new Date('2021-03-03T08:00:00.000Z'),

//     },
//     {
//         id: 3,
//         text: 'Dentist Meetup',
//         serviceId: [1],
//         startDate: new Date('2021-03-05T06:30:00.000Z'),
//         endDate: new Date('2021-03-05T08:00:00.000Z'),

//     },
//     {
//         id: 4,
//         text: 'Dr.June Appointment',
//         serviceId: [1],
//         startDate: new Date('2021-03-08T06:30:00.000Z'),
//         endDate: new Date('2021-03-08T08:00:00.000Z'),

//     },
//     {
//         id: 5,
//         text: 'Regular Holiday',
//         serviceId: [1],
//         startDate: new Date('2021-03-09T06:30:00.000Z'),
//         endDate: new Date('2021-03-09T08:00:00.000Z'),

//     },
//     {
//         id: 6,
//         text: 'Team Meeting',
//         serviceId: [1],
//         startDate: new Date('2021-03-11T06:30:00.000Z'),
//         endDate: new Date('2021-03-11T08:00:00.000Z'),

//     },
//     {
//         id: 7,
//         text: 'Dr.Jhon Appointment',
//         serviceId: [1],
//         startDate: new Date('2021-03-12T06:30:00.000Z'),
//         endDate: new Date('2021-03-12T08:00:00.000Z'),

//     },
//     {
//         id: 8,
//         text: 'Dr.Rick Appointment',
//         serviceId: [1],
//         startDate: new Date('2021-03-16T06:30:00.000Z'),
//         endDate: new Date('2021-03-16T08:00:00.000Z'),

//     },
//     {
//         id: 9,
//         text: 'Heart Operation',
//         serviceId: [1],
//         startDate: new Date('2021-03-18T06:30:00.000Z'),
//         endDate: new Date('2021-03-18T08:00:00.000Z'),

//     },
//     {
//         id: 10,
//         text: 'jake',
//         serviceId: [1],
//         startDate: new Date('2021-03-19T09:30:00.000Z'),
//         endDate: new Date('2021-03-19T10:00:00.000Z'),

//     },
//     {
//         id: 11,
//         text: 'harry',
//         serviceId: [1],
//         startDate: new Date('2021-03-19T13:30:00.000Z'),
//         endDate: new Date('2021-03-19T14:00:00.000Z'),

//     },
//     {
//         id: 12,
//         text: 'mike',
//         serviceId: [1],
//         startDate: new Date('2021-03-19T15:30:00.000Z'),
//         endDate: new Date('2021-03-19T16:00:00.000Z'),

//     },
//     {
//         id: 13,
//         text: 'Group Meeting',
//         serviceId: [1],
//         startDate: new Date('2021-03-19T06:30:00.000Z'),
//         endDate: new Date('2021-03-19T08:00:00.000Z'),

//     },

//     {
//         id: 14,
//         text: 'Dentist Meetup',
//         serviceId: [1],
//         startDate: new Date('2021-03-24T06:30:00.000Z'),
//         endDate: new Date('2021-03-24T08:00:00.000Z'),

//     },
//     {
//         id: 15,
//         text: 'Dr.June Appointment',
//         serviceId: [1],
//         startDate: new Date('2021-03-30T06:30:00.000Z'),
//         endDate: new Date('2021-03-30T08:00:00.000Z'),

//     }
// ];

function Calendar() {
    const [loading, setloading] = useState(true)
    var [jj, setjj] = useState([{
        id: 1,
        text: 'Heart Operation',
        serviceId: 1,
        startDate: new Date('2021-03-01T06:30:00.000Z'),
        endDate: new Date('2021-03-01T08:00:00.000Z'),
        createdAt: "2021-08-28 20:30:15"
    }])
    useEffect(() => {
        axios.get("http://localhost:5000/v1/appointment/get-appointments/1").then(result => {
            console.log(result.data.message)
            setjj([...jj, ...result.data.message])
            setloading(false)
        }).catch(err => {
            console.log(err.message)
        })
    }, [])

    return (
        <div className=" col-md-12">
            <div className="ms-panel ms-panel-fh">
                <div className="ms-panel-body calendar-wedgit">
                    {loading ? <p>loading </p> : <Scheduler
                        dataSource={jj}
                        onAppointmentAdded={(e) => {
                            console.log(e)
                            console.log(jj)
                            axios.post("http://localhost:5000/v1/appointment/create-appointment", { ...e.appointmentData, idMedecin: 54 }, {
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            }).then(result => {
                                console.log(result)
                            }).catch(err => {
                                console.log(err)
                            })
                        }}

                        views={views}
                        defaultCurrentView="month"
                        defaultCurrentDate={currentDate}
                        firstDayOfWeek={1}
                        startDayHour={3}
                        height={485}
                        cellDuration={10}
                        onAppointmentUpdated={(e) => {
                            if (e.appointmentData.id) {
                                axios.put("http://localhost:5000/v1/appointment/update-appointment", e.appointmentData, {
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                }).then(result => {
                                    console.log(result)
                                }).catch(err => {
                                    console.log(err)
                                })
                            }
                        }}

                        onAppointmentDeleted={e => {
                            console.log(e.appointmentData)
                            if (e.appointmentData.id) {
                                axios.delete("http://localhost:5000/v1/appointment/delete-appointment", {
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    data: { id: e.appointmentData.id, jake: "asdasdsad" }
                                }).then(result => {
                                    console.log(result)
                                }).catch(err => {
                                    console.log(err)
                                })
                            }
                        }}
                    >
                        <Resource
                            dataSource={resourcesData}
                            fieldExpr="serviceId"
                            label="Select Service"
                            allowMultiple={false}

                        />
                    </Scheduler>
                    }
                </div>
            </div>
        </div >
    );

}

export default Calendar;