
const inputs = document.querySelectorAll('.campo')

const btnEnviar = document.querySelector('.btn-enviar')

const campoTelefone = document.getElementById('telefone')

campoTelefone.addEventListener('keypress', (event) =>{   
    if(event.key > '9' || event.key < '0'){
        event.preventDefault()
    }
})


btnEnviar.addEventListener('click', (event) => {
    inputs.forEach(item => {       
        const itemId = item.id
        const Label = document.querySelector(`.${itemId}`)
        
        if (item.value === '') {
            event.preventDefault()
            Label.classList.add('mostrar')
            item.classList.remove('preenchido')
            item.classList.add('vazio')
               
        }else{
            Label.classList.remove('mostrar')
            item.classList.remove('vazio')
            item.classList.add('preenchido')
        }

    });
})