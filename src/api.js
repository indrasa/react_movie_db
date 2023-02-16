import axios from "axios";

// const url = 'https://api.themoviedb.org/3';
const url = process.env.REACT_APP_BASEURL;
// const baseimg = 'https://image/tmdb.org/t/p/w500'
const baseimg = process.env.REACT_APP_BASEIMGURL;
// const apikey = '86f07878d6da57f4337801bd4f7b84bf'
const apikey = process.env.REACT_APP_APIKEY;

export const getDaftarMovie = async () => {
    const movie = await axios.get(`${url}/movie/popular?api_key=${apikey}`);
    // console.log({ movieList: movie });
    return movie.data.results;
}

export const cariMovie = async (q) => {
    const search = await axios.get(`${url}/search/movie?api_key=${apikey}&query=${q}`);
    return search.data;
}