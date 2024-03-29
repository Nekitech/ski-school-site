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

      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SliderTech\": function() { return /* binding */ SliderTech; }\n/* harmony export */ });\nclass SliderTech {\r\n    constructor(rootElement, config = {}) {\r\n        this.root = document.querySelector(`${rootElement}`)\r\n        this.config = {\r\n            speed: '.4',\r\n            slidersView: 1,\r\n            centralSlider: false,\r\n            ...config\r\n        }\r\n    }\r\n\r\n    clear() {\r\n        this.root = null;\r\n    }\r\n\r\n    autoPlay() {\r\n        this.timer = setInterval(() => {\r\n            this.moveNext()\r\n        }, this.config.timeout * 1000)\r\n        this.autoplayHandler('mouseenter', 'mouseleave')\r\n        this.autoplayHandler('touchstart', 'touchend')\r\n    }\r\n    autoplayHandler(eEnter, eLeave) {\r\n        this.root.addEventListener(eEnter, () => {\r\n            clearInterval(this.timer)\r\n            if (this.counter == this.itemsSlider.length - 1) clearTimeout(this.timerLastItem)\r\n\r\n        })\r\n        this.root.addEventListener(eLeave, () => {\r\n            this.timer = setInterval(() => {\r\n                this.moveNext()\r\n            }, this.config.timeout * 1000)\r\n\r\n            if (this.counter == this.itemsSlider.length - 1) {\r\n                this.timerLastItem = setTimeout(() => {\r\n                    this.autoplayRestart()\r\n                }, this.config.timeout * 1000)\r\n            }\r\n        })\r\n    }\r\n\r\n    moveNext() {\r\n        if (this.x - this.shiftX < -this.shiftX * (this.itemsSlider.length - this.config.slidersView)) return\r\n        this.counter += 1;\r\n        this.x -= this.shiftX\r\n        this.track.style.transform = `translateX(${this.x}px)`;\r\n        this.checkActiveSlider()\r\n        this.setActiveAutoplayDots()\r\n\r\n        if (this.counter === this.itemsSlider.length - 1) {\r\n            this.timerLastItem = setTimeout(() => {\r\n                this.autoplayRestart()\r\n            }, this.config.timeout * 1000)\r\n        }\r\n    }\r\n\r\n    autoplayRestart() {\r\n        new Promise((resolve, reject) => {\r\n            setTimeout(() => {\r\n                this.track.style.transition = `none`\r\n                this.track.style.transform = `translateX(${0}px)`;\r\n                resolve()\r\n            }, this.config.timeout * 1000)\r\n        }).then(() => {\r\n            setTimeout(() => {\r\n                this.track.style.transition = `${this.config.speed}s ease-in-out`\r\n\r\n            }, 100)\r\n        }).then(() => {\r\n            this.counter = 0;\r\n            this.x = 0;\r\n            this.checkActiveSlider()\r\n            this.setActiveAutoplayDots()\r\n        }).catch(err => console.log(err))\r\n    }\r\n    sliderRestart() {\r\n        this.counter = 0;\r\n        this.x = 0;\r\n        this.track.style.transform = `translateX(${this.x}px)`;\r\n        this.checkActiveSlider()\r\n        this.setActiveAutoplayDots()\r\n    }\r\n\r\n    movePrev() {\r\n        if (this.x + this.shiftX > 0) return\r\n        this.counter -= 1;\r\n        this.x += this.shiftX\r\n        this.track.style.transform = `translateX(${this.x}px)`;\r\n        this.checkActiveSlider()\r\n        this.setActiveAutoplayDots()\r\n    }\r\n\r\n    setActiveAutoplayDots() {\r\n        const dotsList = Array.from(this.dots.children)\r\n        dotsList.forEach(dot => {\r\n            dot.classList.remove('activeDot')\r\n        })\r\n        dotsList[this.counter].classList.add('activeDot')\r\n    }\r\n\r\n    checkCounter() {\r\n        if (this.counter === this.itemsSlider.length - 1) {\r\n            this.arrowNext?.classList.remove('activeBtn')\r\n            this.arrowPrev?.classList.add('activeBtn')\r\n            this.nextBtn.disabled = true\r\n\r\n        }\r\n        if (this.prevBtn.disabled) {\r\n            this.prevBtn.disabled = false\r\n        }\r\n        if (this.counter === 0) {\r\n            this.arrowNext?.classList.add('activeBtn')\r\n            this.arrowPrev?.classList.remove('activeBtn')\r\n            this.prevBtn.disabled = true\r\n        }\r\n        if (this.nextBtn.disabled) {\r\n            this.nextBtn.disabled = false\r\n        }\r\n    }\r\n\r\n    checkActiveSlider = () => {\r\n        this.itemsSlider?.forEach((slider) => {\r\n            if (slider.classList.contains('activeSlider')) {\r\n                slider.classList.remove('activeSlider')\r\n            }\r\n        })\r\n        this.itemsSlider[this.counter]?.classList.add('activeSlider')\r\n    }\r\n    checkResizeMobile() {\r\n            console.log(this.widthWindow, window.innerWidth)\r\n        if(window.innerWidth !== this.widthWindow) {\r\n            this.widthWindow = window.innerWidth\r\n            return false\r\n        }\r\n        else return true\r\n    }\r\n\r\n    initSlider() {\r\n        // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i\r\n        //     .test(navigator.userAgent)) {\r\n        //     console.log(navigator.userAgent)\r\n        //\r\n        //     alert(\"Вы используете мобильное устройство (телефон или планшет).\")\r\n        //\r\n        // } else alert(\"Вы используете ПК.\")\r\n        this.x = 0;\r\n        this.counter = 0;\r\n        this.widthWindow = window.innerWidth\r\n\r\n        this.track = this.root?.querySelector('.trackSlider');\r\n        this.wrapper = this.root?.querySelector('.wrapperSlider');\r\n        this.itemsSlider = this.root?.querySelectorAll('.elementSlider')\r\n        this.nav = this.root?.querySelector('.navigationSlider')\r\n\r\n        this.prevBtn = this.nav?.querySelector('.prevBtn')\r\n        this.nextBtn = this.nav?.querySelector('.nextBtn')\r\n\r\n        this.arrowPrev = this?.prevBtn?.querySelector('.arrowBtnPrev')\r\n        this.arrowNext = this?.nextBtn?.querySelector('.arrowBtnNext')\r\n\r\n        this.arrowNext?.classList.add('activeBtn')\r\n        this.dots = this.root?.querySelector('.dotsSlider')\r\n\r\n        if (this.itemsSlider) {\r\n            this.shiftX = this.itemsSlider[0]?.clientWidth;\r\n            this.itemsSlider[0]?.classList.add('activeSlider')\r\n            // this.wrapper.style.width = this.itemsSlider[0]?.clientWidth * this.config.slidersView + 'px';\r\n\r\n            if (this.config.counter) {\r\n                this.itemsSlider.forEach((item, index) => {\r\n                    const numSlider = item.querySelector('.guide__counter')\r\n                    numSlider.innerHTML = (index + 1 > 9) ? index + 1 : '0' + (index + 1);\r\n                });\r\n            }\r\n        }\r\n\r\n        this.resizeSlider = window.addEventListener('resize', (e) => {\r\n            if(this.config.autoplay) {\r\n                if(window.innerWidth < 1200)\r\n                    removeEventListener('resize', this.resizeSlider)\r\n                this.sliderRestart()\r\n\r\n            }\r\n            this.shiftX = this.itemsSlider[0]?.clientWidth;\r\n        })\r\n\r\n\r\n        if (this.track) this.track.style.transition = `${this.config.speed}s ease-in-out`\r\n\r\n        if (this.config.autoplay) this.autoPlay()\r\n\r\n\r\n        if (this.config.dots) {\r\n            for (let i = 0; i < this.itemsSlider.length; i++) {\r\n                const dot = document.createElement('div')\r\n                dot.classList.add('dot')\r\n                this.dots.append(dot)\r\n            }\r\n            this.dots.children[0].classList.add('activeDot')\r\n            this.dots.addEventListener('click', (e) => {\r\n                if (e.target.classList.contains('dot')) {\r\n                    this.dots.querySelectorAll('.dot').forEach((dot, index) => {\r\n                        dot.classList.remove('activeDot')\r\n                        if (e.target === dot) {\r\n                            this.counter = index\r\n                            this.x = -this.shiftX * this.counter\r\n                            this.track.style.transform = `translateX(${this.x}px)`\r\n                            this.itemsSlider.forEach(item => item.classList.remove('activeSlider'))\r\n                            this.itemsSlider[this.counter].classList.add('activeSlider')\r\n                        }\r\n                    })\r\n                    e.target.classList.add('activeDot')\r\n                    clearTimeout(this.timerLastItem)\r\n                }\r\n            })\r\n        }\r\n\r\n\r\n        if (this.prevBtn && this.nextBtn) {\r\n            this.prevBtn.onclick = () => {\r\n                this.movePrev(this.counter)\r\n                this.checkCounter()\r\n            }\r\n\r\n            this.nextBtn.onclick = () => {\r\n                this.moveNext(this.counter)\r\n                this.checkCounter()\r\n\r\n            }\r\n        }\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://project-hexagon/./lib/slider-tech/sliderCreate.js?");

      /***/
    },

    /***/"./node_modules/wow.js/dist/wow.min.js":
    /*!*********************************************!*\
      !*** ./node_modules/wow.js/dist/wow.min.js ***!
      \*********************************************/
    /***/
    function node_modulesWowJsDistWowMinJs(module, exports) {
      eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! WOW wow.js - v1.2.1 - 2016-09-05\n* https://wowjs.uk\n* Copyright (c) 2016 Thomas Grainger; Licensed MIT */!function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module,exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var c; }}(this,function(a,b){\"use strict\";function c(a,b){if(!(a instanceof b))throw new TypeError(\"Cannot call a class as a function\")}function d(a,b){return b.indexOf(a)>=0}function e(a,b){for(var c in b)if(null==a[c]){var d=b[c];a[c]=d}return a}function f(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)}function g(a){var b=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],c=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],d=arguments.length<=3||void 0===arguments[3]?null:arguments[3],e=void 0;return null!=document.createEvent?(e=document.createEvent(\"CustomEvent\"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e}function h(a,b){null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():\"on\"+b in(null!=a)&&a[\"on\"+b]()}function i(a,b,c){null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent(\"on\"+b,c):a[b]=c}function j(a,b,c){null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent(\"on\"+b,c):delete a[b]}function k(){return\"innerHeight\"in window?window.innerHeight:document.documentElement.clientHeight}Object.defineProperty(b,\"__esModule\",{value:!0});var l,m,n=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,\"value\"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),o=window.WeakMap||window.MozWeakMap||function(){function a(){c(this,a),this.keys=[],this.values=[]}return n(a,[{key:\"get\",value:function(a){for(var b=0;b<this.keys.length;b++){var c=this.keys[b];if(c===a)return this.values[b]}}},{key:\"set\",value:function(a,b){for(var c=0;c<this.keys.length;c++){var d=this.keys[c];if(d===a)return this.values[c]=b,this}return this.keys.push(a),this.values.push(b),this}}]),a}(),p=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(m=l=function(){function a(){c(this,a),\"undefined\"!=typeof console&&null!==console&&(console.warn(\"MutationObserver is not supported by your browser.\"),console.warn(\"WOW.js cannot detect dom mutations, please call .sync() after loading new content.\"))}return n(a,[{key:\"observe\",value:function(){}}]),a}(),l.notSupported=!0,m),q=window.getComputedStyle||function(a){var b=/(\\-([a-z]){1})/g;return{getPropertyValue:function(c){\"float\"===c&&(c=\"styleFloat\"),b.test(c)&&c.replace(b,function(a,b){return b.toUpperCase()});var d=a.currentStyle;return(null!=d?d[c]:void 0)||null}}},r=function(){function a(){var b=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];c(this,a),this.defaults={boxClass:\"wow\",animateClass:\"animated\",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},this.animate=function(){return\"requestAnimationFrame\"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),this.vendors=[\"moz\",\"webkit\"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=e(b,this.defaults),null!=b.scrollContainer&&(this.config.scrollContainer=document.querySelector(b.scrollContainer)),this.animationNameCache=new o,this.wowEvent=g(this.config.boxClass)}return n(a,[{key:\"init\",value:function(){this.element=window.document.documentElement,d(document.readyState,[\"interactive\",\"complete\"])?this.start():i(document,\"DOMContentLoaded\",this.start),this.finished=[]}},{key:\"start\",value:function(){var a=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll(\".\"+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var b=0;b<this.boxes.length;b++){var c=this.boxes[b];this.applyStyle(c,!0)}if(this.disabled()||(i(this.config.scrollContainer||window,\"scroll\",this.scrollHandler),i(window,\"resize\",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live){var d=new p(function(b){for(var c=0;c<b.length;c++)for(var d=b[c],e=0;e<d.addedNodes.length;e++){var f=d.addedNodes[e];a.doSync(f)}});d.observe(document.body,{childList:!0,subtree:!0})}}},{key:\"stop\",value:function(){this.stopped=!0,j(this.config.scrollContainer||window,\"scroll\",this.scrollHandler),j(window,\"resize\",this.scrollHandler),null!=this.interval&&clearInterval(this.interval)}},{key:\"sync\",value:function(){p.notSupported&&this.doSync(this.element)}},{key:\"doSync\",value:function(a){if(\"undefined\"!=typeof a&&null!==a||(a=this.element),1===a.nodeType){a=a.parentNode||a;for(var b=a.querySelectorAll(\".\"+this.config.boxClass),c=0;c<b.length;c++){var e=b[c];d(e,this.all)||(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),this.scrolled=!0)}}}},{key:\"show\",value:function(a){return this.applyStyle(a),a.className=a.className+\" \"+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),h(a,this.wowEvent),i(a,\"animationend\",this.resetAnimation),i(a,\"oanimationend\",this.resetAnimation),i(a,\"webkitAnimationEnd\",this.resetAnimation),i(a,\"MSAnimationEnd\",this.resetAnimation),a}},{key:\"applyStyle\",value:function(a,b){var c=this,d=a.getAttribute(\"data-wow-duration\"),e=a.getAttribute(\"data-wow-delay\"),f=a.getAttribute(\"data-wow-iteration\");return this.animate(function(){return c.customStyle(a,b,d,e,f)})}},{key:\"resetStyle\",value:function(){for(var a=0;a<this.boxes.length;a++){var b=this.boxes[a];b.style.visibility=\"visible\"}}},{key:\"resetAnimation\",value:function(a){if(a.type.toLowerCase().indexOf(\"animationend\")>=0){var b=a.target||a.srcElement;b.className=b.className.replace(this.config.animateClass,\"\").trim()}}},{key:\"customStyle\",value:function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?\"hidden\":\"visible\",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?\"none\":this.cachedAnimationName(a)}),a}},{key:\"vendorSet\",value:function(a,b){for(var c in b)if(b.hasOwnProperty(c)){var d=b[c];a[\"\"+c]=d;for(var e=0;e<this.vendors.length;e++){var f=this.vendors[e];a[\"\"+f+c.charAt(0).toUpperCase()+c.substr(1)]=d}}}},{key:\"vendorCSS\",value:function(a,b){for(var c=q(a),d=c.getPropertyCSSValue(b),e=0;e<this.vendors.length;e++){var f=this.vendors[e];d=d||c.getPropertyCSSValue(\"-\"+f+\"-\"+b)}return d}},{key:\"animationName\",value:function(a){var b=void 0;try{b=this.vendorCSS(a,\"animation-name\").cssText}catch(c){b=q(a).getPropertyValue(\"animation-name\")}return\"none\"===b?\"\":b}},{key:\"cacheAnimationName\",value:function(a){return this.animationNameCache.set(a,this.animationName(a))}},{key:\"cachedAnimationName\",value:function(a){return this.animationNameCache.get(a)}},{key:\"scrollHandler\",value:function(){this.scrolled=!0}},{key:\"scrollCallback\",value:function(){if(this.scrolled){this.scrolled=!1;for(var a=[],b=0;b<this.boxes.length;b++){var c=this.boxes[b];if(c){if(this.isVisible(c)){this.show(c);continue}a.push(c)}}this.boxes=a,this.boxes.length||this.config.live||this.stop()}}},{key:\"offsetTop\",value:function(a){for(;void 0===a.offsetTop;)a=a.parentNode;for(var b=a.offsetTop;a.offsetParent;)a=a.offsetParent,b+=a.offsetTop;return b}},{key:\"isVisible\",value:function(a){var b=a.getAttribute(\"data-wow-offset\")||this.config.offset,c=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,d=c+Math.min(this.element.clientHeight,k())-b,e=this.offsetTop(a),f=e+a.clientHeight;return d>=e&&f>=c}},{key:\"disabled\",value:function(){return!this.config.mobile&&f(navigator.userAgent)}}]),a}();b[\"default\"]=r,a.exports=b[\"default\"]});\n\n//# sourceURL=webpack://project-hexagon/./node_modules/wow.js/dist/wow.min.js?");

      /***/
    },

    /***/"./src/js/burger.js":
    /*!**************************!*\
      !*** ./src/js/burger.js ***!
      \**************************/
    /***/
    function srcJsBurgerJs() {
      eval("const burger_icon = document.querySelector('.burger__icon');\r\nconst burger_items = document.querySelectorAll('.header__menu__item')\r\n;\r\nburger_icon.addEventListener('click', () => {\r\n    burger_icon.classList\r\n        .toggle('activeBurger');\r\n    document.querySelector('.header__menu')\r\n        .classList.toggle('activeBurger');\r\n    document.body.classList.toggle('blockScroll');\r\n})\r\nburger_items.forEach((item) => {\r\n    item.addEventListener('click', () => {\r\n        burger_icon.classList\r\n            .remove('activeBurger');\r\n        document.querySelector('.header__menu')\r\n            .classList.remove('activeBurger');\r\n        document.body.classList.remove('blockScroll');\r\n    })\r\n})\r\n\r\nwindow.addEventListener('resize', () => {\r\n    if (window.innerWidth > 768) {\r\n        burger_icon.classList\r\n            .remove('activeBurger');\r\n        document.querySelector('.header__menu')\r\n            .classList.remove('activeBurger');\r\n        document.body.classList.remove('blockScroll');\r\n    }\r\n})\n\n//# sourceURL=webpack://project-hexagon/./src/js/burger.js?");

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

      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_slider_tech_sliderCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/slider-tech/sliderCreate.js */ \"./lib/slider-tech/sliderCreate.js\");\n\r\n\r\nconst sliderReview = new _lib_slider_tech_sliderCreate_js__WEBPACK_IMPORTED_MODULE_0__.SliderTech('.slider', {\r\n    slidersView: 1,\r\n    speed: 0.6,\r\n    counter: false,\r\n    dots: true,\r\n    autoplay: true,\r\n    timeout: 5,\r\n})\r\nsliderReview.initSlider()\r\n\n\n//# sourceURL=webpack://project-hexagon/./src/js/slider.js?");

      /***/
    },

    /***/"./src/js/tabsScript.js":
    /*!******************************!*\
      !*** ./src/js/tabsScript.js ***!
      \******************************/
    /***/
    function srcJsTabsScriptJs() {
      eval("const tabs = document.querySelector('.tabs')\r\n// const listTabs = document.querySelectorAll('.tabs__item')\r\ntabs.addEventListener('click', (e) => {\r\n    if(!e.target?.classList.contains('tabs__item')) return\r\n    // listTabs.forEach((tab) => {\r\n    //     tab.classList.remove('activeTab')\r\n    //     tab.querySelector('.tabs__item__cross')\r\n    //         ?.classList.remove('activeCross')\r\n    // })\r\n    e.target?.classList.toggle('activeTab')\r\n\r\n    const currCross = e.target?.querySelector('.tabs__item__cross')\r\n    currCross?.classList.toggle('activeCross')\r\n\r\n})\r\n\n\n//# sourceURL=webpack://project-hexagon/./src/js/tabsScript.js?");

      /***/
    },

    /***/"./src/js/wow.js":
    /*!***********************!*\
      !*** ./src/js/wow.js ***!
      \***********************/
    /***/
    function srcJsWowJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_wow_js_dist_wow_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/wow.js/dist/wow.min.js */ \"./node_modules/wow.js/dist/wow.min.js\");\n/* harmony import */ var _node_modules_wow_js_dist_wow_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_wow_js_dist_wow_min_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nnew (_node_modules_wow_js_dist_wow_min_js__WEBPACK_IMPORTED_MODULE_0___default())().init();\n\n//# sourceURL=webpack://project-hexagon/./src/js/wow.js?");

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
    __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/
  !function () {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
      /******/var getter = module && module.__esModule ? /******/function () {
        return module['default'];
      } : /******/function () {
        return module;
      };
      /******/
      __webpack_require__.d(getter, {
        a: getter
      });
      /******/
      return getter;
      /******/
    };
    /******/
  }();
  /******/
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
  __webpack_require__("./src/js/burger.js");
  /******/
  __webpack_require__("./src/js/popup.js");
  /******/
  __webpack_require__("./src/js/slider.js");
  /******/
  __webpack_require__("./src/js/tabsScript.js");
  /******/
  var __webpack_exports__ = __webpack_require__("./src/js/wow.js");
  /******/
  /******/
})();