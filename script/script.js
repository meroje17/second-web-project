let switchButton = document.querySelector('#checkbox');

let elements = [];

elements.push(...document.querySelectorAll('.monthly'));
elements.push(...document.querySelectorAll('.annually'));
elements.push(...document.querySelectorAll('.options a'));
elements.push(...document.querySelectorAll('.options'));
elements.push(...document.querySelectorAll('h3'));
elements.push(...document.querySelectorAll('.options:nth-child(1) p'));
elements.push(...document.querySelectorAll('.options:nth-child(2) p'));
elements.push(...document.querySelectorAll('.options:nth-child(3) p'));

switchButton.addEventListener('click', function() {
    let slider = switchButton.querySelector('#slider');
    slider.classList.toggle('selected');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle('selected');
    }
});