import { favoriteMovies, isFavoriteChecked } from './favorite.js';
import { activeSortingParameter, sortingContainer } from './sorting.js';

function getMovieCard(cardTemplate, movie) {
    const isMovie = movie.imdbID;
    if (!isMovie) return;

    const isFavorite = favoriteMovies.includes(movie.imdbID);

    const card = cardTemplate.cloneNode(true).firstElementChild;
    const title = card.querySelector('.card-header__title');
    const plot = card.querySelector('.film-info__plot .film-info__text');
    const poster = card.querySelector('.card-header__image');
    const released = card.querySelector('.film-info__release-date .film-info__text');
    const director = card.querySelector('.film-info__director .film-info__text');
    const boxOffice = card.querySelector('.film-info__box-office .film-info__text');
    const rating = card.querySelector('.film-info__rating .film-info__text');

    const favoriteBtn = card.querySelector('.card__footer .card__button');
    const favoriteBtnClass = isFavorite ? 'button_remove' : 'button_add';
    favoriteBtn.classList.add(favoriteBtnClass);

    card.dataset.id = movie.imdbID;
    title.innerText = movie.Title;
    plot.innerText = `${movie.Plot.substring(0, 140)}...` || '-';
    poster.setAttribute('src', movie.Poster);
    released.innerText = movie.Released || '-';
    director.innerText = movie.Director || '-';
    boxOffice.innerText = movie.BoxOffice || '0';
    rating.innerText = movie.Ratings[2].Value || '0';

    return card;
}

export const moviesContainer = document.querySelector('.film-list');

export function render(data) {
    moviesContainer.innerHTML = '';
    const cardTemplate = document.getElementById('card-template').content;
    const movies = data.filter(movie => (isFavoriteChecked ?
        favoriteMovies.includes(movie.imdbID) :
        !favoriteMovies.includes(movie.imdbID))
    );
    const cards = movies.map(movie => getMovieCard(cardTemplate, movie));

    const buttons = sortingContainer.querySelectorAll('.button');
    buttons.forEach((button) => {
        button.classList.remove('button_checked');
        if (button.id === activeSortingParameter) {
            button.classList.add('button_checked')
        }
    });

    moviesContainer.append(...cards)
}