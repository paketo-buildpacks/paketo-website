(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn2, res) => function __init() {
    return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to2, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to2, key) && key !== except)
          __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to2;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // assets/js/shims.js
  var init_shims = __esm({
    "assets/js/shims.js"() {
    }
  });

  // node_modules/clipboard/dist/clipboard.js
  var require_clipboard = __commonJS({
    "node_modules/clipboard/dist/clipboard.js"(exports, module) {
      init_shims();
      (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object")
          module.exports = factory();
        else if (typeof define === "function" && define.amd)
          define([], factory);
        else if (typeof exports === "object")
          exports["ClipboardJS"] = factory();
        else
          root["ClipboardJS"] = factory();
      })(exports, function() {
        return (
          /******/
          function() {
            var __webpack_modules__ = {
              /***/
              686: (
                /***/
                function(__unused_webpack_module, __webpack_exports__, __webpack_require__2) {
                  "use strict";
                  __webpack_require__2.d(__webpack_exports__, {
                    "default": function() {
                      return (
                        /* binding */
                        clipboard
                      );
                    }
                  });
                  var tiny_emitter = __webpack_require__2(279);
                  var tiny_emitter_default = /* @__PURE__ */ __webpack_require__2.n(tiny_emitter);
                  var listen = __webpack_require__2(370);
                  var listen_default = /* @__PURE__ */ __webpack_require__2.n(listen);
                  var src_select = __webpack_require__2(817);
                  var select_default = /* @__PURE__ */ __webpack_require__2.n(src_select);
                  ;
                  function command(type) {
                    try {
                      return document.execCommand(type);
                    } catch (err) {
                      return false;
                    }
                  }
                  ;
                  var ClipboardActionCut = function ClipboardActionCut2(target) {
                    var selectedText = select_default()(target);
                    command("cut");
                    return selectedText;
                  };
                  var actions_cut = ClipboardActionCut;
                  ;
                  function createFakeElement(value) {
                    var isRTL = document.documentElement.getAttribute("dir") === "rtl";
                    var fakeElement = document.createElement("textarea");
                    fakeElement.style.fontSize = "12pt";
                    fakeElement.style.border = "0";
                    fakeElement.style.padding = "0";
                    fakeElement.style.margin = "0";
                    fakeElement.style.position = "absolute";
                    fakeElement.style[isRTL ? "right" : "left"] = "-9999px";
                    var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                    fakeElement.style.top = "".concat(yPosition, "px");
                    fakeElement.setAttribute("readonly", "");
                    fakeElement.value = value;
                    return fakeElement;
                  }
                  ;
                  var fakeCopyAction = function fakeCopyAction2(value, options) {
                    var fakeElement = createFakeElement(value);
                    options.container.appendChild(fakeElement);
                    var selectedText = select_default()(fakeElement);
                    command("copy");
                    fakeElement.remove();
                    return selectedText;
                  };
                  var ClipboardActionCopy = function ClipboardActionCopy2(target) {
                    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                      container: document.body
                    };
                    var selectedText = "";
                    if (typeof target === "string") {
                      selectedText = fakeCopyAction(target, options);
                    } else if (target instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(target === null || target === void 0 ? void 0 : target.type)) {
                      selectedText = fakeCopyAction(target.value, options);
                    } else {
                      selectedText = select_default()(target);
                      command("copy");
                    }
                    return selectedText;
                  };
                  var actions_copy = ClipboardActionCopy;
                  ;
                  function _typeof(obj) {
                    "@babel/helpers - typeof";
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                      _typeof = function _typeof2(obj2) {
                        return typeof obj2;
                      };
                    } else {
                      _typeof = function _typeof2(obj2) {
                        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                      };
                    }
                    return _typeof(obj);
                  }
                  var ClipboardActionDefault = function ClipboardActionDefault2() {
                    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var _options$action = options.action, action = _options$action === void 0 ? "copy" : _options$action, container = options.container, target = options.target, text = options.text;
                    if (action !== "copy" && action !== "cut") {
                      throw new Error('Invalid "action" value, use either "copy" or "cut"');
                    }
                    if (target !== void 0) {
                      if (target && _typeof(target) === "object" && target.nodeType === 1) {
                        if (action === "copy" && target.hasAttribute("disabled")) {
                          throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        }
                        if (action === "cut" && (target.hasAttribute("readonly") || target.hasAttribute("disabled"))) {
                          throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
                        }
                      } else {
                        throw new Error('Invalid "target" value, use a valid Element');
                      }
                    }
                    if (text) {
                      return actions_copy(text, {
                        container
                      });
                    }
                    if (target) {
                      return action === "cut" ? actions_cut(target) : actions_copy(target, {
                        container
                      });
                    }
                  };
                  var actions_default = ClipboardActionDefault;
                  ;
                  function clipboard_typeof(obj) {
                    "@babel/helpers - typeof";
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                      clipboard_typeof = function _typeof2(obj2) {
                        return typeof obj2;
                      };
                    } else {
                      clipboard_typeof = function _typeof2(obj2) {
                        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                      };
                    }
                    return clipboard_typeof(obj);
                  }
                  function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                      throw new TypeError("Cannot call a class as a function");
                    }
                  }
                  function _defineProperties(target, props) {
                    for (var i2 = 0; i2 < props.length; i2++) {
                      var descriptor = props[i2];
                      descriptor.enumerable = descriptor.enumerable || false;
                      descriptor.configurable = true;
                      if ("value" in descriptor) descriptor.writable = true;
                      Object.defineProperty(target, descriptor.key, descriptor);
                    }
                  }
                  function _createClass(Constructor, protoProps, staticProps) {
                    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) _defineProperties(Constructor, staticProps);
                    return Constructor;
                  }
                  function _inherits(subClass, superClass) {
                    if (typeof superClass !== "function" && superClass !== null) {
                      throw new TypeError("Super expression must either be null or a function");
                    }
                    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
                    if (superClass) _setPrototypeOf(subClass, superClass);
                  }
                  function _setPrototypeOf(o2, p2) {
                    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p3) {
                      o3.__proto__ = p3;
                      return o3;
                    };
                    return _setPrototypeOf(o2, p2);
                  }
                  function _createSuper(Derived) {
                    var hasNativeReflectConstruct = _isNativeReflectConstruct();
                    return function _createSuperInternal() {
                      var Super = _getPrototypeOf(Derived), result;
                      if (hasNativeReflectConstruct) {
                        var NewTarget = _getPrototypeOf(this).constructor;
                        result = Reflect.construct(Super, arguments, NewTarget);
                      } else {
                        result = Super.apply(this, arguments);
                      }
                      return _possibleConstructorReturn(this, result);
                    };
                  }
                  function _possibleConstructorReturn(self, call) {
                    if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) {
                      return call;
                    }
                    return _assertThisInitialized(self);
                  }
                  function _assertThisInitialized(self) {
                    if (self === void 0) {
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }
                    return self;
                  }
                  function _isNativeReflectConstruct() {
                    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
                    if (Reflect.construct.sham) return false;
                    if (typeof Proxy === "function") return true;
                    try {
                      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                      }));
                      return true;
                    } catch (e2) {
                      return false;
                    }
                  }
                  function _getPrototypeOf(o2) {
                    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o3) {
                      return o3.__proto__ || Object.getPrototypeOf(o3);
                    };
                    return _getPrototypeOf(o2);
                  }
                  function getAttributeValue(suffix, element) {
                    var attribute = "data-clipboard-".concat(suffix);
                    if (!element.hasAttribute(attribute)) {
                      return;
                    }
                    return element.getAttribute(attribute);
                  }
                  var Clipboard2 = /* @__PURE__ */ function(_Emitter) {
                    _inherits(Clipboard3, _Emitter);
                    var _super = _createSuper(Clipboard3);
                    function Clipboard3(trigger, options) {
                      var _this;
                      _classCallCheck(this, Clipboard3);
                      _this = _super.call(this);
                      _this.resolveOptions(options);
                      _this.listenClick(trigger);
                      return _this;
                    }
                    _createClass(Clipboard3, [{
                      key: "resolveOptions",
                      value: function resolveOptions() {
                        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                        this.action = typeof options.action === "function" ? options.action : this.defaultAction;
                        this.target = typeof options.target === "function" ? options.target : this.defaultTarget;
                        this.text = typeof options.text === "function" ? options.text : this.defaultText;
                        this.container = clipboard_typeof(options.container) === "object" ? options.container : document.body;
                      }
                      /**
                       * Adds a click event listener to the passed trigger.
                       * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
                       */
                    }, {
                      key: "listenClick",
                      value: function listenClick(trigger) {
                        var _this2 = this;
                        this.listener = listen_default()(trigger, "click", function(e2) {
                          return _this2.onClick(e2);
                        });
                      }
                      /**
                       * Defines a new `ClipboardAction` on each click event.
                       * @param {Event} e
                       */
                    }, {
                      key: "onClick",
                      value: function onClick(e2) {
                        var trigger = e2.delegateTarget || e2.currentTarget;
                        var action = this.action(trigger) || "copy";
                        var text = actions_default({
                          action,
                          container: this.container,
                          target: this.target(trigger),
                          text: this.text(trigger)
                        });
                        this.emit(text ? "success" : "error", {
                          action,
                          text,
                          trigger,
                          clearSelection: function clearSelection() {
                            if (trigger) {
                              trigger.focus();
                            }
                            window.getSelection().removeAllRanges();
                          }
                        });
                      }
                      /**
                       * Default `action` lookup function.
                       * @param {Element} trigger
                       */
                    }, {
                      key: "defaultAction",
                      value: function defaultAction(trigger) {
                        return getAttributeValue("action", trigger);
                      }
                      /**
                       * Default `target` lookup function.
                       * @param {Element} trigger
                       */
                    }, {
                      key: "defaultTarget",
                      value: function defaultTarget(trigger) {
                        var selector = getAttributeValue("target", trigger);
                        if (selector) {
                          return document.querySelector(selector);
                        }
                      }
                      /**
                       * Allow fire programmatically a copy action
                       * @param {String|HTMLElement} target
                       * @param {Object} options
                       * @returns Text copied.
                       */
                    }, {
                      key: "defaultText",
                      /**
                       * Default `text` lookup function.
                       * @param {Element} trigger
                       */
                      value: function defaultText(trigger) {
                        return getAttributeValue("text", trigger);
                      }
                      /**
                       * Destroy lifecycle.
                       */
                    }, {
                      key: "destroy",
                      value: function destroy() {
                        this.listener.destroy();
                      }
                    }], [{
                      key: "copy",
                      value: function copy(target) {
                        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                          container: document.body
                        };
                        return actions_copy(target, options);
                      }
                      /**
                       * Allow fire programmatically a cut action
                       * @param {String|HTMLElement} target
                       * @returns Text cutted.
                       */
                    }, {
                      key: "cut",
                      value: function cut(target) {
                        return actions_cut(target);
                      }
                      /**
                       * Returns the support of the given action, or all actions if no action is
                       * given.
                       * @param {String} [action]
                       */
                    }, {
                      key: "isSupported",
                      value: function isSupported() {
                        var action = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"];
                        var actions = typeof action === "string" ? [action] : action;
                        var support = !!document.queryCommandSupported;
                        actions.forEach(function(action2) {
                          support = support && !!document.queryCommandSupported(action2);
                        });
                        return support;
                      }
                    }]);
                    return Clipboard3;
                  }(tiny_emitter_default());
                  var clipboard = Clipboard2;
                }
              ),
              /***/
              828: (
                /***/
                function(module2) {
                  var DOCUMENT_NODE_TYPE = 9;
                  if (typeof Element !== "undefined" && !Element.prototype.matches) {
                    var proto = Element.prototype;
                    proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
                  }
                  function closest(element, selector) {
                    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
                      if (typeof element.matches === "function" && element.matches(selector)) {
                        return element;
                      }
                      element = element.parentNode;
                    }
                  }
                  module2.exports = closest;
                }
              ),
              /***/
              438: (
                /***/
                function(module2, __unused_webpack_exports, __webpack_require__2) {
                  var closest = __webpack_require__2(828);
                  function _delegate(element, selector, type, callback, useCapture) {
                    var listenerFn = listener.apply(this, arguments);
                    element.addEventListener(type, listenerFn, useCapture);
                    return {
                      destroy: function() {
                        element.removeEventListener(type, listenerFn, useCapture);
                      }
                    };
                  }
                  function delegate(elements, selector, type, callback, useCapture) {
                    if (typeof elements.addEventListener === "function") {
                      return _delegate.apply(null, arguments);
                    }
                    if (typeof type === "function") {
                      return _delegate.bind(null, document).apply(null, arguments);
                    }
                    if (typeof elements === "string") {
                      elements = document.querySelectorAll(elements);
                    }
                    return Array.prototype.map.call(elements, function(element) {
                      return _delegate(element, selector, type, callback, useCapture);
                    });
                  }
                  function listener(element, selector, type, callback) {
                    return function(e2) {
                      e2.delegateTarget = closest(e2.target, selector);
                      if (e2.delegateTarget) {
                        callback.call(element, e2);
                      }
                    };
                  }
                  module2.exports = delegate;
                }
              ),
              /***/
              879: (
                /***/
                function(__unused_webpack_module, exports2) {
                  exports2.node = function(value) {
                    return value !== void 0 && value instanceof HTMLElement && value.nodeType === 1;
                  };
                  exports2.nodeList = function(value) {
                    var type = Object.prototype.toString.call(value);
                    return value !== void 0 && (type === "[object NodeList]" || type === "[object HTMLCollection]") && "length" in value && (value.length === 0 || exports2.node(value[0]));
                  };
                  exports2.string = function(value) {
                    return typeof value === "string" || value instanceof String;
                  };
                  exports2.fn = function(value) {
                    var type = Object.prototype.toString.call(value);
                    return type === "[object Function]";
                  };
                }
              ),
              /***/
              370: (
                /***/
                function(module2, __unused_webpack_exports, __webpack_require__2) {
                  var is = __webpack_require__2(879);
                  var delegate = __webpack_require__2(438);
                  function listen(target, type, callback) {
                    if (!target && !type && !callback) {
                      throw new Error("Missing required arguments");
                    }
                    if (!is.string(type)) {
                      throw new TypeError("Second argument must be a String");
                    }
                    if (!is.fn(callback)) {
                      throw new TypeError("Third argument must be a Function");
                    }
                    if (is.node(target)) {
                      return listenNode(target, type, callback);
                    } else if (is.nodeList(target)) {
                      return listenNodeList(target, type, callback);
                    } else if (is.string(target)) {
                      return listenSelector(target, type, callback);
                    } else {
                      throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                    }
                  }
                  function listenNode(node, type, callback) {
                    node.addEventListener(type, callback);
                    return {
                      destroy: function() {
                        node.removeEventListener(type, callback);
                      }
                    };
                  }
                  function listenNodeList(nodeList, type, callback) {
                    Array.prototype.forEach.call(nodeList, function(node) {
                      node.addEventListener(type, callback);
                    });
                    return {
                      destroy: function() {
                        Array.prototype.forEach.call(nodeList, function(node) {
                          node.removeEventListener(type, callback);
                        });
                      }
                    };
                  }
                  function listenSelector(selector, type, callback) {
                    return delegate(document.body, selector, type, callback);
                  }
                  module2.exports = listen;
                }
              ),
              /***/
              817: (
                /***/
                function(module2) {
                  function select(element) {
                    var selectedText;
                    if (element.nodeName === "SELECT") {
                      element.focus();
                      selectedText = element.value;
                    } else if (element.nodeName === "INPUT" || element.nodeName === "TEXTAREA") {
                      var isReadOnly = element.hasAttribute("readonly");
                      if (!isReadOnly) {
                        element.setAttribute("readonly", "");
                      }
                      element.select();
                      element.setSelectionRange(0, element.value.length);
                      if (!isReadOnly) {
                        element.removeAttribute("readonly");
                      }
                      selectedText = element.value;
                    } else {
                      if (element.hasAttribute("contenteditable")) {
                        element.focus();
                      }
                      var selection = window.getSelection();
                      var range = document.createRange();
                      range.selectNodeContents(element);
                      selection.removeAllRanges();
                      selection.addRange(range);
                      selectedText = selection.toString();
                    }
                    return selectedText;
                  }
                  module2.exports = select;
                }
              ),
              /***/
              279: (
                /***/
                function(module2) {
                  function E2() {
                  }
                  E2.prototype = {
                    on: function(name, callback, ctx) {
                      var e2 = this.e || (this.e = {});
                      (e2[name] || (e2[name] = [])).push({
                        fn: callback,
                        ctx
                      });
                      return this;
                    },
                    once: function(name, callback, ctx) {
                      var self = this;
                      function listener() {
                        self.off(name, listener);
                        callback.apply(ctx, arguments);
                      }
                      ;
                      listener._ = callback;
                      return this.on(name, listener, ctx);
                    },
                    emit: function(name) {
                      var data = [].slice.call(arguments, 1);
                      var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
                      var i2 = 0;
                      var len = evtArr.length;
                      for (i2; i2 < len; i2++) {
                        evtArr[i2].fn.apply(evtArr[i2].ctx, data);
                      }
                      return this;
                    },
                    off: function(name, callback) {
                      var e2 = this.e || (this.e = {});
                      var evts = e2[name];
                      var liveEvents = [];
                      if (evts && callback) {
                        for (var i2 = 0, len = evts.length; i2 < len; i2++) {
                          if (evts[i2].fn !== callback && evts[i2].fn._ !== callback)
                            liveEvents.push(evts[i2]);
                        }
                      }
                      liveEvents.length ? e2[name] = liveEvents : delete e2[name];
                      return this;
                    }
                  };
                  module2.exports = E2;
                  module2.exports.TinyEmitter = E2;
                }
              )
              /******/
            };
            var __webpack_module_cache__ = {};
            function __webpack_require__(moduleId) {
              if (__webpack_module_cache__[moduleId]) {
                return __webpack_module_cache__[moduleId].exports;
              }
              var module2 = __webpack_module_cache__[moduleId] = {
                /******/
                // no module.id needed
                /******/
                // no module.loaded needed
                /******/
                exports: {}
                /******/
              };
              __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
              return module2.exports;
            }
            !function() {
              __webpack_require__.n = function(module2) {
                var getter = module2 && module2.__esModule ? (
                  /******/
                  function() {
                    return module2["default"];
                  }
                ) : (
                  /******/
                  function() {
                    return module2;
                  }
                );
                __webpack_require__.d(getter, { a: getter });
                return getter;
              };
            }();
            !function() {
              __webpack_require__.d = function(exports2, definition) {
                for (var key in definition) {
                  if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                    Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
                  }
                }
              };
            }();
            !function() {
              __webpack_require__.o = function(obj, prop) {
                return Object.prototype.hasOwnProperty.call(obj, prop);
              };
            }();
            return __webpack_require__(686);
          }().default
        );
      });
    }
  });

  // <stdin>
  init_shims();

  // ns-hugo-imp:/home/runner/work/paketo-website/paketo-website/build-environment/assets/js/components/navigation.js
  init_shims();
  var Navigation = class {
    constructor({ element }) {
      this.opener = element.querySelector(".nav-opener");
      this.container = element.querySelector("#nav-container");
      this.tray = element.querySelector("#nav-tray");
      this.opener.addEventListener("click", this.handleClick.bind(this));
    }
    handleClick(event) {
      this.opener.classList.toggle("nav-opener__bar--opened");
      this.tray.classList.toggle("nav--showing");
      this.container.classList.toggle("nav-container--showing");
    }
  };

  // ns-hugo-imp:/home/runner/work/paketo-website/paketo-website/build-environment/assets/js/components/links.js
  init_shims();
  function OpenExternalLinksInNewTab({ links, hostname }) {
    for (const link of links) {
      if (link.hostname != hostname) {
        var alertElement = document.createElement("span");
        alertElement.appendChild(document.createTextNode("(opens in a new tab)"));
        alertElement.classList.add("screen-reader-link-text");
        link.appendChild(alertElement);
        link.target = "_blank";
      }
    }
  }

  // ns-hugo-imp:/home/runner/work/paketo-website/paketo-website/build-environment/assets/js/components/code_snippet.js
  init_shims();
  var import_clipboard = __toESM(require_clipboard());
  var CodeSnippet = class {
    constructor({ element }) {
      this.element = element;
      if (element.classList.contains("copyable")) {
        new Clipboard({
          element: this.element,
          button: this.element.querySelector(".copyable__clipboard"),
          code: this.element.querySelector(".copyable__code").innerText
        });
      }
    }
  };
  var Clipboard = class {
    constructor({ element, button, code }) {
      this.element = element;
      this.code = code;
      button.addEventListener("click", this.handleClick.bind(this));
    }
    handleClick() {
      if (this.element.classList.contains("copyable--clicked")) {
        return;
      }
      import_clipboard.default.copy(this.code);
      this.element.classList.add("copyable--clicked");
      setTimeout(() => {
        this.element.classList.toggle("copyable--clicked");
      }, 1900);
    }
  };
  var Output = class {
    constructor({ element, button }) {
      this.element = element;
      this.button = element.querySelector(".code-output__btn");
      this.button.addEventListener("click", this.handleClick.bind(this));
    }
    handleClick() {
      this.element.classList.toggle("code-output--opened");
      var button = this.element.querySelector(".code-output__btn");
      if (button.textContent == "View Output") {
        button.textContent = "Hide Output";
      } else {
        button.textContent = "View Output";
      }
    }
  };

  // ns-hugo-imp:/home/runner/work/paketo-website/paketo-website/build-environment/assets/js/components/docs-sidebar.js
  init_shims();
  var DocsSidebarExpander = class {
    constructor({ element }) {
      this.submenu = element;
      this.header = element.querySelector(".docs-menu__section-header");
      this.expanderTriangle = element.querySelector(".expander-button__triangle");
      this.children = element.querySelector(".docs-menu__children-list");
      this.header.addEventListener("click", this.handleClick.bind(this));
    }
    handleClick(event) {
      if (this.submenu.querySelectorAll(".docs-menu__link--active").length == 0) {
        this.children.classList.toggle("docs-menu__children-list--opened");
        this.expanderTriangle.classList.toggle("expander-button__triangle--opened");
      }
    }
  };

  // ns-hugo-imp:/home/runner/work/paketo-website/paketo-website/build-environment/assets/js/components/search.js
  init_shims();

  // node_modules/@docsearch/js/dist/esm/index.js
  init_shims();
  function e() {
    return e = Object.assign ? Object.assign.bind() : function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2) ({}).hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
      }
      return e2;
    }, e.apply(null, arguments);
  }
  function t(e2) {
    return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, t(e2);
  }
  var n;
  var r;
  var o;
  var i;
  var a;
  var c;
  var u;
  var l;
  var s;
  var f;
  var p;
  var m = {};
  var v = [];
  var h = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var d = Array.isArray;
  function y(e2, t2) {
    for (var n2 in t2) e2[n2] = t2[n2];
    return e2;
  }
  function _(e2) {
    e2 && e2.parentNode && e2.parentNode.removeChild(e2);
  }
  function g(e2, t2, r2) {
    var o2, i2, a2, c2 = {};
    for (a2 in t2) "key" == a2 ? o2 = t2[a2] : "ref" == a2 ? i2 = t2[a2] : c2[a2] = t2[a2];
    if (arguments.length > 2 && (c2.children = arguments.length > 3 ? n.call(arguments, 2) : r2), "function" == typeof e2 && null != e2.defaultProps) for (a2 in e2.defaultProps) void 0 === c2[a2] && (c2[a2] = e2.defaultProps[a2]);
    return b(e2, c2, o2, i2, null);
  }
  function b(e2, t2, n2, i2, a2) {
    var c2 = { type: e2, props: t2, key: n2, ref: i2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == a2 ? ++o : a2, __i: -1, __u: 0 };
    return null == a2 && null != r.vnode && r.vnode(c2), c2;
  }
  function S(e2) {
    return e2.children;
  }
  function O(e2, t2) {
    this.props = e2, this.context = t2;
  }
  function w(e2, t2) {
    if (null == t2) return e2.__ ? w(e2.__, e2.__i + 1) : null;
    for (var n2; t2 < e2.__k.length; t2++) if (null != (n2 = e2.__k[t2]) && null != n2.__e) return n2.__e;
    return "function" == typeof e2.type ? w(e2) : null;
  }
  function E(e2) {
    var t2, n2;
    if (null != (e2 = e2.__) && null != e2.__c) {
      for (e2.__e = e2.__c.base = null, t2 = 0; t2 < e2.__k.length; t2++) if (null != (n2 = e2.__k[t2]) && null != n2.__e) {
        e2.__e = e2.__c.base = n2.__e;
        break;
      }
      return E(e2);
    }
  }
  function j(e2) {
    (!e2.__d && (e2.__d = true) && i.push(e2) && !P.__r++ || a !== r.debounceRendering) && ((a = r.debounceRendering) || c)(P);
  }
  function P() {
    var e2, t2, n2, o2, a2, c2, l2, s2;
    for (i.sort(u); e2 = i.shift(); ) e2.__d && (t2 = i.length, o2 = void 0, c2 = (a2 = (n2 = e2).__v).__e, l2 = [], s2 = [], n2.__P && ((o2 = y({}, a2)).__v = a2.__v + 1, r.vnode && r.vnode(o2), R(n2.__P, o2, a2, n2.__n, n2.__P.namespaceURI, 32 & a2.__u ? [c2] : null, l2, null == c2 ? w(a2) : c2, !!(32 & a2.__u), s2), o2.__v = a2.__v, o2.__.__k[o2.__i] = o2, L(l2, o2, s2), o2.__e != c2 && E(o2)), i.length > t2 && i.sort(u));
    P.__r = 0;
  }
  function I(e2, t2, n2, r2, o2, i2, a2, c2, u2, l2, s2) {
    var f2, p2, h2, d2, y2, _2 = r2 && r2.__k || v, g2 = t2.length;
    for (n2.__d = u2, k(n2, t2, _2), u2 = n2.__d, f2 = 0; f2 < g2; f2++) null != (h2 = n2.__k[f2]) && (p2 = -1 === h2.__i ? m : _2[h2.__i] || m, h2.__i = f2, R(e2, h2, p2, o2, i2, a2, c2, u2, l2, s2), d2 = h2.__e, h2.ref && p2.ref != h2.ref && (p2.ref && M(p2.ref, null, h2), s2.push(h2.ref, h2.__c || d2, h2)), null == y2 && null != d2 && (y2 = d2), 65536 & h2.__u || p2.__k === h2.__k ? u2 = D(h2, u2, e2) : "function" == typeof h2.type && void 0 !== h2.__d ? u2 = h2.__d : d2 && (u2 = d2.nextSibling), h2.__d = void 0, h2.__u &= -196609);
    n2.__d = u2, n2.__e = y2;
  }
  function k(e2, t2, n2) {
    var r2, o2, i2, a2, c2, u2 = t2.length, l2 = n2.length, s2 = l2, f2 = 0;
    for (e2.__k = [], r2 = 0; r2 < u2; r2++) null != (o2 = t2[r2]) && "boolean" != typeof o2 && "function" != typeof o2 ? (a2 = r2 + f2, (o2 = e2.__k[r2] = "string" == typeof o2 || "number" == typeof o2 || "bigint" == typeof o2 || o2.constructor == String ? b(null, o2, null, null, null) : d(o2) ? b(S, { children: o2 }, null, null, null) : void 0 === o2.constructor && o2.__b > 0 ? b(o2.type, o2.props, o2.key, o2.ref ? o2.ref : null, o2.__v) : o2).__ = e2, o2.__b = e2.__b + 1, i2 = null, -1 !== (c2 = o2.__i = x(o2, n2, a2, s2)) && (s2--, (i2 = n2[c2]) && (i2.__u |= 131072)), null == i2 || null === i2.__v ? (-1 == c2 && f2--, "function" != typeof o2.type && (o2.__u |= 65536)) : c2 !== a2 && (c2 == a2 - 1 ? f2-- : c2 == a2 + 1 ? f2++ : (c2 > a2 ? f2-- : f2++, o2.__u |= 65536))) : o2 = e2.__k[r2] = null;
    if (s2) for (r2 = 0; r2 < l2; r2++) null != (i2 = n2[r2]) && !(131072 & i2.__u) && (i2.__e == e2.__d && (e2.__d = w(i2)), H(i2, i2));
  }
  function D(e2, t2, n2) {
    var r2, o2;
    if ("function" == typeof e2.type) {
      for (r2 = e2.__k, o2 = 0; r2 && o2 < r2.length; o2++) r2[o2] && (r2[o2].__ = e2, t2 = D(r2[o2], t2, n2));
      return t2;
    }
    e2.__e != t2 && (t2 && e2.type && !n2.contains(t2) && (t2 = w(e2)), n2.insertBefore(e2.__e, t2 || null), t2 = e2.__e);
    do {
      t2 = t2 && t2.nextSibling;
    } while (null != t2 && 8 === t2.nodeType);
    return t2;
  }
  function C(e2, t2) {
    return t2 = t2 || [], null == e2 || "boolean" == typeof e2 || (d(e2) ? e2.some(function(e3) {
      C(e3, t2);
    }) : t2.push(e2)), t2;
  }
  function x(e2, t2, n2, r2) {
    var o2 = e2.key, i2 = e2.type, a2 = n2 - 1, c2 = n2 + 1, u2 = t2[n2];
    if (null === u2 || u2 && o2 == u2.key && i2 === u2.type && !(131072 & u2.__u)) return n2;
    if (r2 > (null == u2 || 131072 & u2.__u ? 0 : 1)) for (; a2 >= 0 || c2 < t2.length; ) {
      if (a2 >= 0) {
        if ((u2 = t2[a2]) && !(131072 & u2.__u) && o2 == u2.key && i2 === u2.type) return a2;
        a2--;
      }
      if (c2 < t2.length) {
        if ((u2 = t2[c2]) && !(131072 & u2.__u) && o2 == u2.key && i2 === u2.type) return c2;
        c2++;
      }
    }
    return -1;
  }
  function A(e2, t2, n2) {
    "-" === t2[0] ? e2.setProperty(t2, null == n2 ? "" : n2) : e2[t2] = null == n2 ? "" : "number" != typeof n2 || h.test(t2) ? n2 : n2 + "px";
  }
  function N(e2, t2, n2, r2, o2) {
    var i2;
    e: if ("style" === t2) if ("string" == typeof n2) e2.style.cssText = n2;
    else {
      if ("string" == typeof r2 && (e2.style.cssText = r2 = ""), r2) for (t2 in r2) n2 && t2 in n2 || A(e2.style, t2, "");
      if (n2) for (t2 in n2) r2 && n2[t2] === r2[t2] || A(e2.style, t2, n2[t2]);
    }
    else if ("o" === t2[0] && "n" === t2[1]) i2 = t2 !== (t2 = t2.replace(/(PointerCapture)$|Capture$/i, "$1")), t2 = t2.toLowerCase() in e2 || "onFocusOut" === t2 || "onFocusIn" === t2 ? t2.toLowerCase().slice(2) : t2.slice(2), e2.l || (e2.l = {}), e2.l[t2 + i2] = n2, n2 ? r2 ? n2.u = r2.u : (n2.u = l, e2.addEventListener(t2, i2 ? f : s, i2)) : e2.removeEventListener(t2, i2 ? f : s, i2);
    else {
      if ("http://www.w3.org/2000/svg" == o2) t2 = t2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != t2 && "height" != t2 && "href" != t2 && "list" != t2 && "form" != t2 && "tabIndex" != t2 && "download" != t2 && "rowSpan" != t2 && "colSpan" != t2 && "role" != t2 && "popover" != t2 && t2 in e2) try {
        e2[t2] = null == n2 ? "" : n2;
        break e;
      } catch (e3) {
      }
      "function" == typeof n2 || (null == n2 || false === n2 && "-" !== t2[4] ? e2.removeAttribute(t2) : e2.setAttribute(t2, "popover" == t2 && 1 == n2 ? "" : n2));
    }
  }
  function T(e2) {
    return function(t2) {
      if (this.l) {
        var n2 = this.l[t2.type + e2];
        if (null == t2.t) t2.t = l++;
        else if (t2.t < n2.u) return;
        return n2(r.event ? r.event(t2) : t2);
      }
    };
  }
  function R(e2, t2, n2, o2, i2, a2, c2, u2, l2, s2) {
    var f2, p2, m2, v2, h2, _2, g2, b2, w2, E2, j2, P2, k2, D2, C2, x2, A2 = t2.type;
    if (void 0 !== t2.constructor) return null;
    128 & n2.__u && (l2 = !!(32 & n2.__u), a2 = [u2 = t2.__e = n2.__e]), (f2 = r.__b) && f2(t2);
    e: if ("function" == typeof A2) try {
      if (b2 = t2.props, w2 = "prototype" in A2 && A2.prototype.render, E2 = (f2 = A2.contextType) && o2[f2.__c], j2 = f2 ? E2 ? E2.props.value : f2.__ : o2, n2.__c ? g2 = (p2 = t2.__c = n2.__c).__ = p2.__E : (w2 ? t2.__c = p2 = new A2(b2, j2) : (t2.__c = p2 = new O(b2, j2), p2.constructor = A2, p2.render = U), E2 && E2.sub(p2), p2.props = b2, p2.state || (p2.state = {}), p2.context = j2, p2.__n = o2, m2 = p2.__d = true, p2.__h = [], p2._sb = []), w2 && null == p2.__s && (p2.__s = p2.state), w2 && null != A2.getDerivedStateFromProps && (p2.__s == p2.state && (p2.__s = y({}, p2.__s)), y(p2.__s, A2.getDerivedStateFromProps(b2, p2.__s))), v2 = p2.props, h2 = p2.state, p2.__v = t2, m2) w2 && null == A2.getDerivedStateFromProps && null != p2.componentWillMount && p2.componentWillMount(), w2 && null != p2.componentDidMount && p2.__h.push(p2.componentDidMount);
      else {
        if (w2 && null == A2.getDerivedStateFromProps && b2 !== v2 && null != p2.componentWillReceiveProps && p2.componentWillReceiveProps(b2, j2), !p2.__e && (null != p2.shouldComponentUpdate && false === p2.shouldComponentUpdate(b2, p2.__s, j2) || t2.__v === n2.__v)) {
          for (t2.__v !== n2.__v && (p2.props = b2, p2.state = p2.__s, p2.__d = false), t2.__e = n2.__e, t2.__k = n2.__k, t2.__k.some(function(e3) {
            e3 && (e3.__ = t2);
          }), P2 = 0; P2 < p2._sb.length; P2++) p2.__h.push(p2._sb[P2]);
          p2._sb = [], p2.__h.length && c2.push(p2);
          break e;
        }
        null != p2.componentWillUpdate && p2.componentWillUpdate(b2, p2.__s, j2), w2 && null != p2.componentDidUpdate && p2.__h.push(function() {
          p2.componentDidUpdate(v2, h2, _2);
        });
      }
      if (p2.context = j2, p2.props = b2, p2.__P = e2, p2.__e = false, k2 = r.__r, D2 = 0, w2) {
        for (p2.state = p2.__s, p2.__d = false, k2 && k2(t2), f2 = p2.render(p2.props, p2.state, p2.context), C2 = 0; C2 < p2._sb.length; C2++) p2.__h.push(p2._sb[C2]);
        p2._sb = [];
      } else do {
        p2.__d = false, k2 && k2(t2), f2 = p2.render(p2.props, p2.state, p2.context), p2.state = p2.__s;
      } while (p2.__d && ++D2 < 25);
      p2.state = p2.__s, null != p2.getChildContext && (o2 = y(y({}, o2), p2.getChildContext())), w2 && !m2 && null != p2.getSnapshotBeforeUpdate && (_2 = p2.getSnapshotBeforeUpdate(v2, h2)), I(e2, d(x2 = null != f2 && f2.type === S && null == f2.key ? f2.props.children : f2) ? x2 : [x2], t2, n2, o2, i2, a2, c2, u2, l2, s2), p2.base = t2.__e, t2.__u &= -161, p2.__h.length && c2.push(p2), g2 && (p2.__E = p2.__ = null);
    } catch (e3) {
      if (t2.__v = null, l2 || null != a2) {
        for (t2.__u |= l2 ? 160 : 128; u2 && 8 === u2.nodeType && u2.nextSibling; ) u2 = u2.nextSibling;
        a2[a2.indexOf(u2)] = null, t2.__e = u2;
      } else t2.__e = n2.__e, t2.__k = n2.__k;
      r.__e(e3, t2, n2);
    }
    else null == a2 && t2.__v === n2.__v ? (t2.__k = n2.__k, t2.__e = n2.__e) : t2.__e = q(n2.__e, t2, n2, o2, i2, a2, c2, l2, s2);
    (f2 = r.diffed) && f2(t2);
  }
  function L(e2, t2, n2) {
    t2.__d = void 0;
    for (var o2 = 0; o2 < n2.length; o2++) M(n2[o2], n2[++o2], n2[++o2]);
    r.__c && r.__c(t2, e2), e2.some(function(t3) {
      try {
        e2 = t3.__h, t3.__h = [], e2.some(function(e3) {
          e3.call(t3);
        });
      } catch (e3) {
        r.__e(e3, t3.__v);
      }
    });
  }
  function q(e2, t2, o2, i2, a2, c2, u2, l2, s2) {
    var f2, p2, v2, h2, y2, g2, b2, S2 = o2.props, O2 = t2.props, E2 = t2.type;
    if ("svg" === E2 ? a2 = "http://www.w3.org/2000/svg" : "math" === E2 ? a2 = "http://www.w3.org/1998/Math/MathML" : a2 || (a2 = "http://www.w3.org/1999/xhtml"), null != c2) {
      for (f2 = 0; f2 < c2.length; f2++) if ((y2 = c2[f2]) && "setAttribute" in y2 == !!E2 && (E2 ? y2.localName === E2 : 3 === y2.nodeType)) {
        e2 = y2, c2[f2] = null;
        break;
      }
    }
    if (null == e2) {
      if (null === E2) return document.createTextNode(O2);
      e2 = document.createElementNS(a2, E2, O2.is && O2), l2 && (r.__m && r.__m(t2, c2), l2 = false), c2 = null;
    }
    if (null === E2) S2 === O2 || l2 && e2.data === O2 || (e2.data = O2);
    else {
      if (c2 = c2 && n.call(e2.childNodes), S2 = o2.props || m, !l2 && null != c2) for (S2 = {}, f2 = 0; f2 < e2.attributes.length; f2++) S2[(y2 = e2.attributes[f2]).name] = y2.value;
      for (f2 in S2) if (y2 = S2[f2], "children" == f2) ;
      else if ("dangerouslySetInnerHTML" == f2) v2 = y2;
      else if (!(f2 in O2)) {
        if ("value" == f2 && "defaultValue" in O2 || "checked" == f2 && "defaultChecked" in O2) continue;
        N(e2, f2, null, y2, a2);
      }
      for (f2 in O2) y2 = O2[f2], "children" == f2 ? h2 = y2 : "dangerouslySetInnerHTML" == f2 ? p2 = y2 : "value" == f2 ? g2 = y2 : "checked" == f2 ? b2 = y2 : l2 && "function" != typeof y2 || S2[f2] === y2 || N(e2, f2, y2, S2[f2], a2);
      if (p2) l2 || v2 && (p2.__html === v2.__html || p2.__html === e2.innerHTML) || (e2.innerHTML = p2.__html), t2.__k = [];
      else if (v2 && (e2.innerHTML = ""), I(e2, d(h2) ? h2 : [h2], t2, o2, i2, "foreignObject" === E2 ? "http://www.w3.org/1999/xhtml" : a2, c2, u2, c2 ? c2[0] : o2.__k && w(o2, 0), l2, s2), null != c2) for (f2 = c2.length; f2--; ) _(c2[f2]);
      l2 || (f2 = "value", "progress" === E2 && null == g2 ? e2.removeAttribute("value") : void 0 !== g2 && (g2 !== e2[f2] || "progress" === E2 && !g2 || "option" === E2 && g2 !== S2[f2]) && N(e2, f2, g2, S2[f2], a2), f2 = "checked", void 0 !== b2 && b2 !== e2[f2] && N(e2, f2, b2, S2[f2], a2));
    }
    return e2;
  }
  function M(e2, t2, n2) {
    try {
      if ("function" == typeof e2) {
        var o2 = "function" == typeof e2.__u;
        o2 && e2.__u(), o2 && null == t2 || (e2.__u = e2(t2));
      } else e2.current = t2;
    } catch (e3) {
      r.__e(e3, n2);
    }
  }
  function H(e2, t2, n2) {
    var o2, i2;
    if (r.unmount && r.unmount(e2), (o2 = e2.ref) && (o2.current && o2.current !== e2.__e || M(o2, null, t2)), null != (o2 = e2.__c)) {
      if (o2.componentWillUnmount) try {
        o2.componentWillUnmount();
      } catch (e3) {
        r.__e(e3, t2);
      }
      o2.base = o2.__P = null;
    }
    if (o2 = e2.__k) for (i2 = 0; i2 < o2.length; i2++) o2[i2] && H(o2[i2], t2, n2 || "function" != typeof e2.type);
    n2 || _(e2.__e), e2.__c = e2.__ = e2.__e = e2.__d = void 0;
  }
  function U(e2, t2, n2) {
    return this.constructor(e2, n2);
  }
  function F(e2, t2, o2) {
    var i2, a2, c2, u2;
    r.__ && r.__(e2, t2), a2 = (i2 = "function" == typeof o2) ? null : o2 && o2.__k || t2.__k, c2 = [], u2 = [], R(t2, e2 = (!i2 && o2 || t2).__k = g(S, null, [e2]), a2 || m, m, t2.namespaceURI, !i2 && o2 ? [o2] : a2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, c2, !i2 && o2 ? o2 : a2 ? a2.__e : t2.firstChild, i2, u2), L(c2, e2, u2);
  }
  function B(e2, t2) {
    F(e2, t2, B);
  }
  function V(e2, t2, r2) {
    var o2, i2, a2, c2, u2 = y({}, e2.props);
    for (a2 in e2.type && e2.type.defaultProps && (c2 = e2.type.defaultProps), t2) "key" == a2 ? o2 = t2[a2] : "ref" == a2 ? i2 = t2[a2] : u2[a2] = void 0 === t2[a2] && void 0 !== c2 ? c2[a2] : t2[a2];
    return arguments.length > 2 && (u2.children = arguments.length > 3 ? n.call(arguments, 2) : r2), b(e2.type, u2, o2 || e2.key, i2 || e2.ref, null);
  }
  n = v.slice, r = { __e: function(e2, t2, n2, r2) {
    for (var o2, i2, a2; t2 = t2.__; ) if ((o2 = t2.__c) && !o2.__) try {
      if ((i2 = o2.constructor) && null != i2.getDerivedStateFromError && (o2.setState(i2.getDerivedStateFromError(e2)), a2 = o2.__d), null != o2.componentDidCatch && (o2.componentDidCatch(e2, r2 || {}), a2 = o2.__d), a2) return o2.__E = o2;
    } catch (t3) {
      e2 = t3;
    }
    throw e2;
  } }, o = 0, O.prototype.setState = function(e2, t2) {
    var n2;
    n2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = y({}, this.state), "function" == typeof e2 && (e2 = e2(y({}, n2), this.props)), e2 && y(n2, e2), null != e2 && this.__v && (t2 && this._sb.push(t2), j(this));
  }, O.prototype.forceUpdate = function(e2) {
    this.__v && (this.__e = true, e2 && this.__h.push(e2), j(this));
  }, O.prototype.render = S, i = [], c = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, u = function(e2, t2) {
    return e2.__v.__b - t2.__v.__b;
  }, P.__r = 0, l = 0, s = T(false), f = T(true), p = 0;
  var K;
  var W;
  var z;
  var J;
  var Q = 0;
  var $ = [];
  var Z = r;
  var G = Z.__b;
  var Y = Z.__r;
  var X = Z.diffed;
  var ee = Z.__c;
  var te = Z.unmount;
  var ne = Z.__;
  function re(e2, t2) {
    Z.__h && Z.__h(W, e2, Q || t2), Q = 0;
    var n2 = W.__H || (W.__H = { __: [], __h: [] });
    return e2 >= n2.__.length && n2.__.push({}), n2.__[e2];
  }
  function oe(e2) {
    return Q = 1, ie(Se, e2);
  }
  function ie(e2, t2, n2) {
    var r2 = re(K++, 2);
    if (r2.t = e2, !r2.__c && (r2.__ = [n2 ? n2(t2) : Se(void 0, t2), function(e3) {
      var t3 = r2.__N ? r2.__N[0] : r2.__[0], n3 = r2.t(t3, e3);
      t3 !== n3 && (r2.__N = [n3, r2.__[1]], r2.__c.setState({}));
    }], r2.__c = W, !W.u)) {
      var o2 = function(e3, t3, n3) {
        if (!r2.__c.__H) return true;
        var o3 = r2.__c.__H.__.filter(function(e4) {
          return !!e4.__c;
        });
        if (o3.every(function(e4) {
          return !e4.__N;
        })) return !i2 || i2.call(this, e3, t3, n3);
        var a3 = false;
        return o3.forEach(function(e4) {
          if (e4.__N) {
            var t4 = e4.__[0];
            e4.__ = e4.__N, e4.__N = void 0, t4 !== e4.__[0] && (a3 = true);
          }
        }), !(!a3 && r2.__c.props === e3) && (!i2 || i2.call(this, e3, t3, n3));
      };
      W.u = true;
      var i2 = W.shouldComponentUpdate, a2 = W.componentWillUpdate;
      W.componentWillUpdate = function(e3, t3, n3) {
        if (this.__e) {
          var r3 = i2;
          i2 = void 0, o2(e3, t3, n3), i2 = r3;
        }
        a2 && a2.call(this, e3, t3, n3);
      }, W.shouldComponentUpdate = o2;
    }
    return r2.__N || r2.__;
  }
  function ae(e2, t2) {
    var n2 = re(K++, 3);
    !Z.__s && be(n2.__H, t2) && (n2.__ = e2, n2.i = t2, W.__H.__h.push(n2));
  }
  function ce(e2, t2) {
    var n2 = re(K++, 4);
    !Z.__s && be(n2.__H, t2) && (n2.__ = e2, n2.i = t2, W.__h.push(n2));
  }
  function ue(e2) {
    return Q = 5, se(function() {
      return { current: e2 };
    }, []);
  }
  function le(e2, t2, n2) {
    Q = 6, ce(function() {
      return "function" == typeof e2 ? (e2(t2()), function() {
        return e2(null);
      }) : e2 ? (e2.current = t2(), function() {
        return e2.current = null;
      }) : void 0;
    }, null == n2 ? n2 : n2.concat(e2));
  }
  function se(e2, t2) {
    var n2 = re(K++, 7);
    return be(n2.__H, t2) && (n2.__ = e2(), n2.__H = t2, n2.__h = e2), n2.__;
  }
  function fe(e2, t2) {
    return Q = 8, se(function() {
      return e2;
    }, t2);
  }
  function pe(e2) {
    var t2 = W.context[e2.__c], n2 = re(K++, 9);
    return n2.c = e2, t2 ? (null == n2.__ && (n2.__ = true, t2.sub(W)), t2.props.value) : e2.__;
  }
  function me(e2, t2) {
    Z.useDebugValue && Z.useDebugValue(t2 ? t2(e2) : e2);
  }
  function ve() {
    var e2 = re(K++, 11);
    if (!e2.__) {
      for (var t2 = W.__v; null !== t2 && !t2.__m && null !== t2.__; ) t2 = t2.__;
      var n2 = t2.__m || (t2.__m = [0, 0]);
      e2.__ = "P" + n2[0] + "-" + n2[1]++;
    }
    return e2.__;
  }
  function he() {
    for (var e2; e2 = $.shift(); ) if (e2.__P && e2.__H) try {
      e2.__H.__h.forEach(_e), e2.__H.__h.forEach(ge), e2.__H.__h = [];
    } catch (t2) {
      e2.__H.__h = [], Z.__e(t2, e2.__v);
    }
  }
  Z.__b = function(e2) {
    W = null, G && G(e2);
  }, Z.__ = function(e2, t2) {
    e2 && t2.__k && t2.__k.__m && (e2.__m = t2.__k.__m), ne && ne(e2, t2);
  }, Z.__r = function(e2) {
    Y && Y(e2), K = 0;
    var t2 = (W = e2.__c).__H;
    t2 && (z === W ? (t2.__h = [], W.__h = [], t2.__.forEach(function(e3) {
      e3.__N && (e3.__ = e3.__N), e3.i = e3.__N = void 0;
    })) : (t2.__h.forEach(_e), t2.__h.forEach(ge), t2.__h = [], K = 0)), z = W;
  }, Z.diffed = function(e2) {
    X && X(e2);
    var t2 = e2.__c;
    t2 && t2.__H && (t2.__H.__h.length && (1 !== $.push(t2) && J === Z.requestAnimationFrame || ((J = Z.requestAnimationFrame) || ye)(he)), t2.__H.__.forEach(function(e3) {
      e3.i && (e3.__H = e3.i), e3.i = void 0;
    })), z = W = null;
  }, Z.__c = function(e2, t2) {
    t2.some(function(e3) {
      try {
        e3.__h.forEach(_e), e3.__h = e3.__h.filter(function(e4) {
          return !e4.__ || ge(e4);
        });
      } catch (n2) {
        t2.some(function(e4) {
          e4.__h && (e4.__h = []);
        }), t2 = [], Z.__e(n2, e3.__v);
      }
    }), ee && ee(e2, t2);
  }, Z.unmount = function(e2) {
    te && te(e2);
    var t2, n2 = e2.__c;
    n2 && n2.__H && (n2.__H.__.forEach(function(e3) {
      try {
        _e(e3);
      } catch (e4) {
        t2 = e4;
      }
    }), n2.__H = void 0, t2 && Z.__e(t2, n2.__v));
  };
  var de = "function" == typeof requestAnimationFrame;
  function ye(e2) {
    var t2, n2 = function() {
      clearTimeout(r2), de && cancelAnimationFrame(t2), setTimeout(e2);
    }, r2 = setTimeout(n2, 100);
    de && (t2 = requestAnimationFrame(n2));
  }
  function _e(e2) {
    var t2 = W, n2 = e2.__c;
    "function" == typeof n2 && (e2.__c = void 0, n2()), W = t2;
  }
  function ge(e2) {
    var t2 = W;
    e2.__c = e2.__(), W = t2;
  }
  function be(e2, t2) {
    return !e2 || e2.length !== t2.length || t2.some(function(t3, n2) {
      return t3 !== e2[n2];
    });
  }
  function Se(e2, t2) {
    return "function" == typeof t2 ? t2(e2) : t2;
  }
  function Oe(e2, t2) {
    for (var n2 in e2) if ("__source" !== n2 && !(n2 in t2)) return true;
    for (var r2 in t2) if ("__source" !== r2 && e2[r2] !== t2[r2]) return true;
    return false;
  }
  function we(e2, t2) {
    this.props = e2, this.context = t2;
  }
  (we.prototype = new O()).isPureReactComponent = true, we.prototype.shouldComponentUpdate = function(e2, t2) {
    return Oe(this.props, e2) || Oe(this.state, t2);
  };
  var Ee = r.__b;
  r.__b = function(e2) {
    e2.type && e2.type.__f && e2.ref && (e2.props.ref = e2.ref, e2.ref = null), Ee && Ee(e2);
  };
  var je = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  var Pe = function(e2, t2) {
    return null == e2 ? null : C(C(e2).map(t2));
  };
  var Ie = { map: Pe, forEach: Pe, count: function(e2) {
    return e2 ? C(e2).length : 0;
  }, only: function(e2) {
    var t2 = C(e2);
    if (1 !== t2.length) throw "Children.only";
    return t2[0];
  }, toArray: C };
  var ke = r.__e;
  r.__e = function(e2, t2, n2, r2) {
    if (e2.then) {
      for (var o2, i2 = t2; i2 = i2.__; ) if ((o2 = i2.__c) && o2.__c) return null == t2.__e && (t2.__e = n2.__e, t2.__k = n2.__k), o2.__c(e2, t2);
    }
    ke(e2, t2, n2, r2);
  };
  var De = r.unmount;
  function Ce(e2, t2, n2) {
    return e2 && (e2.__c && e2.__c.__H && (e2.__c.__H.__.forEach(function(e3) {
      "function" == typeof e3.__c && e3.__c();
    }), e2.__c.__H = null), null != (e2 = function(e3, t3) {
      for (var n3 in t3) e3[n3] = t3[n3];
      return e3;
    }({}, e2)).__c && (e2.__c.__P === n2 && (e2.__c.__P = t2), e2.__c = null), e2.__k = e2.__k && e2.__k.map(function(e3) {
      return Ce(e3, t2, n2);
    })), e2;
  }
  function xe(e2, t2, n2) {
    return e2 && n2 && (e2.__v = null, e2.__k = e2.__k && e2.__k.map(function(e3) {
      return xe(e3, t2, n2);
    }), e2.__c && e2.__c.__P === t2 && (e2.__e && n2.appendChild(e2.__e), e2.__c.__e = true, e2.__c.__P = n2)), e2;
  }
  function Ae() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function Ne(e2) {
    var t2 = e2.__.__c;
    return t2 && t2.__a && t2.__a(e2);
  }
  function Te() {
    this.u = null, this.o = null;
  }
  r.unmount = function(e2) {
    var t2 = e2.__c;
    t2 && t2.__R && t2.__R(), t2 && 32 & e2.__u && (e2.type = null), De && De(e2);
  }, (Ae.prototype = new O()).__c = function(e2, t2) {
    var n2 = t2.__c, r2 = this;
    null == r2.t && (r2.t = []), r2.t.push(n2);
    var o2 = Ne(r2.__v), i2 = false, a2 = function() {
      i2 || (i2 = true, n2.__R = null, o2 ? o2(c2) : c2());
    };
    n2.__R = a2;
    var c2 = function() {
      if (!--r2.__u) {
        if (r2.state.__a) {
          var e3 = r2.state.__a;
          r2.__v.__k[0] = xe(e3, e3.__c.__P, e3.__c.__O);
        }
        var t3;
        for (r2.setState({ __a: r2.__b = null }); t3 = r2.t.pop(); ) t3.forceUpdate();
      }
    };
    r2.__u++ || 32 & t2.__u || r2.setState({ __a: r2.__b = r2.__v.__k[0] }), e2.then(a2, a2);
  }, Ae.prototype.componentWillUnmount = function() {
    this.t = [];
  }, Ae.prototype.render = function(e2, t2) {
    if (this.__b) {
      if (this.__v.__k) {
        var n2 = document.createElement("div"), r2 = this.__v.__k[0].__c;
        this.__v.__k[0] = Ce(this.__b, n2, r2.__O = r2.__P);
      }
      this.__b = null;
    }
    var o2 = t2.__a && g(S, null, e2.fallback);
    return o2 && (o2.__u &= -33), [g(S, null, t2.__a ? null : e2.children), o2];
  };
  var Re = function(e2, t2, n2) {
    if (++n2[1] === n2[0] && e2.o.delete(t2), e2.props.revealOrder && ("t" !== e2.props.revealOrder[0] || !e2.o.size)) for (n2 = e2.u; n2; ) {
      for (; n2.length > 3; ) n2.pop()();
      if (n2[1] < n2[0]) break;
      e2.u = n2 = n2[2];
    }
  };
  function Le(e2) {
    return this.getChildContext = function() {
      return e2.context;
    }, e2.children;
  }
  function qe(e2) {
    var t2 = this, n2 = e2.i;
    t2.componentWillUnmount = function() {
      F(null, t2.l), t2.l = null, t2.i = null;
    }, t2.i && t2.i !== n2 && t2.componentWillUnmount(), t2.l || (t2.i = n2, t2.l = { nodeType: 1, parentNode: n2, childNodes: [], contains: function() {
      return true;
    }, appendChild: function(e3) {
      this.childNodes.push(e3), t2.i.appendChild(e3);
    }, insertBefore: function(e3, n3) {
      this.childNodes.push(e3), t2.i.appendChild(e3);
    }, removeChild: function(e3) {
      this.childNodes.splice(this.childNodes.indexOf(e3) >>> 1, 1), t2.i.removeChild(e3);
    } }), F(g(Le, { context: t2.context }, e2.__v), t2.l);
  }
  function Me(e2, t2) {
    var n2 = g(qe, { __v: e2, i: t2 });
    return n2.containerInfo = t2, n2;
  }
  (Te.prototype = new O()).__a = function(e2) {
    var t2 = this, n2 = Ne(t2.__v), r2 = t2.o.get(e2);
    return r2[0]++, function(o2) {
      var i2 = function() {
        t2.props.revealOrder ? (r2.push(o2), Re(t2, e2, r2)) : o2();
      };
      n2 ? n2(i2) : i2();
    };
  }, Te.prototype.render = function(e2) {
    this.u = null, this.o = /* @__PURE__ */ new Map();
    var t2 = C(e2.children);
    e2.revealOrder && "b" === e2.revealOrder[0] && t2.reverse();
    for (var n2 = t2.length; n2--; ) this.o.set(t2[n2], this.u = [1, 0, this.u]);
    return e2.children;
  }, Te.prototype.componentDidUpdate = Te.prototype.componentDidMount = function() {
    var e2 = this;
    this.o.forEach(function(t2, n2) {
      Re(e2, n2, t2);
    });
  };
  var He = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
  var Ue = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
  var Fe = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
  var Be = /[A-Z0-9]/g;
  var Ve = "undefined" != typeof document;
  var Ke = function(e2) {
    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(e2);
  };
  function We(e2, t2, n2) {
    return null == t2.__k && (t2.textContent = ""), F(e2, t2), "function" == typeof n2 && n2(), e2 ? e2.__c : null;
  }
  O.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e2) {
    Object.defineProperty(O.prototype, e2, { configurable: true, get: function() {
      return this["UNSAFE_" + e2];
    }, set: function(t2) {
      Object.defineProperty(this, e2, { configurable: true, writable: true, value: t2 });
    } });
  });
  var ze = r.event;
  function Je() {
  }
  function Qe() {
    return this.cancelBubble;
  }
  function $e() {
    return this.defaultPrevented;
  }
  r.event = function(e2) {
    return ze && (e2 = ze(e2)), e2.persist = Je, e2.isPropagationStopped = Qe, e2.isDefaultPrevented = $e, e2.nativeEvent = e2;
  };
  var Ze;
  var Ge = { enumerable: false, configurable: true, get: function() {
    return this.class;
  } };
  var Ye = r.vnode;
  r.vnode = function(e2) {
    "string" == typeof e2.type && function(e3) {
      var t2 = e3.props, n2 = e3.type, r2 = {}, o2 = -1 === n2.indexOf("-");
      for (var i2 in t2) {
        var a2 = t2[i2];
        if (!("value" === i2 && "defaultValue" in t2 && null == a2 || Ve && "children" === i2 && "noscript" === n2 || "class" === i2 || "className" === i2)) {
          var c2 = i2.toLowerCase();
          "defaultValue" === i2 && "value" in t2 && null == t2.value ? i2 = "value" : "download" === i2 && true === a2 ? a2 = "" : "translate" === c2 && "no" === a2 ? a2 = false : "o" === c2[0] && "n" === c2[1] ? "ondoubleclick" === c2 ? i2 = "ondblclick" : "onchange" !== c2 || "input" !== n2 && "textarea" !== n2 || Ke(t2.type) ? "onfocus" === c2 ? i2 = "onfocusin" : "onblur" === c2 ? i2 = "onfocusout" : Fe.test(i2) && (i2 = c2) : c2 = i2 = "oninput" : o2 && Ue.test(i2) ? i2 = i2.replace(Be, "-$&").toLowerCase() : null === a2 && (a2 = void 0), "oninput" === c2 && r2[i2 = c2] && (i2 = "oninputCapture"), r2[i2] = a2;
        }
      }
      "select" == n2 && r2.multiple && Array.isArray(r2.value) && (r2.value = C(t2.children).forEach(function(e4) {
        e4.props.selected = -1 != r2.value.indexOf(e4.props.value);
      })), "select" == n2 && null != r2.defaultValue && (r2.value = C(t2.children).forEach(function(e4) {
        e4.props.selected = r2.multiple ? -1 != r2.defaultValue.indexOf(e4.props.value) : r2.defaultValue == e4.props.value;
      })), t2.class && !t2.className ? (r2.class = t2.class, Object.defineProperty(r2, "className", Ge)) : (t2.className && !t2.class || t2.class && t2.className) && (r2.class = r2.className = t2.className), e3.props = r2;
    }(e2), e2.$$typeof = He, Ye && Ye(e2);
  };
  var Xe = r.__r;
  r.__r = function(e2) {
    Xe && Xe(e2), Ze = e2.__c;
  };
  var et = r.diffed;
  r.diffed = function(e2) {
    et && et(e2);
    var t2 = e2.props, n2 = e2.__e;
    null != n2 && "textarea" === e2.type && "value" in t2 && t2.value !== n2.value && (n2.value = null == t2.value ? "" : t2.value), Ze = null;
  };
  var tt = { ReactCurrentDispatcher: { current: { readContext: function(e2) {
    return Ze.__n[e2.__c].props.value;
  }, useCallback: fe, useContext: pe, useDebugValue: me, useDeferredValue: ot, useEffect: ae, useId: ve, useImperativeHandle: le, useInsertionEffect: at, useLayoutEffect: ce, useMemo: se, useReducer: ie, useRef: ue, useState: oe, useSyncExternalStore: ct, useTransition: it } } };
  function nt(e2) {
    return !!e2 && e2.$$typeof === He;
  }
  function rt(e2) {
    e2();
  }
  function ot(e2) {
    return e2;
  }
  function it() {
    return [false, rt];
  }
  var at = ce;
  function ct(e2, t2) {
    var n2 = t2(), r2 = oe({ h: { __: n2, v: t2 } }), o2 = r2[0].h, i2 = r2[1];
    return ce(function() {
      o2.__ = n2, o2.v = t2, ut(o2) && i2({ h: o2 });
    }, [e2, n2, t2]), ae(function() {
      return ut(o2) && i2({ h: o2 }), e2(function() {
        ut(o2) && i2({ h: o2 });
      });
    }, [e2]), n2;
  }
  function ut(e2) {
    var t2, n2, r2 = e2.v, o2 = e2.__;
    try {
      var i2 = r2();
      return !((t2 = o2) === (n2 = i2) && (0 !== t2 || 1 / t2 == 1 / n2) || t2 != t2 && n2 != n2);
    } catch (e3) {
      return true;
    }
  }
  var lt = { useState: oe, useId: ve, useReducer: ie, useEffect: ae, useLayoutEffect: ce, useInsertionEffect: at, useTransition: it, useDeferredValue: ot, useSyncExternalStore: ct, startTransition: rt, useRef: ue, useImperativeHandle: le, useMemo: se, useCallback: fe, useContext: pe, useDebugValue: me, version: "18.3.1", Children: Ie, render: We, hydrate: function(e2, t2, n2) {
    return B(e2, t2), "function" == typeof n2 && n2(), e2 ? e2.__c : null;
  }, unmountComponentAtNode: function(e2) {
    return !!e2.__k && (F(null, e2), true);
  }, createPortal: Me, createElement: g, createContext: function(e2, t2) {
    var n2 = { __c: t2 = "__cC" + p++, __: e2, Consumer: function(e3, t3) {
      return e3.children(t3);
    }, Provider: function(e3) {
      var n3, r2;
      return this.getChildContext || (n3 = /* @__PURE__ */ new Set(), (r2 = {})[t2] = this, this.getChildContext = function() {
        return r2;
      }, this.componentWillUnmount = function() {
        n3 = null;
      }, this.shouldComponentUpdate = function(e4) {
        this.props.value !== e4.value && n3.forEach(function(e5) {
          e5.__e = true, j(e5);
        });
      }, this.sub = function(e4) {
        n3.add(e4);
        var t3 = e4.componentWillUnmount;
        e4.componentWillUnmount = function() {
          n3 && n3.delete(e4), t3 && t3.call(e4);
        };
      }), e3.children;
    } };
    return n2.Provider.__ = n2.Consumer.contextType = n2;
  }, createFactory: function(e2) {
    return g.bind(null, e2);
  }, cloneElement: function(e2) {
    return nt(e2) ? V.apply(null, arguments) : e2;
  }, createRef: function() {
    return { current: null };
  }, Fragment: S, isValidElement: nt, isElement: nt, isFragment: function(e2) {
    return nt(e2) && e2.type === S;
  }, isMemo: function(e2) {
    return !!e2 && !!e2.displayName && ("string" == typeof e2.displayName || e2.displayName instanceof String) && e2.displayName.startsWith("Memo(");
  }, findDOMNode: function(e2) {
    return e2 && (e2.base || 1 === e2.nodeType && e2) || null;
  }, Component: O, PureComponent: we, memo: function(e2, t2) {
    function n2(e3) {
      var n3 = this.props.ref, r3 = n3 == e3.ref;
      return !r3 && n3 && (n3.call ? n3(null) : n3.current = null), t2 ? !t2(this.props, e3) || !r3 : Oe(this.props, e3);
    }
    function r2(t3) {
      return this.shouldComponentUpdate = n2, g(e2, t3);
    }
    return r2.displayName = "Memo(" + (e2.displayName || e2.name) + ")", r2.prototype.isReactComponent = true, r2.__f = true, r2;
  }, forwardRef: function(e2) {
    function t2(t3) {
      if (!("ref" in t3)) return e2(t3, null);
      var n2 = t3.ref;
      delete t3.ref;
      var r2 = e2(t3, n2);
      return t3.ref = n2, r2;
    }
    return t2.$$typeof = je, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (e2.displayName || e2.name) + ")", t2;
  }, flushSync: function(e2, t2) {
    return e2(t2);
  }, unstable_batchedUpdates: function(e2, t2) {
    return e2(t2);
  }, StrictMode: S, Suspense: Ae, SuspenseList: Te, lazy: function(e2) {
    var t2, n2, r2;
    function o2(o3) {
      if (t2 || (t2 = e2()).then(function(e3) {
        n2 = e3.default || e3;
      }, function(e3) {
        r2 = e3;
      }), r2) throw r2;
      if (!n2) throw t2;
      return g(n2, o3);
    }
    return o2.displayName = "Lazy", o2.__f = true, o2;
  }, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: tt };
  function st(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
    return r2;
  }
  function ft(e2, t2, n2, r2, o2, i2, a2) {
    try {
      var c2 = e2[i2](a2), u2 = c2.value;
    } catch (e3) {
      return void n2(e3);
    }
    c2.done ? t2(u2) : Promise.resolve(u2).then(r2, o2);
  }
  function pt(e2) {
    return function() {
      var t2 = this, n2 = arguments;
      return new Promise(function(r2, o2) {
        var i2 = e2.apply(t2, n2);
        function a2(e3) {
          ft(i2, r2, o2, a2, c2, "next", e3);
        }
        function c2(e3) {
          ft(i2, r2, o2, a2, c2, "throw", e3);
        }
        a2(void 0);
      });
    };
  }
  function mt(e2, n2, r2) {
    return n2 = gt(n2), function(e3, n3) {
      if (n3 && ("object" == t(n3) || "function" == typeof n3)) return n3;
      if (void 0 !== n3) throw new TypeError("Derived constructors may only return object or undefined");
      return function(e4) {
        if (void 0 === e4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e4;
      }(e3);
    }(e2, St() ? Reflect.construct(n2, r2 || [], gt(e2).constructor) : n2.apply(e2, r2));
  }
  function vt(e2, t2) {
    if (!(e2 instanceof t2)) throw new TypeError("Cannot call a class as a function");
  }
  function ht(e2, t2) {
    for (var n2 = 0; n2 < t2.length; n2++) {
      var r2 = t2[n2];
      r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, Dt(r2.key), r2);
    }
  }
  function dt(e2, t2, n2) {
    return t2 && ht(e2.prototype, t2), n2 && ht(e2, n2), Object.defineProperty(e2, "prototype", { writable: false }), e2;
  }
  function yt(e2, t2, n2) {
    return (t2 = Dt(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function _t() {
    return _t = Object.assign ? Object.assign.bind() : function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2) ({}).hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
      }
      return e2;
    }, _t.apply(null, arguments);
  }
  function gt(e2) {
    return gt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e3) {
      return e3.__proto__ || Object.getPrototypeOf(e3);
    }, gt(e2);
  }
  function bt(e2, t2) {
    if ("function" != typeof t2 && null !== t2) throw new TypeError("Super expression must either be null or a function");
    e2.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e2, writable: true, configurable: true } }), Object.defineProperty(e2, "prototype", { writable: false }), t2 && Pt(e2, t2);
  }
  function St() {
    try {
      var e2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (e3) {
    }
    return (St = function() {
      return !!e2;
    })();
  }
  function Ot(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function wt(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Ot(Object(n2), true).forEach(function(t3) {
        yt(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Ot(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Et(e2, t2) {
    if (null == e2) return {};
    var n2, r2, o2 = function(e3, t3) {
      if (null == e3) return {};
      var n3 = {};
      for (var r3 in e3) if ({}.hasOwnProperty.call(e3, r3)) {
        if (t3.includes(r3)) continue;
        n3[r3] = e3[r3];
      }
      return n3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++) n2 = i2[r2], t2.includes(n2) || {}.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  function jt() {
    jt = function() {
      return n2;
    };
    var e2, n2 = {}, r2 = Object.prototype, o2 = r2.hasOwnProperty, i2 = Object.defineProperty || function(e3, t2, n3) {
      e3[t2] = n3.value;
    }, a2 = "function" == typeof Symbol ? Symbol : {}, c2 = a2.iterator || "@@iterator", u2 = a2.asyncIterator || "@@asyncIterator", l2 = a2.toStringTag || "@@toStringTag";
    function s2(e3, t2, n3) {
      return Object.defineProperty(e3, t2, { value: n3, enumerable: true, configurable: true, writable: true }), e3[t2];
    }
    try {
      s2({}, "");
    } catch (e3) {
      s2 = function(e4, t2, n3) {
        return e4[t2] = n3;
      };
    }
    function f2(e3, t2, n3, r3) {
      var o3 = t2 && t2.prototype instanceof _2 ? t2 : _2, a3 = Object.create(o3.prototype), c3 = new x2(r3 || []);
      return i2(a3, "_invoke", { value: I2(e3, n3, c3) }), a3;
    }
    function p2(e3, t2, n3) {
      try {
        return { type: "normal", arg: e3.call(t2, n3) };
      } catch (e4) {
        return { type: "throw", arg: e4 };
      }
    }
    n2.wrap = f2;
    var m2 = "suspendedStart", v2 = "suspendedYield", h2 = "executing", d2 = "completed", y2 = {};
    function _2() {
    }
    function g2() {
    }
    function b2() {
    }
    var S2 = {};
    s2(S2, c2, function() {
      return this;
    });
    var O2 = Object.getPrototypeOf, w2 = O2 && O2(O2(A2([])));
    w2 && w2 !== r2 && o2.call(w2, c2) && (S2 = w2);
    var E2 = b2.prototype = _2.prototype = Object.create(S2);
    function j2(e3) {
      ["next", "throw", "return"].forEach(function(t2) {
        s2(e3, t2, function(e4) {
          return this._invoke(t2, e4);
        });
      });
    }
    function P2(e3, n3) {
      function r3(i3, a4, c3, u3) {
        var l3 = p2(e3[i3], e3, a4);
        if ("throw" !== l3.type) {
          var s3 = l3.arg, f3 = s3.value;
          return f3 && "object" == t(f3) && o2.call(f3, "__await") ? n3.resolve(f3.__await).then(function(e4) {
            r3("next", e4, c3, u3);
          }, function(e4) {
            r3("throw", e4, c3, u3);
          }) : n3.resolve(f3).then(function(e4) {
            s3.value = e4, c3(s3);
          }, function(e4) {
            return r3("throw", e4, c3, u3);
          });
        }
        u3(l3.arg);
      }
      var a3;
      i2(this, "_invoke", { value: function(e4, t2) {
        function o3() {
          return new n3(function(n4, o4) {
            r3(e4, t2, n4, o4);
          });
        }
        return a3 = a3 ? a3.then(o3, o3) : o3();
      } });
    }
    function I2(t2, n3, r3) {
      var o3 = m2;
      return function(i3, a3) {
        if (o3 === h2) throw Error("Generator is already running");
        if (o3 === d2) {
          if ("throw" === i3) throw a3;
          return { value: e2, done: true };
        }
        for (r3.method = i3, r3.arg = a3; ; ) {
          var c3 = r3.delegate;
          if (c3) {
            var u3 = k2(c3, r3);
            if (u3) {
              if (u3 === y2) continue;
              return u3;
            }
          }
          if ("next" === r3.method) r3.sent = r3._sent = r3.arg;
          else if ("throw" === r3.method) {
            if (o3 === m2) throw o3 = d2, r3.arg;
            r3.dispatchException(r3.arg);
          } else "return" === r3.method && r3.abrupt("return", r3.arg);
          o3 = h2;
          var l3 = p2(t2, n3, r3);
          if ("normal" === l3.type) {
            if (o3 = r3.done ? d2 : v2, l3.arg === y2) continue;
            return { value: l3.arg, done: r3.done };
          }
          "throw" === l3.type && (o3 = d2, r3.method = "throw", r3.arg = l3.arg);
        }
      };
    }
    function k2(t2, n3) {
      var r3 = n3.method, o3 = t2.iterator[r3];
      if (o3 === e2) return n3.delegate = null, "throw" === r3 && t2.iterator.return && (n3.method = "return", n3.arg = e2, k2(t2, n3), "throw" === n3.method) || "return" !== r3 && (n3.method = "throw", n3.arg = new TypeError("The iterator does not provide a '" + r3 + "' method")), y2;
      var i3 = p2(o3, t2.iterator, n3.arg);
      if ("throw" === i3.type) return n3.method = "throw", n3.arg = i3.arg, n3.delegate = null, y2;
      var a3 = i3.arg;
      return a3 ? a3.done ? (n3[t2.resultName] = a3.value, n3.next = t2.nextLoc, "return" !== n3.method && (n3.method = "next", n3.arg = e2), n3.delegate = null, y2) : a3 : (n3.method = "throw", n3.arg = new TypeError("iterator result is not an object"), n3.delegate = null, y2);
    }
    function D2(e3) {
      var t2 = { tryLoc: e3[0] };
      1 in e3 && (t2.catchLoc = e3[1]), 2 in e3 && (t2.finallyLoc = e3[2], t2.afterLoc = e3[3]), this.tryEntries.push(t2);
    }
    function C2(e3) {
      var t2 = e3.completion || {};
      t2.type = "normal", delete t2.arg, e3.completion = t2;
    }
    function x2(e3) {
      this.tryEntries = [{ tryLoc: "root" }], e3.forEach(D2, this), this.reset(true);
    }
    function A2(n3) {
      if (n3 || "" === n3) {
        var r3 = n3[c2];
        if (r3) return r3.call(n3);
        if ("function" == typeof n3.next) return n3;
        if (!isNaN(n3.length)) {
          var i3 = -1, a3 = function t2() {
            for (; ++i3 < n3.length; ) if (o2.call(n3, i3)) return t2.value = n3[i3], t2.done = false, t2;
            return t2.value = e2, t2.done = true, t2;
          };
          return a3.next = a3;
        }
      }
      throw new TypeError(t(n3) + " is not iterable");
    }
    return g2.prototype = b2, i2(E2, "constructor", { value: b2, configurable: true }), i2(b2, "constructor", { value: g2, configurable: true }), g2.displayName = s2(b2, l2, "GeneratorFunction"), n2.isGeneratorFunction = function(e3) {
      var t2 = "function" == typeof e3 && e3.constructor;
      return !!t2 && (t2 === g2 || "GeneratorFunction" === (t2.displayName || t2.name));
    }, n2.mark = function(e3) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e3, b2) : (e3.__proto__ = b2, s2(e3, l2, "GeneratorFunction")), e3.prototype = Object.create(E2), e3;
    }, n2.awrap = function(e3) {
      return { __await: e3 };
    }, j2(P2.prototype), s2(P2.prototype, u2, function() {
      return this;
    }), n2.AsyncIterator = P2, n2.async = function(e3, t2, r3, o3, i3) {
      void 0 === i3 && (i3 = Promise);
      var a3 = new P2(f2(e3, t2, r3, o3), i3);
      return n2.isGeneratorFunction(t2) ? a3 : a3.next().then(function(e4) {
        return e4.done ? e4.value : a3.next();
      });
    }, j2(E2), s2(E2, l2, "Generator"), s2(E2, c2, function() {
      return this;
    }), s2(E2, "toString", function() {
      return "[object Generator]";
    }), n2.keys = function(e3) {
      var t2 = Object(e3), n3 = [];
      for (var r3 in t2) n3.push(r3);
      return n3.reverse(), function e4() {
        for (; n3.length; ) {
          var r4 = n3.pop();
          if (r4 in t2) return e4.value = r4, e4.done = false, e4;
        }
        return e4.done = true, e4;
      };
    }, n2.values = A2, x2.prototype = { constructor: x2, reset: function(t2) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e2, this.done = false, this.delegate = null, this.method = "next", this.arg = e2, this.tryEntries.forEach(C2), !t2) for (var n3 in this) "t" === n3.charAt(0) && o2.call(this, n3) && !isNaN(+n3.slice(1)) && (this[n3] = e2);
    }, stop: function() {
      this.done = true;
      var e3 = this.tryEntries[0].completion;
      if ("throw" === e3.type) throw e3.arg;
      return this.rval;
    }, dispatchException: function(t2) {
      if (this.done) throw t2;
      var n3 = this;
      function r3(r4, o3) {
        return c3.type = "throw", c3.arg = t2, n3.next = r4, o3 && (n3.method = "next", n3.arg = e2), !!o3;
      }
      for (var i3 = this.tryEntries.length - 1; i3 >= 0; --i3) {
        var a3 = this.tryEntries[i3], c3 = a3.completion;
        if ("root" === a3.tryLoc) return r3("end");
        if (a3.tryLoc <= this.prev) {
          var u3 = o2.call(a3, "catchLoc"), l3 = o2.call(a3, "finallyLoc");
          if (u3 && l3) {
            if (this.prev < a3.catchLoc) return r3(a3.catchLoc, true);
            if (this.prev < a3.finallyLoc) return r3(a3.finallyLoc);
          } else if (u3) {
            if (this.prev < a3.catchLoc) return r3(a3.catchLoc, true);
          } else {
            if (!l3) throw Error("try statement without catch or finally");
            if (this.prev < a3.finallyLoc) return r3(a3.finallyLoc);
          }
        }
      }
    }, abrupt: function(e3, t2) {
      for (var n3 = this.tryEntries.length - 1; n3 >= 0; --n3) {
        var r3 = this.tryEntries[n3];
        if (r3.tryLoc <= this.prev && o2.call(r3, "finallyLoc") && this.prev < r3.finallyLoc) {
          var i3 = r3;
          break;
        }
      }
      i3 && ("break" === e3 || "continue" === e3) && i3.tryLoc <= t2 && t2 <= i3.finallyLoc && (i3 = null);
      var a3 = i3 ? i3.completion : {};
      return a3.type = e3, a3.arg = t2, i3 ? (this.method = "next", this.next = i3.finallyLoc, y2) : this.complete(a3);
    }, complete: function(e3, t2) {
      if ("throw" === e3.type) throw e3.arg;
      return "break" === e3.type || "continue" === e3.type ? this.next = e3.arg : "return" === e3.type ? (this.rval = this.arg = e3.arg, this.method = "return", this.next = "end") : "normal" === e3.type && t2 && (this.next = t2), y2;
    }, finish: function(e3) {
      for (var t2 = this.tryEntries.length - 1; t2 >= 0; --t2) {
        var n3 = this.tryEntries[t2];
        if (n3.finallyLoc === e3) return this.complete(n3.completion, n3.afterLoc), C2(n3), y2;
      }
    }, catch: function(e3) {
      for (var t2 = this.tryEntries.length - 1; t2 >= 0; --t2) {
        var n3 = this.tryEntries[t2];
        if (n3.tryLoc === e3) {
          var r3 = n3.completion;
          if ("throw" === r3.type) {
            var o3 = r3.arg;
            C2(n3);
          }
          return o3;
        }
      }
      throw Error("illegal catch attempt");
    }, delegateYield: function(t2, n3, r3) {
      return this.delegate = { iterator: A2(t2), resultName: n3, nextLoc: r3 }, "next" === this.method && (this.arg = e2), y2;
    } }, n2;
  }
  function Pt(e2, t2) {
    return Pt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t3) {
      return e3.__proto__ = t3, e3;
    }, Pt(e2, t2);
  }
  function It(e2, t2) {
    return function(e3) {
      if (Array.isArray(e3)) return e3;
    }(e2) || function(e3, t3) {
      var n2 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
      if (null != n2) {
        var r2, o2, i2, a2, c2 = [], u2 = true, l2 = false;
        try {
          if (i2 = (n2 = n2.call(e3)).next, 0 === t3) {
            if (Object(n2) !== n2) return;
            u2 = false;
          } else for (; !(u2 = (r2 = i2.call(n2)).done) && (c2.push(r2.value), c2.length !== t3); u2 = true) ;
        } catch (e4) {
          l2 = true, o2 = e4;
        } finally {
          try {
            if (!u2 && null != n2.return && (a2 = n2.return(), Object(a2) !== a2)) return;
          } finally {
            if (l2) throw o2;
          }
        }
        return c2;
      }
    }(e2, t2) || Ct(e2, t2) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function kt(e2) {
    return function(e3) {
      if (Array.isArray(e3)) return st(e3);
    }(e2) || function(e3) {
      if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"]) return Array.from(e3);
    }(e2) || Ct(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function Dt(e2) {
    var n2 = function(e3) {
      if ("object" != t(e3) || !e3) return e3;
      var n3 = e3[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r2 = n3.call(e3, "string");
        if ("object" != t(r2)) return r2;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e3);
    }(e2);
    return "symbol" == t(n2) ? n2 : n2 + "";
  }
  function Ct(e2, t2) {
    if (e2) {
      if ("string" == typeof e2) return st(e2, t2);
      var n2 = {}.toString.call(e2).slice(8, -1);
      return "Object" === n2 && e2.constructor && (n2 = e2.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e2) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? st(e2, t2) : void 0;
    }
  }
  function xt(e2) {
    var t2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
    return xt = function(e3) {
      if (null === e3 || !function(e4) {
        try {
          return -1 !== Function.toString.call(e4).indexOf("[native code]");
        } catch (t3) {
          return "function" == typeof e4;
        }
      }(e3)) return e3;
      if ("function" != typeof e3) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== t2) {
        if (t2.has(e3)) return t2.get(e3);
        t2.set(e3, n2);
      }
      function n2() {
        return function(e4, t3, n3) {
          if (St()) return Reflect.construct.apply(null, arguments);
          var r2 = [null];
          r2.push.apply(r2, t3);
          var o2 = new (e4.bind.apply(e4, r2))();
          return n3 && Pt(o2, n3.prototype), o2;
        }(e3, arguments, gt(this).constructor);
      }
      return n2.prototype = Object.create(e3.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), Pt(n2, e3);
    }, xt(e2);
  }
  function At() {
    return lt.createElement("svg", { width: "15", height: "15", className: "DocSearch-Control-Key-Icon" }, lt.createElement("path", { d: "M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953", strokeWidth: "1.2", stroke: "currentColor", fill: "none", strokeLinecap: "square" }));
  }
  function Nt() {
    return lt.createElement("svg", { width: "20", height: "20", className: "DocSearch-Search-Icon", viewBox: "0 0 20 20", "aria-hidden": "true" }, lt.createElement("path", { d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  var Tt = ["translations"];
  var Rt = "Ctrl";
  var Lt = lt.forwardRef(function(e2, t2) {
    var n2 = e2.translations, r2 = void 0 === n2 ? {} : n2, o2 = Et(e2, Tt), i2 = r2.buttonText, a2 = void 0 === i2 ? "Search" : i2, c2 = r2.buttonAriaLabel, u2 = void 0 === c2 ? "Search" : c2, l2 = It(oe(null), 2), s2 = l2[0], f2 = l2[1];
    return ae(function() {
      "undefined" != typeof navigator && (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? f2("\u2318") : f2(Rt));
    }, []), lt.createElement("button", _t({ type: "button", className: "DocSearch DocSearch-Button", "aria-label": u2 }, o2, { ref: t2 }), lt.createElement("span", { className: "DocSearch-Button-Container" }, lt.createElement(Nt, null), lt.createElement("span", { className: "DocSearch-Button-Placeholder" }, a2)), lt.createElement("span", { className: "DocSearch-Button-Keys" }, null !== s2 && lt.createElement(lt.Fragment, null, lt.createElement(qt, { reactsToKey: s2 === Rt ? Rt : "Meta" }, s2 === Rt ? lt.createElement(At, null) : s2), lt.createElement(qt, { reactsToKey: "k" }, "K"))));
  });
  function qt(e2) {
    var t2 = e2.reactsToKey, n2 = e2.children, r2 = It(oe(false), 2), o2 = r2[0], i2 = r2[1];
    return ae(function() {
      if (t2) return window.addEventListener("keydown", e3), window.addEventListener("keyup", n3), function() {
        window.removeEventListener("keydown", e3), window.removeEventListener("keyup", n3);
      };
      function e3(e4) {
        e4.key === t2 && i2(true);
      }
      function n3(e4) {
        e4.key !== t2 && "Meta" !== e4.key || i2(false);
      }
    }, [t2]), lt.createElement("kbd", { className: o2 ? "DocSearch-Button-Key DocSearch-Button-Key--pressed" : "DocSearch-Button-Key" }, n2);
  }
  function Mt(e2, t2) {
    var n2 = void 0;
    return function() {
      for (var r2 = arguments.length, o2 = new Array(r2), i2 = 0; i2 < r2; i2++) o2[i2] = arguments[i2];
      n2 && clearTimeout(n2), n2 = setTimeout(function() {
        return e2.apply(void 0, o2);
      }, t2);
    };
  }
  function Ht(e2) {
    return e2.reduce(function(e3, t2) {
      return e3.concat(t2);
    }, []);
  }
  var Ut = 0;
  function Ft(e2) {
    return 0 === e2.collections.length ? 0 : e2.collections.reduce(function(e3, t2) {
      return e3 + t2.items.length;
    }, 0);
  }
  function Bt(e2) {
    return e2 !== Object(e2);
  }
  function Vt(e2, t2) {
    if (e2 === t2) return true;
    if (Bt(e2) || Bt(t2) || "function" == typeof e2 || "function" == typeof t2) return e2 === t2;
    if (Object.keys(e2).length !== Object.keys(t2).length) return false;
    for (var n2 = 0, r2 = Object.keys(e2); n2 < r2.length; n2++) {
      var o2 = r2[n2];
      if (!(o2 in t2)) return false;
      if (!Vt(e2[o2], t2[o2])) return false;
    }
    return true;
  }
  var Kt = function() {
  };
  var Wt = [{ segment: "autocomplete-core", version: "1.9.3" }];
  function zt(e2) {
    var t2 = e2.item, n2 = e2.items;
    return { index: t2.__autocomplete_indexName, items: [t2], positions: [1 + n2.findIndex(function(e3) {
      return e3.objectID === t2.objectID;
    })], queryID: t2.__autocomplete_queryID, algoliaSource: ["autocomplete"] };
  }
  function Jt(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
    return r2;
  }
  var Qt = ["items"];
  var $t = ["items"];
  function Zt(e2) {
    return Zt = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, Zt(e2);
  }
  function Gt(e2) {
    return function(e3) {
      if (Array.isArray(e3)) return Yt(e3);
    }(e2) || function(e3) {
      if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"]) return Array.from(e3);
    }(e2) || function(e3, t2) {
      if (e3) {
        if ("string" == typeof e3) return Yt(e3, t2);
        var n2 = Object.prototype.toString.call(e3).slice(8, -1);
        return "Object" === n2 && e3.constructor && (n2 = e3.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e3) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? Yt(e3, t2) : void 0;
      }
    }(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function Yt(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
    return r2;
  }
  function Xt(e2, t2) {
    if (null == e2) return {};
    var n2, r2, o2 = function(e3, t3) {
      if (null == e3) return {};
      var n3, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++) n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++) n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  function en(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function tn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? en(Object(n2), true).forEach(function(t3) {
        nn(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : en(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function nn(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== Zt(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e4, "string");
          if ("object" !== Zt(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === Zt(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function rn(e2) {
    return e2.map(function(e3) {
      var t2 = e3.items, n2 = Xt(e3, Qt);
      return tn(tn({}, n2), {}, { objectIDs: (null == t2 ? void 0 : t2.map(function(e4) {
        return e4.objectID;
      })) || n2.objectIDs });
    });
  }
  function on(e2) {
    var t2 = e2.items.reduce(function(e3, t3) {
      var n2;
      return e3[t3.__autocomplete_indexName] = (null !== (n2 = e3[t3.__autocomplete_indexName]) && void 0 !== n2 ? n2 : []).concat(t3), e3;
    }, {});
    return Object.keys(t2).map(function(e3) {
      return { index: e3, items: t2[e3], algoliaSource: ["autocomplete"] };
    });
  }
  function an(e2) {
    return e2.objectID && e2.__autocomplete_indexName && e2.__autocomplete_queryID;
  }
  function cn(e2) {
    return cn = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, cn(e2);
  }
  function un(e2) {
    return function(e3) {
      if (Array.isArray(e3)) return ln(e3);
    }(e2) || function(e3) {
      if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"]) return Array.from(e3);
    }(e2) || function(e3, t2) {
      if (e3) {
        if ("string" == typeof e3) return ln(e3, t2);
        var n2 = Object.prototype.toString.call(e3).slice(8, -1);
        return "Object" === n2 && e3.constructor && (n2 = e3.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e3) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? ln(e3, t2) : void 0;
      }
    }(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function ln(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
    return r2;
  }
  function sn(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function fn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? sn(Object(n2), true).forEach(function(t3) {
        pn(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : sn(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function pn(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== cn(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e4, "string");
          if ("object" !== cn(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === cn(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  var mn = "2.6.0";
  var vn = "https://cdn.jsdelivr.net/npm/search-insights@".concat(mn, "/dist/search-insights.min.js");
  var hn = Mt(function(e2) {
    var t2 = e2.onItemsChange, n2 = e2.items, r2 = e2.insights, o2 = e2.state;
    t2({ insights: r2, insightsEvents: on({ items: n2 }).map(function(e3) {
      return fn({ eventName: "Items Viewed" }, e3);
    }), state: o2 });
  }, 400);
  function dn(e2) {
    var t2 = function(e3) {
      return fn({ onItemsChange: function(e4) {
        var t3 = e4.insights, n3 = e4.insightsEvents;
        t3.viewedObjectIDs.apply(t3, un(n3.map(function(e5) {
          return fn(fn({}, e5), {}, { algoliaSource: [].concat(un(e5.algoliaSource || []), ["autocomplete-internal"]) });
        })));
      }, onSelect: function(e4) {
        var t3 = e4.insights, n3 = e4.insightsEvents;
        t3.clickedObjectIDsAfterSearch.apply(t3, un(n3.map(function(e5) {
          return fn(fn({}, e5), {}, { algoliaSource: [].concat(un(e5.algoliaSource || []), ["autocomplete-internal"]) });
        })));
      }, onActive: Kt }, e3);
    }(e2), n2 = t2.insightsClient, r2 = t2.onItemsChange, o2 = t2.onSelect, i2 = t2.onActive, a2 = n2;
    n2 || "undefined" != typeof window && function() {
      var e3 = { window }.window, t3 = e3.AlgoliaAnalyticsObject || "aa";
      "string" == typeof t3 && (a2 = e3[t3]), a2 || (e3.AlgoliaAnalyticsObject = t3, e3[t3] || (e3[t3] = function() {
        e3[t3].queue || (e3[t3].queue = []);
        for (var n3 = arguments.length, r3 = new Array(n3), o3 = 0; o3 < n3; o3++) r3[o3] = arguments[o3];
        e3[t3].queue.push(r3);
      }), e3[t3].version = mn, a2 = e3[t3], function(e4) {
        var t4 = "[Autocomplete]: Could not load search-insights.js. Please load it manually following https://alg.li/insights-autocomplete";
        try {
          var n3 = e4.document.createElement("script");
          n3.async = true, n3.src = vn, n3.onerror = function() {
            console.error(t4);
          }, document.body.appendChild(n3);
        } catch (e5) {
          console.error(t4);
        }
      }(e3));
    }();
    var c2 = function(e3) {
      var t3, n3, r3, o3 = (t3 = function(e4) {
        return function(e5) {
          if (Array.isArray(e5)) return e5;
        }(e4) || function(e5) {
          var t4 = null == e5 ? null : "undefined" != typeof Symbol && e5[Symbol.iterator] || e5["@@iterator"];
          if (null != t4) {
            var n4, r4, o4, i4, a3 = [], c3 = true, u3 = false;
            try {
              for (o4 = (t4 = t4.call(e5)).next; !(c3 = (n4 = o4.call(t4)).done) && (a3.push(n4.value), 2 !== a3.length); c3 = true) ;
            } catch (e6) {
              u3 = true, r4 = e6;
            } finally {
              try {
                if (!c3 && null != t4.return && (i4 = t4.return(), Object(i4) !== i4)) return;
              } finally {
                if (u3) throw r4;
              }
            }
            return a3;
          }
        }(e4) || function(e5) {
          if (e5) {
            if ("string" == typeof e5) return Jt(e5, 2);
            var t4 = Object.prototype.toString.call(e5).slice(8, -1);
            return "Object" === t4 && e5.constructor && (t4 = e5.constructor.name), "Map" === t4 || "Set" === t4 ? Array.from(e5) : "Arguments" === t4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t4) ? Jt(e5, 2) : void 0;
          }
        }(e4) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }((e3.version || "").split(".").map(Number)), n3 = t3[0], r3 = t3[1], n3 >= 3 || 2 === n3 && r3 >= 4 || 1 === n3 && r3 >= 10);
      function i3(t4, n4, r4) {
        if (o3 && void 0 !== r4) {
          var i4 = r4[0].__autocomplete_algoliaCredentials, a3 = { "X-Algolia-Application-Id": i4.appId, "X-Algolia-API-Key": i4.apiKey };
          e3.apply(void 0, [t4].concat(Gt(n4), [{ headers: a3 }]));
        } else e3.apply(void 0, [t4].concat(Gt(n4)));
      }
      return { init: function(t4, n4) {
        e3("init", { appId: t4, apiKey: n4 });
      }, setUserToken: function(t4) {
        e3("setUserToken", t4);
      }, clickedObjectIDsAfterSearch: function() {
        for (var e4 = arguments.length, t4 = new Array(e4), n4 = 0; n4 < e4; n4++) t4[n4] = arguments[n4];
        t4.length > 0 && i3("clickedObjectIDsAfterSearch", rn(t4), t4[0].items);
      }, clickedObjectIDs: function() {
        for (var e4 = arguments.length, t4 = new Array(e4), n4 = 0; n4 < e4; n4++) t4[n4] = arguments[n4];
        t4.length > 0 && i3("clickedObjectIDs", rn(t4), t4[0].items);
      }, clickedFilters: function() {
        for (var t4 = arguments.length, n4 = new Array(t4), r4 = 0; r4 < t4; r4++) n4[r4] = arguments[r4];
        n4.length > 0 && e3.apply(void 0, ["clickedFilters"].concat(n4));
      }, convertedObjectIDsAfterSearch: function() {
        for (var e4 = arguments.length, t4 = new Array(e4), n4 = 0; n4 < e4; n4++) t4[n4] = arguments[n4];
        t4.length > 0 && i3("convertedObjectIDsAfterSearch", rn(t4), t4[0].items);
      }, convertedObjectIDs: function() {
        for (var e4 = arguments.length, t4 = new Array(e4), n4 = 0; n4 < e4; n4++) t4[n4] = arguments[n4];
        t4.length > 0 && i3("convertedObjectIDs", rn(t4), t4[0].items);
      }, convertedFilters: function() {
        for (var t4 = arguments.length, n4 = new Array(t4), r4 = 0; r4 < t4; r4++) n4[r4] = arguments[r4];
        n4.length > 0 && e3.apply(void 0, ["convertedFilters"].concat(n4));
      }, viewedObjectIDs: function() {
        for (var e4 = arguments.length, t4 = new Array(e4), n4 = 0; n4 < e4; n4++) t4[n4] = arguments[n4];
        t4.length > 0 && t4.reduce(function(e5, t5) {
          var n5 = t5.items, r4 = Xt(t5, $t);
          return [].concat(Gt(e5), Gt(function(e6) {
            for (var t6 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20, n6 = [], r5 = 0; r5 < e6.objectIDs.length; r5 += t6) n6.push(tn(tn({}, e6), {}, { objectIDs: e6.objectIDs.slice(r5, r5 + t6) }));
            return n6;
          }(tn(tn({}, r4), {}, { objectIDs: (null == n5 ? void 0 : n5.map(function(e6) {
            return e6.objectID;
          })) || r4.objectIDs })).map(function(e6) {
            return { items: n5, payload: e6 };
          })));
        }, []).forEach(function(e5) {
          var t5 = e5.items;
          return i3("viewedObjectIDs", [e5.payload], t5);
        });
      }, viewedFilters: function() {
        for (var t4 = arguments.length, n4 = new Array(t4), r4 = 0; r4 < t4; r4++) n4[r4] = arguments[r4];
        n4.length > 0 && e3.apply(void 0, ["viewedFilters"].concat(n4));
      } };
    }(a2), u2 = { current: [] }, l2 = Mt(function(e3) {
      var t3 = e3.state;
      if (t3.isOpen) {
        var n3 = t3.collections.reduce(function(e4, t4) {
          return [].concat(un(e4), un(t4.items));
        }, []).filter(an);
        Vt(u2.current.map(function(e4) {
          return e4.objectID;
        }), n3.map(function(e4) {
          return e4.objectID;
        })) || (u2.current = n3, n3.length > 0 && hn({ onItemsChange: r2, items: n3, insights: c2, state: t3 }));
      }
    }, 0);
    return { name: "aa.algoliaInsightsPlugin", subscribe: function(e3) {
      var t3 = e3.setContext, n3 = e3.onSelect, r3 = e3.onActive;
      a2("addAlgoliaAgent", "insights-plugin"), t3({ algoliaInsightsPlugin: { __algoliaSearchParameters: { clickAnalytics: true }, insights: c2 } }), n3(function(e4) {
        var t4 = e4.item, n4 = e4.state, r4 = e4.event;
        an(t4) && o2({ state: n4, event: r4, insights: c2, item: t4, insightsEvents: [fn({ eventName: "Item Selected" }, zt({ item: t4, items: u2.current }))] });
      }), r3(function(e4) {
        var t4 = e4.item, n4 = e4.state, r4 = e4.event;
        an(t4) && i2({ state: n4, event: r4, insights: c2, item: t4, insightsEvents: [fn({ eventName: "Item Active" }, zt({ item: t4, items: u2.current }))] });
      });
    }, onStateChange: function(e3) {
      var t3 = e3.state;
      l2({ state: t3 });
    }, __autocomplete_pluginOptions: e2 };
  }
  function yn(e2, t2) {
    var n2 = t2;
    return { then: function(t3, r2) {
      return yn(e2.then(gn(t3, n2, e2), gn(r2, n2, e2)), n2);
    }, catch: function(t3) {
      return yn(e2.catch(gn(t3, n2, e2)), n2);
    }, finally: function(t3) {
      return t3 && n2.onCancelList.push(t3), yn(e2.finally(gn(t3 && function() {
        return n2.onCancelList = [], t3();
      }, n2, e2)), n2);
    }, cancel: function() {
      n2.isCanceled = true;
      var e3 = n2.onCancelList;
      n2.onCancelList = [], e3.forEach(function(e4) {
        e4();
      });
    }, isCanceled: function() {
      return true === n2.isCanceled;
    } };
  }
  function _n(e2) {
    return yn(e2, { isCanceled: false, onCancelList: [] });
  }
  function gn(e2, t2, n2) {
    return e2 ? function(n3) {
      return t2.isCanceled ? n3 : e2(n3);
    } : n2;
  }
  function bn(e2, t2, n2, r2) {
    if (!n2) return null;
    if (e2 < 0 && (null === t2 || null !== r2 && 0 === t2)) return n2 + e2;
    var o2 = (null === t2 ? -1 : t2) + e2;
    return o2 <= -1 || o2 >= n2 ? null === r2 ? null : 0 : o2;
  }
  function Sn(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function On(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Sn(Object(n2), true).forEach(function(t3) {
        wn(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Sn(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function wn(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== En(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e4, "string");
          if ("object" !== En(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === En(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function En(e2) {
    return En = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, En(e2);
  }
  function jn(e2) {
    var t2 = function(e3) {
      var t3 = e3.collections.map(function(e4) {
        return e4.items.length;
      }).reduce(function(e4, t4, n3) {
        var r3 = (e4[n3 - 1] || 0) + t4;
        return e4.push(r3), e4;
      }, []).reduce(function(t4, n3) {
        return n3 <= e3.activeItemId ? t4 + 1 : t4;
      }, 0);
      return e3.collections[t3];
    }(e2);
    if (!t2) return null;
    var n2 = t2.items[function(e3) {
      for (var t3 = e3.state, n3 = e3.collection, r3 = false, o2 = 0, i2 = 0; false === r3; ) {
        var a2 = t3.collections[o2];
        if (a2 === n3) {
          r3 = true;
          break;
        }
        i2 += a2.items.length, o2++;
      }
      return t3.activeItemId - i2;
    }({ state: e2, collection: t2 })], r2 = t2.source;
    return { item: n2, itemInputValue: r2.getItemInputValue({ item: n2, state: e2 }), itemUrl: r2.getItemUrl({ item: n2, state: e2 }), source: r2 };
  }
  var Pn = /((gt|sm)-|galaxy nexus)|samsung[- ]|samsungbrowser/i;
  function In(e2) {
    return In = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, In(e2);
  }
  function kn(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Dn(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== In(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e4, "string");
          if ("object" !== In(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === In(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function Cn(e2) {
    return Cn = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, Cn(e2);
  }
  function xn(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function An(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? xn(Object(n2), true).forEach(function(t3) {
        Nn(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : xn(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Nn(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== Cn(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e4, "string");
          if ("object" !== Cn(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === Cn(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function Tn(e2) {
    return Tn = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, Tn(e2);
  }
  function Rn(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
    return r2;
  }
  function Ln(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function qn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Ln(Object(n2), true).forEach(function(t3) {
        Mn(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Ln(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Mn(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== Tn(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e4, "string");
          if ("object" !== Tn(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === Tn(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function Hn(e2) {
    return Hn = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, Hn(e2);
  }
  function Un(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Fn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Un(Object(n2), true).forEach(function(t3) {
        Bn(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Un(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Bn(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== Hn(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e4, "string");
          if ("object" !== Hn(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === Hn(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function Vn(e2) {
    return Vn = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, Vn(e2);
  }
  function Kn(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Wn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Kn(Object(n2), true).forEach(function(t3) {
        zn(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Kn(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function zn(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== Vn(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e4, "string");
          if ("object" !== Vn(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === Vn(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function Jn(e2) {
    return function(e3) {
      if (Array.isArray(e3)) return Qn(e3);
    }(e2) || function(e3) {
      if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"]) return Array.from(e3);
    }(e2) || function(e3, t2) {
      if (e3) {
        if ("string" == typeof e3) return Qn(e3, t2);
        var n2 = Object.prototype.toString.call(e3).slice(8, -1);
        return "Object" === n2 && e3.constructor && (n2 = e3.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e3) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? Qn(e3, t2) : void 0;
      }
    }(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function Qn(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
    return r2;
  }
  function $n(e2) {
    return Boolean(e2.execute);
  }
  function Zn(e2) {
    var t2 = e2.reduce(function(e3, t3) {
      if (!$n(t3)) return e3.push(t3), e3;
      var n2 = t3.searchClient, r2 = t3.execute, o2 = t3.requesterId, i2 = t3.requests, a2 = e3.find(function(e4) {
        return $n(t3) && $n(e4) && e4.searchClient === n2 && Boolean(o2) && e4.requesterId === o2;
      });
      if (a2) {
        var c2;
        (c2 = a2.items).push.apply(c2, Jn(i2));
      } else {
        var u2 = { execute: r2, requesterId: o2, items: i2, searchClient: n2 };
        e3.push(u2);
      }
      return e3;
    }, []).map(function(e3) {
      if (!$n(e3)) return Promise.resolve(e3);
      var t3 = e3, n2 = t3.execute, r2 = t3.items;
      return n2({ searchClient: t3.searchClient, requests: r2 });
    });
    return Promise.all(t2).then(function(e3) {
      return Ht(e3);
    });
  }
  function Gn(e2) {
    return Gn = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, Gn(e2);
  }
  var Yn = ["event", "nextState", "props", "query", "refresh", "store"];
  function Xn(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function er(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Xn(Object(n2), true).forEach(function(t3) {
        tr(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Xn(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function tr(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== Gn(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e4, "string");
          if ("object" !== Gn(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === Gn(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  var nr;
  var rr;
  var or;
  var ir = null;
  var ar = (nr = -1, rr = -1, or = void 0, function(e2) {
    var t2 = ++nr;
    return Promise.resolve(e2).then(function(e3) {
      return or && t2 < rr ? or : (rr = t2, or = e3, e3);
    });
  });
  function cr(e2) {
    var t2 = e2.event, n2 = e2.nextState, r2 = void 0 === n2 ? {} : n2, o2 = e2.props, i2 = e2.query, a2 = e2.refresh, c2 = e2.store, u2 = function(e3, t3) {
      if (null == e3) return {};
      var n3, r3, o3 = function(e4, t4) {
        if (null == e4) return {};
        var n4, r4, o4 = {}, i4 = Object.keys(e4);
        for (r4 = 0; r4 < i4.length; r4++) n4 = i4[r4], t4.indexOf(n4) >= 0 || (o4[n4] = e4[n4]);
        return o4;
      }(e3, t3);
      if (Object.getOwnPropertySymbols) {
        var i3 = Object.getOwnPropertySymbols(e3);
        for (r3 = 0; r3 < i3.length; r3++) n3 = i3[r3], t3.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e3, n3) && (o3[n3] = e3[n3]);
      }
      return o3;
    }(e2, Yn);
    ir && o2.environment.clearTimeout(ir);
    var l2 = u2.setCollections, s2 = u2.setIsOpen, f2 = u2.setQuery, p2 = u2.setActiveItemId, m2 = u2.setStatus;
    if (f2(i2), p2(o2.defaultActiveItemId), !i2 && false === o2.openOnFocus) {
      var v2, h2 = c2.getState().collections.map(function(e3) {
        return er(er({}, e3), {}, { items: [] });
      });
      m2("idle"), l2(h2), s2(null !== (v2 = r2.isOpen) && void 0 !== v2 ? v2 : o2.shouldPanelOpen({ state: c2.getState() }));
      var d2 = _n(ar(h2).then(function() {
        return Promise.resolve();
      }));
      return c2.pendingRequests.add(d2);
    }
    m2("loading"), ir = o2.environment.setTimeout(function() {
      m2("stalled");
    }, o2.stallThreshold);
    var y2 = _n(ar(o2.getSources(er({ query: i2, refresh: a2, state: c2.getState() }, u2)).then(function(e3) {
      return Promise.all(e3.map(function(e4) {
        return Promise.resolve(e4.getItems(er({ query: i2, refresh: a2, state: c2.getState() }, u2))).then(function(t3) {
          return function(e5, t4, n3) {
            if (o3 = e5, Boolean(null == o3 ? void 0 : o3.execute)) {
              var r3 = "algolia" === e5.requesterId ? Object.assign.apply(Object, [{}].concat(Jn(Object.keys(n3.context).map(function(e6) {
                var t5;
                return null === (t5 = n3.context[e6]) || void 0 === t5 ? void 0 : t5.__algoliaSearchParameters;
              })))) : {};
              return Wn(Wn({}, e5), {}, { requests: e5.queries.map(function(n4) {
                return { query: "algolia" === e5.requesterId ? Wn(Wn({}, n4), {}, { params: Wn(Wn({}, r3), n4.params) }) : n4, sourceId: t4, transformResponse: e5.transformResponse };
              }) });
            }
            var o3;
            return { items: e5, sourceId: t4 };
          }(t3, e4.sourceId, c2.getState());
        });
      })).then(Zn).then(function(t3) {
        return function(e4, t4, n3) {
          return t4.map(function(t5) {
            var r3, o3 = e4.filter(function(e5) {
              return e5.sourceId === t5.sourceId;
            }), i3 = o3.map(function(e5) {
              return e5.items;
            }), a3 = o3[0].transformResponse, c3 = a3 ? a3({ results: r3 = i3, hits: r3.map(function(e5) {
              return e5.hits;
            }).filter(Boolean), facetHits: r3.map(function(e5) {
              var t6;
              return null === (t6 = e5.facetHits) || void 0 === t6 ? void 0 : t6.map(function(e6) {
                return { label: e6.value, count: e6.count, _highlightResult: { label: { value: e6.highlighted } } };
              });
            }).filter(Boolean) }) : i3;
            return t5.onResolve({ source: t5, results: i3, items: c3, state: n3.getState() }), c3.every(Boolean), 'The `getItems` function from source "'.concat(t5.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"), { source: t5, items: c3 };
          });
        }(t3, e3, c2);
      }).then(function(e4) {
        return function(e5) {
          var t3 = e5.props, n3 = e5.state, r3 = e5.collections.reduce(function(e6, t4) {
            return Fn(Fn({}, e6), {}, Bn({}, t4.source.sourceId, Fn(Fn({}, t4.source), {}, { getItems: function() {
              return Ht(t4.items);
            } })));
          }, {}), o3 = t3.plugins.reduce(function(e6, t4) {
            return t4.reshape ? t4.reshape(e6) : e6;
          }, { sourcesBySourceId: r3, state: n3 }).sourcesBySourceId;
          return Ht(t3.reshape({ sourcesBySourceId: o3, sources: Object.values(o3), state: n3 })).filter(Boolean).map(function(e6) {
            return { source: e6, items: e6.getItems() };
          });
        }({ collections: e4, props: o2, state: c2.getState() });
      });
    }))).then(function(e3) {
      var n3;
      m2("idle"), l2(e3);
      var f3 = o2.shouldPanelOpen({ state: c2.getState() });
      s2(null !== (n3 = r2.isOpen) && void 0 !== n3 ? n3 : o2.openOnFocus && !i2 && f3 || f3);
      var p3 = jn(c2.getState());
      if (null !== c2.getState().activeItemId && p3) {
        var v3 = p3.item, h3 = p3.itemInputValue, d3 = p3.itemUrl, y3 = p3.source;
        y3.onActive(er({ event: t2, item: v3, itemInputValue: h3, itemUrl: d3, refresh: a2, source: y3, state: c2.getState() }, u2));
      }
    }).finally(function() {
      m2("idle"), ir && o2.environment.clearTimeout(ir);
    });
    return c2.pendingRequests.add(y2);
  }
  function ur(e2) {
    return ur = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, ur(e2);
  }
  var lr = ["event", "props", "refresh", "store"];
  function sr(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function fr(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? sr(Object(n2), true).forEach(function(t3) {
        pr(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : sr(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function pr(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== ur(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e4, "string");
          if ("object" !== ur(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === ur(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function mr(e2) {
    return mr = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, mr(e2);
  }
  var vr = ["props", "refresh", "store"];
  var hr = ["inputElement", "formElement", "panelElement"];
  var dr = ["inputElement"];
  var yr = ["inputElement", "maxLength"];
  var _r = ["sourceIndex"];
  var gr = ["sourceIndex"];
  var br = ["item", "source", "sourceIndex"];
  function Sr(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Or(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Sr(Object(n2), true).forEach(function(t3) {
        wr(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Sr(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function wr(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== mr(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e4, "string");
          if ("object" !== mr(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === mr(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function Er(e2, t2) {
    if (null == e2) return {};
    var n2, r2, o2 = function(e3, t3) {
      if (null == e3) return {};
      var n3, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++) n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++) n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  function jr(e2) {
    return jr = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, jr(e2);
  }
  function Pr(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Ir(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Pr(Object(n2), true).forEach(function(t3) {
        kr(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Pr(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function kr(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== jr(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e4, "string");
          if ("object" !== jr(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === jr(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function Dr(e2) {
    var t2, n2, r2, o2, i2 = e2.plugins, a2 = e2.options, c2 = null === (t2 = ((null === (n2 = a2.__autocomplete_metadata) || void 0 === n2 ? void 0 : n2.userAgents) || [])[0]) || void 0 === t2 ? void 0 : t2.segment, u2 = c2 ? kr({}, c2, Object.keys((null === (r2 = a2.__autocomplete_metadata) || void 0 === r2 ? void 0 : r2.options) || {})) : {};
    return { plugins: i2.map(function(e3) {
      return { name: e3.name, options: Object.keys(e3.__autocomplete_pluginOptions || []) };
    }), options: Ir({ "autocomplete-core": Object.keys(a2) }, u2), ua: Wt.concat((null === (o2 = a2.__autocomplete_metadata) || void 0 === o2 ? void 0 : o2.userAgents) || []) };
  }
  function Cr(e2) {
    var t2, n2 = e2.state;
    return false === n2.isOpen || null === n2.activeItemId ? null : (null === (t2 = jn(n2)) || void 0 === t2 ? void 0 : t2.itemInputValue) || null;
  }
  function xr(e2) {
    return xr = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, xr(e2);
  }
  function Ar(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Nr(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Ar(Object(n2), true).forEach(function(t3) {
        Tr(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Ar(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Tr(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== xr(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e4, "string");
          if ("object" !== xr(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === xr(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  var Rr = function(e2, t2) {
    switch (t2.type) {
      case "setActiveItemId":
      case "mousemove":
        return Nr(Nr({}, e2), {}, { activeItemId: t2.payload });
      case "setQuery":
        return Nr(Nr({}, e2), {}, { query: t2.payload, completion: null });
      case "setCollections":
        return Nr(Nr({}, e2), {}, { collections: t2.payload });
      case "setIsOpen":
        return Nr(Nr({}, e2), {}, { isOpen: t2.payload });
      case "setStatus":
        return Nr(Nr({}, e2), {}, { status: t2.payload });
      case "setContext":
        return Nr(Nr({}, e2), {}, { context: Nr(Nr({}, e2.context), t2.payload) });
      case "ArrowDown":
        var n2 = Nr(Nr({}, e2), {}, { activeItemId: t2.payload.hasOwnProperty("nextActiveItemId") ? t2.payload.nextActiveItemId : bn(1, e2.activeItemId, Ft(e2), t2.props.defaultActiveItemId) });
        return Nr(Nr({}, n2), {}, { completion: Cr({ state: n2 }) });
      case "ArrowUp":
        var r2 = Nr(Nr({}, e2), {}, { activeItemId: bn(-1, e2.activeItemId, Ft(e2), t2.props.defaultActiveItemId) });
        return Nr(Nr({}, r2), {}, { completion: Cr({ state: r2 }) });
      case "Escape":
        return e2.isOpen ? Nr(Nr({}, e2), {}, { activeItemId: null, isOpen: false, completion: null }) : Nr(Nr({}, e2), {}, { activeItemId: null, query: "", status: "idle", collections: [] });
      case "submit":
        return Nr(Nr({}, e2), {}, { activeItemId: null, isOpen: false, status: "idle" });
      case "reset":
        return Nr(Nr({}, e2), {}, { activeItemId: true === t2.props.openOnFocus ? t2.props.defaultActiveItemId : null, status: "idle", query: "" });
      case "focus":
        return Nr(Nr({}, e2), {}, { activeItemId: t2.props.defaultActiveItemId, isOpen: (t2.props.openOnFocus || Boolean(e2.query)) && t2.props.shouldPanelOpen({ state: e2 }) });
      case "blur":
        return t2.props.debug ? e2 : Nr(Nr({}, e2), {}, { isOpen: false, activeItemId: null });
      case "mouseleave":
        return Nr(Nr({}, e2), {}, { activeItemId: t2.props.defaultActiveItemId });
      default:
        return "The reducer action ".concat(JSON.stringify(t2.type), " is not supported."), e2;
    }
  };
  function Lr(e2) {
    return Lr = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, Lr(e2);
  }
  function qr(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Mr(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? qr(Object(n2), true).forEach(function(t3) {
        Hr(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : qr(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Hr(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== Lr(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e4, "string");
          if ("object" !== Lr(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === Lr(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function Ur(e2) {
    var t2 = [], n2 = function(e3, t3) {
      var n3, r3 = "undefined" != typeof window ? window : {}, o3 = e3.plugins || [];
      return qn(qn({ debug: false, openOnFocus: false, placeholder: "", autoFocus: false, defaultActiveItemId: null, stallThreshold: 300, insights: false, environment: r3, shouldPanelOpen: function(e4) {
        return Ft(e4.state) > 0;
      }, reshape: function(e4) {
        return e4.sources;
      } }, e3), {}, { id: null !== (n3 = e3.id) && void 0 !== n3 ? n3 : "autocomplete-".concat(Ut++), plugins: o3, initialState: qn({ activeItemId: null, query: "", completion: null, collections: [], isOpen: false, status: "idle", context: {} }, e3.initialState), onStateChange: function(t4) {
        var n4;
        null === (n4 = e3.onStateChange) || void 0 === n4 || n4.call(e3, t4), o3.forEach(function(e4) {
          var n5;
          return null === (n5 = e4.onStateChange) || void 0 === n5 ? void 0 : n5.call(e4, t4);
        });
      }, onSubmit: function(t4) {
        var n4;
        null === (n4 = e3.onSubmit) || void 0 === n4 || n4.call(e3, t4), o3.forEach(function(e4) {
          var n5;
          return null === (n5 = e4.onSubmit) || void 0 === n5 ? void 0 : n5.call(e4, t4);
        });
      }, onReset: function(t4) {
        var n4;
        null === (n4 = e3.onReset) || void 0 === n4 || n4.call(e3, t4), o3.forEach(function(e4) {
          var n5;
          return null === (n5 = e4.onReset) || void 0 === n5 ? void 0 : n5.call(e4, t4);
        });
      }, getSources: function(n4) {
        return Promise.all([].concat(function(e4) {
          return function(e5) {
            if (Array.isArray(e5)) return Rn(e5);
          }(e4) || function(e5) {
            if ("undefined" != typeof Symbol && null != e5[Symbol.iterator] || null != e5["@@iterator"]) return Array.from(e5);
          }(e4) || function(e5, t4) {
            if (e5) {
              if ("string" == typeof e5) return Rn(e5, t4);
              var n5 = Object.prototype.toString.call(e5).slice(8, -1);
              return "Object" === n5 && e5.constructor && (n5 = e5.constructor.name), "Map" === n5 || "Set" === n5 ? Array.from(e5) : "Arguments" === n5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n5) ? Rn(e5, t4) : void 0;
            }
          }(e4) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }(o3.map(function(e4) {
          return e4.getSources;
        })), [e3.getSources]).filter(Boolean).map(function(e4) {
          return function(e5, t4) {
            var n5 = [];
            return Promise.resolve(e5(t4)).then(function(e6) {
              return Promise.all(e6.filter(function(e7) {
                return Boolean(e7);
              }).map(function(e7) {
                if (e7.sourceId, n5.includes(e7.sourceId)) throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(e7.sourceId), " is not unique."));
                n5.push(e7.sourceId);
                var t5 = { getItemInputValue: function(e8) {
                  return e8.state.query;
                }, getItemUrl: function() {
                }, onSelect: function(e8) {
                  (0, e8.setIsOpen)(false);
                }, onActive: Kt, onResolve: Kt };
                Object.keys(t5).forEach(function(e8) {
                  t5[e8].__default = true;
                });
                var r4 = On(On({}, t5), e7);
                return Promise.resolve(r4);
              }));
            });
          }(e4, n4);
        })).then(function(e4) {
          return Ht(e4);
        }).then(function(e4) {
          return e4.map(function(e5) {
            return qn(qn({}, e5), {}, { onSelect: function(n5) {
              e5.onSelect(n5), t3.forEach(function(e6) {
                var t4;
                return null === (t4 = e6.onSelect) || void 0 === t4 ? void 0 : t4.call(e6, n5);
              });
            }, onActive: function(n5) {
              e5.onActive(n5), t3.forEach(function(e6) {
                var t4;
                return null === (t4 = e6.onActive) || void 0 === t4 ? void 0 : t4.call(e6, n5);
              });
            }, onResolve: function(n5) {
              e5.onResolve(n5), t3.forEach(function(e6) {
                var t4;
                return null === (t4 = e6.onResolve) || void 0 === t4 ? void 0 : t4.call(e6, n5);
              });
            } });
          });
        });
      }, navigator: qn({ navigate: function(e4) {
        var t4 = e4.itemUrl;
        r3.location.assign(t4);
      }, navigateNewTab: function(e4) {
        var t4 = e4.itemUrl, n4 = r3.open(t4, "_blank", "noopener");
        null == n4 || n4.focus();
      }, navigateNewWindow: function(e4) {
        var t4 = e4.itemUrl;
        r3.open(t4, "_blank", "noopener");
      } }, e3.navigator) });
    }(e2, t2), r2 = function(e3, t3, n3) {
      var r3, o3 = t3.initialState;
      return { getState: function() {
        return o3;
      }, dispatch: function(r4, i3) {
        var a3 = function(e4) {
          for (var t4 = 1; t4 < arguments.length; t4++) {
            var n4 = null != arguments[t4] ? arguments[t4] : {};
            t4 % 2 ? kn(Object(n4), true).forEach(function(t5) {
              Dn(e4, t5, n4[t5]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e4, Object.getOwnPropertyDescriptors(n4)) : kn(Object(n4)).forEach(function(t5) {
              Object.defineProperty(e4, t5, Object.getOwnPropertyDescriptor(n4, t5));
            });
          }
          return e4;
        }({}, o3);
        o3 = e3(o3, { type: r4, props: t3, payload: i3 }), n3({ state: o3, prevState: a3 });
      }, pendingRequests: (r3 = [], { add: function(e4) {
        return r3.push(e4), e4.finally(function() {
          r3 = r3.filter(function(t4) {
            return t4 !== e4;
          });
        });
      }, cancelAll: function() {
        r3.forEach(function(e4) {
          return e4.cancel();
        });
      }, isEmpty: function() {
        return 0 === r3.length;
      } }) };
    }(Rr, n2, function(e3) {
      var t3 = e3.prevState, r3 = e3.state;
      n2.onStateChange(Mr({ prevState: t3, state: r3, refresh: a2, navigator: n2.navigator }, o2));
    }), o2 = function(e3) {
      var t3 = e3.store;
      return { setActiveItemId: function(e4) {
        t3.dispatch("setActiveItemId", e4);
      }, setQuery: function(e4) {
        t3.dispatch("setQuery", e4);
      }, setCollections: function(e4) {
        var n3 = 0, r3 = e4.map(function(e5) {
          return An(An({}, e5), {}, { items: Ht(e5.items).map(function(e6) {
            return An(An({}, e6), {}, { __autocomplete_id: n3++ });
          }) });
        });
        t3.dispatch("setCollections", r3);
      }, setIsOpen: function(e4) {
        t3.dispatch("setIsOpen", e4);
      }, setStatus: function(e4) {
        t3.dispatch("setStatus", e4);
      }, setContext: function(e4) {
        t3.dispatch("setContext", e4);
      } };
    }({ store: r2 }), i2 = function(e3) {
      var t3 = e3.props, n3 = e3.refresh, r3 = e3.store, o3 = Er(e3, vr), i3 = function(e4, t4) {
        return void 0 !== t4 ? "".concat(e4, "-").concat(t4) : e4;
      };
      return { getEnvironmentProps: function(e4) {
        var n4 = e4.inputElement, o4 = e4.formElement, i4 = e4.panelElement;
        function a3(e5) {
          !r3.getState().isOpen && r3.pendingRequests.isEmpty() || e5.target === n4 || false === [o4, i4].some(function(t4) {
            return (n5 = t4) === (r4 = e5.target) || n5.contains(r4);
            var n5, r4;
          }) && (r3.dispatch("blur", null), t3.debug || r3.pendingRequests.cancelAll());
        }
        return Or({ onTouchStart: a3, onMouseDown: a3, onTouchMove: function(e5) {
          false !== r3.getState().isOpen && n4 === t3.environment.document.activeElement && e5.target !== n4 && n4.blur();
        } }, Er(e4, hr));
      }, getRootProps: function(e4) {
        return Or({ role: "combobox", "aria-expanded": r3.getState().isOpen, "aria-haspopup": "listbox", "aria-owns": r3.getState().isOpen ? "".concat(t3.id, "-list") : void 0, "aria-labelledby": "".concat(t3.id, "-label") }, e4);
      }, getFormProps: function(e4) {
        return e4.inputElement, Or({ action: "", noValidate: true, role: "search", onSubmit: function(i4) {
          var a3;
          i4.preventDefault(), t3.onSubmit(Or({ event: i4, refresh: n3, state: r3.getState() }, o3)), r3.dispatch("submit", null), null === (a3 = e4.inputElement) || void 0 === a3 || a3.blur();
        }, onReset: function(i4) {
          var a3;
          i4.preventDefault(), t3.onReset(Or({ event: i4, refresh: n3, state: r3.getState() }, o3)), r3.dispatch("reset", null), null === (a3 = e4.inputElement) || void 0 === a3 || a3.focus();
        } }, Er(e4, dr));
      }, getLabelProps: function(e4) {
        var n4 = e4 || {}, r4 = n4.sourceIndex, o4 = Er(n4, _r);
        return Or({ htmlFor: "".concat(i3(t3.id, r4), "-input"), id: "".concat(i3(t3.id, r4), "-label") }, o4);
      }, getInputProps: function(e4) {
        var i4;
        function a3(e5) {
          (t3.openOnFocus || Boolean(r3.getState().query)) && cr(Or({ event: e5, props: t3, query: r3.getState().completion || r3.getState().query, refresh: n3, store: r3 }, o3)), r3.dispatch("focus", null);
        }
        var c3 = e4 || {}, u2 = (c3.inputElement, c3.maxLength), l2 = void 0 === u2 ? 512 : u2, s2 = Er(c3, yr), f2 = jn(r3.getState()), p2 = function(e5) {
          return Boolean(e5 && e5.match(Pn));
        }((null === (i4 = t3.environment.navigator) || void 0 === i4 ? void 0 : i4.userAgent) || ""), m2 = null != f2 && f2.itemUrl && !p2 ? "go" : "search";
        return Or({ "aria-autocomplete": "both", "aria-activedescendant": r3.getState().isOpen && null !== r3.getState().activeItemId ? "".concat(t3.id, "-item-").concat(r3.getState().activeItemId) : void 0, "aria-controls": r3.getState().isOpen ? "".concat(t3.id, "-list") : void 0, "aria-labelledby": "".concat(t3.id, "-label"), value: r3.getState().completion || r3.getState().query, id: "".concat(t3.id, "-input"), autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", enterKeyHint: m2, spellCheck: "false", autoFocus: t3.autoFocus, placeholder: t3.placeholder, maxLength: l2, type: "search", onChange: function(e5) {
          cr(Or({ event: e5, props: t3, query: e5.currentTarget.value.slice(0, l2), refresh: n3, store: r3 }, o3));
        }, onKeyDown: function(e5) {
          !function(e6) {
            var t4 = e6.event, n4 = e6.props, r4 = e6.refresh, o4 = e6.store, i5 = function(e7, t5) {
              if (null == e7) return {};
              var n5, r5, o5 = function(e8, t6) {
                if (null == e8) return {};
                var n6, r6, o6 = {}, i7 = Object.keys(e8);
                for (r6 = 0; r6 < i7.length; r6++) n6 = i7[r6], t6.indexOf(n6) >= 0 || (o6[n6] = e8[n6]);
                return o6;
              }(e7, t5);
              if (Object.getOwnPropertySymbols) {
                var i6 = Object.getOwnPropertySymbols(e7);
                for (r5 = 0; r5 < i6.length; r5++) n5 = i6[r5], t5.indexOf(n5) >= 0 || Object.prototype.propertyIsEnumerable.call(e7, n5) && (o5[n5] = e7[n5]);
              }
              return o5;
            }(e6, lr);
            if ("ArrowUp" === t4.key || "ArrowDown" === t4.key) {
              var a4 = function() {
                var e7 = n4.environment.document.getElementById("".concat(n4.id, "-item-").concat(o4.getState().activeItemId));
                e7 && (e7.scrollIntoViewIfNeeded ? e7.scrollIntoViewIfNeeded(false) : e7.scrollIntoView(false));
              }, c4 = function() {
                var e7 = jn(o4.getState());
                if (null !== o4.getState().activeItemId && e7) {
                  var n5 = e7.item, a5 = e7.itemInputValue, c5 = e7.itemUrl, u4 = e7.source;
                  u4.onActive(fr({ event: t4, item: n5, itemInputValue: a5, itemUrl: c5, refresh: r4, source: u4, state: o4.getState() }, i5));
                }
              };
              t4.preventDefault(), false === o4.getState().isOpen && (n4.openOnFocus || Boolean(o4.getState().query)) ? cr(fr({ event: t4, props: n4, query: o4.getState().query, refresh: r4, store: o4 }, i5)).then(function() {
                o4.dispatch(t4.key, { nextActiveItemId: n4.defaultActiveItemId }), c4(), setTimeout(a4, 0);
              }) : (o4.dispatch(t4.key, {}), c4(), a4());
            } else if ("Escape" === t4.key) t4.preventDefault(), o4.dispatch(t4.key, null), o4.pendingRequests.cancelAll();
            else if ("Tab" === t4.key) o4.dispatch("blur", null), o4.pendingRequests.cancelAll();
            else if ("Enter" === t4.key) {
              if (null === o4.getState().activeItemId || o4.getState().collections.every(function(e7) {
                return 0 === e7.items.length;
              })) return void (n4.debug || o4.pendingRequests.cancelAll());
              t4.preventDefault();
              var u3 = jn(o4.getState()), l3 = u3.item, s3 = u3.itemInputValue, f3 = u3.itemUrl, p3 = u3.source;
              if (t4.metaKey || t4.ctrlKey) void 0 !== f3 && (p3.onSelect(fr({ event: t4, item: l3, itemInputValue: s3, itemUrl: f3, refresh: r4, source: p3, state: o4.getState() }, i5)), n4.navigator.navigateNewTab({ itemUrl: f3, item: l3, state: o4.getState() }));
              else if (t4.shiftKey) void 0 !== f3 && (p3.onSelect(fr({ event: t4, item: l3, itemInputValue: s3, itemUrl: f3, refresh: r4, source: p3, state: o4.getState() }, i5)), n4.navigator.navigateNewWindow({ itemUrl: f3, item: l3, state: o4.getState() }));
              else if (t4.altKey) ;
              else {
                if (void 0 !== f3) return p3.onSelect(fr({ event: t4, item: l3, itemInputValue: s3, itemUrl: f3, refresh: r4, source: p3, state: o4.getState() }, i5)), void n4.navigator.navigate({ itemUrl: f3, item: l3, state: o4.getState() });
                cr(fr({ event: t4, nextState: { isOpen: false }, props: n4, query: s3, refresh: r4, store: o4 }, i5)).then(function() {
                  p3.onSelect(fr({ event: t4, item: l3, itemInputValue: s3, itemUrl: f3, refresh: r4, source: p3, state: o4.getState() }, i5));
                });
              }
            }
          }(Or({ event: e5, props: t3, refresh: n3, store: r3 }, o3));
        }, onFocus: a3, onBlur: Kt, onClick: function(n4) {
          e4.inputElement !== t3.environment.document.activeElement || r3.getState().isOpen || a3(n4);
        } }, s2);
      }, getPanelProps: function(e4) {
        return Or({ onMouseDown: function(e5) {
          e5.preventDefault();
        }, onMouseLeave: function() {
          r3.dispatch("mouseleave", null);
        } }, e4);
      }, getListProps: function(e4) {
        var n4 = e4 || {}, r4 = n4.sourceIndex, o4 = Er(n4, gr);
        return Or({ role: "listbox", "aria-labelledby": "".concat(i3(t3.id, r4), "-label"), id: "".concat(i3(t3.id, r4), "-list") }, o4);
      }, getItemProps: function(e4) {
        var a3 = e4.item, c3 = e4.source, u2 = e4.sourceIndex, l2 = Er(e4, br);
        return Or({ id: "".concat(i3(t3.id, u2), "-item-").concat(a3.__autocomplete_id), role: "option", "aria-selected": r3.getState().activeItemId === a3.__autocomplete_id, onMouseMove: function(e5) {
          if (a3.__autocomplete_id !== r3.getState().activeItemId) {
            r3.dispatch("mousemove", a3.__autocomplete_id);
            var t4 = jn(r3.getState());
            if (null !== r3.getState().activeItemId && t4) {
              var i4 = t4.item, c4 = t4.itemInputValue, u3 = t4.itemUrl, l3 = t4.source;
              l3.onActive(Or({ event: e5, item: i4, itemInputValue: c4, itemUrl: u3, refresh: n3, source: l3, state: r3.getState() }, o3));
            }
          }
        }, onMouseDown: function(e5) {
          e5.preventDefault();
        }, onClick: function(e5) {
          var i4 = c3.getItemInputValue({ item: a3, state: r3.getState() }), u3 = c3.getItemUrl({ item: a3, state: r3.getState() });
          (u3 ? Promise.resolve() : cr(Or({ event: e5, nextState: { isOpen: false }, props: t3, query: i4, refresh: n3, store: r3 }, o3))).then(function() {
            c3.onSelect(Or({ event: e5, item: a3, itemInputValue: i4, itemUrl: u3, refresh: n3, source: c3, state: r3.getState() }, o3));
          });
        } }, l2);
      } };
    }(Mr({ props: n2, refresh: a2, store: r2, navigator: n2.navigator }, o2));
    function a2() {
      return cr(Mr({ event: new Event("input"), nextState: { isOpen: r2.getState().isOpen }, props: n2, navigator: n2.navigator, query: r2.getState().query, refresh: a2, store: r2 }, o2));
    }
    if (e2.insights && !n2.plugins.some(function(e3) {
      return "aa.algoliaInsightsPlugin" === e3.name;
    })) {
      var c2 = "boolean" == typeof e2.insights ? {} : e2.insights;
      n2.plugins.push(dn(c2));
    }
    return n2.plugins.forEach(function(e3) {
      var r3;
      return null === (r3 = e3.subscribe) || void 0 === r3 ? void 0 : r3.call(e3, Mr(Mr({}, o2), {}, { navigator: n2.navigator, refresh: a2, onSelect: function(e4) {
        t2.push({ onSelect: e4 });
      }, onActive: function(e4) {
        t2.push({ onActive: e4 });
      }, onResolve: function(e4) {
        t2.push({ onResolve: e4 });
      } }));
    }), function(e3) {
      var t3, n3, r3 = e3.metadata, o3 = e3.environment;
      if (null === (t3 = o3.navigator) || void 0 === t3 || null === (n3 = t3.userAgent) || void 0 === n3 ? void 0 : n3.includes("Algolia Crawler")) {
        var i3 = o3.document.createElement("meta"), a3 = o3.document.querySelector("head");
        i3.name = "algolia:metadata", setTimeout(function() {
          i3.content = JSON.stringify(r3), a3.appendChild(i3);
        }, 0);
      }
    }({ metadata: Dr({ plugins: n2.plugins, options: e2 }), environment: n2.environment }), Mr(Mr({ refresh: a2, navigator: n2.navigator }, i2), o2);
  }
  function Fr(e2) {
    var t2 = e2.translations, n2 = (void 0 === t2 ? {} : t2).searchByText, r2 = void 0 === n2 ? "Search by" : n2;
    return lt.createElement("a", { href: "https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname, "&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"), target: "_blank", rel: "noopener noreferrer" }, lt.createElement("span", { className: "DocSearch-Label" }, r2), lt.createElement("svg", { width: "77", height: "19", "aria-label": "Algolia", role: "img", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2196.2 500" }, lt.createElement("defs", null, lt.createElement("style", null, ".cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}")), lt.createElement("path", { className: "cls-2", d: "M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), lt.createElement("rect", { className: "cls-1", x: "1845.88", y: "104.73", width: "62.58", height: "277.9", rx: "5.9", ry: "5.9" }), lt.createElement("path", { className: "cls-2", d: "M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z" }), lt.createElement("path", { className: "cls-2", d: "M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), lt.createElement("path", { className: "cls-2", d: "M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z" }), lt.createElement("path", { className: "cls-2", d: "M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), lt.createElement("path", { className: "cls-2", d: "M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), lt.createElement("path", { className: "cls-2", d: "M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z" }), lt.createElement("path", { className: "cls-1", d: "M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z" })));
  }
  function Br(e2) {
    return lt.createElement("svg", { width: "15", height: "15", "aria-label": e2.ariaLabel, role: "img" }, lt.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.2" }, e2.children));
  }
  function Vr(e2) {
    var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = n2.selectText, o2 = void 0 === r2 ? "to select" : r2, i2 = n2.selectKeyAriaLabel, a2 = void 0 === i2 ? "Enter key" : i2, c2 = n2.navigateText, u2 = void 0 === c2 ? "to navigate" : c2, l2 = n2.navigateUpKeyAriaLabel, s2 = void 0 === l2 ? "Arrow up" : l2, f2 = n2.navigateDownKeyAriaLabel, p2 = void 0 === f2 ? "Arrow down" : f2, m2 = n2.closeText, v2 = void 0 === m2 ? "to close" : m2, h2 = n2.closeKeyAriaLabel, d2 = void 0 === h2 ? "Escape key" : h2, y2 = n2.searchByText, _2 = void 0 === y2 ? "Search by" : y2;
    return lt.createElement(lt.Fragment, null, lt.createElement("div", { className: "DocSearch-Logo" }, lt.createElement(Fr, { translations: { searchByText: _2 } })), lt.createElement("ul", { className: "DocSearch-Commands" }, lt.createElement("li", null, lt.createElement("kbd", { className: "DocSearch-Commands-Key" }, lt.createElement(Br, { ariaLabel: a2 }, lt.createElement("path", { d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3" }))), lt.createElement("span", { className: "DocSearch-Label" }, o2)), lt.createElement("li", null, lt.createElement("kbd", { className: "DocSearch-Commands-Key" }, lt.createElement(Br, { ariaLabel: p2 }, lt.createElement("path", { d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3" }))), lt.createElement("kbd", { className: "DocSearch-Commands-Key" }, lt.createElement(Br, { ariaLabel: s2 }, lt.createElement("path", { d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3" }))), lt.createElement("span", { className: "DocSearch-Label" }, u2)), lt.createElement("li", null, lt.createElement("kbd", { className: "DocSearch-Commands-Key" }, lt.createElement(Br, { ariaLabel: d2 }, lt.createElement("path", { d: "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956" }))), lt.createElement("span", { className: "DocSearch-Label" }, v2))));
  }
  function Kr(e2) {
    var t2 = e2.hit, n2 = e2.children;
    return lt.createElement("a", { href: t2.url }, n2);
  }
  function Wr() {
    return lt.createElement("svg", { viewBox: "0 0 38 38", stroke: "currentColor", strokeOpacity: ".5" }, lt.createElement("g", { fill: "none", fillRule: "evenodd" }, lt.createElement("g", { transform: "translate(1 1)", strokeWidth: "2" }, lt.createElement("circle", { strokeOpacity: ".3", cx: "18", cy: "18", r: "18" }), lt.createElement("path", { d: "M36 18c0-9.94-8.06-18-18-18" }, lt.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" })))));
  }
  function zr() {
    return lt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, lt.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, lt.createElement("path", { d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0" }), lt.createElement("path", { d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13" })));
  }
  function Jr() {
    return lt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, lt.createElement("path", { d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  function Qr() {
    return lt.createElement("svg", { className: "DocSearch-Hit-Select-Icon", width: "20", height: "20", viewBox: "0 0 20 20" }, lt.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, lt.createElement("path", { d: "M18 3v4c0 2-2 4-4 4H2" }), lt.createElement("path", { d: "M8 17l-6-6 6-6" })));
  }
  var $r = function() {
    return lt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, lt.createElement("path", { d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
  };
  function Zr(e2) {
    switch (e2.type) {
      case "lvl1":
        return lt.createElement($r, null);
      case "content":
        return lt.createElement(Yr, null);
      default:
        return lt.createElement(Gr, null);
    }
  }
  function Gr() {
    return lt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, lt.createElement("path", { d: "M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  function Yr() {
    return lt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, lt.createElement("path", { d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
  }
  function Xr() {
    return lt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, lt.createElement("path", { d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
  }
  function eo() {
    return lt.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, lt.createElement("path", { d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0" }));
  }
  function to() {
    return lt.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, lt.createElement("path", { d: "M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2" }));
  }
  function no(e2) {
    var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = n2.titleText, o2 = void 0 === r2 ? "Unable to fetch results" : r2, i2 = n2.helpText, a2 = void 0 === i2 ? "You might want to check your network connection." : i2;
    return lt.createElement("div", { className: "DocSearch-ErrorScreen" }, lt.createElement("div", { className: "DocSearch-Screen-Icon" }, lt.createElement(eo, null)), lt.createElement("p", { className: "DocSearch-Title" }, o2), lt.createElement("p", { className: "DocSearch-Help" }, a2));
  }
  var ro = ["translations"];
  function oo(e2) {
    var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = Et(e2, ro), o2 = n2.noResultsText, i2 = void 0 === o2 ? "No results for" : o2, a2 = n2.suggestedQueryText, c2 = void 0 === a2 ? "Try searching for" : a2, u2 = n2.reportMissingResultsText, l2 = void 0 === u2 ? "Believe this query should return results?" : u2, s2 = n2.reportMissingResultsLinkText, f2 = void 0 === s2 ? "Let us know." : s2, p2 = r2.state.context.searchSuggestions;
    return lt.createElement("div", { className: "DocSearch-NoResults" }, lt.createElement("div", { className: "DocSearch-Screen-Icon" }, lt.createElement(to, null)), lt.createElement("p", { className: "DocSearch-Title" }, i2, ' "', lt.createElement("strong", null, r2.state.query), '"'), p2 && p2.length > 0 && lt.createElement("div", { className: "DocSearch-NoResults-Prefill-List" }, lt.createElement("p", { className: "DocSearch-Help" }, c2, ":"), lt.createElement("ul", null, p2.slice(0, 3).reduce(function(e3, t3) {
      return [].concat(kt(e3), [lt.createElement("li", { key: t3 }, lt.createElement("button", { className: "DocSearch-Prefill", key: t3, type: "button", onClick: function() {
        r2.setQuery(t3.toLowerCase() + " "), r2.refresh(), r2.inputRef.current.focus();
      } }, t3))]);
    }, []))), r2.getMissingResultsUrl && lt.createElement("p", { className: "DocSearch-Help" }, "".concat(l2, " "), lt.createElement("a", { href: r2.getMissingResultsUrl({ query: r2.state.query }), target: "_blank", rel: "noopener noreferrer" }, f2)));
  }
  var io = ["hit", "attribute", "tagName"];
  function ao(e2, t2) {
    return t2.split(".").reduce(function(e3, t3) {
      return null != e3 && e3[t3] ? e3[t3] : null;
    }, e2);
  }
  function co(e2) {
    var t2 = e2.hit, n2 = e2.attribute, r2 = e2.tagName;
    return g(void 0 === r2 ? "span" : r2, wt(wt({}, Et(e2, io)), {}, { dangerouslySetInnerHTML: { __html: ao(t2, "_snippetResult.".concat(n2, ".value")) || ao(t2, n2) } }));
  }
  function uo(e2) {
    return e2.collection && 0 !== e2.collection.items.length ? lt.createElement("section", { className: "DocSearch-Hits" }, lt.createElement("div", { className: "DocSearch-Hit-source" }, e2.title), lt.createElement("ul", e2.getListProps(), e2.collection.items.map(function(t2, n2) {
      return lt.createElement(lo, _t({ key: [e2.title, t2.objectID].join(":"), item: t2, index: n2 }, e2));
    }))) : null;
  }
  function lo(e2) {
    var t2 = e2.item, n2 = e2.index, r2 = e2.renderIcon, o2 = e2.renderAction, i2 = e2.getItemProps, a2 = e2.onItemClick, c2 = e2.collection, u2 = e2.hitComponent, l2 = It(lt.useState(false), 2), s2 = l2[0], f2 = l2[1], p2 = It(lt.useState(false), 2), m2 = p2[0], v2 = p2[1], h2 = lt.useRef(null), d2 = u2;
    return lt.createElement("li", _t({ className: ["DocSearch-Hit", t2.__docsearch_parent && "DocSearch-Hit--Child", s2 && "DocSearch-Hit--deleting", m2 && "DocSearch-Hit--favoriting"].filter(Boolean).join(" "), onTransitionEnd: function() {
      h2.current && h2.current();
    } }, i2({ item: t2, source: c2.source, onClick: function(e3) {
      a2(t2, e3);
    } })), lt.createElement(d2, { hit: t2 }, lt.createElement("div", { className: "DocSearch-Hit-Container" }, r2({ item: t2, index: n2 }), t2.hierarchy[t2.type] && "lvl1" === t2.type && lt.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, lt.createElement(co, { className: "DocSearch-Hit-title", hit: t2, attribute: "hierarchy.lvl1" }), t2.content && lt.createElement(co, { className: "DocSearch-Hit-path", hit: t2, attribute: "content" })), t2.hierarchy[t2.type] && ("lvl2" === t2.type || "lvl3" === t2.type || "lvl4" === t2.type || "lvl5" === t2.type || "lvl6" === t2.type) && lt.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, lt.createElement(co, { className: "DocSearch-Hit-title", hit: t2, attribute: "hierarchy.".concat(t2.type) }), lt.createElement(co, { className: "DocSearch-Hit-path", hit: t2, attribute: "hierarchy.lvl1" })), "content" === t2.type && lt.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, lt.createElement(co, { className: "DocSearch-Hit-title", hit: t2, attribute: "content" }), lt.createElement(co, { className: "DocSearch-Hit-path", hit: t2, attribute: "hierarchy.lvl1" })), o2({ item: t2, runDeleteTransition: function(e3) {
      f2(true), h2.current = e3;
    }, runFavoriteTransition: function(e3) {
      v2(true), h2.current = e3;
    } }))));
  }
  function so(e2, t2, n2) {
    return e2.reduce(function(e3, r2) {
      var o2 = t2(r2);
      return e3.hasOwnProperty(o2) || (e3[o2] = []), e3[o2].length < (n2 || 5) && e3[o2].push(r2), e3;
    }, {});
  }
  function fo(e2) {
    return e2;
  }
  function po(e2) {
    return 1 === e2.button || e2.altKey || e2.ctrlKey || e2.metaKey || e2.shiftKey;
  }
  function mo() {
  }
  var vo = /(<mark>|<\/mark>)/g;
  var ho = RegExp(vo.source);
  function yo(e2) {
    var t2, n2, r2 = e2;
    if (!r2.__docsearch_parent && !e2._highlightResult) return e2.hierarchy.lvl0;
    var o2 = r2.__docsearch_parent ? null === (t2 = r2.__docsearch_parent) || void 0 === t2 || null === (t2 = t2._highlightResult) || void 0 === t2 || null === (t2 = t2.hierarchy) || void 0 === t2 ? void 0 : t2.lvl0 : null === (n2 = e2._highlightResult) || void 0 === n2 || null === (n2 = n2.hierarchy) || void 0 === n2 ? void 0 : n2.lvl0;
    return o2 ? o2.value && ho.test(o2.value) ? o2.value.replace(vo, "") : o2.value : e2.hierarchy.lvl0;
  }
  function _o(e2) {
    return lt.createElement("div", { className: "DocSearch-Dropdown-Container" }, e2.state.collections.map(function(t2) {
      if (0 === t2.items.length) return null;
      var n2 = yo(t2.items[0]);
      return lt.createElement(uo, _t({}, e2, { key: t2.source.sourceId, title: n2, collection: t2, renderIcon: function(e3) {
        var n3, r2 = e3.item, o2 = e3.index;
        return lt.createElement(lt.Fragment, null, r2.__docsearch_parent && lt.createElement("svg", { className: "DocSearch-Hit-Tree", viewBox: "0 0 24 54" }, lt.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, r2.__docsearch_parent !== (null === (n3 = t2.items[o2 + 1]) || void 0 === n3 ? void 0 : n3.__docsearch_parent) ? lt.createElement("path", { d: "M8 6v21M20 27H8.3" }) : lt.createElement("path", { d: "M8 6v42M20 27H8.3" }))), lt.createElement("div", { className: "DocSearch-Hit-icon" }, lt.createElement(Zr, { type: r2.type })));
      }, renderAction: function() {
        return lt.createElement("div", { className: "DocSearch-Hit-action" }, lt.createElement(Qr, null));
      } }));
    }), e2.resultsFooterComponent && lt.createElement("section", { className: "DocSearch-HitsFooter" }, lt.createElement(e2.resultsFooterComponent, { state: e2.state })));
  }
  var go = ["translations"];
  function bo(e2) {
    var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = Et(e2, go), o2 = n2.recentSearchesTitle, i2 = void 0 === o2 ? "Recent" : o2, a2 = n2.noRecentSearchesText, c2 = void 0 === a2 ? "No recent searches" : a2, u2 = n2.saveRecentSearchButtonTitle, l2 = void 0 === u2 ? "Save this search" : u2, s2 = n2.removeRecentSearchButtonTitle, f2 = void 0 === s2 ? "Remove this search from history" : s2, p2 = n2.favoriteSearchesTitle, m2 = void 0 === p2 ? "Favorite" : p2, v2 = n2.removeFavoriteSearchButtonTitle, h2 = void 0 === v2 ? "Remove this search from favorites" : v2;
    return "idle" === r2.state.status && false === r2.hasCollections ? r2.disableUserPersonalization ? null : lt.createElement("div", { className: "DocSearch-StartScreen" }, lt.createElement("p", { className: "DocSearch-Help" }, c2)) : false === r2.hasCollections ? null : lt.createElement("div", { className: "DocSearch-Dropdown-Container" }, lt.createElement(uo, _t({}, r2, { title: i2, collection: r2.state.collections[0], renderIcon: function() {
      return lt.createElement("div", { className: "DocSearch-Hit-icon" }, lt.createElement(zr, null));
    }, renderAction: function(e3) {
      var t3 = e3.item, n3 = e3.runFavoriteTransition, o3 = e3.runDeleteTransition;
      return lt.createElement(lt.Fragment, null, lt.createElement("div", { className: "DocSearch-Hit-action" }, lt.createElement("button", { className: "DocSearch-Hit-action-button", title: l2, type: "submit", onClick: function(e4) {
        e4.preventDefault(), e4.stopPropagation(), n3(function() {
          r2.favoriteSearches.add(t3), r2.recentSearches.remove(t3), r2.refresh();
        });
      } }, lt.createElement(Xr, null))), lt.createElement("div", { className: "DocSearch-Hit-action" }, lt.createElement("button", { className: "DocSearch-Hit-action-button", title: f2, type: "submit", onClick: function(e4) {
        e4.preventDefault(), e4.stopPropagation(), o3(function() {
          r2.recentSearches.remove(t3), r2.refresh();
        });
      } }, lt.createElement(Jr, null))));
    } })), lt.createElement(uo, _t({}, r2, { title: m2, collection: r2.state.collections[1], renderIcon: function() {
      return lt.createElement("div", { className: "DocSearch-Hit-icon" }, lt.createElement(Xr, null));
    }, renderAction: function(e3) {
      var t3 = e3.item, n3 = e3.runDeleteTransition;
      return lt.createElement("div", { className: "DocSearch-Hit-action" }, lt.createElement("button", { className: "DocSearch-Hit-action-button", title: h2, type: "submit", onClick: function(e4) {
        e4.preventDefault(), e4.stopPropagation(), n3(function() {
          r2.favoriteSearches.remove(t3), r2.refresh();
        });
      } }, lt.createElement(Jr, null)));
    } })));
  }
  var So = ["translations"];
  var Oo = lt.memo(function(e2) {
    var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = Et(e2, So);
    if ("error" === r2.state.status) return lt.createElement(no, { translations: null == n2 ? void 0 : n2.errorScreen });
    var o2 = r2.state.collections.some(function(e3) {
      return e3.items.length > 0;
    });
    return r2.state.query ? false === o2 ? lt.createElement(oo, _t({}, r2, { translations: null == n2 ? void 0 : n2.noResultsScreen })) : lt.createElement(_o, r2) : lt.createElement(bo, _t({}, r2, { hasCollections: o2, translations: null == n2 ? void 0 : n2.startScreen }));
  }, function(e2, t2) {
    return "loading" === t2.state.status || "stalled" === t2.state.status;
  });
  var wo = ["translations"];
  function Eo(e2) {
    var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = Et(e2, wo), o2 = n2.resetButtonTitle, i2 = void 0 === o2 ? "Clear the query" : o2, a2 = n2.resetButtonAriaLabel, c2 = void 0 === a2 ? "Clear the query" : a2, u2 = n2.cancelButtonText, l2 = void 0 === u2 ? "Cancel" : u2, s2 = n2.cancelButtonAriaLabel, f2 = void 0 === s2 ? "Cancel" : s2, p2 = n2.searchInputLabel, m2 = void 0 === p2 ? "Search" : p2, v2 = r2.getFormProps({ inputElement: r2.inputRef.current }).onReset;
    return lt.useEffect(function() {
      r2.autoFocus && r2.inputRef.current && r2.inputRef.current.focus();
    }, [r2.autoFocus, r2.inputRef]), lt.useEffect(function() {
      r2.isFromSelection && r2.inputRef.current && r2.inputRef.current.select();
    }, [r2.isFromSelection, r2.inputRef]), lt.createElement(lt.Fragment, null, lt.createElement("form", { className: "DocSearch-Form", onSubmit: function(e3) {
      e3.preventDefault();
    }, onReset: v2 }, lt.createElement("label", _t({ className: "DocSearch-MagnifierLabel" }, r2.getLabelProps()), lt.createElement(Nt, null), lt.createElement("span", { className: "DocSearch-VisuallyHiddenForAccessibility" }, m2)), lt.createElement("div", { className: "DocSearch-LoadingIndicator" }, lt.createElement(Wr, null)), lt.createElement("input", _t({ className: "DocSearch-Input", ref: r2.inputRef }, r2.getInputProps({ inputElement: r2.inputRef.current, autoFocus: r2.autoFocus, maxLength: 64 }))), lt.createElement("button", { type: "reset", title: i2, className: "DocSearch-Reset", "aria-label": c2, hidden: !r2.state.query }, lt.createElement(Jr, null))), lt.createElement("button", { className: "DocSearch-Cancel", type: "reset", "aria-label": f2, onClick: r2.onClose }, l2));
  }
  var jo = ["_highlightResult", "_snippetResult"];
  function Po(e2) {
    var t2 = e2.key, n2 = e2.limit, r2 = void 0 === n2 ? 5 : n2, o2 = function(e3) {
      return false === function() {
        var e4 = "__TEST_KEY__";
        try {
          return localStorage.setItem(e4, ""), localStorage.removeItem(e4), true;
        } catch (e5) {
          return false;
        }
      }() ? { setItem: function() {
      }, getItem: function() {
        return [];
      } } : { setItem: function(t3) {
        return window.localStorage.setItem(e3, JSON.stringify(t3));
      }, getItem: function() {
        var t3 = window.localStorage.getItem(e3);
        return t3 ? JSON.parse(t3) : [];
      } };
    }(t2), i2 = o2.getItem().slice(0, r2);
    return { add: function(e3) {
      var t3 = e3, n3 = (t3._highlightResult, t3._snippetResult, Et(t3, jo)), a2 = i2.findIndex(function(e4) {
        return e4.objectID === n3.objectID;
      });
      a2 > -1 && i2.splice(a2, 1), i2.unshift(n3), i2 = i2.slice(0, r2), o2.setItem(i2);
    }, remove: function(e3) {
      i2 = i2.filter(function(t3) {
        return t3.objectID !== e3.objectID;
      }), o2.setItem(i2);
    }, getAll: function() {
      return i2;
    } };
  }
  function Io(e2) {
    var t2, n2 = "algolia-client-js-".concat(e2.key);
    function r2() {
      return void 0 === t2 && (t2 = e2.localStorage || window.localStorage), t2;
    }
    function o2() {
      return JSON.parse(r2().getItem(n2) || "{}");
    }
    function i2(e3) {
      r2().setItem(n2, JSON.stringify(e3));
    }
    return { get: function(t3, n3) {
      var r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } };
      return Promise.resolve().then(function() {
        var n4, r4, a2;
        return n4 = e2.timeToLive ? 1e3 * e2.timeToLive : null, r4 = o2(), i2(a2 = Object.fromEntries(Object.entries(r4).filter(function(e3) {
          return void 0 !== It(e3, 2)[1].timestamp;
        }))), n4 && i2(Object.fromEntries(Object.entries(a2).filter(function(e3) {
          var t4 = It(e3, 2)[1], r5 = (/* @__PURE__ */ new Date()).getTime();
          return !(t4.timestamp + n4 < r5);
        }))), o2()[JSON.stringify(t3)];
      }).then(function(e3) {
        return Promise.all([e3 ? e3.value : n3(), void 0 !== e3]);
      }).then(function(e3) {
        var t4 = It(e3, 2), n4 = t4[0], o3 = t4[1];
        return Promise.all([n4, o3 || r3.miss(n4)]);
      }).then(function(e3) {
        return It(e3, 1)[0];
      });
    }, set: function(e3, t3) {
      return Promise.resolve().then(function() {
        var i3 = o2();
        return i3[JSON.stringify(e3)] = { timestamp: (/* @__PURE__ */ new Date()).getTime(), value: t3 }, r2().setItem(n2, JSON.stringify(i3)), t3;
      });
    }, delete: function(e3) {
      return Promise.resolve().then(function() {
        var t3 = o2();
        delete t3[JSON.stringify(e3)], r2().setItem(n2, JSON.stringify(t3));
      });
    }, clear: function() {
      return Promise.resolve().then(function() {
        r2().removeItem(n2);
      });
    } };
  }
  function ko(e2) {
    var t2 = kt(e2.caches), n2 = t2.shift();
    return void 0 === n2 ? { get: function(e3, t3) {
      var n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } };
      return t3().then(function(e4) {
        return Promise.all([e4, n3.miss(e4)]);
      }).then(function(e4) {
        return It(e4, 1)[0];
      });
    }, set: function(e3, t3) {
      return Promise.resolve(t3);
    }, delete: function(e3) {
      return Promise.resolve();
    }, clear: function() {
      return Promise.resolve();
    } } : { get: function(e3, r2) {
      var o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } };
      return n2.get(e3, r2, o2).catch(function() {
        return ko({ caches: t2 }).get(e3, r2, o2);
      });
    }, set: function(e3, r2) {
      return n2.set(e3, r2).catch(function() {
        return ko({ caches: t2 }).set(e3, r2);
      });
    }, delete: function(e3) {
      return n2.delete(e3).catch(function() {
        return ko({ caches: t2 }).delete(e3);
      });
    }, clear: function() {
      return n2.clear().catch(function() {
        return ko({ caches: t2 }).clear();
      });
    } };
  }
  function Do() {
    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { serializable: true }, t2 = {};
    return { get: function(n2, r2) {
      var o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } }, i2 = JSON.stringify(n2);
      if (i2 in t2) return Promise.resolve(e2.serializable ? JSON.parse(t2[i2]) : t2[i2]);
      var a2 = r2();
      return a2.then(function(e3) {
        return o2.miss(e3);
      }).then(function() {
        return a2;
      });
    }, set: function(n2, r2) {
      return t2[JSON.stringify(n2)] = e2.serializable ? JSON.stringify(r2) : r2, Promise.resolve(r2);
    }, delete: function(e3) {
      return delete t2[JSON.stringify(e3)], Promise.resolve();
    }, clear: function() {
      return t2 = {}, Promise.resolve();
    } };
  }
  function Co(e2) {
    var t2 = e2.algoliaAgents, n2 = e2.client, r2 = e2.version, o2 = function(e3) {
      var t3 = { value: "Algolia for JavaScript (".concat(e3, ")"), add: function(e4) {
        var n3 = "; ".concat(e4.segment).concat(void 0 !== e4.version ? " (".concat(e4.version, ")") : "");
        return -1 === t3.value.indexOf(n3) && (t3.value = "".concat(t3.value).concat(n3)), t3;
      } };
      return t3;
    }(r2).add({ segment: n2, version: r2 });
    return t2.forEach(function(e3) {
      return o2.add(e3);
    }), o2;
  }
  var xo = 12e4;
  function Ao(e2) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "up", n2 = Date.now();
    return wt(wt({}, e2), {}, { status: t2, lastUpdate: n2, isUp: function() {
      return "up" === t2 || Date.now() - n2 > xo;
    }, isTimedOut: function() {
      return "timed out" === t2 && Date.now() - n2 <= xo;
    } });
  }
  var No = function() {
    function e2(t2, n2) {
      var r2;
      return vt(this, e2), yt(r2 = mt(this, e2, [t2]), "name", "AlgoliaError"), n2 && (r2.name = n2), r2;
    }
    return bt(e2, xt(Error)), dt(e2);
  }();
  var To = function() {
    function e2(t2, n2, r2) {
      var o2;
      return vt(this, e2), yt(o2 = mt(this, e2, [t2, r2]), "stackTrace", void 0), o2.stackTrace = n2, o2;
    }
    return bt(e2, No), dt(e2);
  }();
  var Ro = function() {
    function e2(t2) {
      return vt(this, e2), mt(this, e2, ["Unreachable hosts - your application id may be incorrect. If the error persists, please reach out to the Algolia Support team: https://alg.li/support.", t2, "RetryError"]);
    }
    return bt(e2, To), dt(e2);
  }();
  var Lo = function() {
    function e2(t2, n2, r2) {
      var o2, i2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "ApiError";
      return vt(this, e2), yt(o2 = mt(this, e2, [t2, r2, i2]), "status", void 0), o2.status = n2, o2;
    }
    return bt(e2, To), dt(e2);
  }();
  var qo = function() {
    function e2(t2, n2) {
      var r2;
      return vt(this, e2), yt(r2 = mt(this, e2, [t2, "DeserializationError"]), "response", void 0), r2.response = n2, r2;
    }
    return bt(e2, No), dt(e2);
  }();
  var Mo = function() {
    function e2(t2, n2, r2, o2) {
      var i2;
      return vt(this, e2), yt(i2 = mt(this, e2, [t2, n2, o2, "DetailedApiError"]), "error", void 0), i2.error = r2, i2;
    }
    return bt(e2, Lo), dt(e2);
  }();
  function Ho(e2, t2, n2) {
    var r2, o2 = (r2 = n2, Object.keys(r2).filter(function(e3) {
      return void 0 !== r2[e3];
    }).sort().map(function(e3) {
      return "".concat(e3, "=").concat(encodeURIComponent("[object Array]" === Object.prototype.toString.call(r2[e3]) ? r2[e3].join(",") : r2[e3]).replace(/\+/g, "%20"));
    }).join("&")), i2 = "".concat(e2.protocol, "://").concat(e2.url).concat(e2.port ? ":".concat(e2.port) : "", "/").concat("/" === t2.charAt(0) ? t2.substring(1) : t2);
    return o2.length && (i2 += "?".concat(o2)), i2;
  }
  function Uo(e2, t2) {
    if ("GET" !== e2.method && (void 0 !== e2.data || void 0 !== t2.data)) {
      var n2 = Array.isArray(e2.data) ? e2.data : wt(wt({}, e2.data), t2.data);
      return JSON.stringify(n2);
    }
  }
  function Fo(e2, t2, n2) {
    var r2 = wt(wt(wt({ Accept: "application/json" }, e2), t2), n2), o2 = {};
    return Object.keys(r2).forEach(function(e3) {
      var t3 = r2[e3];
      o2[e3.toLowerCase()] = t3;
    }), o2;
  }
  function Bo(e2) {
    try {
      return JSON.parse(e2.content);
    } catch (t2) {
      throw new qo(t2.message, e2);
    }
  }
  function Vo(e2, t2) {
    var n2 = e2.content, r2 = e2.status;
    try {
      var o2 = JSON.parse(n2);
      return "error" in o2 ? new Mo(o2.message, r2, o2.error, t2) : new Lo(o2.message, r2, t2);
    } catch (e3) {
    }
    return new Lo(n2, r2, t2);
  }
  function Ko(e2) {
    return e2.map(function(e3) {
      return Wo(e3);
    });
  }
  function Wo(e2) {
    var t2 = e2.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
    return wt(wt({}, e2), {}, { request: wt(wt({}, e2.request), {}, { headers: wt(wt({}, e2.request.headers), t2) }) });
  }
  var zo = ["appId", "apiKey", "authMode", "algoliaAgents"];
  var Jo = ["params"];
  var Qo = "5.12.0";
  function $o(e2) {
    return [{ url: "".concat(e2, "-dsn.algolia.net"), accept: "read", protocol: "https" }, { url: "".concat(e2, ".algolia.net"), accept: "write", protocol: "https" }].concat(function(e3) {
      for (var t2 = e3, n2 = e3.length - 1; n2 > 0; n2--) {
        var r2 = Math.floor(Math.random() * (n2 + 1)), o2 = e3[n2];
        t2[n2] = e3[r2], t2[r2] = o2;
      }
      return t2;
    }([{ url: "".concat(e2, "-1.algolianet.com"), accept: "readWrite", protocol: "https" }, { url: "".concat(e2, "-2.algolianet.com"), accept: "readWrite", protocol: "https" }, { url: "".concat(e2, "-3.algolianet.com"), accept: "readWrite", protocol: "https" }]));
  }
  var Zo = "3.6.3";
  var Go = ["footer", "searchBox"];
  function Yo(e2) {
    var t2 = e2.appId, n2 = e2.apiKey, r2 = e2.indexName, o2 = e2.placeholder, i2 = void 0 === o2 ? "Search docs" : o2, a2 = e2.searchParameters, c2 = e2.maxResultsPerGroup, u2 = e2.onClose, l2 = void 0 === u2 ? mo : u2, s2 = e2.transformItems, f2 = void 0 === s2 ? fo : s2, p2 = e2.hitComponent, m2 = void 0 === p2 ? Kr : p2, v2 = e2.resultsFooterComponent, h2 = void 0 === v2 ? function() {
      return null;
    } : v2, d2 = e2.navigator, y2 = e2.initialScrollY, _2 = void 0 === y2 ? 0 : y2, g2 = e2.transformSearchClient, b2 = void 0 === g2 ? fo : g2, S2 = e2.disableUserPersonalization, O2 = void 0 !== S2 && S2, w2 = e2.initialQuery, E2 = void 0 === w2 ? "" : w2, j2 = e2.translations, P2 = void 0 === j2 ? {} : j2, I2 = e2.getMissingResultsUrl, k2 = e2.insights, D2 = void 0 !== k2 && k2, C2 = P2.footer, x2 = P2.searchBox, A2 = Et(P2, Go), N2 = It(lt.useState({ query: "", collections: [], completion: null, context: {}, isOpen: false, activeItemId: null, status: "idle" }), 2), T2 = N2[0], R2 = N2[1], L2 = lt.useRef(null), q2 = lt.useRef(null), M2 = lt.useRef(null), H2 = lt.useRef(null), U2 = lt.useRef(null), F2 = lt.useRef(10), B2 = lt.useRef("undefined" != typeof window ? window.getSelection().toString().slice(0, 64) : "").current, V2 = lt.useRef(E2 || B2).current, K2 = function(e3, t3, n3) {
      return lt.useMemo(function() {
        var r3 = function(e4, t4) {
          if (!e4 || "string" != typeof e4) throw new Error("`appId` is missing.");
          if (!t4 || "string" != typeof t4) throw new Error("`apiKey` is missing.");
          return function(e5) {
            var t5 = e5.appId, n4 = e5.apiKey, r4 = e5.authMode, o3 = e5.algoliaAgents, i3 = Et(e5, zo), a3 = function(e6, t6) {
              var n5 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "WithinHeaders", r5 = { "x-algolia-api-key": t6, "x-algolia-application-id": e6 };
              return { headers: function() {
                return "WithinHeaders" === n5 ? r5 : {};
              }, queryParameters: function() {
                return "WithinQueryParameters" === n5 ? r5 : {};
              } };
            }(t5, n4, r4), c3 = function(e6) {
              var t6 = e6.hosts, n5 = e6.hostsCache, r5 = e6.baseHeaders, o4 = e6.logger, i4 = e6.baseQueryParameters, a4 = e6.algoliaAgent, c4 = e6.timeouts, u3 = e6.requester, l3 = e6.requestsCache, s3 = e6.responsesCache;
              function f3(e7) {
                return p3.apply(this, arguments);
              }
              function p3() {
                return (p3 = pt(jt().mark(function e7(t7) {
                  var r6, o5, i5, a5, c5;
                  return jt().wrap(function(e8) {
                    for (; ; ) switch (e8.prev = e8.next) {
                      case 0:
                        return e8.next = 2, Promise.all(t7.map(function(e9) {
                          return n5.get(e9, function() {
                            return Promise.resolve(Ao(e9));
                          });
                        }));
                      case 2:
                        return r6 = e8.sent, o5 = r6.filter(function(e9) {
                          return e9.isUp();
                        }), i5 = r6.filter(function(e9) {
                          return e9.isTimedOut();
                        }), a5 = [].concat(kt(o5), kt(i5)), c5 = a5.length > 0 ? a5 : t7, e8.abrupt("return", { hosts: c5, getTimeout: function(e9, t8) {
                          return (0 === i5.length && 0 === e9 ? 1 : i5.length + 3 + e9) * t8;
                        } });
                      case 8:
                      case "end":
                        return e8.stop();
                    }
                  }, e7);
                }))).apply(this, arguments);
              }
              function m3(e7, t7) {
                return v3.apply(this, arguments);
              }
              function v3() {
                return v3 = pt(jt().mark(function e7(l4, s4) {
                  var p4, m4, v4, h3, d3, y3, _3, g3, b3, S3, O3, w3, E3, j3 = arguments;
                  return jt().wrap(function(e8) {
                    for (; ; ) switch (e8.prev = e8.next) {
                      case 0:
                        if (p4 = !(j3.length > 2 && void 0 !== j3[2]) || j3[2], m4 = [], v4 = Uo(l4, s4), h3 = Fo(r5, l4.headers, s4.headers), d3 = "GET" === l4.method ? wt(wt({}, l4.data), s4.data) : {}, y3 = wt(wt(wt({}, i4), l4.queryParameters), d3), a4.value && (y3["x-algolia-agent"] = a4.value), s4 && s4.queryParameters) for (_3 = 0, g3 = Object.keys(s4.queryParameters); _3 < g3.length; _3++) b3 = g3[_3], s4.queryParameters[b3] && "[object Object]" !== Object.prototype.toString.call(s4.queryParameters[b3]) ? y3[b3] = s4.queryParameters[b3].toString() : y3[b3] = s4.queryParameters[b3];
                        return S3 = 0, O3 = function() {
                          var e9 = pt(jt().mark(function e10(t7, r6) {
                            var i5, a5, f4, d4, _4, g4;
                            return jt().wrap(function(e11) {
                              for (; ; ) switch (e11.prev = e11.next) {
                                case 0:
                                  if (void 0 !== (i5 = t7.pop())) {
                                    e11.next = 3;
                                    break;
                                  }
                                  throw new Ro(Ko(m4));
                                case 3:
                                  return a5 = wt(wt({}, c4), s4.timeouts), f4 = { data: v4, headers: h3, method: l4.method, url: Ho(i5, l4.path, y3), connectTimeout: r6(S3, a5.connect), responseTimeout: r6(S3, p4 ? a5.read : a5.write) }, d4 = function(e12) {
                                    var n6 = { request: f4, response: e12, host: i5, triesLeft: t7.length };
                                    return m4.push(n6), n6;
                                  }, e11.next = 8, u3.send(f4);
                                case 8:
                                  if (w4 = (b4 = _4 = e11.sent).isTimedOut, E4 = b4.status, !(w4 || function(e12) {
                                    return !e12.isTimedOut && !~~e12.status;
                                  }({ isTimedOut: w4, status: E4 }) || 2 != ~~(E4 / 100) && 4 != ~~(E4 / 100))) {
                                    e11.next = 16;
                                    break;
                                  }
                                  return g4 = d4(_4), _4.isTimedOut && S3++, o4.info("Retryable failure", Wo(g4)), e11.next = 15, n5.set(i5, Ao(i5, _4.isTimedOut ? "timed out" : "down"));
                                case 15:
                                  return e11.abrupt("return", O3(t7, r6));
                                case 16:
                                  if (2 != ~~(_4.status / 100)) {
                                    e11.next = 18;
                                    break;
                                  }
                                  return e11.abrupt("return", Bo(_4));
                                case 18:
                                  throw d4(_4), Vo(_4, m4);
                                case 20:
                                case "end":
                                  return e11.stop();
                              }
                              var b4, w4, E4;
                            }, e10);
                          }));
                          return function(t7, n6) {
                            return e9.apply(this, arguments);
                          };
                        }(), w3 = t6.filter(function(e9) {
                          return "readWrite" === e9.accept || (p4 ? "read" === e9.accept : "write" === e9.accept);
                        }), e8.next = 13, f3(w3);
                      case 13:
                        return E3 = e8.sent, e8.abrupt("return", O3(kt(E3.hosts).reverse(), E3.getTimeout));
                      case 15:
                      case "end":
                        return e8.stop();
                    }
                  }, e7);
                })), v3.apply(this, arguments);
              }
              return { hostsCache: n5, requester: u3, timeouts: c4, logger: o4, algoliaAgent: a4, baseHeaders: r5, baseQueryParameters: i4, hosts: t6, request: function(e7) {
                var t7 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n6 = e7.useReadTransporter || "GET" === e7.method;
                if (!n6) return m3(e7, t7, n6);
                var o5 = function() {
                  return m3(e7, t7);
                };
                if (true !== (t7.cacheable || e7.cacheable)) return o5();
                var a5 = { request: e7, requestOptions: t7, transporter: { queryParameters: i4, headers: r5 } };
                return s3.get(a5, function() {
                  return l3.get(a5, function() {
                    return l3.set(a5, o5()).then(function(e8) {
                      return Promise.all([l3.delete(a5), e8]);
                    }, function(e8) {
                      return Promise.all([l3.delete(a5), Promise.reject(e8)]);
                    }).then(function(e8) {
                      var t8 = It(e8, 2);
                      return t8[0], t8[1];
                    });
                  });
                }, { miss: function(e8) {
                  return s3.set(a5, e8);
                } });
              }, requestsCache: l3, responsesCache: s3 };
            }(wt(wt({ hosts: $o(t5) }, i3), {}, { algoliaAgent: Co({ algoliaAgents: o3, client: "Lite", version: Qo }), baseHeaders: wt(wt({ "content-type": "text/plain" }, a3.headers()), i3.baseHeaders), baseQueryParameters: wt(wt({}, a3.queryParameters()), i3.baseQueryParameters) }));
            return { transporter: c3, appId: t5, clearCache: function() {
              return Promise.all([c3.requestsCache.clear(), c3.responsesCache.clear()]).then(function() {
              });
            }, get _ua() {
              return c3.algoliaAgent.value;
            }, addAlgoliaAgent: function(e6, t6) {
              c3.algoliaAgent.add({ segment: e6, version: t6 });
            }, setClientApiKey: function(e6) {
              var t6 = e6.apiKey;
              r4 && "WithinHeaders" !== r4 ? c3.baseQueryParameters["x-algolia-api-key"] = t6 : c3.baseHeaders["x-algolia-api-key"] = t6;
            }, searchForHits: function(e6, t6) {
              return this.search(e6, t6);
            }, searchForFacets: function(e6, t6) {
              return this.search(e6, t6);
            }, customPost: function(e6, t6) {
              var n5 = e6.path, r5 = e6.parameters, o4 = e6.body;
              if (!n5) throw new Error("Parameter `path` is required when calling `customPost`.");
              var i4 = { method: "POST", path: "/{path}".replace("{path}", n5), queryParameters: r5 || {}, headers: {}, data: o4 || {} };
              return c3.request(i4, t6);
            }, getRecommendations: function(e6, t6) {
              if (e6 && Array.isArray(e6) && (e6 = { requests: e6 }), !e6) throw new Error("Parameter `getRecommendationsParams` is required when calling `getRecommendations`.");
              if (!e6.requests) throw new Error("Parameter `getRecommendationsParams.requests` is required when calling `getRecommendations`.");
              var n5 = { method: "POST", path: "/1/indexes/*/recommendations", queryParameters: {}, headers: {}, data: e6, useReadTransporter: true, cacheable: true };
              return c3.request(n5, t6);
            }, search: function(e6, t6) {
              if (e6 && Array.isArray(e6)) {
                var n5 = { requests: e6.map(function(e7) {
                  var t7 = e7.params, n6 = Et(e7, Jo);
                  return "facet" === n6.type ? wt(wt(wt({}, n6), t7), {}, { type: "facet" }) : wt(wt(wt({}, n6), t7), {}, { facet: void 0, maxFacetHits: void 0, facetQuery: void 0 });
                }) };
                e6 = n5;
              }
              if (!e6) throw new Error("Parameter `searchMethodParams` is required when calling `search`.");
              if (!e6.requests) throw new Error("Parameter `searchMethodParams.requests` is required when calling `search`.");
              var r5 = { method: "POST", path: "/1/indexes/*/queries", queryParameters: {}, headers: {}, data: e6, useReadTransporter: true, cacheable: true };
              return c3.request(r5, t6);
            } };
          }(wt({ appId: e4, apiKey: t4, timeouts: { connect: 1e3, read: 2e3, write: 3e4 }, logger: { debug: function(e5, t5) {
            return Promise.resolve();
          }, info: function(e5, t5) {
            return Promise.resolve();
          }, error: function(e5, t5) {
            return Promise.resolve();
          } }, requester: { send: function(e5) {
            return new Promise(function(t5) {
              var n4 = new XMLHttpRequest();
              n4.open(e5.method, e5.url, true), Object.keys(e5.headers).forEach(function(t6) {
                return n4.setRequestHeader(t6, e5.headers[t6]);
              });
              var r4, o3 = function(e6, r5) {
                return setTimeout(function() {
                  n4.abort(), t5({ status: 0, content: r5, isTimedOut: true });
                }, e6);
              }, i3 = o3(e5.connectTimeout, "Connection timeout");
              n4.onreadystatechange = function() {
                n4.readyState > n4.OPENED && void 0 === r4 && (clearTimeout(i3), r4 = o3(e5.responseTimeout, "Socket timeout"));
              }, n4.onerror = function() {
                0 === n4.status && (clearTimeout(i3), clearTimeout(r4), t5({ content: n4.responseText || "Network request failed", status: n4.status, isTimedOut: false }));
              }, n4.onload = function() {
                clearTimeout(i3), clearTimeout(r4), t5({ content: n4.responseText, status: n4.status, isTimedOut: false });
              }, n4.send(e5.data);
            });
          } }, algoliaAgents: [{ segment: "Browser" }], authMode: "WithinQueryParameters", responsesCache: Do(), requestsCache: Do({ serializable: false }), hostsCache: ko({ caches: [Io({ key: "".concat(Qo, "-").concat(e4) }), Do()] }) }, void 0));
        }(e3, t3);
        return r3.addAlgoliaAgent("docsearch", Zo), false === /docsearch.js \(.*\)/.test(r3.transporter.algoliaAgent.value) && r3.addAlgoliaAgent("docsearch-react", Zo), n3(r3);
      }, [e3, t3, n3]);
    }(t2, n2, b2), W2 = lt.useRef(Po({ key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(r2), limit: 10 })).current, z2 = lt.useRef(Po({ key: "__DOCSEARCH_RECENT_SEARCHES__".concat(r2), limit: 0 === W2.getAll().length ? 7 : 4 })).current, J2 = lt.useCallback(function(e3) {
      if (!O2) {
        var t3 = "content" === e3.type ? e3.__docsearch_parent : e3;
        t3 && -1 === W2.getAll().findIndex(function(e4) {
          return e4.objectID === t3.objectID;
        }) && z2.add(t3);
      }
    }, [W2, z2, O2]), Q2 = lt.useCallback(function(e3) {
      if (T2.context.algoliaInsightsPlugin && e3.__autocomplete_id) {
        var t3 = e3, n3 = { eventName: "Item Selected", index: t3.__autocomplete_indexName, items: [t3], positions: [e3.__autocomplete_id], queryID: t3.__autocomplete_queryID };
        T2.context.algoliaInsightsPlugin.insights.clickedObjectIDsAfterSearch(n3);
      }
    }, [T2.context.algoliaInsightsPlugin]), $2 = lt.useMemo(function() {
      return Ur({ id: "docsearch", defaultActiveItemId: 0, placeholder: i2, openOnFocus: true, initialState: { query: V2, context: { searchSuggestions: [] } }, insights: D2, navigator: d2, onStateChange: function(e3) {
        R2(e3.state);
      }, getSources: function(e3) {
        var o3 = e3.query, i3 = e3.state, u3 = e3.setContext, s3 = e3.setStatus;
        if (!o3) return O2 ? [] : [{ sourceId: "recentSearches", onSelect: function(e4) {
          var t3 = e4.item, n3 = e4.event;
          J2(t3), po(n3) || l2();
        }, getItemUrl: function(e4) {
          return e4.item.url;
        }, getItems: function() {
          return z2.getAll();
        } }, { sourceId: "favoriteSearches", onSelect: function(e4) {
          var t3 = e4.item, n3 = e4.event;
          J2(t3), po(n3) || l2();
        }, getItemUrl: function(e4) {
          return e4.item.url;
        }, getItems: function() {
          return W2.getAll();
        } }];
        var p3 = Boolean(D2);
        return K2.search({ requests: [wt({ query: o3, indexName: r2, attributesToRetrieve: ["hierarchy.lvl0", "hierarchy.lvl1", "hierarchy.lvl2", "hierarchy.lvl3", "hierarchy.lvl4", "hierarchy.lvl5", "hierarchy.lvl6", "content", "type", "url"], attributesToSnippet: ["hierarchy.lvl1:".concat(F2.current), "hierarchy.lvl2:".concat(F2.current), "hierarchy.lvl3:".concat(F2.current), "hierarchy.lvl4:".concat(F2.current), "hierarchy.lvl5:".concat(F2.current), "hierarchy.lvl6:".concat(F2.current), "content:".concat(F2.current)], snippetEllipsisText: "\u2026", highlightPreTag: "<mark>", highlightPostTag: "</mark>", hitsPerPage: 20, clickAnalytics: p3 }, a2)] }).catch(function(e4) {
          throw "RetryError" === e4.name && s3("error"), e4;
        }).then(function(e4) {
          var o4 = e4.results[0], a3 = o4.hits, s4 = o4.nbHits, m3 = so(a3, function(e5) {
            return yo(e5);
          }, c2);
          i3.context.searchSuggestions.length < Object.keys(m3).length && u3({ searchSuggestions: Object.keys(m3) }), u3({ nbHits: s4 });
          var v3 = {};
          return p3 && (v3 = { __autocomplete_indexName: r2, __autocomplete_queryID: o4.queryID, __autocomplete_algoliaCredentials: { appId: t2, apiKey: n2 } }), Object.values(m3).map(function(e5, t3) {
            return { sourceId: "hits".concat(t3), onSelect: function(e6) {
              var t4 = e6.item, n3 = e6.event;
              J2(t4), po(n3) || l2();
            }, getItemUrl: function(e6) {
              return e6.item.url;
            }, getItems: function() {
              return Object.values(so(e5, function(e6) {
                return e6.hierarchy.lvl1;
              }, c2)).map(f2).map(function(e6) {
                return e6.map(function(t4) {
                  var n3 = null, r3 = e6.find(function(e7) {
                    return "lvl1" === e7.type && e7.hierarchy.lvl1 === t4.hierarchy.lvl1;
                  });
                  return "lvl1" !== t4.type && r3 && (n3 = r3), wt(wt({}, t4), {}, { __docsearch_parent: n3 }, v3);
                });
              }).flat();
            } };
          });
        });
      } });
    }, [r2, a2, c2, K2, l2, z2, W2, J2, V2, i2, d2, f2, O2, D2, t2, n2]), Z2 = $2.getEnvironmentProps, G2 = $2.getRootProps, Y2 = $2.refresh;
    return function(e3) {
      var t3 = e3.getEnvironmentProps, n3 = e3.panelElement, r3 = e3.formElement, o3 = e3.inputElement;
      lt.useEffect(function() {
        if (n3 && r3 && o3) {
          var e4 = t3({ panelElement: n3, formElement: r3, inputElement: o3 }), i3 = e4.onTouchStart, a3 = e4.onTouchMove;
          return window.addEventListener("touchstart", i3), window.addEventListener("touchmove", a3), function() {
            window.removeEventListener("touchstart", i3), window.removeEventListener("touchmove", a3);
          };
        }
      }, [t3, n3, r3, o3]);
    }({ getEnvironmentProps: Z2, panelElement: H2.current, formElement: M2.current, inputElement: U2.current }), function(e3) {
      var t3 = e3.container;
      lt.useEffect(function() {
        if (t3) {
          var e4 = t3.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"), n3 = e4[0], r3 = e4[e4.length - 1];
          return t3.addEventListener("keydown", o3), function() {
            t3.removeEventListener("keydown", o3);
          };
        }
        function o3(e5) {
          "Tab" === e5.key && (e5.shiftKey ? document.activeElement === n3 && (e5.preventDefault(), r3.focus()) : document.activeElement === r3 && (e5.preventDefault(), n3.focus()));
        }
      }, [t3]);
    }({ container: L2.current }), lt.useEffect(function() {
      return document.body.classList.add("DocSearch--active"), function() {
        var e3, t3;
        document.body.classList.remove("DocSearch--active"), null === (e3 = (t3 = window).scrollTo) || void 0 === e3 || e3.call(t3, 0, _2);
      };
    }, []), lt.useEffect(function() {
      window.matchMedia("(max-width: 768px)").matches && (F2.current = 5);
    }, []), lt.useEffect(function() {
      H2.current && (H2.current.scrollTop = 0);
    }, [T2.query]), lt.useEffect(function() {
      V2.length > 0 && (Y2(), U2.current && U2.current.focus());
    }, [V2, Y2]), lt.useEffect(function() {
      function e3() {
        if (q2.current) {
          var e4 = 0.01 * window.innerHeight;
          q2.current.style.setProperty("--docsearch-vh", "".concat(e4, "px"));
        }
      }
      return e3(), window.addEventListener("resize", e3), function() {
        window.removeEventListener("resize", e3);
      };
    }, []), lt.createElement("div", _t({ ref: L2 }, G2({ "aria-expanded": true }), { className: ["DocSearch", "DocSearch-Container", "stalled" === T2.status && "DocSearch-Container--Stalled", "error" === T2.status && "DocSearch-Container--Errored"].filter(Boolean).join(" "), role: "button", tabIndex: 0, onMouseDown: function(e3) {
      e3.target === e3.currentTarget && l2();
    } }), lt.createElement("div", { className: "DocSearch-Modal", ref: q2 }, lt.createElement("header", { className: "DocSearch-SearchBar", ref: M2 }, lt.createElement(Eo, _t({}, $2, { state: T2, autoFocus: 0 === V2.length, inputRef: U2, isFromSelection: Boolean(V2) && V2 === B2, translations: x2, onClose: l2 }))), lt.createElement("div", { className: "DocSearch-Dropdown", ref: H2 }, lt.createElement(Oo, _t({}, $2, { indexName: r2, state: T2, hitComponent: m2, resultsFooterComponent: h2, disableUserPersonalization: O2, recentSearches: z2, favoriteSearches: W2, inputRef: U2, translations: A2, getMissingResultsUrl: I2, onItemClick: function(e3, t3) {
      Q2(e3), J2(e3), po(t3) || l2();
    } }))), lt.createElement("footer", { className: "DocSearch-Footer" }, lt.createElement(Vr, { translations: C2 }))));
  }
  function Xo(e2) {
    var t2, n2, r2 = lt.useRef(null), o2 = It(lt.useState(false), 2), i2 = o2[0], a2 = o2[1], c2 = It(lt.useState((null == e2 ? void 0 : e2.initialQuery) || void 0), 2), u2 = c2[0], l2 = c2[1], s2 = lt.useCallback(function() {
      a2(true);
    }, [a2]), f2 = lt.useCallback(function() {
      a2(false), l2(null == e2 ? void 0 : e2.initialQuery);
    }, [a2, e2.initialQuery]);
    return function(e3) {
      var t3 = e3.isOpen, n3 = e3.onOpen, r3 = e3.onClose, o3 = e3.onInput, i3 = e3.searchButtonRef;
      lt.useEffect(function() {
        function e4(e5) {
          var a3;
          if ("Escape" === e5.code && t3 || "k" === (null === (a3 = e5.key) || void 0 === a3 ? void 0 : a3.toLowerCase()) && (e5.metaKey || e5.ctrlKey) || !function(e6) {
            var t4 = e6.target, n4 = t4.tagName;
            return t4.isContentEditable || "INPUT" === n4 || "SELECT" === n4 || "TEXTAREA" === n4;
          }(e5) && "/" === e5.key && !t3) return e5.preventDefault(), void (t3 ? r3() : document.body.classList.contains("DocSearch--active") || n3());
          i3 && i3.current === document.activeElement && o3 && /[a-zA-Z0-9]/.test(String.fromCharCode(e5.keyCode)) && o3(e5);
        }
        return window.addEventListener("keydown", e4), function() {
          window.removeEventListener("keydown", e4);
        };
      }, [t3, n3, r3, o3, i3]);
    }({ isOpen: i2, onOpen: s2, onClose: f2, onInput: lt.useCallback(function(e3) {
      a2(true), l2(e3.key);
    }, [a2, l2]), searchButtonRef: r2 }), lt.createElement(lt.Fragment, null, lt.createElement(Lt, { ref: r2, translations: null == e2 || null === (t2 = e2.translations) || void 0 === t2 ? void 0 : t2.button, onClick: s2 }), i2 && Me(lt.createElement(Yo, _t({}, e2, { initialScrollY: window.scrollY, initialQuery: u2, translations: null == e2 || null === (n2 = e2.translations) || void 0 === n2 ? void 0 : n2.modal, onClose: f2 })), document.body));
  }
  function ei(t2) {
    We(lt.createElement(Xo, e({}, t2, { transformSearchClient: function(e2) {
      return e2.addAlgoliaAgent("docsearch.js", Zo), t2.transformSearchClient ? t2.transformSearchClient(e2) : e2;
    } })), function(e2) {
      var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
      return "string" == typeof e2 ? t3.document.querySelector(e2) : e2;
    }(t2.container, t2.environment));
  }
  var esm_default = ei;

  // ns-hugo-imp:/home/runner/work/paketo-website/paketo-website/build-environment/assets/js/components/search.js
  function Search({ element }) {
    esm_default({
      container: element,
      appId: element.dataset.appId,
      apiKey: element.dataset.apiKey,
      indexName: element.dataset.index,
      placeholder: "Search docs..."
    });
  }

  // ns-hugo-imp:/home/runner/work/paketo-website/paketo-website/build-environment/assets/js/components/docs_nav.js
  init_shims();
  var DocsNav = class {
    constructor({ element }) {
      this.toggle = element.querySelector(".docs-mobile-tab");
      this.sidebar = element.querySelector(".docs-menu-container");
      this.toggle.addEventListener("click", this.handleClick.bind(this));
    }
    handleClick(event) {
      this.sidebar.classList.toggle("docs-menu-container--showing");
    }
  };

  // ns-hugo-imp:/home/runner/work/paketo-website/paketo-website/build-environment/assets/js/components/docs_getting_started.js
  init_shims();
  var GettingStarted = class {
    constructor({ element }) {
      this.buttons = element.querySelectorAll(".getting-started__btn");
      this.notes = element.querySelectorAll(".getting-started__note");
      this.selectedButton = element.querySelector(".getting-started__btn--selected");
      this.selectedNote = element.querySelector(".getting-started__note--selected");
      for (const button of this.buttons) {
        button.addEventListener("click", this.handleClick.bind(this));
      }
    }
    handleClick(event) {
      if (event.target == this.selectedButton) {
        return;
      }
      const noteIdx = this.getNoteIdx(event.target);
      if (noteIdx == -1) {
        return;
      }
      this.selectedButton.classList.toggle("getting-started__btn--selected");
      this.selectedNote.classList.toggle("getting-started__note--selected");
      event.target.classList.toggle("getting-started__btn--selected");
      this.selectedButton = event.target;
      this.notes[noteIdx].classList.toggle("getting-started__note--selected");
      this.selectedNote = this.notes[noteIdx];
    }
    getNoteIdx(button) {
      for (let i2 = 0; i2 < this.buttons.length; ++i2) {
        if (this.buttons[i2] == button) {
          return i2;
        }
      }
      return -1;
    }
  };

  // <stdin>
  window.addEventListener("load", (event) => {
    new Navigation({
      element: document.querySelector("#navigation")
    });
    const searchBox = document.querySelector("#docs-search");
    if (searchBox) {
      Search({ element: searchBox });
    }
    const docsElement = document.querySelector(".docs");
    if (docsElement) {
      new DocsNav({ element: docsElement });
    }
    OpenExternalLinksInNewTab({
      links: document.getElementsByTagName("a"),
      hostname: window.location.hostname
    });
    for (const element of document.querySelectorAll(".copyable")) {
      new CodeSnippet({ element });
    }
    for (const element of document.querySelectorAll(".docs .code-output")) {
      new Output({ element });
    }
    for (const element of document.querySelectorAll(".docs-menu__parent")) {
      new DocsSidebarExpander({ element });
    }
    for (const element of document.querySelectorAll(".getting-started")) {
      new GettingStarted({ element });
    }
  });
})();
/*! Bundled license information:

clipboard/dist/clipboard.js:
  (*!
   * clipboard.js v2.0.11
   * https://clipboardjs.com/
   *
   * Licensed MIT © Zeno Rocha
   *)

@docsearch/js/dist/esm/index.js:
  (*! @docsearch/js 3.6.3 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com *)
*/
