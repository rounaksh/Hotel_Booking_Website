let targetHotel = new URLSearchParams(window.location.search);
// api
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'apikey',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
};
// Per Person Cost
const perPersonCost = 1000;
let subTotal;

document.querySelector('#subtotal').value = "Rs.0";

document.querySelector('#paymentInfo').appendChild

document.querySelector('#noOfAdults').addEventListener("change", (e) => {
    e.preventDefault();
    var totalAdults = document.querySelector('#noOfAdults').value;
    var datePicker1 = document.querySelector('#from-Date').value;
    var datePicker2 = document.querySelector('#to-Date').value;
    if (datePicker1 === '' || datePicker2 === '') {
        document.querySelector('#subtotal').value = `Rs.${totalAdults * perPersonCost}`;
    } else {
        totalDays = calculateDays();
        document.querySelector('#subtotal').value = `Rs.${totalAdults * perPersonCost * totalDays}`;
    }
});

// From Date datepicker code
const fromDate = document.querySelector('#from-Date');
const currentTime = new Date();
var fMonth = currentTime.getMonth() + 1;
if (fMonth < 10) { fMonth = '0' + fMonth }
var fYear = currentTime.getFullYear();
var fDate = currentTime.getDate();
if (fDate < 10) { fDate = '0' + fDate }
var currentD = `${fYear}-${fMonth}-${fDate}`;
fromDate.setAttribute('min', currentD);

// To Date datepicker code
const toDate = document.querySelector('#to-Date');
toDate.setAttribute('min', currentD);
var totalDays;
var fromDateValue;
var toDateValue;

// To Display amount based on datepicker's
document.querySelector('#from-Date').addEventListener("change", (e) => {
    e.preventDefault();
    const totalAdults = document.querySelector('#noOfAdults').value;
    totalDays = calculateDays();
    document.querySelector('#subtotal').value = `${totalAdults * perPersonCost * totalDays}`;
});
document.querySelector('#to-Date').addEventListener("change", (e) => {
    e.preventDefault();
    const totalAdults = document.querySelector('#noOfAdults').value;
    totalDays = calculateDays();
    document.querySelector('#subtotal').value = `${totalAdults * perPersonCost * totalDays}`;
});

// Function to calculate total days
const calculateDays = () => {
    var d1 = document.querySelector('#from-Date').value;
    var d2 = document.querySelector('#to-Date').value;
    const dateOne = new Date(d1);
    const dataTwo = new Date(d2);
    const time = Math.abs(dataTwo - dateOne);
    const days = Math.ceil(time / (1000 * 60 * 60 * 24));
    return days;
}

// function to fetch images of hotel
const hotelImages = () => {
    fetch(`https://travel-advisor.p.rapidapi.com/photos/list?location_id=${targetHotel.get('city')}&lang=en_US`, options)
        .then(response => response.json())
        .then(response => {
            let sliderParent = document.querySelector('.carousel-inner');
            for (let i = 0; i < response.data.length; i++) {
                let imgSrc = response.data[i].images.large.url;
                let imgName = response.data[i].locations[0].name;

                if (i == 0) {
                    sliderParent.innerHTML += `
                <div class="carousel-item active">
                    <img class="img-fluid" width="500px" height="500px"
                        src="${imgSrc}"
                        alt="${imgName}">
                </div>
                `;
                } else {
                    sliderParent.innerHTML += `
                <div class="carousel-item">
                    <img class="img-fluid" width="500px" height="500px"
                        src="${imgSrc}"
                        alt="${imgName}">
                </div>
                `;
                }
            }

        })
        .catch(err => console.error(err));
}

// fuction to fetch details of hotel
const hotelDetails = () => {
    fetch(`https://travel-advisor.p.rapidapi.com/hotels/get-details?location_id=${targetHotel.get('city')}&lang=en_US&currency=INR`, options)
        .then(response => response.json())
        .then(response => {
            let hotelTitle = response.data[0].name;
            let hotelRating = parseInt(response.data[0].rating);
            let hotelAmenities = response.data[0].amenities;
            let hotelDescription = response.data[0].description;
            document.querySelector('#titleOfHotel').innerHTML = hotelTitle;
        let i = 0;
        for(i = 0; i < hotelRating; i++){
            let icon = document.createElement('i');
            icon.classList.add('fa', 'fa-star');
            document.querySelector('#ratingOfHotel').appendChild(icon);
        }
        for(i = 0; i < 6; i++){
            let listItem = document.createElement('li');
            listItem.innerHTML = hotelAmenities[i].name;
            document.querySelector('#amenitiesOfHotel').appendChild(listItem);
        }
        document.querySelector('#descriptionOfHotel').innerHTML = hotelDescription;
        })
        .catch(err => console.error(err));
}

document.querySelector('#id').value = targetHotel.get('id');

hotelImages();
hotelDetails();