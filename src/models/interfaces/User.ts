import { Language } from "../enums/Language";

export interface User {
    name: string;
    email: string;
    avatarUrl: string;
    languages: Language[];
}
