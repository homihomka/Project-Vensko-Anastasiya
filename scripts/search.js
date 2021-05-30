import { resetSorting } from './sorting.js';
import { data } from './requests.js';
import { render } from './render.js';

const searchField = document.querySelector('.search__input');

export function resetSearch() {
    searchField.value = '';
}

export function initSearch() {
    searchField.addEventListener('input', function (event) {
        resetSorting();
        const searchString = event.target.value.toLowerCase();
        const searchResult = data.filter(movie => movie.Title.toLowerCase().includes(searchString));
        render(searchResult);
    });
}