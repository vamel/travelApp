import { Language } from "../enums/language";

export interface User {
    name: string;
    email: string;
    avatarUrl: string;
    languages: Language[];
}