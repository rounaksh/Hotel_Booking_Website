let targetCity = new URLSearchParams(window.location.search);
// API function and details
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'apikey',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
};

// fetching hotels based on city name
const findHotel = () => {
    fetch(`https://travel-advisor.p.rapidapi.com/locations/search?query=${targetCity.get('city')}%20hotels&limit=30&offset=0&units=km&location_id=1&currency=INR&sort=relevance&lang=en_US`, options)
	.then(response => response.json())
	.then(response => {
            getHotelList(response.data);
    })
	.catch(err => console.error(err));
}

//function to display hotels
function getHotelList(data){
    for(let i = 0; i < data.length; i++){
        let hotelName = data[i].result_object.name;
        let hotelRating = data[i].result_object.rating;
        let hotelAddress = data[i].result_object.address;
        let hotelImage = data[i].result_object.photo.images.large.url;
        let hotelID = data[i].result_object.location_id;
        document.querySelector('#allCities').innerHTML += `
        <div class="col-lg-5 col-md-12 col-sm-12 my-4 mx-auto">
            <a href="detail.html?id=${hotelID}" style="color: #000;">
                <div class="row card hotelView border-0" style="flex-direction: row;">
                    <div class="col-md-6 px-0">
                        <img class="img-fluid"
                            src="${hotelImage}"
                            alt="${hotelName}" style="height: 300px;">
                    </div>
                    <div class="col-md-6 pl-0 my-auto">
                        <div class="card-body">
                            <h5 class="card-title font-weight-bold">${hotelName}</h5>
                            <p class="card-text">
                                ${hotelRating}<i class="fa fa-star" aria-hidden="true"></i>
                            </p>
                            <span class="card-text">${hotelAddress}</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        `;
    }
}

// findHotel();