import React from "react";
import { Link } from 'react-router-dom';

export const columns = [
    { name: "#", selector: "id", sortable: true },
    { name: "Title", selector: "title", sortable: true },
    { name: "Description", selector: "description", sortable: true },
    { name: "Start Date", selector: "startdate", sortable: true },
    { name: "End Date", selector: "enddate", sortable: true },
    { name: "Assign By", selector: "assignby", sortable: true },
    { name: "Status", cell: row => <div data-tag="allowRowEvents" ><span className={row.status === "Active" ? 'badge badge-outline-success' : 'badge badge-outline-danger'}>{row.status}</span></div>, sortable: true},
    { name: "Action", cell: row => <div data-tag="allowRowEvents" ><Link to='#'><i className='fas fa-pencil-alt ms-text-primary' /></Link> <Link to='#'><i className='far fa-trash-alt ms-text-danger' /></Link></div>, sortable: true },
];
export const data = [
    {
        id: 1,
        title: "Summer Solstice 2021 (Southern Hemisphere)",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        startdate: "16 Dec 2019",
        enddate: "19 Dec 2019",
        assignby: "Joshua",
        status: "Active",

    },
    {
        id: 2,
        title: "Summer Solstice 2021 (Southern Hemisphere)",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        startdate: "09 Dec 2019",
        enddate: "15 Dec 2019",
        assignby: "Denise",
        status: "Inactive",

    },
    {
        id: 3,
        title: "Summer Solstice 2021 (Southern Hemisphere)",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        startdate: "18 Dec 2019",
        enddate: "22 Dec 2019",
        assignby: "Jennifer",
        status: "Active",

    },
    {
        id: 4,
        title: "Summer Solstice 2021 (Southern Hemisphere)",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        startdate: "16 Dec 2019",
        enddate: "19 Dec 2019",
        assignby: "Kyle",
        status: "Inactive",

    },
    {
        id: 5,
        title: "Summer Solstice 2021 (Southern Hemisphere)",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        startdate: "01 Dec 2019",
        enddate: "8 Dec2019",
        assignby: "Judy",
        status: "Active",

    },
    {
        id: 6,
        title: "Summer Solstice 2021 (Southern Hemisphere)",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        startdate: "18 Dec 2019",
        enddate: "22 Dec 2019",
        assignby: "Gavin",
        status: "Inactive",

    },
    {
        id: 7,
        title: "Summer Solstice 2021 (Southern Hemisphere)",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        startdate: "16 Dec 2019",
        enddate: "19 Dec 2019",
        assignby: "Henry",
        status: "Active",

    },
    {
        id: 8,
        title: "Summer Solstice 2021 (Southern Hemisphere)",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        startdate: "18 Dec 2019",
        enddate: "22 Dec 2019",
        assignby: "Judy",
        status: "Inactive",

    },
    {
        id: 9,
        title: "Summer Solstice 2021 (Southern Hemisphere)",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        startdate: "18 Dec 2019",
        enddate: "22 Dec2019",
        assignby: "Gavin",
        status: "Inactive",

    },
    {
        id: 10,
        title: "Summer Solstice 2021 (Southern Hemisphere)",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        startdate: "01 Dec 2019",
        enddate: "8 Dec 2019",
        assignby: "Henry",
        status: "Active",

    },
    {
        id: 11,
        title: "Summer Solstice 2021 (Southern Hemisphere)",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        startdate: "18 Dec 2019",
        enddate: "22 Dec 2019",
        assignby: "Joshua",
        status: "Inactive",

    },
    {
        id: 12,
        title: "Summer Solstice 2021 (Southern Hemisphere)",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        startdate: "09 Dec 2019",
        enddate: "15 Dec2019",
        assignby: "Denise",
        status: "Inactive",

    },
    {
        id: 13,
        title: "Summer Solstice 2021 (Southern Hemisphere)",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        startdate: "01 Dec 2019",
        enddate: "8 Dec 2019",
        assignby: "Kyle",
        status: "Active",

    },
    {
        id: 14,
        title: "Summer Solstice 2021 (Southern Hemisphere)",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        startdate: "09 Dec 2019",
        enddate: "15 Dec2019",
        assignby: "Jennifer",
        status: "Inactive",

    }
]
export default data;