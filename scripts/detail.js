// Per Person Cost
const perPersonCost = 1000;
let subTotal;

document.querySelector('#subtotal').value = perPersonCost;

document.querySelector('#noOfAdults').addEventListener("change", (e) => {
    e.preventDefault();
    const totalAdults = document.querySelector('#noOfAdults').value;
    var datePicker1 = document.querySelector('#from-Date').value;
    var datePicker2 = document.querySelector('#to-Date').value;
    if (datePicker1 === '' || datePicker2 === '') {
        document.querySelector('#subtotal').value = `${totalAdults * perPersonCost}`;
    } else {
        totalDays = calculateDays();
        document.querySelector('#subtotal').value = `${totalAdults * perPersonCost * totalDays}`;
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

