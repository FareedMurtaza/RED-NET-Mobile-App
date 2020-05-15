import { PROFILE } from "../../data/dummydata";

const initialState={
    userProfile: PROFILE.find(data => data.id === '1')
}

export default (state = initialState, action) => {
    return state;
};