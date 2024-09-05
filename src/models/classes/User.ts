import {Hobby} from "../enums/Hobby";
import {Language} from "../enums/Language";
import {Country} from "../enums/Country";

export class User {
    constructor(uid: string,
                username: string,
                bio: string,
                country_of_origin: string,
                firstname: string,
                favourite_city: string,
                email: string,
                birthdate: string,
                instagram: string,
                hobbies: Hobby[],
                languages: Language[],
                countries: Country[]) {
        this.uid = uid;
        this.username = username;
        this.bio = bio;
        this.country_of_origin = country_of_origin;
        this.firstname = firstname;
        this.favourite_city = favourite_city;
        this.email = email;
        this.birthdate = birthdate;
        this.instagram = instagram;
        this.hobbies = hobbies;
        this.languages = languages;
        this.countries = countries;
    }

    uid: string;
    username: string;
    bio: string;
    country_of_origin: string;
    firstname: string;
    favourite_city: string;
    email: string;
    birthdate: string;
    instagram: string;
    hobbies: Hobby[];
    languages: Language[];
    countries: Country[];
}
