import React from 'react';
import DonorList from '../Components/donorList';
import { useSelector } from 'react-redux';

const DonorsScreen = props => {
    const donorsList= useSelector(state => state.donorsList.donors)

    return <DonorList donorsListData={donorsList} />
}
export default DonorsScreen;