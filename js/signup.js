const button = document.querySelector('.registerbtn');
// const form = document.querySelector('.sign');

const firstname = document.getElementById('first_name');
const lastname = document.getElementById('last_name');
const username = document.getElementById('user_name');
const email = document.getElementById('email');
const password = document.getElementById('psw');
const status = document.getElementById('status');

function check() {
    let tmp = true;
    if (password.value < 5) {
        password.value = '';
        password.placeholder = 'Input increase password(at least to 5 characters) ';
        password.classList.add('red');
        tmp = false;
    }

    if (username.value < 4) {
        username.value = '';
        username.placeholder = 'Input increase username(at least to 4 characters) ';
        username.classList.add('red');
        tmp = false;
    }

    if (firstname.value === '') {
        firstname.value = '';
        firstname.placeholder = 'Input first name';
        firstname.classList.add('red');
        tmp = false;
    }

    if (lastname.value === '') {
        lastname.value = '';
        lastname.placeholder = 'Input last name';
        lastname.classList.add('red');
        tmp = false;
    }
    return tmp;
}

function signupUser(body) {
    return fetch('http://127.0.0.1:5000/user', {
        mode: 'no-cors',
        method: 'POST',
        body: JSON.stringify(body),
        headers: new Headers({
            'content-type': 'application/json',
        }),
    });
}

function buttonHandler(event) {
    if (check()) {
        event.preventDefault();

        const entry = {
            first_name: firstname.value,
            last_name: lastname.value,
            user_name: username.value,
            email: email.value,
            password: password.value,
            status: status.value,
        };

        signupUser(entry)
            .then((response) => {
                if (response.status === 200) {
                    window.location.replace('index_.html');
                    return response.json();
                }
                throw response.status;
            })

            .catch((error) => {
                console.log(error);
                if (error === 401) {
                    alert('Such user already exists');
                }
            });
    }
}

button.addEventListener('click', buttonHandler);
