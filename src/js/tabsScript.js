const tabs = document.querySelector('.tabs')
const listTabs = document.querySelectorAll('.tabs__item')
tabs.addEventListener('click', (e) => {
    console.log(e.target)
    if(!e.target.classList.contains('tabs__item')) return
    // listTabs.forEach((tab) => {
    //     tab.classList.remove('activeTab')
    //     tab.querySelector('.tabs__item__cross')
    //         ?.classList.remove('activeCross')
    // })
    e.target.classList.toggle('activeTab')

    const currCross = e.target?.querySelector('.tabs__item__cross')
    currCross?.classList.toggle('activeCross')

})
