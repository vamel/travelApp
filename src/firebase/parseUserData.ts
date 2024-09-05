import {User} from "../models/classes/User";

export const parseUserData = (userData) => {
    try {
        return new User(
            userData.uid, userData.username, userData.bio, userData.place_of_origin, userData.firstname,
            userData.favourite_city,userData.favourites ,userData.email, userData.birthdate,
            userData.instagram, userData.hobbies, userData.languages, userData.countries, userData.last_location);
    } catch(err) {
        return null;
    }
}
