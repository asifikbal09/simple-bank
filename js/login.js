document.getElementById('submit-btn').addEventListener('click', function () {
    //    get email from input box
    const emailBox = document.getElementById('user-email')
    const email = emailBox.value;
    //    get password from input box
    const passwordBox = document.getElementById('user-password')
    const password = passwordBox.value;

    // NOTE: WE NEVER USE THIS METHOD 
    if (email === 'naanziba@gmail.com' && password === 'naanziba') {
        window.location.href = 'bank.html'
    }
    else {
        alert('Incorrect email or password')
    }

})
