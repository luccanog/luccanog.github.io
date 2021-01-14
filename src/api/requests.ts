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
                        createdAt: moment(element.created_at).locale('pt-br').format('LL'),
                        url: element.html_url,
                        name: element.name,
                        language: element.language,
                        rawDate: moment(element.created_at)
                    }
                )
            })

            console.log(repos);
        })
        .catch(function (error: any) {
            console.warn('Error while retrieving GitHub data', error);
        });
    repos.sort((a, b) => {
        if (a.rawDate.isAfter(b.rawDate)) return -1;
        if (a.rawDate.isBefore(b.rawDate)) return 1;
        return 0;
    });
    console.log(repos);

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
            }
            console.log(user);
        })
        .catch(function (error: any) {
            console.warn('Error while retrieving GitHub data', error);
        });

    return user as User;

}
