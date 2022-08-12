let header = `
<a href="index.html" class="navbar-brand"><img class="logo" src="assests/images/logo.png" alt="logo"></a>

<form class="form-inline">
    <!-- Login Modal Button -->
    <a href="#" class="btn btn-light" data-toggle="modal" data-target="#loginModal" id="loginModalBtn">
        LOGIN
    </a>
</form>`;

let footer = `
<div class="container-fluid">
    <div class="row mx-2">
        <!--Contact Us Modal Button-->
        <div class="col-4 py-3 contactUsButton">
            <a href="#" class="btn btn-info" data-toggle="modal" data-target="#contactModal">
                Contact Us
            </a>
        </div>

        <!--Copyright text-->
        <div class="col-4 copyrightText font-weight-bold align-items-center">&copy; 2020 room search pvt. ltd.
        </div>

        <!--Social Media Links-->
        <div class="col-4 socialMediaLinks">
            <a href="http://www.facebook.com" target="_blank" class="p-1" rel="noopener noreferrer"><img
                    src="assests/images/facebook.png" alt="facebook"></a>
            <a href="http://www.instagram.com" target="_blank" class="p-1" rel="noopener noreferrer"><img
                    src="assests/images/instagram.png" alt="instagram"></a>
            <a href="http://www.twitter.com" target="_blank" class="p-1" rel="noopener noreferrer"><img
                    src="assests/images/twitter.png" alt="twitter"></a>
        </div>
    </div>
</div>`;

document.querySelector('nav').innerHTML = header;
document.querySelector('footer').innerHTML = footer;
let loginBTN = document.querySelector('#loginModalBtn');
let innerLoginBtn = document.querySelector('#loginFormBtn');
// const contactDetails = document.querySelector('#contactFormButton');

function login(){
    console.log(document.querySelector('#loginForm'));
    const username = document.querySelector('#username');
    const pass = document.querySelector('#password');
    console.log(username.value, pass.value);
    if ((username.value === "admin") && (pass.value === "admin")) {
        alert('successfully loggedin');
        localStorage.setItem('userName', username);
        localStorage.setItem('password', pass);
        loginBTN.innerHTML = `<a href="#" class="btn btn-light" onclick="logout()" id="loginModalBtn">
        LOGOUT
        </a>`;
    } else {
        alert('username and password cannot be empty');
    }
};

const logout = () => {
    localStorage.clear();
    loginBTN.innerHTML = `<a href="#" class="btn btn-light" data-toggle="modal" data-target="#loginModal" id="loginModalBtn">
    LOGIN
    </a>`;
}

// contactDetails.addEventListener('submit', (e) => {
//     e.preventDefault();

// })