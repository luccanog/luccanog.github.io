import { Moment } from "moment";

export interface Repos {
    url: string;
    name: string;
    language:string;
    description:string;
    createdAt:string;
    rawDate:Moment;
}

export interface User {
    login: string;
    name: string;
    nick:string;
    photo:string;
    url:string;
    bio:string;
    createdAt:string;
}