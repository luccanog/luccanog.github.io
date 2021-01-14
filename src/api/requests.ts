import axios, { AxiosResponse } from 'axios';
import * as moment from 'moment'
import { Repos, User } from '../interfaces/index'
const instance = axios.create({
    baseURL: 'https://api.github.com'
});

export const getRepos = async () => {
    const repos: Array<Repos> = [];

    await instance.get('/users/luccanog/repos')
        .then((response) => {

            response.data.map((element: any) => {
                repos.push(
                    {
                        description: element.description || '',
                        createdAt: moment(element.created_at).toLocaleString(),
                        url: element.url,
                        name: element.name,
                        language: element.language
                    }
                )
            })

            console.log(repos);
        })
        .catch(function (error: any) {
            console.warn('Error while retrieving GitHub data', error);
        });

    return repos;
}

export const getProfile = async () => {
    let user = {};

    await instance.get('/users/luccanog')
        .then((response) => {

            const { login, html_url, avatar_url, created_at, name, bio } = response.data;

            user = {
                login: login,
                name: name,
                nick: login,
                photo: avatar_url,
                url: html_url,
                bio: bio,
                createdAt: moment(created_at).toLocaleString(),
            }
            console.log(user);
        })
        .catch(function (error: any) {
            console.warn('Error while retrieving GitHub data', error);
        });

    return user as User;

}
