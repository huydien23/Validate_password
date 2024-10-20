var input = document.querySelector('.form-input input');
var eye = document.querySelector('.form-input i');
var lowerCase = document.querySelector('.lowercase');
var upperCase = document.querySelector('.uppercase');
var number = document.querySelector('.number');
var special = document.querySelector('.special');
var length = document.querySelector('.length');

eye.addEventListener('click', function() {
    input.getAttribute('type') === 'text' ? input.setAttribute('type', 'password') : input.setAttribute('type', 'text');
});


input.addEventListener('input', function() {
    var val = this.value;
    /[a-z]/.test(val) ? lowerCase.classList.add('valid') : lowerCase.classList.remove('valid');
    /[A-Z]/.test(val) ? upperCase.classList.add('valid') : upperCase.classList.remove('valid');
    /[0-9]/.test(val) ? number.classList.add('valid') : number.classList.remove('valid');
    /[^A-Za-z0-9]/.test(val) ? special.classList.add('valid') : special.classList.remove('valid');
    val.length >= 8 ? length.classList.add('valid') : length.classList.remove('valid');
});
