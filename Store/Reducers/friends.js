import { FRIENDS } from "../../data/dummydata";

const initialState = {
    userFriends: FRIENDS.filter(frnd => frnd.id == '1' || frnd.id === '2' || frnd.id == '3' || frnd.id === '4' || frnd.id === '5')
}

export default (state = initialState, action) => {
    return state;
}