import {UserDTO} from "../models/classes/UserDTO";
import {User} from "../models/classes/User";

export const parseUserData = (userData: User) => {
    try {
        return new User(
            userData.uid, userData.username, userData.bio, userData.place_of_origin, userData.firstname,
            userData.favourite_city,userData.favourites ,userData.email, userData.birthdate, userData.instagram,
            userData.profile_picture_url, userData.hobbies, userData.languages, userData.countries, userData.last_location);
    } catch(err) {
        return null as User;
    }
}

export const getFullUserData = (userData: UserDTO)  => {
    try {
        return new UserDTO(
            userData.uid, userData.username, userData.bio, userData.place_of_origin, userData.firstname,
            userData.favourite_city,userData.favourites ,userData.email, userData.birthdate,
            userData.instagram, userData.hobbies, userData.languages, userData.countries, userData.last_location,
            userData.profile_picture_url, userData.invitations_received, userData.invitations_sent,
            userData.users_blocked, userData.blocked_by, userData.is_admin);
    } catch(err) {
        return null as UserDTO;
    }
}
