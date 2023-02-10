
const inputs = document.querySelectorAll('.campo')

const btnEnviar = document.querySelector('.btn-enviar')

btnEnviar.addEventListener('click', () => {
    inputs.forEach(item => {
        if (item.value === '') {
            item.classList.remove('preenchido')
            item.classList.add('vazio')
        } else {
            item.classList.remove('vazio')
            item.classList.add('preenchido')
        }
    });
})
