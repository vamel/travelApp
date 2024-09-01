import {db} from "./config";
import {User} from "../models/classes/User";
import {doc, setDoc, Timestamp} from "firebase/firestore";

export const putUser = async (userData: User) => {
    await setDoc(doc(db, "users", userData.uid), {
        username: userData.username,
        profilePictureUrl: "",
        bio: userData.bio,
        firstname: userData.firstname,
        email: userData.email,
        birthdate: Timestamp.fromDate(userData.birthdate),
        hobbies: userData.hobbies,
        languages: userData.languages,
        invitationsSent: [],
        invitationsReceived: [],
        usersBlocked: []
    });
}
