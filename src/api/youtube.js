import axios from 'axios';

const KEY = 'AIzaSyD-OfFlnBbgV1SW5tSKVh2ASYRWJ_Jaehg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults:5,
        key: KEY
    }
});