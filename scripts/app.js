const titles = ['Jurassic World: Fallen Kingdom', 'Home Alone', 'Ocean\'s Eleven', 'Storage 24', 'Parker'];
const plots = [
    'When the island s dormant volcano begins roaring to life, Owen and Claire mount a campaign to rescue the remaining dinosaurs from this extinction-level event.',
    'Огромное семейство Маккалистеров собирается отправиться на Рождественские праздники в Париж. Как обычно это бывает, с утра оказывается, что они проспали, и все впопыхах начинают собираться. ' +
    'Им с большим трудом удается успеть на самолет, и когда тот уже взлетает, мать и отец восьмилетнего Кевина вспоминают, что они забыли своего младшего сына дома. В это время юный Кевин, осознав, ' +
    'что он остался дома сам, решает не тратить времени зря и как следует повеселиться. В то время, как его мать не находит себе места и ищет способ вернуться домой, мальчишка делает все, что его душе угодно. ' +
    'Однако в скором времени Кевин узнает, что парочка бандитов хочет ограбить его дом. Грабители даже не догадываются с чем им придется столкнуться, ведь мальчик как следует подготовился к их приходу.',
    'В центре сюжет находится отпетый мошенник Дэнни Оушен. Не прошло и суток после того, как его освободили из тюрьмы, а он уже задумал ограбить три самых крупных казино Лас-Вегаса, принадлежащих ' +
    'одному и тому же человеку – Терри Бенедикту, который ко всему прочему состоит в отношениях с бывшей женой Дэнни. Однако сам он не сможет провернуть столь дерзкое и грандиозное ограбление, и поэтому ' +
    'собирает команду настоящих профессионалов. Дэнни узнает, что выручку со всех трех казино отвозят в одно хранилище, и в один из дней там будет целых 160 миллионов долларов. Придумав хитроумный план и ' +
    'продумав все до мелочей, они отправляются на дело...',
    'Фантастический колоритный триллер, с весьма убедительными спецэффектами и интригующим сюжетом. Несмотря на малобюджетность, фильм сделан очень качественно. Картина, развивающаяся перед нами, на ' +
    'протяжении всего просмотра завлекает и заставляет досмотреть до конца. Не оставит равнодушными, как любителей жанра так и просто желающим посмотреть интересный фильм в стиле хоррор. В фильме "Хранилище 24" ' +
    '(Storage 24) действие происходит в Лондоне. Военный самолет, перевозивший неизвестный опасный объект, разбился прямо над городом. Город охватывает беспокойство. Четверо друзей: Чарли, Шелли, Марк и Ники ' +
    'оказываются в закрытом складе, под названием «Хранилище», вместе с толпой незнакомых людей. Паника, растерянность, смятение, страх, взаимоотношения между людьми в стрессовой ситуации, всё это осложняется ' +
    'присутствием кого-то или чего-то помимо, присутствовавших там людей. Как справятся с этими испытаниями на прочность, четверо героев, попавших в это изолированное помещение…и справятся ли…Кто или что находится ' +
    'с ними в хранилище?..',
    'Даже у вора должны быть правила. По такому принципу живет и главный герой фильма Паркер: не грабить бедных, не причинять вред людям, которые не заслуживают этого. Как-то, провернув очередное удачное ограбление, ' +
    'он отказывается от следующего дела, разозлив тем самым своих подельников. Те в свою очередь пытаются убить его, но Паркеру удается выжить, и он не намерен спускать такое с рук. Он берет чужое имя и очень ' +
    'тщательно готовит план мести. В этом ему помогает мисс Роджерс, которая работает риэлтором в городе, в котором его обидчики готовятся к очередному делу. Паркер накажет всех виновных, ведь он дал слово отомстить…'
];
const posters = [
    'https://m.media-amazon.com/images/M/MV5BNzIxMjYwNDEwN15BMl5BanBnXkFtZTgwMzk5MDI3NTM@._V1_SX300.jpg',
    'https://static.hdrezka.ac/i/2020/11/9/xb5614ffe43dbzm54q83f.jpeg',
    'https://static.hdrezka.ac/i/2014/1/25/u3d00271f7d9bts57v80e.jpg',
    'https://static.hdrezka.ac/i/2014/12/19/e6f0208e168bclx14e38g.jpg',
    'https://static.hdrezka.ac/i/2013/6/5/r33a9c0f34917ea52l38n.jpg'
];

const directors = [
    'J.A. Bayona',
    'Крис Коламбус',
    'Стивен Содерберг',
    'Йоханнес Робертс',
    'Тейлор Хэкфорд'
];

function generateRandomNumber(min, max, isRounded = true) {
    const number = min - 0.5 + Math.random() * (max - min + 1);
    return isRounded ? Math.round(number) : number;
}

function generateDate(start, end) {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const formattedDate = new Intl.DateTimeFormat('ru-RU').format(date).replaceAll('.', '-');
    return formattedDate
}

function generateMovies(cardsCount) {
    const movies = new Array(cardsCount).fill(null);
    const generatedIndexes = [];

    return movies.map(function() {
        let cardIndex = generateRandomNumber(0, titles.length - 1);

        while (generatedIndexes.includes(cardIndex)) {
            cardIndex = generateRandomNumber(0, titles.length - 1);
        }

        generatedIndexes.push(cardIndex);

        const releaseDate = generateDate(new Date(2000, 1, 1), new Date());
        const boxOffice = generateRandomNumber(0, 100000000);
        const boxOfficeFormatted = new Intl.NumberFormat('ru-RU').format(boxOffice).replaceAll(' ', ',');
        const rating = generateRandomNumber(4, 9, false).toFixed(1);

        return {
            title: titles[cardIndex],
            plot: plots[cardIndex],
            poster: posters[cardIndex],
            director: directors[cardIndex],
            releaseDate,
            boxOffice: `$${boxOfficeFormatted}`,
            rating,
        }
    })
}

const data = generateMovies(titles.length);

function render(movies) {
    const moviesContainer = document.querySelector('.film-list');
    const cardTemplate = document.getElementById('card-template').content;

    const cards = movies.map(function(movie) {
        const card = cardTemplate.cloneNode(true);
        const title = card.querySelector('.card-header__title');
        const plot = card.querySelector('.film-info__plot .film-info__text');
        const poster = card.querySelector('.card-header__image');
        const releaseDate = card.querySelector('.film-info__release-date .film-info__text');
        const director = card.querySelector('.film-info__director .film-info__text');
        const boxOffice = card.querySelector('.film-info__box-office .film-info__text');
        const rating = card.querySelector('.film-info__rating .film-info__text');
        title.innerText = movie.title;
        plot.innerText = `${movie.plot.substring(0, 140)}...`;
        poster.setAttribute('src', movie.poster);
        releaseDate.innerText = movie.releaseDate;
        director.innerText = movie.director;
        boxOffice.innerText = movie.boxOffice;
        rating.innerText = movie.rating;

        return card;
    });

    moviesContainer.append(...cards)
}

render(data);