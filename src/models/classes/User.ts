import {Hobby} from "../enums/Hobby";
import {Language} from "../enums/Language";

export class User {
    constructor(uid: string,
                username: string,
                bio: string,
                firstname: string,
                email: string,
                birthdate: Date,
                hobbies: Hobby[],
                languages: Language[]) {
        this.uid = uid;
        this.username = username;
        this.bio = bio;
        this.firstname = firstname;
        this.email = email;
        this.birthdate = birthdate;
        this.hobbies = hobbies;
        this.languages = languages;
    }

    uid: string;
    username: string;
    bio: string;
    firstname: string;
    email: string;
    birthdate: Date;
    hobbies: Hobby[];
    languages: Language[];
}
