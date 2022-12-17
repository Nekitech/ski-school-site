const id_popupsCards = document.querySelectorAll('.cardInstructor__button')
const popup_fon = document.querySelector('.popup-fon')
const close_popupsCards = document.querySelectorAll('.popup-close')
id_popupsCards.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const id = e.target?.getAttribute('id')
        const popup = document.querySelector(`.popup#${id}`)

        popup.classList.add('activePopup')
        document.body.style.overflow = 'hidden'
        popup_fon.style.display = 'block'
    })
})
close_popupsCards.forEach((closeBtn) => {
    closeBtn.addEventListener('click', (e) => {
        const popup = e.target?.closest('.popup')
        popup.classList.remove('activePopup')
        document.body.style.overflow = 'auto'
        popup_fon.style.display = 'none'
    })
})
