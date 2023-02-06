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
                      if ("value" in descriptor)
                        descriptor.writable = true;
                      Object.defineProperty(target, descriptor.key, descriptor);
                    }
                  }
                  function _createClass(Constructor, protoProps, staticProps) {
                    if (protoProps)
                      _defineProperties(Constructor.prototype, protoProps);
                    if (staticProps)
                      _defineProperties(Constructor, staticProps);
                    return Constructor;
                  }
                  function _inherits(subClass, superClass) {
                    if (typeof superClass !== "function" && superClass !== null) {
                      throw new TypeError("Super expression must either be null or a function");
                    }
                    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
                    if (superClass)
                      _setPrototypeOf(subClass, superClass);
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
                    if (typeof Reflect === "undefined" || !Reflect.construct)
                      return false;
                    if (Reflect.construct.sham)
                      return false;
                    if (typeof Proxy === "function")
                      return true;
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

  // ns-hugo:/home/runner/work/paketo-website/paketo-website/build-environment/assets/js/components/navigation.js
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

  // ns-hugo:/home/runner/work/paketo-website/paketo-website/build-environment/assets/js/components/links.js
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

  // ns-hugo:/home/runner/work/paketo-website/paketo-website/build-environment/assets/js/components/code_snippet.js
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

  // ns-hugo:/home/runner/work/paketo-website/paketo-website/build-environment/assets/js/components/docs-sidebar.js
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

  // ns-hugo:/home/runner/work/paketo-website/paketo-website/build-environment/assets/js/components/search.js
  init_shims();

  // node_modules/@docsearch/js/dist/esm/index.js
  init_shims();
  function e(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function t(t2) {
    for (var n2 = 1; n2 < arguments.length; n2++) {
      var o2 = null != arguments[n2] ? arguments[n2] : {};
      n2 % 2 ? e(Object(o2), true).forEach(function(e2) {
        r(t2, e2, o2[e2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(o2)) : e(Object(o2)).forEach(function(e2) {
        Object.defineProperty(t2, e2, Object.getOwnPropertyDescriptor(o2, e2));
      });
    }
    return t2;
  }
  function n(e2) {
    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, n(e2);
  }
  function r(e2, t2, n2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function o() {
    return o = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2)
          Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
      }
      return e2;
    }, o.apply(this, arguments);
  }
  function c(e2, t2) {
    if (null == e2)
      return {};
    var n2, r2, o2 = function(e3, t3) {
      if (null == e3)
        return {};
      var n3, r3, o3 = {}, c3 = Object.keys(e3);
      for (r3 = 0; r3 < c3.length; r3++)
        n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var c2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < c2.length; r2++)
        n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  function i(e2, t2) {
    return function(e3) {
      if (Array.isArray(e3))
        return e3;
    }(e2) || function(e3, t3) {
      var n2 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
      if (null == n2)
        return;
      var r2, o2, c2 = [], i2 = true, a2 = false;
      try {
        for (n2 = n2.call(e3); !(i2 = (r2 = n2.next()).done) && (c2.push(r2.value), !t3 || c2.length !== t3); i2 = true)
          ;
      } catch (e4) {
        a2 = true, o2 = e4;
      } finally {
        try {
          i2 || null == n2.return || n2.return();
        } finally {
          if (a2)
            throw o2;
        }
      }
      return c2;
    }(e2, t2) || u(e2, t2) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function a(e2) {
    return function(e3) {
      if (Array.isArray(e3))
        return l(e3);
    }(e2) || function(e3) {
      if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"])
        return Array.from(e3);
    }(e2) || u(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function u(e2, t2) {
    if (e2) {
      if ("string" == typeof e2)
        return l(e2, t2);
      var n2 = Object.prototype.toString.call(e2).slice(8, -1);
      return "Object" === n2 && e2.constructor && (n2 = e2.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e2) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? l(e2, t2) : void 0;
    }
  }
  function l(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
      r2[n2] = e2[n2];
    return r2;
  }
  var s;
  var f;
  var p;
  var m;
  var d;
  var h = {};
  var v = [];
  var y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function _(e2, t2) {
    for (var n2 in t2)
      e2[n2] = t2[n2];
    return e2;
  }
  function b(e2) {
    var t2 = e2.parentNode;
    t2 && t2.removeChild(e2);
  }
  function g(e2, t2, n2) {
    var r2, o2, c2, i2 = arguments, a2 = {};
    for (c2 in t2)
      "key" == c2 ? r2 = t2[c2] : "ref" == c2 ? o2 = t2[c2] : a2[c2] = t2[c2];
    if (arguments.length > 3)
      for (n2 = [n2], c2 = 3; c2 < arguments.length; c2++)
        n2.push(i2[c2]);
    if (null != n2 && (a2.children = n2), "function" == typeof e2 && null != e2.defaultProps)
      for (c2 in e2.defaultProps)
        void 0 === a2[c2] && (a2[c2] = e2.defaultProps[c2]);
    return O(e2, a2, r2, o2, null);
  }
  function O(e2, t2, n2, r2, o2) {
    var c2 = { type: e2, props: t2, key: n2, ref: r2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == o2 ? ++s.__v : o2 };
    return null != s.vnode && s.vnode(c2), c2;
  }
  function S(e2) {
    return e2.children;
  }
  function E(e2, t2) {
    this.props = e2, this.context = t2;
  }
  function w(e2, t2) {
    if (null == t2)
      return e2.__ ? w(e2.__, e2.__.__k.indexOf(e2) + 1) : null;
    for (var n2; t2 < e2.__k.length; t2++)
      if (null != (n2 = e2.__k[t2]) && null != n2.__e)
        return n2.__e;
    return "function" == typeof e2.type ? w(e2) : null;
  }
  function j(e2) {
    var t2, n2;
    if (null != (e2 = e2.__) && null != e2.__c) {
      for (e2.__e = e2.__c.base = null, t2 = 0; t2 < e2.__k.length; t2++)
        if (null != (n2 = e2.__k[t2]) && null != n2.__e) {
          e2.__e = e2.__c.base = n2.__e;
          break;
        }
      return j(e2);
    }
  }
  function P(e2) {
    (!e2.__d && (e2.__d = true) && f.push(e2) && !I.__r++ || m !== s.debounceRendering) && ((m = s.debounceRendering) || p)(I);
  }
  function I() {
    for (var e2; I.__r = f.length; )
      e2 = f.sort(function(e3, t2) {
        return e3.__v.__b - t2.__v.__b;
      }), f = [], e2.some(function(e3) {
        var t2, n2, r2, o2, c2, i2;
        e3.__d && (c2 = (o2 = (t2 = e3).__v).__e, (i2 = t2.__P) && (n2 = [], (r2 = _({}, o2)).__v = o2.__v + 1, L(i2, o2, r2, t2.__n, void 0 !== i2.ownerSVGElement, null != o2.__h ? [c2] : null, n2, null == c2 ? w(o2) : c2, o2.__h), q(n2, o2), o2.__e != c2 && j(o2)));
      });
  }
  function k(e2, t2, n2, r2, o2, c2, i2, a2, u2, l2) {
    var s2, f2, p2, m2, d2, y2, _2, b2 = r2 && r2.__k || v, g2 = b2.length;
    for (n2.__k = [], s2 = 0; s2 < t2.length; s2++)
      if (null != (m2 = n2.__k[s2] = null == (m2 = t2[s2]) || "boolean" == typeof m2 ? null : "string" == typeof m2 || "number" == typeof m2 ? O(null, m2, null, null, m2) : Array.isArray(m2) ? O(S, { children: m2 }, null, null, null) : m2.__b > 0 ? O(m2.type, m2.props, m2.key, null, m2.__v) : m2)) {
        if (m2.__ = n2, m2.__b = n2.__b + 1, null === (p2 = b2[s2]) || p2 && m2.key == p2.key && m2.type === p2.type)
          b2[s2] = void 0;
        else
          for (f2 = 0; f2 < g2; f2++) {
            if ((p2 = b2[f2]) && m2.key == p2.key && m2.type === p2.type) {
              b2[f2] = void 0;
              break;
            }
            p2 = null;
          }
        L(e2, m2, p2 = p2 || h, o2, c2, i2, a2, u2, l2), d2 = m2.__e, (f2 = m2.ref) && p2.ref != f2 && (_2 || (_2 = []), p2.ref && _2.push(p2.ref, null, m2), _2.push(f2, m2.__c || d2, m2)), null != d2 ? (null == y2 && (y2 = d2), "function" == typeof m2.type && null != m2.__k && m2.__k === p2.__k ? m2.__d = u2 = D(m2, u2, e2) : u2 = A(e2, m2, p2, b2, d2, u2), l2 || "option" !== n2.type ? "function" == typeof n2.type && (n2.__d = u2) : e2.value = "") : u2 && p2.__e == u2 && u2.parentNode != e2 && (u2 = w(p2));
      }
    for (n2.__e = y2, s2 = g2; s2--; )
      null != b2[s2] && ("function" == typeof n2.type && null != b2[s2].__e && b2[s2].__e == n2.__d && (n2.__d = w(r2, s2 + 1)), U(b2[s2], b2[s2]));
    if (_2)
      for (s2 = 0; s2 < _2.length; s2++)
        H(_2[s2], _2[++s2], _2[++s2]);
  }
  function D(e2, t2, n2) {
    var r2, o2;
    for (r2 = 0; r2 < e2.__k.length; r2++)
      (o2 = e2.__k[r2]) && (o2.__ = e2, t2 = "function" == typeof o2.type ? D(o2, t2, n2) : A(n2, o2, o2, e2.__k, o2.__e, t2));
    return t2;
  }
  function C(e2, t2) {
    return t2 = t2 || [], null == e2 || "boolean" == typeof e2 || (Array.isArray(e2) ? e2.some(function(e3) {
      C(e3, t2);
    }) : t2.push(e2)), t2;
  }
  function A(e2, t2, n2, r2, o2, c2) {
    var i2, a2, u2;
    if (void 0 !== t2.__d)
      i2 = t2.__d, t2.__d = void 0;
    else if (null == n2 || o2 != c2 || null == o2.parentNode)
      e:
        if (null == c2 || c2.parentNode !== e2)
          e2.appendChild(o2), i2 = null;
        else {
          for (a2 = c2, u2 = 0; (a2 = a2.nextSibling) && u2 < r2.length; u2 += 2)
            if (a2 == o2)
              break e;
          e2.insertBefore(o2, c2), i2 = c2;
        }
    return void 0 !== i2 ? i2 : o2.nextSibling;
  }
  function N(e2, t2, n2) {
    "-" === t2[0] ? e2.setProperty(t2, n2) : e2[t2] = null == n2 ? "" : "number" != typeof n2 || y.test(t2) ? n2 : n2 + "px";
  }
  function x(e2, t2, n2, r2, o2) {
    var c2;
    e:
      if ("style" === t2)
        if ("string" == typeof n2)
          e2.style.cssText = n2;
        else {
          if ("string" == typeof r2 && (e2.style.cssText = r2 = ""), r2)
            for (t2 in r2)
              n2 && t2 in n2 || N(e2.style, t2, "");
          if (n2)
            for (t2 in n2)
              r2 && n2[t2] === r2[t2] || N(e2.style, t2, n2[t2]);
        }
      else if ("o" === t2[0] && "n" === t2[1])
        c2 = t2 !== (t2 = t2.replace(/Capture$/, "")), t2 = t2.toLowerCase() in e2 ? t2.toLowerCase().slice(2) : t2.slice(2), e2.l || (e2.l = {}), e2.l[t2 + c2] = n2, n2 ? r2 || e2.addEventListener(t2, c2 ? R : T, c2) : e2.removeEventListener(t2, c2 ? R : T, c2);
      else if ("dangerouslySetInnerHTML" !== t2) {
        if (o2)
          t2 = t2.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if ("href" !== t2 && "list" !== t2 && "form" !== t2 && "download" !== t2 && t2 in e2)
          try {
            e2[t2] = null == n2 ? "" : n2;
            break e;
          } catch (e3) {
          }
        "function" == typeof n2 || (null != n2 && (false !== n2 || "a" === t2[0] && "r" === t2[1]) ? e2.setAttribute(t2, n2) : e2.removeAttribute(t2));
      }
  }
  function T(e2) {
    this.l[e2.type + false](s.event ? s.event(e2) : e2);
  }
  function R(e2) {
    this.l[e2.type + true](s.event ? s.event(e2) : e2);
  }
  function L(e2, t2, n2, r2, o2, c2, i2, a2, u2) {
    var l2, f2, p2, m2, d2, h2, v2, y2, b2, g2, O2, w2 = t2.type;
    if (void 0 !== t2.constructor)
      return null;
    null != n2.__h && (u2 = n2.__h, a2 = t2.__e = n2.__e, t2.__h = null, c2 = [a2]), (l2 = s.__b) && l2(t2);
    try {
      e:
        if ("function" == typeof w2) {
          if (y2 = t2.props, b2 = (l2 = w2.contextType) && r2[l2.__c], g2 = l2 ? b2 ? b2.props.value : l2.__ : r2, n2.__c ? v2 = (f2 = t2.__c = n2.__c).__ = f2.__E : ("prototype" in w2 && w2.prototype.render ? t2.__c = f2 = new w2(y2, g2) : (t2.__c = f2 = new E(y2, g2), f2.constructor = w2, f2.render = F), b2 && b2.sub(f2), f2.props = y2, f2.state || (f2.state = {}), f2.context = g2, f2.__n = r2, p2 = f2.__d = true, f2.__h = []), null == f2.__s && (f2.__s = f2.state), null != w2.getDerivedStateFromProps && (f2.__s == f2.state && (f2.__s = _({}, f2.__s)), _(f2.__s, w2.getDerivedStateFromProps(y2, f2.__s))), m2 = f2.props, d2 = f2.state, p2)
            null == w2.getDerivedStateFromProps && null != f2.componentWillMount && f2.componentWillMount(), null != f2.componentDidMount && f2.__h.push(f2.componentDidMount);
          else {
            if (null == w2.getDerivedStateFromProps && y2 !== m2 && null != f2.componentWillReceiveProps && f2.componentWillReceiveProps(y2, g2), !f2.__e && null != f2.shouldComponentUpdate && false === f2.shouldComponentUpdate(y2, f2.__s, g2) || t2.__v === n2.__v) {
              f2.props = y2, f2.state = f2.__s, t2.__v !== n2.__v && (f2.__d = false), f2.__v = t2, t2.__e = n2.__e, t2.__k = n2.__k, f2.__h.length && i2.push(f2);
              break e;
            }
            null != f2.componentWillUpdate && f2.componentWillUpdate(y2, f2.__s, g2), null != f2.componentDidUpdate && f2.__h.push(function() {
              f2.componentDidUpdate(m2, d2, h2);
            });
          }
          f2.context = g2, f2.props = y2, f2.state = f2.__s, (l2 = s.__r) && l2(t2), f2.__d = false, f2.__v = t2, f2.__P = e2, l2 = f2.render(f2.props, f2.state, f2.context), f2.state = f2.__s, null != f2.getChildContext && (r2 = _(_({}, r2), f2.getChildContext())), p2 || null == f2.getSnapshotBeforeUpdate || (h2 = f2.getSnapshotBeforeUpdate(m2, d2)), O2 = null != l2 && l2.type === S && null == l2.key ? l2.props.children : l2, k(e2, Array.isArray(O2) ? O2 : [O2], t2, n2, r2, o2, c2, i2, a2, u2), f2.base = t2.__e, t2.__h = null, f2.__h.length && i2.push(f2), v2 && (f2.__E = f2.__ = null), f2.__e = false;
        } else
          null == c2 && t2.__v === n2.__v ? (t2.__k = n2.__k, t2.__e = n2.__e) : t2.__e = M(n2.__e, t2, n2, r2, o2, c2, i2, u2);
      (l2 = s.diffed) && l2(t2);
    } catch (e3) {
      t2.__v = null, (u2 || null != c2) && (t2.__e = a2, t2.__h = !!u2, c2[c2.indexOf(a2)] = null), s.__e(e3, t2, n2);
    }
  }
  function q(e2, t2) {
    s.__c && s.__c(t2, e2), e2.some(function(t3) {
      try {
        e2 = t3.__h, t3.__h = [], e2.some(function(e3) {
          e3.call(t3);
        });
      } catch (e3) {
        s.__e(e3, t3.__v);
      }
    });
  }
  function M(e2, t2, n2, r2, o2, c2, i2, a2) {
    var u2, l2, s2, f2, p2 = n2.props, m2 = t2.props, d2 = t2.type, y2 = 0;
    if ("svg" === d2 && (o2 = true), null != c2) {
      for (; y2 < c2.length; y2++)
        if ((u2 = c2[y2]) && (u2 === e2 || (d2 ? u2.localName == d2 : 3 == u2.nodeType))) {
          e2 = u2, c2[y2] = null;
          break;
        }
    }
    if (null == e2) {
      if (null === d2)
        return document.createTextNode(m2);
      e2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, m2.is && m2), c2 = null, a2 = false;
    }
    if (null === d2)
      p2 === m2 || a2 && e2.data === m2 || (e2.data = m2);
    else {
      if (c2 = c2 && v.slice.call(e2.childNodes), l2 = (p2 = n2.props || h).dangerouslySetInnerHTML, s2 = m2.dangerouslySetInnerHTML, !a2) {
        if (null != c2)
          for (p2 = {}, f2 = 0; f2 < e2.attributes.length; f2++)
            p2[e2.attributes[f2].name] = e2.attributes[f2].value;
        (s2 || l2) && (s2 && (l2 && s2.__html == l2.__html || s2.__html === e2.innerHTML) || (e2.innerHTML = s2 && s2.__html || ""));
      }
      if (function(e3, t3, n3, r3, o3) {
        var c3;
        for (c3 in n3)
          "children" === c3 || "key" === c3 || c3 in t3 || x(e3, c3, null, n3[c3], r3);
        for (c3 in t3)
          o3 && "function" != typeof t3[c3] || "children" === c3 || "key" === c3 || "value" === c3 || "checked" === c3 || n3[c3] === t3[c3] || x(e3, c3, t3[c3], n3[c3], r3);
      }(e2, m2, p2, o2, a2), s2)
        t2.__k = [];
      else if (y2 = t2.props.children, k(e2, Array.isArray(y2) ? y2 : [y2], t2, n2, r2, o2 && "foreignObject" !== d2, c2, i2, e2.firstChild, a2), null != c2)
        for (y2 = c2.length; y2--; )
          null != c2[y2] && b(c2[y2]);
      a2 || ("value" in m2 && void 0 !== (y2 = m2.value) && (y2 !== e2.value || "progress" === d2 && !y2) && x(e2, "value", y2, p2.value, false), "checked" in m2 && void 0 !== (y2 = m2.checked) && y2 !== e2.checked && x(e2, "checked", y2, p2.checked, false));
    }
    return e2;
  }
  function H(e2, t2, n2) {
    try {
      "function" == typeof e2 ? e2(t2) : e2.current = t2;
    } catch (e3) {
      s.__e(e3, n2);
    }
  }
  function U(e2, t2, n2) {
    var r2, o2, c2;
    if (s.unmount && s.unmount(e2), (r2 = e2.ref) && (r2.current && r2.current !== e2.__e || H(r2, null, t2)), n2 || "function" == typeof e2.type || (n2 = null != (o2 = e2.__e)), e2.__e = e2.__d = void 0, null != (r2 = e2.__c)) {
      if (r2.componentWillUnmount)
        try {
          r2.componentWillUnmount();
        } catch (e3) {
          s.__e(e3, t2);
        }
      r2.base = r2.__P = null;
    }
    if (r2 = e2.__k)
      for (c2 = 0; c2 < r2.length; c2++)
        r2[c2] && U(r2[c2], t2, n2);
    null != o2 && b(o2);
  }
  function F(e2, t2, n2) {
    return this.constructor(e2, n2);
  }
  function B(e2, t2, n2) {
    var r2, o2, c2;
    s.__ && s.__(e2, t2), o2 = (r2 = "function" == typeof n2) ? null : n2 && n2.__k || t2.__k, c2 = [], L(t2, e2 = (!r2 && n2 || t2).__k = g(S, null, [e2]), o2 || h, h, void 0 !== t2.ownerSVGElement, !r2 && n2 ? [n2] : o2 ? null : t2.firstChild ? v.slice.call(t2.childNodes) : null, c2, !r2 && n2 ? n2 : o2 ? o2.__e : t2.firstChild, r2), q(c2, e2);
  }
  function V(e2, t2) {
    B(e2, t2, V);
  }
  function W(e2, t2, n2) {
    var r2, o2, c2, i2 = arguments, a2 = _({}, e2.props);
    for (c2 in t2)
      "key" == c2 ? r2 = t2[c2] : "ref" == c2 ? o2 = t2[c2] : a2[c2] = t2[c2];
    if (arguments.length > 3)
      for (n2 = [n2], c2 = 3; c2 < arguments.length; c2++)
        n2.push(i2[c2]);
    return null != n2 && (a2.children = n2), O(e2.type, a2, r2 || e2.key, o2 || e2.ref, null);
  }
  s = { __e: function(e2, t2) {
    for (var n2, r2, o2; t2 = t2.__; )
      if ((n2 = t2.__c) && !n2.__)
        try {
          if ((r2 = n2.constructor) && null != r2.getDerivedStateFromError && (n2.setState(r2.getDerivedStateFromError(e2)), o2 = n2.__d), null != n2.componentDidCatch && (n2.componentDidCatch(e2), o2 = n2.__d), o2)
            return n2.__E = n2;
        } catch (t3) {
          e2 = t3;
        }
    throw e2;
  }, __v: 0 }, E.prototype.setState = function(e2, t2) {
    var n2;
    n2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = _({}, this.state), "function" == typeof e2 && (e2 = e2(_({}, n2), this.props)), e2 && _(n2, e2), null != e2 && this.__v && (t2 && this.__h.push(t2), P(this));
  }, E.prototype.forceUpdate = function(e2) {
    this.__v && (this.__e = true, e2 && this.__h.push(e2), P(this));
  }, E.prototype.render = S, f = [], p = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, I.__r = 0, d = 0;
  var K;
  var z;
  var J;
  var $ = 0;
  var Q = [];
  var Z = s.__b;
  var Y = s.__r;
  var G = s.diffed;
  var X = s.__c;
  var ee = s.unmount;
  function te(e2, t2) {
    s.__h && s.__h(z, e2, $ || t2), $ = 0;
    var n2 = z.__H || (z.__H = { __: [], __h: [] });
    return e2 >= n2.__.length && n2.__.push({}), n2.__[e2];
  }
  function ne(e2) {
    return $ = 1, re(pe, e2);
  }
  function re(e2, t2, n2) {
    var r2 = te(K++, 2);
    return r2.t = e2, r2.__c || (r2.__ = [n2 ? n2(t2) : pe(void 0, t2), function(e3) {
      var t3 = r2.t(r2.__[0], e3);
      r2.__[0] !== t3 && (r2.__ = [t3, r2.__[1]], r2.__c.setState({}));
    }], r2.__c = z), r2.__;
  }
  function oe(e2, t2) {
    var n2 = te(K++, 3);
    !s.__s && fe(n2.__H, t2) && (n2.__ = e2, n2.__H = t2, z.__H.__h.push(n2));
  }
  function ce(e2, t2) {
    var n2 = te(K++, 4);
    !s.__s && fe(n2.__H, t2) && (n2.__ = e2, n2.__H = t2, z.__h.push(n2));
  }
  function ie(e2, t2) {
    var n2 = te(K++, 7);
    return fe(n2.__H, t2) && (n2.__ = e2(), n2.__H = t2, n2.__h = e2), n2.__;
  }
  function ae() {
    Q.forEach(function(e2) {
      if (e2.__P)
        try {
          e2.__H.__h.forEach(le), e2.__H.__h.forEach(se), e2.__H.__h = [];
        } catch (t2) {
          e2.__H.__h = [], s.__e(t2, e2.__v);
        }
    }), Q = [];
  }
  s.__b = function(e2) {
    z = null, Z && Z(e2);
  }, s.__r = function(e2) {
    Y && Y(e2), K = 0;
    var t2 = (z = e2.__c).__H;
    t2 && (t2.__h.forEach(le), t2.__h.forEach(se), t2.__h = []);
  }, s.diffed = function(e2) {
    G && G(e2);
    var t2 = e2.__c;
    t2 && t2.__H && t2.__H.__h.length && (1 !== Q.push(t2) && J === s.requestAnimationFrame || ((J = s.requestAnimationFrame) || function(e3) {
      var t3, n2 = function() {
        clearTimeout(r2), ue && cancelAnimationFrame(t3), setTimeout(e3);
      }, r2 = setTimeout(n2, 100);
      ue && (t3 = requestAnimationFrame(n2));
    })(ae)), z = void 0;
  }, s.__c = function(e2, t2) {
    t2.some(function(e3) {
      try {
        e3.__h.forEach(le), e3.__h = e3.__h.filter(function(e4) {
          return !e4.__ || se(e4);
        });
      } catch (n2) {
        t2.some(function(e4) {
          e4.__h && (e4.__h = []);
        }), t2 = [], s.__e(n2, e3.__v);
      }
    }), X && X(e2, t2);
  }, s.unmount = function(e2) {
    ee && ee(e2);
    var t2 = e2.__c;
    if (t2 && t2.__H)
      try {
        t2.__H.__.forEach(le);
      } catch (e3) {
        s.__e(e3, t2.__v);
      }
  };
  var ue = "function" == typeof requestAnimationFrame;
  function le(e2) {
    var t2 = z;
    "function" == typeof e2.__c && e2.__c(), z = t2;
  }
  function se(e2) {
    var t2 = z;
    e2.__c = e2.__(), z = t2;
  }
  function fe(e2, t2) {
    return !e2 || e2.length !== t2.length || t2.some(function(t3, n2) {
      return t3 !== e2[n2];
    });
  }
  function pe(e2, t2) {
    return "function" == typeof t2 ? t2(e2) : t2;
  }
  function me(e2, t2) {
    for (var n2 in t2)
      e2[n2] = t2[n2];
    return e2;
  }
  function de(e2, t2) {
    for (var n2 in e2)
      if ("__source" !== n2 && !(n2 in t2))
        return true;
    for (var r2 in t2)
      if ("__source" !== r2 && e2[r2] !== t2[r2])
        return true;
    return false;
  }
  function he(e2) {
    this.props = e2;
  }
  (he.prototype = new E()).isPureReactComponent = true, he.prototype.shouldComponentUpdate = function(e2, t2) {
    return de(this.props, e2) || de(this.state, t2);
  };
  var ve = s.__b;
  s.__b = function(e2) {
    e2.type && e2.type.__f && e2.ref && (e2.props.ref = e2.ref, e2.ref = null), ve && ve(e2);
  };
  var ye = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  var _e = function(e2, t2) {
    return null == e2 ? null : C(C(e2).map(t2));
  };
  var be = { map: _e, forEach: _e, count: function(e2) {
    return e2 ? C(e2).length : 0;
  }, only: function(e2) {
    var t2 = C(e2);
    if (1 !== t2.length)
      throw "Children.only";
    return t2[0];
  }, toArray: C };
  var ge = s.__e;
  function Oe() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function Se(e2) {
    var t2 = e2.__.__c;
    return t2 && t2.__e && t2.__e(e2);
  }
  function Ee() {
    this.u = null, this.o = null;
  }
  s.__e = function(e2, t2, n2) {
    if (e2.then) {
      for (var r2, o2 = t2; o2 = o2.__; )
        if ((r2 = o2.__c) && r2.__c)
          return null == t2.__e && (t2.__e = n2.__e, t2.__k = n2.__k), r2.__c(e2, t2);
    }
    ge(e2, t2, n2);
  }, (Oe.prototype = new E()).__c = function(e2, t2) {
    var n2 = t2.__c, r2 = this;
    null == r2.t && (r2.t = []), r2.t.push(n2);
    var o2 = Se(r2.__v), c2 = false, i2 = function() {
      c2 || (c2 = true, n2.componentWillUnmount = n2.__c, o2 ? o2(a2) : a2());
    };
    n2.__c = n2.componentWillUnmount, n2.componentWillUnmount = function() {
      i2(), n2.__c && n2.__c();
    };
    var a2 = function() {
      if (!--r2.__u) {
        if (r2.state.__e) {
          var e3 = r2.state.__e;
          r2.__v.__k[0] = function e4(t4, n3, r3) {
            return t4 && (t4.__v = null, t4.__k = t4.__k && t4.__k.map(function(t5) {
              return e4(t5, n3, r3);
            }), t4.__c && t4.__c.__P === n3 && (t4.__e && r3.insertBefore(t4.__e, t4.__d), t4.__c.__e = true, t4.__c.__P = r3)), t4;
          }(e3, e3.__c.__P, e3.__c.__O);
        }
        var t3;
        for (r2.setState({ __e: r2.__b = null }); t3 = r2.t.pop(); )
          t3.forceUpdate();
      }
    }, u2 = true === t2.__h;
    r2.__u++ || u2 || r2.setState({ __e: r2.__b = r2.__v.__k[0] }), e2.then(i2, i2);
  }, Oe.prototype.componentWillUnmount = function() {
    this.t = [];
  }, Oe.prototype.render = function(e2, t2) {
    if (this.__b) {
      if (this.__v.__k) {
        var n2 = document.createElement("div"), r2 = this.__v.__k[0].__c;
        this.__v.__k[0] = function e3(t3, n3, r3) {
          return t3 && (t3.__c && t3.__c.__H && (t3.__c.__H.__.forEach(function(e4) {
            "function" == typeof e4.__c && e4.__c();
          }), t3.__c.__H = null), null != (t3 = me({}, t3)).__c && (t3.__c.__P === r3 && (t3.__c.__P = n3), t3.__c = null), t3.__k = t3.__k && t3.__k.map(function(t4) {
            return e3(t4, n3, r3);
          })), t3;
        }(this.__b, n2, r2.__O = r2.__P);
      }
      this.__b = null;
    }
    var o2 = t2.__e && g(S, null, e2.fallback);
    return o2 && (o2.__h = null), [g(S, null, t2.__e ? null : e2.children), o2];
  };
  var we = function(e2, t2, n2) {
    if (++n2[1] === n2[0] && e2.o.delete(t2), e2.props.revealOrder && ("t" !== e2.props.revealOrder[0] || !e2.o.size))
      for (n2 = e2.u; n2; ) {
        for (; n2.length > 3; )
          n2.pop()();
        if (n2[1] < n2[0])
          break;
        e2.u = n2 = n2[2];
      }
  };
  function je(e2) {
    return this.getChildContext = function() {
      return e2.context;
    }, e2.children;
  }
  function Pe(e2) {
    var t2 = this, n2 = e2.i;
    t2.componentWillUnmount = function() {
      B(null, t2.l), t2.l = null, t2.i = null;
    }, t2.i && t2.i !== n2 && t2.componentWillUnmount(), e2.__v ? (t2.l || (t2.i = n2, t2.l = { nodeType: 1, parentNode: n2, childNodes: [], appendChild: function(e3) {
      this.childNodes.push(e3), t2.i.appendChild(e3);
    }, insertBefore: function(e3, n3) {
      this.childNodes.push(e3), t2.i.appendChild(e3);
    }, removeChild: function(e3) {
      this.childNodes.splice(this.childNodes.indexOf(e3) >>> 1, 1), t2.i.removeChild(e3);
    } }), B(g(je, { context: t2.context }, e2.__v), t2.l)) : t2.l && t2.componentWillUnmount();
  }
  function Ie(e2, t2) {
    return g(Pe, { __v: e2, i: t2 });
  }
  (Ee.prototype = new E()).__e = function(e2) {
    var t2 = this, n2 = Se(t2.__v), r2 = t2.o.get(e2);
    return r2[0]++, function(o2) {
      var c2 = function() {
        t2.props.revealOrder ? (r2.push(o2), we(t2, e2, r2)) : o2();
      };
      n2 ? n2(c2) : c2();
    };
  }, Ee.prototype.render = function(e2) {
    this.u = null, this.o = /* @__PURE__ */ new Map();
    var t2 = C(e2.children);
    e2.revealOrder && "b" === e2.revealOrder[0] && t2.reverse();
    for (var n2 = t2.length; n2--; )
      this.o.set(t2[n2], this.u = [1, 0, this.u]);
    return e2.children;
  }, Ee.prototype.componentDidUpdate = Ee.prototype.componentDidMount = function() {
    var e2 = this;
    this.o.forEach(function(t2, n2) {
      we(e2, n2, t2);
    });
  };
  var ke = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
  var De = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
  var Ce = function(e2) {
    return ("undefined" != typeof Symbol && "symbol" == n(Symbol()) ? /fil|che|rad/i : /fil|che|ra/i).test(e2);
  };
  function Ae(e2, t2, n2) {
    return null == t2.__k && (t2.textContent = ""), B(e2, t2), "function" == typeof n2 && n2(), e2 ? e2.__c : null;
  }
  E.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e2) {
    Object.defineProperty(E.prototype, e2, { configurable: true, get: function() {
      return this["UNSAFE_" + e2];
    }, set: function(t2) {
      Object.defineProperty(this, e2, { configurable: true, writable: true, value: t2 });
    } });
  });
  var Ne = s.event;
  function xe() {
  }
  function Te() {
    return this.cancelBubble;
  }
  function Re() {
    return this.defaultPrevented;
  }
  s.event = function(e2) {
    return Ne && (e2 = Ne(e2)), e2.persist = xe, e2.isPropagationStopped = Te, e2.isDefaultPrevented = Re, e2.nativeEvent = e2;
  };
  var Le;
  var qe = { configurable: true, get: function() {
    return this.class;
  } };
  var Me = s.vnode;
  s.vnode = function(e2) {
    var t2 = e2.type, n2 = e2.props, r2 = n2;
    if ("string" == typeof t2) {
      for (var o2 in r2 = {}, n2) {
        var c2 = n2[o2];
        "value" === o2 && "defaultValue" in n2 && null == c2 || ("defaultValue" === o2 && "value" in n2 && null == n2.value ? o2 = "value" : "download" === o2 && true === c2 ? c2 = "" : /ondoubleclick/i.test(o2) ? o2 = "ondblclick" : /^onchange(textarea|input)/i.test(o2 + t2) && !Ce(n2.type) ? o2 = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o2) ? o2 = o2.toLowerCase() : De.test(o2) ? o2 = o2.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === c2 && (c2 = void 0), r2[o2] = c2);
      }
      "select" == t2 && r2.multiple && Array.isArray(r2.value) && (r2.value = C(n2.children).forEach(function(e3) {
        e3.props.selected = -1 != r2.value.indexOf(e3.props.value);
      })), "select" == t2 && null != r2.defaultValue && (r2.value = C(n2.children).forEach(function(e3) {
        e3.props.selected = r2.multiple ? -1 != r2.defaultValue.indexOf(e3.props.value) : r2.defaultValue == e3.props.value;
      })), e2.props = r2;
    }
    t2 && n2.class != n2.className && (qe.enumerable = "className" in n2, null != n2.className && (r2.class = n2.className), Object.defineProperty(r2, "className", qe)), e2.$$typeof = ke, Me && Me(e2);
  };
  var He = s.__r;
  s.__r = function(e2) {
    He && He(e2), Le = e2.__c;
  };
  var Ue = { ReactCurrentDispatcher: { current: { readContext: function(e2) {
    return Le.__n[e2.__c].props.value;
  } } } };
  "object" == ("undefined" == typeof performance ? "undefined" : n(performance)) && "function" == typeof performance.now && performance.now.bind(performance);
  function Fe(e2) {
    return !!e2 && e2.$$typeof === ke;
  }
  var Be = { useState: ne, useReducer: re, useEffect: oe, useLayoutEffect: ce, useRef: function(e2) {
    return $ = 5, ie(function() {
      return { current: e2 };
    }, []);
  }, useImperativeHandle: function(e2, t2, n2) {
    $ = 6, ce(function() {
      "function" == typeof e2 ? e2(t2()) : e2 && (e2.current = t2());
    }, null == n2 ? n2 : n2.concat(e2));
  }, useMemo: ie, useCallback: function(e2, t2) {
    return $ = 8, ie(function() {
      return e2;
    }, t2);
  }, useContext: function(e2) {
    var t2 = z.context[e2.__c], n2 = te(K++, 9);
    return n2.__c = e2, t2 ? (null == n2.__ && (n2.__ = true, t2.sub(z)), t2.props.value) : e2.__;
  }, useDebugValue: function(e2, t2) {
    s.useDebugValue && s.useDebugValue(t2 ? t2(e2) : e2);
  }, version: "16.8.0", Children: be, render: Ae, hydrate: function(e2, t2, n2) {
    return V(e2, t2), "function" == typeof n2 && n2(), e2 ? e2.__c : null;
  }, unmountComponentAtNode: function(e2) {
    return !!e2.__k && (B(null, e2), true);
  }, createPortal: Ie, createElement: g, createContext: function(e2, t2) {
    var n2 = { __c: t2 = "__cC" + d++, __: e2, Consumer: function(e3, t3) {
      return e3.children(t3);
    }, Provider: function(e3) {
      var n3, r2;
      return this.getChildContext || (n3 = [], (r2 = {})[t2] = this, this.getChildContext = function() {
        return r2;
      }, this.shouldComponentUpdate = function(e4) {
        this.props.value !== e4.value && n3.some(P);
      }, this.sub = function(e4) {
        n3.push(e4);
        var t3 = e4.componentWillUnmount;
        e4.componentWillUnmount = function() {
          n3.splice(n3.indexOf(e4), 1), t3 && t3.call(e4);
        };
      }), e3.children;
    } };
    return n2.Provider.__ = n2.Consumer.contextType = n2;
  }, createFactory: function(e2) {
    return g.bind(null, e2);
  }, cloneElement: function(e2) {
    return Fe(e2) ? W.apply(null, arguments) : e2;
  }, createRef: function() {
    return { current: null };
  }, Fragment: S, isValidElement: Fe, findDOMNode: function(e2) {
    return e2 && (e2.base || 1 === e2.nodeType && e2) || null;
  }, Component: E, PureComponent: he, memo: function(e2, t2) {
    function n2(e3) {
      var n3 = this.props.ref, r3 = n3 == e3.ref;
      return !r3 && n3 && (n3.call ? n3(null) : n3.current = null), t2 ? !t2(this.props, e3) || !r3 : de(this.props, e3);
    }
    function r2(t3) {
      return this.shouldComponentUpdate = n2, g(e2, t3);
    }
    return r2.displayName = "Memo(" + (e2.displayName || e2.name) + ")", r2.prototype.isReactComponent = true, r2.__f = true, r2;
  }, forwardRef: function(e2) {
    function t2(t3, r2) {
      var o2 = me({}, t3);
      return delete o2.ref, e2(o2, (r2 = t3.ref || r2) && ("object" != n(r2) || "current" in r2) ? r2 : null);
    }
    return t2.$$typeof = ye, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (e2.displayName || e2.name) + ")", t2;
  }, unstable_batchedUpdates: function(e2, t2) {
    return e2(t2);
  }, StrictMode: S, Suspense: Oe, SuspenseList: Ee, lazy: function(e2) {
    var t2, n2, r2;
    function o2(o3) {
      if (t2 || (t2 = e2()).then(function(e3) {
        n2 = e3.default || e3;
      }, function(e3) {
        r2 = e3;
      }), r2)
        throw r2;
      if (!n2)
        throw t2;
      return g(n2, o3);
    }
    return o2.displayName = "Lazy", o2.__f = true, o2;
  }, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ue };
  function Ve() {
    return Be.createElement("svg", { width: "15", height: "15", className: "DocSearch-Control-Key-Icon" }, Be.createElement("path", { d: "M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953", strokeWidth: "1.2", stroke: "currentColor", fill: "none", strokeLinecap: "square" }));
  }
  function We() {
    return Be.createElement("svg", { width: "20", height: "20", className: "DocSearch-Search-Icon", viewBox: "0 0 20 20" }, Be.createElement("path", { d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  var Ke = ["translations"];
  function ze() {
    return ze = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2)
          Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
      }
      return e2;
    }, ze.apply(this, arguments);
  }
  function Je(e2, t2) {
    return function(e3) {
      if (Array.isArray(e3))
        return e3;
    }(e2) || function(e3, t3) {
      var n2 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
      if (null == n2)
        return;
      var r2, o2, c2 = [], i2 = true, a2 = false;
      try {
        for (n2 = n2.call(e3); !(i2 = (r2 = n2.next()).done) && (c2.push(r2.value), !t3 || c2.length !== t3); i2 = true)
          ;
      } catch (e4) {
        a2 = true, o2 = e4;
      } finally {
        try {
          i2 || null == n2.return || n2.return();
        } finally {
          if (a2)
            throw o2;
        }
      }
      return c2;
    }(e2, t2) || function(e3, t3) {
      if (!e3)
        return;
      if ("string" == typeof e3)
        return $e(e3, t3);
      var n2 = Object.prototype.toString.call(e3).slice(8, -1);
      "Object" === n2 && e3.constructor && (n2 = e3.constructor.name);
      if ("Map" === n2 || "Set" === n2)
        return Array.from(e3);
      if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return $e(e3, t3);
    }(e2, t2) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function $e(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
      r2[n2] = e2[n2];
    return r2;
  }
  function Qe(e2, t2) {
    if (null == e2)
      return {};
    var n2, r2, o2 = function(e3, t3) {
      if (null == e3)
        return {};
      var n3, r3, o3 = {}, c3 = Object.keys(e3);
      for (r3 = 0; r3 < c3.length; r3++)
        n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var c2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < c2.length; r2++)
        n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  var Ze = Be.forwardRef(function(e2, t2) {
    var n2 = e2.translations, r2 = void 0 === n2 ? {} : n2, o2 = Qe(e2, Ke), c2 = r2.buttonText, i2 = void 0 === c2 ? "Search" : c2, a2 = r2.buttonAriaLabel, u2 = void 0 === a2 ? "Search" : a2, l2 = Je(ne(null), 2), s2 = l2[0], f2 = l2[1];
    return oe(function() {
      "undefined" != typeof navigator && (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? f2("\u2318") : f2("Ctrl"));
    }, []), Be.createElement("button", ze({ type: "button", className: "DocSearch DocSearch-Button", "aria-label": u2 }, o2, { ref: t2 }), Be.createElement("span", { className: "DocSearch-Button-Container" }, Be.createElement(We, null), Be.createElement("span", { className: "DocSearch-Button-Placeholder" }, i2)), Be.createElement("span", { className: "DocSearch-Button-Keys" }, null !== s2 && Be.createElement(Be.Fragment, null, Be.createElement("kbd", { className: "DocSearch-Button-Key" }, "Ctrl" === s2 ? Be.createElement(Ve, null) : s2), Be.createElement("kbd", { className: "DocSearch-Button-Key" }, "K"))));
  });
  function Ye(e2, t2) {
    return function(e3) {
      if (Array.isArray(e3))
        return e3;
    }(e2) || function(e3, t3) {
      var n2 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
      if (null == n2)
        return;
      var r2, o2, c2 = [], i2 = true, a2 = false;
      try {
        for (n2 = n2.call(e3); !(i2 = (r2 = n2.next()).done) && (c2.push(r2.value), !t3 || c2.length !== t3); i2 = true)
          ;
      } catch (e4) {
        a2 = true, o2 = e4;
      } finally {
        try {
          i2 || null == n2.return || n2.return();
        } finally {
          if (a2)
            throw o2;
        }
      }
      return c2;
    }(e2, t2) || function(e3, t3) {
      if (!e3)
        return;
      if ("string" == typeof e3)
        return Ge(e3, t3);
      var n2 = Object.prototype.toString.call(e3).slice(8, -1);
      "Object" === n2 && e3.constructor && (n2 = e3.constructor.name);
      if ("Map" === n2 || "Set" === n2)
        return Array.from(e3);
      if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return Ge(e3, t3);
    }(e2, t2) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function Ge(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
      r2[n2] = e2[n2];
    return r2;
  }
  function Xe(e2) {
    return Xe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, Xe(e2);
  }
  function et(e2) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : /* @__PURE__ */ new Set();
    if (!e2 || "object" !== Xe(e2))
      return e2;
    if (t2.has(e2))
      return "[Circular]";
    var n2 = t2.add(e2);
    return Array.isArray(e2) ? e2.map(function(e3) {
      return et(e3, n2);
    }) : Object.fromEntries(Object.entries(e2).map(function(e3) {
      var t3 = Ye(e3, 2);
      return [t3[0], et(t3[1], n2)];
    }));
  }
  function tt(e2) {
    return e2.reduce(function(e3, t2) {
      return e3.concat(t2);
    }, []);
  }
  var nt = 0;
  function rt(e2) {
    return 0 === e2.collections.length ? 0 : e2.collections.reduce(function(e3, t2) {
      return e3 + t2.items.length;
    }, 0);
  }
  function ot(e2, t2) {
    if (!e2)
      throw new Error("[Autocomplete] ".concat("function" == typeof t2 ? t2() : t2));
  }
  var ct = function() {
  };
  var it = [{ segment: "autocomplete-core", version: "1.7.4" }];
  var at = { current: {} };
  function ut(e2) {
    (function(e3, t2) {
      if (!e3) {
        var n2 = t2.trim();
        at.current[n2] || (at.current[n2] = true, console.warn("[Autocomplete] ".concat(n2)));
      }
    })(!e2.debug, "The `debug` option is meant for development debugging and should not be used in production.");
  }
  function lt(e2, t2) {
    var n2 = t2;
    return { then: function(t3, r2) {
      return lt(e2.then(ft(t3, n2, e2), ft(r2, n2, e2)), n2);
    }, catch: function(t3) {
      return lt(e2.catch(ft(t3, n2, e2)), n2);
    }, finally: function(t3) {
      return t3 && n2.onCancelList.push(t3), lt(e2.finally(ft(t3 && function() {
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
  function st(e2) {
    return lt(e2, { isCanceled: false, onCancelList: [] });
  }
  function ft(e2, t2, n2) {
    return e2 ? function(n3) {
      return t2.isCanceled ? n3 : e2(n3);
    } : n2;
  }
  function pt(e2, t2, n2, r2) {
    if (!n2)
      return null;
    if (e2 < 0 && (null === t2 || null !== r2 && 0 === t2))
      return n2 + e2;
    var o2 = (null === t2 ? -1 : t2) + e2;
    return o2 <= -1 || o2 >= n2 ? null === r2 ? null : 0 : o2;
  }
  function mt(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function dt(e2, t2, n2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function ht(e2) {
    return ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, ht(e2);
  }
  function vt(e2, t2) {
    var n2 = [];
    return Promise.resolve(e2(t2)).then(function(e3) {
      return ot(Array.isArray(e3), function() {
        return "The `getSources` function must return an array of sources but returned type ".concat(JSON.stringify(ht(e3)), ":\n\n").concat(JSON.stringify(et(e3), null, 2));
      }), Promise.all(e3.filter(function(e4) {
        return Boolean(e4);
      }).map(function(e4) {
        if (ot("string" == typeof e4.sourceId, "A source must provide a `sourceId` string."), n2.includes(e4.sourceId))
          throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(e4.sourceId), " is not unique."));
        n2.push(e4.sourceId);
        var t3 = function(e5) {
          for (var t4 = 1; t4 < arguments.length; t4++) {
            var n3 = null != arguments[t4] ? arguments[t4] : {};
            t4 % 2 ? mt(Object(n3), true).forEach(function(t5) {
              dt(e5, t5, n3[t5]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e5, Object.getOwnPropertyDescriptors(n3)) : mt(Object(n3)).forEach(function(t5) {
              Object.defineProperty(e5, t5, Object.getOwnPropertyDescriptor(n3, t5));
            });
          }
          return e5;
        }({ getItemInputValue: function(e5) {
          return e5.state.query;
        }, getItemUrl: function() {
        }, onSelect: function(e5) {
          (0, e5.setIsOpen)(false);
        }, onActive: ct }, e4);
        return Promise.resolve(t3);
      }));
    });
  }
  function yt(e2) {
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
    if (!t2)
      return null;
    var n2 = t2.items[function(e3) {
      for (var t3 = e3.state, n3 = e3.collection, r3 = false, o2 = 0, c2 = 0; false === r3; ) {
        var i2 = t3.collections[o2];
        if (i2 === n3) {
          r3 = true;
          break;
        }
        c2 += i2.items.length, o2++;
      }
      return t3.activeItemId - c2;
    }({ state: e2, collection: t2 })], r2 = t2.source;
    return { item: n2, itemInputValue: r2.getItemInputValue({ item: n2, state: e2 }), itemUrl: r2.getItemUrl({ item: n2, state: e2 }), source: r2 };
  }
  var _t = /((gt|sm)-|galaxy nexus)|samsung[- ]/i;
  function bt(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function gt(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? bt(Object(n2), true).forEach(function(t3) {
        Ot(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : bt(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Ot(e2, t2, n2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function St(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Et(e2, t2, n2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function wt(e2, t2, n2) {
    var r2, o2 = t2.initialState;
    return { getState: function() {
      return o2;
    }, dispatch: function(r3, c2) {
      var i2 = function(e3) {
        for (var t3 = 1; t3 < arguments.length; t3++) {
          var n3 = null != arguments[t3] ? arguments[t3] : {};
          t3 % 2 ? St(Object(n3), true).forEach(function(t4) {
            Et(e3, t4, n3[t4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : St(Object(n3)).forEach(function(t4) {
            Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
          });
        }
        return e3;
      }({}, o2);
      o2 = e2(o2, { type: r3, props: t2, payload: c2 }), n2({ state: o2, prevState: i2 });
    }, pendingRequests: (r2 = [], { add: function(e3) {
      return r2.push(e3), e3.finally(function() {
        r2 = r2.filter(function(t3) {
          return t3 !== e3;
        });
      });
    }, cancelAll: function() {
      r2.forEach(function(e3) {
        return e3.cancel();
      });
    }, isEmpty: function() {
      return 0 === r2.length;
    } }) };
  }
  function jt(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Pt(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? jt(Object(n2), true).forEach(function(t3) {
        It(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : jt(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function It(e2, t2, n2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function kt(e2) {
    return function(e3) {
      if (Array.isArray(e3))
        return Dt(e3);
    }(e2) || function(e3) {
      if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"])
        return Array.from(e3);
    }(e2) || function(e3, t2) {
      if (!e3)
        return;
      if ("string" == typeof e3)
        return Dt(e3, t2);
      var n2 = Object.prototype.toString.call(e3).slice(8, -1);
      "Object" === n2 && e3.constructor && (n2 = e3.constructor.name);
      if ("Map" === n2 || "Set" === n2)
        return Array.from(e3);
      if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return Dt(e3, t2);
    }(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function Dt(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
      r2[n2] = e2[n2];
    return r2;
  }
  function Ct(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function At(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Ct(Object(n2), true).forEach(function(t3) {
        Nt(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Ct(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Nt(e2, t2, n2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function xt(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Tt(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? xt(Object(n2), true).forEach(function(t3) {
        Rt(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : xt(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Rt(e2, t2, n2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function Lt(e2) {
    return Lt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, Lt(e2);
  }
  function qt(e2) {
    return function(e3) {
      if (Array.isArray(e3))
        return Mt(e3);
    }(e2) || function(e3) {
      if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"])
        return Array.from(e3);
    }(e2) || function(e3, t2) {
      if (!e3)
        return;
      if ("string" == typeof e3)
        return Mt(e3, t2);
      var n2 = Object.prototype.toString.call(e3).slice(8, -1);
      "Object" === n2 && e3.constructor && (n2 = e3.constructor.name);
      if ("Map" === n2 || "Set" === n2)
        return Array.from(e3);
      if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return Mt(e3, t2);
    }(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function Mt(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
      r2[n2] = e2[n2];
    return r2;
  }
  function Ht(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Ut(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Ht(Object(n2), true).forEach(function(t3) {
        Ft(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Ht(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Ft(e2, t2, n2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function Bt(e2) {
    return Boolean(e2.execute);
  }
  function Vt(e2, t2) {
    return n2 = e2, Boolean(null == n2 ? void 0 : n2.execute) ? Ut(Ut({}, e2), {}, { requests: e2.queries.map(function(n3) {
      return { query: n3, sourceId: t2, transformResponse: e2.transformResponse };
    }) }) : { items: e2, sourceId: t2 };
    var n2;
  }
  function Wt(e2) {
    var t2 = e2.reduce(function(e3, t3) {
      if (!Bt(t3))
        return e3.push(t3), e3;
      var n2 = t3.searchClient, r2 = t3.execute, o2 = t3.requesterId, c2 = t3.requests, i2 = e3.find(function(e4) {
        return Bt(t3) && Bt(e4) && e4.searchClient === n2 && Boolean(o2) && e4.requesterId === o2;
      });
      if (i2) {
        var a2;
        (a2 = i2.items).push.apply(a2, qt(c2));
      } else {
        var u2 = { execute: r2, requesterId: o2, items: c2, searchClient: n2 };
        e3.push(u2);
      }
      return e3;
    }, []).map(function(e3) {
      if (!Bt(e3))
        return Promise.resolve(e3);
      var t3 = e3, n2 = t3.execute, r2 = t3.items;
      return n2({ searchClient: t3.searchClient, requests: r2 });
    });
    return Promise.all(t2).then(function(e3) {
      return tt(e3);
    });
  }
  function Kt(e2, t2) {
    return t2.map(function(t3) {
      var n2 = e2.filter(function(e3) {
        return e3.sourceId === t3.sourceId;
      }), r2 = n2.map(function(e3) {
        return e3.items;
      }), o2 = n2[0].transformResponse, c2 = o2 ? o2(function(e3) {
        var t4 = e3.map(function(e4) {
          var t5;
          return gt(gt({}, e4), {}, { hits: null === (t5 = e4.hits) || void 0 === t5 ? void 0 : t5.map(function(t6) {
            return gt(gt({}, t6), {}, { __autocomplete_indexName: e4.index, __autocomplete_queryID: e4.queryID });
          }) });
        });
        return { results: t4, hits: t4.map(function(e4) {
          return e4.hits;
        }).filter(Boolean), facetHits: t4.map(function(e4) {
          var t5;
          return null === (t5 = e4.facetHits) || void 0 === t5 ? void 0 : t5.map(function(e5) {
            return { label: e5.value, count: e5.count, _highlightResult: { label: { value: e5.highlighted } } };
          });
        }).filter(Boolean) };
      }(r2)) : r2;
      return ot(Array.isArray(c2), function() {
        return 'The `getItems` function from source "'.concat(t3.sourceId, '" must return an array of items but returned type ').concat(JSON.stringify(Lt(c2)), ":\n\n").concat(JSON.stringify(et(c2), null, 2), ".\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems");
      }), ot(c2.every(Boolean), 'The `getItems` function from source "'.concat(t3.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems")), { source: t3, items: c2 };
    });
  }
  var zt = ["event", "nextState", "props", "query", "refresh", "store"];
  function Jt(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function $t(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Jt(Object(n2), true).forEach(function(t3) {
        Qt(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Jt(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Qt(e2, t2, n2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function Zt(e2, t2) {
    if (null == e2)
      return {};
    var n2, r2, o2 = function(e3, t3) {
      if (null == e3)
        return {};
      var n3, r3, o3 = {}, c3 = Object.keys(e3);
      for (r3 = 0; r3 < c3.length; r3++)
        n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var c2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < c2.length; r2++)
        n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  var Yt;
  var Gt;
  var Xt;
  var en = null;
  var tn = (Yt = -1, Gt = -1, Xt = void 0, function(e2) {
    var t2 = ++Yt;
    return Promise.resolve(e2).then(function(e3) {
      return Xt && t2 < Gt ? Xt : (Gt = t2, Xt = e3, e3);
    });
  });
  function nn(e2) {
    var t2 = e2.event, n2 = e2.nextState, r2 = void 0 === n2 ? {} : n2, o2 = e2.props, c2 = e2.query, i2 = e2.refresh, a2 = e2.store, u2 = Zt(e2, zt);
    en && o2.environment.clearTimeout(en);
    var l2 = u2.setCollections, s2 = u2.setIsOpen, f2 = u2.setQuery, p2 = u2.setActiveItemId, m2 = u2.setStatus;
    if (f2(c2), p2(o2.defaultActiveItemId), !c2 && false === o2.openOnFocus) {
      var d2, h2 = a2.getState().collections.map(function(e3) {
        return $t($t({}, e3), {}, { items: [] });
      });
      m2("idle"), l2(h2), s2(null !== (d2 = r2.isOpen) && void 0 !== d2 ? d2 : o2.shouldPanelOpen({ state: a2.getState() }));
      var v2 = st(tn(h2).then(function() {
        return Promise.resolve();
      }));
      return a2.pendingRequests.add(v2);
    }
    m2("loading"), en = o2.environment.setTimeout(function() {
      m2("stalled");
    }, o2.stallThreshold);
    var y2 = st(tn(o2.getSources($t({ query: c2, refresh: i2, state: a2.getState() }, u2)).then(function(e3) {
      return Promise.all(e3.map(function(e4) {
        return Promise.resolve(e4.getItems($t({ query: c2, refresh: i2, state: a2.getState() }, u2))).then(function(t3) {
          return Vt(t3, e4.sourceId);
        });
      })).then(Wt).then(function(t3) {
        return Kt(t3, e3);
      }).then(function(e4) {
        return function(e5) {
          var t3 = e5.collections, n3 = e5.props, r3 = e5.state, o3 = t3.reduce(function(e6, t4) {
            return Tt(Tt({}, e6), {}, Rt({}, t4.source.sourceId, Tt(Tt({}, t4.source), {}, { getItems: function() {
              return tt(t4.items);
            } })));
          }, {});
          return tt(n3.reshape({ sources: Object.values(o3), sourcesBySourceId: o3, state: r3 })).filter(Boolean).map(function(e6) {
            return { source: e6, items: e6.getItems() };
          });
        }({ collections: e4, props: o2, state: a2.getState() });
      });
    }))).then(function(e3) {
      var n3;
      m2("idle"), l2(e3);
      var f3 = o2.shouldPanelOpen({ state: a2.getState() });
      s2(null !== (n3 = r2.isOpen) && void 0 !== n3 ? n3 : o2.openOnFocus && !c2 && f3 || f3);
      var p3 = yt(a2.getState());
      if (null !== a2.getState().activeItemId && p3) {
        var d3 = p3.item, h3 = p3.itemInputValue, v3 = p3.itemUrl, y3 = p3.source;
        y3.onActive($t({ event: t2, item: d3, itemInputValue: h3, itemUrl: v3, refresh: i2, source: y3, state: a2.getState() }, u2));
      }
    }).finally(function() {
      m2("idle"), en && o2.environment.clearTimeout(en);
    });
    return a2.pendingRequests.add(y2);
  }
  var rn = ["event", "props", "refresh", "store"];
  function on(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function cn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? on(Object(n2), true).forEach(function(t3) {
        an(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : on(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function an(e2, t2, n2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function un(e2, t2) {
    if (null == e2)
      return {};
    var n2, r2, o2 = function(e3, t3) {
      if (null == e3)
        return {};
      var n3, r3, o3 = {}, c3 = Object.keys(e3);
      for (r3 = 0; r3 < c3.length; r3++)
        n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var c2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < c2.length; r2++)
        n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  var ln = ["props", "refresh", "store"];
  var sn = ["inputElement", "formElement", "panelElement"];
  var fn = ["inputElement"];
  var pn = ["inputElement", "maxLength"];
  var mn = ["item", "source"];
  function dn(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function hn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? dn(Object(n2), true).forEach(function(t3) {
        vn(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : dn(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function vn(e2, t2, n2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function yn(e2, t2) {
    if (null == e2)
      return {};
    var n2, r2, o2 = function(e3, t3) {
      if (null == e3)
        return {};
      var n3, r3, o3 = {}, c3 = Object.keys(e3);
      for (r3 = 0; r3 < c3.length; r3++)
        n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var c2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < c2.length; r2++)
        n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  function _n(e2) {
    var t2 = e2.props, n2 = e2.refresh, r2 = e2.store, o2 = yn(e2, ln);
    return { getEnvironmentProps: function(e3) {
      var n3 = e3.inputElement, o3 = e3.formElement, c2 = e3.panelElement;
      function i2(e4) {
        !r2.getState().isOpen && r2.pendingRequests.isEmpty() || e4.target === n3 || false === [o3, c2].some(function(t3) {
          return n4 = t3, r3 = e4.target, n4 === r3 || n4.contains(r3);
          var n4, r3;
        }) && (r2.dispatch("blur", null), t2.debug || r2.pendingRequests.cancelAll());
      }
      return hn({ onTouchStart: i2, onMouseDown: i2, onTouchMove: function(e4) {
        false !== r2.getState().isOpen && n3 === t2.environment.document.activeElement && e4.target !== n3 && n3.blur();
      } }, yn(e3, sn));
    }, getRootProps: function(e3) {
      return hn({ role: "combobox", "aria-expanded": r2.getState().isOpen, "aria-haspopup": "listbox", "aria-owns": r2.getState().isOpen ? "".concat(t2.id, "-list") : void 0, "aria-labelledby": "".concat(t2.id, "-label") }, e3);
    }, getFormProps: function(e3) {
      e3.inputElement;
      return hn({ action: "", noValidate: true, role: "search", onSubmit: function(c2) {
        var i2;
        c2.preventDefault(), t2.onSubmit(hn({ event: c2, refresh: n2, state: r2.getState() }, o2)), r2.dispatch("submit", null), null === (i2 = e3.inputElement) || void 0 === i2 || i2.blur();
      }, onReset: function(c2) {
        var i2;
        c2.preventDefault(), t2.onReset(hn({ event: c2, refresh: n2, state: r2.getState() }, o2)), r2.dispatch("reset", null), null === (i2 = e3.inputElement) || void 0 === i2 || i2.focus();
      } }, yn(e3, fn));
    }, getLabelProps: function(e3) {
      return hn({ htmlFor: "".concat(t2.id, "-input"), id: "".concat(t2.id, "-label") }, e3);
    }, getInputProps: function(e3) {
      var c2;
      function i2(e4) {
        (t2.openOnFocus || Boolean(r2.getState().query)) && nn(hn({ event: e4, props: t2, query: r2.getState().completion || r2.getState().query, refresh: n2, store: r2 }, o2)), r2.dispatch("focus", null);
      }
      var a2 = e3 || {}, u2 = (a2.inputElement, a2.maxLength), l2 = void 0 === u2 ? 512 : u2, s2 = yn(a2, pn), f2 = yt(r2.getState()), p2 = function(e4) {
        return Boolean(e4 && e4.match(_t));
      }((null === (c2 = t2.environment.navigator) || void 0 === c2 ? void 0 : c2.userAgent) || ""), m2 = null != f2 && f2.itemUrl && !p2 ? "go" : "search";
      return hn({ "aria-autocomplete": "both", "aria-activedescendant": r2.getState().isOpen && null !== r2.getState().activeItemId ? "".concat(t2.id, "-item-").concat(r2.getState().activeItemId) : void 0, "aria-controls": r2.getState().isOpen ? "".concat(t2.id, "-list") : void 0, "aria-labelledby": "".concat(t2.id, "-label"), value: r2.getState().completion || r2.getState().query, id: "".concat(t2.id, "-input"), autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", enterKeyHint: m2, spellCheck: "false", autoFocus: t2.autoFocus, placeholder: t2.placeholder, maxLength: l2, type: "search", onChange: function(e4) {
        nn(hn({ event: e4, props: t2, query: e4.currentTarget.value.slice(0, l2), refresh: n2, store: r2 }, o2));
      }, onKeyDown: function(e4) {
        !function(e5) {
          var t3 = e5.event, n3 = e5.props, r3 = e5.refresh, o3 = e5.store, c3 = un(e5, rn);
          if ("ArrowUp" === t3.key || "ArrowDown" === t3.key) {
            var i3 = function() {
              var e6 = n3.environment.document.getElementById("".concat(n3.id, "-item-").concat(o3.getState().activeItemId));
              e6 && (e6.scrollIntoViewIfNeeded ? e6.scrollIntoViewIfNeeded(false) : e6.scrollIntoView(false));
            }, a3 = function() {
              var e6 = yt(o3.getState());
              if (null !== o3.getState().activeItemId && e6) {
                var n4 = e6.item, i4 = e6.itemInputValue, a4 = e6.itemUrl, u4 = e6.source;
                u4.onActive(cn({ event: t3, item: n4, itemInputValue: i4, itemUrl: a4, refresh: r3, source: u4, state: o3.getState() }, c3));
              }
            };
            t3.preventDefault(), false === o3.getState().isOpen && (n3.openOnFocus || Boolean(o3.getState().query)) ? nn(cn({ event: t3, props: n3, query: o3.getState().query, refresh: r3, store: o3 }, c3)).then(function() {
              o3.dispatch(t3.key, { nextActiveItemId: n3.defaultActiveItemId }), a3(), setTimeout(i3, 0);
            }) : (o3.dispatch(t3.key, {}), a3(), i3());
          } else if ("Escape" === t3.key)
            t3.preventDefault(), o3.dispatch(t3.key, null), o3.pendingRequests.cancelAll();
          else if ("Tab" === t3.key)
            o3.dispatch("blur", null), o3.pendingRequests.cancelAll();
          else if ("Enter" === t3.key) {
            if (null === o3.getState().activeItemId || o3.getState().collections.every(function(e6) {
              return 0 === e6.items.length;
            }))
              return void (n3.debug || o3.pendingRequests.cancelAll());
            t3.preventDefault();
            var u3 = yt(o3.getState()), l3 = u3.item, s3 = u3.itemInputValue, f3 = u3.itemUrl, p3 = u3.source;
            if (t3.metaKey || t3.ctrlKey)
              void 0 !== f3 && (p3.onSelect(cn({ event: t3, item: l3, itemInputValue: s3, itemUrl: f3, refresh: r3, source: p3, state: o3.getState() }, c3)), n3.navigator.navigateNewTab({ itemUrl: f3, item: l3, state: o3.getState() }));
            else if (t3.shiftKey)
              void 0 !== f3 && (p3.onSelect(cn({ event: t3, item: l3, itemInputValue: s3, itemUrl: f3, refresh: r3, source: p3, state: o3.getState() }, c3)), n3.navigator.navigateNewWindow({ itemUrl: f3, item: l3, state: o3.getState() }));
            else if (t3.altKey)
              ;
            else {
              if (void 0 !== f3)
                return p3.onSelect(cn({ event: t3, item: l3, itemInputValue: s3, itemUrl: f3, refresh: r3, source: p3, state: o3.getState() }, c3)), void n3.navigator.navigate({ itemUrl: f3, item: l3, state: o3.getState() });
              nn(cn({ event: t3, nextState: { isOpen: false }, props: n3, query: s3, refresh: r3, store: o3 }, c3)).then(function() {
                p3.onSelect(cn({ event: t3, item: l3, itemInputValue: s3, itemUrl: f3, refresh: r3, source: p3, state: o3.getState() }, c3));
              });
            }
          }
        }(hn({ event: e4, props: t2, refresh: n2, store: r2 }, o2));
      }, onFocus: i2, onBlur: ct, onClick: function(n3) {
        e3.inputElement !== t2.environment.document.activeElement || r2.getState().isOpen || i2(n3);
      } }, s2);
    }, getPanelProps: function(e3) {
      return hn({ onMouseDown: function(e4) {
        e4.preventDefault();
      }, onMouseLeave: function() {
        r2.dispatch("mouseleave", null);
      } }, e3);
    }, getListProps: function(e3) {
      return hn({ role: "listbox", "aria-labelledby": "".concat(t2.id, "-label"), id: "".concat(t2.id, "-list") }, e3);
    }, getItemProps: function(e3) {
      var c2 = e3.item, i2 = e3.source, a2 = yn(e3, mn);
      return hn({ id: "".concat(t2.id, "-item-").concat(c2.__autocomplete_id), role: "option", "aria-selected": r2.getState().activeItemId === c2.__autocomplete_id, onMouseMove: function(e4) {
        if (c2.__autocomplete_id !== r2.getState().activeItemId) {
          r2.dispatch("mousemove", c2.__autocomplete_id);
          var t3 = yt(r2.getState());
          if (null !== r2.getState().activeItemId && t3) {
            var i3 = t3.item, a3 = t3.itemInputValue, u2 = t3.itemUrl, l2 = t3.source;
            l2.onActive(hn({ event: e4, item: i3, itemInputValue: a3, itemUrl: u2, refresh: n2, source: l2, state: r2.getState() }, o2));
          }
        }
      }, onMouseDown: function(e4) {
        e4.preventDefault();
      }, onClick: function(e4) {
        var a3 = i2.getItemInputValue({ item: c2, state: r2.getState() }), u2 = i2.getItemUrl({ item: c2, state: r2.getState() });
        (u2 ? Promise.resolve() : nn(hn({ event: e4, nextState: { isOpen: false }, props: t2, query: a3, refresh: n2, store: r2 }, o2))).then(function() {
          i2.onSelect(hn({ event: e4, item: c2, itemInputValue: a3, itemUrl: u2, refresh: n2, source: i2, state: r2.getState() }, o2));
        });
      } }, a2);
    } };
  }
  function bn(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function gn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? bn(Object(n2), true).forEach(function(t3) {
        On(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : bn(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function On(e2, t2, n2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function Sn(e2) {
    var t2, n2, r2, o2, c2 = e2.plugins, i2 = e2.options, a2 = null === (t2 = ((null === (n2 = i2.__autocomplete_metadata) || void 0 === n2 ? void 0 : n2.userAgents) || [])[0]) || void 0 === t2 ? void 0 : t2.segment, u2 = a2 ? On({}, a2, Object.keys((null === (r2 = i2.__autocomplete_metadata) || void 0 === r2 ? void 0 : r2.options) || {})) : {};
    return { plugins: c2.map(function(e3) {
      return { name: e3.name, options: Object.keys(e3.__autocomplete_pluginOptions || []) };
    }), options: gn({ "autocomplete-core": Object.keys(i2) }, u2), ua: it.concat((null === (o2 = i2.__autocomplete_metadata) || void 0 === o2 ? void 0 : o2.userAgents) || []) };
  }
  function En(e2) {
    var t2, n2 = e2.state;
    return false === n2.isOpen || null === n2.activeItemId ? null : (null === (t2 = yt(n2)) || void 0 === t2 ? void 0 : t2.itemInputValue) || null;
  }
  function wn(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function jn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? wn(Object(n2), true).forEach(function(t3) {
        Pn(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : wn(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Pn(e2, t2, n2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  var In = function(e2, t2) {
    switch (t2.type) {
      case "setActiveItemId":
      case "mousemove":
        return jn(jn({}, e2), {}, { activeItemId: t2.payload });
      case "setQuery":
        return jn(jn({}, e2), {}, { query: t2.payload, completion: null });
      case "setCollections":
        return jn(jn({}, e2), {}, { collections: t2.payload });
      case "setIsOpen":
        return jn(jn({}, e2), {}, { isOpen: t2.payload });
      case "setStatus":
        return jn(jn({}, e2), {}, { status: t2.payload });
      case "setContext":
        return jn(jn({}, e2), {}, { context: jn(jn({}, e2.context), t2.payload) });
      case "ArrowDown":
        var n2 = jn(jn({}, e2), {}, { activeItemId: t2.payload.hasOwnProperty("nextActiveItemId") ? t2.payload.nextActiveItemId : pt(1, e2.activeItemId, rt(e2), t2.props.defaultActiveItemId) });
        return jn(jn({}, n2), {}, { completion: En({ state: n2 }) });
      case "ArrowUp":
        var r2 = jn(jn({}, e2), {}, { activeItemId: pt(-1, e2.activeItemId, rt(e2), t2.props.defaultActiveItemId) });
        return jn(jn({}, r2), {}, { completion: En({ state: r2 }) });
      case "Escape":
        return e2.isOpen ? jn(jn({}, e2), {}, { activeItemId: null, isOpen: false, completion: null }) : jn(jn({}, e2), {}, { activeItemId: null, query: "", status: "idle", collections: [] });
      case "submit":
        return jn(jn({}, e2), {}, { activeItemId: null, isOpen: false, status: "idle" });
      case "reset":
        return jn(jn({}, e2), {}, { activeItemId: true === t2.props.openOnFocus ? t2.props.defaultActiveItemId : null, status: "idle", query: "" });
      case "focus":
        return jn(jn({}, e2), {}, { activeItemId: t2.props.defaultActiveItemId, isOpen: (t2.props.openOnFocus || Boolean(e2.query)) && t2.props.shouldPanelOpen({ state: e2 }) });
      case "blur":
        return t2.props.debug ? e2 : jn(jn({}, e2), {}, { isOpen: false, activeItemId: null });
      case "mouseleave":
        return jn(jn({}, e2), {}, { activeItemId: t2.props.defaultActiveItemId });
      default:
        return ot(false, "The reducer action ".concat(JSON.stringify(t2.type), " is not supported.")), e2;
    }
  };
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
  function Dn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? kn(Object(n2), true).forEach(function(t3) {
        Cn(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : kn(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Cn(e2, t2, n2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function An(e2) {
    ut(e2);
    var t2 = [], n2 = function(e3, t3) {
      var n3, r3 = "undefined" != typeof window ? window : {}, o3 = e3.plugins || [];
      return At(At({ debug: false, openOnFocus: false, placeholder: "", autoFocus: false, defaultActiveItemId: null, stallThreshold: 300, environment: r3, shouldPanelOpen: function(e4) {
        return rt(e4.state) > 0;
      }, reshape: function(e4) {
        return e4.sources;
      } }, e3), {}, { id: null !== (n3 = e3.id) && void 0 !== n3 ? n3 : "autocomplete-".concat(nt++), plugins: o3, initialState: At({ activeItemId: null, query: "", completion: null, collections: [], isOpen: false, status: "idle", context: {} }, e3.initialState), onStateChange: function(t4) {
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
        return Promise.all([].concat(kt(o3.map(function(e4) {
          return e4.getSources;
        })), [e3.getSources]).filter(Boolean).map(function(e4) {
          return vt(e4, n4);
        })).then(function(e4) {
          return tt(e4);
        }).then(function(e4) {
          return e4.map(function(e5) {
            return At(At({}, e5), {}, { onSelect: function(n5) {
              e5.onSelect(n5), t3.forEach(function(e6) {
                var t4;
                return null === (t4 = e6.onSelect) || void 0 === t4 ? void 0 : t4.call(e6, n5);
              });
            }, onActive: function(n5) {
              e5.onActive(n5), t3.forEach(function(e6) {
                var t4;
                return null === (t4 = e6.onActive) || void 0 === t4 ? void 0 : t4.call(e6, n5);
              });
            } });
          });
        });
      }, navigator: At({ navigate: function(e4) {
        var t4 = e4.itemUrl;
        r3.location.assign(t4);
      }, navigateNewTab: function(e4) {
        var t4 = e4.itemUrl, n4 = r3.open(t4, "_blank", "noopener");
        null == n4 || n4.focus();
      }, navigateNewWindow: function(e4) {
        var t4 = e4.itemUrl;
        r3.open(t4, "_blank", "noopener");
      } }, e3.navigator) });
    }(e2, t2), r2 = wt(In, n2, function(e3) {
      var t3 = e3.prevState, r3 = e3.state;
      n2.onStateChange(Dn({ prevState: t3, state: r3, refresh: i2 }, o2));
    }), o2 = function(e3) {
      var t3 = e3.store;
      return { setActiveItemId: function(e4) {
        t3.dispatch("setActiveItemId", e4);
      }, setQuery: function(e4) {
        t3.dispatch("setQuery", e4);
      }, setCollections: function(e4) {
        var n3 = 0, r3 = e4.map(function(e5) {
          return Pt(Pt({}, e5), {}, { items: tt(e5.items).map(function(e6) {
            return Pt(Pt({}, e6), {}, { __autocomplete_id: n3++ });
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
    }({ store: r2 }), c2 = _n(Dn({ props: n2, refresh: i2, store: r2 }, o2));
    function i2() {
      return nn(Dn({ event: new Event("input"), nextState: { isOpen: r2.getState().isOpen }, props: n2, query: r2.getState().query, refresh: i2, store: r2 }, o2));
    }
    return n2.plugins.forEach(function(e3) {
      var n3;
      return null === (n3 = e3.subscribe) || void 0 === n3 ? void 0 : n3.call(e3, Dn(Dn({}, o2), {}, { refresh: i2, onSelect: function(e4) {
        t2.push({ onSelect: e4 });
      }, onActive: function(e4) {
        t2.push({ onActive: e4 });
      } }));
    }), function(e3) {
      var t3, n3, r3 = e3.metadata, o3 = e3.environment;
      if (null === (t3 = o3.navigator) || void 0 === t3 || null === (n3 = t3.userAgent) || void 0 === n3 ? void 0 : n3.includes("Algolia Crawler")) {
        var c3 = o3.document.createElement("meta"), i3 = o3.document.querySelector("head");
        c3.name = "algolia:metadata", setTimeout(function() {
          c3.content = JSON.stringify(r3), i3.appendChild(c3);
        }, 0);
      }
    }({ metadata: Sn({ plugins: n2.plugins, options: e2 }), environment: n2.environment }), Dn(Dn({ refresh: i2 }, c2), o2);
  }
  function Nn(e2) {
    var t2 = e2.translations, n2 = (void 0 === t2 ? {} : t2).searchByText, r2 = void 0 === n2 ? "Search by" : n2;
    return Be.createElement("a", { href: "https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname, "&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"), target: "_blank", rel: "noopener noreferrer" }, Be.createElement("span", { className: "DocSearch-Label" }, r2), Be.createElement("svg", { width: "77", height: "19", "aria-label": "Algolia", role: "img", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2196.2 500" }, Be.createElement("defs", null, Be.createElement("style", null, ".cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}")), Be.createElement("path", { className: "cls-2", d: "M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), Be.createElement("rect", { className: "cls-1", x: "1845.88", y: "104.73", width: "62.58", height: "277.9", rx: "5.9", ry: "5.9" }), Be.createElement("path", { className: "cls-2", d: "M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z" }), Be.createElement("path", { className: "cls-2", d: "M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), Be.createElement("path", { className: "cls-2", d: "M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z" }), Be.createElement("path", { className: "cls-2", d: "M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), Be.createElement("path", { className: "cls-2", d: "M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), Be.createElement("path", { className: "cls-2", d: "M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z" }), Be.createElement("path", { className: "cls-1", d: "M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z" })));
  }
  function xn(e2) {
    return Be.createElement("svg", { width: "15", height: "15", "aria-label": e2.ariaLabel, role: "img" }, Be.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.2" }, e2.children));
  }
  function Tn(e2) {
    var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = n2.selectText, o2 = void 0 === r2 ? "to select" : r2, c2 = n2.selectKeyAriaLabel, i2 = void 0 === c2 ? "Enter key" : c2, a2 = n2.navigateText, u2 = void 0 === a2 ? "to navigate" : a2, l2 = n2.navigateUpKeyAriaLabel, s2 = void 0 === l2 ? "Arrow up" : l2, f2 = n2.navigateDownKeyAriaLabel, p2 = void 0 === f2 ? "Arrow down" : f2, m2 = n2.closeText, d2 = void 0 === m2 ? "to close" : m2, h2 = n2.closeKeyAriaLabel, v2 = void 0 === h2 ? "Escape key" : h2, y2 = n2.searchByText, _2 = void 0 === y2 ? "Search by" : y2;
    return Be.createElement(Be.Fragment, null, Be.createElement("div", { className: "DocSearch-Logo" }, Be.createElement(Nn, { translations: { searchByText: _2 } })), Be.createElement("ul", { className: "DocSearch-Commands" }, Be.createElement("li", null, Be.createElement("kbd", { className: "DocSearch-Commands-Key" }, Be.createElement(xn, { ariaLabel: i2 }, Be.createElement("path", { d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3" }))), Be.createElement("span", { className: "DocSearch-Label" }, o2)), Be.createElement("li", null, Be.createElement("kbd", { className: "DocSearch-Commands-Key" }, Be.createElement(xn, { ariaLabel: p2 }, Be.createElement("path", { d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3" }))), Be.createElement("kbd", { className: "DocSearch-Commands-Key" }, Be.createElement(xn, { ariaLabel: s2 }, Be.createElement("path", { d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3" }))), Be.createElement("span", { className: "DocSearch-Label" }, u2)), Be.createElement("li", null, Be.createElement("kbd", { className: "DocSearch-Commands-Key" }, Be.createElement(xn, { ariaLabel: v2 }, Be.createElement("path", { d: "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956" }))), Be.createElement("span", { className: "DocSearch-Label" }, d2))));
  }
  function Rn(e2) {
    var t2 = e2.hit, n2 = e2.children;
    return Be.createElement("a", { href: t2.url }, n2);
  }
  function Ln() {
    return Be.createElement("svg", { viewBox: "0 0 38 38", stroke: "currentColor", strokeOpacity: ".5" }, Be.createElement("g", { fill: "none", fillRule: "evenodd" }, Be.createElement("g", { transform: "translate(1 1)", strokeWidth: "2" }, Be.createElement("circle", { strokeOpacity: ".3", cx: "18", cy: "18", r: "18" }), Be.createElement("path", { d: "M36 18c0-9.94-8.06-18-18-18" }, Be.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" })))));
  }
  function qn() {
    return Be.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Be.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, Be.createElement("path", { d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0" }), Be.createElement("path", { d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13" })));
  }
  function Mn() {
    return Be.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Be.createElement("path", { d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  function Hn() {
    return Be.createElement("svg", { className: "DocSearch-Hit-Select-Icon", width: "20", height: "20", viewBox: "0 0 20 20" }, Be.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, Be.createElement("path", { d: "M18 3v4c0 2-2 4-4 4H2" }), Be.createElement("path", { d: "M8 17l-6-6 6-6" })));
  }
  var Un = function() {
    return Be.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Be.createElement("path", { d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
  };
  function Fn(e2) {
    switch (e2.type) {
      case "lvl1":
        return Be.createElement(Un, null);
      case "content":
        return Be.createElement(Vn, null);
      default:
        return Be.createElement(Bn, null);
    }
  }
  function Bn() {
    return Be.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Be.createElement("path", { d: "M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  function Vn() {
    return Be.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Be.createElement("path", { d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
  }
  function Wn() {
    return Be.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Be.createElement("path", { d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
  }
  function Kn() {
    return Be.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, Be.createElement("path", { d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0" }));
  }
  function zn() {
    return Be.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, Be.createElement("path", { d: "M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2" }));
  }
  function Jn(e2) {
    var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = n2.titleText, o2 = void 0 === r2 ? "Unable to fetch results" : r2, c2 = n2.helpText, i2 = void 0 === c2 ? "You might want to check your network connection." : c2;
    return Be.createElement("div", { className: "DocSearch-ErrorScreen" }, Be.createElement("div", { className: "DocSearch-Screen-Icon" }, Be.createElement(Kn, null)), Be.createElement("p", { className: "DocSearch-Title" }, o2), Be.createElement("p", { className: "DocSearch-Help" }, i2));
  }
  var $n = ["translations"];
  function Qn(e2) {
    return function(e3) {
      if (Array.isArray(e3))
        return Zn(e3);
    }(e2) || function(e3) {
      if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"])
        return Array.from(e3);
    }(e2) || function(e3, t2) {
      if (!e3)
        return;
      if ("string" == typeof e3)
        return Zn(e3, t2);
      var n2 = Object.prototype.toString.call(e3).slice(8, -1);
      "Object" === n2 && e3.constructor && (n2 = e3.constructor.name);
      if ("Map" === n2 || "Set" === n2)
        return Array.from(e3);
      if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return Zn(e3, t2);
    }(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function Zn(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
      r2[n2] = e2[n2];
    return r2;
  }
  function Yn(e2, t2) {
    if (null == e2)
      return {};
    var n2, r2, o2 = function(e3, t3) {
      if (null == e3)
        return {};
      var n3, r3, o3 = {}, c3 = Object.keys(e3);
      for (r3 = 0; r3 < c3.length; r3++)
        n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var c2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < c2.length; r2++)
        n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  function Gn(e2) {
    var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = Yn(e2, $n), o2 = n2.noResultsText, c2 = void 0 === o2 ? "No results for" : o2, i2 = n2.suggestedQueryText, a2 = void 0 === i2 ? "Try searching for" : i2, u2 = n2.reportMissingResultsText, l2 = void 0 === u2 ? "Believe this query should return results?" : u2, s2 = n2.reportMissingResultsLinkText, f2 = void 0 === s2 ? "Let us know." : s2, p2 = r2.state.context.searchSuggestions;
    return Be.createElement("div", { className: "DocSearch-NoResults" }, Be.createElement("div", { className: "DocSearch-Screen-Icon" }, Be.createElement(zn, null)), Be.createElement("p", { className: "DocSearch-Title" }, c2, ' "', Be.createElement("strong", null, r2.state.query), '"'), p2 && p2.length > 0 && Be.createElement("div", { className: "DocSearch-NoResults-Prefill-List" }, Be.createElement("p", { className: "DocSearch-Help" }, a2, ":"), Be.createElement("ul", null, p2.slice(0, 3).reduce(function(e3, t3) {
      return [].concat(Qn(e3), [Be.createElement("li", { key: t3 }, Be.createElement("button", { className: "DocSearch-Prefill", key: t3, type: "button", onClick: function() {
        r2.setQuery(t3.toLowerCase() + " "), r2.refresh(), r2.inputRef.current.focus();
      } }, t3))]);
    }, []))), r2.getMissingResultsUrl && Be.createElement("p", { className: "DocSearch-Help" }, "".concat(l2, " "), Be.createElement("a", { href: r2.getMissingResultsUrl({ query: r2.state.query }), target: "_blank", rel: "noopener noreferrer" }, f2)));
  }
  var Xn = ["hit", "attribute", "tagName"];
  function er(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function tr(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? er(Object(n2), true).forEach(function(t3) {
        nr(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : er(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function nr(e2, t2, n2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function rr(e2, t2) {
    if (null == e2)
      return {};
    var n2, r2, o2 = function(e3, t3) {
      if (null == e3)
        return {};
      var n3, r3, o3 = {}, c3 = Object.keys(e3);
      for (r3 = 0; r3 < c3.length; r3++)
        n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var c2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < c2.length; r2++)
        n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  function or(e2, t2) {
    return t2.split(".").reduce(function(e3, t3) {
      return null != e3 && e3[t3] ? e3[t3] : null;
    }, e2);
  }
  function cr(e2) {
    var t2 = e2.hit, n2 = e2.attribute, r2 = e2.tagName;
    return g(void 0 === r2 ? "span" : r2, tr(tr({}, rr(e2, Xn)), {}, { dangerouslySetInnerHTML: { __html: or(t2, "_snippetResult.".concat(n2, ".value")) || or(t2, n2) } }));
  }
  function ir(e2, t2) {
    return function(e3) {
      if (Array.isArray(e3))
        return e3;
    }(e2) || function(e3, t3) {
      var n2 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
      if (null == n2)
        return;
      var r2, o2, c2 = [], i2 = true, a2 = false;
      try {
        for (n2 = n2.call(e3); !(i2 = (r2 = n2.next()).done) && (c2.push(r2.value), !t3 || c2.length !== t3); i2 = true)
          ;
      } catch (e4) {
        a2 = true, o2 = e4;
      } finally {
        try {
          i2 || null == n2.return || n2.return();
        } finally {
          if (a2)
            throw o2;
        }
      }
      return c2;
    }(e2, t2) || function(e3, t3) {
      if (!e3)
        return;
      if ("string" == typeof e3)
        return ar(e3, t3);
      var n2 = Object.prototype.toString.call(e3).slice(8, -1);
      "Object" === n2 && e3.constructor && (n2 = e3.constructor.name);
      if ("Map" === n2 || "Set" === n2)
        return Array.from(e3);
      if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return ar(e3, t3);
    }(e2, t2) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function ar(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
      r2[n2] = e2[n2];
    return r2;
  }
  function ur() {
    return ur = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2)
          Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
      }
      return e2;
    }, ur.apply(this, arguments);
  }
  function lr(e2) {
    return e2.collection && 0 !== e2.collection.items.length ? Be.createElement("section", { className: "DocSearch-Hits" }, Be.createElement("div", { className: "DocSearch-Hit-source" }, e2.title), Be.createElement("ul", e2.getListProps(), e2.collection.items.map(function(t2, n2) {
      return Be.createElement(sr, ur({ key: [e2.title, t2.objectID].join(":"), item: t2, index: n2 }, e2));
    }))) : null;
  }
  function sr(e2) {
    var t2 = e2.item, n2 = e2.index, r2 = e2.renderIcon, o2 = e2.renderAction, c2 = e2.getItemProps, i2 = e2.onItemClick, a2 = e2.collection, u2 = e2.hitComponent, l2 = ir(Be.useState(false), 2), s2 = l2[0], f2 = l2[1], p2 = ir(Be.useState(false), 2), m2 = p2[0], d2 = p2[1], h2 = Be.useRef(null), v2 = u2;
    return Be.createElement("li", ur({ className: ["DocSearch-Hit", t2.__docsearch_parent && "DocSearch-Hit--Child", s2 && "DocSearch-Hit--deleting", m2 && "DocSearch-Hit--favoriting"].filter(Boolean).join(" "), onTransitionEnd: function() {
      h2.current && h2.current();
    } }, c2({ item: t2, source: a2.source, onClick: function() {
      i2(t2);
    } })), Be.createElement(v2, { hit: t2 }, Be.createElement("div", { className: "DocSearch-Hit-Container" }, r2({ item: t2, index: n2 }), t2.hierarchy[t2.type] && "lvl1" === t2.type && Be.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Be.createElement(cr, { className: "DocSearch-Hit-title", hit: t2, attribute: "hierarchy.lvl1" }), t2.content && Be.createElement(cr, { className: "DocSearch-Hit-path", hit: t2, attribute: "content" })), t2.hierarchy[t2.type] && ("lvl2" === t2.type || "lvl3" === t2.type || "lvl4" === t2.type || "lvl5" === t2.type || "lvl6" === t2.type) && Be.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Be.createElement(cr, { className: "DocSearch-Hit-title", hit: t2, attribute: "hierarchy.".concat(t2.type) }), Be.createElement(cr, { className: "DocSearch-Hit-path", hit: t2, attribute: "hierarchy.lvl1" })), "content" === t2.type && Be.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Be.createElement(cr, { className: "DocSearch-Hit-title", hit: t2, attribute: "content" }), Be.createElement(cr, { className: "DocSearch-Hit-path", hit: t2, attribute: "hierarchy.lvl1" })), o2({ item: t2, runDeleteTransition: function(e3) {
      f2(true), h2.current = e3;
    }, runFavoriteTransition: function(e3) {
      d2(true), h2.current = e3;
    } }))));
  }
  function fr(e2, t2) {
    return e2.reduce(function(e3, n2) {
      var r2 = t2(n2);
      return e3.hasOwnProperty(r2) || (e3[r2] = []), e3[r2].length < 5 && e3[r2].push(n2), e3;
    }, {});
  }
  function pr(e2) {
    return e2;
  }
  function mr() {
  }
  var dr = /(<mark>|<\/mark>)/g;
  var hr = RegExp(dr.source);
  function vr(e2) {
    var t2, n2, r2, o2, c2, i2 = e2;
    if (!i2.__docsearch_parent && !e2._highlightResult)
      return e2.hierarchy.lvl0;
    var a2 = ((i2.__docsearch_parent ? null === (t2 = i2.__docsearch_parent) || void 0 === t2 || null === (n2 = t2._highlightResult) || void 0 === n2 || null === (r2 = n2.hierarchy) || void 0 === r2 ? void 0 : r2.lvl0 : null === (o2 = e2._highlightResult) || void 0 === o2 || null === (c2 = o2.hierarchy) || void 0 === c2 ? void 0 : c2.lvl0) || {}).value;
    return a2 && hr.test(a2) ? a2.replace(dr, "") : a2;
  }
  function yr() {
    return yr = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2)
          Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
      }
      return e2;
    }, yr.apply(this, arguments);
  }
  function _r(e2) {
    return Be.createElement("div", { className: "DocSearch-Dropdown-Container" }, e2.state.collections.map(function(t2) {
      if (0 === t2.items.length)
        return null;
      var n2 = vr(t2.items[0]);
      return Be.createElement(lr, yr({}, e2, { key: t2.source.sourceId, title: n2, collection: t2, renderIcon: function(e3) {
        var n3, r2 = e3.item, o2 = e3.index;
        return Be.createElement(Be.Fragment, null, r2.__docsearch_parent && Be.createElement("svg", { className: "DocSearch-Hit-Tree", viewBox: "0 0 24 54" }, Be.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, r2.__docsearch_parent !== (null === (n3 = t2.items[o2 + 1]) || void 0 === n3 ? void 0 : n3.__docsearch_parent) ? Be.createElement("path", { d: "M8 6v21M20 27H8.3" }) : Be.createElement("path", { d: "M8 6v42M20 27H8.3" }))), Be.createElement("div", { className: "DocSearch-Hit-icon" }, Be.createElement(Fn, { type: r2.type })));
      }, renderAction: function() {
        return Be.createElement("div", { className: "DocSearch-Hit-action" }, Be.createElement(Hn, null));
      } }));
    }), e2.resultsFooterComponent && Be.createElement("section", { className: "DocSearch-HitsFooter" }, Be.createElement(e2.resultsFooterComponent, { state: e2.state })));
  }
  var br = ["translations"];
  function gr() {
    return gr = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2)
          Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
      }
      return e2;
    }, gr.apply(this, arguments);
  }
  function Or(e2, t2) {
    if (null == e2)
      return {};
    var n2, r2, o2 = function(e3, t3) {
      if (null == e3)
        return {};
      var n3, r3, o3 = {}, c3 = Object.keys(e3);
      for (r3 = 0; r3 < c3.length; r3++)
        n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var c2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < c2.length; r2++)
        n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  function Sr(e2) {
    var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = Or(e2, br), o2 = n2.recentSearchesTitle, c2 = void 0 === o2 ? "Recent" : o2, i2 = n2.noRecentSearchesText, a2 = void 0 === i2 ? "No recent searches" : i2, u2 = n2.saveRecentSearchButtonTitle, l2 = void 0 === u2 ? "Save this search" : u2, s2 = n2.removeRecentSearchButtonTitle, f2 = void 0 === s2 ? "Remove this search from history" : s2, p2 = n2.favoriteSearchesTitle, m2 = void 0 === p2 ? "Favorite" : p2, d2 = n2.removeFavoriteSearchButtonTitle, h2 = void 0 === d2 ? "Remove this search from favorites" : d2;
    return "idle" === r2.state.status && false === r2.hasCollections ? r2.disableUserPersonalization ? null : Be.createElement("div", { className: "DocSearch-StartScreen" }, Be.createElement("p", { className: "DocSearch-Help" }, a2)) : false === r2.hasCollections ? null : Be.createElement("div", { className: "DocSearch-Dropdown-Container" }, Be.createElement(lr, gr({}, r2, { title: c2, collection: r2.state.collections[0], renderIcon: function() {
      return Be.createElement("div", { className: "DocSearch-Hit-icon" }, Be.createElement(qn, null));
    }, renderAction: function(e3) {
      var t3 = e3.item, n3 = e3.runFavoriteTransition, o3 = e3.runDeleteTransition;
      return Be.createElement(Be.Fragment, null, Be.createElement("div", { className: "DocSearch-Hit-action" }, Be.createElement("button", { className: "DocSearch-Hit-action-button", title: l2, type: "submit", onClick: function(e4) {
        e4.preventDefault(), e4.stopPropagation(), n3(function() {
          r2.favoriteSearches.add(t3), r2.recentSearches.remove(t3), r2.refresh();
        });
      } }, Be.createElement(Wn, null))), Be.createElement("div", { className: "DocSearch-Hit-action" }, Be.createElement("button", { className: "DocSearch-Hit-action-button", title: f2, type: "submit", onClick: function(e4) {
        e4.preventDefault(), e4.stopPropagation(), o3(function() {
          r2.recentSearches.remove(t3), r2.refresh();
        });
      } }, Be.createElement(Mn, null))));
    } })), Be.createElement(lr, gr({}, r2, { title: m2, collection: r2.state.collections[1], renderIcon: function() {
      return Be.createElement("div", { className: "DocSearch-Hit-icon" }, Be.createElement(Wn, null));
    }, renderAction: function(e3) {
      var t3 = e3.item, n3 = e3.runDeleteTransition;
      return Be.createElement("div", { className: "DocSearch-Hit-action" }, Be.createElement("button", { className: "DocSearch-Hit-action-button", title: h2, type: "submit", onClick: function(e4) {
        e4.preventDefault(), e4.stopPropagation(), n3(function() {
          r2.favoriteSearches.remove(t3), r2.refresh();
        });
      } }, Be.createElement(Mn, null)));
    } })));
  }
  var Er = ["translations"];
  function wr() {
    return wr = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2)
          Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
      }
      return e2;
    }, wr.apply(this, arguments);
  }
  function jr(e2, t2) {
    if (null == e2)
      return {};
    var n2, r2, o2 = function(e3, t3) {
      if (null == e3)
        return {};
      var n3, r3, o3 = {}, c3 = Object.keys(e3);
      for (r3 = 0; r3 < c3.length; r3++)
        n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var c2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < c2.length; r2++)
        n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  var Pr = Be.memo(function(e2) {
    var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = jr(e2, Er);
    if ("error" === r2.state.status)
      return Be.createElement(Jn, { translations: null == n2 ? void 0 : n2.errorScreen });
    var o2 = r2.state.collections.some(function(e3) {
      return e3.items.length > 0;
    });
    return r2.state.query ? false === o2 ? Be.createElement(Gn, wr({}, r2, { translations: null == n2 ? void 0 : n2.noResultsScreen })) : Be.createElement(_r, r2) : Be.createElement(Sr, wr({}, r2, { hasCollections: o2, translations: null == n2 ? void 0 : n2.startScreen }));
  }, function(e2, t2) {
    return "loading" === t2.state.status || "stalled" === t2.state.status;
  });
  var Ir = ["translations"];
  function kr() {
    return kr = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2)
          Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
      }
      return e2;
    }, kr.apply(this, arguments);
  }
  function Dr(e2, t2) {
    if (null == e2)
      return {};
    var n2, r2, o2 = function(e3, t3) {
      if (null == e3)
        return {};
      var n3, r3, o3 = {}, c3 = Object.keys(e3);
      for (r3 = 0; r3 < c3.length; r3++)
        n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var c2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < c2.length; r2++)
        n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  function Cr(e2) {
    var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = Dr(e2, Ir), o2 = n2.resetButtonTitle, c2 = void 0 === o2 ? "Clear the query" : o2, i2 = n2.resetButtonAriaLabel, a2 = void 0 === i2 ? "Clear the query" : i2, u2 = n2.cancelButtonText, l2 = void 0 === u2 ? "Cancel" : u2, s2 = n2.cancelButtonAriaLabel, f2 = void 0 === s2 ? "Cancel" : s2, p2 = r2.getFormProps({ inputElement: r2.inputRef.current }).onReset;
    return Be.useEffect(function() {
      r2.autoFocus && r2.inputRef.current && r2.inputRef.current.focus();
    }, [r2.autoFocus, r2.inputRef]), Be.useEffect(function() {
      r2.isFromSelection && r2.inputRef.current && r2.inputRef.current.select();
    }, [r2.isFromSelection, r2.inputRef]), Be.createElement(Be.Fragment, null, Be.createElement("form", { className: "DocSearch-Form", onSubmit: function(e3) {
      e3.preventDefault();
    }, onReset: p2 }, Be.createElement("label", kr({ className: "DocSearch-MagnifierLabel" }, r2.getLabelProps()), Be.createElement(We, null)), Be.createElement("div", { className: "DocSearch-LoadingIndicator" }, Be.createElement(Ln, null)), Be.createElement("input", kr({ className: "DocSearch-Input", ref: r2.inputRef }, r2.getInputProps({ inputElement: r2.inputRef.current, autoFocus: r2.autoFocus, maxLength: 64 }))), Be.createElement("button", { type: "reset", title: c2, className: "DocSearch-Reset", "aria-label": a2, hidden: !r2.state.query }, Be.createElement(Mn, null))), Be.createElement("button", { className: "DocSearch-Cancel", type: "reset", "aria-label": f2, onClick: r2.onClose }, l2));
  }
  var Ar = ["_highlightResult", "_snippetResult"];
  function Nr(e2, t2) {
    if (null == e2)
      return {};
    var n2, r2, o2 = function(e3, t3) {
      if (null == e3)
        return {};
      var n3, r3, o3 = {}, c3 = Object.keys(e3);
      for (r3 = 0; r3 < c3.length; r3++)
        n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var c2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < c2.length; r2++)
        n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  function xr(e2) {
    return false === function() {
      var e3 = "__TEST_KEY__";
      try {
        return localStorage.setItem(e3, ""), localStorage.removeItem(e3), true;
      } catch (e4) {
        return false;
      }
    }() ? { setItem: function() {
    }, getItem: function() {
      return [];
    } } : { setItem: function(t2) {
      return window.localStorage.setItem(e2, JSON.stringify(t2));
    }, getItem: function() {
      var t2 = window.localStorage.getItem(e2);
      return t2 ? JSON.parse(t2) : [];
    } };
  }
  function Tr(e2) {
    var t2 = e2.key, n2 = e2.limit, r2 = void 0 === n2 ? 5 : n2, o2 = xr(t2), c2 = o2.getItem().slice(0, r2);
    return { add: function(e3) {
      var t3 = e3, n3 = (t3._highlightResult, t3._snippetResult, Nr(t3, Ar)), i2 = c2.findIndex(function(e4) {
        return e4.objectID === n3.objectID;
      });
      i2 > -1 && c2.splice(i2, 1), c2.unshift(n3), c2 = c2.slice(0, r2), o2.setItem(c2);
    }, remove: function(e3) {
      c2 = c2.filter(function(t3) {
        return t3.objectID !== e3.objectID;
      }), o2.setItem(c2);
    }, getAll: function() {
      return c2;
    } };
  }
  var Rr = ["facetName", "facetQuery"];
  function Lr(e2) {
    var t2, n2 = "algoliasearch-client-js-".concat(e2.key), r2 = function() {
      return void 0 === t2 && (t2 = e2.localStorage || window.localStorage), t2;
    }, o2 = function() {
      return JSON.parse(r2().getItem(n2) || "{}");
    };
    return { get: function(e3, t3) {
      var n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } };
      return Promise.resolve().then(function() {
        var n4 = JSON.stringify(e3), r3 = o2()[n4];
        return Promise.all([r3 || t3(), void 0 !== r3]);
      }).then(function(e4) {
        var t4 = i(e4, 2), r3 = t4[0], o3 = t4[1];
        return Promise.all([r3, o3 || n3.miss(r3)]);
      }).then(function(e4) {
        return i(e4, 1)[0];
      });
    }, set: function(e3, t3) {
      return Promise.resolve().then(function() {
        var c2 = o2();
        return c2[JSON.stringify(e3)] = t3, r2().setItem(n2, JSON.stringify(c2)), t3;
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
  function qr(e2) {
    var t2 = a(e2.caches), n2 = t2.shift();
    return void 0 === n2 ? { get: function(e3, t3) {
      var n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } };
      return t3().then(function(e4) {
        return Promise.all([e4, n3.miss(e4)]);
      }).then(function(e4) {
        return i(e4, 1)[0];
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
        return qr({ caches: t2 }).get(e3, r2, o2);
      });
    }, set: function(e3, r2) {
      return n2.set(e3, r2).catch(function() {
        return qr({ caches: t2 }).set(e3, r2);
      });
    }, delete: function(e3) {
      return n2.delete(e3).catch(function() {
        return qr({ caches: t2 }).delete(e3);
      });
    }, clear: function() {
      return n2.clear().catch(function() {
        return qr({ caches: t2 }).clear();
      });
    } };
  }
  function Mr() {
    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { serializable: true }, t2 = {};
    return { get: function(n2, r2) {
      var o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } }, c2 = JSON.stringify(n2);
      if (c2 in t2)
        return Promise.resolve(e2.serializable ? JSON.parse(t2[c2]) : t2[c2]);
      var i2 = r2(), a2 = o2 && o2.miss || function() {
        return Promise.resolve();
      };
      return i2.then(function(e3) {
        return a2(e3);
      }).then(function() {
        return i2;
      });
    }, set: function(n2, r2) {
      return t2[JSON.stringify(n2)] = e2.serializable ? JSON.stringify(r2) : r2, Promise.resolve(r2);
    }, delete: function(e3) {
      return delete t2[JSON.stringify(e3)], Promise.resolve();
    }, clear: function() {
      return t2 = {}, Promise.resolve();
    } };
  }
  function Hr(e2) {
    for (var t2 = e2.length - 1; t2 > 0; t2--) {
      var n2 = Math.floor(Math.random() * (t2 + 1)), r2 = e2[t2];
      e2[t2] = e2[n2], e2[n2] = r2;
    }
    return e2;
  }
  function Ur(e2, t2) {
    return t2 ? (Object.keys(t2).forEach(function(n2) {
      e2[n2] = t2[n2](e2);
    }), e2) : e2;
  }
  function Fr(e2) {
    for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
      n2[r2 - 1] = arguments[r2];
    var o2 = 0;
    return e2.replace(/%s/g, function() {
      return encodeURIComponent(n2[o2++]);
    });
  }
  var Br = { WithinQueryParameters: 0, WithinHeaders: 1 };
  function Vr(e2, t2) {
    var n2 = e2 || {}, r2 = n2.data || {};
    return Object.keys(n2).forEach(function(e3) {
      -1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(e3) && (r2[e3] = n2[e3]);
    }), { data: Object.entries(r2).length > 0 ? r2 : void 0, timeout: n2.timeout || t2, headers: n2.headers || {}, queryParameters: n2.queryParameters || {}, cacheable: n2.cacheable };
  }
  var Wr = { Read: 1, Write: 2, Any: 3 };
  var Kr = 1;
  var zr = 2;
  var Jr = 3;
  function $r(e2) {
    var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Kr;
    return t(t({}, e2), {}, { status: n2, lastUpdate: Date.now() });
  }
  function Qr(e2) {
    return "string" == typeof e2 ? { protocol: "https", url: e2, accept: Wr.Any } : { protocol: e2.protocol || "https", url: e2.url, accept: e2.accept || Wr.Any };
  }
  var Zr = "GET";
  var Yr = "POST";
  function Gr(e2, t2) {
    return Promise.all(t2.map(function(t3) {
      return e2.get(t3, function() {
        return Promise.resolve($r(t3));
      });
    })).then(function(e3) {
      var n2 = e3.filter(function(e4) {
        return function(e5) {
          return e5.status === Kr || Date.now() - e5.lastUpdate > 12e4;
        }(e4);
      }), r2 = e3.filter(function(e4) {
        return function(e5) {
          return e5.status === Jr && Date.now() - e5.lastUpdate <= 12e4;
        }(e4);
      }), o2 = [].concat(a(n2), a(r2));
      return { getTimeout: function(e4, t3) {
        return (0 === r2.length && 0 === e4 ? 1 : r2.length + 3 + e4) * t3;
      }, statelessHosts: o2.length > 0 ? o2.map(function(e4) {
        return Qr(e4);
      }) : t2 };
    });
  }
  function Xr(e2, n2, r2, o2) {
    var c2 = [], i2 = function(e3, n3) {
      if (e3.method === Zr || void 0 === e3.data && void 0 === n3.data)
        return;
      var r3 = Array.isArray(e3.data) ? e3.data : t(t({}, e3.data), n3.data);
      return JSON.stringify(r3);
    }(r2, o2), u2 = function(e3, n3) {
      var r3 = t(t({}, e3.headers), n3.headers), o3 = {};
      return Object.keys(r3).forEach(function(e4) {
        var t2 = r3[e4];
        o3[e4.toLowerCase()] = t2;
      }), o3;
    }(e2, o2), l2 = r2.method, s2 = r2.method !== Zr ? {} : t(t({}, r2.data), o2.data), f2 = t(t(t({ "x-algolia-agent": e2.userAgent.value }, e2.queryParameters), s2), o2.queryParameters), p2 = 0, m2 = function t2(n3, a2) {
      var s3 = n3.pop();
      if (void 0 === s3)
        throw { name: "RetryError", message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.", transporterStackTrace: ro(c2) };
      var m3 = { data: i2, headers: u2, method: l2, url: to(s3, r2.path, f2), connectTimeout: a2(p2, e2.timeouts.connect), responseTimeout: a2(p2, o2.timeout) }, d2 = function(e3) {
        var t3 = { request: m3, response: e3, host: s3, triesLeft: n3.length };
        return c2.push(t3), t3;
      }, h2 = { onSucess: function(e3) {
        return function(e4) {
          try {
            return JSON.parse(e4.content);
          } catch (t3) {
            throw function(e5, t4) {
              return { name: "DeserializationError", message: e5, response: t4 };
            }(t3.message, e4);
          }
        }(e3);
      }, onRetry: function(r3) {
        var o3 = d2(r3);
        return r3.isTimedOut && p2++, Promise.all([e2.logger.info("Retryable failure", oo(o3)), e2.hostsCache.set(s3, $r(s3, r3.isTimedOut ? Jr : zr))]).then(function() {
          return t2(n3, a2);
        });
      }, onFail: function(e3) {
        throw d2(e3), function(e4, t3) {
          var n4 = e4.content, r3 = e4.status, o3 = n4;
          try {
            o3 = JSON.parse(n4).message;
          } catch (e5) {
          }
          return function(e5, t4, n5) {
            return { name: "ApiError", message: e5, status: t4, transporterStackTrace: n5 };
          }(o3, r3, t3);
        }(e3, ro(c2));
      } };
      return e2.requester.send(m3).then(function(e3) {
        return function(e4, t3) {
          return function(e5) {
            var t4 = e5.status;
            return e5.isTimedOut || function(e6) {
              var t5 = e6.isTimedOut, n4 = e6.status;
              return !t5 && 0 == ~~n4;
            }(e5) || 2 != ~~(t4 / 100) && 4 != ~~(t4 / 100);
          }(e4) ? t3.onRetry(e4) : 2 == ~~(e4.status / 100) ? t3.onSucess(e4) : t3.onFail(e4);
        }(e3, h2);
      });
    };
    return Gr(e2.hostsCache, n2).then(function(e3) {
      return m2(a(e3.statelessHosts).reverse(), e3.getTimeout);
    });
  }
  function eo(e2) {
    var t2 = { value: "Algolia for JavaScript (".concat(e2, ")"), add: function(e3) {
      var n2 = "; ".concat(e3.segment).concat(void 0 !== e3.version ? " (".concat(e3.version, ")") : "");
      return -1 === t2.value.indexOf(n2) && (t2.value = "".concat(t2.value).concat(n2)), t2;
    } };
    return t2;
  }
  function to(e2, t2, n2) {
    var r2 = no(n2), o2 = "".concat(e2.protocol, "://").concat(e2.url, "/").concat("/" === t2.charAt(0) ? t2.substr(1) : t2);
    return r2.length && (o2 += "?".concat(r2)), o2;
  }
  function no(e2) {
    return Object.keys(e2).map(function(t2) {
      return Fr("%s=%s", t2, (n2 = e2[t2], "[object Object]" === Object.prototype.toString.call(n2) || "[object Array]" === Object.prototype.toString.call(n2) ? JSON.stringify(e2[t2]) : e2[t2]));
      var n2;
    }).join("&");
  }
  function ro(e2) {
    return e2.map(function(e3) {
      return oo(e3);
    });
  }
  function oo(e2) {
    var n2 = e2.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
    return t(t({}, e2), {}, { request: t(t({}, e2.request), {}, { headers: t(t({}, e2.request.headers), n2) }) });
  }
  var co = function(e2) {
    var n2 = e2.appId, r2 = function(e3, t2, n3) {
      var r3 = { "x-algolia-api-key": n3, "x-algolia-application-id": t2 };
      return { headers: function() {
        return e3 === Br.WithinHeaders ? r3 : {};
      }, queryParameters: function() {
        return e3 === Br.WithinQueryParameters ? r3 : {};
      } };
    }(void 0 !== e2.authMode ? e2.authMode : Br.WithinHeaders, n2, e2.apiKey), o2 = function(e3) {
      var t2 = e3.hostsCache, n3 = e3.logger, r3 = e3.requester, o3 = e3.requestsCache, c3 = e3.responsesCache, a2 = e3.timeouts, u2 = e3.userAgent, l2 = e3.hosts, s2 = e3.queryParameters, f2 = { hostsCache: t2, logger: n3, requester: r3, requestsCache: o3, responsesCache: c3, timeouts: a2, userAgent: u2, headers: e3.headers, queryParameters: s2, hosts: l2.map(function(e4) {
        return Qr(e4);
      }), read: function(e4, t3) {
        var n4 = Vr(t3, f2.timeouts.read), r4 = function() {
          return Xr(f2, f2.hosts.filter(function(e5) {
            return 0 != (e5.accept & Wr.Read);
          }), e4, n4);
        };
        if (true !== (void 0 !== n4.cacheable ? n4.cacheable : e4.cacheable))
          return r4();
        var o4 = { request: e4, mappedRequestOptions: n4, transporter: { queryParameters: f2.queryParameters, headers: f2.headers } };
        return f2.responsesCache.get(o4, function() {
          return f2.requestsCache.get(o4, function() {
            return f2.requestsCache.set(o4, r4()).then(function(e5) {
              return Promise.all([f2.requestsCache.delete(o4), e5]);
            }, function(e5) {
              return Promise.all([f2.requestsCache.delete(o4), Promise.reject(e5)]);
            }).then(function(e5) {
              var t4 = i(e5, 2);
              return t4[0], t4[1];
            });
          });
        }, { miss: function(e5) {
          return f2.responsesCache.set(o4, e5);
        } });
      }, write: function(e4, t3) {
        return Xr(f2, f2.hosts.filter(function(e5) {
          return 0 != (e5.accept & Wr.Write);
        }), e4, Vr(t3, f2.timeouts.write));
      } };
      return f2;
    }(t(t({ hosts: [{ url: "".concat(n2, "-dsn.algolia.net"), accept: Wr.Read }, { url: "".concat(n2, ".algolia.net"), accept: Wr.Write }].concat(Hr([{ url: "".concat(n2, "-1.algolianet.com") }, { url: "".concat(n2, "-2.algolianet.com") }, { url: "".concat(n2, "-3.algolianet.com") }])) }, e2), {}, { headers: t(t(t({}, r2.headers()), { "content-type": "application/x-www-form-urlencoded" }), e2.headers), queryParameters: t(t({}, r2.queryParameters()), e2.queryParameters) })), c2 = { transporter: o2, appId: n2, addAlgoliaAgent: function(e3, t2) {
      o2.userAgent.add({ segment: e3, version: t2 });
    }, clearCache: function() {
      return Promise.all([o2.requestsCache.clear(), o2.responsesCache.clear()]).then(function() {
      });
    } };
    return Ur(c2, e2.methods);
  };
  var io = function(e2) {
    return function(t2) {
      var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = { transporter: e2.transporter, appId: e2.appId, indexName: t2 };
      return Ur(r2, n2.methods);
    };
  };
  var ao = function(e2) {
    return function(n2, r2) {
      var o2 = n2.map(function(e3) {
        return t(t({}, e3), {}, { params: no(e3.params || {}) });
      });
      return e2.transporter.read({ method: Yr, path: "1/indexes/*/queries", data: { requests: o2 }, cacheable: true }, r2);
    };
  };
  var uo = function(e2) {
    return function(n2, r2) {
      return Promise.all(n2.map(function(n3) {
        var o2 = n3.params, i2 = o2.facetName, a2 = o2.facetQuery, u2 = c(o2, Rr);
        return io(e2)(n3.indexName, { methods: { searchForFacetValues: fo } }).searchForFacetValues(i2, a2, t(t({}, r2), u2));
      }));
    };
  };
  var lo = function(e2) {
    return function(t2, n2, r2) {
      return e2.transporter.read({ method: Yr, path: Fr("1/answers/%s/prediction", e2.indexName), data: { query: t2, queryLanguages: n2 }, cacheable: true }, r2);
    };
  };
  var so = function(e2) {
    return function(t2, n2) {
      return e2.transporter.read({ method: Yr, path: Fr("1/indexes/%s/query", e2.indexName), data: { query: t2 }, cacheable: true }, n2);
    };
  };
  var fo = function(e2) {
    return function(t2, n2, r2) {
      return e2.transporter.read({ method: Yr, path: Fr("1/indexes/%s/facets/%s/query", e2.indexName, t2), data: { facetQuery: n2 }, cacheable: true }, r2);
    };
  };
  var po = 1;
  var mo = 2;
  var ho = 3;
  function vo(e2, n2, r2) {
    var o2, c2 = { appId: e2, apiKey: n2, timeouts: { connect: 1, read: 2, write: 30 }, requester: { send: function(e3) {
      return new Promise(function(t2) {
        var n3 = new XMLHttpRequest();
        n3.open(e3.method, e3.url, true), Object.keys(e3.headers).forEach(function(t3) {
          return n3.setRequestHeader(t3, e3.headers[t3]);
        });
        var r3, o3 = function(e4, r4) {
          return setTimeout(function() {
            n3.abort(), t2({ status: 0, content: r4, isTimedOut: true });
          }, 1e3 * e4);
        }, c3 = o3(e3.connectTimeout, "Connection timeout");
        n3.onreadystatechange = function() {
          n3.readyState > n3.OPENED && void 0 === r3 && (clearTimeout(c3), r3 = o3(e3.responseTimeout, "Socket timeout"));
        }, n3.onerror = function() {
          0 === n3.status && (clearTimeout(c3), clearTimeout(r3), t2({ content: n3.responseText || "Network request failed", status: n3.status, isTimedOut: false }));
        }, n3.onload = function() {
          clearTimeout(c3), clearTimeout(r3), t2({ content: n3.responseText, status: n3.status, isTimedOut: false });
        }, n3.send(e3.data);
      });
    } }, logger: (o2 = ho, { debug: function(e3, t2) {
      return po >= o2 && console.debug(e3, t2), Promise.resolve();
    }, info: function(e3, t2) {
      return mo >= o2 && console.info(e3, t2), Promise.resolve();
    }, error: function(e3, t2) {
      return console.error(e3, t2), Promise.resolve();
    } }), responsesCache: Mr(), requestsCache: Mr({ serializable: false }), hostsCache: qr({ caches: [Lr({ key: "".concat("4.8.5", "-").concat(e2) }), Mr()] }), userAgent: eo("4.8.5").add({ segment: "Browser", version: "lite" }), authMode: Br.WithinQueryParameters };
    return co(t(t(t({}, c2), r2), {}, { methods: { search: ao, searchForFacetValues: uo, multipleQueries: ao, multipleSearchForFacetValues: uo, initIndex: function(e3) {
      return function(t2) {
        return io(e3)(t2, { methods: { search: so, searchForFacetValues: fo, findAnswers: lo } });
      };
    } } }));
  }
  vo.version = "4.8.5";
  var yo = ["footer", "searchBox"];
  function _o() {
    return _o = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2)
          Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
      }
      return e2;
    }, _o.apply(this, arguments);
  }
  function bo(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function go(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? bo(Object(n2), true).forEach(function(t3) {
        Oo(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : bo(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Oo(e2, t2, n2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function So(e2, t2) {
    return function(e3) {
      if (Array.isArray(e3))
        return e3;
    }(e2) || function(e3, t3) {
      var n2 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
      if (null == n2)
        return;
      var r2, o2, c2 = [], i2 = true, a2 = false;
      try {
        for (n2 = n2.call(e3); !(i2 = (r2 = n2.next()).done) && (c2.push(r2.value), !t3 || c2.length !== t3); i2 = true)
          ;
      } catch (e4) {
        a2 = true, o2 = e4;
      } finally {
        try {
          i2 || null == n2.return || n2.return();
        } finally {
          if (a2)
            throw o2;
        }
      }
      return c2;
    }(e2, t2) || function(e3, t3) {
      if (!e3)
        return;
      if ("string" == typeof e3)
        return Eo(e3, t3);
      var n2 = Object.prototype.toString.call(e3).slice(8, -1);
      "Object" === n2 && e3.constructor && (n2 = e3.constructor.name);
      if ("Map" === n2 || "Set" === n2)
        return Array.from(e3);
      if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return Eo(e3, t3);
    }(e2, t2) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function Eo(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
      r2[n2] = e2[n2];
    return r2;
  }
  function wo(e2, t2) {
    if (null == e2)
      return {};
    var n2, r2, o2 = function(e3, t3) {
      if (null == e3)
        return {};
      var n3, r3, o3 = {}, c3 = Object.keys(e3);
      for (r3 = 0; r3 < c3.length; r3++)
        n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var c2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < c2.length; r2++)
        n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  function jo(e2) {
    var t2 = e2.appId, n2 = e2.apiKey, r2 = e2.indexName, o2 = e2.placeholder, c2 = void 0 === o2 ? "Search docs" : o2, i2 = e2.searchParameters, a2 = e2.onClose, u2 = void 0 === a2 ? mr : a2, l2 = e2.transformItems, s2 = void 0 === l2 ? pr : l2, f2 = e2.hitComponent, p2 = void 0 === f2 ? Rn : f2, m2 = e2.resultsFooterComponent, d2 = void 0 === m2 ? function() {
      return null;
    } : m2, h2 = e2.navigator, v2 = e2.initialScrollY, y2 = void 0 === v2 ? 0 : v2, _2 = e2.transformSearchClient, b2 = void 0 === _2 ? pr : _2, g2 = e2.disableUserPersonalization, O2 = void 0 !== g2 && g2, S2 = e2.initialQuery, E2 = void 0 === S2 ? "" : S2, w2 = e2.translations, j2 = void 0 === w2 ? {} : w2, P2 = e2.getMissingResultsUrl, I2 = j2.footer, k2 = j2.searchBox, D2 = wo(j2, yo), C2 = So(Be.useState({ query: "", collections: [], completion: null, context: {}, isOpen: false, activeItemId: null, status: "idle" }), 2), A2 = C2[0], N2 = C2[1], x2 = Be.useRef(null), T2 = Be.useRef(null), R2 = Be.useRef(null), L2 = Be.useRef(null), q2 = Be.useRef(null), M2 = Be.useRef(10), H2 = Be.useRef("undefined" != typeof window ? window.getSelection().toString().slice(0, 64) : "").current, U2 = Be.useRef(E2 || H2).current, F2 = function(e3, t3, n3) {
      return Be.useMemo(function() {
        var r3 = vo(e3, t3);
        return r3.addAlgoliaAgent("docsearch", "3.3.3"), false === /docsearch.js \(.*\)/.test(r3.transporter.userAgent.value) && r3.addAlgoliaAgent("docsearch-react", "3.3.3"), n3(r3);
      }, [e3, t3, n3]);
    }(t2, n2, b2), B2 = Be.useRef(Tr({ key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(r2), limit: 10 })).current, V2 = Be.useRef(Tr({ key: "__DOCSEARCH_RECENT_SEARCHES__".concat(r2), limit: 0 === B2.getAll().length ? 7 : 4 })).current, W2 = Be.useCallback(function(e3) {
      if (!O2) {
        var t3 = "content" === e3.type ? e3.__docsearch_parent : e3;
        t3 && -1 === B2.getAll().findIndex(function(e4) {
          return e4.objectID === t3.objectID;
        }) && V2.add(t3);
      }
    }, [B2, V2, O2]), K2 = Be.useMemo(function() {
      return An({ id: "docsearch", defaultActiveItemId: 0, placeholder: c2, openOnFocus: true, initialState: { query: U2, context: { searchSuggestions: [] } }, navigator: h2, onStateChange: function(e3) {
        N2(e3.state);
      }, getSources: function(e3) {
        var t3 = e3.query, n3 = e3.state, o3 = e3.setContext, c3 = e3.setStatus;
        return t3 ? F2.search([{ query: t3, indexName: r2, params: go({ attributesToRetrieve: ["hierarchy.lvl0", "hierarchy.lvl1", "hierarchy.lvl2", "hierarchy.lvl3", "hierarchy.lvl4", "hierarchy.lvl5", "hierarchy.lvl6", "content", "type", "url"], attributesToSnippet: ["hierarchy.lvl1:".concat(M2.current), "hierarchy.lvl2:".concat(M2.current), "hierarchy.lvl3:".concat(M2.current), "hierarchy.lvl4:".concat(M2.current), "hierarchy.lvl5:".concat(M2.current), "hierarchy.lvl6:".concat(M2.current), "content:".concat(M2.current)], snippetEllipsisText: "\u2026", highlightPreTag: "<mark>", highlightPostTag: "</mark>", hitsPerPage: 20 }, i2) }]).catch(function(e4) {
          throw "RetryError" === e4.name && c3("error"), e4;
        }).then(function(e4) {
          var t4 = e4.results[0], r3 = t4.hits, c4 = t4.nbHits, i3 = fr(r3, function(e5) {
            return vr(e5);
          });
          return n3.context.searchSuggestions.length < Object.keys(i3).length && o3({ searchSuggestions: Object.keys(i3) }), o3({ nbHits: c4 }), Object.values(i3).map(function(e5, t5) {
            return { sourceId: "hits".concat(t5), onSelect: function(e6) {
              var t6 = e6.item, n4 = e6.event;
              W2(t6), n4.shiftKey || n4.ctrlKey || n4.metaKey || u2();
            }, getItemUrl: function(e6) {
              return e6.item.url;
            }, getItems: function() {
              return Object.values(fr(e5, function(e6) {
                return e6.hierarchy.lvl1;
              })).map(s2).map(function(e6) {
                return e6.map(function(t6) {
                  return go(go({}, t6), {}, { __docsearch_parent: "lvl1" !== t6.type && e6.find(function(e7) {
                    return "lvl1" === e7.type && e7.hierarchy.lvl1 === t6.hierarchy.lvl1;
                  }) });
                });
              }).flat();
            } };
          });
        }) : O2 ? [] : [{ sourceId: "recentSearches", onSelect: function(e4) {
          var t4 = e4.item, n4 = e4.event;
          W2(t4), n4.shiftKey || n4.ctrlKey || n4.metaKey || u2();
        }, getItemUrl: function(e4) {
          return e4.item.url;
        }, getItems: function() {
          return V2.getAll();
        } }, { sourceId: "favoriteSearches", onSelect: function(e4) {
          var t4 = e4.item, n4 = e4.event;
          W2(t4), n4.shiftKey || n4.ctrlKey || n4.metaKey || u2();
        }, getItemUrl: function(e4) {
          return e4.item.url;
        }, getItems: function() {
          return B2.getAll();
        } }];
      } });
    }, [r2, i2, F2, u2, V2, B2, W2, U2, c2, h2, s2, O2]), z2 = K2.getEnvironmentProps, J2 = K2.getRootProps, $2 = K2.refresh;
    return function(e3) {
      var t3 = e3.getEnvironmentProps, n3 = e3.panelElement, r3 = e3.formElement, o3 = e3.inputElement;
      Be.useEffect(function() {
        if (n3 && r3 && o3) {
          var e4 = t3({ panelElement: n3, formElement: r3, inputElement: o3 }), c3 = e4.onTouchStart, i3 = e4.onTouchMove;
          return window.addEventListener("touchstart", c3), window.addEventListener("touchmove", i3), function() {
            window.removeEventListener("touchstart", c3), window.removeEventListener("touchmove", i3);
          };
        }
      }, [t3, n3, r3, o3]);
    }({ getEnvironmentProps: z2, panelElement: L2.current, formElement: R2.current, inputElement: q2.current }), function(e3) {
      var t3 = e3.container;
      Be.useEffect(function() {
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
    }({ container: x2.current }), Be.useEffect(function() {
      return document.body.classList.add("DocSearch--active"), function() {
        var e3, t3;
        document.body.classList.remove("DocSearch--active"), null === (e3 = (t3 = window).scrollTo) || void 0 === e3 || e3.call(t3, 0, y2);
      };
    }, []), Be.useEffect(function() {
      window.matchMedia("(max-width: 768px)").matches && (M2.current = 5);
    }, []), Be.useEffect(function() {
      L2.current && (L2.current.scrollTop = 0);
    }, [A2.query]), Be.useEffect(function() {
      U2.length > 0 && ($2(), q2.current && q2.current.focus());
    }, [U2, $2]), Be.useEffect(function() {
      function e3() {
        if (T2.current) {
          var e4 = 0.01 * window.innerHeight;
          T2.current.style.setProperty("--docsearch-vh", "".concat(e4, "px"));
        }
      }
      return e3(), window.addEventListener("resize", e3), function() {
        window.removeEventListener("resize", e3);
      };
    }, []), Be.createElement("div", _o({ ref: x2 }, J2({ "aria-expanded": true }), { className: ["DocSearch", "DocSearch-Container", "stalled" === A2.status && "DocSearch-Container--Stalled", "error" === A2.status && "DocSearch-Container--Errored"].filter(Boolean).join(" "), role: "button", tabIndex: 0, onMouseDown: function(e3) {
      e3.target === e3.currentTarget && u2();
    } }), Be.createElement("div", { className: "DocSearch-Modal", ref: T2 }, Be.createElement("header", { className: "DocSearch-SearchBar", ref: R2 }, Be.createElement(Cr, _o({}, K2, { state: A2, autoFocus: 0 === U2.length, inputRef: q2, isFromSelection: Boolean(U2) && U2 === H2, translations: k2, onClose: u2 }))), Be.createElement("div", { className: "DocSearch-Dropdown", ref: L2 }, Be.createElement(Pr, _o({}, K2, { indexName: r2, state: A2, hitComponent: p2, resultsFooterComponent: d2, disableUserPersonalization: O2, recentSearches: V2, favoriteSearches: B2, inputRef: q2, translations: D2, getMissingResultsUrl: P2, onItemClick: function(e3) {
      W2(e3), u2();
    } }))), Be.createElement("footer", { className: "DocSearch-Footer" }, Be.createElement(Tn, { translations: I2 }))));
  }
  function Po() {
    return Po = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2)
          Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
      }
      return e2;
    }, Po.apply(this, arguments);
  }
  function Io(e2, t2) {
    return function(e3) {
      if (Array.isArray(e3))
        return e3;
    }(e2) || function(e3, t3) {
      var n2 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
      if (null == n2)
        return;
      var r2, o2, c2 = [], i2 = true, a2 = false;
      try {
        for (n2 = n2.call(e3); !(i2 = (r2 = n2.next()).done) && (c2.push(r2.value), !t3 || c2.length !== t3); i2 = true)
          ;
      } catch (e4) {
        a2 = true, o2 = e4;
      } finally {
        try {
          i2 || null == n2.return || n2.return();
        } finally {
          if (a2)
            throw o2;
        }
      }
      return c2;
    }(e2, t2) || function(e3, t3) {
      if (!e3)
        return;
      if ("string" == typeof e3)
        return ko(e3, t3);
      var n2 = Object.prototype.toString.call(e3).slice(8, -1);
      "Object" === n2 && e3.constructor && (n2 = e3.constructor.name);
      if ("Map" === n2 || "Set" === n2)
        return Array.from(e3);
      if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return ko(e3, t3);
    }(e2, t2) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function ko(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
      r2[n2] = e2[n2];
    return r2;
  }
  function Do(e2) {
    var t2, n2, r2 = Be.useRef(null), o2 = Io(Be.useState(false), 2), c2 = o2[0], i2 = o2[1], a2 = Io(Be.useState((null == e2 ? void 0 : e2.initialQuery) || void 0), 2), u2 = a2[0], l2 = a2[1], s2 = Be.useCallback(function() {
      i2(true);
    }, [i2]), f2 = Be.useCallback(function() {
      i2(false);
    }, [i2]);
    return function(e3) {
      var t3 = e3.isOpen, n3 = e3.onOpen, r3 = e3.onClose, o3 = e3.onInput, c3 = e3.searchButtonRef;
      Be.useEffect(function() {
        function e4(e5) {
          (27 === e5.keyCode && t3 || "k" === e5.key.toLowerCase() && (e5.metaKey || e5.ctrlKey) || !function(e6) {
            var t4 = e6.target, n4 = t4.tagName;
            return t4.isContentEditable || "INPUT" === n4 || "SELECT" === n4 || "TEXTAREA" === n4;
          }(e5) && "/" === e5.key && !t3) && (e5.preventDefault(), t3 ? r3() : document.body.classList.contains("DocSearch--active") || document.body.classList.contains("DocSearch--active") || n3()), c3 && c3.current === document.activeElement && o3 && /[a-zA-Z0-9]/.test(String.fromCharCode(e5.keyCode)) && o3(e5);
        }
        return window.addEventListener("keydown", e4), function() {
          window.removeEventListener("keydown", e4);
        };
      }, [t3, n3, r3, o3, c3]);
    }({ isOpen: c2, onOpen: s2, onClose: f2, onInput: Be.useCallback(function(e3) {
      i2(true), l2(e3.key);
    }, [i2, l2]), searchButtonRef: r2 }), Be.createElement(Be.Fragment, null, Be.createElement(Ze, { ref: r2, translations: null == e2 || null === (t2 = e2.translations) || void 0 === t2 ? void 0 : t2.button, onClick: s2 }), c2 && Ie(Be.createElement(jo, Po({}, e2, { initialScrollY: window.scrollY, initialQuery: u2, translations: null == e2 || null === (n2 = e2.translations) || void 0 === n2 ? void 0 : n2.modal, onClose: f2 })), document.body));
  }
  function Co(e2) {
    Ae(Be.createElement(Do, o({}, e2, { transformSearchClient: function(t2) {
      return t2.addAlgoliaAgent("docsearch.js", "3.3.3"), e2.transformSearchClient ? e2.transformSearchClient(t2) : t2;
    } })), function(e3) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
      return "string" == typeof e3 ? t2.document.querySelector(e3) : e3;
    }(e2.container, e2.environment));
  }
  var esm_default = Co;

  // ns-hugo:/home/runner/work/paketo-website/paketo-website/build-environment/assets/js/components/search.js
  function Search({ element }) {
    esm_default({
      container: element,
      appId: element.dataset.appId,
      apiKey: element.dataset.apiKey,
      indexName: element.dataset.index,
      placeholder: "Search docs..."
    });
  }

  // ns-hugo:/home/runner/work/paketo-website/paketo-website/build-environment/assets/js/components/docs_nav.js
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

  // ns-hugo:/home/runner/work/paketo-website/paketo-website/build-environment/assets/js/components/docs_getting_started.js
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
  (*! @docsearch/js 3.3.3 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com *)
*/
