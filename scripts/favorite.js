import { moviesContainer, render } from './render.js';
import { data } from './mocks.js';
import { resetSorting } from './sorting.js';
import { resetSearch } from './search.js';

export let favoriteMovies = [];
export let isFavoriteChecked = false;

const savedFavoriteMovies = localStorage.getItem('favoriteMovies');
if (savedFavoriteMovies) {
    favoriteMovies = JSON.parse(savedFavoriteMovies)
}

export function initFavorites() {
    moviesContainer.addEventListener('click', function (event) {
        const favoriteButton = event.target.closest('.card__footer .card__button');
        if (!favoriteButton) return;

        const card = favoriteButton.closest('.card');
        const movieId = Number(card.dataset.id);
        const isFavorite = favoriteButton.classList.contains('button_remove');

        if (isFavorite) {
            favoriteButton.classList.remove('button_remove');
            favoriteButton.classList.add('button_add');

            const favoriteMovieIndex = favoriteMovies.indexOf(movieId);
            favoriteMovies.splice(favoriteMovieIndex, 1);
        } else {
            favoriteButton.classList.remove('button_add');
            favoriteButton.classList.add('button_remove');

            favoriteMovies.push(movieId);
        }

        localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
        render(data);
    });

    const favoriteFilter = document.querySelector('.filter__check');
    favoriteFilter.addEventListener('change', function(event) {
        isFavoriteChecked = event.target.checked;

        resetSorting();
        resetSearch();
        render(data);
    });
}