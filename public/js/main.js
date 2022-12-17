"use strict";

/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/
(function () {
  // webpackBootstrap
  /******/
  var __webpack_modules__ = {
    /***/"./lib/slider-tech/sliderCreate.js":
    /*!*****************************************!*\
      !*** ./lib/slider-tech/sliderCreate.js ***!
      \*****************************************/
    /***/
    function libSliderTechSliderCreateJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SliderTech\": function() { return /* binding */ SliderTech; }\n/* harmony export */ });\nclass SliderTech {\r\n    constructor(rootElement, config = {}) {\r\n        this.root = document.querySelector(`${rootElement}`)\r\n        this.config = {\r\n            speed: '.4',\r\n            slidersView: 1,\r\n            centralSlider: false,\r\n            ...config\r\n        }\r\n    }\r\n\r\n    clear() {\r\n        this.root = null;\r\n    }\r\n\r\n    autoPlay() {\r\n        this.timer = setInterval(() => {\r\n            this.moveNext()\r\n        }, this.config.timeout * 1000)\r\n        this.root.addEventListener('mouseenter', () => {\r\n            clearInterval(this.timer)\r\n            if (this.counter == this.itemsSlider.length - 1) clearTimeout(this.timerLastItem)\r\n\r\n        })\r\n        this.root.addEventListener('mouseleave', () => {\r\n            this.timer = setInterval(() => {\r\n                this.moveNext()\r\n            }, this.config.timeout * 1000)\r\n\r\n            if (this.counter == this.itemsSlider.length - 1) {\r\n                this.timerLastItem = setTimeout(() => {\r\n                    this.autoplayRestart()\r\n                }, this.config.timeout * 1000)\r\n            }\r\n        })\r\n    }\r\n\r\n    moveNext() {\r\n        if (this.x - this.shiftX < -this.shiftX * (this.itemsSlider.length - this.config.slidersView)) return\r\n        this.counter += 1;\r\n        this.x -= this.shiftX\r\n        this.track.style.transform = `translateX(${this.x}px)`;\r\n        this.checkActiveSlider()\r\n        this.setActiveAutoplayDots()\r\n\r\n        if (this.counter === this.itemsSlider.length - 1) {\r\n            this.timerLastItem = setTimeout(() => {\r\n                this.autoplayRestart()\r\n            }, this.config.timeout * 1000)\r\n        }\r\n    }\r\n\r\n    autoplayRestart() {\r\n        new Promise((resolve, reject) => {\r\n            setTimeout(() => {\r\n                this.track.style.transition = `none`\r\n                this.track.style.transform = `translateX(${0}px)`;\r\n                resolve()\r\n            }, this.config.timeout * 1000)\r\n        }).then(() => {\r\n            setTimeout(() => {\r\n                this.track.style.transition = `${this.config.speed}s ease-in-out`\r\n\r\n            }, 100)\r\n        }).then(() => {\r\n            this.counter = 0;\r\n            this.x = 0;\r\n            this.checkActiveSlider()\r\n            this.setActiveAutoplayDots()\r\n        }).catch(err => console.log(err))\r\n    }\r\n\r\n    movePrev() {\r\n        if (this.x + this.shiftX > 0) return\r\n        this.counter -= 1;\r\n        this.x += this.shiftX\r\n        this.track.style.transform = `translateX(${this.x}px)`;\r\n        this.checkActiveSlider()\r\n        this.setActiveAutoplayDots()\r\n    }\r\n\r\n    setActiveAutoplayDots() {\r\n        const dotsList = Array.from(this.dots.children)\r\n        dotsList.forEach(dot => {\r\n            dot.classList.remove('activeDot')\r\n        })\r\n        dotsList[this.counter].classList.add('activeDot')\r\n    }\r\n\r\n    checkCounter() {\r\n        if (this.counter === this.itemsSlider.length - 1) {\r\n            this.arrowNext?.classList.remove('activeBtn')\r\n            this.arrowPrev?.classList.add('activeBtn')\r\n            this.nextBtn.disabled = true\r\n\r\n        }\r\n        if (this.prevBtn.disabled) {\r\n            this.prevBtn.disabled = false\r\n        }\r\n        if (this.counter === 0) {\r\n            this.arrowNext?.classList.add('activeBtn')\r\n            this.arrowPrev?.classList.remove('activeBtn')\r\n            this.prevBtn.disabled = true\r\n        }\r\n        if (this.nextBtn.disabled) {\r\n            this.nextBtn.disabled = false\r\n        }\r\n    }\r\n\r\n    checkActiveSlider = () => {\r\n        this.itemsSlider?.forEach((slider) => {\r\n            if (slider.classList.contains('activeSlider')) {\r\n                slider.classList.remove('activeSlider')\r\n            }\r\n        })\r\n        this.itemsSlider[this.counter]?.classList.add('activeSlider')\r\n    }\r\n\r\n    initSlider() {\r\n        this.x = 0;\r\n        this.counter = 0;\r\n\r\n        this.track = this.root?.querySelector('.trackSlider');\r\n        this.wrapper = this.root?.querySelector('.wrapperSlider');\r\n        this.itemsSlider = this.root?.querySelectorAll('.elementSlider')\r\n        this.nav = this.root?.querySelector('.navigationSlider')\r\n\r\n        this.prevBtn = this.nav?.querySelector('.prevBtn')\r\n        this.nextBtn = this.nav?.querySelector('.nextBtn')\r\n\r\n        this.arrowPrev = this?.prevBtn?.querySelector('.arrowBtnPrev')\r\n        this.arrowNext = this?.nextBtn?.querySelector('.arrowBtnNext')\r\n\r\n        this.arrowNext?.classList.add('activeBtn')\r\n        this.dots = this.root?.querySelector('.dotsSlider')\r\n\r\n        if (this.itemsSlider) {\r\n            this.shiftX = this.itemsSlider[0]?.clientWidth;\r\n            this.itemsSlider[0]?.classList.add('activeSlider')\r\n            this.wrapper.style.width = this.itemsSlider[0]?.clientWidth * this.config.slidersView + 'px';\r\n\r\n            if (this.config.counter) {\r\n                this.itemsSlider.forEach((item, index) => {\r\n                    const numSlider = item.querySelector('.guide__counter')\r\n                    numSlider.innerHTML = (index + 1 > 9) ? index + 1 : '0' + (index + 1);\r\n                });\r\n            }\r\n        }\r\n        if (this.track) this.track.style.transition = `${this.config.speed}s ease-in-out`\r\n\r\n        if (this.config.autoplay) this.autoPlay()\r\n\r\n\r\n        if (this.config.dots) {\r\n            for (let i = 0; i < this.itemsSlider.length; i++) {\r\n                const dot = document.createElement('div')\r\n                dot.classList.add('dot')\r\n                this.dots.append(dot)\r\n            }\r\n            this.dots.children[0].classList.add('activeDot')\r\n            this.dots.addEventListener('click', (e) => {\r\n                if (e.target.classList.contains('dot')) {\r\n                    this.dots.querySelectorAll('.dot').forEach((dot, index) => {\r\n                        dot.classList.remove('activeDot')\r\n                        if (e.target === dot) {\r\n                            this.counter = index\r\n                            this.x = -this.shiftX * this.counter\r\n                            this.track.style.transform = `translateX(${this.x}px)`\r\n                            this.itemsSlider.forEach(item => item.classList.remove('activeSlider'))\r\n                            this.itemsSlider[this.counter].classList.add('activeSlider')\r\n                        }\r\n                    })\r\n                    e.target.classList.add('activeDot')\r\n                    clearTimeout(this.timerLastItem)\r\n                }\r\n            })\r\n        }\r\n\r\n\r\n        if (this.prevBtn && this.nextBtn) {\r\n            this.prevBtn.onclick = () => {\r\n                this.movePrev(this.counter)\r\n                this.checkCounter()\r\n            }\r\n\r\n            this.nextBtn.onclick = () => {\r\n                this.moveNext(this.counter)\r\n                this.checkCounter()\r\n\r\n            }\r\n        }\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://project-hexagon/./lib/slider-tech/sliderCreate.js?");

      /***/
    },

    /***/"./src/js/popup.js":
    /*!*************************!*\
      !*** ./src/js/popup.js ***!
      \*************************/
    /***/
    function srcJsPopupJs() {
      eval("class Popup {\r\n    constructor(listId) {\r\n        this.listId = listId;\r\n    }\r\n\r\n    init() {\r\n        this.listId.forEach((btn) => {\r\n            btn.addEventListener('click', (e) => {\r\n                const id_popup = e.target?.getAttribute('id')\r\n                const popup = document.querySelector(`.popup#${id_popup}`)\r\n\r\n                this.open(popup)\r\n            })\r\n        })\r\n        close_popupsCards.forEach((closeBtn) => {\r\n            closeBtn.addEventListener('click', (e) => {\r\n                const popup = e.target?.closest('.popup')\r\n\r\n                this.close(popup)\r\n            })\r\n        })\r\n    }\r\n\r\n    open(popup) {\r\n        popup.classList.add('activePopup')\r\n        document.body.style.overflowY = 'hidden'\r\n        popup_fon.style.display = 'block'\r\n    }\r\n\r\n    close(popup) {\r\n        popup.classList.remove('activePopup')\r\n        document.body.style.overflowY = 'auto'\r\n        popup_fon.style.display = 'none'\r\n\r\n        resetSendForm(popup, true)\r\n    }\r\n}\r\n\r\nconst id_popupsCards = document.querySelectorAll('.cardInstructor__button')\r\nconst id_popupForm = document.querySelectorAll('.QandA__popularQuestions__button')\r\n\r\nconst popup_fon = document.querySelector('.popup-fon')\r\nconst close_popupsCards = document.querySelectorAll('.popup-close')\r\n\r\n\r\nconst popupCardsInst = new Popup(id_popupsCards)\r\npopupCardsInst.init()\r\n\r\nconst popupForm = new Popup(id_popupForm)\r\npopupForm.init()\r\n\r\npopup_fon.addEventListener('click', (e) => {\r\n    const popup = document.querySelector('.popup.activePopup')\r\n    popup.classList.remove('activePopup')\r\n    document.body.style.overflowY = 'auto'\r\n    popup_fon.style.display = 'none'\r\n\r\n    resetSendForm(popup, true)\r\n})\r\n\r\nconst sendFormBtn = document.querySelector('.popupForm__button');\r\n\r\n\r\nsendFormBtn.addEventListener('click', (e) => {\r\n    e.preventDefault()\r\n    resetSendForm(document.querySelector('.popupForm'), false)\r\n})\r\n\r\nconst resetSendForm = (popup, turn) => {\r\n    if (!popup.classList.contains('popupForm')) return\r\n\r\n    const popupFormWrapper = popup.querySelector('.popupForm__wrapper');\r\n    const afterSendForm = popup.querySelector('.popupForm__afterSendForm');\r\n    popupFormWrapper.style.display = (turn) ? 'block' : 'none'\r\n    afterSendForm.style.display = (turn) ? 'none' : 'flex'\r\n}\r\n\n\n//# sourceURL=webpack://project-hexagon/./src/js/popup.js?");

      /***/
    },

    /***/"./src/js/slider.js":
    /*!**************************!*\
      !*** ./src/js/slider.js ***!
      \**************************/
    /***/
    function srcJsSliderJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_slider_tech_sliderCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/slider-tech/sliderCreate.js */ \"./lib/slider-tech/sliderCreate.js\");\n\r\n\r\nconst sliderReview = new _lib_slider_tech_sliderCreate_js__WEBPACK_IMPORTED_MODULE_0__.SliderTech('.slider', {\r\n    slidersView: 1,\r\n    speed: 0.6,\r\n    counter: false,\r\n    dots: true,\r\n    autoplay: false,\r\n    timeout: 2,\r\n})\r\nsliderReview.initSlider()\r\n\n\n//# sourceURL=webpack://project-hexagon/./src/js/slider.js?");

      /***/
    },

    /***/"./src/js/tabsScript.js":
    /*!******************************!*\
      !*** ./src/js/tabsScript.js ***!
      \******************************/
    /***/
    function srcJsTabsScriptJs() {
      eval("const tabs = document.querySelector('.tabs')\r\n// const listTabs = document.querySelectorAll('.tabs__item')\r\ntabs.addEventListener('click', (e) => {\r\n    console.log(e.target)\r\n    if(!e.target?.classList.contains('tabs__item')) return\r\n    // listTabs.forEach((tab) => {\r\n    //     tab.classList.remove('activeTab')\r\n    //     tab.querySelector('.tabs__item__cross')\r\n    //         ?.classList.remove('activeCross')\r\n    // })\r\n    e.target?.classList.toggle('activeTab')\r\n\r\n    const currCross = e.target?.querySelector('.tabs__item__cross')\r\n    currCross?.classList.toggle('activeCross')\r\n\r\n})\r\n\n\n//# sourceURL=webpack://project-hexagon/./src/js/tabsScript.js?");

      /***/
    }

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/
  var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/
  function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/var cachedModule = __webpack_module_cache__[moduleId];
    /******/
    if (cachedModule !== undefined) {
      /******/return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = __webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/
  !function () {
    /******/ // define getter functions for harmony exports
    /******/__webpack_require__.d = function (exports, definition) {
      /******/for (var key in definition) {
        /******/if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  }();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  !function () {
    /******/__webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/
  }();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/
  !function () {
    /******/ // define __esModule on exports
    /******/__webpack_require__.r = function (exports) {
      /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/
  }();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/
  __webpack_require__("./src/js/popup.js");
  /******/
  __webpack_require__("./src/js/slider.js");
  /******/
  var __webpack_exports__ = __webpack_require__("./src/js/tabsScript.js");
  /******/
  /******/
})();