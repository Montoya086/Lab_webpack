"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); } return _createSuperInternal; }(); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function () { function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); } return _wrapNativeSuper; }(); return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function () { function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; } return _construct; }(); } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function () { function _setPrototypeOf(o, p) { o.__proto__ = p; return o; } return _setPrototypeOf; }(); return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function () { function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); } return _getPrototypeOf; }(); return _getPrototypeOf(o); }
var bDisplay = /*#__PURE__*/function (_HTMLElement) {
  _inherits(bDisplay, _HTMLElement);
  var _super = _createSuper(bDisplay);
  function bDisplay() {
    _classCallCheck(this, bDisplay);
    return _super.call(this);
  }
  _createClass(bDisplay, [{
    key: "connectedCallback",
    value: function () {
      function connectedCallback() {
        var shadowDOM = this.attachShadow({
          mode: "open"
        });
        var link = document.createElement("link");
        shadowDOM.appendChild(link);
        var card = document.createElement("div");
        var style = document.createElement("style");
        style.appendChild(document.createTextNode(".book-card2:hover{box-shadow: 7px 7px 20px red;}"));
        style.appendChild(document.createTextNode(".book-card:hover{box-shadow: 3px 3px 10px white;}"));
        shadowDOM.appendChild(style);
        if (this.getAttribute("type") == 2) {
          card.setAttribute("class", "book-card2");
          card.style = "width: 50%;height: 50%;margin-bottom: 30px;";
        } else {
          card.setAttribute("class", "book-card");
          card.style = "width: 100%;height: 100%;margin-bottom: 30px;";
        }
        shadowDOM.appendChild(card);
        var image = document.createElement("img");
        image.setAttribute("src", this.getAttribute("src"));
        image.setAttribute("class", "book-card-image");
        image.style = "width: 100%;height: 90%;";
        card.appendChild(image);
        var title = document.createElement("p");
        title.innerText = "Titulo: " + this.getAttribute("title");
        title.setAttribute("class", "book-card-title");
        title.style = "font-size: small;color:white;padding-left: 5px;";
        card.appendChild(title);
        var author = document.createElement("p");
        author.innerText = "Autor: " + this.getAttribute("author");
        author.setAttribute("class", "book-card-author");
        author.style = "font-size: small;color:white;padding-left: 5px;";
        card.appendChild(author);
      }
      return connectedCallback;
    }()
  }]);
  return bDisplay;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define("my-display", bDisplay);