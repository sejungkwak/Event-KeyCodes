document.querySelector('.result-container').style.display = 'none';


document.querySelector('body').addEventListener('keydown', (e) => {
    document.querySelector('.main-container').style.display = 'none';
    document.querySelector('.result-container').style.display = 'flex';
    document.querySelector('.event-key').innerHTML = e.key;
    document.querySelector('.event-keyCode').innerHTML = e.keyCode;
    document.querySelector('.event-code').innerHTML = e.code;
})