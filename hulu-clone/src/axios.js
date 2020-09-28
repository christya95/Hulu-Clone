//library used to make a request to a server or endpoint

import axios from 'axios';

/** base url to make requests to the move database  */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;