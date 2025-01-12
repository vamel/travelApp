import {Hobby} from "../enums/Hobby";
import {Language} from "../enums/Language";
import {Country} from "../enums/Country";

export class UserDTO {
    constructor(uid: string,
                username: string,
                bio: string,
                place_of_origin: string,
                firstname: string,
                favourite_city: string,
                favourites: string[],
                email: string,
                birthdate: string,
                instagram: string,
                hobbies: Hobby[],
                languages: Language[],
                countries: Country[],
                last_location: string,
                profile_picture_url: string,
                invitations_received: string[],
                invitations_sent: string[],
                users_blocked: string[],
                blocked_by: string[]) {
        this.uid = uid;
        this.username = username;
        this.bio = bio;
        this.place_of_origin = place_of_origin;
        this.firstname = firstname;
        this.favourite_city = favourite_city;
        this.favourites = favourites;
        this.email = email;
        this.birthdate = birthdate;
        this.instagram = instagram;
        this.hobbies = hobbies;
        this.languages = languages;
        this.countries = countries;
        this.last_location = last_location;
        this.profile_picture_url = profile_picture_url;
        this.invitations_received = invitations_received;
        this.invitations_sent = invitations_sent;
        this.users_blocked = users_blocked;
        this.blocked_by = blocked_by;
        this.is_admin = false;
    }

    uid: string;
    username: string;
    bio: string;
    place_of_origin: string;
    firstname: string;
    favourite_city: string;
    favourites: string[];
    email: string;
    birthdate: string;
    instagram: string;
    hobbies: Hobby[];
    languages: Language[];
    countries: Country[];
    last_location: string;
    profile_picture_url: string;
    invitations_sent: string[];
    invitations_received: string[];
    users_blocked: string[];
    blocked_by: string[];
    is_admin: boolean;
}
