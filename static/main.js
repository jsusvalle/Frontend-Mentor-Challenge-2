const checkbox = document.querySelector('#checkbox');

checkbox.addEventListener('change', function(evt) {
    document.body.classList.toggle('is-dark-mode');
});
