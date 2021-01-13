export interface Repos {
    url: string;
    name: string;
    language:string;
    description:string;
    createdAt:string;
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