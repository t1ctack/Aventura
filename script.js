const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
        
        atual.classList.remove('ativo');
        
        const proximoElemento = document.getElementById(proximoPasso);
        
        if (proximoPasso === 'passo-6' || proximoPasso === 'passo-7') {
            proximoElemento.style.display = 'block';
        } else {
            proximoElemento.classList.add('ativo');
        }
    });
});
