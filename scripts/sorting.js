import { data } from './mocks.js';
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
    const sortedMovies = [...data].sort((a, b) => b[sortingParameter] - a[sortingParameter]);
    render(sortedMovies);
}

export function resetSorting() {
    activeSortingParameter = null;
}