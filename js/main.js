document.querySelector('.notebook-frame').addEventListener('load', function() {
    document.querySelector('.loading-state').style.display = 'none';
});

document.querySelector('.notebook-frame').addEventListener('error', function() {
    document.querySelector('.loading-state').style.display = 'flex';
    document.querySelector('.loading-text').textContent = 'Error al cargar el notebook';
});