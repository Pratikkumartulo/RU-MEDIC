const mongoose = require('mongoose');
const Hospital = require('../models/HospitalData')

mongoose.connect('mongodb://127.0.0.1:27017/Hospital').then(()=>{
    console.log("connected");
}).catch(()=>{
    console.log("error");
})

const hospitalData = [
    {
        name: 'Apollo Hospitals',
        address: '1-8-526/1, Chikkadpally, Hyderabad, Telangana',
        contact: '040 2324 4444',
        // Add more fields as needed
    },
    {
        name: 'Fortis Hospital',
        address: 'Sector 62, Phase – VIII, Mohali - 160062, Punjab',
        contact: '0172 469 2222',
        // Add more fields as needed
    },
    {
        name: 'Max Super Speciality Hospital',
        address: 'Saket, New Delhi - 110017',
        contact: '011 2651 5050',
        // Add more fields as needed
    },
    {
        name: 'AIIMS, Delhi',
        address: 'Sri Aurobindo Marg, Ansari Nagar, Ansari Nagar East, New Delhi - 110029',
        contact: '011 2658 8500',
        // Add more fields as needed
    },
    {
        name: 'Narayana Health City',
        address: 'Bommasandra Industrial Area, Hosur Road, Bengaluru - 560099',
        contact: '080 7122 2222',
        // Add more fields as needed
    },
    {
        name: 'Saroj Super Speciality Hospital',
        address: 'Sector 14, Near Madhuban Chowk ',
        contact: '080 7122 2222',
        // Add more fields as needed
    },
    {
        name: 'Indus Valley Hospitals',
        address: '232, Laxmi Garden, Main Tehsil Road, Near Tuda Mandi, New Delhi, Delhi - 110059',
        contact: 'Your Contact Number'
        // Add more fields as needed
    },
    {
        name: 'PPN Manipal Hospital (HCMCT)',
        address: 'Palam Vihar, Sector-6, Adjoining MTNL Building, Dwarka, New Delhi, Delhi - 110075',
        contact: 'Your Contact Number'
        // Add more fields as needed
    },
    {
        name: 'PPN M S Ramaiah Narayana Heart Centre',
        address: 'MSRIT Post, New BEL Road, M S Ramaiah Nagar, Mathikere, Bangalore, Karnataka - 560054',
        contact: 'Your Contact Number'
        // Add more fields as needed
    },
    {
        name: 'Shri Moolchand Kharaiti Ram Hospital',
        address: 'Lajpat Nagar 3, New Delhi, Delhi - 110024',
        contact: 'Your Contact Number'
        // Add more fields as needed
    },
    {
        name: 'PPN Centre For Sight Dwarka',
        address: 'Plot No. 9, Sector-9, Dwarka, New Delhi, Delhi - 110077',
        contact: 'Your Contact Number'
        // Add more fields as needed
    },
    {
        name: 'Purang Eye Centre',
        address: 'A 114, Block A, Vishal Enclave, Rajouri Garden, New Delhi, Delhi - 110027',
        contact: 'Your Contact Number'
        // Add more fields as needed
    },
    {
        name: 'Tirath Ram Shah Hospital',
        address: '2a Rbl, Isher Das Sawhney Marg, Rajpur Roa, New Delhi',
        contact: 'Your Contact Number'
        // Add more fields as needed
    },
    {
        name: 'Apollo Speciality Hospitals Madurai',
        address: '20 Lake View Road, K K Nagar, Madurai, Tamil Nadu - 625020',
        contact: 'Your Contact Number',
        // Add more fields as needed
    },
    {
        name: 'Shushrusha Heart Care Centre And Speciality Hospital (Nerul)',
        address: 'PLOT NO-22-A, PHASE-III, SECTOR-6, PALM BEACH ROAD, NERUL, Navi Mumbai, Maharashtra - 400706',
        contact: 'Your Contact Number',
        // Add more fields as needed
    },
    {
        name: 'Panchshil Hospital',
        address: 'Highway, Ramnagar, Sabarmati, Ahmedabad, Gujarat - 380005',
        contact: 'Your Contact Number',
        // Add more fields as needed
    },
    {
        name: 'Sahyog Hospital (Patna)',
        address: '40, Pataliputra Colony, Patna, Bihar - 800013',
        contact: 'Your Contact Number',
        // Add more fields as needed
    },
    {
        name: 'Dr ML Gupta Memorial Centre',
        address: '5E/4, B.P, N.I.T Railway Road, Faridabad, Haryana - 121001',
        contact: 'Your Contact Number',
        // Add more fields as needed
    },
    {
        name: 'Vijaya Hospital',
        address: '16 II/41A, S2 Cine Complex Road, Poghathota, SPSR, Nellore, Andhra Pradesh - 524001',
        contact: 'Your Contact Number',
        // Add more fields as needed
    },
    {
        name: 'Madhava Nursing Home',
        address: '43, S.D Road, Opp. St. Mary\'S Church, Secunderabad, Telangana - 500003',
        contact: 'Your Contact Number',
        // Add more fields as needed
    },
    {
        name: 'Shreeja Hospital Unit of Shreeja Health Care Pvt Ltd',
        address: 'OMP Square, Gurkha Colony, Near Odisha State Finance Corporation, Sad Nagar, Cuttack, Odisha',
        contact: 'Your Contact Number',
    },
    {
        name: 'Ashwini Trauma Centre',
        address: 'Sector - 1, CDA, Near Sati Chaurah, Bidanasi, Cuttack, Odisha',
        contact: 'Your Contact Number',
    },
    {
        name: 'Sahara Nursing Home',
        address: 'Shanti Lodge, Kathagola Road, Mangalabag, Cuttack, Odisha',
        contact: 'Your Contact Number',
    },
    {
        name: 'Maa Shakti Hospital',
        address: 'Plot No 168, Unit 6, Ekamra Marg, Bhubaneswar, Odisha',
        contact: 'Your Contact Number',
    },
    {
        name: 'Riverine Hospital',
        address: 'A/697, SECTOR-8, CDA, Cuttack, Near Kathjodi Ring Road, Odisha',
        contact: 'Your Contact Number',
    },
    {
        name: 'AMRI Hospitals Ltd Bhubaneswar',
        address: 'Plot No 1, Beside Satya Sai Enclave, Khandagiri, Bhubaneswar, Odisha',
        contact: 'Your Contact Number',
    },
    {
        name: 'Apollo Hospitals',
        address: 'Plot No 251, Unit 15, Sainik School Road, Samantapuri, Bhubaneswar, Odisha',
        contact: 'Your Contact Number',
    },
    {
        name: 'Kalinga Hospital Ltd',
        address: 'Chandrasekharpur, Dist. Khorda, Near Nalco Traffic Chowk, Bhubaneswar, Odisha',
        contact: 'Your Contact Number',
    },
    {
        name: 'Utkal Institute of Medical Sciences And Hospital',
        address: 'C/3, Niladri Vihar, Chandrasekharpur, Bhubaneswar, Odisha',
        contact: 'Your Contact Number',
    },
    {
        name: 'Sum Ultimate Medicare',
        address: 'Plot No. C/6, K-8, Kalinga Nagar, Ghatikia, Bhubaneswar, Odisha',
        contact: 'Your Contact Number',
    }
    // Add more hospitals as needed
    // ...
];

Hospital.insertMany(hospitalData)
    .then((result) => {
        console.log('Hospitals inserted:');
    })
    .catch((error) => {
        console.error('Error inserting hospitals:');
    });