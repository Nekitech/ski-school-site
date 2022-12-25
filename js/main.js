"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*! For license information please see main.js.LICENSE.txt */
!function () {
  var t = {
      135: function _(t, e) {
        var i, s;
        i = function i(t, e) {
          "use strict";

          function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }
          function s(t, e) {
            return e.indexOf(t) >= 0;
          }
          function n(t, e) {
            for (var i in e) {
              if (null == t[i]) {
                var s = e[i];
                t[i] = s;
              }
            }
            return t;
          }
          function o(t) {
            var e = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1],
              i = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2],
              s = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
              n = void 0;
            return null != document.createEvent ? (n = document.createEvent("CustomEvent")).initCustomEvent(t, e, i, s) : null != document.createEventObject ? (n = document.createEventObject()).eventType = t : n.eventName = t, n;
          }
          function r(t, e, i) {
            null != t.addEventListener ? t.addEventListener(e, i, !1) : null != t.attachEvent ? t.attachEvent("on" + e, i) : t[e] = i;
          }
          function a(t, e, i) {
            null != t.removeEventListener ? t.removeEventListener(e, i, !1) : null != t.detachEvent ? t.detachEvent("on" + e, i) : delete t[e];
          }
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var l,
            c,
            h = function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var s = e[i];
                  s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
                }
              }
              return function (e, i, s) {
                return i && t(e.prototype, i), s && t(e, s), e;
              };
            }(),
            u = window.WeakMap || window.MozWeakMap || function () {
              function t() {
                i(this, t), this.keys = [], this.values = [];
              }
              return h(t, [{
                key: "get",
                value: function value(t) {
                  for (var e = 0; e < this.keys.length; e++) {
                    if (this.keys[e] === t) return this.values[e];
                  }
                }
              }, {
                key: "set",
                value: function value(t, e) {
                  for (var i = 0; i < this.keys.length; i++) {
                    if (this.keys[i] === t) return this.values[i] = e, this;
                  }
                  return this.keys.push(t), this.values.push(e), this;
                }
              }]), t;
            }(),
            d = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (c = l = function () {
              function t() {
                i(this, t), "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."));
              }
              return h(t, [{
                key: "observe",
                value: function value() {}
              }]), t;
            }(), l.notSupported = !0, c),
            v = window.getComputedStyle || function (t) {
              var e = /(\-([a-z]){1})/g;
              return {
                getPropertyValue: function getPropertyValue(i) {
                  "float" === i && (i = "styleFloat"), e.test(i) && i.replace(e, function (t, e) {
                    return e.toUpperCase();
                  });
                  var s = t.currentStyle;
                  return (null != s ? s[i] : void 0) || null;
                }
              };
            },
            m = function () {
              function t() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                i(this, t), this.defaults = {
                  boxClass: "wow",
                  animateClass: "animated",
                  offset: 0,
                  mobile: !0,
                  live: !0,
                  callback: null,
                  scrollContainer: null
                }, this.animate = "requestAnimationFrame" in window ? function (t) {
                  return window.requestAnimationFrame(t);
                } : function (t) {
                  return t();
                }, this.vendors = ["moz", "webkit"], this.start = this.start.bind(this), this.resetAnimation = this.resetAnimation.bind(this), this.scrollHandler = this.scrollHandler.bind(this), this.scrollCallback = this.scrollCallback.bind(this), this.scrolled = !0, this.config = n(e, this.defaults), null != e.scrollContainer && (this.config.scrollContainer = document.querySelector(e.scrollContainer)), this.animationNameCache = new u(), this.wowEvent = o(this.config.boxClass);
              }
              return h(t, [{
                key: "init",
                value: function value() {
                  this.element = window.document.documentElement, s(document.readyState, ["interactive", "complete"]) ? this.start() : r(document, "DOMContentLoaded", this.start), this.finished = [];
                }
              }, {
                key: "start",
                value: function value() {
                  var t = this;
                  if (this.stopped = !1, this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)), this.all = this.boxes.slice(0), this.boxes.length) if (this.disabled()) this.resetStyle();else for (var e = 0; e < this.boxes.length; e++) {
                    var i = this.boxes[e];
                    this.applyStyle(i, !0);
                  }
                  if (this.disabled() || (r(this.config.scrollContainer || window, "scroll", this.scrollHandler), r(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) {
                    var s = new d(function (e) {
                      for (var i = 0; i < e.length; i++) {
                        for (var s = e[i], n = 0; n < s.addedNodes.length; n++) {
                          var o = s.addedNodes[n];
                          t.doSync(o);
                        }
                      }
                    });
                    s.observe(document.body, {
                      childList: !0,
                      subtree: !0
                    });
                  }
                }
              }, {
                key: "stop",
                value: function value() {
                  this.stopped = !0, a(this.config.scrollContainer || window, "scroll", this.scrollHandler), a(window, "resize", this.scrollHandler), null != this.interval && clearInterval(this.interval);
                }
              }, {
                key: "sync",
                value: function value() {
                  d.notSupported && this.doSync(this.element);
                }
              }, {
                key: "doSync",
                value: function value(t) {
                  if (null != t || (t = this.element), 1 === t.nodeType) for (var e = (t = t.parentNode || t).querySelectorAll("." + this.config.boxClass), i = 0; i < e.length; i++) {
                    var n = e[i];
                    s(n, this.all) || (this.boxes.push(n), this.all.push(n), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(n, !0), this.scrolled = !0);
                  }
                }
              }, {
                key: "show",
                value: function value(t) {
                  return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), function (t, e) {
                    null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) && t["on" + e]();
                  }(t, this.wowEvent), r(t, "animationend", this.resetAnimation), r(t, "oanimationend", this.resetAnimation), r(t, "webkitAnimationEnd", this.resetAnimation), r(t, "MSAnimationEnd", this.resetAnimation), t;
                }
              }, {
                key: "applyStyle",
                value: function value(t, e) {
                  var i = this,
                    s = t.getAttribute("data-wow-duration"),
                    n = t.getAttribute("data-wow-delay"),
                    o = t.getAttribute("data-wow-iteration");
                  return this.animate(function () {
                    return i.customStyle(t, e, s, n, o);
                  });
                }
              }, {
                key: "resetStyle",
                value: function value() {
                  for (var t = 0; t < this.boxes.length; t++) {
                    this.boxes[t].style.visibility = "visible";
                  }
                }
              }, {
                key: "resetAnimation",
                value: function value(t) {
                  if (t.type.toLowerCase().indexOf("animationend") >= 0) {
                    var e = t.target || t.srcElement;
                    e.className = e.className.replace(this.config.animateClass, "").trim();
                  }
                }
              }, {
                key: "customStyle",
                value: function value(t, e, i, s, n) {
                  return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, {
                    animationDuration: i
                  }), s && this.vendorSet(t.style, {
                    animationDelay: s
                  }), n && this.vendorSet(t.style, {
                    animationIterationCount: n
                  }), this.vendorSet(t.style, {
                    animationName: e ? "none" : this.cachedAnimationName(t)
                  }), t;
                }
              }, {
                key: "vendorSet",
                value: function value(t, e) {
                  for (var i in e) {
                    if (e.hasOwnProperty(i)) {
                      var s = e[i];
                      t["" + i] = s;
                      for (var n = 0; n < this.vendors.length; n++) {
                        t["" + this.vendors[n] + i.charAt(0).toUpperCase() + i.substr(1)] = s;
                      }
                    }
                  }
                }
              }, {
                key: "vendorCSS",
                value: function value(t, e) {
                  for (var i = v(t), s = i.getPropertyCSSValue(e), n = 0; n < this.vendors.length; n++) {
                    var o = this.vendors[n];
                    s = s || i.getPropertyCSSValue("-" + o + "-" + e);
                  }
                  return s;
                }
              }, {
                key: "animationName",
                value: function value(t) {
                  var e = void 0;
                  try {
                    e = this.vendorCSS(t, "animation-name").cssText;
                  } catch (i) {
                    e = v(t).getPropertyValue("animation-name");
                  }
                  return "none" === e ? "" : e;
                }
              }, {
                key: "cacheAnimationName",
                value: function value(t) {
                  return this.animationNameCache.set(t, this.animationName(t));
                }
              }, {
                key: "cachedAnimationName",
                value: function value(t) {
                  return this.animationNameCache.get(t);
                }
              }, {
                key: "scrollHandler",
                value: function value() {
                  this.scrolled = !0;
                }
              }, {
                key: "scrollCallback",
                value: function value() {
                  if (this.scrolled) {
                    this.scrolled = !1;
                    for (var t = [], e = 0; e < this.boxes.length; e++) {
                      var i = this.boxes[e];
                      if (i) {
                        if (this.isVisible(i)) {
                          this.show(i);
                          continue;
                        }
                        t.push(i);
                      }
                    }
                    this.boxes = t, this.boxes.length || this.config.live || this.stop();
                  }
                }
              }, {
                key: "offsetTop",
                value: function value(t) {
                  for (; void 0 === t.offsetTop;) {
                    t = t.parentNode;
                  }
                  for (var e = t.offsetTop; t.offsetParent;) {
                    e += (t = t.offsetParent).offsetTop;
                  }
                  return e;
                }
              }, {
                key: "isVisible",
                value: function value(t) {
                  var e = t.getAttribute("data-wow-offset") || this.config.offset,
                    i = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
                    s = i + Math.min(this.element.clientHeight, "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight) - e,
                    n = this.offsetTop(t),
                    o = n + t.clientHeight;
                  return s >= n && o >= i;
                }
              }, {
                key: "disabled",
                value: function value() {
                  return !this.config.mobile && function (t) {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t);
                  }(navigator.userAgent);
                }
              }]), t;
            }();
          e.default = m, t.exports = e.default;
        }, void 0 === (s = i.apply(e, [t, e])) || (t.exports = s);
      }
    },
    e = {};
  function i(s) {
    var n = e[s];
    if (void 0 !== n) return n.exports;
    var o = e[s] = {
      exports: {}
    };
    return t[s].call(o.exports, o, o.exports, i), o.exports;
  }
  i.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return i.d(e, {
      a: e
    }), e;
  }, i.d = function (t, e) {
    for (var s in e) {
      i.o(e, s) && !i.o(t, s) && Object.defineProperty(t, s, {
        enumerable: !0,
        get: e[s]
      });
    }
  }, i.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, function () {
    var t = document.querySelector(".burger__icon"),
      e = document.querySelectorAll(".header__menu__item");
    t.addEventListener("click", function () {
      t.classList.toggle("activeBurger"), document.querySelector(".header__menu").classList.toggle("activeBurger"), document.body.classList.toggle("blockScroll");
    }), e.forEach(function (e) {
      e.addEventListener("click", function () {
        t.classList.remove("activeBurger"), document.querySelector(".header__menu").classList.remove("activeBurger"), document.body.classList.remove("blockScroll");
      });
    }), window.addEventListener("resize", function () {
      window.innerWidth > 768 && (t.classList.remove("activeBurger"), document.querySelector(".header__menu").classList.remove("activeBurger"), document.body.classList.remove("blockScroll"));
    });
  }(), function () {
    var t = /*#__PURE__*/function () {
      function t(_t) {
        _classCallCheck(this, t);
        this.listId = _t;
      }
      _createClass(t, [{
        key: "init",
        value: function init() {
          var _this = this;
          this.listId.forEach(function (_t2) {
            _t2.addEventListener("click", function (_t3) {
              var _t3$target;
              var e = (_t3$target = _t3.target) === null || _t3$target === void 0 ? void 0 : _t3$target.getAttribute("id"),
                i = document.querySelector(".popup#".concat(e));
              _this.open(i);
            });
          }), n.forEach(function (_t4) {
            _t4.addEventListener("click", function (_t5) {
              var _t5$target;
              var e = (_t5$target = _t5.target) === null || _t5$target === void 0 ? void 0 : _t5$target.closest(".popup");
              _this.close(e);
            });
          });
        }
      }, {
        key: "open",
        value: function open(_t6) {
          _t6.classList.add("activePopup"), document.body.style.overflowY = "hidden", s.style.display = "block";
        }
      }, {
        key: "close",
        value: function close(_t7) {
          _t7.classList.remove("activePopup"), document.body.style.overflowY = "auto", s.style.display = "none", o(_t7, !0);
        }
      }]);
      return t;
    }();
    var e = document.querySelectorAll(".cardInstructor__button"),
      i = document.querySelectorAll(".QandA__popularQuestions__button"),
      s = document.querySelector(".popup-fon"),
      n = document.querySelectorAll(".popup-close");
    new t(e).init(), new t(i).init(), s.addEventListener("click", function (t) {
      var e = document.querySelector(".popup.activePopup");
      e.classList.remove("activePopup"), document.body.style.overflowY = "auto", s.style.display = "none", o(e, !0);
    }), document.querySelector(".popupForm__button").addEventListener("click", function (t) {
      t.preventDefault(), o(document.querySelector(".popupForm"), !1);
    });
    var o = function o(t, e) {
      if (!t.classList.contains("popupForm")) return;
      var i = t.querySelector(".popupForm__wrapper"),
        s = t.querySelector(".popupForm__afterSendForm");
      i.style.display = e ? "block" : "none", s.style.display = e ? "none" : "flex";
    };
  }(), function () {
    "use strict";

    new ( /*#__PURE__*/function () {
      function _class2(_t8) {
        var _this2 = this;
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        _classCallCheck(this, _class2);
        _defineProperty(this, "checkActiveSlider", function () {
          var _this2$itemsSlider, _this2$itemsSlider$_t;
          (_this2$itemsSlider = _this2.itemsSlider) !== null && _this2$itemsSlider !== void 0 && _this2$itemsSlider.forEach(function (t) {
            t.classList.contains("activeSlider") && t.classList.remove("activeSlider");
          }), (_this2$itemsSlider$_t = _this2.itemsSlider[_this2.counter]) === null || _this2$itemsSlider$_t === void 0 ? void 0 : _this2$itemsSlider$_t.classList.add("activeSlider");
        });
        this.root = document.querySelector("".concat(_t8)), this.config = _objectSpread({
          speed: ".4",
          slidersView: 1,
          centralSlider: !1
        }, e);
      }
      _createClass(_class2, [{
        key: "clear",
        value: function clear() {
          this.root = null;
        }
      }, {
        key: "autoPlay",
        value: function autoPlay() {
          var _this3 = this;
          this.timer = setInterval(function () {
            _this3.moveNext();
          }, 1e3 * this.config.timeout), this.autoplayHandler("mouseenter", "mouseleave"), this.autoplayHandler("touchstart", "touchend");
        }
      }, {
        key: "autoplayHandler",
        value: function autoplayHandler(t, e) {
          var _this4 = this;
          this.root.addEventListener(t, function () {
            clearInterval(_this4.timer), _this4.counter == _this4.itemsSlider.length - 1 && clearTimeout(_this4.timerLastItem);
          }), this.root.addEventListener(e, function () {
            _this4.timer = setInterval(function () {
              _this4.moveNext();
            }, 1e3 * _this4.config.timeout), _this4.counter == _this4.itemsSlider.length - 1 && (_this4.timerLastItem = setTimeout(function () {
              _this4.autoplayRestart();
            }, 1e3 * _this4.config.timeout));
          });
        }
      }, {
        key: "moveNext",
        value: function moveNext() {
          var _this5 = this;
          this.x - this.shiftX < -this.shiftX * (this.itemsSlider.length - this.config.slidersView) || (this.counter += 1, this.x -= this.shiftX, this.track.style.transform = "translateX(".concat(this.x, "px)"), this.checkActiveSlider(), this.setActiveAutoplayDots(), this.counter === this.itemsSlider.length - 1 && (this.timerLastItem = setTimeout(function () {
            _this5.autoplayRestart();
          }, 1e3 * this.config.timeout)));
        }
      }, {
        key: "autoplayRestart",
        value: function autoplayRestart() {
          var _this6 = this;
          new Promise(function (t, e) {
            setTimeout(function () {
              _this6.track.style.transition = "none", _this6.track.style.transform = "translateX(0px)", t();
            }, 1e3 * _this6.config.timeout);
          }).then(function () {
            setTimeout(function () {
              _this6.track.style.transition = "".concat(_this6.config.speed, "s ease-in-out");
            }, 100);
          }).then(function () {
            _this6.counter = 0, _this6.x = 0, _this6.checkActiveSlider(), _this6.setActiveAutoplayDots();
          }).catch(function (t) {
            return console.log(t);
          });
        }
      }, {
        key: "sliderRestart",
        value: function sliderRestart() {
          this.counter = 0, this.x = 0, this.track.style.transform = "translateX(".concat(this.x, "px)"), this.checkActiveSlider(), this.setActiveAutoplayDots();
        }
      }, {
        key: "movePrev",
        value: function movePrev() {
          this.x + this.shiftX > 0 || (this.counter -= 1, this.x += this.shiftX, this.track.style.transform = "translateX(".concat(this.x, "px)"), this.checkActiveSlider(), this.setActiveAutoplayDots());
        }
      }, {
        key: "setActiveAutoplayDots",
        value: function setActiveAutoplayDots() {
          var t = Array.from(this.dots.children);
          t.forEach(function (t) {
            t.classList.remove("activeDot");
          }), t[this.counter].classList.add("activeDot");
        }
      }, {
        key: "checkCounter",
        value: function checkCounter() {
          var _this$arrowNext, _this$arrowPrev, _this$arrowNext2, _this$arrowPrev2;
          this.counter === this.itemsSlider.length - 1 && ((_this$arrowNext = this.arrowNext) !== null && _this$arrowNext !== void 0 && _this$arrowNext.classList.remove("activeBtn"), (_this$arrowPrev = this.arrowPrev) !== null && _this$arrowPrev !== void 0 && _this$arrowPrev.classList.add("activeBtn"), this.nextBtn.disabled = !0), this.prevBtn.disabled && (this.prevBtn.disabled = !1), 0 === this.counter && ((_this$arrowNext2 = this.arrowNext) !== null && _this$arrowNext2 !== void 0 && _this$arrowNext2.classList.add("activeBtn"), (_this$arrowPrev2 = this.arrowPrev) !== null && _this$arrowPrev2 !== void 0 && _this$arrowPrev2.classList.remove("activeBtn"), this.prevBtn.disabled = !0), this.nextBtn.disabled && (this.nextBtn.disabled = !1);
        }
      }, {
        key: "checkResizeMobile",
        value: function checkResizeMobile() {
          return console.log(this.widthWindow, window.innerWidth), window.innerWidth === this.widthWindow || (this.widthWindow = window.innerWidth, !1);
        }
      }, {
        key: "initSlider",
        value: function initSlider() {
          var _this$root,
            _this$root2,
            _this$root3,
            _this$root4,
            _this$nav,
            _this$nav2,
            _this$prevBtn,
            _this$nextBtn,
            _this$arrowNext3,
            _this$root5,
            _this$itemsSlider$,
            _this$itemsSlider$2,
            _this7 = this;
          if (this.x = 0, this.counter = 0, this.widthWindow = window.innerWidth, this.track = (_this$root = this.root) === null || _this$root === void 0 ? void 0 : _this$root.querySelector(".trackSlider"), this.wrapper = (_this$root2 = this.root) === null || _this$root2 === void 0 ? void 0 : _this$root2.querySelector(".wrapperSlider"), this.itemsSlider = (_this$root3 = this.root) === null || _this$root3 === void 0 ? void 0 : _this$root3.querySelectorAll(".elementSlider"), this.nav = (_this$root4 = this.root) === null || _this$root4 === void 0 ? void 0 : _this$root4.querySelector(".navigationSlider"), this.prevBtn = (_this$nav = this.nav) === null || _this$nav === void 0 ? void 0 : _this$nav.querySelector(".prevBtn"), this.nextBtn = (_this$nav2 = this.nav) === null || _this$nav2 === void 0 ? void 0 : _this$nav2.querySelector(".nextBtn"), this.arrowPrev = this === null || this === void 0 ? void 0 : (_this$prevBtn = this.prevBtn) === null || _this$prevBtn === void 0 ? void 0 : _this$prevBtn.querySelector(".arrowBtnPrev"), this.arrowNext = this === null || this === void 0 ? void 0 : (_this$nextBtn = this.nextBtn) === null || _this$nextBtn === void 0 ? void 0 : _this$nextBtn.querySelector(".arrowBtnNext"), (_this$arrowNext3 = this.arrowNext) !== null && _this$arrowNext3 !== void 0 && _this$arrowNext3.classList.add("activeBtn"), this.dots = (_this$root5 = this.root) === null || _this$root5 === void 0 ? void 0 : _this$root5.querySelector(".dotsSlider"), this.itemsSlider && (this.shiftX = (_this$itemsSlider$ = this.itemsSlider[0]) === null || _this$itemsSlider$ === void 0 ? void 0 : _this$itemsSlider$.clientWidth, (_this$itemsSlider$2 = this.itemsSlider[0]) !== null && _this$itemsSlider$2 !== void 0 && _this$itemsSlider$2.classList.add("activeSlider"), this.config.counter && this.itemsSlider.forEach(function (t, e) {
            t.querySelector(".guide__counter").innerHTML = e + 1 > 9 ? e + 1 : "0" + (e + 1);
          })), this.resizeSlider = window.addEventListener("resize", function (t) {
            var _this7$itemsSlider$;
            _this7.config.autoplay && (window.innerWidth < 1200 && removeEventListener("resize", _this7.resizeSlider), _this7.sliderRestart()), _this7.shiftX = (_this7$itemsSlider$ = _this7.itemsSlider[0]) === null || _this7$itemsSlider$ === void 0 ? void 0 : _this7$itemsSlider$.clientWidth;
          }), this.track && (this.track.style.transition = "".concat(this.config.speed, "s ease-in-out")), this.config.autoplay && this.autoPlay(), this.config.dots) {
            for (var _t9 = 0; _t9 < this.itemsSlider.length; _t9++) {
              var _t10 = document.createElement("div");
              _t10.classList.add("dot"), this.dots.append(_t10);
            }
            this.dots.children[0].classList.add("activeDot"), this.dots.addEventListener("click", function (t) {
              t.target.classList.contains("dot") && (_this7.dots.querySelectorAll(".dot").forEach(function (e, i) {
                e.classList.remove("activeDot"), t.target === e && (_this7.counter = i, _this7.x = -_this7.shiftX * _this7.counter, _this7.track.style.transform = "translateX(".concat(_this7.x, "px)"), _this7.itemsSlider.forEach(function (t) {
                  return t.classList.remove("activeSlider");
                }), _this7.itemsSlider[_this7.counter].classList.add("activeSlider"));
              }), t.target.classList.add("activeDot"), clearTimeout(_this7.timerLastItem));
            });
          }
          this.prevBtn && this.nextBtn && (this.prevBtn.onclick = function () {
            _this7.movePrev(_this7.counter), _this7.checkCounter();
          }, this.nextBtn.onclick = function () {
            _this7.moveNext(_this7.counter), _this7.checkCounter();
          });
        }
      }]);
      return _class2;
    }())(".slider", {
      slidersView: 1,
      speed: .6,
      counter: !1,
      dots: !0,
      autoplay: !0,
      timeout: 5
    }).initSlider();
  }(), document.querySelector(".tabs").addEventListener("click", function (t) {
    var _t$target, _t$target2, _t$target3;
    if (!((_t$target = t.target) !== null && _t$target !== void 0 && _t$target.classList.contains("tabs__item"))) return;
    (_t$target2 = t.target) === null || _t$target2 === void 0 ? void 0 : _t$target2.classList.toggle("activeTab");
    var e = (_t$target3 = t.target) === null || _t$target3 === void 0 ? void 0 : _t$target3.querySelector(".tabs__item__cross");
    e === null || e === void 0 ? void 0 : e.classList.toggle("activeCross");
  }), function () {
    "use strict";

    var t = i(135);
    new (i.n(t)())().init();
  }();
}();
/*! WOW wow.js - v1.2.1 - 2016-09-05
* https://wowjs.uk
* Copyright (c) 2016 Thomas Grainger; Licensed MIT */