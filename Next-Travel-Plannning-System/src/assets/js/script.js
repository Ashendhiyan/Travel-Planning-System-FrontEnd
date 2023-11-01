let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');


window.onscroll =()=>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    signupForm.classList.remove('active');
}

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click',()=>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});


/* sign up*/

let formBtn2 = document.querySelector('#signup-btn');
let signupForm = document.querySelector('.signup-container');
let signFormClose = document.querySelector('#signUpForm-close');

formBtn2.addEventListener('click',()=>{
    signupForm.classList.add('active');
});

signFormClose.addEventListener('click',()=>{
    signupForm.classList.remove('active');
});



/*chang profile pic*/
document.addEventListener("change", function (event) {
    if (event.target.classList.contains("uploadProfileInput")) {
        var triggerInput = event.target;
        var currentImg = triggerInput.closest(".pic-holder").querySelector(".pic")
            .src;
        var holder = triggerInput.closest(".pic-holder");
        var wrapper = triggerInput.closest(".profile-pic-wrapper");

        var alerts = wrapper.querySelectorAll('[role="alert"]');
        alerts.forEach(function (alert) {
            alert.remove();
        });

        triggerInput.blur();
        var files = triggerInput.files || [];
        if (!files.length || !window.FileReader) {
            return;
        }

        if (/^image/.test(files[0].type)) {
            var reader = new FileReader();
            reader.readAsDataURL(files[0]);

            reader.onloadend = function () {
                holder.classList.add("uploadInProgress");
                holder.querySelector(".pic").src = this.result;

                var loader = document.createElement("div");
                loader.classList.add("upload-loader");
                loader.innerHTML =
                    '<div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div>';
                holder.appendChild(loader);

                setTimeout(function () {
                    holder.classList.remove("uploadInProgress");
                    loader.remove();

                    var random = Math.random();
                    if (random < 0.9) {
                        wrapper.innerHTML +=
                            '<div class="snackbar show" role="alert"><i class="fa fa-check-circle text-success"></i> Profile image updated successfully</div>';
                        triggerInput.value = "";
                        setTimeout(function () {
                            wrapper.querySelector('[role="alert"]').remove();
                        }, 3000);
                    } else {
                        holder.querySelector(".pic").src = currentImg;
                        wrapper.innerHTML +=
                            '<div class="snackbar show" role="alert"><i class="fa fa-times-circle text-danger"></i> There is an error while uploading! Please try again later.</div>';
                        triggerInput.value = "";
                        setTimeout(function () {
                            wrapper.querySelector('[role="alert"]').remove();
                        }, 3000);
                    }
                }, 1500);
            };
        } else {
            wrapper.innerHTML +=
                '<div class="alert alert-danger d-inline-block p-2 small" role="alert">Please choose a valid image.</div>';
            setTimeout(function () {
                var invalidAlert = wrapper.querySelector('[role="alert"]');
                if (invalidAlert) {
                    invalidAlert.remove();
                }
            }, 3000);
        }
    }
});
