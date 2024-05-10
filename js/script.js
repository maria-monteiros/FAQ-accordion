const perguntas = document.querySelectorAll('.faq')

perguntas.forEach(faq => {
    const resposta = faq.querySelector('.resposta')
    const changeIcon = faq.querySelector('.icon')

    faq.addEventListener('click', () => {
        faq.classList.toggle('aberto')

        if (faq.classList.contains('aberto')) {
            resposta.style.display = 'block'
            changeIcon.src = "images/icon-minus.svg"
        } else {
            resposta.style.display = 'none'
            changeIcon.src = "images/icon-plus.svg"
        }
    })
})

