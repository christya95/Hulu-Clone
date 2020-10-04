const API_KEY = '74c17b4cb20054ab7057cb22057adb21';

//API URLs for each fetch request
export default {
    fetchTrending: [`/trending/all/week?api_key=${API_KEY}&language=en-US`],
    fetchTopRated: [`/movie/top_rated?api_key=${API_KEY}&language=en-US`],
    fetchAction: [`discover/movie?api_key=${API_KEY}&with_genres=28`, `/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=28`],
    fetchComedyMovies: [`discover/movie?api_key=${API_KEY}&with_genres=35`],
    fetchHorrorMovies: [`discover/movie?api_key=${API_KEY}&with_genres=27`],
    fetchRomanceMovies: [`discover/movie?api_key=${API_KEY}&with_genres=10749`],
    fetchMysteryMovies: [`discover/movie?api_key=${API_KEY}&with_genres=9648`],
    fetchScifiMovies: [`discover/movie?api_key=${API_KEY}&with_genres=878`],
    fetchWesternMovies: [`discover/movie?api_key=${API_KEY}&with_genres=37`],
    fetchAnimationMovies: [`discover/movie?api_key=${API_KEY}&with_genres=16`],
    fetchTVMovies: [`discover/movie?api_key=${API_KEY}&with_genres=10770`],
};