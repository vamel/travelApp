import {db} from "./config";
import {User} from "../models/classes/User";
import {doc, setDoc} from "firebase/firestore";

export const putUser = async (userData: User) => {
    await setDoc(doc(db, "users", userData.uid), {
        username: userData.username,
        profilePictureUrl: "",
        bio: userData.bio,
        country_of_origin: userData.country_of_origin,
        firstname: userData.firstname,
        favourite_city: userData.favourite_city,
        email: userData.email,
        birthdate: userData.birthdate,
        hobbies: userData.hobbies,
        languages: userData.languages,
        countries: userData.countries,
        invitationsSent: [],
        invitationsReceived: [],
        usersBlocked: [],
        blockedBy: []
    });
}
