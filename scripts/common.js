let header = `
<a href="index.html" class="navbar-brand"><img class="logo" src="assests/images/logo.png" alt="logo"></a>

    <!-- Login Modal Button -->
    <button type="button" class="btn btn-light btn-sm" data-toggle="modal" data-backdrop="false" data-target="#loginModal" id="loginModalBtn" onclick="mainLogin()">
        LOGIN
    </button>

    <!-- Login Modal Here -->
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="login-modal-label" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Please Login</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <!-- Modal body -->
                <div class="modal-body">
                    <form id="loginForm">
                        <div class="form-inline justify-content-between">
                            <div class="form-group">
                                <label for="username">Username: </label>
                            </div>
                            <div class="form-group">
                                <input class="form-control" value="" type="text" name="username" id="username"
                                    placeholder="Enter Username" required>
                            </div>
                        </div>
                        <br>
                        <div class="form-inline justify-content-between">
                            <div class="form-group">
                                <label for="password">Password: </label>
                            </div>
                            <div class="form-group">
                                <input class="form-control" value="" type="password" name="password" id="password"
                                    placeholder="Enter Password" autocomplete="off" required>
                            </div>
                        </div>
                        <br>
                    </form>
                    <!-- Modal footer -->
                        <div class="modal-footer d-flex justify-content-center align-items-center">
                            <button type="button" onclick="login()" class="btn btn-primary"
                                data-dismiss="modal">Login</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
    <!--Navigation Bar end-->`;

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

document.querySelector('nav').innerHTML += header;
document.querySelector('footer').innerHTML += footer;
let loginBTN = document.querySelector('#loginModalBtn');

//login function
let mainLogin = () => {
    if (localStorage.getItem('loginStatus') === 'true') {
        localStorage.setItem('loginStatus', 'false');
        location.reload();
    }
};
const login = () => {
    localStorage.setItem('userName', 'admin');
    localStorage.setItem('password', 'admin');
    localStorage.setItem('loginStatus', 'false');
    let username = document.querySelector('#username');
    let pass = document.querySelector('#password');
    if ((username.value === localStorage.getItem('userName')) && (pass.value === localStorage.getItem('password'))) {
        localStorage.setItem('loginStatus', 'true');
        alert('successfully logged in!');
        loginBTN.innerHTML = 'LOGOUT';
        location.reload();
    } else {
        alert('Incorrect credentials! Login failed!');
        username.value = '';
        pass.value = '';
    }
};

//function to check login status
let loginStatus = localStorage.getItem('loginStatus');
const checkLogin = () => {
    if (!loginStatus || loginStatus === 'false') {
        localStorage.clear();
        loginBTN.innerHTML = 'LOGIN';
        loginBTN.dataset.target = '#loginModal';
    } else if (loginStatus === 'true') {
        loginBTN.innerHTML = `LOGOUT`;
        loginBTN.dataset.target = '';
    }
}

checkLogin();