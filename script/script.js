let switchButton = document.querySelector('#checkbox');
let monthly = document.querySelectorAll('.monthly');
let annually = document.querySelectorAll('.annually');
let buttons = document.querySelectorAll('.options a');
let options = document.querySelectorAll('.options');

let title3 = document.querySelectorAll('h3');
let title2 = document.querySelectorAll('h2');
let paragraphs1 = document.querySelectorAll('.options:nth-child(1) p');
let paragraphs2 = document.querySelectorAll('.options:nth-child(2) p');
let paragraphs3 = document.querySelectorAll('.options:nth-child(3) p');

switchButton.addEventListener('click', function() {
    let slider = switchButton.querySelector('#slider');
    slider.classList.toggle('selected');
    for (var i = 0; i < 3; i++) {
        monthly[i].classList.toggle('selected');
        annually[i].classList.toggle('selected');
        buttons[i].classList.toggle('selected');
        options[i].classList.toggle('selected');
        title3[i].classList.toggle('selected');
        paragraphs1[i].classList.toggle('selected');
        paragraphs2[i].classList.toggle('selected');
        paragraphs3[i].classList.toggle('selected');
    }
});