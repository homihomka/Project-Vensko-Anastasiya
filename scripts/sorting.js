import { data } from './requests.js';
import { render } from './render.js';
import { resetSearch } from './search.js';

export const sortingContainer = document.querySelector('.sorting');

export let activeSortingParameter = null;

export function initSorting () {
    sortingContainer.addEventListener('click', function (event) {
        const sortingButton = event.target.closest('.button');
        if (!sortingButton) return;

        resetSearch();

        const selectedSorting = sortingButton.id;

        if (activeSortingParameter === selectedSorting) {
            resetSorting();
            render(data);
        } else {
            activeSortingParameter = selectedSorting;
            sortMovies(selectedSorting);
        }
    })
}

function sortMovies(sortingParameter) {
    const sortedMovies = [...data].sort((a, b) => {
        switch (sortingParameter) {
            case 'rating':
                const firstRating = getRating(a);
                const secondRating = getRating(b);

                return secondRating - firstRating;
            case 'releaseDate':
                const firstReleaseDate = getReleaseDate(a);
                const secondReleaseDate = getReleaseDate(b);

                return secondReleaseDate - firstReleaseDate;
            case 'boxOffice':
                const firstBoxOffice = getBudget(a);
                const secondBoxOffice = getBudget(b);

                return secondBoxOffice - firstBoxOffice;
            default:
                return b[sortingParameter] - a[sortingParameter];
        }
    });
    render(sortedMovies);
}

function getRating(movie) {
    return Number(movie.Ratings[2].Value.split('/')[0])
}

function getReleaseDate(movie) {
    return new Date(movie.Released);
}

function getBudget(movie) {
    let value = movie.BoxOffice;
    value = value.replace(/\$|,/gi, '');

    if (value === 'N/A') {
        value = 0;
    }

    return Number(value)
}

export function resetSorting() {
    activeSortingParameter = null;
}