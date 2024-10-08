import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { UserProfileToken } from "../Models/User";

const api = "http://localhost:5167/api/";

export const loginApi = async (username: string, password: string) => {
    try {
        const data = await axios.post<UserProfileToken>(`${api}account/login`, {
            username: username,
            password: password
        });

        return data;
    } catch (err) {
        handleError(err);
    }
}

export const registerApi = async (email: string, username: string, password: string) => {
    try {
        const data = await axios.post<UserProfileToken>(`${api}account/register`, {
            email: email,
            username: username,
            password: password
        });

        return data;
    } catch (err) {
        handleError(err);
    }
}