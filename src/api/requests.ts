import axios, { AxiosResponse } from 'axios';
import { Repos, User } from '../interfaces/index'
const instance = axios.create({
    baseURL: 'https://api.github.com'
});

export const getRepos = () => {
    instance.get('/users/luccanog/repos')
        .then((response) => {
            const repos: Array<Repos> = [];

            response.data.map((element: any) => {
                repos.push(
                    {
                        description: element.description || '',
                        createdAt: element.created_at,
                        url: element.url,
                        name: element.name,
                        language: element.language
                    }
                )
            })
            return repos;
        })
        .catch(function (error: any) {
            console.warn('Error while retrieving GitHub data', error);
        });
}

export const getProfile = () => {
    instance.get('/users/luccanog')
        .then((response) => {

            const { login, html_url, avatar_url, created_at, name, bio } = response.data;

            const user: User = {
                login: login,
                name: name,
                nick: login,
                photo: avatar_url,
                url: html_url,
                bio: bio,
                createdAt: created_at,
            }

            console.log(user);

            return user;


        })
        .catch(function (error: any) {
            console.warn('Error while retrieving GitHub data', error);
        });
}
