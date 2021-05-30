import { requestMovies } from './requests.js';
import { initFavorites } from './favorite.js';
import { initSorting } from './sorting.js';
import { initSearch } from './search.js';


initSorting();
initFavorites();
initSearch();
requestMovies();