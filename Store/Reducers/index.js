import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form"
import UserReducer from "./user";
import profileReducer from "./profile";
import FriendReducer from "./friends";
import NotificationReducer from "./notification";
import DonorReducer from "./donor";
import loginReducer from "./login";

const appReducer = combineReducers({
	user: UserReducer,
	profile: profileReducer,
	friends: FriendReducer,
	notification: NotificationReducer,
	donors: DonorReducer,
	login: loginReducer,
	form: formReducer
});

const rootReducer = (state, action) => {
	if (action.type === "LOGOUT") {
		// state.societyAdmin = undefined;
		// state.donors = undefined;
		// state.complaints = undefined;
		// state.society = undefined;
		// state.societyRequest = undefined;
	}
	return appReducer(state, action);
};

export default rootReducer;
