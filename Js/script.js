const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    const apagada = document.getElementsByClassName('container')[0]


    if(apagada.classList.contains('lampada_acesa')){
        apagada.classList.remove('lampada_acesa')
        btn.textContent = 'Ascender'
    } else {
        apagada.classList.add('lampada_acesa')
        btn.textContent = 'Apagar'
    }




})

