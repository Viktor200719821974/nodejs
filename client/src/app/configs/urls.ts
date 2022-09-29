import { environment } from "src/environments/environment";

const baseUrl = environment.API;

export const urls = {
    auth: `${baseUrl}/auth`,
    users: `${baseUrl}/users`,
}