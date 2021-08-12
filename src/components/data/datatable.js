import React from "react";
import { Link } from 'react-router-dom';

export const columns = [
    { name: "Name", cell: row => <div data-tag="allowRowEvents" style={{ width: '30px', whiteSpace: 'nowrap' }}><img src={process.env.PUBLIC_URL+'/'+row.img} style={{ width: '30px', borderRadius: '50%', marginRight: '5px' }} alt="img" />{row.name}</div>, sortable: true },
    { name: "Address", selector: "address", sortable: true },
    { name: "Disease", selector: "disease", sortable: true },
    { name: "Age", selector: "age", sortable: true },
    { name: "Phone", selector: "phone", sortable: true },
    { name: "Email", selector: "email", sortable: true },
    { name: "Action", cell: row => <div data-tag="allowRowEvents" ><Link to='#'><i className='fas fa-pencil-alt ms-text-primary' /></Link> <Link to='#'><i className='far fa-trash-alt ms-text-danger' /></Link></div>, sortable: true },
];

export const data = [
    {
        id: 1,
        img: "assets/img/dashboard/patient-1.jpg",
        patientname: "Denise",
        address: "Old York, Abington",
        disease: "Fever",
        age: "7",
        phone: "(836) 257 1379",
        email: "denisestevens@example.com"

    },
    {
        id: 2,
        img: "assets/img/dashboard/patient-2.jpg",
        patientname: "Dennis",
        address: "Juniper Drive, Saginaw",
        disease: "Cancer",
        age: "34",
        phone: "(933) 137 6201",
        email: "dennissalazar@example.com"

    },
    {
        id: 3,
        img: "assets/img/dashboard/patient-3.jpg",
        patientname: "Jennifer",
        address: "Leland, NC",
        disease: "Heart Attack",
        age: "35",
        phone: "(207) 808 8863",
        email: "jenniferrobinson@example.com"

    },
    {
        id: 4,
        img: "assets/img/dashboard/patient-4.jpg",
        patientname: "Joshua",
        address: "Bonita Springs",
        disease: "Cold",
        age: "34",
        phone: "(407) 554 4146",
        email: "joshuaguzman@example.com"

    },
    {
        id: 5,
        img: "assets/img/dashboard/patient-5.jpg",
        patientname: "Charles",
        address: "Birch Street, El Paso",
        disease: "Cancer",
        age: "32",
        phone: "(380) 141 1885",
        email: "charlesortega@example.com"

    },
    {
        id: 6,
        img: "assets/img/dashboard/patient-6.jpg",
        patientname: "Judy Clark",
        address: "Woodside Circle, Pensacola",
        disease: "Diabeties",
        age: "34",
        phone: "(359) 969 3594",
        email: "judy.clark@example.com"

    },
    {
        id: 7,
        img: "assets/img/dashboard/patient-7.jpg",
        patientname: "Julia Sims",
        address: "Walker Dr, Houma, LA, United States",
        disease: "Celiac ",
        age: "27",
        phone: "(680) 432 2662",
        email: "juliasims@example.com"

    },
    {
        id: 8,
        img: "assets/img/dashboard/patient-8.jpg",
        patientname: "Kyle",
        address: "Fairways Cir, Vero Beach",
        disease: "Fever",
        age: "7",
        phone: "(981) 756 6128",
        email: "kylebowman@example.com"

    },
    {
        id: 9,
        img: "assets/img/dashboard/patient-9.jpg",
        patientname: "Linda",
        address: "Victory Garden, Tallahassee",
        disease: "Heart Attack",
        age: "24",
        phone: "(218) 661 8316",
        email: "lindacarpenter@example.com"

    },
    {
        id: 10,
        img: "assets/img/dashboard/patient-1.jpg",
        patientname: "Marie",
        address: "New Haven, Columbia",
        disease: "Cold",
        age: "22",
        phone: "(634) 09 3833",
        email: "mariehoward@example.com"

    },
    {
        id: 11,
        img: "assets/img/dashboard/patient-2.jpg",
        patientname: "Melissa",
        address: "Milwaukee, WI",
        disease: "Cancer",
        age: "35",
        phone: "(192) 494 8073",
        email: "melissaburton@example.com"

    },
    {
        id: 12,
        img: "assets/img/dashboard/patient-3.jpg ",
        patientname: "Patrick",
        address: "Commerce, TX",
        disease: "Celiac ",
        age: "21",
        phone: "(785) 580 4514",
        email: "patrickknight@example.com"

    },
    {
        id: 13,
        img: "assets/img/dashboard/patient-4.jpg ",
        patientname: "Sandra",
        address: "Linden Avenue, Orlando",
        disease: "Liver Disease",
        age: "24",
        phone: "(797) 506 1265",
        email: "sandramendez@example.com"

    },
    {
        id: 14,
        img: "assets/img/dashboard/patient-5.jpg",
        patientname: "Terry Baker",
        address: "Hempstead, NY",
        disease: "Diabeties",
        age: "63",
        phone: "(376) 150 6975",
        email: "terrybaker@example.com"

    },
    {
        id: 15,
        img: "assets/img/dashboard/patient-6.jpg",
        patientname: "Tatyana",
        address: "Saginaw, MI,",
        disease: "Fever ",
        age: "34",
        phone: "(933) 137 6201",
        email: "tatyanafitzpatrick@example.com"

    },
    {
        id: 16,
        img: "assets/img/dashboard/patient-7.jpg",
        patientname: "Michael",
        address: "Linden Avenue, Orlando",
        disease: "Celiac ",
        age: "24",
        phone: "(797) 506 1265",
        email: "michaelsilva@example.com"

    },
    {
        id: 17,
        img: "assets/img/dashboard/patient-8.jpg",
        patientname: "Paul Byrd",
        address: "Milwaukee, WI",
        disease: "Asthma",
        age: "35",
        phone: "(192) 494 8073",
        email: "paulbyrd@example.com"

    },
    {
        id: 18,
        img: "assets/img/dashboard/patient-9.jpg",
        patientname: "Gloria ",
        address: "LA, United States",
        disease: "Cold",
        age: "27",
        phone: "(680) 432 2662",
        email: "glorialittle@example.com"

    },
    {
        id: 19,
        img: "assets/img/dashboard/patient-1.jpg",
        patientname: "Bradley",
        address: "Victory Garden, Tallahassee",
        disease: "Liver Disease",
        age: "24",
        phone: "(218) 661 8316",
        email: "bradleygreer@example.com"

    },
    {
        id: 20,
        img: "assets/img/dashboard/patient-2.jpg",
        patientname: "Dai Rios",
        address: "Fairways Cir, Vero Beach",
        disease: "Heart Attck",
        age: "7",
        phone: "(981) 756 6128",
        email: "dairiosn@example.com"

    },
    {
        id: 21,
        img: "assets/img/dashboard/patient-3.jpg",
        patientname: "Jenette ",
        address: "Birch Street, El Paso",
        disease: "Autoimmune",
        age: "32",
        phone: "(380) 141 1885",
        email: "jenettecaldwell@example.com"

    },
    {
        id: 22,
        img: "assets/img/dashboard/patient-4.jpg",
        patientname: "Yuri Berry",
        address: " LA, United States",
        disease: "Fever",
        age: "27",
        phone: "(680) 432 2662",
        email: "yuriberry@example.com"

    },
    {
        id: 23,
        img: "assets/img/dashboard/patient-5.jpg",
        patientname: "Caesar ",
        address: "Birch Street, El Paso",
        disease: "Asthma",
        age: "32",
        phone: "(380) 141 1885",
        email: "caesarvance@example.com"

    },
    {
        id: 24,
        img: "assets/img/dashboard/patient-6.jpg",
        patientname: "Doris ",
        address: "Victory Garden, Tallahassee",
        disease: "Diabeties",
        age: "24",
        phone: "(218) 661 8316",
        email: "doriswilder@example.com"

    },
    {
        id: 25,
        img: "assets/img/dashboard/patient-7.jpg",
        patientname: "Angelica",
        address: "Linden Avenue, Orlando",
        disease: "Liver Disease",
        age: "24",
        phone: "(797) 506 1265",
        email: "angelicaramos@example.com"

    },
    {
        id: 26,
        img: "assets/img/dashboard/patient-8.jpg",
        patientname: "Joyce",
        address: "Milwaukee, WI",
        disease: "Asthma",
        age: "35",
        phone: "(192) 494 8073",
        email: "gavinjoyce@example.com"

    },
    {
        id: 27,
        img: "assets/img/dashboard/patient-9.jpg",
        patientname: "Jennifer ",
        address: "Milwaukee, WI",
        disease: "Autoimmune",
        age: "35",
        phone: "(192) 494 8073",
        email: "jenniferchang@example.com"

    },
    {
        id: 28,
        img: "assets/img/dashboard/patient-1.jpg",
        patientname: "Brenden",
        address: "New Haven, Columbia",
        disease: "Infectious",
        age: "22",
        phone: "(634) 09 3833",
        email: "brendenwagner@example.com"

    },
    {
        id: 29,
        img: "assets/img/dashboard/patient-2.jpg",
        patientname: "Fiona ",
        address: "LA, United States",
        disease: "Colitis",
        age: "27",
        phone: "(680) 432 2662",
        email: "fionagreen@example.com"

    },
    {
        id: 30,
        img: "assets/img/dashboard/patient-3.jpg",
        patientname: "Shou Itou",
        address: "Fairways Cir, Vero Beach",
        disease: "Asthma",
        age: "7",
        phone: "(981) 756 6128",
        email: "shouitou@example.com"

    },
    {
        id: 31,
        img: "assets/img/dashboard/patient-4.jpg",
        patientname: "Michelle",
        address: "Linden Avenue, Orlando",
        disease: "Infectious",
        age: "24",
        phone: "(797) 506 1265",
        email: "Michelle@example.com"

    },
    {
        id: 32,
        img: "assets/img/dashboard/patient-5.jpg",
        patientname: "Suki Burks",
        address: "Milwaukee, WI",
        disease: "Colitis",
        age: "35",
        phone: "(192) 494 8073",
        email: "sukiburks@example.com"

    },
    {
        id: 33,
        img: "assets/img/dashboard/patient-6.jpg",
        patientname: "Prescott",
        address: "Milwaukee, WI",
        disease: "Infectious",
        age: "35",
        phone: "(192) 494 8073",
        email: "prescottbartlett@example.com"

    },
    {
        id: 34,
        img: "assets/img/dashboard/patient-7.jpg",
        patientname: "Gavin ",
        address: "Fairways Cir, Vero Beach",
        disease: "Autoimmune",
        age: "7",
        phone: "(981) 756 6128",
        email: "gavincortez@example.com"

    },
    {
        id: 35,
        img: "assets/img/dashboard/patient-8.jpg",
        patientname: "Martena",
        address: "LA, United States",
        disease: "Diabeties",
        age: "27",
        phone: "(680) 432 2662",
        email: "martenamccray@example.com"

    },
    {
        id: 36,
        img: "assets/img/dashboard/patient-9.jpg",
        patientname: "Unity",
        address: "New Haven, Columbia",
        disease: "Celiac ",
        age: "22",
        phone: "(634) 09 3833",
        email: "butler@example.com"

    }
];
export default data;