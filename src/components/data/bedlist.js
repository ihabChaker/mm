import React from "react";
import { Link } from 'react-router-dom';

export const columns = [
    { name: "Serial No.", selector: "id", sortable: true },
    { name: "Patient Name", selector: "name", sortable: true },
    { name: "Bed Type", selector: "type", sortable: true },
    { name: "Description", selector: "description", sortable: true },
    { name: "Bed Capacity", selector: "capacity", sortable: true },
    { name: "Update", cell: row => <div data-tag="allowRowEvents" ><Link to='#'><i className='fas fa-pencil-alt ms-text-primary' /></Link> <Link to='#'><i className='far fa-trash-alt ms-text-danger' /></Link></div>, sortable: true },
];

export const data = [ 
    {
        id: 1,
        name: "Jacob",
        type: "NON-AC-1st Floor",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        capacity: "1/2",

    },
    {
        id: 2,
        name: "Nick",
        type: "AC-3rd Floor",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        capacity: "1/2",

    },
    {
        id: 3,
        name: "Richard",
        type: "NON-AC-2nd Floor",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        capacity: "1/2",

    },
    {
        id: 4,
        name: "Kyle",
        type: "AC-2nd Floor",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        capacity: "1/2",

    },
    {
        id: 5,
        name: "jennifer",
        type: "NON-AC-3rd Floor",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        capacity: "1/2",

    },
    {
        id: 6,
        name: "Adwerd",
        type: "AC-1st Floor",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        capacity: "1/2",

    },
    {
        id: 7,
        name: "Rose",
        type: "NON-AC-2nd Floor",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        capacity: "1/2",

    },
    {
        id: 8,
        name: "Joshphe",
        type: "AC-2nd Floor",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        capacity: "1/2",

    },
    {
        id: 9,
        name: "Nelson",
        type: "NON-AC-2nd Floor",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        capacity: "1/2",

    },
    {
        id: 10,
        name: "Jacob",
        type: "AC-2nd Floor",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        capacity: "1/2",

    },
    {
        id: 11,
        name: "Nick",
        type: "AC-2nd Floor",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        capacity: "1/2",

    },
    {
        id: 12,
        name: "Richard",
        type: "AC-3rd Floor",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        capacity: "1/2",

    },
    {
        id: 13,
        name: "Kyle",
        type: "NON-AC-1st Floor",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        capacity: "1/2",

    },
    {
        id: 14,
        name: "jennifer",
        type: "AC-2nd Floor",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        capacity: "1/2",

    }
]
export default data;