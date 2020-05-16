import React from 'react';
import DonorList from '../Components/donorList';
import { useSelector } from 'react-redux';
import { FRIENDS } from '../data/dummydata';

const DonorsScreen = props => {
    const donorsList= FRIENDS.filter(item => item.bloodGroup === 'A+')

    return <DonorList donorsListData={donorsList} />
}
export default DonorsScreen;