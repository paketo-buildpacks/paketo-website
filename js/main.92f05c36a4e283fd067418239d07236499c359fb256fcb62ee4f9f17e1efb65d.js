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
          (function() {
            var __webpack_modules__ = {
              /***/
              686: (
                /***/
                (function(__unused_webpack_module, __webpack_exports__, __webpack_require__2) {
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
                    } catch (e11) {
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
                  var Clipboard2 = /* @__PURE__ */ (function(_Emitter) {
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
                        this.listener = listen_default()(trigger, "click", function(e11) {
                          return _this2.onClick(e11);
                        });
                      }
                      /**
                       * Defines a new `ClipboardAction` on each click event.
                       * @param {Event} e
                       */
                    }, {
                      key: "onClick",
                      value: function onClick(e11) {
                        var trigger = e11.delegateTarget || e11.currentTarget;
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
                  })(tiny_emitter_default());
                  var clipboard = Clipboard2;
                })
              ),
              /***/
              828: (
                /***/
                (function(module2) {
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
                })
              ),
              /***/
              438: (
                /***/
                (function(module2, __unused_webpack_exports, __webpack_require__2) {
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
                    return function(e11) {
                      e11.delegateTarget = closest(e11.target, selector);
                      if (e11.delegateTarget) {
                        callback.call(element, e11);
                      }
                    };
                  }
                  module2.exports = delegate;
                })
              ),
              /***/
              879: (
                /***/
                (function(__unused_webpack_module, exports2) {
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
                })
              ),
              /***/
              370: (
                /***/
                (function(module2, __unused_webpack_exports, __webpack_require__2) {
                  var is2 = __webpack_require__2(879);
                  var delegate = __webpack_require__2(438);
                  function listen(target, type, callback) {
                    if (!target && !type && !callback) {
                      throw new Error("Missing required arguments");
                    }
                    if (!is2.string(type)) {
                      throw new TypeError("Second argument must be a String");
                    }
                    if (!is2.fn(callback)) {
                      throw new TypeError("Third argument must be a Function");
                    }
                    if (is2.node(target)) {
                      return listenNode(target, type, callback);
                    } else if (is2.nodeList(target)) {
                      return listenNodeList(target, type, callback);
                    } else if (is2.string(target)) {
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
                })
              ),
              /***/
              817: (
                /***/
                (function(module2) {
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
                })
              ),
              /***/
              279: (
                /***/
                (function(module2) {
                  function E2() {
                  }
                  E2.prototype = {
                    on: function(name, callback, ctx) {
                      var e11 = this.e || (this.e = {});
                      (e11[name] || (e11[name] = [])).push({
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
                      var e11 = this.e || (this.e = {});
                      var evts = e11[name];
                      var liveEvents = [];
                      if (evts && callback) {
                        for (var i2 = 0, len = evts.length; i2 < len; i2++) {
                          if (evts[i2].fn !== callback && evts[i2].fn._ !== callback)
                            liveEvents.push(evts[i2]);
                        }
                      }
                      liveEvents.length ? e11[name] = liveEvents : delete e11[name];
                      return this;
                    }
                  };
                  module2.exports = E2;
                  module2.exports.TinyEmitter = E2;
                })
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
            !(function() {
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
            })();
            !(function() {
              __webpack_require__.d = function(exports2, definition) {
                for (var key in definition) {
                  if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                    Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
                  }
                }
              };
            })();
            !(function() {
              __webpack_require__.o = function(obj, prop) {
                return Object.prototype.hasOwnProperty.call(obj, prop);
              };
            })();
            return __webpack_require__(686);
          })().default
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
  function e(e11, t2) {
    (null == t2 || t2 > e11.length) && (t2 = e11.length);
    for (var n2 = 0, r2 = Array(t2); n2 < t2; n2++) r2[n2] = e11[n2];
    return r2;
  }
  function t(e11) {
    if (void 0 === e11) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e11;
  }
  function n(e11, t2, n2, r2, u2, a2, i2) {
    try {
      var o2 = e11[a2](i2), s2 = o2.value;
    } catch (e12) {
      return void n2(e12);
    }
    o2.done ? t2(s2) : Promise.resolve(s2).then(r2, u2);
  }
  function r(e11) {
    return function() {
      var t2 = this, r2 = arguments;
      return new Promise(function(u2, a2) {
        var i2 = e11.apply(t2, r2);
        function o2(e12) {
          n(i2, u2, a2, o2, s2, "next", e12);
        }
        function s2(e12) {
          n(i2, u2, a2, o2, s2, "throw", e12);
        }
        o2(void 0);
      });
    };
  }
  function u(e11, n2, r2) {
    return n2 = l(n2), (function(e12, n3) {
      if (n3 && ("object" == typeof n3 || "function" == typeof n3)) return n3;
      if (void 0 !== n3) throw new TypeError("Derived constructors may only return object or undefined");
      return t(e12);
    })(e11, d() ? Reflect.construct(n2, r2 || [], l(e11).constructor) : n2.apply(e11, r2));
  }
  function a(e11, t2) {
    if (!(e11 instanceof t2)) throw new TypeError("Cannot call a class as a function");
  }
  function i(e11, t2) {
    for (var n2 = 0; n2 < t2.length; n2++) {
      var r2 = t2[n2];
      r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e11, E(r2.key), r2);
    }
  }
  function o(e11, t2, n2) {
    return t2 && i(e11.prototype, t2), n2 && i(e11, n2), Object.defineProperty(e11, "prototype", { writable: false }), e11;
  }
  function s(e11, t2) {
    var n2 = "undefined" != typeof Symbol && e11[Symbol.iterator] || e11["@@iterator"];
    if (!n2) {
      if (Array.isArray(e11) || (n2 = b(e11)) || t2) {
        n2 && (e11 = n2);
        var r2 = 0, u2 = function() {
        };
        return { s: u2, n: function() {
          return r2 >= e11.length ? { done: true } : { done: false, value: e11[r2++] };
        }, e: function(e12) {
          throw e12;
        }, f: u2 };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var a2, i2 = true, o2 = false;
    return { s: function() {
      n2 = n2.call(e11);
    }, n: function() {
      var e12 = n2.next();
      return i2 = e12.done, e12;
    }, e: function(e12) {
      o2 = true, a2 = e12;
    }, f: function() {
      try {
        i2 || null == n2.return || n2.return();
      } finally {
        if (o2) throw a2;
      }
    } };
  }
  function c(e11, t2, n2) {
    return (t2 = E(t2)) in e11 ? Object.defineProperty(e11, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e11[t2] = n2, e11;
  }
  function l(e11) {
    return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e12) {
      return e12.__proto__ || Object.getPrototypeOf(e12);
    }, l(e11);
  }
  function f(e11, t2) {
    if ("function" != typeof t2 && null !== t2) throw new TypeError("Super expression must either be null or a function");
    e11.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e11, writable: true, configurable: true } }), Object.defineProperty(e11, "prototype", { writable: false }), t2 && y(e11, t2);
  }
  function d() {
    try {
      var e11 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (e12) {
    }
    return (d = function() {
      return !!e11;
    })();
  }
  function p(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function h(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? p(Object(n2), true).forEach(function(t3) {
        c(e11, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : p(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e11;
  }
  function v(e11, t2) {
    if (null == e11) return {};
    var n2, r2, u2 = (function(e12, t3) {
      if (null == e12) return {};
      var n3 = {};
      for (var r3 in e12) if ({}.hasOwnProperty.call(e12, r3)) {
        if (-1 !== t3.indexOf(r3)) continue;
        n3[r3] = e12[r3];
      }
      return n3;
    })(e11, t2);
    if (Object.getOwnPropertySymbols) {
      var a2 = Object.getOwnPropertySymbols(e11);
      for (r2 = 0; r2 < a2.length; r2++) n2 = a2[r2], -1 === t2.indexOf(n2) && {}.propertyIsEnumerable.call(e11, n2) && (u2[n2] = e11[n2]);
    }
    return u2;
  }
  function m() {
    var e11, t2, n2 = "function" == typeof Symbol ? Symbol : {}, r2 = n2.iterator || "@@iterator", u2 = n2.toStringTag || "@@toStringTag";
    function a2(n3, r3, u3, a3) {
      var s3 = r3 && r3.prototype instanceof o2 ? r3 : o2, c3 = Object.create(s3.prototype);
      return D(c3, "_invoke", (function(n4, r4, u4) {
        var a4, o3, s4, c4 = 0, l3 = u4 || [], f3 = false, d3 = { p: 0, n: 0, v: e11, a: p2, f: p2.bind(e11, 4), d: function(t3, n5) {
          return a4 = t3, o3 = 0, s4 = e11, d3.n = n5, i2;
        } };
        function p2(n5, r5) {
          for (o3 = n5, s4 = r5, t2 = 0; !f3 && c4 && !u5 && t2 < l3.length; t2++) {
            var u5, a5 = l3[t2], p3 = d3.p, h2 = a5[2];
            n5 > 3 ? (u5 = h2 === r5) && (s4 = a5[(o3 = a5[4]) ? 5 : (o3 = 3, 3)], a5[4] = a5[5] = e11) : a5[0] <= p3 && ((u5 = n5 < 2 && p3 < a5[1]) ? (o3 = 0, d3.v = r5, d3.n = a5[1]) : p3 < h2 && (u5 = n5 < 3 || a5[0] > r5 || r5 > h2) && (a5[4] = n5, a5[5] = r5, d3.n = h2, o3 = 0));
          }
          if (u5 || n5 > 1) return i2;
          throw f3 = true, r5;
        }
        return function(u5, l4, h2) {
          if (c4 > 1) throw TypeError("Generator is already running");
          for (f3 && 1 === l4 && p2(l4, h2), o3 = l4, s4 = h2; (t2 = o3 < 2 ? e11 : s4) || !f3; ) {
            a4 || (o3 ? o3 < 3 ? (o3 > 1 && (d3.n = -1), p2(o3, s4)) : d3.n = s4 : d3.v = s4);
            try {
              if (c4 = 2, a4) {
                if (o3 || (u5 = "next"), t2 = a4[u5]) {
                  if (!(t2 = t2.call(a4, s4))) throw TypeError("iterator result is not an object");
                  if (!t2.done) return t2;
                  s4 = t2.value, o3 < 2 && (o3 = 0);
                } else 1 === o3 && (t2 = a4.return) && t2.call(a4), o3 < 2 && (s4 = TypeError("The iterator does not provide a '" + u5 + "' method"), o3 = 1);
                a4 = e11;
              } else if ((t2 = (f3 = d3.n < 0) ? s4 : n4.call(r4, d3)) !== i2) break;
            } catch (t3) {
              a4 = e11, o3 = 1, s4 = t3;
            } finally {
              c4 = 1;
            }
          }
          return { value: t2, done: f3 };
        };
      })(n3, u3, a3), true), c3;
    }
    var i2 = {};
    function o2() {
    }
    function s2() {
    }
    function c2() {
    }
    t2 = Object.getPrototypeOf;
    var l2 = [][r2] ? t2(t2([][r2]())) : (D(t2 = {}, r2, function() {
      return this;
    }), t2), f2 = c2.prototype = o2.prototype = Object.create(l2);
    function d2(e12) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e12, c2) : (e12.__proto__ = c2, D(e12, u2, "GeneratorFunction")), e12.prototype = Object.create(f2), e12;
    }
    return s2.prototype = c2, D(f2, "constructor", c2), D(c2, "constructor", s2), s2.displayName = "GeneratorFunction", D(c2, u2, "GeneratorFunction"), D(f2), D(f2, u2, "Generator"), D(f2, r2, function() {
      return this;
    }), D(f2, "toString", function() {
      return "[object Generator]";
    }), (m = function() {
      return { w: a2, m: d2 };
    })();
  }
  function D(e11, t2, n2, r2) {
    var u2 = Object.defineProperty;
    try {
      u2({}, "", {});
    } catch (e12) {
      u2 = 0;
    }
    D = function(e12, t3, n3, r3) {
      function a2(t4, n4) {
        D(e12, t4, function(e13) {
          return this._invoke(t4, n4, e13);
        });
      }
      t3 ? u2 ? u2(e12, t3, { value: n3, enumerable: !r3, configurable: !r3, writable: !r3 }) : e12[t3] = n3 : (a2("next", 0), a2("throw", 1), a2("return", 2));
    }, D(e11, t2, n2, r2);
  }
  function y(e11, t2) {
    return y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e12, t3) {
      return e12.__proto__ = t3, e12;
    }, y(e11, t2);
  }
  function g(e11, t2) {
    return (function(e12) {
      if (Array.isArray(e12)) return e12;
    })(e11) || (function(e12, t3) {
      var n2 = null == e12 ? null : "undefined" != typeof Symbol && e12[Symbol.iterator] || e12["@@iterator"];
      if (null != n2) {
        var r2, u2, a2, i2, o2 = [], s2 = true, c2 = false;
        try {
          if (a2 = (n2 = n2.call(e12)).next, 0 === t3) ;
          else for (; !(s2 = (r2 = a2.call(n2)).done) && (o2.push(r2.value), o2.length !== t3); s2 = true) ;
        } catch (e13) {
          c2 = true, u2 = e13;
        } finally {
          try {
            if (!s2 && null != n2.return && (i2 = n2.return(), Object(i2) !== i2)) return;
          } finally {
            if (c2) throw u2;
          }
        }
        return o2;
      }
    })(e11, t2) || b(e11, t2) || (function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function F(t2) {
    return (function(t3) {
      if (Array.isArray(t3)) return e(t3);
    })(t2) || (function(e11) {
      if ("undefined" != typeof Symbol && null != e11[Symbol.iterator] || null != e11["@@iterator"]) return Array.from(e11);
    })(t2) || b(t2) || (function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function E(e11) {
    var t2 = (function(e12, t3) {
      if ("object" != typeof e12 || !e12) return e12;
      var n2 = e12[Symbol.toPrimitive];
      if (void 0 !== n2) {
        var r2 = n2.call(e12, t3 || "default");
        if ("object" != typeof r2) return r2;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t3 ? String : Number)(e12);
    })(e11, "string");
    return "symbol" == typeof t2 ? t2 : t2 + "";
  }
  function _(e11) {
    return _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e12) {
      return typeof e12;
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : typeof e12;
    }, _(e11);
  }
  function b(t2, n2) {
    if (t2) {
      if ("string" == typeof t2) return e(t2, n2);
      var r2 = {}.toString.call(t2).slice(8, -1);
      return "Object" === r2 && t2.constructor && (r2 = t2.constructor.name), "Map" === r2 || "Set" === r2 ? Array.from(t2) : "Arguments" === r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2) ? e(t2, n2) : void 0;
    }
  }
  function C(e11) {
    var t2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
    return C = function(e12) {
      if (null === e12 || !(function(e13) {
        try {
          return -1 !== Function.toString.call(e13).indexOf("[native code]");
        } catch (t3) {
          return "function" == typeof e13;
        }
      })(e12)) return e12;
      if ("function" != typeof e12) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== t2) {
        if (t2.has(e12)) return t2.get(e12);
        t2.set(e12, n2);
      }
      function n2() {
        return (function(e13, t3, n3) {
          if (d()) return Reflect.construct.apply(null, arguments);
          var r2 = [null];
          r2.push.apply(r2, t3);
          var u2 = new (e13.bind.apply(e13, r2))();
          return n3 && y(u2, n3.prototype), u2;
        })(e12, arguments, l(this).constructor);
      }
      return n2.prototype = Object.create(e12.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), y(n2, e12);
    }, C(e11);
  }
  var k;
  var A;
  var w;
  var S;
  var x;
  var O;
  var B;
  var I;
  var T;
  var P;
  var j;
  var N;
  var z = {};
  var R = [];
  var M = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var Z = Array.isArray;
  function L(e11, t2) {
    for (var n2 in t2) e11[n2] = t2[n2];
    return e11;
  }
  function $(e11) {
    e11 && e11.parentNode && e11.parentNode.removeChild(e11);
  }
  function q(e11, t2, n2) {
    var r2, u2, a2, i2 = {};
    for (a2 in t2) "key" == a2 ? r2 = t2[a2] : "ref" == a2 ? u2 = t2[a2] : i2[a2] = t2[a2];
    if (arguments.length > 2 && (i2.children = arguments.length > 3 ? k.call(arguments, 2) : n2), "function" == typeof e11 && null != e11.defaultProps) for (a2 in e11.defaultProps) void 0 === i2[a2] && (i2[a2] = e11.defaultProps[a2]);
    return U(e11, i2, r2, u2, null);
  }
  function U(e11, t2, n2, r2, u2) {
    var a2 = { type: e11, props: t2, key: n2, ref: r2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == u2 ? ++w : u2, __i: -1, __u: 0 };
    return null == u2 && null != A.vnode && A.vnode(a2), a2;
  }
  function H(e11) {
    return e11.children;
  }
  function V(e11, t2) {
    this.props = e11, this.context = t2;
  }
  function W(e11, t2) {
    if (null == t2) return e11.__ ? W(e11.__, e11.__i + 1) : null;
    for (var n2; t2 < e11.__k.length; t2++) if (null != (n2 = e11.__k[t2]) && null != n2.__e) return n2.__e;
    return "function" == typeof e11.type ? W(e11) : null;
  }
  function K(e11) {
    var t2, n2;
    if (null != (e11 = e11.__) && null != e11.__c) {
      for (e11.__e = e11.__c.base = null, t2 = 0; t2 < e11.__k.length; t2++) if (null != (n2 = e11.__k[t2]) && null != n2.__e) {
        e11.__e = e11.__c.base = n2.__e;
        break;
      }
      return K(e11);
    }
  }
  function J(e11) {
    (!e11.__d && (e11.__d = true) && S.push(e11) && !Q.__r++ || x != A.debounceRendering) && ((x = A.debounceRendering) || O)(Q);
  }
  function Q() {
    for (var e11, t2, n2, r2, u2, a2, i2, o2 = 1; S.length; ) S.length > o2 && S.sort(B), e11 = S.shift(), o2 = S.length, e11.__d && (n2 = void 0, r2 = void 0, u2 = (r2 = (t2 = e11).__v).__e, a2 = [], i2 = [], t2.__P && ((n2 = L({}, r2)).__v = r2.__v + 1, A.vnode && A.vnode(n2), ue(t2.__P, n2, r2, t2.__n, t2.__P.namespaceURI, 32 & r2.__u ? [u2] : null, a2, null == u2 ? W(r2) : u2, !!(32 & r2.__u), i2), n2.__v = r2.__v, n2.__.__k[n2.__i] = n2, ie(a2, n2, i2), r2.__e = r2.__ = null, n2.__e != u2 && K(n2)));
    Q.__r = 0;
  }
  function G(e11, t2, n2, r2, u2, a2, i2, o2, s2, c2, l2) {
    var f2, d2, p2, h2, v2, m2, D2, y2 = r2 && r2.__k || R, g2 = t2.length;
    for (s2 = (function(e12, t3, n3, r3, u3) {
      var a3, i3, o3, s3, c3, l3 = n3.length, f3 = l3, d3 = 0;
      for (e12.__k = new Array(u3), a3 = 0; a3 < u3; a3++) null != (i3 = t3[a3]) && "boolean" != typeof i3 && "function" != typeof i3 ? (s3 = a3 + d3, (i3 = e12.__k[a3] = "string" == typeof i3 || "number" == typeof i3 || "bigint" == typeof i3 || i3.constructor == String ? U(null, i3, null, null, null) : Z(i3) ? U(H, { children: i3 }, null, null, null) : null == i3.constructor && i3.__b > 0 ? U(i3.type, i3.props, i3.key, i3.ref ? i3.ref : null, i3.__v) : i3).__ = e12, i3.__b = e12.__b + 1, o3 = null, -1 != (c3 = i3.__i = ee(i3, n3, s3, f3)) && (f3--, (o3 = n3[c3]) && (o3.__u |= 2)), null == o3 || null == o3.__v ? (-1 == c3 && (u3 > l3 ? d3-- : u3 < l3 && d3++), "function" != typeof i3.type && (i3.__u |= 4)) : c3 != s3 && (c3 == s3 - 1 ? d3-- : c3 == s3 + 1 ? d3++ : (c3 > s3 ? d3-- : d3++, i3.__u |= 4))) : e12.__k[a3] = null;
      if (f3) for (a3 = 0; a3 < l3; a3++) null != (o3 = n3[a3]) && !(2 & o3.__u) && (o3.__e == r3 && (r3 = W(o3)), ce(o3, o3));
      return r3;
    })(n2, t2, y2, s2, g2), f2 = 0; f2 < g2; f2++) null != (p2 = n2.__k[f2]) && (d2 = -1 == p2.__i ? z : y2[p2.__i] || z, p2.__i = f2, m2 = ue(e11, p2, d2, u2, a2, i2, o2, s2, c2, l2), h2 = p2.__e, p2.ref && d2.ref != p2.ref && (d2.ref && se(d2.ref, null, p2), l2.push(p2.ref, p2.__c || h2, p2)), null == v2 && null != h2 && (v2 = h2), (D2 = !!(4 & p2.__u)) || d2.__k === p2.__k ? s2 = Y(p2, s2, e11, D2) : "function" == typeof p2.type && void 0 !== m2 ? s2 = m2 : h2 && (s2 = h2.nextSibling), p2.__u &= -7);
    return n2.__e = v2, s2;
  }
  function Y(e11, t2, n2, r2) {
    var u2, a2;
    if ("function" == typeof e11.type) {
      for (u2 = e11.__k, a2 = 0; u2 && a2 < u2.length; a2++) u2[a2] && (u2[a2].__ = e11, t2 = Y(u2[a2], t2, n2, r2));
      return t2;
    }
    e11.__e != t2 && (r2 && (t2 && e11.type && !t2.parentNode && (t2 = W(e11)), n2.insertBefore(e11.__e, t2 || null)), t2 = e11.__e);
    do {
      t2 = t2 && t2.nextSibling;
    } while (null != t2 && 8 == t2.nodeType);
    return t2;
  }
  function X(e11, t2) {
    return t2 = t2 || [], null == e11 || "boolean" == typeof e11 || (Z(e11) ? e11.some(function(e12) {
      X(e12, t2);
    }) : t2.push(e11)), t2;
  }
  function ee(e11, t2, n2, r2) {
    var u2, a2, i2, o2 = e11.key, s2 = e11.type, c2 = t2[n2], l2 = null != c2 && !(2 & c2.__u);
    if (null === c2 && null == e11.key || l2 && o2 == c2.key && s2 == c2.type) return n2;
    if (r2 > (l2 ? 1 : 0)) {
      for (u2 = n2 - 1, a2 = n2 + 1; u2 >= 0 || a2 < t2.length; ) if (null != (c2 = t2[i2 = u2 >= 0 ? u2-- : a2++]) && !(2 & c2.__u) && o2 == c2.key && s2 == c2.type) return i2;
    }
    return -1;
  }
  function te(e11, t2, n2) {
    "-" == t2[0] ? e11.setProperty(t2, null == n2 ? "" : n2) : e11[t2] = null == n2 ? "" : "number" != typeof n2 || M.test(t2) ? n2 : n2 + "px";
  }
  function ne(e11, t2, n2, r2, u2) {
    var a2, i2;
    e: if ("style" == t2) if ("string" == typeof n2) e11.style.cssText = n2;
    else {
      if ("string" == typeof r2 && (e11.style.cssText = r2 = ""), r2) for (t2 in r2) n2 && t2 in n2 || te(e11.style, t2, "");
      if (n2) for (t2 in n2) r2 && n2[t2] == r2[t2] || te(e11.style, t2, n2[t2]);
    }
    else if ("o" == t2[0] && "n" == t2[1]) a2 = t2 != (t2 = t2.replace(I, "$1")), i2 = t2.toLowerCase(), t2 = i2 in e11 || "onFocusOut" == t2 || "onFocusIn" == t2 ? i2.slice(2) : t2.slice(2), e11.l || (e11.l = {}), e11.l[t2 + a2] = n2, n2 ? r2 ? n2.u = r2.u : (n2.u = T, e11.addEventListener(t2, a2 ? j : P, a2)) : e11.removeEventListener(t2, a2 ? j : P, a2);
    else {
      if ("http://www.w3.org/2000/svg" == u2) t2 = t2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != t2 && "height" != t2 && "href" != t2 && "list" != t2 && "form" != t2 && "tabIndex" != t2 && "download" != t2 && "rowSpan" != t2 && "colSpan" != t2 && "role" != t2 && "popover" != t2 && t2 in e11) try {
        e11[t2] = null == n2 ? "" : n2;
        break e;
      } catch (e12) {
      }
      "function" == typeof n2 || (null == n2 || false === n2 && "-" != t2[4] ? e11.removeAttribute(t2) : e11.setAttribute(t2, "popover" == t2 && 1 == n2 ? "" : n2));
    }
  }
  function re(e11) {
    return function(t2) {
      if (this.l) {
        var n2 = this.l[t2.type + e11];
        if (null == t2.t) t2.t = T++;
        else if (t2.t < n2.u) return;
        return n2(A.event ? A.event(t2) : t2);
      }
    };
  }
  function ue(e11, t2, n2, r2, u2, a2, i2, o2, s2, c2) {
    var l2, f2, d2, p2, h2, v2, m2, D2, y2, g2, F2, E2, _2, b2, C2, w2, S2, x2 = t2.type;
    if (null != t2.constructor) return null;
    128 & n2.__u && (s2 = !!(32 & n2.__u), a2 = [o2 = t2.__e = n2.__e]), (l2 = A.__b) && l2(t2);
    e: if ("function" == typeof x2) try {
      if (D2 = t2.props, y2 = "prototype" in x2 && x2.prototype.render, g2 = (l2 = x2.contextType) && r2[l2.__c], F2 = l2 ? g2 ? g2.props.value : l2.__ : r2, n2.__c ? m2 = (f2 = t2.__c = n2.__c).__ = f2.__E : (y2 ? t2.__c = f2 = new x2(D2, F2) : (t2.__c = f2 = new V(D2, F2), f2.constructor = x2, f2.render = le), g2 && g2.sub(f2), f2.props = D2, f2.state || (f2.state = {}), f2.context = F2, f2.__n = r2, d2 = f2.__d = true, f2.__h = [], f2._sb = []), y2 && null == f2.__s && (f2.__s = f2.state), y2 && null != x2.getDerivedStateFromProps && (f2.__s == f2.state && (f2.__s = L({}, f2.__s)), L(f2.__s, x2.getDerivedStateFromProps(D2, f2.__s))), p2 = f2.props, h2 = f2.state, f2.__v = t2, d2) y2 && null == x2.getDerivedStateFromProps && null != f2.componentWillMount && f2.componentWillMount(), y2 && null != f2.componentDidMount && f2.__h.push(f2.componentDidMount);
      else {
        if (y2 && null == x2.getDerivedStateFromProps && D2 !== p2 && null != f2.componentWillReceiveProps && f2.componentWillReceiveProps(D2, F2), !f2.__e && null != f2.shouldComponentUpdate && false === f2.shouldComponentUpdate(D2, f2.__s, F2) || t2.__v == n2.__v) {
          for (t2.__v != n2.__v && (f2.props = D2, f2.state = f2.__s, f2.__d = false), t2.__e = n2.__e, t2.__k = n2.__k, t2.__k.some(function(e12) {
            e12 && (e12.__ = t2);
          }), E2 = 0; E2 < f2._sb.length; E2++) f2.__h.push(f2._sb[E2]);
          f2._sb = [], f2.__h.length && i2.push(f2);
          break e;
        }
        null != f2.componentWillUpdate && f2.componentWillUpdate(D2, f2.__s, F2), y2 && null != f2.componentDidUpdate && f2.__h.push(function() {
          f2.componentDidUpdate(p2, h2, v2);
        });
      }
      if (f2.context = F2, f2.props = D2, f2.__P = e11, f2.__e = false, _2 = A.__r, b2 = 0, y2) {
        for (f2.state = f2.__s, f2.__d = false, _2 && _2(t2), l2 = f2.render(f2.props, f2.state, f2.context), C2 = 0; C2 < f2._sb.length; C2++) f2.__h.push(f2._sb[C2]);
        f2._sb = [];
      } else do {
        f2.__d = false, _2 && _2(t2), l2 = f2.render(f2.props, f2.state, f2.context), f2.state = f2.__s;
      } while (f2.__d && ++b2 < 25);
      f2.state = f2.__s, null != f2.getChildContext && (r2 = L(L({}, r2), f2.getChildContext())), y2 && !d2 && null != f2.getSnapshotBeforeUpdate && (v2 = f2.getSnapshotBeforeUpdate(p2, h2)), w2 = l2, null != l2 && l2.type === H && null == l2.key && (w2 = oe(l2.props.children)), o2 = G(e11, Z(w2) ? w2 : [w2], t2, n2, r2, u2, a2, i2, o2, s2, c2), f2.base = t2.__e, t2.__u &= -161, f2.__h.length && i2.push(f2), m2 && (f2.__E = f2.__ = null);
    } catch (e12) {
      if (t2.__v = null, s2 || null != a2) if (e12.then) {
        for (t2.__u |= s2 ? 160 : 128; o2 && 8 == o2.nodeType && o2.nextSibling; ) o2 = o2.nextSibling;
        a2[a2.indexOf(o2)] = null, t2.__e = o2;
      } else {
        for (S2 = a2.length; S2--; ) $(a2[S2]);
        ae(t2);
      }
      else t2.__e = n2.__e, t2.__k = n2.__k, e12.then || ae(t2);
      A.__e(e12, t2, n2);
    }
    else null == a2 && t2.__v == n2.__v ? (t2.__k = n2.__k, t2.__e = n2.__e) : o2 = t2.__e = (function(e12, t3, n3, r3, u3, a3, i3, o3, s3) {
      var c3, l3, f3, d3, p3, h3, v3, m3 = n3.props, D3 = t3.props, y3 = t3.type;
      if ("svg" == y3 ? u3 = "http://www.w3.org/2000/svg" : "math" == y3 ? u3 = "http://www.w3.org/1998/Math/MathML" : u3 || (u3 = "http://www.w3.org/1999/xhtml"), null != a3) {
        for (c3 = 0; c3 < a3.length; c3++) if ((p3 = a3[c3]) && "setAttribute" in p3 == !!y3 && (y3 ? p3.localName == y3 : 3 == p3.nodeType)) {
          e12 = p3, a3[c3] = null;
          break;
        }
      }
      if (null == e12) {
        if (null == y3) return document.createTextNode(D3);
        e12 = document.createElementNS(u3, y3, D3.is && D3), o3 && (A.__m && A.__m(t3, a3), o3 = false), a3 = null;
      }
      if (null == y3) m3 === D3 || o3 && e12.data == D3 || (e12.data = D3);
      else {
        if (a3 = a3 && k.call(e12.childNodes), m3 = n3.props || z, !o3 && null != a3) for (m3 = {}, c3 = 0; c3 < e12.attributes.length; c3++) m3[(p3 = e12.attributes[c3]).name] = p3.value;
        for (c3 in m3) if (p3 = m3[c3], "children" == c3) ;
        else if ("dangerouslySetInnerHTML" == c3) f3 = p3;
        else if (!(c3 in D3)) {
          if ("value" == c3 && "defaultValue" in D3 || "checked" == c3 && "defaultChecked" in D3) continue;
          ne(e12, c3, null, p3, u3);
        }
        for (c3 in D3) p3 = D3[c3], "children" == c3 ? d3 = p3 : "dangerouslySetInnerHTML" == c3 ? l3 = p3 : "value" == c3 ? h3 = p3 : "checked" == c3 ? v3 = p3 : o3 && "function" != typeof p3 || m3[c3] === p3 || ne(e12, c3, p3, m3[c3], u3);
        if (l3) o3 || f3 && (l3.__html == f3.__html || l3.__html == e12.innerHTML) || (e12.innerHTML = l3.__html), t3.__k = [];
        else if (f3 && (e12.innerHTML = ""), G("template" == t3.type ? e12.content : e12, Z(d3) ? d3 : [d3], t3, n3, r3, "foreignObject" == y3 ? "http://www.w3.org/1999/xhtml" : u3, a3, i3, a3 ? a3[0] : n3.__k && W(n3, 0), o3, s3), null != a3) for (c3 = a3.length; c3--; ) $(a3[c3]);
        o3 || (c3 = "value", "progress" == y3 && null == h3 ? e12.removeAttribute("value") : null != h3 && (h3 !== e12[c3] || "progress" == y3 && !h3 || "option" == y3 && h3 != m3[c3]) && ne(e12, c3, h3, m3[c3], u3), c3 = "checked", null != v3 && v3 != e12[c3] && ne(e12, c3, v3, m3[c3], u3));
      }
      return e12;
    })(n2.__e, t2, n2, r2, u2, a2, i2, s2, c2);
    return (l2 = A.diffed) && l2(t2), 128 & t2.__u ? void 0 : o2;
  }
  function ae(e11) {
    e11 && e11.__c && (e11.__c.__e = true), e11 && e11.__k && e11.__k.forEach(ae);
  }
  function ie(e11, t2, n2) {
    for (var r2 = 0; r2 < n2.length; r2++) se(n2[r2], n2[++r2], n2[++r2]);
    A.__c && A.__c(t2, e11), e11.some(function(t3) {
      try {
        e11 = t3.__h, t3.__h = [], e11.some(function(e12) {
          e12.call(t3);
        });
      } catch (e12) {
        A.__e(e12, t3.__v);
      }
    });
  }
  function oe(e11) {
    return "object" != _(e11) || null == e11 || e11.__b && e11.__b > 0 ? e11 : Z(e11) ? e11.map(oe) : L({}, e11);
  }
  function se(e11, t2, n2) {
    try {
      if ("function" == typeof e11) {
        var r2 = "function" == typeof e11.__u;
        r2 && e11.__u(), r2 && null == t2 || (e11.__u = e11(t2));
      } else e11.current = t2;
    } catch (e12) {
      A.__e(e12, n2);
    }
  }
  function ce(e11, t2, n2) {
    var r2, u2;
    if (A.unmount && A.unmount(e11), (r2 = e11.ref) && (r2.current && r2.current != e11.__e || se(r2, null, t2)), null != (r2 = e11.__c)) {
      if (r2.componentWillUnmount) try {
        r2.componentWillUnmount();
      } catch (e12) {
        A.__e(e12, t2);
      }
      r2.base = r2.__P = null;
    }
    if (r2 = e11.__k) for (u2 = 0; u2 < r2.length; u2++) r2[u2] && ce(r2[u2], t2, n2 || "function" != typeof e11.type);
    n2 || $(e11.__e), e11.__c = e11.__ = e11.__e = void 0;
  }
  function le(e11, t2, n2) {
    return this.constructor(e11, n2);
  }
  function fe(e11, t2, n2) {
    var r2, u2, a2, i2;
    t2 == document && (t2 = document.documentElement), A.__ && A.__(e11, t2), u2 = (r2 = "function" == typeof n2) ? null : n2 && n2.__k || t2.__k, a2 = [], i2 = [], ue(t2, e11 = (!r2 && n2 || t2).__k = q(H, null, [e11]), u2 || z, z, t2.namespaceURI, !r2 && n2 ? [n2] : u2 ? null : t2.firstChild ? k.call(t2.childNodes) : null, a2, !r2 && n2 ? n2 : u2 ? u2.__e : t2.firstChild, r2, i2), ie(a2, e11, i2);
  }
  function de(e11, t2) {
    fe(e11, t2, de);
  }
  function pe(e11, t2, n2) {
    var r2, u2, a2, i2, o2 = L({}, e11.props);
    for (a2 in e11.type && e11.type.defaultProps && (i2 = e11.type.defaultProps), t2) "key" == a2 ? r2 = t2[a2] : "ref" == a2 ? u2 = t2[a2] : o2[a2] = void 0 === t2[a2] && null != i2 ? i2[a2] : t2[a2];
    return arguments.length > 2 && (o2.children = arguments.length > 3 ? k.call(arguments, 2) : n2), U(e11.type, o2, r2 || e11.key, u2 || e11.ref, null);
  }
  k = R.slice, A = { __e: function(e11, t2, n2, r2) {
    for (var u2, a2, i2; t2 = t2.__; ) if ((u2 = t2.__c) && !u2.__) try {
      if ((a2 = u2.constructor) && null != a2.getDerivedStateFromError && (u2.setState(a2.getDerivedStateFromError(e11)), i2 = u2.__d), null != u2.componentDidCatch && (u2.componentDidCatch(e11, r2 || {}), i2 = u2.__d), i2) return u2.__E = u2;
    } catch (t3) {
      e11 = t3;
    }
    throw e11;
  } }, w = 0, V.prototype.setState = function(e11, t2) {
    var n2;
    n2 = null != this.__s && this.__s != this.state ? this.__s : this.__s = L({}, this.state), "function" == typeof e11 && (e11 = e11(L({}, n2), this.props)), e11 && L(n2, e11), null != e11 && this.__v && (t2 && this._sb.push(t2), J(this));
  }, V.prototype.forceUpdate = function(e11) {
    this.__v && (this.__e = true, e11 && this.__h.push(e11), J(this));
  }, V.prototype.render = H, S = [], O = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, B = function(e11, t2) {
    return e11.__v.__b - t2.__v.__b;
  }, Q.__r = 0, I = /(PointerCapture)$|Capture$/i, T = 0, P = re(false), j = re(true), N = 0;
  var he;
  var ve;
  var me;
  var De;
  var ye = 0;
  var ge = [];
  var Fe = A;
  var Ee = Fe.__b;
  var _e = Fe.__r;
  var be = Fe.diffed;
  var Ce = Fe.__c;
  var ke = Fe.unmount;
  var Ae = Fe.__;
  function we(e11, t2) {
    Fe.__h && Fe.__h(ve, e11, ye || t2), ye = 0;
    var n2 = ve.__H || (ve.__H = { __: [], __h: [] });
    return e11 >= n2.__.length && n2.__.push({}), n2.__[e11];
  }
  function Se(e11) {
    return ye = 1, xe(He, e11);
  }
  function xe(e11, t2, n2) {
    var r2 = we(he++, 2);
    if (r2.t = e11, !r2.__c && (r2.__ = [n2 ? n2(t2) : He(void 0, t2), function(e12) {
      var t3 = r2.__N ? r2.__N[0] : r2.__[0], n3 = r2.t(t3, e12);
      t3 !== n3 && (r2.__N = [n3, r2.__[1]], r2.__c.setState({}));
    }], r2.__c = ve, !ve.__f)) {
      var u2 = function(e12, t3, n3) {
        if (!r2.__c.__H) return true;
        var u3 = r2.__c.__H.__.filter(function(e13) {
          return !!e13.__c;
        });
        if (u3.every(function(e13) {
          return !e13.__N;
        })) return !a2 || a2.call(this, e12, t3, n3);
        var i3 = r2.__c.props !== e12;
        return u3.forEach(function(e13) {
          if (e13.__N) {
            var t4 = e13.__[0];
            e13.__ = e13.__N, e13.__N = void 0, t4 !== e13.__[0] && (i3 = true);
          }
        }), a2 && a2.call(this, e12, t3, n3) || i3;
      };
      ve.__f = true;
      var a2 = ve.shouldComponentUpdate, i2 = ve.componentWillUpdate;
      ve.componentWillUpdate = function(e12, t3, n3) {
        if (this.__e) {
          var r3 = a2;
          a2 = void 0, u2(e12, t3, n3), a2 = r3;
        }
        i2 && i2.call(this, e12, t3, n3);
      }, ve.shouldComponentUpdate = u2;
    }
    return r2.__N || r2.__;
  }
  function Oe(e11, t2) {
    var n2 = we(he++, 3);
    !Fe.__s && Ue(n2.__H, t2) && (n2.__ = e11, n2.u = t2, ve.__H.__h.push(n2));
  }
  function Be(e11, t2) {
    var n2 = we(he++, 4);
    !Fe.__s && Ue(n2.__H, t2) && (n2.__ = e11, n2.u = t2, ve.__h.push(n2));
  }
  function Ie(e11) {
    return ye = 5, Pe(function() {
      return { current: e11 };
    }, []);
  }
  function Te(e11, t2, n2) {
    ye = 6, Be(function() {
      if ("function" == typeof e11) {
        var n3 = e11(t2());
        return function() {
          e11(null), n3 && "function" == typeof n3 && n3();
        };
      }
      if (e11) return e11.current = t2(), function() {
        return e11.current = null;
      };
    }, null == n2 ? n2 : n2.concat(e11));
  }
  function Pe(e11, t2) {
    var n2 = we(he++, 7);
    return Ue(n2.__H, t2) && (n2.__ = e11(), n2.__H = t2, n2.__h = e11), n2.__;
  }
  function je(e11, t2) {
    return ye = 8, Pe(function() {
      return e11;
    }, t2);
  }
  function Ne(e11) {
    var t2 = ve.context[e11.__c], n2 = we(he++, 9);
    return n2.c = e11, t2 ? (null == n2.__ && (n2.__ = true, t2.sub(ve)), t2.props.value) : e11.__;
  }
  function ze(e11, t2) {
    Fe.useDebugValue && Fe.useDebugValue(t2 ? t2(e11) : e11);
  }
  function Re() {
    var e11 = we(he++, 11);
    if (!e11.__) {
      for (var t2 = ve.__v; null !== t2 && !t2.__m && null !== t2.__; ) t2 = t2.__;
      var n2 = t2.__m || (t2.__m = [0, 0]);
      e11.__ = "P" + n2[0] + "-" + n2[1]++;
    }
    return e11.__;
  }
  function Me() {
    for (var e11; e11 = ge.shift(); ) if (e11.__P && e11.__H) try {
      e11.__H.__h.forEach($e), e11.__H.__h.forEach(qe), e11.__H.__h = [];
    } catch (t2) {
      e11.__H.__h = [], Fe.__e(t2, e11.__v);
    }
  }
  Fe.__b = function(e11) {
    ve = null, Ee && Ee(e11);
  }, Fe.__ = function(e11, t2) {
    e11 && t2.__k && t2.__k.__m && (e11.__m = t2.__k.__m), Ae && Ae(e11, t2);
  }, Fe.__r = function(e11) {
    _e && _e(e11), he = 0;
    var t2 = (ve = e11.__c).__H;
    t2 && (me === ve ? (t2.__h = [], ve.__h = [], t2.__.forEach(function(e12) {
      e12.__N && (e12.__ = e12.__N), e12.u = e12.__N = void 0;
    })) : (t2.__h.forEach($e), t2.__h.forEach(qe), t2.__h = [], he = 0)), me = ve;
  }, Fe.diffed = function(e11) {
    be && be(e11);
    var t2 = e11.__c;
    t2 && t2.__H && (t2.__H.__h.length && (1 !== ge.push(t2) && De === Fe.requestAnimationFrame || ((De = Fe.requestAnimationFrame) || Le)(Me)), t2.__H.__.forEach(function(e12) {
      e12.u && (e12.__H = e12.u), e12.u = void 0;
    })), me = ve = null;
  }, Fe.__c = function(e11, t2) {
    t2.some(function(e12) {
      try {
        e12.__h.forEach($e), e12.__h = e12.__h.filter(function(e13) {
          return !e13.__ || qe(e13);
        });
      } catch (n2) {
        t2.some(function(e13) {
          e13.__h && (e13.__h = []);
        }), t2 = [], Fe.__e(n2, e12.__v);
      }
    }), Ce && Ce(e11, t2);
  }, Fe.unmount = function(e11) {
    ke && ke(e11);
    var t2, n2 = e11.__c;
    n2 && n2.__H && (n2.__H.__.forEach(function(e12) {
      try {
        $e(e12);
      } catch (e13) {
        t2 = e13;
      }
    }), n2.__H = void 0, t2 && Fe.__e(t2, n2.__v));
  };
  var Ze = "function" == typeof requestAnimationFrame;
  function Le(e11) {
    var t2, n2 = function() {
      clearTimeout(r2), Ze && cancelAnimationFrame(t2), setTimeout(e11);
    }, r2 = setTimeout(n2, 35);
    Ze && (t2 = requestAnimationFrame(n2));
  }
  function $e(e11) {
    var t2 = ve, n2 = e11.__c;
    "function" == typeof n2 && (e11.__c = void 0, n2()), ve = t2;
  }
  function qe(e11) {
    var t2 = ve;
    e11.__c = e11.__(), ve = t2;
  }
  function Ue(e11, t2) {
    return !e11 || e11.length !== t2.length || t2.some(function(t3, n2) {
      return t3 !== e11[n2];
    });
  }
  function He(e11, t2) {
    return "function" == typeof t2 ? t2(e11) : t2;
  }
  function Ve(e11, t2) {
    for (var n2 in t2) e11[n2] = t2[n2];
    return e11;
  }
  function We(e11, t2) {
    for (var n2 in e11) if ("__source" !== n2 && !(n2 in t2)) return true;
    for (var r2 in t2) if ("__source" !== r2 && e11[r2] !== t2[r2]) return true;
    return false;
  }
  function Ke(e11, t2) {
    var n2 = t2(), r2 = Se({ t: { __: n2, u: t2 } }), u2 = r2[0].t, a2 = r2[1];
    return Be(function() {
      u2.__ = n2, u2.u = t2, Je(u2) && a2({ t: u2 });
    }, [e11, n2, t2]), Oe(function() {
      return Je(u2) && a2({ t: u2 }), e11(function() {
        Je(u2) && a2({ t: u2 });
      });
    }, [e11]), n2;
  }
  function Je(e11) {
    var t2, n2, r2 = e11.u, u2 = e11.__;
    try {
      var a2 = r2();
      return !((t2 = u2) === (n2 = a2) && (0 !== t2 || 1 / t2 == 1 / n2) || t2 != t2 && n2 != n2);
    } catch (e12) {
      return true;
    }
  }
  function Qe(e11) {
    e11();
  }
  function Ge(e11) {
    return e11;
  }
  function Ye() {
    return [false, Qe];
  }
  var Xe = Be;
  function et(e11, t2) {
    this.props = e11, this.context = t2;
  }
  function tt(e11, t2) {
    function n2(e12) {
      var n3 = this.props.ref, r3 = n3 == e12.ref;
      return !r3 && n3 && (n3.call ? n3(null) : n3.current = null), t2 ? !t2(this.props, e12) || !r3 : We(this.props, e12);
    }
    function r2(t3) {
      return this.shouldComponentUpdate = n2, q(e11, t3);
    }
    return r2.displayName = "Memo(" + (e11.displayName || e11.name) + ")", r2.prototype.isReactComponent = true, r2.__f = true, r2.type = e11, r2;
  }
  (et.prototype = new V()).isPureReactComponent = true, et.prototype.shouldComponentUpdate = function(e11, t2) {
    return We(this.props, e11) || We(this.state, t2);
  };
  var nt = A.__b;
  A.__b = function(e11) {
    e11.type && e11.type.__f && e11.ref && (e11.props.ref = e11.ref, e11.ref = null), nt && nt(e11);
  };
  var rt = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  var ut = function(e11, t2) {
    return null == e11 ? null : X(X(e11).map(t2));
  };
  var at = { map: ut, forEach: ut, count: function(e11) {
    return e11 ? X(e11).length : 0;
  }, only: function(e11) {
    var t2 = X(e11);
    if (1 !== t2.length) throw "Children.only";
    return t2[0];
  }, toArray: X };
  var it = A.__e;
  A.__e = function(e11, t2, n2, r2) {
    if (e11.then) {
      for (var u2, a2 = t2; a2 = a2.__; ) if ((u2 = a2.__c) && u2.__c) return null == t2.__e && (t2.__e = n2.__e, t2.__k = n2.__k), u2.__c(e11, t2);
    }
    it(e11, t2, n2, r2);
  };
  var ot = A.unmount;
  function st(e11, t2, n2) {
    return e11 && (e11.__c && e11.__c.__H && (e11.__c.__H.__.forEach(function(e12) {
      "function" == typeof e12.__c && e12.__c();
    }), e11.__c.__H = null), null != (e11 = Ve({}, e11)).__c && (e11.__c.__P === n2 && (e11.__c.__P = t2), e11.__c.__e = true, e11.__c = null), e11.__k = e11.__k && e11.__k.map(function(e12) {
      return st(e12, t2, n2);
    })), e11;
  }
  function ct(e11, t2, n2) {
    return e11 && n2 && (e11.__v = null, e11.__k = e11.__k && e11.__k.map(function(e12) {
      return ct(e12, t2, n2);
    }), e11.__c && e11.__c.__P === t2 && (e11.__e && n2.appendChild(e11.__e), e11.__c.__e = true, e11.__c.__P = n2)), e11;
  }
  function lt() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function ft(e11) {
    var t2 = e11.__.__c;
    return t2 && t2.__a && t2.__a(e11);
  }
  function dt() {
    this.i = null, this.l = null;
  }
  A.unmount = function(e11) {
    var t2 = e11.__c;
    t2 && t2.__R && t2.__R(), t2 && 32 & e11.__u && (e11.type = null), ot && ot(e11);
  }, (lt.prototype = new V()).__c = function(e11, t2) {
    var n2 = t2.__c, r2 = this;
    null == r2.o && (r2.o = []), r2.o.push(n2);
    var u2 = ft(r2.__v), a2 = false, i2 = function() {
      a2 || (a2 = true, n2.__R = null, u2 ? u2(o2) : o2());
    };
    n2.__R = i2;
    var o2 = function() {
      if (!--r2.__u) {
        if (r2.state.__a) {
          var e12 = r2.state.__a;
          r2.__v.__k[0] = ct(e12, e12.__c.__P, e12.__c.__O);
        }
        var t3;
        for (r2.setState({ __a: r2.__b = null }); t3 = r2.o.pop(); ) t3.forceUpdate();
      }
    };
    r2.__u++ || 32 & t2.__u || r2.setState({ __a: r2.__b = r2.__v.__k[0] }), e11.then(i2, i2);
  }, lt.prototype.componentWillUnmount = function() {
    this.o = [];
  }, lt.prototype.render = function(e11, t2) {
    if (this.__b) {
      if (this.__v.__k) {
        var n2 = document.createElement("div"), r2 = this.__v.__k[0].__c;
        this.__v.__k[0] = st(this.__b, n2, r2.__O = r2.__P);
      }
      this.__b = null;
    }
    var u2 = t2.__a && q(H, null, e11.fallback);
    return u2 && (u2.__u &= -33), [q(H, null, t2.__a ? null : e11.children), u2];
  };
  var pt = function(e11, t2, n2) {
    if (++n2[1] === n2[0] && e11.l.delete(t2), e11.props.revealOrder && ("t" !== e11.props.revealOrder[0] || !e11.l.size)) for (n2 = e11.i; n2; ) {
      for (; n2.length > 3; ) n2.pop()();
      if (n2[1] < n2[0]) break;
      e11.i = n2 = n2[2];
    }
  };
  function ht(e11) {
    return this.getChildContext = function() {
      return e11.context;
    }, e11.children;
  }
  function vt(e11) {
    var t2 = this, n2 = e11.h;
    if (t2.componentWillUnmount = function() {
      fe(null, t2.v), t2.v = null, t2.h = null;
    }, t2.h && t2.h !== n2 && t2.componentWillUnmount(), !t2.v) {
      for (var r2 = t2.__v; null !== r2 && !r2.__m && null !== r2.__; ) r2 = r2.__;
      t2.h = n2, t2.v = { nodeType: 1, parentNode: n2, childNodes: [], __k: { __m: r2.__m }, contains: function() {
        return true;
      }, insertBefore: function(e12, n3) {
        this.childNodes.push(e12), t2.h.insertBefore(e12, n3);
      }, removeChild: function(e12) {
        this.childNodes.splice(this.childNodes.indexOf(e12) >>> 1, 1), t2.h.removeChild(e12);
      } };
    }
    fe(q(ht, { context: t2.context }, e11.__v), t2.v);
  }
  function mt(e11, t2) {
    var n2 = q(vt, { __v: e11, h: t2 });
    return n2.containerInfo = t2, n2;
  }
  (dt.prototype = new V()).__a = function(e11) {
    var t2 = this, n2 = ft(t2.__v), r2 = t2.l.get(e11);
    return r2[0]++, function(u2) {
      var a2 = function() {
        t2.props.revealOrder ? (r2.push(u2), pt(t2, e11, r2)) : u2();
      };
      n2 ? n2(a2) : a2();
    };
  }, dt.prototype.render = function(e11) {
    this.i = null, this.l = /* @__PURE__ */ new Map();
    var t2 = X(e11.children);
    e11.revealOrder && "b" === e11.revealOrder[0] && t2.reverse();
    for (var n2 = t2.length; n2--; ) this.l.set(t2[n2], this.i = [1, 0, this.i]);
    return e11.children;
  }, dt.prototype.componentDidUpdate = dt.prototype.componentDidMount = function() {
    var e11 = this;
    this.l.forEach(function(t2, n2) {
      pt(e11, n2, t2);
    });
  };
  var Dt = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
  var yt = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
  var gt = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
  var Ft = /[A-Z0-9]/g;
  var Et = "undefined" != typeof document;
  var _t = function(e11) {
    return ("undefined" != typeof Symbol && "symbol" == _(Symbol()) ? /fil|che|rad/ : /fil|che|ra/).test(e11);
  };
  function bt(e11, t2, n2) {
    return null == t2.__k && (t2.textContent = ""), fe(e11, t2), "function" == typeof n2 && n2(), e11 ? e11.__c : null;
  }
  V.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e11) {
    Object.defineProperty(V.prototype, e11, { configurable: true, get: function() {
      return this["UNSAFE_" + e11];
    }, set: function(t2) {
      Object.defineProperty(this, e11, { configurable: true, writable: true, value: t2 });
    } });
  });
  var Ct = A.event;
  function kt() {
  }
  function At() {
    return this.cancelBubble;
  }
  function wt() {
    return this.defaultPrevented;
  }
  A.event = function(e11) {
    return Ct && (e11 = Ct(e11)), e11.persist = kt, e11.isPropagationStopped = At, e11.isDefaultPrevented = wt, e11.nativeEvent = e11;
  };
  var St;
  var xt = { enumerable: false, configurable: true, get: function() {
    return this.class;
  } };
  var Ot = A.vnode;
  A.vnode = function(e11) {
    "string" == typeof e11.type && (function(e12) {
      var t2 = e12.props, n2 = e12.type, r2 = {}, u2 = -1 === n2.indexOf("-");
      for (var a2 in t2) {
        var i2 = t2[a2];
        if (!("value" === a2 && "defaultValue" in t2 && null == i2 || Et && "children" === a2 && "noscript" === n2 || "class" === a2 || "className" === a2)) {
          var o2 = a2.toLowerCase();
          "defaultValue" === a2 && "value" in t2 && null == t2.value ? a2 = "value" : "download" === a2 && true === i2 ? i2 = "" : "translate" === o2 && "no" === i2 ? i2 = false : "o" === o2[0] && "n" === o2[1] ? "ondoubleclick" === o2 ? a2 = "ondblclick" : "onchange" !== o2 || "input" !== n2 && "textarea" !== n2 || _t(t2.type) ? "onfocus" === o2 ? a2 = "onfocusin" : "onblur" === o2 ? a2 = "onfocusout" : gt.test(a2) && (a2 = o2) : o2 = a2 = "oninput" : u2 && yt.test(a2) ? a2 = a2.replace(Ft, "-$&").toLowerCase() : null === i2 && (i2 = void 0), "oninput" === o2 && r2[a2 = o2] && (a2 = "oninputCapture"), r2[a2] = i2;
        }
      }
      "select" == n2 && r2.multiple && Array.isArray(r2.value) && (r2.value = X(t2.children).forEach(function(e13) {
        e13.props.selected = -1 != r2.value.indexOf(e13.props.value);
      })), "select" == n2 && null != r2.defaultValue && (r2.value = X(t2.children).forEach(function(e13) {
        e13.props.selected = r2.multiple ? -1 != r2.defaultValue.indexOf(e13.props.value) : r2.defaultValue == e13.props.value;
      })), t2.class && !t2.className ? (r2.class = t2.class, Object.defineProperty(r2, "className", xt)) : (t2.className && !t2.class || t2.class && t2.className) && (r2.class = r2.className = t2.className), e12.props = r2;
    })(e11), e11.$$typeof = Dt, Ot && Ot(e11);
  };
  var Bt = A.__r;
  A.__r = function(e11) {
    Bt && Bt(e11), St = e11.__c;
  };
  var It = A.diffed;
  A.diffed = function(e11) {
    It && It(e11);
    var t2 = e11.props, n2 = e11.__e;
    null != n2 && "textarea" === e11.type && "value" in t2 && t2.value !== n2.value && (n2.value = null == t2.value ? "" : t2.value), St = null;
  };
  var Tt = { ReactCurrentDispatcher: { current: { readContext: function(e11) {
    return St.__n[e11.__c].props.value;
  }, useCallback: je, useContext: Ne, useDebugValue: ze, useDeferredValue: Ge, useEffect: Oe, useId: Re, useImperativeHandle: Te, useInsertionEffect: Xe, useLayoutEffect: Be, useMemo: Pe, useReducer: xe, useRef: Ie, useState: Se, useSyncExternalStore: Ke, useTransition: Ye } } };
  function Pt(e11) {
    return !!e11 && e11.$$typeof === Dt;
  }
  function jt(e11) {
    return !!e11.__k && (fe(null, e11), true);
  }
  var Nt = { useState: Se, useId: Re, useReducer: xe, useEffect: Oe, useLayoutEffect: Be, useInsertionEffect: Xe, useTransition: Ye, useDeferredValue: Ge, useSyncExternalStore: Ke, startTransition: Qe, useRef: Ie, useImperativeHandle: Te, useMemo: Pe, useCallback: je, useContext: Ne, useDebugValue: ze, version: "18.3.1", Children: at, render: bt, hydrate: function(e11, t2, n2) {
    return de(e11, t2), "function" == typeof n2 && n2(), e11 ? e11.__c : null;
  }, unmountComponentAtNode: jt, createPortal: mt, createElement: q, createContext: function(e11) {
    function t2(e12) {
      var n2, r2;
      return this.getChildContext || (n2 = /* @__PURE__ */ new Set(), (r2 = {})[t2.__c] = this, this.getChildContext = function() {
        return r2;
      }, this.componentWillUnmount = function() {
        n2 = null;
      }, this.shouldComponentUpdate = function(e13) {
        this.props.value != e13.value && n2.forEach(function(e14) {
          e14.__e = true, J(e14);
        });
      }, this.sub = function(e13) {
        n2.add(e13);
        var t3 = e13.componentWillUnmount;
        e13.componentWillUnmount = function() {
          n2 && n2.delete(e13), t3 && t3.call(e13);
        };
      }), e12.children;
    }
    return t2.__c = "__cC" + N++, t2.__ = e11, t2.Provider = t2.__l = (t2.Consumer = function(e12, t3) {
      return e12.children(t3);
    }).contextType = t2, t2;
  }, createFactory: function(e11) {
    return q.bind(null, e11);
  }, cloneElement: function(e11) {
    return Pt(e11) ? pe.apply(null, arguments) : e11;
  }, createRef: function() {
    return { current: null };
  }, Fragment: H, isValidElement: Pt, isElement: Pt, isFragment: function(e11) {
    return Pt(e11) && e11.type === H;
  }, isMemo: function(e11) {
    return !!e11 && !!e11.displayName && ("string" == typeof e11.displayName || e11.displayName instanceof String) && e11.displayName.startsWith("Memo(");
  }, findDOMNode: function(e11) {
    return e11 && (e11.base || 1 === e11.nodeType && e11) || null;
  }, Component: V, PureComponent: et, memo: tt, forwardRef: function(e11) {
    function t2(t3) {
      var n2 = Ve({}, t3);
      return delete n2.ref, e11(n2, t3.ref || null);
    }
    return t2.$$typeof = rt, t2.render = e11, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (e11.displayName || e11.name) + ")", t2;
  }, flushSync: function(e11, t2) {
    return e11(t2);
  }, unstable_batchedUpdates: function(e11, t2) {
    return e11(t2);
  }, StrictMode: H, Suspense: lt, SuspenseList: dt, lazy: function(e11) {
    var t2, n2, r2;
    function u2(u3) {
      if (t2 || (t2 = e11()).then(function(e12) {
        n2 = e12.default || e12;
      }, function(e12) {
        r2 = e12;
      }), r2) throw r2;
      if (!n2) throw t2;
      return q(n2, u3);
    }
    return u2.displayName = "Lazy", u2.__f = true, u2;
  }, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Tt };
  function zt(e11, t2) {
    (null == t2 || t2 > e11.length) && (t2 = e11.length);
    for (var n2 = 0, r2 = Array(t2); n2 < t2; n2++) r2[n2] = e11[n2];
    return r2;
  }
  function Rt(e11, t2, n2) {
    return (t2 = (function(e12) {
      var t3 = (function(e13) {
        if ("object" != _(e13) || !e13) return e13;
        var t4 = e13[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e13, "string");
          if ("object" != _(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e13);
      })(e12);
      return "symbol" == _(t3) ? t3 : t3 + "";
    })(t2)) in e11 ? Object.defineProperty(e11, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e11[t2] = n2, e11;
  }
  function Mt(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Zt(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Mt(Object(n2), true).forEach(function(t3) {
        Rt(e11, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : Mt(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e11;
  }
  function Lt(e11, t2) {
    return (function(e12) {
      if (Array.isArray(e12)) return e12;
    })(e11) || (function(e12, t3) {
      var n2 = null == e12 ? null : "undefined" != typeof Symbol && e12[Symbol.iterator] || e12["@@iterator"];
      if (null != n2) {
        var r2, u2, a2, i2, o2 = [], s2 = true, c2 = false;
        try {
          if (a2 = (n2 = n2.call(e12)).next, 0 === t3) ;
          else for (; !(s2 = (r2 = a2.call(n2)).done) && (o2.push(r2.value), o2.length !== t3); s2 = true) ;
        } catch (e13) {
          c2 = true, u2 = e13;
        } finally {
          try {
            if (!s2 && null != n2.return && (i2 = n2.return(), Object(i2) !== i2)) return;
          } finally {
            if (c2) throw u2;
          }
        }
        return o2;
      }
    })(e11, t2) || (function(e12, t3) {
      if (e12) {
        if ("string" == typeof e12) return zt(e12, t3);
        var n2 = {}.toString.call(e12).slice(8, -1);
        return "Object" === n2 && e12.constructor && (n2 = e12.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e12) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? zt(e12, t3) : void 0;
      }
    })(e11, t2) || (function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  var $t = { "Ctrl/Cmd+K": true, "/": true };
  function qt(e11) {
    return Zt(Zt({}, $t), e11);
  }
  function Ut(e11) {
    var t2 = e11.isOpen, n2 = e11.isAskAiActive, r2 = e11.onAskAiToggle, u2 = e11.onClose, a2 = e11.onOpen, i2 = e11.onInput, o2 = e11.searchButtonRef, s2 = e11.keyboardShortcuts, c2 = void 0 === s2 ? $t : s2;
    Nt.useEffect(function() {
      function e12(e13) {
        var s3;
        if (t2 && "Escape" === e13.code && n2) r2(false);
        else {
          var l2 = c2["Ctrl/Cmd+K"] && "k" === (null === (s3 = e13.key) || void 0 === s3 ? void 0 : s3.toLowerCase()) && (e13.metaKey || e13.ctrlKey), f2 = c2["/"] && "/" === e13.key;
          if ("Escape" === e13.code && t2 || l2 || !(function(e14) {
            var t3 = e14.composedPath()[0], n3 = t3.tagName;
            return t3.isContentEditable || "INPUT" === n3 || "SELECT" === n3 || "TEXTAREA" === n3;
          })(e13) && f2 && !t2) return e13.preventDefault(), void (t2 ? u2() : document.body.classList.contains("DocSearch--active") || a2());
          o2 && o2.current === document.activeElement && i2 && /[a-zA-Z0-9]/.test(String.fromCharCode(e13.keyCode)) && i2(e13);
        }
      }
      return window.addEventListener("keydown", e12), function() {
        window.removeEventListener("keydown", e12);
      };
    }, [t2, n2, o2, c2, a2, u2, i2, r2]);
  }
  var Ht = ["children", "theme"];
  var Vt = Nt.createContext(void 0);
  function Wt(e11) {
    var t2 = e11.children, n2 = e11.theme, r2 = (function(e12, t3) {
      if (null == e12) return {};
      var n3, r3, u3 = (function(e13, t4) {
        if (null == e13) return {};
        var n4 = {};
        for (var r4 in e13) if ({}.hasOwnProperty.call(e13, r4)) {
          if (-1 !== t4.indexOf(r4)) continue;
          n4[r4] = e13[r4];
        }
        return n4;
      })(e12, t3);
      if (Object.getOwnPropertySymbols) {
        var a3 = Object.getOwnPropertySymbols(e12);
        for (r3 = 0; r3 < a3.length; r3++) n3 = a3[r3], -1 === t3.indexOf(n3) && {}.propertyIsEnumerable.call(e12, n3) && (u3[n3] = e12[n3]);
      }
      return u3;
    })(e11, Ht), u2 = Lt(Nt.useState("ready"), 2), a2 = u2[0], i2 = u2[1], o2 = Lt(Nt.useState(r2.initialQuery || ""), 2), s2 = o2[0], c2 = o2[1], l2 = Nt.useRef(null), f2 = qt(r2.keyboardShortcuts), d2 = ["modal-search", "modal-askai"].includes(a2), p2 = "modal-askai" === a2, h2 = Nt.useCallback(function() {
      i2("modal-search");
    }, []), v2 = Nt.useCallback(function() {
      var e12, t3;
      i2("ready"), null === (e12 = l2.current) || void 0 === e12 || e12.focus(), c2(null !== (t3 = r2.initialQuery) && void 0 !== t3 ? t3 : "");
    }, [i2, r2.initialQuery]), m2 = Nt.useCallback(function(e12) {
      i2(e12 ? "modal-askai" : "modal-search");
    }, [i2]), D2 = Nt.useCallback(function(e12) {
      i2("modal-search"), c2(e12.key);
    }, [i2, c2]);
    (function(e12) {
      var t3 = e12.theme;
      Oe(function() {
        if (t3) {
          var e13 = document.documentElement.dataset.theme;
          if (t3 !== e13) return document.documentElement.dataset.theme = t3, function() {
            void 0 === e13 ? delete document.documentElement.dataset.theme : document.documentElement.dataset.theme = e13;
          };
        }
      }, [t3]);
    })({ theme: n2 }), Ut({ isOpen: d2, onOpen: h2, onClose: v2, onAskAiToggle: m2, onInput: D2, isAskAiActive: p2, searchButtonRef: l2, keyboardShortcuts: f2 });
    var y2 = Nt.useMemo(function() {
      return { docsearchState: a2, setDocsearchState: i2, searchButtonRef: l2, initialQuery: s2, keyboardShortcuts: f2, openModal: h2, closeModal: v2, isAskAiActive: p2, isModalActive: d2, onAskAiToggle: m2 };
    }, [a2, l2, s2, f2, h2, v2, p2, d2, m2]);
    return Nt.createElement(Vt.Provider, { value: y2 }, t2);
  }
  function Kt() {
    var e11 = Nt.useContext(Vt);
    if (void 0 === e11) throw new Error("`useDocSearch` must be used within the `DocSearch` provider");
    return e11;
  }
  Vt.displayName = "DocSearchContext", Wt.displayName = "DocSearch";
  var Jt = ["type"];
  var Qt = ["type"];
  var Gt = ["additionalProperties"];
  var Yt = ["abortSignal"];
  var Xt = ["messageId"];
  var en = ["messages"];
  var tn = ["experimental_throttle", "resume"];
  function nn(e11, t2) {
    (null == t2 || t2 > e11.length) && (t2 = e11.length);
    for (var n2 = 0, r2 = Array(t2); n2 < t2; n2++) r2[n2] = e11[n2];
    return r2;
  }
  function rn(e11, t2, n2, r2, u2, a2, i2) {
    try {
      var o2 = e11[a2](i2), s2 = o2.value;
    } catch (e12) {
      return void n2(e12);
    }
    o2.done ? t2(s2) : Promise.resolve(s2).then(r2, u2);
  }
  function un(e11) {
    return function() {
      var t2 = this, n2 = arguments;
      return new Promise(function(r2, u2) {
        var a2 = e11.apply(t2, n2);
        function i2(e12) {
          rn(a2, r2, u2, i2, o2, "next", e12);
        }
        function o2(e12) {
          rn(a2, r2, u2, i2, o2, "throw", e12);
        }
        i2(void 0);
      });
    };
  }
  function an(e11, t2, n2) {
    return t2 = hn(t2), (function(e12, t3) {
      if (t3 && ("object" == _(t3) || "function" == typeof t3)) return t3;
      if (void 0 !== t3) throw new TypeError("Derived constructors may only return object or undefined");
      return (function(e13) {
        if (void 0 === e13) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e13;
      })(e12);
    })(e11, mn() ? Reflect.construct(t2, n2 || [], hn(e11).constructor) : t2.apply(e11, n2));
  }
  function on(e11, t2) {
    if (!(e11 instanceof t2)) throw new TypeError("Cannot call a class as a function");
  }
  function sn(e11, t2, n2) {
    if (mn()) return Reflect.construct.apply(null, arguments);
    var r2 = [null];
    r2.push.apply(r2, t2);
    var u2 = new (e11.bind.apply(e11, r2))();
    return n2 && _n(u2, n2.prototype), u2;
  }
  function cn(e11, t2) {
    for (var n2 = 0; n2 < t2.length; n2++) {
      var r2 = t2[n2];
      r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e11, kn(r2.key), r2);
    }
  }
  function ln(e11, t2, n2) {
    return t2 && cn(e11.prototype, t2), n2 && cn(e11, n2), Object.defineProperty(e11, "prototype", { writable: false }), e11;
  }
  function fn(e11, t2) {
    var n2 = "undefined" != typeof Symbol && e11[Symbol.iterator] || e11["@@iterator"];
    if (!n2) {
      if (Array.isArray(e11) || (n2 = wn(e11)) || t2) {
        n2 && (e11 = n2);
        var r2 = 0, u2 = function() {
        };
        return { s: u2, n: function() {
          return r2 >= e11.length ? { done: true } : { done: false, value: e11[r2++] };
        }, e: function(e12) {
          throw e12;
        }, f: u2 };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var a2, i2 = true, o2 = false;
    return { s: function() {
      n2 = n2.call(e11);
    }, n: function() {
      var e12 = n2.next();
      return i2 = e12.done, e12;
    }, e: function(e12) {
      o2 = true, a2 = e12;
    }, f: function() {
      try {
        i2 || null == n2.return || n2.return();
      } finally {
        if (o2) throw a2;
      }
    } };
  }
  function dn(e11, t2, n2) {
    return (t2 = kn(t2)) in e11 ? Object.defineProperty(e11, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e11[t2] = n2, e11;
  }
  function pn() {
    return pn = Object.assign ? Object.assign.bind() : function(e11) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2) ({}).hasOwnProperty.call(n2, r2) && (e11[r2] = n2[r2]);
      }
      return e11;
    }, pn.apply(null, arguments);
  }
  function hn(e11) {
    return hn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e12) {
      return e12.__proto__ || Object.getPrototypeOf(e12);
    }, hn(e11);
  }
  function vn(e11, t2) {
    if ("function" != typeof t2 && null !== t2) throw new TypeError("Super expression must either be null or a function");
    e11.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e11, writable: true, configurable: true } }), Object.defineProperty(e11, "prototype", { writable: false }), t2 && _n(e11, t2);
  }
  function mn() {
    try {
      var e11 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (e12) {
    }
    return (mn = function() {
      return !!e11;
    })();
  }
  function Dn(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function yn(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Dn(Object(n2), true).forEach(function(t3) {
        dn(e11, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : Dn(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e11;
  }
  function gn(e11, t2) {
    if (null == e11) return {};
    var n2, r2, u2 = (function(e12, t3) {
      if (null == e12) return {};
      var n3 = {};
      for (var r3 in e12) if ({}.hasOwnProperty.call(e12, r3)) {
        if (-1 !== t3.indexOf(r3)) continue;
        n3[r3] = e12[r3];
      }
      return n3;
    })(e11, t2);
    if (Object.getOwnPropertySymbols) {
      var a2 = Object.getOwnPropertySymbols(e11);
      for (r2 = 0; r2 < a2.length; r2++) n2 = a2[r2], -1 === t2.indexOf(n2) && {}.propertyIsEnumerable.call(e11, n2) && (u2[n2] = e11[n2]);
    }
    return u2;
  }
  function Fn() {
    var e11, t2, n2 = "function" == typeof Symbol ? Symbol : {}, r2 = n2.iterator || "@@iterator", u2 = n2.toStringTag || "@@toStringTag";
    function a2(n3, r3, u3, a3) {
      var s3 = r3 && r3.prototype instanceof o2 ? r3 : o2, c3 = Object.create(s3.prototype);
      return En(c3, "_invoke", (function(n4, r4, u4) {
        var a4, o3, s4, c4 = 0, l3 = u4 || [], f3 = false, d3 = { p: 0, n: 0, v: e11, a: p2, f: p2.bind(e11, 4), d: function(t3, n5) {
          return a4 = t3, o3 = 0, s4 = e11, d3.n = n5, i2;
        } };
        function p2(n5, r5) {
          for (o3 = n5, s4 = r5, t2 = 0; !f3 && c4 && !u5 && t2 < l3.length; t2++) {
            var u5, a5 = l3[t2], p3 = d3.p, h2 = a5[2];
            n5 > 3 ? (u5 = h2 === r5) && (s4 = a5[(o3 = a5[4]) ? 5 : (o3 = 3, 3)], a5[4] = a5[5] = e11) : a5[0] <= p3 && ((u5 = n5 < 2 && p3 < a5[1]) ? (o3 = 0, d3.v = r5, d3.n = a5[1]) : p3 < h2 && (u5 = n5 < 3 || a5[0] > r5 || r5 > h2) && (a5[4] = n5, a5[5] = r5, d3.n = h2, o3 = 0));
          }
          if (u5 || n5 > 1) return i2;
          throw f3 = true, r5;
        }
        return function(u5, l4, h2) {
          if (c4 > 1) throw TypeError("Generator is already running");
          for (f3 && 1 === l4 && p2(l4, h2), o3 = l4, s4 = h2; (t2 = o3 < 2 ? e11 : s4) || !f3; ) {
            a4 || (o3 ? o3 < 3 ? (o3 > 1 && (d3.n = -1), p2(o3, s4)) : d3.n = s4 : d3.v = s4);
            try {
              if (c4 = 2, a4) {
                if (o3 || (u5 = "next"), t2 = a4[u5]) {
                  if (!(t2 = t2.call(a4, s4))) throw TypeError("iterator result is not an object");
                  if (!t2.done) return t2;
                  s4 = t2.value, o3 < 2 && (o3 = 0);
                } else 1 === o3 && (t2 = a4.return) && t2.call(a4), o3 < 2 && (s4 = TypeError("The iterator does not provide a '" + u5 + "' method"), o3 = 1);
                a4 = e11;
              } else if ((t2 = (f3 = d3.n < 0) ? s4 : n4.call(r4, d3)) !== i2) break;
            } catch (t3) {
              a4 = e11, o3 = 1, s4 = t3;
            } finally {
              c4 = 1;
            }
          }
          return { value: t2, done: f3 };
        };
      })(n3, u3, a3), true), c3;
    }
    var i2 = {};
    function o2() {
    }
    function s2() {
    }
    function c2() {
    }
    t2 = Object.getPrototypeOf;
    var l2 = [][r2] ? t2(t2([][r2]())) : (En(t2 = {}, r2, function() {
      return this;
    }), t2), f2 = c2.prototype = o2.prototype = Object.create(l2);
    function d2(e12) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e12, c2) : (e12.__proto__ = c2, En(e12, u2, "GeneratorFunction")), e12.prototype = Object.create(f2), e12;
    }
    return s2.prototype = c2, En(f2, "constructor", c2), En(c2, "constructor", s2), s2.displayName = "GeneratorFunction", En(c2, u2, "GeneratorFunction"), En(f2), En(f2, u2, "Generator"), En(f2, r2, function() {
      return this;
    }), En(f2, "toString", function() {
      return "[object Generator]";
    }), (Fn = function() {
      return { w: a2, m: d2 };
    })();
  }
  function En(e11, t2, n2, r2) {
    var u2 = Object.defineProperty;
    try {
      u2({}, "", {});
    } catch (e12) {
      u2 = 0;
    }
    En = function(e12, t3, n3, r3) {
      function a2(t4, n4) {
        En(e12, t4, function(e13) {
          return this._invoke(t4, n4, e13);
        });
      }
      t3 ? u2 ? u2(e12, t3, { value: n3, enumerable: !r3, configurable: !r3, writable: !r3 }) : e12[t3] = n3 : (a2("next", 0), a2("throw", 1), a2("return", 2));
    }, En(e11, t2, n2, r2);
  }
  function _n(e11, t2) {
    return _n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e12, t3) {
      return e12.__proto__ = t3, e12;
    }, _n(e11, t2);
  }
  function bn(e11, t2) {
    return (function(e12) {
      if (Array.isArray(e12)) return e12;
    })(e11) || (function(e12, t3) {
      var n2 = null == e12 ? null : "undefined" != typeof Symbol && e12[Symbol.iterator] || e12["@@iterator"];
      if (null != n2) {
        var r2, u2, a2, i2, o2 = [], s2 = true, c2 = false;
        try {
          if (a2 = (n2 = n2.call(e12)).next, 0 === t3) {
            if (Object(n2) !== n2) return;
            s2 = false;
          } else for (; !(s2 = (r2 = a2.call(n2)).done) && (o2.push(r2.value), o2.length !== t3); s2 = true) ;
        } catch (e13) {
          c2 = true, u2 = e13;
        } finally {
          try {
            if (!s2 && null != n2.return && (i2 = n2.return(), Object(i2) !== i2)) return;
          } finally {
            if (c2) throw u2;
          }
        }
        return o2;
      }
    })(e11, t2) || wn(e11, t2) || (function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function Cn(e11) {
    return (function(e12) {
      if (Array.isArray(e12)) return nn(e12);
    })(e11) || (function(e12) {
      if ("undefined" != typeof Symbol && null != e12[Symbol.iterator] || null != e12["@@iterator"]) return Array.from(e12);
    })(e11) || wn(e11) || (function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function kn(e11) {
    var t2 = (function(e12) {
      if ("object" != _(e12) || !e12) return e12;
      var t3 = e12[Symbol.toPrimitive];
      if (void 0 !== t3) {
        var n2 = t3.call(e12, "string");
        if ("object" != _(n2)) return n2;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e12);
    })(e11);
    return "symbol" == _(t2) ? t2 : t2 + "";
  }
  function An(e11) {
    return An = "function" == typeof Symbol && "symbol" == _(Symbol.iterator) ? function(e12) {
      return _(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : _(e12);
    }, An(e11);
  }
  function wn(e11, t2) {
    if (e11) {
      if ("string" == typeof e11) return nn(e11, t2);
      var n2 = {}.toString.call(e11).slice(8, -1);
      return "Object" === n2 && e11.constructor && (n2 = e11.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e11) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? nn(e11, t2) : void 0;
    }
  }
  function Sn(e11) {
    var t2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
    return Sn = function(e12) {
      if (null === e12 || !(function(e13) {
        try {
          return -1 !== Function.toString.call(e13).indexOf("[native code]");
        } catch (t3) {
          return "function" == typeof e13;
        }
      })(e12)) return e12;
      if ("function" != typeof e12) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== t2) {
        if (t2.has(e12)) return t2.get(e12);
        t2.set(e12, n2);
      }
      function n2() {
        return sn(e12, arguments, hn(this).constructor);
      }
      return n2.prototype = Object.create(e12.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), _n(n2, e12);
    }, Sn(e11);
  }
  var xn = function(e11) {
    var t2 = e11.theme;
    Oe(function() {
      if (t2) {
        var e12 = document.documentElement.dataset.theme;
        if (t2 !== e12) return document.documentElement.dataset.theme = t2, function() {
          void 0 === e12 ? delete document.documentElement.dataset.theme : document.documentElement.dataset.theme = e12;
        };
      }
    }, [t2]);
  };
  var On = { "Ctrl/Cmd+K": true, "/": true };
  function Bn() {
    return Nt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, Nt.createElement("path", { d: "M8.19531 8.76758H7.33398C7.02539 8.76758 6.74414 8.69531 6.49023 8.55078C6.23633 8.40234 6.0332 8.20312 5.88086 7.95312C5.73242 7.70312 5.6582 7.42188 5.6582 7.10938C5.6582 6.80078 5.73242 6.51953 5.88086 6.26562C6.0332 6.01172 6.23633 5.80859 6.49023 5.65625C6.74414 5.50391 7.02539 5.42773 7.33398 5.42773C7.64258 5.42773 7.92383 5.50391 8.17773 5.65625C8.43164 5.80859 8.63281 6.01172 8.78125 6.26562C8.93359 6.51953 9.00977 6.80078 9.00977 7.10938V7.96484H10.9902V7.10938C10.9902 6.80078 11.0664 6.51953 11.2188 6.26562C11.3711 6.01172 11.5723 5.80859 11.8223 5.65625C12.0762 5.50391 12.3574 5.42773 12.666 5.42773C12.9746 5.42773 13.2559 5.50391 13.5098 5.65625C13.7637 5.80859 13.9648 6.01172 14.1133 6.26562C14.2656 6.51953 14.3418 6.80078 14.3418 7.10938C14.3418 7.42188 14.2656 7.70312 14.1133 7.95312C13.9648 8.20312 13.7637 8.40234 13.5098 8.55078C13.2559 8.69531 12.9746 8.76758 12.666 8.76758H11.8105V10.7773H12.666C12.9746 10.7773 13.2559 10.8516 13.5098 11C13.7637 11.1445 13.9648 11.3418 14.1133 11.5918C14.2656 11.8418 14.3418 12.123 14.3418 12.4355C14.3418 12.7441 14.2656 13.0254 14.1133 13.2793C13.9648 13.5332 13.7637 13.7363 13.5098 13.8887C13.2559 14.041 12.9746 14.1172 12.666 14.1172C12.3574 14.1172 12.0762 14.041 11.8223 13.8887C11.5723 13.7363 11.3711 13.5332 11.2188 13.2793C11.0664 13.0254 10.9902 12.7441 10.9902 12.4355V11.5801H9.00977V12.4355C9.00977 12.7441 8.93359 13.0254 8.78125 13.2793C8.63281 13.5332 8.43164 13.7363 8.17773 13.8887C7.92383 14.041 7.64258 14.1172 7.33398 14.1172C7.02539 14.1172 6.74414 14.041 6.49023 13.8887C6.23633 13.7363 6.0332 13.5332 5.88086 13.2793C5.73242 13.0254 5.6582 12.7441 5.6582 12.4355C5.6582 12.123 5.73242 11.8418 5.88086 11.5918C6.0332 11.3418 6.23633 11.1445 6.49023 11C6.74414 10.8516 7.02539 10.7773 7.33398 10.7773H8.19531V8.76758ZM7.33398 7.97656H8.19531V7.10938C8.19531 6.875 8.10938 6.67383 7.9375 6.50586C7.76953 6.33398 7.56836 6.24805 7.33398 6.24805C7.09961 6.24805 6.89648 6.33398 6.72461 6.50586C6.55664 6.67383 6.47266 6.875 6.47266 7.10938C6.47266 7.34766 6.55664 7.55273 6.72461 7.72461C6.89648 7.89258 7.09961 7.97656 7.33398 7.97656ZM12.666 7.97656C12.9004 7.97656 13.1016 7.89258 13.2695 7.72461C13.4414 7.55273 13.5273 7.34766 13.5273 7.10938C13.5273 6.875 13.4414 6.67383 13.2695 6.50586C13.1016 6.33398 12.9004 6.24805 12.666 6.24805C12.4316 6.24805 12.2305 6.33398 12.0625 6.50586C11.8945 6.67383 11.8105 6.875 11.8105 7.10938V7.97656H12.666ZM9.00977 10.7773H10.9902V8.76758H9.00977V10.7773ZM7.33398 11.5625C7.09961 11.5625 6.89648 11.6484 6.72461 11.8203C6.55664 11.9883 6.47266 12.1914 6.47266 12.4297C6.47266 12.6641 6.55664 12.8672 6.72461 13.0391C6.89648 13.207 7.09961 13.291 7.33398 13.291C7.56836 13.291 7.76953 13.207 7.9375 13.0391C8.10938 12.8672 8.19531 12.6641 8.19531 12.4297V11.5625H7.33398ZM12.666 11.5625H11.8105V12.4297C11.8105 12.6641 11.8945 12.8672 12.0625 13.0391C12.2305 13.207 12.4316 13.291 12.666 13.291C12.9004 13.291 13.1016 13.207 13.2695 13.0391C13.4414 12.8672 13.5273 12.6641 13.5273 12.4297C13.5273 12.1914 13.4414 11.9883 13.2695 11.8203C13.1016 11.6484 12.9004 11.5625 12.666 11.5625Z", fill: "currentColor" }));
  }
  function In() {
    return Nt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, Nt.createElement("path", { d: "M8.01562 11.1758L7.95703 9.65234H8.22656L11.9297 5.54492H13.2539L9.75586 9.32422L9.26367 9.79883L8.01562 11.1758ZM7.07812 14V5.54492H8.13281V14H7.07812ZM12.1992 14L9.04102 9.78711L9.76758 9.05469L13.5645 14H12.1992Z", fill: "currentColor" }));
  }
  function Tn() {
    return Nt.createElement("svg", { width: "33", height: "20", viewBox: "0 0 33 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, Nt.createElement("path", { d: "M10.4824 14.1992C9.7168 14.1992 9.05469 14.0195 8.49609 13.6602C7.9375 13.3008 7.50586 12.791 7.20117 12.1309C6.90039 11.4707 6.75 10.6875 6.75 9.78125V9.76953C6.75 8.85938 6.90039 8.07422 7.20117 7.41406C7.50586 6.75391 7.93555 6.24414 8.49023 5.88477C9.04883 5.52539 9.71094 5.3457 10.4766 5.3457C11.0703 5.3457 11.6094 5.46289 12.0938 5.69727C12.582 5.92773 12.9844 6.25 13.3008 6.66406C13.6172 7.07422 13.8164 7.54883 13.8984 8.08789L13.8926 8.09961H12.832L12.8262 8.08789C12.7324 7.72461 12.5742 7.41211 12.3516 7.15039C12.1289 6.88477 11.8574 6.67969 11.5371 6.53516C11.2207 6.39062 10.8672 6.31836 10.4766 6.31836C9.9375 6.31836 9.46875 6.45898 9.07031 6.74023C8.67578 7.02148 8.37109 7.41992 8.15625 7.93555C7.94141 8.45117 7.83398 9.0625 7.83398 9.76953V9.78125C7.83398 10.4844 7.94141 11.0938 8.15625 11.6094C8.37109 12.125 8.67578 12.5234 9.07031 12.8047C9.46875 13.0859 9.93945 13.2266 10.4824 13.2266C10.877 13.2266 11.2344 13.1641 11.5547 13.0391C11.875 12.9102 12.1445 12.7285 12.3633 12.4941C12.582 12.2559 12.7344 11.9746 12.8203 11.6504L12.832 11.6387H13.8984V11.6504C13.8047 12.166 13.6016 12.6152 13.2891 12.998C12.9766 13.377 12.5801 13.6719 12.0996 13.8828C11.623 14.0938 11.084 14.1992 10.4824 14.1992ZM17.7832 14.0469C17.1348 14.0469 16.6641 13.916 16.3711 13.6543C16.082 13.3926 15.9375 12.9609 15.9375 12.3594V8.52734H14.9414V7.68359H15.9375V6.04883H16.9922V7.68359H18.375V8.52734H16.9922V12.1016C16.9922 12.4727 17.0625 12.7402 17.2031 12.9043C17.3438 13.0645 17.5781 13.1445 17.9062 13.1445C17.9961 13.1445 18.0723 13.1426 18.1348 13.1387C18.2012 13.1348 18.2812 13.1289 18.375 13.1211V13.9883C18.2773 14.0039 18.1797 14.0176 18.082 14.0293C17.9844 14.041 17.8848 14.0469 17.7832 14.0469ZM19.8984 14V7.68359H20.918V8.62109H21.0117C21.1328 8.28906 21.3379 8.03125 21.627 7.84766C21.916 7.66406 22.2734 7.57227 22.6992 7.57227C22.7969 7.57227 22.8926 7.57812 22.9863 7.58984C23.084 7.59766 23.1582 7.60547 23.209 7.61328V8.60352C23.1035 8.58398 23 8.57031 22.8984 8.5625C22.8008 8.55078 22.6953 8.54492 22.582 8.54492C22.2578 8.54492 21.9707 8.60938 21.7207 8.73828C21.4707 8.86719 21.2734 9.04688 21.1289 9.27734C20.9883 9.50781 20.918 9.77734 20.918 10.0859V14H19.8984ZM24.5273 14V5.17578H25.5469V14H24.5273Z", fill: "currentColor" }));
  }
  function Pn(e11) {
    var t2 = e11.size, n2 = void 0 === t2 ? 20 : t2, r2 = e11.color, u2 = void 0 === r2 ? "currentColor" : r2;
    return Nt.createElement("svg", { width: n2, height: n2, className: "DocSearch-Search-Icon", viewBox: "0 0 24 24", "aria-hidden": "true" }, Nt.createElement("circle", { cx: "11", cy: "11", r: "8", stroke: u2, fill: "none", strokeWidth: "1.4" }), Nt.createElement("path", { d: "m21 21-4.3-4.3", stroke: u2, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  var jn = ["translations", "keyboardShortcuts"];
  var Nn = "Ctrl";
  var zn = Nt.forwardRef(function(e11, t2) {
    var n2 = e11.translations, r2 = void 0 === n2 ? {} : n2, u2 = e11.keyboardShortcuts, a2 = gn(e11, jn), i2 = r2.buttonText, o2 = void 0 === i2 ? "Search" : i2, s2 = r2.buttonAriaLabel, c2 = void 0 === s2 ? "Search" : s2, l2 = (function(e12) {
      return yn(yn({}, On), e12);
    })(u2), f2 = bn(Se(null), 2), d2 = f2[0], p2 = f2[1];
    xn({ theme: a2.theme }), Oe(function() {
      "undefined" != typeof navigator && (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? p2("\u2318") : p2(Nn));
    }, []);
    var h2 = bn(d2 === Nn ? [Nn, "Control", Nt.createElement(Tn, null)] : ["Meta", "Meta", Nt.createElement(Bn, null)], 3), v2 = h2[0], m2 = h2[1], D2 = h2[2], y2 = l2["Ctrl/Cmd+K"], g2 = "".concat(m2, "+k");
    return Nt.createElement("button", pn({ type: "button", className: "DocSearch DocSearch-Button", "aria-label": y2 ? "".concat(c2, " (").concat(g2, ")") : c2, "aria-keyshortcuts": y2 ? g2 : void 0 }, a2, { ref: t2 }), Nt.createElement("span", { className: "DocSearch-Button-Container" }, Nt.createElement(Pn, null), Nt.createElement("span", { className: "DocSearch-Button-Placeholder" }, o2)), Nt.createElement("span", { className: "DocSearch-Button-Keys" }, null !== d2 && y2 && Nt.createElement(Nt.Fragment, null, Nt.createElement(Rn, { reactsToKey: v2 }, D2), Nt.createElement(Rn, { reactsToKey: "k" }, Nt.createElement(In, null)))));
  });
  function Rn(e11) {
    var t2 = e11.reactsToKey, n2 = e11.children, r2 = bn(Se(false), 2), u2 = r2[0], a2 = r2[1];
    return Oe(function() {
      if (t2) return window.addEventListener("keydown", e12), window.addEventListener("keyup", n3), function() {
        window.removeEventListener("keydown", e12), window.removeEventListener("keyup", n3);
      };
      function e12(e13) {
        e13.key === t2 && a2(true);
      }
      function n3(e13) {
        e13.key !== t2 && "Meta" !== e13.key || a2(false);
      }
    }, [t2]), Nt.createElement("kbd", { className: u2 ? "DocSearch-Button-Key DocSearch-Button-Key--pressed" : "DocSearch-Button-Key" + ("Ctrl" === t2 ? " DocSearch-Button-Key--ctrl" : "") }, n2);
  }
  var Mn;
  var Zn = "vercel.ai.error";
  var Ln = Symbol.for(Zn);
  var $n = (function() {
    function e11(t2) {
      var n2, r2 = t2.name, i2 = t2.message, o2 = t2.cause;
      return a(this, e11), (n2 = u(this, e11, [i2]))[Mn] = true, n2.name = r2, n2.cause = o2, n2;
    }
    return f(e11, C(Error)), o(e11, null, [{ key: "isInstance", value: function(t2) {
      return e11.hasMarker(t2, Zn);
    } }, { key: "hasMarker", value: function(e12, t2) {
      var n2 = Symbol.for(t2);
      return null != e12 && "object" == _(e12) && n2 in e12 && "boolean" == typeof e12[n2] && true === e12[n2];
    } }]);
  })();
  Mn = Ln;
  var qn = $n;
  function Un(e11) {
    return null == e11 ? "unknown error" : "string" == typeof e11 ? e11 : e11 instanceof Error ? e11.message : JSON.stringify(e11);
  }
  var Hn;
  var Vn = "AI_InvalidArgumentError";
  var Wn = "vercel.ai.error.".concat(Vn);
  var Kn = Symbol.for(Wn);
  var Jn = (function() {
    function e11(t2) {
      var n2, r2 = t2.message, i2 = t2.cause, o2 = t2.argument;
      return a(this, e11), (n2 = u(this, e11, [{ name: Vn, message: r2, cause: i2 }]))[Hn] = true, n2.argument = o2, n2;
    }
    return f(e11, qn), o(e11, null, [{ key: "isInstance", value: function(e12) {
      return qn.hasMarker(e12, Wn);
    } }]);
  })();
  Hn = Kn;
  var Qn;
  var Gn = "AI_JSONParseError";
  var Yn = "vercel.ai.error.".concat(Gn);
  var Xn = Symbol.for(Yn);
  var er = (function() {
    function e11(t2) {
      var n2, r2 = t2.text, i2 = t2.cause;
      return a(this, e11), (n2 = u(this, e11, [{ name: Gn, message: "JSON parsing failed: Text: ".concat(r2, ".\nError message: ").concat(Un(i2)), cause: i2 }]))[Qn] = true, n2.text = r2, n2;
    }
    return f(e11, qn), o(e11, null, [{ key: "isInstance", value: function(e12) {
      return qn.hasMarker(e12, Yn);
    } }]);
  })();
  Qn = Xn;
  var tr;
  var nr = "AI_TypeValidationError";
  var rr = "vercel.ai.error.".concat(nr);
  var ur = Symbol.for(rr);
  tr = ur;
  var ar = (function() {
    function e11(t2) {
      var n2, r2 = t2.value, i2 = t2.cause;
      return a(this, e11), (n2 = u(this, e11, [{ name: nr, message: "Type validation failed: Value: ".concat(JSON.stringify(r2), ".\nError message: ").concat(Un(i2)), cause: i2 }]))[tr] = true, n2.value = r2, n2;
    }
    return f(e11, qn), o(e11, null, [{ key: "isInstance", value: function(e12) {
      return qn.hasMarker(e12, rr);
    } }, { key: "wrap", value: function(t2) {
      var n2 = t2.value, r2 = t2.cause;
      return e11.isInstance(r2) && r2.value === n2 ? r2 : new e11({ value: n2, cause: r2 });
    } }]);
  })();
  var ir = (function() {
    function e11(t2, n2) {
      var r2;
      return on(this, e11), (r2 = an(this, e11, [t2])).name = "ParseError", r2.type = n2.type, r2.field = n2.field, r2.value = n2.value, r2.line = n2.line, r2;
    }
    return vn(e11, Sn(Error)), ln(e11);
  })();
  function or(e11) {
  }
  var sr = (function() {
    function e11() {
      var t2, n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r2 = n2.onError, u2 = n2.onRetry, a2 = n2.onComment;
      return on(this, e11), an(this, e11, [{ start: function(e12) {
        t2 = (function(e13) {
          if ("function" == typeof e13) throw new TypeError("`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?");
          var t3, n3 = e13.onEvent, r3 = void 0 === n3 ? or : n3, u3 = e13.onError, a3 = void 0 === u3 ? or : u3, i2 = e13.onRetry, o2 = void 0 === i2 ? or : i2, s2 = e13.onComment, c2 = "", l2 = true, f2 = "", d2 = "";
          function p2(e14) {
            if ("" === e14) return f2.length > 0 && r3({ id: t3, event: d2 || void 0, data: f2.endsWith("\n") ? f2.slice(0, -1) : f2 }), t3 = void 0, f2 = "", void (d2 = "");
            if (e14.startsWith(":")) s2 && s2(e14.slice(e14.startsWith(": ") ? 2 : 1));
            else {
              var n4 = e14.indexOf(":");
              if (-1 === n4) h2(e14, "", e14);
              else {
                var u4 = e14.slice(0, n4), a4 = " " === e14[n4 + 1] ? 2 : 1;
                h2(u4, e14.slice(n4 + a4), e14);
              }
            }
          }
          function h2(e14, n4, r4) {
            switch (e14) {
              case "event":
                d2 = n4;
                break;
              case "data":
                f2 = "".concat(f2).concat(n4, "\n");
                break;
              case "id":
                t3 = n4.includes("\0") ? void 0 : n4;
                break;
              case "retry":
                /^\d+$/.test(n4) ? o2(parseInt(n4, 10)) : a3(new ir('Invalid `retry` value: "'.concat(n4, '"'), { type: "invalid-retry", value: n4, line: r4 }));
                break;
              default:
                a3(new ir('Unknown field "'.concat(e14.length > 20 ? "".concat(e14.slice(0, 20), "\u2026") : e14, '"'), { type: "unknown-field", field: e14, value: n4, line: r4 }));
            }
          }
          return { feed: function(e14) {
            var t4, n4 = l2 ? e14.replace(/^\xEF\xBB\xBF/, "") : e14, r4 = (function(e15) {
              for (var t5 = [], n5 = "", r5 = 0; r5 < e15.length; ) {
                var u5 = e15.indexOf("\r", r5), a5 = e15.indexOf("\n", r5), i4 = -1;
                if (-1 !== u5 && -1 !== a5 ? i4 = Math.min(u5, a5) : -1 !== u5 ? i4 = u5 === e15.length - 1 ? -1 : u5 : -1 !== a5 && (i4 = a5), -1 === i4) {
                  n5 = e15.slice(r5);
                  break;
                }
                var o4 = e15.slice(r5, i4);
                t5.push(o4), "\r" === e15[(r5 = i4 + 1) - 1] && "\n" === e15[r5] && r5++;
              }
              return [t5, n5];
            })("".concat(c2).concat(n4)), u4 = bn(r4, 2), a4 = u4[0], i3 = u4[1], o3 = fn(a4);
            try {
              for (o3.s(); !(t4 = o3.n()).done; ) p2(t4.value);
            } catch (e15) {
              o3.e(e15);
            } finally {
              o3.f();
            }
            c2 = i3, l2 = false;
          }, reset: function() {
            c2 && (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).consume && p2(c2), l2 = true, t3 = void 0, f2 = "", d2 = "", c2 = "";
          } };
        })({ onEvent: function(t3) {
          e12.enqueue(t3);
        }, onError: function(t3) {
          "terminate" === r2 ? e12.error(t3) : "function" == typeof r2 && r2(t3);
        }, onRetry: u2, onComment: a2 });
      }, transform: function(e12) {
        t2.feed(e12);
      } }]);
    }
    return vn(e11, Sn(TransformStream)), ln(e11);
  })();
  function cr(e11, t2, n2) {
    var r2;
    function u2(n3, r3) {
      var u3, a3, o2;
      for (var s2 in Object.defineProperty(n3, "_zod", { value: null !== (u3 = n3._zod) && void 0 !== u3 ? u3 : {}, enumerable: false }), null !== (a3 = (o2 = n3._zod).traits) && void 0 !== a3 || (o2.traits = /* @__PURE__ */ new Set()), n3._zod.traits.add(e11), t2(n3, r3), i2.prototype) s2 in n3 || Object.defineProperty(n3, s2, { value: i2.prototype[s2].bind(n3) });
      n3._zod.constr = i2, n3._zod.def = r3;
    }
    var a2 = (function(e12) {
      function t3() {
        return on(this, t3), an(this, t3, arguments);
      }
      return vn(t3, e12), ln(t3);
    })(null !== (r2 = null == n2 ? void 0 : n2.Parent) && void 0 !== r2 ? r2 : Object);
    function i2(e12) {
      var t3, r3, i3 = null != n2 && n2.Parent ? new a2() : this;
      u2(i3, e12), null !== (t3 = (r3 = i3._zod).deferred) && void 0 !== t3 || (r3.deferred = []);
      var o2, s2 = fn(i3._zod.deferred);
      try {
        for (s2.s(); !(o2 = s2.n()).done; ) (0, o2.value)();
      } catch (e13) {
        s2.e(e13);
      } finally {
        s2.f();
      }
      return i3;
    }
    return Object.defineProperty(a2, "name", { value: e11 }), Object.defineProperty(i2, "init", { value: u2 }), Object.defineProperty(i2, Symbol.hasInstance, { value: function(t3) {
      var r3;
      return !!(null != n2 && n2.Parent && t3 instanceof n2.Parent) || (null == t3 || null === (r3 = t3._zod) || void 0 === r3 || null === (r3 = r3.traits) || void 0 === r3 ? void 0 : r3.has(e11));
    } }), Object.defineProperty(i2, "name", { value: e11 }), i2;
  }
  var lr = (function() {
    function e11() {
      return on(this, e11), an(this, e11, ["Encountered Promise during synchronous parse. Use .parseAsync() instead."]);
    }
    return vn(e11, Sn(Error)), ln(e11);
  })();
  var fr = (function() {
    function e11(t2) {
      var n2;
      return on(this, e11), (n2 = an(this, e11, ["Encountered unidirectional transform during encode: ".concat(t2)])).name = "ZodEncodeError", n2;
    }
    return vn(e11, Sn(Error)), ln(e11);
  })();
  var dr = {};
  function pr(e11) {
    return dr;
  }
  function hr(e11) {
    var t2 = Object.values(e11).filter(function(e12) {
      return "number" == typeof e12;
    });
    return Object.entries(e11).filter(function(e12) {
      var n2 = bn(e12, 2), r2 = n2[0];
      return n2[1], -1 === t2.indexOf(+r2);
    }).map(function(e12) {
      var t3 = bn(e12, 2);
      return t3[0], t3[1];
    });
  }
  function vr(e11, t2) {
    return "bigint" == typeof t2 ? t2.toString() : t2;
  }
  function mr(e11) {
    return { get value() {
      var t2 = e11();
      return Object.defineProperty(this, "value", { value: t2 }), t2;
    } };
  }
  function Dr(e11) {
    return null == e11;
  }
  function yr(e11) {
    var t2 = e11.startsWith("^") ? 1 : 0, n2 = e11.endsWith("$") ? e11.length - 1 : e11.length;
    return e11.slice(t2, n2);
  }
  var gr = Symbol("evaluating");
  function Fr(e11, t2, n2) {
    var r2 = void 0;
    Object.defineProperty(e11, t2, { get: function() {
      if (r2 !== gr) return void 0 === r2 && (r2 = gr, r2 = n2()), r2;
    }, set: function(n3) {
      Object.defineProperty(e11, t2, { value: n3 });
    }, configurable: true });
  }
  function Er(e11, t2, n2) {
    Object.defineProperty(e11, t2, { value: n2, writable: true, enumerable: true, configurable: true });
  }
  function _r() {
    for (var e11 = {}, t2 = arguments.length, n2 = new Array(t2), r2 = 0; r2 < t2; r2++) n2[r2] = arguments[r2];
    for (var u2 = 0, a2 = n2; u2 < a2.length; u2++) {
      var i2 = a2[u2], o2 = Object.getOwnPropertyDescriptors(i2);
      Object.assign(e11, o2);
    }
    return Object.defineProperties({}, e11);
  }
  function br(e11) {
    return JSON.stringify(e11);
  }
  var Cr = "captureStackTrace" in Error ? Error.captureStackTrace : function() {
  };
  function kr(e11) {
    return "object" === An(e11) && null !== e11 && !Array.isArray(e11);
  }
  var Ar = mr(function() {
    var e11;
    if ("undefined" != typeof navigator && null !== (e11 = navigator) && void 0 !== e11 && null !== (e11 = e11.userAgent) && void 0 !== e11 && e11.includes("Cloudflare")) return false;
    try {
      return new Function(""), true;
    } catch (e12) {
      return false;
    }
  });
  function wr(e11) {
    if (false === kr(e11)) return false;
    var t2 = e11.constructor;
    if (void 0 === t2) return true;
    var n2 = t2.prototype;
    return false !== kr(n2) && false !== Object.prototype.hasOwnProperty.call(n2, "isPrototypeOf");
  }
  function Sr(e11) {
    return wr(e11) ? yn({}, e11) : Array.isArray(e11) ? Cn(e11) : e11;
  }
  var xr = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
  function Or(e11) {
    return e11.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function Br(e11, t2, n2) {
    var r2 = new e11._zod.constr(null != t2 ? t2 : e11._zod.def);
    return (!t2 || null != n2 && n2.parent) && (r2._zod.parent = e11), r2;
  }
  function Ir(e11) {
    var t2 = e11;
    if (!t2) return {};
    if ("string" == typeof t2) return { error: function() {
      return t2;
    } };
    if (void 0 !== (null == t2 ? void 0 : t2.message)) {
      if (void 0 !== (null == t2 ? void 0 : t2.error)) throw new Error("Cannot specify both `message` and `error` params");
      t2.error = t2.message;
    }
    return delete t2.message, "string" == typeof t2.error ? yn(yn({}, t2), {}, { error: function() {
      return t2.error;
    } }) : t2;
  }
  var Tr = { safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], int32: [-2147483648, 2147483647], uint32: [0, 4294967295], float32: [-34028234663852886e22, 34028234663852886e22], float64: [-Number.MAX_VALUE, Number.MAX_VALUE] };
  function Pr(e11) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    if (true === e11.aborted) return true;
    for (var n2 = t2; n2 < e11.issues.length; n2++) {
      var r2;
      if (true !== (null === (r2 = e11.issues[n2]) || void 0 === r2 ? void 0 : r2.continue)) return true;
    }
    return false;
  }
  function jr(e11, t2) {
    return t2.map(function(t3) {
      var n2, r2;
      return null !== (n2 = (r2 = t3).path) && void 0 !== n2 || (r2.path = []), t3.path.unshift(e11), t3;
    });
  }
  function Nr(e11) {
    return "string" == typeof e11 ? e11 : null == e11 ? void 0 : e11.message;
  }
  function zr(e11, t2, n2) {
    var r2, u2 = yn(yn({}, e11), {}, { path: null !== (r2 = e11.path) && void 0 !== r2 ? r2 : [] });
    if (!e11.message) {
      var a2, i2, o2, s2, c2, l2, f2, d2, p2, h2 = null !== (a2 = null !== (i2 = null !== (o2 = null !== (s2 = Nr(null === (c2 = e11.inst) || void 0 === c2 || null === (c2 = c2._zod.def) || void 0 === c2 || null === (l2 = c2.error) || void 0 === l2 ? void 0 : l2.call(c2, e11))) && void 0 !== s2 ? s2 : Nr(null == t2 || null === (f2 = t2.error) || void 0 === f2 ? void 0 : f2.call(t2, e11))) && void 0 !== o2 ? o2 : Nr(null === (d2 = n2.customError) || void 0 === d2 ? void 0 : d2.call(n2, e11))) && void 0 !== i2 ? i2 : Nr(null === (p2 = n2.localeError) || void 0 === p2 ? void 0 : p2.call(n2, e11))) && void 0 !== a2 ? a2 : "Invalid input";
      u2.message = h2;
    }
    return delete u2.inst, delete u2.continue, null != t2 && t2.reportInput || delete u2.input, u2;
  }
  function Rr(e11) {
    return e11 instanceof Set ? "set" : e11 instanceof Map ? "map" : e11 instanceof File ? "file" : "unknown";
  }
  function Mr(e11) {
    return Array.isArray(e11) ? "array" : "string" == typeof e11 ? "string" : "unknown";
  }
  function Zr() {
    for (var e11 = arguments.length, t2 = new Array(e11), n2 = 0; n2 < e11; n2++) t2[n2] = arguments[n2];
    var r2 = t2[0], u2 = t2[1], a2 = t2[2];
    return "string" == typeof r2 ? { message: r2, code: "custom", input: u2, inst: a2 } : yn({}, r2);
  }
  var Lr = function(e11, t2) {
    e11.name = "$ZodError", Object.defineProperty(e11, "_zod", { value: e11._zod, enumerable: false }), Object.defineProperty(e11, "issues", { value: t2, enumerable: false }), e11.message = JSON.stringify(t2, vr, 2), Object.defineProperty(e11, "toString", { value: function() {
      return e11.message;
    }, enumerable: false });
  };
  var $r = cr("$ZodError", Lr);
  var qr = cr("$ZodError", Lr, { Parent: Error });
  var Ur = function(e11) {
    return function(t2, n2, r2, u2) {
      var a2 = r2 ? Object.assign(r2, { async: false }) : { async: false }, i2 = t2._zod.run({ value: n2, issues: [] }, a2);
      if (i2 instanceof Promise) throw new lr();
      if (i2.issues.length) {
        var o2, s2 = new (null !== (o2 = null == u2 ? void 0 : u2.Err) && void 0 !== o2 ? o2 : e11)(i2.issues.map(function(e12) {
          return zr(e12, a2, pr());
        }));
        throw Cr(s2, null == u2 ? void 0 : u2.callee), s2;
      }
      return i2.value;
    };
  };
  var Hr = function(e11) {
    return (function() {
      var t2 = un(Fn().m(function t3(n2, r2, u2, a2) {
        var i2, o2, s2, c2;
        return Fn().w(function(t4) {
          for (; ; ) switch (t4.n) {
            case 0:
              if (i2 = u2 ? Object.assign(u2, { async: true }) : { async: true }, !((o2 = n2._zod.run({ value: r2, issues: [] }, i2)) instanceof Promise)) {
                t4.n = 2;
                break;
              }
              return t4.n = 1, o2;
            case 1:
              o2 = t4.v;
            case 2:
              if (!o2.issues.length) {
                t4.n = 3;
                break;
              }
              throw c2 = new (null !== (s2 = null == a2 ? void 0 : a2.Err) && void 0 !== s2 ? s2 : e11)(o2.issues.map(function(e12) {
                return zr(e12, i2, pr());
              })), Cr(c2, null == a2 ? void 0 : a2.callee), c2;
            case 3:
              return t4.a(2, o2.value);
          }
        }, t3);
      }));
      return function(e12, n2, r2, u2) {
        return t2.apply(this, arguments);
      };
    })();
  };
  var Vr = function(e11) {
    return function(t2, n2, r2) {
      var u2 = r2 ? yn(yn({}, r2), {}, { async: false }) : { async: false }, a2 = t2._zod.run({ value: n2, issues: [] }, u2);
      if (a2 instanceof Promise) throw new lr();
      return a2.issues.length ? { success: false, error: new (null != e11 ? e11 : $r)(a2.issues.map(function(e12) {
        return zr(e12, u2, pr());
      })) } : { success: true, data: a2.value };
    };
  };
  var Wr = Vr(qr);
  var Kr = function(e11) {
    return (function() {
      var t2 = un(Fn().m(function t3(n2, r2, u2) {
        var a2, i2;
        return Fn().w(function(t4) {
          for (; ; ) switch (t4.n) {
            case 0:
              if (a2 = u2 ? Object.assign(u2, { async: true }) : { async: true }, !((i2 = n2._zod.run({ value: r2, issues: [] }, a2)) instanceof Promise)) {
                t4.n = 2;
                break;
              }
              return t4.n = 1, i2;
            case 1:
              i2 = t4.v;
            case 2:
              return t4.a(2, i2.issues.length ? { success: false, error: new e11(i2.issues.map(function(e12) {
                return zr(e12, a2, pr());
              })) } : { success: true, data: i2.value });
          }
        }, t3);
      }));
      return function(e12, n2, r2) {
        return t2.apply(this, arguments);
      };
    })();
  };
  var Jr = Kr(qr);
  var Qr = /^[cC][^\s-]{8,}$/;
  var Gr = /^[0-9a-z]+$/;
  var Yr = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
  var Xr = /^[0-9a-vA-V]{20}$/;
  var eu = /^[A-Za-z0-9]{27}$/;
  var tu = /^[a-zA-Z0-9_-]{21}$/;
  var nu = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
  var ru = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
  var uu = function(e11) {
    return e11 ? new RegExp("^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-".concat(e11, "[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$")) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
  };
  var au = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
  var iu = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
  var ou = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
  var su = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
  var cu = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
  var lu = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
  var fu = /^[A-Za-z0-9_-]*$/;
  var du = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/;
  var pu = /^\+(?:[0-9]){6,14}[0-9]$/;
  var hu = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
  var vu = new RegExp("^".concat(hu, "$"));
  function mu(e11) {
    var t2 = "(?:[01]\\d|2[0-3]):[0-5]\\d";
    return "number" == typeof e11.precision ? -1 === e11.precision ? "".concat(t2) : 0 === e11.precision ? "".concat(t2, ":[0-5]\\d") : "".concat(t2, ":[0-5]\\d\\.\\d{").concat(e11.precision, "}") : "".concat(t2, "(?::[0-5]\\d(?:\\.\\d+)?)?");
  }
  var Du = /^-?\d+$/;
  var yu = /^-?\d+(?:\.\d+)?/;
  var gu = /^(?:true|false)$/i;
  var Fu = /^null$/i;
  var Eu = /^[^A-Z]*$/;
  var _u = /^[^a-z]*$/;
  var bu = cr("$ZodCheck", function(e11, t2) {
    var n2, r2, u2;
    null !== (n2 = e11._zod) && void 0 !== n2 || (e11._zod = {}), e11._zod.def = t2, null !== (r2 = (u2 = e11._zod).onattach) && void 0 !== r2 || (u2.onattach = []);
  });
  var Cu = { number: "number", bigint: "bigint", object: "date" };
  var ku = cr("$ZodCheckLessThan", function(e11, t2) {
    bu.init(e11, t2);
    var n2 = Cu[An(t2.value)];
    e11._zod.onattach.push(function(e12) {
      var n3, r2 = e12._zod.bag, u2 = null !== (n3 = t2.inclusive ? r2.maximum : r2.exclusiveMaximum) && void 0 !== n3 ? n3 : Number.POSITIVE_INFINITY;
      t2.value < u2 && (t2.inclusive ? r2.maximum = t2.value : r2.exclusiveMaximum = t2.value);
    }), e11._zod.check = function(r2) {
      (t2.inclusive ? r2.value <= t2.value : r2.value < t2.value) || r2.issues.push({ origin: n2, code: "too_big", maximum: t2.value, input: r2.value, inclusive: t2.inclusive, inst: e11, continue: !t2.abort });
    };
  });
  var Au = cr("$ZodCheckGreaterThan", function(e11, t2) {
    bu.init(e11, t2);
    var n2 = Cu[An(t2.value)];
    e11._zod.onattach.push(function(e12) {
      var n3, r2 = e12._zod.bag, u2 = null !== (n3 = t2.inclusive ? r2.minimum : r2.exclusiveMinimum) && void 0 !== n3 ? n3 : Number.NEGATIVE_INFINITY;
      t2.value > u2 && (t2.inclusive ? r2.minimum = t2.value : r2.exclusiveMinimum = t2.value);
    }), e11._zod.check = function(r2) {
      (t2.inclusive ? r2.value >= t2.value : r2.value > t2.value) || r2.issues.push({ origin: n2, code: "too_small", minimum: t2.value, input: r2.value, inclusive: t2.inclusive, inst: e11, continue: !t2.abort });
    };
  });
  var wu = cr("$ZodCheckMultipleOf", function(e11, t2) {
    bu.init(e11, t2), e11._zod.onattach.push(function(e12) {
      var n2, r2;
      null !== (n2 = (r2 = e12._zod.bag).multipleOf) && void 0 !== n2 || (r2.multipleOf = t2.value);
    }), e11._zod.check = function(n2) {
      if (An(n2.value) !== An(t2.value)) throw new Error("Cannot mix number and bigint in multiple_of check.");
      ("bigint" == typeof n2.value ? n2.value % t2.value === BigInt(0) : 0 === (function(e12, t3) {
        var n3 = (e12.toString().split(".")[1] || "").length, r2 = t3.toString(), u2 = (r2.split(".")[1] || "").length;
        if (0 === u2 && /\d?e-\d?/.test(r2)) {
          var a2 = r2.match(/\d?e-(\d?)/);
          null != a2 && a2[1] && (u2 = Number.parseInt(a2[1]));
        }
        var i2 = n3 > u2 ? n3 : u2;
        return Number.parseInt(e12.toFixed(i2).replace(".", "")) % Number.parseInt(t3.toFixed(i2).replace(".", "")) / Math.pow(10, i2);
      })(n2.value, t2.value)) || n2.issues.push({ origin: An(n2.value), code: "not_multiple_of", divisor: t2.value, input: n2.value, inst: e11, continue: !t2.abort });
    };
  });
  var Su = cr("$ZodCheckNumberFormat", function(e11, t2) {
    var n2;
    bu.init(e11, t2), t2.format = t2.format || "float64";
    var r2 = null === (n2 = t2.format) || void 0 === n2 ? void 0 : n2.includes("int"), u2 = r2 ? "int" : "number", a2 = bn(Tr[t2.format], 2), i2 = a2[0], o2 = a2[1];
    e11._zod.onattach.push(function(e12) {
      var n3 = e12._zod.bag;
      n3.format = t2.format, n3.minimum = i2, n3.maximum = o2, r2 && (n3.pattern = Du);
    }), e11._zod.check = function(n3) {
      var a3 = n3.value;
      if (r2) {
        if (!Number.isInteger(a3)) return void n3.issues.push({ expected: u2, format: t2.format, code: "invalid_type", continue: false, input: a3, inst: e11 });
        if (!Number.isSafeInteger(a3)) return void (a3 > 0 ? n3.issues.push({ input: a3, code: "too_big", maximum: Number.MAX_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: e11, origin: u2, continue: !t2.abort }) : n3.issues.push({ input: a3, code: "too_small", minimum: Number.MIN_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: e11, origin: u2, continue: !t2.abort }));
      }
      a3 < i2 && n3.issues.push({ origin: "number", input: a3, code: "too_small", minimum: i2, inclusive: true, inst: e11, continue: !t2.abort }), a3 > o2 && n3.issues.push({ origin: "number", input: a3, code: "too_big", maximum: o2, inst: e11 });
    };
  });
  var xu = cr("$ZodCheckMaxSize", function(e11, t2) {
    var n2, r2;
    bu.init(e11, t2), null !== (n2 = (r2 = e11._zod.def).when) && void 0 !== n2 || (r2.when = function(e12) {
      var t3 = e12.value;
      return !Dr(t3) && void 0 !== t3.size;
    }), e11._zod.onattach.push(function(e12) {
      var n3, r3 = null !== (n3 = e12._zod.bag.maximum) && void 0 !== n3 ? n3 : Number.POSITIVE_INFINITY;
      t2.maximum < r3 && (e12._zod.bag.maximum = t2.maximum);
    }), e11._zod.check = function(n3) {
      var r3 = n3.value;
      r3.size <= t2.maximum || n3.issues.push({ origin: Rr(r3), code: "too_big", maximum: t2.maximum, inclusive: true, input: r3, inst: e11, continue: !t2.abort });
    };
  });
  var Ou = cr("$ZodCheckMinSize", function(e11, t2) {
    var n2, r2;
    bu.init(e11, t2), null !== (n2 = (r2 = e11._zod.def).when) && void 0 !== n2 || (r2.when = function(e12) {
      var t3 = e12.value;
      return !Dr(t3) && void 0 !== t3.size;
    }), e11._zod.onattach.push(function(e12) {
      var n3, r3 = null !== (n3 = e12._zod.bag.minimum) && void 0 !== n3 ? n3 : Number.NEGATIVE_INFINITY;
      t2.minimum > r3 && (e12._zod.bag.minimum = t2.minimum);
    }), e11._zod.check = function(n3) {
      var r3 = n3.value;
      r3.size >= t2.minimum || n3.issues.push({ origin: Rr(r3), code: "too_small", minimum: t2.minimum, inclusive: true, input: r3, inst: e11, continue: !t2.abort });
    };
  });
  var Bu = cr("$ZodCheckSizeEquals", function(e11, t2) {
    var n2, r2;
    bu.init(e11, t2), null !== (n2 = (r2 = e11._zod.def).when) && void 0 !== n2 || (r2.when = function(e12) {
      var t3 = e12.value;
      return !Dr(t3) && void 0 !== t3.size;
    }), e11._zod.onattach.push(function(e12) {
      var n3 = e12._zod.bag;
      n3.minimum = t2.size, n3.maximum = t2.size, n3.size = t2.size;
    }), e11._zod.check = function(n3) {
      var r3 = n3.value, u2 = r3.size;
      if (u2 !== t2.size) {
        var a2 = u2 > t2.size;
        n3.issues.push(yn(yn({ origin: Rr(r3) }, a2 ? { code: "too_big", maximum: t2.size } : { code: "too_small", minimum: t2.size }), {}, { inclusive: true, exact: true, input: n3.value, inst: e11, continue: !t2.abort }));
      }
    };
  });
  var Iu = cr("$ZodCheckMaxLength", function(e11, t2) {
    var n2, r2;
    bu.init(e11, t2), null !== (n2 = (r2 = e11._zod.def).when) && void 0 !== n2 || (r2.when = function(e12) {
      var t3 = e12.value;
      return !Dr(t3) && void 0 !== t3.length;
    }), e11._zod.onattach.push(function(e12) {
      var n3, r3 = null !== (n3 = e12._zod.bag.maximum) && void 0 !== n3 ? n3 : Number.POSITIVE_INFINITY;
      t2.maximum < r3 && (e12._zod.bag.maximum = t2.maximum);
    }), e11._zod.check = function(n3) {
      var r3 = n3.value;
      if (!(r3.length <= t2.maximum)) {
        var u2 = Mr(r3);
        n3.issues.push({ origin: u2, code: "too_big", maximum: t2.maximum, inclusive: true, input: r3, inst: e11, continue: !t2.abort });
      }
    };
  });
  var Tu = cr("$ZodCheckMinLength", function(e11, t2) {
    var n2, r2;
    bu.init(e11, t2), null !== (n2 = (r2 = e11._zod.def).when) && void 0 !== n2 || (r2.when = function(e12) {
      var t3 = e12.value;
      return !Dr(t3) && void 0 !== t3.length;
    }), e11._zod.onattach.push(function(e12) {
      var n3, r3 = null !== (n3 = e12._zod.bag.minimum) && void 0 !== n3 ? n3 : Number.NEGATIVE_INFINITY;
      t2.minimum > r3 && (e12._zod.bag.minimum = t2.minimum);
    }), e11._zod.check = function(n3) {
      var r3 = n3.value;
      if (!(r3.length >= t2.minimum)) {
        var u2 = Mr(r3);
        n3.issues.push({ origin: u2, code: "too_small", minimum: t2.minimum, inclusive: true, input: r3, inst: e11, continue: !t2.abort });
      }
    };
  });
  var Pu = cr("$ZodCheckLengthEquals", function(e11, t2) {
    var n2, r2;
    bu.init(e11, t2), null !== (n2 = (r2 = e11._zod.def).when) && void 0 !== n2 || (r2.when = function(e12) {
      var t3 = e12.value;
      return !Dr(t3) && void 0 !== t3.length;
    }), e11._zod.onattach.push(function(e12) {
      var n3 = e12._zod.bag;
      n3.minimum = t2.length, n3.maximum = t2.length, n3.length = t2.length;
    }), e11._zod.check = function(n3) {
      var r3 = n3.value, u2 = r3.length;
      if (u2 !== t2.length) {
        var a2 = Mr(r3), i2 = u2 > t2.length;
        n3.issues.push(yn(yn({ origin: a2 }, i2 ? { code: "too_big", maximum: t2.length } : { code: "too_small", minimum: t2.length }), {}, { inclusive: true, exact: true, input: n3.value, inst: e11, continue: !t2.abort }));
      }
    };
  });
  var ju = cr("$ZodCheckStringFormat", function(e11, t2) {
    var n2, r2, u2, a2;
    bu.init(e11, t2), e11._zod.onattach.push(function(e12) {
      var n3, r3 = e12._zod.bag;
      r3.format = t2.format, t2.pattern && (null !== (n3 = r3.patterns) && void 0 !== n3 || (r3.patterns = /* @__PURE__ */ new Set()), r3.patterns.add(t2.pattern));
    }), t2.pattern ? null !== (n2 = (u2 = e11._zod).check) && void 0 !== n2 || (u2.check = function(n3) {
      t2.pattern.lastIndex = 0, t2.pattern.test(n3.value) || n3.issues.push(yn(yn({ origin: "string", code: "invalid_format", format: t2.format, input: n3.value }, t2.pattern ? { pattern: t2.pattern.toString() } : {}), {}, { inst: e11, continue: !t2.abort }));
    }) : null !== (r2 = (a2 = e11._zod).check) && void 0 !== r2 || (a2.check = function() {
    });
  });
  var Nu = cr("$ZodCheckRegex", function(e11, t2) {
    ju.init(e11, t2), e11._zod.check = function(n2) {
      t2.pattern.lastIndex = 0, t2.pattern.test(n2.value) || n2.issues.push({ origin: "string", code: "invalid_format", format: "regex", input: n2.value, pattern: t2.pattern.toString(), inst: e11, continue: !t2.abort });
    };
  });
  var zu = cr("$ZodCheckLowerCase", function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = Eu), ju.init(e11, t2);
  });
  var Ru = cr("$ZodCheckUpperCase", function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = _u), ju.init(e11, t2);
  });
  var Mu = cr("$ZodCheckIncludes", function(e11, t2) {
    bu.init(e11, t2);
    var n2 = Or(t2.includes), r2 = new RegExp("number" == typeof t2.position ? "^.{".concat(t2.position, "}").concat(n2) : n2);
    t2.pattern = r2, e11._zod.onattach.push(function(e12) {
      var t3, n3 = e12._zod.bag;
      null !== (t3 = n3.patterns) && void 0 !== t3 || (n3.patterns = /* @__PURE__ */ new Set()), n3.patterns.add(r2);
    }), e11._zod.check = function(n3) {
      n3.value.includes(t2.includes, t2.position) || n3.issues.push({ origin: "string", code: "invalid_format", format: "includes", includes: t2.includes, input: n3.value, inst: e11, continue: !t2.abort });
    };
  });
  var Zu = cr("$ZodCheckStartsWith", function(e11, t2) {
    var n2;
    bu.init(e11, t2);
    var r2 = new RegExp("^".concat(Or(t2.prefix), ".*"));
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = r2), e11._zod.onattach.push(function(e12) {
      var t3, n3 = e12._zod.bag;
      null !== (t3 = n3.patterns) && void 0 !== t3 || (n3.patterns = /* @__PURE__ */ new Set()), n3.patterns.add(r2);
    }), e11._zod.check = function(n3) {
      n3.value.startsWith(t2.prefix) || n3.issues.push({ origin: "string", code: "invalid_format", format: "starts_with", prefix: t2.prefix, input: n3.value, inst: e11, continue: !t2.abort });
    };
  });
  var Lu = cr("$ZodCheckEndsWith", function(e11, t2) {
    var n2;
    bu.init(e11, t2);
    var r2 = new RegExp(".*".concat(Or(t2.suffix), "$"));
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = r2), e11._zod.onattach.push(function(e12) {
      var t3, n3 = e12._zod.bag;
      null !== (t3 = n3.patterns) && void 0 !== t3 || (n3.patterns = /* @__PURE__ */ new Set()), n3.patterns.add(r2);
    }), e11._zod.check = function(n3) {
      n3.value.endsWith(t2.suffix) || n3.issues.push({ origin: "string", code: "invalid_format", format: "ends_with", suffix: t2.suffix, input: n3.value, inst: e11, continue: !t2.abort });
    };
  });
  function $u(e11, t2, n2) {
    var r2;
    e11.issues.length && (r2 = t2.issues).push.apply(r2, Cn(jr(n2, e11.issues)));
  }
  var qu = cr("$ZodCheckProperty", function(e11, t2) {
    bu.init(e11, t2), e11._zod.check = function(e12) {
      var n2 = t2.schema._zod.run({ value: e12.value[t2.property], issues: [] }, {});
      if (n2 instanceof Promise) return n2.then(function(n3) {
        return $u(n3, e12, t2.property);
      });
      $u(n2, e12, t2.property);
    };
  });
  var Uu = cr("$ZodCheckMimeType", function(e11, t2) {
    bu.init(e11, t2);
    var n2 = new Set(t2.mime);
    e11._zod.onattach.push(function(e12) {
      e12._zod.bag.mime = t2.mime;
    }), e11._zod.check = function(r2) {
      n2.has(r2.value.type) || r2.issues.push({ code: "invalid_value", values: t2.mime, input: r2.value.type, inst: e11, continue: !t2.abort });
    };
  });
  var Hu = cr("$ZodCheckOverwrite", function(e11, t2) {
    bu.init(e11, t2), e11._zod.check = function(e12) {
      e12.value = t2.tx(e12.value);
    };
  });
  var Vu = ln(function e2() {
    var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    on(this, e2), this.content = [], this.indent = 0, this && (this.args = t2);
  }, [{ key: "indented", value: function(e11) {
    this.indent += 1, e11(this), this.indent -= 1;
  } }, { key: "write", value: function(e11) {
    var t2 = this;
    if ("function" == typeof e11) return e11(this, { execution: "sync" }), void e11(this, { execution: "async" });
    var n2, r2 = e11.split("\n").filter(function(e12) {
      return e12;
    }), u2 = Math.min.apply(Math, Cn(r2.map(function(e12) {
      return e12.length - e12.trimStart().length;
    }))), a2 = fn(r2.map(function(e12) {
      return e12.slice(u2);
    }).map(function(e12) {
      return " ".repeat(2 * t2.indent) + e12;
    }));
    try {
      for (a2.s(); !(n2 = a2.n()).done; ) {
        var i2 = n2.value;
        this.content.push(i2);
      }
    } catch (e12) {
      a2.e(e12);
    } finally {
      a2.f();
    }
  } }, { key: "compile", value: function() {
    var e11, t2 = Function, n2 = null == this ? void 0 : this.args, r2 = Cn((null !== (e11 = null == this ? void 0 : this.content) && void 0 !== e11 ? e11 : [""]).map(function(e12) {
      return "  ".concat(e12);
    }));
    return sn(t2, Cn(n2).concat([r2.join("\n")]));
  } }]);
  var Wu = { major: 4, minor: 1, patch: 11 };
  var Ku = cr("$ZodType", function(e11, t2) {
    var n2, r2;
    null != e11 || (e11 = {}), e11._zod.def = t2, e11._zod.bag = e11._zod.bag || {}, e11._zod.version = Wu;
    var u2 = Cn(null !== (n2 = e11._zod.def.checks) && void 0 !== n2 ? n2 : []);
    e11._zod.traits.has("$ZodCheck") && u2.unshift(e11);
    var a2, i2 = fn(u2);
    try {
      for (i2.s(); !(a2 = i2.n()).done; ) {
        var o2, s2 = fn(a2.value._zod.onattach);
        try {
          for (s2.s(); !(o2 = s2.n()).done; ) (0, o2.value)(e11);
        } catch (e12) {
          s2.e(e12);
        } finally {
          s2.f();
        }
      }
    } catch (e12) {
      i2.e(e12);
    } finally {
      i2.f();
    }
    if (0 === u2.length) {
      var c2, l2;
      null !== (c2 = (r2 = e11._zod).deferred) && void 0 !== c2 || (r2.deferred = []), null === (l2 = e11._zod.deferred) || void 0 === l2 || l2.push(function() {
        e11._zod.run = e11._zod.parse;
      });
    } else {
      var f2 = function(e12, t3, n3) {
        var r3, u3, a3 = Pr(e12), i3 = fn(t3);
        try {
          var o3 = function() {
            var t4 = u3.value;
            if (t4._zod.def.when) {
              if (!t4._zod.def.when(e12)) return 0;
            } else if (a3) return 0;
            var i4 = e12.issues.length, o4 = t4._zod.check(e12);
            if (o4 instanceof Promise && false === (null == n3 ? void 0 : n3.async)) throw new lr();
            if (r3 || o4 instanceof Promise) r3 = (null != r3 ? r3 : Promise.resolve()).then(un(Fn().m(function t5() {
              return Fn().w(function(t6) {
                for (; ; ) switch (t6.n) {
                  case 0:
                    return t6.n = 1, o4;
                  case 1:
                    if (e12.issues.length !== i4) {
                      t6.n = 2;
                      break;
                    }
                    return t6.a(2);
                  case 2:
                    a3 || (a3 = Pr(e12, i4));
                  case 3:
                    return t6.a(2);
                }
              }, t5);
            })));
            else {
              if (e12.issues.length === i4) return 0;
              a3 || (a3 = Pr(e12, i4));
            }
          };
          for (i3.s(); !(u3 = i3.n()).done; ) o3();
        } catch (e13) {
          i3.e(e13);
        } finally {
          i3.f();
        }
        return r3 ? r3.then(function() {
          return e12;
        }) : e12;
      }, d2 = function(t3, n3, r3) {
        if (Pr(t3)) return t3.aborted = true, t3;
        var a3 = f2(n3, u2, r3);
        if (a3 instanceof Promise) {
          if (false === r3.async) throw new lr();
          return a3.then(function(t4) {
            return e11._zod.parse(t4, r3);
          });
        }
        return e11._zod.parse(a3, r3);
      };
      e11._zod.run = function(t3, n3) {
        if (n3.skipChecks) return e11._zod.parse(t3, n3);
        if ("backward" === n3.direction) {
          var r3 = e11._zod.parse({ value: t3.value, issues: [] }, yn(yn({}, n3), {}, { skipChecks: true }));
          return r3 instanceof Promise ? r3.then(function(e12) {
            return d2(e12, t3, n3);
          }) : d2(r3, t3, n3);
        }
        var a3 = e11._zod.parse(t3, n3);
        if (a3 instanceof Promise) {
          if (false === n3.async) throw new lr();
          return a3.then(function(e12) {
            return f2(e12, u2, n3);
          });
        }
        return f2(a3, u2, n3);
      };
    }
    e11["~standard"] = { validate: function(t3) {
      try {
        var n3, r3 = Wr(e11, t3);
        return r3.success ? { value: r3.data } : { issues: null === (n3 = r3.error) || void 0 === n3 ? void 0 : n3.issues };
      } catch (n4) {
        return Jr(e11, t3).then(function(e12) {
          var t4;
          return e12.success ? { value: e12.data } : { issues: null === (t4 = e12.error) || void 0 === t4 ? void 0 : t4.issues };
        });
      }
    }, vendor: "zod", version: 1 };
  });
  var Ju = cr("$ZodString", function(e11, t2) {
    var n2, r2, u2;
    Ku.init(e11, t2), e11._zod.pattern = null !== (n2 = Cn(null !== (r2 = null == e11 || null === (u2 = e11._zod.bag) || void 0 === u2 ? void 0 : u2.patterns) && void 0 !== r2 ? r2 : []).pop()) && void 0 !== n2 ? n2 : (function(e12) {
      var t3, n3, r3 = e12 ? "[\\s\\S]{".concat(null !== (t3 = null == e12 ? void 0 : e12.minimum) && void 0 !== t3 ? t3 : 0, ",").concat(null !== (n3 = null == e12 ? void 0 : e12.maximum) && void 0 !== n3 ? n3 : "", "}") : "[\\s\\S]*";
      return new RegExp("^".concat(r3, "$"));
    })(e11._zod.bag), e11._zod.parse = function(n3, r3) {
      if (t2.coerce) try {
        n3.value = String(n3.value);
      } catch (r4) {
      }
      return "string" == typeof n3.value || n3.issues.push({ expected: "string", code: "invalid_type", input: n3.value, inst: e11 }), n3;
    };
  });
  var Qu = cr("$ZodStringFormat", function(e11, t2) {
    ju.init(e11, t2), Ju.init(e11, t2);
  });
  var Gu = cr("$ZodGUID", function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = ru), Qu.init(e11, t2);
  });
  var Yu = cr("$ZodUUID", function(e11, t2) {
    var n2;
    if (t2.version) {
      var r2, u2 = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[t2.version];
      if (void 0 === u2) throw new Error('Invalid UUID version: "'.concat(t2.version, '"'));
      null !== (r2 = t2.pattern) && void 0 !== r2 || (t2.pattern = uu(u2));
    } else null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = uu());
    Qu.init(e11, t2);
  });
  var Xu = cr("$ZodEmail", function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = au), Qu.init(e11, t2);
  });
  var ea = cr("$ZodURL", function(e11, t2) {
    Qu.init(e11, t2), e11._zod.check = function(n2) {
      try {
        var r2 = n2.value.trim(), u2 = new URL(r2);
        return t2.hostname && (t2.hostname.lastIndex = 0, t2.hostname.test(u2.hostname) || n2.issues.push({ code: "invalid_format", format: "url", note: "Invalid hostname", pattern: du.source, input: n2.value, inst: e11, continue: !t2.abort })), t2.protocol && (t2.protocol.lastIndex = 0, t2.protocol.test(u2.protocol.endsWith(":") ? u2.protocol.slice(0, -1) : u2.protocol) || n2.issues.push({ code: "invalid_format", format: "url", note: "Invalid protocol", pattern: t2.protocol.source, input: n2.value, inst: e11, continue: !t2.abort })), void (t2.normalize ? n2.value = u2.href : n2.value = r2);
      } catch (r3) {
        n2.issues.push({ code: "invalid_format", format: "url", input: n2.value, inst: e11, continue: !t2.abort });
      }
    };
  });
  var ta = cr("$ZodEmoji", function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Qu.init(e11, t2);
  });
  var na = cr("$ZodNanoID", function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = tu), Qu.init(e11, t2);
  });
  var ra = cr("$ZodCUID", function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = Qr), Qu.init(e11, t2);
  });
  var ua = cr("$ZodCUID2", function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = Gr), Qu.init(e11, t2);
  });
  var aa = cr("$ZodULID", function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = Yr), Qu.init(e11, t2);
  });
  var ia = cr("$ZodXID", function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = Xr), Qu.init(e11, t2);
  });
  var oa = cr("$ZodKSUID", function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = eu), Qu.init(e11, t2);
  });
  var sa = cr("$ZodISODateTime", function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = (function(e12) {
      var t3 = mu({ precision: e12.precision }), n3 = ["Z"];
      e12.local && n3.push(""), e12.offset && n3.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
      var r2 = "".concat(t3, "(?:").concat(n3.join("|"), ")");
      return new RegExp("^".concat(hu, "T(?:").concat(r2, ")$"));
    })(t2)), Qu.init(e11, t2);
  });
  var ca = cr("$ZodISODate", function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = vu), Qu.init(e11, t2);
  });
  var la = cr("$ZodISOTime", function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = new RegExp("^".concat(mu(t2), "$"))), Qu.init(e11, t2);
  });
  var fa = cr("$ZodISODuration", function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = nu), Qu.init(e11, t2);
  });
  var da = cr("$ZodIPv4", function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = iu), Qu.init(e11, t2), e11._zod.onattach.push(function(e12) {
      e12._zod.bag.format = "ipv4";
    });
  });
  var pa = cr("$ZodIPv6", function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = ou), Qu.init(e11, t2), e11._zod.onattach.push(function(e12) {
      e12._zod.bag.format = "ipv6";
    }), e11._zod.check = function(n3) {
      try {
        new URL("http://[".concat(n3.value, "]"));
      } catch (r2) {
        n3.issues.push({ code: "invalid_format", format: "ipv6", input: n3.value, inst: e11, continue: !t2.abort });
      }
    };
  });
  var ha = cr("$ZodCIDRv4", function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = su), Qu.init(e11, t2);
  });
  var va = cr("$ZodCIDRv6", function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = cu), Qu.init(e11, t2), e11._zod.check = function(n3) {
      var r2 = n3.value.split("/");
      try {
        if (2 !== r2.length) throw new Error();
        var u2 = bn(r2, 2), a2 = u2[0], i2 = u2[1];
        if (!i2) throw new Error();
        var o2 = Number(i2);
        if ("".concat(o2) !== i2) throw new Error();
        if (o2 < 0 || o2 > 128) throw new Error();
        new URL("http://[".concat(a2, "]"));
      } catch (r3) {
        n3.issues.push({ code: "invalid_format", format: "cidrv6", input: n3.value, inst: e11, continue: !t2.abort });
      }
    };
  });
  function ma(e11) {
    if ("" === e11) return true;
    if (e11.length % 4 != 0) return false;
    try {
      return atob(e11), true;
    } catch (e12) {
      return false;
    }
  }
  var Da = cr("$ZodBase64", function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = lu), Qu.init(e11, t2), e11._zod.onattach.push(function(e12) {
      e12._zod.bag.contentEncoding = "base64";
    }), e11._zod.check = function(n3) {
      ma(n3.value) || n3.issues.push({ code: "invalid_format", format: "base64", input: n3.value, inst: e11, continue: !t2.abort });
    };
  });
  var ya = cr("$ZodBase64URL", function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = fu), Qu.init(e11, t2), e11._zod.onattach.push(function(e12) {
      e12._zod.bag.contentEncoding = "base64url";
    }), e11._zod.check = function(n3) {
      (function(e12) {
        if (!fu.test(e12)) return false;
        var t3 = e12.replace(/[-_]/g, function(e13) {
          return "-" === e13 ? "+" : "/";
        });
        return ma(t3.padEnd(4 * Math.ceil(t3.length / 4), "="));
      })(n3.value) || n3.issues.push({ code: "invalid_format", format: "base64url", input: n3.value, inst: e11, continue: !t2.abort });
    };
  });
  var ga = cr("$ZodE164", function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = pu), Qu.init(e11, t2);
  });
  var Fa = cr("$ZodJWT", function(e11, t2) {
    Qu.init(e11, t2), e11._zod.check = function(n2) {
      (function(e12) {
        var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        try {
          var n3 = e12.split(".");
          if (3 !== n3.length) return false;
          var r2 = bn(n3, 1)[0];
          if (!r2) return false;
          var u2 = JSON.parse(atob(r2));
          return !("typ" in u2 && "JWT" !== (null == u2 ? void 0 : u2.typ) || !u2.alg || t3 && (!("alg" in u2) || u2.alg !== t3));
        } catch (e13) {
          return false;
        }
      })(n2.value, t2.alg) || n2.issues.push({ code: "invalid_format", format: "jwt", input: n2.value, inst: e11, continue: !t2.abort });
    };
  });
  var Ea = cr("$ZodNumber", function(e11, t2) {
    var n2;
    Ku.init(e11, t2), e11._zod.pattern = null !== (n2 = e11._zod.bag.pattern) && void 0 !== n2 ? n2 : yu, e11._zod.parse = function(n3, r2) {
      if (t2.coerce) try {
        n3.value = Number(n3.value);
      } catch (e12) {
      }
      var u2 = n3.value;
      if ("number" == typeof u2 && !Number.isNaN(u2) && Number.isFinite(u2)) return n3;
      var a2 = "number" == typeof u2 ? Number.isNaN(u2) ? "NaN" : Number.isFinite(u2) ? void 0 : "Infinity" : void 0;
      return n3.issues.push(yn({ expected: "number", code: "invalid_type", input: u2, inst: e11 }, a2 ? { received: a2 } : {})), n3;
    };
  });
  var _a = cr("$ZodNumber", function(e11, t2) {
    Su.init(e11, t2), Ea.init(e11, t2);
  });
  var ba = cr("$ZodBoolean", function(e11, t2) {
    Ku.init(e11, t2), e11._zod.pattern = gu, e11._zod.parse = function(n2, r2) {
      if (t2.coerce) try {
        n2.value = Boolean(n2.value);
      } catch (e12) {
      }
      var u2 = n2.value;
      return "boolean" == typeof u2 || n2.issues.push({ expected: "boolean", code: "invalid_type", input: u2, inst: e11 }), n2;
    };
  });
  var Ca = cr("$ZodNull", function(e11, t2) {
    Ku.init(e11, t2), e11._zod.pattern = Fu, e11._zod.values = /* @__PURE__ */ new Set([null]), e11._zod.parse = function(t3, n2) {
      var r2 = t3.value;
      return null === r2 || t3.issues.push({ expected: "null", code: "invalid_type", input: r2, inst: e11 }), t3;
    };
  });
  var ka = cr("$ZodUnknown", function(e11, t2) {
    Ku.init(e11, t2), e11._zod.parse = function(e12) {
      return e12;
    };
  });
  var Aa = cr("$ZodNever", function(e11, t2) {
    Ku.init(e11, t2), e11._zod.parse = function(t3, n2) {
      return t3.issues.push({ expected: "never", code: "invalid_type", input: t3.value, inst: e11 }), t3;
    };
  });
  function wa(e11, t2, n2) {
    var r2;
    e11.issues.length && (r2 = t2.issues).push.apply(r2, Cn(jr(n2, e11.issues))), t2.value[n2] = e11.value;
  }
  var Sa = cr("$ZodArray", function(e11, t2) {
    Ku.init(e11, t2), e11._zod.parse = function(n2, r2) {
      var u2 = n2.value;
      if (!Array.isArray(u2)) return n2.issues.push({ expected: "array", code: "invalid_type", input: u2, inst: e11 }), n2;
      n2.value = Array(u2.length);
      for (var a2 = [], i2 = function(e12) {
        var i3 = u2[e12], o3 = t2.element._zod.run({ value: i3, issues: [] }, r2);
        o3 instanceof Promise ? a2.push(o3.then(function(t3) {
          return wa(t3, n2, e12);
        })) : wa(o3, n2, e12);
      }, o2 = 0; o2 < u2.length; o2++) i2(o2);
      return a2.length ? Promise.all(a2).then(function() {
        return n2;
      }) : n2;
    };
  });
  function xa(e11, t2, n2, r2) {
    var u2;
    e11.issues.length && (u2 = t2.issues).push.apply(u2, Cn(jr(n2, e11.issues))), void 0 === e11.value ? n2 in r2 && (t2.value[n2] = void 0) : t2.value[n2] = e11.value;
  }
  function Oa(e11) {
    for (var t2 = Object.keys(e11.shape), n2 = 0, r2 = t2; n2 < r2.length; n2++) {
      var u2, a2 = r2[n2];
      if (null === (u2 = e11.shape) || void 0 === u2 || null === (u2 = u2[a2]) || void 0 === u2 || null === (u2 = u2._zod) || void 0 === u2 || null === (u2 = u2.traits) || void 0 === u2 || !u2.has("$ZodType")) throw new Error('Invalid element at key "'.concat(a2, '": expected a Zod schema'));
    }
    var i2, o2 = (i2 = e11.shape, Object.keys(i2).filter(function(e12) {
      return "optional" === i2[e12]._zod.optin && "optional" === i2[e12]._zod.optout;
    }));
    return yn(yn({}, e11), {}, { keys: t2, keySet: new Set(t2), numKeys: t2.length, optionalKeys: new Set(o2) });
  }
  function Ba(e11, t2, n2, r2, u2, a2) {
    for (var i2 = [], o2 = u2.keySet, s2 = u2.catchall._zod, c2 = s2.def.type, l2 = function() {
      var u3 = d2[f2];
      if (o2.has(u3)) return 0;
      if ("never" === c2) return i2.push(u3), 0;
      var a3 = s2.run({ value: t2[u3], issues: [] }, r2);
      a3 instanceof Promise ? e11.push(a3.then(function(e12) {
        return xa(e12, n2, u3, t2);
      })) : xa(a3, n2, u3, t2);
    }, f2 = 0, d2 = Object.keys(t2); f2 < d2.length; f2++) l2();
    return i2.length && n2.issues.push({ code: "unrecognized_keys", keys: i2, input: t2, inst: a2 }), e11.length ? Promise.all(e11).then(function() {
      return n2;
    }) : n2;
  }
  var Ia = cr("$ZodObject", function(e11, t2) {
    Ku.init(e11, t2);
    var n2 = Object.getOwnPropertyDescriptor(t2, "shape");
    if (null == n2 || !n2.get) {
      var r2 = t2.shape;
      Object.defineProperty(t2, "shape", { get: function() {
        var e12 = yn({}, r2);
        return Object.defineProperty(t2, "shape", { value: e12 }), e12;
      } });
    }
    var u2 = mr(function() {
      return Oa(t2);
    });
    Fr(e11._zod, "propValues", function() {
      var e12 = t2.shape, n3 = {};
      for (var r3 in e12) {
        var u3 = e12[r3]._zod;
        if (u3.values) {
          var a3;
          null !== (a3 = n3[r3]) && void 0 !== a3 || (n3[r3] = /* @__PURE__ */ new Set());
          var i3, o3 = fn(u3.values);
          try {
            for (o3.s(); !(i3 = o3.n()).done; ) {
              var s2 = i3.value;
              n3[r3].add(s2);
            }
          } catch (e13) {
            o3.e(e13);
          } finally {
            o3.f();
          }
        }
      }
      return n3;
    });
    var a2, i2 = kr, o2 = t2.catchall;
    e11._zod.parse = function(t3, n3) {
      null != a2 || (a2 = u2.value);
      var r3 = t3.value;
      if (!i2(r3)) return t3.issues.push({ expected: "object", code: "invalid_type", input: r3, inst: e11 }), t3;
      t3.value = {};
      var s2, c2 = [], l2 = a2.shape, f2 = fn(a2.keys);
      try {
        var d2 = function() {
          var e12 = s2.value, u3 = l2[e12]._zod.run({ value: r3[e12], issues: [] }, n3);
          u3 instanceof Promise ? c2.push(u3.then(function(n4) {
            return xa(n4, t3, e12, r3);
          })) : xa(u3, t3, e12, r3);
        };
        for (f2.s(); !(s2 = f2.n()).done; ) d2();
      } catch (e12) {
        f2.e(e12);
      } finally {
        f2.f();
      }
      return o2 ? Ba(c2, r3, t3, n3, u2.value, e11) : c2.length ? Promise.all(c2).then(function() {
        return t3;
      }) : t3;
    };
  });
  var Ta = cr("$ZodObjectJIT", function(e11, t2) {
    Ia.init(e11, t2);
    var n2, r2, u2 = e11._zod.parse, a2 = mr(function() {
      return Oa(t2);
    }), i2 = kr, o2 = !dr.jitless, s2 = o2 && Ar.value, c2 = t2.catchall;
    e11._zod.parse = function(l2, f2) {
      null != r2 || (r2 = a2.value);
      var d2 = l2.value;
      return i2(d2) ? o2 && s2 && false === (null == f2 ? void 0 : f2.async) && true !== f2.jitless ? (n2 || (n2 = (function(e12) {
        var t3 = new Vu(["shape", "payload", "ctx"]), n3 = a2.value, r3 = function(e13) {
          var t4 = br(e13);
          return "shape[".concat(t4, "]._zod.run({ value: input[").concat(t4, "], issues: [] }, ctx)");
        };
        t3.write("const input = payload.value;");
        var u3, i3 = /* @__PURE__ */ Object.create(null), o3 = 0, s3 = fn(n3.keys);
        try {
          for (s3.s(); !(u3 = s3.n()).done; ) i3[u3.value] = "key_".concat(o3++);
        } catch (e13) {
          s3.e(e13);
        } finally {
          s3.f();
        }
        t3.write("const newResult = {};");
        var c3, l3 = fn(n3.keys);
        try {
          for (l3.s(); !(c3 = l3.n()).done; ) {
            var f3 = c3.value, d3 = i3[f3], p2 = br(f3);
            t3.write("const ".concat(d3, " = ").concat(r3(f3), ";")), t3.write("\n        if (".concat(d3, ".issues.length) {\n          payload.issues = payload.issues.concat(").concat(d3, ".issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [").concat(p2, ", ...iss.path] : [").concat(p2, "]\n          })));\n        }\n        \n        \n        if (").concat(d3, ".value === undefined) {\n          if (").concat(p2, " in input) {\n            newResult[").concat(p2, "] = undefined;\n          }\n        } else {\n          newResult[").concat(p2, "] = ").concat(d3, ".value;\n        }\n        \n      "));
          }
        } catch (e13) {
          l3.e(e13);
        } finally {
          l3.f();
        }
        t3.write("payload.value = newResult;"), t3.write("return payload;");
        var h2 = t3.compile();
        return function(t4, n4) {
          return h2(e12, t4, n4);
        };
      })(t2.shape)), l2 = n2(l2, f2), c2 ? Ba([], d2, l2, f2, r2, e11) : l2) : u2(l2, f2) : (l2.issues.push({ expected: "object", code: "invalid_type", input: d2, inst: e11 }), l2);
    };
  });
  function Pa(e11, t2, n2, r2) {
    var u2, a2 = fn(e11);
    try {
      for (a2.s(); !(u2 = a2.n()).done; ) {
        var i2 = u2.value;
        if (0 === i2.issues.length) return t2.value = i2.value, t2;
      }
    } catch (e12) {
      a2.e(e12);
    } finally {
      a2.f();
    }
    var o2 = e11.filter(function(e12) {
      return !Pr(e12);
    });
    return 1 === o2.length ? (t2.value = o2[0].value, o2[0]) : (t2.issues.push({ code: "invalid_union", input: t2.value, inst: n2, errors: e11.map(function(e12) {
      return e12.issues.map(function(e13) {
        return zr(e13, r2, pr());
      });
    }) }), t2);
  }
  var ja = cr("$ZodUnion", function(e11, t2) {
    Ku.init(e11, t2), Fr(e11._zod, "optin", function() {
      return t2.options.some(function(e12) {
        return "optional" === e12._zod.optin;
      }) ? "optional" : void 0;
    }), Fr(e11._zod, "optout", function() {
      return t2.options.some(function(e12) {
        return "optional" === e12._zod.optout;
      }) ? "optional" : void 0;
    }), Fr(e11._zod, "values", function() {
      if (t2.options.every(function(e12) {
        return e12._zod.values;
      })) return new Set(t2.options.flatMap(function(e12) {
        return Array.from(e12._zod.values);
      }));
    }), Fr(e11._zod, "pattern", function() {
      if (t2.options.every(function(e13) {
        return e13._zod.pattern;
      })) {
        var e12 = t2.options.map(function(e13) {
          return e13._zod.pattern;
        });
        return new RegExp("^(".concat(e12.map(function(e13) {
          return yr(e13.source);
        }).join("|"), ")$"));
      }
    });
    var n2 = 1 === t2.options.length, r2 = t2.options[0]._zod.run;
    e11._zod.parse = function(u2, a2) {
      if (n2) return r2(u2, a2);
      var i2, o2 = false, s2 = [], c2 = fn(t2.options);
      try {
        for (c2.s(); !(i2 = c2.n()).done; ) {
          var l2 = i2.value._zod.run({ value: u2.value, issues: [] }, a2);
          if (l2 instanceof Promise) s2.push(l2), o2 = true;
          else {
            if (0 === l2.issues.length) return l2;
            s2.push(l2);
          }
        }
      } catch (e12) {
        c2.e(e12);
      } finally {
        c2.f();
      }
      return o2 ? Promise.all(s2).then(function(t3) {
        return Pa(t3, u2, e11, a2);
      }) : Pa(s2, u2, e11, a2);
    };
  });
  var Na = cr("$ZodDiscriminatedUnion", function(e11, t2) {
    ja.init(e11, t2);
    var n2 = e11._zod.parse;
    Fr(e11._zod, "propValues", function() {
      var e12, n3 = {}, r3 = fn(t2.options);
      try {
        for (r3.s(); !(e12 = r3.n()).done; ) {
          var u2 = e12.value, a2 = u2._zod.propValues;
          if (!a2 || 0 === Object.keys(a2).length) throw new Error('Invalid discriminated union option at index "'.concat(t2.options.indexOf(u2), '"'));
          for (var i2 = 0, o2 = Object.entries(a2); i2 < o2.length; i2++) {
            var s2 = bn(o2[i2], 2), c2 = s2[0], l2 = s2[1];
            n3[c2] || (n3[c2] = /* @__PURE__ */ new Set());
            var f2, d2 = fn(l2);
            try {
              for (d2.s(); !(f2 = d2.n()).done; ) {
                var p2 = f2.value;
                n3[c2].add(p2);
              }
            } catch (e13) {
              d2.e(e13);
            } finally {
              d2.f();
            }
          }
        }
      } catch (e13) {
        r3.e(e13);
      } finally {
        r3.f();
      }
      return n3;
    });
    var r2 = mr(function() {
      var e12, n3 = t2.options, r3 = /* @__PURE__ */ new Map(), u2 = fn(n3);
      try {
        for (u2.s(); !(e12 = u2.n()).done; ) {
          var a2, i2 = e12.value, o2 = null === (a2 = i2._zod.propValues) || void 0 === a2 ? void 0 : a2[t2.discriminator];
          if (!o2 || 0 === o2.size) throw new Error('Invalid discriminated union option at index "'.concat(t2.options.indexOf(i2), '"'));
          var s2, c2 = fn(o2);
          try {
            for (c2.s(); !(s2 = c2.n()).done; ) {
              var l2 = s2.value;
              if (r3.has(l2)) throw new Error('Duplicate discriminator value "'.concat(String(l2), '"'));
              r3.set(l2, i2);
            }
          } catch (e13) {
            c2.e(e13);
          } finally {
            c2.f();
          }
        }
      } catch (e13) {
        u2.e(e13);
      } finally {
        u2.f();
      }
      return r3;
    });
    e11._zod.parse = function(u2, a2) {
      var i2 = u2.value;
      if (!kr(i2)) return u2.issues.push({ code: "invalid_type", expected: "object", input: i2, inst: e11 }), u2;
      var o2 = r2.value.get(null == i2 ? void 0 : i2[t2.discriminator]);
      return o2 ? o2._zod.run(u2, a2) : t2.unionFallback ? n2(u2, a2) : (u2.issues.push({ code: "invalid_union", errors: [], note: "No matching discriminator", discriminator: t2.discriminator, input: i2, path: [t2.discriminator], inst: e11 }), u2);
    };
  });
  var za = cr("$ZodIntersection", function(e11, t2) {
    Ku.init(e11, t2), e11._zod.parse = function(e12, n2) {
      var r2 = e12.value, u2 = t2.left._zod.run({ value: r2, issues: [] }, n2), a2 = t2.right._zod.run({ value: r2, issues: [] }, n2);
      return u2 instanceof Promise || a2 instanceof Promise ? Promise.all([u2, a2]).then(function(t3) {
        var n3 = bn(t3, 2), r3 = n3[0], u3 = n3[1];
        return Ma(e12, r3, u3);
      }) : Ma(e12, u2, a2);
    };
  });
  function Ra(e11, t2) {
    if (e11 === t2) return { valid: true, data: e11 };
    if (e11 instanceof Date && t2 instanceof Date && +e11 === +t2) return { valid: true, data: e11 };
    if (wr(e11) && wr(t2)) {
      var n2, r2 = Object.keys(t2), u2 = Object.keys(e11).filter(function(e12) {
        return -1 !== r2.indexOf(e12);
      }), a2 = yn(yn({}, e11), t2), i2 = fn(u2);
      try {
        for (i2.s(); !(n2 = i2.n()).done; ) {
          var o2 = n2.value, s2 = Ra(e11[o2], t2[o2]);
          if (!s2.valid) return { valid: false, mergeErrorPath: [o2].concat(Cn(s2.mergeErrorPath)) };
          a2[o2] = s2.data;
        }
      } catch (e12) {
        i2.e(e12);
      } finally {
        i2.f();
      }
      return { valid: true, data: a2 };
    }
    if (Array.isArray(e11) && Array.isArray(t2)) {
      if (e11.length !== t2.length) return { valid: false, mergeErrorPath: [] };
      for (var c2 = [], l2 = 0; l2 < e11.length; l2++) {
        var f2 = Ra(e11[l2], t2[l2]);
        if (!f2.valid) return { valid: false, mergeErrorPath: [l2].concat(Cn(f2.mergeErrorPath)) };
        c2.push(f2.data);
      }
      return { valid: true, data: c2 };
    }
    return { valid: false, mergeErrorPath: [] };
  }
  function Ma(e11, t2, n2) {
    var r2, u2;
    if (t2.issues.length && (r2 = e11.issues).push.apply(r2, Cn(t2.issues)), n2.issues.length && (u2 = e11.issues).push.apply(u2, Cn(n2.issues)), Pr(e11)) return e11;
    var a2 = Ra(t2.value, n2.value);
    if (!a2.valid) throw new Error("Unmergable intersection. Error path: " + "".concat(JSON.stringify(a2.mergeErrorPath)));
    return e11.value = a2.data, e11;
  }
  var Za = cr("$ZodRecord", function(e11, t2) {
    Ku.init(e11, t2), e11._zod.parse = function(n2, r2) {
      var u2 = n2.value;
      if (!wr(u2)) return n2.issues.push({ expected: "record", code: "invalid_type", input: u2, inst: e11 }), n2;
      var a2 = [];
      if (t2.keyType._zod.values) {
        var i2 = t2.keyType._zod.values;
        n2.value = {};
        var o2, s2, c2 = fn(i2);
        try {
          var l2 = function() {
            var e12 = o2.value;
            if ("string" == typeof e12 || "number" == typeof e12 || "symbol" === An(e12)) {
              var i3, s3 = t2.valueType._zod.run({ value: u2[e12], issues: [] }, r2);
              if (s3 instanceof Promise) a2.push(s3.then(function(t3) {
                var r3;
                t3.issues.length && (r3 = n2.issues).push.apply(r3, Cn(jr(e12, t3.issues))), n2.value[e12] = t3.value;
              }));
              else s3.issues.length && (i3 = n2.issues).push.apply(i3, Cn(jr(e12, s3.issues))), n2.value[e12] = s3.value;
            }
          };
          for (c2.s(); !(o2 = c2.n()).done; ) l2();
        } catch (e12) {
          c2.e(e12);
        } finally {
          c2.f();
        }
        for (var f2 in u2) i2.has(f2) || (s2 = null != s2 ? s2 : []).push(f2);
        s2 && s2.length > 0 && n2.issues.push({ code: "unrecognized_keys", input: u2, inst: e11, keys: s2 });
      } else {
        n2.value = {};
        var d2, p2 = fn(Reflect.ownKeys(u2));
        try {
          var h2 = function() {
            var i3 = d2.value;
            if ("__proto__" === i3) return 0;
            var o3 = t2.keyType._zod.run({ value: i3, issues: [] }, r2);
            if (o3 instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
            if (o3.issues.length) return n2.issues.push({ code: "invalid_key", origin: "record", issues: o3.issues.map(function(e12) {
              return zr(e12, r2, pr());
            }), input: i3, path: [i3], inst: e11 }), n2.value[o3.value] = o3.value, 0;
            var s3, c3 = t2.valueType._zod.run({ value: u2[i3], issues: [] }, r2);
            c3 instanceof Promise ? a2.push(c3.then(function(e12) {
              var t3;
              e12.issues.length && (t3 = n2.issues).push.apply(t3, Cn(jr(i3, e12.issues))), n2.value[o3.value] = e12.value;
            })) : (c3.issues.length && (s3 = n2.issues).push.apply(s3, Cn(jr(i3, c3.issues))), n2.value[o3.value] = c3.value);
          };
          for (p2.s(); !(d2 = p2.n()).done; ) h2();
        } catch (e12) {
          p2.e(e12);
        } finally {
          p2.f();
        }
      }
      return a2.length ? Promise.all(a2).then(function() {
        return n2;
      }) : n2;
    };
  });
  var La = cr("$ZodEnum", function(e11, t2) {
    Ku.init(e11, t2);
    var n2 = hr(t2.entries), r2 = new Set(n2);
    e11._zod.values = r2, e11._zod.pattern = new RegExp("^(".concat(n2.filter(function(e12) {
      return xr.has(An(e12));
    }).map(function(e12) {
      return "string" == typeof e12 ? Or(e12) : e12.toString();
    }).join("|"), ")$")), e11._zod.parse = function(t3, u2) {
      var a2 = t3.value;
      return r2.has(a2) || t3.issues.push({ code: "invalid_value", values: n2, input: a2, inst: e11 }), t3;
    };
  });
  var $a = cr("$ZodLiteral", function(e11, t2) {
    if (Ku.init(e11, t2), 0 === t2.values.length) throw new Error("Cannot create literal schema with no valid values");
    e11._zod.values = new Set(t2.values), e11._zod.pattern = new RegExp("^(".concat(t2.values.map(function(e12) {
      return "string" == typeof e12 ? Or(e12) : e12 ? Or(e12.toString()) : String(e12);
    }).join("|"), ")$")), e11._zod.parse = function(n2, r2) {
      var u2 = n2.value;
      return e11._zod.values.has(u2) || n2.issues.push({ code: "invalid_value", values: t2.values, input: u2, inst: e11 }), n2;
    };
  });
  var qa = cr("$ZodTransform", function(e11, t2) {
    Ku.init(e11, t2), e11._zod.parse = function(n2, r2) {
      if ("backward" === r2.direction) throw new fr(e11.constructor.name);
      var u2 = t2.transform(n2.value, n2);
      if (r2.async) return (u2 instanceof Promise ? u2 : Promise.resolve(u2)).then(function(e12) {
        return n2.value = e12, n2;
      });
      if (u2 instanceof Promise) throw new lr();
      return n2.value = u2, n2;
    };
  });
  function Ua(e11, t2) {
    return e11.issues.length && void 0 === t2 ? { issues: [], value: void 0 } : e11;
  }
  var Ha = cr("$ZodOptional", function(e11, t2) {
    Ku.init(e11, t2), e11._zod.optin = "optional", e11._zod.optout = "optional", Fr(e11._zod, "values", function() {
      return t2.innerType._zod.values ? new Set([].concat(Cn(t2.innerType._zod.values), [void 0])) : void 0;
    }), Fr(e11._zod, "pattern", function() {
      var e12 = t2.innerType._zod.pattern;
      return e12 ? new RegExp("^(".concat(yr(e12.source), ")?$")) : void 0;
    }), e11._zod.parse = function(e12, n2) {
      if ("optional" === t2.innerType._zod.optin) {
        var r2 = t2.innerType._zod.run(e12, n2);
        return r2 instanceof Promise ? r2.then(function(t3) {
          return Ua(t3, e12.value);
        }) : Ua(r2, e12.value);
      }
      return void 0 === e12.value ? e12 : t2.innerType._zod.run(e12, n2);
    };
  });
  var Va = cr("$ZodNullable", function(e11, t2) {
    Ku.init(e11, t2), Fr(e11._zod, "optin", function() {
      return t2.innerType._zod.optin;
    }), Fr(e11._zod, "optout", function() {
      return t2.innerType._zod.optout;
    }), Fr(e11._zod, "pattern", function() {
      var e12 = t2.innerType._zod.pattern;
      return e12 ? new RegExp("^(".concat(yr(e12.source), "|null)$")) : void 0;
    }), Fr(e11._zod, "values", function() {
      return t2.innerType._zod.values ? new Set([].concat(Cn(t2.innerType._zod.values), [null])) : void 0;
    }), e11._zod.parse = function(e12, n2) {
      return null === e12.value ? e12 : t2.innerType._zod.run(e12, n2);
    };
  });
  var Wa = cr("$ZodDefault", function(e11, t2) {
    Ku.init(e11, t2), e11._zod.optin = "optional", Fr(e11._zod, "values", function() {
      return t2.innerType._zod.values;
    }), e11._zod.parse = function(e12, n2) {
      if ("backward" === n2.direction) return t2.innerType._zod.run(e12, n2);
      if (void 0 === e12.value) return e12.value = t2.defaultValue, e12;
      var r2 = t2.innerType._zod.run(e12, n2);
      return r2 instanceof Promise ? r2.then(function(e13) {
        return Ka(e13, t2);
      }) : Ka(r2, t2);
    };
  });
  function Ka(e11, t2) {
    return void 0 === e11.value && (e11.value = t2.defaultValue), e11;
  }
  var Ja = cr("$ZodPrefault", function(e11, t2) {
    Ku.init(e11, t2), e11._zod.optin = "optional", Fr(e11._zod, "values", function() {
      return t2.innerType._zod.values;
    }), e11._zod.parse = function(e12, n2) {
      return "backward" === n2.direction || void 0 === e12.value && (e12.value = t2.defaultValue), t2.innerType._zod.run(e12, n2);
    };
  });
  var Qa = cr("$ZodNonOptional", function(e11, t2) {
    Ku.init(e11, t2), Fr(e11._zod, "values", function() {
      var e12 = t2.innerType._zod.values;
      return e12 ? new Set(Cn(e12).filter(function(e13) {
        return void 0 !== e13;
      })) : void 0;
    }), e11._zod.parse = function(n2, r2) {
      var u2 = t2.innerType._zod.run(n2, r2);
      return u2 instanceof Promise ? u2.then(function(t3) {
        return Ga(t3, e11);
      }) : Ga(u2, e11);
    };
  });
  function Ga(e11, t2) {
    return e11.issues.length || void 0 !== e11.value || e11.issues.push({ code: "invalid_type", expected: "nonoptional", input: e11.value, inst: t2 }), e11;
  }
  var Ya = cr("$ZodCatch", function(e11, t2) {
    Ku.init(e11, t2), Fr(e11._zod, "optin", function() {
      return t2.innerType._zod.optin;
    }), Fr(e11._zod, "optout", function() {
      return t2.innerType._zod.optout;
    }), Fr(e11._zod, "values", function() {
      return t2.innerType._zod.values;
    }), e11._zod.parse = function(e12, n2) {
      if ("backward" === n2.direction) return t2.innerType._zod.run(e12, n2);
      var r2 = t2.innerType._zod.run(e12, n2);
      return r2 instanceof Promise ? r2.then(function(r3) {
        return e12.value = r3.value, r3.issues.length && (e12.value = t2.catchValue(yn(yn({}, e12), {}, { error: { issues: r3.issues.map(function(e13) {
          return zr(e13, n2, pr());
        }) }, input: e12.value })), e12.issues = []), e12;
      }) : (e12.value = r2.value, r2.issues.length && (e12.value = t2.catchValue(yn(yn({}, e12), {}, { error: { issues: r2.issues.map(function(e13) {
        return zr(e13, n2, pr());
      }) }, input: e12.value })), e12.issues = []), e12);
    };
  });
  var Xa = cr("$ZodPipe", function(e11, t2) {
    Ku.init(e11, t2), Fr(e11._zod, "values", function() {
      return t2.in._zod.values;
    }), Fr(e11._zod, "optin", function() {
      return t2.in._zod.optin;
    }), Fr(e11._zod, "optout", function() {
      return t2.out._zod.optout;
    }), Fr(e11._zod, "propValues", function() {
      return t2.in._zod.propValues;
    }), e11._zod.parse = function(e12, n2) {
      if ("backward" === n2.direction) {
        var r2 = t2.out._zod.run(e12, n2);
        return r2 instanceof Promise ? r2.then(function(e13) {
          return ei(e13, t2.in, n2);
        }) : ei(r2, t2.in, n2);
      }
      var u2 = t2.in._zod.run(e12, n2);
      return u2 instanceof Promise ? u2.then(function(e13) {
        return ei(e13, t2.out, n2);
      }) : ei(u2, t2.out, n2);
    };
  });
  function ei(e11, t2, n2) {
    return e11.issues.length ? (e11.aborted = true, e11) : t2._zod.run({ value: e11.value, issues: e11.issues }, n2);
  }
  var ti = cr("$ZodReadonly", function(e11, t2) {
    Ku.init(e11, t2), Fr(e11._zod, "propValues", function() {
      return t2.innerType._zod.propValues;
    }), Fr(e11._zod, "values", function() {
      return t2.innerType._zod.values;
    }), Fr(e11._zod, "optin", function() {
      return t2.innerType._zod.optin;
    }), Fr(e11._zod, "optout", function() {
      return t2.innerType._zod.optout;
    }), e11._zod.parse = function(e12, n2) {
      if ("backward" === n2.direction) return t2.innerType._zod.run(e12, n2);
      var r2 = t2.innerType._zod.run(e12, n2);
      return r2 instanceof Promise ? r2.then(ni) : ni(r2);
    };
  });
  function ni(e11) {
    return e11.value = Object.freeze(e11.value), e11;
  }
  var ri = cr("$ZodLazy", function(e11, t2) {
    Ku.init(e11, t2), Fr(e11._zod, "innerType", function() {
      return t2.getter();
    }), Fr(e11._zod, "pattern", function() {
      return e11._zod.innerType._zod.pattern;
    }), Fr(e11._zod, "propValues", function() {
      return e11._zod.innerType._zod.propValues;
    }), Fr(e11._zod, "optin", function() {
      var t3;
      return null !== (t3 = e11._zod.innerType._zod.optin) && void 0 !== t3 ? t3 : void 0;
    }), Fr(e11._zod, "optout", function() {
      var t3;
      return null !== (t3 = e11._zod.innerType._zod.optout) && void 0 !== t3 ? t3 : void 0;
    }), e11._zod.parse = function(t3, n2) {
      return e11._zod.innerType._zod.run(t3, n2);
    };
  });
  var ui = cr("$ZodCustom", function(e11, t2) {
    bu.init(e11, t2), Ku.init(e11, t2), e11._zod.parse = function(e12, t3) {
      return e12;
    }, e11._zod.check = function(n2) {
      var r2 = n2.value, u2 = t2.fn(r2);
      if (u2 instanceof Promise) return u2.then(function(t3) {
        return ai(t3, n2, r2, e11);
      });
      ai(u2, n2, r2, e11);
    };
  });
  function ai(e11, t2, n2, r2) {
    if (!e11) {
      var u2, a2 = { code: "custom", input: n2, inst: r2, path: Cn(null !== (u2 = r2._zod.def.path) && void 0 !== u2 ? u2 : []), continue: !r2._zod.def.abort };
      r2._zod.def.params && (a2.params = r2._zod.def.params), t2.issues.push(Zr(a2));
    }
  }
  var ii = ln(function e3() {
    on(this, e3), this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }, [{ key: "add", value: function(e11) {
    var t2 = arguments.length <= 1 ? void 0 : arguments[1];
    if (this._map.set(e11, t2), t2 && "object" === An(t2) && "id" in t2) {
      if (this._idmap.has(t2.id)) throw new Error("ID ".concat(t2.id, " already exists in the registry"));
      this._idmap.set(t2.id, e11);
    }
    return this;
  } }, { key: "clear", value: function() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  } }, { key: "remove", value: function(e11) {
    var t2 = this._map.get(e11);
    return t2 && "object" === An(t2) && "id" in t2 && this._idmap.delete(t2.id), this._map.delete(e11), this;
  } }, { key: "get", value: function(e11) {
    var t2 = e11._zod.parent;
    if (t2) {
      var n2, r2 = yn({}, null !== (n2 = this.get(t2)) && void 0 !== n2 ? n2 : {});
      delete r2.id;
      var u2 = yn(yn({}, r2), this._map.get(e11));
      return Object.keys(u2).length ? u2 : void 0;
    }
    return this._map.get(e11);
  } }, { key: "has", value: function(e11) {
    return this._map.has(e11);
  } }]);
  var oi = new ii();
  function si(e11, t2) {
    return new e11(yn({ type: "string", format: "guid", check: "string_format", abort: false }, Ir(t2)));
  }
  function ci(e11, t2) {
    return new e11(yn({ type: "string", format: "base64", check: "string_format", abort: false }, Ir(t2)));
  }
  function li(e11, t2) {
    return new ku(yn(yn({ check: "less_than" }, Ir(t2)), {}, { value: e11, inclusive: false }));
  }
  function fi(e11, t2) {
    return new ku(yn(yn({ check: "less_than" }, Ir(t2)), {}, { value: e11, inclusive: true }));
  }
  function di(e11, t2) {
    return new Au(yn(yn({ check: "greater_than" }, Ir(t2)), {}, { value: e11, inclusive: false }));
  }
  function pi(e11, t2) {
    return new Au(yn(yn({ check: "greater_than" }, Ir(t2)), {}, { value: e11, inclusive: true }));
  }
  function hi(e11, t2) {
    return new wu(yn(yn({ check: "multiple_of" }, Ir(t2)), {}, { value: e11 }));
  }
  function vi(e11, t2) {
    return new Iu(yn(yn({ check: "max_length" }, Ir(t2)), {}, { maximum: e11 }));
  }
  function mi(e11, t2) {
    return new Tu(yn(yn({ check: "min_length" }, Ir(t2)), {}, { minimum: e11 }));
  }
  function Di(e11, t2) {
    return new Pu(yn(yn({ check: "length_equals" }, Ir(t2)), {}, { length: e11 }));
  }
  function yi(e11, t2) {
    return new Nu(yn(yn({ check: "string_format", format: "regex" }, Ir(t2)), {}, { pattern: e11 }));
  }
  function gi(e11) {
    return new zu(yn({ check: "string_format", format: "lowercase" }, Ir(e11)));
  }
  function Fi(e11) {
    return new Ru(yn({ check: "string_format", format: "uppercase" }, Ir(e11)));
  }
  function Ei(e11, t2) {
    return new Mu(yn(yn({ check: "string_format", format: "includes" }, Ir(t2)), {}, { includes: e11 }));
  }
  function _i(e11, t2) {
    return new Zu(yn(yn({ check: "string_format", format: "starts_with" }, Ir(t2)), {}, { prefix: e11 }));
  }
  function bi(e11, t2) {
    return new Lu(yn(yn({ check: "string_format", format: "ends_with" }, Ir(t2)), {}, { suffix: e11 }));
  }
  function Ci(e11) {
    return new Hu({ check: "overwrite", tx: e11 });
  }
  function ki(e11) {
    return Ci(function(t2) {
      return t2.normalize(e11);
    });
  }
  function Ai() {
    return Ci(function(e11) {
      return e11.trim();
    });
  }
  function wi() {
    return Ci(function(e11) {
      return e11.toLowerCase();
    });
  }
  function Si() {
    return Ci(function(e11) {
      return e11.toUpperCase();
    });
  }
  var xi = ln(function e4(t2) {
    var n2, r2, u2, a2, i2;
    on(this, e4), this.counter = 0, this.metadataRegistry = null !== (n2 = null == t2 ? void 0 : t2.metadata) && void 0 !== n2 ? n2 : oi, this.target = null !== (r2 = null == t2 ? void 0 : t2.target) && void 0 !== r2 ? r2 : "draft-2020-12", this.unrepresentable = null !== (u2 = null == t2 ? void 0 : t2.unrepresentable) && void 0 !== u2 ? u2 : "throw", this.override = null !== (a2 = null == t2 ? void 0 : t2.override) && void 0 !== a2 ? a2 : function() {
    }, this.io = null !== (i2 = null == t2 ? void 0 : t2.io) && void 0 !== i2 ? i2 : "output", this.seen = /* @__PURE__ */ new Map();
  }, [{ key: "process", value: function(e11) {
    var t2, n2, r2, u2, a2 = this, i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { path: [], schemaPath: [] }, o2 = e11._zod.def, s2 = this.seen.get(e11);
    if (s2) return s2.count++, i2.schemaPath.includes(e11) && (s2.cycle = i2.path), s2.schema;
    var c2 = { schema: {}, count: 1, cycle: void 0, path: i2.path };
    this.seen.set(e11, c2);
    var l2 = null === (t2 = (n2 = e11._zod).toJSONSchema) || void 0 === t2 ? void 0 : t2.call(n2);
    if (l2) c2.schema = l2;
    else {
      var f2 = yn(yn({}, i2), {}, { schemaPath: [].concat(Cn(i2.schemaPath), [e11]), path: i2.path }), d2 = e11._zod.parent;
      if (d2) c2.ref = d2, this.process(d2, f2), this.seen.get(d2).isParent = true;
      else {
        var p2 = c2.schema;
        switch (o2.type) {
          case "string":
            var h2 = p2;
            h2.type = "string";
            var v2, m2 = e11._zod.bag, D2 = m2.minimum, y2 = m2.maximum, g2 = m2.format, F2 = m2.patterns, E2 = m2.contentEncoding;
            if ("number" == typeof D2 && (h2.minLength = D2), "number" == typeof y2 && (h2.maxLength = y2), g2 && (h2.format = null !== (v2 = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" }[g2]) && void 0 !== v2 ? v2 : g2, "" === h2.format && delete h2.format), E2 && (h2.contentEncoding = E2), F2 && F2.size > 0) {
              var _2 = Cn(F2);
              1 === _2.length ? h2.pattern = _2[0].source : _2.length > 1 && (c2.schema.allOf = Cn(_2.map(function(e12) {
                return yn(yn({}, "draft-7" === a2.target || "draft-4" === a2.target || "openapi-3.0" === a2.target ? { type: "string" } : {}), {}, { pattern: e12.source });
              })));
            }
            break;
          case "number":
            var b2 = p2, C2 = e11._zod.bag, k2 = C2.minimum, A2 = C2.maximum, w2 = C2.format, S2 = C2.multipleOf, x2 = C2.exclusiveMaximum, O2 = C2.exclusiveMinimum;
            "string" == typeof w2 && w2.includes("int") ? b2.type = "integer" : b2.type = "number", "number" == typeof O2 && ("draft-4" === this.target || "openapi-3.0" === this.target ? (b2.minimum = O2, b2.exclusiveMinimum = true) : b2.exclusiveMinimum = O2), "number" == typeof k2 && (b2.minimum = k2, "number" == typeof O2 && "draft-4" !== this.target && (O2 >= k2 ? delete b2.minimum : delete b2.exclusiveMinimum)), "number" == typeof x2 && ("draft-4" === this.target || "openapi-3.0" === this.target ? (b2.maximum = x2, b2.exclusiveMaximum = true) : b2.exclusiveMaximum = x2), "number" == typeof A2 && (b2.maximum = A2, "number" == typeof x2 && "draft-4" !== this.target && (x2 <= A2 ? delete b2.maximum : delete b2.exclusiveMaximum)), "number" == typeof S2 && (b2.multipleOf = S2);
            break;
          case "boolean":
          case "success":
            p2.type = "boolean";
            break;
          case "bigint":
            if ("throw" === this.unrepresentable) throw new Error("BigInt cannot be represented in JSON Schema");
            break;
          case "symbol":
            if ("throw" === this.unrepresentable) throw new Error("Symbols cannot be represented in JSON Schema");
            break;
          case "null":
            "openapi-3.0" === this.target ? (p2.type = "string", p2.nullable = true, p2.enum = [null]) : p2.type = "null";
            break;
          case "any":
          case "unknown":
            break;
          case "undefined":
            if ("throw" === this.unrepresentable) throw new Error("Undefined cannot be represented in JSON Schema");
            break;
          case "void":
            if ("throw" === this.unrepresentable) throw new Error("Void cannot be represented in JSON Schema");
            break;
          case "never":
            p2.not = {};
            break;
          case "date":
            if ("throw" === this.unrepresentable) throw new Error("Date cannot be represented in JSON Schema");
            break;
          case "array":
            var B2 = p2, I2 = e11._zod.bag, T2 = I2.minimum, P2 = I2.maximum;
            "number" == typeof T2 && (B2.minItems = T2), "number" == typeof P2 && (B2.maxItems = P2), B2.type = "array", B2.items = this.process(o2.element, yn(yn({}, f2), {}, { path: [].concat(Cn(f2.path), ["items"]) }));
            break;
          case "object":
            var j2, N2 = p2;
            N2.type = "object", N2.properties = {};
            var z2 = o2.shape;
            for (var R2 in z2) N2.properties[R2] = this.process(z2[R2], yn(yn({}, f2), {}, { path: [].concat(Cn(f2.path), ["properties", R2]) }));
            var M2 = new Set(Object.keys(z2)), Z2 = new Set(Cn(M2).filter(function(e12) {
              var t3 = o2.shape[e12]._zod;
              return "input" === a2.io ? void 0 === t3.optin : void 0 === t3.optout;
            }));
            Z2.size > 0 && (N2.required = Array.from(Z2)), "never" === (null === (j2 = o2.catchall) || void 0 === j2 ? void 0 : j2._zod.def.type) ? N2.additionalProperties = false : o2.catchall ? o2.catchall && (N2.additionalProperties = this.process(o2.catchall, yn(yn({}, f2), {}, { path: [].concat(Cn(f2.path), ["additionalProperties"]) }))) : "output" === this.io && (N2.additionalProperties = false);
            break;
          case "union":
            var L2 = p2, $2 = o2.options.map(function(e12, t3) {
              return a2.process(e12, yn(yn({}, f2), {}, { path: [].concat(Cn(f2.path), ["anyOf", t3]) }));
            });
            L2.anyOf = $2;
            break;
          case "intersection":
            var q2 = p2, U2 = this.process(o2.left, yn(yn({}, f2), {}, { path: [].concat(Cn(f2.path), ["allOf", 0]) })), H2 = this.process(o2.right, yn(yn({}, f2), {}, { path: [].concat(Cn(f2.path), ["allOf", 1]) })), V2 = function(e12) {
              return "allOf" in e12 && 1 === Object.keys(e12).length;
            }, W2 = [].concat(Cn(V2(U2) ? U2.allOf : [U2]), Cn(V2(H2) ? H2.allOf : [H2]));
            q2.allOf = W2;
            break;
          case "tuple":
            var K2 = p2;
            K2.type = "array";
            var J2 = "draft-2020-12" === this.target ? "prefixItems" : "items", Q2 = "draft-2020-12" === this.target || "openapi-3.0" === this.target ? "items" : "additionalItems", G2 = o2.items.map(function(e12, t3) {
              return a2.process(e12, yn(yn({}, f2), {}, { path: [].concat(Cn(f2.path), [J2, t3]) }));
            }), Y2 = o2.rest ? this.process(o2.rest, yn(yn({}, f2), {}, { path: [].concat(Cn(f2.path), [Q2], Cn("openapi-3.0" === this.target ? [o2.items.length] : [])) })) : null;
            "draft-2020-12" === this.target ? (K2.prefixItems = G2, Y2 && (K2.items = Y2)) : "openapi-3.0" === this.target ? (K2.items = { anyOf: G2 }, Y2 && K2.items.anyOf.push(Y2), K2.minItems = G2.length, Y2 || (K2.maxItems = G2.length)) : (K2.items = G2, Y2 && (K2.additionalItems = Y2));
            var X2 = e11._zod.bag, ee2 = X2.minimum, te2 = X2.maximum;
            "number" == typeof ee2 && (K2.minItems = ee2), "number" == typeof te2 && (K2.maxItems = te2);
            break;
          case "record":
            var ne2 = p2;
            ne2.type = "object", "draft-7" !== this.target && "draft-2020-12" !== this.target || (ne2.propertyNames = this.process(o2.keyType, yn(yn({}, f2), {}, { path: [].concat(Cn(f2.path), ["propertyNames"]) }))), ne2.additionalProperties = this.process(o2.valueType, yn(yn({}, f2), {}, { path: [].concat(Cn(f2.path), ["additionalProperties"]) }));
            break;
          case "map":
            if ("throw" === this.unrepresentable) throw new Error("Map cannot be represented in JSON Schema");
            break;
          case "set":
            if ("throw" === this.unrepresentable) throw new Error("Set cannot be represented in JSON Schema");
            break;
          case "enum":
            var re2 = p2, ue2 = hr(o2.entries);
            ue2.every(function(e12) {
              return "number" == typeof e12;
            }) && (re2.type = "number"), ue2.every(function(e12) {
              return "string" == typeof e12;
            }) && (re2.type = "string"), re2.enum = ue2;
            break;
          case "literal":
            var ae2, ie2 = p2, oe2 = [], se2 = fn(o2.values);
            try {
              for (se2.s(); !(ae2 = se2.n()).done; ) {
                var ce2 = ae2.value;
                if (void 0 === ce2) {
                  if ("throw" === this.unrepresentable) throw new Error("Literal `undefined` cannot be represented in JSON Schema");
                } else if ("bigint" == typeof ce2) {
                  if ("throw" === this.unrepresentable) throw new Error("BigInt literals cannot be represented in JSON Schema");
                  oe2.push(Number(ce2));
                } else oe2.push(ce2);
              }
            } catch (e12) {
              se2.e(e12);
            } finally {
              se2.f();
            }
            if (0 === oe2.length) ;
            else if (1 === oe2.length) {
              var le2 = oe2[0];
              ie2.type = null === le2 ? "null" : An(le2), "draft-4" === this.target || "openapi-3.0" === this.target ? ie2.enum = [le2] : ie2.const = le2;
            } else oe2.every(function(e12) {
              return "number" == typeof e12;
            }) && (ie2.type = "number"), oe2.every(function(e12) {
              return "string" == typeof e12;
            }) && (ie2.type = "string"), oe2.every(function(e12) {
              return "boolean" == typeof e12;
            }) && (ie2.type = "string"), oe2.every(function(e12) {
              return null === e12;
            }) && (ie2.type = "null"), ie2.enum = oe2;
            break;
          case "file":
            var fe2 = p2, de2 = { type: "string", format: "binary", contentEncoding: "binary" }, pe2 = e11._zod.bag, he2 = pe2.minimum, ve2 = pe2.maximum, me2 = pe2.mime;
            void 0 !== he2 && (de2.minLength = he2), void 0 !== ve2 && (de2.maxLength = ve2), me2 ? 1 === me2.length ? (de2.contentMediaType = me2[0], Object.assign(fe2, de2)) : fe2.anyOf = me2.map(function(e12) {
              return yn(yn({}, de2), {}, { contentMediaType: e12 });
            }) : Object.assign(fe2, de2);
            break;
          case "transform":
            if ("throw" === this.unrepresentable) throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          case "nullable":
            var De2 = this.process(o2.innerType, f2);
            "openapi-3.0" === this.target ? (c2.ref = o2.innerType, p2.nullable = true) : p2.anyOf = [De2, { type: "null" }];
            break;
          case "nonoptional":
          case "promise":
          case "optional":
            this.process(o2.innerType, f2), c2.ref = o2.innerType;
            break;
          case "default":
            this.process(o2.innerType, f2), c2.ref = o2.innerType, p2.default = JSON.parse(JSON.stringify(o2.defaultValue));
            break;
          case "prefault":
            this.process(o2.innerType, f2), c2.ref = o2.innerType, "input" === this.io && (p2._prefault = JSON.parse(JSON.stringify(o2.defaultValue)));
            break;
          case "catch":
            var ye2;
            this.process(o2.innerType, f2), c2.ref = o2.innerType;
            try {
              ye2 = o2.catchValue(void 0);
            } catch (e12) {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            p2.default = ye2;
            break;
          case "nan":
            if ("throw" === this.unrepresentable) throw new Error("NaN cannot be represented in JSON Schema");
            break;
          case "template_literal":
            var ge2 = p2, Fe2 = e11._zod.pattern;
            if (!Fe2) throw new Error("Pattern not found in template literal");
            ge2.type = "string", ge2.pattern = Fe2.source;
            break;
          case "pipe":
            var Ee2 = "input" === this.io ? "transform" === o2.in._zod.def.type ? o2.out : o2.in : o2.out;
            this.process(Ee2, f2), c2.ref = Ee2;
            break;
          case "readonly":
            this.process(o2.innerType, f2), c2.ref = o2.innerType, p2.readOnly = true;
            break;
          case "lazy":
            var _e2 = e11._zod.innerType;
            this.process(_e2, f2), c2.ref = _e2;
            break;
          case "custom":
            if ("throw" === this.unrepresentable) throw new Error("Custom types cannot be represented in JSON Schema");
            break;
          case "function":
            if ("throw" === this.unrepresentable) throw new Error("Function types cannot be represented in JSON Schema");
        }
      }
    }
    var be2 = this.metadataRegistry.get(e11);
    return be2 && Object.assign(c2.schema, be2), "input" === this.io && Oi(e11) && (delete c2.schema.examples, delete c2.schema.default), "input" === this.io && c2.schema._prefault && (null !== (r2 = (u2 = c2.schema).default) && void 0 !== r2 || (u2.default = c2.schema._prefault)), delete c2.schema._prefault, this.seen.get(e11).schema;
  } }, { key: "emit", value: function(e11, t2) {
    var n2, r2, u2, a2, i2, o2, s2 = this, c2 = { cycles: null !== (n2 = null == t2 ? void 0 : t2.cycles) && void 0 !== n2 ? n2 : "ref", reused: null !== (r2 = null == t2 ? void 0 : t2.reused) && void 0 !== r2 ? r2 : "inline", external: null !== (u2 = null == t2 ? void 0 : t2.external) && void 0 !== u2 ? u2 : void 0 }, l2 = this.seen.get(e11);
    if (!l2) throw new Error("Unprocessed schema. This is a bug in Zod.");
    var f2 = function(e12) {
      if (!e12[1].schema.$ref) {
        var t3 = e12[1], n3 = (function(e13) {
          var t4, n4 = "draft-2020-12" === s2.target ? "$defs" : "definitions";
          if (c2.external) {
            var r4, u4, a4, i4, o3 = null === (r4 = c2.external.registry.get(e13[0])) || void 0 === r4 ? void 0 : r4.id, f3 = null !== (u4 = c2.external.uri) && void 0 !== u4 ? u4 : function(e14) {
              return e14;
            };
            if (o3) return { ref: f3(o3) };
            var d3 = null !== (a4 = null !== (i4 = e13[1].defId) && void 0 !== i4 ? i4 : e13[1].schema.id) && void 0 !== a4 ? a4 : "schema".concat(s2.counter++);
            return e13[1].defId = d3, { defId: d3, ref: "".concat(f3("__shared"), "#/").concat(n4, "/").concat(d3) };
          }
          if (e13[1] === l2) return { ref: "#" };
          var p3 = "".concat("#", "/").concat(n4, "/"), h3 = null !== (t4 = e13[1].schema.id) && void 0 !== t4 ? t4 : "__schema".concat(s2.counter++);
          return { defId: h3, ref: p3 + h3 };
        })(e12), r3 = n3.ref, u3 = n3.defId;
        t3.def = yn({}, t3.schema), u3 && (t3.defId = u3);
        var a3 = t3.schema;
        for (var i3 in a3) delete a3[i3];
        a3.$ref = r3;
      }
    };
    if ("throw" === c2.cycles) {
      var d2, p2 = fn(this.seen.entries());
      try {
        for (p2.s(); !(d2 = p2.n()).done; ) {
          var h2, v2 = d2.value[1];
          if (v2.cycle) throw new Error("Cycle detected: " + "#/".concat(null === (h2 = v2.cycle) || void 0 === h2 ? void 0 : h2.join("/"), "/<root>") + '\n\nSet the `cycles` parameter to `"ref"` to resolve cyclical schemas with defs.');
        }
      } catch (e12) {
        p2.e(e12);
      } finally {
        p2.f();
      }
    }
    var m2, D2 = fn(this.seen.entries());
    try {
      for (D2.s(); !(m2 = D2.n()).done; ) {
        var y2, g2 = m2.value, F2 = g2[1];
        if (e11 !== g2[0]) {
          if (c2.external) {
            var E2, _2 = null === (E2 = c2.external.registry.get(g2[0])) || void 0 === E2 ? void 0 : E2.id;
            if (e11 !== g2[0] && _2) {
              f2(g2);
              continue;
            }
          }
          ((null === (y2 = this.metadataRegistry.get(g2[0])) || void 0 === y2 ? void 0 : y2.id) || F2.cycle || F2.count > 1 && "ref" === c2.reused) && f2(g2);
        } else f2(g2);
      }
    } catch (e12) {
      D2.e(e12);
    } finally {
      D2.f();
    }
    var b2, C2 = function(e12, t3) {
      var n3, r3, u3 = s2.seen.get(e12), a3 = null !== (n3 = u3.def) && void 0 !== n3 ? n3 : u3.schema, i3 = yn({}, a3);
      if (null !== u3.ref) {
        var o3 = u3.ref;
        if (u3.ref = null, o3) {
          C2(o3, t3);
          var c3, l3 = s2.seen.get(o3).schema;
          !l3.$ref || "draft-7" !== t3.target && "draft-4" !== t3.target && "openapi-3.0" !== t3.target ? (Object.assign(a3, l3), Object.assign(a3, i3)) : (a3.allOf = null !== (c3 = a3.allOf) && void 0 !== c3 ? c3 : [], a3.allOf.push(l3));
        }
        u3.isParent || s2.override({ zodSchema: e12, jsonSchema: a3, path: null !== (r3 = u3.path) && void 0 !== r3 ? r3 : [] });
      }
    }, k2 = fn(Cn(this.seen.entries()).reverse());
    try {
      for (k2.s(); !(b2 = k2.n()).done; ) {
        var A2 = b2.value;
        C2(A2[0], { target: this.target });
      }
    } catch (e12) {
      k2.e(e12);
    } finally {
      k2.f();
    }
    var w2 = {};
    if ("draft-2020-12" === this.target ? w2.$schema = "https://json-schema.org/draft/2020-12/schema" : "draft-7" === this.target ? w2.$schema = "http://json-schema.org/draft-07/schema#" : "draft-4" === this.target ? w2.$schema = "http://json-schema.org/draft-04/schema#" : "openapi-3.0" === this.target || console.warn("Invalid target: ".concat(this.target)), null !== (a2 = c2.external) && void 0 !== a2 && a2.uri) {
      var S2, x2 = null === (S2 = c2.external.registry.get(e11)) || void 0 === S2 ? void 0 : S2.id;
      if (!x2) throw new Error("Schema is missing an `id` property");
      w2.$id = c2.external.uri(x2);
    }
    Object.assign(w2, l2.def);
    var O2, B2 = null !== (i2 = null === (o2 = c2.external) || void 0 === o2 ? void 0 : o2.defs) && void 0 !== i2 ? i2 : {}, I2 = fn(this.seen.entries());
    try {
      for (I2.s(); !(O2 = I2.n()).done; ) {
        var T2 = O2.value[1];
        T2.def && T2.defId && (B2[T2.defId] = T2.def);
      }
    } catch (e12) {
      I2.e(e12);
    } finally {
      I2.f();
    }
    c2.external || Object.keys(B2).length > 0 && ("draft-2020-12" === this.target ? w2.$defs = B2 : w2.definitions = B2);
    try {
      return JSON.parse(JSON.stringify(w2));
    } catch (e12) {
      throw new Error("Error converting schema to JSON.");
    }
  } }]);
  function Oi(e11, t2) {
    var n2 = null != t2 ? t2 : { seen: /* @__PURE__ */ new Set() };
    if (n2.seen.has(e11)) return false;
    n2.seen.add(e11);
    var r2 = e11._zod.def;
    switch (r2.type) {
      case "string":
      case "number":
      case "bigint":
      case "boolean":
      case "date":
      case "symbol":
      case "undefined":
      case "null":
      case "any":
      case "unknown":
      case "never":
      case "void":
      case "literal":
      case "enum":
      case "nan":
      case "file":
      case "template_literal":
      case "custom":
      case "success":
      case "catch":
      case "function":
        return false;
      case "array":
        return Oi(r2.element, n2);
      case "object":
        for (var u2 in r2.shape) if (Oi(r2.shape[u2], n2)) return true;
        return false;
      case "union":
        var a2, i2 = fn(r2.options);
        try {
          for (i2.s(); !(a2 = i2.n()).done; ) if (Oi(a2.value, n2)) return true;
        } catch (e12) {
          i2.e(e12);
        } finally {
          i2.f();
        }
        return false;
      case "intersection":
        return Oi(r2.left, n2) || Oi(r2.right, n2);
      case "tuple":
        var o2, s2 = fn(r2.items);
        try {
          for (s2.s(); !(o2 = s2.n()).done; ) if (Oi(o2.value, n2)) return true;
        } catch (e12) {
          s2.e(e12);
        } finally {
          s2.f();
        }
        return !(!r2.rest || !Oi(r2.rest, n2));
      case "record":
      case "map":
        return Oi(r2.keyType, n2) || Oi(r2.valueType, n2);
      case "set":
        return Oi(r2.valueType, n2);
      case "promise":
      case "optional":
      case "nonoptional":
      case "nullable":
      case "readonly":
      case "default":
      case "prefault":
        return Oi(r2.innerType, n2);
      case "lazy":
        return Oi(r2.getter(), n2);
      case "transform":
        return true;
      case "pipe":
        return Oi(r2.in, n2) || Oi(r2.out, n2);
    }
    throw new Error("Unknown schema type: ".concat(r2.type));
  }
  var Bi = Object.freeze({ __proto__: null, endsWith: bi, gt: di, gte: pi, includes: Ei, length: Di, lowercase: gi, lt: li, lte: fi, maxLength: vi, maxSize: function(e11, t2) {
    return new xu(yn(yn({ check: "max_size" }, Ir(t2)), {}, { maximum: e11 }));
  }, mime: function(e11, t2) {
    return new Uu(yn({ check: "mime_type", mime: e11 }, Ir(t2)));
  }, minLength: mi, minSize: function(e11, t2) {
    return new Ou(yn(yn({ check: "min_size" }, Ir(t2)), {}, { minimum: e11 }));
  }, multipleOf: hi, negative: function(e11) {
    return li(0, e11);
  }, nonnegative: function(e11) {
    return pi(0, e11);
  }, nonpositive: function(e11) {
    return fi(0, e11);
  }, normalize: ki, overwrite: Ci, positive: function(e11) {
    return di(0, e11);
  }, property: function(e11, t2, n2) {
    return new qu(yn({ check: "property", property: e11, schema: t2 }, Ir(n2)));
  }, regex: yi, size: function(e11, t2) {
    return new Bu(yn(yn({ check: "size_equals" }, Ir(t2)), {}, { size: e11 }));
  }, startsWith: _i, toLowerCase: wi, toUpperCase: Si, trim: Ai, uppercase: Fi });
  var Ii = cr("ZodISODateTime", function(e11, t2) {
    sa.init(e11, t2), Xi.init(e11, t2);
  });
  var Ti = cr("ZodISODate", function(e11, t2) {
    ca.init(e11, t2), Xi.init(e11, t2);
  });
  var Pi = cr("ZodISOTime", function(e11, t2) {
    la.init(e11, t2), Xi.init(e11, t2);
  });
  var ji = cr("ZodISODuration", function(e11, t2) {
    fa.init(e11, t2), Xi.init(e11, t2);
  });
  var Ni = cr("ZodError", function(e11, t2) {
    $r.init(e11, t2), e11.name = "ZodError", Object.defineProperties(e11, { format: { value: function(t3) {
      return (function(e12, t4) {
        var n2 = t4 || function(e13) {
          return e13.message;
        }, r2 = { _errors: [] }, u2 = function(e13) {
          var t5, a2 = fn(e13.issues);
          try {
            for (a2.s(); !(t5 = a2.n()).done; ) {
              var i2 = t5.value;
              if ("invalid_union" === i2.code && i2.errors.length) i2.errors.map(function(e14) {
                return u2({ issues: e14 });
              });
              else if ("invalid_key" === i2.code) u2({ issues: i2.issues });
              else if ("invalid_element" === i2.code) u2({ issues: i2.issues });
              else if (0 === i2.path.length) r2._errors.push(n2(i2));
              else for (var o2 = r2, s2 = 0; s2 < i2.path.length; ) {
                var c2 = i2.path[s2];
                s2 === i2.path.length - 1 ? (o2[c2] = o2[c2] || { _errors: [] }, o2[c2]._errors.push(n2(i2))) : o2[c2] = o2[c2] || { _errors: [] }, o2 = o2[c2], s2++;
              }
            }
          } catch (e14) {
            a2.e(e14);
          } finally {
            a2.f();
          }
        };
        return u2(e12), r2;
      })(e11, t3);
    } }, flatten: { value: function(t3) {
      return (function(e12) {
        var t4, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e13) {
          return e13.message;
        }, r2 = {}, u2 = [], a2 = fn(e12.issues);
        try {
          for (a2.s(); !(t4 = a2.n()).done; ) {
            var i2 = t4.value;
            i2.path.length > 0 ? (r2[i2.path[0]] = r2[i2.path[0]] || [], r2[i2.path[0]].push(n2(i2))) : u2.push(n2(i2));
          }
        } catch (e13) {
          a2.e(e13);
        } finally {
          a2.f();
        }
        return { formErrors: u2, fieldErrors: r2 };
      })(e11, t3);
    } }, addIssue: { value: function(t3) {
      e11.issues.push(t3), e11.message = JSON.stringify(e11.issues, vr, 2);
    } }, addIssues: { value: function(t3) {
      var n2;
      (n2 = e11.issues).push.apply(n2, Cn(t3)), e11.message = JSON.stringify(e11.issues, vr, 2);
    } }, isEmpty: { get: function() {
      return 0 === e11.issues.length;
    } } });
  }, { Parent: Error });
  var zi = Ur(Ni);
  var Ri = Hr(Ni);
  var Mi = Vr(Ni);
  var Zi = Kr(Ni);
  var Li = /* @__PURE__ */ (function(e11) {
    return function(t2, n2, r2) {
      var u2 = r2 ? Object.assign(r2, { direction: "backward" }) : { direction: "backward" };
      return Ur(e11)(t2, n2, u2);
    };
  })(Ni);
  var $i = /* @__PURE__ */ (function(e11) {
    return function(t2, n2, r2) {
      return Ur(e11)(t2, n2, r2);
    };
  })(Ni);
  var qi = (function(e11) {
    return (function() {
      var t2 = un(Fn().m(function t3(n2, r2, u2) {
        var a2;
        return Fn().w(function(t4) {
          for (; ; ) if (0 === t4.n) return a2 = u2 ? Object.assign(u2, { direction: "backward" }) : { direction: "backward" }, t4.a(2, Hr(e11)(n2, r2, a2));
        }, t3);
      }));
      return function(e12, n2, r2) {
        return t2.apply(this, arguments);
      };
    })();
  })(Ni);
  var Ui = (function(e11) {
    return (function() {
      var t2 = un(Fn().m(function t3(n2, r2, u2) {
        return Fn().w(function(t4) {
          for (; ; ) if (0 === t4.n) return t4.a(2, Hr(e11)(n2, r2, u2));
        }, t3);
      }));
      return function(e12, n2, r2) {
        return t2.apply(this, arguments);
      };
    })();
  })(Ni);
  var Hi = /* @__PURE__ */ (function(e11) {
    return function(t2, n2, r2) {
      var u2 = r2 ? Object.assign(r2, { direction: "backward" }) : { direction: "backward" };
      return Vr(e11)(t2, n2, u2);
    };
  })(Ni);
  var Vi = /* @__PURE__ */ (function(e11) {
    return function(t2, n2, r2) {
      return Vr(e11)(t2, n2, r2);
    };
  })(Ni);
  var Wi = (function(e11) {
    return (function() {
      var t2 = un(Fn().m(function t3(n2, r2, u2) {
        var a2;
        return Fn().w(function(t4) {
          for (; ; ) if (0 === t4.n) return a2 = u2 ? Object.assign(u2, { direction: "backward" }) : { direction: "backward" }, t4.a(2, Kr(e11)(n2, r2, a2));
        }, t3);
      }));
      return function(e12, n2, r2) {
        return t2.apply(this, arguments);
      };
    })();
  })(Ni);
  var Ki = (function(e11) {
    return (function() {
      var t2 = un(Fn().m(function t3(n2, r2, u2) {
        return Fn().w(function(t4) {
          for (; ; ) if (0 === t4.n) return t4.a(2, Kr(e11)(n2, r2, u2));
        }, t3);
      }));
      return function(e12, n2, r2) {
        return t2.apply(this, arguments);
      };
    })();
  })(Ni);
  var Ji = cr("ZodType", function(e11, t2) {
    return Ku.init(e11, t2), e11.def = t2, e11.type = t2.type, Object.defineProperty(e11, "_def", { value: t2 }), e11.check = function() {
      for (var n2, r2 = arguments.length, u2 = new Array(r2), a2 = 0; a2 < r2; a2++) u2[a2] = arguments[a2];
      return e11.clone(_r(t2, { checks: [].concat(Cn(null !== (n2 = t2.checks) && void 0 !== n2 ? n2 : []), Cn(u2.map(function(e12) {
        return "function" == typeof e12 ? { _zod: { check: e12, def: { check: "custom" }, onattach: [] } } : e12;
      }))) }));
    }, e11.clone = function(t3, n2) {
      return Br(e11, t3, n2);
    }, e11.brand = function() {
      return e11;
    }, e11.register = function(t3, n2) {
      return t3.add(e11, n2), e11;
    }, e11.parse = function(t3, n2) {
      return zi(e11, t3, n2, { callee: e11.parse });
    }, e11.safeParse = function(t3, n2) {
      return Mi(e11, t3, n2);
    }, e11.parseAsync = (function() {
      var t3 = un(Fn().m(function t4(n2, r2) {
        return Fn().w(function(t5) {
          for (; ; ) if (0 === t5.n) return t5.a(2, Ri(e11, n2, r2, { callee: e11.parseAsync }));
        }, t4);
      }));
      return function(e12, n2) {
        return t3.apply(this, arguments);
      };
    })(), e11.safeParseAsync = (function() {
      var t3 = un(Fn().m(function t4(n2, r2) {
        return Fn().w(function(t5) {
          for (; ; ) if (0 === t5.n) return t5.a(2, Zi(e11, n2, r2));
        }, t4);
      }));
      return function(e12, n2) {
        return t3.apply(this, arguments);
      };
    })(), e11.spa = e11.safeParseAsync, e11.encode = function(t3, n2) {
      return Li(e11, t3, n2);
    }, e11.decode = function(t3, n2) {
      return $i(e11, t3, n2);
    }, e11.encodeAsync = (function() {
      var t3 = un(Fn().m(function t4(n2, r2) {
        return Fn().w(function(t5) {
          for (; ; ) if (0 === t5.n) return t5.a(2, qi(e11, n2, r2));
        }, t4);
      }));
      return function(e12, n2) {
        return t3.apply(this, arguments);
      };
    })(), e11.decodeAsync = (function() {
      var t3 = un(Fn().m(function t4(n2, r2) {
        return Fn().w(function(t5) {
          for (; ; ) if (0 === t5.n) return t5.a(2, Ui(e11, n2, r2));
        }, t4);
      }));
      return function(e12, n2) {
        return t3.apply(this, arguments);
      };
    })(), e11.safeEncode = function(t3, n2) {
      return Hi(e11, t3, n2);
    }, e11.safeDecode = function(t3, n2) {
      return Vi(e11, t3, n2);
    }, e11.safeEncodeAsync = (function() {
      var t3 = un(Fn().m(function t4(n2, r2) {
        return Fn().w(function(t5) {
          for (; ; ) if (0 === t5.n) return t5.a(2, Wi(e11, n2, r2));
        }, t4);
      }));
      return function(e12, n2) {
        return t3.apply(this, arguments);
      };
    })(), e11.safeDecodeAsync = (function() {
      var t3 = un(Fn().m(function t4(n2, r2) {
        return Fn().w(function(t5) {
          for (; ; ) if (0 === t5.n) return t5.a(2, Ki(e11, n2, r2));
        }, t4);
      }));
      return function(e12, n2) {
        return t3.apply(this, arguments);
      };
    })(), e11.refine = function(t3, n2) {
      return e11.check((function(e12) {
        return (function(e13, t4, n3) {
          return new ls(yn({ type: "custom", check: "custom", fn: t4 }, Ir(n3)));
        })(0, e12, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {});
      })(t3, n2));
    }, e11.superRefine = function(t3) {
      return e11.check((function(e12) {
        var t4 = (function(e13) {
          var t5 = new bu(yn({ check: "custom" }, Ir(void 0)));
          return t5._zod.check = e13, t5;
        })(function(n2) {
          return n2.addIssue = function(e13) {
            if ("string" == typeof e13) n2.issues.push(Zr(e13, n2.value, t4._zod.def));
            else {
              var r2, u2, a2, i2, o2 = e13;
              o2.fatal && (o2.continue = false), null !== (r2 = o2.code) && void 0 !== r2 || (o2.code = "custom"), null !== (u2 = o2.input) && void 0 !== u2 || (o2.input = n2.value), null !== (a2 = o2.inst) && void 0 !== a2 || (o2.inst = t4), null !== (i2 = o2.continue) && void 0 !== i2 || (o2.continue = !t4._zod.def.abort), n2.issues.push(Zr(o2));
            }
          }, e12(n2.value, n2);
        });
        return t4;
      })(t3));
    }, e11.overwrite = function(t3) {
      return e11.check(Ci(t3));
    }, e11.optional = function() {
      return Go(e11);
    }, e11.nullable = function() {
      return Xo(e11);
    }, e11.nullish = function() {
      return Go(Xo(e11));
    }, e11.nonoptional = function(t3) {
      return (function(e12, t4) {
        return new ns(yn({ type: "nonoptional", innerType: e12 }, Ir(t4)));
      })(e11, t3);
    }, e11.array = function() {
      return Po(e11);
    }, e11.or = function(t3) {
      return Zo([e11, t3]);
    }, e11.and = function(t3) {
      return new $o({ type: "intersection", left: e11, right: t3 });
    }, e11.transform = function(t3) {
      return as(e11, new Jo({ type: "transform", transform: t3 }));
    }, e11.default = function(t3) {
      return n2 = t3, new es({ type: "default", innerType: e11, get defaultValue() {
        return "function" == typeof n2 ? n2() : Sr(n2);
      } });
      var n2;
    }, e11.prefault = function(t3) {
      return n2 = t3, new ts({ type: "prefault", innerType: e11, get defaultValue() {
        return "function" == typeof n2 ? n2() : Sr(n2);
      } });
      var n2;
    }, e11.catch = function(t3) {
      return new rs({ type: "catch", innerType: e11, catchValue: "function" == typeof (n2 = t3) ? n2 : function() {
        return n2;
      } });
      var n2;
    }, e11.pipe = function(t3) {
      return as(e11, t3);
    }, e11.readonly = function() {
      return new ss({ type: "readonly", innerType: e11 });
    }, e11.describe = function(t3) {
      var n2 = e11.clone();
      return oi.add(n2, { description: t3 }), n2;
    }, Object.defineProperty(e11, "description", { get: function() {
      var t3;
      return null === (t3 = oi.get(e11)) || void 0 === t3 ? void 0 : t3.description;
    }, configurable: true }), e11.meta = function() {
      if (0 === arguments.length) return oi.get(e11);
      var t3 = e11.clone();
      return oi.add(t3, arguments.length <= 0 ? void 0 : arguments[0]), t3;
    }, e11.isOptional = function() {
      return e11.safeParse(void 0).success;
    }, e11.isNullable = function() {
      return e11.safeParse(null).success;
    }, e11;
  });
  var Qi = cr("_ZodString", function(e11, t2) {
    var n2, r2, u2;
    Ju.init(e11, t2), Ji.init(e11, t2);
    var a2 = e11._zod.bag;
    e11.format = null !== (n2 = a2.format) && void 0 !== n2 ? n2 : null, e11.minLength = null !== (r2 = a2.minimum) && void 0 !== r2 ? r2 : null, e11.maxLength = null !== (u2 = a2.maximum) && void 0 !== u2 ? u2 : null, e11.regex = function() {
      return e11.check(yi.apply(Bi, arguments));
    }, e11.includes = function() {
      return e11.check(Ei.apply(Bi, arguments));
    }, e11.startsWith = function() {
      return e11.check(_i.apply(Bi, arguments));
    }, e11.endsWith = function() {
      return e11.check(bi.apply(Bi, arguments));
    }, e11.min = function() {
      return e11.check(mi.apply(Bi, arguments));
    }, e11.max = function() {
      return e11.check(vi.apply(Bi, arguments));
    }, e11.length = function() {
      return e11.check(Di.apply(Bi, arguments));
    }, e11.nonempty = function() {
      for (var t3 = arguments.length, n3 = new Array(t3), r3 = 0; r3 < t3; r3++) n3[r3] = arguments[r3];
      return e11.check(mi.apply(Bi, [1].concat(n3)));
    }, e11.lowercase = function(t3) {
      return e11.check(gi(t3));
    }, e11.uppercase = function(t3) {
      return e11.check(Fi(t3));
    }, e11.trim = function() {
      return e11.check(Ai());
    }, e11.normalize = function() {
      return e11.check(ki.apply(Bi, arguments));
    }, e11.toLowerCase = function() {
      return e11.check(wi());
    }, e11.toUpperCase = function() {
      return e11.check(Si());
    };
  });
  var Gi = cr("ZodString", function(e11, t2) {
    Ju.init(e11, t2), Qi.init(e11, t2), e11.email = function(t3) {
      return e11.check((function(e12, t4) {
        return new eo(yn({ type: "string", format: "email", check: "string_format", abort: false }, Ir(t4)));
      })(0, t3));
    }, e11.url = function(t3) {
      return e11.check((function(e12, t4) {
        return new ro(yn({ type: "string", format: "url", check: "string_format", abort: false }, Ir(t4)));
      })(0, t3));
    }, e11.jwt = function(t3) {
      return e11.check((function(e12, t4) {
        return new Fo(yn({ type: "string", format: "jwt", check: "string_format", abort: false }, Ir(t4)));
      })(0, t3));
    }, e11.emoji = function(t3) {
      return e11.check((function(e12, t4) {
        return new uo(yn({ type: "string", format: "emoji", check: "string_format", abort: false }, Ir(t4)));
      })(0, t3));
    }, e11.guid = function(t3) {
      return e11.check(si(to, t3));
    }, e11.uuid = function(t3) {
      return e11.check((function(e12, t4) {
        return new no(yn({ type: "string", format: "uuid", check: "string_format", abort: false }, Ir(t4)));
      })(0, t3));
    }, e11.uuidv4 = function(t3) {
      return e11.check((function(e12, t4) {
        return new no(yn({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v4" }, Ir(t4)));
      })(0, t3));
    }, e11.uuidv6 = function(t3) {
      return e11.check((function(e12, t4) {
        return new no(yn({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v6" }, Ir(t4)));
      })(0, t3));
    }, e11.uuidv7 = function(t3) {
      return e11.check((function(e12, t4) {
        return new no(yn({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v7" }, Ir(t4)));
      })(0, t3));
    }, e11.nanoid = function(t3) {
      return e11.check((function(e12, t4) {
        return new ao(yn({ type: "string", format: "nanoid", check: "string_format", abort: false }, Ir(t4)));
      })(0, t3));
    }, e11.guid = function(t3) {
      return e11.check(si(to, t3));
    }, e11.cuid = function(t3) {
      return e11.check((function(e12, t4) {
        return new io(yn({ type: "string", format: "cuid", check: "string_format", abort: false }, Ir(t4)));
      })(0, t3));
    }, e11.cuid2 = function(t3) {
      return e11.check((function(e12, t4) {
        return new oo(yn({ type: "string", format: "cuid2", check: "string_format", abort: false }, Ir(t4)));
      })(0, t3));
    }, e11.ulid = function(t3) {
      return e11.check((function(e12, t4) {
        return new so(yn({ type: "string", format: "ulid", check: "string_format", abort: false }, Ir(t4)));
      })(0, t3));
    }, e11.base64 = function(t3) {
      return e11.check(ci(mo, t3));
    }, e11.base64url = function(t3) {
      return e11.check((function(e12, t4) {
        return new yo(yn({ type: "string", format: "base64url", check: "string_format", abort: false }, Ir(t4)));
      })(0, t3));
    }, e11.xid = function(t3) {
      return e11.check((function(e12, t4) {
        return new co(yn({ type: "string", format: "xid", check: "string_format", abort: false }, Ir(t4)));
      })(0, t3));
    }, e11.ksuid = function(t3) {
      return e11.check((function(e12, t4) {
        return new lo(yn({ type: "string", format: "ksuid", check: "string_format", abort: false }, Ir(t4)));
      })(0, t3));
    }, e11.ipv4 = function(t3) {
      return e11.check((function(e12, t4) {
        return new fo(yn({ type: "string", format: "ipv4", check: "string_format", abort: false }, Ir(t4)));
      })(0, t3));
    }, e11.ipv6 = function(t3) {
      return e11.check((function(e12, t4) {
        return new po(yn({ type: "string", format: "ipv6", check: "string_format", abort: false }, Ir(t4)));
      })(0, t3));
    }, e11.cidrv4 = function(t3) {
      return e11.check((function(e12, t4) {
        return new ho(yn({ type: "string", format: "cidrv4", check: "string_format", abort: false }, Ir(t4)));
      })(0, t3));
    }, e11.cidrv6 = function(t3) {
      return e11.check((function(e12, t4) {
        return new vo(yn({ type: "string", format: "cidrv6", check: "string_format", abort: false }, Ir(t4)));
      })(0, t3));
    }, e11.e164 = function(t3) {
      return e11.check((function(e12, t4) {
        return new go(yn({ type: "string", format: "e164", check: "string_format", abort: false }, Ir(t4)));
      })(0, t3));
    }, e11.datetime = function(t3) {
      return e11.check((function(e12) {
        return (function(e13, t4) {
          return new Ii(yn({ type: "string", format: "datetime", check: "string_format", offset: false, local: false, precision: null }, Ir(t4)));
        })(0, e12);
      })(t3));
    }, e11.date = function(t3) {
      return e11.check((function(e12) {
        return (function(e13, t4) {
          return new Ti(yn({ type: "string", format: "date", check: "string_format" }, Ir(t4)));
        })(0, e12);
      })(t3));
    }, e11.time = function(t3) {
      return e11.check((function(e12) {
        return (function(e13, t4) {
          return new Pi(yn({ type: "string", format: "time", check: "string_format", precision: null }, Ir(t4)));
        })(0, e12);
      })(t3));
    }, e11.duration = function(t3) {
      return e11.check((function(e12) {
        return (function(e13, t4) {
          return new ji(yn({ type: "string", format: "duration", check: "string_format" }, Ir(t4)));
        })(0, e12);
      })(t3));
    };
  });
  function Yi(e11) {
    return (function(e12, t2) {
      return new Gi(yn({ type: "string" }, Ir(t2)));
    })(0, e11);
  }
  var Xi = cr("ZodStringFormat", function(e11, t2) {
    Qu.init(e11, t2), Qi.init(e11, t2);
  });
  var eo = cr("ZodEmail", function(e11, t2) {
    Xu.init(e11, t2), Xi.init(e11, t2);
  });
  var to = cr("ZodGUID", function(e11, t2) {
    Gu.init(e11, t2), Xi.init(e11, t2);
  });
  var no = cr("ZodUUID", function(e11, t2) {
    Yu.init(e11, t2), Xi.init(e11, t2);
  });
  var ro = cr("ZodURL", function(e11, t2) {
    ea.init(e11, t2), Xi.init(e11, t2);
  });
  var uo = cr("ZodEmoji", function(e11, t2) {
    ta.init(e11, t2), Xi.init(e11, t2);
  });
  var ao = cr("ZodNanoID", function(e11, t2) {
    na.init(e11, t2), Xi.init(e11, t2);
  });
  var io = cr("ZodCUID", function(e11, t2) {
    ra.init(e11, t2), Xi.init(e11, t2);
  });
  var oo = cr("ZodCUID2", function(e11, t2) {
    ua.init(e11, t2), Xi.init(e11, t2);
  });
  var so = cr("ZodULID", function(e11, t2) {
    aa.init(e11, t2), Xi.init(e11, t2);
  });
  var co = cr("ZodXID", function(e11, t2) {
    ia.init(e11, t2), Xi.init(e11, t2);
  });
  var lo = cr("ZodKSUID", function(e11, t2) {
    oa.init(e11, t2), Xi.init(e11, t2);
  });
  var fo = cr("ZodIPv4", function(e11, t2) {
    da.init(e11, t2), Xi.init(e11, t2);
  });
  var po = cr("ZodIPv6", function(e11, t2) {
    pa.init(e11, t2), Xi.init(e11, t2);
  });
  var ho = cr("ZodCIDRv4", function(e11, t2) {
    ha.init(e11, t2), Xi.init(e11, t2);
  });
  var vo = cr("ZodCIDRv6", function(e11, t2) {
    va.init(e11, t2), Xi.init(e11, t2);
  });
  var mo = cr("ZodBase64", function(e11, t2) {
    Da.init(e11, t2), Xi.init(e11, t2);
  });
  function Do(e11) {
    return ci(mo, e11);
  }
  var yo = cr("ZodBase64URL", function(e11, t2) {
    ya.init(e11, t2), Xi.init(e11, t2);
  });
  var go = cr("ZodE164", function(e11, t2) {
    ga.init(e11, t2), Xi.init(e11, t2);
  });
  var Fo = cr("ZodJWT", function(e11, t2) {
    Fa.init(e11, t2), Xi.init(e11, t2);
  });
  var Eo = cr("ZodNumber", function(e11, t2) {
    var n2, r2, u2, a2, i2, o2, s2, c2, l2;
    Ea.init(e11, t2), Ji.init(e11, t2), e11.gt = function(t3, n3) {
      return e11.check(di(t3, n3));
    }, e11.gte = function(t3, n3) {
      return e11.check(pi(t3, n3));
    }, e11.min = function(t3, n3) {
      return e11.check(pi(t3, n3));
    }, e11.lt = function(t3, n3) {
      return e11.check(li(t3, n3));
    }, e11.lte = function(t3, n3) {
      return e11.check(fi(t3, n3));
    }, e11.max = function(t3, n3) {
      return e11.check(fi(t3, n3));
    }, e11.int = function(t3) {
      return e11.check(Co(t3));
    }, e11.safe = function(t3) {
      return e11.check(Co(t3));
    }, e11.positive = function(t3) {
      return e11.check(di(0, t3));
    }, e11.nonnegative = function(t3) {
      return e11.check(pi(0, t3));
    }, e11.negative = function(t3) {
      return e11.check(li(0, t3));
    }, e11.nonpositive = function(t3) {
      return e11.check(fi(0, t3));
    }, e11.multipleOf = function(t3, n3) {
      return e11.check(hi(t3, n3));
    }, e11.step = function(t3, n3) {
      return e11.check(hi(t3, n3));
    }, e11.finite = function() {
      return e11;
    };
    var f2 = e11._zod.bag;
    e11.minValue = null !== (n2 = Math.max(null !== (r2 = f2.minimum) && void 0 !== r2 ? r2 : Number.NEGATIVE_INFINITY, null !== (u2 = f2.exclusiveMinimum) && void 0 !== u2 ? u2 : Number.NEGATIVE_INFINITY)) && void 0 !== n2 ? n2 : null, e11.maxValue = null !== (a2 = Math.min(null !== (i2 = f2.maximum) && void 0 !== i2 ? i2 : Number.POSITIVE_INFINITY, null !== (o2 = f2.exclusiveMaximum) && void 0 !== o2 ? o2 : Number.POSITIVE_INFINITY)) && void 0 !== a2 ? a2 : null, e11.isInt = (null !== (s2 = f2.format) && void 0 !== s2 ? s2 : "").includes("int") || Number.isSafeInteger(null !== (c2 = f2.multipleOf) && void 0 !== c2 ? c2 : 0.5), e11.isFinite = true, e11.format = null !== (l2 = f2.format) && void 0 !== l2 ? l2 : null;
  });
  function _o(e11) {
    return (function(e12, t2) {
      return new Eo(yn({ type: "number", checks: [] }, Ir(t2)));
    })(0, e11);
  }
  var bo = cr("ZodNumberFormat", function(e11, t2) {
    _a.init(e11, t2), Eo.init(e11, t2);
  });
  function Co(e11) {
    return (function(e12, t2) {
      return new bo(yn({ type: "number", check: "number_format", abort: false, format: "safeint" }, Ir(t2)));
    })(0, e11);
  }
  var ko = cr("ZodBoolean", function(e11, t2) {
    ba.init(e11, t2), Ji.init(e11, t2);
  });
  function Ao(e11) {
    return (function(e12, t2) {
      return new ko(yn({ type: "boolean" }, Ir(t2)));
    })(0, e11);
  }
  var wo = cr("ZodNull", function(e11, t2) {
    Ca.init(e11, t2), Ji.init(e11, t2);
  });
  function So(e11) {
    return (function(e12, t2) {
      return new wo(yn({ type: "null" }, Ir(t2)));
    })(0, e11);
  }
  var xo = cr("ZodUnknown", function(e11, t2) {
    ka.init(e11, t2), Ji.init(e11, t2);
  });
  function Oo() {
    return new xo({ type: "unknown" });
  }
  var Bo = cr("ZodNever", function(e11, t2) {
    Aa.init(e11, t2), Ji.init(e11, t2);
  });
  function Io(e11) {
    return (function(e12, t2) {
      return new Bo(yn({ type: "never" }, Ir(t2)));
    })(0, e11);
  }
  var To = cr("ZodArray", function(e11, t2) {
    Sa.init(e11, t2), Ji.init(e11, t2), e11.element = t2.element, e11.min = function(t3, n2) {
      return e11.check(mi(t3, n2));
    }, e11.nonempty = function(t3) {
      return e11.check(mi(1, t3));
    }, e11.max = function(t3, n2) {
      return e11.check(vi(t3, n2));
    }, e11.length = function(t3, n2) {
      return e11.check(Di(t3, n2));
    }, e11.unwrap = function() {
      return e11.element;
    };
  });
  function Po(e11, t2) {
    return (function(e12, t3, n2) {
      return new To(yn({ type: "array", element: t3 }, Ir(n2)));
    })(0, e11, t2);
  }
  var jo = cr("ZodObject", function(e11, t2) {
    Ta.init(e11, t2), Ji.init(e11, t2), Fr(e11, "shape", function() {
      return t2.shape;
    }), e11.keyof = function() {
      return Vo(Object.keys(e11._zod.def.shape));
    }, e11.catchall = function(t3) {
      return e11.clone(yn(yn({}, e11._zod.def), {}, { catchall: t3 }));
    }, e11.passthrough = function() {
      return e11.clone(yn(yn({}, e11._zod.def), {}, { catchall: Oo() }));
    }, e11.loose = function() {
      return e11.clone(yn(yn({}, e11._zod.def), {}, { catchall: Oo() }));
    }, e11.strict = function() {
      return e11.clone(yn(yn({}, e11._zod.def), {}, { catchall: Io() }));
    }, e11.strip = function() {
      return e11.clone(yn(yn({}, e11._zod.def), {}, { catchall: void 0 }));
    }, e11.extend = function(t3) {
      return (function(e12, t4) {
        if (!wr(t4)) throw new Error("Invalid input to extend: expected a plain object");
        var n2 = e12._zod.def.checks;
        if (n2 && n2.length > 0) throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
        var r2 = _r(e12._zod.def, { get shape() {
          var n3 = yn(yn({}, e12._zod.def.shape), t4);
          return Er(this, "shape", n3), n3;
        }, checks: [] });
        return Br(e12, r2);
      })(e11, t3);
    }, e11.safeExtend = function(t3) {
      return (function(e12, t4) {
        if (!wr(t4)) throw new Error("Invalid input to safeExtend: expected a plain object");
        var n2 = yn(yn({}, e12._zod.def), {}, { get shape() {
          var n3 = yn(yn({}, e12._zod.def.shape), t4);
          return Er(this, "shape", n3), n3;
        }, checks: e12._zod.def.checks });
        return Br(e12, n2);
      })(e11, t3);
    }, e11.merge = function(t3) {
      return (function(e12, t4) {
        var n2 = _r(e12._zod.def, { get shape() {
          var n3 = yn(yn({}, e12._zod.def.shape), t4._zod.def.shape);
          return Er(this, "shape", n3), n3;
        }, get catchall() {
          return t4._zod.def.catchall;
        }, checks: [] });
        return Br(e12, n2);
      })(e11, t3);
    }, e11.pick = function(t3) {
      return (function(e12, t4) {
        var n2 = e12._zod.def;
        return Br(e12, _r(e12._zod.def, { get shape() {
          var e13 = {};
          for (var r2 in t4) {
            if (!(r2 in n2.shape)) throw new Error('Unrecognized key: "'.concat(r2, '"'));
            t4[r2] && (e13[r2] = n2.shape[r2]);
          }
          return Er(this, "shape", e13), e13;
        }, checks: [] }));
      })(e11, t3);
    }, e11.omit = function(t3) {
      return (function(e12, t4) {
        var n2 = e12._zod.def, r2 = _r(e12._zod.def, { get shape() {
          var r3 = yn({}, e12._zod.def.shape);
          for (var u2 in t4) {
            if (!(u2 in n2.shape)) throw new Error('Unrecognized key: "'.concat(u2, '"'));
            t4[u2] && delete r3[u2];
          }
          return Er(this, "shape", r3), r3;
        }, checks: [] });
        return Br(e12, r2);
      })(e11, t3);
    }, e11.partial = function() {
      return (function(e12, t3, n2) {
        var r2 = _r(t3._zod.def, { get shape() {
          var r3 = t3._zod.def.shape, u2 = yn({}, r3);
          if (n2) for (var a2 in n2) {
            if (!(a2 in r3)) throw new Error('Unrecognized key: "'.concat(a2, '"'));
            n2[a2] && (u2[a2] = new e12({ type: "optional", innerType: r3[a2] }));
          }
          else for (var i2 in r3) u2[i2] = new e12({ type: "optional", innerType: r3[i2] });
          return Er(this, "shape", u2), u2;
        }, checks: [] });
        return Br(t3, r2);
      })(Qo, e11, arguments.length <= 0 ? void 0 : arguments[0]);
    }, e11.required = function() {
      return (function(e12, t3, n2) {
        var r2 = _r(t3._zod.def, { get shape() {
          var r3 = t3._zod.def.shape, u2 = yn({}, r3);
          if (n2) for (var a2 in n2) {
            if (!(a2 in u2)) throw new Error('Unrecognized key: "'.concat(a2, '"'));
            n2[a2] && (u2[a2] = new e12({ type: "nonoptional", innerType: r3[a2] }));
          }
          else for (var i2 in r3) u2[i2] = new e12({ type: "nonoptional", innerType: r3[i2] });
          return Er(this, "shape", u2), u2;
        }, checks: [] });
        return Br(t3, r2);
      })(ns, e11, arguments.length <= 0 ? void 0 : arguments[0]);
    };
  });
  function No(e11, t2) {
    var n2 = yn({ type: "object", shape: null != e11 ? e11 : {} }, Ir(t2));
    return new jo(n2);
  }
  function zo(e11, t2) {
    return new jo(yn({ type: "object", shape: e11, catchall: Io() }, Ir(t2)));
  }
  function Ro(e11, t2) {
    return new jo(yn({ type: "object", shape: e11, catchall: Oo() }, Ir(t2)));
  }
  var Mo = cr("ZodUnion", function(e11, t2) {
    ja.init(e11, t2), Ji.init(e11, t2), e11.options = t2.options;
  });
  function Zo(e11, t2) {
    return new Mo(yn({ type: "union", options: e11 }, Ir(t2)));
  }
  var Lo = cr("ZodDiscriminatedUnion", function(e11, t2) {
    Mo.init(e11, t2), Na.init(e11, t2);
  });
  var $o = cr("ZodIntersection", function(e11, t2) {
    za.init(e11, t2), Ji.init(e11, t2);
  });
  var qo = cr("ZodRecord", function(e11, t2) {
    Za.init(e11, t2), Ji.init(e11, t2), e11.keyType = t2.keyType, e11.valueType = t2.valueType;
  });
  function Uo(e11, t2, n2) {
    return new qo(yn({ type: "record", keyType: e11, valueType: t2 }, Ir(n2)));
  }
  var Ho = cr("ZodEnum", function(e11, t2) {
    La.init(e11, t2), Ji.init(e11, t2), e11.enum = t2.entries, e11.options = Object.values(t2.entries);
    var n2 = new Set(Object.keys(t2.entries));
    e11.extract = function(e12, r2) {
      var u2, a2 = {}, i2 = fn(e12);
      try {
        for (i2.s(); !(u2 = i2.n()).done; ) {
          var o2 = u2.value;
          if (!n2.has(o2)) throw new Error("Key ".concat(o2, " not found in enum"));
          a2[o2] = t2.entries[o2];
        }
      } catch (e13) {
        i2.e(e13);
      } finally {
        i2.f();
      }
      return new Ho(yn(yn(yn({}, t2), {}, { checks: [] }, Ir(r2)), {}, { entries: a2 }));
    }, e11.exclude = function(e12, r2) {
      var u2, a2 = yn({}, t2.entries), i2 = fn(e12);
      try {
        for (i2.s(); !(u2 = i2.n()).done; ) {
          var o2 = u2.value;
          if (!n2.has(o2)) throw new Error("Key ".concat(o2, " not found in enum"));
          delete a2[o2];
        }
      } catch (e13) {
        i2.e(e13);
      } finally {
        i2.f();
      }
      return new Ho(yn(yn(yn({}, t2), {}, { checks: [] }, Ir(r2)), {}, { entries: a2 }));
    };
  });
  function Vo(e11, t2) {
    var n2 = Array.isArray(e11) ? Object.fromEntries(e11.map(function(e12) {
      return [e12, e12];
    })) : e11;
    return new Ho(yn({ type: "enum", entries: n2 }, Ir(t2)));
  }
  var Wo = cr("ZodLiteral", function(e11, t2) {
    $a.init(e11, t2), Ji.init(e11, t2), e11.values = new Set(t2.values), Object.defineProperty(e11, "value", { get: function() {
      if (t2.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t2.values[0];
    } });
  });
  function Ko(e11, t2) {
    return new Wo(yn({ type: "literal", values: Array.isArray(e11) ? e11 : [e11] }, Ir(t2)));
  }
  var Jo = cr("ZodTransform", function(e11, t2) {
    qa.init(e11, t2), Ji.init(e11, t2), e11._zod.parse = function(n2, r2) {
      if ("backward" === r2.direction) throw new fr(e11.constructor.name);
      n2.addIssue = function(r3) {
        if ("string" == typeof r3) n2.issues.push(Zr(r3, n2.value, t2));
        else {
          var u3, a2, i2, o2 = r3;
          o2.fatal && (o2.continue = false), null !== (u3 = o2.code) && void 0 !== u3 || (o2.code = "custom"), null !== (a2 = o2.input) && void 0 !== a2 || (o2.input = n2.value), null !== (i2 = o2.inst) && void 0 !== i2 || (o2.inst = e11), n2.issues.push(Zr(o2));
        }
      };
      var u2 = t2.transform(n2.value, n2);
      return u2 instanceof Promise ? u2.then(function(e12) {
        return n2.value = e12, n2;
      }) : (n2.value = u2, n2);
    };
  });
  var Qo = cr("ZodOptional", function(e11, t2) {
    Ha.init(e11, t2), Ji.init(e11, t2), e11.unwrap = function() {
      return e11._zod.def.innerType;
    };
  });
  function Go(e11) {
    return new Qo({ type: "optional", innerType: e11 });
  }
  var Yo = cr("ZodNullable", function(e11, t2) {
    Va.init(e11, t2), Ji.init(e11, t2), e11.unwrap = function() {
      return e11._zod.def.innerType;
    };
  });
  function Xo(e11) {
    return new Yo({ type: "nullable", innerType: e11 });
  }
  var es = cr("ZodDefault", function(e11, t2) {
    Wa.init(e11, t2), Ji.init(e11, t2), e11.unwrap = function() {
      return e11._zod.def.innerType;
    }, e11.removeDefault = e11.unwrap;
  });
  var ts = cr("ZodPrefault", function(e11, t2) {
    Ja.init(e11, t2), Ji.init(e11, t2), e11.unwrap = function() {
      return e11._zod.def.innerType;
    };
  });
  var ns = cr("ZodNonOptional", function(e11, t2) {
    Qa.init(e11, t2), Ji.init(e11, t2), e11.unwrap = function() {
      return e11._zod.def.innerType;
    };
  });
  var rs = cr("ZodCatch", function(e11, t2) {
    Ya.init(e11, t2), Ji.init(e11, t2), e11.unwrap = function() {
      return e11._zod.def.innerType;
    }, e11.removeCatch = e11.unwrap;
  });
  var us = cr("ZodPipe", function(e11, t2) {
    Xa.init(e11, t2), Ji.init(e11, t2), e11.in = t2.in, e11.out = t2.out;
  });
  function as(e11, t2) {
    return new us({ type: "pipe", in: e11, out: t2 });
  }
  var is;
  var os;
  var ss = cr("ZodReadonly", function(e11, t2) {
    ti.init(e11, t2), Ji.init(e11, t2), e11.unwrap = function() {
      return e11._zod.def.innerType;
    };
  });
  var cs = cr("ZodLazy", function(e11, t2) {
    ri.init(e11, t2), Ji.init(e11, t2), e11.unwrap = function() {
      return e11._zod.def.getter();
    };
  });
  var ls = cr("ZodCustom", function(e11, t2) {
    ui.init(e11, t2), Ji.init(e11, t2);
  });
  function fs(e11) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { error: "Input not instance of ".concat(e11.name) }, n2 = new ls(yn({ type: "custom", check: "custom", fn: function(t3) {
      return t3 instanceof e11;
    }, abort: true }, Ir(t2)));
    return n2._zod.bag.Class = e11, n2;
  }
  !(function(e11) {
    e11.assertEqual = function(e12) {
    }, e11.assertIs = function(e12) {
    }, e11.assertNever = function(e12) {
      throw new Error();
    }, e11.arrayToEnum = function(e12) {
      var t2, n2 = {}, r2 = fn(e12);
      try {
        for (r2.s(); !(t2 = r2.n()).done; ) {
          var u2 = t2.value;
          n2[u2] = u2;
        }
      } catch (e13) {
        r2.e(e13);
      } finally {
        r2.f();
      }
      return n2;
    }, e11.getValidEnumValues = function(t2) {
      var n2, r2 = {}, u2 = fn(e11.objectKeys(t2).filter(function(e12) {
        return "number" != typeof t2[t2[e12]];
      }));
      try {
        for (u2.s(); !(n2 = u2.n()).done; ) {
          var a2 = n2.value;
          r2[a2] = t2[a2];
        }
      } catch (e12) {
        u2.e(e12);
      } finally {
        u2.f();
      }
      return e11.objectValues(r2);
    }, e11.objectValues = function(t2) {
      return e11.objectKeys(t2).map(function(e12) {
        return t2[e12];
      });
    }, e11.objectKeys = "function" == typeof Object.keys ? function(e12) {
      return Object.keys(e12);
    } : function(e12) {
      var t2 = [];
      for (var n2 in e12) Object.prototype.hasOwnProperty.call(e12, n2) && t2.push(n2);
      return t2;
    }, e11.find = function(e12, t2) {
      var n2, r2 = fn(e12);
      try {
        for (r2.s(); !(n2 = r2.n()).done; ) {
          var u2 = n2.value;
          if (t2(u2)) return u2;
        }
      } catch (e13) {
        r2.e(e13);
      } finally {
        r2.f();
      }
    }, e11.isInteger = "function" == typeof Number.isInteger ? function(e12) {
      return Number.isInteger(e12);
    } : function(e12) {
      return "number" == typeof e12 && Number.isFinite(e12) && Math.floor(e12) === e12;
    }, e11.joinValues = function(e12) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
      return e12.map(function(e13) {
        return "string" == typeof e13 ? "'".concat(e13, "'") : e13;
      }).join(t2);
    }, e11.jsonStringifyReplacer = function(e12, t2) {
      return "bigint" == typeof t2 ? t2.toString() : t2;
    };
  })(is || (is = {})), (os || (os = {})).mergeShapes = function(e11, t2) {
    return yn(yn({}, e11), t2);
  };
  var ds = is.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
  var ps = function(e11) {
    switch (An(e11)) {
      case "undefined":
        return ds.undefined;
      case "string":
        return ds.string;
      case "number":
        return Number.isNaN(e11) ? ds.nan : ds.number;
      case "boolean":
        return ds.boolean;
      case "function":
        return ds.function;
      case "bigint":
        return ds.bigint;
      case "symbol":
        return ds.symbol;
      case "object":
        return Array.isArray(e11) ? ds.array : null === e11 ? ds.null : e11.then && "function" == typeof e11.then && e11.catch && "function" == typeof e11.catch ? ds.promise : "undefined" != typeof Map && e11 instanceof Map ? ds.map : "undefined" != typeof Set && e11 instanceof Set ? ds.set : "undefined" != typeof Date && e11 instanceof Date ? ds.date : ds.object;
      default:
        return ds.unknown;
    }
  };
  var hs = is.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
  var vs = (function() {
    function e11(t2) {
      var n2;
      on(this, e11), (n2 = an(this, e11)).issues = [], n2.addIssue = function(e12) {
        n2.issues = [].concat(Cn(n2.issues), [e12]);
      }, n2.addIssues = function() {
        var e12 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        n2.issues = [].concat(Cn(n2.issues), Cn(e12));
      };
      var r2 = (this instanceof e11 ? this.constructor : void 0).prototype;
      return Object.setPrototypeOf ? Object.setPrototypeOf(n2, r2) : n2.__proto__ = r2, n2.name = "ZodError", n2.issues = t2, n2;
    }
    return vn(e11, Sn(Error)), ln(e11, [{ key: "errors", get: function() {
      return this.issues;
    } }, { key: "format", value: function(e12) {
      var t2 = e12 || function(e13) {
        return e13.message;
      }, n2 = { _errors: [] }, r2 = function(e13) {
        var u2, a2 = fn(e13.issues);
        try {
          for (a2.s(); !(u2 = a2.n()).done; ) {
            var i2 = u2.value;
            if ("invalid_union" === i2.code) i2.unionErrors.map(r2);
            else if ("invalid_return_type" === i2.code) r2(i2.returnTypeError);
            else if ("invalid_arguments" === i2.code) r2(i2.argumentsError);
            else if (0 === i2.path.length) n2._errors.push(t2(i2));
            else for (var o2 = n2, s2 = 0; s2 < i2.path.length; ) {
              var c2 = i2.path[s2];
              s2 === i2.path.length - 1 ? (o2[c2] = o2[c2] || { _errors: [] }, o2[c2]._errors.push(t2(i2))) : o2[c2] = o2[c2] || { _errors: [] }, o2 = o2[c2], s2++;
            }
          }
        } catch (e14) {
          a2.e(e14);
        } finally {
          a2.f();
        }
      };
      return r2(this), n2;
    } }, { key: "toString", value: function() {
      return this.message;
    } }, { key: "message", get: function() {
      return JSON.stringify(this.issues, is.jsonStringifyReplacer, 2);
    } }, { key: "isEmpty", get: function() {
      return 0 === this.issues.length;
    } }, { key: "flatten", value: function() {
      var e12, t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function(e13) {
        return e13.message;
      }, n2 = {}, r2 = [], u2 = fn(this.issues);
      try {
        for (u2.s(); !(e12 = u2.n()).done; ) {
          var a2 = e12.value;
          if (a2.path.length > 0) {
            var i2 = a2.path[0];
            n2[i2] = n2[i2] || [], n2[i2].push(t2(a2));
          } else r2.push(t2(a2));
        }
      } catch (e13) {
        u2.e(e13);
      } finally {
        u2.f();
      }
      return { formErrors: r2, fieldErrors: n2 };
    } }, { key: "formErrors", get: function() {
      return this.flatten();
    } }], [{ key: "assert", value: function(t2) {
      if (!(t2 instanceof e11)) throw new Error("Not a ZodError: ".concat(t2));
    } }]);
  })();
  vs.create = function(e11) {
    return new vs(e11);
  };
  var ms = function(e11, t2) {
    var n2;
    switch (e11.code) {
      case hs.invalid_type:
        n2 = e11.received === ds.undefined ? "Required" : "Expected ".concat(e11.expected, ", received ").concat(e11.received);
        break;
      case hs.invalid_literal:
        n2 = "Invalid literal value, expected ".concat(JSON.stringify(e11.expected, is.jsonStringifyReplacer));
        break;
      case hs.unrecognized_keys:
        n2 = "Unrecognized key(s) in object: ".concat(is.joinValues(e11.keys, ", "));
        break;
      case hs.invalid_union:
        n2 = "Invalid input";
        break;
      case hs.invalid_union_discriminator:
        n2 = "Invalid discriminator value. Expected ".concat(is.joinValues(e11.options));
        break;
      case hs.invalid_enum_value:
        n2 = "Invalid enum value. Expected ".concat(is.joinValues(e11.options), ", received '").concat(e11.received, "'");
        break;
      case hs.invalid_arguments:
        n2 = "Invalid function arguments";
        break;
      case hs.invalid_return_type:
        n2 = "Invalid function return type";
        break;
      case hs.invalid_date:
        n2 = "Invalid date";
        break;
      case hs.invalid_string:
        "object" === An(e11.validation) ? "includes" in e11.validation ? (n2 = 'Invalid input: must include "'.concat(e11.validation.includes, '"'), "number" == typeof e11.validation.position && (n2 = "".concat(n2, " at one or more positions greater than or equal to ").concat(e11.validation.position))) : "startsWith" in e11.validation ? n2 = 'Invalid input: must start with "'.concat(e11.validation.startsWith, '"') : "endsWith" in e11.validation ? n2 = 'Invalid input: must end with "'.concat(e11.validation.endsWith, '"') : is.assertNever(e11.validation) : n2 = "regex" !== e11.validation ? "Invalid ".concat(e11.validation) : "Invalid";
        break;
      case hs.too_small:
        n2 = "array" === e11.type ? "Array must contain ".concat(e11.exact ? "exactly" : e11.inclusive ? "at least" : "more than", " ").concat(e11.minimum, " element(s)") : "string" === e11.type ? "String must contain ".concat(e11.exact ? "exactly" : e11.inclusive ? "at least" : "over", " ").concat(e11.minimum, " character(s)") : "number" === e11.type || "bigint" === e11.type ? "Number must be ".concat(e11.exact ? "exactly equal to " : e11.inclusive ? "greater than or equal to " : "greater than ").concat(e11.minimum) : "date" === e11.type ? "Date must be ".concat(e11.exact ? "exactly equal to " : e11.inclusive ? "greater than or equal to " : "greater than ").concat(new Date(Number(e11.minimum))) : "Invalid input";
        break;
      case hs.too_big:
        n2 = "array" === e11.type ? "Array must contain ".concat(e11.exact ? "exactly" : e11.inclusive ? "at most" : "less than", " ").concat(e11.maximum, " element(s)") : "string" === e11.type ? "String must contain ".concat(e11.exact ? "exactly" : e11.inclusive ? "at most" : "under", " ").concat(e11.maximum, " character(s)") : "number" === e11.type ? "Number must be ".concat(e11.exact ? "exactly" : e11.inclusive ? "less than or equal to" : "less than", " ").concat(e11.maximum) : "bigint" === e11.type ? "BigInt must be ".concat(e11.exact ? "exactly" : e11.inclusive ? "less than or equal to" : "less than", " ").concat(e11.maximum) : "date" === e11.type ? "Date must be ".concat(e11.exact ? "exactly" : e11.inclusive ? "smaller than or equal to" : "smaller than", " ").concat(new Date(Number(e11.maximum))) : "Invalid input";
        break;
      case hs.custom:
        n2 = "Invalid input";
        break;
      case hs.invalid_intersection_types:
        n2 = "Intersection results could not be merged";
        break;
      case hs.not_multiple_of:
        n2 = "Number must be a multiple of ".concat(e11.multipleOf);
        break;
      case hs.not_finite:
        n2 = "Number must be finite";
        break;
      default:
        n2 = t2.defaultError, is.assertNever(e11);
    }
    return { message: n2 };
  };
  var Ds = ms;
  function ys() {
    return Ds;
  }
  var gs = function(e11) {
    var t2 = e11.data, n2 = e11.path, r2 = e11.errorMaps, u2 = e11.issueData, a2 = [].concat(Cn(n2), Cn(u2.path || [])), i2 = yn(yn({}, u2), {}, { path: a2 });
    if (void 0 !== u2.message) return yn(yn({}, u2), {}, { path: a2, message: u2.message });
    var o2, s2 = "", c2 = r2.filter(function(e12) {
      return !!e12;
    }).slice().reverse(), l2 = fn(c2);
    try {
      for (l2.s(); !(o2 = l2.n()).done; ) s2 = (0, o2.value)(i2, { data: t2, defaultError: s2 }).message;
    } catch (e12) {
      l2.e(e12);
    } finally {
      l2.f();
    }
    return yn(yn({}, u2), {}, { path: a2, message: s2 });
  };
  function Fs(e11, t2) {
    var n2 = ys(), r2 = gs({ issueData: t2, data: e11.data, path: e11.path, errorMaps: [e11.common.contextualErrorMap, e11.schemaErrorMap, n2, n2 === ms ? void 0 : ms].filter(function(e12) {
      return !!e12;
    }) });
    e11.common.issues.push(r2);
  }
  var Es;
  var _s = (function() {
    function e11() {
      on(this, e11), this.value = "valid";
    }
    return ln(e11, [{ key: "dirty", value: function() {
      "valid" === this.value && (this.value = "dirty");
    } }, { key: "abort", value: function() {
      "aborted" !== this.value && (this.value = "aborted");
    } }], [{ key: "mergeArray", value: function(e12, t3) {
      var n2, r2 = [], u2 = fn(t3);
      try {
        for (u2.s(); !(n2 = u2.n()).done; ) {
          var a2 = n2.value;
          if ("aborted" === a2.status) return bs;
          "dirty" === a2.status && e12.dirty(), r2.push(a2.value);
        }
      } catch (e13) {
        u2.e(e13);
      } finally {
        u2.f();
      }
      return { status: e12.value, value: r2 };
    } }, { key: "mergeObjectAsync", value: (t2 = un(Fn().m(function t3(n2, r2) {
      var u2, a2, i2, o2, s2, c2, l2;
      return Fn().w(function(t4) {
        for (; ; ) switch (t4.p = t4.n) {
          case 0:
            u2 = [], a2 = fn(r2), t4.p = 1, a2.s();
          case 2:
            if ((i2 = a2.n()).done) {
              t4.n = 6;
              break;
            }
            return o2 = i2.value, t4.n = 3, o2.key;
          case 3:
            return s2 = t4.v, t4.n = 4, o2.value;
          case 4:
            c2 = t4.v, u2.push({ key: s2, value: c2 });
          case 5:
            t4.n = 2;
            break;
          case 6:
            t4.n = 8;
            break;
          case 7:
            t4.p = 7, l2 = t4.v, a2.e(l2);
          case 8:
            return t4.p = 8, a2.f(), t4.f(8);
          case 9:
            return t4.a(2, e11.mergeObjectSync(n2, u2));
        }
      }, t3, null, [[1, 7, 8, 9]]);
    })), function(e12, n2) {
      return t2.apply(this, arguments);
    }) }, { key: "mergeObjectSync", value: function(e12, t3) {
      var n2, r2 = {}, u2 = fn(t3);
      try {
        for (u2.s(); !(n2 = u2.n()).done; ) {
          var a2 = n2.value, i2 = a2.key, o2 = a2.value;
          if ("aborted" === i2.status) return bs;
          if ("aborted" === o2.status) return bs;
          "dirty" === i2.status && e12.dirty(), "dirty" === o2.status && e12.dirty(), "__proto__" === i2.value || void 0 === o2.value && !a2.alwaysSet || (r2[i2.value] = o2.value);
        }
      } catch (e13) {
        u2.e(e13);
      } finally {
        u2.f();
      }
      return { status: e12.value, value: r2 };
    } }]);
    var t2;
  })();
  var bs = Object.freeze({ status: "aborted" });
  var Cs = function(e11) {
    return { status: "dirty", value: e11 };
  };
  var ks = function(e11) {
    return { status: "valid", value: e11 };
  };
  var As = function(e11) {
    return "aborted" === e11.status;
  };
  var ws = function(e11) {
    return "dirty" === e11.status;
  };
  var Ss = function(e11) {
    return "valid" === e11.status;
  };
  var xs = function(e11) {
    return "undefined" != typeof Promise && e11 instanceof Promise;
  };
  !(function(e11) {
    e11.errToObj = function(e12) {
      return "string" == typeof e12 ? { message: e12 } : e12 || {};
    }, e11.toString = function(e12) {
      return "string" == typeof e12 ? e12 : null == e12 ? void 0 : e12.message;
    };
  })(Es || (Es = {}));
  var Os = ln(function e5(t2, n2, r2, u2) {
    on(this, e5), this._cachedPath = [], this.parent = t2, this.data = n2, this._path = r2, this._key = u2;
  }, [{ key: "path", get: function() {
    var e11, t2;
    return this._cachedPath.length || (Array.isArray(this._key) ? (e11 = this._cachedPath).push.apply(e11, Cn(this._path).concat(Cn(this._key))) : (t2 = this._cachedPath).push.apply(t2, Cn(this._path).concat([this._key]))), this._cachedPath;
  } }]);
  var Bs = function(e11, t2) {
    if (Ss(t2)) return { success: true, data: t2.value };
    if (!e11.common.issues.length) throw new Error("Validation failed but no issues detected.");
    return { success: false, get error() {
      if (this._error) return this._error;
      var t3 = new vs(e11.common.issues);
      return this._error = t3, this._error;
    } };
  };
  function Is(e11) {
    if (!e11) return {};
    var t2 = e11.errorMap, n2 = e11.invalid_type_error, r2 = e11.required_error, u2 = e11.description;
    if (t2 && (n2 || r2)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return t2 ? { errorMap: t2, description: u2 } : { errorMap: function(t3, u3) {
      var a2, i2, o2 = e11.message;
      return "invalid_enum_value" === t3.code ? { message: null != o2 ? o2 : u3.defaultError } : void 0 === u3.data ? { message: null !== (i2 = null != o2 ? o2 : r2) && void 0 !== i2 ? i2 : u3.defaultError } : "invalid_type" !== t3.code ? { message: u3.defaultError } : { message: null !== (a2 = null != o2 ? o2 : n2) && void 0 !== a2 ? a2 : u3.defaultError };
    }, description: u2 };
  }
  var Ts;
  var Ps = (function() {
    return ln(function e12(t2) {
      var n2 = this;
      on(this, e12), this.spa = this.safeParseAsync, this._def = t2, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = { version: 1, vendor: "zod", validate: function(e13) {
        return n2["~validate"](e13);
      } };
    }, [{ key: "description", get: function() {
      return this._def.description;
    } }, { key: "_getType", value: function(e12) {
      return ps(e12.data);
    } }, { key: "_getOrReturnCtx", value: function(e12, t2) {
      return t2 || { common: e12.parent.common, data: e12.data, parsedType: ps(e12.data), schemaErrorMap: this._def.errorMap, path: e12.path, parent: e12.parent };
    } }, { key: "_processInputParams", value: function(e12) {
      return { status: new _s(), ctx: { common: e12.parent.common, data: e12.data, parsedType: ps(e12.data), schemaErrorMap: this._def.errorMap, path: e12.path, parent: e12.parent } };
    } }, { key: "_parseSync", value: function(e12) {
      var t2 = this._parse(e12);
      if (xs(t2)) throw new Error("Synchronous parse encountered promise.");
      return t2;
    } }, { key: "_parseAsync", value: function(e12) {
      var t2 = this._parse(e12);
      return Promise.resolve(t2);
    } }, { key: "parse", value: function(e12, t2) {
      var n2 = this.safeParse(e12, t2);
      if (n2.success) return n2.data;
      throw n2.error;
    } }, { key: "safeParse", value: function(e12, t2) {
      var n2, r2 = { common: { issues: [], async: null !== (n2 = null == t2 ? void 0 : t2.async) && void 0 !== n2 && n2, contextualErrorMap: null == t2 ? void 0 : t2.errorMap }, path: (null == t2 ? void 0 : t2.path) || [], schemaErrorMap: this._def.errorMap, parent: null, data: e12, parsedType: ps(e12) }, u2 = this._parseSync({ data: e12, path: r2.path, parent: r2 });
      return Bs(r2, u2);
    } }, { key: "~validate", value: function(e12) {
      var t2 = { common: { issues: [], async: !!this["~standard"].async }, path: [], schemaErrorMap: this._def.errorMap, parent: null, data: e12, parsedType: ps(e12) };
      if (!this["~standard"].async) try {
        var n2 = this._parseSync({ data: e12, path: [], parent: t2 });
        return Ss(n2) ? { value: n2.value } : { issues: t2.common.issues };
      } catch (e13) {
        var r2;
        null != e13 && null !== (r2 = e13.message) && void 0 !== r2 && null !== (r2 = r2.toLowerCase()) && void 0 !== r2 && r2.includes("encountered") && (this["~standard"].async = true), t2.common = { issues: [], async: true };
      }
      return this._parseAsync({ data: e12, path: [], parent: t2 }).then(function(e13) {
        return Ss(e13) ? { value: e13.value } : { issues: t2.common.issues };
      });
    } }, { key: "parseAsync", value: (e11 = un(Fn().m(function e12(t2, n2) {
      var r2;
      return Fn().w(function(e13) {
        for (; ; ) switch (e13.n) {
          case 0:
            return e13.n = 1, this.safeParseAsync(t2, n2);
          case 1:
            if (!(r2 = e13.v).success) {
              e13.n = 2;
              break;
            }
            return e13.a(2, r2.data);
          case 2:
            throw r2.error;
          case 3:
            return e13.a(2);
        }
      }, e12, this);
    })), function(t2, n2) {
      return e11.apply(this, arguments);
    }) }, { key: "safeParseAsync", value: (function() {
      var e12 = un(Fn().m(function e13(t2, n2) {
        var r2, u2, a2;
        return Fn().w(function(e14) {
          for (; ; ) switch (e14.n) {
            case 0:
              return r2 = { common: { issues: [], contextualErrorMap: null == n2 ? void 0 : n2.errorMap, async: true }, path: (null == n2 ? void 0 : n2.path) || [], schemaErrorMap: this._def.errorMap, parent: null, data: t2, parsedType: ps(t2) }, u2 = this._parse({ data: t2, path: r2.path, parent: r2 }), e14.n = 1, xs(u2) ? u2 : Promise.resolve(u2);
            case 1:
              return a2 = e14.v, e14.a(2, Bs(r2, a2));
          }
        }, e13, this);
      }));
      return function(t2, n2) {
        return e12.apply(this, arguments);
      };
    })() }, { key: "refine", value: function(e12, t2) {
      return this._refinement(function(n2, r2) {
        var u2 = e12(n2), a2 = function() {
          return r2.addIssue(yn({ code: hs.custom }, (function(e13) {
            return "string" == typeof t2 || void 0 === t2 ? { message: t2 } : "function" == typeof t2 ? t2(e13) : t2;
          })(n2)));
        };
        return "undefined" != typeof Promise && u2 instanceof Promise ? u2.then(function(e13) {
          return !!e13 || (a2(), false);
        }) : !!u2 || (a2(), false);
      });
    } }, { key: "refinement", value: function(e12, t2) {
      return this._refinement(function(n2, r2) {
        return !!e12(n2) || (r2.addIssue("function" == typeof t2 ? t2(n2, r2) : t2), false);
      });
    } }, { key: "_refinement", value: function(e12) {
      return new jc({ schema: this, typeName: Lc.ZodEffects, effect: { type: "refinement", refinement: e12 } });
    } }, { key: "superRefine", value: function(e12) {
      return this._refinement(e12);
    } }, { key: "optional", value: function() {
      return Nc.create(this, this._def);
    } }, { key: "nullable", value: function() {
      return zc.create(this, this._def);
    } }, { key: "nullish", value: function() {
      return this.nullable().optional();
    } }, { key: "array", value: function() {
      return mc.create(this);
    } }, { key: "promise", value: function() {
      return Pc.create(this, this._def);
    } }, { key: "or", value: function(e12) {
      return gc.create([this, e12], this._def);
    } }, { key: "and", value: function(e12) {
      return bc.create(this, e12, this._def);
    } }, { key: "transform", value: function(e12) {
      return new jc(yn(yn({}, Is(this._def)), {}, { schema: this, typeName: Lc.ZodEffects, effect: { type: "transform", transform: e12 } }));
    } }, { key: "default", value: function(e12) {
      var t2 = "function" == typeof e12 ? e12 : function() {
        return e12;
      };
      return new Rc(yn(yn({}, Is(this._def)), {}, { innerType: this, defaultValue: t2, typeName: Lc.ZodDefault }));
    } }, { key: "brand", value: function() {
      return new $c(yn({ typeName: Lc.ZodBranded, type: this }, Is(this._def)));
    } }, { key: "catch", value: function(e12) {
      var t2 = "function" == typeof e12 ? e12 : function() {
        return e12;
      };
      return new Mc(yn(yn({}, Is(this._def)), {}, { innerType: this, catchValue: t2, typeName: Lc.ZodCatch }));
    } }, { key: "describe", value: function(e12) {
      return new this.constructor(yn(yn({}, this._def), {}, { description: e12 }));
    } }, { key: "pipe", value: function(e12) {
      return qc.create(this, e12);
    } }, { key: "readonly", value: function() {
      return Uc.create(this);
    } }, { key: "isOptional", value: function() {
      return this.safeParse(void 0).success;
    } }, { key: "isNullable", value: function() {
      return this.safeParse(null).success;
    } }]);
    var e11;
  })();
  var js = /^c[^\s-]{8,}$/i;
  var Ns = /^[0-9a-z]+$/;
  var zs = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
  var Rs = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
  var Ms = /^[a-z0-9_-]{21}$/i;
  var Zs = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
  var Ls = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
  var $s = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
  var qs = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
  var Us = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
  var Hs = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
  var Vs = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
  var Ws = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  var Ks = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
  var Js = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))";
  var Qs = new RegExp("^".concat(Js, "$"));
  function Gs(e11) {
    var t2 = "[0-5]\\d";
    e11.precision ? t2 = "".concat(t2, "\\.\\d{").concat(e11.precision, "}") : null == e11.precision && (t2 = "".concat(t2, "(\\.\\d+)?"));
    var n2 = e11.precision ? "+" : "?";
    return "([01]\\d|2[0-3]):[0-5]\\d(:".concat(t2, ")").concat(n2);
  }
  function Ys(e11) {
    return new RegExp("^".concat(Gs(e11), "$"));
  }
  function Xs(e11) {
    var t2 = "".concat(Js, "T").concat(Gs(e11)), n2 = [];
    return n2.push(e11.local ? "Z?" : "Z"), e11.offset && n2.push("([+-]\\d{2}:?\\d{2})"), t2 = "".concat(t2, "(").concat(n2.join("|"), ")"), new RegExp("^".concat(t2, "$"));
  }
  function ec(e11, t2) {
    return !("v4" !== t2 && t2 || !qs.test(e11)) || !("v6" !== t2 && t2 || !Hs.test(e11));
  }
  function tc(e11, t2) {
    if (!Zs.test(e11)) return false;
    try {
      var n2 = bn(e11.split("."), 1)[0];
      if (!n2) return false;
      var r2 = n2.replace(/-/g, "+").replace(/_/g, "/").padEnd(n2.length + (4 - n2.length % 4) % 4, "="), u2 = JSON.parse(atob(r2));
      return !("object" !== An(u2) || null === u2 || "typ" in u2 && "JWT" !== (null == u2 ? void 0 : u2.typ) || !u2.alg || t2 && u2.alg !== t2);
    } catch (e12) {
      return false;
    }
  }
  function nc(e11, t2) {
    return !("v4" !== t2 && t2 || !Us.test(e11)) || !("v6" !== t2 && t2 || !Vs.test(e11));
  }
  var rc = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      if (this._def.coerce && (e12.data = String(e12.data)), this._getType(e12) !== ds.string) {
        var t2 = this._getOrReturnCtx(e12);
        return Fs(t2, { code: hs.invalid_type, expected: ds.string, received: t2.parsedType }), bs;
      }
      var n2, r2 = new _s(), u2 = void 0, a2 = fn(this._def.checks);
      try {
        for (a2.s(); !(n2 = a2.n()).done; ) {
          var i2 = n2.value;
          if ("min" === i2.kind) e12.data.length < i2.value && (Fs(u2 = this._getOrReturnCtx(e12, u2), { code: hs.too_small, minimum: i2.value, type: "string", inclusive: true, exact: false, message: i2.message }), r2.dirty());
          else if ("max" === i2.kind) e12.data.length > i2.value && (Fs(u2 = this._getOrReturnCtx(e12, u2), { code: hs.too_big, maximum: i2.value, type: "string", inclusive: true, exact: false, message: i2.message }), r2.dirty());
          else if ("length" === i2.kind) {
            var o2 = e12.data.length > i2.value, s2 = e12.data.length < i2.value;
            (o2 || s2) && (u2 = this._getOrReturnCtx(e12, u2), o2 ? Fs(u2, { code: hs.too_big, maximum: i2.value, type: "string", inclusive: true, exact: true, message: i2.message }) : s2 && Fs(u2, { code: hs.too_small, minimum: i2.value, type: "string", inclusive: true, exact: true, message: i2.message }), r2.dirty());
          } else if ("email" === i2.kind) $s.test(e12.data) || (Fs(u2 = this._getOrReturnCtx(e12, u2), { validation: "email", code: hs.invalid_string, message: i2.message }), r2.dirty());
          else if ("emoji" === i2.kind) Ts || (Ts = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Ts.test(e12.data) || (Fs(u2 = this._getOrReturnCtx(e12, u2), { validation: "emoji", code: hs.invalid_string, message: i2.message }), r2.dirty());
          else if ("uuid" === i2.kind) Rs.test(e12.data) || (Fs(u2 = this._getOrReturnCtx(e12, u2), { validation: "uuid", code: hs.invalid_string, message: i2.message }), r2.dirty());
          else if ("nanoid" === i2.kind) Ms.test(e12.data) || (Fs(u2 = this._getOrReturnCtx(e12, u2), { validation: "nanoid", code: hs.invalid_string, message: i2.message }), r2.dirty());
          else if ("cuid" === i2.kind) js.test(e12.data) || (Fs(u2 = this._getOrReturnCtx(e12, u2), { validation: "cuid", code: hs.invalid_string, message: i2.message }), r2.dirty());
          else if ("cuid2" === i2.kind) Ns.test(e12.data) || (Fs(u2 = this._getOrReturnCtx(e12, u2), { validation: "cuid2", code: hs.invalid_string, message: i2.message }), r2.dirty());
          else if ("ulid" === i2.kind) zs.test(e12.data) || (Fs(u2 = this._getOrReturnCtx(e12, u2), { validation: "ulid", code: hs.invalid_string, message: i2.message }), r2.dirty());
          else if ("url" === i2.kind) try {
            new URL(e12.data);
          } catch (t3) {
            Fs(u2 = this._getOrReturnCtx(e12, u2), { validation: "url", code: hs.invalid_string, message: i2.message }), r2.dirty();
          }
          else "regex" === i2.kind ? (i2.regex.lastIndex = 0, i2.regex.test(e12.data) || (Fs(u2 = this._getOrReturnCtx(e12, u2), { validation: "regex", code: hs.invalid_string, message: i2.message }), r2.dirty())) : "trim" === i2.kind ? e12.data = e12.data.trim() : "includes" === i2.kind ? e12.data.includes(i2.value, i2.position) || (Fs(u2 = this._getOrReturnCtx(e12, u2), { code: hs.invalid_string, validation: { includes: i2.value, position: i2.position }, message: i2.message }), r2.dirty()) : "toLowerCase" === i2.kind ? e12.data = e12.data.toLowerCase() : "toUpperCase" === i2.kind ? e12.data = e12.data.toUpperCase() : "startsWith" === i2.kind ? e12.data.startsWith(i2.value) || (Fs(u2 = this._getOrReturnCtx(e12, u2), { code: hs.invalid_string, validation: { startsWith: i2.value }, message: i2.message }), r2.dirty()) : "endsWith" === i2.kind ? e12.data.endsWith(i2.value) || (Fs(u2 = this._getOrReturnCtx(e12, u2), { code: hs.invalid_string, validation: { endsWith: i2.value }, message: i2.message }), r2.dirty()) : "datetime" === i2.kind ? Xs(i2).test(e12.data) || (Fs(u2 = this._getOrReturnCtx(e12, u2), { code: hs.invalid_string, validation: "datetime", message: i2.message }), r2.dirty()) : "date" === i2.kind ? Qs.test(e12.data) || (Fs(u2 = this._getOrReturnCtx(e12, u2), { code: hs.invalid_string, validation: "date", message: i2.message }), r2.dirty()) : "time" === i2.kind ? Ys(i2).test(e12.data) || (Fs(u2 = this._getOrReturnCtx(e12, u2), { code: hs.invalid_string, validation: "time", message: i2.message }), r2.dirty()) : "duration" === i2.kind ? Ls.test(e12.data) || (Fs(u2 = this._getOrReturnCtx(e12, u2), { validation: "duration", code: hs.invalid_string, message: i2.message }), r2.dirty()) : "ip" === i2.kind ? ec(e12.data, i2.version) || (Fs(u2 = this._getOrReturnCtx(e12, u2), { validation: "ip", code: hs.invalid_string, message: i2.message }), r2.dirty()) : "jwt" === i2.kind ? tc(e12.data, i2.alg) || (Fs(u2 = this._getOrReturnCtx(e12, u2), { validation: "jwt", code: hs.invalid_string, message: i2.message }), r2.dirty()) : "cidr" === i2.kind ? nc(e12.data, i2.version) || (Fs(u2 = this._getOrReturnCtx(e12, u2), { validation: "cidr", code: hs.invalid_string, message: i2.message }), r2.dirty()) : "base64" === i2.kind ? Ws.test(e12.data) || (Fs(u2 = this._getOrReturnCtx(e12, u2), { validation: "base64", code: hs.invalid_string, message: i2.message }), r2.dirty()) : "base64url" === i2.kind ? Ks.test(e12.data) || (Fs(u2 = this._getOrReturnCtx(e12, u2), { validation: "base64url", code: hs.invalid_string, message: i2.message }), r2.dirty()) : is.assertNever(i2);
        }
      } catch (e13) {
        a2.e(e13);
      } finally {
        a2.f();
      }
      return { status: r2.value, value: e12.data };
    } }, { key: "_regex", value: function(e12, t2, n2) {
      return this.refinement(function(t3) {
        return e12.test(t3);
      }, yn({ validation: t2, code: hs.invalid_string }, Es.errToObj(n2)));
    } }, { key: "_addCheck", value: function(t2) {
      return new e11(yn(yn({}, this._def), {}, { checks: [].concat(Cn(this._def.checks), [t2]) }));
    } }, { key: "email", value: function(e12) {
      return this._addCheck(yn({ kind: "email" }, Es.errToObj(e12)));
    } }, { key: "url", value: function(e12) {
      return this._addCheck(yn({ kind: "url" }, Es.errToObj(e12)));
    } }, { key: "emoji", value: function(e12) {
      return this._addCheck(yn({ kind: "emoji" }, Es.errToObj(e12)));
    } }, { key: "uuid", value: function(e12) {
      return this._addCheck(yn({ kind: "uuid" }, Es.errToObj(e12)));
    } }, { key: "nanoid", value: function(e12) {
      return this._addCheck(yn({ kind: "nanoid" }, Es.errToObj(e12)));
    } }, { key: "cuid", value: function(e12) {
      return this._addCheck(yn({ kind: "cuid" }, Es.errToObj(e12)));
    } }, { key: "cuid2", value: function(e12) {
      return this._addCheck(yn({ kind: "cuid2" }, Es.errToObj(e12)));
    } }, { key: "ulid", value: function(e12) {
      return this._addCheck(yn({ kind: "ulid" }, Es.errToObj(e12)));
    } }, { key: "base64", value: function(e12) {
      return this._addCheck(yn({ kind: "base64" }, Es.errToObj(e12)));
    } }, { key: "base64url", value: function(e12) {
      return this._addCheck(yn({ kind: "base64url" }, Es.errToObj(e12)));
    } }, { key: "jwt", value: function(e12) {
      return this._addCheck(yn({ kind: "jwt" }, Es.errToObj(e12)));
    } }, { key: "ip", value: function(e12) {
      return this._addCheck(yn({ kind: "ip" }, Es.errToObj(e12)));
    } }, { key: "cidr", value: function(e12) {
      return this._addCheck(yn({ kind: "cidr" }, Es.errToObj(e12)));
    } }, { key: "datetime", value: function(e12) {
      var t2, n2;
      return "string" == typeof e12 ? this._addCheck({ kind: "datetime", precision: null, offset: false, local: false, message: e12 }) : this._addCheck(yn({ kind: "datetime", precision: void 0 === (null == e12 ? void 0 : e12.precision) ? null : null == e12 ? void 0 : e12.precision, offset: null !== (t2 = null == e12 ? void 0 : e12.offset) && void 0 !== t2 && t2, local: null !== (n2 = null == e12 ? void 0 : e12.local) && void 0 !== n2 && n2 }, Es.errToObj(null == e12 ? void 0 : e12.message)));
    } }, { key: "date", value: function(e12) {
      return this._addCheck({ kind: "date", message: e12 });
    } }, { key: "time", value: function(e12) {
      return "string" == typeof e12 ? this._addCheck({ kind: "time", precision: null, message: e12 }) : this._addCheck(yn({ kind: "time", precision: void 0 === (null == e12 ? void 0 : e12.precision) ? null : null == e12 ? void 0 : e12.precision }, Es.errToObj(null == e12 ? void 0 : e12.message)));
    } }, { key: "duration", value: function(e12) {
      return this._addCheck(yn({ kind: "duration" }, Es.errToObj(e12)));
    } }, { key: "regex", value: function(e12, t2) {
      return this._addCheck(yn({ kind: "regex", regex: e12 }, Es.errToObj(t2)));
    } }, { key: "includes", value: function(e12, t2) {
      return this._addCheck(yn({ kind: "includes", value: e12, position: null == t2 ? void 0 : t2.position }, Es.errToObj(null == t2 ? void 0 : t2.message)));
    } }, { key: "startsWith", value: function(e12, t2) {
      return this._addCheck(yn({ kind: "startsWith", value: e12 }, Es.errToObj(t2)));
    } }, { key: "endsWith", value: function(e12, t2) {
      return this._addCheck(yn({ kind: "endsWith", value: e12 }, Es.errToObj(t2)));
    } }, { key: "min", value: function(e12, t2) {
      return this._addCheck(yn({ kind: "min", value: e12 }, Es.errToObj(t2)));
    } }, { key: "max", value: function(e12, t2) {
      return this._addCheck(yn({ kind: "max", value: e12 }, Es.errToObj(t2)));
    } }, { key: "length", value: function(e12, t2) {
      return this._addCheck(yn({ kind: "length", value: e12 }, Es.errToObj(t2)));
    } }, { key: "nonempty", value: function(e12) {
      return this.min(1, Es.errToObj(e12));
    } }, { key: "trim", value: function() {
      return new e11(yn(yn({}, this._def), {}, { checks: [].concat(Cn(this._def.checks), [{ kind: "trim" }]) }));
    } }, { key: "toLowerCase", value: function() {
      return new e11(yn(yn({}, this._def), {}, { checks: [].concat(Cn(this._def.checks), [{ kind: "toLowerCase" }]) }));
    } }, { key: "toUpperCase", value: function() {
      return new e11(yn(yn({}, this._def), {}, { checks: [].concat(Cn(this._def.checks), [{ kind: "toUpperCase" }]) }));
    } }, { key: "isDatetime", get: function() {
      return !!this._def.checks.find(function(e12) {
        return "datetime" === e12.kind;
      });
    } }, { key: "isDate", get: function() {
      return !!this._def.checks.find(function(e12) {
        return "date" === e12.kind;
      });
    } }, { key: "isTime", get: function() {
      return !!this._def.checks.find(function(e12) {
        return "time" === e12.kind;
      });
    } }, { key: "isDuration", get: function() {
      return !!this._def.checks.find(function(e12) {
        return "duration" === e12.kind;
      });
    } }, { key: "isEmail", get: function() {
      return !!this._def.checks.find(function(e12) {
        return "email" === e12.kind;
      });
    } }, { key: "isURL", get: function() {
      return !!this._def.checks.find(function(e12) {
        return "url" === e12.kind;
      });
    } }, { key: "isEmoji", get: function() {
      return !!this._def.checks.find(function(e12) {
        return "emoji" === e12.kind;
      });
    } }, { key: "isUUID", get: function() {
      return !!this._def.checks.find(function(e12) {
        return "uuid" === e12.kind;
      });
    } }, { key: "isNANOID", get: function() {
      return !!this._def.checks.find(function(e12) {
        return "nanoid" === e12.kind;
      });
    } }, { key: "isCUID", get: function() {
      return !!this._def.checks.find(function(e12) {
        return "cuid" === e12.kind;
      });
    } }, { key: "isCUID2", get: function() {
      return !!this._def.checks.find(function(e12) {
        return "cuid2" === e12.kind;
      });
    } }, { key: "isULID", get: function() {
      return !!this._def.checks.find(function(e12) {
        return "ulid" === e12.kind;
      });
    } }, { key: "isIP", get: function() {
      return !!this._def.checks.find(function(e12) {
        return "ip" === e12.kind;
      });
    } }, { key: "isCIDR", get: function() {
      return !!this._def.checks.find(function(e12) {
        return "cidr" === e12.kind;
      });
    } }, { key: "isBase64", get: function() {
      return !!this._def.checks.find(function(e12) {
        return "base64" === e12.kind;
      });
    } }, { key: "isBase64url", get: function() {
      return !!this._def.checks.find(function(e12) {
        return "base64url" === e12.kind;
      });
    } }, { key: "minLength", get: function() {
      var e12, t2 = null, n2 = fn(this._def.checks);
      try {
        for (n2.s(); !(e12 = n2.n()).done; ) {
          var r2 = e12.value;
          "min" === r2.kind && (null === t2 || r2.value > t2) && (t2 = r2.value);
        }
      } catch (e13) {
        n2.e(e13);
      } finally {
        n2.f();
      }
      return t2;
    } }, { key: "maxLength", get: function() {
      var e12, t2 = null, n2 = fn(this._def.checks);
      try {
        for (n2.s(); !(e12 = n2.n()).done; ) {
          var r2 = e12.value;
          "max" === r2.kind && (null === t2 || r2.value < t2) && (t2 = r2.value);
        }
      } catch (e13) {
        n2.e(e13);
      } finally {
        n2.f();
      }
      return t2;
    } }]);
  })();
  function uc(e11, t2) {
    var n2 = (e11.toString().split(".")[1] || "").length, r2 = (t2.toString().split(".")[1] || "").length, u2 = n2 > r2 ? n2 : r2;
    return Number.parseInt(e11.toFixed(u2).replace(".", "")) % Number.parseInt(t2.toFixed(u2).replace(".", "")) / Math.pow(10, u2);
  }
  rc.create = function(e11) {
    var t2;
    return new rc(yn({ checks: [], typeName: Lc.ZodString, coerce: null !== (t2 = null == e11 ? void 0 : e11.coerce) && void 0 !== t2 && t2 }, Is(e11)));
  };
  var ac = (function() {
    function e11() {
      var t2;
      return on(this, e11), (t2 = an(this, e11, arguments)).min = t2.gte, t2.max = t2.lte, t2.step = t2.multipleOf, t2;
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      if (this._def.coerce && (e12.data = Number(e12.data)), this._getType(e12) !== ds.number) {
        var t2 = this._getOrReturnCtx(e12);
        return Fs(t2, { code: hs.invalid_type, expected: ds.number, received: t2.parsedType }), bs;
      }
      var n2, r2 = void 0, u2 = new _s(), a2 = fn(this._def.checks);
      try {
        for (a2.s(); !(n2 = a2.n()).done; ) {
          var i2 = n2.value;
          "int" === i2.kind ? is.isInteger(e12.data) || (Fs(r2 = this._getOrReturnCtx(e12, r2), { code: hs.invalid_type, expected: "integer", received: "float", message: i2.message }), u2.dirty()) : "min" === i2.kind ? (i2.inclusive ? e12.data < i2.value : e12.data <= i2.value) && (Fs(r2 = this._getOrReturnCtx(e12, r2), { code: hs.too_small, minimum: i2.value, type: "number", inclusive: i2.inclusive, exact: false, message: i2.message }), u2.dirty()) : "max" === i2.kind ? (i2.inclusive ? e12.data > i2.value : e12.data >= i2.value) && (Fs(r2 = this._getOrReturnCtx(e12, r2), { code: hs.too_big, maximum: i2.value, type: "number", inclusive: i2.inclusive, exact: false, message: i2.message }), u2.dirty()) : "multipleOf" === i2.kind ? 0 !== uc(e12.data, i2.value) && (Fs(r2 = this._getOrReturnCtx(e12, r2), { code: hs.not_multiple_of, multipleOf: i2.value, message: i2.message }), u2.dirty()) : "finite" === i2.kind ? Number.isFinite(e12.data) || (Fs(r2 = this._getOrReturnCtx(e12, r2), { code: hs.not_finite, message: i2.message }), u2.dirty()) : is.assertNever(i2);
        }
      } catch (e13) {
        a2.e(e13);
      } finally {
        a2.f();
      }
      return { status: u2.value, value: e12.data };
    } }, { key: "gte", value: function(e12, t2) {
      return this.setLimit("min", e12, true, Es.toString(t2));
    } }, { key: "gt", value: function(e12, t2) {
      return this.setLimit("min", e12, false, Es.toString(t2));
    } }, { key: "lte", value: function(e12, t2) {
      return this.setLimit("max", e12, true, Es.toString(t2));
    } }, { key: "lt", value: function(e12, t2) {
      return this.setLimit("max", e12, false, Es.toString(t2));
    } }, { key: "setLimit", value: function(t2, n2, r2, u2) {
      return new e11(yn(yn({}, this._def), {}, { checks: [].concat(Cn(this._def.checks), [{ kind: t2, value: n2, inclusive: r2, message: Es.toString(u2) }]) }));
    } }, { key: "_addCheck", value: function(t2) {
      return new e11(yn(yn({}, this._def), {}, { checks: [].concat(Cn(this._def.checks), [t2]) }));
    } }, { key: "int", value: function(e12) {
      return this._addCheck({ kind: "int", message: Es.toString(e12) });
    } }, { key: "positive", value: function(e12) {
      return this._addCheck({ kind: "min", value: 0, inclusive: false, message: Es.toString(e12) });
    } }, { key: "negative", value: function(e12) {
      return this._addCheck({ kind: "max", value: 0, inclusive: false, message: Es.toString(e12) });
    } }, { key: "nonpositive", value: function(e12) {
      return this._addCheck({ kind: "max", value: 0, inclusive: true, message: Es.toString(e12) });
    } }, { key: "nonnegative", value: function(e12) {
      return this._addCheck({ kind: "min", value: 0, inclusive: true, message: Es.toString(e12) });
    } }, { key: "multipleOf", value: function(e12, t2) {
      return this._addCheck({ kind: "multipleOf", value: e12, message: Es.toString(t2) });
    } }, { key: "finite", value: function(e12) {
      return this._addCheck({ kind: "finite", message: Es.toString(e12) });
    } }, { key: "safe", value: function(e12) {
      return this._addCheck({ kind: "min", inclusive: true, value: Number.MIN_SAFE_INTEGER, message: Es.toString(e12) })._addCheck({ kind: "max", inclusive: true, value: Number.MAX_SAFE_INTEGER, message: Es.toString(e12) });
    } }, { key: "minValue", get: function() {
      var e12, t2 = null, n2 = fn(this._def.checks);
      try {
        for (n2.s(); !(e12 = n2.n()).done; ) {
          var r2 = e12.value;
          "min" === r2.kind && (null === t2 || r2.value > t2) && (t2 = r2.value);
        }
      } catch (e13) {
        n2.e(e13);
      } finally {
        n2.f();
      }
      return t2;
    } }, { key: "maxValue", get: function() {
      var e12, t2 = null, n2 = fn(this._def.checks);
      try {
        for (n2.s(); !(e12 = n2.n()).done; ) {
          var r2 = e12.value;
          "max" === r2.kind && (null === t2 || r2.value < t2) && (t2 = r2.value);
        }
      } catch (e13) {
        n2.e(e13);
      } finally {
        n2.f();
      }
      return t2;
    } }, { key: "isInt", get: function() {
      return !!this._def.checks.find(function(e12) {
        return "int" === e12.kind || "multipleOf" === e12.kind && is.isInteger(e12.value);
      });
    } }, { key: "isFinite", get: function() {
      var e12, t2 = null, n2 = null, r2 = fn(this._def.checks);
      try {
        for (r2.s(); !(e12 = r2.n()).done; ) {
          var u2 = e12.value;
          if ("finite" === u2.kind || "int" === u2.kind || "multipleOf" === u2.kind) return true;
          "min" === u2.kind ? (null === n2 || u2.value > n2) && (n2 = u2.value) : "max" === u2.kind && (null === t2 || u2.value < t2) && (t2 = u2.value);
        }
      } catch (e13) {
        r2.e(e13);
      } finally {
        r2.f();
      }
      return Number.isFinite(n2) && Number.isFinite(t2);
    } }]);
  })();
  ac.create = function(e11) {
    return new ac(yn({ checks: [], typeName: Lc.ZodNumber, coerce: (null == e11 ? void 0 : e11.coerce) || false }, Is(e11)));
  };
  var ic = (function() {
    function e11() {
      var t2;
      return on(this, e11), (t2 = an(this, e11, arguments)).min = t2.gte, t2.max = t2.lte, t2;
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      if (this._def.coerce) try {
        e12.data = BigInt(e12.data);
      } catch (t3) {
        return this._getInvalidInput(e12);
      }
      if (this._getType(e12) !== ds.bigint) return this._getInvalidInput(e12);
      var t2, n2 = void 0, r2 = new _s(), u2 = fn(this._def.checks);
      try {
        for (u2.s(); !(t2 = u2.n()).done; ) {
          var a2 = t2.value;
          "min" === a2.kind ? (a2.inclusive ? e12.data < a2.value : e12.data <= a2.value) && (Fs(n2 = this._getOrReturnCtx(e12, n2), { code: hs.too_small, type: "bigint", minimum: a2.value, inclusive: a2.inclusive, message: a2.message }), r2.dirty()) : "max" === a2.kind ? (a2.inclusive ? e12.data > a2.value : e12.data >= a2.value) && (Fs(n2 = this._getOrReturnCtx(e12, n2), { code: hs.too_big, type: "bigint", maximum: a2.value, inclusive: a2.inclusive, message: a2.message }), r2.dirty()) : "multipleOf" === a2.kind ? e12.data % a2.value !== BigInt(0) && (Fs(n2 = this._getOrReturnCtx(e12, n2), { code: hs.not_multiple_of, multipleOf: a2.value, message: a2.message }), r2.dirty()) : is.assertNever(a2);
        }
      } catch (e13) {
        u2.e(e13);
      } finally {
        u2.f();
      }
      return { status: r2.value, value: e12.data };
    } }, { key: "_getInvalidInput", value: function(e12) {
      var t2 = this._getOrReturnCtx(e12);
      return Fs(t2, { code: hs.invalid_type, expected: ds.bigint, received: t2.parsedType }), bs;
    } }, { key: "gte", value: function(e12, t2) {
      return this.setLimit("min", e12, true, Es.toString(t2));
    } }, { key: "gt", value: function(e12, t2) {
      return this.setLimit("min", e12, false, Es.toString(t2));
    } }, { key: "lte", value: function(e12, t2) {
      return this.setLimit("max", e12, true, Es.toString(t2));
    } }, { key: "lt", value: function(e12, t2) {
      return this.setLimit("max", e12, false, Es.toString(t2));
    } }, { key: "setLimit", value: function(t2, n2, r2, u2) {
      return new e11(yn(yn({}, this._def), {}, { checks: [].concat(Cn(this._def.checks), [{ kind: t2, value: n2, inclusive: r2, message: Es.toString(u2) }]) }));
    } }, { key: "_addCheck", value: function(t2) {
      return new e11(yn(yn({}, this._def), {}, { checks: [].concat(Cn(this._def.checks), [t2]) }));
    } }, { key: "positive", value: function(e12) {
      return this._addCheck({ kind: "min", value: BigInt(0), inclusive: false, message: Es.toString(e12) });
    } }, { key: "negative", value: function(e12) {
      return this._addCheck({ kind: "max", value: BigInt(0), inclusive: false, message: Es.toString(e12) });
    } }, { key: "nonpositive", value: function(e12) {
      return this._addCheck({ kind: "max", value: BigInt(0), inclusive: true, message: Es.toString(e12) });
    } }, { key: "nonnegative", value: function(e12) {
      return this._addCheck({ kind: "min", value: BigInt(0), inclusive: true, message: Es.toString(e12) });
    } }, { key: "multipleOf", value: function(e12, t2) {
      return this._addCheck({ kind: "multipleOf", value: e12, message: Es.toString(t2) });
    } }, { key: "minValue", get: function() {
      var e12, t2 = null, n2 = fn(this._def.checks);
      try {
        for (n2.s(); !(e12 = n2.n()).done; ) {
          var r2 = e12.value;
          "min" === r2.kind && (null === t2 || r2.value > t2) && (t2 = r2.value);
        }
      } catch (e13) {
        n2.e(e13);
      } finally {
        n2.f();
      }
      return t2;
    } }, { key: "maxValue", get: function() {
      var e12, t2 = null, n2 = fn(this._def.checks);
      try {
        for (n2.s(); !(e12 = n2.n()).done; ) {
          var r2 = e12.value;
          "max" === r2.kind && (null === t2 || r2.value < t2) && (t2 = r2.value);
        }
      } catch (e13) {
        n2.e(e13);
      } finally {
        n2.f();
      }
      return t2;
    } }]);
  })();
  ic.create = function(e11) {
    var t2;
    return new ic(yn({ checks: [], typeName: Lc.ZodBigInt, coerce: null !== (t2 = null == e11 ? void 0 : e11.coerce) && void 0 !== t2 && t2 }, Is(e11)));
  };
  var oc = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      if (this._def.coerce && (e12.data = Boolean(e12.data)), this._getType(e12) !== ds.boolean) {
        var t2 = this._getOrReturnCtx(e12);
        return Fs(t2, { code: hs.invalid_type, expected: ds.boolean, received: t2.parsedType }), bs;
      }
      return ks(e12.data);
    } }]);
  })();
  oc.create = function(e11) {
    return new oc(yn({ typeName: Lc.ZodBoolean, coerce: (null == e11 ? void 0 : e11.coerce) || false }, Is(e11)));
  };
  var sc = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      if (this._def.coerce && (e12.data = new Date(e12.data)), this._getType(e12) !== ds.date) {
        var t2 = this._getOrReturnCtx(e12);
        return Fs(t2, { code: hs.invalid_type, expected: ds.date, received: t2.parsedType }), bs;
      }
      if (Number.isNaN(e12.data.getTime())) return Fs(this._getOrReturnCtx(e12), { code: hs.invalid_date }), bs;
      var n2, r2 = new _s(), u2 = void 0, a2 = fn(this._def.checks);
      try {
        for (a2.s(); !(n2 = a2.n()).done; ) {
          var i2 = n2.value;
          "min" === i2.kind ? e12.data.getTime() < i2.value && (Fs(u2 = this._getOrReturnCtx(e12, u2), { code: hs.too_small, message: i2.message, inclusive: true, exact: false, minimum: i2.value, type: "date" }), r2.dirty()) : "max" === i2.kind ? e12.data.getTime() > i2.value && (Fs(u2 = this._getOrReturnCtx(e12, u2), { code: hs.too_big, message: i2.message, inclusive: true, exact: false, maximum: i2.value, type: "date" }), r2.dirty()) : is.assertNever(i2);
        }
      } catch (e13) {
        a2.e(e13);
      } finally {
        a2.f();
      }
      return { status: r2.value, value: new Date(e12.data.getTime()) };
    } }, { key: "_addCheck", value: function(t2) {
      return new e11(yn(yn({}, this._def), {}, { checks: [].concat(Cn(this._def.checks), [t2]) }));
    } }, { key: "min", value: function(e12, t2) {
      return this._addCheck({ kind: "min", value: e12.getTime(), message: Es.toString(t2) });
    } }, { key: "max", value: function(e12, t2) {
      return this._addCheck({ kind: "max", value: e12.getTime(), message: Es.toString(t2) });
    } }, { key: "minDate", get: function() {
      var e12, t2 = null, n2 = fn(this._def.checks);
      try {
        for (n2.s(); !(e12 = n2.n()).done; ) {
          var r2 = e12.value;
          "min" === r2.kind && (null === t2 || r2.value > t2) && (t2 = r2.value);
        }
      } catch (e13) {
        n2.e(e13);
      } finally {
        n2.f();
      }
      return null != t2 ? new Date(t2) : null;
    } }, { key: "maxDate", get: function() {
      var e12, t2 = null, n2 = fn(this._def.checks);
      try {
        for (n2.s(); !(e12 = n2.n()).done; ) {
          var r2 = e12.value;
          "max" === r2.kind && (null === t2 || r2.value < t2) && (t2 = r2.value);
        }
      } catch (e13) {
        n2.e(e13);
      } finally {
        n2.f();
      }
      return null != t2 ? new Date(t2) : null;
    } }]);
  })();
  sc.create = function(e11) {
    return new sc(yn({ checks: [], coerce: (null == e11 ? void 0 : e11.coerce) || false, typeName: Lc.ZodDate }, Is(e11)));
  };
  var cc = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      if (this._getType(e12) !== ds.symbol) {
        var t2 = this._getOrReturnCtx(e12);
        return Fs(t2, { code: hs.invalid_type, expected: ds.symbol, received: t2.parsedType }), bs;
      }
      return ks(e12.data);
    } }]);
  })();
  cc.create = function(e11) {
    return new cc(yn({ typeName: Lc.ZodSymbol }, Is(e11)));
  };
  var lc = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      if (this._getType(e12) !== ds.undefined) {
        var t2 = this._getOrReturnCtx(e12);
        return Fs(t2, { code: hs.invalid_type, expected: ds.undefined, received: t2.parsedType }), bs;
      }
      return ks(e12.data);
    } }]);
  })();
  lc.create = function(e11) {
    return new lc(yn({ typeName: Lc.ZodUndefined }, Is(e11)));
  };
  var fc = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      if (this._getType(e12) !== ds.null) {
        var t2 = this._getOrReturnCtx(e12);
        return Fs(t2, { code: hs.invalid_type, expected: ds.null, received: t2.parsedType }), bs;
      }
      return ks(e12.data);
    } }]);
  })();
  fc.create = function(e11) {
    return new fc(yn({ typeName: Lc.ZodNull }, Is(e11)));
  };
  var dc = (function() {
    function e11() {
      var t2;
      return on(this, e11), (t2 = an(this, e11, arguments))._any = true, t2;
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      return ks(e12.data);
    } }]);
  })();
  dc.create = function(e11) {
    return new dc(yn({ typeName: Lc.ZodAny }, Is(e11)));
  };
  var pc = (function() {
    function e11() {
      var t2;
      return on(this, e11), (t2 = an(this, e11, arguments))._unknown = true, t2;
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      return ks(e12.data);
    } }]);
  })();
  pc.create = function(e11) {
    return new pc(yn({ typeName: Lc.ZodUnknown }, Is(e11)));
  };
  var hc = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      var t2 = this._getOrReturnCtx(e12);
      return Fs(t2, { code: hs.invalid_type, expected: ds.never, received: t2.parsedType }), bs;
    } }]);
  })();
  hc.create = function(e11) {
    return new hc(yn({ typeName: Lc.ZodNever }, Is(e11)));
  };
  var vc = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      if (this._getType(e12) !== ds.undefined) {
        var t2 = this._getOrReturnCtx(e12);
        return Fs(t2, { code: hs.invalid_type, expected: ds.void, received: t2.parsedType }), bs;
      }
      return ks(e12.data);
    } }]);
  })();
  vc.create = function(e11) {
    return new vc(yn({ typeName: Lc.ZodVoid }, Is(e11)));
  };
  var mc = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      var t2 = this._processInputParams(e12), n2 = t2.ctx, r2 = t2.status, u2 = this._def;
      if (n2.parsedType !== ds.array) return Fs(n2, { code: hs.invalid_type, expected: ds.array, received: n2.parsedType }), bs;
      if (null !== u2.exactLength) {
        var a2 = n2.data.length > u2.exactLength.value, i2 = n2.data.length < u2.exactLength.value;
        (a2 || i2) && (Fs(n2, { code: a2 ? hs.too_big : hs.too_small, minimum: i2 ? u2.exactLength.value : void 0, maximum: a2 ? u2.exactLength.value : void 0, type: "array", inclusive: true, exact: true, message: u2.exactLength.message }), r2.dirty());
      }
      if (null !== u2.minLength && n2.data.length < u2.minLength.value && (Fs(n2, { code: hs.too_small, minimum: u2.minLength.value, type: "array", inclusive: true, exact: false, message: u2.minLength.message }), r2.dirty()), null !== u2.maxLength && n2.data.length > u2.maxLength.value && (Fs(n2, { code: hs.too_big, maximum: u2.maxLength.value, type: "array", inclusive: true, exact: false, message: u2.maxLength.message }), r2.dirty()), n2.common.async) return Promise.all(Cn(n2.data).map(function(e13, t3) {
        return u2.type._parseAsync(new Os(n2, e13, n2.path, t3));
      })).then(function(e13) {
        return _s.mergeArray(r2, e13);
      });
      var o2 = Cn(n2.data).map(function(e13, t3) {
        return u2.type._parseSync(new Os(n2, e13, n2.path, t3));
      });
      return _s.mergeArray(r2, o2);
    } }, { key: "element", get: function() {
      return this._def.type;
    } }, { key: "min", value: function(t2, n2) {
      return new e11(yn(yn({}, this._def), {}, { minLength: { value: t2, message: Es.toString(n2) } }));
    } }, { key: "max", value: function(t2, n2) {
      return new e11(yn(yn({}, this._def), {}, { maxLength: { value: t2, message: Es.toString(n2) } }));
    } }, { key: "length", value: function(t2, n2) {
      return new e11(yn(yn({}, this._def), {}, { exactLength: { value: t2, message: Es.toString(n2) } }));
    } }, { key: "nonempty", value: function(e12) {
      return this.min(1, e12);
    } }]);
  })();
  function Dc(e11) {
    if (e11 instanceof yc) {
      var t2 = {};
      for (var n2 in e11.shape) {
        var r2 = e11.shape[n2];
        t2[n2] = Nc.create(Dc(r2));
      }
      return new yc(yn(yn({}, e11._def), {}, { shape: function() {
        return t2;
      } }));
    }
    return e11 instanceof mc ? new mc(yn(yn({}, e11._def), {}, { type: Dc(e11.element) })) : e11 instanceof Nc ? Nc.create(Dc(e11.unwrap())) : e11 instanceof zc ? zc.create(Dc(e11.unwrap())) : e11 instanceof Cc ? Cc.create(e11.items.map(function(e12) {
      return Dc(e12);
    })) : e11;
  }
  mc.create = function(e11, t2) {
    return new mc(yn({ type: e11, minLength: null, maxLength: null, exactLength: null, typeName: Lc.ZodArray }, Is(t2)));
  };
  var yc = (function() {
    function e11() {
      var t2;
      return on(this, e11), (t2 = an(this, e11, arguments))._cached = null, t2.nonstrict = t2.passthrough, t2.augment = t2.extend, t2;
    }
    return vn(e11, Ps), ln(e11, [{ key: "_getCached", value: function() {
      if (null !== this._cached) return this._cached;
      var e12 = this._def.shape(), t2 = is.objectKeys(e12);
      return this._cached = { shape: e12, keys: t2 }, this._cached;
    } }, { key: "_parse", value: function(e12) {
      if (this._getType(e12) !== ds.object) {
        var t2 = this._getOrReturnCtx(e12);
        return Fs(t2, { code: hs.invalid_type, expected: ds.object, received: t2.parsedType }), bs;
      }
      var n2 = this._processInputParams(e12), r2 = n2.status, u2 = n2.ctx, a2 = this._getCached(), i2 = a2.shape, o2 = a2.keys, s2 = [];
      if (!(this._def.catchall instanceof hc && "strip" === this._def.unknownKeys)) for (var c2 in u2.data) o2.includes(c2) || s2.push(c2);
      var l2, f2 = [], d2 = fn(o2);
      try {
        for (d2.s(); !(l2 = d2.n()).done; ) {
          var p2 = l2.value, h2 = i2[p2], v2 = u2.data[p2];
          f2.push({ key: { status: "valid", value: p2 }, value: h2._parse(new Os(u2, v2, u2.path, p2)), alwaysSet: p2 in u2.data });
        }
      } catch (e13) {
        d2.e(e13);
      } finally {
        d2.f();
      }
      if (this._def.catchall instanceof hc) {
        var m2 = this._def.unknownKeys;
        if ("passthrough" === m2) {
          var D2, y2 = fn(s2);
          try {
            for (y2.s(); !(D2 = y2.n()).done; ) {
              var g2 = D2.value;
              f2.push({ key: { status: "valid", value: g2 }, value: { status: "valid", value: u2.data[g2] } });
            }
          } catch (e13) {
            y2.e(e13);
          } finally {
            y2.f();
          }
        } else if ("strict" === m2) s2.length > 0 && (Fs(u2, { code: hs.unrecognized_keys, keys: s2 }), r2.dirty());
        else if ("strip" !== m2) throw new Error("Internal ZodObject error: invalid unknownKeys value.");
      } else {
        var F2, E2 = this._def.catchall, _2 = fn(s2);
        try {
          for (_2.s(); !(F2 = _2.n()).done; ) {
            var b2 = F2.value, C2 = u2.data[b2];
            f2.push({ key: { status: "valid", value: b2 }, value: E2._parse(new Os(u2, C2, u2.path, b2)), alwaysSet: b2 in u2.data });
          }
        } catch (e13) {
          _2.e(e13);
        } finally {
          _2.f();
        }
      }
      return u2.common.async ? Promise.resolve().then(un(Fn().m(function e13() {
        var t3, n3, r3, u3, a3, i3, o3;
        return Fn().w(function(e14) {
          for (; ; ) switch (e14.p = e14.n) {
            case 0:
              t3 = [], n3 = fn(f2), e14.p = 1, n3.s();
            case 2:
              if ((r3 = n3.n()).done) {
                e14.n = 6;
                break;
              }
              return u3 = r3.value, e14.n = 3, u3.key;
            case 3:
              return a3 = e14.v, e14.n = 4, u3.value;
            case 4:
              i3 = e14.v, t3.push({ key: a3, value: i3, alwaysSet: u3.alwaysSet });
            case 5:
              e14.n = 2;
              break;
            case 6:
              e14.n = 8;
              break;
            case 7:
              e14.p = 7, o3 = e14.v, n3.e(o3);
            case 8:
              return e14.p = 8, n3.f(), e14.f(8);
            case 9:
              return e14.a(2, t3);
          }
        }, e13, null, [[1, 7, 8, 9]]);
      }))).then(function(e13) {
        return _s.mergeObjectSync(r2, e13);
      }) : _s.mergeObjectSync(r2, f2);
    } }, { key: "shape", get: function() {
      return this._def.shape();
    } }, { key: "strict", value: function(t2) {
      var n2 = this;
      return Es.errToObj, new e11(yn(yn({}, this._def), {}, { unknownKeys: "strict" }, void 0 !== t2 ? { errorMap: function(e12, r2) {
        var u2, a2, i2, o2, s2 = null !== (u2 = null === (a2 = (i2 = n2._def).errorMap) || void 0 === a2 ? void 0 : a2.call(i2, e12, r2).message) && void 0 !== u2 ? u2 : r2.defaultError;
        return "unrecognized_keys" === e12.code ? { message: null !== (o2 = Es.errToObj(t2).message) && void 0 !== o2 ? o2 : s2 } : { message: s2 };
      } } : {}));
    } }, { key: "strip", value: function() {
      return new e11(yn(yn({}, this._def), {}, { unknownKeys: "strip" }));
    } }, { key: "passthrough", value: function() {
      return new e11(yn(yn({}, this._def), {}, { unknownKeys: "passthrough" }));
    } }, { key: "extend", value: function(t2) {
      var n2 = this;
      return new e11(yn(yn({}, this._def), {}, { shape: function() {
        return yn(yn({}, n2._def.shape()), t2);
      } }));
    } }, { key: "merge", value: function(t2) {
      var n2 = this;
      return new e11({ unknownKeys: t2._def.unknownKeys, catchall: t2._def.catchall, shape: function() {
        return yn(yn({}, n2._def.shape()), t2._def.shape());
      }, typeName: Lc.ZodObject });
    } }, { key: "setKey", value: function(e12, t2) {
      return this.augment(dn({}, e12, t2));
    } }, { key: "catchall", value: function(t2) {
      return new e11(yn(yn({}, this._def), {}, { catchall: t2 }));
    } }, { key: "pick", value: function(t2) {
      var n2, r2 = {}, u2 = fn(is.objectKeys(t2));
      try {
        for (u2.s(); !(n2 = u2.n()).done; ) {
          var a2 = n2.value;
          t2[a2] && this.shape[a2] && (r2[a2] = this.shape[a2]);
        }
      } catch (e12) {
        u2.e(e12);
      } finally {
        u2.f();
      }
      return new e11(yn(yn({}, this._def), {}, { shape: function() {
        return r2;
      } }));
    } }, { key: "omit", value: function(t2) {
      var n2, r2 = {}, u2 = fn(is.objectKeys(this.shape));
      try {
        for (u2.s(); !(n2 = u2.n()).done; ) {
          var a2 = n2.value;
          t2[a2] || (r2[a2] = this.shape[a2]);
        }
      } catch (e12) {
        u2.e(e12);
      } finally {
        u2.f();
      }
      return new e11(yn(yn({}, this._def), {}, { shape: function() {
        return r2;
      } }));
    } }, { key: "deepPartial", value: function() {
      return Dc(this);
    } }, { key: "partial", value: function(t2) {
      var n2, r2 = {}, u2 = fn(is.objectKeys(this.shape));
      try {
        for (u2.s(); !(n2 = u2.n()).done; ) {
          var a2 = n2.value, i2 = this.shape[a2];
          t2 && !t2[a2] ? r2[a2] = i2 : r2[a2] = i2.optional();
        }
      } catch (e12) {
        u2.e(e12);
      } finally {
        u2.f();
      }
      return new e11(yn(yn({}, this._def), {}, { shape: function() {
        return r2;
      } }));
    } }, { key: "required", value: function(t2) {
      var n2, r2 = {}, u2 = fn(is.objectKeys(this.shape));
      try {
        for (u2.s(); !(n2 = u2.n()).done; ) {
          var a2 = n2.value;
          if (t2 && !t2[a2]) r2[a2] = this.shape[a2];
          else {
            for (var i2 = this.shape[a2]; i2 instanceof Nc; ) i2 = i2._def.innerType;
            r2[a2] = i2;
          }
        }
      } catch (e12) {
        u2.e(e12);
      } finally {
        u2.f();
      }
      return new e11(yn(yn({}, this._def), {}, { shape: function() {
        return r2;
      } }));
    } }, { key: "keyof", value: function() {
      return Bc(is.objectKeys(this.shape));
    } }]);
  })();
  yc.create = function(e11, t2) {
    return new yc(yn({ shape: function() {
      return e11;
    }, unknownKeys: "strip", catchall: hc.create(), typeName: Lc.ZodObject }, Is(t2)));
  }, yc.strictCreate = function(e11, t2) {
    return new yc(yn({ shape: function() {
      return e11;
    }, unknownKeys: "strict", catchall: hc.create(), typeName: Lc.ZodObject }, Is(t2)));
  }, yc.lazycreate = function(e11, t2) {
    return new yc(yn({ shape: e11, unknownKeys: "strip", catchall: hc.create(), typeName: Lc.ZodObject }, Is(t2)));
  };
  var gc = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      var t2 = this._processInputParams(e12).ctx, n2 = this._def.options;
      if (t2.common.async) return Promise.all(n2.map((function() {
        var e13 = un(Fn().m(function e14(n3) {
          var r3, u3, a3;
          return Fn().w(function(e15) {
            for (; ; ) switch (e15.n) {
              case 0:
                return r3 = yn(yn({}, t2), {}, { common: yn(yn({}, t2.common), {}, { issues: [] }), parent: null }), e15.n = 1, n3._parseAsync({ data: t2.data, path: t2.path, parent: r3 });
              case 1:
                return u3 = e15.v, a3 = r3, e15.a(2, { result: u3, ctx: a3 });
            }
          }, e14);
        }));
        return function(t3) {
          return e13.apply(this, arguments);
        };
      })())).then(function(e13) {
        var n3, r3 = fn(e13);
        try {
          for (r3.s(); !(n3 = r3.n()).done; ) {
            var u3 = n3.value;
            if ("valid" === u3.result.status) return u3.result;
          }
        } catch (e14) {
          r3.e(e14);
        } finally {
          r3.f();
        }
        var a3, i3 = fn(e13);
        try {
          for (i3.s(); !(a3 = i3.n()).done; ) {
            var o3, s3 = a3.value;
            if ("dirty" === s3.result.status) return (o3 = t2.common.issues).push.apply(o3, Cn(s3.ctx.common.issues)), s3.result;
          }
        } catch (e14) {
          i3.e(e14);
        } finally {
          i3.f();
        }
        var c3 = e13.map(function(e14) {
          return new vs(e14.ctx.common.issues);
        });
        return Fs(t2, { code: hs.invalid_union, unionErrors: c3 }), bs;
      });
      var r2, u2, a2 = void 0, i2 = [], o2 = fn(n2);
      try {
        for (o2.s(); !(r2 = o2.n()).done; ) {
          var s2 = r2.value, c2 = yn(yn({}, t2), {}, { common: yn(yn({}, t2.common), {}, { issues: [] }), parent: null }), l2 = s2._parseSync({ data: t2.data, path: t2.path, parent: c2 });
          if ("valid" === l2.status) return l2;
          "dirty" !== l2.status || a2 || (a2 = { result: l2, ctx: c2 }), c2.common.issues.length && i2.push(c2.common.issues);
        }
      } catch (e13) {
        o2.e(e13);
      } finally {
        o2.f();
      }
      if (a2) return (u2 = t2.common.issues).push.apply(u2, Cn(a2.ctx.common.issues)), a2.result;
      var f2 = i2.map(function(e13) {
        return new vs(e13);
      });
      return Fs(t2, { code: hs.invalid_union, unionErrors: f2 }), bs;
    } }, { key: "options", get: function() {
      return this._def.options;
    } }]);
  })();
  gc.create = function(e11, t2) {
    return new gc(yn({ options: e11, typeName: Lc.ZodUnion }, Is(t2)));
  };
  var Fc = function(e11) {
    return e11 instanceof xc ? Fc(e11.schema) : e11 instanceof jc ? Fc(e11.innerType()) : e11 instanceof Oc ? [e11.value] : e11 instanceof Ic ? e11.options : e11 instanceof Tc ? is.objectValues(e11.enum) : e11 instanceof Rc ? Fc(e11._def.innerType) : e11 instanceof lc ? [void 0] : e11 instanceof fc ? [null] : e11 instanceof Nc ? [void 0].concat(Cn(Fc(e11.unwrap()))) : e11 instanceof zc ? [null].concat(Cn(Fc(e11.unwrap()))) : e11 instanceof $c || e11 instanceof Uc ? Fc(e11.unwrap()) : e11 instanceof Mc ? Fc(e11._def.innerType) : [];
  };
  var Ec = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      var t2 = this._processInputParams(e12).ctx;
      if (t2.parsedType !== ds.object) return Fs(t2, { code: hs.invalid_type, expected: ds.object, received: t2.parsedType }), bs;
      var n2 = this.discriminator, r2 = t2.data[n2], u2 = this.optionsMap.get(r2);
      return u2 ? t2.common.async ? u2._parseAsync({ data: t2.data, path: t2.path, parent: t2 }) : u2._parseSync({ data: t2.data, path: t2.path, parent: t2 }) : (Fs(t2, { code: hs.invalid_union_discriminator, options: Array.from(this.optionsMap.keys()), path: [n2] }), bs);
    } }, { key: "discriminator", get: function() {
      return this._def.discriminator;
    } }, { key: "options", get: function() {
      return this._def.options;
    } }, { key: "optionsMap", get: function() {
      return this._def.optionsMap;
    } }], [{ key: "create", value: function(t2, n2, r2) {
      var u2, a2 = /* @__PURE__ */ new Map(), i2 = fn(n2);
      try {
        for (i2.s(); !(u2 = i2.n()).done; ) {
          var o2 = u2.value, s2 = Fc(o2.shape[t2]);
          if (!s2.length) throw new Error("A discriminator value for key `".concat(t2, "` could not be extracted from all schema options"));
          var c2, l2 = fn(s2);
          try {
            for (l2.s(); !(c2 = l2.n()).done; ) {
              var f2 = c2.value;
              if (a2.has(f2)) throw new Error("Discriminator property ".concat(String(t2), " has duplicate value ").concat(String(f2)));
              a2.set(f2, o2);
            }
          } catch (e12) {
            l2.e(e12);
          } finally {
            l2.f();
          }
        }
      } catch (e12) {
        i2.e(e12);
      } finally {
        i2.f();
      }
      return new e11(yn({ typeName: Lc.ZodDiscriminatedUnion, discriminator: t2, options: n2, optionsMap: a2 }, Is(r2)));
    } }]);
  })();
  function _c(e11, t2) {
    var n2 = ps(e11), r2 = ps(t2);
    if (e11 === t2) return { valid: true, data: e11 };
    if (n2 === ds.object && r2 === ds.object) {
      var u2, a2 = is.objectKeys(t2), i2 = is.objectKeys(e11).filter(function(e12) {
        return -1 !== a2.indexOf(e12);
      }), o2 = yn(yn({}, e11), t2), s2 = fn(i2);
      try {
        for (s2.s(); !(u2 = s2.n()).done; ) {
          var c2 = u2.value, l2 = _c(e11[c2], t2[c2]);
          if (!l2.valid) return { valid: false };
          o2[c2] = l2.data;
        }
      } catch (e12) {
        s2.e(e12);
      } finally {
        s2.f();
      }
      return { valid: true, data: o2 };
    }
    if (n2 === ds.array && r2 === ds.array) {
      if (e11.length !== t2.length) return { valid: false };
      for (var f2 = [], d2 = 0; d2 < e11.length; d2++) {
        var p2 = _c(e11[d2], t2[d2]);
        if (!p2.valid) return { valid: false };
        f2.push(p2.data);
      }
      return { valid: true, data: f2 };
    }
    return n2 === ds.date && r2 === ds.date && +e11 === +t2 ? { valid: true, data: e11 } : { valid: false };
  }
  var bc = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      var t2 = this._processInputParams(e12), n2 = t2.status, r2 = t2.ctx, u2 = function(e13, t3) {
        if (As(e13) || As(t3)) return bs;
        var u3 = _c(e13.value, t3.value);
        return u3.valid ? ((ws(e13) || ws(t3)) && n2.dirty(), { status: n2.value, value: u3.data }) : (Fs(r2, { code: hs.invalid_intersection_types }), bs);
      };
      return r2.common.async ? Promise.all([this._def.left._parseAsync({ data: r2.data, path: r2.path, parent: r2 }), this._def.right._parseAsync({ data: r2.data, path: r2.path, parent: r2 })]).then(function(e13) {
        var t3 = bn(e13, 2), n3 = t3[0], r3 = t3[1];
        return u2(n3, r3);
      }) : u2(this._def.left._parseSync({ data: r2.data, path: r2.path, parent: r2 }), this._def.right._parseSync({ data: r2.data, path: r2.path, parent: r2 }));
    } }]);
  })();
  bc.create = function(e11, t2, n2) {
    return new bc(yn({ left: e11, right: t2, typeName: Lc.ZodIntersection }, Is(n2)));
  };
  var Cc = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      var t2 = this, n2 = this._processInputParams(e12), r2 = n2.status, u2 = n2.ctx;
      if (u2.parsedType !== ds.array) return Fs(u2, { code: hs.invalid_type, expected: ds.array, received: u2.parsedType }), bs;
      if (u2.data.length < this._def.items.length) return Fs(u2, { code: hs.too_small, minimum: this._def.items.length, inclusive: true, exact: false, type: "array" }), bs;
      !this._def.rest && u2.data.length > this._def.items.length && (Fs(u2, { code: hs.too_big, maximum: this._def.items.length, inclusive: true, exact: false, type: "array" }), r2.dirty());
      var a2 = Cn(u2.data).map(function(e13, n3) {
        var r3 = t2._def.items[n3] || t2._def.rest;
        return r3 ? r3._parse(new Os(u2, e13, u2.path, n3)) : null;
      }).filter(function(e13) {
        return !!e13;
      });
      return u2.common.async ? Promise.all(a2).then(function(e13) {
        return _s.mergeArray(r2, e13);
      }) : _s.mergeArray(r2, a2);
    } }, { key: "items", get: function() {
      return this._def.items;
    } }, { key: "rest", value: function(t2) {
      return new e11(yn(yn({}, this._def), {}, { rest: t2 }));
    } }]);
  })();
  Cc.create = function(e11, t2) {
    if (!Array.isArray(e11)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new Cc(yn({ items: e11, typeName: Lc.ZodTuple, rest: null }, Is(t2)));
  };
  var kc = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "keySchema", get: function() {
      return this._def.keyType;
    } }, { key: "valueSchema", get: function() {
      return this._def.valueType;
    } }, { key: "_parse", value: function(e12) {
      var t2 = this._processInputParams(e12), n2 = t2.status, r2 = t2.ctx;
      if (r2.parsedType !== ds.object) return Fs(r2, { code: hs.invalid_type, expected: ds.object, received: r2.parsedType }), bs;
      var u2 = [], a2 = this._def.keyType, i2 = this._def.valueType;
      for (var o2 in r2.data) u2.push({ key: a2._parse(new Os(r2, o2, r2.path, o2)), value: i2._parse(new Os(r2, r2.data[o2], r2.path, o2)), alwaysSet: o2 in r2.data });
      return r2.common.async ? _s.mergeObjectAsync(n2, u2) : _s.mergeObjectSync(n2, u2);
    } }, { key: "element", get: function() {
      return this._def.valueType;
    } }], [{ key: "create", value: function(t2, n2, r2) {
      return new e11(n2 instanceof Ps ? yn({ keyType: t2, valueType: n2, typeName: Lc.ZodRecord }, Is(r2)) : yn({ keyType: rc.create(), valueType: t2, typeName: Lc.ZodRecord }, Is(n2)));
    } }]);
  })();
  var Ac = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "keySchema", get: function() {
      return this._def.keyType;
    } }, { key: "valueSchema", get: function() {
      return this._def.valueType;
    } }, { key: "_parse", value: function(e12) {
      var t2 = this._processInputParams(e12), n2 = t2.status, r2 = t2.ctx;
      if (r2.parsedType !== ds.map) return Fs(r2, { code: hs.invalid_type, expected: ds.map, received: r2.parsedType }), bs;
      var u2 = this._def.keyType, a2 = this._def.valueType, i2 = Cn(r2.data.entries()).map(function(e13, t3) {
        var n3 = bn(e13, 2), i3 = n3[0], o3 = n3[1];
        return { key: u2._parse(new Os(r2, i3, r2.path, [t3, "key"])), value: a2._parse(new Os(r2, o3, r2.path, [t3, "value"])) };
      });
      if (r2.common.async) {
        var o2 = /* @__PURE__ */ new Map();
        return Promise.resolve().then(un(Fn().m(function e13() {
          var t3, r3, u3, a3, s3, c3;
          return Fn().w(function(e14) {
            for (; ; ) switch (e14.p = e14.n) {
              case 0:
                t3 = fn(i2), e14.p = 1, t3.s();
              case 2:
                if ((r3 = t3.n()).done) {
                  e14.n = 7;
                  break;
                }
                return u3 = r3.value, e14.n = 3, u3.key;
              case 3:
                return a3 = e14.v, e14.n = 4, u3.value;
              case 4:
                if (s3 = e14.v, "aborted" !== a3.status && "aborted" !== s3.status) {
                  e14.n = 5;
                  break;
                }
                return e14.a(2, bs);
              case 5:
                "dirty" !== a3.status && "dirty" !== s3.status || n2.dirty(), o2.set(a3.value, s3.value);
              case 6:
                e14.n = 2;
                break;
              case 7:
                e14.n = 9;
                break;
              case 8:
                e14.p = 8, c3 = e14.v, t3.e(c3);
              case 9:
                return e14.p = 9, t3.f(), e14.f(9);
              case 10:
                return e14.a(2, { status: n2.value, value: o2 });
            }
          }, e13, null, [[1, 8, 9, 10]]);
        })));
      }
      var s2, c2 = /* @__PURE__ */ new Map(), l2 = fn(i2);
      try {
        for (l2.s(); !(s2 = l2.n()).done; ) {
          var f2 = s2.value, d2 = f2.key, p2 = f2.value;
          if ("aborted" === d2.status || "aborted" === p2.status) return bs;
          "dirty" !== d2.status && "dirty" !== p2.status || n2.dirty(), c2.set(d2.value, p2.value);
        }
      } catch (e13) {
        l2.e(e13);
      } finally {
        l2.f();
      }
      return { status: n2.value, value: c2 };
    } }]);
  })();
  Ac.create = function(e11, t2, n2) {
    return new Ac(yn({ valueType: t2, keyType: e11, typeName: Lc.ZodMap }, Is(n2)));
  };
  var wc = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      var t2 = this._processInputParams(e12), n2 = t2.status, r2 = t2.ctx;
      if (r2.parsedType !== ds.set) return Fs(r2, { code: hs.invalid_type, expected: ds.set, received: r2.parsedType }), bs;
      var u2 = this._def;
      null !== u2.minSize && r2.data.size < u2.minSize.value && (Fs(r2, { code: hs.too_small, minimum: u2.minSize.value, type: "set", inclusive: true, exact: false, message: u2.minSize.message }), n2.dirty()), null !== u2.maxSize && r2.data.size > u2.maxSize.value && (Fs(r2, { code: hs.too_big, maximum: u2.maxSize.value, type: "set", inclusive: true, exact: false, message: u2.maxSize.message }), n2.dirty());
      var a2 = this._def.valueType;
      function i2(e13) {
        var t3, r3 = /* @__PURE__ */ new Set(), u3 = fn(e13);
        try {
          for (u3.s(); !(t3 = u3.n()).done; ) {
            var a3 = t3.value;
            if ("aborted" === a3.status) return bs;
            "dirty" === a3.status && n2.dirty(), r3.add(a3.value);
          }
        } catch (e14) {
          u3.e(e14);
        } finally {
          u3.f();
        }
        return { status: n2.value, value: r3 };
      }
      var o2 = Cn(r2.data.values()).map(function(e13, t3) {
        return a2._parse(new Os(r2, e13, r2.path, t3));
      });
      return r2.common.async ? Promise.all(o2).then(function(e13) {
        return i2(e13);
      }) : i2(o2);
    } }, { key: "min", value: function(t2, n2) {
      return new e11(yn(yn({}, this._def), {}, { minSize: { value: t2, message: Es.toString(n2) } }));
    } }, { key: "max", value: function(t2, n2) {
      return new e11(yn(yn({}, this._def), {}, { maxSize: { value: t2, message: Es.toString(n2) } }));
    } }, { key: "size", value: function(e12, t2) {
      return this.min(e12, t2).max(e12, t2);
    } }, { key: "nonempty", value: function(e12) {
      return this.min(1, e12);
    } }]);
  })();
  wc.create = function(e11, t2) {
    return new wc(yn({ valueType: e11, minSize: null, maxSize: null, typeName: Lc.ZodSet }, Is(t2)));
  };
  var Sc = (function() {
    function e11() {
      var t2;
      return on(this, e11), (t2 = an(this, e11, arguments)).validate = t2.implement, t2;
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      var t2 = this._processInputParams(e12).ctx;
      if (t2.parsedType !== ds.function) return Fs(t2, { code: hs.invalid_type, expected: ds.function, received: t2.parsedType }), bs;
      function n2(e13, n3) {
        return gs({ data: e13, path: t2.path, errorMaps: [t2.common.contextualErrorMap, t2.schemaErrorMap, ys(), ms].filter(function(e14) {
          return !!e14;
        }), issueData: { code: hs.invalid_arguments, argumentsError: n3 } });
      }
      function r2(e13, n3) {
        return gs({ data: e13, path: t2.path, errorMaps: [t2.common.contextualErrorMap, t2.schemaErrorMap, ys(), ms].filter(function(e14) {
          return !!e14;
        }), issueData: { code: hs.invalid_return_type, returnTypeError: n3 } });
      }
      var u2 = { errorMap: t2.common.contextualErrorMap }, a2 = t2.data;
      if (this._def.returns instanceof Pc) {
        var i2 = this;
        return ks(un(Fn().m(function e13() {
          var t3, o3, s2, c2, l2, f2, d2, p2 = arguments;
          return Fn().w(function(e14) {
            for (; ; ) switch (e14.n) {
              case 0:
                for (t3 = p2.length, o3 = new Array(t3), s2 = 0; s2 < t3; s2++) o3[s2] = p2[s2];
                return c2 = new vs([]), e14.n = 1, i2._def.args.parseAsync(o3, u2).catch(function(e15) {
                  throw c2.addIssue(n2(o3, e15)), c2;
                });
              case 1:
                return l2 = e14.v, e14.n = 2, Reflect.apply(a2, this, l2);
              case 2:
                return f2 = e14.v, e14.n = 3, i2._def.returns._def.type.parseAsync(f2, u2).catch(function(e15) {
                  throw c2.addIssue(r2(f2, e15)), c2;
                });
              case 3:
                return d2 = e14.v, e14.a(2, d2);
            }
          }, e13, this);
        })));
      }
      var o2 = this;
      return ks(function() {
        for (var e13 = arguments.length, t3 = new Array(e13), i3 = 0; i3 < e13; i3++) t3[i3] = arguments[i3];
        var s2 = o2._def.args.safeParse(t3, u2);
        if (!s2.success) throw new vs([n2(t3, s2.error)]);
        var c2 = Reflect.apply(a2, this, s2.data), l2 = o2._def.returns.safeParse(c2, u2);
        if (!l2.success) throw new vs([r2(c2, l2.error)]);
        return l2.data;
      });
    } }, { key: "parameters", value: function() {
      return this._def.args;
    } }, { key: "returnType", value: function() {
      return this._def.returns;
    } }, { key: "args", value: function() {
      for (var t2 = arguments.length, n2 = new Array(t2), r2 = 0; r2 < t2; r2++) n2[r2] = arguments[r2];
      return new e11(yn(yn({}, this._def), {}, { args: Cc.create(n2).rest(pc.create()) }));
    } }, { key: "returns", value: function(t2) {
      return new e11(yn(yn({}, this._def), {}, { returns: t2 }));
    } }, { key: "implement", value: function(e12) {
      return this.parse(e12);
    } }, { key: "strictImplement", value: function(e12) {
      return this.parse(e12);
    } }], [{ key: "create", value: function(t2, n2, r2) {
      return new e11(yn({ args: t2 || Cc.create([]).rest(pc.create()), returns: n2 || pc.create(), typeName: Lc.ZodFunction }, Is(r2)));
    } }]);
  })();
  var xc = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "schema", get: function() {
      return this._def.getter();
    } }, { key: "_parse", value: function(e12) {
      var t2 = this._processInputParams(e12).ctx;
      return this._def.getter()._parse({ data: t2.data, path: t2.path, parent: t2 });
    } }]);
  })();
  xc.create = function(e11, t2) {
    return new xc(yn({ getter: e11, typeName: Lc.ZodLazy }, Is(t2)));
  };
  var Oc = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      if (e12.data !== this._def.value) {
        var t2 = this._getOrReturnCtx(e12);
        return Fs(t2, { received: t2.data, code: hs.invalid_literal, expected: this._def.value }), bs;
      }
      return { status: "valid", value: e12.data };
    } }, { key: "value", get: function() {
      return this._def.value;
    } }]);
  })();
  function Bc(e11, t2) {
    return new Ic(yn({ values: e11, typeName: Lc.ZodEnum }, Is(t2)));
  }
  Oc.create = function(e11, t2) {
    return new Oc(yn({ value: e11, typeName: Lc.ZodLiteral }, Is(t2)));
  };
  var Ic = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      if ("string" != typeof e12.data) {
        var t2 = this._getOrReturnCtx(e12), n2 = this._def.values;
        return Fs(t2, { expected: is.joinValues(n2), received: t2.parsedType, code: hs.invalid_type }), bs;
      }
      if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e12.data)) {
        var r2 = this._getOrReturnCtx(e12), u2 = this._def.values;
        return Fs(r2, { received: r2.data, code: hs.invalid_enum_value, options: u2 }), bs;
      }
      return ks(e12.data);
    } }, { key: "options", get: function() {
      return this._def.values;
    } }, { key: "enum", get: function() {
      var e12, t2 = {}, n2 = fn(this._def.values);
      try {
        for (n2.s(); !(e12 = n2.n()).done; ) {
          var r2 = e12.value;
          t2[r2] = r2;
        }
      } catch (e13) {
        n2.e(e13);
      } finally {
        n2.f();
      }
      return t2;
    } }, { key: "Values", get: function() {
      var e12, t2 = {}, n2 = fn(this._def.values);
      try {
        for (n2.s(); !(e12 = n2.n()).done; ) {
          var r2 = e12.value;
          t2[r2] = r2;
        }
      } catch (e13) {
        n2.e(e13);
      } finally {
        n2.f();
      }
      return t2;
    } }, { key: "Enum", get: function() {
      var e12, t2 = {}, n2 = fn(this._def.values);
      try {
        for (n2.s(); !(e12 = n2.n()).done; ) {
          var r2 = e12.value;
          t2[r2] = r2;
        }
      } catch (e13) {
        n2.e(e13);
      } finally {
        n2.f();
      }
      return t2;
    } }, { key: "extract", value: function(t2) {
      var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._def;
      return e11.create(t2, yn(yn({}, this._def), n2));
    } }, { key: "exclude", value: function(t2) {
      var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._def;
      return e11.create(this.options.filter(function(e12) {
        return !t2.includes(e12);
      }), yn(yn({}, this._def), n2));
    } }]);
  })();
  Ic.create = Bc;
  var Tc = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      var t2 = is.getValidEnumValues(this._def.values), n2 = this._getOrReturnCtx(e12);
      if (n2.parsedType !== ds.string && n2.parsedType !== ds.number) {
        var r2 = is.objectValues(t2);
        return Fs(n2, { expected: is.joinValues(r2), received: n2.parsedType, code: hs.invalid_type }), bs;
      }
      if (this._cache || (this._cache = new Set(is.getValidEnumValues(this._def.values))), !this._cache.has(e12.data)) {
        var u2 = is.objectValues(t2);
        return Fs(n2, { received: n2.data, code: hs.invalid_enum_value, options: u2 }), bs;
      }
      return ks(e12.data);
    } }, { key: "enum", get: function() {
      return this._def.values;
    } }]);
  })();
  Tc.create = function(e11, t2) {
    return new Tc(yn({ values: e11, typeName: Lc.ZodNativeEnum }, Is(t2)));
  };
  var Pc = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "unwrap", value: function() {
      return this._def.type;
    } }, { key: "_parse", value: function(e12) {
      var t2 = this, n2 = this._processInputParams(e12).ctx;
      if (n2.parsedType !== ds.promise && false === n2.common.async) return Fs(n2, { code: hs.invalid_type, expected: ds.promise, received: n2.parsedType }), bs;
      var r2 = n2.parsedType === ds.promise ? n2.data : Promise.resolve(n2.data);
      return ks(r2.then(function(e13) {
        return t2._def.type.parseAsync(e13, { path: n2.path, errorMap: n2.common.contextualErrorMap });
      }));
    } }]);
  })();
  Pc.create = function(e11, t2) {
    return new Pc(yn({ type: e11, typeName: Lc.ZodPromise }, Is(t2)));
  };
  var jc = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "innerType", value: function() {
      return this._def.schema;
    } }, { key: "sourceType", value: function() {
      return this._def.schema._def.typeName === Lc.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
    } }, { key: "_parse", value: function(e12) {
      var t2 = this, n2 = this._processInputParams(e12), r2 = n2.status, u2 = n2.ctx, a2 = this._def.effect || null, i2 = { addIssue: function(e13) {
        Fs(u2, e13), e13.fatal ? r2.abort() : r2.dirty();
      }, get path() {
        return u2.path;
      } };
      if (i2.addIssue = i2.addIssue.bind(i2), "preprocess" === a2.type) {
        var o2 = a2.transform(u2.data, i2);
        if (u2.common.async) return Promise.resolve(o2).then((function() {
          var e13 = un(Fn().m(function e14(n3) {
            var a3;
            return Fn().w(function(e15) {
              for (; ; ) switch (e15.n) {
                case 0:
                  if ("aborted" !== r2.value) {
                    e15.n = 1;
                    break;
                  }
                  return e15.a(2, bs);
                case 1:
                  return e15.n = 2, t2._def.schema._parseAsync({ data: n3, path: u2.path, parent: u2 });
                case 2:
                  if ("aborted" !== (a3 = e15.v).status) {
                    e15.n = 3;
                    break;
                  }
                  return e15.a(2, bs);
                case 3:
                  if ("dirty" !== a3.status) {
                    e15.n = 4;
                    break;
                  }
                  return e15.a(2, Cs(a3.value));
                case 4:
                  if ("dirty" !== r2.value) {
                    e15.n = 5;
                    break;
                  }
                  return e15.a(2, Cs(a3.value));
                case 5:
                  return e15.a(2, a3);
              }
            }, e14);
          }));
          return function(t3) {
            return e13.apply(this, arguments);
          };
        })());
        if ("aborted" === r2.value) return bs;
        var s2 = this._def.schema._parseSync({ data: o2, path: u2.path, parent: u2 });
        return "aborted" === s2.status ? bs : "dirty" === s2.status || "dirty" === r2.value ? Cs(s2.value) : s2;
      }
      if ("refinement" === a2.type) {
        var c2 = function(e13) {
          var t3 = a2.refinement(e13, i2);
          if (u2.common.async) return Promise.resolve(t3);
          if (t3 instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
          return e13;
        };
        if (false === u2.common.async) {
          var l2 = this._def.schema._parseSync({ data: u2.data, path: u2.path, parent: u2 });
          return "aborted" === l2.status ? bs : ("dirty" === l2.status && r2.dirty(), c2(l2.value), { status: r2.value, value: l2.value });
        }
        return this._def.schema._parseAsync({ data: u2.data, path: u2.path, parent: u2 }).then(function(e13) {
          return "aborted" === e13.status ? bs : ("dirty" === e13.status && r2.dirty(), c2(e13.value).then(function() {
            return { status: r2.value, value: e13.value };
          }));
        });
      }
      if ("transform" === a2.type) {
        if (false === u2.common.async) {
          var f2 = this._def.schema._parseSync({ data: u2.data, path: u2.path, parent: u2 });
          if (!Ss(f2)) return bs;
          var d2 = a2.transform(f2.value, i2);
          if (d2 instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
          return { status: r2.value, value: d2 };
        }
        return this._def.schema._parseAsync({ data: u2.data, path: u2.path, parent: u2 }).then(function(e13) {
          return Ss(e13) ? Promise.resolve(a2.transform(e13.value, i2)).then(function(e14) {
            return { status: r2.value, value: e14 };
          }) : bs;
        });
      }
      is.assertNever(a2);
    } }]);
  })();
  jc.create = function(e11, t2, n2) {
    return new jc(yn({ schema: e11, typeName: Lc.ZodEffects, effect: t2 }, Is(n2)));
  }, jc.createWithPreprocess = function(e11, t2, n2) {
    return new jc(yn({ schema: t2, effect: { type: "preprocess", transform: e11 }, typeName: Lc.ZodEffects }, Is(n2)));
  };
  var Nc = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      return this._getType(e12) === ds.undefined ? ks(void 0) : this._def.innerType._parse(e12);
    } }, { key: "unwrap", value: function() {
      return this._def.innerType;
    } }]);
  })();
  Nc.create = function(e11, t2) {
    return new Nc(yn({ innerType: e11, typeName: Lc.ZodOptional }, Is(t2)));
  };
  var zc = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      return this._getType(e12) === ds.null ? ks(null) : this._def.innerType._parse(e12);
    } }, { key: "unwrap", value: function() {
      return this._def.innerType;
    } }]);
  })();
  zc.create = function(e11, t2) {
    return new zc(yn({ innerType: e11, typeName: Lc.ZodNullable }, Is(t2)));
  };
  var Rc = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      var t2 = this._processInputParams(e12).ctx, n2 = t2.data;
      return t2.parsedType === ds.undefined && (n2 = this._def.defaultValue()), this._def.innerType._parse({ data: n2, path: t2.path, parent: t2 });
    } }, { key: "removeDefault", value: function() {
      return this._def.innerType;
    } }]);
  })();
  Rc.create = function(e11, t2) {
    return new Rc(yn({ innerType: e11, typeName: Lc.ZodDefault, defaultValue: "function" == typeof t2.default ? t2.default : function() {
      return t2.default;
    } }, Is(t2)));
  };
  var Mc = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      var t2 = this, n2 = this._processInputParams(e12).ctx, r2 = yn(yn({}, n2), {}, { common: yn(yn({}, n2.common), {}, { issues: [] }) }), u2 = this._def.innerType._parse({ data: r2.data, path: r2.path, parent: yn({}, r2) });
      return xs(u2) ? u2.then(function(e13) {
        return { status: "valid", value: "valid" === e13.status ? e13.value : t2._def.catchValue({ get error() {
          return new vs(r2.common.issues);
        }, input: r2.data }) };
      }) : { status: "valid", value: "valid" === u2.status ? u2.value : this._def.catchValue({ get error() {
        return new vs(r2.common.issues);
      }, input: r2.data }) };
    } }, { key: "removeCatch", value: function() {
      return this._def.innerType;
    } }]);
  })();
  Mc.create = function(e11, t2) {
    return new Mc(yn({ innerType: e11, typeName: Lc.ZodCatch, catchValue: "function" == typeof t2.catch ? t2.catch : function() {
      return t2.catch;
    } }, Is(t2)));
  };
  var Zc = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      if (this._getType(e12) !== ds.nan) {
        var t2 = this._getOrReturnCtx(e12);
        return Fs(t2, { code: hs.invalid_type, expected: ds.nan, received: t2.parsedType }), bs;
      }
      return { status: "valid", value: e12.data };
    } }]);
  })();
  Zc.create = function(e11) {
    return new Zc(yn({ typeName: Lc.ZodNaN }, Is(e11)));
  };
  var Lc;
  var $c = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      var t2 = this._processInputParams(e12).ctx, n2 = t2.data;
      return this._def.type._parse({ data: n2, path: t2.path, parent: t2 });
    } }, { key: "unwrap", value: function() {
      return this._def.type;
    } }]);
  })();
  var qc = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      var t2 = this, n2 = this._processInputParams(e12), r2 = n2.status, u2 = n2.ctx;
      if (u2.common.async) {
        var a2 = (function() {
          var e13 = un(Fn().m(function e14() {
            var n3;
            return Fn().w(function(e15) {
              for (; ; ) switch (e15.n) {
                case 0:
                  return e15.n = 1, t2._def.in._parseAsync({ data: u2.data, path: u2.path, parent: u2 });
                case 1:
                  if ("aborted" !== (n3 = e15.v).status) {
                    e15.n = 2;
                    break;
                  }
                  return e15.a(2, bs);
                case 2:
                  if ("dirty" !== n3.status) {
                    e15.n = 3;
                    break;
                  }
                  return r2.dirty(), e15.a(2, Cs(n3.value));
                case 3:
                  return e15.a(2, t2._def.out._parseAsync({ data: n3.value, path: u2.path, parent: u2 }));
                case 4:
                  return e15.a(2);
              }
            }, e14);
          }));
          return function() {
            return e13.apply(this, arguments);
          };
        })();
        return a2();
      }
      var i2 = this._def.in._parseSync({ data: u2.data, path: u2.path, parent: u2 });
      return "aborted" === i2.status ? bs : "dirty" === i2.status ? (r2.dirty(), { status: "dirty", value: i2.value }) : this._def.out._parseSync({ data: i2.value, path: u2.path, parent: u2 });
    } }], [{ key: "create", value: function(t2, n2) {
      return new e11({ in: t2, out: n2, typeName: Lc.ZodPipeline });
    } }]);
  })();
  var Uc = (function() {
    function e11() {
      return on(this, e11), an(this, e11, arguments);
    }
    return vn(e11, Ps), ln(e11, [{ key: "_parse", value: function(e12) {
      var t2 = this._def.innerType._parse(e12), n2 = function(e13) {
        return Ss(e13) && (e13.value = Object.freeze(e13.value)), e13;
      };
      return xs(t2) ? t2.then(function(e13) {
        return n2(e13);
      }) : n2(t2);
    } }, { key: "unwrap", value: function() {
      return this._def.innerType;
    } }]);
  })();
  function Hc() {
    var e11, t2, n2, r2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : globalThis;
    return r2.window ? "runtime/browser" : (null == (e11 = r2.navigator) ? void 0 : e11.userAgent) ? "runtime/".concat(r2.navigator.userAgent.toLowerCase()) : (null == (n2 = null == (t2 = r2.process) ? void 0 : t2.versions) ? void 0 : n2.node) ? "runtime/node.js/".concat(r2.process.version.substring(0)) : r2.EdgeRuntime ? "runtime/vercel-edge" : "runtime/unknown";
  }
  function Vc(e11) {
    for (var t2 = (function(e12) {
      return Object.fromEntries(Object.entries(e12).filter(function(e13) {
        var t3 = g(e13, 2);
        return t3[0], null != t3[1];
      }));
    })(null != e11 ? e11 : {}), n2 = new Headers(t2), r2 = n2.get("user-agent") || "", u2 = arguments.length, a2 = new Array(u2 > 1 ? u2 - 1 : 0), i2 = 1; i2 < u2; i2++) a2[i2 - 1] = arguments[i2];
    return n2.set("user-agent", [r2].concat(a2).filter(Boolean).join(" ")), Object.fromEntries(n2);
  }
  Uc.create = function(e11, t2) {
    return new Uc(yn({ innerType: e11, typeName: Lc.ZodReadonly }, Is(t2)));
  }, yc.lazycreate, (function(e11) {
    e11.ZodString = "ZodString", e11.ZodNumber = "ZodNumber", e11.ZodNaN = "ZodNaN", e11.ZodBigInt = "ZodBigInt", e11.ZodBoolean = "ZodBoolean", e11.ZodDate = "ZodDate", e11.ZodSymbol = "ZodSymbol", e11.ZodUndefined = "ZodUndefined", e11.ZodNull = "ZodNull", e11.ZodAny = "ZodAny", e11.ZodUnknown = "ZodUnknown", e11.ZodNever = "ZodNever", e11.ZodVoid = "ZodVoid", e11.ZodArray = "ZodArray", e11.ZodObject = "ZodObject", e11.ZodUnion = "ZodUnion", e11.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e11.ZodIntersection = "ZodIntersection", e11.ZodTuple = "ZodTuple", e11.ZodRecord = "ZodRecord", e11.ZodMap = "ZodMap", e11.ZodSet = "ZodSet", e11.ZodFunction = "ZodFunction", e11.ZodLazy = "ZodLazy", e11.ZodLiteral = "ZodLiteral", e11.ZodEnum = "ZodEnum", e11.ZodEffects = "ZodEffects", e11.ZodNativeEnum = "ZodNativeEnum", e11.ZodOptional = "ZodOptional", e11.ZodNullable = "ZodNullable", e11.ZodDefault = "ZodDefault", e11.ZodCatch = "ZodCatch", e11.ZodPromise = "ZodPromise", e11.ZodBranded = "ZodBranded", e11.ZodPipeline = "ZodPipeline", e11.ZodReadonly = "ZodReadonly";
  })(Lc || (Lc = {})), rc.create, ac.create, Zc.create, ic.create, oc.create, sc.create, cc.create, lc.create, fc.create, dc.create, pc.create, hc.create, vc.create, mc.create, yc.create, yc.strictCreate, gc.create, Ec.create, bc.create, Cc.create, kc.create, Ac.create, wc.create, Sc.create, xc.create, Oc.create, Ic.create, Tc.create, Pc.create, jc.create, Nc.create, zc.create, jc.createWithPreprocess, qc.create;
  var Wc = function() {
    var e11 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t2 = e11.prefix, n2 = e11.size, r2 = void 0 === n2 ? 16 : n2, u2 = e11.alphabet, a2 = void 0 === u2 ? "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" : u2, i2 = e11.separator, o2 = void 0 === i2 ? "-" : i2, s2 = function() {
      for (var e12 = a2.length, t3 = new Array(r2), n3 = 0; n3 < r2; n3++) t3[n3] = a2[Math.random() * e12 | 0];
      return t3.join("");
    };
    if (null == t2) return s2;
    if (a2.includes(o2)) throw new Jn({ argument: "separator", message: 'The separator "'.concat(o2, '" must not be part of the alphabet "').concat(a2, '".') });
    return function() {
      return "".concat(t2).concat(o2).concat(s2());
    };
  };
  var Kc = Wc();
  var Jc = /"__proto__"\s*:/;
  var Qc = /"constructor"\s*:/;
  function Gc(e11) {
    var t2 = JSON.parse(e11);
    return null === t2 || "object" != _(t2) || false === Jc.test(e11) && false === Qc.test(e11) ? t2 : (function(e12) {
      for (var t3 = [e12]; t3.length; ) {
        var n2 = t3;
        t3 = [];
        var r2, u2 = s(n2);
        try {
          for (u2.s(); !(r2 = u2.n()).done; ) {
            var a2 = r2.value;
            if (Object.prototype.hasOwnProperty.call(a2, "__proto__")) throw new SyntaxError("Object contains forbidden prototype property");
            if (Object.prototype.hasOwnProperty.call(a2, "constructor") && Object.prototype.hasOwnProperty.call(a2.constructor, "prototype")) throw new SyntaxError("Object contains forbidden prototype property");
            for (var i2 in a2) {
              var o2 = a2[i2];
              o2 && "object" == _(o2) && t3.push(o2);
            }
          }
        } catch (e13) {
          u2.e(e13);
        } finally {
          u2.f();
        }
      }
      return e12;
    })(t2);
  }
  var Yc = Symbol.for("vercel.ai.validator");
  function Xc(e11) {
    return (function(e12) {
      return "object" == _(e12) && null !== e12 && Yc in e12 && true === e12[Yc] && "validate" in e12;
    })(e11) ? e11 : (t2 = e11, n2 = (function() {
      var e12 = r(m().m(function e13(n3) {
        var r2;
        return m().w(function(e14) {
          for (; ; ) switch (e14.n) {
            case 0:
              return e14.n = 1, t2["~standard"].validate(n3);
            case 1:
              return r2 = e14.v, e14.a(2, null == r2.issues ? { success: true, value: r2.value } : { success: false, error: new ar({ value: n3, cause: r2.issues }) });
          }
        }, e13);
      }));
      return function(t3) {
        return e12.apply(this, arguments);
      };
    })(), c(c({}, Yc, true), "validate", n2));
    var t2, n2;
  }
  function el(e11) {
    return tl.apply(this, arguments);
  }
  function tl() {
    return tl = r(m().m(function e11(t2) {
      var n2, r2, u2;
      return m().w(function(e12) {
        for (; ; ) switch (e12.n) {
          case 0:
            return n2 = t2.value, r2 = t2.schema, e12.n = 1, nl({ value: n2, schema: r2 });
          case 1:
            if ((u2 = e12.v).success) {
              e12.n = 2;
              break;
            }
            throw ar.wrap({ value: n2, cause: u2.error });
          case 2:
            return e12.a(2, u2.value);
        }
      }, e11);
    })), tl.apply(this, arguments);
  }
  function nl(e11) {
    return rl.apply(this, arguments);
  }
  function rl() {
    return rl = r(m().m(function e11(t2) {
      var n2, r2, u2, a2, i2;
      return m().w(function(e12) {
        for (; ; ) switch (e12.p = e12.n) {
          case 0:
            if (n2 = t2.value, r2 = t2.schema, u2 = Xc(r2), e12.p = 1, null != u2.validate) {
              e12.n = 2;
              break;
            }
            return e12.a(2, { success: true, value: n2, rawValue: n2 });
          case 2:
            return e12.n = 3, u2.validate(n2);
          case 3:
            return a2 = e12.v, e12.a(2, a2.success ? { success: true, value: a2.value, rawValue: n2 } : { success: false, error: ar.wrap({ value: n2, cause: a2.error }), rawValue: n2 });
          case 4:
            return e12.p = 4, i2 = e12.v, e12.a(2, { success: false, error: ar.wrap({ value: n2, cause: i2 }), rawValue: n2 });
        }
      }, e11, null, [[1, 4]]);
    })), rl.apply(this, arguments);
  }
  function ul(e11) {
    return al.apply(this, arguments);
  }
  function al() {
    return al = r(m().m(function e11(t2) {
      var n2, r2, u2, a2, i2;
      return m().w(function(e12) {
        for (; ; ) switch (e12.p = e12.n) {
          case 0:
            if (n2 = t2.text, r2 = t2.schema, e12.p = 1, u2 = (function(e13) {
              var t3 = Error.stackTraceLimit;
              Error.stackTraceLimit = 0;
              try {
                return Gc(e13);
              } finally {
                Error.stackTraceLimit = t3;
              }
            })(n2), null != r2) {
              e12.n = 2;
              break;
            }
            a2 = { success: true, value: u2, rawValue: u2 }, e12.n = 4;
            break;
          case 2:
            return e12.n = 3, nl({ value: u2, schema: r2 });
          case 3:
            a2 = e12.v;
          case 4:
            return e12.a(2, a2);
          case 5:
            return e12.p = 5, i2 = e12.v, e12.a(2, { success: false, error: er.isInstance(i2) ? i2 : new er({ text: n2, cause: i2 }), rawValue: void 0 });
        }
      }, e11, null, [[1, 5]]);
    })), al.apply(this, arguments);
  }
  function il(e11) {
    return ol.apply(this, arguments);
  }
  function ol() {
    return ol = r(m().m(function e11(t2) {
      return m().w(function(e12) {
        for (; ; ) if (0 === e12.n) return e12.a(2, ("function" == typeof t2 && (t2 = t2()), Promise.resolve(t2)));
      }, e11);
    })), ol.apply(this, arguments);
  }
  var sl = function(e11, t2) {
    for (var n2 = 0; n2 < e11.length && n2 < t2.length && e11[n2] === t2[n2]; n2++) ;
    return [(e11.length - n2).toString()].concat(F(t2.slice(n2))).join("/");
  };
  var cl = Symbol("Let zodToJsonSchema decide on which parser to use");
  var ll = { name: void 0, $refStrategy: "root", basePath: ["#"], effectStrategy: "input", pipeStrategy: "all", dateStrategy: "format:date-time", mapStrategy: "entries", removeAdditionalStrategy: "passthrough", allowedAdditionalProperties: true, rejectedAdditionalProperties: false, definitionPath: "definitions", strictUnions: false, definitions: {}, errorMessages: false, patternStrategy: "escape", applyRegexFlags: false, emailStrategy: "format:email", base64Strategy: "contentEncoding:base64", nameStrategy: "ref" };
  function fl(e11, t2) {
    return Nl(e11.type._def, t2);
  }
  function dl(e11, t2, n2) {
    var r2 = null != n2 ? n2 : t2.dateStrategy;
    if (Array.isArray(r2)) return { anyOf: r2.map(function(n3, r3) {
      return dl(e11, t2, n3);
    }) };
    switch (r2) {
      case "string":
      case "format:date-time":
        return { type: "string", format: "date-time" };
      case "format:date":
        return { type: "string", format: "date" };
      case "integer":
        return pl(e11);
    }
  }
  var pl = function(e11) {
    var t2, n2 = { type: "integer", format: "unix-time" }, r2 = s(e11.checks);
    try {
      for (r2.s(); !(t2 = r2.n()).done; ) {
        var u2 = t2.value;
        switch (u2.kind) {
          case "min":
            n2.minimum = u2.value;
            break;
          case "max":
            n2.maximum = u2.value;
        }
      }
    } catch (e12) {
      r2.e(e12);
    } finally {
      r2.f();
    }
    return n2;
  };
  var hl = void 0;
  var vl = /^[cC][^\s-]{8,}$/;
  var ml = /^[0-9a-z]+$/;
  var Dl = /^[0-9A-HJKMNP-TV-Z]{26}$/;
  var yl = /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/;
  var gl = function() {
    return void 0 === hl && (hl = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), hl;
  };
  var Fl = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
  var El = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
  var _l = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  var bl = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
  var Cl = /^[a-zA-Z0-9_-]{21}$/;
  var kl = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
  function Al(e11, t2) {
    var n2 = { type: "string" };
    if (e11.checks) {
      var r2, u2 = s(e11.checks);
      try {
        for (u2.s(); !(r2 = u2.n()).done; ) {
          var a2 = r2.value;
          switch (a2.kind) {
            case "min":
              n2.minLength = "number" == typeof n2.minLength ? Math.max(n2.minLength, a2.value) : a2.value;
              break;
            case "max":
              n2.maxLength = "number" == typeof n2.maxLength ? Math.min(n2.maxLength, a2.value) : a2.value;
              break;
            case "email":
              switch (t2.emailStrategy) {
                case "format:email":
                  xl(n2, "email", a2.message, t2);
                  break;
                case "format:idn-email":
                  xl(n2, "idn-email", a2.message, t2);
                  break;
                case "pattern:zod":
                  Ol(n2, yl, a2.message, t2);
              }
              break;
            case "url":
              xl(n2, "uri", a2.message, t2);
              break;
            case "uuid":
              xl(n2, "uuid", a2.message, t2);
              break;
            case "regex":
              Ol(n2, a2.regex, a2.message, t2);
              break;
            case "cuid":
              Ol(n2, vl, a2.message, t2);
              break;
            case "cuid2":
              Ol(n2, ml, a2.message, t2);
              break;
            case "startsWith":
              Ol(n2, RegExp("^".concat(wl(a2.value, t2))), a2.message, t2);
              break;
            case "endsWith":
              Ol(n2, RegExp("".concat(wl(a2.value, t2), "$")), a2.message, t2);
              break;
            case "datetime":
              xl(n2, "date-time", a2.message, t2);
              break;
            case "date":
              xl(n2, "date", a2.message, t2);
              break;
            case "time":
              xl(n2, "time", a2.message, t2);
              break;
            case "duration":
              xl(n2, "duration", a2.message, t2);
              break;
            case "length":
              n2.minLength = "number" == typeof n2.minLength ? Math.max(n2.minLength, a2.value) : a2.value, n2.maxLength = "number" == typeof n2.maxLength ? Math.min(n2.maxLength, a2.value) : a2.value;
              break;
            case "includes":
              Ol(n2, RegExp(wl(a2.value, t2)), a2.message, t2);
              break;
            case "ip":
              "v6" !== a2.version && xl(n2, "ipv4", a2.message, t2), "v4" !== a2.version && xl(n2, "ipv6", a2.message, t2);
              break;
            case "base64url":
              Ol(n2, bl, a2.message, t2);
              break;
            case "jwt":
              Ol(n2, kl, a2.message, t2);
              break;
            case "cidr":
              "v6" !== a2.version && Ol(n2, Fl, a2.message, t2), "v4" !== a2.version && Ol(n2, El, a2.message, t2);
              break;
            case "emoji":
              Ol(n2, gl(), a2.message, t2);
              break;
            case "ulid":
              Ol(n2, Dl, a2.message, t2);
              break;
            case "base64":
              switch (t2.base64Strategy) {
                case "format:binary":
                  xl(n2, "binary", a2.message, t2);
                  break;
                case "contentEncoding:base64":
                  n2.contentEncoding = "base64";
                  break;
                case "pattern:zod":
                  Ol(n2, _l, a2.message, t2);
              }
              break;
            case "nanoid":
              Ol(n2, Cl, a2.message, t2);
          }
        }
      } catch (e12) {
        u2.e(e12);
      } finally {
        u2.f();
      }
    }
    return n2;
  }
  function wl(e11, t2) {
    return "escape" === t2.patternStrategy ? (function(e12) {
      for (var t3 = "", n2 = 0; n2 < e12.length; n2++) Sl.has(e12[n2]) || (t3 += "\\"), t3 += e12[n2];
      return t3;
    })(e11) : e11;
  }
  var Sl = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
  function xl(e11, t2, n2, r2) {
    var u2;
    e11.format || (null == (u2 = e11.anyOf) ? void 0 : u2.some(function(e12) {
      return e12.format;
    })) ? (e11.anyOf || (e11.anyOf = []), e11.format && (e11.anyOf.push({ format: e11.format }), delete e11.format), e11.anyOf.push(h({ format: t2 }, n2 && r2.errorMessages && { errorMessage: { format: n2 } }))) : e11.format = t2;
  }
  function Ol(e11, t2, n2, r2) {
    var u2;
    e11.pattern || (null == (u2 = e11.allOf) ? void 0 : u2.some(function(e12) {
      return e12.pattern;
    })) ? (e11.allOf || (e11.allOf = []), e11.pattern && (e11.allOf.push({ pattern: e11.pattern }), delete e11.pattern), e11.allOf.push(h({ pattern: Bl(t2, r2) }, n2 && r2.errorMessages && { errorMessage: { pattern: n2 } }))) : e11.pattern = Bl(t2, r2);
  }
  function Bl(e11, t2) {
    var n2;
    if (!t2.applyRegexFlags || !e11.flags) return e11.source;
    for (var r2 = e11.flags.includes("i"), u2 = e11.flags.includes("m"), a2 = e11.flags.includes("s"), i2 = r2 ? e11.source.toLowerCase() : e11.source, o2 = "", s2 = false, c2 = false, l2 = false, f2 = 0; f2 < i2.length; f2++) if (s2) o2 += i2[f2], s2 = false;
    else {
      if (r2) {
        if (c2) {
          if (i2[f2].match(/[a-z]/)) {
            l2 ? (o2 += i2[f2], o2 += "".concat(i2[f2 - 2], "-").concat(i2[f2]).toUpperCase(), l2 = false) : "-" === i2[f2 + 1] && (null == (n2 = i2[f2 + 2]) ? void 0 : n2.match(/[a-z]/)) ? (o2 += i2[f2], l2 = true) : o2 += "".concat(i2[f2]).concat(i2[f2].toUpperCase());
            continue;
          }
        } else if (i2[f2].match(/[a-z]/)) {
          o2 += "[".concat(i2[f2]).concat(i2[f2].toUpperCase(), "]");
          continue;
        }
      }
      if (u2) {
        if ("^" === i2[f2]) {
          o2 += "(^|(?<=[\r\n]))";
          continue;
        }
        if ("$" === i2[f2]) {
          o2 += "($|(?=[\r\n]))";
          continue;
        }
      }
      a2 && "." === i2[f2] ? o2 += c2 ? "".concat(i2[f2], "\r\n") : "[".concat(i2[f2], "\r\n]") : (o2 += i2[f2], "\\" === i2[f2] ? s2 = true : c2 && "]" === i2[f2] ? c2 = false : c2 || "[" !== i2[f2] || (c2 = true));
    }
    try {
      new RegExp(o2);
    } catch (n3) {
      return console.warn("Could not convert regex pattern at ".concat(t2.currentPath.join("/"), " to a flag-independent form! Falling back to the flag-ignorant source")), e11.source;
    }
    return o2;
  }
  function Il(e11, t2) {
    var n2, r2, u2, a2, i2, o2, s2 = { type: "object", additionalProperties: null != (n2 = Nl(e11.valueType._def, h(h({}, t2), {}, { currentPath: [].concat(F(t2.currentPath), ["additionalProperties"]) }))) ? n2 : t2.allowedAdditionalProperties };
    if ((null == (r2 = e11.keyType) ? void 0 : r2._def.typeName) === Lc.ZodString && (null == (u2 = e11.keyType._def.checks) ? void 0 : u2.length)) {
      var c2 = Al(e11.keyType._def, t2);
      c2.type;
      var l2 = v(c2, Jt);
      return h(h({}, s2), {}, { propertyNames: l2 });
    }
    if ((null == (a2 = e11.keyType) ? void 0 : a2._def.typeName) === Lc.ZodEnum) return h(h({}, s2), {}, { propertyNames: { enum: e11.keyType._def.values } });
    if ((null == (i2 = e11.keyType) ? void 0 : i2._def.typeName) === Lc.ZodBranded && e11.keyType._def.type._def.typeName === Lc.ZodString && (null == (o2 = e11.keyType._def.type._def.checks) ? void 0 : o2.length)) {
      var f2 = fl(e11.keyType._def, t2);
      f2.type;
      var d2 = v(f2, Qt);
      return h(h({}, s2), {}, { propertyNames: d2 });
    }
    return s2;
  }
  var Tl = { ZodString: "string", ZodNumber: "number", ZodBigInt: "integer", ZodBoolean: "boolean", ZodNull: "null" };
  function Pl(e11) {
    try {
      return e11.isOptional();
    } catch (e12) {
      return true;
    }
  }
  var jl = function(e11, t2, n2) {
    switch (t2) {
      case Lc.ZodString:
        return Al(e11, n2);
      case Lc.ZodNumber:
        return (function(e12) {
          var t3 = { type: "number" };
          if (!e12.checks) return t3;
          var n3, r2 = s(e12.checks);
          try {
            for (r2.s(); !(n3 = r2.n()).done; ) {
              var u2 = n3.value;
              switch (u2.kind) {
                case "int":
                  t3.type = "integer";
                  break;
                case "min":
                  u2.inclusive ? t3.minimum = u2.value : t3.exclusiveMinimum = u2.value;
                  break;
                case "max":
                  u2.inclusive ? t3.maximum = u2.value : t3.exclusiveMaximum = u2.value;
                  break;
                case "multipleOf":
                  t3.multipleOf = u2.value;
              }
            }
          } catch (e13) {
            r2.e(e13);
          } finally {
            r2.f();
          }
          return t3;
        })(e11);
      case Lc.ZodObject:
        return (function(e12, t3) {
          var n3 = { type: "object", properties: {} }, r2 = [], u2 = e12.shape();
          for (var a2 in u2) {
            var i2 = u2[a2];
            if (void 0 !== i2 && void 0 !== i2._def) {
              var o2 = Pl(i2), s2 = Nl(i2._def, h(h({}, t3), {}, { currentPath: [].concat(F(t3.currentPath), ["properties", a2]), propertyPath: [].concat(F(t3.currentPath), ["properties", a2]) }));
              void 0 !== s2 && (n3.properties[a2] = s2, o2 || r2.push(a2));
            }
          }
          r2.length && (n3.required = r2);
          var c2 = (function(e13, t4) {
            if ("ZodNever" !== e13.catchall._def.typeName) return Nl(e13.catchall._def, h(h({}, t4), {}, { currentPath: [].concat(F(t4.currentPath), ["additionalProperties"]) }));
            switch (e13.unknownKeys) {
              case "passthrough":
                return t4.allowedAdditionalProperties;
              case "strict":
                return t4.rejectedAdditionalProperties;
              case "strip":
                return "strict" === t4.removeAdditionalStrategy ? t4.allowedAdditionalProperties : t4.rejectedAdditionalProperties;
            }
          })(e12, t3);
          return void 0 !== c2 && (n3.additionalProperties = c2), n3;
        })(e11, n2);
      case Lc.ZodBigInt:
        return (function(e12) {
          var t3 = { type: "integer", format: "int64" };
          if (!e12.checks) return t3;
          var n3, r2 = s(e12.checks);
          try {
            for (r2.s(); !(n3 = r2.n()).done; ) {
              var u2 = n3.value;
              switch (u2.kind) {
                case "min":
                  u2.inclusive ? t3.minimum = u2.value : t3.exclusiveMinimum = u2.value;
                  break;
                case "max":
                  u2.inclusive ? t3.maximum = u2.value : t3.exclusiveMaximum = u2.value;
                  break;
                case "multipleOf":
                  t3.multipleOf = u2.value;
              }
            }
          } catch (e13) {
            r2.e(e13);
          } finally {
            r2.f();
          }
          return t3;
        })(e11);
      case Lc.ZodBoolean:
        return { type: "boolean" };
      case Lc.ZodDate:
        return dl(e11, n2);
      case Lc.ZodUndefined:
        return { not: {} };
      case Lc.ZodNull:
        return { type: "null" };
      case Lc.ZodArray:
        return (function(e12, t3) {
          var n3, r2, u2, a2 = { type: "array" };
          return (null == (n3 = e12.type) ? void 0 : n3._def) && (null == (u2 = null == (r2 = e12.type) ? void 0 : r2._def) ? void 0 : u2.typeName) !== Lc.ZodAny && (a2.items = Nl(e12.type._def, h(h({}, t3), {}, { currentPath: [].concat(F(t3.currentPath), ["items"]) }))), e12.minLength && (a2.minItems = e12.minLength.value), e12.maxLength && (a2.maxItems = e12.maxLength.value), e12.exactLength && (a2.minItems = e12.exactLength.value, a2.maxItems = e12.exactLength.value), a2;
        })(e11, n2);
      case Lc.ZodUnion:
      case Lc.ZodDiscriminatedUnion:
        return (function(e12, t3) {
          var n3 = e12.options instanceof Map ? Array.from(e12.options.values()) : e12.options;
          if (n3.every(function(e13) {
            return e13._def.typeName in Tl && (!e13._def.checks || !e13._def.checks.length);
          })) {
            var r2 = n3.reduce(function(e13, t4) {
              var n4 = Tl[t4._def.typeName];
              return n4 && !e13.includes(n4) ? [].concat(F(e13), [n4]) : e13;
            }, []);
            return { type: r2.length > 1 ? r2 : r2[0] };
          }
          if (n3.every(function(e13) {
            return "ZodLiteral" === e13._def.typeName && !e13.description;
          })) {
            var u2 = n3.reduce(function(e13, t4) {
              var n4 = _(t4._def.value);
              switch (n4) {
                case "string":
                case "number":
                case "boolean":
                  return [].concat(F(e13), [n4]);
                case "bigint":
                  return [].concat(F(e13), ["integer"]);
                case "object":
                  if (null === t4._def.value) return [].concat(F(e13), ["null"]);
                default:
                  return e13;
              }
            }, []);
            if (u2.length === n3.length) {
              var a2 = u2.filter(function(e13, t4, n4) {
                return n4.indexOf(e13) === t4;
              });
              return { type: a2.length > 1 ? a2 : a2[0], enum: n3.reduce(function(e13, t4) {
                return e13.includes(t4._def.value) ? e13 : [].concat(F(e13), [t4._def.value]);
              }, []) };
            }
          } else if (n3.every(function(e13) {
            return "ZodEnum" === e13._def.typeName;
          })) return { type: "string", enum: n3.reduce(function(e13, t4) {
            return [].concat(F(e13), F(t4._def.values.filter(function(t5) {
              return !e13.includes(t5);
            })));
          }, []) };
          return (function(e13, t4) {
            var n4 = (e13.options instanceof Map ? Array.from(e13.options.values()) : e13.options).map(function(e14, n5) {
              return Nl(e14._def, h(h({}, t4), {}, { currentPath: [].concat(F(t4.currentPath), ["anyOf", "".concat(n5)]) }));
            }).filter(function(e14) {
              return !!e14 && (!t4.strictUnions || "object" == _(e14) && Object.keys(e14).length > 0);
            });
            return n4.length ? { anyOf: n4 } : void 0;
          })(e12, t3);
        })(e11, n2);
      case Lc.ZodIntersection:
        return (function(e12, t3) {
          var n3 = [Nl(e12.left._def, h(h({}, t3), {}, { currentPath: [].concat(F(t3.currentPath), ["allOf", "0"]) })), Nl(e12.right._def, h(h({}, t3), {}, { currentPath: [].concat(F(t3.currentPath), ["allOf", "1"]) }))].filter(function(e13) {
            return !!e13;
          }), r2 = [];
          return n3.forEach(function(e13) {
            if ("type" in (n4 = e13) && "string" === n4.type || !("allOf" in n4)) {
              var t4 = e13;
              if ("additionalProperties" in e13 && false === e13.additionalProperties) e13.additionalProperties, t4 = v(e13, Gt);
              r2.push(t4);
            } else r2.push.apply(r2, F(e13.allOf));
            var n4;
          }), r2.length ? { allOf: r2 } : void 0;
        })(e11, n2);
      case Lc.ZodTuple:
        return (function(e12, t3) {
          return e12.rest ? { type: "array", minItems: e12.items.length, items: e12.items.map(function(e13, n3) {
            return Nl(e13._def, h(h({}, t3), {}, { currentPath: [].concat(F(t3.currentPath), ["items", "".concat(n3)]) }));
          }).reduce(function(e13, t4) {
            return void 0 === t4 ? e13 : [].concat(F(e13), [t4]);
          }, []), additionalItems: Nl(e12.rest._def, h(h({}, t3), {}, { currentPath: [].concat(F(t3.currentPath), ["additionalItems"]) })) } : { type: "array", minItems: e12.items.length, maxItems: e12.items.length, items: e12.items.map(function(e13, n3) {
            return Nl(e13._def, h(h({}, t3), {}, { currentPath: [].concat(F(t3.currentPath), ["items", "".concat(n3)]) }));
          }).reduce(function(e13, t4) {
            return void 0 === t4 ? e13 : [].concat(F(e13), [t4]);
          }, []) };
        })(e11, n2);
      case Lc.ZodRecord:
        return Il(e11, n2);
      case Lc.ZodLiteral:
        return (function(e12) {
          var t3 = _(e12.value);
          return "bigint" !== t3 && "number" !== t3 && "boolean" !== t3 && "string" !== t3 ? { type: Array.isArray(e12.value) ? "array" : "object" } : { type: "bigint" === t3 ? "integer" : t3, const: e12.value };
        })(e11);
      case Lc.ZodEnum:
        return (function(e12) {
          return { type: "string", enum: Array.from(e12.values) };
        })(e11);
      case Lc.ZodNativeEnum:
        return (function(e12) {
          var t3 = e12.values, n3 = Object.keys(e12.values).filter(function(e13) {
            return "number" != typeof t3[t3[e13]];
          }).map(function(e13) {
            return t3[e13];
          }), r2 = Array.from(new Set(n3.map(function(e13) {
            return _(e13);
          })));
          return { type: 1 === r2.length ? "string" === r2[0] ? "string" : "number" : ["string", "number"], enum: n3 };
        })(e11);
      case Lc.ZodNullable:
        return (function(e12, t3) {
          if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(e12.innerType._def.typeName) && (!e12.innerType._def.checks || !e12.innerType._def.checks.length)) return { type: [Tl[e12.innerType._def.typeName], "null"] };
          var n3 = Nl(e12.innerType._def, h(h({}, t3), {}, { currentPath: [].concat(F(t3.currentPath), ["anyOf", "0"]) }));
          return n3 && { anyOf: [n3, { type: "null" }] };
        })(e11, n2);
      case Lc.ZodOptional:
        return (function(e12, t3) {
          var n3;
          if (t3.currentPath.toString() === (null == (n3 = t3.propertyPath) ? void 0 : n3.toString())) return Nl(e12.innerType._def, t3);
          var r2 = Nl(e12.innerType._def, h(h({}, t3), {}, { currentPath: [].concat(F(t3.currentPath), ["anyOf", "1"]) }));
          return r2 ? { anyOf: [{ not: {} }, r2] } : {};
        })(e11, n2);
      case Lc.ZodMap:
        return (function(e12, t3) {
          return "record" === t3.mapStrategy ? Il(e12, t3) : { type: "array", maxItems: 125, items: { type: "array", items: [Nl(e12.keyType._def, h(h({}, t3), {}, { currentPath: [].concat(F(t3.currentPath), ["items", "items", "0"]) })) || {}, Nl(e12.valueType._def, h(h({}, t3), {}, { currentPath: [].concat(F(t3.currentPath), ["items", "items", "1"]) })) || {}], minItems: 2, maxItems: 2 } };
        })(e11, n2);
      case Lc.ZodSet:
        return (function(e12, t3) {
          var n3 = { type: "array", uniqueItems: true, items: Nl(e12.valueType._def, h(h({}, t3), {}, { currentPath: [].concat(F(t3.currentPath), ["items"]) })) };
          return e12.minSize && (n3.minItems = e12.minSize.value), e12.maxSize && (n3.maxItems = e12.maxSize.value), n3;
        })(e11, n2);
      case Lc.ZodLazy:
        return function() {
          return e11.getter()._def;
        };
      case Lc.ZodPromise:
        return (function(e12, t3) {
          return Nl(e12.type._def, t3);
        })(e11, n2);
      case Lc.ZodNaN:
      case Lc.ZodNever:
        return { not: {} };
      case Lc.ZodEffects:
        return (function(e12, t3) {
          return "input" === t3.effectStrategy ? Nl(e12.schema._def, t3) : {};
        })(e11, n2);
      case Lc.ZodAny:
      case Lc.ZodUnknown:
        return {};
      case Lc.ZodDefault:
        return (function(e12, t3) {
          return h(h({}, Nl(e12.innerType._def, t3)), {}, { default: e12.defaultValue() });
        })(e11, n2);
      case Lc.ZodBranded:
        return fl(e11, n2);
      case Lc.ZodReadonly:
      case Lc.ZodCatch:
        return (function(e12, t3) {
          return Nl(e12.innerType._def, t3);
        })(e11, n2);
      case Lc.ZodPipeline:
        return (function(e12, t3) {
          if ("input" === t3.pipeStrategy) return Nl(e12.in._def, t3);
          if ("output" === t3.pipeStrategy) return Nl(e12.out._def, t3);
          var n3 = Nl(e12.in._def, h(h({}, t3), {}, { currentPath: [].concat(F(t3.currentPath), ["allOf", "0"]) }));
          return { allOf: [n3, Nl(e12.out._def, h(h({}, t3), {}, { currentPath: [].concat(F(t3.currentPath), ["allOf", n3 ? "1" : "0"]) }))].filter(function(e13) {
            return void 0 !== e13;
          }) };
        })(e11, n2);
      case Lc.ZodFunction:
      case Lc.ZodVoid:
      case Lc.ZodSymbol:
      default:
        return;
    }
  };
  function Nl(e11, t2) {
    var n2, r2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], u2 = t2.seen.get(e11);
    if (t2.override) {
      var a2 = null == (n2 = t2.override) ? void 0 : n2.call(t2, e11, t2, u2, r2);
      if (a2 !== cl) return a2;
    }
    if (u2 && !r2) {
      var i2 = zl(u2, t2);
      if (void 0 !== i2) return i2;
    }
    var o2 = { def: e11, path: t2.currentPath, jsonSchema: void 0 };
    t2.seen.set(e11, o2);
    var s2 = jl(e11, e11.typeName, t2), c2 = "function" == typeof s2 ? Nl(s2(), t2) : s2;
    if (c2 && Rl(e11, t2, c2), t2.postProcess) {
      var l2 = t2.postProcess(c2, e11, t2);
      return o2.jsonSchema = c2, l2;
    }
    return o2.jsonSchema = c2, c2;
  }
  var zl = function(e11, t2) {
    switch (t2.$refStrategy) {
      case "root":
        return { $ref: e11.path.join("/") };
      case "relative":
        return { $ref: sl(t2.currentPath, e11.path) };
      case "none":
      case "seen":
        return e11.path.length < t2.currentPath.length && e11.path.every(function(e12, n2) {
          return t2.currentPath[n2] === e12;
        }) ? (console.warn("Recursive reference detected at ".concat(t2.currentPath.join("/"), "! Defaulting to any")), {}) : "seen" === t2.$refStrategy ? {} : void 0;
    }
  };
  var Rl = function(e11, t2, n2) {
    return e11.description && (n2.description = e11.description), n2;
  };
  var Ml = function(e11, t2) {
    var n2, r2 = (function(e12) {
      var t3 = (function(e13) {
        return "string" == typeof e13 ? h(h({}, ll), {}, { name: e13 }) : h(h({}, ll), e13);
      })(e12), n3 = void 0 !== t3.name ? [].concat(F(t3.basePath), [t3.definitionPath, t3.name]) : t3.basePath;
      return h(h({}, t3), {}, { currentPath: n3, propertyPath: void 0, seen: new Map(Object.entries(t3.definitions).map(function(e13) {
        var n4 = g(e13, 2), r3 = n4[0], u3 = n4[1];
        return [u3._def, { def: u3._def, path: [].concat(F(t3.basePath), [t3.definitionPath, r3]), jsonSchema: void 0 }];
      })) });
    })(t2), u2 = "object" == _(t2) && t2.definitions ? Object.entries(t2.definitions).reduce(function(e12, t3) {
      var n3, u3 = g(t3, 2), a3 = u3[0], i3 = u3[1];
      return h(h({}, e12), {}, c({}, a3, null != (n3 = Nl(i3._def, h(h({}, r2), {}, { currentPath: [].concat(F(r2.basePath), [r2.definitionPath, a3]) }), true)) ? n3 : {}));
    }, {}) : void 0, a2 = "string" == typeof t2 ? t2 : "title" === (null == t2 ? void 0 : t2.nameStrategy) || null == t2 ? void 0 : t2.name, i2 = null != (n2 = Nl(e11._def, void 0 === a2 ? r2 : h(h({}, r2), {}, { currentPath: [].concat(F(r2.basePath), [r2.definitionPath, a2]) }), false)) ? n2 : {}, o2 = "object" == _(t2) && void 0 !== t2.name && "title" === t2.nameStrategy ? t2.name : void 0;
    void 0 !== o2 && (i2.title = o2);
    var s2 = void 0 === a2 ? u2 ? h(h({}, i2), {}, c({}, r2.definitionPath, u2)) : i2 : c({ $ref: [].concat(F("relative" === r2.$refStrategy ? [] : r2.basePath), [r2.definitionPath, a2]).join("/") }, r2.definitionPath, h(h({}, u2), {}, c({}, a2, i2)));
    return s2.$schema = "http://json-schema.org/draft-07/schema#", s2;
  };
  function Zl(e11, t2) {
    return (function(e12) {
      return "_zod" in e12;
    })(e11) ? (function(e12) {
      return $l((function(e13, t4) {
        if (e13 instanceof ii) {
          var n2, r2 = new xi(t4), u2 = {}, a2 = fn(e13._idmap.entries());
          try {
            for (a2.s(); !(n2 = a2.n()).done; ) {
              var i2 = bn(n2.value, 2), o2 = (i2[0], i2[1]);
              r2.process(o2);
            }
          } catch (e14) {
            a2.e(e14);
          } finally {
            a2.f();
          }
          var s2, c2 = {}, l2 = { registry: e13, uri: null == t4 ? void 0 : t4.uri, defs: u2 }, f2 = fn(e13._idmap.entries());
          try {
            for (f2.s(); !(s2 = f2.n()).done; ) {
              var d2 = bn(s2.value, 2), p2 = d2[0], h2 = d2[1];
              c2[p2] = r2.emit(h2, yn(yn({}, t4), {}, { external: l2 }));
            }
          } catch (e14) {
            f2.e(e14);
          } finally {
            f2.f();
          }
          if (Object.keys(u2).length > 0) {
            var v2 = "draft-2020-12" === r2.target ? "$defs" : "definitions";
            c2.__shared = dn({}, v2, u2);
          }
          return { schemas: c2 };
        }
        var m2 = new xi(t4);
        return m2.process(e13), m2.emit(e13, t4);
      })(e12, { target: "draft-7", io: "output", reused: "inline" }), { validate: (t3 = r(m().m(function t4(n2) {
        var r2;
        return m().w(function(t5) {
          for (; ; ) switch (t5.n) {
            case 0:
              return t5.n = 1, Zi(e12, n2);
            case 1:
              return r2 = t5.v, t5.a(2, r2.success ? { success: true, value: r2.data } : { success: false, error: r2.error });
          }
        }, t4);
      })), function(e13) {
        return t3.apply(this, arguments);
      }) });
      var t3;
    })(e11) : (function(e12) {
      return $l(Ml(e12, { $refStrategy: "none" }), { validate: (t3 = r(m().m(function t4(n2) {
        var r2;
        return m().w(function(t5) {
          for (; ; ) switch (t5.n) {
            case 0:
              return t5.n = 1, e12.safeParseAsync(n2);
            case 1:
              return r2 = t5.v, t5.a(2, r2.success ? { success: true, value: r2.data } : { success: false, error: r2.error });
          }
        }, t4);
      })), function(e13) {
        return t3.apply(this, arguments);
      }) });
      var t3;
    })(e11);
  }
  var Ll = Symbol.for("vercel.ai.schema");
  function $l(e11) {
    var t2 = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).validate;
    return c(c(c(c(c({}, Ll, true), "_type", void 0), Yc, true), "jsonSchema", e11), "validate", t2);
  }
  var ql;
  var Ul = Object.defineProperty;
  var Hl = "AI_NoObjectGeneratedError";
  var Vl = "vercel.ai.error.".concat(Hl);
  var Wl = Symbol.for(Vl);
  var Kl = (function() {
    function e11(t2) {
      var n2, r2 = t2.message, i2 = void 0 === r2 ? "No object generated." : r2, o2 = t2.cause, s2 = t2.text, c2 = t2.response, l2 = t2.usage, f2 = t2.finishReason;
      return a(this, e11), (n2 = u(this, e11, [{ name: Hl, message: i2, cause: o2 }]))[ql] = true, n2.text = s2, n2.response = c2, n2.usage = l2, n2.finishReason = f2, n2;
    }
    return f(e11, qn), o(e11, null, [{ key: "isInstance", value: function(e12) {
      return qn.hasMarker(e12, Vl);
    } }]);
  })();
  ql = Wl;
  var Jl;
  var Ql;
  var Gl = "5.0.48";
  var Yl = Zo([Yi(), fs(Uint8Array), fs(ArrayBuffer), (Jl = function(e11) {
    var t2, n2;
    return null != (n2 = null == (t2 = globalThis.Buffer) ? void 0 : t2.isBuffer(e11)) && n2;
  }, Ql = { message: "Must be a Buffer" }, (function(e11, t2) {
    var n2, r2 = Ir(Ql);
    return null !== (n2 = r2.abort) && void 0 !== n2 || (r2.abort = true), new e11(yn({ type: "custom", check: "custom", fn: t2 }, r2));
  })(ls, null != Jl ? Jl : function() {
    return true;
  }))]);
  var Xl = new cs({ type: "lazy", getter: function() {
    return Zo([So(), Yi(), _o(), Ao(), Uo(Yi(), Xl), Po(Xl)]);
  } });
  var ef = Uo(Yi(), Uo(Yi(), Xl));
  var tf = No({ type: Ko("text"), text: Yi(), providerOptions: ef.optional() });
  var nf = No({ type: Ko("image"), image: Zo([Yl, fs(URL)]), mediaType: Yi().optional(), providerOptions: ef.optional() });
  var rf = No({ type: Ko("file"), data: Zo([Yl, fs(URL)]), filename: Yi().optional(), mediaType: Yi(), providerOptions: ef.optional() });
  var uf = No({ type: Ko("reasoning"), text: Yi(), providerOptions: ef.optional() });
  var af = No({ type: Ko("tool-call"), toolCallId: Yi(), toolName: Yi(), input: Oo(), providerOptions: ef.optional(), providerExecuted: Ao().optional() });
  var of = new Lo(yn({ type: "union", options: [No({ type: Ko("text"), value: Yi() }), No({ type: Ko("json"), value: Xl }), No({ type: Ko("error-text"), value: Yi() }), No({ type: Ko("error-json"), value: Xl }), No({ type: Ko("content"), value: Po(Zo([No({ type: Ko("text"), text: Yi() }), No({ type: Ko("media"), data: Yi(), mediaType: Yi() })])) })], discriminator: "type" }, Ir(void 0)));
  var sf = No({ type: Ko("tool-result"), toolCallId: Yi(), toolName: Yi(), output: of, providerOptions: ef.optional() });
  var cf = No({ role: Ko("system"), content: Yi(), providerOptions: ef.optional() });
  var lf = No({ role: Ko("user"), content: Zo([Yi(), Po(Zo([tf, nf, rf]))]), providerOptions: ef.optional() });
  var ff = No({ role: Ko("assistant"), content: Zo([Yi(), Po(Zo([tf, rf, uf, af, sf]))]), providerOptions: ef.optional() });
  Zo([cf, lf, ff, No({ role: Ko("tool"), content: Po(sf), providerOptions: ef.optional() })]), Wc({ prefix: "aitxt", size: 24 }), TransformStream;
  var df = Zo([zo({ type: Ko("text-start"), id: Yi(), providerMetadata: ef.optional() }), zo({ type: Ko("text-delta"), id: Yi(), delta: Yi(), providerMetadata: ef.optional() }), zo({ type: Ko("text-end"), id: Yi(), providerMetadata: ef.optional() }), zo({ type: Ko("error"), errorText: Yi() }), zo({ type: Ko("tool-input-start"), toolCallId: Yi(), toolName: Yi(), providerExecuted: Ao().optional(), dynamic: Ao().optional() }), zo({ type: Ko("tool-input-delta"), toolCallId: Yi(), inputTextDelta: Yi() }), zo({ type: Ko("tool-input-available"), toolCallId: Yi(), toolName: Yi(), input: Oo(), providerExecuted: Ao().optional(), providerMetadata: ef.optional(), dynamic: Ao().optional() }), zo({ type: Ko("tool-input-error"), toolCallId: Yi(), toolName: Yi(), input: Oo(), providerExecuted: Ao().optional(), providerMetadata: ef.optional(), dynamic: Ao().optional(), errorText: Yi() }), zo({ type: Ko("tool-output-available"), toolCallId: Yi(), output: Oo(), providerExecuted: Ao().optional(), dynamic: Ao().optional(), preliminary: Ao().optional() }), zo({ type: Ko("tool-output-error"), toolCallId: Yi(), errorText: Yi(), providerExecuted: Ao().optional(), dynamic: Ao().optional() }), zo({ type: Ko("reasoning"), text: Yi(), providerMetadata: ef.optional() }), zo({ type: Ko("reasoning-start"), id: Yi(), providerMetadata: ef.optional() }), zo({ type: Ko("reasoning-delta"), id: Yi(), delta: Yi(), providerMetadata: ef.optional() }), zo({ type: Ko("reasoning-end"), id: Yi(), providerMetadata: ef.optional() }), zo({ type: Ko("reasoning-part-finish") }), zo({ type: Ko("source-url"), sourceId: Yi(), url: Yi(), title: Yi().optional(), providerMetadata: ef.optional() }), zo({ type: Ko("source-document"), sourceId: Yi(), mediaType: Yi(), title: Yi(), filename: Yi().optional(), providerMetadata: ef.optional() }), zo({ type: Ko("file"), url: Yi(), mediaType: Yi(), providerMetadata: ef.optional() }), zo({ type: Yi().startsWith("data-"), id: Yi().optional(), data: Oo(), transient: Ao().optional() }), zo({ type: Ko("start-step") }), zo({ type: Ko("finish-step") }), zo({ type: Ko("start"), messageId: Yi().optional(), messageMetadata: Oo().optional() }), zo({ type: Ko("finish"), messageMetadata: Oo().optional() }), zo({ type: Ko("abort") }), zo({ type: Ko("message-metadata"), messageMetadata: Oo() })]);
  function pf(e11, t2) {
    if (void 0 !== e11 || void 0 !== t2) {
      if (void 0 === e11) return t2;
      if (void 0 === t2) return e11;
      var n2 = h({}, e11);
      for (var r2 in t2) if (Object.prototype.hasOwnProperty.call(t2, r2)) {
        var u2 = t2[r2];
        if (void 0 === u2) continue;
        var a2 = r2 in e11 ? e11[r2] : void 0, i2 = !(null === u2 || "object" != _(u2) || Array.isArray(u2) || u2 instanceof Date || u2 instanceof RegExp), o2 = !(null == a2 || "object" != _(a2) || Array.isArray(a2) || a2 instanceof Date || a2 instanceof RegExp);
        n2[r2] = i2 && o2 ? pf(a2, u2) : u2;
      }
      return n2;
    }
  }
  function hf(e11) {
    var t2 = ["ROOT"], n2 = -1, r2 = null;
    function u2(e12, u3, a3) {
      switch (e12) {
        case '"':
          n2 = u3, t2.pop(), t2.push(a3), t2.push("INSIDE_STRING");
          break;
        case "f":
        case "t":
        case "n":
          n2 = u3, r2 = u3, t2.pop(), t2.push(a3), t2.push("INSIDE_LITERAL");
          break;
        case "-":
          t2.pop(), t2.push(a3), t2.push("INSIDE_NUMBER");
          break;
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          n2 = u3, t2.pop(), t2.push(a3), t2.push("INSIDE_NUMBER");
          break;
        case "{":
          n2 = u3, t2.pop(), t2.push(a3), t2.push("INSIDE_OBJECT_START");
          break;
        case "[":
          n2 = u3, t2.pop(), t2.push(a3), t2.push("INSIDE_ARRAY_START");
      }
    }
    function a2(e12, r3) {
      switch (e12) {
        case ",":
          t2.pop(), t2.push("INSIDE_OBJECT_AFTER_COMMA");
          break;
        case "}":
          n2 = r3, t2.pop();
      }
    }
    function i2(e12, r3) {
      switch (e12) {
        case ",":
          t2.pop(), t2.push("INSIDE_ARRAY_AFTER_COMMA");
          break;
        case "]":
          n2 = r3, t2.pop();
      }
    }
    for (var o2 = 0; o2 < e11.length; o2++) {
      var s2 = e11[o2];
      switch (t2[t2.length - 1]) {
        case "ROOT":
          u2(s2, o2, "FINISH");
          break;
        case "INSIDE_OBJECT_START":
          switch (s2) {
            case '"':
              t2.pop(), t2.push("INSIDE_OBJECT_KEY");
              break;
            case "}":
              n2 = o2, t2.pop();
          }
          break;
        case "INSIDE_OBJECT_AFTER_COMMA":
          '"' === s2 && (t2.pop(), t2.push("INSIDE_OBJECT_KEY"));
          break;
        case "INSIDE_OBJECT_KEY":
          '"' === s2 && (t2.pop(), t2.push("INSIDE_OBJECT_AFTER_KEY"));
          break;
        case "INSIDE_OBJECT_AFTER_KEY":
          ":" === s2 && (t2.pop(), t2.push("INSIDE_OBJECT_BEFORE_VALUE"));
          break;
        case "INSIDE_OBJECT_BEFORE_VALUE":
          u2(s2, o2, "INSIDE_OBJECT_AFTER_VALUE");
          break;
        case "INSIDE_OBJECT_AFTER_VALUE":
          a2(s2, o2);
          break;
        case "INSIDE_STRING":
          switch (s2) {
            case '"':
              t2.pop(), n2 = o2;
              break;
            case "\\":
              t2.push("INSIDE_STRING_ESCAPE");
              break;
            default:
              n2 = o2;
          }
          break;
        case "INSIDE_ARRAY_START":
          "]" === s2 ? (n2 = o2, t2.pop()) : (n2 = o2, u2(s2, o2, "INSIDE_ARRAY_AFTER_VALUE"));
          break;
        case "INSIDE_ARRAY_AFTER_VALUE":
          switch (s2) {
            case ",":
              t2.pop(), t2.push("INSIDE_ARRAY_AFTER_COMMA");
              break;
            case "]":
              n2 = o2, t2.pop();
              break;
            default:
              n2 = o2;
          }
          break;
        case "INSIDE_ARRAY_AFTER_COMMA":
          u2(s2, o2, "INSIDE_ARRAY_AFTER_VALUE");
          break;
        case "INSIDE_STRING_ESCAPE":
          t2.pop(), n2 = o2;
          break;
        case "INSIDE_NUMBER":
          switch (s2) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
              n2 = o2;
              break;
            case "e":
            case "E":
            case "-":
            case ".":
              break;
            case ",":
              t2.pop(), "INSIDE_ARRAY_AFTER_VALUE" === t2[t2.length - 1] && i2(s2, o2), "INSIDE_OBJECT_AFTER_VALUE" === t2[t2.length - 1] && a2(s2, o2);
              break;
            case "}":
              t2.pop(), "INSIDE_OBJECT_AFTER_VALUE" === t2[t2.length - 1] && a2(s2, o2);
              break;
            case "]":
              t2.pop(), "INSIDE_ARRAY_AFTER_VALUE" === t2[t2.length - 1] && i2(s2, o2);
              break;
            default:
              t2.pop();
          }
          break;
        case "INSIDE_LITERAL":
          var c2 = e11.substring(r2, o2 + 1);
          "false".startsWith(c2) || "true".startsWith(c2) || "null".startsWith(c2) ? n2 = o2 : (t2.pop(), "INSIDE_OBJECT_AFTER_VALUE" === t2[t2.length - 1] ? a2(s2, o2) : "INSIDE_ARRAY_AFTER_VALUE" === t2[t2.length - 1] && i2(s2, o2));
      }
    }
    for (var l2 = e11.slice(0, n2 + 1), f2 = t2.length - 1; f2 >= 0; f2--) switch (t2[f2]) {
      case "INSIDE_STRING":
        l2 += '"';
        break;
      case "INSIDE_OBJECT_KEY":
      case "INSIDE_OBJECT_AFTER_KEY":
      case "INSIDE_OBJECT_AFTER_COMMA":
      case "INSIDE_OBJECT_START":
      case "INSIDE_OBJECT_BEFORE_VALUE":
      case "INSIDE_OBJECT_AFTER_VALUE":
        l2 += "}";
        break;
      case "INSIDE_ARRAY_START":
      case "INSIDE_ARRAY_AFTER_COMMA":
      case "INSIDE_ARRAY_AFTER_VALUE":
        l2 += "]";
        break;
      case "INSIDE_LITERAL":
        var d2 = e11.substring(r2, e11.length);
        "true".startsWith(d2) ? l2 += "true".slice(d2.length) : "false".startsWith(d2) ? l2 += "false".slice(d2.length) : "null".startsWith(d2) && (l2 += "null".slice(d2.length));
    }
    return l2;
  }
  function vf(e11) {
    return mf.apply(this, arguments);
  }
  function mf() {
    return mf = r(m().m(function e11(t2) {
      var n2, r2;
      return m().w(function(e12) {
        for (; ; ) switch (e12.n) {
          case 0:
            if (void 0 !== t2) {
              e12.n = 1;
              break;
            }
            return e12.a(2, { value: void 0, state: "undefined-input" });
          case 1:
            return e12.n = 2, ul({ text: t2 });
          case 2:
            if (!(n2 = e12.v).success) {
              e12.n = 3;
              break;
            }
            r2 = { value: n2.value, state: "successful-parse" }, e12.n = 5;
            break;
          case 3:
            return e12.n = 4, ul({ text: hf(t2) });
          case 4:
            n2 = e12.v, r2 = n2.success ? { value: n2.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" };
          case 5:
            return e12.a(2, r2);
        }
      }, e11);
    })), mf.apply(this, arguments);
  }
  function Df(e11) {
    return e11.type.startsWith("tool-");
  }
  function yf(e11) {
    return Df(e11) || (function(e12) {
      return "dynamic-tool" === e12.type;
    })(e11);
  }
  function gf(e11) {
    return e11.type.split("-").slice(1).join("-");
  }
  function Ff(e11) {
    var t2 = e11.lastMessage, n2 = e11.messageId;
    return { message: "assistant" === (null == t2 ? void 0 : t2.role) ? t2 : { id: n2, metadata: void 0, role: "assistant", parts: [] }, activeTextParts: {}, activeReasoningParts: {}, partialToolCalls: {} };
  }
  function Ef(e11) {
    var t2 = e11.stream, n2 = e11.messageMetadataSchema, u2 = e11.dataPartSchemas, a2 = e11.runUpdateMessageJob, i2 = e11.onError, o2 = e11.onToolCall, s2 = e11.onData;
    return t2.pipeThrough(new TransformStream({ transform: function(e12, t3) {
      return r(m().m(function c2() {
        return m().w(function(c3) {
          for (; ; ) switch (c3.n) {
            case 0:
              return c3.n = 1, a2((function() {
                var a3 = r(m().m(function a4(c4) {
                  var l2, f2, d2, p2, v2, D2, y2, g2, F2, E2, _2, b2, C2, k2, A2, w2, S2, x2, O2, B2, I2, T2, P2, j2, N2, z2, R2, M2, Z2;
                  return m().w(function(a5) {
                    for (; ; ) switch (a5.n) {
                      case 0:
                        b2 = function() {
                          return b2 = r(m().m(function e13(t4) {
                            var r2;
                            return m().w(function(e14) {
                              for (; ; ) switch (e14.n) {
                                case 0:
                                  if (null == t4) {
                                    e14.n = 2;
                                    break;
                                  }
                                  if (r2 = null != l2.message.metadata ? pf(l2.message.metadata, t4) : t4, !(null != n2)) {
                                    e14.n = 1;
                                    break;
                                  }
                                  return e14.n = 1, el({ value: r2, schema: n2 });
                                case 1:
                                  l2.message.metadata = r2;
                                case 2:
                                  return e14.a(2);
                              }
                            }, e13);
                          })), b2.apply(this, arguments);
                        }, _2 = function(e13) {
                          return b2.apply(this, arguments);
                        }, E2 = function(e13) {
                          var t4, n3 = l2.message.parts.find(function(t5) {
                            return "dynamic-tool" === t5.type && t5.toolCallId === e13.toolCallId;
                          }), r2 = e13, u3 = n3;
                          null != n3 ? (n3.state = e13.state, u3.toolName = e13.toolName, u3.input = r2.input, u3.output = r2.output, u3.errorText = r2.errorText, u3.rawInput = null != (t4 = r2.rawInput) ? t4 : u3.rawInput, u3.preliminary = r2.preliminary, null != r2.providerMetadata && "input-available" === n3.state && (n3.callProviderMetadata = r2.providerMetadata)) : l2.message.parts.push(h({ type: "dynamic-tool", toolName: e13.toolName, toolCallId: e13.toolCallId, state: e13.state, input: r2.input, output: r2.output, errorText: r2.errorText, preliminary: r2.preliminary }, null != r2.providerMetadata ? { callProviderMetadata: r2.providerMetadata } : {}));
                        }, F2 = function(e13) {
                          var t4, n3 = l2.message.parts.find(function(t5) {
                            return Df(t5) && t5.toolCallId === e13.toolCallId;
                          }), r2 = e13, u3 = n3;
                          null != n3 ? (n3.state = e13.state, u3.input = r2.input, u3.output = r2.output, u3.errorText = r2.errorText, u3.rawInput = r2.rawInput, u3.preliminary = r2.preliminary, u3.providerExecuted = null != (t4 = r2.providerExecuted) ? t4 : n3.providerExecuted, null != r2.providerMetadata && "input-available" === n3.state && (n3.callProviderMetadata = r2.providerMetadata)) : l2.message.parts.push(h({ type: "tool-".concat(e13.toolName), toolCallId: e13.toolCallId, state: e13.state, input: r2.input, output: r2.output, rawInput: r2.rawInput, errorText: r2.errorText, providerExecuted: r2.providerExecuted, preliminary: r2.preliminary }, null != r2.providerMetadata ? { callProviderMetadata: r2.providerMetadata } : {}));
                        }, g2 = function(e13) {
                          var t4 = l2.message.parts.filter(function(e14) {
                            return "dynamic-tool" === e14.type;
                          }).find(function(t5) {
                            return t5.toolCallId === e13;
                          });
                          if (null == t4) throw new Error("tool-output-error must be preceded by a tool-input-available");
                          return t4;
                        }, y2 = function(e13) {
                          var t4 = l2.message.parts.filter(Df).find(function(t5) {
                            return t5.toolCallId === e13;
                          });
                          if (null == t4) throw new Error("tool-output-error must be preceded by a tool-input-available");
                          return t4;
                        }, l2 = c4.state, f2 = c4.write, Z2 = e12.type, a5.n = "text-start" === Z2 ? 1 : "text-delta" === Z2 ? 2 : "text-end" === Z2 ? 3 : "reasoning-start" === Z2 ? 4 : "reasoning-delta" === Z2 ? 5 : "reasoning-end" === Z2 ? 6 : "file" === Z2 ? 7 : "source-url" === Z2 ? 8 : "source-document" === Z2 ? 9 : "tool-input-start" === Z2 ? 10 : "tool-input-delta" === Z2 ? 11 : "tool-input-available" === Z2 ? 13 : "tool-input-error" === Z2 ? 15 : "tool-output-available" === Z2 ? 16 : "tool-output-error" === Z2 ? 17 : "start-step" === Z2 ? 18 : "finish-step" === Z2 ? 19 : "start" === Z2 ? 20 : "finish" === Z2 || "message-metadata" === Z2 ? 22 : "error" === Z2 ? 24 : 25;
                        break;
                      case 1:
                        return C2 = { type: "text", text: "", providerMetadata: e12.providerMetadata, state: "streaming" }, l2.activeTextParts[e12.id] = C2, l2.message.parts.push(C2), f2(), a5.a(3, 28);
                      case 2:
                        return (k2 = l2.activeTextParts[e12.id]).text += e12.delta, k2.providerMetadata = null != (d2 = e12.providerMetadata) ? d2 : k2.providerMetadata, f2(), a5.a(3, 28);
                      case 3:
                        return (A2 = l2.activeTextParts[e12.id]).state = "done", A2.providerMetadata = null != (p2 = e12.providerMetadata) ? p2 : A2.providerMetadata, delete l2.activeTextParts[e12.id], f2(), a5.a(3, 28);
                      case 4:
                        return w2 = { type: "reasoning", text: "", providerMetadata: e12.providerMetadata, state: "streaming" }, l2.activeReasoningParts[e12.id] = w2, l2.message.parts.push(w2), f2(), a5.a(3, 28);
                      case 5:
                        return (S2 = l2.activeReasoningParts[e12.id]).text += e12.delta, S2.providerMetadata = null != (v2 = e12.providerMetadata) ? v2 : S2.providerMetadata, f2(), a5.a(3, 28);
                      case 6:
                        return (x2 = l2.activeReasoningParts[e12.id]).providerMetadata = null != (D2 = e12.providerMetadata) ? D2 : x2.providerMetadata, x2.state = "done", delete l2.activeReasoningParts[e12.id], f2(), a5.a(3, 28);
                      case 7:
                        return l2.message.parts.push({ type: "file", mediaType: e12.mediaType, url: e12.url }), f2(), a5.a(3, 28);
                      case 8:
                        return l2.message.parts.push({ type: "source-url", sourceId: e12.sourceId, url: e12.url, title: e12.title, providerMetadata: e12.providerMetadata }), f2(), a5.a(3, 28);
                      case 9:
                        return l2.message.parts.push({ type: "source-document", sourceId: e12.sourceId, mediaType: e12.mediaType, title: e12.title, filename: e12.filename, providerMetadata: e12.providerMetadata }), f2(), a5.a(3, 28);
                      case 10:
                        return O2 = l2.message.parts.filter(Df), l2.partialToolCalls[e12.toolCallId] = { text: "", toolName: e12.toolName, index: O2.length, dynamic: e12.dynamic }, e12.dynamic ? E2({ toolCallId: e12.toolCallId, toolName: e12.toolName, state: "input-streaming", input: void 0 }) : F2({ toolCallId: e12.toolCallId, toolName: e12.toolName, state: "input-streaming", input: void 0, providerExecuted: e12.providerExecuted }), f2(), a5.a(3, 28);
                      case 11:
                        return (B2 = l2.partialToolCalls[e12.toolCallId]).text += e12.inputTextDelta, a5.n = 12, vf(B2.text);
                      case 12:
                        return I2 = a5.v, T2 = I2.value, B2.dynamic ? E2({ toolCallId: e12.toolCallId, toolName: B2.toolName, state: "input-streaming", input: T2 }) : F2({ toolCallId: e12.toolCallId, toolName: B2.toolName, state: "input-streaming", input: T2 }), f2(), a5.a(3, 28);
                      case 13:
                        if (e12.dynamic ? E2({ toolCallId: e12.toolCallId, toolName: e12.toolName, state: "input-available", input: e12.input, providerMetadata: e12.providerMetadata }) : F2({ toolCallId: e12.toolCallId, toolName: e12.toolName, state: "input-available", input: e12.input, providerExecuted: e12.providerExecuted, providerMetadata: e12.providerMetadata }), f2(), !(o2 && !e12.providerExecuted)) {
                          a5.n = 14;
                          break;
                        }
                        return a5.n = 14, o2({ toolCall: e12 });
                      case 14:
                        return a5.a(3, 28);
                      case 15:
                        return e12.dynamic ? E2({ toolCallId: e12.toolCallId, toolName: e12.toolName, state: "output-error", input: e12.input, errorText: e12.errorText, providerMetadata: e12.providerMetadata }) : F2({ toolCallId: e12.toolCallId, toolName: e12.toolName, state: "output-error", input: void 0, rawInput: e12.input, errorText: e12.errorText, providerExecuted: e12.providerExecuted, providerMetadata: e12.providerMetadata }), f2(), a5.a(3, 28);
                      case 16:
                        return e12.dynamic ? (P2 = g2(e12.toolCallId), E2({ toolCallId: e12.toolCallId, toolName: P2.toolName, state: "output-available", input: P2.input, output: e12.output, preliminary: e12.preliminary })) : (j2 = y2(e12.toolCallId), F2({ toolCallId: e12.toolCallId, toolName: gf(j2), state: "output-available", input: j2.input, output: e12.output, providerExecuted: e12.providerExecuted, preliminary: e12.preliminary })), f2(), a5.a(3, 28);
                      case 17:
                        return e12.dynamic ? (N2 = g2(e12.toolCallId), E2({ toolCallId: e12.toolCallId, toolName: N2.toolName, state: "output-error", input: N2.input, errorText: e12.errorText })) : (z2 = y2(e12.toolCallId), F2({ toolCallId: e12.toolCallId, toolName: gf(z2), state: "output-error", input: z2.input, rawInput: z2.rawInput, errorText: e12.errorText })), f2(), a5.a(3, 28);
                      case 18:
                        return l2.message.parts.push({ type: "step-start" }), a5.a(3, 28);
                      case 19:
                        return l2.activeTextParts = {}, l2.activeReasoningParts = {}, a5.a(3, 28);
                      case 20:
                        return null != e12.messageId && (l2.message.id = e12.messageId), a5.n = 21, _2(e12.messageMetadata);
                      case 21:
                        return null == e12.messageId && null == e12.messageMetadata || f2(), a5.a(3, 28);
                      case 22:
                        return a5.n = 23, _2(e12.messageMetadata);
                      case 23:
                        return null != e12.messageMetadata && f2(), a5.a(3, 28);
                      case 24:
                        return null == i2 || i2(new Error(e12.errorText)), a5.a(3, 28);
                      case 25:
                        if (!(function(e13) {
                          return e13.type.startsWith("data-");
                        })(e12)) {
                          a5.n = 28;
                          break;
                        }
                        if (!(null != (null == u2 ? void 0 : u2[e12.type]))) {
                          a5.n = 26;
                          break;
                        }
                        return a5.n = 26, el({ value: e12.data, schema: u2[e12.type] });
                      case 26:
                        if (!(R2 = e12).transient) {
                          a5.n = 27;
                          break;
                        }
                        return null == s2 || s2(R2), a5.a(3, 28);
                      case 27:
                        M2 = null != R2.id ? l2.message.parts.find(function(e13) {
                          return R2.type === e13.type && R2.id === e13.id;
                        }) : void 0, null != M2 ? M2.data = R2.data : l2.message.parts.push(R2), null == s2 || s2(R2), f2();
                      case 28:
                        t3.enqueue(e12);
                      case 29:
                        return a5.a(2);
                    }
                  }, a4);
                }));
                return function(e13) {
                  return a3.apply(this, arguments);
                };
              })());
            case 1:
              return c3.a(2);
          }
        }, c2);
      }))();
    } }));
  }
  Wc({ prefix: "aitxt", size: 24 }), Wc({ prefix: "aiobj", size: 24 });
  var _f = (function() {
    return o(function e12() {
      a(this, e12), this.queue = [], this.isProcessing = false;
    }, [{ key: "processQueue", value: (t2 = r(m().m(function e12() {
      return m().w(function(e13) {
        for (; ; ) switch (e13.n) {
          case 0:
            if (this.isProcessing) {
              e13.n = 5;
              break;
            }
            this.isProcessing = true;
          case 1:
            if (!(this.queue.length > 0)) {
              e13.n = 4;
              break;
            }
            return e13.n = 2, this.queue[0]();
          case 2:
            this.queue.shift();
          case 3:
            e13.n = 1;
            break;
          case 4:
            this.isProcessing = false;
          case 5:
            return e13.a(2);
        }
      }, e12, this);
    })), function() {
      return t2.apply(this, arguments);
    }) }, { key: "run", value: (e11 = r(m().m(function e12(t3) {
      var n2 = this;
      return m().w(function(e13) {
        for (; ; ) if (0 === e13.n) return e13.a(2, new Promise(function(e14, u2) {
          n2.queue.push(r(m().m(function n3() {
            var r2;
            return m().w(function(n4) {
              for (; ; ) switch (n4.p = n4.n) {
                case 0:
                  return n4.p = 0, n4.n = 1, t3();
                case 1:
                  e14(), n4.n = 3;
                  break;
                case 2:
                  n4.p = 2, r2 = n4.v, u2(r2);
                case 3:
                  return n4.a(2);
              }
            }, n3, null, [[0, 2]]);
          }))), n2.processQueue();
        }));
      }, e12);
    })), function(t3) {
      return e11.apply(this, arguments);
    }) }]);
    var e11, t2;
  })();
  Wc({ prefix: "aiobj", size: 24 }), (function(e11, t2) {
    for (var n2 in t2) Ul(e11, n2, { get: t2[n2], enumerable: true });
  })({}, { object: function() {
    return Cf;
  }, text: function() {
    return bf;
  } });
  var bf = function() {
    return { type: "text", responseFormat: { type: "text" }, parsePartial: (t2 = r(m().m(function e12(t3) {
      var n2;
      return m().w(function(e13) {
        for (; ; ) if (0 === e13.n) return n2 = t3.text, e13.a(2, { partial: n2 });
      }, e12);
    })), function(e12) {
      return t2.apply(this, arguments);
    }), parseOutput: (e11 = r(m().m(function e12(t3) {
      var n2;
      return m().w(function(e13) {
        for (; ; ) if (0 === e13.n) return n2 = t3.text, e13.a(2, n2);
      }, e12);
    })), function(t3) {
      return e11.apply(this, arguments);
    }) };
    var e11, t2;
  };
  var Cf = function(e11) {
    var t2 = (function(e12) {
      return null == e12 ? $l({ properties: {}, additionalProperties: false }) : "object" == _(t3 = e12) && null !== t3 && Ll in t3 && true === t3[Ll] && "jsonSchema" in t3 && "validate" in t3 ? e12 : Zl(e12);
      var t3;
    })(e11.schema);
    return { type: "object", responseFormat: { type: "json", schema: t2.jsonSchema }, parsePartial: function(e12) {
      return r(m().m(function t3() {
        var n2, r2, u2, a2;
        return m().w(function(t4) {
          for (; ; ) switch (t4.n) {
            case 0:
              return n2 = e12.text, t4.n = 1, vf(n2);
            case 1:
              r2 = t4.v, a2 = r2.state, t4.n = "failed-parse" === a2 || "undefined-input" === a2 ? 2 : "repaired-parse" === a2 || "successful-parse" === a2 ? 3 : 4;
              break;
            case 2:
            case 5:
              return t4.a(2);
            case 3:
              return t4.a(2, { partial: r2.value });
            case 4:
              throw u2 = r2.state, new Error("Unsupported parse state: ".concat(u2));
          }
        }, t3);
      }))();
    }, parseOutput: function(e12, n2) {
      return r(m().m(function r2() {
        var u2, a2, i2;
        return m().w(function(r3) {
          for (; ; ) switch (r3.n) {
            case 0:
              return u2 = e12.text, r3.n = 1, ul({ text: u2 });
            case 1:
              if ((a2 = r3.v).success) {
                r3.n = 2;
                break;
              }
              throw new Kl({ message: "No object generated: could not parse the response.", cause: a2.error, text: u2, response: n2.response, usage: n2.usage, finishReason: n2.finishReason });
            case 2:
              return r3.n = 3, nl({ value: a2.value, schema: t2 });
            case 3:
              if ((i2 = r3.v).success) {
                r3.n = 4;
                break;
              }
              throw new Kl({ message: "No object generated: response did not match schema.", cause: i2.error, text: u2, response: n2.response, usage: n2.usage, finishReason: n2.finishReason });
            case 4:
              return r3.a(2, i2.value);
          }
        }, r2);
      }))();
    } };
  };
  var kf = Ro({ name: Yi(), version: Yi() });
  var Af = Ro({ _meta: Go(No({}).loose()) });
  var wf = Af;
  var Sf = No({ method: Yi(), params: Go(Af) });
  var xf = Ro({ experimental: Go(No({}).loose()), logging: Go(No({}).loose()), prompts: Go(Ro({ listChanged: Go(Ao()) })), resources: Go(Ro({ subscribe: Go(Ao()), listChanged: Go(Ao()) })), tools: Go(Ro({ listChanged: Go(Ao()) })) });
  wf.extend({ protocolVersion: Yi(), capabilities: xf, serverInfo: kf, instructions: Go(Yi()) });
  var Of = wf.extend({ nextCursor: Go(Yi()) });
  var Bf = No({ name: Yi(), description: Go(Yi()), inputSchema: No({ type: Ko("object"), properties: Go(No({}).loose()) }).loose() }).loose();
  Of.extend({ tools: Po(Bf) });
  var If = No({ type: Ko("text"), text: Yi() }).loose();
  var Tf = No({ type: Ko("image"), data: Do(), mimeType: Yi() }).loose();
  var Pf = No({ uri: Yi(), mimeType: Go(Yi()) }).loose();
  var jf = Pf.extend({ text: Yi() });
  var Nf = Pf.extend({ blob: Do() });
  var zf = No({ type: Ko("resource"), resource: Zo([jf, Nf]) }).loose();
  wf.extend({ content: Po(Zo([If, Tf, zf])), isError: Ao().default(false).optional() }).or(wf.extend({ toolResult: Oo() }));
  var Rf = "2.0";
  var Mf = No({ jsonrpc: Ko(Rf), id: Zo([Yi(), _o().int()]) }).merge(Sf).strict();
  var Zf = No({ jsonrpc: Ko(Rf), id: Zo([Yi(), _o().int()]), result: wf }).strict();
  var Lf = No({ jsonrpc: Ko(Rf), id: Zo([Yi(), _o().int()]), error: No({ code: _o().int(), message: Yi(), data: Go(Oo()) }) }).strict();
  Zo([Mf, No({ jsonrpc: Ko(Rf) }).merge(No({ method: Yi(), params: Go(Af) })).strict(), Zf, Lf]);
  var $f = (function() {
    return o(function e12(t3) {
      var n2 = t3.api, r2 = void 0 === n2 ? "/api/chat" : n2, u2 = t3.credentials, i2 = t3.headers, o2 = t3.body, s2 = t3.fetch, c2 = t3.prepareSendMessagesRequest, l2 = t3.prepareReconnectToStreamRequest;
      a(this, e12), this.api = r2, this.credentials = u2, this.headers = i2, this.body = o2, this.fetch = s2, this.prepareSendMessagesRequest = c2, this.prepareReconnectToStreamRequest = l2;
    }, [{ key: "sendMessages", value: (t2 = r(m().m(function e12(t3) {
      var n2, r2, u2, a2, i2, o2, s2, c2, l2, f2, d2, p2, D2, y2, g2, F2, E2, _2, b2;
      return m().w(function(e13) {
        for (; ; ) switch (e13.n) {
          case 0:
            return n2 = t3.abortSignal, r2 = v(t3, Yt), e13.n = 1, il(this.body);
          case 1:
            return c2 = e13.v, e13.n = 2, il(this.headers);
          case 2:
            return l2 = e13.v, e13.n = 3, il(this.credentials);
          case 3:
            return f2 = e13.v, e13.n = 4, null == (u2 = this.prepareSendMessagesRequest) ? void 0 : u2.call(this, { api: this.api, id: r2.chatId, messages: r2.messages, body: h(h({}, c2), r2.body), headers: h(h({}, l2), r2.headers), credentials: f2, requestMetadata: r2.metadata, trigger: r2.trigger, messageId: r2.messageId });
          case 4:
            return d2 = e13.v, p2 = null != (a2 = null == d2 ? void 0 : d2.api) ? a2 : this.api, D2 = void 0 !== (null == d2 ? void 0 : d2.headers) ? d2.headers : h(h({}, l2), r2.headers), y2 = void 0 !== (null == d2 ? void 0 : d2.body) ? d2.body : h(h(h({}, c2), r2.body), {}, { id: r2.chatId, messages: r2.messages, trigger: r2.trigger, messageId: r2.messageId }), g2 = null != (i2 = null == d2 ? void 0 : d2.credentials) ? i2 : f2, F2 = null != (o2 = this.fetch) ? o2 : globalThis.fetch, e13.n = 5, F2(p2, { method: "POST", headers: Vc(h({ "Content-Type": "application/json" }, D2), "ai-sdk/".concat(Gl), Hc()), body: JSON.stringify(y2), credentials: g2, signal: n2 });
          case 5:
            if ((E2 = e13.v).ok) {
              e13.n = 9;
              break;
            }
            return _2 = Error, e13.n = 6, E2.text();
          case 6:
            if (null == (s2 = e13.v)) {
              e13.n = 7;
              break;
            }
            b2 = s2, e13.n = 8;
            break;
          case 7:
            b2 = "Failed to fetch the chat response.";
          case 8:
            throw new _2(b2);
          case 9:
            if (E2.body) {
              e13.n = 10;
              break;
            }
            throw new Error("The response body is empty.");
          case 10:
            return e13.a(2, this.processResponseStream(E2.body));
        }
      }, e12, this);
    })), function(e12) {
      return t2.apply(this, arguments);
    }) }, { key: "reconnectToStream", value: (e11 = r(m().m(function e12(t3) {
      var n2, r2, u2, a2, i2, o2, s2, c2, l2, f2, d2, p2, v2, D2, y2, g2;
      return m().w(function(e13) {
        for (; ; ) switch (e13.n) {
          case 0:
            return e13.n = 1, il(this.body);
          case 1:
            return o2 = e13.v, e13.n = 2, il(this.headers);
          case 2:
            return s2 = e13.v, e13.n = 3, il(this.credentials);
          case 3:
            return c2 = e13.v, e13.n = 4, null == (n2 = this.prepareReconnectToStreamRequest) ? void 0 : n2.call(this, { api: this.api, id: t3.chatId, body: h(h({}, o2), t3.body), headers: h(h({}, s2), t3.headers), credentials: c2, requestMetadata: t3.metadata });
          case 4:
            return l2 = e13.v, f2 = null != (r2 = null == l2 ? void 0 : l2.api) ? r2 : "".concat(this.api, "/").concat(t3.chatId, "/stream"), d2 = void 0 !== (null == l2 ? void 0 : l2.headers) ? l2.headers : h(h({}, s2), t3.headers), p2 = null != (u2 = null == l2 ? void 0 : l2.credentials) ? u2 : c2, v2 = null != (a2 = this.fetch) ? a2 : globalThis.fetch, e13.n = 5, v2(f2, { method: "GET", headers: Vc(d2, "ai-sdk/".concat(Gl), Hc()), credentials: p2 });
          case 5:
            if (204 !== (D2 = e13.v).status) {
              e13.n = 6;
              break;
            }
            return e13.a(2, null);
          case 6:
            if (D2.ok) {
              e13.n = 10;
              break;
            }
            return y2 = Error, e13.n = 7, D2.text();
          case 7:
            if (null == (i2 = e13.v)) {
              e13.n = 8;
              break;
            }
            g2 = i2, e13.n = 9;
            break;
          case 8:
            g2 = "Failed to fetch the chat response.";
          case 9:
            throw new y2(g2);
          case 10:
            if (D2.body) {
              e13.n = 11;
              break;
            }
            throw new Error("The response body is empty.");
          case 11:
            return e13.a(2, this.processResponseStream(D2.body));
        }
      }, e12, this);
    })), function(t3) {
      return e11.apply(this, arguments);
    }) }]);
    var e11, t2;
  })();
  var qf = (function() {
    function e11() {
      var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return a(this, e11), u(this, e11, [t2]);
    }
    return f(e11, $f), o(e11, [{ key: "processResponseStream", value: function(e12) {
      return (function(e13) {
        var t2 = e13.schema;
        return e13.stream.pipeThrough(new TextDecoderStream()).pipeThrough(new sr()).pipeThrough(new TransformStream({ transform: function(e14, n2) {
          return r(m().m(function r2() {
            var u2, a2;
            return m().w(function(r3) {
              for (; ; ) switch (r3.n) {
                case 0:
                  if (u2 = e14.data, !("[DONE]" !== u2)) {
                    r3.n = 2;
                    break;
                  }
                  return a2 = n2, r3.n = 1, ul({ text: u2, schema: t2 });
                case 1:
                  a2.enqueue.call(a2, r3.v);
                case 2:
                  return r3.a(2);
              }
            }, r2);
          }))();
        } }));
      })({ stream: e12, schema: df }).pipeThrough(new TransformStream({ transform: function(e13, t2) {
        return r(m().m(function n2() {
          return m().w(function(n3) {
            for (; ; ) switch (n3.n) {
              case 0:
                if (e13.success) {
                  n3.n = 1;
                  break;
                }
                throw e13.error;
              case 1:
                t2.enqueue(e13.value);
              case 2:
                return n3.a(2);
            }
          }, n2);
        }))();
      } }));
    } }]);
  })();
  var Uf = (function() {
    return o(function e12(t2) {
      var n2 = this, u2 = t2.generateId, i2 = void 0 === u2 ? Kc : u2, o2 = t2.id, s2 = void 0 === o2 ? i2() : o2, c2 = t2.transport, l2 = void 0 === c2 ? new qf() : c2, f2 = t2.messageMetadataSchema, d2 = t2.dataPartSchemas, p2 = t2.state, D2 = t2.onError, y2 = t2.onToolCall, g2 = t2.onFinish, E2 = t2.onData, _2 = t2.sendAutomaticallyWhen;
      a(this, e12), this.activeResponse = void 0, this.jobExecutor = new _f(), this.sendMessage = (function() {
        var e13 = r(m().m(function e14(t3, u3) {
          var a2, i3, o3, s3, c3, l3, f3;
          return m().w(function(e15) {
            for (; ; ) switch (e15.n) {
              case 0:
                if (null != t3) {
                  e15.n = 2;
                  break;
                }
                return e15.n = 1, n2.makeRequest(h({ trigger: "submit-message", messageId: null == (a2 = n2.lastMessage) ? void 0 : a2.id }, u3));
              case 1:
                return e15.a(2, void e15.v);
              case 2:
                if (!("text" in t3) && !("files" in t3)) {
                  e15.n = 6;
                  break;
                }
                if (!Array.isArray(t3.files)) {
                  e15.n = 3;
                  break;
                }
                f3 = t3.files, e15.n = 5;
                break;
              case 3:
                return e15.n = 4, (function() {
                  var e16 = r(m().m(function e17(t4) {
                    return m().w(function(e18) {
                      for (; ; ) switch (e18.n) {
                        case 0:
                          if (null != t4) {
                            e18.n = 1;
                            break;
                          }
                          return e18.a(2, []);
                        case 1:
                          if (globalThis.FileList && t4 instanceof globalThis.FileList) {
                            e18.n = 2;
                            break;
                          }
                          throw new Error("FileList is not supported in the current environment");
                        case 2:
                          return e18.a(2, Promise.all(Array.from(t4).map((function() {
                            var e19 = r(m().m(function e20(t5) {
                              var n3, r2, u4, a3, i4;
                              return m().w(function(e21) {
                                for (; ; ) switch (e21.n) {
                                  case 0:
                                    return n3 = t5.name, r2 = t5.type, u4 = r2, a3 = n3, e21.n = 1, new Promise(function(e22, n4) {
                                      var r3 = new FileReader();
                                      r3.onload = function(t6) {
                                        var n5;
                                        e22(null == (n5 = t6.target) ? void 0 : n5.result);
                                      }, r3.onerror = function(e23) {
                                        return n4(e23);
                                      }, r3.readAsDataURL(t5);
                                    });
                                  case 1:
                                    return i4 = e21.v, e21.a(2, { type: "file", mediaType: u4, filename: a3, url: i4 });
                                }
                              }, e20);
                            }));
                            return function(t5) {
                              return e19.apply(this, arguments);
                            };
                          })())));
                      }
                    }, e17);
                  }));
                  return function(t4) {
                    return e16.apply(this, arguments);
                  };
                })()(t3.files);
              case 4:
                f3 = e15.v;
              case 5:
                c3 = { parts: [].concat(F(f3), F("text" in t3 && null != t3.text ? [{ type: "text", text: t3.text }] : [])) }, e15.n = 7;
                break;
              case 6:
                c3 = t3;
              case 7:
                if (null == t3.messageId) {
                  e15.n = 10;
                  break;
                }
                if (l3 = n2.state.messages.findIndex(function(e16) {
                  return e16.id === t3.messageId;
                }), -1 !== l3) {
                  e15.n = 8;
                  break;
                }
                throw new Error("message with id ".concat(t3.messageId, " not found"));
              case 8:
                if ("user" === n2.state.messages[l3].role) {
                  e15.n = 9;
                  break;
                }
                throw new Error("message with id ".concat(t3.messageId, " is not a user message"));
              case 9:
                n2.state.messages = n2.state.messages.slice(0, l3 + 1), n2.state.replaceMessage(l3, h(h({}, c3), {}, { id: t3.messageId, role: null != (i3 = c3.role) ? i3 : "user", metadata: t3.metadata })), e15.n = 11;
                break;
              case 10:
                n2.state.pushMessage(h(h({}, c3), {}, { id: null != (o3 = c3.id) ? o3 : n2.generateId(), role: null != (s3 = c3.role) ? s3 : "user", metadata: t3.metadata }));
              case 11:
                return e15.n = 12, n2.makeRequest(h({ trigger: "submit-message", messageId: t3.messageId }, u3));
              case 12:
                return e15.a(2);
            }
          }, e14);
        }));
        return function(t3, n3) {
          return e13.apply(this, arguments);
        };
      })(), this.regenerate = r(m().m(function e13() {
        var t3, r2, u3, a2, i3 = arguments;
        return m().w(function(e14) {
          for (; ; ) switch (e14.n) {
            case 0:
              if (r2 = (t3 = i3.length > 0 && void 0 !== i3[0] ? i3[0] : {}).messageId, u3 = v(t3, Xt), a2 = null == r2 ? n2.state.messages.length - 1 : n2.state.messages.findIndex(function(e15) {
                return e15.id === r2;
              }), -1 !== a2) {
                e14.n = 1;
                break;
              }
              throw new Error("message ".concat(r2, " not found"));
            case 1:
              return n2.state.messages = n2.state.messages.slice(0, "assistant" === n2.messages[a2].role ? a2 : a2 + 1), e14.n = 2, n2.makeRequest(h({ trigger: "regenerate-message", messageId: r2 }, u3));
            case 2:
              return e14.a(2);
          }
        }, e13);
      })), this.resumeStream = r(m().m(function e13() {
        var t3, r2 = arguments;
        return m().w(function(e14) {
          for (; ; ) switch (e14.n) {
            case 0:
              return t3 = r2.length > 0 && void 0 !== r2[0] ? r2[0] : {}, e14.n = 1, n2.makeRequest(h({ trigger: "resume-stream" }, t3));
            case 1:
              return e14.a(2);
          }
        }, e13);
      })), this.clearError = function() {
        "error" === n2.status && (n2.state.error = void 0, n2.setStatus({ status: "ready" }));
      }, this.addToolResult = (function() {
        var e13 = r(m().m(function e14(t3) {
          var u3, a2;
          return m().w(function(e15) {
            for (; ; ) if (0 === e15.n) return t3.tool, u3 = t3.toolCallId, a2 = t3.output, e15.a(2, n2.jobExecutor.run(r(m().m(function e16() {
              var t4, r2, i3, o3;
              return m().w(function(e17) {
                for (; ; ) switch (e17.n) {
                  case 0:
                    i3 = n2.state.messages, o3 = i3[i3.length - 1], n2.state.replaceMessage(i3.length - 1, h(h({}, o3), {}, { parts: o3.parts.map(function(e18) {
                      return yf(e18) && e18.toolCallId === u3 ? h(h({}, e18), {}, { state: "output-available", output: a2 }) : e18;
                    }) })), n2.activeResponse && (n2.activeResponse.state.message.parts = n2.activeResponse.state.message.parts.map(function(e18) {
                      return yf(e18) && e18.toolCallId === u3 ? h(h({}, e18), {}, { state: "output-available", output: a2, errorText: void 0 }) : e18;
                    })), "streaming" !== n2.status && "submitted" !== n2.status && (null == (t4 = n2.sendAutomaticallyWhen) ? void 0 : t4.call(n2, { messages: n2.state.messages })) && n2.makeRequest({ trigger: "submit-message", messageId: null == (r2 = n2.lastMessage) ? void 0 : r2.id });
                  case 1:
                    return e17.a(2);
                }
              }, e16);
            }))));
          }, e14);
        }));
        return function(t3) {
          return e13.apply(this, arguments);
        };
      })(), this.stop = r(m().m(function e13() {
        var t3;
        return m().w(function(e14) {
          for (; ; ) switch (e14.n) {
            case 0:
              "streaming" !== n2.status && "submitted" !== n2.status || (null == (t3 = n2.activeResponse) ? void 0 : t3.abortController) && n2.activeResponse.abortController.abort();
            case 1:
              return e14.a(2);
          }
        }, e13);
      })), this.id = s2, this.transport = l2, this.generateId = i2, this.messageMetadataSchema = f2, this.dataPartSchemas = d2, this.state = p2, this.onError = D2, this.onToolCall = y2, this.onFinish = g2, this.onData = E2, this.sendAutomaticallyWhen = _2;
    }, [{ key: "status", get: function() {
      return this.state.status;
    } }, { key: "setStatus", value: function(e12) {
      var t2 = e12.status, n2 = e12.error;
      this.status !== t2 && (this.state.status = t2, this.state.error = n2);
    } }, { key: "error", get: function() {
      return this.state.error;
    } }, { key: "messages", get: function() {
      return this.state.messages;
    }, set: function(e12) {
      this.state.messages = e12;
    } }, { key: "lastMessage", get: function() {
      return this.state.messages[this.state.messages.length - 1];
    } }, { key: "makeRequest", value: (e11 = r(m().m(function e12(t2) {
      var n2, u2, a2, i2, o2, s2, c2, l2, f2, d2, p2, h2, v2, D2, y2, g2, F2, E2 = this;
      return m().w(function(e13) {
        for (; ; ) switch (e13.p = e13.n) {
          case 0:
            if (n2 = t2.trigger, u2 = t2.metadata, a2 = t2.headers, i2 = t2.body, o2 = t2.messageId, this.setStatus({ status: "submitted", error: void 0 }), f2 = this.lastMessage, d2 = false, p2 = false, h2 = false, e13.p = 1, (v2 = { state: Ff({ lastMessage: this.state.snapshot(f2), messageId: this.generateId() }), abortController: new AbortController() }).abortController.signal.addEventListener("abort", function() {
              d2 = true;
            }), this.activeResponse = v2, "resume-stream" !== n2) {
              e13.n = 4;
              break;
            }
            return e13.n = 2, this.transport.reconnectToStream({ chatId: this.id, metadata: u2, headers: a2, body: i2 });
          case 2:
            if (null != (y2 = e13.v)) {
              e13.n = 3;
              break;
            }
            return e13.a(2, void this.setStatus({ status: "ready" }));
          case 3:
            D2 = y2, e13.n = 6;
            break;
          case 4:
            return e13.n = 5, this.transport.sendMessages({ chatId: this.id, messages: this.state.messages, abortSignal: v2.abortController.signal, metadata: u2, headers: a2, body: i2, trigger: n2, messageId: o2 });
          case 5:
            D2 = e13.v;
          case 6:
            return g2 = function(e14) {
              return E2.jobExecutor.run(function() {
                return e14({ state: v2.state, write: function() {
                  var e15;
                  E2.setStatus({ status: "streaming" }), v2.state.message.id === (null == (e15 = E2.lastMessage) ? void 0 : e15.id) ? E2.state.replaceMessage(E2.state.messages.length - 1, v2.state.message) : E2.state.pushMessage(v2.state.message);
                } });
              });
            }, e13.n = 7, (function() {
              var e14 = r(m().m(function e15(t3) {
                var n3, r2, u3, a3;
                return m().w(function(e16) {
                  for (; ; ) switch (e16.p = e16.n) {
                    case 0:
                      n3 = t3.stream, r2 = t3.onError, u3 = n3.getReader(), e16.p = 1;
                    case 2:
                      return e16.n = 3, u3.read();
                    case 3:
                      if (!e16.v.done) {
                        e16.n = 4;
                        break;
                      }
                      return e16.a(3, 5);
                    case 4:
                      e16.n = 2;
                      break;
                    case 5:
                      e16.n = 7;
                      break;
                    case 6:
                      e16.p = 6, a3 = e16.v, null == r2 || r2(a3);
                    case 7:
                      return e16.p = 7, u3.releaseLock(), e16.f(7);
                    case 8:
                      return e16.a(2);
                  }
                }, e15, null, [[1, 6, 7, 8]]);
              }));
              return function(t3) {
                return e14.apply(this, arguments);
              };
            })()({ stream: Ef({ stream: D2, onToolCall: this.onToolCall, onData: this.onData, messageMetadataSchema: this.messageMetadataSchema, dataPartSchemas: this.dataPartSchemas, runUpdateMessageJob: g2, onError: function(e14) {
              throw e14;
            } }), onError: function(e14) {
              throw e14;
            } });
          case 7:
            this.setStatus({ status: "ready" }), e13.n = 10;
            break;
          case 8:
            if (e13.p = 8, F2 = e13.v, !d2 && "AbortError" !== F2.name) {
              e13.n = 9;
              break;
            }
            return e13.a(2, (d2 = true, this.setStatus({ status: "ready" }), null));
          case 9:
            h2 = true, F2 instanceof TypeError && (F2.message.toLowerCase().includes("fetch") || F2.message.toLowerCase().includes("network")) && (p2 = true), this.onError && F2 instanceof Error && this.onError(F2), this.setStatus({ status: "error", error: F2 });
          case 10:
            e13.p = 10;
            try {
              null == (s2 = this.onFinish) || s2.call(this, { message: this.activeResponse.state.message, messages: this.state.messages, isAbort: d2, isDisconnect: p2, isError: h2 });
            } catch (e14) {
              console.error(e14);
            }
            return this.activeResponse = void 0, e13.f(10);
          case 11:
            if (!(null == (c2 = this.sendAutomaticallyWhen) ? void 0 : c2.call(this, { messages: this.state.messages }))) {
              e13.n = 12;
              break;
            }
            return e13.n = 12, this.makeRequest({ trigger: "submit-message", messageId: null == (l2 = this.lastMessage) ? void 0 : l2.id, metadata: u2, headers: a2, body: i2 });
          case 12:
            return e13.a(2);
        }
      }, e12, this, [[1, 8, 10, 11]]);
    })), function(t2) {
      return e11.apply(this, arguments);
    }) }]);
    var e11;
  })();
  function Hf(e11) {
    var t2 = e11.messages, n2 = t2[t2.length - 1];
    if (!n2) return false;
    if ("assistant" !== n2.role) return false;
    var r2 = n2.parts.reduce(function(e12, t3, n3) {
      return "step-start" === t3.type ? n3 : e12;
    }, -1), u2 = n2.parts.slice(r2 + 1).filter(yf);
    return u2.length > 0 && u2.every(function(e12) {
      return "output-available" === e12.state;
    });
  }
  var Vf;
  var Wf;
  var Kf = No({ type: Ko("text"), text: Yi(), state: Vo(["streaming", "done"]).optional(), providerMetadata: ef.optional() });
  var Jf = No({ type: Ko("reasoning"), text: Yi(), state: Vo(["streaming", "done"]).optional(), providerMetadata: ef.optional() });
  var Qf = No({ type: Ko("source-url"), sourceId: Yi(), url: Yi(), title: Yi().optional(), providerMetadata: ef.optional() });
  var Gf = No({ type: Ko("source-document"), sourceId: Yi(), mediaType: Yi(), title: Yi(), filename: Yi().optional(), providerMetadata: ef.optional() });
  var Yf = No({ type: Ko("file"), mediaType: Yi(), filename: Yi().optional(), url: Yi(), providerMetadata: ef.optional() });
  var Xf = No({ type: Ko("step-start") });
  var ed = No({ type: Yi().startsWith("data-"), id: Yi().optional(), data: Oo() });
  var td = [No({ type: Ko("dynamic-tool"), toolName: Yi(), toolCallId: Yi(), state: Ko("input-streaming"), input: Oo().optional(), output: Io().optional(), errorText: Io().optional() }), No({ type: Ko("dynamic-tool"), toolName: Yi(), toolCallId: Yi(), state: Ko("input-available"), input: Oo(), output: Io().optional(), errorText: Io().optional(), callProviderMetadata: ef.optional() }), No({ type: Ko("dynamic-tool"), toolName: Yi(), toolCallId: Yi(), state: Ko("output-available"), input: Oo(), output: Oo(), errorText: Io().optional(), callProviderMetadata: ef.optional(), preliminary: Ao().optional() }), No({ type: Ko("dynamic-tool"), toolName: Yi(), toolCallId: Yi(), state: Ko("output-error"), input: Oo(), output: Io().optional(), errorText: Yi(), callProviderMetadata: ef.optional() })];
  var nd = [No({ type: Yi().startsWith("tool-"), toolCallId: Yi(), state: Ko("input-streaming"), providerExecuted: Ao().optional(), input: Oo().optional(), output: Io().optional(), errorText: Io().optional() }), No({ type: Yi().startsWith("tool-"), toolCallId: Yi(), state: Ko("input-available"), providerExecuted: Ao().optional(), input: Oo(), output: Io().optional(), errorText: Io().optional(), callProviderMetadata: ef.optional() }), No({ type: Yi().startsWith("tool-"), toolCallId: Yi(), state: Ko("output-available"), providerExecuted: Ao().optional(), input: Oo(), output: Oo(), errorText: Io().optional(), callProviderMetadata: ef.optional(), preliminary: Ao().optional() }), No({ type: Yi().startsWith("tool-"), toolCallId: Yi(), state: Ko("output-error"), providerExecuted: Ao().optional(), input: Oo(), output: Io().optional(), errorText: Yi(), callProviderMetadata: ef.optional() })];
  No({ id: Yi(), role: Vo(["system", "user", "assistant"]), metadata: Oo().optional(), parts: Po(Zo([Kf, Jf, Qf, Gf, Yf, Xf, ed].concat(td, nd))) });
  var rd;
  var ud;
  var ad;
  var id;
  var od;
  var sd;
  var cd;
  var ld;
  var fd;
  var dd;
  var pd = (function(e11) {
    return e11 && e11.__esModule && Object.prototype.hasOwnProperty.call(e11, "default") ? e11.default : e11;
  })((Wf || (Wf = 1, Vf = function(e11, t2) {
    if ("function" != typeof e11) throw new TypeError("Expected the first argument to be a `function`, got `".concat(An(e11), "`."));
    var n2, r2 = 0;
    return function() {
      for (var u2 = this, a2 = arguments.length, i2 = new Array(a2), o2 = 0; o2 < a2; o2++) i2[o2] = arguments[o2];
      clearTimeout(n2);
      var s2 = Date.now(), c2 = t2 - (s2 - r2);
      c2 <= 0 ? (r2 = s2, e11.apply(this, i2)) : n2 = setTimeout(function() {
        r2 = Date.now(), e11.apply(u2, i2);
      }, c2);
    };
  }), Vf));
  var hd = function(e11, t2, n2) {
    if (!t2.has(e11)) throw TypeError("Cannot " + n2);
  };
  var vd = function(e11, t2, n2) {
    return hd(e11, t2, "read from private field"), n2 ? n2.call(e11) : t2.get(e11);
  };
  var md = function(e11, t2, n2) {
    if (t2.has(e11)) throw TypeError("Cannot add the same private member more than once");
    t2 instanceof WeakSet ? t2.add(e11) : t2.set(e11, n2);
  };
  var Dd = function(e11, t2, n2, r2) {
    return hd(e11, t2, "write to private field"), t2.set(e11, n2), n2;
  };
  var yd = (function() {
    return o(function e11() {
      var t2 = this, n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      a(this, e11), md(this, rd, void 0), md(this, ud, "ready"), md(this, ad, void 0), md(this, id, /* @__PURE__ */ new Set()), md(this, od, /* @__PURE__ */ new Set()), md(this, sd, /* @__PURE__ */ new Set()), this.pushMessage = function(e12) {
        Dd(t2, rd, vd(t2, rd).concat(e12)), vd(t2, cd).call(t2);
      }, this.popMessage = function() {
        Dd(t2, rd, vd(t2, rd).slice(0, -1)), vd(t2, cd).call(t2);
      }, this.replaceMessage = function(e12, n3) {
        Dd(t2, rd, [].concat(F(vd(t2, rd).slice(0, e12)), [t2.snapshot(n3)], F(vd(t2, rd).slice(e12 + 1)))), vd(t2, cd).call(t2);
      }, this.snapshot = function(e12) {
        return structuredClone(e12);
      }, this["~registerMessagesCallback"] = function(e12, n3) {
        var r2 = n3 ? (function(e13, t3) {
          return null != t3 ? pd(e13, t3) : e13;
        })(e12, n3) : e12;
        return vd(t2, id).add(r2), function() {
          vd(t2, id).delete(r2);
        };
      }, this["~registerStatusCallback"] = function(e12) {
        return vd(t2, od).add(e12), function() {
          vd(t2, od).delete(e12);
        };
      }, this["~registerErrorCallback"] = function(e12) {
        return vd(t2, sd).add(e12), function() {
          vd(t2, sd).delete(e12);
        };
      }, md(this, cd, function() {
        vd(t2, id).forEach(function(e12) {
          return e12();
        });
      }), md(this, ld, function() {
        vd(t2, od).forEach(function(e12) {
          return e12();
        });
      }), md(this, fd, function() {
        vd(t2, sd).forEach(function(e12) {
          return e12();
        });
      }), Dd(this, rd, n2);
    }, [{ key: "status", get: function() {
      return vd(this, ud);
    }, set: function(e11) {
      Dd(this, ud, e11), vd(this, ld).call(this);
    } }, { key: "error", get: function() {
      return vd(this, ad);
    }, set: function(e11) {
      Dd(this, ad, e11), vd(this, fd).call(this);
    } }, { key: "messages", get: function() {
      return vd(this, rd);
    }, set: function(e11) {
      Dd(this, rd, F(e11)), vd(this, cd).call(this);
    } }]);
  })();
  rd = /* @__PURE__ */ new WeakMap(), ud = /* @__PURE__ */ new WeakMap(), ad = /* @__PURE__ */ new WeakMap(), id = /* @__PURE__ */ new WeakMap(), od = /* @__PURE__ */ new WeakMap(), sd = /* @__PURE__ */ new WeakMap(), cd = /* @__PURE__ */ new WeakMap(), ld = /* @__PURE__ */ new WeakMap(), fd = /* @__PURE__ */ new WeakMap();
  var gd = (function() {
    function e11(n2) {
      var r2, i2 = n2.messages, o2 = v(n2, en);
      a(this, e11);
      var s2 = new yd(i2);
      return r2 = u(this, e11, [h(h({}, o2), {}, { state: s2 })]), md(t(r2), dd, void 0), r2["~registerMessagesCallback"] = function(e12, n3) {
        return vd(t(r2), dd)["~registerMessagesCallback"](e12, n3);
      }, r2["~registerStatusCallback"] = function(e12) {
        return vd(t(r2), dd)["~registerStatusCallback"](e12);
      }, r2["~registerErrorCallback"] = function(e12) {
        return vd(t(r2), dd)["~registerErrorCallback"](e12);
      }, Dd(t(r2), dd, s2), r2;
    }
    return f(e11, Uf), o(e11);
  })();
  function Fd(e11, t2) {
    var n2 = void 0;
    return function() {
      for (var r2 = arguments.length, u2 = new Array(r2), a2 = 0; a2 < r2; a2++) u2[a2] = arguments[a2];
      n2 && clearTimeout(n2), n2 = setTimeout(function() {
        return e11.apply(void 0, u2);
      }, t2);
    };
  }
  function Ed(e11) {
    return e11.reduce(function(e12, t2) {
      return e12.concat(t2);
    }, []);
  }
  dd = /* @__PURE__ */ new WeakMap();
  var _d = 0;
  function bd(e11) {
    return 0 === e11.collections.length ? 0 : e11.collections.reduce(function(e12, t2) {
      return e12 + t2.items.length;
    }, 0);
  }
  function Cd(e11) {
    return e11 !== Object(e11);
  }
  function kd(e11, t2) {
    if (e11 === t2) return true;
    if (Cd(e11) || Cd(t2) || "function" == typeof e11 || "function" == typeof t2) return e11 === t2;
    if (Object.keys(e11).length !== Object.keys(t2).length) return false;
    for (var n2 = 0, r2 = Object.keys(e11); n2 < r2.length; n2++) {
      var u2 = r2[n2];
      if (!(u2 in t2)) return false;
      if (!kd(e11[u2], t2[u2])) return false;
    }
    return true;
  }
  var Ad = function() {
  };
  var wd = [{ segment: "autocomplete-core", version: "1.19.2" }];
  function Sd(e11) {
    var t2 = e11.item, n2 = e11.items, r2 = void 0 === n2 ? [] : n2;
    return { index: t2.__autocomplete_indexName, items: [t2], positions: [1 + r2.findIndex(function(e12) {
      return e12.objectID === t2.objectID;
    })], queryID: t2.__autocomplete_queryID, algoliaSource: ["autocomplete"] };
  }
  function xd(e11, t2) {
    (null == t2 || t2 > e11.length) && (t2 = e11.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e11[n2];
    return r2;
  }
  var Od = ["items"];
  var Bd = ["items"];
  function Id(e11) {
    return Id = "function" == typeof Symbol && "symbol" == _(Symbol.iterator) ? function(e12) {
      return _(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : _(e12);
    }, Id(e11);
  }
  function Td(e11) {
    return (function(e12) {
      if (Array.isArray(e12)) return Pd(e12);
    })(e11) || (function(e12) {
      if ("undefined" != typeof Symbol && null != e12[Symbol.iterator] || null != e12["@@iterator"]) return Array.from(e12);
    })(e11) || (function(e12, t2) {
      if (e12) {
        if ("string" == typeof e12) return Pd(e12, t2);
        var n2 = Object.prototype.toString.call(e12).slice(8, -1);
        return "Object" === n2 && e12.constructor && (n2 = e12.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e12) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? Pd(e12, t2) : void 0;
      }
    })(e11) || (function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function Pd(e11, t2) {
    (null == t2 || t2 > e11.length) && (t2 = e11.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e11[n2];
    return r2;
  }
  function jd(e11, t2) {
    if (null == e11) return {};
    var n2, r2, u2 = (function(e12, t3) {
      if (null == e12) return {};
      var n3, r3, u3 = {}, a3 = Object.keys(e12);
      for (r3 = 0; r3 < a3.length; r3++) n3 = a3[r3], t3.indexOf(n3) >= 0 || (u3[n3] = e12[n3]);
      return u3;
    })(e11, t2);
    if (Object.getOwnPropertySymbols) {
      var a2 = Object.getOwnPropertySymbols(e11);
      for (r2 = 0; r2 < a2.length; r2++) n2 = a2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e11, n2) && (u2[n2] = e11[n2]);
    }
    return u2;
  }
  function Nd(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function zd(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Nd(Object(n2), true).forEach(function(t3) {
        Rd(e11, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : Nd(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e11;
  }
  function Rd(e11, t2, n2) {
    return (t2 = (function(e12) {
      var t3 = (function(e13) {
        if ("object" !== Id(e13) || null === e13) return e13;
        var t4 = e13[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e13, "string");
          if ("object" !== Id(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e13);
      })(e12);
      return "symbol" === Id(t3) ? t3 : String(t3);
    })(t2)) in e11 ? Object.defineProperty(e11, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e11[t2] = n2, e11;
  }
  function Md(e11) {
    return e11.map(function(e12) {
      var t2 = e12.items, n2 = jd(e12, Od);
      return zd(zd({}, n2), {}, { objectIDs: (null == t2 ? void 0 : t2.map(function(e13) {
        return e13.objectID;
      })) || n2.objectIDs });
    });
  }
  function Zd(e11) {
    var t2, n2, r2, u2 = (t2 = (function(e12, t3) {
      return (function(e13) {
        if (Array.isArray(e13)) return e13;
      })(e12) || (function(e13, t4) {
        var n3 = null == e13 ? null : "undefined" != typeof Symbol && e13[Symbol.iterator] || e13["@@iterator"];
        if (null != n3) {
          var r3, u3, a3, i2, o2 = [], s2 = true, c2 = false;
          try {
            if (a3 = (n3 = n3.call(e13)).next, 0 === t4) ;
            else for (; !(s2 = (r3 = a3.call(n3)).done) && (o2.push(r3.value), o2.length !== t4); s2 = true) ;
          } catch (e14) {
            c2 = true, u3 = e14;
          } finally {
            try {
              if (!s2 && null != n3.return && (i2 = n3.return(), Object(i2) !== i2)) return;
            } finally {
              if (c2) throw u3;
            }
          }
          return o2;
        }
      })(e12, t3) || (function(e13, t4) {
        if (e13) {
          if ("string" == typeof e13) return xd(e13, t4);
          var n3 = Object.prototype.toString.call(e13).slice(8, -1);
          return "Object" === n3 && e13.constructor && (n3 = e13.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(e13) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? xd(e13, t4) : void 0;
        }
      })(e12, t3) || (function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      })();
    })((e11.version || "").split(".").map(Number), 2), n2 = t2[0], r2 = t2[1], n2 >= 3 || 2 === n2 && r2 >= 4 || 1 === n2 && r2 >= 10);
    function a2(t3, n3, r3) {
      if (u2 && void 0 !== r3) {
        var a3 = r3[0].__autocomplete_algoliaCredentials, i2 = { "X-Algolia-Application-Id": a3.appId, "X-Algolia-API-Key": a3.apiKey };
        e11.apply(void 0, [t3].concat(Td(n3), [{ headers: i2 }]));
      } else e11.apply(void 0, [t3].concat(Td(n3)));
    }
    return { init: function(t3, n3) {
      e11("init", { appId: t3, apiKey: n3 });
    }, setAuthenticatedUserToken: function(t3) {
      e11("setAuthenticatedUserToken", t3);
    }, setUserToken: function(t3) {
      e11("setUserToken", t3);
    }, clickedObjectIDsAfterSearch: function() {
      for (var e12 = arguments.length, t3 = new Array(e12), n3 = 0; n3 < e12; n3++) t3[n3] = arguments[n3];
      t3.length > 0 && a2("clickedObjectIDsAfterSearch", Md(t3), t3[0].items);
    }, clickedObjectIDs: function() {
      for (var e12 = arguments.length, t3 = new Array(e12), n3 = 0; n3 < e12; n3++) t3[n3] = arguments[n3];
      t3.length > 0 && a2("clickedObjectIDs", Md(t3), t3[0].items);
    }, clickedFilters: function() {
      for (var t3 = arguments.length, n3 = new Array(t3), r3 = 0; r3 < t3; r3++) n3[r3] = arguments[r3];
      n3.length > 0 && e11.apply(void 0, ["clickedFilters"].concat(n3));
    }, convertedObjectIDsAfterSearch: function() {
      for (var e12 = arguments.length, t3 = new Array(e12), n3 = 0; n3 < e12; n3++) t3[n3] = arguments[n3];
      t3.length > 0 && a2("convertedObjectIDsAfterSearch", Md(t3), t3[0].items);
    }, convertedObjectIDs: function() {
      for (var e12 = arguments.length, t3 = new Array(e12), n3 = 0; n3 < e12; n3++) t3[n3] = arguments[n3];
      t3.length > 0 && a2("convertedObjectIDs", Md(t3), t3[0].items);
    }, convertedFilters: function() {
      for (var t3 = arguments.length, n3 = new Array(t3), r3 = 0; r3 < t3; r3++) n3[r3] = arguments[r3];
      n3.length > 0 && e11.apply(void 0, ["convertedFilters"].concat(n3));
    }, viewedObjectIDs: function() {
      for (var e12 = arguments.length, t3 = new Array(e12), n3 = 0; n3 < e12; n3++) t3[n3] = arguments[n3];
      t3.length > 0 && t3.reduce(function(e13, t4) {
        var n4 = t4.items, r3 = jd(t4, Bd);
        return [].concat(Td(e13), Td((function(e14) {
          for (var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20, n5 = [], r4 = 0; r4 < e14.objectIDs.length; r4 += t5) n5.push(zd(zd({}, e14), {}, { objectIDs: e14.objectIDs.slice(r4, r4 + t5) }));
          return n5;
        })(zd(zd({}, r3), {}, { objectIDs: (null == n4 ? void 0 : n4.map(function(e14) {
          return e14.objectID;
        })) || r3.objectIDs })).map(function(e14) {
          return { items: n4, payload: e14 };
        })));
      }, []).forEach(function(e13) {
        var t4 = e13.items;
        return a2("viewedObjectIDs", [e13.payload], t4);
      });
    }, viewedFilters: function() {
      for (var t3 = arguments.length, n3 = new Array(t3), r3 = 0; r3 < t3; r3++) n3[r3] = arguments[r3];
      n3.length > 0 && e11.apply(void 0, ["viewedFilters"].concat(n3));
    } };
  }
  function Ld(e11) {
    var t2 = e11.items.reduce(function(e12, t3) {
      var n2;
      return e12[t3.__autocomplete_indexName] = (null !== (n2 = e12[t3.__autocomplete_indexName]) && void 0 !== n2 ? n2 : []).concat(t3), e12;
    }, {});
    return Object.keys(t2).map(function(e12) {
      return { index: e12, items: t2[e12], algoliaSource: ["autocomplete"] };
    });
  }
  function $d(e11) {
    return e11.objectID && e11.__autocomplete_indexName && e11.__autocomplete_queryID;
  }
  function qd(e11) {
    return qd = "function" == typeof Symbol && "symbol" == _(Symbol.iterator) ? function(e12) {
      return _(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : _(e12);
    }, qd(e11);
  }
  function Ud(e11) {
    return (function(e12) {
      if (Array.isArray(e12)) return Hd(e12);
    })(e11) || (function(e12) {
      if ("undefined" != typeof Symbol && null != e12[Symbol.iterator] || null != e12["@@iterator"]) return Array.from(e12);
    })(e11) || (function(e12, t2) {
      if (e12) {
        if ("string" == typeof e12) return Hd(e12, t2);
        var n2 = Object.prototype.toString.call(e12).slice(8, -1);
        return "Object" === n2 && e12.constructor && (n2 = e12.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e12) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? Hd(e12, t2) : void 0;
      }
    })(e11) || (function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function Hd(e11, t2) {
    (null == t2 || t2 > e11.length) && (t2 = e11.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e11[n2];
    return r2;
  }
  function Vd(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Wd(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Vd(Object(n2), true).forEach(function(t3) {
        Kd(e11, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : Vd(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e11;
  }
  function Kd(e11, t2, n2) {
    return (t2 = (function(e12) {
      var t3 = (function(e13) {
        if ("object" !== qd(e13) || null === e13) return e13;
        var t4 = e13[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e13, "string");
          if ("object" !== qd(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e13);
      })(e12);
      return "symbol" === qd(t3) ? t3 : String(t3);
    })(t2)) in e11 ? Object.defineProperty(e11, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e11[t2] = n2, e11;
  }
  var Jd = "2.15.0";
  var Qd = "https://cdn.jsdelivr.net/npm/search-insights@".concat(Jd, "/dist/search-insights.min.js");
  var Gd = Fd(function(e11) {
    var t2 = e11.onItemsChange, n2 = e11.items, r2 = e11.insights, u2 = e11.state;
    t2({ insights: r2, insightsEvents: Ld({ items: n2 }).map(function(e12) {
      return Wd({ eventName: "Items Viewed" }, e12);
    }), state: u2 });
  }, 400);
  function Yd(e11) {
    var t2 = (function(e12) {
      return Wd({ onItemsChange: function(e13) {
        var t3 = e13.insights, n3 = e13.insightsEvents, r3 = e13.state;
        t3.viewedObjectIDs.apply(t3, Ud(n3.map(function(e14) {
          return Wd(Wd({}, e14), {}, { algoliaSource: Xd(e14.algoliaSource, r3.context) });
        })));
      }, onSelect: function(e13) {
        var t3 = e13.insights, n3 = e13.insightsEvents, r3 = e13.state;
        t3.clickedObjectIDsAfterSearch.apply(t3, Ud(n3.map(function(e14) {
          return Wd(Wd({}, e14), {}, { algoliaSource: Xd(e14.algoliaSource, r3.context) });
        })));
      }, onActive: Ad, __autocomplete_clickAnalytics: true }, e12);
    })(e11), n2 = t2.insightsClient, r2 = t2.insightsInitParams, u2 = t2.onItemsChange, a2 = t2.onSelect, i2 = t2.onActive, o2 = t2.__autocomplete_clickAnalytics, s2 = n2;
    if (n2 || "undefined" != typeof window && (function(e12) {
      var t3 = e12.window, n3 = t3.AlgoliaAnalyticsObject || "aa";
      "string" == typeof n3 && (s2 = t3[n3]), s2 || (t3.AlgoliaAnalyticsObject = n3, t3[n3] || (t3[n3] = function() {
        t3[n3].queue || (t3[n3].queue = []);
        for (var e13 = arguments.length, r3 = new Array(e13), u3 = 0; u3 < e13; u3++) r3[u3] = arguments[u3];
        t3[n3].queue.push(r3);
      }), t3[n3].version = Jd, s2 = t3[n3], (function(e13) {
        var t4 = "[Autocomplete]: Could not load search-insights.js. Please load it manually following https://alg.li/insights-autocomplete";
        try {
          var n4 = e13.document.createElement("script");
          n4.async = true, n4.src = Qd, n4.onerror = function() {
            console.error(t4);
          }, document.body.appendChild(n4);
        } catch (e14) {
          console.error(t4);
        }
      })(t3));
    })({ window }), !s2) return {};
    r2 && s2("init", Wd({ partial: true }, r2));
    var c2 = Zd(s2), l2 = { current: [] }, f2 = Fd(function(e12) {
      var t3 = e12.state;
      if (t3.isOpen) {
        var n3 = t3.collections.reduce(function(e13, t4) {
          return [].concat(Ud(e13), Ud(t4.items));
        }, []).filter($d);
        kd(l2.current.map(function(e13) {
          return e13.objectID;
        }), n3.map(function(e13) {
          return e13.objectID;
        })) || (l2.current = n3, n3.length > 0 && Gd({ onItemsChange: u2, items: n3, insights: c2, state: t3 }));
      }
    }, 0);
    return { name: "aa.algoliaInsightsPlugin", subscribe: function(e12) {
      var t3 = e12.setContext, n3 = e12.onSelect, r3 = e12.onActive;
      function u3(e13) {
        t3({ algoliaInsightsPlugin: { __algoliaSearchParameters: Wd(Wd({}, o2 ? { clickAnalytics: true } : {}), e13 ? { userToken: ep(e13) } : {}), insights: c2 } });
      }
      s2("addAlgoliaAgent", "insights-plugin"), u3(), s2("onUserTokenChange", function(e13) {
        u3(e13);
      }), s2("getUserToken", null, function(e13, t4) {
        u3(t4);
      }), n3(function(e13) {
        var t4 = e13.item, n4 = e13.state, r4 = e13.event, u4 = e13.source;
        $d(t4) && a2({ state: n4, event: r4, insights: c2, item: t4, insightsEvents: [Wd({ eventName: "Item Selected" }, Sd({ item: t4, items: u4.getItems().filter($d) }))] });
      }), r3(function(e13) {
        var t4 = e13.item, n4 = e13.source, r4 = e13.state, u4 = e13.event;
        $d(t4) && i2({ state: r4, event: u4, insights: c2, item: t4, insightsEvents: [Wd({ eventName: "Item Active" }, Sd({ item: t4, items: n4.getItems().filter($d) }))] });
      });
    }, onStateChange: function(e12) {
      var t3 = e12.state;
      f2({ state: t3 });
    }, __autocomplete_pluginOptions: e11 };
  }
  function Xd() {
    var e11, t2 = arguments.length > 1 ? arguments[1] : void 0;
    return [].concat(Ud(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []), ["autocomplete-internal"], Ud(null !== (e11 = t2.algoliaInsightsPlugin) && void 0 !== e11 && e11.__automaticInsights ? ["autocomplete-automatic"] : []));
  }
  function ep(e11) {
    return "number" == typeof e11 ? e11.toString() : e11;
  }
  function tp(e11, t2) {
    var n2 = t2;
    return { then: function(t3, r2) {
      return tp(e11.then(rp(t3, n2, e11), rp(r2, n2, e11)), n2);
    }, catch: function(t3) {
      return tp(e11.catch(rp(t3, n2, e11)), n2);
    }, finally: function(t3) {
      return t3 && n2.onCancelList.push(t3), tp(e11.finally(rp(t3 && function() {
        return n2.onCancelList = [], t3();
      }, n2, e11)), n2);
    }, cancel: function() {
      n2.isCanceled = true;
      var e12 = n2.onCancelList;
      n2.onCancelList = [], e12.forEach(function(e13) {
        e13();
      });
    }, isCanceled: function() {
      return true === n2.isCanceled;
    } };
  }
  function np(e11) {
    return tp(e11, { isCanceled: false, onCancelList: [] });
  }
  function rp(e11, t2, n2) {
    return e11 ? function(n3) {
      return t2.isCanceled ? n3 : e11(n3);
    } : n2;
  }
  var up;
  var ap = true;
  function ip(e11, t2, n2, r2) {
    if (!n2) return null;
    if (e11 < 0 && (null === t2 || null !== r2 && 0 === t2)) return n2 + e11;
    var u2 = (null === t2 ? -1 : t2) + e11;
    return u2 <= -1 || u2 >= n2 ? null === r2 ? null : 0 : u2;
  }
  function op(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function sp(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? op(Object(n2), true).forEach(function(t3) {
        cp(e11, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : op(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e11;
  }
  function cp(e11, t2, n2) {
    return (t2 = (function(e12) {
      var t3 = (function(e13) {
        if ("object" !== lp(e13) || null === e13) return e13;
        var t4 = e13[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e13, "string");
          if ("object" !== lp(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e13);
      })(e12);
      return "symbol" === lp(t3) ? t3 : String(t3);
    })(t2)) in e11 ? Object.defineProperty(e11, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e11[t2] = n2, e11;
  }
  function lp(e11) {
    return lp = "function" == typeof Symbol && "symbol" == _(Symbol.iterator) ? function(e12) {
      return _(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : _(e12);
    }, lp(e11);
  }
  function fp(e11, t2) {
    (null == t2 || t2 > e11.length) && (t2 = e11.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e11[n2];
    return r2;
  }
  var dp = function(e11, t2) {
    var n2, r2 = false, u2 = [], a2 = (function(e12, t3) {
      var n3 = "undefined" != typeof Symbol && e12[Symbol.iterator] || e12["@@iterator"];
      if (!n3) {
        if (Array.isArray(e12) || (n3 = (function(e13, t4) {
          if (e13) {
            if ("string" == typeof e13) return fp(e13, t4);
            var n4 = Object.prototype.toString.call(e13).slice(8, -1);
            return "Object" === n4 && e13.constructor && (n4 = e13.constructor.name), "Map" === n4 || "Set" === n4 ? Array.from(e13) : "Arguments" === n4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4) ? fp(e13, t4) : void 0;
          }
        })(e12)) || t3) {
          n3 && (e12 = n3);
          var r3 = 0, u3 = function() {
          };
          return { s: u3, n: function() {
            return r3 >= e12.length ? { done: true } : { done: false, value: e12[r3++] };
          }, e: function(e13) {
            throw e13;
          }, f: u3 };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var a3, i3 = true, o3 = false;
      return { s: function() {
        n3 = n3.call(e12);
      }, n: function() {
        var e13 = n3.next();
        return i3 = e13.done, e13;
      }, e: function(e13) {
        o3 = true, a3 = e13;
      }, f: function() {
        try {
          i3 || null == n3.return || n3.return();
        } finally {
          if (o3) throw a3;
        }
      } };
    })(e11);
    try {
      for (a2.s(); !(n2 = a2.n()).done; ) {
        var i2, o2, s2, c2 = null === (i2 = n2.value.__autocomplete_pluginOptions) || void 0 === i2 || null === (o2 = (s2 = i2).awaitSubmit) || void 0 === o2 ? void 0 : o2.call(s2);
        if ("number" == typeof c2) u2.push(c2);
        else if (true === c2) {
          r2 = true;
          break;
        }
      }
    } catch (e12) {
      a2.e(e12);
    } finally {
      a2.f();
    }
    return r2 ? t2.wait() : u2.length > 0 ? t2.wait(Math.max.apply(Math, u2)) : void 0;
  };
  function pp(e11) {
    var t2 = (function(e12) {
      var t3 = e12.collections.map(function(e13) {
        return e13.items.length;
      }).reduce(function(e13, t4, n3) {
        var r3 = (e13[n3 - 1] || 0) + t4;
        return e13.push(r3), e13;
      }, []).reduce(function(t4, n3) {
        return n3 <= e12.activeItemId ? t4 + 1 : t4;
      }, 0);
      return e12.collections[t3];
    })(e11);
    if (!t2) return null;
    var n2 = t2.items[(function(e12) {
      for (var t3 = e12.state, n3 = e12.collection, r3 = false, u2 = 0, a2 = 0; false === r3; ) {
        var i2 = t3.collections[u2];
        if (i2 === n3) {
          r3 = true;
          break;
        }
        a2 += i2.items.length, u2++;
      }
      return t3.activeItemId - a2;
    })({ state: e11, collection: t2 })], r2 = t2.source;
    return { item: n2, itemInputValue: r2.getItemInputValue({ item: n2, state: e11 }), itemUrl: r2.getItemUrl({ item: n2, state: e11 }), source: r2 };
  }
  function hp(e11, t2, n2) {
    return [e11, null == n2 ? void 0 : n2.sourceId, t2].filter(Boolean).join("-").replace(/\s/g, "");
  }
  var vp = /((gt|sm)-|galaxy nexus)|samsung[- ]|samsungbrowser/i;
  function mp(e11) {
    return e11.nativeEvent || e11;
  }
  function Dp(e11) {
    return Dp = "function" == typeof Symbol && "symbol" == _(Symbol.iterator) ? function(e12) {
      return _(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : _(e12);
    }, Dp(e11);
  }
  function yp(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function gp(e11, t2, n2) {
    return (t2 = (function(e12) {
      var t3 = (function(e13) {
        if ("object" !== Dp(e13) || null === e13) return e13;
        var t4 = e13[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e13, "string");
          if ("object" !== Dp(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e13);
      })(e12);
      return "symbol" === Dp(t3) ? t3 : String(t3);
    })(t2)) in e11 ? Object.defineProperty(e11, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e11[t2] = n2, e11;
  }
  function Fp(e11) {
    return Fp = "function" == typeof Symbol && "symbol" == _(Symbol.iterator) ? function(e12) {
      return _(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : _(e12);
    }, Fp(e11);
  }
  function Ep(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function _p(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Ep(Object(n2), true).forEach(function(t3) {
        bp(e11, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : Ep(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e11;
  }
  function bp(e11, t2, n2) {
    return (t2 = (function(e12) {
      var t3 = (function(e13) {
        if ("object" !== Fp(e13) || null === e13) return e13;
        var t4 = e13[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e13, "string");
          if ("object" !== Fp(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e13);
      })(e12);
      return "symbol" === Fp(t3) ? t3 : String(t3);
    })(t2)) in e11 ? Object.defineProperty(e11, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e11[t2] = n2, e11;
  }
  function Cp(e11) {
    return Cp = "function" == typeof Symbol && "symbol" == _(Symbol.iterator) ? function(e12) {
      return _(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : _(e12);
    }, Cp(e11);
  }
  function kp(e11, t2) {
    (null == t2 || t2 > e11.length) && (t2 = e11.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e11[n2];
    return r2;
  }
  function Ap(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function wp(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Ap(Object(n2), true).forEach(function(t3) {
        Sp(e11, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : Ap(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e11;
  }
  function Sp(e11, t2, n2) {
    return (t2 = (function(e12) {
      var t3 = (function(e13) {
        if ("object" !== Cp(e13) || null === e13) return e13;
        var t4 = e13[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e13, "string");
          if ("object" !== Cp(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e13);
      })(e12);
      return "symbol" === Cp(t3) ? t3 : String(t3);
    })(t2)) in e11 ? Object.defineProperty(e11, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e11[t2] = n2, e11;
  }
  function xp(e11, t2) {
    var n2, r2 = "undefined" != typeof window ? window : {}, u2 = e11.plugins || [];
    return wp(wp({ debug: false, openOnFocus: false, enterKeyHint: void 0, ignoreCompositionEvents: false, placeholder: "", autoFocus: false, defaultActiveItemId: null, stallThreshold: 300, insights: void 0, environment: r2, shouldPanelOpen: function(e12) {
      return bd(e12.state) > 0;
    }, reshape: function(e12) {
      return e12.sources;
    } }, e11), {}, { id: null !== (n2 = e11.id) && void 0 !== n2 ? n2 : "autocomplete-".concat(_d++), plugins: u2, initialState: wp({ activeItemId: null, query: "", completion: null, collections: [], isOpen: false, status: "idle", context: {} }, e11.initialState), onStateChange: function(t3) {
      var n3;
      null === (n3 = e11.onStateChange) || void 0 === n3 || n3.call(e11, t3), u2.forEach(function(e12) {
        var n4;
        return null === (n4 = e12.onStateChange) || void 0 === n4 ? void 0 : n4.call(e12, t3);
      });
    }, onSubmit: function(t3) {
      var n3;
      null === (n3 = e11.onSubmit) || void 0 === n3 || n3.call(e11, t3), u2.forEach(function(e12) {
        var n4;
        return null === (n4 = e12.onSubmit) || void 0 === n4 ? void 0 : n4.call(e12, t3);
      });
    }, onReset: function(t3) {
      var n3;
      null === (n3 = e11.onReset) || void 0 === n3 || n3.call(e11, t3), u2.forEach(function(e12) {
        var n4;
        return null === (n4 = e12.onReset) || void 0 === n4 ? void 0 : n4.call(e12, t3);
      });
    }, getSources: function(n3) {
      return Promise.all([].concat((function(e12) {
        return (function(e13) {
          if (Array.isArray(e13)) return kp(e13);
        })(e12) || (function(e13) {
          if ("undefined" != typeof Symbol && null != e13[Symbol.iterator] || null != e13["@@iterator"]) return Array.from(e13);
        })(e12) || (function(e13, t3) {
          if (e13) {
            if ("string" == typeof e13) return kp(e13, t3);
            var n4 = Object.prototype.toString.call(e13).slice(8, -1);
            return "Object" === n4 && e13.constructor && (n4 = e13.constructor.name), "Map" === n4 || "Set" === n4 ? Array.from(e13) : "Arguments" === n4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4) ? kp(e13, t3) : void 0;
          }
        })(e12) || (function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        })();
      })(u2.map(function(e12) {
        return e12.getSources;
      })), [e11.getSources]).filter(Boolean).map(function(e12) {
        return (function(e13, t3) {
          var n4 = [];
          return Promise.resolve(e13(t3)).then(function(e14) {
            return Promise.all(e14.filter(function(e15) {
              return Boolean(e15);
            }).map(function(e15) {
              if (e15.sourceId, n4.includes(e15.sourceId)) throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(e15.sourceId), " is not unique."));
              n4.push(e15.sourceId);
              var t4 = { getItemInputValue: function(e16) {
                return e16.state.query;
              }, getItemUrl: function() {
              }, onSelect: function(e16) {
                (0, e16.setIsOpen)(false);
              }, onActive: Ad, onResolve: Ad };
              Object.keys(t4).forEach(function(e16) {
                t4[e16].__default = true;
              });
              var r3 = sp(sp({}, t4), e15);
              return Promise.resolve(r3);
            }));
          });
        })(e12, n3);
      })).then(function(e12) {
        return Ed(e12);
      }).then(function(e12) {
        return e12.map(function(e13) {
          return wp(wp({}, e13), {}, { onSelect: function(n4) {
            e13.onSelect(n4), t2.forEach(function(e14) {
              var t3;
              return null === (t3 = e14.onSelect) || void 0 === t3 ? void 0 : t3.call(e14, n4);
            });
          }, onActive: function(n4) {
            e13.onActive(n4), t2.forEach(function(e14) {
              var t3;
              return null === (t3 = e14.onActive) || void 0 === t3 ? void 0 : t3.call(e14, n4);
            });
          }, onResolve: function(n4) {
            e13.onResolve(n4), t2.forEach(function(e14) {
              var t3;
              return null === (t3 = e14.onResolve) || void 0 === t3 ? void 0 : t3.call(e14, n4);
            });
          } });
        });
      });
    }, navigator: wp({ navigate: function(e12) {
      var t3 = e12.itemUrl;
      r2.location.assign(t3);
    }, navigateNewTab: function(e12) {
      var t3 = e12.itemUrl, n3 = r2.open(t3, "_blank", "noopener");
      null == n3 || n3.focus();
    }, navigateNewWindow: function(e12) {
      var t3 = e12.itemUrl;
      r2.open(t3, "_blank", "noopener");
    } }, e11.navigator) });
  }
  function Op(e11) {
    return Op = "function" == typeof Symbol && "symbol" == _(Symbol.iterator) ? function(e12) {
      return _(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : _(e12);
    }, Op(e11);
  }
  function Bp(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Ip(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Bp(Object(n2), true).forEach(function(t3) {
        Tp(e11, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : Bp(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e11;
  }
  function Tp(e11, t2, n2) {
    return (t2 = (function(e12) {
      var t3 = (function(e13) {
        if ("object" !== Op(e13) || null === e13) return e13;
        var t4 = e13[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e13, "string");
          if ("object" !== Op(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e13);
      })(e12);
      return "symbol" === Op(t3) ? t3 : String(t3);
    })(t2)) in e11 ? Object.defineProperty(e11, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e11[t2] = n2, e11;
  }
  function Pp(e11) {
    return Pp = "function" == typeof Symbol && "symbol" == _(Symbol.iterator) ? function(e12) {
      return _(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : _(e12);
    }, Pp(e11);
  }
  function jp(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Np(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? jp(Object(n2), true).forEach(function(t3) {
        zp(e11, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : jp(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e11;
  }
  function zp(e11, t2, n2) {
    return (t2 = (function(e12) {
      var t3 = (function(e13) {
        if ("object" !== Pp(e13) || null === e13) return e13;
        var t4 = e13[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e13, "string");
          if ("object" !== Pp(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e13);
      })(e12);
      return "symbol" === Pp(t3) ? t3 : String(t3);
    })(t2)) in e11 ? Object.defineProperty(e11, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e11[t2] = n2, e11;
  }
  function Rp(e11) {
    return (function(e12) {
      if (Array.isArray(e12)) return Mp(e12);
    })(e11) || (function(e12) {
      if ("undefined" != typeof Symbol && null != e12[Symbol.iterator] || null != e12["@@iterator"]) return Array.from(e12);
    })(e11) || (function(e12, t2) {
      if (e12) {
        if ("string" == typeof e12) return Mp(e12, t2);
        var n2 = Object.prototype.toString.call(e12).slice(8, -1);
        return "Object" === n2 && e12.constructor && (n2 = e12.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e12) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? Mp(e12, t2) : void 0;
      }
    })(e11) || (function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function Mp(e11, t2) {
    (null == t2 || t2 > e11.length) && (t2 = e11.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e11[n2];
    return r2;
  }
  function Zp(e11) {
    return Boolean(e11.execute);
  }
  function Lp(e11) {
    var t2 = e11.reduce(function(e12, t3) {
      if (!Zp(t3)) return e12.push(t3), e12;
      var n2 = t3.searchClient, r2 = t3.execute, u2 = t3.requesterId, a2 = t3.requests, i2 = e12.find(function(e13) {
        return Zp(t3) && Zp(e13) && e13.searchClient === n2 && Boolean(u2) && e13.requesterId === u2;
      });
      if (i2) {
        var o2;
        (o2 = i2.items).push.apply(o2, Rp(a2));
      } else {
        var s2 = { execute: r2, requesterId: u2, items: a2, searchClient: n2 };
        e12.push(s2);
      }
      return e12;
    }, []).map(function(e12) {
      if (!Zp(e12)) return Promise.resolve(e12);
      var t3 = e12, n2 = t3.execute, r2 = t3.items;
      return n2({ searchClient: t3.searchClient, requests: r2 });
    });
    return Promise.all(t2).then(function(e12) {
      return Ed(e12);
    });
  }
  function $p(e11) {
    return $p = "function" == typeof Symbol && "symbol" == _(Symbol.iterator) ? function(e12) {
      return _(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : _(e12);
    }, $p(e11);
  }
  var qp = ["event", "nextState", "props", "query", "refresh", "store"];
  function Up(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Hp(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Up(Object(n2), true).forEach(function(t3) {
        Vp(e11, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : Up(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e11;
  }
  function Vp(e11, t2, n2) {
    return (t2 = (function(e12) {
      var t3 = (function(e13) {
        if ("object" !== $p(e13) || null === e13) return e13;
        var t4 = e13[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e13, "string");
          if ("object" !== $p(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e13);
      })(e12);
      return "symbol" === $p(t3) ? t3 : String(t3);
    })(t2)) in e11 ? Object.defineProperty(e11, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e11[t2] = n2, e11;
  }
  var Wp;
  var Kp;
  var Jp;
  var Qp = null;
  var Gp = (Wp = -1, Kp = -1, Jp = void 0, function(e11) {
    var t2 = ++Wp;
    return Promise.resolve(e11).then(function(e12) {
      return Jp && t2 < Kp ? Jp : (Kp = t2, Jp = e12, e12);
    });
  });
  function Yp(e11) {
    var t2 = e11.event, n2 = e11.nextState, r2 = void 0 === n2 ? {} : n2, u2 = e11.props, a2 = e11.query, i2 = e11.refresh, o2 = e11.store, s2 = (function(e12, t3) {
      if (null == e12) return {};
      var n3, r3, u3 = (function(e13, t4) {
        if (null == e13) return {};
        var n4, r4, u4 = {}, a4 = Object.keys(e13);
        for (r4 = 0; r4 < a4.length; r4++) n4 = a4[r4], t4.indexOf(n4) >= 0 || (u4[n4] = e13[n4]);
        return u4;
      })(e12, t3);
      if (Object.getOwnPropertySymbols) {
        var a3 = Object.getOwnPropertySymbols(e12);
        for (r3 = 0; r3 < a3.length; r3++) n3 = a3[r3], t3.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e12, n3) && (u3[n3] = e12[n3]);
      }
      return u3;
    })(e11, qp);
    Qp && u2.environment.clearTimeout(Qp);
    var c2 = s2.setCollections, l2 = s2.setIsOpen, f2 = s2.setQuery, d2 = s2.setActiveItemId, p2 = s2.setStatus, h2 = s2.setContext;
    if (f2(a2), d2(u2.defaultActiveItemId), !a2 && false === u2.openOnFocus) {
      var v2, m2 = o2.getState().collections.map(function(e12) {
        return Hp(Hp({}, e12), {}, { items: [] });
      });
      p2("idle"), c2(m2), l2(null !== (v2 = r2.isOpen) && void 0 !== v2 ? v2 : u2.shouldPanelOpen({ state: o2.getState() }));
      var D2 = np(Gp(m2).then(function() {
        return Promise.resolve();
      }));
      return o2.pendingRequests.add(D2);
    }
    p2("loading"), Qp = u2.environment.setTimeout(function() {
      p2("stalled");
    }, u2.stallThreshold);
    var y2 = np(Gp(u2.getSources(Hp({ query: a2, refresh: i2, state: o2.getState() }, s2)).then(function(e12) {
      return Promise.all(e12.map(function(e13) {
        return Promise.resolve(e13.getItems(Hp({ query: a2, refresh: i2, state: o2.getState() }, s2))).then(function(t3) {
          return (function(e14, t4, n3) {
            if (u3 = e14, Boolean(null == u3 ? void 0 : u3.execute)) {
              var r3 = "algolia" === e14.requesterId ? Object.assign.apply(Object, [{}].concat(Rp(Object.keys(n3.context).map(function(e15) {
                var t5;
                return null === (t5 = n3.context[e15]) || void 0 === t5 ? void 0 : t5.__algoliaSearchParameters;
              })))) : {};
              return Np(Np({}, e14), {}, { requests: e14.queries.map(function(n4) {
                return { query: "algolia" === e14.requesterId ? Np(Np({}, n4), {}, { params: Np(Np({}, r3), n4.params) }) : n4, sourceId: t4, transformResponse: e14.transformResponse };
              }) });
            }
            var u3;
            return { items: e14, sourceId: t4 };
          })(t3, e13.sourceId, o2.getState());
        });
      })).then(Lp).then(function(t3) {
        var n3, r3 = t3.some(function(e13) {
          return (function(e14) {
            return !Array.isArray(e14) && Boolean(null == e14 ? void 0 : e14._automaticInsights);
          })(e13.items);
        });
        return r3 && h2({ algoliaInsightsPlugin: Hp(Hp({}, (null === (n3 = o2.getState().context) || void 0 === n3 ? void 0 : n3.algoliaInsightsPlugin) || {}), {}, { __automaticInsights: r3 }) }), (function(e13, t4, n4) {
          return t4.map(function(t5) {
            var r4, u3 = e13.filter(function(e14) {
              return e14.sourceId === t5.sourceId;
            }), a3 = u3.map(function(e14) {
              return e14.items;
            }), i3 = u3[0].transformResponse, o3 = i3 ? i3({ results: r4 = a3, hits: r4.map(function(e14) {
              return e14.hits;
            }).filter(Boolean), facetHits: r4.map(function(e14) {
              var t6;
              return null === (t6 = e14.facetHits) || void 0 === t6 ? void 0 : t6.map(function(e15) {
                return { label: e15.value, count: e15.count, _highlightResult: { label: { value: e15.highlighted } } };
              });
            }).filter(Boolean) }) : a3;
            return t5.onResolve({ source: t5, results: a3, items: o3, state: n4.getState() }), o3.every(Boolean), 'The `getItems` function from source "'.concat(t5.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"), { source: t5, items: o3 };
          });
        })(t3, e12, o2);
      }).then(function(e13) {
        return (function(e14) {
          var t3 = e14.props, n3 = e14.state, r3 = e14.collections.reduce(function(e15, t4) {
            return Ip(Ip({}, e15), {}, Tp({}, t4.source.sourceId, Ip(Ip({}, t4.source), {}, { getItems: function() {
              return Ed(t4.items);
            } })));
          }, {}), u3 = t3.plugins.reduce(function(e15, t4) {
            return t4.reshape ? t4.reshape(e15) : e15;
          }, { sourcesBySourceId: r3, state: n3 }).sourcesBySourceId;
          return Ed(t3.reshape({ sourcesBySourceId: u3, sources: Object.values(u3), state: n3 })).filter(Boolean).map(function(e15) {
            return { source: e15, items: e15.getItems() };
          });
        })({ collections: e13, props: u2, state: o2.getState() });
      });
    }))).then(function(e12) {
      var n3;
      p2("idle"), c2(e12);
      var f3 = u2.shouldPanelOpen({ state: o2.getState() });
      l2(null !== (n3 = r2.isOpen) && void 0 !== n3 ? n3 : u2.openOnFocus && !a2 && f3 || f3);
      var d3 = pp(o2.getState());
      if (null !== o2.getState().activeItemId && d3) {
        var h3 = d3.item, v3 = d3.itemInputValue, m3 = d3.itemUrl, D3 = d3.source;
        D3.onActive(Hp({ event: t2, item: h3, itemInputValue: v3, itemUrl: m3, refresh: i2, source: D3, state: o2.getState() }, s2));
      }
    }).finally(function() {
      p2("idle"), Qp && u2.environment.clearTimeout(Qp);
    });
    return o2.pendingRequests.add(y2);
  }
  function Xp(e11) {
    return Xp = "function" == typeof Symbol && "symbol" == _(Symbol.iterator) ? function(e12) {
      return _(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : _(e12);
    }, Xp(e11);
  }
  var eh = ["event", "props", "refresh", "store"];
  function th(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function nh(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? th(Object(n2), true).forEach(function(t3) {
        rh(e11, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : th(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e11;
  }
  function rh(e11, t2, n2) {
    return (t2 = (function(e12) {
      var t3 = (function(e13) {
        if ("object" !== Xp(e13) || null === e13) return e13;
        var t4 = e13[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e13, "string");
          if ("object" !== Xp(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e13);
      })(e12);
      return "symbol" === Xp(t3) ? t3 : String(t3);
    })(t2)) in e11 ? Object.defineProperty(e11, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e11[t2] = n2, e11;
  }
  function uh(e11) {
    return uh = "function" == typeof Symbol && "symbol" == _(Symbol.iterator) ? function(e12) {
      return _(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : _(e12);
    }, uh(e11);
  }
  var ah = ["props", "refresh", "store"];
  var ih = ["inputElement", "formElement", "panelElement"];
  var oh = ["inputElement"];
  var sh = ["inputElement", "maxLength"];
  var ch = ["source"];
  var lh = ["item", "source"];
  function fh(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function dh(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? fh(Object(n2), true).forEach(function(t3) {
        ph(e11, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : fh(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e11;
  }
  function ph(e11, t2, n2) {
    return (t2 = (function(e12) {
      var t3 = (function(e13) {
        if ("object" !== uh(e13) || null === e13) return e13;
        var t4 = e13[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e13, "string");
          if ("object" !== uh(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e13);
      })(e12);
      return "symbol" === uh(t3) ? t3 : String(t3);
    })(t2)) in e11 ? Object.defineProperty(e11, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e11[t2] = n2, e11;
  }
  function hh(e11, t2) {
    if (null == e11) return {};
    var n2, r2, u2 = (function(e12, t3) {
      if (null == e12) return {};
      var n3, r3, u3 = {}, a3 = Object.keys(e12);
      for (r3 = 0; r3 < a3.length; r3++) n3 = a3[r3], t3.indexOf(n3) >= 0 || (u3[n3] = e12[n3]);
      return u3;
    })(e11, t2);
    if (Object.getOwnPropertySymbols) {
      var a2 = Object.getOwnPropertySymbols(e11);
      for (r2 = 0; r2 < a2.length; r2++) n2 = a2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e11, n2) && (u2[n2] = e11[n2]);
    }
    return u2;
  }
  function vh(e11) {
    var t2 = e11.props, n2 = e11.refresh, r2 = e11.store, u2 = hh(e11, ah);
    return { getEnvironmentProps: function(e12) {
      var n3 = e12.inputElement, u3 = e12.formElement, a2 = e12.panelElement;
      function i2(e13) {
        !r2.getState().isOpen && r2.pendingRequests.isEmpty() || e13.target === n3 || false === [u3, a2].some(function(t3) {
          return (n4 = t3) === (r3 = e13.target) || n4.contains(r3);
          var n4, r3;
        }) && (r2.dispatch("blur", null), t2.debug || r2.pendingRequests.cancelAll());
      }
      return dh({ onTouchStart: i2, onMouseDown: i2, onTouchMove: function(e13) {
        false !== r2.getState().isOpen && n3 === t2.environment.document.activeElement && e13.target !== n3 && n3.blur();
      } }, hh(e12, ih));
    }, getRootProps: function(e12) {
      return dh({ role: "combobox", "aria-expanded": r2.getState().isOpen, "aria-haspopup": "listbox", "aria-controls": r2.getState().isOpen ? r2.getState().collections.map(function(e13) {
        var n3 = e13.source;
        return hp(t2.id, "list", n3);
      }).join(" ") : void 0, "aria-labelledby": hp(t2.id, "label") }, e12);
    }, getFormProps: function(e12) {
      e12.inputElement;
      var a2 = hh(e12, oh), i2 = function(a3) {
        var i3;
        t2.onSubmit(dh({ event: a3, refresh: n2, state: r2.getState() }, u2)), r2.dispatch("submit", null), null === (i3 = e12.inputElement) || void 0 === i3 || i3.blur();
      };
      return dh({ action: "", noValidate: true, role: "search", onSubmit: function(e13) {
        e13.preventDefault();
        var n3 = dp(t2.plugins, r2.pendingRequests);
        void 0 !== n3 ? n3.then(function() {
          return i2(e13);
        }) : i2(e13);
      }, onReset: function(a3) {
        var i3;
        a3.preventDefault(), t2.onReset(dh({ event: a3, refresh: n2, state: r2.getState() }, u2)), r2.dispatch("reset", null), null === (i3 = e12.inputElement) || void 0 === i3 || i3.focus();
      } }, a2);
    }, getLabelProps: function(e12) {
      return dh({ htmlFor: hp(t2.id, "input"), id: hp(t2.id, "label") }, e12);
    }, getInputProps: function(e12) {
      var a2;
      function i2(e13) {
        (t2.openOnFocus || Boolean(r2.getState().query)) && Yp(dh({ event: e13, props: t2, query: r2.getState().completion || r2.getState().query, refresh: n2, store: r2 }, u2)), r2.dispatch("focus", null);
      }
      var o2 = e12 || {};
      o2.inputElement;
      var s2 = o2.maxLength, c2 = void 0 === s2 ? 512 : s2, l2 = hh(o2, sh), f2 = pp(r2.getState()), d2 = (function(e13) {
        return Boolean(e13 && e13.match(vp));
      })((null === (a2 = t2.environment.navigator) || void 0 === a2 ? void 0 : a2.userAgent) || ""), p2 = t2.enterKeyHint || (null != f2 && f2.itemUrl && !d2 ? "go" : "search");
      return dh({ "aria-autocomplete": "both", "aria-activedescendant": r2.getState().isOpen && null !== r2.getState().activeItemId ? hp(t2.id, "item-".concat(r2.getState().activeItemId), null == f2 ? void 0 : f2.source) : void 0, "aria-controls": r2.getState().isOpen ? r2.getState().collections.filter(function(e13) {
        return e13.items.length > 0;
      }).map(function(e13) {
        var n3 = e13.source;
        return hp(t2.id, "list", n3);
      }).join(" ") : void 0, "aria-labelledby": hp(t2.id, "label"), value: r2.getState().completion || r2.getState().query, id: hp(t2.id, "input"), autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", enterKeyHint: p2, spellCheck: "false", autoFocus: t2.autoFocus, placeholder: t2.placeholder, maxLength: c2, type: "search", onChange: function(e13) {
        var a3 = e13.currentTarget.value;
        t2.ignoreCompositionEvents && mp(e13).isComposing ? u2.setQuery(a3) : Yp(dh({ event: e13, props: t2, query: a3.slice(0, c2), refresh: n2, store: r2 }, u2));
      }, onCompositionEnd: function(e13) {
        Yp(dh({ event: e13, props: t2, query: e13.currentTarget.value.slice(0, c2), refresh: n2, store: r2 }, u2));
      }, onKeyDown: function(e13) {
        mp(e13).isComposing || (function(e14) {
          var t3 = e14.event, n3 = e14.props, r3 = e14.refresh, u3 = e14.store, a3 = (function(e15, t4) {
            if (null == e15) return {};
            var n4, r4, u4 = (function(e16, t5) {
              if (null == e16) return {};
              var n5, r5, u5 = {}, a5 = Object.keys(e16);
              for (r5 = 0; r5 < a5.length; r5++) n5 = a5[r5], t5.indexOf(n5) >= 0 || (u5[n5] = e16[n5]);
              return u5;
            })(e15, t4);
            if (Object.getOwnPropertySymbols) {
              var a4 = Object.getOwnPropertySymbols(e15);
              for (r4 = 0; r4 < a4.length; r4++) n4 = a4[r4], t4.indexOf(n4) >= 0 || Object.prototype.propertyIsEnumerable.call(e15, n4) && (u4[n4] = e15[n4]);
            }
            return u4;
          })(e14, eh);
          if ("ArrowUp" === t3.key || "ArrowDown" === t3.key) {
            var i3 = function() {
              var e15 = pp(u3.getState()), t4 = n3.environment.document.getElementById(hp(n3.id, "item-".concat(u3.getState().activeItemId), null == e15 ? void 0 : e15.source));
              t4 && (t4.scrollIntoViewIfNeeded ? t4.scrollIntoViewIfNeeded(false) : t4.scrollIntoView(false));
            }, o3 = function() {
              var e15 = pp(u3.getState());
              if (null !== u3.getState().activeItemId && e15) {
                var n4 = e15.item, i4 = e15.itemInputValue, o4 = e15.itemUrl, s4 = e15.source;
                s4.onActive(nh({ event: t3, item: n4, itemInputValue: i4, itemUrl: o4, refresh: r3, source: s4, state: u3.getState() }, a3));
              }
            };
            t3.preventDefault(), false === u3.getState().isOpen && (n3.openOnFocus || Boolean(u3.getState().query)) ? Yp(nh({ event: t3, props: n3, query: u3.getState().query, refresh: r3, store: u3 }, a3)).then(function() {
              u3.dispatch(t3.key, { nextActiveItemId: n3.defaultActiveItemId }), o3(), setTimeout(i3, 0);
            }) : (u3.dispatch(t3.key, {}), o3(), i3());
          } else if ("Escape" === t3.key) t3.preventDefault(), u3.dispatch(t3.key, null), u3.pendingRequests.cancelAll();
          else if ("Tab" === t3.key) u3.dispatch("blur", null), u3.pendingRequests.cancelAll();
          else if ("Enter" === t3.key) {
            if (null === u3.getState().activeItemId || u3.getState().collections.every(function(e15) {
              return 0 === e15.items.length;
            })) {
              var s3 = dp(n3.plugins, u3.pendingRequests);
              return void (void 0 !== s3 ? s3.then(u3.pendingRequests.cancelAll) : n3.debug || u3.pendingRequests.cancelAll());
            }
            t3.preventDefault();
            var c3 = pp(u3.getState()), l3 = c3.item, f3 = c3.itemInputValue, d3 = c3.itemUrl, p3 = c3.source;
            if (t3.metaKey || t3.ctrlKey) void 0 !== d3 && (p3.onSelect(nh({ event: t3, item: l3, itemInputValue: f3, itemUrl: d3, refresh: r3, source: p3, state: u3.getState() }, a3)), n3.navigator.navigateNewTab({ itemUrl: d3, item: l3, state: u3.getState() }));
            else if (t3.shiftKey) void 0 !== d3 && (p3.onSelect(nh({ event: t3, item: l3, itemInputValue: f3, itemUrl: d3, refresh: r3, source: p3, state: u3.getState() }, a3)), n3.navigator.navigateNewWindow({ itemUrl: d3, item: l3, state: u3.getState() }));
            else if (t3.altKey) ;
            else {
              if (void 0 !== d3) return p3.onSelect(nh({ event: t3, item: l3, itemInputValue: f3, itemUrl: d3, refresh: r3, source: p3, state: u3.getState() }, a3)), void n3.navigator.navigate({ itemUrl: d3, item: l3, state: u3.getState() });
              Yp(nh({ event: t3, nextState: { isOpen: false }, props: n3, query: f3, refresh: r3, store: u3 }, a3)).then(function() {
                p3.onSelect(nh({ event: t3, item: l3, itemInputValue: f3, itemUrl: d3, refresh: r3, source: p3, state: u3.getState() }, a3));
              });
            }
          }
        })(dh({ event: e13, props: t2, refresh: n2, store: r2 }, u2));
      }, onFocus: i2, onBlur: Ad, onClick: function(n3) {
        e12.inputElement !== t2.environment.document.activeElement || r2.getState().isOpen || i2(n3);
      } }, l2);
    }, getPanelProps: function(e12) {
      return dh({ onMouseDown: function(e13) {
        e13.preventDefault();
      }, onMouseLeave: function() {
        r2.dispatch("mouseleave", null);
      } }, e12);
    }, getListProps: function(e12) {
      var n3 = e12 || {}, r3 = n3.source, u3 = hh(n3, ch);
      return dh({ role: "listbox", "aria-labelledby": hp(t2.id, "label"), id: hp(t2.id, "list", r3) }, u3);
    }, getItemProps: function(e12) {
      var a2 = e12.item, i2 = e12.source, o2 = hh(e12, lh);
      return dh({ id: hp(t2.id, "item-".concat(a2.__autocomplete_id), i2), role: "option", "aria-selected": r2.getState().activeItemId === a2.__autocomplete_id, onMouseMove: function(e13) {
        if (a2.__autocomplete_id !== r2.getState().activeItemId) {
          r2.dispatch("mousemove", a2.__autocomplete_id);
          var t3 = pp(r2.getState());
          if (null !== r2.getState().activeItemId && t3) {
            var i3 = t3.item, o3 = t3.itemInputValue, s2 = t3.itemUrl, c2 = t3.source;
            c2.onActive(dh({ event: e13, item: i3, itemInputValue: o3, itemUrl: s2, refresh: n2, source: c2, state: r2.getState() }, u2));
          }
        }
      }, onMouseDown: function(e13) {
        e13.preventDefault();
      }, onClick: function(e13) {
        var o3 = i2.getItemInputValue({ item: a2, state: r2.getState() }), s2 = i2.getItemUrl({ item: a2, state: r2.getState() });
        (s2 ? Promise.resolve() : Yp(dh({ event: e13, nextState: { isOpen: false }, props: t2, query: o3, refresh: n2, store: r2 }, u2))).then(function() {
          i2.onSelect(dh({ event: e13, item: a2, itemInputValue: o3, itemUrl: s2, refresh: n2, source: i2, state: r2.getState() }, u2));
        });
      } }, o2);
    } };
  }
  function mh(e11) {
    return mh = "function" == typeof Symbol && "symbol" == _(Symbol.iterator) ? function(e12) {
      return _(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : _(e12);
    }, mh(e11);
  }
  function Dh(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function yh(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Dh(Object(n2), true).forEach(function(t3) {
        gh(e11, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : Dh(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e11;
  }
  function gh(e11, t2, n2) {
    return (t2 = (function(e12) {
      var t3 = (function(e13) {
        if ("object" !== mh(e13) || null === e13) return e13;
        var t4 = e13[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e13, "string");
          if ("object" !== mh(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e13);
      })(e12);
      return "symbol" === mh(t3) ? t3 : String(t3);
    })(t2)) in e11 ? Object.defineProperty(e11, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e11[t2] = n2, e11;
  }
  function Fh(e11) {
    var t2, n2, r2, u2, a2 = e11.plugins, i2 = e11.options, o2 = null === (t2 = ((null === (n2 = i2.__autocomplete_metadata) || void 0 === n2 ? void 0 : n2.userAgents) || [])[0]) || void 0 === t2 ? void 0 : t2.segment, s2 = o2 ? gh({}, o2, Object.keys((null === (r2 = i2.__autocomplete_metadata) || void 0 === r2 ? void 0 : r2.options) || {})) : {};
    return { plugins: a2.map(function(e12) {
      return { name: e12.name, options: Object.keys(e12.__autocomplete_pluginOptions || []) };
    }), options: yh({ "autocomplete-core": Object.keys(i2) }, s2), ua: wd.concat((null === (u2 = i2.__autocomplete_metadata) || void 0 === u2 ? void 0 : u2.userAgents) || []) };
  }
  function Eh(e11) {
    var t2, n2 = e11.state;
    return false === n2.isOpen || null === n2.activeItemId ? null : (null === (t2 = pp(n2)) || void 0 === t2 ? void 0 : t2.itemInputValue) || null;
  }
  function _h(e11) {
    return _h = "function" == typeof Symbol && "symbol" == _(Symbol.iterator) ? function(e12) {
      return _(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : _(e12);
    }, _h(e11);
  }
  function bh(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Ch(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? bh(Object(n2), true).forEach(function(t3) {
        kh(e11, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : bh(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e11;
  }
  function kh(e11, t2, n2) {
    return (t2 = (function(e12) {
      var t3 = (function(e13) {
        if ("object" !== _h(e13) || null === e13) return e13;
        var t4 = e13[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e13, "string");
          if ("object" !== _h(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e13);
      })(e12);
      return "symbol" === _h(t3) ? t3 : String(t3);
    })(t2)) in e11 ? Object.defineProperty(e11, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e11[t2] = n2, e11;
  }
  var Ah = function(e11, t2) {
    switch (t2.type) {
      case "setActiveItemId":
      case "mousemove":
        return Ch(Ch({}, e11), {}, { activeItemId: t2.payload });
      case "setQuery":
        return Ch(Ch({}, e11), {}, { query: t2.payload, completion: null });
      case "setCollections":
        return Ch(Ch({}, e11), {}, { collections: t2.payload });
      case "setIsOpen":
        return Ch(Ch({}, e11), {}, { isOpen: t2.payload });
      case "setStatus":
        return Ch(Ch({}, e11), {}, { status: t2.payload });
      case "setContext":
        return Ch(Ch({}, e11), {}, { context: Ch(Ch({}, e11.context), t2.payload) });
      case "ArrowDown":
        var n2 = Ch(Ch({}, e11), {}, { activeItemId: t2.payload.hasOwnProperty("nextActiveItemId") ? t2.payload.nextActiveItemId : ip(1, e11.activeItemId, bd(e11), t2.props.defaultActiveItemId) });
        return Ch(Ch({}, n2), {}, { completion: Eh({ state: n2 }) });
      case "ArrowUp":
        var r2 = Ch(Ch({}, e11), {}, { activeItemId: ip(-1, e11.activeItemId, bd(e11), t2.props.defaultActiveItemId) });
        return Ch(Ch({}, r2), {}, { completion: Eh({ state: r2 }) });
      case "Escape":
        return e11.isOpen ? Ch(Ch({}, e11), {}, { activeItemId: null, isOpen: false, completion: null }) : Ch(Ch({}, e11), {}, { activeItemId: null, query: "", status: "idle", collections: [] });
      case "submit":
        return Ch(Ch({}, e11), {}, { activeItemId: null, isOpen: false, status: "idle" });
      case "reset":
        return Ch(Ch({}, e11), {}, { activeItemId: true === t2.props.openOnFocus ? t2.props.defaultActiveItemId : null, status: "idle", completion: null, query: "" });
      case "focus":
        return Ch(Ch({}, e11), {}, { activeItemId: t2.props.defaultActiveItemId, isOpen: (t2.props.openOnFocus || Boolean(e11.query)) && t2.props.shouldPanelOpen({ state: e11 }) });
      case "blur":
        return t2.props.debug ? e11 : Ch(Ch({}, e11), {}, { isOpen: false, activeItemId: null });
      case "mouseleave":
        return Ch(Ch({}, e11), {}, { activeItemId: t2.props.defaultActiveItemId });
      default:
        return "The reducer action ".concat(JSON.stringify(t2.type), " is not supported."), e11;
    }
  };
  function wh(e11) {
    return wh = "function" == typeof Symbol && "symbol" == _(Symbol.iterator) ? function(e12) {
      return _(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : _(e12);
    }, wh(e11);
  }
  function Sh(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function xh(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Sh(Object(n2), true).forEach(function(t3) {
        Oh(e11, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : Sh(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e11;
  }
  function Oh(e11, t2, n2) {
    return (t2 = (function(e12) {
      var t3 = (function(e13) {
        if ("object" !== wh(e13) || null === e13) return e13;
        var t4 = e13[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e13, "string");
          if ("object" !== wh(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e13);
      })(e12);
      return "symbol" === wh(t3) ? t3 : String(t3);
    })(t2)) in e11 ? Object.defineProperty(e11, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e11[t2] = n2, e11;
  }
  function Bh(e11) {
    var t2 = [], n2 = xp(e11, t2), r2 = (function(e12, t3, n3) {
      var r3, u3 = t3.initialState;
      return { getState: function() {
        return u3;
      }, dispatch: function(r4, a3) {
        var i3 = (function(e13) {
          for (var t4 = 1; t4 < arguments.length; t4++) {
            var n4 = null != arguments[t4] ? arguments[t4] : {};
            t4 % 2 ? yp(Object(n4), true).forEach(function(t5) {
              gp(e13, t5, n4[t5]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e13, Object.getOwnPropertyDescriptors(n4)) : yp(Object(n4)).forEach(function(t5) {
              Object.defineProperty(e13, t5, Object.getOwnPropertyDescriptor(n4, t5));
            });
          }
          return e13;
        })({}, u3);
        u3 = e12(u3, { type: r4, props: t3, payload: a3 }), n3({ state: u3, prevState: i3 });
      }, pendingRequests: (r3 = [], { add: function(e13) {
        return r3.push(e13), e13.finally(function() {
          r3 = r3.filter(function(t4) {
            return t4 !== e13;
          });
        });
      }, cancelAll: function() {
        r3.forEach(function(e13) {
          return e13.cancel();
        });
      }, isEmpty: function() {
        return 0 === r3.length;
      }, wait: function(e13) {
        return ap ? (ap = false, up = e13 ? Promise.race([Promise.all(r3), new Promise(function(t4) {
          return setTimeout(t4, e13);
        })]) : Promise.all(r3), up.then(function() {
          ap = true;
        })) : up;
      } }) };
    })(Ah, n2, function(e12) {
      var t3, r3, a3 = e12.prevState, c3 = e12.state;
      if (n2.onStateChange(xh({ prevState: a3, state: c3, refresh: i2, navigator: n2.navigator }, u2)), !s2() && null !== (t3 = c3.context) && void 0 !== t3 && null !== (r3 = t3.algoliaInsightsPlugin) && void 0 !== r3 && r3.__automaticInsights && false !== n2.insights) {
        var l2 = Yd({ __autocomplete_clickAnalytics: false });
        n2.plugins.push(l2), o2([l2]);
      }
    }), u2 = (function(e12) {
      var t3 = e12.store;
      return { setActiveItemId: function(e13) {
        t3.dispatch("setActiveItemId", e13);
      }, setQuery: function(e13) {
        t3.dispatch("setQuery", e13);
      }, setCollections: function(e13) {
        var n3 = 0, r3 = e13.map(function(e14) {
          return _p(_p({}, e14), {}, { items: Ed(e14.items).map(function(e15) {
            return _p(_p({}, e15), {}, { __autocomplete_id: n3++ });
          }) });
        });
        t3.dispatch("setCollections", r3);
      }, setIsOpen: function(e13) {
        t3.dispatch("setIsOpen", e13);
      }, setStatus: function(e13) {
        t3.dispatch("setStatus", e13);
      }, setContext: function(e13) {
        t3.dispatch("setContext", e13);
      } };
    })({ store: r2 }), a2 = vh(xh({ props: n2, refresh: i2, store: r2, navigator: n2.navigator }, u2));
    function i2() {
      return Yp(xh({ event: new Event("input"), nextState: { isOpen: r2.getState().isOpen }, props: n2, navigator: n2.navigator, query: r2.getState().query, refresh: i2, store: r2 }, u2));
    }
    function o2(e12) {
      e12.forEach(function(e13) {
        var r3;
        return null === (r3 = e13.subscribe) || void 0 === r3 ? void 0 : r3.call(e13, xh(xh({}, u2), {}, { navigator: n2.navigator, refresh: i2, onSelect: function(e14) {
          t2.push({ onSelect: e14 });
        }, onActive: function(e14) {
          t2.push({ onActive: e14 });
        }, onResolve: function(e14) {
          t2.push({ onResolve: e14 });
        } }));
      });
    }
    function s2() {
      return n2.plugins.some(function(e12) {
        return "aa.algoliaInsightsPlugin" === e12.name;
      });
    }
    if (n2.insights && !s2()) {
      var c2 = "boolean" == typeof n2.insights ? {} : n2.insights;
      n2.plugins.push(Yd(c2));
    }
    return o2(n2.plugins), (function(e12) {
      var t3, n3, r3 = e12.metadata, u3 = e12.environment;
      if (null === (t3 = u3.navigator) || void 0 === t3 || null === (n3 = t3.userAgent) || void 0 === n3 ? void 0 : n3.includes("Algolia Crawler")) {
        var a3 = u3.document.createElement("meta"), i3 = u3.document.querySelector("head");
        a3.name = "algolia:metadata", setTimeout(function() {
          a3.content = JSON.stringify(r3), i3.appendChild(a3);
        }, 0);
      }
    })({ metadata: Fh({ plugins: n2.plugins, options: e11 }), environment: n2.environment }), xh(xh({ refresh: i2, navigator: n2.navigator }, a2), u2);
  }
  var Ih = "https://askai.algolia.com/chat";
  var Th = "askai_token";
  var Ph = function(e11) {
    if (!e11) return true;
    try {
      var t2 = (function(e12) {
        var t3 = bn(e12.split("."), 1)[0];
        return JSON.parse(atob(t3));
      })(e11), n2 = t2.exp;
      return Date.now() / 1e3 > n2 - 30;
    } catch (e12) {
      return true;
    }
  };
  var jh = null;
  var Nh = (function() {
    var e11 = un(Fn().m(function e12(t2) {
      var n2, r2;
      return Fn().w(function(e13) {
        for (; ; ) switch (e13.n) {
          case 0:
            if (n2 = t2.assistantId, r2 = sessionStorage.getItem(Th), Ph(r2)) {
              e13.n = 1;
              break;
            }
            return e13.a(2, r2);
          case 1:
            return jh || (jh = fetch("".concat(Ih, "/token"), { method: "POST", headers: { "x-algolia-assistant-id": n2, "content-type": "application/json" } }).then(function(e14) {
              return e14.json();
            }).then(function(e14) {
              var t3 = e14.token;
              return sessionStorage.setItem(Th, t3), t3;
            }).finally(function() {
              return jh = null;
            })), e13.a(2, jh);
        }
      }, e12);
    }));
    return function(t2) {
      return e11.apply(this, arguments);
    };
  })();
  var zh = (function() {
    var e11 = un(Fn().m(function e12(t2) {
      var n2, r2, u2, a2, i2, o2;
      return Fn().w(function(e13) {
        for (; ; ) switch (e13.n) {
          case 0:
            return n2 = t2.assistantId, r2 = t2.thumbs, u2 = t2.messageId, a2 = t2.appId, (i2 = new Headers()).set("x-algolia-assistant-id", n2), i2.set("content-type", "application/json"), e13.n = 1, Nh({ assistantId: n2 });
          case 1:
            o2 = e13.v, i2.set("authorization", "TOKEN ".concat(o2));
          case 2:
            return e13.a(2, fetch("".concat(Ih, "/feedback"), { method: "POST", body: JSON.stringify({ appId: a2, messageId: u2, thumbs: r2 }), headers: i2 }));
        }
      }, e12);
    }));
    return function(t2) {
      return e11.apply(this, arguments);
    };
  })();
  function Rh(e11) {
    var t2 = e11.translations, n2 = (void 0 === t2 ? {} : t2).poweredByText, r2 = void 0 === n2 ? "Powered by" : n2;
    return Nt.createElement("a", { href: "https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname, "&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"), target: "_blank", rel: "noopener noreferrer" }, Nt.createElement("span", { className: "DocSearch-Label" }, r2), Nt.createElement("svg", { width: "80", height: "24", "aria-label": "Algolia", role: "img", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2196.2 500" }, Nt.createElement("defs", null, Nt.createElement("style", null, ".cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}")), Nt.createElement("path", { className: "cls-2", d: "M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), Nt.createElement("rect", { className: "cls-1", x: "1845.88", y: "104.73", width: "62.58", height: "277.9", rx: "5.9", ry: "5.9" }), Nt.createElement("path", { className: "cls-2", d: "M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z" }), Nt.createElement("path", { className: "cls-2", d: "M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), Nt.createElement("path", { className: "cls-2", d: "M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z" }), Nt.createElement("path", { className: "cls-2", d: "M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), Nt.createElement("path", { className: "cls-2", d: "M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), Nt.createElement("path", { className: "cls-2", d: "M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z" }), Nt.createElement("path", { className: "cls-1", d: "M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z" })));
  }
  function Mh(e11) {
    return Nt.createElement("svg", { width: "20", height: "20", "aria-label": e11.ariaLabel, viewBox: "0 0 24 24", role: "img" }, Nt.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.4" }, e11.children));
  }
  function Zh(e11) {
    var t2 = e11.translations, n2 = void 0 === t2 ? {} : t2, r2 = e11.isAskAiActive, u2 = void 0 !== r2 && r2, a2 = n2.selectText, i2 = void 0 === a2 ? "Select" : a2, o2 = n2.selectKeyAriaLabel, s2 = void 0 === o2 ? "Enter key" : o2, c2 = n2.submitQuestionText, l2 = void 0 === c2 ? "Submit question" : c2, f2 = n2.navigateText, d2 = void 0 === f2 ? "Navigate" : f2, p2 = n2.navigateUpKeyAriaLabel, h2 = void 0 === p2 ? "Arrow up" : p2, v2 = n2.navigateDownKeyAriaLabel, m2 = void 0 === v2 ? "Arrow down" : v2, D2 = n2.closeText, y2 = void 0 === D2 ? "Close" : D2, g2 = n2.backToSearchText, F2 = void 0 === g2 ? "Back to search" : g2, E2 = n2.closeKeyAriaLabel, _2 = void 0 === E2 ? "Escape key" : E2, b2 = n2.poweredByText, C2 = void 0 === b2 ? "Powered by" : b2;
    return Nt.createElement(Nt.Fragment, null, Nt.createElement("div", { className: "DocSearch-Logo" }, Nt.createElement(Rh, { translations: { poweredByText: C2 } })), Nt.createElement("ul", { className: "DocSearch-Commands" }, Nt.createElement("li", null, Nt.createElement("kbd", { className: "DocSearch-Commands-Key" }, Nt.createElement(Mh, { ariaLabel: m2 }, Nt.createElement("path", { d: "M12 5v14" }), Nt.createElement("path", { d: "m19 12-7 7-7-7" }))), Nt.createElement("kbd", { className: "DocSearch-Commands-Key" }, Nt.createElement(Mh, { ariaLabel: h2 }, Nt.createElement("path", { d: "m5 12 7-7 7 7" }), Nt.createElement("path", { d: "M12 19V5" }))), Nt.createElement("span", { className: "DocSearch-Label" }, d2)), Nt.createElement("li", null, Nt.createElement("kbd", { className: "DocSearch-Commands-Key" }, Nt.createElement(Mh, { ariaLabel: s2 }, Nt.createElement("polyline", { points: "9 10 4 15 9 20" }), Nt.createElement("path", { d: "M20 4v7a4 4 0 0 1-4 4H4" }))), Nt.createElement("span", { className: "DocSearch-Label" }, u2 ? l2 : i2)), Nt.createElement("li", null, Nt.createElement("kbd", { className: "DocSearch-Commands-Key" }, Nt.createElement("span", { className: "DocSearch-Escape-Key" }, "ESC")), Nt.createElement("span", { className: "DocSearch-Label", "aria-label": _2 }, u2 ? F2 : y2))));
  }
  function Lh(e11) {
    var t2 = e11.hit, n2 = e11.children;
    return Nt.createElement("a", { href: t2.url }, n2);
  }
  function $h(e11) {
    var t2 = e11.className;
    return Nt.createElement("svg", { viewBox: "0 0 38 38", className: t2, stroke: "currentColor", strokeOpacity: ".5" }, Nt.createElement("g", { fill: "none", fillRule: "evenodd" }, Nt.createElement("g", { transform: "translate(1 1)", strokeWidth: "2" }, Nt.createElement("circle", { strokeOpacity: ".3", cx: "18", cy: "18", r: "18" }), Nt.createElement("path", { d: "M36 18c0-9.94-8.06-18-18-18" }, Nt.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" })))));
  }
  function qh() {
    return Nt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", strokeLinejoin: "round", className: "DocSearch-Hit-icon-sparkles" }, Nt.createElement("path", { d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" }), Nt.createElement("path", { d: "M20 3v4" }), Nt.createElement("path", { d: "M22 5h-4" }), Nt.createElement("path", { d: "M4 17v2" }), Nt.createElement("path", { d: "M5 18H3" }));
  }
  function Uh() {
    return Nt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Nt.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, Nt.createElement("path", { d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0" }), Nt.createElement("path", { d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13" })));
  }
  function Hh() {
    return Nt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Nt.createElement("path", { d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  function Vh() {
    return Nt.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", className: "lucide lucide-triangle-alert-icon lucide-triangle-alert" }, Nt.createElement("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" }), Nt.createElement("path", { d: "M12 9v4" }), Nt.createElement("path", { d: "M12 17h.01" }));
  }
  function Wh() {
    return Nt.createElement("svg", { className: "DocSearch-Hit-Select-Icon", width: "20", height: "20", viewBox: "0 0 20 20" }, Nt.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, Nt.createElement("path", { d: "M18 3v4c0 2-2 4-4 4H2" }), Nt.createElement("path", { d: "M8 17l-6-6 6-6" })));
  }
  var Kh = function() {
    return Nt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, Nt.createElement("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }), Nt.createElement("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }), Nt.createElement("path", { d: "M10 9H8" }), Nt.createElement("path", { d: "M16 13H8" }), Nt.createElement("path", { d: "M16 17H8" }));
  };
  function Jh(e11) {
    switch (e11.type) {
      case "lvl1":
        return Nt.createElement(Kh, null);
      case "content":
        return Nt.createElement(Gh, null);
      default:
        return Nt.createElement(Qh, null);
    }
  }
  function Qh() {
    return Nt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, Nt.createElement("line", { x1: "4", x2: "20", y1: "9", y2: "9" }), Nt.createElement("line", { x1: "4", x2: "20", y1: "15", y2: "15" }), Nt.createElement("line", { x1: "10", x2: "8", y1: "3", y2: "21" }), Nt.createElement("line", { x1: "16", x2: "14", y1: "3", y2: "21" }));
  }
  function Gh() {
    return Nt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Nt.createElement("path", { d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
  }
  function Yh() {
    return Nt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Nt.createElement("path", { d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
  }
  function Xh() {
    return Nt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 18, height: 18, viewBox: "0 0 18 18", fill: "none" }, Nt.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.99984 1.29102C4.74264 1.29102 1.2915 4.74215 1.2915 8.99935C1.2915 13.2565 4.74264 16.7077 8.99984 16.7077C13.257 16.7077 16.7082 13.2565 16.7082 8.99935C16.7082 4.74215 13.257 1.29102 8.99984 1.29102ZM0.0415039 8.99935C0.0415039 4.0518 4.05229 0.0410156 8.99984 0.0410156C13.9474 0.0410156 17.9582 4.0518 17.9582 8.99935C17.9582 13.9469 13.9474 17.9577 8.99984 17.9577C4.05229 17.9577 0.0415039 13.9469 0.0415039 8.99935ZM5.87484 6.49935C5.87484 6.15417 6.15466 5.87435 6.49984 5.87435H11.4998C11.845 5.87435 12.1248 6.15417 12.1248 6.49935V11.4993C12.1248 11.8445 11.845 12.1243 11.4998 12.1243H6.49984C6.15466 12.1243 5.87484 11.8445 5.87484 11.4993V6.49935ZM7.12484 7.12435V10.8743H10.8748V7.12435H7.12484Z", fill: "currentcolor" }));
  }
  function ev() {
    return Nt.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, Nt.createElement("path", { d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0" }));
  }
  function tv() {
    return Nt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "64", height: "64", viewBox: "0 0 24 24", fill: "none", stroke: "#5a5e9a", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, Nt.createElement("path", { d: "m13.5 8.5-5 5" }), Nt.createElement("path", { d: "m8.5 8.5 5 5" }), Nt.createElement("circle", { cx: "11", cy: "11", r: "8" }), Nt.createElement("path", { d: "m21 21-4.3-4.3" }));
  }
  function nv() {
    return Nt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 4, height: 16, viewBox: "0 0 4 16", fill: "none" }, Nt.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.99984 1.95898C1.88478 1.95898 1.7915 2.05226 1.7915 2.16732C1.7915 2.28238 1.88478 2.37565 1.99984 2.37565C2.1149 2.37565 2.20817 2.28238 2.20817 2.16732C2.20817 2.05226 2.1149 1.95898 1.99984 1.95898ZM0.541504 2.16732C0.541504 1.3619 1.19442 0.708984 1.99984 0.708984C2.80525 0.708984 3.45817 1.3619 3.45817 2.16732C3.45817 2.97273 2.80525 3.62565 1.99984 3.62565C1.19442 3.62565 0.541504 2.97273 0.541504 2.16732ZM1.99984 7.79232C1.88478 7.79232 1.7915 7.88559 1.7915 8.00065C1.7915 8.11571 1.88478 8.20898 1.99984 8.20898C2.1149 8.20898 2.20817 8.11571 2.20817 8.00065C2.20817 7.88559 2.1149 7.79232 1.99984 7.79232ZM0.541504 8.00065C0.541504 7.19524 1.19442 6.54232 1.99984 6.54232C2.80525 6.54232 3.45817 7.19524 3.45817 8.00065C3.45817 8.80607 2.80525 9.45898 1.99984 9.45898C1.19442 9.45898 0.541504 8.80607 0.541504 8.00065ZM1.99984 13.6257C1.88478 13.6257 1.7915 13.7189 1.7915 13.834C1.7915 13.949 1.88478 14.0423 1.99984 14.0423C2.1149 14.0423 2.20817 13.949 2.20817 13.834C2.20817 13.7189 2.1149 13.6257 1.99984 13.6257ZM0.541504 13.834C0.541504 13.0286 1.19442 12.3757 1.99984 12.3757C2.80525 12.3757 3.45817 13.0286 3.45817 13.834C3.45817 14.6394 2.80525 15.2923 1.99984 15.2923C1.19442 15.2923 0.541504 14.6394 0.541504 13.834Z", fill: "currentcolor" }));
  }
  function rv() {
    return Nt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 18 18", fill: "none" }, Nt.createElement("path", { d: "M9 0.875C10.6068 0.875 12.1776 1.35149 13.5137 2.24414C14.8498 3.13693 15.8919 4.40598 16.5068 5.89062C17.1218 7.37522 17.2822 9.00892 16.9688 10.585C16.6552 12.1611 15.8814 13.6088 14.7451 14.7451C13.6088 15.8814 12.1611 16.6552 10.585 16.9688C9.00892 17.2822 7.37523 17.1218 5.89062 16.5068C4.40598 15.8919 3.13693 14.8498 2.24414 13.5137C1.35149 12.1776 0.875 10.6068 0.875 9C0.875 8.65482 1.15482 8.375 1.5 8.375C1.84518 8.375 2.125 8.65482 2.125 9C2.125 10.3596 2.52792 11.6888 3.2832 12.8193C4.03864 13.9499 5.1129 14.8312 6.36914 15.3516C7.62523 15.8718 9.00736 16.0083 10.3408 15.7432C11.6744 15.4779 12.8998 14.8228 13.8613 13.8613C14.8228 12.8998 15.4779 11.6744 15.7432 10.3408C16.0083 9.00736 15.8718 7.62523 15.3516 6.36914C14.8312 5.1129 13.9499 4.03864 12.8193 3.2832C11.6888 2.52792 10.3596 2.125 9 2.125C7.06829 2.125 5.21604 2.89096 3.82129 4.22949L3.00879 5.04199H5.66699C6.01202 5.04217 6.29199 5.32192 6.29199 5.66699C6.29182 6.01191 6.01191 6.29182 5.66699 6.29199H1.5C1.45939 6.29199 1.41889 6.28716 1.37891 6.2793C1.36148 6.27587 1.345 6.26949 1.32812 6.26465C1.267 6.24714 1.20782 6.22205 1.15332 6.18555C1.08536 6.14005 1.02604 6.08256 0.980469 6.01465C0.970244 5.99942 0.962841 5.98268 0.954102 5.9668C0.904937 5.87756 0.875056 5.77606 0.875 5.66699V1.5C0.875 1.15482 1.15482 0.875002 1.5 0.875C1.84518 0.875 2.125 1.15482 2.125 1.5V4.15723L2.94141 3.3418L2.9502 3.33301C4.57158 1.77433 6.73388 0.875 9 0.875ZM9.33301 4.20801C9.67808 4.20801 9.95783 4.48798 9.95801 4.83301V9.44727L12.9463 10.9414C13.2548 11.0958 13.3798 11.4707 13.2256 11.7793C13.0712 12.088 12.6955 12.213 12.3867 12.0586L9.05371 10.3926C8.84198 10.2867 8.70801 10.0697 8.70801 9.83301V4.83301C8.70818 4.48809 8.98809 4.20819 9.33301 4.20801Z", fill: "currentcolor" }));
  }
  function uv() {
    return Nt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "19", height: "19", viewBox: "0 0 19 19", fill: "none" }, Nt.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0.712717 3.38039C1.14249 2.95062 1.72538 2.70917 2.33317 2.70917H8.1665C8.51168 2.70917 8.7915 2.989 8.7915 3.33417C8.7915 3.67935 8.51168 3.95917 8.1665 3.95917H2.33317C2.0569 3.95917 1.79195 4.06892 1.5966 4.26427C1.40125 4.45962 1.2915 4.72457 1.2915 5.00084V16.6675C1.2915 16.9438 1.40125 17.2087 1.5966 17.4041C1.79195 17.5994 2.0569 17.7092 2.33317 17.7092H13.9998C14.2761 17.7092 14.5411 17.5994 14.7364 17.4041C14.9318 17.2087 15.0415 16.9438 15.0415 16.6675V10.8342C15.0415 10.489 15.3213 10.2092 15.6665 10.2092C16.0117 10.2092 16.2915 10.489 16.2915 10.8342V16.6675C16.2915 17.2753 16.0501 17.8582 15.6203 18.288C15.1905 18.7177 14.6076 18.9592 13.9998 18.9592H2.33317C1.72538 18.9592 1.14249 18.7177 0.712717 18.288C0.282947 17.8582 0.0415039 17.2753 0.0415039 16.6675V5.00084C0.0415039 4.39305 0.282947 3.81016 0.712717 3.38039Z", fill: "currentcolor" }), Nt.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.6665 2.19141C15.3634 2.19141 15.0728 2.3118 14.8584 2.52611L7.06419 10.3204L6.52548 12.4752L8.68031 11.9365L16.4746 4.14223C16.6889 3.92792 16.8093 3.63725 16.8093 3.33417C16.8093 3.03109 16.6889 2.74043 16.4746 2.52611C16.2603 2.3118 15.9696 2.19141 15.6665 2.19141ZM13.9746 1.64223C14.4233 1.1935 15.0319 0.941406 15.6665 0.941406C16.3011 0.941406 16.9097 1.1935 17.3584 1.64223C17.8072 2.09096 18.0593 2.69957 18.0593 3.33417C18.0593 3.96877 17.8072 4.57738 17.3584 5.02611L9.44178 12.9428C9.36168 13.0229 9.26132 13.0797 9.15142 13.1072L5.81809 13.9405C5.6051 13.9938 5.3798 13.9314 5.22456 13.7761C5.06932 13.6209 5.00692 13.3956 5.06016 13.1826L5.8935 9.84925C5.92097 9.73936 5.9778 9.639 6.0579 9.5589L13.9746 1.64223Z", fill: "currentcolor" }));
  }
  var av;
  var iv = { before: "Searched for ", separator: ", ", lastSeparator: " and ", after: "" };
  function ov(e11) {
    var t2 = e11.queries, n2 = e11.translations, r2 = e11.onSearchQueryClick;
    if (0 === t2.length) return null;
    if ("function" == typeof n2.aggregatedToolCallNode) return Nt.createElement(Nt.Fragment, null, n2.aggregatedToolCallNode(t2, r2));
    var u2 = (n2.aggregatedToolCallText ? n2.aggregatedToolCallText(t2) : iv) || {}, a2 = u2.before, i2 = void 0 === a2 ? "" : a2, o2 = u2.separator, s2 = void 0 === o2 ? ", " : o2, c2 = u2.lastSeparator, l2 = void 0 === c2 ? " and " : c2, f2 = u2.after, d2 = void 0 === f2 ? "" : f2;
    return Nt.createElement("div", { className: "DocSearch-AskAiScreen-MessageContent-Tool Tool--AggregatedResult" }, Nt.createElement(Pn, { size: 18 }), Nt.createElement("span", null, i2 && Nt.createElement("span", null, i2), t2.map(function(e12, n3) {
      return Nt.createElement(H, { key: e12 + n3 }, Nt.createElement("span", { role: "button", tabIndex: 0, className: "DocSearch-AskAiScreen-MessageContent-Tool-Query", onKeyDown: function(t3) {
        "enter" !== t3.key && " " !== t3.key || (t3.preventDefault(), r2(e12));
      }, onClick: function() {
        return r2(e12);
      } }, '"', e12, '"'), n3 < t2.length - 2 && s2, n3 === t2.length - 2 && l2);
    }), d2 && Nt.createElement("span", null, d2)));
  }
  var sv = { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
  function cv(e11) {
    sv = e11;
  }
  var lv = { exec: function() {
    return null;
  } };
  function fv(e11) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n2 = "string" == typeof e11 ? e11 : e11.source, r2 = { replace: function(e12, t3) {
      var u2 = "string" == typeof t3 ? t3 : t3.source;
      return u2 = u2.replace(dv.caret, "$1"), n2 = n2.replace(e12, u2), r2;
    }, getRegex: function() {
      return new RegExp(n2, t2);
    } };
    return r2;
  }
  var dv = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DC\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD40-\uDD59\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDD40-\uDD65\uDD6F-\uDD85\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC7\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDED0-\uDEE3\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0\uDFF0-\uDFF9]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDDB0-\uDDDB\uDDE0-\uDDE9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD822\uD840-\uD868\uD86A-\uD86D\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD88C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D\uDD30-\uDD39]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDD70-\uDD79\uDE40-\uDE96\uDEA0-\uDEB8\uDEBB-\uDED3\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF2-\uDFF6]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD1E\uDD80-\uDDF2]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD833[\uDCF0-\uDCF9]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDDD0-\uDDED\uDDF0-\uDDFA\uDEC0-\uDEDE\uDEE0-\uDEE2\uDEE4\uDEE5\uDEE7-\uDEED\uDEF0-\uDEF4\uDEFE\uDEFF\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEAD\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD88D[\uDC00-\uDC79])/, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: function(e11) {
    return new RegExp("^( {0,3}".concat(e11, ")((?:[	 ][^\\n]*)?(?:\\n|$))"));
  }, nextBulletRegex: function(e11) {
    return new RegExp("^ {0,".concat(Math.min(3, e11 - 1), "}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))"));
  }, hrRegex: function(e11) {
    return new RegExp("^ {0,".concat(Math.min(3, e11 - 1), "}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)"));
  }, fencesBeginRegex: function(e11) {
    return new RegExp("^ {0,".concat(Math.min(3, e11 - 1), "}(?:```|~~~)"));
  }, headingBeginRegex: function(e11) {
    return new RegExp("^ {0,".concat(Math.min(3, e11 - 1), "}#"));
  }, htmlBeginRegex: function(e11) {
    return new RegExp("^ {0,".concat(Math.min(3, e11 - 1), "}<(?:[a-z].*>|!--)"), "i");
  } };
  var pv = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
  var hv = /(?:[*+-]|\d{1,9}[.)])/;
  var vv = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
  var mv = fv(vv).replace(/bull/g, hv).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
  var Dv = fv(vv).replace(/bull/g, hv).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
  var yv = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
  var gv = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/;
  var Fv = fv(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", gv).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
  var Ev = fv(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, hv).getRegex();
  var _v = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
  var bv = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
  var Cv = fv("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", bv).replace("tag", _v).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
  var kv = fv(yv).replace("hr", pv).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _v).getRegex();
  var Av = { blockquote: fv(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", kv).getRegex(), code: /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, def: Fv, fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, hr: pv, html: Cv, lheading: mv, list: Ev, newline: /^(?:[ \t]*(?:\n|$))+/, paragraph: kv, table: lv, text: /^[^\n]+/ };
  var wv = fv("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", pv).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _v).getRegex();
  var Sv = yn(yn({}, Av), {}, { lheading: Dv, table: wv, paragraph: fv(yv).replace("hr", pv).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", wv).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _v).getRegex() });
  var xv = yn(yn({}, Av), {}, { html: fv(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", bv).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: lv, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: fv(yv).replace("hr", pv).replace("heading", " *#{1,6} *[^\n]").replace("lheading", mv).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() });
  var Ov = /^( {2,}|\\)\n(?!\s*$)/;
  var Bv = /(?:[!-\/:-@\[-`\{-~\xA1-\xA9\xAB\xAC\xAE-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u037E\u0384\u0385\u0387\u03F6\u0482\u055A-\u055F\u0589\u058A\u058D-\u058F\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0606-\u060F\u061B\u061D-\u061F\u066A-\u066D\u06D4\u06DE\u06E9\u06FD\u06FE\u0700-\u070D\u07F6-\u07F9\u07FE\u07FF\u0830-\u083E\u085E\u0888\u0964\u0965\u0970\u09F2\u09F3\u09FA\u09FB\u09FD\u0A76\u0AF0\u0AF1\u0B70\u0BF3-\u0BFA\u0C77\u0C7F\u0C84\u0D4F\u0D79\u0DF4\u0E3F\u0E4F\u0E5A\u0E5B\u0F01-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F85\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u104A-\u104F\u109E\u109F\u10FB\u1360-\u1368\u1390-\u1399\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DB\u1800-\u180A\u1940\u1944\u1945\u19DE-\u19FF\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B4E\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2010-\u2027\u2030-\u205E\u207A-\u207E\u208A-\u208E\u20A0-\u20C1\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2429\u2440-\u244A\u249C-\u24E9\u2500-\u2775\u2794-\u2B73\u2B76-\u2BFF\u2CE5-\u2CEA\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E5D\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3001-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u303F\u309B\u309C\u30A0\u30FB\u3190\u3191\u3196-\u319F\u31C0-\u31E5\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAA77-\uAA79\uAADE\uAADF\uAAF0\uAAF1\uAB5B\uAB6A\uAB6B\uABEB\uFB29\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDCF\uFDFC-\uFDFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD00-\uDD02\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDC77\uDC78\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEC8\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDD6E\uDD8E\uDD8F\uDEAD\uDED0-\uDED8\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9\uDFD4\uDFD5\uDFD7\uDFD8]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3F]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09\uDFE1]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFD5-\uDFF1\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3F\uDF44\uDF45]|\uD81B[\uDD6D-\uDD6F\uDE97-\uDE9A\uDFE2]|\uD82F[\uDC9C\uDC9F]|\uD833[\uDC00-\uDCEF\uDCFA-\uDCFC\uDD00-\uDEB3\uDEBA-\uDED0\uDEE0-\uDEF0\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE8B]|\uD838[\uDD4F\uDEFF]|\uD839\uDDFF|\uD83A[\uDD5E\uDD5F]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED8\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0-\uDCBB\uDCC0\uDCC1\uDCD0-\uDCD8\uDD00-\uDE57\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF-\uDEF8\uDF00-\uDF92\uDF94-\uDFEF\uDFFA])/;
  var Iv = /(?:[\t-\r -\/:-@\[-`\{-~\xA0-\xA9\xAB\xAC\xAE-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u037E\u0384\u0385\u0387\u03F6\u0482\u055A-\u055F\u0589\u058A\u058D-\u058F\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0606-\u060F\u061B\u061D-\u061F\u066A-\u066D\u06D4\u06DE\u06E9\u06FD\u06FE\u0700-\u070D\u07F6-\u07F9\u07FE\u07FF\u0830-\u083E\u085E\u0888\u0964\u0965\u0970\u09F2\u09F3\u09FA\u09FB\u09FD\u0A76\u0AF0\u0AF1\u0B70\u0BF3-\u0BFA\u0C77\u0C7F\u0C84\u0D4F\u0D79\u0DF4\u0E3F\u0E4F\u0E5A\u0E5B\u0F01-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F85\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u104A-\u104F\u109E\u109F\u10FB\u1360-\u1368\u1390-\u1399\u1400\u166D\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DB\u1800-\u180A\u1940\u1944\u1945\u19DE-\u19FF\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B4E\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2000-\u200A\u2010-\u2029\u202F-\u205F\u207A-\u207E\u208A-\u208E\u20A0-\u20C1\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2429\u2440-\u244A\u249C-\u24E9\u2500-\u2775\u2794-\u2B73\u2B76-\u2BFF\u2CE5-\u2CEA\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E5D\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u303F\u309B\u309C\u30A0\u30FB\u3190\u3191\u3196-\u319F\u31C0-\u31E5\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAA77-\uAA79\uAADE\uAADF\uAAF0\uAAF1\uAB5B\uAB6A\uAB6B\uABEB\uFB29\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDCF\uFDFC-\uFDFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFEFF\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD00-\uDD02\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDC77\uDC78\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEC8\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDD6E\uDD8E\uDD8F\uDEAD\uDED0-\uDED8\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9\uDFD4\uDFD5\uDFD7\uDFD8]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3F]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09\uDFE1]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFD5-\uDFF1\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3F\uDF44\uDF45]|\uD81B[\uDD6D-\uDD6F\uDE97-\uDE9A\uDFE2]|\uD82F[\uDC9C\uDC9F]|\uD833[\uDC00-\uDCEF\uDCFA-\uDCFC\uDD00-\uDEB3\uDEBA-\uDED0\uDEE0-\uDEF0\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE8B]|\uD838[\uDD4F\uDEFF]|\uD839\uDDFF|\uD83A[\uDD5E\uDD5F]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED8\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0-\uDCBB\uDCC0\uDCC1\uDCD0-\uDCD8\uDD00-\uDE57\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF-\uDEF8\uDF00-\uDF92\uDF94-\uDFEF\uDFFA])/;
  var Tv = /(?:[\0-\x08\x0E-\x1F0-9A-Za-z\x7F-\x9F\xAA\xAD\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376-\u037D\u037F-\u0383\u0386\u0388-\u03F5\u03F7-\u0481\u0483-\u0559\u0560-\u0588\u058B\u058C\u0590-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7-\u05F2\u05F5-\u0605\u0610-\u061A\u061C\u0620-\u0669\u066E-\u06D3\u06D5-\u06DD\u06DF-\u06E8\u06EA-\u06FC\u06FF\u070E-\u07F5\u07FA-\u07FD\u0800-\u082F\u083F-\u085D\u085F-\u0887\u0889-\u0963\u0966-\u096F\u0971-\u09F1\u09F4-\u09F9\u09FC\u09FE-\u0A75\u0A77-\u0AEF\u0AF2-\u0B6F\u0B71-\u0BF2\u0BFB-\u0C76\u0C78-\u0C7E\u0C80-\u0C83\u0C85-\u0D4E\u0D50-\u0D78\u0D7A-\u0DF3\u0DF5-\u0E3E\u0E40-\u0E4E\u0E50-\u0E59\u0E5C-\u0F00\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39\u0F3E-\u0F84\u0F86-\u0FBD\u0FC6\u0FCD\u0FDB-\u1049\u1050-\u109D\u10A0-\u10FA\u10FC-\u135F\u1369-\u138F\u139A-\u13FF\u1401-\u166C\u166F-\u167F\u1681-\u169A\u169D-\u16EA\u16EE-\u1734\u1737-\u17D3\u17D7\u17DC-\u17FF\u180B-\u193F\u1941-\u1943\u1946-\u19DD\u1A00-\u1A1D\u1A20-\u1A9F\u1AA7\u1AAE-\u1B4D\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BFB\u1C00-\u1C3A\u1C40-\u1C7D\u1C80-\u1CBF\u1CC8-\u1CD2\u1CD4-\u1FBC\u1FBE\u1FC2-\u1FCC\u1FD0-\u1FDC\u1FE0-\u1FEC\u1FF0-\u1FFC\u1FFF\u200B-\u200F\u202A-\u202E\u2060-\u2079\u207F-\u2089\u208F-\u209F\u20C2-\u20FF\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u218C-\u218F\u242A-\u243F\u244B-\u249B\u24EA-\u24FF\u2776-\u2793\u2B74\u2B75\u2C00-\u2CE4\u2CEB-\u2CF8\u2CFD\u2D00-\u2D6F\u2D71-\u2DFF\u2E2F\u2E5E-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3040-\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u318F\u3192-\u3195\u31A0-\u31BF\u31E6-\u31EE\u31F0-\u31FF\u321F-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48F\uA4C7-\uA4FD\uA500-\uA60C\uA610-\uA672\uA674-\uA67D\uA67F-\uA6F1\uA6F8-\uA6FF\uA717-\uA71F\uA722-\uA788\uA78B-\uA827\uA82C-\uA835\uA83A-\uA873\uA878-\uA8CD\uA8D0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA95E\uA960-\uA9C0\uA9CE-\uA9DD\uA9E0-\uAA5B\uAA60-\uAA76\uAA7A-\uAADD\uAAE0-\uAAEF\uAAF2-\uAB5A\uAB5C-\uAB69\uAB6C-\uABEA\uABEC-\uD7FF\uE000-\uFB28\uFB2A-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDD0-\uFDFB\uFE00-\uFE0F\uFE1A-\uFE2F\uFE53\uFE67\uFE6C-\uFEFE\uFF00\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF]|\uD800[\uDC00-\uDCFF\uDD03-\uDD36\uDD40-\uDD78\uDD8A\uDD8B\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFD-\uDF9E\uDFA0-\uDFCF\uDFD1-\uDFFF]|\uD801[\uDC00-\uDD6E\uDD70-\uDFFF]|\uD802[\uDC00-\uDC56\uDC58-\uDC76\uDC79-\uDD1E\uDD20-\uDD3E\uDD40-\uDE4F\uDE59-\uDE7E\uDE80-\uDEC7\uDEC9-\uDEEF\uDEF7-\uDF38\uDF40-\uDF98\uDF9D-\uDFFF]|\uD803[\uDC00-\uDD6D\uDD6F-\uDD8D\uDD90-\uDEAC\uDEAE-\uDECF\uDED9-\uDF54\uDF5A-\uDF85\uDF8A-\uDFFF]|\uD804[\uDC00-\uDC46\uDC4E-\uDCBA\uDCBD\uDCC2-\uDD3F\uDD44-\uDD73\uDD76-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDDE0-\uDE37\uDE3E-\uDEA8\uDEAA-\uDFD3\uDFD6\uDFD9-\uDFFF]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5C\uDC5E-\uDCC5\uDCC7-\uDDC0\uDDD8-\uDE40\uDE44-\uDE5F\uDE6D-\uDEB8\uDEBA-\uDF3B\uDF40-\uDFFF]|\uD806[\uDC00-\uDC3A\uDC3C-\uDD43\uDD47-\uDDE1\uDDE3-\uDE3E\uDE47-\uDE99\uDE9D\uDEA3-\uDEFF\uDF0A-\uDFE0\uDFE2-\uDFFF]|\uD807[\uDC00-\uDC40\uDC46-\uDC6F\uDC72-\uDEF6\uDEF9-\uDF42\uDF50-\uDFD4\uDFF2-\uDFFE]|[\uD808\uD80A\uD80C-\uD819\uD81C-\uD82E\uD830-\uD832\uD837\uD83F-\uDBFF][\uDC00-\uDFFF]|\uD809[\uDC00-\uDC6F\uDC75-\uDFFF]|\uD80B[\uDC00-\uDFF0\uDFF3-\uDFFF]|\uD81A[\uDC00-\uDE6D\uDE70-\uDEF4\uDEF6-\uDF36\uDF40-\uDF43\uDF46-\uDFFF]|\uD81B[\uDC00-\uDD6C\uDD70-\uDE96\uDE9B-\uDFE1\uDFE3-\uDFFF]|\uD82F[\uDC00-\uDC9B\uDC9D\uDC9E\uDCA0-\uDFFF]|\uD833[\uDCF0-\uDCF9\uDCFD-\uDCFF\uDEB4-\uDEB9\uDED1-\uDEDF\uDEF1-\uDF4F\uDFC4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD65-\uDD69\uDD6D-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDDEB-\uDDFF\uDE42-\uDE44\uDE46-\uDEFF\uDF57-\uDFFF]|\uD835[\uDC00-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE8C-\uDFFF]|\uD838[\uDC00-\uDD4E\uDD50-\uDEFE\uDF00-\uDFFF]|\uD839[\uDC00-\uDDFE\uDE00-\uDFFF]|\uD83A[\uDC00-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDD2D\uDD2F-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDD0C\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED9-\uDEDB\uDEED-\uDEEF\uDEFD-\uDEFF\uDFDA-\uDFDF\uDFEC-\uDFEF\uDFF1-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCBC-\uDCBF\uDCC2-\uDCCF\uDCD9-\uDCFF\uDE58-\uDE5F\uDE6E\uDE6F\uDE7D-\uDE7F\uDE8B-\uDE8D\uDEC7\uDEC9-\uDECC\uDEDD\uDEDE\uDEEB-\uDEEE\uDEF9-\uDEFF\uDF93\uDFF0-\uDFF9\uDFFB-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/;
  var Pv = fv(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Iv).getRegex();
  var jv = /(?!~)(?:[!-\/:-@\[-`\{-~\xA1-\xA9\xAB\xAC\xAE-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u037E\u0384\u0385\u0387\u03F6\u0482\u055A-\u055F\u0589\u058A\u058D-\u058F\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0606-\u060F\u061B\u061D-\u061F\u066A-\u066D\u06D4\u06DE\u06E9\u06FD\u06FE\u0700-\u070D\u07F6-\u07F9\u07FE\u07FF\u0830-\u083E\u085E\u0888\u0964\u0965\u0970\u09F2\u09F3\u09FA\u09FB\u09FD\u0A76\u0AF0\u0AF1\u0B70\u0BF3-\u0BFA\u0C77\u0C7F\u0C84\u0D4F\u0D79\u0DF4\u0E3F\u0E4F\u0E5A\u0E5B\u0F01-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F85\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u104A-\u104F\u109E\u109F\u10FB\u1360-\u1368\u1390-\u1399\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DB\u1800-\u180A\u1940\u1944\u1945\u19DE-\u19FF\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B4E\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2010-\u2027\u2030-\u205E\u207A-\u207E\u208A-\u208E\u20A0-\u20C1\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2429\u2440-\u244A\u249C-\u24E9\u2500-\u2775\u2794-\u2B73\u2B76-\u2BFF\u2CE5-\u2CEA\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E5D\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3001-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u303F\u309B\u309C\u30A0\u30FB\u3190\u3191\u3196-\u319F\u31C0-\u31E5\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAA77-\uAA79\uAADE\uAADF\uAAF0\uAAF1\uAB5B\uAB6A\uAB6B\uABEB\uFB29\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDCF\uFDFC-\uFDFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD00-\uDD02\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDC77\uDC78\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEC8\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDD6E\uDD8E\uDD8F\uDEAD\uDED0-\uDED8\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9\uDFD4\uDFD5\uDFD7\uDFD8]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3F]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09\uDFE1]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFD5-\uDFF1\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3F\uDF44\uDF45]|\uD81B[\uDD6D-\uDD6F\uDE97-\uDE9A\uDFE2]|\uD82F[\uDC9C\uDC9F]|\uD833[\uDC00-\uDCEF\uDCFA-\uDCFC\uDD00-\uDEB3\uDEBA-\uDED0\uDEE0-\uDEF0\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE8B]|\uD838[\uDD4F\uDEFF]|\uD839\uDDFF|\uD83A[\uDD5E\uDD5F]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED8\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0-\uDCBB\uDCC0\uDCC1\uDCD0-\uDCD8\uDD00-\uDE57\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF-\uDEF8\uDF00-\uDF92\uDF94-\uDFEF\uDFFA])/;
  var Nv = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/;
  var zv = fv(Nv, "u").replace(/punct/g, Bv).getRegex();
  var Rv = fv(Nv, "u").replace(/punct/g, jv).getRegex();
  var Mv = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
  var Zv = fv(Mv, "gu").replace(/notPunctSpace/g, Tv).replace(/punctSpace/g, Iv).replace(/punct/g, Bv).getRegex();
  var Lv = fv(Mv, "gu").replace(/notPunctSpace/g, /(?:(?:[\0-\x08\x0E-\x1F0-9A-Za-z\x7F-\x9F\xAA\xAD\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376-\u037D\u037F-\u0383\u0386\u0388-\u03F5\u03F7-\u0481\u0483-\u0559\u0560-\u0588\u058B\u058C\u0590-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7-\u05F2\u05F5-\u0605\u0610-\u061A\u061C\u0620-\u0669\u066E-\u06D3\u06D5-\u06DD\u06DF-\u06E8\u06EA-\u06FC\u06FF\u070E-\u07F5\u07FA-\u07FD\u0800-\u082F\u083F-\u085D\u085F-\u0887\u0889-\u0963\u0966-\u096F\u0971-\u09F1\u09F4-\u09F9\u09FC\u09FE-\u0A75\u0A77-\u0AEF\u0AF2-\u0B6F\u0B71-\u0BF2\u0BFB-\u0C76\u0C78-\u0C7E\u0C80-\u0C83\u0C85-\u0D4E\u0D50-\u0D78\u0D7A-\u0DF3\u0DF5-\u0E3E\u0E40-\u0E4E\u0E50-\u0E59\u0E5C-\u0F00\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39\u0F3E-\u0F84\u0F86-\u0FBD\u0FC6\u0FCD\u0FDB-\u1049\u1050-\u109D\u10A0-\u10FA\u10FC-\u135F\u1369-\u138F\u139A-\u13FF\u1401-\u166C\u166F-\u167F\u1681-\u169A\u169D-\u16EA\u16EE-\u1734\u1737-\u17D3\u17D7\u17DC-\u17FF\u180B-\u193F\u1941-\u1943\u1946-\u19DD\u1A00-\u1A1D\u1A20-\u1A9F\u1AA7\u1AAE-\u1B4D\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BFB\u1C00-\u1C3A\u1C40-\u1C7D\u1C80-\u1CBF\u1CC8-\u1CD2\u1CD4-\u1FBC\u1FBE\u1FC2-\u1FCC\u1FD0-\u1FDC\u1FE0-\u1FEC\u1FF0-\u1FFC\u1FFF\u200B-\u200F\u202A-\u202E\u2060-\u2079\u207F-\u2089\u208F-\u209F\u20C2-\u20FF\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u218C-\u218F\u242A-\u243F\u244B-\u249B\u24EA-\u24FF\u2776-\u2793\u2B74\u2B75\u2C00-\u2CE4\u2CEB-\u2CF8\u2CFD\u2D00-\u2D6F\u2D71-\u2DFF\u2E2F\u2E5E-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3040-\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u318F\u3192-\u3195\u31A0-\u31BF\u31E6-\u31EE\u31F0-\u31FF\u321F-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48F\uA4C7-\uA4FD\uA500-\uA60C\uA610-\uA672\uA674-\uA67D\uA67F-\uA6F1\uA6F8-\uA6FF\uA717-\uA71F\uA722-\uA788\uA78B-\uA827\uA82C-\uA835\uA83A-\uA873\uA878-\uA8CD\uA8D0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA95E\uA960-\uA9C0\uA9CE-\uA9DD\uA9E0-\uAA5B\uAA60-\uAA76\uAA7A-\uAADD\uAAE0-\uAAEF\uAAF2-\uAB5A\uAB5C-\uAB69\uAB6C-\uABEA\uABEC-\uD7FF\uE000-\uFB28\uFB2A-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDD0-\uFDFB\uFE00-\uFE0F\uFE1A-\uFE2F\uFE53\uFE67\uFE6C-\uFEFE\uFF00\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF]|\uD800[\uDC00-\uDCFF\uDD03-\uDD36\uDD40-\uDD78\uDD8A\uDD8B\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFD-\uDF9E\uDFA0-\uDFCF\uDFD1-\uDFFF]|\uD801[\uDC00-\uDD6E\uDD70-\uDFFF]|\uD802[\uDC00-\uDC56\uDC58-\uDC76\uDC79-\uDD1E\uDD20-\uDD3E\uDD40-\uDE4F\uDE59-\uDE7E\uDE80-\uDEC7\uDEC9-\uDEEF\uDEF7-\uDF38\uDF40-\uDF98\uDF9D-\uDFFF]|\uD803[\uDC00-\uDD6D\uDD6F-\uDD8D\uDD90-\uDEAC\uDEAE-\uDECF\uDED9-\uDF54\uDF5A-\uDF85\uDF8A-\uDFFF]|\uD804[\uDC00-\uDC46\uDC4E-\uDCBA\uDCBD\uDCC2-\uDD3F\uDD44-\uDD73\uDD76-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDDE0-\uDE37\uDE3E-\uDEA8\uDEAA-\uDFD3\uDFD6\uDFD9-\uDFFF]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5C\uDC5E-\uDCC5\uDCC7-\uDDC0\uDDD8-\uDE40\uDE44-\uDE5F\uDE6D-\uDEB8\uDEBA-\uDF3B\uDF40-\uDFFF]|\uD806[\uDC00-\uDC3A\uDC3C-\uDD43\uDD47-\uDDE1\uDDE3-\uDE3E\uDE47-\uDE99\uDE9D\uDEA3-\uDEFF\uDF0A-\uDFE0\uDFE2-\uDFFF]|\uD807[\uDC00-\uDC40\uDC46-\uDC6F\uDC72-\uDEF6\uDEF9-\uDF42\uDF50-\uDFD4\uDFF2-\uDFFE]|[\uD808\uD80A\uD80C-\uD819\uD81C-\uD82E\uD830-\uD832\uD837\uD83F-\uDBFF][\uDC00-\uDFFF]|\uD809[\uDC00-\uDC6F\uDC75-\uDFFF]|\uD80B[\uDC00-\uDFF0\uDFF3-\uDFFF]|\uD81A[\uDC00-\uDE6D\uDE70-\uDEF4\uDEF6-\uDF36\uDF40-\uDF43\uDF46-\uDFFF]|\uD81B[\uDC00-\uDD6C\uDD70-\uDE96\uDE9B-\uDFE1\uDFE3-\uDFFF]|\uD82F[\uDC00-\uDC9B\uDC9D\uDC9E\uDCA0-\uDFFF]|\uD833[\uDCF0-\uDCF9\uDCFD-\uDCFF\uDEB4-\uDEB9\uDED1-\uDEDF\uDEF1-\uDF4F\uDFC4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD65-\uDD69\uDD6D-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDDEB-\uDDFF\uDE42-\uDE44\uDE46-\uDEFF\uDF57-\uDFFF]|\uD835[\uDC00-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE8C-\uDFFF]|\uD838[\uDC00-\uDD4E\uDD50-\uDEFE\uDF00-\uDFFF]|\uD839[\uDC00-\uDDFE\uDE00-\uDFFF]|\uD83A[\uDC00-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDD2D\uDD2F-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDD0C\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED9-\uDEDB\uDEED-\uDEEF\uDEFD-\uDEFF\uDFDA-\uDFDF\uDFEC-\uDFEF\uDFF1-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCBC-\uDCBF\uDCC2-\uDCCF\uDCD9-\uDCFF\uDE58-\uDE5F\uDE6E\uDE6F\uDE7D-\uDE7F\uDE8B-\uDE8D\uDEC7\uDEC9-\uDECC\uDEDD\uDEDE\uDEEB-\uDEEE\uDEF9-\uDEFF\uDF93\uDFF0-\uDFF9\uDFFB-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])|~)/).replace(/punctSpace/g, /(?!~)(?:[\t-\r -\/:-@\[-`\{-~\xA0-\xA9\xAB\xAC\xAE-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u037E\u0384\u0385\u0387\u03F6\u0482\u055A-\u055F\u0589\u058A\u058D-\u058F\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0606-\u060F\u061B\u061D-\u061F\u066A-\u066D\u06D4\u06DE\u06E9\u06FD\u06FE\u0700-\u070D\u07F6-\u07F9\u07FE\u07FF\u0830-\u083E\u085E\u0888\u0964\u0965\u0970\u09F2\u09F3\u09FA\u09FB\u09FD\u0A76\u0AF0\u0AF1\u0B70\u0BF3-\u0BFA\u0C77\u0C7F\u0C84\u0D4F\u0D79\u0DF4\u0E3F\u0E4F\u0E5A\u0E5B\u0F01-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F85\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u104A-\u104F\u109E\u109F\u10FB\u1360-\u1368\u1390-\u1399\u1400\u166D\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DB\u1800-\u180A\u1940\u1944\u1945\u19DE-\u19FF\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B4E\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2000-\u200A\u2010-\u2029\u202F-\u205F\u207A-\u207E\u208A-\u208E\u20A0-\u20C1\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2429\u2440-\u244A\u249C-\u24E9\u2500-\u2775\u2794-\u2B73\u2B76-\u2BFF\u2CE5-\u2CEA\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E5D\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u303F\u309B\u309C\u30A0\u30FB\u3190\u3191\u3196-\u319F\u31C0-\u31E5\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAA77-\uAA79\uAADE\uAADF\uAAF0\uAAF1\uAB5B\uAB6A\uAB6B\uABEB\uFB29\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDCF\uFDFC-\uFDFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFEFF\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD00-\uDD02\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDC77\uDC78\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEC8\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDD6E\uDD8E\uDD8F\uDEAD\uDED0-\uDED8\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9\uDFD4\uDFD5\uDFD7\uDFD8]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3F]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09\uDFE1]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFD5-\uDFF1\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3F\uDF44\uDF45]|\uD81B[\uDD6D-\uDD6F\uDE97-\uDE9A\uDFE2]|\uD82F[\uDC9C\uDC9F]|\uD833[\uDC00-\uDCEF\uDCFA-\uDCFC\uDD00-\uDEB3\uDEBA-\uDED0\uDEE0-\uDEF0\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE8B]|\uD838[\uDD4F\uDEFF]|\uD839\uDDFF|\uD83A[\uDD5E\uDD5F]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED8\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0-\uDCBB\uDCC0\uDCC1\uDCD0-\uDCD8\uDD00-\uDE57\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF-\uDEF8\uDF00-\uDF92\uDF94-\uDFEF\uDFFA])/).replace(/punct/g, jv).getRegex();
  var $v = fv("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Tv).replace(/punctSpace/g, Iv).replace(/punct/g, Bv).getRegex();
  var qv = fv(/\\(punct)/, "gu").replace(/punct/g, Bv).getRegex();
  var Uv = fv(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
  var Hv = fv(bv).replace("(?:-->|$)", "-->").getRegex();
  var Vv = fv("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Hv).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
  var Wv = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`[^`]*`|[^\[\]\\`])*?/;
  var Kv = fv(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", Wv).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
  var Jv = fv(/^!?\[(label)\]\[(ref)\]/).replace("label", Wv).replace("ref", gv).getRegex();
  var Qv = fv(/^!?\[(ref)\](?:\[\])?/).replace("ref", gv).getRegex();
  var Gv = { _backpedal: lv, anyPunctuation: qv, autolink: Uv, blockSkip: /\[[^\[\]]*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g, br: Ov, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, del: lv, emStrongLDelim: zv, emStrongRDelimAst: Zv, emStrongRDelimUnd: $v, escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, link: Kv, nolink: Qv, punctuation: Pv, reflink: Jv, reflinkSearch: fv("reflink|nolink(?!\\()", "g").replace("reflink", Jv).replace("nolink", Qv).getRegex(), tag: Vv, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, url: lv };
  var Yv = yn(yn({}, Gv), {}, { link: fv(/^!?\[(label)\]\((.*?)\)/).replace("label", Wv).getRegex(), reflink: fv(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Wv).getRegex() });
  var Xv = yn(yn({}, Gv), {}, { emStrongRDelimAst: Lv, emStrongLDelim: Rv, url: fv(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ });
  var em = yn(yn({}, Xv), {}, { br: fv(Ov).replace("{2,}", "*").getRegex(), text: fv(Xv.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() });
  var tm = { normal: Av, gfm: Sv, pedantic: xv };
  var nm = { normal: Gv, gfm: Xv, breaks: em, pedantic: Yv };
  var rm = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  var um = function(e11) {
    return rm[e11];
  };
  function am(e11, t2) {
    if (t2) {
      if (dv.escapeTest.test(e11)) return e11.replace(dv.escapeReplace, um);
    } else if (dv.escapeTestNoEncode.test(e11)) return e11.replace(dv.escapeReplaceNoEncode, um);
    return e11;
  }
  function im(e11) {
    try {
      e11 = encodeURI(e11).replace(dv.percentDecode, "%");
    } catch (e12) {
      return null;
    }
    return e11;
  }
  function om(e11, t2) {
    var n2, r2 = e11.replace(dv.findPipe, function(e12, t3, n3) {
      for (var r3 = false, u3 = t3; --u3 >= 0 && "\\" === n3[u3]; ) r3 = !r3;
      return r3 ? "|" : " |";
    }).split(dv.splitPipe), u2 = 0;
    if (r2[0].trim() || r2.shift(), r2.length > 0 && !(null !== (n2 = r2.at(-1)) && void 0 !== n2 && n2.trim()) && r2.pop(), t2) if (r2.length > t2) r2.splice(t2);
    else for (; r2.length < t2; ) r2.push("");
    for (; u2 < r2.length; u2++) r2[u2] = r2[u2].trim().replace(dv.slashPipe, "|");
    return r2;
  }
  function sm(e11, t2, n2) {
    var r2 = e11.length;
    if (0 === r2) return "";
    for (var u2 = 0; u2 < r2 && e11.charAt(r2 - u2 - 1) === t2; ) u2++;
    return e11.slice(0, r2 - u2);
  }
  function cm(e11, t2, n2, r2, u2) {
    var a2 = t2.href, i2 = t2.title || null, o2 = e11[1].replace(u2.other.outputLinkReplace, "$1");
    r2.state.inLink = true;
    var s2 = { type: "!" === e11[0].charAt(0) ? "image" : "link", raw: n2, href: a2, title: i2, text: o2, tokens: r2.inlineTokens(o2) };
    return r2.state.inLink = false, s2;
  }
  var lm = ln(function e6(t2) {
    on(this, e6), dn(this, "options", void 0), dn(this, "rules", void 0), dn(this, "lexer", void 0), this.options = t2 || sv;
  }, [{ key: "space", value: function(e11) {
    var t2 = this.rules.block.newline.exec(e11);
    if (t2 && t2[0].length > 0) return { type: "space", raw: t2[0] };
  } }, { key: "code", value: function(e11) {
    var t2 = this.rules.block.code.exec(e11);
    if (t2) {
      var n2 = t2[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t2[0], codeBlockStyle: "indented", text: this.options.pedantic ? n2 : sm(n2, "\n") };
    }
  } }, { key: "fences", value: function(e11) {
    var t2 = this.rules.block.fences.exec(e11);
    if (t2) {
      var n2 = t2[0], r2 = (function(e12, t3, n3) {
        var r3 = e12.match(n3.other.indentCodeCompensation);
        if (null === r3) return t3;
        var u2 = r3[1];
        return t3.split("\n").map(function(e13) {
          var t4 = e13.match(n3.other.beginningSpace);
          return null === t4 ? e13 : bn(t4, 1)[0].length >= u2.length ? e13.slice(u2.length) : e13;
        }).join("\n");
      })(n2, t2[3] || "", this.rules);
      return { type: "code", raw: n2, lang: t2[2] ? t2[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t2[2], text: r2 };
    }
  } }, { key: "heading", value: function(e11) {
    var t2 = this.rules.block.heading.exec(e11);
    if (t2) {
      var n2 = t2[2].trim();
      if (this.rules.other.endingHash.test(n2)) {
        var r2 = sm(n2, "#");
        (this.options.pedantic || !r2 || this.rules.other.endingSpaceChar.test(r2)) && (n2 = r2.trim());
      }
      return { type: "heading", raw: t2[0], depth: t2[1].length, text: n2, tokens: this.lexer.inline(n2) };
    }
  } }, { key: "hr", value: function(e11) {
    var t2 = this.rules.block.hr.exec(e11);
    if (t2) return { type: "hr", raw: sm(t2[0], "\n") };
  } }, { key: "blockquote", value: function(e11) {
    var t2 = this.rules.block.blockquote.exec(e11);
    if (t2) {
      for (var n2 = sm(t2[0], "\n").split("\n"), r2 = "", u2 = "", a2 = []; n2.length > 0; ) {
        var i2 = false, o2 = [], s2 = void 0;
        for (s2 = 0; s2 < n2.length; s2++) if (this.rules.other.blockquoteStart.test(n2[s2])) o2.push(n2[s2]), i2 = true;
        else {
          if (i2) break;
          o2.push(n2[s2]);
        }
        n2 = n2.slice(s2);
        var c2 = o2.join("\n"), l2 = c2.replace(this.rules.other.blockquoteSetextReplace, "\n    $1").replace(this.rules.other.blockquoteSetextReplace2, "");
        r2 = r2 ? "".concat(r2, "\n").concat(c2) : c2, u2 = u2 ? "".concat(u2, "\n").concat(l2) : l2;
        var f2 = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(l2, a2, true), this.lexer.state.top = f2, 0 === n2.length) break;
        var d2 = a2.at(-1);
        if ("code" === (null == d2 ? void 0 : d2.type)) break;
        if ("blockquote" === (null == d2 ? void 0 : d2.type)) {
          var p2 = d2, h2 = p2.raw + "\n" + n2.join("\n"), v2 = this.blockquote(h2);
          a2[a2.length - 1] = v2, r2 = r2.substring(0, r2.length - p2.raw.length) + v2.raw, u2 = u2.substring(0, u2.length - p2.text.length) + v2.text;
          break;
        }
        if ("list" !== (null == d2 ? void 0 : d2.type)) ;
        else {
          var m2 = d2, D2 = m2.raw + "\n" + n2.join("\n"), y2 = this.list(D2);
          a2[a2.length - 1] = y2, r2 = r2.substring(0, r2.length - d2.raw.length) + y2.raw, u2 = u2.substring(0, u2.length - m2.raw.length) + y2.raw, n2 = D2.substring(a2.at(-1).raw.length).split("\n");
        }
      }
      return { type: "blockquote", raw: r2, tokens: a2, text: u2 };
    }
  } }, { key: "list", value: function(e11) {
    var t2 = this, n2 = this.rules.block.list.exec(e11);
    if (n2) {
      var r2 = n2[1].trim(), u2 = r2.length > 1, a2 = { type: "list", raw: "", ordered: u2, start: u2 ? +r2.slice(0, -1) : "", loose: false, items: [] };
      r2 = u2 ? "\\d{1,9}\\".concat(r2.slice(-1)) : "\\".concat(r2), this.options.pedantic && (r2 = u2 ? r2 : "[*+-]");
      for (var i2 = this.rules.other.listItemRegex(r2), o2 = false; e11; ) {
        var s2 = false, c2 = "", l2 = "";
        if (!(n2 = i2.exec(e11)) || this.rules.block.hr.test(e11)) break;
        c2 = n2[0], e11 = e11.substring(c2.length);
        var f2 = n2[2].split("\n", 1)[0].replace(this.rules.other.listReplaceTabs, function(e12) {
          return " ".repeat(3 * e12.length);
        }), d2 = e11.split("\n", 1)[0], p2 = !f2.trim(), h2 = 0;
        if (this.options.pedantic ? (h2 = 2, l2 = f2.trimStart()) : p2 ? h2 = n2[1].length + 1 : (h2 = (h2 = n2[2].search(this.rules.other.nonSpaceChar)) > 4 ? 1 : h2, l2 = f2.slice(h2), h2 += n2[1].length), p2 && this.rules.other.blankLine.test(d2) && (c2 += d2 + "\n", e11 = e11.substring(d2.length + 1), s2 = true), !s2) for (var v2 = this.rules.other.nextBulletRegex(h2), m2 = this.rules.other.hrRegex(h2), D2 = this.rules.other.fencesBeginRegex(h2), y2 = this.rules.other.headingBeginRegex(h2), g2 = this.rules.other.htmlBeginRegex(h2); e11; ) {
          var F2 = e11.split("\n", 1)[0], E2 = void 0;
          if (d2 = F2, E2 = this.options.pedantic ? d2 = d2.replace(this.rules.other.listReplaceNesting, "  ") : d2.replace(this.rules.other.tabCharGlobal, "    "), D2.test(d2) || y2.test(d2) || g2.test(d2) || v2.test(d2) || m2.test(d2)) break;
          if (E2.search(this.rules.other.nonSpaceChar) >= h2 || !d2.trim()) l2 += "\n" + E2.slice(h2);
          else {
            if (p2 || f2.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || D2.test(f2) || y2.test(f2) || m2.test(f2)) break;
            l2 += "\n" + d2;
          }
          !p2 && !d2.trim() && (p2 = true), c2 += F2 + "\n", e11 = e11.substring(F2.length + 1), f2 = E2.slice(h2);
        }
        a2.loose || (o2 ? a2.loose = true : this.rules.other.doubleBlankLine.test(c2) && (o2 = true));
        var _2 = null, b2 = void 0;
        this.options.gfm && (_2 = this.rules.other.listIsTask.exec(l2)) && (b2 = "[ ] " !== _2[0], l2 = l2.replace(this.rules.other.listReplaceTask, "")), a2.items.push({ type: "list_item", raw: c2, task: !!_2, checked: b2, loose: false, text: l2, tokens: [] }), a2.raw += c2;
      }
      var C2 = a2.items.at(-1);
      if (!C2) return;
      C2.raw = C2.raw.trimEnd(), C2.text = C2.text.trimEnd(), a2.raw = a2.raw.trimEnd();
      for (var k2 = 0; k2 < a2.items.length; k2++) if (this.lexer.state.top = false, a2.items[k2].tokens = this.lexer.blockTokens(a2.items[k2].text, []), !a2.loose) {
        var A2 = a2.items[k2].tokens.filter(function(e12) {
          return "space" === e12.type;
        }), w2 = A2.length > 0 && A2.some(function(e12) {
          return t2.rules.other.anyLine.test(e12.raw);
        });
        a2.loose = w2;
      }
      if (a2.loose) for (var S2 = 0; S2 < a2.items.length; S2++) a2.items[S2].loose = true;
      return a2;
    }
  } }, { key: "html", value: function(e11) {
    var t2 = this.rules.block.html.exec(e11);
    if (t2) return { type: "html", block: true, raw: t2[0], pre: "pre" === t2[1] || "script" === t2[1] || "style" === t2[1], text: t2[0] };
  } }, { key: "def", value: function(e11) {
    var t2 = this.rules.block.def.exec(e11);
    if (t2) {
      var n2 = t2[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), r2 = t2[2] ? t2[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", u2 = t2[3] ? t2[3].substring(1, t2[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t2[3];
      return { type: "def", tag: n2, raw: t2[0], href: r2, title: u2 };
    }
  } }, { key: "table", value: function(e11) {
    var t2, n2 = this, r2 = this.rules.block.table.exec(e11);
    if (r2 && this.rules.other.tableDelimiter.test(r2[2])) {
      var u2 = om(r2[1]), a2 = r2[2].replace(this.rules.other.tableAlignChars, "").split("|"), i2 = null !== (t2 = r2[3]) && void 0 !== t2 && t2.trim() ? r2[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [], o2 = { type: "table", raw: r2[0], header: [], align: [], rows: [] };
      if (u2.length === a2.length) {
        var s2, c2 = fn(a2);
        try {
          for (c2.s(); !(s2 = c2.n()).done; ) {
            var l2 = s2.value;
            this.rules.other.tableAlignRight.test(l2) ? o2.align.push("right") : this.rules.other.tableAlignCenter.test(l2) ? o2.align.push("center") : this.rules.other.tableAlignLeft.test(l2) ? o2.align.push("left") : o2.align.push(null);
          }
        } catch (e12) {
          c2.e(e12);
        } finally {
          c2.f();
        }
        for (var f2 = 0; f2 < u2.length; f2++) o2.header.push({ text: u2[f2], tokens: this.lexer.inline(u2[f2]), header: true, align: o2.align[f2] });
        var d2, p2 = fn(i2);
        try {
          for (p2.s(); !(d2 = p2.n()).done; ) {
            var h2 = d2.value;
            o2.rows.push(om(h2, o2.header.length).map(function(e12, t3) {
              return { text: e12, tokens: n2.lexer.inline(e12), header: false, align: o2.align[t3] };
            }));
          }
        } catch (e12) {
          p2.e(e12);
        } finally {
          p2.f();
        }
        return o2;
      }
    }
  } }, { key: "lheading", value: function(e11) {
    var t2 = this.rules.block.lheading.exec(e11);
    if (t2) return { type: "heading", raw: t2[0], depth: "=" === t2[2].charAt(0) ? 1 : 2, text: t2[1], tokens: this.lexer.inline(t2[1]) };
  } }, { key: "paragraph", value: function(e11) {
    var t2 = this.rules.block.paragraph.exec(e11);
    if (t2) {
      var n2 = "\n" === t2[1].charAt(t2[1].length - 1) ? t2[1].slice(0, -1) : t2[1];
      return { type: "paragraph", raw: t2[0], text: n2, tokens: this.lexer.inline(n2) };
    }
  } }, { key: "text", value: function(e11) {
    var t2 = this.rules.block.text.exec(e11);
    if (t2) return { type: "text", raw: t2[0], text: t2[0], tokens: this.lexer.inline(t2[0]) };
  } }, { key: "escape", value: function(e11) {
    var t2 = this.rules.inline.escape.exec(e11);
    if (t2) return { type: "escape", raw: t2[0], text: t2[1] };
  } }, { key: "tag", value: function(e11) {
    var t2 = this.rules.inline.tag.exec(e11);
    if (t2) return !this.lexer.state.inLink && this.rules.other.startATag.test(t2[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(t2[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t2[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t2[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: t2[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: t2[0] };
  } }, { key: "link", value: function(e11) {
    var t2 = this.rules.inline.link.exec(e11);
    if (t2) {
      var n2 = t2[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n2)) {
        if (!this.rules.other.endAngleBracket.test(n2)) return;
        var r2 = sm(n2.slice(0, -1), "\\");
        if ((n2.length - r2.length) % 2 == 0) return;
      } else {
        var u2 = (function(e12, t3) {
          if (-1 === e12.indexOf(t3[1])) return -1;
          for (var n3 = 0, r3 = 0; r3 < e12.length; r3++) if ("\\" === e12[r3]) r3++;
          else if (e12[r3] === t3[0]) n3++;
          else if (e12[r3] === t3[1] && --n3 < 0) return r3;
          return n3 > 0 ? -2 : -1;
        })(t2[2], "()");
        if (-2 === u2) return;
        if (u2 > -1) {
          var a2 = (0 === t2[0].indexOf("!") ? 5 : 4) + t2[1].length + u2;
          t2[2] = t2[2].substring(0, u2), t2[0] = t2[0].substring(0, a2).trim(), t2[3] = "";
        }
      }
      var i2 = t2[2], o2 = "";
      if (this.options.pedantic) {
        var s2 = this.rules.other.pedanticHrefTitle.exec(i2);
        s2 && (i2 = s2[1], o2 = s2[3]);
      } else o2 = t2[3] ? t2[3].slice(1, -1) : "";
      return i2 = i2.trim(), this.rules.other.startAngleBracket.test(i2) && (i2 = this.options.pedantic && !this.rules.other.endAngleBracket.test(n2) ? i2.slice(1) : i2.slice(1, -1)), cm(t2, { href: i2 && i2.replace(this.rules.inline.anyPunctuation, "$1"), title: o2 && o2.replace(this.rules.inline.anyPunctuation, "$1") }, t2[0], this.lexer, this.rules);
    }
  } }, { key: "reflink", value: function(e11, t2) {
    var n2;
    if ((n2 = this.rules.inline.reflink.exec(e11)) || (n2 = this.rules.inline.nolink.exec(e11))) {
      var r2 = t2[(n2[2] || n2[1]).replace(this.rules.other.multipleSpaceGlobal, " ").toLowerCase()];
      if (!r2) {
        var u2 = n2[0].charAt(0);
        return { type: "text", raw: u2, text: u2 };
      }
      return cm(n2, r2, n2[0], this.lexer, this.rules);
    }
  } }, { key: "emStrong", value: function(e11, t2) {
    var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", r2 = this.rules.inline.emStrongLDelim.exec(e11);
    if (!(!r2 || r2[3] && n2.match(this.rules.other.unicodeAlphaNumeric)) && (!r2[1] && !r2[2] || !n2 || this.rules.inline.punctuation.exec(n2))) {
      var u2, a2, i2 = Cn(r2[0]).length - 1, o2 = i2, s2 = 0, c2 = "*" === r2[0][0] ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (c2.lastIndex = 0, t2 = t2.slice(-1 * e11.length + i2); null != (r2 = c2.exec(t2)); ) if (u2 = r2[1] || r2[2] || r2[3] || r2[4] || r2[5] || r2[6]) if (a2 = Cn(u2).length, r2[3] || r2[4]) o2 += a2;
      else if (!((r2[5] || r2[6]) && i2 % 3) || (i2 + a2) % 3) {
        if (!((o2 -= a2) > 0)) {
          a2 = Math.min(a2, a2 + o2 + s2);
          var l2 = Cn(r2[0])[0].length, f2 = e11.slice(0, i2 + r2.index + l2 + a2);
          if (Math.min(i2, a2) % 2) {
            var d2 = f2.slice(1, -1);
            return { type: "em", raw: f2, text: d2, tokens: this.lexer.inlineTokens(d2) };
          }
          var p2 = f2.slice(2, -2);
          return { type: "strong", raw: f2, text: p2, tokens: this.lexer.inlineTokens(p2) };
        }
      } else s2 += a2;
    }
  } }, { key: "codespan", value: function(e11) {
    var t2 = this.rules.inline.code.exec(e11);
    if (t2) {
      var n2 = t2[2].replace(this.rules.other.newLineCharGlobal, " "), r2 = this.rules.other.nonSpaceChar.test(n2), u2 = this.rules.other.startingSpaceChar.test(n2) && this.rules.other.endingSpaceChar.test(n2);
      return r2 && u2 && (n2 = n2.substring(1, n2.length - 1)), { type: "codespan", raw: t2[0], text: n2 };
    }
  } }, { key: "br", value: function(e11) {
    var t2 = this.rules.inline.br.exec(e11);
    if (t2) return { type: "br", raw: t2[0] };
  } }, { key: "del", value: function(e11) {
    var t2 = this.rules.inline.del.exec(e11);
    if (t2) return { type: "del", raw: t2[0], text: t2[2], tokens: this.lexer.inlineTokens(t2[2]) };
  } }, { key: "autolink", value: function(e11) {
    var t2, n2, r2 = this.rules.inline.autolink.exec(e11);
    if (r2) return n2 = "@" === r2[2] ? "mailto:" + (t2 = r2[1]) : t2 = r2[1], { type: "link", raw: r2[0], text: t2, href: n2, tokens: [{ type: "text", raw: t2, text: t2 }] };
  } }, { key: "url", value: function(e11) {
    var t2;
    if (t2 = this.rules.inline.url.exec(e11)) {
      var n2, r2;
      if ("@" === t2[2]) r2 = "mailto:" + (n2 = t2[0]);
      else {
        var u2;
        do {
          var a2, i2;
          u2 = t2[0], t2[0] = null !== (a2 = null === (i2 = this.rules.inline._backpedal.exec(t2[0])) || void 0 === i2 ? void 0 : i2[0]) && void 0 !== a2 ? a2 : "";
        } while (u2 !== t2[0]);
        n2 = t2[0], r2 = "www." === t2[1] ? "http://" + t2[0] : t2[0];
      }
      return { type: "link", raw: t2[0], text: n2, href: r2, tokens: [{ type: "text", raw: n2, text: n2 }] };
    }
  } }, { key: "inlineText", value: function(e11) {
    var t2 = this.rules.inline.text.exec(e11);
    if (t2) {
      var n2 = this.lexer.state.inRawBlock;
      return { type: "text", raw: t2[0], text: t2[0], escaped: n2 };
    }
  } }]);
  var fm = (function() {
    function e11(t2) {
      on(this, e11), dn(this, "tokens", void 0), dn(this, "options", void 0), dn(this, "state", void 0), dn(this, "tokenizer", void 0), dn(this, "inlineQueue", void 0), this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t2 || sv, this.options.tokenizer = this.options.tokenizer || new lm(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
      var n2 = { other: dv, block: tm.normal, inline: nm.normal };
      this.options.pedantic ? (n2.block = tm.pedantic, n2.inline = nm.pedantic) : this.options.gfm && (n2.block = tm.gfm, this.options.breaks ? n2.inline = nm.breaks : n2.inline = nm.gfm), this.tokenizer.rules = n2;
    }
    return ln(e11, [{ key: "lex", value: function(e12) {
      e12 = e12.replace(dv.carriageReturn, "\n"), this.blockTokens(e12, this.tokens);
      for (var t2 = 0; t2 < this.inlineQueue.length; t2++) {
        var n2 = this.inlineQueue[t2];
        this.inlineTokens(n2.src, n2.tokens);
      }
      return this.inlineQueue = [], this.tokens;
    } }, { key: "blockTokens", value: function(e12) {
      var t2, n2 = this, r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], u2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], a2 = function() {
        var t3, a3, i2;
        if (null !== (t3 = n2.options.extensions) && void 0 !== t3 && null !== (t3 = t3.block) && void 0 !== t3 && t3.some(function(t4) {
          return !!(i2 = t4.call({ lexer: n2 }, e12, r2)) && (e12 = e12.substring(i2.raw.length), r2.push(i2), true);
        })) return 0;
        if (i2 = n2.tokenizer.space(e12)) {
          e12 = e12.substring(i2.raw.length);
          var o2 = r2.at(-1);
          return 1 === i2.raw.length && void 0 !== o2 ? o2.raw += "\n" : r2.push(i2), 0;
        }
        if (i2 = n2.tokenizer.code(e12)) {
          e12 = e12.substring(i2.raw.length);
          var s2 = r2.at(-1);
          return "paragraph" === (null == s2 ? void 0 : s2.type) || "text" === (null == s2 ? void 0 : s2.type) ? (s2.raw += (s2.raw.endsWith("\n") ? "" : "\n") + i2.raw, s2.text += "\n" + i2.text, n2.inlineQueue.at(-1).src = s2.text) : r2.push(i2), 0;
        }
        if (i2 = n2.tokenizer.fences(e12)) return e12 = e12.substring(i2.raw.length), r2.push(i2), 0;
        if (i2 = n2.tokenizer.heading(e12)) return e12 = e12.substring(i2.raw.length), r2.push(i2), 0;
        if (i2 = n2.tokenizer.hr(e12)) return e12 = e12.substring(i2.raw.length), r2.push(i2), 0;
        if (i2 = n2.tokenizer.blockquote(e12)) return e12 = e12.substring(i2.raw.length), r2.push(i2), 0;
        if (i2 = n2.tokenizer.list(e12)) return e12 = e12.substring(i2.raw.length), r2.push(i2), 0;
        if (i2 = n2.tokenizer.html(e12)) return e12 = e12.substring(i2.raw.length), r2.push(i2), 0;
        if (i2 = n2.tokenizer.def(e12)) {
          e12 = e12.substring(i2.raw.length);
          var c2 = r2.at(-1);
          return "paragraph" === (null == c2 ? void 0 : c2.type) || "text" === (null == c2 ? void 0 : c2.type) ? (c2.raw += (c2.raw.endsWith("\n") ? "" : "\n") + i2.raw, c2.text += "\n" + i2.raw, n2.inlineQueue.at(-1).src = c2.text) : n2.tokens.links[i2.tag] || (n2.tokens.links[i2.tag] = { href: i2.href, title: i2.title }, r2.push(i2)), 0;
        }
        if (i2 = n2.tokenizer.table(e12)) return e12 = e12.substring(i2.raw.length), r2.push(i2), 0;
        if (i2 = n2.tokenizer.lheading(e12)) return e12 = e12.substring(i2.raw.length), r2.push(i2), 0;
        var l2 = e12;
        if (null !== (a3 = n2.options.extensions) && void 0 !== a3 && a3.startBlock) {
          var f2, d2 = 1 / 0, p2 = e12.slice(1);
          n2.options.extensions.startBlock.forEach(function(e13) {
            "number" == typeof (f2 = e13.call({ lexer: n2 }, p2)) && f2 >= 0 && (d2 = Math.min(d2, f2));
          }), d2 < 1 / 0 && d2 >= 0 && (l2 = e12.substring(0, d2 + 1));
        }
        if (n2.state.top && (i2 = n2.tokenizer.paragraph(l2))) {
          var h2 = r2.at(-1);
          return u2 && "paragraph" === (null == h2 ? void 0 : h2.type) ? (h2.raw += (h2.raw.endsWith("\n") ? "" : "\n") + i2.raw, h2.text += "\n" + i2.text, n2.inlineQueue.pop(), n2.inlineQueue.at(-1).src = h2.text) : r2.push(i2), u2 = l2.length !== e12.length, e12 = e12.substring(i2.raw.length), 0;
        }
        if (i2 = n2.tokenizer.text(e12)) {
          e12 = e12.substring(i2.raw.length);
          var v2 = r2.at(-1);
          return "text" === (null == v2 ? void 0 : v2.type) ? (v2.raw += (v2.raw.endsWith("\n") ? "" : "\n") + i2.raw, v2.text += "\n" + i2.text, n2.inlineQueue.pop(), n2.inlineQueue.at(-1).src = v2.text) : r2.push(i2), 0;
        }
        if (e12) {
          var m2 = "Infinite loop on byte: " + e12.charCodeAt(0);
          if (n2.options.silent) return console.error(m2), 1;
          throw new Error(m2);
        }
      };
      for (this.options.pedantic && (e12 = e12.replace(dv.tabCharGlobal, "    ").replace(dv.spaceLine, "")); e12 && (0 === (t2 = a2()) || 1 !== t2); ) ;
      return this.state.top = true, r2;
    } }, { key: "inline", value: function(e12) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      return this.inlineQueue.push({ src: e12, tokens: t2 }), t2;
    } }, { key: "inlineTokens", value: function(e12) {
      var t2, n2, r2 = this, u2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], a2 = e12, i2 = null;
      if (this.tokens.links) {
        var o2 = Object.keys(this.tokens.links);
        if (o2.length > 0) for (; null != (i2 = this.tokenizer.rules.inline.reflinkSearch.exec(a2)); ) o2.includes(i2[0].slice(i2[0].lastIndexOf("[") + 1, -1)) && (a2 = a2.slice(0, i2.index) + "[" + "a".repeat(i2[0].length - 2) + "]" + a2.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
      }
      for (; null != (i2 = this.tokenizer.rules.inline.anyPunctuation.exec(a2)); ) a2 = a2.slice(0, i2.index) + "++" + a2.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
      for (; null != (i2 = this.tokenizer.rules.inline.blockSkip.exec(a2)); ) a2 = a2.slice(0, i2.index) + "[" + "a".repeat(i2[0].length - 2) + "]" + a2.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      a2 = null !== (t2 = null === (n2 = this.options.hooks) || void 0 === n2 || null === (n2 = n2.emStrongMask) || void 0 === n2 ? void 0 : n2.call({ lexer: this }, a2)) && void 0 !== t2 ? t2 : a2;
      for (var s2, c2 = false, l2 = "", f2 = function() {
        var t3, n3, i3;
        if (c2 || (l2 = ""), c2 = false, null !== (t3 = r2.options.extensions) && void 0 !== t3 && null !== (t3 = t3.inline) && void 0 !== t3 && t3.some(function(t4) {
          return !!(i3 = t4.call({ lexer: r2 }, e12, u2)) && (e12 = e12.substring(i3.raw.length), u2.push(i3), true);
        })) return 0;
        if (i3 = r2.tokenizer.escape(e12)) return e12 = e12.substring(i3.raw.length), u2.push(i3), 0;
        if (i3 = r2.tokenizer.tag(e12)) return e12 = e12.substring(i3.raw.length), u2.push(i3), 0;
        if (i3 = r2.tokenizer.link(e12)) return e12 = e12.substring(i3.raw.length), u2.push(i3), 0;
        if (i3 = r2.tokenizer.reflink(e12, r2.tokens.links)) {
          e12 = e12.substring(i3.raw.length);
          var o3 = u2.at(-1);
          return "text" === i3.type && "text" === (null == o3 ? void 0 : o3.type) ? (o3.raw += i3.raw, o3.text += i3.text) : u2.push(i3), 0;
        }
        if (i3 = r2.tokenizer.emStrong(e12, a2, l2)) return e12 = e12.substring(i3.raw.length), u2.push(i3), 0;
        if (i3 = r2.tokenizer.codespan(e12)) return e12 = e12.substring(i3.raw.length), u2.push(i3), 0;
        if (i3 = r2.tokenizer.br(e12)) return e12 = e12.substring(i3.raw.length), u2.push(i3), 0;
        if (i3 = r2.tokenizer.del(e12)) return e12 = e12.substring(i3.raw.length), u2.push(i3), 0;
        if (i3 = r2.tokenizer.autolink(e12)) return e12 = e12.substring(i3.raw.length), u2.push(i3), 0;
        if (!r2.state.inLink && (i3 = r2.tokenizer.url(e12))) return e12 = e12.substring(i3.raw.length), u2.push(i3), 0;
        var s3 = e12;
        if (null !== (n3 = r2.options.extensions) && void 0 !== n3 && n3.startInline) {
          var f3, d2 = 1 / 0, p2 = e12.slice(1);
          r2.options.extensions.startInline.forEach(function(e13) {
            "number" == typeof (f3 = e13.call({ lexer: r2 }, p2)) && f3 >= 0 && (d2 = Math.min(d2, f3));
          }), d2 < 1 / 0 && d2 >= 0 && (s3 = e12.substring(0, d2 + 1));
        }
        if (i3 = r2.tokenizer.inlineText(s3)) {
          e12 = e12.substring(i3.raw.length), "_" !== i3.raw.slice(-1) && (l2 = i3.raw.slice(-1)), c2 = true;
          var h2 = u2.at(-1);
          return "text" === (null == h2 ? void 0 : h2.type) ? (h2.raw += i3.raw, h2.text += i3.text) : u2.push(i3), 0;
        }
        if (e12) {
          var v2 = "Infinite loop on byte: " + e12.charCodeAt(0);
          if (r2.options.silent) return console.error(v2), 1;
          throw new Error(v2);
        }
      }; e12 && (0 === (s2 = f2()) || 1 !== s2); ) ;
      return u2;
    } }], [{ key: "rules", get: function() {
      return { block: tm, inline: nm };
    } }, { key: "lex", value: function(t2, n2) {
      return new e11(n2).lex(t2);
    } }, { key: "lexInline", value: function(t2, n2) {
      return new e11(n2).inlineTokens(t2);
    } }]);
  })();
  var dm = ln(function e7(t2) {
    on(this, e7), dn(this, "options", void 0), dn(this, "parser", void 0), this.options = t2 || sv;
  }, [{ key: "space", value: function(e11) {
    return "";
  } }, { key: "code", value: function(e11) {
    var t2, n2 = e11.text, r2 = e11.lang, u2 = e11.escaped, a2 = null === (t2 = (r2 || "").match(dv.notSpaceStart)) || void 0 === t2 ? void 0 : t2[0], i2 = n2.replace(dv.endingNewline, "") + "\n";
    return a2 ? '<pre><code class="language-' + am(a2) + '">' + (u2 ? i2 : am(i2, true)) + "</code></pre>\n" : "<pre><code>" + (u2 ? i2 : am(i2, true)) + "</code></pre>\n";
  } }, { key: "blockquote", value: function(e11) {
    var t2 = e11.tokens;
    return "<blockquote>\n".concat(this.parser.parse(t2), "</blockquote>\n");
  } }, { key: "html", value: function(e11) {
    return e11.text;
  } }, { key: "def", value: function(e11) {
    return "";
  } }, { key: "heading", value: function(e11) {
    var t2 = e11.tokens, n2 = e11.depth;
    return "<h".concat(n2, ">").concat(this.parser.parseInline(t2), "</h").concat(n2, ">\n");
  } }, { key: "hr", value: function(e11) {
    return "<hr>\n";
  } }, { key: "list", value: function(e11) {
    for (var t2 = e11.ordered, n2 = e11.start, r2 = "", u2 = 0; u2 < e11.items.length; u2++) {
      var a2 = e11.items[u2];
      r2 += this.listitem(a2);
    }
    var i2 = t2 ? "ol" : "ul";
    return "<" + i2 + (t2 && 1 !== n2 ? ' start="' + n2 + '"' : "") + ">\n" + r2 + "</" + i2 + ">\n";
  } }, { key: "listitem", value: function(e11) {
    var t2 = "";
    if (e11.task) {
      var n2, r2 = this.checkbox({ checked: !!e11.checked });
      e11.loose ? "paragraph" === (null === (n2 = e11.tokens[0]) || void 0 === n2 ? void 0 : n2.type) ? (e11.tokens[0].text = r2 + " " + e11.tokens[0].text, e11.tokens[0].tokens && e11.tokens[0].tokens.length > 0 && "text" === e11.tokens[0].tokens[0].type && (e11.tokens[0].tokens[0].text = r2 + " " + am(e11.tokens[0].tokens[0].text), e11.tokens[0].tokens[0].escaped = true)) : e11.tokens.unshift({ type: "text", raw: r2 + " ", text: r2 + " ", escaped: true }) : t2 += r2 + " ";
    }
    return t2 += this.parser.parse(e11.tokens, !!e11.loose), "<li>".concat(t2, "</li>\n");
  } }, { key: "checkbox", value: function(e11) {
    return "<input " + (e11.checked ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  } }, { key: "paragraph", value: function(e11) {
    var t2 = e11.tokens;
    return "<p>".concat(this.parser.parseInline(t2), "</p>\n");
  } }, { key: "table", value: function(e11) {
    for (var t2 = "", n2 = "", r2 = 0; r2 < e11.header.length; r2++) n2 += this.tablecell(e11.header[r2]);
    t2 += this.tablerow({ text: n2 });
    for (var u2 = "", a2 = 0; a2 < e11.rows.length; a2++) {
      var i2 = e11.rows[a2];
      n2 = "";
      for (var o2 = 0; o2 < i2.length; o2++) n2 += this.tablecell(i2[o2]);
      u2 += this.tablerow({ text: n2 });
    }
    return u2 && (u2 = "<tbody>".concat(u2, "</tbody>")), "<table>\n<thead>\n" + t2 + "</thead>\n" + u2 + "</table>\n";
  } }, { key: "tablerow", value: function(e11) {
    var t2 = e11.text;
    return "<tr>\n".concat(t2, "</tr>\n");
  } }, { key: "tablecell", value: function(e11) {
    var t2 = this.parser.parseInline(e11.tokens), n2 = e11.header ? "th" : "td";
    return (e11.align ? "<".concat(n2, ' align="').concat(e11.align, '">') : "<".concat(n2, ">")) + t2 + "</".concat(n2, ">\n");
  } }, { key: "strong", value: function(e11) {
    var t2 = e11.tokens;
    return "<strong>".concat(this.parser.parseInline(t2), "</strong>");
  } }, { key: "em", value: function(e11) {
    var t2 = e11.tokens;
    return "<em>".concat(this.parser.parseInline(t2), "</em>");
  } }, { key: "codespan", value: function(e11) {
    var t2 = e11.text;
    return "<code>".concat(am(t2, true), "</code>");
  } }, { key: "br", value: function(e11) {
    return "<br>";
  } }, { key: "del", value: function(e11) {
    var t2 = e11.tokens;
    return "<del>".concat(this.parser.parseInline(t2), "</del>");
  } }, { key: "link", value: function(e11) {
    var t2 = e11.href, n2 = e11.title, r2 = e11.tokens, u2 = this.parser.parseInline(r2), a2 = im(t2);
    if (null === a2) return u2;
    var i2 = '<a href="' + (t2 = a2) + '"';
    return n2 && (i2 += ' title="' + am(n2) + '"'), i2 + ">" + u2 + "</a>";
  } }, { key: "image", value: function(e11) {
    var t2 = e11.href, n2 = e11.title, r2 = e11.text, u2 = e11.tokens;
    u2 && (r2 = this.parser.parseInline(u2, this.parser.textRenderer));
    var a2 = im(t2);
    if (null === a2) return am(r2);
    var i2 = '<img src="'.concat(t2 = a2, '" alt="').concat(r2, '"');
    return n2 && (i2 += ' title="'.concat(am(n2), '"')), i2 + ">";
  } }, { key: "text", value: function(e11) {
    return "tokens" in e11 && e11.tokens ? this.parser.parseInline(e11.tokens) : "escaped" in e11 && e11.escaped ? e11.text : am(e11.text);
  } }]);
  var pm = ln(function e8() {
    on(this, e8);
  }, [{ key: "strong", value: function(e11) {
    return e11.text;
  } }, { key: "em", value: function(e11) {
    return e11.text;
  } }, { key: "codespan", value: function(e11) {
    return e11.text;
  } }, { key: "del", value: function(e11) {
    return e11.text;
  } }, { key: "html", value: function(e11) {
    return e11.text;
  } }, { key: "text", value: function(e11) {
    return e11.text;
  } }, { key: "link", value: function(e11) {
    return "" + e11.text;
  } }, { key: "image", value: function(e11) {
    return "" + e11.text;
  } }, { key: "br", value: function() {
    return "";
  } }]);
  var hm = (function() {
    function e11(t2) {
      on(this, e11), dn(this, "options", void 0), dn(this, "renderer", void 0), dn(this, "textRenderer", void 0), this.options = t2 || sv, this.options.renderer = this.options.renderer || new dm(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new pm();
    }
    return ln(e11, [{ key: "parse", value: function(e12) {
      for (var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n2 = "", r2 = 0; r2 < e12.length; r2++) {
        var u2, a2 = e12[r2];
        if (null !== (u2 = this.options.extensions) && void 0 !== u2 && null !== (u2 = u2.renderers) && void 0 !== u2 && u2[a2.type]) {
          var i2 = a2, o2 = this.options.extensions.renderers[i2.type].call({ parser: this }, i2);
          if (false !== o2 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(i2.type)) {
            n2 += o2 || "";
            continue;
          }
        }
        var s2 = a2;
        switch (s2.type) {
          case "space":
            n2 += this.renderer.space(s2);
            continue;
          case "hr":
            n2 += this.renderer.hr(s2);
            continue;
          case "heading":
            n2 += this.renderer.heading(s2);
            continue;
          case "code":
            n2 += this.renderer.code(s2);
            continue;
          case "table":
            n2 += this.renderer.table(s2);
            continue;
          case "blockquote":
            n2 += this.renderer.blockquote(s2);
            continue;
          case "list":
            n2 += this.renderer.list(s2);
            continue;
          case "html":
            n2 += this.renderer.html(s2);
            continue;
          case "def":
            n2 += this.renderer.def(s2);
            continue;
          case "paragraph":
            n2 += this.renderer.paragraph(s2);
            continue;
          case "text":
            for (var c2 = s2, l2 = this.renderer.text(c2); r2 + 1 < e12.length && "text" === e12[r2 + 1].type; ) c2 = e12[++r2], l2 += "\n" + this.renderer.text(c2);
            n2 += t2 ? this.renderer.paragraph({ type: "paragraph", raw: l2, text: l2, tokens: [{ type: "text", raw: l2, text: l2, escaped: true }] }) : l2;
            continue;
          default:
            var f2 = 'Token with "' + s2.type + '" type was not found.';
            if (this.options.silent) return console.error(f2), "";
            throw new Error(f2);
        }
      }
      return n2;
    } }, { key: "parseInline", value: function(e12) {
      for (var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.renderer, n2 = "", r2 = 0; r2 < e12.length; r2++) {
        var u2, a2 = e12[r2];
        if (null !== (u2 = this.options.extensions) && void 0 !== u2 && null !== (u2 = u2.renderers) && void 0 !== u2 && u2[a2.type]) {
          var i2 = this.options.extensions.renderers[a2.type].call({ parser: this }, a2);
          if (false !== i2 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(a2.type)) {
            n2 += i2 || "";
            continue;
          }
        }
        var o2 = a2;
        switch (o2.type) {
          case "escape":
          case "text":
            n2 += t2.text(o2);
            break;
          case "html":
            n2 += t2.html(o2);
            break;
          case "link":
            n2 += t2.link(o2);
            break;
          case "image":
            n2 += t2.image(o2);
            break;
          case "strong":
            n2 += t2.strong(o2);
            break;
          case "em":
            n2 += t2.em(o2);
            break;
          case "codespan":
            n2 += t2.codespan(o2);
            break;
          case "br":
            n2 += t2.br(o2);
            break;
          case "del":
            n2 += t2.del(o2);
            break;
          default:
            var s2 = 'Token with "' + o2.type + '" type was not found.';
            if (this.options.silent) return console.error(s2), "";
            throw new Error(s2);
        }
      }
      return n2;
    } }], [{ key: "parse", value: function(t2, n2) {
      return new e11(n2).parse(t2);
    } }, { key: "parseInline", value: function(t2, n2) {
      return new e11(n2).parseInline(t2);
    } }]);
  })();
  var vm = (av = ln(function e9(t2) {
    on(this, e9), dn(this, "options", void 0), dn(this, "block", void 0), this.options = t2 || sv;
  }, [{ key: "preprocess", value: function(e11) {
    return e11;
  } }, { key: "postprocess", value: function(e11) {
    return e11;
  } }, { key: "processAllTokens", value: function(e11) {
    return e11;
  } }, { key: "emStrongMask", value: function(e11) {
    return e11;
  } }, { key: "provideLexer", value: function() {
    return this.block ? fm.lex : fm.lexInline;
  } }, { key: "provideParser", value: function() {
    return this.block ? hm.parse : hm.parseInline;
  } }]), dn(av, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), dn(av, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), av);
  var mm = ln(function e10() {
    on(this, e10), dn(this, "defaults", { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null }), dn(this, "options", this.setOptions), dn(this, "parse", this.parseMarkdown(true)), dn(this, "parseInline", this.parseMarkdown(false)), dn(this, "Parser", hm), dn(this, "Renderer", dm), dn(this, "TextRenderer", pm), dn(this, "Lexer", fm), dn(this, "Tokenizer", lm), dn(this, "Hooks", vm), this.use.apply(this, arguments);
  }, [{ key: "walkTokens", value: function(e11, t2) {
    var n2, r2 = this, u2 = [], a2 = fn(e11);
    try {
      var i2 = function() {
        var e12 = n2.value;
        switch (u2 = u2.concat(t2.call(r2, e12)), e12.type) {
          case "table":
            var a3, i3 = e12, o2 = fn(i3.header);
            try {
              for (o2.s(); !(a3 = o2.n()).done; ) {
                var s2 = a3.value;
                u2 = u2.concat(r2.walkTokens(s2.tokens, t2));
              }
            } catch (e13) {
              o2.e(e13);
            } finally {
              o2.f();
            }
            var c2, l2 = fn(i3.rows);
            try {
              for (l2.s(); !(c2 = l2.n()).done; ) {
                var f2, d2 = fn(c2.value);
                try {
                  for (d2.s(); !(f2 = d2.n()).done; ) {
                    var p2 = f2.value;
                    u2 = u2.concat(r2.walkTokens(p2.tokens, t2));
                  }
                } catch (e13) {
                  d2.e(e13);
                } finally {
                  d2.f();
                }
              }
            } catch (e13) {
              l2.e(e13);
            } finally {
              l2.f();
            }
            break;
          case "list":
            var h2 = e12;
            u2 = u2.concat(r2.walkTokens(h2.items, t2));
            break;
          default:
            var v2, m2 = e12;
            null !== (v2 = r2.defaults.extensions) && void 0 !== v2 && null !== (v2 = v2.childTokens) && void 0 !== v2 && v2[m2.type] ? r2.defaults.extensions.childTokens[m2.type].forEach(function(e13) {
              var n3 = m2[e13].flat(1 / 0);
              u2 = u2.concat(r2.walkTokens(n3, t2));
            }) : m2.tokens && (u2 = u2.concat(r2.walkTokens(m2.tokens, t2)));
        }
      };
      for (a2.s(); !(n2 = a2.n()).done; ) i2();
    } catch (e12) {
      a2.e(e12);
    } finally {
      a2.f();
    }
    return u2;
  } }, { key: "use", value: function() {
    for (var e11 = this, t2 = this.defaults.extensions || { renderers: {}, childTokens: {} }, n2 = arguments.length, r2 = new Array(n2), u2 = 0; u2 < n2; u2++) r2[u2] = arguments[u2];
    return r2.forEach(function(n3) {
      var r3 = yn({}, n3);
      if (r3.async = e11.defaults.async || r3.async || false, n3.extensions && (n3.extensions.forEach(function(e12) {
        if (!e12.name) throw new Error("extension name required");
        if ("renderer" in e12) {
          var n4 = t2.renderers[e12.name];
          t2.renderers[e12.name] = n4 ? function() {
            for (var t3 = arguments.length, r5 = new Array(t3), u4 = 0; u4 < t3; u4++) r5[u4] = arguments[u4];
            var a3 = e12.renderer.apply(this, r5);
            return false === a3 && (a3 = n4.apply(this, r5)), a3;
          } : e12.renderer;
        }
        if ("tokenizer" in e12) {
          if (!e12.level || "block" !== e12.level && "inline" !== e12.level) throw new Error("extension level must be 'block' or 'inline'");
          var r4 = t2[e12.level];
          r4 ? r4.unshift(e12.tokenizer) : t2[e12.level] = [e12.tokenizer], e12.start && ("block" === e12.level ? t2.startBlock ? t2.startBlock.push(e12.start) : t2.startBlock = [e12.start] : "inline" === e12.level && (t2.startInline ? t2.startInline.push(e12.start) : t2.startInline = [e12.start]));
        }
        "childTokens" in e12 && e12.childTokens && (t2.childTokens[e12.name] = e12.childTokens);
      }), r3.extensions = t2), n3.renderer) {
        var u3 = e11.defaults.renderer || new dm(e11.defaults), a2 = function() {
          if (!(i2 in u3)) throw new Error("renderer '".concat(i2, "' does not exist"));
          if (["options", "parser"].includes(i2)) return 1;
          var e12 = i2, t3 = n3.renderer[e12], r4 = u3[e12];
          u3[e12] = function() {
            for (var e13 = arguments.length, n4 = new Array(e13), a3 = 0; a3 < e13; a3++) n4[a3] = arguments[a3];
            var i3 = t3.apply(u3, n4);
            return false === i3 && (i3 = r4.apply(u3, n4)), i3 || "";
          };
        };
        for (var i2 in n3.renderer) a2();
        r3.renderer = u3;
      }
      if (n3.tokenizer) {
        var o2 = e11.defaults.tokenizer || new lm(e11.defaults), s2 = function() {
          if (!(c2 in o2)) throw new Error("tokenizer '".concat(c2, "' does not exist"));
          if (["options", "rules", "lexer"].includes(c2)) return 1;
          var e12 = c2, t3 = n3.tokenizer[e12], r4 = o2[e12];
          o2[e12] = function() {
            for (var e13 = arguments.length, n4 = new Array(e13), u4 = 0; u4 < e13; u4++) n4[u4] = arguments[u4];
            var a3 = t3.apply(o2, n4);
            return false === a3 && (a3 = r4.apply(o2, n4)), a3;
          };
        };
        for (var c2 in n3.tokenizer) s2();
        r3.tokenizer = o2;
      }
      if (n3.hooks) {
        var l2 = e11.defaults.hooks || new vm(), f2 = function(t3) {
          if (!(t3 in l2)) throw new Error("hook '".concat(t3, "' does not exist"));
          if (["options", "block"].includes(t3)) return 1;
          var r4 = t3, u4 = n3.hooks[r4], a3 = l2[r4];
          vm.passThroughHooks.has(t3) ? l2[r4] = function(n4) {
            if (e11.defaults.async && vm.passThroughHooksRespectAsync.has(t3)) return Promise.resolve(u4.call(l2, n4)).then(function(e12) {
              return a3.call(l2, e12);
            });
            var r5 = u4.call(l2, n4);
            return a3.call(l2, r5);
          } : l2[r4] = function() {
            for (var e12 = arguments.length, t4 = new Array(e12), n4 = 0; n4 < e12; n4++) t4[n4] = arguments[n4];
            var r5 = u4.apply(l2, t4);
            return false === r5 && (r5 = a3.apply(l2, t4)), r5;
          };
        };
        for (var d2 in n3.hooks) f2(d2);
        r3.hooks = l2;
      }
      if (n3.walkTokens) {
        var p2 = e11.defaults.walkTokens, h2 = n3.walkTokens;
        r3.walkTokens = function(e12) {
          var t3 = [];
          return t3.push(h2.call(this, e12)), p2 && (t3 = t3.concat(p2.call(this, e12))), t3;
        };
      }
      e11.defaults = yn(yn({}, e11.defaults), r3);
    }), this;
  } }, { key: "setOptions", value: function(e11) {
    return this.defaults = yn(yn({}, this.defaults), e11), this;
  } }, { key: "lexer", value: function(e11, t2) {
    return fm.lex(e11, null != t2 ? t2 : this.defaults);
  } }, { key: "parser", value: function(e11, t2) {
    return hm.parse(e11, null != t2 ? t2 : this.defaults);
  } }, { key: "parseMarkdown", value: function(e11) {
    var t2 = this;
    return function(n2, r2) {
      var u2 = yn({}, r2), a2 = yn(yn({}, t2.defaults), u2), i2 = t2.onError(!!a2.silent, !!a2.async);
      if (true === t2.defaults.async && false === u2.async) return i2(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (An(n2) > "u" || null === n2) return i2(new Error("marked(): input parameter is undefined or null"));
      if ("string" != typeof n2) return i2(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n2) + ", string expected"));
      a2.hooks && (a2.hooks.options = a2, a2.hooks.block = e11);
      var o2 = a2.hooks ? a2.hooks.provideLexer() : e11 ? fm.lex : fm.lexInline, s2 = a2.hooks ? a2.hooks.provideParser() : e11 ? hm.parse : hm.parseInline;
      if (a2.async) return Promise.resolve(a2.hooks ? a2.hooks.preprocess(n2) : n2).then(function(e12) {
        return o2(e12, a2);
      }).then(function(e12) {
        return a2.hooks ? a2.hooks.processAllTokens(e12) : e12;
      }).then(function(e12) {
        return a2.walkTokens ? Promise.all(t2.walkTokens(e12, a2.walkTokens)).then(function() {
          return e12;
        }) : e12;
      }).then(function(e12) {
        return s2(e12, a2);
      }).then(function(e12) {
        return a2.hooks ? a2.hooks.postprocess(e12) : e12;
      }).catch(i2);
      try {
        a2.hooks && (n2 = a2.hooks.preprocess(n2));
        var c2 = o2(n2, a2);
        a2.hooks && (c2 = a2.hooks.processAllTokens(c2)), a2.walkTokens && t2.walkTokens(c2, a2.walkTokens);
        var l2 = s2(c2, a2);
        return a2.hooks && (l2 = a2.hooks.postprocess(l2)), l2;
      } catch (c3) {
        return i2(c3);
      }
    };
  } }, { key: "onError", value: function(e11, t2) {
    return function(n2) {
      if (n2.message += "\nPlease report this to https://github.com/markedjs/marked.", e11) {
        var r2 = "<p>An error occurred:</p><pre>" + am(n2.message + "", true) + "</pre>";
        return t2 ? Promise.resolve(r2) : r2;
      }
      if (t2) return Promise.reject(n2);
      throw n2;
    };
  } }]);
  var Dm = new mm();
  function ym(e11, t2) {
    return Dm.parse(e11, t2);
  }
  function gm(e11) {
    return e11.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  ym.options = ym.setOptions = function(e11) {
    return Dm.setOptions(e11), ym.defaults = Dm.defaults, cv(ym.defaults), ym;
  }, ym.getDefaults = function() {
    return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
  }, ym.defaults = sv, ym.use = function() {
    return Dm.use.apply(Dm, arguments), ym.defaults = Dm.defaults, cv(ym.defaults), ym;
  }, ym.walkTokens = function(e11, t2) {
    return Dm.walkTokens(e11, t2);
  }, ym.parseInline = Dm.parseInline, ym.Parser = hm, ym.parser = hm.parse, ym.Renderer = dm, ym.TextRenderer = pm, ym.Lexer = fm, ym.lexer = fm.lex, ym.Tokenizer = lm, ym.Hooks = vm, ym.parse = ym, ym.options, ym.setOptions, ym.use, ym.walkTokens, ym.parseInline, hm.parse, fm.lex;
  var Fm = new ym.Renderer();
  Fm.code = function(e11) {
    var t2 = e11.text, n2 = e11.lang, r2 = void 0 === n2 ? "" : n2, u2 = e11.escaped, a2 = r2 ? "language-".concat(r2) : "", i2 = u2 ? t2 : gm(t2), o2 = encodeURIComponent(t2);
    return '\n    <div class="DocSearch-CodeSnippet">\n      <button class="DocSearch-CodeSnippet-CopyButton" data-code="'.concat(o2, '" aria-label="copy code">').concat('<svg class="DocSearch-CodeSnippet-CopyIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>').concat('<svg class="DocSearch-CodeSnippet-CheckIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>', '<span class="DocSearch-CodeSnippet-CopyButton-Label"></span></button>\n      <pre><code class="').concat(a2, '">').concat(i2, "</code></pre>\n    </div>\n  ");
  }, Fm.link = function(e11) {
    var t2 = e11.href, n2 = e11.title, r2 = e11.text, u2 = n2 ? ' title="'.concat(gm(n2), '"') : "", a2 = t2 ? gm(t2) : "", i2 = gm(r2);
    return '<a href="'.concat(a2, '"').concat(u2, ' target="_blank" rel="noopener noreferrer">').concat(i2, "</a>");
  };
  var Em = tt(function(e11) {
    var t2 = e11.content, n2 = e11.copyButtonText, r2 = e11.copyButtonCopiedText, u2 = e11.isStreaming, a2 = Pe(function() {
      return ym.parse(t2, { gfm: true, breaks: true, renderer: Fm });
    }, [t2]), i2 = Ie(null);
    return Oe(function() {
      var e12 = i2.current;
      if (e12) return Array.from(e12.querySelectorAll(".DocSearch-CodeSnippet-CopyButton")).forEach(function(e13) {
        var t4 = e13.querySelector(".DocSearch-CodeSnippet-CopyButton-Label");
        t4 && (t4.textContent = n2), e13.classList.remove("DocSearch-CodeSnippet-CopyButton--copied");
      }), e12.addEventListener("click", t3), function() {
        e12.removeEventListener("click", t3);
      };
      function t3(e13) {
        var t4, u3 = e13.target.closest(".DocSearch-CodeSnippet-CopyButton");
        if (u3) {
          var a3 = null !== (t4 = u3.getAttribute("data-code")) && void 0 !== t4 ? t4 : "";
          navigator.clipboard.writeText(decodeURIComponent(a3)).catch(function() {
          });
          var i3 = u3.querySelector(".DocSearch-CodeSnippet-CopyButton-Label");
          if (i3) {
            u3.classList.add("DocSearch-CodeSnippet-CopyButton--copied");
            var o2 = n2;
            i3.textContent = r2, setTimeout(function() {
              u3.classList.remove("DocSearch-CodeSnippet-CopyButton--copied"), i3.textContent = o2;
            }, 1500);
          }
        }
      }
    }, [a2, n2, r2]), Nt.createElement("div", { ref: i2, className: "DocSearch-Markdown-Content ".concat(u2 ? "DocSearch-Markdown-Content--streaming" : ""), dangerouslySetInnerHTML: { __html: a2 } });
  });
  Em.displayName = "MemoizedMarkdown";
  var _m = function(e11, t2) {
    var n2, r2, u2 = t2[0].parts.find(function(e12) {
      return "text" === e12.type;
    });
    return { query: e11, objectID: null !== (n2 = null == u2 ? void 0 : u2.text) && void 0 !== n2 ? n2 : "", messages: t2, type: "askAI", anchor: "stored", content: null, hierarchy: { lvl0: "askAI", lvl1: null !== (r2 = null == u2 ? void 0 : u2.text) && void 0 !== r2 ? r2 : "", lvl2: null, lvl3: null, lvl4: null, lvl5: null, lvl6: null }, url: "", url_without_anchor: "" };
  };
  var bm = function(e11) {
    return null == e11 ? void 0 : e11.parts.find(function(e12) {
      return "text" === e12.type;
    });
  };
  var Cm = ["translations"];
  function km(e11) {
    var t2 = e11.disclaimerText;
    return Nt.createElement("p", { className: "DocSearch-AskAiScreen-Disclaimer" }, t2);
  }
  function Am(e11) {
    var t2, n2, r2, u2 = e11.exchange, a2 = e11.askAiStreamError, i2 = e11.isLastExchange, o2 = e11.loadingStatus, s2 = e11.onSearchQueryClick, c2 = e11.translations, l2 = e11.conversations, f2 = e11.onFeedback, d2 = u2.userMessage, p2 = u2.assistantMessage, h2 = c2.stoppedStreamingText, v2 = void 0 === h2 ? "You stopped this response" : h2, m2 = Pe(function() {
      return bm(p2);
    }, [p2]), D2 = Pe(function() {
      return bm(d2);
    }, [d2]), y2 = Nt.useMemo(function() {
      return e12 = p2, t3 = [], n3 = /* @__PURE__ */ new Set(), e12 ? (e12.parts.forEach(function(e13) {
        if ("text" === e13.type && 0 !== e13.text.length) {
          var r3, u3 = e13.text.replace(/```[\s\S]*?```/g, "").replace(/`[^`]*`/g, ""), a3 = fn(u3.matchAll(/\[([^\]]*)\]\(([^)]+)\)/g));
          try {
            for (a3.s(); !(r3 = a3.n()).done; ) {
              var i3 = r3.value, o3 = i3[1].trim(), s3 = i3[2];
              n3.has(s3) || (n3.add(s3), t3.push({ url: s3, title: o3 || void 0 }));
            }
          } catch (e14) {
            a3.e(e14);
          } finally {
            a3.f();
          }
          var c3, l3 = fn(u3.matchAll(/(?<!\]\()https?:\/\/[^\s<>"{}|\\^`[\]]+/g));
          try {
            for (l3.s(); !(c3 = l3.n()).done; ) {
              var f3 = c3.value[0].replace(/[.,;:!?]+$/, "");
              n3.has(f3) || (n3.add(f3), t3.push({ url: f3 }));
            }
          } catch (e14) {
            l3.e(e14);
          } finally {
            l3.f();
          }
        }
      }), t3) : [];
      var e12, t3, n3;
    }, [p2]), g2 = Nt.useMemo(function() {
      return (function(e12) {
        for (var t3 = [], n3 = 0; n3 < e12.length; n3++) {
          var r3 = e12[n3];
          if ("tool-searchIndex" === r3.type && "output-available" === r3.state) {
            for (var u3 = [], a3 = n3; a3 < e12.length; ) {
              var i3 = e12[a3];
              if ("tool-searchIndex" !== i3.type || "output-available" !== i3.state) break;
              var o3, s3, c3 = (null !== (o3 = null === (s3 = i3.output) || void 0 === s3 ? void 0 : s3.query) && void 0 !== o3 ? o3 : "").trim();
              c3 && c3.length > 0 && u3.push(c3), a3++;
            }
            u3.length > 1 ? t3.push({ type: "aggregated-tool-call", queries: u3 }) : 1 === u3.length && t3.push(r3), n3 = a3 - 1;
          } else t3.push(r3);
        }
        return t3;
      })((null == p2 ? void 0 : p2.parts) || []);
    }, [p2]), F2 = (null === (t2 = d2.metadata) || void 0 === t2 ? void 0 : t2.stopped) || (null == p2 || null === (n2 = p2.metadata) || void 0 === n2 ? void 0 : n2.stopped), E2 = !F2 && (!i2 || i2 && "ready" === o2 && Boolean(p2)), _2 = ["submitted", "streaming"].includes(o2) && i2 && !g2.some(function(e12) {
      return "step-start" !== e12.type;
    });
    return Nt.createElement("div", { className: "DocSearch-AskAiScreen-Response-Container" }, Nt.createElement("div", { className: "DocSearch-AskAiScreen-Response" }, Nt.createElement("div", { className: "DocSearch-AskAiScreen-Message DocSearch-AskAiScreen-Message--user" }, Nt.createElement("p", { className: "DocSearch-AskAiScreen-Query" }, null !== (r2 = null == D2 ? void 0 : D2.text) && void 0 !== r2 ? r2 : "")), Nt.createElement("div", { className: "DocSearch-AskAiScreen-Message DocSearch-AskAiScreen-Message--assistant" }, Nt.createElement("div", { className: "DocSearch-AskAiScreen-MessageContent" }, "error" === o2 && a2 && i2 && Nt.createElement("div", { className: "DocSearch-AskAiScreen-MessageContent DocSearch-AskAiScreen-Error" }, Nt.createElement(Vh, null), Nt.createElement(Em, { content: a2.message, copyButtonText: "", copyButtonCopiedText: "", isStreaming: false })), _2 && Nt.createElement("div", { className: "DocSearch-AskAiScreen-MessageContent-Reasoning" }, Nt.createElement("span", { className: "shimmer" }, c2.thinkingText || "Thinking...")), g2.map(function(e12, t3) {
      var n3, r3 = t3;
      if ("string" == typeof e12) return Nt.createElement(Em, { key: r3, content: e12, copyButtonText: c2.copyButtonText || "Copy", copyButtonCopiedText: c2.copyButtonCopiedText || "Copied!", isStreaming: "streaming" === o2 });
      if ("aggregated-tool-call" === e12.type) return Nt.createElement(ov, { key: r3, queries: e12.queries, translations: c2, onSearchQueryClick: s2 });
      if ("reasoning" === e12.type && "streaming" === e12.state) return Nt.createElement("div", { key: r3, className: "DocSearch-AskAiScreen-MessageContent-Reasoning shimmer" }, Nt.createElement($h, { className: "DocSearch-AskAiScreen-SmallerLoadingIcon" }), Nt.createElement("span", { className: "shimmer" }, "Reasoning..."));
      if ("text" === e12.type) return Nt.createElement(Em, { key: r3, content: e12.text, copyButtonText: c2.copyButtonText || "Copy", copyButtonCopiedText: c2.copyButtonCopiedText || "Copied!", isStreaming: "streaming" === e12.state });
      if ("tool-searchIndex" === e12.type) switch (e12.state) {
        case "input-streaming":
          return Nt.createElement("div", { key: r3, className: "DocSearch-AskAiScreen-MessageContent-Tool Tool--PartialCall shimmer" }, Nt.createElement($h, { className: "DocSearch-AskAiScreen-SmallerLoadingIcon" }), Nt.createElement("span", null, c2.preToolCallText || "Searching..."));
        case "input-available":
          return Nt.createElement("div", { key: r3, className: "DocSearch-AskAiScreen-MessageContent-Tool Tool--Call shimmer" }, Nt.createElement($h, { className: "DocSearch-AskAiScreen-SmallerLoadingIcon" }), Nt.createElement("span", null, "".concat(c2.duringToolCallText || "Searching for ", ' "').concat(e12.input.query || "", '" ...')));
        case "output-available":
          return Nt.createElement("div", { key: r3, className: "DocSearch-AskAiScreen-MessageContent-Tool Tool--Result" }, Nt.createElement(Pn, null), Nt.createElement("span", null, "".concat(c2.afterToolCallText || "Searched for"), " ", Nt.createElement("span", { role: "button", tabIndex: 0, className: "DocSearch-AskAiScreen-MessageContent-Tool-Query", onKeyDown: function(t4) {
            "Enter" !== t4.key && " " !== t4.key || (t4.preventDefault(), s2(e12.output.query || ""));
          }, onClick: function() {
            return s2(e12.output.query || "");
          } }, " ", '"', e12.output.query || "", '"'), " ", "found ", (null === (n3 = e12.output.hits) || void 0 === n3 ? void 0 : n3.length) || 0, " results"));
      }
      return null;
    })), F2 && Nt.createElement("p", { className: "DocSearck-AskAiScreen-MessageContent-Stopped" }, v2)), Nt.createElement("div", { className: "DocSearch-AskAiScreen-Answer-Footer" }, Nt.createElement(wm, { id: (null == d2 ? void 0 : d2.id) || u2.id, showActions: E2, latestAssistantMessageContent: (null == m2 ? void 0 : m2.text) || null, translations: c2, conversations: l2, onFeedback: f2 }))), y2.length > 0 ? Nt.createElement(Sm, { urlsToDisplay: y2, relatedSourcesText: c2.relatedSourcesText }) : null);
  }
  function wm(e11) {
    var t2 = e11.id, n2 = e11.showActions, r2 = e11.latestAssistantMessageContent, u2 = e11.translations, a2 = e11.conversations, i2 = e11.onFeedback, o2 = Nt.useMemo(function() {
      var e12, n3, r3 = null === (e12 = a2.getOne) || void 0 === e12 ? void 0 : e12.call(a2, t2);
      return null !== (n3 = null == r3 ? void 0 : r3.feedback) && void 0 !== n3 ? n3 : null;
    }, [a2, t2]), s2 = bn(Nt.useState(o2), 2), c2 = s2[0], l2 = s2[1], f2 = bn(Nt.useState(false), 2), d2 = f2[0], p2 = f2[1], h2 = bn(Nt.useState(null), 2), v2 = h2[0], m2 = h2[1], D2 = (function() {
      var e12 = un(Fn().m(function e13(n3) {
        var r3;
        return Fn().w(function(e14) {
          for (; ; ) switch (e14.p = e14.n) {
            case 0:
              if (!d2) {
                e14.n = 1;
                break;
              }
              return e14.a(2);
            case 1:
              return m2(null), p2(true), e14.p = 2, e14.n = 3, null == i2 ? void 0 : i2(t2, "like" === n3 ? 1 : 0);
            case 3:
              l2(n3), e14.n = 5;
              break;
            case 4:
              e14.p = 4, r3 = e14.v, m2(r3);
            case 5:
              return e14.p = 5, p2(false), e14.f(5);
            case 6:
              return e14.a(2);
          }
        }, e13, null, [[2, 4, 5, 6]]);
      }));
      return function(t3) {
        return e12.apply(this, arguments);
      };
    })(), y2 = u2.likeButtonTitle, g2 = void 0 === y2 ? "Like" : y2, F2 = u2.dislikeButtonTitle, E2 = void 0 === F2 ? "Dislike" : F2, _2 = u2.thanksForFeedbackText, b2 = void 0 === _2 ? "Thanks for your feedback!" : _2;
    return n2 && r2 ? Nt.createElement("div", { className: "DocSearch-AskAiScreen-Actions" }, null === c2 ? Nt.createElement(Nt.Fragment, null, d2 ? Nt.createElement($h, { className: "DocSearch-AskAiScreen-SmallerLoadingIcon" }) : Nt.createElement(Nt.Fragment, null, Nt.createElement(Im, { title: g2, onClick: function() {
      return D2("like");
    } }), Nt.createElement(Tm, { title: E2, onClick: function() {
      return D2("dislike");
    } })), v2 && Nt.createElement("p", { className: "DocSearch-AskAiScreen-FeedbackText" }, v2.message || "An error occured")) : Nt.createElement("p", { className: "DocSearch-AskAiScreen-FeedbackText DocSearch-AskAiScreen-FeedbackText--visible" }, b2), Nt.createElement(Bm, { translations: u2, onClick: function() {
      return navigator.clipboard.writeText(r2);
    } })) : null;
  }
  function Sm(e11) {
    var t2 = e11.urlsToDisplay, n2 = e11.relatedSourcesText;
    return Nt.createElement("div", { className: "DocSearch-AskAiScreen-RelatedSources" }, Nt.createElement("p", { className: "DocSearch-AskAiScreen-RelatedSources-Title" }, n2 || "Related sources"), Nt.createElement("div", { className: "DocSearch-AskAiScreen-RelatedSources-List" }, t2.length > 0 && t2.map(function(e12) {
      return Nt.createElement("a", { key: e12.url, href: e12.url, className: "DocSearch-AskAiScreen-RelatedSources-Item-Link", target: "_blank", rel: "noopener noreferrer" }, Nt.createElement(Om, null), Nt.createElement("span", null, e12.title || e12.url));
    })));
  }
  function xm(e11) {
    var t2 = e11.translations, n2 = void 0 === t2 ? {} : t2, r2 = gn(e11, Cm), u2 = n2.disclaimerText, a2 = void 0 === u2 ? "Answers are generated with AI which can make mistakes. Verify responses." : u2, i2 = r2.messages, o2 = Pe(function() {
      for (var e12 = [], t3 = 0; t3 < i2.length; t3++) if ("user" === i2[t3].role) {
        var n3, r3 = i2[t3], u3 = "assistant" === (null === (n3 = i2[t3 + 1]) || void 0 === n3 ? void 0 : n3.role) ? i2[t3 + 1] : null;
        e12.push({ id: r3.id, userMessage: r3, assistantMessage: u3 }), u3 && t3++;
      }
      return e12;
    }, [i2]), s2 = function(e12) {
      r2.onAskAiToggle(false), r2.setQuery(e12);
    };
    return Nt.createElement("div", { className: "DocSearch-AskAiScreen DocSearch-AskAiScreen-Container" }, Nt.createElement(km, { disclaimerText: a2 }), Nt.createElement("div", { className: "DocSearch-AskAiScreen-Body" }, Nt.createElement("div", { className: "DocSearch-AskAiScreen-ExchangesList" }, o2.slice().reverse().map(function(e12, t3) {
      return Nt.createElement(Am, { key: e12.id, exchange: e12, askAiStreamError: r2.askAiStreamError, isLastExchange: 0 === t3, loadingStatus: r2.status, translations: n2, conversations: r2.conversations, onSearchQueryClick: s2, onFeedback: r2.onFeedback });
    }))));
  }
  function Om() {
    return Nt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, Nt.createElement("line", { x1: "4", x2: "20", y1: "9", y2: "9" }), Nt.createElement("line", { x1: "4", x2: "20", y1: "15", y2: "15" }), Nt.createElement("line", { x1: "10", x2: "8", y1: "3", y2: "21" }), Nt.createElement("line", { x1: "16", x2: "14", y1: "3", y2: "21" }));
  }
  function Bm(e11) {
    var t2 = e11.onClick, n2 = e11.translations, r2 = n2.copyButtonTitle, u2 = void 0 === r2 ? "Copy" : r2, a2 = n2.copyButtonCopiedText, i2 = void 0 === a2 ? "Copied!" : a2, o2 = bn(Se(false), 2), s2 = o2[0], c2 = o2[1];
    return Oe(function() {
      if (s2) {
        var e12 = setTimeout(function() {
          c2(false);
        }, 1500);
        return function() {
          return clearTimeout(e12);
        };
      }
    }, [s2]), Nt.createElement("button", { type: "button", className: "DocSearch-AskAiScreen-ActionButton DocSearch-AskAiScreen-CopyButton ".concat(s2 ? "DocSearch-AskAiScreen-CopyButton--copied" : ""), disabled: s2, title: s2 ? i2 : u2, onClick: function() {
      t2(), c2(true);
    } }, s2 ? Nt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-check-icon lucide-check" }, Nt.createElement("path", { d: "M20 6 9 17l-5-5" })) : Nt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-copy-icon lucide-copy" }, Nt.createElement("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }), Nt.createElement("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })));
  }
  function Im(e11) {
    var t2 = e11.title, n2 = e11.onClick;
    return Nt.createElement("button", { type: "button", className: "DocSearch-AskAiScreen-ActionButton DocSearch-AskAiScreen-LikeButton", title: t2, onClick: n2 }, Nt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-thumbs-up-icon lucide-thumbs-up" }, Nt.createElement("path", { d: "M7 10v12" }), Nt.createElement("path", { d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" })));
  }
  function Tm(e11) {
    var t2 = e11.title, n2 = e11.onClick;
    return Nt.createElement("button", { type: "button", className: "DocSearch-AskAiScreen-ActionButton DocSearch-AskAiScreen-DislikeButton", title: t2, onClick: n2 }, Nt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-thumbs-down-icon lucide-thumbs-down" }, Nt.createElement("path", { d: "M17 14V2" }), Nt.createElement("path", { d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" })));
  }
  var Pm = ["hit", "attribute", "tagName"];
  function jm(e11, t2) {
    return t2.split(".").reduce(function(e12, t3) {
      return null != e12 && e12[t3] ? e12[t3] : null;
    }, e11);
  }
  function Nm(e11) {
    var t2 = e11.hit, n2 = e11.attribute, r2 = e11.tagName;
    return q(void 0 === r2 ? "span" : r2, yn(yn({}, gn(e11, Pm)), {}, { dangerouslySetInnerHTML: { __html: jm(t2, "_snippetResult.".concat(n2, ".value")) || jm(t2, n2) } }));
  }
  var zm = ["item", "getItemProps", "onItemClick", "translations", "collection"];
  function Rm(e11) {
    var t2 = Nt.useMemo(function() {
      return e11.title.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#039;/g, "'");
    }, [e11.title]);
    return e11.collection && 0 !== e11.collection.items.length ? "askAI" === e11.collection.source.sourceId ? Nt.createElement("section", { className: "DocSearch-AskAi-Section" }, Nt.createElement("ul", e11.getListProps({ source: e11.collection.source }), Nt.createElement(Zm, pn({ item: e11.collection.items[0], translations: e11.translations }, e11)))) : (e11.collection.source.sourceId, Nt.createElement("section", { className: "DocSearch-Hits" }, Nt.createElement("div", { className: "DocSearch-Hit-source" }, t2), Nt.createElement("ul", e11.getListProps({ source: e11.collection.source }), e11.collection.items.map(function(t3, n2) {
      return Nt.createElement(Mm, pn({ key: [e11.title, t3.objectID].join(":"), item: t3, index: n2 }, e11));
    })))) : null;
  }
  function Mm(e11) {
    var t2 = e11.item, n2 = e11.index, r2 = e11.renderIcon, u2 = e11.renderAction, a2 = e11.getItemProps, i2 = e11.onItemClick, o2 = e11.collection, s2 = e11.hitComponent;
    return Nt.createElement("li", pn({ className: ["DocSearch-Hit", t2.__docsearch_parent && "DocSearch-Hit--Child"].filter(Boolean).join(" ") }, a2({ item: t2, source: o2.source, onClick: function(e12) {
      i2(t2, e12);
    } })), Nt.createElement(s2, { hit: t2 }, Nt.createElement("div", { className: "DocSearch-Hit-Container" }, r2({ item: t2, index: n2 }), t2.hierarchy[t2.type] && "lvl1" === t2.type && Nt.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Nt.createElement(Nm, { className: "DocSearch-Hit-title", hit: t2, attribute: "hierarchy.lvl1" }), t2.content && Nt.createElement(Nm, { className: "DocSearch-Hit-path", hit: t2, attribute: "content" })), "askAI" === t2.type && Nt.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Nt.createElement(Nm, { className: "DocSearch-Hit-title", hit: t2, attribute: "hierarchy.lvl1" })), t2.hierarchy[t2.type] && ("lvl2" === t2.type || "lvl3" === t2.type || "lvl4" === t2.type || "lvl5" === t2.type || "lvl6" === t2.type) && Nt.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Nt.createElement(Nm, { className: "DocSearch-Hit-title", hit: t2, attribute: "hierarchy.".concat(t2.type) }), Nt.createElement(Nm, { className: "DocSearch-Hit-path", hit: t2, attribute: "hierarchy.lvl1" })), "content" === t2.type && Nt.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Nt.createElement(Nm, { className: "DocSearch-Hit-title", hit: t2, attribute: "content" }), Nt.createElement(Nm, { className: "DocSearch-Hit-path", hit: t2, attribute: "hierarchy.lvl1" })), u2({ item: t2 }))));
  }
  function Zm(e11) {
    var t2 = e11.item, n2 = e11.getItemProps, r2 = e11.onItemClick, u2 = e11.translations, a2 = e11.collection, i2 = gn(e11, zm), o2 = u2 || {}, s2 = o2.askAiPlaceholder, c2 = void 0 === s2 ? "Ask AI: " : s2, l2 = o2.noResultsAskAiPlaceholder, f2 = void 0 === l2 ? "Didn't find it in the docs? Ask AI to help: " : l2, d2 = 1 === i2.state.collections.length ? f2 : c2;
    return Nt.createElement("li", pn({ className: "DocSearch-Hit" }, n2({ item: t2, source: a2.source, onClick: function(e12) {
      r2(t2, e12);
    } })), Nt.createElement("div", { className: "DocSearch-Hit--AskAI" }, Nt.createElement("div", { className: "DocSearch-Hit-AskAIButton DocSearch-Hit-Container" }, Nt.createElement("div", { className: " DocSearch-Hit-AskAIButton-icon DocSearch-Hit-icon" }, Nt.createElement(qh, null)), Nt.createElement("div", { className: "DocSearch-Hit-AskAIButton-title" }, Nt.createElement("span", { className: "DocSearch-Hit-AskAIButton-title-highlight" }, d2), Nt.createElement("mark", { className: "DocSearch-Hit-AskAIButton-title-query" }, t2.query || "")))));
  }
  var Lm = ["onAskAiToggle"];
  function $m(e11) {
    var t2 = e11.onAskAiToggle, n2 = gn(e11, Lm), r2 = Nt.useMemo(function() {
      return n2.state.collections[2];
    }, [n2.state]);
    return Nt.useEffect(function() {
      r2 && 0 !== r2.items.length || t2(true);
    }, [r2, t2]), Nt.createElement("div", { className: "DocSearch-Dropdown-Container DocSearch-Conversation-History" }, Nt.createElement(Rm, pn({}, n2, { key: r2.source.sourceId, title: "", translations: n2.translations, collection: r2, renderIcon: function() {
      return Nt.createElement("div", { className: "DocSearch-Hit-icon" }, Nt.createElement(qh, null));
    }, renderAction: function(e12) {
      var t3 = e12.item;
      return Nt.createElement("div", { className: "DocSearch-Hit-action" }, Nt.createElement("button", { type: "button", className: "DocSearch-Hit-action-button", onClick: function(e13) {
        e13.preventDefault(), e13.stopPropagation(), n2.conversations.remove(t3), n2.refresh();
      } }, Nt.createElement(Hh, null)));
    } })));
  }
  function qm(e11) {
    var t2 = e11.translations, n2 = void 0 === t2 ? {} : t2, r2 = n2.titleText, u2 = void 0 === r2 ? "Unable to fetch results" : r2, a2 = n2.helpText, i2 = void 0 === a2 ? "You might want to check your network connection." : a2;
    return Nt.createElement("div", { className: "DocSearch-ErrorScreen" }, Nt.createElement("div", { className: "DocSearch-Screen-Icon" }, Nt.createElement(ev, null)), Nt.createElement("p", { className: "DocSearch-Title" }, u2), Nt.createElement("p", { className: "DocSearch-Help" }, i2));
  }
  function Um(e11) {
    var t2 = e11.translations, n2 = void 0 === t2 ? {} : t2, r2 = e11.suggestedQuestions, u2 = void 0 === r2 ? [] : r2, a2 = e11.selectSuggestedQuestion, i2 = n2.newConversationTitle, o2 = void 0 === i2 ? "How can I help you today?" : i2, s2 = n2.newConversationDescription, c2 = void 0 === s2 ? "I search through your documentation to help you find setup guides, feature details and troubleshooting tips, fast." : s2;
    return Nt.createElement("div", { className: "DocSearch-NewConversationScreen" }, Nt.createElement("h3", { className: "DocSearch-NewConversationScreen-Title" }, o2), Nt.createElement("p", { className: "DocSearch-NewConversationScreen-Description" }, c2), Nt.createElement("div", { className: "DocSearch-NewConversationScreen-SuggestedQuestions" }, u2.map(function(e12) {
      return Nt.createElement("button", { key: e12.objectID, type: "button", className: "DocSearch-NewConversationScreen-SuggestedQuestion", onClick: function() {
        return a2(e12);
      } }, e12.question);
    })));
  }
  var Hm = ["translations"];
  function Vm(e11) {
    var t2 = e11.translations, n2 = void 0 === t2 ? {} : t2, r2 = gn(e11, Hm), u2 = n2.noResultsText, a2 = void 0 === u2 ? "No results found for" : u2, i2 = n2.suggestedQueryText, o2 = void 0 === i2 ? "Try searching for" : i2, s2 = n2.reportMissingResultsText, c2 = void 0 === s2 ? "Believe this query should return results?" : s2, l2 = n2.reportMissingResultsLinkText, f2 = void 0 === l2 ? "Let us know." : l2, d2 = r2.state.context.searchSuggestions;
    return Nt.createElement("div", { className: "DocSearch-NoResults ".concat(r2.canHandleAskAi ? "DocSearch-NoResults--withAskAi" : "") }, Nt.createElement("div", { className: "DocSearch-Screen-Icon" }, Nt.createElement(tv, null)), Nt.createElement("p", { className: "DocSearch-Title" }, a2, ' "', Nt.createElement("strong", null, r2.state.query), '"'), d2 && d2.length > 0 && Nt.createElement("div", { className: "DocSearch-NoResults-Prefill-List" }, Nt.createElement("p", { className: "DocSearch-Help" }, o2, ":"), Nt.createElement("div", { className: "DocSearch-NoResults-Prefill-List-Items" }, d2.slice(0, 3).reduce(function(e12, t3) {
      return [].concat(Cn(e12), [Nt.createElement("p", { key: t3 }, Nt.createElement(Pn, { size: 16 }), Nt.createElement("button", { className: "DocSearch-Prefill", key: t3, type: "button", onClick: function() {
        r2.setQuery(t3.toLowerCase() + " "), r2.refresh(), r2.inputRef.current.focus();
      } }, t3))]);
    }, []))), r2.getMissingResultsUrl && Nt.createElement("p", { className: "DocSearch-Help" }, "".concat(c2, " "), Nt.createElement("a", { href: r2.getMissingResultsUrl({ query: r2.state.query }), target: "_blank", rel: "noopener noreferrer" }, f2)));
  }
  function Wm(e11, t2, n2) {
    return e11.reduce(function(e12, r2) {
      var u2 = t2(r2);
      return e12.hasOwnProperty(u2) || (e12[u2] = []), e12[u2].length < (n2 || 5) && e12[u2].push(r2), e12;
    }, {});
  }
  function Km(e11) {
    return e11;
  }
  function Jm(e11) {
    return 1 === e11.button || e11.altKey || e11.ctrlKey || e11.metaKey || e11.shiftKey;
  }
  function Qm() {
  }
  var Gm = /(<mark>|<\/mark>)/g;
  var Ym = RegExp(Gm.source);
  function Xm(e11) {
    var t2, n2, r2 = e11;
    if (!r2.__docsearch_parent && !e11._highlightResult) return e11.hierarchy.lvl0;
    var u2 = r2.__docsearch_parent ? null === (t2 = r2.__docsearch_parent) || void 0 === t2 || null === (t2 = t2._highlightResult) || void 0 === t2 || null === (t2 = t2.hierarchy) || void 0 === t2 ? void 0 : t2.lvl0 : null === (n2 = e11._highlightResult) || void 0 === n2 || null === (n2 = n2.hierarchy) || void 0 === n2 ? void 0 : n2.lvl0;
    return u2 ? u2.value && Ym.test(u2.value) ? u2.value.replace(Gm, "") : u2.value : e11.hierarchy.lvl0;
  }
  var eD = ["translations"];
  function tD(e11) {
    var t2 = e11.translations, n2 = void 0 === t2 ? {} : t2, r2 = gn(e11, eD);
    return Nt.createElement("div", { className: "DocSearch-Dropdown-Container" }, r2.state.collections.map(function(e12) {
      if (0 === e12.items.length) return null;
      var t3 = Xm(e12.items[0]);
      return Nt.createElement(Rm, pn({}, r2, { key: e12.source.sourceId, translations: n2, title: t3, collection: e12, renderIcon: function(t4) {
        var n3, r3 = t4.item, u2 = t4.index;
        return Nt.createElement(Nt.Fragment, null, r3.__docsearch_parent && Nt.createElement("svg", { className: "DocSearch-Hit-Tree", viewBox: "0 0 24 54" }, Nt.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, r3.__docsearch_parent !== (null === (n3 = e12.items[u2 + 1]) || void 0 === n3 ? void 0 : n3.__docsearch_parent) ? Nt.createElement("path", { d: "M8 6v21M20 27H8.3" }) : Nt.createElement("path", { d: "M8 6v42M20 27H8.3" }))), Nt.createElement("div", { className: "DocSearch-Hit-icon" }, Nt.createElement(Jh, { type: r3.type })));
      }, renderAction: function() {
        return Nt.createElement("div", { className: "DocSearch-Hit-action" }, Nt.createElement(Wh, null));
      } }));
    }), r2.resultsFooterComponent && Nt.createElement("section", { className: "DocSearch-HitsFooter" }, Nt.createElement(r2.resultsFooterComponent, { state: r2.state })));
  }
  var nD = ["translations"];
  function rD(e11) {
    var t2 = e11.translations, n2 = void 0 === t2 ? {} : t2, r2 = gn(e11, nD), u2 = n2.recentSearchesTitle, a2 = void 0 === u2 ? "Recent" : u2, i2 = n2.saveRecentSearchButtonTitle, o2 = void 0 === i2 ? "Save this search" : i2, s2 = n2.removeRecentSearchButtonTitle, c2 = void 0 === s2 ? "Remove this search from history" : s2, l2 = n2.favoriteSearchesTitle, f2 = void 0 === l2 ? "Favorite" : l2, d2 = n2.removeFavoriteSearchButtonTitle, p2 = void 0 === d2 ? "Remove this search from favorites" : d2, h2 = n2.recentConversationsTitle, v2 = void 0 === h2 ? "Recent conversations" : h2, m2 = n2.removeRecentConversationButtonTitle, D2 = void 0 === m2 ? "Remove this conversation from history" : m2;
    return Nt.createElement("div", { className: "DocSearch-Dropdown-Container" }, Nt.createElement(Rm, pn({}, r2, { title: a2, collection: r2.state.collections[0], renderIcon: function() {
      return Nt.createElement("div", { className: "DocSearch-Hit-icon" }, Nt.createElement(Uh, null));
    }, renderAction: function(e12) {
      var t3 = e12.item;
      return Nt.createElement(Nt.Fragment, null, Nt.createElement("div", { className: "DocSearch-Hit-action" }, Nt.createElement("button", { className: "DocSearch-Hit-action-button", title: o2, type: "submit", onClick: function(e13) {
        e13.preventDefault(), e13.stopPropagation(), r2.favoriteSearches.add(t3), r2.recentSearches.remove(t3), r2.refresh();
      } }, Nt.createElement(Yh, null))), Nt.createElement("div", { className: "DocSearch-Hit-action" }, Nt.createElement("button", { className: "DocSearch-Hit-action-button", title: c2, type: "submit", onClick: function(e13) {
        e13.preventDefault(), e13.stopPropagation(), r2.recentSearches.remove(t3), r2.refresh();
      } }, Nt.createElement(Hh, null))));
    } })), Nt.createElement(Rm, pn({}, r2, { title: f2, collection: r2.state.collections[1], renderIcon: function() {
      return Nt.createElement("div", { className: "DocSearch-Hit-icon" }, Nt.createElement(Yh, null));
    }, renderAction: function(e12) {
      var t3 = e12.item;
      return Nt.createElement("div", { className: "DocSearch-Hit-action" }, Nt.createElement("button", { className: "DocSearch-Hit-action-button", title: p2, type: "submit", onClick: function(e13) {
        e13.preventDefault(), e13.stopPropagation(), r2.favoriteSearches.remove(t3), r2.refresh();
      } }, Nt.createElement(Hh, null)));
    } })), Nt.createElement(Rm, pn({}, r2, { title: v2, collection: r2.state.collections[2], renderIcon: function() {
      return Nt.createElement("div", { className: "DocSearch-Hit-icon" }, Nt.createElement(qh, null));
    }, renderAction: function(e12) {
      var t3 = e12.item;
      return Nt.createElement("div", { className: "DocSearch-Hit-action" }, Nt.createElement("button", { className: "DocSearch-Hit-action-button", title: D2, type: "submit", onClick: function(e13) {
        e13.preventDefault(), e13.stopPropagation(), r2.conversations.remove(t3), r2.refresh();
      } }, Nt.createElement(Hh, null)));
    } })));
  }
  var uD = ["translations"];
  var aD = Nt.memo(function(e11) {
    var t2, n2 = e11.translations, r2 = void 0 === n2 ? {} : n2, u2 = gn(e11, uD);
    return u2.canHandleAskAi && u2.isAskAiActive && "conversation-history" === u2.askAiState ? Nt.createElement($m, u2) : u2.canHandleAskAi && u2.isAskAiActive && "new-conversation" === u2.askAiState ? Nt.createElement(Um, { translations: null == r2 ? void 0 : r2.newConversation, selectSuggestedQuestion: u2.selectSuggestedQuestion, suggestedQuestions: u2.suggestedQuestions }) : u2.isAskAiActive && u2.canHandleAskAi ? Nt.createElement(xm, pn({}, u2, { messages: u2.messages, status: u2.status, askAiStreamError: u2.askAiStreamError, askAiFetchError: u2.askAiFetchError, translations: null == r2 ? void 0 : r2.askAiScreen })) : "error" === (null === (t2 = u2.state) || void 0 === t2 ? void 0 : t2.status) ? Nt.createElement(qm, { translations: null == r2 ? void 0 : r2.errorScreen }) : u2.state.query ? u2.hasCollections || u2.canHandleAskAi ? Nt.createElement(Nt.Fragment, null, Nt.createElement(tD, pn({}, u2, { translations: null == r2 ? void 0 : r2.resultsScreen })), u2.canHandleAskAi && 1 === u2.state.collections.length && Nt.createElement(Vm, pn({}, u2, { translations: null == r2 ? void 0 : r2.noResultsScreen }))) : Nt.createElement(Vm, pn({}, u2, { translations: null == r2 ? void 0 : r2.noResultsScreen })) : Nt.createElement(rD, pn({}, u2, { hasCollections: u2.hasCollections, translations: null == r2 ? void 0 : r2.startScreen }));
  }, function(e11, t2) {
    return "loading" === t2.state.status || "stalled" === t2.state.status;
  });
  function iD(e11) {
    var t2 = e11.size, n2 = void 0 === t2 ? 20 : t2, r2 = e11.color, u2 = void 0 === r2 ? "currentColor" : r2;
    return Nt.createElement("svg", { width: n2, height: n2, className: "DocSearch-Back-Icon", viewBox: "0 0 24 24", fill: "none", stroke: u2, strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, Nt.createElement("path", { d: "m12 19-7-7 7-7" }), Nt.createElement("path", { d: "M19 12H5" }));
  }
  var oD = ["children", "className", "onClick"];
  var sD = Nt.createContext({ open: false, setOpen: function(e11) {
  } });
  function cD(e11) {
    var t2 = e11.children, n2 = bn(Nt.useState(false), 2), r2 = n2[0], u2 = n2[1], a2 = Nt.useRef(null);
    return Nt.useEffect(function() {
      function e12(e13) {
        var t3;
        null !== (t3 = a2.current) && void 0 !== t3 && t3.contains(e13.target) || u2(false);
      }
      return r2 && window.addEventListener("click", e12), function() {
        window.removeEventListener("click", e12);
      };
    }, [r2]), Nt.createElement(sD.Provider, { value: { open: r2, setOpen: u2 } }, Nt.createElement("div", { ref: a2, className: "DocSearch-Menu" }, t2));
  }
  function lD(e11) {
    var t2 = e11.heading, n2 = e11.shimmer, r2 = void 0 !== n2 && n2;
    return Nt.createElement("span", { className: "DocSearch-Modal-heading".concat(r2 ? " shimmer" : "") }, t2);
  }
  cD.Trigger = function(e11) {
    var t2 = e11.children, n2 = e11.className, r2 = void 0 === n2 ? "" : n2, u2 = Nt.useContext(sD), a2 = u2.open, i2 = u2.setOpen;
    return Nt.createElement("button", { type: "button", className: "DocSearch-Menu-trigger ".concat(r2), onClick: function() {
      i2(!a2);
    } }, t2);
  }, cD.Content = function(e11) {
    var t2 = e11.children, n2 = Nt.useContext(sD).open;
    return Nt.createElement("div", { className: "DocSearch-Menu-content".concat(n2 ? " open" : "") }, t2);
  }, cD.Item = function(e11) {
    var t2 = e11.children, n2 = e11.className, r2 = void 0 === n2 ? "" : n2, u2 = e11.onClick, a2 = gn(e11, oD), i2 = Nt.useContext(sD).setOpen;
    return Nt.createElement("button", pn({ type: "button", className: "DocSearch-Menu-item ".concat(r2), onClick: function(e12) {
      u2 && (u2(e12), i2(false));
    } }, a2), t2);
  };
  var fD = ["translations", "askAiState", "onAskAiToggle", "setAskAiState"];
  function dD(e11) {
    var t2 = e11.translations, n2 = void 0 === t2 ? {} : t2, r2 = e11.askAiState, u2 = e11.onAskAiToggle, a2 = e11.setAskAiState, i2 = gn(e11, fD), o2 = n2.clearButtonTitle, s2 = void 0 === o2 ? "Clear" : o2, c2 = n2.clearButtonAriaLabel, l2 = void 0 === c2 ? "Clear the query" : c2, f2 = n2.closeButtonText, d2 = void 0 === f2 ? "Close" : f2, p2 = n2.closeButtonAriaLabel, h2 = void 0 === p2 ? "Close" : p2, v2 = n2.searchInputLabel, m2 = void 0 === v2 ? "Search" : v2, D2 = n2.backToKeywordSearchButtonText, y2 = void 0 === D2 ? "Back to keyword search" : D2, g2 = n2.backToKeywordSearchButtonAriaLabel, F2 = void 0 === g2 ? "Back to keyword search" : g2, E2 = n2.placeholderTextAskAiStreaming, _2 = void 0 === E2 ? "Answering..." : E2, b2 = n2.newConversationPlaceholder, C2 = void 0 === b2 ? "Ask a question" : b2, k2 = n2.conversationHistoryTitle, A2 = void 0 === k2 ? "My conversation history" : k2, w2 = n2.startNewConversationText, S2 = void 0 === w2 ? "Start a new conversation" : w2, x2 = n2.viewConversationHistoryText, O2 = void 0 === x2 ? "Conversation history" : x2, B2 = i2.getFormProps({ inputElement: i2.inputRef.current }).onReset;
    Nt.useEffect(function() {
      i2.autoFocus && i2.inputRef.current && i2.inputRef.current.focus();
    }, [i2.autoFocus, i2.inputRef]), Nt.useEffect(function() {
      i2.isFromSelection && i2.inputRef.current && i2.inputRef.current.select();
    }, [i2.isFromSelection, i2.inputRef]);
    var I2 = Nt.useMemo(function() {
      var e12 = i2.state.collections[2];
      return !!e12 && e12.items.length > 0;
    }, [i2.state.collections]), T2 = i2.getInputProps({ inputElement: i2.inputRef.current, autoFocus: i2.autoFocus, maxLength: 512 }), P2 = /* @__PURE__ */ new Set(["ArrowUp", "ArrowDown", "Enter"]), j2 = T2.onKeyDown, N2 = T2.onChange, z2 = "streaming" === i2.askAiStatus || "submitted" === i2.askAiStatus, R2 = "stalled" === i2.state.status, M2 = i2.isAskAiActive && "conversation-history" !== r2, Z2 = i2.placeholder;
    "new-conversation" === r2 && (Z2 = C2);
    var L2 = null;
    z2 && (L2 = _2), "conversation-history" === r2 && (L2 = A2), Nt.useEffect(function() {
      "streaming" !== i2.askAiStatus && "submitted" !== i2.askAiStatus && i2.inputRef.current && i2.inputRef.current.focus();
    }, [i2.askAiStatus, i2.inputRef]);
    var $2 = yn(yn({}, T2), {}, { enterKeyHint: i2.isAskAiActive ? "enter" : "search", onKeyDown: function(e12) {
      if (i2.isAskAiActive && P2.has(e12.key)) return "Enter" === e12.key && !z2 && i2.state.query && i2.onAskAgain(i2.state.query), e12.preventDefault(), void e12.stopPropagation();
      null == j2 || j2(e12);
    }, onChange: function(e12) {
      if (i2.isAskAiActive) return i2.setQuery(e12.currentTarget.value), e12.preventDefault(), void e12.stopPropagation();
      null == N2 || N2(e12);
    }, disabled: z2 }), q2 = Nt.useCallback(function() {
      if ("conversation-history" === r2) return u2(true), void a2("initial");
      u2(false);
    }, [r2, u2, a2]);
    return Nt.createElement(Nt.Fragment, null, Nt.createElement("form", { className: "DocSearch-Form", onSubmit: function(e12) {
      e12.preventDefault();
    }, onReset: B2 }, i2.isAskAiActive ? Nt.createElement(Nt.Fragment, null, Nt.createElement("button", { type: "button", tabIndex: 0, className: "DocSearch-Action DocSearch-AskAi-Return", title: y2, "aria-label": F2, onClick: q2 }, Nt.createElement(iD, null))) : Nt.createElement(Nt.Fragment, null, R2 && Nt.createElement("div", { className: "DocSearch-LoadingIndicator" }, Nt.createElement($h, null)), !R2 && Nt.createElement("label", pn({ className: "DocSearch-MagnifierLabel" }, i2.getLabelProps()), Nt.createElement(Pn, null), Nt.createElement("span", { className: "DocSearch-VisuallyHiddenForAccessibility" }, m2))), L2 && Nt.createElement(lD, { heading: L2, shimmer: z2 }), Nt.createElement("input", pn({ className: "DocSearch-Input", ref: i2.inputRef }, $2, { placeholder: Z2, hidden: Boolean(L2) })), Nt.createElement("div", { className: "DocSearch-Actions" }, Nt.createElement("button", { className: "DocSearch-Clear", type: "reset", "aria-label": l2, hidden: !i2.state.query, tabIndex: i2.state.query ? 0 : -1, "aria-hidden": i2.state.query ? "false" : "true" }, s2), i2.state.query && Nt.createElement("div", { className: "DocSearch-Divider" }), z2 && Nt.createElement(Nt.Fragment, null, Nt.createElement("button", { type: "button", className: "DocSearch-Action DocSearch-StopStreaming", onClick: i2.onStopAskAiStreaming }, Nt.createElement(Xh, null)), Nt.createElement("div", { className: "DocSearch-Divider" })), M2 && Nt.createElement(Nt.Fragment, null, Nt.createElement(cD, null, Nt.createElement(cD.Trigger, { className: "DocSearch-Action" }, Nt.createElement(nv, null)), Nt.createElement(cD.Content, null, Nt.createElement(cD.Item, { onClick: i2.onNewConversation }, Nt.createElement(uv, null), S2), I2 && Nt.createElement(cD.Item, { onClick: i2.onViewConversationHistory }, Nt.createElement(rv, null), O2))), Nt.createElement("div", { className: "DocSearch-Divider" })), Nt.createElement("button", { type: "button", title: d2, className: "DocSearch-Action DocSearch-Close", "aria-label": h2, onClick: i2.onClose }, Nt.createElement(Hh, null)))));
  }
  function pD() {
    if ("undefined" != typeof window && window.localStorage) {
      var e11 = [];
      for (var t2 in window.localStorage) if (t2.includes("__DOCSEARCH_")) {
        var n2 = window.localStorage[t2];
        e11.push({ key: t2, size: n2.length + t2.length });
      }
      e11.sort(function(e12, t3) {
        return t3.size - e12.size;
      });
      for (var r2 = Math.ceil(e11.length / 2), u2 = 0; u2 < r2 && u2 < e11.length; u2++) try {
        window.localStorage.removeItem(e11[u2].key);
      } catch (e12) {
      }
    }
  }
  function hD(e11) {
    return false === (function() {
      if ("undefined" == typeof window || !("localStorage" in window)) return false;
      var e12 = "__TEST_KEY__";
      try {
        return window.localStorage.setItem(e12, ""), window.localStorage.removeItem(e12), true;
      } catch (e13) {
        return false;
      }
    })() ? { setItem: function() {
    }, getItem: function() {
      return [];
    } } : { setItem: function(t2) {
      !(function(e12, t3) {
        try {
          window.localStorage.setItem(e12, JSON.stringify(t3));
        } catch (n2) {
          if (n2 instanceof DOMException && "QuotaExceededError" === n2.name) try {
            pD(), window.localStorage.setItem(e12, JSON.stringify(t3));
          } catch (e13) {
          }
        }
      })(e11, t2);
    }, getItem: function() {
      var t2 = window.localStorage.getItem(e11);
      if (null === t2) return [];
      try {
        var n2 = JSON.parse(t2);
        return Array.isArray(n2) ? n2 : [];
      } catch (t3) {
        return window.localStorage.removeItem(e11), [];
      }
    } };
  }
  var vD = ["_highlightResult", "_snippetResult"];
  function mD(e11) {
    var t2 = e11.key, n2 = e11.limit, r2 = void 0 === n2 ? 5 : n2, u2 = hD(t2), a2 = u2.getItem().slice(0, r2);
    return { add: function(e12) {
      var t3 = e12;
      t3._highlightResult, t3._snippetResult;
      var n3 = gn(t3, vD), i2 = a2.findIndex(function(e13) {
        return e13.objectID === n3.objectID;
      });
      i2 > -1 && a2.splice(i2, 1), a2.unshift(n3), a2 = a2.slice(0, r2), u2.setItem(a2);
    }, remove: function(e12) {
      a2 = a2.filter(function(t3) {
        return t3.objectID !== e12.objectID;
      }), u2.setItem(a2);
    }, getAll: function() {
      return a2;
    } };
  }
  function DD(e11) {
    var t2, n2 = "algolia-client-js-".concat(e11.key);
    function r2() {
      return void 0 === t2 && (t2 = e11.localStorage || window.localStorage), t2;
    }
    function u2() {
      return JSON.parse(r2().getItem(n2) || "{}");
    }
    function a2(e12) {
      r2().setItem(n2, JSON.stringify(e12));
    }
    return { get: function(t3, n3) {
      var r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } };
      return Promise.resolve().then(function() {
        var n4, r4, i2;
        return n4 = e11.timeToLive ? 1e3 * e11.timeToLive : null, r4 = u2(), a2(i2 = Object.fromEntries(Object.entries(r4).filter(function(e12) {
          return void 0 !== bn(e12, 2)[1].timestamp;
        }))), n4 && a2(Object.fromEntries(Object.entries(i2).filter(function(e12) {
          var t4 = bn(e12, 2)[1], r5 = (/* @__PURE__ */ new Date()).getTime();
          return !(t4.timestamp + n4 < r5);
        }))), u2()[JSON.stringify(t3)];
      }).then(function(e12) {
        return Promise.all([e12 ? e12.value : n3(), void 0 !== e12]);
      }).then(function(e12) {
        var t4 = bn(e12, 2), n4 = t4[0], u3 = t4[1];
        return Promise.all([n4, u3 || r3.miss(n4)]);
      }).then(function(e12) {
        return bn(e12, 1)[0];
      });
    }, set: function(e12, t3) {
      return Promise.resolve().then(function() {
        var a3 = u2();
        return a3[JSON.stringify(e12)] = { timestamp: (/* @__PURE__ */ new Date()).getTime(), value: t3 }, r2().setItem(n2, JSON.stringify(a3)), t3;
      });
    }, delete: function(e12) {
      return Promise.resolve().then(function() {
        var t3 = u2();
        delete t3[JSON.stringify(e12)], r2().setItem(n2, JSON.stringify(t3));
      });
    }, clear: function() {
      return Promise.resolve().then(function() {
        r2().removeItem(n2);
      });
    } };
  }
  function yD(e11) {
    var t2 = Cn(e11.caches), n2 = t2.shift();
    return void 0 === n2 ? { get: function(e12, t3) {
      var n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } };
      return t3().then(function(e13) {
        return Promise.all([e13, n3.miss(e13)]);
      }).then(function(e13) {
        return bn(e13, 1)[0];
      });
    }, set: function(e12, t3) {
      return Promise.resolve(t3);
    }, delete: function(e12) {
      return Promise.resolve();
    }, clear: function() {
      return Promise.resolve();
    } } : { get: function(e12, r2) {
      var u2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } };
      return n2.get(e12, r2, u2).catch(function() {
        return yD({ caches: t2 }).get(e12, r2, u2);
      });
    }, set: function(e12, r2) {
      return n2.set(e12, r2).catch(function() {
        return yD({ caches: t2 }).set(e12, r2);
      });
    }, delete: function(e12) {
      return n2.delete(e12).catch(function() {
        return yD({ caches: t2 }).delete(e12);
      });
    }, clear: function() {
      return n2.clear().catch(function() {
        return yD({ caches: t2 }).clear();
      });
    } };
  }
  function gD() {
    var e11 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { serializable: true }, t2 = {};
    return { get: function(n2, r2) {
      var u2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } }, a2 = JSON.stringify(n2);
      if (a2 in t2) return Promise.resolve(e11.serializable ? JSON.parse(t2[a2]) : t2[a2]);
      var i2 = r2();
      return i2.then(function(e12) {
        return u2.miss(e12);
      }).then(function() {
        return i2;
      });
    }, set: function(n2, r2) {
      return t2[JSON.stringify(n2)] = e11.serializable ? JSON.stringify(r2) : r2, Promise.resolve(r2);
    }, delete: function(e12) {
      return delete t2[JSON.stringify(e12)], Promise.resolve();
    }, clear: function() {
      return t2 = {}, Promise.resolve();
    } };
  }
  function FD(e11) {
    var t2 = e11.algoliaAgents, n2 = e11.client, r2 = e11.version, u2 = (function(e12) {
      var t3 = { value: "Algolia for JavaScript (".concat(e12, ")"), add: function(e13) {
        var n3 = "; ".concat(e13.segment).concat(void 0 !== e13.version ? " (".concat(e13.version, ")") : "");
        return -1 === t3.value.indexOf(n3) && (t3.value = "".concat(t3.value).concat(n3)), t3;
      } };
      return t3;
    })(r2).add({ segment: n2, version: r2 });
    return t2.forEach(function(e12) {
      return u2.add(e12);
    }), u2;
  }
  var ED = 12e4;
  function _D(e11) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "up", n2 = Date.now();
    return yn(yn({}, e11), {}, { status: t2, lastUpdate: n2, isUp: function() {
      return "up" === t2 || Date.now() - n2 > ED;
    }, isTimedOut: function() {
      return "timed out" === t2 && Date.now() - n2 <= ED;
    } });
  }
  var bD = (function() {
    function e11(t2, n2) {
      var r2;
      return on(this, e11), dn(r2 = an(this, e11, [t2]), "name", "AlgoliaError"), n2 && (r2.name = n2), r2;
    }
    return vn(e11, Sn(Error)), ln(e11);
  })();
  var CD = (function() {
    function e11(t2, n2, r2) {
      var u2;
      return on(this, e11), dn(u2 = an(this, e11, [t2, r2]), "stackTrace", void 0), u2.stackTrace = n2, u2;
    }
    return vn(e11, bD), ln(e11);
  })();
  var kD = (function() {
    function e11(t2) {
      return on(this, e11), an(this, e11, ["Unreachable hosts - your application id may be incorrect. If the error persists, please visit our help center https://alg.li/support-unreachable-hosts or reach out to the Algolia Support team: https://alg.li/support", t2, "RetryError"]);
    }
    return vn(e11, CD), ln(e11);
  })();
  var AD = (function() {
    function e11(t2, n2, r2) {
      var u2, a2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "ApiError";
      return on(this, e11), dn(u2 = an(this, e11, [t2, r2, a2]), "status", void 0), u2.status = n2, u2;
    }
    return vn(e11, CD), ln(e11);
  })();
  var wD = (function() {
    function e11(t2, n2) {
      var r2;
      return on(this, e11), dn(r2 = an(this, e11, [t2, "DeserializationError"]), "response", void 0), r2.response = n2, r2;
    }
    return vn(e11, bD), ln(e11);
  })();
  var SD = (function() {
    function e11(t2, n2, r2, u2) {
      var a2;
      return on(this, e11), dn(a2 = an(this, e11, [t2, n2, u2, "DetailedApiError"]), "error", void 0), a2.error = r2, a2;
    }
    return vn(e11, AD), ln(e11);
  })();
  function xD(e11, t2, n2) {
    var r2, u2 = (r2 = n2, Object.keys(r2).filter(function(e12) {
      return void 0 !== r2[e12];
    }).sort().map(function(e12) {
      return "".concat(e12, "=").concat(encodeURIComponent("[object Array]" === Object.prototype.toString.call(r2[e12]) ? r2[e12].join(",") : r2[e12]).replace(/\+/g, "%20"));
    }).join("&")), a2 = "".concat(e11.protocol, "://").concat(e11.url).concat(e11.port ? ":".concat(e11.port) : "", "/").concat("/" === t2.charAt(0) ? t2.substring(1) : t2);
    return u2.length && (a2 += "?".concat(u2)), a2;
  }
  function OD(e11, t2) {
    if ("GET" !== e11.method && (void 0 !== e11.data || void 0 !== t2.data)) {
      var n2 = Array.isArray(e11.data) ? e11.data : yn(yn({}, e11.data), t2.data);
      return JSON.stringify(n2);
    }
  }
  function BD(e11, t2, n2) {
    var r2 = yn(yn(yn({ Accept: "application/json" }, e11), t2), n2), u2 = {};
    return Object.keys(r2).forEach(function(e12) {
      var t3 = r2[e12];
      u2[e12.toLowerCase()] = t3;
    }), u2;
  }
  function ID(e11) {
    try {
      return JSON.parse(e11.content);
    } catch (t2) {
      throw new wD(t2.message, e11);
    }
  }
  function TD(e11, t2) {
    var n2 = e11.content, r2 = e11.status;
    try {
      var u2 = JSON.parse(n2);
      return "error" in u2 ? new SD(u2.message, r2, u2.error, t2) : new AD(u2.message, r2, t2);
    } catch (e12) {
    }
    return new AD(n2, r2, t2);
  }
  function PD(e11) {
    var t2 = e11.isTimedOut, n2 = e11.status;
    return t2 || (function(e12) {
      return !e12.isTimedOut && 0 === ~~e12.status;
    })({ isTimedOut: t2, status: n2 }) || 2 != ~~(n2 / 100) && 4 != ~~(n2 / 100);
  }
  function jD(e11) {
    return 2 == ~~(e11.status / 100);
  }
  function ND(e11) {
    return e11.map(function(e12) {
      return zD(e12);
    });
  }
  function zD(e11) {
    var t2 = e11.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
    return yn(yn({}, e11), {}, { request: yn(yn({}, e11.request), {}, { headers: yn(yn({}, e11.request.headers), t2) }) });
  }
  var RD = ["appId", "apiKey", "authMode", "algoliaAgents"];
  var MD = ["params"];
  var ZD = "5.37.0";
  function LD(e11) {
    return [{ url: "".concat(e11, "-dsn.algolia.net"), accept: "read", protocol: "https" }, { url: "".concat(e11, ".algolia.net"), accept: "write", protocol: "https" }].concat((function(e12) {
      for (var t2 = e12, n2 = e12.length - 1; n2 > 0; n2--) {
        var r2 = Math.floor(Math.random() * (n2 + 1)), u2 = e12[n2];
        t2[n2] = e12[r2], t2[r2] = u2;
      }
      return t2;
    })([{ url: "".concat(e11, "-1.algolianet.com"), accept: "readWrite", protocol: "https" }, { url: "".concat(e11, "-2.algolianet.com"), accept: "readWrite", protocol: "https" }, { url: "".concat(e11, "-3.algolianet.com"), accept: "readWrite", protocol: "https" }]));
  }
  var $D = "4.3.2";
  function qD(e11, t2, n2) {
    var r2 = Nt.useMemo(function() {
      var r3 = (function(e12, t3) {
        if (!e12 || "string" != typeof e12) throw new Error("`appId` is missing.");
        if (!t3 || "string" != typeof t3) throw new Error("`apiKey` is missing.");
        return (function(e13) {
          var t4 = e13.appId, n3 = e13.apiKey, r4 = e13.authMode, u2 = e13.algoliaAgents, a2 = gn(e13, RD), i2 = (function(e14, t5) {
            var n4 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "WithinHeaders", r5 = { "x-algolia-api-key": t5, "x-algolia-application-id": e14 };
            return { headers: function() {
              return "WithinHeaders" === n4 ? r5 : {};
            }, queryParameters: function() {
              return "WithinQueryParameters" === n4 ? r5 : {};
            } };
          })(t4, n3, r4), o2 = (function(e14) {
            var t5 = e14.hosts, n4 = e14.hostsCache, r5 = e14.baseHeaders, u3 = e14.logger, a3 = e14.baseQueryParameters, i3 = e14.algoliaAgent, o3 = e14.timeouts, s2 = e14.requester, c2 = e14.requestsCache, l2 = e14.responsesCache;
            function f2(e15) {
              return d2.apply(this, arguments);
            }
            function d2() {
              return (d2 = un(Fn().m(function e15(t6) {
                var r6, u4, a4, i4, o4;
                return Fn().w(function(e16) {
                  for (; ; ) switch (e16.n) {
                    case 0:
                      return e16.n = 1, Promise.all(t6.map(function(e17) {
                        return n4.get(e17, function() {
                          return Promise.resolve(_D(e17));
                        });
                      }));
                    case 1:
                      return r6 = e16.v, u4 = r6.filter(function(e17) {
                        return e17.isUp();
                      }), a4 = r6.filter(function(e17) {
                        return e17.isTimedOut();
                      }), i4 = [].concat(Cn(u4), Cn(a4)), o4 = i4.length > 0 ? i4 : t6, e16.a(2, { hosts: o4, getTimeout: function(e17, t7) {
                        return (0 === a4.length && 0 === e17 ? 1 : a4.length + 3 + e17) * t7;
                      } });
                  }
                }, e15);
              }))).apply(this, arguments);
            }
            function p2(e15, t6) {
              return h2.apply(this, arguments);
            }
            function h2() {
              return h2 = un(Fn().m(function e15(c3, l3) {
                var d3, p3, h3, v2, m2, D2, y2, g2, F2, E2, _2, b2, C2, k2 = arguments;
                return Fn().w(function(e16) {
                  for (; ; ) switch (e16.n) {
                    case 0:
                      if (d3 = !(k2.length > 2 && void 0 !== k2[2]) || k2[2], p3 = [], h3 = OD(c3, l3), v2 = BD(r5, c3.headers, l3.headers), m2 = "GET" === c3.method ? yn(yn({}, c3.data), l3.data) : {}, D2 = yn(yn(yn({}, a3), c3.queryParameters), m2), i3.value && (D2["x-algolia-agent"] = i3.value), l3 && l3.queryParameters) for (y2 = 0, g2 = Object.keys(l3.queryParameters); y2 < g2.length; y2++) F2 = g2[y2], l3.queryParameters[F2] && "[object Object]" !== Object.prototype.toString.call(l3.queryParameters[F2]) ? D2[F2] = l3.queryParameters[F2].toString() : D2[F2] = l3.queryParameters[F2];
                      return E2 = 0, _2 = (function() {
                        var e17 = un(Fn().m(function e18(t6, r6) {
                          var a4, i4, f3, m3, y3, g3;
                          return Fn().w(function(e19) {
                            for (; ; ) switch (e19.n) {
                              case 0:
                                if (void 0 !== (a4 = t6.pop())) {
                                  e19.n = 1;
                                  break;
                                }
                                throw new kD(ND(p3));
                              case 1:
                                return i4 = yn(yn({}, o3), l3.timeouts), f3 = { data: h3, headers: v2, method: c3.method, url: xD(a4, c3.path, D2), connectTimeout: r6(E2, i4.connect), responseTimeout: r6(E2, d3 ? i4.read : i4.write) }, m3 = function(e20) {
                                  var n5 = { request: f3, response: e20, host: a4, triesLeft: t6.length };
                                  return p3.push(n5), n5;
                                }, e19.n = 2, s2.send(f3);
                              case 2:
                                if (!PD(y3 = e19.v)) {
                                  e19.n = 4;
                                  break;
                                }
                                return g3 = m3(y3), y3.isTimedOut && E2++, u3.info("Retryable failure", zD(g3)), e19.n = 3, n4.set(a4, _D(a4, y3.isTimedOut ? "timed out" : "down"));
                              case 3:
                                return e19.a(2, _2(t6, r6));
                              case 4:
                                if (!jD(y3)) {
                                  e19.n = 5;
                                  break;
                                }
                                return e19.a(2, ID(y3));
                              case 5:
                                throw m3(y3), TD(y3, p3);
                              case 6:
                                return e19.a(2);
                            }
                          }, e18);
                        }));
                        return function(t6, n5) {
                          return e17.apply(this, arguments);
                        };
                      })(), b2 = t5.filter(function(e17) {
                        return "readWrite" === e17.accept || (d3 ? "read" === e17.accept : "write" === e17.accept);
                      }), e16.n = 1, f2(b2);
                    case 1:
                      return C2 = e16.v, e16.a(2, _2(Cn(C2.hosts).reverse(), C2.getTimeout));
                  }
                }, e15);
              })), h2.apply(this, arguments);
            }
            return { hostsCache: n4, requester: s2, timeouts: o3, logger: u3, algoliaAgent: i3, baseHeaders: r5, baseQueryParameters: a3, hosts: t5, request: function(e15) {
              var t6 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n5 = e15.useReadTransporter || "GET" === e15.method;
              if (!n5) return p2(e15, t6, n5);
              var u4 = function() {
                return p2(e15, t6);
              };
              if (true !== (t6.cacheable || e15.cacheable)) return u4();
              var i4 = { request: e15, requestOptions: t6, transporter: { queryParameters: a3, headers: r5 } };
              return l2.get(i4, function() {
                return c2.get(i4, function() {
                  return c2.set(i4, u4()).then(function(e16) {
                    return Promise.all([c2.delete(i4), e16]);
                  }, function(e16) {
                    return Promise.all([c2.delete(i4), Promise.reject(e16)]);
                  }).then(function(e16) {
                    var t7 = bn(e16, 2);
                    return t7[0], t7[1];
                  });
                });
              }, { miss: function(e16) {
                return l2.set(i4, e16);
              } });
            }, requestsCache: c2, responsesCache: l2 };
          })(yn(yn({ hosts: LD(t4) }, a2), {}, { algoliaAgent: FD({ algoliaAgents: u2, client: "Lite", version: ZD }), baseHeaders: yn(yn({ "content-type": "text/plain" }, i2.headers()), a2.baseHeaders), baseQueryParameters: yn(yn({}, i2.queryParameters()), a2.baseQueryParameters) }));
          return { transporter: o2, appId: t4, apiKey: n3, clearCache: function() {
            return Promise.all([o2.requestsCache.clear(), o2.responsesCache.clear()]).then(function() {
            });
          }, get _ua() {
            return o2.algoliaAgent.value;
          }, addAlgoliaAgent: function(e14, t5) {
            o2.algoliaAgent.add({ segment: e14, version: t5 });
          }, setClientApiKey: function(e14) {
            var t5 = e14.apiKey;
            r4 && "WithinHeaders" !== r4 ? o2.baseQueryParameters["x-algolia-api-key"] = t5 : o2.baseHeaders["x-algolia-api-key"] = t5;
          }, searchForHits: function(e14, t5) {
            return this.search(e14, t5);
          }, searchForFacets: function(e14, t5) {
            return this.search(e14, t5);
          }, customPost: function(e14, t5) {
            var n4 = e14.path, r5 = e14.parameters, u3 = e14.body;
            if (!n4) throw new Error("Parameter `path` is required when calling `customPost`.");
            var a3 = { method: "POST", path: "/{path}".replace("{path}", n4), queryParameters: r5 || {}, headers: {}, data: u3 || {} };
            return o2.request(a3, t5);
          }, getRecommendations: function(e14, t5) {
            if (e14 && Array.isArray(e14) && (e14 = { requests: e14 }), !e14) throw new Error("Parameter `getRecommendationsParams` is required when calling `getRecommendations`.");
            if (!e14.requests) throw new Error("Parameter `getRecommendationsParams.requests` is required when calling `getRecommendations`.");
            var n4 = { method: "POST", path: "/1/indexes/*/recommendations", queryParameters: {}, headers: {}, data: e14, useReadTransporter: true, cacheable: true };
            return o2.request(n4, t5);
          }, search: function(e14, t5) {
            if (e14 && Array.isArray(e14)) {
              var n4 = { requests: e14.map(function(e15) {
                var t6 = e15.params, n5 = gn(e15, MD);
                return "facet" === n5.type ? yn(yn(yn({}, n5), t6), {}, { type: "facet" }) : yn(yn(yn({}, n5), t6), {}, { facet: void 0, maxFacetHits: void 0, facetQuery: void 0 });
              }) };
              e14 = n4;
            }
            if (!e14) throw new Error("Parameter `searchMethodParams` is required when calling `search`.");
            if (!e14.requests) throw new Error("Parameter `searchMethodParams.requests` is required when calling `search`.");
            var r5 = { method: "POST", path: "/1/indexes/*/queries", queryParameters: {}, headers: {}, data: e14, useReadTransporter: true, cacheable: true };
            return o2.request(r5, t5);
          } };
        })(yn({ appId: e12, apiKey: t3, timeouts: { connect: 1e3, read: 2e3, write: 3e4 }, logger: { debug: function(e13, t4) {
          return Promise.resolve();
        }, info: function(e13, t4) {
          return Promise.resolve();
        }, error: function(e13, t4) {
          return Promise.resolve();
        } }, requester: { send: function(e13) {
          return new Promise(function(t4) {
            var n3 = new XMLHttpRequest();
            n3.open(e13.method, e13.url, true), Object.keys(e13.headers).forEach(function(t5) {
              return n3.setRequestHeader(t5, e13.headers[t5]);
            });
            var r4, u2 = function(e14, r5) {
              return setTimeout(function() {
                n3.abort(), t4({ status: 0, content: r5, isTimedOut: true });
              }, e14);
            }, a2 = u2(e13.connectTimeout, "Connection timeout");
            n3.onreadystatechange = function() {
              n3.readyState > n3.OPENED && void 0 === r4 && (clearTimeout(a2), r4 = u2(e13.responseTimeout, "Socket timeout"));
            }, n3.onerror = function() {
              0 === n3.status && (clearTimeout(a2), clearTimeout(r4), t4({ content: n3.responseText || "Network request failed", status: n3.status, isTimedOut: false }));
            }, n3.onload = function() {
              clearTimeout(a2), clearTimeout(r4), t4({ content: n3.responseText, status: n3.status, isTimedOut: false });
            }, n3.send(e13.data);
          });
        } }, algoliaAgents: [{ segment: "Browser" }], authMode: "WithinQueryParameters", responsesCache: gD(), requestsCache: gD({ serializable: false }), hostsCache: yD({ caches: [DD({ key: "".concat(ZD, "-").concat(e12) }), gD()] }) }, void 0));
      })(e11, t2);
      return r3.addAlgoliaAgent("docsearch", $D), false === /docsearch.js \(.*\)/.test(r3.transporter.algoliaAgent.value) && r3.addAlgoliaAgent("docsearch-react", $D), n2(r3);
    }, [e11, t2, n2]);
    return r2;
  }
  var UD = ["appId", "apiKey", "askAi", "maxResultsPerGroup", "theme", "onClose", "transformItems", "hitComponent", "resultsFooterComponent", "navigator", "initialScrollY", "transformSearchClient", "disableUserPersonalization", "initialQuery", "translations", "getMissingResultsUrl", "insights", "onAskAiToggle", "isAskAiActive", "recentSearchesLimit", "recentSearchesWithFavoritesLimit", "indices", "indexName", "searchParameters"];
  var HD = ["footer", "searchBox"];
  var VD = (function() {
    var e11 = un(Fn().m(function e12(t2) {
      var n2, r2, u2, a2, i2, o2, s2, c2, l2, f2, d2, p2, h2, v2, m2, D2, y2, g2, F2;
      return Fn().w(function(e13) {
        for (; ; ) switch (e13.p = e13.n) {
          case 0:
            return n2 = t2.query, r2 = t2.state, u2 = t2.setContext, a2 = t2.setStatus, i2 = t2.searchClient, o2 = t2.indexes, s2 = t2.snippetLength, c2 = t2.insights, l2 = t2.appId, f2 = t2.apiKey, d2 = t2.maxResultsPerGroup, p2 = t2.transformItems, h2 = void 0 === p2 ? Km : p2, v2 = t2.saveRecentSearch, m2 = t2.onClose, D2 = c2, e13.p = 1, e13.n = 2, i2.search({ requests: o2.map(function(e14) {
              var t3, r3, u3, a3, i3, o3, c3, l3 = "string" == typeof e14 ? e14 : e14.name, f3 = "string" == typeof e14 ? {} : e14.searchParameters;
              return yn({ query: n2, indexName: l3, attributesToRetrieve: null !== (t3 = null == f3 ? void 0 : f3.attributesToRetrieve) && void 0 !== t3 ? t3 : ["hierarchy.lvl0", "hierarchy.lvl1", "hierarchy.lvl2", "hierarchy.lvl3", "hierarchy.lvl4", "hierarchy.lvl5", "hierarchy.lvl6", "content", "type", "url"], attributesToSnippet: null !== (r3 = null == f3 ? void 0 : f3.attributesToSnippet) && void 0 !== r3 ? r3 : ["hierarchy.lvl1:".concat(s2.current), "hierarchy.lvl2:".concat(s2.current), "hierarchy.lvl3:".concat(s2.current), "hierarchy.lvl4:".concat(s2.current), "hierarchy.lvl5:".concat(s2.current), "hierarchy.lvl6:".concat(s2.current), "content:".concat(s2.current)], snippetEllipsisText: null !== (u3 = null == f3 ? void 0 : f3.snippetEllipsisText) && void 0 !== u3 ? u3 : "\u2026", highlightPreTag: null !== (a3 = null == f3 ? void 0 : f3.highlightPreTag) && void 0 !== a3 ? a3 : "<mark>", highlightPostTag: null !== (i3 = null == f3 ? void 0 : f3.highlightPostTag) && void 0 !== i3 ? i3 : "</mark>", hitsPerPage: null !== (o3 = null == f3 ? void 0 : f3.hitsPerPage) && void 0 !== o3 ? o3 : 20, clickAnalytics: null !== (c3 = null == f3 ? void 0 : f3.clickAnalytics) && void 0 !== c3 ? c3 : D2 }, null != f3 ? f3 : {});
            }) });
          case 2:
            return y2 = e13.v, g2 = y2.results, e13.a(2, g2.flatMap(function(e14) {
              var t3, n3 = e14, a3 = n3.hits, i3 = n3.nbHits, o3 = Wm(h2(a3), function(e15) {
                return Xm(e15);
              }, d2);
              if (r2.context.searchSuggestions.length < Object.keys(o3).length && u2({ searchSuggestions: yn(yn({}, null !== (t3 = r2.context.searchSuggestions) && void 0 !== t3 ? t3 : []), Object.keys(o3)) }), i3) {
                var s3 = r2.context.nbHits;
                u2({ nbHits: (null != s3 ? s3 : 0) + i3 });
              }
              var c3 = {};
              return D2 && (c3 = { __autocomplete_indexName: n3.index, __autocomplete_queryID: n3.queryID, __autocomplete_algoliaCredentials: { appId: l2, apiKey: f2 } }), Object.values(o3).map(function(e15, t4) {
                return { sourceId: "hits_".concat(n3.index, "_").concat(t4), onSelect: function(e16) {
                  var t5 = e16.item, n4 = e16.event;
                  v2(t5), Jm(n4) || m2();
                }, getItemUrl: function(e16) {
                  return e16.item.url;
                }, getItems: function() {
                  return Object.values(Wm(e15, function(e16) {
                    return e16.hierarchy.lvl1;
                  }, d2)).map(function(e16) {
                    return e16.map(function(t5) {
                      var n4 = null, r3 = e16.find(function(e17) {
                        return "lvl1" === e17.type && e17.hierarchy.lvl1 === t5.hierarchy.lvl1;
                      });
                      return "lvl1" !== t5.type && r3 && (n4 = r3), yn(yn({}, t5), {}, { __docsearch_parent: n4 }, c3);
                    });
                  }).flat();
                } };
              });
            }));
          case 3:
            throw e13.p = 3, "RetryError" === (F2 = e13.v).name && a2("error"), F2;
          case 4:
            return e13.a(2);
        }
      }, e12, null, [[1, 3]]);
    }));
    return function(t2) {
      return e11.apply(this, arguments);
    };
  })();
  function WD(e11) {
    var t2, n2, r2, u2 = e11.appId, a2 = e11.apiKey, i2 = e11.askAi, o2 = e11.maxResultsPerGroup, s2 = e11.theme, c2 = e11.onClose, l2 = void 0 === c2 ? Qm : c2, f2 = e11.transformItems, d2 = void 0 === f2 ? Km : f2, p2 = e11.hitComponent, h2 = void 0 === p2 ? Lh : p2, m2 = e11.resultsFooterComponent, D2 = void 0 === m2 ? function() {
      return null;
    } : m2, y2 = e11.navigator, g2 = e11.initialScrollY, F2 = void 0 === g2 ? 0 : g2, E2 = e11.transformSearchClient, _2 = void 0 === E2 ? Km : E2, b2 = e11.disableUserPersonalization, C2 = void 0 !== b2 && b2, k2 = e11.initialQuery, A2 = void 0 === k2 ? "" : k2, w2 = e11.translations, S2 = void 0 === w2 ? {} : w2, x2 = e11.getMissingResultsUrl, O2 = e11.insights, B2 = void 0 !== O2 && O2, I2 = e11.onAskAiToggle, T2 = e11.isAskAiActive, P2 = void 0 !== T2 && T2, j2 = e11.recentSearchesLimit, N2 = void 0 === j2 ? 7 : j2, z2 = e11.recentSearchesWithFavoritesLimit, R2 = void 0 === z2 ? 4 : z2, M2 = e11.indices, Z2 = void 0 === M2 ? [] : M2, L2 = e11.indexName, $2 = e11.searchParameters, q2 = gn(e11, UD), U2 = S2.footer, H2 = S2.searchBox, V2 = gn(S2, HD), W2 = bn(Nt.useState({ query: "", collections: [], completion: null, context: {}, isOpen: false, activeItemId: null, status: "idle" }), 2), K2 = W2[0], J2 = W2[1], Q2 = Boolean(i2), G2 = (null == S2 || null === (t2 = S2.searchBox) || void 0 === t2 ? void 0 : t2.placeholderText) || q2.placeholder || "Search docs";
    Q2 && (G2 = (null == S2 || null === (n2 = S2.searchBox) || void 0 === n2 ? void 0 : n2.placeholderText) || "Search docs or ask AI a question"), P2 && (G2 = (null == S2 || null === (r2 = S2.searchBox) || void 0 === r2 ? void 0 : r2.placeholderTextAskAi) || "Ask another question...");
    var Y2 = Nt.useRef(null), X2 = Nt.useRef(null), ee2 = Nt.useRef(null), te2 = Nt.useRef(null), ne2 = Nt.useRef(null), re2 = Nt.useRef(15), ue2 = Nt.useRef("undefined" != typeof window ? window.getSelection().toString().slice(0, 512) : "").current, ae2 = Nt.useRef(A2 || ue2).current, ie2 = qD(u2, a2, _2), oe2 = "object" === An(i2) ? i2 : null, se2 = "string" == typeof i2 ? i2 : (null == oe2 ? void 0 : oe2.assistantId) || null, ce2 = null == oe2 ? void 0 : oe2.searchParameters, le2 = bn(Nt.useState("initial"), 2), fe2 = le2[0], de2 = le2[1], pe2 = (function(e12) {
      var t3 = e12.assistantId, n3 = e12.searchClient, r3 = e12.suggestedQuestionsEnabled, u3 = void 0 !== r3 && r3, a3 = bn(Se([]), 2), i3 = a3[0], o3 = a3[1];
      return Oe(function() {
        var e13 = (function() {
          var e14 = un(Fn().m(function e15() {
            var r4, u4, a4;
            return Fn().w(function(e16) {
              for (; ; ) switch (e16.n) {
                case 0:
                  return e16.n = 1, n3.search({ requests: [{ indexName: "algolia_ask_ai_suggested_questions", filters: "state:published AND assistantId:".concat(t3), hitsPerPage: 3 }] });
                case 1:
                  r4 = e16.v, u4 = r4.results, a4 = u4[0], o3(a4.hits);
                case 2:
                  return e16.a(2);
              }
            }, e15);
          }));
          return function() {
            return e14.apply(this, arguments);
          };
        })();
        u3 && t3 && "" !== t3 && e13();
      }, [u3, t3, n3]), i3;
    })({ assistantId: se2, searchClient: ie2, suggestedQuestionsEnabled: null == oe2 ? void 0 : oe2.suggestedQuestions }), he2 = [];
    if (L2 && "" !== L2 && he2.push({ name: L2, searchParameters: $2 }), Z2.length > 0 && Z2.forEach(function(e12) {
      he2.push("string" == typeof e12 ? { name: e12 } : e12);
    }), he2.length < 1) throw new Error("Must supply either `indexName` or `indices` for DocSearch to work");
    var ve2, me2, De2, ye2, ge2, Fe2, Ee2, _e2 = he2[0].name, be2 = Nt.useRef((ve2 = { key: "__DOCSEARCH_ASKAI_CONVERSATIONS__".concat((null == oe2 ? void 0 : oe2.indexName) || _e2), limit: 10 }, me2 = ve2.key, De2 = ve2.limit, ye2 = void 0 === De2 ? 5 : De2, ge2 = hD(me2), Fe2 = ge2.getItem().slice(0, ye2), { add: function(e12) {
      var t3 = e12.objectID, n3 = e12.query, r3 = Fe2.findIndex(function(e13) {
        return e13.objectID === t3 || e13.query === n3;
      });
      r3 > -1 ? Fe2[r3] = e12 : (Fe2.unshift(e12), Fe2 = Fe2.slice(0, ye2)), ge2.setItem(Fe2);
    }, addFeedback: function(e12, t3) {
      var n3 = Fe2.find(function(t4) {
        var n4;
        return null === (n4 = t4.messages) || void 0 === n4 ? void 0 : n4.some(function(t5) {
          return t5.id === e12;
        });
      });
      if (n3 && n3.messages) {
        var r3 = n3.messages.find(function(t4) {
          return t4.id === e12;
        });
        r3 && (r3.feedback = t3, ge2.setItem(Fe2));
      }
    }, getOne: function(e12) {
      var t3, n3 = Fe2.find(function(t4) {
        var n4;
        return null === (n4 = t4.messages) || void 0 === n4 ? void 0 : n4.some(function(t5) {
          return t5.id === e12;
        });
      });
      return null == n3 || null === (t3 = n3.messages) || void 0 === t3 ? void 0 : t3.find(function(t4) {
        return t4.id === e12;
      });
    }, getAll: function() {
      return Fe2;
    }, remove: function(e12) {
      Fe2 = Fe2.filter(function(t3) {
        return t3.objectID !== e12.objectID;
      }), ge2.setItem(Fe2);
    }, getConversation: function(e12) {
      var t3 = Fe2.find(function(t4) {
        var n3;
        return null === (n3 = t4.messages) || void 0 === n3 ? void 0 : n3.some(function(t5) {
          return t5.id === e12;
        });
      });
      if (t3 && t3.messages) return t3;
    } })).current, Ce2 = Nt.useRef(mD({ key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(_e2), limit: 10 })).current, ke2 = Nt.useRef(mD({ key: "__DOCSEARCH_RECENT_SEARCHES__".concat(_e2), limit: 0 === Ce2.getAll().length ? N2 : R2 })).current, Ae2 = bn(Nt.useState(null), 2), we2 = Ae2[0], xe2 = Ae2[1], Be2 = bn(Nt.useState(false), 2), Te2 = Be2[0], Pe2 = Be2[1], Ne2 = (function() {
      var e12 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t3 = e12.experimental_throttle, n3 = e12.resume, r3 = void 0 !== n3 && n3, u3 = v(e12, tn), a3 = Ie("chat" in u3 ? u3.chat : new gd(u3));
      ("chat" in u3 && u3.chat !== a3.current || "id" in u3 && a3.current.id !== u3.id) && (a3.current = "chat" in u3 ? u3.chat : new gd(u3));
      var i3 = "id" in u3 ? u3.id : null, o3 = je(function(e13) {
        return a3.current["~registerMessagesCallback"](e13, t3);
      }, [t3, i3]), s3 = Ke(o3, function() {
        return a3.current.messages;
      }), c3 = Ke(a3.current["~registerStatusCallback"], function() {
        return a3.current.status;
      }), l3 = Ke(a3.current["~registerErrorCallback"], function() {
        return a3.current.error;
      }), f3 = je(function(e13) {
        "function" == typeof e13 && (e13 = e13(a3.current.messages)), a3.current.messages = e13;
      }, [a3]);
      return Oe(function() {
        r3 && a3.current.resumeStream();
      }, [r3, a3]), { id: a3.current.id, messages: s3, setMessages: f3, sendMessage: a3.current.sendMessage, regenerate: a3.current.regenerate, clearError: a3.current.clearError, stop: a3.current.stop, error: l3, resumeStream: a3.current.resumeStream, status: c3, addToolResult: a3.current.addToolResult };
    })({ sendAutomaticallyWhen: Hf, transport: new qf({ api: Ih, headers: (Ee2 = un(Fn().m(function e12() {
      var t3;
      return Fn().w(function(e13) {
        for (; ; ) switch (e13.n) {
          case 0:
            if (se2) {
              e13.n = 1;
              break;
            }
            throw new Error("Ask AI assistant ID is required");
          case 1:
            return t3 = null, e13.n = 2, Nh({ assistantId: se2 });
          case 2:
            t3 = e13.v;
          case 3:
            return e13.a(2, yn(yn({}, t3 ? { authorization: "TOKEN ".concat(t3) } : {}), {}, { "X-Algolia-API-Key": (null == oe2 ? void 0 : oe2.apiKey) || a2, "X-Algolia-Application-Id": (null == oe2 ? void 0 : oe2.appId) || u2, "X-Algolia-Index-Name": (null == oe2 ? void 0 : oe2.indexName) || _e2, "X-Algolia-Assistant-Id": se2 || "", "X-AI-SDK-Version": "v5" }));
        }
      }, e12);
    })), function() {
      return Ee2.apply(this, arguments);
    }), body: ce2 ? { searchParameters: ce2 } : {} }), onError: function(e12) {
      xe2(e12);
    } }), ze2 = Ne2.messages, Re2 = Ne2.sendMessage, Me2 = Ne2.status, Ze2 = Ne2.setMessages, Le2 = Ne2.error, $e2 = Ne2.stop, qe2 = Nt.useRef(Me2);
    Nt.useEffect(function() {
      if (!C2) {
        if ("streaming" === qe2.current && "ready" === Me2) {
          Te2 && ze2.at(-1) && (ze2.at(-1).metadata = { stopped: true });
          var e12, t3 = fn(ze2[0].parts);
          try {
            for (t3.s(); !(e12 = t3.n()).done; ) {
              var n3 = e12.value;
              "text" === n3.type && be2.add(_m(n3.text, ze2));
            }
          } catch (e13) {
            t3.e(e13);
          } finally {
            t3.f();
          }
        }
        qe2.current = Me2;
      }
    }, [Me2, ze2, be2, C2, Te2]);
    var Ue2 = Nt.useCallback(function(e12) {
      var t3 = e12.hierarchy, n3 = ["lvl6", "lvl5", "lvl4", "lvl3", "lvl2", "lvl1", "lvl0"].find(function(e13) {
        return t3[e13];
      });
      return yn(yn({}, e12), {}, { type: n3 || "lvl0", content: null });
    }, []), He2 = Nt.useCallback(function(e12) {
      if (!C2) {
        var t3 = "content" === e12.type ? e12.__docsearch_parent || Ue2(e12) : e12;
        t3 && -1 === Ce2.getAll().findIndex(function(e13) {
          return e13.objectID === t3.objectID;
        }) && ke2.add(t3);
      }
    }, [Ce2, ke2, C2, Ue2]), Ve2 = Nt.useCallback(function(e12) {
      if (K2.context.algoliaInsightsPlugin && e12.__autocomplete_id) {
        var t3 = e12, n3 = { eventName: "Item Selected", index: t3.__autocomplete_indexName, items: [t3], positions: [e12.__autocomplete_id], queryID: t3.__autocomplete_queryID };
        K2.context.algoliaInsightsPlugin.insights.clickedObjectIDsAfterSearch(n3);
      }
    }, [K2.context.algoliaInsightsPlugin]), We2 = Nt.useRef(void 0), Je2 = Nt.useCallback(function(e12, t3) {
      var n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
      e12 && "new-conversation" === fe2 && (Ze2([]), de2("initial"));
      var r3 = {};
      if (n3 && (r3.body = { suggestedQuestionId: n3.objectID }), I2(e12), Pe2(false), Re2({ role: "user", parts: [{ type: "text", text: t3 }] }, r3), te2.current) {
        var u3 = te2.current;
        "function" == typeof u3.scrollTo ? u3.scrollTo({ top: 0, behavior: "smooth" }) : u3.scrollTop = 0;
      }
      We2.current && We2.current.setQuery("");
    }, [I2, Re2, fe2, de2, Ze2]), Qe2 = Nt.useCallback((function() {
      var e12 = un(Fn().m(function e13(t3, n3) {
        var r3;
        return Fn().w(function(e14) {
          for (; ; ) switch (e14.n) {
            case 0:
              if (se2 && u2) {
                e14.n = 1;
                break;
              }
              return e14.a(2);
            case 1:
              return e14.n = 2, zh({ assistantId: se2, thumbs: n3, messageId: t3, appId: u2 });
            case 2:
              if (!(e14.v.status >= 300)) {
                e14.n = 3;
                break;
              }
              throw new Error("Failed, try again later");
            case 3:
              null === (r3 = be2.addFeedback) || void 0 === r3 || r3.call(be2, t3, 1 === n3 ? "like" : "dislike");
            case 4:
              return e14.a(2);
          }
        }, e13);
      }));
      return function(t3, n3) {
        return e12.apply(this, arguments);
      };
    })(), [se2, u2, be2]);
    We2.current || (We2.current = Bh({ id: "docsearch", defaultActiveItemId: 0, openOnFocus: true, initialState: { query: ae2, context: { searchSuggestions: [] } }, insights: Boolean(B2), navigator: y2, onStateChange: function(e12) {
      J2(e12.state);
    }, getSources: function(e12) {
      var t3 = e12.query, n3 = e12.state, r3 = e12.setContext, i3 = e12.setStatus;
      if (!t3) {
        var s3 = (function(e13) {
          var t4 = e13.recentSearches, n4 = e13.favoriteSearches, r4 = e13.saveRecentSearch, u3 = e13.onClose;
          return e13.disableUserPersonalization ? [] : [{ sourceId: "recentSearches", onSelect: function(e14) {
            var t5 = e14.item, n5 = e14.event;
            r4(t5), Jm(n5) || u3();
          }, getItemUrl: function(e14) {
            return e14.item.url;
          }, getItems: function() {
            return t4.getAll();
          } }, { sourceId: "favoriteSearches", onSelect: function(e14) {
            var t5 = e14.item, n5 = e14.event;
            r4(t5), Jm(n5) || u3();
          }, getItemUrl: function(e14) {
            return e14.item.url;
          }, getItems: function() {
            return n4.getAll();
          } }];
        })({ recentSearches: ke2, favoriteSearches: Ce2, saveRecentSearch: He2, onClose: l2, disableUserPersonalization: C2, canHandleAskAi: Q2 }), c3 = Q2 ? [{ sourceId: "recentConversations", getItems: function() {
          return C2 ? [] : be2.getAll();
        }, onSelect: function(e13) {
          var t4 = e13.item;
          t4.messages && (Ze2(t4.messages), I2(true));
        } }] : [];
        return [].concat(Cn(s3), c3);
      }
      var f3 = { context: n3.context }, p3 = VD({ query: t3, state: f3, setContext: r3, setStatus: i3, searchClient: ie2, indexes: he2, snippetLength: re2, insights: Boolean(B2), appId: u2, apiKey: a2, maxResultsPerGroup: o2, transformItems: d2, saveRecentSearch: He2, onClose: l2 }), h3 = Q2 ? [{ sourceId: "askAI", getItems: function() {
        return [{ type: "askAI", query: t3, url_without_anchor: "", objectID: "ask-ai-button", content: null, url: "", anchor: null, hierarchy: { lvl0: "Ask AI", lvl1: t3, lvl2: null, lvl3: null, lvl4: null, lvl5: null, lvl6: null }, _highlightResult: {}, _snippetResult: {}, __docsearch_parent: null }];
      }, onSelect: function(e13) {
        var t4 = e13.item;
        "askAI" === t4.type && t4.query && Je2(true, t4.query);
      } }] : [];
      return p3.then(function(e13) {
        return [].concat(h3, Cn(e13));
      });
    } }));
    var Ge2, Ye2, Xe2 = We2.current, et2 = Xe2.getEnvironmentProps, tt2 = Xe2.getRootProps, nt2 = Xe2.refresh;
    !(function(e12) {
      var t3 = e12.getEnvironmentProps, n3 = e12.panelElement, r3 = e12.formElement, u3 = e12.inputElement;
      Nt.useEffect(function() {
        if (n3 && r3 && u3) {
          var e13 = t3({ panelElement: n3, formElement: r3, inputElement: u3 }), a3 = e13.onTouchStart, i3 = e13.onTouchMove;
          return window.addEventListener("touchstart", a3), window.addEventListener("touchmove", i3), function() {
            window.removeEventListener("touchstart", a3), window.removeEventListener("touchmove", i3);
          };
        }
      }, [t3, n3, r3, u3]);
    })({ getEnvironmentProps: et2, panelElement: te2.current, formElement: ee2.current, inputElement: ne2.current }), Ge2 = { container: Y2.current }, Ye2 = Ge2.container, Nt.useEffect(function() {
      if (Ye2) {
        var e12 = Ye2.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"), t3 = e12[0], n3 = e12[e12.length - 1];
        return Ye2.addEventListener("keydown", r3), function() {
          Ye2.removeEventListener("keydown", r3);
        };
      }
      function r3(e13) {
        "Tab" === e13.key && (e13.shiftKey ? document.activeElement === t3 && (e13.preventDefault(), n3.focus()) : document.activeElement === n3 && (e13.preventDefault(), t3.focus()));
      }
    }, [Ye2]), xn({ theme: s2 }), Nt.useEffect(function() {
      return document.body.classList.add("DocSearch--active"), function() {
        var e12, t3;
        document.body.classList.remove("DocSearch--active"), null === (e12 = (t3 = window).scrollTo) || void 0 === e12 || e12.call(t3, 0, F2);
      };
    }, []), Nt.useEffect(function() {
      "undefined" != typeof window && window.localStorage && (function() {
        if ("undefined" == typeof window || !window.localStorage) return 0;
        var e12 = 0;
        for (var t3 in window.localStorage) window.localStorage.hasOwnProperty(t3) && (e12 += window.localStorage[t3].length + t3.length);
        return e12;
      })() > 4194304 && pD();
    }, []), Nt.useLayoutEffect(function() {
      var e12 = window.innerWidth - document.body.clientWidth;
      return document.body.style.marginRight = "".concat(e12, "px"), function() {
        document.body.style.marginRight = "0px";
      };
    }, []), Nt.useEffect(function() {
      window.matchMedia("(max-width: 768px)").matches && (re2.current = 5);
    }, []), Nt.useEffect(function() {
      var e12;
      te2.current && !P2 && ("function" == typeof (e12 = te2.current).scrollTo ? e12.scrollTo({ top: 0, behavior: "smooth" }) : e12.scrollTop = 0);
    }, [K2.query, P2]), Nt.useEffect(function() {
      ae2.length > 0 && (nt2(), ne2.current && ne2.current.focus());
    }, [ae2, nt2]), Nt.useEffect(function() {
      function e12() {
        if (X2.current) {
          var e13 = 0.01 * window.innerHeight;
          X2.current.style.setProperty("--docsearch-vh", "".concat(e13, "px"));
        }
      }
      return e12(), window.addEventListener("resize", e12), function() {
        window.removeEventListener("resize", e12);
      };
    }, []), Nt.useEffect(function() {
      P2 || (Xe2.refresh(), Ze2([]));
    }, [P2, Xe2, Ze2]), Nt.useEffect(function() {
      de2("initial");
    }, [P2, de2]);
    var rt2 = (function() {
      var e12 = un(Fn().m(function e13() {
        return Fn().w(function(e14) {
          for (; ; ) switch (e14.n) {
            case 0:
              return Pe2(true), e14.n = 1, $e2();
            case 1:
              return e14.a(2);
          }
        }, e13);
      }));
      return function() {
        return e12.apply(this, arguments);
      };
    })(), ut2 = true, at2 = K2.collections.some(function(e12) {
      return e12.items.length > 0;
    });
    return "idle" !== K2.status || false !== at2 || 0 !== K2.query.length || P2 || (ut2 = false), Nt.createElement("div", pn({ ref: Y2 }, tt2({ "aria-expanded": true }), { className: ["DocSearch", "DocSearch-Container", "stalled" === K2.status && "DocSearch-Container--Stalled", "error" === K2.status && "DocSearch-Container--Errored"].filter(Boolean).join(" "), role: "button", tabIndex: 0, onMouseDown: function(e12) {
      e12.target === e12.currentTarget && l2();
    } }), Nt.createElement("div", { className: "DocSearch-Modal", ref: X2 }, Nt.createElement("header", { className: "DocSearch-SearchBar", ref: ee2 }, Nt.createElement(dD, pn({}, Xe2, { state: K2, placeholder: G2 || "Search docs", autoFocus: 0 === ae2.length, inputRef: ne2, isFromSelection: Boolean(ae2) && ae2 === ue2, translations: H2, isAskAiActive: P2, askAiStatus: Me2, askAiState: fe2, setAskAiState: de2, onClose: l2, onAskAiToggle: I2, onAskAgain: function(e12) {
      Je2(true, e12);
    }, onStopAskAiStreaming: rt2, onNewConversation: function() {
      de2("new-conversation");
    }, onViewConversationHistory: function() {
      de2("conversation-history");
    } }))), ut2 && Nt.createElement("div", { className: "DocSearch-Dropdown", ref: te2 }, Nt.createElement(aD, pn({}, Xe2, { indexName: _e2, state: K2, hitComponent: h2, resultsFooterComponent: D2, disableUserPersonalization: C2, recentSearches: ke2, favoriteSearches: Ce2, conversations: be2, inputRef: ne2, translations: V2, getMissingResultsUrl: x2, isAskAiActive: P2, canHandleAskAi: Q2, messages: ze2, askAiStreamError: we2, askAiFetchError: Le2, status: Me2, hasCollections: at2, askAiState: fe2, selectAskAiQuestion: Je2, suggestedQuestions: pe2, selectSuggestedQuestion: function(e12) {
      Je2(true, e12.question, e12);
    }, onAskAiToggle: I2, onItemClick: function(e12, t3) {
      if ("askAI" === e12.type && e12.query) return "stored" === e12.anchor && "messages" in e12 ? (Ze2(e12.messages), I2(true)) : Je2(true, e12.query), de2("initial"), void t3.preventDefault();
      Ve2(e12), He2(e12), Jm(t3) || l2();
    }, onFeedback: Qe2 }))), Nt.createElement("footer", { className: "DocSearch-Footer" }, Nt.createElement(Zh, { translations: U2, isAskAiActive: P2 }))));
  }
  function KD(e11) {
    return Nt.createElement(Wt, e11, Nt.createElement(JD, e11));
  }
  function JD(e11) {
    var t2, n2, r2, u2 = Kt(), a2 = u2.searchButtonRef, i2 = u2.keyboardShortcuts, o2 = u2.isModalActive, s2 = u2.isAskAiActive, c2 = u2.initialQuery, l2 = u2.onAskAiToggle, f2 = u2.openModal, d2 = u2.closeModal;
    return Nt.createElement(Nt.Fragment, null, Nt.createElement(zn, { keyboardShortcuts: i2, ref: a2, translations: null === (t2 = e11.translations) || void 0 === t2 ? void 0 : t2.button, onClick: f2 }), o2 && mt(Nt.createElement(WD, pn({}, e11, { initialScrollY: window.scrollY, initialQuery: c2, translations: null == e11 || null === (n2 = e11.translations) || void 0 === n2 ? void 0 : n2.modal, isAskAiActive: s2, onAskAiToggle: l2, onClose: d2 })), null !== (r2 = e11.portalContainer) && void 0 !== r2 ? r2 : document.body));
  }
  var QD = function(e11, t2, n2, r2) {
    var u2;
    t2[0] = 0;
    for (var a2 = 1; a2 < t2.length; a2++) {
      var i2 = t2[a2++], o2 = t2[a2] ? (t2[0] |= i2 ? 1 : 2, n2[t2[a2++]]) : t2[++a2];
      3 === i2 ? r2[0] = o2 : 4 === i2 ? r2[1] = Object.assign(r2[1] || {}, o2) : 5 === i2 ? (r2[1] = r2[1] || {})[t2[++a2]] = o2 : 6 === i2 ? r2[1][t2[++a2]] += o2 + "" : i2 ? (u2 = e11.apply(o2, QD(e11, o2, n2, ["", null])), r2.push(u2), o2[0] ? t2[0] |= 2 : (t2[a2 - 2] = 0, t2[a2] = u2)) : r2.push(o2);
    }
    return r2;
  };
  var GD = /* @__PURE__ */ new Map();
  var YD = ["container", "environment", "transformSearchClient", "hitComponent", "resultsFooterComponent"];
  var XD = function(e11) {
    var t2 = GD.get(this);
    return t2 || (t2 = /* @__PURE__ */ new Map(), GD.set(this, t2)), (t2 = QD(this, t2.get(e11) || (t2.set(e11, t2 = (function(e12) {
      for (var t3, n2, r2 = 1, u2 = "", a2 = "", i2 = [0], o2 = function(e13) {
        1 === r2 && (e13 || (u2 = u2.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? i2.push(0, e13, u2) : 3 === r2 && (e13 || u2) ? (i2.push(3, e13, u2), r2 = 2) : 2 === r2 && "..." === u2 && e13 ? i2.push(4, e13, 0) : 2 === r2 && u2 && !e13 ? i2.push(5, 0, true, u2) : r2 >= 5 && ((u2 || !e13 && 5 === r2) && (i2.push(r2, 0, u2, n2), r2 = 6), e13 && (i2.push(r2, e13, 0, n2), r2 = 6)), u2 = "";
      }, s2 = 0; s2 < e12.length; s2++) {
        s2 && (1 === r2 && o2(), o2(s2));
        for (var c2 = 0; c2 < e12[s2].length; c2++) t3 = e12[s2][c2], 1 === r2 ? "<" === t3 ? (o2(), i2 = [i2], r2 = 3) : u2 += t3 : 4 === r2 ? "--" === u2 && ">" === t3 ? (r2 = 1, u2 = "") : u2 = t3 + u2[0] : a2 ? t3 === a2 ? a2 = "" : u2 += t3 : '"' === t3 || "'" === t3 ? a2 = t3 : ">" === t3 ? (o2(), r2 = 1) : r2 && ("=" === t3 ? (r2 = 5, n2 = u2, u2 = "") : "/" === t3 && (r2 < 5 || ">" === e12[s2][c2 + 1]) ? (o2(), 3 === r2 && (i2 = i2[0]), r2 = i2, (i2 = i2[0]).push(2, 0, r2), r2 = 0) : " " === t3 || "	" === t3 || "\n" === t3 || "\r" === t3 ? (o2(), r2 = 2) : u2 += t3), 3 === r2 && "!--" === u2 && (r2 = 4, i2 = i2[0]);
      }
      return o2(), i2;
    })(e11)), t2), arguments, [])).length > 1 ? t2 : t2[0];
  }.bind(q);
  function ey(e11) {
    if (e11) return function(t2) {
      var n2 = e11(t2, { html: XD });
      return Pt(n2) ? n2 : "function" == typeof n2 ? n2(t2) : "string" == typeof n2 ? q("span", null, n2) : n2;
    };
  }
  function ty(e11) {
    var t2 = e11.container, n2 = e11.environment, r2 = e11.transformSearchClient, u2 = e11.hitComponent, a2 = e11.resultsFooterComponent, i2 = v(e11, YD), o2 = (function(e12, t3) {
      if ("string" != typeof e12) return e12;
      if (!t3) throw new Error("Cannot resolve a selector without a browser environment.");
      var n3 = t3.document.querySelector(e12);
      if (!n3) throw new Error('Container selector did not match any element: "'.concat(e12, '"'));
      return n3;
    })(t2, n2 || ("undefined" != typeof window ? window : void 0));
    return bt(q(KD, h(h({}, i2), {}, { hitComponent: ey(u2), resultsFooterComponent: ey(a2), transformSearchClient: function(e12) {
      return null != e12 && e12.addAlgoliaAgent && e12.addAlgoliaAgent("docsearch.js", $D), "function" == typeof r2 ? r2(e12) : e12;
    } })), o2), function() {
      jt(o2);
    };
  }

  // ns-hugo-imp:/home/runner/work/paketo-website/paketo-website/build-environment/assets/js/components/search.js
  function Search({ element }) {
    ty({
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
  (*! @docsearch/js 4.3.2 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com *)
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE *)
*/
