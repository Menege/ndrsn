(() => {
  "use strict";
  var __webpack_modules__ = {
      69: (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, { Z: () => Calculator });
        var _assets_press_mp3__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(858);
        function _toConsumableArray(e) {
          return (
            _arrayWithoutHoles(e) ||
            _iterableToArray(e) ||
            _unsupportedIterableToArray(e) ||
            _nonIterableSpread()
          );
        }
        function _nonIterableSpread() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function _iterableToArray(e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        }
        function _arrayWithoutHoles(e) {
          if (Array.isArray(e)) return _arrayLikeToArray(e);
        }
        function _slicedToArray(e, r) {
          return (
            _arrayWithHoles(e) ||
            _iterableToArrayLimit(e, r) ||
            _unsupportedIterableToArray(e, r) ||
            _nonIterableRest()
          );
        }
        function _nonIterableRest() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function _unsupportedIterableToArray(e, r) {
          if (e) {
            if ("string" == typeof e) return _arrayLikeToArray(e, r);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === t && e.constructor && (t = e.constructor.name),
              "Map" === t || "Set" === t
                ? Array.from(e)
                : "Arguments" === t ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                ? _arrayLikeToArray(e, r)
                : void 0
            );
          }
        }
        function _arrayLikeToArray(e, r) {
          (null == r || r > e.length) && (r = e.length);
          for (var t = 0, a = new Array(r); t < r; t++) a[t] = e[t];
          return a;
        }
        function _iterableToArrayLimit(e, r) {
          var t =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != t) {
            var a,
              i,
              n = [],
              _ = !0,
              s = !1;
            try {
              for (
                t = t.call(e);
                !(_ = (a = t.next()).done) &&
                (n.push(a.value), !r || n.length !== r);
                _ = !0
              );
            } catch (e) {
              (s = !0), (i = e);
            } finally {
              try {
                _ || null == t.return || t.return();
              } finally {
                if (s) throw i;
              }
            }
            return n;
          }
        }
        function _arrayWithHoles(e) {
          if (Array.isArray(e)) return e;
        }
        function _classCallCheck(e, r) {
          if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function");
        }
        function _defineProperties(e, r) {
          for (var t = 0; t < r.length; t++) {
            var a = r[t];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a);
          }
        }
        function _createClass(e, r, t) {
          return (
            r && _defineProperties(e.prototype, r),
            t && _defineProperties(e, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
        }
        function _defineProperty(e, r, t) {
          return (
            r in e
              ? Object.defineProperty(e, r, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[r] = t),
            e
          );
        }
        var Calculator = (function () {
          function Calculator(e) {
            var r = this;
            _classCallCheck(this, Calculator),
              _defineProperty(this, "_arrayOfNumbers", []),
              _defineProperty(this, "_arrayOfSigns", []),
              _defineProperty(this, "_signsTypes", {
                number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                math: { "-": "-", "+": "+", "÷": "/", x: "*" },
                singleMathAction: ["%", "√", "±", "sqr"],
                submit: ["="],
                cancel: ["c"],
                prepares: { ",": "." },
              }),
              _defineProperty(this, "_IS_END", !1),
              _defineProperty(this, "_DISPLAY_WIDTH", 276),
              _defineProperty(this, "_FONT_SIZE", 40),
              _defineProperty(this, "_FONT_SIZE_SCALE", 1.6),
              _defineProperty(
                this,
                "_sound",
                _assets_press_mp3__WEBPACK_IMPORTED_MODULE_0__.Z
              ),
              _defineProperty(this, "init", function () {
                return r.calculatorContainer.addEventListener(
                  "click",
                  r.listener.bind(r)
                );
              }),
              _defineProperty(this, "cleanMemory", function () {
                (r._arrayOfSigns = []), (r._arrayOfNumbers = []);
              }),
              _defineProperty(this, "resetDisplaySize", function () {
                return (r.calculatorDisplay.style.fontSize = "".concat(
                  r._FONT_SIZE,
                  "px"
                ));
              }),
              (this.calculatorContainer = document.querySelector(
                ".".concat(e, "__wrapper")
              )),
              (this.calculatorDisplay = document.querySelector(
                ".".concat(e, "__equals")
              )),
              (this.calculatorSigns = document.querySelector(
                ".".concat(e, "__equalsSigns")
              ));
          }
          return (
            _createClass(Calculator, [
              {
                key: "listener",
                value: function (e) {
                  var r = String(e.target.innerText).toLowerCase().trim();
                  "" !== r &&
                    (this.clickSound(),
                    this.calculate(String(r)),
                    this.displayCheck());
                },
              },
              {
                key: "calculate",
                value: function calculate(key) {
                  var _this2 = this;
                  try {
                    Object.entries(this._signsTypes).find(function (_ref) {
                      var _ref2 = _slicedToArray(_ref, 2),
                        type = _ref2[0],
                        signs = _ref2[1],
                        matchers = Array.isArray(signs)
                          ? signs
                          : Object.keys(signs);
                      if (matchers.includes(key))
                        switch (type) {
                          case "math":
                            (_this2._IS_END = !1),
                              "" !==
                                _toConsumableArray(
                                  _this2._arrayOfNumbers
                                ).pop() && _this2._arrayOfNumbers.push(""),
                              (_this2._arrayOfSigns[
                                _this2._arrayOfNumbers.length - 2
                              ] = signs[key]),
                              _this2.render(
                                "",
                                _toConsumableArray(_this2._arrayOfSigns).pop()
                              );
                            break;
                          case "singleMathAction":
                            var length = _this2._arrayOfNumbers.length;
                            length &&
                              "" !== _this2._arrayOfNumbers[length - 1] &&
                              ((_this2._arrayOfNumbers[length - 1] =
                                _this2.singleMath(
                                  key,
                                  _this2._arrayOfNumbers[length - 1]
                                )),
                              _this2.render(
                                _toConsumableArray(_this2._arrayOfNumbers).pop()
                              ));
                            break;
                          case "cancel":
                            _this2.cleanMemory(),
                              _this2.resetDisplaySize(),
                              _this2.render(" ", " ");
                            break;
                          case "submit":
                            if (_this2._arrayOfNumbers.length) {
                              "" ===
                                _this2._arrayOfNumbers[
                                  _this2._arrayOfNumbers.length - 1
                                ] &&
                                (_this2._arrayOfSigns.pop(),
                                _this2._arrayOfNumbers.pop());
                              var expression = Number(
                                _this2.checkToFixed(
                                  eval(
                                    _this2._arrayOfNumbers.reduce(function (
                                      e,
                                      r,
                                      t
                                    ) {
                                      return ""
                                        .concat(e)
                                        .concat(_this2._arrayOfSigns[t - 1])
                                        .concat(r);
                                    })
                                  ),
                                  8
                                )
                              );
                              _this2.resetDisplaySize(),
                                _this2.cleanMemory(),
                                (_this2._IS_END = !0),
                                isFinite(expression) || (expression = "0"),
                                _this2._arrayOfNumbers.push(
                                  expression.toString()
                                ),
                                _this2.render(_this2._arrayOfNumbers[0], " ");
                            }
                            break;
                          case "prepares":
                            var currentNumberIndex =
                                _this2._arrayOfNumbers.length - 1,
                              currentNumber =
                                _this2._arrayOfNumbers[currentNumberIndex],
                              regExp = new RegExp("\\" + signs[key], "gm");
                            _this2._arrayOfNumbers[currentNumberIndex] +=
                              currentNumber &&
                              !String(currentNumber).match(regExp)
                                ? signs[key]
                                : "";
                            break;
                          case "number":
                            _this2._IS_END &&
                              ((_this2._IS_END = !1), _this2.cleanMemory()),
                              _this2._arrayOfNumbers.length
                                ? (_this2._arrayOfNumbers[
                                    _this2._arrayOfNumbers.length - 1
                                  ] = String(
                                    _this2._arrayOfNumbers[
                                      _this2._arrayOfNumbers.length - 1
                                    ] + key
                                  ))
                                : _this2._arrayOfNumbers.push(key),
                              _this2.render(
                                _toConsumableArray(_this2._arrayOfNumbers).pop()
                              );
                        }
                    });
                  } catch (e) {
                    this.renderErrors(e);
                  }
                },
              },
              {
                key: "singleMath",
                value: function (e, r) {
                  var t = Number(r);
                  switch (e) {
                    case "√":
                      t = Math.sqrt(t);
                      break;
                    case "sqr":
                      t = Math.pow(t, 2);
                      break;
                    case "±":
                      t *= -1;
                      break;
                    case "%":
                      t = this.checkToFixed(t / 100, 8);
                  }
                  return this.checkToFixed(t, 8);
                },
              },
              {
                key: "render",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                  e && (this.calculatorDisplay.innerHTML = e),
                    r && (this.calculatorSigns.innerHTML = r);
                },
              },
              {
                key: "displayCheck",
                value: function () {
                  this.calculatorDisplay.offsetWidth >= this._DISPLAY_WIDTH &&
                    (this.calculatorDisplay.style.fontSize = "".concat(
                      (this._DISPLAY_WIDTH /
                        this.calculatorDisplay.innerHTML.length) *
                        this._FONT_SIZE_SCALE,
                      "px"
                    ));
                },
              },
              {
                key: "clickSound",
                value: function () {
                  var e = new Audio();
                  (e.src = this._sound), (e.autoplay = !0);
                },
              },
              {
                key: "checkToFixed",
                value: function (e, r) {
                  return (String(Number(+e)).includes(".")
                    ? String(e).split(".")[1].length
                    : 0) > r
                    ? Number(e).toFixed(r)
                    : e;
                },
              },
              {
                key: "renderErrors",
                value: function (e) {
                  this.cleanMemory(), this.resetDisplaySize(), this.render(e);
                },
              },
            ]),
            Calculator
          );
        })();
      },
      858: (e, r, t) => {
        t.d(r, { Z: () => a });
        const a = t.p + "./assets/files/press.mp3";
      },
    },
    __webpack_module_cache__ = {};
  function __webpack_require__(e) {
    var r = __webpack_module_cache__[e];
    if (void 0 !== r) return r.exports;
    var t = (__webpack_module_cache__[e] = { exports: {} });
    return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports;
  }
  (__webpack_require__.d = (e, r) => {
    for (var t in r)
      __webpack_require__.o(r, t) &&
        !__webpack_require__.o(e, t) &&
        Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
  }),
    (__webpack_require__.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (__webpack_require__.o = (e, r) =>
      Object.prototype.hasOwnProperty.call(e, r)),
    (() => {
      var e;
      __webpack_require__.g.importScripts &&
        (e = __webpack_require__.g.location + "");
      var r = __webpack_require__.g.document;
      if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
        var t = r.getElementsByTagName("script");
        t.length && (e = t[t.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (__webpack_require__.p = e + "../../");
    })();
  var __webpack_exports__ = {};
  new (__webpack_require__(69).Z)("calculator").init();
})();
