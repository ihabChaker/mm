import React from "react";
import { Link } from 'react-router-dom';
 
export const columns = [
    { name: "Serial No.", selector: "id", sortable: true },
    { name: "Account Name", selector: "acname", sortable: true },
    { name: "Description", selector: "description", sortable: true },
    { name: "Type", selector: "type", sortable: true },
    { name: "Date", selector: "date", sortable: true },
    { name: "Amount", selector: "amount", sortable: true },
    { name: "Action", cell: row => <div data-tag="allowRowEvents" ><Link to='#'><i className='fas fa-pencil-alt ms-text-primary' /></Link> <Link to='#'><i className='far fa-trash-alt ms-text-danger' /></Link></div>, sortable: true },
];

export const data = [
    {
        id: 1,
        acname: "Hospital Memo",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        type: "Debit",
        date: "10 Nov 2019",
        amount: "340$",
        
    },
    {
        id: 2,
        acname: "Hospital Memo",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        type: "Credit",
        date: "16 Nov 2019",
        amount: "1040$",
        
    },
    {
        id: 3,
        acname: "Hospital Memo",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        type: "Credit",
        date: "12 Nov 2019",
        amount: "740$",
        
    },
    {
        id: 4,
        acname: "Hospital Memo",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        type: "Debit",
        date: "16 Nov 2019",
        amount: "310$",
        
    },
    {
        id: 5,
        acname: "Hospital Memo",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        type: "Debit",
        date: "8 Nov 2019",
        amount: "900$",
        
    },
    {
        id: 6,
        acname: "Hospital Memo",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        type: "Credit",
        date: "10 Nov 2019",
        amount: "540$",
        
    },
    {
        id: 7,
        acname: "Hospital Memo",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        type: "Debit",
        date: "16 Nov 2019",
        amount: "300$",
        
    },
    {
        id: 8,
        acname: "Hospital Memo",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        type: "Credit",
        date: "12 Nov 2019",
        amount: "1340$",
        
    },
    {
        id: 9,
        acname: "Hospital Memo",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        type: "Credit",
        date: "8 Nov 2019",
        amount: "640$",
        
    },
    {
        id: 10,
        acname: "Hospital Memo",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        type: "Debit",
        date: "15 Nov 2019",
        amount: "1240$",
        
    },
    {
        id: 11,
        acname: "Hospital Memo",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        type: "Credit",
        date: "16 Nov 2019",
        amount: "940$",
        
    },
    {
        id: 12,
        acname: "Hospital Memo",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        type: "Debit",
        date: "5 Nov 2019",
        amount: "1230$",
        
    },
    {
        id: 13,
        acname: "Hospital Memo",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        type: "Debit",
        date: "15 Nov 2019",
        amount: "2330$",
        
    },
    {
        id: 14,
        acname: "Hospital Memo",
        description: "Lorem Ipsum is simply dummy text of the printing.",
        type: "Debit",
        date: "5 Nov 2019",
        amount: "2210$",
        
    }
]
export default data;