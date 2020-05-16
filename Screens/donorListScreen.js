import React from 'react';
import DonorList from '../Components/donorList';
import { useSelector } from 'react-redux';

const DonorsScreen = props => {
    const donorsList = useSelector(state => state.donorsList.donors)
    // const donorsList = useSelector(state => {
    //     const getDonorList = [];
    //     for (const key in state.donorsList.donors) {
    //         getDonorList.push({
    //             id: state.donorsList.donors[key].id,
    //             profilePic: state.donorsList.donors[key].profilePic,
    //             name: state.donorsList.donors[key].name,
    //             bloodGroup: state.donorsList.donors[key].bloodGroup,
    //             phoneNo: state.donorsList.donors[key].phoneNo
    //         });
    //     }
    // });

    console.log("donor Screen: " + donorsList);

    return <DonorList donorsListData={donorsList} />
}
export default DonorsScreen;