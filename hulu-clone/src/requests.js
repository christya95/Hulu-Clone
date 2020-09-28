const API_KEY = '74c17b4cb20054ab7057cb22057adb21';

//API URLs for each fetch request
export default {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genre=28`,
    fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genre=35`,
    fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genre=27`,
    fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genre=10749`,
    fetchMystery: `discover/movie?api_key=${API_KEY}&with_genre=9648`,
    fetchScifi: `discover/movie?api_key=${API_KEY}&with_genre=878`,
    fetchWestern: `discover/movie?api_key=${API_KEY}&with_genre=37`,
    fetchAnimation: `discover/movie?api_key=${API_KEY}&with_genre=16`,
    fetchTV: `discover/movie?api_key=${API_KEY}&with_genre=10770`,
};