import { FRIENDS } from "../../data/dummydata";

const initialState = {
    donors: FRIENDS.filter(item => item.bloodGroup === 'A+')
}

export default (state = initialState, action) => {
    return state;
}