const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'apikey',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
};
// Array of more city cards
let cards = [
    '<div class="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center my-4">' +
    '<div class="card bg-transparent indexCardImg indexBorder border-0">' +
    '<a href="list.html?city=Chennai">' +
    '<img width="150px" height="150px" class="indexCardBorder"' +
    'src=' + '"https://media-cdn.tripadvisor.com/media/photo-s/15/4d/46/b8/chennai-madras.jpg"' +
    'alt=' + '"Chennai">' +
    '<div class="card-img-overlay hoverEffect">' +
    '<p class="card-title">Chennai</p>' +
    '</div>' +
    '</a>' +
    '</div>' +
    '</div>',

    '<div class="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center my-4">' +
    '<div class="card bg-transparent indexCardImg indexBorder border-0">' +
    '<a href="list.html?city=Agra">' +
    '<img width="150px" height="150px" class="indexCardBorder"' +
    'src=' + '"https://media-cdn.tripadvisor.com/media/photo-s/15/33/fc/fc/agra.jpg"' +
    'alt=' + '"Agra">' +
    '<div class="card-img-overlay hoverEffect">' +
    '<p class="card-title">Agra</p>' +
    '</div>' +
    '</a>' +
    '</div>' +
    '</div>',

    '<div class="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center my-4">' +
    '<div class="card bg-transparent indexCardImg indexBorder border-0">' +
    '<a href="list.html?=/Jaipur">' +
    '<img width="150px" height="150px" class="indexCardBorder"' +
    'src=' + '"https://media-cdn.tripadvisor.com/media/photo-s/10/a3/3b/8a/screenshot-2017-09-12.jpg"' +
    'alt=' + '"Jaipur">' +
    '<div class="card-img-overlay hoverEffect">' +
    '<p class="card-title">Jaipur</p>' +
    '</div>' +
    '</a>' +
    '</div>' +
    '</div>',

    '<div class="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center my-4">' +
    '<div class="card bg-transparent indexCardImg indexBorder border-0">' +
    '<a href="list.html?city=Bengaluru">' +
    '<img width="150px" height="150px" class="indexCardBorder"' +
    'src=' + '"https://media-cdn.tripadvisor.com/media/photo-s/0c/d2/2f/7a/palace-from-the-outside.jpg"' +
    'alt=' + '"Bengaluru">' +
    '<div class="card-img-overlay hoverEffect">' +
    '<p class="card-title">Bengaluru</p>' +
    '</div>' +
    '</a>' +
    '</div>' +
    '</div>'
];
let container = document.querySelector('#cityCards');

let searchBar = document.querySelector('#search-input');

// Inserting array in index page
cards.forEach((value) => {
    container.innerHTML += value;
});
container.style.display = 'none';

// View more, View less functionality
function loadMore(x){
    if(x.style.display === 'none'){
        document.querySelector('#indexLoadMoreButton').innerHTML = "View Less";
        x.style.display = 'flex';
    } else {
        document.querySelector('#indexLoadMoreButton').innerHTML = "View More";
        x.style.display = 'none';
    }
}