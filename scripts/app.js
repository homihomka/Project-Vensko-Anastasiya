import { data } from './mocks.js';
import { render } from './render.js';
import { initFavorites } from './favorite.js';
import { initSorting } from './sorting.js';
import { initSearch } from './search.js';

initSorting();
initFavorites();
initSearch();
render(data);