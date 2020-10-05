const API_KEY = '74c17b4cb20054ab7057cb22057adb21';

//API URLs for each fetch request
export default {
    fetchTrending: [`/trending/all/week?api_key=${API_KEY}&language=en-US`],
    fetchTopRated: [`/movie/top_rated?api_key=${API_KEY}&language=en-US`],
    fetchAction: [`discover/movie?api_key=${API_KEY}&with_genres=28`, `/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=28`],
    fetchComedy: [`discover/movie?api_key=${API_KEY}&with_genres=35`, `/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=35`],
    fetchHorrorMovies: [`discover/movie?api_key=${API_KEY}&with_genres=27`],
    fetchRomance: [`discover/movie?api_key=${API_KEY}&with_genres=10749`, `/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10749`],
    fetchMystery: [`discover/movie?api_key=${API_KEY}&with_genres=9648`, `/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=9648`],
    fetchScifiMovies: [`discover/movie?api_key=${API_KEY}&with_genres=878`],
    fetchWestern: [`discover/movie?api_key=${API_KEY}&with_genres=37`, `/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=37`],
    fetchAnimation: [`discover/movie?api_key=${API_KEY}&with_genres=16`, `/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=16`],
    fetchTVMovies: [`discover/movie?api_key=${API_KEY}&with_genres=10770`],
};