let targetUser = new URLSearchParams(window.location.search);

// api
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'apikey',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
};

// Function to calculate total days
const calculateDays = (d1, d2) => {
    const dateOne = new Date(d1);
    const dataTwo = new Date(d2);
    const time = Math.abs(dataTwo - dateOne);
    const days = Math.ceil(time / (1000 * 60 * 60 * 24));
    return days;
}

//function to show details of hotel and customer details and total price
const userPaymentDetails = () => {
    // fuction to fetch details of hotel
    const hotelDetails = () => {
        fetch(`https://travel-advisor.p.rapidapi.com/hotels/get-details?location_id=${targetUser.get('id')}&lang=en_US&currency=INR`, options)
            .then(response => response.json())
            .then(response => {
                let hotelImage = response.data[0].photo.images.large.url;
                let hotelTitle = response.data[0].name;
                let hotelRanking = response.data[0].ranking;
                let hotelAddress = response.data[0].address;
                document.querySelector('#finalHotelDetails').innerHTML = `
                <img class="d-md-none d-sm-block img-fluid px-2" src="${hotelImage}" alt="${hotelTitle}">
                <div class="card-body pl-0 pb-0">
                    <h2 class="font-weight-bold">${hotelTitle}</h2>
                    <p class="font-weight-bold">${hotelRanking}</p>
                    <span class="font-weight-bold">${hotelAddress}</span>
                </div>
                `;
            })
            .catch(err => console.error(err));
    }
    //fetch details of customer
    const customerDetails = () => {
        document.querySelector('#customerDetails').innerHTML = `
        <div class="col-md-3">
            <p><span class="font-weight-bold">Name: </span>${targetUser.get('userName')}</p>
            <p><span class="font-weight-bold">Number of Adults: </span>${targetUser.get('noOfAdults')}</p>
            <p><span class="font-weight-bold">Check-in Date: </span>${targetUser.get('fromDate')}</p>
            <p class="mb-0"><span class="font-weight-bold">Check-out Date: </span>${targetUser.get('toDate')}</p>
        </div>
        <!-- Payment Details -->
        <div class="col-md-4">
            <p><span class="font-weight-bold">Tariff Breakdown: </span>Rs.${1000} x ${targetUser.get('noOfAdults')} Adults x ${calculateDays(targetUser.get('fromDate'), targetUser.get('toDate'))} Nights</p>
            <p class="mb-0"><span class="font-weight-bold">Total Amount: </span>Rs.${targetUser.get('total')}</p>
        </div>
        <div class="col-md-1">
            <button type="submit" id="pay-now" class="btn btn-success" onclick="payNow">Pay Now</button>
        </div>
        `;
    }
    customerDetails();
}
userPaymentDetails();

if (!loginStatus || loginStatus === 'false') {
    document.getElementById('pay-now').disabled = true;
} else if (loginStatus === 'true') {
document.getElementById('pay-now').disabled = false;
}

let payNow = () => {
	alert('Hi your booking is successfull!');
};