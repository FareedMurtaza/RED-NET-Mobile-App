export const BLOOD_REQUEST = 'BLOOD_REQUEST';

export const bloodRequest = (bloodGroup, noOfBottles, RequestTo) => {
    return {type: BLOOD_REQUEST, bloodGroup: bloodGroup, noOfBottles: noOfBottles, RequestTo: RequestTo};
};
