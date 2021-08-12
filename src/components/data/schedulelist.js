import React from "react";
import { Link } from 'react-router-dom';

export const columns = [
    { name: "Serial No.", selector: "id", sortable: true  },
    { name: "Doctor Name", selector: "doctorname", sortable: true  },
    { name: "Department Name", selector: "departmentname", sortable: true  },
    { name: "Day", selector: "day", sortable: true  },
    { name: "Start time", selector: "starttime", sortable: true  },
    { name: "End time", selector: "endtime", sortable: true  },
    { name: "Status", 
        cell: row => <div data-tag="allowRowEvents" ><span className={row.status === "Active" ? 'badge badge-outline-success' : 'badge badge-outline-danger'}>{row.status}</span></div>, 
        sortable: true  
    },
    { 
        name: "Update", cell: row => <div data-tag="allowRowEvents" ><Link to='#'><i className='fas fa-pencil-alt ms-text-primary' /></Link> <Link to='#'><i className='far fa-trash-alt ms-text-danger' /></Link></div>, sortable: true },
];
export const data = [
    {
        id: "1",
        doctorname: "Denise",
        departmentname: "Neurology",
        day: "Sunday",
        starttime: "9:00",
        endtime: "11:00",
        status: "Active"
        
    },
    {
        id: "2",
        doctorname: "Jennifer",
        departmentname: "Heart Surgery",
        day: "Monday",
        starttime: "9:00",
        endtime: "11:00",
        status: "Inactive"
        
    },
    {
        id: "3",
        doctorname: "Joshua",
        departmentname: "Gynaecology",
        day: "Saturday",
        starttime: "9:00",
        endtime: "11:00",
        status: "Active"
        
    },
    {
        id: "4",
        doctorname: "Judy Clark",
        departmentname: "Orthopedics",
        day: "Tuesday",
        starttime: "9:00",
        endtime: "11:00",
        status: "Active"
        
    },
    {
        id: "5",
        doctorname: "Kyle",
        departmentname: "Radiotherapy",
        day: "Sunday",
        starttime: "9:00",
        endtime: "11:00",
        status: "Inactive"
        
    },
    {
        id: "6",
        doctorname: "Linda",
        departmentname: "ENT Department",
        day: "Sunday",
        starttime: "9:00",
        endtime: "11:00",
        status: "Active"
        
    },
    {
        id: "7",
        doctorname: "Sandra",
        departmentname: "General Surgery",
        day: "Tuesday",
        starttime: "9:00",
        endtime: "11:00",
        status: "Active"
        
    },
    {
        id: "8",
        doctorname: "Micheal",
        departmentname: "Heart Surgery",
        day: "Sunday",
        starttime: "9:00",
        endtime: "11:00",
        status: "Inactive"
        
    },
    {
        id: "9",
        doctorname: "Paul",
        departmentname: "Radiotherapy",
        day: "Sunday",
        starttime: "9:00",
        endtime: "11:00",
        status: "Active"
        
    },
    {
        id: "10",
        doctorname: "Terry",
        departmentname: "Cancer Department",
        day: "Sunday",
        starttime: "9:00",
        endtime: "11:00",
        status: "Inactive"
        
    },
    {
        id: "11",
        doctorname: "Gloria",
        departmentname: "Gynaecology",
        day: "Tuesday",
        starttime: "9:00",
        endtime: "11:00",
        status: "Active"
        
    },
    {
        id: "12",
        doctorname: "Charles",
        departmentname: "Orthopedics",
        day: "Sunday",
        starttime: "9:00",
        endtime: "11:00",
        status: "Active"
        
    },
    {
        id: "13",
        doctorname: "Patrick",
        departmentname: "Heart Surgery",
        day: "Saturday",
        starttime: "9:00",
        endtime: "11:00",
        status: "Active"
        
    },
    {
        id: "14",
        doctorname: "Dennis",
        departmentname: "Neurology",
        day: "Friday",
        starttime: "9:00",
        endtime: "11:00",
        status: "Active"
        
    }
]
export default data;