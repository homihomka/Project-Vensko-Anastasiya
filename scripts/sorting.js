import { data } from './mocks.js';
import { render } from './render.js';
import { resetSearch } from './search.js';

const sortingContainer = document.querySelector('.sorting');

export function initSorting () {
    sortingContainer.addEventListener('click', function (event) {
        const sortingButton = event.target.closest('.button');
        if (!sortingButton) return;

        resetSearch();

        if (sortingButton.classList.contains('button_checked')) {
            sortingButton.classList.remove('button_checked');
            render(data);
        } else {
            resetSorting();
            sortingButton.classList.add('button_checked');
            const sortingParameter = sortingButton.id;
            sortMovies(sortingParameter);
        }
    })
}

function sortMovies(sortingParameter) {
    const sortedMovies = [...data].sort((a, b) => b[sortingParameter] - a[sortingParameter]);
    render(sortedMovies);
}

export function resetSorting () {
    const buttons = sortingContainer.querySelectorAll('.button');
    buttons.forEach((button) => button.classList.remove('button_checked'));
}