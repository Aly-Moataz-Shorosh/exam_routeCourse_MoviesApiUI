import * as apiData from './apiData.js';

//$('.test').html(apiData.getMovies());
let movies = await apiData.getNow_playing();


movies = movies.results;
console.log(movies);
displayMovies();

function displayMovies(){
    let moviesHTML = '' 
    movies.forEach(movie => {
        moviesHTML+= `
        <div class="col-md-4 my-3">
            <div class="card bg-dark text-white">
                <img class="card-img" src="https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}" alt="Card image">
                <div class="card-img-overlay movie-overlay-details">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">${movie.overview}</p>
                    <p class="card-text">Rate: ${movie.vote_average}</p>
                    <p class="card-text">Release date: ${movie.release_date}</p>
                </div>
                </div>
        </div>
        `
    });

    $('#moviesContainer').html(moviesHTML);
}



//########################## SIDE MENU ##########################
let sideToggler = 1;
//$(".sideMenu").css("left",`-${$('.sideBlack').width()}px`);

$('#sideMenuToggler').click(function (e) { 
    e.preventDefault();
    
    sideMenuToggler();
});

function sideMenuToggler()
{
    if(sideToggler==0)
    {
        $('#sideMenuToggler').html('<i class="fa-solid fa-bars">')
        $(".sideMenu").animate({left:`-19vw`},1000);
        sideToggler++;
    }
    else{
        $('#sideMenuToggler').html('<i class="fa-solid fa-x"></i>');
        $(".sideMenu").animate({left:`0`},1000);
        sideToggler=0;
    }
}

function sideMenuButtons(){
    
}

$('#Now_playing').click(async function (e) { 
    e.preventDefault();
    let response = await apiData.getNow_playing();
    movies = response.results;
    $('#search').val('');
    displayMovies();
});

$('#Popular').click(async function (e) { 
    e.preventDefault();
    let response = await apiData.getPopular();
    movies = response.results;
    $('#search').val('');
    displayMovies();
});

$('#Top_Rated').click(async function (e) { 
    e.preventDefault();
    let response = await apiData.getTop_rated();
    movies = response.results;
    $('#search').val('');
    displayMovies();
});

$('#Trending').click(async function (e) { 
    e.preventDefault();
    let response = await apiData.getTrending();
    movies = response.results;
    $('#search').val('');
    displayMovies();
});

$('#Upcoming').click(async function (e) { 
    e.preventDefault();
    let response = await apiData.getUpcoming();
    movies = response.results;
    $('#search').val('');
    displayMovies();
});
//########################## SIDE MENU ##########################



//########################## SEARCH ##########################
$('#search').keyup(function (e) { 
    let movieSearchList = [];
    movies.forEach(movie => {
        if(movie.title.includes($('#search').val())){
            movieSearchList.push(movie);
        }
    });

    if(movieSearchList != [] )
        movies=movieSearchList;
    displayMovies();
});
//########################## SEARCH ##########################