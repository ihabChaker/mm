import React from "react";
import { Link } from 'react-router-dom';

export const columns = [
    { name: "S.No.", selector: "id", sortable: true },
    { name: "Pic", cell: row => <div data-tag="allowRowEvents" style={{ width: '30px', whiteSpace: 'nowrap' }}><img src={process.env.PUBLIC_URL+'/'+row.img} style={{ width: '30px', borderRadius: '50%', marginRight: '5px' }} alt="img" /></div>, sortable: true },
    { name: "Name", selector: "name", sortable: true },
    { name: "Email", selector: "email", sortable: true },
    { name: "Address", selector: "address", sortable: true },
    { name: "Mobile", selector: "mobile", sortable: true },
    { name: "Joining Date", selector: "joindate", sortable: true },
    { name: "Update", cell: row => <div data-tag="allowRowEvents" ><Link to='#'><i className='fas fa-pencil-alt ms-text-primary' /></Link> <Link to='#'><i className='far fa-trash-alt ms-text-danger' /></Link></div>, sortable: true },
];


export const data = [
    {
        id: 1,
        img: "assets/img/nurse-list/nurse-1.jpg",
        name: "Bella",
        email: "bella176@example.com",
        address: "New York",
        mobile: "(836) 257 1340",
        joindate: "10 Nov 2012",
        
    },
    {
        id: 2,
        img: "assets/img/nurse-list/nurse-2.jpg",
        name: "Jennifer",
        email: "jennifer@example.com",
        address: "Los Angeles",
        mobile: "(836) 257 1379",
        joindate: "16 Nov 2014",
        
    },
    {
        id: 3,
        img: "assets/img/nurse-list/nurse-3.jpg",
        name: "Kyle",
        email: "kyle698@example.com",
        address: "Atlanta",
        mobile: "(836) 257 1372",
        joindate: "12 Nov 2015",
        
    },
    {
        id: 4,
        img: "assets/img/nurse-list/nurse-4.jpg",
        name: "Rose",
        email: "rose@example.com",
        address: "Chicago",
        mobile: "(836) 257 1374",
        joindate: "16 Nov 2009",
        
    },
    {
        id: 5,
        img: "assets/img/nurse-list/nurse-5.jpg",
        name: "Abigail",
        email: "abigail@example.com",
        address: "California",
        mobile: "(836) 257 1371",
        joindate: "8 Nov 2015",
        
    },
    {
        id: 6,
        img: "assets/img/nurse-list/nurse-6.jpg",
        name: "Aimee",
        email: "aimee983@example.com",
        address: "New York",
        mobile: "(836) 257 1375",
        joindate: "10 Nov 2009",
        
    },
    {
        id: 7,
        img: "assets/img/nurse-list/nurse-1.jpg",
        name: "Jennifer",
        email: "jennifer@example.com",
        address: "San Francisco",
        mobile: "(836) 257 1373",
        joindate: "16 Nov 2019",
        
    },
    {
        id: 8,
        img: "assets/img/nurse-list/nurse-2.jpg",
        name: "Kyle",
        email: "kyle698@example.com",
        address: "Los Angeles",
        mobile: "(836) 257 1312",
        joindate: "12 Nov 2014",
        
    },
    {
        id: 9,
        img: "assets/img/nurse-list/nurse-3.jpg",
        name: "Edne",
        email: "edne@example.com",
        address: "Atlanta",
        mobile: "(836) 257 1332",
        joindate: "8 Nov 2009",
        
    },
    {
        id: 10,
        img: "assets/img/nurse-list/nurse-4.jpg",
        name: "Ellena",
        email: "ellena@example.com",
        address: "California",
        mobile: "(836) 257 1324",
        joindate: "15 Nov 2015",
        
    },
    {
        id: 11,
        img: "assets/img/nurse-list/nurse-5.jpg",
        name: "Elly",
        email: "elly983@example.com",
        address: "Chicago",
        mobile: "(836) 257 1343",
        joindate: "16 Nov 2017",
        
    },
    {
        id: 12,
        img: "assets/img/nurse-list/nurse-6.jpg",
        name: "Gennie",
        email: "gennie@example.com",
        address: "San Francisco",
        mobile: "(836) 257 1354",
        joindate: "5 Nov 2010",
        
    },
    {
        id: 13,
        img: "assets/img/nurse-list/nurse-1.jpg",
        name: "Suzanne",
        email: "suzanne@example.com",
        address: "New York",
        mobile: "(836) 257 1325",
        joindate: "15 Nov 2017",
        
    },
    {
        id: 14,
        img: "assets/img/nurse-list/nurse-2.jpg",
        name: "Bella",
        email: "bella@example.com",
        address: "Atlanta",
        mobile: "(836) 257 1131",
        joindate: "5 Nov 2010",
        
    }
]
export default data;