let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});


//for signup button 
function signupfunction() {
    const name = document.getElementById('name').value
    const email = document.getElementById('signup-email').value
    const password = document.getElementById('signup-password').value
    const confirmpassword = document.getElementById('confirm-password').value
    console.log(password + '=' + confirmpassword)
    if (password === confirmpassword) {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', `./socialmedia/signup?username=${name}&email=${email}&password=${password}`, true)
        xhr.onload = function() {
            const data = JSON.parse(this.response)
            console.log(data)
            if (data.messeage === 'registration successfully') {
                alert(data.message)
            } else {
                alert(data.message)
            }
        }
        xhr.send()
    } else {
        alert('Check your password')
    }
}


// for login button

function loginfunction() {
    const loginemail = document.getElementById('signin-email')
    const loginpassword = document.getElementById('signin-password')

    if (loginpassword.value !== '' && loginemail.value !== '') {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', `./socialmedia/login?email=${loginemail.value}&password=${loginpassword.value}`)
        xhr.onload = function() {
            const data = JSON.parse(this.response)
            console.log(data)
            localStorage.setItem('token', data.token)
            console.log('token:' + localStorage.getItem('token'));
            alert(data.message)
            document.getElementById('homepage').click()
        }
        xhr.send()
    } else {
        loginemail.placeholder = "Require Feild"
        loginpassword.placeholder = "Require Feild"
    }
}