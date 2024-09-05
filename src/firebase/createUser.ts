import {db} from "./config";
import {User} from "../models/classes/User";
import {doc, setDoc} from "firebase/firestore";

export const putUser = async (userData: User) => {
    const {uid, ...userDetails} = userData;
    const userDataSent = {
        ...userDetails,
        profile_picture_url: "",
        favourites: [],
        last_location: "string",
        invitations_sent: [],
        invitations_received: [],
        users_blocked: [],
        blocked_by: []
    };
    await setDoc(doc(db, "users", uid), userDataSent);
}
