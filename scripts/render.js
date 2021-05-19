import { favoriteMovies, isFavoriteChecked } from './favorite.js';
import { activeSortingParameter, sortingContainer } from './sorting.js';

function getMovieCard(cardTemplate, movie) {
    const isFavorite = favoriteMovies.includes(movie.id);

    const card = cardTemplate.cloneNode(true).firstElementChild;
    const title = card.querySelector('.card-header__title');
    const plot = card.querySelector('.film-info__plot .film-info__text');
    const poster = card.querySelector('.card-header__image');
    const releaseDate = card.querySelector('.film-info__release-date .film-info__text');
    const director = card.querySelector('.film-info__director .film-info__text');
    const boxOffice = card.querySelector('.film-info__box-office .film-info__text');
    const rating = card.querySelector('.film-info__rating .film-info__text');

    const favoriteBtn = card.querySelector('.card__footer .card__button');
    const favoriteBtnClass = isFavorite ? 'button_remove' : 'button_add';
    favoriteBtn.classList.add(favoriteBtnClass);

    const boxOfficeFormatted = (
        movie.boxOffice &&
        new Intl.NumberFormat('ru-RU').format(movie.boxOffice).replaceAll(' ', ',')
    );

    const formattedDate = (
        movie.releaseDate &&
        new Intl.DateTimeFormat('ru-RU').format(movie.releaseDate).replaceAll('.', '-')
    );

    card.dataset.id = movie.id;
    title.innerText = movie.title;
    plot.innerText = `${movie.plot.substring(0, 140)}...` || '-';
    poster.setAttribute('src', movie.poster);
    releaseDate.innerText = formattedDate || '-';
    director.innerText = movie.director || '-';
    boxOffice.innerText = `$${boxOfficeFormatted}` || '0';
    rating.innerText = movie.rating || '0';

    return card;
}

export const moviesContainer = document.querySelector('.film-list');

export function render(data) {
    moviesContainer.innerHTML = '';
    const cardTemplate = document.getElementById('card-template').content;
    const movies = data.filter(movie => (isFavoriteChecked ?
        favoriteMovies.includes(movie.id) :
        !favoriteMovies.includes(movie.id))
    );
    const cards = movies.map(movie => getMovieCard(cardTemplate, movie));

    const buttons = sortingContainer.querySelectorAll('.button');
    buttons.forEach((button) => {
        button.classList.remove('button_checked')
        if (button.id === activeSortingParameter) {
            button.classList.add('button_checked')
        }
    });

    moviesContainer.append(...cards)
}