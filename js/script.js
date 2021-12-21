let bars = document.querySelector('.bars');
let aside = document.querySelector('.right');
let main = document.querySelector('.left');

bars.onclick = function() {
    aside.classList.toggle('small');
    main.classList.toggle('big');
}