import React from "react";
import { Link } from 'react-router-dom';

export const columns = [
    { name: "#", selector: "id", sortable: true  },
    { name: "Doctor Name", selector: "doctorname", sortable: true  },
    { name: "Department Name", selector: "departmentname", sortable: true  },
    { name: "Department Head", selector: "departmenthead", sortable: true  },
    { 
        name: "Status", 
        cell: row => <div data-tag="allowRowEvents" ><span className={row.status === "Active" ? 'badge badge-outline-success' : 'badge badge-outline-danger'}>{row.status}</span></div>, 
        sortable: true  
    },
    { 
        name: "Action", cell: row => <div data-tag="allowRowEvents" ><Link to='#'><i className='fas fa-pencil-alt ms-text-primary' /></Link> <Link to='#'><i className='far fa-trash-alt ms-text-danger' /></Link></div>, sortable: true },
];


export const data = [
    {
        id: "1",
        doctorname: "Denise",
        departmentname: "Dentists",
        departmenthead: "Daniel",
        status: "Active"
        
    },
    {
        id: "2",
        doctorname: "Jennifer",
        departmentname: "Neurology",
        departmenthead: "Joshua",
        status: "Inactive"
        
    },
    {
        id: "3",
        doctorname: "Joshua",
        departmentname: "Opthalmology",
        departmenthead: "Jenni",
        status: "Inactive"
        
    },
    {
        id: "4",
        doctorname: "Sandra",
        departmentname: "Orthopedics",
        departmenthead: "Daniel",
        status: "Active"
        
    },
    {
        id: "5",
        doctorname: "Judy Clark",
        departmentname: "Cancer Department",
        departmenthead: "Jacob",
        status: "Inactive"
        
    },
    {
        id: "6",
        doctorname: "Linda",
        departmentname: "ENT Department",
        departmenthead: "Adwerd",
        status: "Inactive"
        
    },
    {
        id: "7",
        doctorname: "Micheal",
        departmentname: "General Surgery",
        departmenthead: "Kyle",
        status: "Active"
        
    },
    {
        id: "8",
        doctorname: "Patrick",
        departmentname: "Heart Surgery",
        departmenthead: "Paul",
        status: "Inactive"
        
    },
    {
        id: "9",
        doctorname: "Paul",
        departmentname: "Radiotherapy",
        departmenthead: "Patrick",
        status: "Active"
        
    },
    {
        id: "10",
        doctorname: "Gloria",
        departmentname: "Cancer Department",
        departmenthead: "Sandra",
        status: "Inactive"
        
    },
    {
        id: "11",
        doctorname: "Deni",
        departmentname: "Gynaecology",
        departmenthead: "Denis",
        status: "Active"
        
    },
    {
        id: "12",
        doctorname: "Jenni",
        departmentname: "Orthopedics",
        departmenthead: "Bella",
        status: "Inactive"
        
    },
    {
        id: "13",
        doctorname: "Joshua",
        departmentname: "Heart Surgery",
        departmenthead: "Henry",
        status: "Active"
        
    },
    {
        id: "14",
        doctorname: "Kyle",
        departmentname: "Neurology",
        departmenthead: "Linda",
        status: "Active"
        
    }
]
export default data;