import {db} from "./config";
import {User} from "../models/classes/User";
import {doc, setDoc} from "firebase/firestore";

export const putUser = async (userData: User) => {
    const {uid, ...userDetails} = userData;
    const userDataSent = {
        ...userDetails,
        profile_picture_url: "",
        invitations_sent: ["1"],
        invitations_received: ["1"],
        users_blocked: ["1"],
        blocked_by: ["1"]
    };
    await setDoc(doc(db, "users", uid), userDataSent);
}
