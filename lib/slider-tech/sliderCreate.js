export class SliderTech {
    constructor(rootElement, config = {}) {
        this.root = document.querySelector(`${rootElement}`)
        this.config = {
            speed: '.4',
            slidersView: 1,
            centralSlider: false,
            ...config
        }
    }

    clear() {
        this.root = null;
    }

    autoPlay() {
        this.timer = setInterval(() => {
            this.moveNext()
        }, this.config.timeout * 1000)
        this.root.addEventListener('mouseenter', () => {
            clearInterval(this.timer)
            if (this.counter == this.itemsSlider.length - 1) clearTimeout(this.timerLastItem)

        })
        this.root.addEventListener('mouseleave', () => {
            this.timer = setInterval(() => {
                this.moveNext()
            }, this.config.timeout * 1000)

            if (this.counter == this.itemsSlider.length - 1) {
                this.timerLastItem = setTimeout(() => {
                    this.autoplayRestart()
                }, this.config.timeout * 1000)
            }
        })
    }

    moveNext() {
        if (this.x - this.shiftX < -this.shiftX * (this.itemsSlider.length - this.config.slidersView)) return
        this.counter += 1;
        this.x -= this.shiftX
        this.track.style.transform = `translateX(${this.x}px)`;
        this.checkActiveSlider()
        this.setActiveAutoplayDots()

        if (this.counter === this.itemsSlider.length - 1) {
            this.timerLastItem = setTimeout(() => {
                this.autoplayRestart()
            }, this.config.timeout * 1000)
        }
    }

    autoplayRestart() {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                this.track.style.transition = `none`
                this.track.style.transform = `translateX(${0}px)`;
                resolve()
            }, this.config.timeout * 1000)
        }).then(() => {
            setTimeout(() => {
                this.track.style.transition = `${this.config.speed}s ease-in-out`

            }, 100)
        }).then(() => {
            this.counter = 0;
            this.x = 0;
            this.checkActiveSlider()
            this.setActiveAutoplayDots()
        }).catch(err => console.log(err))
    }
    sliderRestart() {
        console.log('click')
        this.counter = 0;
        this.x = 0;
        this.track.style.transform = `translateX(${this.x}px)`;
        this.checkActiveSlider()
        this.setActiveAutoplayDots()
    }

    movePrev() {
        if (this.x + this.shiftX > 0) return
        this.counter -= 1;
        this.x += this.shiftX
        this.track.style.transform = `translateX(${this.x}px)`;
        this.checkActiveSlider()
        this.setActiveAutoplayDots()
    }

    setActiveAutoplayDots() {
        const dotsList = Array.from(this.dots.children)
        dotsList.forEach(dot => {
            dot.classList.remove('activeDot')
        })
        dotsList[this.counter].classList.add('activeDot')
    }

    checkCounter() {
        if (this.counter === this.itemsSlider.length - 1) {
            this.arrowNext?.classList.remove('activeBtn')
            this.arrowPrev?.classList.add('activeBtn')
            this.nextBtn.disabled = true

        }
        if (this.prevBtn.disabled) {
            this.prevBtn.disabled = false
        }
        if (this.counter === 0) {
            this.arrowNext?.classList.add('activeBtn')
            this.arrowPrev?.classList.remove('activeBtn')
            this.prevBtn.disabled = true
        }
        if (this.nextBtn.disabled) {
            this.nextBtn.disabled = false
        }
    }

    checkActiveSlider = () => {
        this.itemsSlider?.forEach((slider) => {
            if (slider.classList.contains('activeSlider')) {
                slider.classList.remove('activeSlider')
            }
        })
        this.itemsSlider[this.counter]?.classList.add('activeSlider')
    }
    checkResizeMobile() {
        if(window.innerWidth !== this.widthWindow) {
            this.widthWindow = window.innerWidth
            return false
        }
        else return true
    }

    initSlider() {
        this.x = 0;
        this.counter = 0;
        this.widthWindow = window.innerWidth

        this.track = this.root?.querySelector('.trackSlider');
        this.wrapper = this.root?.querySelector('.wrapperSlider');
        this.itemsSlider = this.root?.querySelectorAll('.elementSlider')
        this.nav = this.root?.querySelector('.navigationSlider')

        this.prevBtn = this.nav?.querySelector('.prevBtn')
        this.nextBtn = this.nav?.querySelector('.nextBtn')

        this.arrowPrev = this?.prevBtn?.querySelector('.arrowBtnPrev')
        this.arrowNext = this?.nextBtn?.querySelector('.arrowBtnNext')

        this.arrowNext?.classList.add('activeBtn')
        this.dots = this.root?.querySelector('.dotsSlider')

        if (this.itemsSlider) {
            this.shiftX = this.itemsSlider[0]?.clientWidth;
            this.itemsSlider[0]?.classList.add('activeSlider')
            // this.wrapper.style.width = this.itemsSlider[0]?.clientWidth * this.config.slidersView + 'px';

            if (this.config.counter) {
                this.itemsSlider.forEach((item, index) => {
                    const numSlider = item.querySelector('.guide__counter')
                    numSlider.innerHTML = (index + 1 > 9) ? index + 1 : '0' + (index + 1);
                });
            }
        }

        this.resizeSlider = window.addEventListener('resize', () => {
            if(this.config.autoplay) {
                this.sliderRestart()
            }
            this.shiftX = this.itemsSlider[0]?.clientWidth;
        })

        if(!this.checkResizeMobile()) window.removeEventListener('resize', this.resizeSlider)


        if (this.track) this.track.style.transition = `${this.config.speed}s ease-in-out`

        if (this.config.autoplay) this.autoPlay()


        if (this.config.dots) {
            for (let i = 0; i < this.itemsSlider.length; i++) {
                const dot = document.createElement('div')
                dot.classList.add('dot')
                this.dots.append(dot)
            }
            this.dots.children[0].classList.add('activeDot')
            this.dots.addEventListener('click', (e) => {
                if (e.target.classList.contains('dot')) {
                    this.dots.querySelectorAll('.dot').forEach((dot, index) => {
                        dot.classList.remove('activeDot')
                        if (e.target === dot) {
                            this.counter = index
                            this.x = -this.shiftX * this.counter
                            this.track.style.transform = `translateX(${this.x}px)`
                            this.itemsSlider.forEach(item => item.classList.remove('activeSlider'))
                            this.itemsSlider[this.counter].classList.add('activeSlider')
                        }
                    })
                    e.target.classList.add('activeDot')
                    clearTimeout(this.timerLastItem)
                }
            })
        }


        if (this.prevBtn && this.nextBtn) {
            this.prevBtn.onclick = () => {
                this.movePrev(this.counter)
                this.checkCounter()
            }

            this.nextBtn.onclick = () => {
                this.moveNext(this.counter)
                this.checkCounter()

            }
        }
    }

}
