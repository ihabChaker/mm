import React from "react";
import { Link } from 'react-router-dom';

export const columns = [
    { name: "ID", selector: "id", sortable: true },
    { name: "Patient Name", cell: row => <div data-tag="allowRowEvents" style={{ width: '30px', whiteSpace: 'nowrap' }}><img src={process.env.PUBLIC_URL+'/'+row.patientimg} style={{ width: '30px', borderRadius: '50%', marginRight: '5px' }} alt="img" />{row.patientname}</div>, sortable: true },
    { name: "Age", selector: "age", sortable: true },
    { name: "Doctor Name", selector: "doctorname", sortable: true },
    { name: "Department", selector: "department", sortable: true },
    { name: "Date", selector: "date", sortable: true },
    { name: "Time", selector: "time", sortable: true },
    { name: "Disease", selector: "disease", sortable: true },
    { name: "Action", cell: row => <div data-tag="allowRowEvents" ><Link to='#'><i className='fas fa-pencil-alt ms-text-primary' /></Link> <Link to='#'><i className='far fa-trash-alt ms-text-danger' /></Link></div>, sortable: true },
];

export const data = [
    {
        id: "APT0001",
        patientimg: "assets/img/dashboard/patient-1.jpg",
        patientname: "Denise",
        age: "39",
        doctorname: "Henry Daniels",
        department: "Cardiology",
        date: "11 Dec 2019",
        time: "10:00am-12:00am",
        disease: "Cold",

    },
    {
        id: "APT0002",
        patientimg: "assets/img/dashboard/patient-8.jpg",
        patientname: "Jennifer",
        age: "29",
        doctorname: "Doris Wilder",
        department: "Gynaecology",
        date: "5 Dec 2019",
        time: "10:00am-12:00am",
        disease: "Fever",

    },
    {
        id: "APT0003",
        patientimg: "assets/img/dashboard/patient-4.jpg",
        patientname: "Joshua",
        age: "42",
        doctorname: "Gavin Joyce",
        department: "Neurology",
        date: "6 Jan 2021",
        time: "10:00am-12:00am",
        disease: "heart",

    },
    {
        id: "APT0004",
        patientimg: "assets/img/dashboard/patient-9.jpg",
        patientname: "Judy",
        age: "23",
        doctorname: "Yuri Berry",
        department: "Orthopedics",
        date: "19 Dec 2019",
        time: "10:00am-12:00am",
        disease: "Diabeties",

    },
    {
        id: "APT0005",
        patientimg: "assets/img/dashboard/patient-2.jpg",
        patientname: "Kyle",
        age: "55",
        doctorname: "Henry Daniels",
        department: "Radiotherapy",
        date: "15 Dec 2019",
        time: "10:00am-12:00am",
        disease: "Cold",

    },
    {
        id: "APT0006",
        patientimg: "assets/img/dashboard/patient-3.jpg",
        patientname: "Denise",
        age: "39",
        doctorname: "Henry Daniels",
        department: "Cardiology",
        date: "11 Dec 2019",
        time: "10:00am-12:00am",
        disease: "heart",

    },
    {
        id: "APT0007",
        patientimg: "assets/img/dashboard/patient-7.jpg",
        patientname: "Jennifer",
        age: "29",
        doctorname: "Doris Wilder",
        department: "Gynaecology",
        date: "5 Dec 2019",
        time: "10:00am-12:00am",
        disease: "Diabeties",

    },
    {
        id: "APT0008",
        patientimg: "assets/img/dashboard/patient-3.jpg",
        patientname: "Joshua",
        age: "42",
        doctorname: "Gavin Joyce",
        department: "Neurology",
        date: "6 Jan 2021",
        time: "10:00am-12:00am",
        disease: "Fever",

    },
    {
        id: "APT0009",
        patientimg: "assets/img/dashboard/patient-8.jpg",
        patientname: "Judy",
        age: "23",
        doctorname: "Yuri Berry",
        department: "Orthopedics",
        date: "19 Dec 2019",
        time: "10:00am-12:00am",
        disease: "Asthma",

    },
    {
        id: "APT000a0",
        patientimg: "assets/img/dashboard/patient-4.jpg",
        patientname: "Kyle",
        age: "55",
        doctorname: "Henry Daniels",
        department: "Radiotherapy",
        date: "15 Dec 2019",
        time: "10:00am-12:00am",
        disease: "heart",

    },
    {
        id: "APT000a1",
        patientimg: "assets/img/dashboard/patient-6.jpg",
        patientname: "Denise",
        age: "39",
        doctorname: "Henry Daniels",
        department: "Cardiology",
        date: "11 Dec 2019",
        time: "10:00am-12:00am",
        disease: "Cold",

    },
    {
        id: "APT000a2",
        patientimg: "assets/img/dashboard/patient-9.jpg",
        patientname: "Jennifer",
        age: "29",
        doctorname: "Doris Wilder",
        department: "Gynaecology",
        date: "5 Dec 2019",
        time: "10:00am-12:00am",
        disease: "Asthma",

    },
    {
        id: "APT000a3",
        patientimg: "assets/img/dashboard/patient-3.jpg",
        patientname: "Denise",
        age: "39",
        doctorname: "Henry Daniels",
        department: "Cardiology",
        date: "11 Dec 2019",
        time: "10:00am-12:00am",
        disease: "Fever",

    },
    {
        id: "APT000a4",
        patientimg: "assets/img/dashboard/patient-1.jpg",
        patientname: "Jennifer",
        age: "29",
        doctorname: "Doris Wilder",
        department: "Gynaecology",
        date: "5 Dec 2019",
        time: "10:00am-12:00am",
        disease: "Diabeties",

    },
    {
        id: "APT000a5",
        patientimg: "assets/img/dashboard/patient-3.jpg",
        patientname: "Denise",
        age: "39",
        doctorname: "Henry Daniels",
        department: "Cardiology",
        date: "11 Dec 2019",
        time: "10:00am-12:00am",
        disease: "heart",

    },
    {
        id: "APT000a6",
        patientimg: "assets/img/dashboard/patient-7.jpg",
        patientname: "Jennifer",
        age: "29",
        doctorname: "Doris Wilder",
        department: "Gynaecology",
        date: "5 Dec 2019",
        time: "10:00am-12:00am",
        disease: "Cold",

    }
]
export default data;