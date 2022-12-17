class Popup {
    constructor(listId) {
        this.listId = listId;
    }

    init() {
        this.listId.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const id_popup = e.target?.getAttribute('id')
                const popup = document.querySelector(`.popup#${id_popup}`)

                this.open(popup)
            })
        })
        close_popupsCards.forEach((closeBtn) => {
            closeBtn.addEventListener('click', (e) => {
                const popup = e.target?.closest('.popup')

                this.close(popup)
            })
        })
    }

    open(popup) {
        popup.classList.add('activePopup')
        document.body.style.overflowY = 'hidden'
        popup_fon.style.display = 'block'
    }

    close(popup) {
        popup.classList.remove('activePopup')
        document.body.style.overflowY = 'auto'
        popup_fon.style.display = 'none'

        resetSendForm(popup, true)
    }
}

const id_popupsCards = document.querySelectorAll('.cardInstructor__button')
const id_popupForm = document.querySelectorAll('.QandA__popularQuestions__button')

const popup_fon = document.querySelector('.popup-fon')
const close_popupsCards = document.querySelectorAll('.popup-close')


const popupCardsInst = new Popup(id_popupsCards)
popupCardsInst.init()

const popupForm = new Popup(id_popupForm)
popupForm.init()

popup_fon.addEventListener('click', (e) => {
    const popup = document.querySelector('.popup.activePopup')
    popup.classList.remove('activePopup')
    document.body.style.overflowY = 'auto'
    popup_fon.style.display = 'none'

    resetSendForm(popup, true)
})

const sendFormBtn = document.querySelector('.popupForm__button');


sendFormBtn.addEventListener('click', (e) => {
    e.preventDefault()
    resetSendForm(document.querySelector('.popupForm'), false)
})

const resetSendForm = (popup, turn) => {
    if (!popup.classList.contains('popupForm')) return

    const popupFormWrapper = popup.querySelector('.popupForm__wrapper');
    const afterSendForm = popup.querySelector('.popupForm__afterSendForm');
    popupFormWrapper.style.display = (turn) ? 'block' : 'none'
    afterSendForm.style.display = (turn) ? 'none' : 'flex'
}
