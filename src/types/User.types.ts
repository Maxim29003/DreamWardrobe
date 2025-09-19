import { Models } from "appwrite";

export interface UserType extends Models.User<Models.Preferences> {
    name: string;
    email: string;
    sessionId: string;
}