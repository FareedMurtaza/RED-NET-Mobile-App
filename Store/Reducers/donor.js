import { FRIENDS } from "../../data/dummydata";
import { BLOOD_REQUEST } from "../Actions/donor";

const initialState = {
    donors: FRIENDS.filter(item => item.bloodGroup === 'A+')
}

export default (state = initialState, action) => {
    switch (action.type) {
        case BLOOD_REQUEST: {
            const bloodGroup = action.bloodGroup;
            const noOfBottles = action.noOfBottles;
            const RequestTo = action.RequestTo;

            let donorsList = FRIENDS.filter(item => item.bloodGroup === bloodGroup)
            console.log(donorsList);

            return {
                ...state,
                donor: {donorsList}
            }
        }
        default: {state
            return state;
        }
    }
}