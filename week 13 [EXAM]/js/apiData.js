

async function getMovies(type='/trending',amount='/all/day'){
    let response = await fetch(`https://api.themoviedb.org/3${type}${amount}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR3X0YtgKN-Yrkix3Ed1Gb4plsdddr0ZVoO41kAyUbWmHSSWilAbPoz51Q8`);
    let movies = await response.json();

    return movies;
}

let getTrending = ()=> (getMovies());
let getLatest = ()=> (getMovies('/movie','/latest'));
let getNow_playing = ()=> (getMovies('/movie','/now_playing'));
let getPopular = ()=> (getMovies('/movie','/popular'));
let getTop_rated = ()=> (getMovies('/movie','/top_rated'));
let getUpcoming = ()=> (getMovies('/movie','/upcoming'));
let getMovie = (id)=> (getMovies('/movie',`/${id}`));

export{
    getTrending,
    getLatest,
    getNow_playing,
    getPopular,
    getTop_rated,
    getUpcoming,
    getMovie,
}




/*
GET /movie/{movie_id}/images
https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>&language=en-US

GET /movie/{movie_id}
https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

GET /movie/latest
https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US

GET /movie/now_playing
https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1

GET /movie/popular
https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

GET /movie/top_rated
https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1

GET /movie/upcoming
https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1
*/