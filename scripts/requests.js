import { render } from './render.js';

export let data = [];

async function requestToken() {
    try {
        const data = await fetch('https://fe08-films.herokuapp.com/auth', {
            method: 'POST'
        });

        return await data.json();
    } catch(e) {
        console.log(e)
    }
}

export async function requestMovies() {
    try {
        const user = await requestToken();
        const moviesRequest = await fetch('https://fe08-films.herokuapp.com/films', {
            method: 'GET',
            headers: {
                'Autorization': `Beare ${user.token}`
            }
        });

        const { films } = await moviesRequest.json();
        data = films;
        render(data);
    } catch(e) {
        console.log(e)
    }
}