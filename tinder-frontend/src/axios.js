import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-appclone.herokuapp.com/'

});

export default instance;