import {Hobby} from "../enums/Hobby";
import {Language} from "../enums/Language";
import {Country} from "../enums/Country";

export class User {
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
                profile_picture_url: string,
                hobbies: Hobby[],
                languages: Language[],
                countries: Country[],
                last_location: string) {
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
        this.profile_picture_url = profile_picture_url;
        this.hobbies = hobbies;
        this.languages = languages;
        this.countries = countries;
        this.last_location = last_location;
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
    profile_picture_url: string;
    hobbies: Hobby[];
    languages: Language[];
    countries: Country[];
    last_location: string;
}
