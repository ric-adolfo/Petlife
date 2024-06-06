const duvida = document.querySelectorAll('.duvida')

duvida.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
})