import { IUser } from "./user.interface";

export interface IToken {
    id: number;
    accessToken: string;
    refreshToken: string;
    userId: number;
}
 
export interface ITokenData {
    token: IToken;
    user: IUser;
}