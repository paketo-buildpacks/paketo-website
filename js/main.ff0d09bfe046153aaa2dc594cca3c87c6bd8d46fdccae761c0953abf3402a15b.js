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
      return new Promise((function(u2, a2) {
        var i2 = e11.apply(t2, r2);
        function o2(e12) {
          n(i2, u2, a2, o2, s2, "next", e12);
        }
        function s2(e12) {
          n(i2, u2, a2, o2, s2, "throw", e12);
        }
        o2(void 0);
      }));
    };
  }
  function u(e11, n2, r2) {
    return n2 = f(n2), (function(e12, n3) {
      if (n3 && ("object" == typeof n3 || "function" == typeof n3)) return n3;
      if (void 0 !== n3) throw new TypeError("Derived constructors may only return object or undefined");
      return t(e12);
    })(e11, p() ? Reflect.construct(n2, r2 || [], f(e11).constructor) : n2.apply(e11, r2));
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
      if (Array.isArray(e11) || (n2 = _(e11)) || t2) {
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
  function l() {
    return l = Object.assign ? Object.assign.bind() : function(e11) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2) ({}).hasOwnProperty.call(n2, r2) && (e11[r2] = n2[r2]);
      }
      return e11;
    }, l.apply(null, arguments);
  }
  function f(e11) {
    return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e12) {
      return e12.__proto__ || Object.getPrototypeOf(e12);
    }, f(e11);
  }
  function d(e11, t2) {
    if ("function" != typeof t2 && null !== t2) throw new TypeError("Super expression must either be null or a function");
    e11.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e11, writable: true, configurable: true } }), Object.defineProperty(e11, "prototype", { writable: false }), t2 && y(e11, t2);
  }
  function p() {
    try {
      var e11 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {
      })));
    } catch (e12) {
    }
    return (p = function() {
      return !!e11;
    })();
  }
  function h(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter((function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      }))), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function v(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? h(Object(n2), true).forEach((function(t3) {
        c(e11, t3, n2[t3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : h(Object(n2)).forEach((function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      }));
    }
    return e11;
  }
  function m(e11, t2) {
    if (null == e11) return {};
    var n2, r2, u2 = (function(e12, t3) {
      if (null == e12) return {};
      var n3 = {};
      for (var r3 in e12) if ({}.hasOwnProperty.call(e12, r3)) {
        if (t3.includes(r3)) continue;
        n3[r3] = e12[r3];
      }
      return n3;
    })(e11, t2);
    if (Object.getOwnPropertySymbols) {
      var a2 = Object.getOwnPropertySymbols(e11);
      for (r2 = 0; r2 < a2.length; r2++) n2 = a2[r2], t2.includes(n2) || {}.propertyIsEnumerable.call(e11, n2) && (u2[n2] = e11[n2]);
    }
    return u2;
  }
  function D() {
    D = function() {
      return t2;
    };
    var e11, t2 = {}, n2 = Object.prototype, r2 = n2.hasOwnProperty, u2 = Object.defineProperty || function(e12, t3, n3) {
      e12[t3] = n3.value;
    }, a2 = "function" == typeof Symbol ? Symbol : {}, i2 = a2.iterator || "@@iterator", o2 = a2.asyncIterator || "@@asyncIterator", s2 = a2.toStringTag || "@@toStringTag";
    function c2(e12, t3, n3) {
      return Object.defineProperty(e12, t3, { value: n3, enumerable: true, configurable: true, writable: true }), e12[t3];
    }
    try {
      c2({}, "");
    } catch (e12) {
      c2 = function(e13, t3, n3) {
        return e13[t3] = n3;
      };
    }
    function l2(e12, t3, n3, r3) {
      var a3 = t3 && t3.prototype instanceof y2 ? t3 : y2, i3 = Object.create(a3.prototype), o3 = new O2(r3 || []);
      return u2(i3, "_invoke", { value: w2(e12, n3, o3) }), i3;
    }
    function f2(e12, t3, n3) {
      try {
        return { type: "normal", arg: e12.call(t3, n3) };
      } catch (e13) {
        return { type: "throw", arg: e13 };
      }
    }
    t2.wrap = l2;
    var d2 = "suspendedStart", p2 = "suspendedYield", h2 = "executing", v2 = "completed", m2 = {};
    function y2() {
    }
    function g2() {
    }
    function F2() {
    }
    var E2 = {};
    c2(E2, i2, (function() {
      return this;
    }));
    var b2 = Object.getPrototypeOf, _2 = b2 && b2(b2(I2([])));
    _2 && _2 !== n2 && r2.call(_2, i2) && (E2 = _2);
    var k2 = F2.prototype = y2.prototype = Object.create(E2);
    function C2(e12) {
      ["next", "throw", "return"].forEach((function(t3) {
        c2(e12, t3, (function(e13) {
          return this._invoke(t3, e13);
        }));
      }));
    }
    function A2(e12, t3) {
      function n3(u3, a4, i3, o3) {
        var s3 = f2(e12[u3], e12, a4);
        if ("throw" !== s3.type) {
          var c3 = s3.arg, l3 = c3.value;
          return l3 && "object" == typeof l3 && r2.call(l3, "__await") ? t3.resolve(l3.__await).then((function(e13) {
            n3("next", e13, i3, o3);
          }), (function(e13) {
            n3("throw", e13, i3, o3);
          })) : t3.resolve(l3).then((function(e13) {
            c3.value = e13, i3(c3);
          }), (function(e13) {
            return n3("throw", e13, i3, o3);
          }));
        }
        o3(s3.arg);
      }
      var a3;
      u2(this, "_invoke", { value: function(e13, r3) {
        function u3() {
          return new t3((function(t4, u4) {
            n3(e13, r3, t4, u4);
          }));
        }
        return a3 = a3 ? a3.then(u3, u3) : u3();
      } });
    }
    function w2(t3, n3, r3) {
      var u3 = d2;
      return function(a3, i3) {
        if (u3 === h2) throw Error("Generator is already running");
        if (u3 === v2) {
          if ("throw" === a3) throw i3;
          return { value: e11, done: true };
        }
        for (r3.method = a3, r3.arg = i3; ; ) {
          var o3 = r3.delegate;
          if (o3) {
            var s3 = x2(o3, r3);
            if (s3) {
              if (s3 === m2) continue;
              return s3;
            }
          }
          if ("next" === r3.method) r3.sent = r3._sent = r3.arg;
          else if ("throw" === r3.method) {
            if (u3 === d2) throw u3 = v2, r3.arg;
            r3.dispatchException(r3.arg);
          } else "return" === r3.method && r3.abrupt("return", r3.arg);
          u3 = h2;
          var c3 = f2(t3, n3, r3);
          if ("normal" === c3.type) {
            if (u3 = r3.done ? v2 : p2, c3.arg === m2) continue;
            return { value: c3.arg, done: r3.done };
          }
          "throw" === c3.type && (u3 = v2, r3.method = "throw", r3.arg = c3.arg);
        }
      };
    }
    function x2(t3, n3) {
      var r3 = n3.method, u3 = t3.iterator[r3];
      if (u3 === e11) return n3.delegate = null, "throw" === r3 && t3.iterator.return && (n3.method = "return", n3.arg = e11, x2(t3, n3), "throw" === n3.method) || "return" !== r3 && (n3.method = "throw", n3.arg = new TypeError("The iterator does not provide a '" + r3 + "' method")), m2;
      var a3 = f2(u3, t3.iterator, n3.arg);
      if ("throw" === a3.type) return n3.method = "throw", n3.arg = a3.arg, n3.delegate = null, m2;
      var i3 = a3.arg;
      return i3 ? i3.done ? (n3[t3.resultName] = i3.value, n3.next = t3.nextLoc, "return" !== n3.method && (n3.method = "next", n3.arg = e11), n3.delegate = null, m2) : i3 : (n3.method = "throw", n3.arg = new TypeError("iterator result is not an object"), n3.delegate = null, m2);
    }
    function S2(e12) {
      var t3 = { tryLoc: e12[0] };
      1 in e12 && (t3.catchLoc = e12[1]), 2 in e12 && (t3.finallyLoc = e12[2], t3.afterLoc = e12[3]), this.tryEntries.push(t3);
    }
    function B2(e12) {
      var t3 = e12.completion || {};
      t3.type = "normal", delete t3.arg, e12.completion = t3;
    }
    function O2(e12) {
      this.tryEntries = [{ tryLoc: "root" }], e12.forEach(S2, this), this.reset(true);
    }
    function I2(t3) {
      if (t3 || "" === t3) {
        var n3 = t3[i2];
        if (n3) return n3.call(t3);
        if ("function" == typeof t3.next) return t3;
        if (!isNaN(t3.length)) {
          var u3 = -1, a3 = function n4() {
            for (; ++u3 < t3.length; ) if (r2.call(t3, u3)) return n4.value = t3[u3], n4.done = false, n4;
            return n4.value = e11, n4.done = true, n4;
          };
          return a3.next = a3;
        }
      }
      throw new TypeError(typeof t3 + " is not iterable");
    }
    return g2.prototype = F2, u2(k2, "constructor", { value: F2, configurable: true }), u2(F2, "constructor", { value: g2, configurable: true }), g2.displayName = c2(F2, s2, "GeneratorFunction"), t2.isGeneratorFunction = function(e12) {
      var t3 = "function" == typeof e12 && e12.constructor;
      return !!t3 && (t3 === g2 || "GeneratorFunction" === (t3.displayName || t3.name));
    }, t2.mark = function(e12) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e12, F2) : (e12.__proto__ = F2, c2(e12, s2, "GeneratorFunction")), e12.prototype = Object.create(k2), e12;
    }, t2.awrap = function(e12) {
      return { __await: e12 };
    }, C2(A2.prototype), c2(A2.prototype, o2, (function() {
      return this;
    })), t2.AsyncIterator = A2, t2.async = function(e12, n3, r3, u3, a3) {
      void 0 === a3 && (a3 = Promise);
      var i3 = new A2(l2(e12, n3, r3, u3), a3);
      return t2.isGeneratorFunction(n3) ? i3 : i3.next().then((function(e13) {
        return e13.done ? e13.value : i3.next();
      }));
    }, C2(k2), c2(k2, s2, "Generator"), c2(k2, i2, (function() {
      return this;
    })), c2(k2, "toString", (function() {
      return "[object Generator]";
    })), t2.keys = function(e12) {
      var t3 = Object(e12), n3 = [];
      for (var r3 in t3) n3.push(r3);
      return n3.reverse(), function e13() {
        for (; n3.length; ) {
          var r4 = n3.pop();
          if (r4 in t3) return e13.value = r4, e13.done = false, e13;
        }
        return e13.done = true, e13;
      };
    }, t2.values = I2, O2.prototype = { constructor: O2, reset: function(t3) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e11, this.done = false, this.delegate = null, this.method = "next", this.arg = e11, this.tryEntries.forEach(B2), !t3) for (var n3 in this) "t" === n3.charAt(0) && r2.call(this, n3) && !isNaN(+n3.slice(1)) && (this[n3] = e11);
    }, stop: function() {
      this.done = true;
      var e12 = this.tryEntries[0].completion;
      if ("throw" === e12.type) throw e12.arg;
      return this.rval;
    }, dispatchException: function(t3) {
      if (this.done) throw t3;
      var n3 = this;
      function u3(r3, u4) {
        return o3.type = "throw", o3.arg = t3, n3.next = r3, u4 && (n3.method = "next", n3.arg = e11), !!u4;
      }
      for (var a3 = this.tryEntries.length - 1; a3 >= 0; --a3) {
        var i3 = this.tryEntries[a3], o3 = i3.completion;
        if ("root" === i3.tryLoc) return u3("end");
        if (i3.tryLoc <= this.prev) {
          var s3 = r2.call(i3, "catchLoc"), c3 = r2.call(i3, "finallyLoc");
          if (s3 && c3) {
            if (this.prev < i3.catchLoc) return u3(i3.catchLoc, true);
            if (this.prev < i3.finallyLoc) return u3(i3.finallyLoc);
          } else if (s3) {
            if (this.prev < i3.catchLoc) return u3(i3.catchLoc, true);
          } else {
            if (!c3) throw Error("try statement without catch or finally");
            if (this.prev < i3.finallyLoc) return u3(i3.finallyLoc);
          }
        }
      }
    }, abrupt: function(e12, t3) {
      for (var n3 = this.tryEntries.length - 1; n3 >= 0; --n3) {
        var u3 = this.tryEntries[n3];
        if (u3.tryLoc <= this.prev && r2.call(u3, "finallyLoc") && this.prev < u3.finallyLoc) {
          var a3 = u3;
          break;
        }
      }
      a3 && ("break" === e12 || "continue" === e12) && a3.tryLoc <= t3 && t3 <= a3.finallyLoc && (a3 = null);
      var i3 = a3 ? a3.completion : {};
      return i3.type = e12, i3.arg = t3, a3 ? (this.method = "next", this.next = a3.finallyLoc, m2) : this.complete(i3);
    }, complete: function(e12, t3) {
      if ("throw" === e12.type) throw e12.arg;
      return "break" === e12.type || "continue" === e12.type ? this.next = e12.arg : "return" === e12.type ? (this.rval = this.arg = e12.arg, this.method = "return", this.next = "end") : "normal" === e12.type && t3 && (this.next = t3), m2;
    }, finish: function(e12) {
      for (var t3 = this.tryEntries.length - 1; t3 >= 0; --t3) {
        var n3 = this.tryEntries[t3];
        if (n3.finallyLoc === e12) return this.complete(n3.completion, n3.afterLoc), B2(n3), m2;
      }
    }, catch: function(e12) {
      for (var t3 = this.tryEntries.length - 1; t3 >= 0; --t3) {
        var n3 = this.tryEntries[t3];
        if (n3.tryLoc === e12) {
          var r3 = n3.completion;
          if ("throw" === r3.type) {
            var u3 = r3.arg;
            B2(n3);
          }
          return u3;
        }
      }
      throw Error("illegal catch attempt");
    }, delegateYield: function(t3, n3, r3) {
      return this.delegate = { iterator: I2(t3), resultName: n3, nextLoc: r3 }, "next" === this.method && (this.arg = e11), m2;
    } }, t2;
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
    })(e11, t2) || _(e11, t2) || (function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function F(t2) {
    return (function(t3) {
      if (Array.isArray(t3)) return e(t3);
    })(t2) || (function(e11) {
      if ("undefined" != typeof Symbol && null != e11[Symbol.iterator] || null != e11["@@iterator"]) return Array.from(e11);
    })(t2) || _(t2) || (function() {
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
  function b(e11) {
    return b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e12) {
      return typeof e12;
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : typeof e12;
    }, b(e11);
  }
  function _(t2, n2) {
    if (t2) {
      if ("string" == typeof t2) return e(t2, n2);
      var r2 = {}.toString.call(t2).slice(8, -1);
      return "Object" === r2 && t2.constructor && (r2 = t2.constructor.name), "Map" === r2 || "Set" === r2 ? Array.from(t2) : "Arguments" === r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2) ? e(t2, n2) : void 0;
    }
  }
  function k(e11) {
    var t2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
    return k = function(e12) {
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
          if (p()) return Reflect.construct.apply(null, arguments);
          var r2 = [null];
          r2.push.apply(r2, t3);
          var u2 = new (e13.bind.apply(e13, r2))();
          return n3 && y(u2, n3.prototype), u2;
        })(e12, arguments, f(this).constructor);
      }
      return n2.prototype = Object.create(e12.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), y(n2, e12);
    }, k(e11);
  }
  var C;
  var A;
  var w;
  var x;
  var S;
  var B;
  var O;
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
    if (arguments.length > 2 && (i2.children = arguments.length > 3 ? C.call(arguments, 2) : n2), "function" == typeof e11 && null != e11.defaultProps) for (a2 in e11.defaultProps) void 0 === i2[a2] && (i2[a2] = e11.defaultProps[a2]);
    return U(e11, i2, r2, u2, null);
  }
  function U(e11, t2, n2, r2, u2) {
    var a2 = { type: e11, props: t2, key: n2, ref: r2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == u2 ? ++w : u2, __i: -1, __u: 0 };
    return null == u2 && null != A.vnode && A.vnode(a2), a2;
  }
  function V(e11) {
    return e11.children;
  }
  function H(e11, t2) {
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
    (!e11.__d && (e11.__d = true) && x.push(e11) && !G.__r++ || S !== A.debounceRendering) && ((S = A.debounceRendering) || B)(G);
  }
  function G() {
    var e11, t2, n2, r2, u2, a2, i2, o2;
    for (x.sort(O); e11 = x.shift(); ) e11.__d && (t2 = x.length, r2 = void 0, a2 = (u2 = (n2 = e11).__v).__e, i2 = [], o2 = [], n2.__P && ((r2 = L({}, u2)).__v = u2.__v + 1, A.vnode && A.vnode(r2), ue(n2.__P, r2, u2, n2.__n, n2.__P.namespaceURI, 32 & u2.__u ? [a2] : null, i2, null == a2 ? W(u2) : a2, !!(32 & u2.__u), o2), r2.__v = u2.__v, r2.__.__k[r2.__i] = r2, ae(i2, r2, o2), r2.__e != a2 && K(r2)), x.length > t2 && x.sort(O));
    G.__r = 0;
  }
  function Q(e11, t2, n2, r2, u2, a2, i2, o2, s2, c2, l2) {
    var f2, d2, p2, h2, v2, m2, D2 = r2 && r2.__k || R, y2 = t2.length;
    for (s2 = (function(e12, t3, n3, r3, u3) {
      var a3, i3, o3, s3, c3, l3 = n3.length, f3 = l3, d3 = 0;
      for (e12.__k = new Array(u3), a3 = 0; a3 < u3; a3++) null != (i3 = t3[a3]) && "boolean" != typeof i3 && "function" != typeof i3 ? (s3 = a3 + d3, (i3 = e12.__k[a3] = "string" == typeof i3 || "number" == typeof i3 || "bigint" == typeof i3 || i3.constructor == String ? U(null, i3, null, null, null) : Z(i3) ? U(V, { children: i3 }, null, null, null) : void 0 === i3.constructor && i3.__b > 0 ? U(i3.type, i3.props, i3.key, i3.ref ? i3.ref : null, i3.__v) : i3).__ = e12, i3.__b = e12.__b + 1, o3 = null, -1 !== (c3 = i3.__i = ee(i3, n3, s3, f3)) && (f3--, (o3 = n3[c3]) && (o3.__u |= 2)), null == o3 || null === o3.__v ? (-1 == c3 && d3--, "function" != typeof i3.type && (i3.__u |= 4)) : c3 != s3 && (c3 == s3 - 1 ? d3-- : c3 == s3 + 1 ? d3++ : (c3 > s3 ? d3-- : d3++, i3.__u |= 4))) : e12.__k[a3] = null;
      if (f3) for (a3 = 0; a3 < l3; a3++) null != (o3 = n3[a3]) && !(2 & o3.__u) && (o3.__e == r3 && (r3 = W(o3)), se(o3, o3));
      return r3;
    })(n2, t2, D2, s2, y2), f2 = 0; f2 < y2; f2++) null != (p2 = n2.__k[f2]) && (d2 = -1 === p2.__i ? z : D2[p2.__i] || z, p2.__i = f2, m2 = ue(e11, p2, d2, u2, a2, i2, o2, s2, c2, l2), h2 = p2.__e, p2.ref && d2.ref != p2.ref && (d2.ref && oe(d2.ref, null, p2), l2.push(p2.ref, p2.__c || h2, p2)), null == v2 && null != h2 && (v2 = h2), 4 & p2.__u || d2.__k === p2.__k ? s2 = Y(p2, s2, e11) : "function" == typeof p2.type && void 0 !== m2 ? s2 = m2 : h2 && (s2 = h2.nextSibling), p2.__u &= -7);
    return n2.__e = v2, s2;
  }
  function Y(e11, t2, n2) {
    var r2, u2;
    if ("function" == typeof e11.type) {
      for (r2 = e11.__k, u2 = 0; r2 && u2 < r2.length; u2++) r2[u2] && (r2[u2].__ = e11, t2 = Y(r2[u2], t2, n2));
      return t2;
    }
    e11.__e != t2 && (t2 && e11.type && !n2.contains(t2) && (t2 = W(e11)), n2.insertBefore(e11.__e, t2 || null), t2 = e11.__e);
    do {
      t2 = t2 && t2.nextSibling;
    } while (null != t2 && 8 == t2.nodeType);
    return t2;
  }
  function X(e11, t2) {
    return t2 = t2 || [], null == e11 || "boolean" == typeof e11 || (Z(e11) ? e11.some((function(e12) {
      X(e12, t2);
    })) : t2.push(e11)), t2;
  }
  function ee(e11, t2, n2, r2) {
    var u2, a2, i2 = e11.key, o2 = e11.type, s2 = t2[n2];
    if (null === s2 || s2 && i2 == s2.key && o2 === s2.type && !(2 & s2.__u)) return n2;
    if (r2 > (null == s2 || 2 & s2.__u ? 0 : 1)) for (u2 = n2 - 1, a2 = n2 + 1; u2 >= 0 || a2 < t2.length; ) {
      if (u2 >= 0) {
        if ((s2 = t2[u2]) && !(2 & s2.__u) && i2 == s2.key && o2 === s2.type) return u2;
        u2--;
      }
      if (a2 < t2.length) {
        if ((s2 = t2[a2]) && !(2 & s2.__u) && i2 == s2.key && o2 === s2.type) return a2;
        a2++;
      }
    }
    return -1;
  }
  function te(e11, t2, n2) {
    "-" == t2[0] ? e11.setProperty(t2, null == n2 ? "" : n2) : e11[t2] = null == n2 ? "" : "number" != typeof n2 || M.test(t2) ? n2 : n2 + "px";
  }
  function ne(e11, t2, n2, r2, u2) {
    var a2;
    e: if ("style" == t2) if ("string" == typeof n2) e11.style.cssText = n2;
    else {
      if ("string" == typeof r2 && (e11.style.cssText = r2 = ""), r2) for (t2 in r2) n2 && t2 in n2 || te(e11.style, t2, "");
      if (n2) for (t2 in n2) r2 && n2[t2] === r2[t2] || te(e11.style, t2, n2[t2]);
    }
    else if ("o" == t2[0] && "n" == t2[1]) a2 = t2 != (t2 = t2.replace(I, "$1")), t2 = t2.toLowerCase() in e11 || "onFocusOut" == t2 || "onFocusIn" == t2 ? t2.toLowerCase().slice(2) : t2.slice(2), e11.l || (e11.l = {}), e11.l[t2 + a2] = n2, n2 ? r2 ? n2.u = r2.u : (n2.u = T, e11.addEventListener(t2, a2 ? j : P, a2)) : e11.removeEventListener(t2, a2 ? j : P, a2);
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
    var l2, f2, d2, p2, h2, v2, m2, D2, y2, g2, F2, E2, b2, _2, k2, C2, w2, x2 = t2.type;
    if (void 0 !== t2.constructor) return null;
    128 & n2.__u && (s2 = !!(32 & n2.__u), a2 = [o2 = t2.__e = n2.__e]), (l2 = A.__b) && l2(t2);
    e: if ("function" == typeof x2) try {
      if (D2 = t2.props, y2 = "prototype" in x2 && x2.prototype.render, g2 = (l2 = x2.contextType) && r2[l2.__c], F2 = l2 ? g2 ? g2.props.value : l2.__ : r2, n2.__c ? m2 = (f2 = t2.__c = n2.__c).__ = f2.__E : (y2 ? t2.__c = f2 = new x2(D2, F2) : (t2.__c = f2 = new H(D2, F2), f2.constructor = x2, f2.render = ce), g2 && g2.sub(f2), f2.props = D2, f2.state || (f2.state = {}), f2.context = F2, f2.__n = r2, d2 = f2.__d = true, f2.__h = [], f2._sb = []), y2 && null == f2.__s && (f2.__s = f2.state), y2 && null != x2.getDerivedStateFromProps && (f2.__s == f2.state && (f2.__s = L({}, f2.__s)), L(f2.__s, x2.getDerivedStateFromProps(D2, f2.__s))), p2 = f2.props, h2 = f2.state, f2.__v = t2, d2) y2 && null == x2.getDerivedStateFromProps && null != f2.componentWillMount && f2.componentWillMount(), y2 && null != f2.componentDidMount && f2.__h.push(f2.componentDidMount);
      else {
        if (y2 && null == x2.getDerivedStateFromProps && D2 !== p2 && null != f2.componentWillReceiveProps && f2.componentWillReceiveProps(D2, F2), !f2.__e && (null != f2.shouldComponentUpdate && false === f2.shouldComponentUpdate(D2, f2.__s, F2) || t2.__v == n2.__v)) {
          for (t2.__v != n2.__v && (f2.props = D2, f2.state = f2.__s, f2.__d = false), t2.__e = n2.__e, t2.__k = n2.__k, t2.__k.some((function(e12) {
            e12 && (e12.__ = t2);
          })), E2 = 0; E2 < f2._sb.length; E2++) f2.__h.push(f2._sb[E2]);
          f2._sb = [], f2.__h.length && i2.push(f2);
          break e;
        }
        null != f2.componentWillUpdate && f2.componentWillUpdate(D2, f2.__s, F2), y2 && null != f2.componentDidUpdate && f2.__h.push((function() {
          f2.componentDidUpdate(p2, h2, v2);
        }));
      }
      if (f2.context = F2, f2.props = D2, f2.__P = e11, f2.__e = false, b2 = A.__r, _2 = 0, y2) {
        for (f2.state = f2.__s, f2.__d = false, b2 && b2(t2), l2 = f2.render(f2.props, f2.state, f2.context), k2 = 0; k2 < f2._sb.length; k2++) f2.__h.push(f2._sb[k2]);
        f2._sb = [];
      } else do {
        f2.__d = false, b2 && b2(t2), l2 = f2.render(f2.props, f2.state, f2.context), f2.state = f2.__s;
      } while (f2.__d && ++_2 < 25);
      f2.state = f2.__s, null != f2.getChildContext && (r2 = L(L({}, r2), f2.getChildContext())), y2 && !d2 && null != f2.getSnapshotBeforeUpdate && (v2 = f2.getSnapshotBeforeUpdate(p2, h2)), o2 = Q(e11, Z(C2 = null != l2 && l2.type === V && null == l2.key ? l2.props.children : l2) ? C2 : [C2], t2, n2, r2, u2, a2, i2, o2, s2, c2), f2.base = t2.__e, t2.__u &= -161, f2.__h.length && i2.push(f2), m2 && (f2.__E = f2.__ = null);
    } catch (e12) {
      if (t2.__v = null, s2 || null != a2) if (e12.then) {
        for (t2.__u |= s2 ? 160 : 128; o2 && 8 == o2.nodeType && o2.nextSibling; ) o2 = o2.nextSibling;
        a2[a2.indexOf(o2)] = null, t2.__e = o2;
      } else for (w2 = a2.length; w2--; ) $(a2[w2]);
      else t2.__e = n2.__e, t2.__k = n2.__k;
      A.__e(e12, t2, n2);
    }
    else null == a2 && t2.__v == n2.__v ? (t2.__k = n2.__k, t2.__e = n2.__e) : o2 = t2.__e = ie(n2.__e, t2, n2, r2, u2, a2, i2, s2, c2);
    return (l2 = A.diffed) && l2(t2), 128 & t2.__u ? void 0 : o2;
  }
  function ae(e11, t2, n2) {
    for (var r2 = 0; r2 < n2.length; r2++) oe(n2[r2], n2[++r2], n2[++r2]);
    A.__c && A.__c(t2, e11), e11.some((function(t3) {
      try {
        e11 = t3.__h, t3.__h = [], e11.some((function(e12) {
          e12.call(t3);
        }));
      } catch (e12) {
        A.__e(e12, t3.__v);
      }
    }));
  }
  function ie(e11, t2, n2, r2, u2, a2, i2, o2, s2) {
    var c2, l2, f2, d2, p2, h2, v2, m2 = n2.props, D2 = t2.props, y2 = t2.type;
    if ("svg" == y2 ? u2 = "http://www.w3.org/2000/svg" : "math" == y2 ? u2 = "http://www.w3.org/1998/Math/MathML" : u2 || (u2 = "http://www.w3.org/1999/xhtml"), null != a2) {
      for (c2 = 0; c2 < a2.length; c2++) if ((p2 = a2[c2]) && "setAttribute" in p2 == !!y2 && (y2 ? p2.localName == y2 : 3 == p2.nodeType)) {
        e11 = p2, a2[c2] = null;
        break;
      }
    }
    if (null == e11) {
      if (null == y2) return document.createTextNode(D2);
      e11 = document.createElementNS(u2, y2, D2.is && D2), o2 && (A.__m && A.__m(t2, a2), o2 = false), a2 = null;
    }
    if (null === y2) m2 === D2 || o2 && e11.data === D2 || (e11.data = D2);
    else {
      if (a2 = a2 && C.call(e11.childNodes), m2 = n2.props || z, !o2 && null != a2) for (m2 = {}, c2 = 0; c2 < e11.attributes.length; c2++) m2[(p2 = e11.attributes[c2]).name] = p2.value;
      for (c2 in m2) if (p2 = m2[c2], "children" == c2) ;
      else if ("dangerouslySetInnerHTML" == c2) f2 = p2;
      else if (!(c2 in D2)) {
        if ("value" == c2 && "defaultValue" in D2 || "checked" == c2 && "defaultChecked" in D2) continue;
        ne(e11, c2, null, p2, u2);
      }
      for (c2 in D2) p2 = D2[c2], "children" == c2 ? d2 = p2 : "dangerouslySetInnerHTML" == c2 ? l2 = p2 : "value" == c2 ? h2 = p2 : "checked" == c2 ? v2 = p2 : o2 && "function" != typeof p2 || m2[c2] === p2 || ne(e11, c2, p2, m2[c2], u2);
      if (l2) o2 || f2 && (l2.__html === f2.__html || l2.__html === e11.innerHTML) || (e11.innerHTML = l2.__html), t2.__k = [];
      else if (f2 && (e11.innerHTML = ""), Q(e11, Z(d2) ? d2 : [d2], t2, n2, r2, "foreignObject" == y2 ? "http://www.w3.org/1999/xhtml" : u2, a2, i2, a2 ? a2[0] : n2.__k && W(n2, 0), o2, s2), null != a2) for (c2 = a2.length; c2--; ) $(a2[c2]);
      o2 || (c2 = "value", "progress" == y2 && null == h2 ? e11.removeAttribute("value") : void 0 !== h2 && (h2 !== e11[c2] || "progress" == y2 && !h2 || "option" == y2 && h2 !== m2[c2]) && ne(e11, c2, h2, m2[c2], u2), c2 = "checked", void 0 !== v2 && v2 !== e11[c2] && ne(e11, c2, v2, m2[c2], u2));
    }
    return e11;
  }
  function oe(e11, t2, n2) {
    try {
      if ("function" == typeof e11) {
        var r2 = "function" == typeof e11.__u;
        r2 && e11.__u(), r2 && null == t2 || (e11.__u = e11(t2));
      } else e11.current = t2;
    } catch (e12) {
      A.__e(e12, n2);
    }
  }
  function se(e11, t2, n2) {
    var r2, u2;
    if (A.unmount && A.unmount(e11), (r2 = e11.ref) && (r2.current && r2.current !== e11.__e || oe(r2, null, t2)), null != (r2 = e11.__c)) {
      if (r2.componentWillUnmount) try {
        r2.componentWillUnmount();
      } catch (e12) {
        A.__e(e12, t2);
      }
      r2.base = r2.__P = null;
    }
    if (r2 = e11.__k) for (u2 = 0; u2 < r2.length; u2++) r2[u2] && se(r2[u2], t2, n2 || "function" != typeof e11.type);
    n2 || $(e11.__e), e11.__c = e11.__ = e11.__e = void 0;
  }
  function ce(e11, t2, n2) {
    return this.constructor(e11, n2);
  }
  function le(e11, t2, n2) {
    var r2, u2, a2, i2;
    t2 == document && (t2 = document.documentElement), A.__ && A.__(e11, t2), u2 = (r2 = "function" == typeof n2) ? null : n2 && n2.__k || t2.__k, a2 = [], i2 = [], ue(t2, e11 = (!r2 && n2 || t2).__k = q(V, null, [e11]), u2 || z, z, t2.namespaceURI, !r2 && n2 ? [n2] : u2 ? null : t2.firstChild ? C.call(t2.childNodes) : null, a2, !r2 && n2 ? n2 : u2 ? u2.__e : t2.firstChild, r2, i2), ae(a2, e11, i2);
  }
  function fe(e11, t2) {
    le(e11, t2, fe);
  }
  function de(e11, t2, n2) {
    var r2, u2, a2, i2, o2 = L({}, e11.props);
    for (a2 in e11.type && e11.type.defaultProps && (i2 = e11.type.defaultProps), t2) "key" == a2 ? r2 = t2[a2] : "ref" == a2 ? u2 = t2[a2] : o2[a2] = void 0 === t2[a2] && void 0 !== i2 ? i2[a2] : t2[a2];
    return arguments.length > 2 && (o2.children = arguments.length > 3 ? C.call(arguments, 2) : n2), U(e11.type, o2, r2 || e11.key, u2 || e11.ref, null);
  }
  C = R.slice, A = { __e: function(e11, t2, n2, r2) {
    for (var u2, a2, i2; t2 = t2.__; ) if ((u2 = t2.__c) && !u2.__) try {
      if ((a2 = u2.constructor) && null != a2.getDerivedStateFromError && (u2.setState(a2.getDerivedStateFromError(e11)), i2 = u2.__d), null != u2.componentDidCatch && (u2.componentDidCatch(e11, r2 || {}), i2 = u2.__d), i2) return u2.__E = u2;
    } catch (t3) {
      e11 = t3;
    }
    throw e11;
  } }, w = 0, H.prototype.setState = function(e11, t2) {
    var n2;
    n2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = L({}, this.state), "function" == typeof e11 && (e11 = e11(L({}, n2), this.props)), e11 && L(n2, e11), null != e11 && this.__v && (t2 && this._sb.push(t2), J(this));
  }, H.prototype.forceUpdate = function(e11) {
    this.__v && (this.__e = true, e11 && this.__h.push(e11), J(this));
  }, H.prototype.render = V, x = [], B = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, O = function(e11, t2) {
    return e11.__v.__b - t2.__v.__b;
  }, G.__r = 0, I = /(PointerCapture)$|Capture$/i, T = 0, P = re(false), j = re(true), N = 0;
  var pe;
  var he;
  var ve;
  var me;
  var De = 0;
  var ye = [];
  var ge = A;
  var Fe = ge.__b;
  var Ee = ge.__r;
  var be = ge.diffed;
  var _e = ge.__c;
  var ke = ge.unmount;
  var Ce = ge.__;
  function Ae(e11, t2) {
    ge.__h && ge.__h(he, e11, De || t2), De = 0;
    var n2 = he.__H || (he.__H = { __: [], __h: [] });
    return e11 >= n2.__.length && n2.__.push({}), n2.__[e11];
  }
  function we(e11) {
    return De = 1, xe(Ue, e11);
  }
  function xe(e11, t2, n2) {
    var r2 = Ae(pe++, 2);
    if (r2.t = e11, !r2.__c && (r2.__ = [n2 ? n2(t2) : Ue(void 0, t2), function(e12) {
      var t3 = r2.__N ? r2.__N[0] : r2.__[0], n3 = r2.t(t3, e12);
      t3 !== n3 && (r2.__N = [n3, r2.__[1]], r2.__c.setState({}));
    }], r2.__c = he, !he.u)) {
      var u2 = function(e12, t3, n3) {
        if (!r2.__c.__H) return true;
        var u3 = r2.__c.__H.__.filter((function(e13) {
          return !!e13.__c;
        }));
        if (u3.every((function(e13) {
          return !e13.__N;
        }))) return !a2 || a2.call(this, e12, t3, n3);
        var i3 = r2.__c.props !== e12;
        return u3.forEach((function(e13) {
          if (e13.__N) {
            var t4 = e13.__[0];
            e13.__ = e13.__N, e13.__N = void 0, t4 !== e13.__[0] && (i3 = true);
          }
        })), a2 && a2.call(this, e12, t3, n3) || i3;
      };
      he.u = true;
      var a2 = he.shouldComponentUpdate, i2 = he.componentWillUpdate;
      he.componentWillUpdate = function(e12, t3, n3) {
        if (this.__e) {
          var r3 = a2;
          a2 = void 0, u2(e12, t3, n3), a2 = r3;
        }
        i2 && i2.call(this, e12, t3, n3);
      }, he.shouldComponentUpdate = u2;
    }
    return r2.__N || r2.__;
  }
  function Se(e11, t2) {
    var n2 = Ae(pe++, 3);
    !ge.__s && qe(n2.__H, t2) && (n2.__ = e11, n2.i = t2, he.__H.__h.push(n2));
  }
  function Be(e11, t2) {
    var n2 = Ae(pe++, 4);
    !ge.__s && qe(n2.__H, t2) && (n2.__ = e11, n2.i = t2, he.__h.push(n2));
  }
  function Oe(e11) {
    return De = 5, Te((function() {
      return { current: e11 };
    }), []);
  }
  function Ie(e11, t2, n2) {
    De = 6, Be((function() {
      return "function" == typeof e11 ? (e11(t2()), function() {
        return e11(null);
      }) : e11 ? (e11.current = t2(), function() {
        return e11.current = null;
      }) : void 0;
    }), null == n2 ? n2 : n2.concat(e11));
  }
  function Te(e11, t2) {
    var n2 = Ae(pe++, 7);
    return qe(n2.__H, t2) && (n2.__ = e11(), n2.__H = t2, n2.__h = e11), n2.__;
  }
  function Pe(e11, t2) {
    return De = 8, Te((function() {
      return e11;
    }), t2);
  }
  function je(e11) {
    var t2 = he.context[e11.__c], n2 = Ae(pe++, 9);
    return n2.c = e11, t2 ? (null == n2.__ && (n2.__ = true, t2.sub(he)), t2.props.value) : e11.__;
  }
  function Ne(e11, t2) {
    ge.useDebugValue && ge.useDebugValue(t2 ? t2(e11) : e11);
  }
  function ze() {
    var e11 = Ae(pe++, 11);
    if (!e11.__) {
      for (var t2 = he.__v; null !== t2 && !t2.__m && null !== t2.__; ) t2 = t2.__;
      var n2 = t2.__m || (t2.__m = [0, 0]);
      e11.__ = "P" + n2[0] + "-" + n2[1]++;
    }
    return e11.__;
  }
  function Re() {
    for (var e11; e11 = ye.shift(); ) if (e11.__P && e11.__H) try {
      e11.__H.__h.forEach(Le), e11.__H.__h.forEach($e), e11.__H.__h = [];
    } catch (t2) {
      e11.__H.__h = [], ge.__e(t2, e11.__v);
    }
  }
  ge.__b = function(e11) {
    he = null, Fe && Fe(e11);
  }, ge.__ = function(e11, t2) {
    e11 && t2.__k && t2.__k.__m && (e11.__m = t2.__k.__m), Ce && Ce(e11, t2);
  }, ge.__r = function(e11) {
    Ee && Ee(e11), pe = 0;
    var t2 = (he = e11.__c).__H;
    t2 && (ve === he ? (t2.__h = [], he.__h = [], t2.__.forEach((function(e12) {
      e12.__N && (e12.__ = e12.__N), e12.i = e12.__N = void 0;
    }))) : (t2.__h.forEach(Le), t2.__h.forEach($e), t2.__h = [], pe = 0)), ve = he;
  }, ge.diffed = function(e11) {
    be && be(e11);
    var t2 = e11.__c;
    t2 && t2.__H && (t2.__H.__h.length && (1 !== ye.push(t2) && me === ge.requestAnimationFrame || ((me = ge.requestAnimationFrame) || Ze)(Re)), t2.__H.__.forEach((function(e12) {
      e12.i && (e12.__H = e12.i), e12.i = void 0;
    }))), ve = he = null;
  }, ge.__c = function(e11, t2) {
    t2.some((function(e12) {
      try {
        e12.__h.forEach(Le), e12.__h = e12.__h.filter((function(e13) {
          return !e13.__ || $e(e13);
        }));
      } catch (n2) {
        t2.some((function(e13) {
          e13.__h && (e13.__h = []);
        })), t2 = [], ge.__e(n2, e12.__v);
      }
    })), _e && _e(e11, t2);
  }, ge.unmount = function(e11) {
    ke && ke(e11);
    var t2, n2 = e11.__c;
    n2 && n2.__H && (n2.__H.__.forEach((function(e12) {
      try {
        Le(e12);
      } catch (e13) {
        t2 = e13;
      }
    })), n2.__H = void 0, t2 && ge.__e(t2, n2.__v));
  };
  var Me = "function" == typeof requestAnimationFrame;
  function Ze(e11) {
    var t2, n2 = function() {
      clearTimeout(r2), Me && cancelAnimationFrame(t2), setTimeout(e11);
    }, r2 = setTimeout(n2, 100);
    Me && (t2 = requestAnimationFrame(n2));
  }
  function Le(e11) {
    var t2 = he, n2 = e11.__c;
    "function" == typeof n2 && (e11.__c = void 0, n2()), he = t2;
  }
  function $e(e11) {
    var t2 = he;
    e11.__c = e11.__(), he = t2;
  }
  function qe(e11, t2) {
    return !e11 || e11.length !== t2.length || t2.some((function(t3, n2) {
      return t3 !== e11[n2];
    }));
  }
  function Ue(e11, t2) {
    return "function" == typeof t2 ? t2(e11) : t2;
  }
  function Ve(e11, t2) {
    for (var n2 in t2) e11[n2] = t2[n2];
    return e11;
  }
  function He(e11, t2) {
    for (var n2 in e11) if ("__source" !== n2 && !(n2 in t2)) return true;
    for (var r2 in t2) if ("__source" !== r2 && e11[r2] !== t2[r2]) return true;
    return false;
  }
  function We(e11, t2) {
    var n2 = t2(), r2 = we({ t: { __: n2, u: t2 } }), u2 = r2[0].t, a2 = r2[1];
    return Be((function() {
      u2.__ = n2, u2.u = t2, Ke(u2) && a2({ t: u2 });
    }), [e11, n2, t2]), Se((function() {
      return Ke(u2) && a2({ t: u2 }), e11((function() {
        Ke(u2) && a2({ t: u2 });
      }));
    }), [e11]), n2;
  }
  function Ke(e11) {
    var t2, n2, r2 = e11.u, u2 = e11.__;
    try {
      var a2 = r2();
      return !((t2 = u2) === (n2 = a2) && (0 !== t2 || 1 / t2 == 1 / n2) || t2 != t2 && n2 != n2);
    } catch (e12) {
      return true;
    }
  }
  function Je(e11) {
    e11();
  }
  function Ge(e11) {
    return e11;
  }
  function Qe() {
    return [false, Je];
  }
  var Ye = Be;
  function Xe(e11, t2) {
    this.props = e11, this.context = t2;
  }
  function et(e11, t2) {
    function n2(e12) {
      var n3 = this.props.ref, r3 = n3 == e12.ref;
      return !r3 && n3 && (n3.call ? n3(null) : n3.current = null), t2 ? !t2(this.props, e12) || !r3 : He(this.props, e12);
    }
    function r2(t3) {
      return this.shouldComponentUpdate = n2, q(e11, t3);
    }
    return r2.displayName = "Memo(" + (e11.displayName || e11.name) + ")", r2.prototype.isReactComponent = true, r2.__f = true, r2;
  }
  (Xe.prototype = new H()).isPureReactComponent = true, Xe.prototype.shouldComponentUpdate = function(e11, t2) {
    return He(this.props, e11) || He(this.state, t2);
  };
  var tt = A.__b;
  A.__b = function(e11) {
    e11.type && e11.type.__f && e11.ref && (e11.props.ref = e11.ref, e11.ref = null), tt && tt(e11);
  };
  var nt = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  var rt = function(e11, t2) {
    return null == e11 ? null : X(X(e11).map(t2));
  };
  var ut = { map: rt, forEach: rt, count: function(e11) {
    return e11 ? X(e11).length : 0;
  }, only: function(e11) {
    var t2 = X(e11);
    if (1 !== t2.length) throw "Children.only";
    return t2[0];
  }, toArray: X };
  var at = A.__e;
  A.__e = function(e11, t2, n2, r2) {
    if (e11.then) {
      for (var u2, a2 = t2; a2 = a2.__; ) if ((u2 = a2.__c) && u2.__c) return null == t2.__e && (t2.__e = n2.__e, t2.__k = n2.__k), u2.__c(e11, t2);
    }
    at(e11, t2, n2, r2);
  };
  var it = A.unmount;
  function ot(e11, t2, n2) {
    return e11 && (e11.__c && e11.__c.__H && (e11.__c.__H.__.forEach((function(e12) {
      "function" == typeof e12.__c && e12.__c();
    })), e11.__c.__H = null), null != (e11 = Ve({}, e11)).__c && (e11.__c.__P === n2 && (e11.__c.__P = t2), e11.__c = null), e11.__k = e11.__k && e11.__k.map((function(e12) {
      return ot(e12, t2, n2);
    }))), e11;
  }
  function st(e11, t2, n2) {
    return e11 && n2 && (e11.__v = null, e11.__k = e11.__k && e11.__k.map((function(e12) {
      return st(e12, t2, n2);
    })), e11.__c && e11.__c.__P === t2 && (e11.__e && n2.appendChild(e11.__e), e11.__c.__e = true, e11.__c.__P = n2)), e11;
  }
  function ct() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function lt(e11) {
    var t2 = e11.__.__c;
    return t2 && t2.__a && t2.__a(e11);
  }
  function ft() {
    this.i = null, this.l = null;
  }
  A.unmount = function(e11) {
    var t2 = e11.__c;
    t2 && t2.__R && t2.__R(), t2 && 32 & e11.__u && (e11.type = null), it && it(e11);
  }, (ct.prototype = new H()).__c = function(e11, t2) {
    var n2 = t2.__c, r2 = this;
    null == r2.o && (r2.o = []), r2.o.push(n2);
    var u2 = lt(r2.__v), a2 = false, i2 = function() {
      a2 || (a2 = true, n2.__R = null, u2 ? u2(o2) : o2());
    };
    n2.__R = i2;
    var o2 = function() {
      if (!--r2.__u) {
        if (r2.state.__a) {
          var e12 = r2.state.__a;
          r2.__v.__k[0] = st(e12, e12.__c.__P, e12.__c.__O);
        }
        var t3;
        for (r2.setState({ __a: r2.__b = null }); t3 = r2.o.pop(); ) t3.forceUpdate();
      }
    };
    r2.__u++ || 32 & t2.__u || r2.setState({ __a: r2.__b = r2.__v.__k[0] }), e11.then(i2, i2);
  }, ct.prototype.componentWillUnmount = function() {
    this.o = [];
  }, ct.prototype.render = function(e11, t2) {
    if (this.__b) {
      if (this.__v.__k) {
        var n2 = document.createElement("div"), r2 = this.__v.__k[0].__c;
        this.__v.__k[0] = ot(this.__b, n2, r2.__O = r2.__P);
      }
      this.__b = null;
    }
    var u2 = t2.__a && q(V, null, e11.fallback);
    return u2 && (u2.__u &= -33), [q(V, null, t2.__a ? null : e11.children), u2];
  };
  var dt = function(e11, t2, n2) {
    if (++n2[1] === n2[0] && e11.l.delete(t2), e11.props.revealOrder && ("t" !== e11.props.revealOrder[0] || !e11.l.size)) for (n2 = e11.i; n2; ) {
      for (; n2.length > 3; ) n2.pop()();
      if (n2[1] < n2[0]) break;
      e11.i = n2 = n2[2];
    }
  };
  function pt(e11) {
    return this.getChildContext = function() {
      return e11.context;
    }, e11.children;
  }
  function ht(e11) {
    var t2 = this, n2 = e11.h;
    t2.componentWillUnmount = function() {
      le(null, t2.v), t2.v = null, t2.h = null;
    }, t2.h && t2.h !== n2 && t2.componentWillUnmount(), t2.v || (t2.h = n2, t2.v = { nodeType: 1, parentNode: n2, childNodes: [], contains: function() {
      return true;
    }, appendChild: function(e12) {
      this.childNodes.push(e12), t2.h.appendChild(e12);
    }, insertBefore: function(e12, n3) {
      this.childNodes.push(e12), t2.h.insertBefore(e12, n3);
    }, removeChild: function(e12) {
      this.childNodes.splice(this.childNodes.indexOf(e12) >>> 1, 1), t2.h.removeChild(e12);
    } }), le(q(pt, { context: t2.context }, e11.__v), t2.v);
  }
  function vt(e11, t2) {
    var n2 = q(ht, { __v: e11, h: t2 });
    return n2.containerInfo = t2, n2;
  }
  (ft.prototype = new H()).__a = function(e11) {
    var t2 = this, n2 = lt(t2.__v), r2 = t2.l.get(e11);
    return r2[0]++, function(u2) {
      var a2 = function() {
        t2.props.revealOrder ? (r2.push(u2), dt(t2, e11, r2)) : u2();
      };
      n2 ? n2(a2) : a2();
    };
  }, ft.prototype.render = function(e11) {
    this.i = null, this.l = /* @__PURE__ */ new Map();
    var t2 = X(e11.children);
    e11.revealOrder && "b" === e11.revealOrder[0] && t2.reverse();
    for (var n2 = t2.length; n2--; ) this.l.set(t2[n2], this.i = [1, 0, this.i]);
    return e11.children;
  }, ft.prototype.componentDidUpdate = ft.prototype.componentDidMount = function() {
    var e11 = this;
    this.l.forEach((function(t2, n2) {
      dt(e11, n2, t2);
    }));
  };
  var mt = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
  var Dt = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
  var yt = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
  var gt = /[A-Z0-9]/g;
  var Ft = "undefined" != typeof document;
  var Et = function(e11) {
    return ("undefined" != typeof Symbol && "symbol" == b(Symbol()) ? /fil|che|rad/ : /fil|che|ra/).test(e11);
  };
  function bt(e11, t2, n2) {
    return null == t2.__k && (t2.textContent = ""), le(e11, t2), "function" == typeof n2 && n2(), e11 ? e11.__c : null;
  }
  H.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(e11) {
    Object.defineProperty(H.prototype, e11, { configurable: true, get: function() {
      return this["UNSAFE_" + e11];
    }, set: function(t2) {
      Object.defineProperty(this, e11, { configurable: true, writable: true, value: t2 });
    } });
  }));
  var _t = A.event;
  function kt() {
  }
  function Ct() {
    return this.cancelBubble;
  }
  function At() {
    return this.defaultPrevented;
  }
  A.event = function(e11) {
    return _t && (e11 = _t(e11)), e11.persist = kt, e11.isPropagationStopped = Ct, e11.isDefaultPrevented = At, e11.nativeEvent = e11;
  };
  var wt;
  var xt = { enumerable: false, configurable: true, get: function() {
    return this.class;
  } };
  var St = A.vnode;
  A.vnode = function(e11) {
    "string" == typeof e11.type && (function(e12) {
      var t2 = e12.props, n2 = e12.type, r2 = {}, u2 = -1 === n2.indexOf("-");
      for (var a2 in t2) {
        var i2 = t2[a2];
        if (!("value" === a2 && "defaultValue" in t2 && null == i2 || Ft && "children" === a2 && "noscript" === n2 || "class" === a2 || "className" === a2)) {
          var o2 = a2.toLowerCase();
          "defaultValue" === a2 && "value" in t2 && null == t2.value ? a2 = "value" : "download" === a2 && true === i2 ? i2 = "" : "translate" === o2 && "no" === i2 ? i2 = false : "o" === o2[0] && "n" === o2[1] ? "ondoubleclick" === o2 ? a2 = "ondblclick" : "onchange" !== o2 || "input" !== n2 && "textarea" !== n2 || Et(t2.type) ? "onfocus" === o2 ? a2 = "onfocusin" : "onblur" === o2 ? a2 = "onfocusout" : yt.test(a2) && (a2 = o2) : o2 = a2 = "oninput" : u2 && Dt.test(a2) ? a2 = a2.replace(gt, "-$&").toLowerCase() : null === i2 && (i2 = void 0), "oninput" === o2 && r2[a2 = o2] && (a2 = "oninputCapture"), r2[a2] = i2;
        }
      }
      "select" == n2 && r2.multiple && Array.isArray(r2.value) && (r2.value = X(t2.children).forEach((function(e13) {
        e13.props.selected = -1 != r2.value.indexOf(e13.props.value);
      }))), "select" == n2 && null != r2.defaultValue && (r2.value = X(t2.children).forEach((function(e13) {
        e13.props.selected = r2.multiple ? -1 != r2.defaultValue.indexOf(e13.props.value) : r2.defaultValue == e13.props.value;
      }))), t2.class && !t2.className ? (r2.class = t2.class, Object.defineProperty(r2, "className", xt)) : (t2.className && !t2.class || t2.class && t2.className) && (r2.class = r2.className = t2.className), e12.props = r2;
    })(e11), e11.$$typeof = mt, St && St(e11);
  };
  var Bt = A.__r;
  A.__r = function(e11) {
    Bt && Bt(e11), wt = e11.__c;
  };
  var Ot = A.diffed;
  A.diffed = function(e11) {
    Ot && Ot(e11);
    var t2 = e11.props, n2 = e11.__e;
    null != n2 && "textarea" === e11.type && "value" in t2 && t2.value !== n2.value && (n2.value = null == t2.value ? "" : t2.value), wt = null;
  };
  var It = { ReactCurrentDispatcher: { current: { readContext: function(e11) {
    return wt.__n[e11.__c].props.value;
  }, useCallback: Pe, useContext: je, useDebugValue: Ne, useDeferredValue: Ge, useEffect: Se, useId: ze, useImperativeHandle: Ie, useInsertionEffect: Ye, useLayoutEffect: Be, useMemo: Te, useReducer: xe, useRef: Oe, useState: we, useSyncExternalStore: We, useTransition: Qe } } };
  function Tt(e11) {
    return !!e11 && e11.$$typeof === mt;
  }
  function Pt(e11) {
    return !!e11.__k && (le(null, e11), true);
  }
  var jt = { useState: we, useId: ze, useReducer: xe, useEffect: Se, useLayoutEffect: Be, useInsertionEffect: Ye, useTransition: Qe, useDeferredValue: Ge, useSyncExternalStore: We, startTransition: Je, useRef: Oe, useImperativeHandle: Ie, useMemo: Te, useCallback: Pe, useContext: je, useDebugValue: Ne, version: "18.3.1", Children: ut, render: bt, hydrate: function(e11, t2, n2) {
    return fe(e11, t2), "function" == typeof n2 && n2(), e11 ? e11.__c : null;
  }, unmountComponentAtNode: Pt, createPortal: vt, createElement: q, createContext: function(e11, t2) {
    var n2 = { __c: t2 = "__cC" + N++, __: e11, Consumer: function(e12, t3) {
      return e12.children(t3);
    }, Provider: function(e12) {
      var n3, r2;
      return this.getChildContext || (n3 = /* @__PURE__ */ new Set(), (r2 = {})[t2] = this, this.getChildContext = function() {
        return r2;
      }, this.componentWillUnmount = function() {
        n3 = null;
      }, this.shouldComponentUpdate = function(e13) {
        this.props.value !== e13.value && n3.forEach((function(e14) {
          e14.__e = true, J(e14);
        }));
      }, this.sub = function(e13) {
        n3.add(e13);
        var t3 = e13.componentWillUnmount;
        e13.componentWillUnmount = function() {
          n3 && n3.delete(e13), t3 && t3.call(e13);
        };
      }), e12.children;
    } };
    return n2.Provider.__ = n2.Consumer.contextType = n2;
  }, createFactory: function(e11) {
    return q.bind(null, e11);
  }, cloneElement: function(e11) {
    return Tt(e11) ? de.apply(null, arguments) : e11;
  }, createRef: function() {
    return { current: null };
  }, Fragment: V, isValidElement: Tt, isElement: Tt, isFragment: function(e11) {
    return Tt(e11) && e11.type === V;
  }, isMemo: function(e11) {
    return !!e11 && !!e11.displayName && ("string" == typeof e11.displayName || e11.displayName instanceof String) && e11.displayName.startsWith("Memo(");
  }, findDOMNode: function(e11) {
    return e11 && (e11.base || 1 === e11.nodeType && e11) || null;
  }, Component: H, PureComponent: Xe, memo: et, forwardRef: function(e11) {
    function t2(t3) {
      var n2 = Ve({}, t3);
      return delete n2.ref, e11(n2, t3.ref || null);
    }
    return t2.$$typeof = nt, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (e11.displayName || e11.name) + ")", t2;
  }, flushSync: function(e11, t2) {
    return e11(t2);
  }, unstable_batchedUpdates: function(e11, t2) {
    return e11(t2);
  }, StrictMode: V, Suspense: ct, SuspenseList: ft, lazy: function(e11) {
    var t2, n2, r2;
    function u2(u3) {
      if (t2 || (t2 = e11()).then((function(e12) {
        n2 = e12.default || e12;
      }), (function(e12) {
        r2 = e12;
      })), r2) throw r2;
      if (!n2) throw t2;
      return q(n2, u3);
    }
    return u2.displayName = "Lazy", u2.__f = true, u2;
  }, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: It };
  var Nt = ["type"];
  var zt = ["type"];
  var Rt = ["additionalProperties"];
  var Mt = ["abortSignal"];
  var Zt = ["messageId"];
  var Lt = ["messages"];
  var $t = ["experimental_throttle", "resume"];
  function qt(e11, t2) {
    (null == t2 || t2 > e11.length) && (t2 = e11.length);
    for (var n2 = 0, r2 = Array(t2); n2 < t2; n2++) r2[n2] = e11[n2];
    return r2;
  }
  function Ut(e11, t2, n2, r2, u2, a2, i2) {
    try {
      var o2 = e11[a2](i2), s2 = o2.value;
    } catch (e12) {
      return void n2(e12);
    }
    o2.done ? t2(s2) : Promise.resolve(s2).then(r2, u2);
  }
  function Vt(e11) {
    return function() {
      var t2 = this, n2 = arguments;
      return new Promise((function(r2, u2) {
        var a2 = e11.apply(t2, n2);
        function i2(e12) {
          Ut(a2, r2, u2, i2, o2, "next", e12);
        }
        function o2(e12) {
          Ut(a2, r2, u2, i2, o2, "throw", e12);
        }
        i2(void 0);
      }));
    };
  }
  function Ht(e11, t2, n2) {
    return t2 = en(t2), (function(e12, t3) {
      if (t3 && ("object" == b(t3) || "function" == typeof t3)) return t3;
      if (void 0 !== t3) throw new TypeError("Derived constructors may only return object or undefined");
      return (function(e13) {
        if (void 0 === e13) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e13;
      })(e12);
    })(e11, nn() ? Reflect.construct(t2, n2 || [], en(e11).constructor) : t2.apply(e11, n2));
  }
  function Wt(e11, t2) {
    if (!(e11 instanceof t2)) throw new TypeError("Cannot call a class as a function");
  }
  function Kt(e11, t2, n2) {
    if (nn()) return Reflect.construct.apply(null, arguments);
    var r2 = [null];
    r2.push.apply(r2, t2);
    var u2 = new (e11.bind.apply(e11, r2))();
    return n2 && sn(u2, n2.prototype), u2;
  }
  function Jt(e11, t2) {
    for (var n2 = 0; n2 < t2.length; n2++) {
      var r2 = t2[n2];
      r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e11, fn(r2.key), r2);
    }
  }
  function Gt(e11, t2, n2) {
    return t2 && Jt(e11.prototype, t2), n2 && Jt(e11, n2), Object.defineProperty(e11, "prototype", { writable: false }), e11;
  }
  function Qt(e11, t2) {
    var n2 = "undefined" != typeof Symbol && e11[Symbol.iterator] || e11["@@iterator"];
    if (!n2) {
      if (Array.isArray(e11) || (n2 = pn(e11)) || t2) {
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
  function Yt(e11, t2, n2) {
    return (t2 = fn(t2)) in e11 ? Object.defineProperty(e11, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e11[t2] = n2, e11;
  }
  function Xt() {
    return Xt = Object.assign ? Object.assign.bind() : function(e11) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2) ({}).hasOwnProperty.call(n2, r2) && (e11[r2] = n2[r2]);
      }
      return e11;
    }, Xt.apply(null, arguments);
  }
  function en(e11) {
    return en = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e12) {
      return e12.__proto__ || Object.getPrototypeOf(e12);
    }, en(e11);
  }
  function tn(e11, t2) {
    if ("function" != typeof t2 && null !== t2) throw new TypeError("Super expression must either be null or a function");
    e11.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e11, writable: true, configurable: true } }), Object.defineProperty(e11, "prototype", { writable: false }), t2 && sn(e11, t2);
  }
  function nn() {
    try {
      var e11 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {
      })));
    } catch (e12) {
    }
    return (nn = function() {
      return !!e11;
    })();
  }
  function rn(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter((function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      }))), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function un(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? rn(Object(n2), true).forEach((function(t3) {
        Yt(e11, t3, n2[t3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : rn(Object(n2)).forEach((function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      }));
    }
    return e11;
  }
  function an(e11, t2) {
    if (null == e11) return {};
    var n2, r2, u2 = (function(e12, t3) {
      if (null == e12) return {};
      var n3 = {};
      for (var r3 in e12) if ({}.hasOwnProperty.call(e12, r3)) {
        if (t3.includes(r3)) continue;
        n3[r3] = e12[r3];
      }
      return n3;
    })(e11, t2);
    if (Object.getOwnPropertySymbols) {
      var a2 = Object.getOwnPropertySymbols(e11);
      for (r2 = 0; r2 < a2.length; r2++) n2 = a2[r2], t2.includes(n2) || {}.propertyIsEnumerable.call(e11, n2) && (u2[n2] = e11[n2]);
    }
    return u2;
  }
  function on() {
    on = function() {
      return t2;
    };
    var e11, t2 = {}, n2 = Object.prototype, r2 = n2.hasOwnProperty, u2 = Object.defineProperty || function(e12, t3, n3) {
      e12[t3] = n3.value;
    }, a2 = "function" == typeof Symbol ? Symbol : {}, i2 = a2.iterator || "@@iterator", o2 = a2.asyncIterator || "@@asyncIterator", s2 = a2.toStringTag || "@@toStringTag";
    function c2(e12, t3, n3) {
      return Object.defineProperty(e12, t3, { value: n3, enumerable: true, configurable: true, writable: true }), e12[t3];
    }
    try {
      c2({}, "");
    } catch (e12) {
      c2 = function(e13, t3, n3) {
        return e13[t3] = n3;
      };
    }
    function l2(e12, t3, n3, r3) {
      var a3 = t3 && t3.prototype instanceof D2 ? t3 : D2, i3 = Object.create(a3.prototype), o3 = new O2(r3 || []);
      return u2(i3, "_invoke", { value: w2(e12, n3, o3) }), i3;
    }
    function f2(e12, t3, n3) {
      try {
        return { type: "normal", arg: e12.call(t3, n3) };
      } catch (e13) {
        return { type: "throw", arg: e13 };
      }
    }
    t2.wrap = l2;
    var d2 = "suspendedStart", p2 = "suspendedYield", h2 = "executing", v2 = "completed", m2 = {};
    function D2() {
    }
    function y2() {
    }
    function g2() {
    }
    var F2 = {};
    c2(F2, i2, (function() {
      return this;
    }));
    var E2 = Object.getPrototypeOf, _2 = E2 && E2(E2(I2([])));
    _2 && _2 !== n2 && r2.call(_2, i2) && (F2 = _2);
    var k2 = g2.prototype = D2.prototype = Object.create(F2);
    function C2(e12) {
      ["next", "throw", "return"].forEach((function(t3) {
        c2(e12, t3, (function(e13) {
          return this._invoke(t3, e13);
        }));
      }));
    }
    function A2(e12, t3) {
      function n3(u3, a4, i3, o3) {
        var s3 = f2(e12[u3], e12, a4);
        if ("throw" !== s3.type) {
          var c3 = s3.arg, l3 = c3.value;
          return l3 && "object" == b(l3) && r2.call(l3, "__await") ? t3.resolve(l3.__await).then((function(e13) {
            n3("next", e13, i3, o3);
          }), (function(e13) {
            n3("throw", e13, i3, o3);
          })) : t3.resolve(l3).then((function(e13) {
            c3.value = e13, i3(c3);
          }), (function(e13) {
            return n3("throw", e13, i3, o3);
          }));
        }
        o3(s3.arg);
      }
      var a3;
      u2(this, "_invoke", { value: function(e13, r3) {
        function u3() {
          return new t3((function(t4, u4) {
            n3(e13, r3, t4, u4);
          }));
        }
        return a3 = a3 ? a3.then(u3, u3) : u3();
      } });
    }
    function w2(t3, n3, r3) {
      var u3 = d2;
      return function(a3, i3) {
        if (u3 === h2) throw Error("Generator is already running");
        if (u3 === v2) {
          if ("throw" === a3) throw i3;
          return { value: e11, done: true };
        }
        for (r3.method = a3, r3.arg = i3; ; ) {
          var o3 = r3.delegate;
          if (o3) {
            var s3 = x2(o3, r3);
            if (s3) {
              if (s3 === m2) continue;
              return s3;
            }
          }
          if ("next" === r3.method) r3.sent = r3._sent = r3.arg;
          else if ("throw" === r3.method) {
            if (u3 === d2) throw u3 = v2, r3.arg;
            r3.dispatchException(r3.arg);
          } else "return" === r3.method && r3.abrupt("return", r3.arg);
          u3 = h2;
          var c3 = f2(t3, n3, r3);
          if ("normal" === c3.type) {
            if (u3 = r3.done ? v2 : p2, c3.arg === m2) continue;
            return { value: c3.arg, done: r3.done };
          }
          "throw" === c3.type && (u3 = v2, r3.method = "throw", r3.arg = c3.arg);
        }
      };
    }
    function x2(t3, n3) {
      var r3 = n3.method, u3 = t3.iterator[r3];
      if (u3 === e11) return n3.delegate = null, "throw" === r3 && t3.iterator.return && (n3.method = "return", n3.arg = e11, x2(t3, n3), "throw" === n3.method) || "return" !== r3 && (n3.method = "throw", n3.arg = new TypeError("The iterator does not provide a '" + r3 + "' method")), m2;
      var a3 = f2(u3, t3.iterator, n3.arg);
      if ("throw" === a3.type) return n3.method = "throw", n3.arg = a3.arg, n3.delegate = null, m2;
      var i3 = a3.arg;
      return i3 ? i3.done ? (n3[t3.resultName] = i3.value, n3.next = t3.nextLoc, "return" !== n3.method && (n3.method = "next", n3.arg = e11), n3.delegate = null, m2) : i3 : (n3.method = "throw", n3.arg = new TypeError("iterator result is not an object"), n3.delegate = null, m2);
    }
    function S2(e12) {
      var t3 = { tryLoc: e12[0] };
      1 in e12 && (t3.catchLoc = e12[1]), 2 in e12 && (t3.finallyLoc = e12[2], t3.afterLoc = e12[3]), this.tryEntries.push(t3);
    }
    function B2(e12) {
      var t3 = e12.completion || {};
      t3.type = "normal", delete t3.arg, e12.completion = t3;
    }
    function O2(e12) {
      this.tryEntries = [{ tryLoc: "root" }], e12.forEach(S2, this), this.reset(true);
    }
    function I2(t3) {
      if (t3 || "" === t3) {
        var n3 = t3[i2];
        if (n3) return n3.call(t3);
        if ("function" == typeof t3.next) return t3;
        if (!isNaN(t3.length)) {
          var u3 = -1, a3 = function n4() {
            for (; ++u3 < t3.length; ) if (r2.call(t3, u3)) return n4.value = t3[u3], n4.done = false, n4;
            return n4.value = e11, n4.done = true, n4;
          };
          return a3.next = a3;
        }
      }
      throw new TypeError(b(t3) + " is not iterable");
    }
    return y2.prototype = g2, u2(k2, "constructor", { value: g2, configurable: true }), u2(g2, "constructor", { value: y2, configurable: true }), y2.displayName = c2(g2, s2, "GeneratorFunction"), t2.isGeneratorFunction = function(e12) {
      var t3 = "function" == typeof e12 && e12.constructor;
      return !!t3 && (t3 === y2 || "GeneratorFunction" === (t3.displayName || t3.name));
    }, t2.mark = function(e12) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e12, g2) : (e12.__proto__ = g2, c2(e12, s2, "GeneratorFunction")), e12.prototype = Object.create(k2), e12;
    }, t2.awrap = function(e12) {
      return { __await: e12 };
    }, C2(A2.prototype), c2(A2.prototype, o2, (function() {
      return this;
    })), t2.AsyncIterator = A2, t2.async = function(e12, n3, r3, u3, a3) {
      void 0 === a3 && (a3 = Promise);
      var i3 = new A2(l2(e12, n3, r3, u3), a3);
      return t2.isGeneratorFunction(n3) ? i3 : i3.next().then((function(e13) {
        return e13.done ? e13.value : i3.next();
      }));
    }, C2(k2), c2(k2, s2, "Generator"), c2(k2, i2, (function() {
      return this;
    })), c2(k2, "toString", (function() {
      return "[object Generator]";
    })), t2.keys = function(e12) {
      var t3 = Object(e12), n3 = [];
      for (var r3 in t3) n3.push(r3);
      return n3.reverse(), function e13() {
        for (; n3.length; ) {
          var r4 = n3.pop();
          if (r4 in t3) return e13.value = r4, e13.done = false, e13;
        }
        return e13.done = true, e13;
      };
    }, t2.values = I2, O2.prototype = { constructor: O2, reset: function(t3) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e11, this.done = false, this.delegate = null, this.method = "next", this.arg = e11, this.tryEntries.forEach(B2), !t3) for (var n3 in this) "t" === n3.charAt(0) && r2.call(this, n3) && !isNaN(+n3.slice(1)) && (this[n3] = e11);
    }, stop: function() {
      this.done = true;
      var e12 = this.tryEntries[0].completion;
      if ("throw" === e12.type) throw e12.arg;
      return this.rval;
    }, dispatchException: function(t3) {
      if (this.done) throw t3;
      var n3 = this;
      function u3(r3, u4) {
        return o3.type = "throw", o3.arg = t3, n3.next = r3, u4 && (n3.method = "next", n3.arg = e11), !!u4;
      }
      for (var a3 = this.tryEntries.length - 1; a3 >= 0; --a3) {
        var i3 = this.tryEntries[a3], o3 = i3.completion;
        if ("root" === i3.tryLoc) return u3("end");
        if (i3.tryLoc <= this.prev) {
          var s3 = r2.call(i3, "catchLoc"), c3 = r2.call(i3, "finallyLoc");
          if (s3 && c3) {
            if (this.prev < i3.catchLoc) return u3(i3.catchLoc, true);
            if (this.prev < i3.finallyLoc) return u3(i3.finallyLoc);
          } else if (s3) {
            if (this.prev < i3.catchLoc) return u3(i3.catchLoc, true);
          } else {
            if (!c3) throw Error("try statement without catch or finally");
            if (this.prev < i3.finallyLoc) return u3(i3.finallyLoc);
          }
        }
      }
    }, abrupt: function(e12, t3) {
      for (var n3 = this.tryEntries.length - 1; n3 >= 0; --n3) {
        var u3 = this.tryEntries[n3];
        if (u3.tryLoc <= this.prev && r2.call(u3, "finallyLoc") && this.prev < u3.finallyLoc) {
          var a3 = u3;
          break;
        }
      }
      a3 && ("break" === e12 || "continue" === e12) && a3.tryLoc <= t3 && t3 <= a3.finallyLoc && (a3 = null);
      var i3 = a3 ? a3.completion : {};
      return i3.type = e12, i3.arg = t3, a3 ? (this.method = "next", this.next = a3.finallyLoc, m2) : this.complete(i3);
    }, complete: function(e12, t3) {
      if ("throw" === e12.type) throw e12.arg;
      return "break" === e12.type || "continue" === e12.type ? this.next = e12.arg : "return" === e12.type ? (this.rval = this.arg = e12.arg, this.method = "return", this.next = "end") : "normal" === e12.type && t3 && (this.next = t3), m2;
    }, finish: function(e12) {
      for (var t3 = this.tryEntries.length - 1; t3 >= 0; --t3) {
        var n3 = this.tryEntries[t3];
        if (n3.finallyLoc === e12) return this.complete(n3.completion, n3.afterLoc), B2(n3), m2;
      }
    }, catch: function(e12) {
      for (var t3 = this.tryEntries.length - 1; t3 >= 0; --t3) {
        var n3 = this.tryEntries[t3];
        if (n3.tryLoc === e12) {
          var r3 = n3.completion;
          if ("throw" === r3.type) {
            var u3 = r3.arg;
            B2(n3);
          }
          return u3;
        }
      }
      throw Error("illegal catch attempt");
    }, delegateYield: function(t3, n3, r3) {
      return this.delegate = { iterator: I2(t3), resultName: n3, nextLoc: r3 }, "next" === this.method && (this.arg = e11), m2;
    } }, t2;
  }
  function sn(e11, t2) {
    return sn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e12, t3) {
      return e12.__proto__ = t3, e12;
    }, sn(e11, t2);
  }
  function cn(e11, t2) {
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
    })(e11, t2) || pn(e11, t2) || (function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function ln(e11) {
    return (function(e12) {
      if (Array.isArray(e12)) return qt(e12);
    })(e11) || (function(e12) {
      if ("undefined" != typeof Symbol && null != e12[Symbol.iterator] || null != e12["@@iterator"]) return Array.from(e12);
    })(e11) || pn(e11) || (function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function fn(e11) {
    var t2 = (function(e12) {
      if ("object" != b(e12) || !e12) return e12;
      var t3 = e12[Symbol.toPrimitive];
      if (void 0 !== t3) {
        var n2 = t3.call(e12, "string");
        if ("object" != b(n2)) return n2;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e12);
    })(e11);
    return "symbol" == b(t2) ? t2 : t2 + "";
  }
  function dn(e11) {
    return dn = "function" == typeof Symbol && "symbol" == b(Symbol.iterator) ? function(e12) {
      return b(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : b(e12);
    }, dn(e11);
  }
  function pn(e11, t2) {
    if (e11) {
      if ("string" == typeof e11) return qt(e11, t2);
      var n2 = {}.toString.call(e11).slice(8, -1);
      return "Object" === n2 && e11.constructor && (n2 = e11.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e11) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? qt(e11, t2) : void 0;
    }
  }
  function hn(e11) {
    var t2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
    return hn = function(e12) {
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
        return Kt(e12, arguments, en(this).constructor);
      }
      return n2.prototype = Object.create(e12.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), sn(n2, e12);
    }, hn(e11);
  }
  var vn = { "Ctrl/Cmd+K": true, "/": true };
  function mn(e11) {
    return un(un({}, vn), e11);
  }
  function Dn() {
    return jt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, jt.createElement("path", { d: "M8.19531 8.76758H7.33398C7.02539 8.76758 6.74414 8.69531 6.49023 8.55078C6.23633 8.40234 6.0332 8.20312 5.88086 7.95312C5.73242 7.70312 5.6582 7.42188 5.6582 7.10938C5.6582 6.80078 5.73242 6.51953 5.88086 6.26562C6.0332 6.01172 6.23633 5.80859 6.49023 5.65625C6.74414 5.50391 7.02539 5.42773 7.33398 5.42773C7.64258 5.42773 7.92383 5.50391 8.17773 5.65625C8.43164 5.80859 8.63281 6.01172 8.78125 6.26562C8.93359 6.51953 9.00977 6.80078 9.00977 7.10938V7.96484H10.9902V7.10938C10.9902 6.80078 11.0664 6.51953 11.2188 6.26562C11.3711 6.01172 11.5723 5.80859 11.8223 5.65625C12.0762 5.50391 12.3574 5.42773 12.666 5.42773C12.9746 5.42773 13.2559 5.50391 13.5098 5.65625C13.7637 5.80859 13.9648 6.01172 14.1133 6.26562C14.2656 6.51953 14.3418 6.80078 14.3418 7.10938C14.3418 7.42188 14.2656 7.70312 14.1133 7.95312C13.9648 8.20312 13.7637 8.40234 13.5098 8.55078C13.2559 8.69531 12.9746 8.76758 12.666 8.76758H11.8105V10.7773H12.666C12.9746 10.7773 13.2559 10.8516 13.5098 11C13.7637 11.1445 13.9648 11.3418 14.1133 11.5918C14.2656 11.8418 14.3418 12.123 14.3418 12.4355C14.3418 12.7441 14.2656 13.0254 14.1133 13.2793C13.9648 13.5332 13.7637 13.7363 13.5098 13.8887C13.2559 14.041 12.9746 14.1172 12.666 14.1172C12.3574 14.1172 12.0762 14.041 11.8223 13.8887C11.5723 13.7363 11.3711 13.5332 11.2188 13.2793C11.0664 13.0254 10.9902 12.7441 10.9902 12.4355V11.5801H9.00977V12.4355C9.00977 12.7441 8.93359 13.0254 8.78125 13.2793C8.63281 13.5332 8.43164 13.7363 8.17773 13.8887C7.92383 14.041 7.64258 14.1172 7.33398 14.1172C7.02539 14.1172 6.74414 14.041 6.49023 13.8887C6.23633 13.7363 6.0332 13.5332 5.88086 13.2793C5.73242 13.0254 5.6582 12.7441 5.6582 12.4355C5.6582 12.123 5.73242 11.8418 5.88086 11.5918C6.0332 11.3418 6.23633 11.1445 6.49023 11C6.74414 10.8516 7.02539 10.7773 7.33398 10.7773H8.19531V8.76758ZM7.33398 7.97656H8.19531V7.10938C8.19531 6.875 8.10938 6.67383 7.9375 6.50586C7.76953 6.33398 7.56836 6.24805 7.33398 6.24805C7.09961 6.24805 6.89648 6.33398 6.72461 6.50586C6.55664 6.67383 6.47266 6.875 6.47266 7.10938C6.47266 7.34766 6.55664 7.55273 6.72461 7.72461C6.89648 7.89258 7.09961 7.97656 7.33398 7.97656ZM12.666 7.97656C12.9004 7.97656 13.1016 7.89258 13.2695 7.72461C13.4414 7.55273 13.5273 7.34766 13.5273 7.10938C13.5273 6.875 13.4414 6.67383 13.2695 6.50586C13.1016 6.33398 12.9004 6.24805 12.666 6.24805C12.4316 6.24805 12.2305 6.33398 12.0625 6.50586C11.8945 6.67383 11.8105 6.875 11.8105 7.10938V7.97656H12.666ZM9.00977 10.7773H10.9902V8.76758H9.00977V10.7773ZM7.33398 11.5625C7.09961 11.5625 6.89648 11.6484 6.72461 11.8203C6.55664 11.9883 6.47266 12.1914 6.47266 12.4297C6.47266 12.6641 6.55664 12.8672 6.72461 13.0391C6.89648 13.207 7.09961 13.291 7.33398 13.291C7.56836 13.291 7.76953 13.207 7.9375 13.0391C8.10938 12.8672 8.19531 12.6641 8.19531 12.4297V11.5625H7.33398ZM12.666 11.5625H11.8105V12.4297C11.8105 12.6641 11.8945 12.8672 12.0625 13.0391C12.2305 13.207 12.4316 13.291 12.666 13.291C12.9004 13.291 13.1016 13.207 13.2695 13.0391C13.4414 12.8672 13.5273 12.6641 13.5273 12.4297C13.5273 12.1914 13.4414 11.9883 13.2695 11.8203C13.1016 11.6484 12.9004 11.5625 12.666 11.5625Z", fill: "currentColor" }));
  }
  function yn() {
    return jt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, jt.createElement("path", { d: "M8.01562 11.1758L7.95703 9.65234H8.22656L11.9297 5.54492H13.2539L9.75586 9.32422L9.26367 9.79883L8.01562 11.1758ZM7.07812 14V5.54492H8.13281V14H7.07812ZM12.1992 14L9.04102 9.78711L9.76758 9.05469L13.5645 14H12.1992Z", fill: "currentColor" }));
  }
  function gn() {
    return jt.createElement("svg", { width: "33", height: "20", viewBox: "0 0 33 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, jt.createElement("path", { d: "M10.4824 14.1992C9.7168 14.1992 9.05469 14.0195 8.49609 13.6602C7.9375 13.3008 7.50586 12.791 7.20117 12.1309C6.90039 11.4707 6.75 10.6875 6.75 9.78125V9.76953C6.75 8.85938 6.90039 8.07422 7.20117 7.41406C7.50586 6.75391 7.93555 6.24414 8.49023 5.88477C9.04883 5.52539 9.71094 5.3457 10.4766 5.3457C11.0703 5.3457 11.6094 5.46289 12.0938 5.69727C12.582 5.92773 12.9844 6.25 13.3008 6.66406C13.6172 7.07422 13.8164 7.54883 13.8984 8.08789L13.8926 8.09961H12.832L12.8262 8.08789C12.7324 7.72461 12.5742 7.41211 12.3516 7.15039C12.1289 6.88477 11.8574 6.67969 11.5371 6.53516C11.2207 6.39062 10.8672 6.31836 10.4766 6.31836C9.9375 6.31836 9.46875 6.45898 9.07031 6.74023C8.67578 7.02148 8.37109 7.41992 8.15625 7.93555C7.94141 8.45117 7.83398 9.0625 7.83398 9.76953V9.78125C7.83398 10.4844 7.94141 11.0938 8.15625 11.6094C8.37109 12.125 8.67578 12.5234 9.07031 12.8047C9.46875 13.0859 9.93945 13.2266 10.4824 13.2266C10.877 13.2266 11.2344 13.1641 11.5547 13.0391C11.875 12.9102 12.1445 12.7285 12.3633 12.4941C12.582 12.2559 12.7344 11.9746 12.8203 11.6504L12.832 11.6387H13.8984V11.6504C13.8047 12.166 13.6016 12.6152 13.2891 12.998C12.9766 13.377 12.5801 13.6719 12.0996 13.8828C11.623 14.0938 11.084 14.1992 10.4824 14.1992ZM17.7832 14.0469C17.1348 14.0469 16.6641 13.916 16.3711 13.6543C16.082 13.3926 15.9375 12.9609 15.9375 12.3594V8.52734H14.9414V7.68359H15.9375V6.04883H16.9922V7.68359H18.375V8.52734H16.9922V12.1016C16.9922 12.4727 17.0625 12.7402 17.2031 12.9043C17.3438 13.0645 17.5781 13.1445 17.9062 13.1445C17.9961 13.1445 18.0723 13.1426 18.1348 13.1387C18.2012 13.1348 18.2812 13.1289 18.375 13.1211V13.9883C18.2773 14.0039 18.1797 14.0176 18.082 14.0293C17.9844 14.041 17.8848 14.0469 17.7832 14.0469ZM19.8984 14V7.68359H20.918V8.62109H21.0117C21.1328 8.28906 21.3379 8.03125 21.627 7.84766C21.916 7.66406 22.2734 7.57227 22.6992 7.57227C22.7969 7.57227 22.8926 7.57812 22.9863 7.58984C23.084 7.59766 23.1582 7.60547 23.209 7.61328V8.60352C23.1035 8.58398 23 8.57031 22.8984 8.5625C22.8008 8.55078 22.6953 8.54492 22.582 8.54492C22.2578 8.54492 21.9707 8.60938 21.7207 8.73828C21.4707 8.86719 21.2734 9.04688 21.1289 9.27734C20.9883 9.50781 20.918 9.77734 20.918 10.0859V14H19.8984ZM24.5273 14V5.17578H25.5469V14H24.5273Z", fill: "currentColor" }));
  }
  function Fn(e11) {
    var t2 = e11.size, n2 = void 0 === t2 ? 20 : t2, r2 = e11.color, u2 = void 0 === r2 ? "currentColor" : r2;
    return jt.createElement("svg", { width: n2, height: n2, className: "DocSearch-Search-Icon", viewBox: "0 0 24 24", "aria-hidden": "true" }, jt.createElement("circle", { cx: "11", cy: "11", r: "8", stroke: u2, fill: "none", strokeWidth: "1.4" }), jt.createElement("path", { d: "m21 21-4.3-4.3", stroke: u2, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  var En = function(e11) {
    var t2 = e11.theme;
    Se((function() {
      if (t2) {
        var e12 = document.documentElement.dataset.theme;
        if (t2 !== e12) return document.documentElement.dataset.theme = t2, function() {
          void 0 === e12 ? delete document.documentElement.dataset.theme : document.documentElement.dataset.theme = e12;
        };
      }
    }), [t2]);
  };
  var bn = ["translations", "keyboardShortcuts"];
  var _n = "Ctrl";
  var kn = jt.forwardRef((function(e11, t2) {
    var n2 = e11.translations, r2 = void 0 === n2 ? {} : n2, u2 = e11.keyboardShortcuts, a2 = an(e11, bn), i2 = r2.buttonText, o2 = void 0 === i2 ? "Search" : i2, s2 = r2.buttonAriaLabel, c2 = void 0 === s2 ? "Search" : s2, l2 = mn(u2), f2 = cn(we(null), 2), d2 = f2[0], p2 = f2[1];
    En({ theme: a2.theme }), Se((function() {
      "undefined" != typeof navigator && (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? p2("\u2318") : p2(_n));
    }), []);
    var h2 = cn(d2 === _n ? [_n, "Control", jt.createElement(gn, null)] : ["Meta", "Meta", jt.createElement(Dn, null)], 3), v2 = h2[0], m2 = h2[1], D2 = h2[2], y2 = l2["Ctrl/Cmd+K"], g2 = "".concat(m2, "+k");
    return jt.createElement("button", Xt({ type: "button", className: "DocSearch DocSearch-Button", "aria-label": y2 ? "".concat(c2, " (").concat(g2, ")") : c2, "aria-keyshortcuts": y2 ? g2 : void 0 }, a2, { ref: t2 }), jt.createElement("span", { className: "DocSearch-Button-Container" }, jt.createElement(Fn, null), jt.createElement("span", { className: "DocSearch-Button-Placeholder" }, o2)), jt.createElement("span", { className: "DocSearch-Button-Keys" }, null !== d2 && y2 && jt.createElement(jt.Fragment, null, jt.createElement(Cn, { reactsToKey: v2 }, D2), jt.createElement(Cn, { reactsToKey: "k" }, jt.createElement(yn, null)))));
  }));
  function Cn(e11) {
    var t2 = e11.reactsToKey, n2 = e11.children, r2 = cn(we(false), 2), u2 = r2[0], a2 = r2[1];
    return Se((function() {
      if (t2) return window.addEventListener("keydown", e12), window.addEventListener("keyup", n3), function() {
        window.removeEventListener("keydown", e12), window.removeEventListener("keyup", n3);
      };
      function e12(e13) {
        e13.key === t2 && a2(true);
      }
      function n3(e13) {
        e13.key !== t2 && "Meta" !== e13.key || a2(false);
      }
    }), [t2]), jt.createElement("kbd", { className: u2 ? "DocSearch-Button-Key DocSearch-Button-Key--pressed" : "DocSearch-Button-Key" + ("Ctrl" === t2 ? " DocSearch-Button-Key--ctrl" : "") }, n2);
  }
  var An;
  var wn = "vercel.ai.error";
  var xn = Symbol.for(wn);
  var Sn = (function() {
    function e11(t2) {
      var n2, r2 = t2.name, i2 = t2.message, o2 = t2.cause;
      return a(this, e11), (n2 = u(this, e11, [i2]))[An] = true, n2.name = r2, n2.cause = o2, n2;
    }
    return d(e11, k(Error)), o(e11, null, [{ key: "isInstance", value: function(t2) {
      return e11.hasMarker(t2, wn);
    } }, { key: "hasMarker", value: function(e12, t2) {
      var n2 = Symbol.for(t2);
      return null != e12 && "object" == b(e12) && n2 in e12 && "boolean" == typeof e12[n2] && true === e12[n2];
    } }]);
  })();
  An = xn;
  var Bn = Sn;
  function On(e11) {
    return null == e11 ? "unknown error" : "string" == typeof e11 ? e11 : e11 instanceof Error ? e11.message : JSON.stringify(e11);
  }
  var In;
  var Tn = "AI_InvalidArgumentError";
  var Pn = "vercel.ai.error.".concat(Tn);
  var jn = Symbol.for(Pn);
  var Nn = (function() {
    function e11(t2) {
      var n2, r2 = t2.message, i2 = t2.cause, o2 = t2.argument;
      return a(this, e11), (n2 = u(this, e11, [{ name: Tn, message: r2, cause: i2 }]))[In] = true, n2.argument = o2, n2;
    }
    return d(e11, Bn), o(e11, null, [{ key: "isInstance", value: function(e12) {
      return Bn.hasMarker(e12, Pn);
    } }]);
  })();
  In = jn;
  var zn;
  var Rn = "AI_JSONParseError";
  var Mn = "vercel.ai.error.".concat(Rn);
  var Zn = Symbol.for(Mn);
  var Ln = (function() {
    function e11(t2) {
      var n2, r2 = t2.text, i2 = t2.cause;
      return a(this, e11), (n2 = u(this, e11, [{ name: Rn, message: "JSON parsing failed: Text: ".concat(r2, ".\nError message: ").concat(On(i2)), cause: i2 }]))[zn] = true, n2.text = r2, n2;
    }
    return d(e11, Bn), o(e11, null, [{ key: "isInstance", value: function(e12) {
      return Bn.hasMarker(e12, Mn);
    } }]);
  })();
  zn = Zn;
  var $n;
  var qn = "AI_TypeValidationError";
  var Un = "vercel.ai.error.".concat(qn);
  var Vn = Symbol.for(Un);
  $n = Vn;
  var Hn = (function() {
    function e11(t2) {
      var n2, r2 = t2.value, i2 = t2.cause;
      return a(this, e11), (n2 = u(this, e11, [{ name: qn, message: "Type validation failed: Value: ".concat(JSON.stringify(r2), ".\nError message: ").concat(On(i2)), cause: i2 }]))[$n] = true, n2.value = r2, n2;
    }
    return d(e11, Bn), o(e11, null, [{ key: "isInstance", value: function(e12) {
      return Bn.hasMarker(e12, Un);
    } }, { key: "wrap", value: function(t2) {
      var n2 = t2.value, r2 = t2.cause;
      return e11.isInstance(r2) && r2.value === n2 ? r2 : new e11({ value: n2, cause: r2 });
    } }]);
  })();
  var Wn = (function() {
    function e11(t2, n2) {
      var r2;
      return Wt(this, e11), (r2 = Ht(this, e11, [t2])).name = "ParseError", r2.type = n2.type, r2.field = n2.field, r2.value = n2.value, r2.line = n2.line, r2;
    }
    return tn(e11, hn(Error)), Gt(e11);
  })();
  function Kn(e11) {
  }
  var Jn = (function() {
    function e11() {
      var t2, n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r2 = n2.onError, u2 = n2.onRetry, a2 = n2.onComment;
      return Wt(this, e11), Ht(this, e11, [{ start: function(e12) {
        t2 = (function(e13) {
          if ("function" == typeof e13) throw new TypeError("`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?");
          var t3, n3 = e13.onEvent, r3 = void 0 === n3 ? Kn : n3, u3 = e13.onError, a3 = void 0 === u3 ? Kn : u3, i2 = e13.onRetry, o2 = void 0 === i2 ? Kn : i2, s2 = e13.onComment, c2 = "", l2 = true, f2 = "", d2 = "";
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
                /^\d+$/.test(n4) ? o2(parseInt(n4, 10)) : a3(new Wn('Invalid `retry` value: "'.concat(n4, '"'), { type: "invalid-retry", value: n4, line: r4 }));
                break;
              default:
                a3(new Wn('Unknown field "'.concat(e14.length > 20 ? "".concat(e14.slice(0, 20), "\u2026") : e14, '"'), { type: "unknown-field", field: e14, value: n4, line: r4 }));
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
            })("".concat(c2).concat(n4)), u4 = cn(r4, 2), a4 = u4[0], i3 = u4[1], o3 = Qt(a4);
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
    return tn(e11, TransformStream), Gt(e11);
  })();
  function Gn(e11, t2, n2) {
    var r2;
    function u2(n3, r3) {
      var u3, a3, o2;
      for (var s2 in Object.defineProperty(n3, "_zod", { value: null !== (u3 = n3._zod) && void 0 !== u3 ? u3 : {}, enumerable: false }), null !== (a3 = (o2 = n3._zod).traits) && void 0 !== a3 || (o2.traits = /* @__PURE__ */ new Set()), n3._zod.traits.add(e11), t2(n3, r3), i2.prototype) s2 in n3 || Object.defineProperty(n3, s2, { value: i2.prototype[s2].bind(n3) });
      n3._zod.constr = i2, n3._zod.def = r3;
    }
    var a2 = (function(e12) {
      function t3() {
        return Wt(this, t3), Ht(this, t3, arguments);
      }
      return tn(t3, e12), Gt(t3);
    })(null !== (r2 = null == n2 ? void 0 : n2.Parent) && void 0 !== r2 ? r2 : Object);
    function i2(e12) {
      var t3, r3, i3 = null != n2 && n2.Parent ? new a2() : this;
      u2(i3, e12), null !== (t3 = (r3 = i3._zod).deferred) && void 0 !== t3 || (r3.deferred = []);
      var o2, s2 = Qt(i3._zod.deferred);
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
  var Qn = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, ["Encountered Promise during synchronous parse. Use .parseAsync() instead."]);
    }
    return tn(e11, hn(Error)), Gt(e11);
  })();
  var Yn = (function() {
    function e11(t2) {
      var n2;
      return Wt(this, e11), (n2 = Ht(this, e11, ["Encountered unidirectional transform during encode: ".concat(t2)])).name = "ZodEncodeError", n2;
    }
    return tn(e11, hn(Error)), Gt(e11);
  })();
  var Xn = {};
  function er(e11) {
    return Xn;
  }
  function tr(e11) {
    var t2 = Object.values(e11).filter((function(e12) {
      return "number" == typeof e12;
    }));
    return Object.entries(e11).filter((function(e12) {
      var n2 = cn(e12, 2), r2 = n2[0];
      return n2[1], -1 === t2.indexOf(+r2);
    })).map((function(e12) {
      var t3 = cn(e12, 2);
      return t3[0], t3[1];
    }));
  }
  function nr(e11, t2) {
    return "bigint" == typeof t2 ? t2.toString() : t2;
  }
  function rr(e11) {
    return { get value() {
      var t2 = e11();
      return Object.defineProperty(this, "value", { value: t2 }), t2;
    } };
  }
  function ur(e11) {
    return null == e11;
  }
  function ar(e11) {
    var t2 = e11.startsWith("^") ? 1 : 0, n2 = e11.endsWith("$") ? e11.length - 1 : e11.length;
    return e11.slice(t2, n2);
  }
  var ir = Symbol("evaluating");
  function or(e11, t2, n2) {
    var r2 = void 0;
    Object.defineProperty(e11, t2, { get: function() {
      if (r2 !== ir) return void 0 === r2 && (r2 = ir, r2 = n2()), r2;
    }, set: function(n3) {
      Object.defineProperty(e11, t2, { value: n3 });
    }, configurable: true });
  }
  function sr(e11) {
    return Object.create(Object.getPrototypeOf(e11), Object.getOwnPropertyDescriptors(e11));
  }
  function cr(e11, t2, n2) {
    Object.defineProperty(e11, t2, { value: n2, writable: true, enumerable: true, configurable: true });
  }
  function lr() {
    for (var e11 = {}, t2 = arguments.length, n2 = new Array(t2), r2 = 0; r2 < t2; r2++) n2[r2] = arguments[r2];
    for (var u2 = 0, a2 = n2; u2 < a2.length; u2++) {
      var i2 = a2[u2], o2 = Object.getOwnPropertyDescriptors(i2);
      Object.assign(e11, o2);
    }
    return Object.defineProperties({}, e11);
  }
  function fr(e11) {
    return JSON.stringify(e11);
  }
  var dr = "captureStackTrace" in Error ? Error.captureStackTrace : function() {
  };
  function pr(e11) {
    return "object" === dn(e11) && null !== e11 && !Array.isArray(e11);
  }
  var hr = rr((function() {
    var e11;
    if ("undefined" != typeof navigator && null !== (e11 = navigator) && void 0 !== e11 && null !== (e11 = e11.userAgent) && void 0 !== e11 && e11.includes("Cloudflare")) return false;
    try {
      return new Function(""), true;
    } catch (e12) {
      return false;
    }
  }));
  function vr(e11) {
    if (false === pr(e11)) return false;
    var t2 = e11.constructor;
    if (void 0 === t2) return true;
    var n2 = t2.prototype;
    return false !== pr(n2) && false !== Object.prototype.hasOwnProperty.call(n2, "isPrototypeOf");
  }
  function mr(e11) {
    return vr(e11) ? un({}, e11) : Array.isArray(e11) ? ln(e11) : e11;
  }
  var Dr = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
  function yr(e11) {
    return e11.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function gr(e11, t2, n2) {
    var r2 = new e11._zod.constr(null != t2 ? t2 : e11._zod.def);
    return (!t2 || null != n2 && n2.parent) && (r2._zod.parent = e11), r2;
  }
  function Fr(e11) {
    var t2 = e11;
    if (!t2) return {};
    if ("string" == typeof t2) return { error: function() {
      return t2;
    } };
    if (void 0 !== (null == t2 ? void 0 : t2.message)) {
      if (void 0 !== (null == t2 ? void 0 : t2.error)) throw new Error("Cannot specify both `message` and `error` params");
      t2.error = t2.message;
    }
    return delete t2.message, "string" == typeof t2.error ? un(un({}, t2), {}, { error: function() {
      return t2.error;
    } }) : t2;
  }
  var Er = { safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], int32: [-2147483648, 2147483647], uint32: [0, 4294967295], float32: [-34028234663852886e22, 34028234663852886e22], float64: [-Number.MAX_VALUE, Number.MAX_VALUE] };
  function br(e11) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    if (true === e11.aborted) return true;
    for (var n2 = t2; n2 < e11.issues.length; n2++) {
      var r2;
      if (true !== (null === (r2 = e11.issues[n2]) || void 0 === r2 ? void 0 : r2.continue)) return true;
    }
    return false;
  }
  function _r(e11, t2) {
    return t2.map((function(t3) {
      var n2, r2;
      return null !== (n2 = (r2 = t3).path) && void 0 !== n2 || (r2.path = []), t3.path.unshift(e11), t3;
    }));
  }
  function kr(e11) {
    return "string" == typeof e11 ? e11 : null == e11 ? void 0 : e11.message;
  }
  function Cr(e11, t2, n2) {
    var r2, u2 = un(un({}, e11), {}, { path: null !== (r2 = e11.path) && void 0 !== r2 ? r2 : [] });
    if (!e11.message) {
      var a2, i2, o2, s2, c2, l2, f2, d2, p2, h2 = null !== (a2 = null !== (i2 = null !== (o2 = null !== (s2 = kr(null === (c2 = e11.inst) || void 0 === c2 || null === (c2 = c2._zod.def) || void 0 === c2 || null === (l2 = c2.error) || void 0 === l2 ? void 0 : l2.call(c2, e11))) && void 0 !== s2 ? s2 : kr(null == t2 || null === (f2 = t2.error) || void 0 === f2 ? void 0 : f2.call(t2, e11))) && void 0 !== o2 ? o2 : kr(null === (d2 = n2.customError) || void 0 === d2 ? void 0 : d2.call(n2, e11))) && void 0 !== i2 ? i2 : kr(null === (p2 = n2.localeError) || void 0 === p2 ? void 0 : p2.call(n2, e11))) && void 0 !== a2 ? a2 : "Invalid input";
      u2.message = h2;
    }
    return delete u2.inst, delete u2.continue, null != t2 && t2.reportInput || delete u2.input, u2;
  }
  function Ar(e11) {
    return e11 instanceof Set ? "set" : e11 instanceof Map ? "map" : e11 instanceof File ? "file" : "unknown";
  }
  function wr(e11) {
    return Array.isArray(e11) ? "array" : "string" == typeof e11 ? "string" : "unknown";
  }
  function xr() {
    for (var e11 = arguments.length, t2 = new Array(e11), n2 = 0; n2 < e11; n2++) t2[n2] = arguments[n2];
    var r2 = t2[0], u2 = t2[1], a2 = t2[2];
    return "string" == typeof r2 ? { message: r2, code: "custom", input: u2, inst: a2 } : un({}, r2);
  }
  var Sr = function(e11, t2) {
    e11.name = "$ZodError", Object.defineProperty(e11, "_zod", { value: e11._zod, enumerable: false }), Object.defineProperty(e11, "issues", { value: t2, enumerable: false }), e11.message = JSON.stringify(t2, nr, 2), Object.defineProperty(e11, "toString", { value: function() {
      return e11.message;
    }, enumerable: false });
  };
  var Br = Gn("$ZodError", Sr);
  var Or = Gn("$ZodError", Sr, { Parent: Error });
  var Ir = function(e11) {
    return function(t2, n2, r2, u2) {
      var a2 = r2 ? Object.assign(r2, { async: false }) : { async: false }, i2 = t2._zod.run({ value: n2, issues: [] }, a2);
      if (i2 instanceof Promise) throw new Qn();
      if (i2.issues.length) {
        var o2, s2 = new (null !== (o2 = null == u2 ? void 0 : u2.Err) && void 0 !== o2 ? o2 : e11)(i2.issues.map((function(e12) {
          return Cr(e12, a2, er());
        })));
        throw dr(s2, null == u2 ? void 0 : u2.callee), s2;
      }
      return i2.value;
    };
  };
  var Tr = function(e11) {
    return (function() {
      var t2 = Vt(on().mark((function t3(n2, r2, u2, a2) {
        var i2, o2, s2, c2;
        return on().wrap((function(t4) {
          for (; ; ) switch (t4.prev = t4.next) {
            case 0:
              if (i2 = u2 ? Object.assign(u2, { async: true }) : { async: true }, !((o2 = n2._zod.run({ value: r2, issues: [] }, i2)) instanceof Promise)) {
                t4.next = 6;
                break;
              }
              return t4.next = 5, o2;
            case 5:
              o2 = t4.sent;
            case 6:
              if (!o2.issues.length) {
                t4.next = 10;
                break;
              }
              throw c2 = new (null !== (s2 = null == a2 ? void 0 : a2.Err) && void 0 !== s2 ? s2 : e11)(o2.issues.map((function(e12) {
                return Cr(e12, i2, er());
              }))), dr(c2, null == a2 ? void 0 : a2.callee), c2;
            case 10:
              return t4.abrupt("return", o2.value);
            case 11:
            case "end":
              return t4.stop();
          }
        }), t3);
      })));
      return function(e12, n2, r2, u2) {
        return t2.apply(this, arguments);
      };
    })();
  };
  var Pr = function(e11) {
    return function(t2, n2, r2) {
      var u2 = r2 ? un(un({}, r2), {}, { async: false }) : { async: false }, a2 = t2._zod.run({ value: n2, issues: [] }, u2);
      if (a2 instanceof Promise) throw new Qn();
      return a2.issues.length ? { success: false, error: new (null != e11 ? e11 : Br)(a2.issues.map((function(e12) {
        return Cr(e12, u2, er());
      }))) } : { success: true, data: a2.value };
    };
  };
  var jr = Pr(Or);
  var Nr = function(e11) {
    return (function() {
      var t2 = Vt(on().mark((function t3(n2, r2, u2) {
        var a2, i2;
        return on().wrap((function(t4) {
          for (; ; ) switch (t4.prev = t4.next) {
            case 0:
              if (a2 = u2 ? Object.assign(u2, { async: true }) : { async: true }, !((i2 = n2._zod.run({ value: r2, issues: [] }, a2)) instanceof Promise)) {
                t4.next = 6;
                break;
              }
              return t4.next = 5, i2;
            case 5:
              i2 = t4.sent;
            case 6:
              return t4.abrupt("return", i2.issues.length ? { success: false, error: new e11(i2.issues.map((function(e12) {
                return Cr(e12, a2, er());
              }))) } : { success: true, data: i2.value });
            case 7:
            case "end":
              return t4.stop();
          }
        }), t3);
      })));
      return function(e12, n2, r2) {
        return t2.apply(this, arguments);
      };
    })();
  };
  var zr = Nr(Or);
  var Rr = /^[cC][^\s-]{8,}$/;
  var Mr = /^[0-9a-z]+$/;
  var Zr = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
  var Lr = /^[0-9a-vA-V]{20}$/;
  var $r = /^[A-Za-z0-9]{27}$/;
  var qr = /^[a-zA-Z0-9_-]{21}$/;
  var Ur = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
  var Vr = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
  var Hr = function(e11) {
    return e11 ? new RegExp("^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-".concat(e11, "[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$")) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
  };
  var Wr = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
  var Kr = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
  var Jr = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
  var Gr = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
  var Qr = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
  var Yr = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
  var Xr = /^[A-Za-z0-9_-]*$/;
  var eu = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/;
  var tu = /^\+(?:[0-9]){6,14}[0-9]$/;
  var nu = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
  var ru = new RegExp("^".concat(nu, "$"));
  function uu(e11) {
    var t2 = "(?:[01]\\d|2[0-3]):[0-5]\\d";
    return "number" == typeof e11.precision ? -1 === e11.precision ? "".concat(t2) : 0 === e11.precision ? "".concat(t2, ":[0-5]\\d") : "".concat(t2, ":[0-5]\\d\\.\\d{").concat(e11.precision, "}") : "".concat(t2, "(?::[0-5]\\d(?:\\.\\d+)?)?");
  }
  var au = /^-?\d+$/;
  var iu = /^-?\d+(?:\.\d+)?/;
  var ou = /^(?:true|false)$/i;
  var su = /^null$/i;
  var cu = /^[^A-Z]*$/;
  var lu = /^[^a-z]*$/;
  var fu = Gn("$ZodCheck", (function(e11, t2) {
    var n2, r2, u2;
    null !== (n2 = e11._zod) && void 0 !== n2 || (e11._zod = {}), e11._zod.def = t2, null !== (r2 = (u2 = e11._zod).onattach) && void 0 !== r2 || (u2.onattach = []);
  }));
  var du = { number: "number", bigint: "bigint", object: "date" };
  var pu = Gn("$ZodCheckLessThan", (function(e11, t2) {
    fu.init(e11, t2);
    var n2 = du[dn(t2.value)];
    e11._zod.onattach.push((function(e12) {
      var n3, r2 = e12._zod.bag, u2 = null !== (n3 = t2.inclusive ? r2.maximum : r2.exclusiveMaximum) && void 0 !== n3 ? n3 : Number.POSITIVE_INFINITY;
      t2.value < u2 && (t2.inclusive ? r2.maximum = t2.value : r2.exclusiveMaximum = t2.value);
    })), e11._zod.check = function(r2) {
      (t2.inclusive ? r2.value <= t2.value : r2.value < t2.value) || r2.issues.push({ origin: n2, code: "too_big", maximum: t2.value, input: r2.value, inclusive: t2.inclusive, inst: e11, continue: !t2.abort });
    };
  }));
  var hu = Gn("$ZodCheckGreaterThan", (function(e11, t2) {
    fu.init(e11, t2);
    var n2 = du[dn(t2.value)];
    e11._zod.onattach.push((function(e12) {
      var n3, r2 = e12._zod.bag, u2 = null !== (n3 = t2.inclusive ? r2.minimum : r2.exclusiveMinimum) && void 0 !== n3 ? n3 : Number.NEGATIVE_INFINITY;
      t2.value > u2 && (t2.inclusive ? r2.minimum = t2.value : r2.exclusiveMinimum = t2.value);
    })), e11._zod.check = function(r2) {
      (t2.inclusive ? r2.value >= t2.value : r2.value > t2.value) || r2.issues.push({ origin: n2, code: "too_small", minimum: t2.value, input: r2.value, inclusive: t2.inclusive, inst: e11, continue: !t2.abort });
    };
  }));
  var vu = Gn("$ZodCheckMultipleOf", (function(e11, t2) {
    fu.init(e11, t2), e11._zod.onattach.push((function(e12) {
      var n2, r2;
      null !== (n2 = (r2 = e12._zod.bag).multipleOf) && void 0 !== n2 || (r2.multipleOf = t2.value);
    })), e11._zod.check = function(n2) {
      if (dn(n2.value) !== dn(t2.value)) throw new Error("Cannot mix number and bigint in multiple_of check.");
      ("bigint" == typeof n2.value ? n2.value % t2.value === BigInt(0) : 0 === (function(e12, t3) {
        var n3 = (e12.toString().split(".")[1] || "").length, r2 = t3.toString(), u2 = (r2.split(".")[1] || "").length;
        if (0 === u2 && /\d?e-\d?/.test(r2)) {
          var a2 = r2.match(/\d?e-(\d?)/);
          null != a2 && a2[1] && (u2 = Number.parseInt(a2[1]));
        }
        var i2 = n3 > u2 ? n3 : u2;
        return Number.parseInt(e12.toFixed(i2).replace(".", "")) % Number.parseInt(t3.toFixed(i2).replace(".", "")) / Math.pow(10, i2);
      })(n2.value, t2.value)) || n2.issues.push({ origin: dn(n2.value), code: "not_multiple_of", divisor: t2.value, input: n2.value, inst: e11, continue: !t2.abort });
    };
  }));
  var mu = Gn("$ZodCheckNumberFormat", (function(e11, t2) {
    var n2;
    fu.init(e11, t2), t2.format = t2.format || "float64";
    var r2 = null === (n2 = t2.format) || void 0 === n2 ? void 0 : n2.includes("int"), u2 = r2 ? "int" : "number", a2 = cn(Er[t2.format], 2), i2 = a2[0], o2 = a2[1];
    e11._zod.onattach.push((function(e12) {
      var n3 = e12._zod.bag;
      n3.format = t2.format, n3.minimum = i2, n3.maximum = o2, r2 && (n3.pattern = au);
    })), e11._zod.check = function(n3) {
      var a3 = n3.value;
      if (r2) {
        if (!Number.isInteger(a3)) return void n3.issues.push({ expected: u2, format: t2.format, code: "invalid_type", continue: false, input: a3, inst: e11 });
        if (!Number.isSafeInteger(a3)) return void (a3 > 0 ? n3.issues.push({ input: a3, code: "too_big", maximum: Number.MAX_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: e11, origin: u2, continue: !t2.abort }) : n3.issues.push({ input: a3, code: "too_small", minimum: Number.MIN_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: e11, origin: u2, continue: !t2.abort }));
      }
      a3 < i2 && n3.issues.push({ origin: "number", input: a3, code: "too_small", minimum: i2, inclusive: true, inst: e11, continue: !t2.abort }), a3 > o2 && n3.issues.push({ origin: "number", input: a3, code: "too_big", maximum: o2, inst: e11 });
    };
  }));
  var Du = Gn("$ZodCheckMaxSize", (function(e11, t2) {
    var n2, r2;
    fu.init(e11, t2), null !== (n2 = (r2 = e11._zod.def).when) && void 0 !== n2 || (r2.when = function(e12) {
      var t3 = e12.value;
      return !ur(t3) && void 0 !== t3.size;
    }), e11._zod.onattach.push((function(e12) {
      var n3, r3 = null !== (n3 = e12._zod.bag.maximum) && void 0 !== n3 ? n3 : Number.POSITIVE_INFINITY;
      t2.maximum < r3 && (e12._zod.bag.maximum = t2.maximum);
    })), e11._zod.check = function(n3) {
      var r3 = n3.value;
      r3.size <= t2.maximum || n3.issues.push({ origin: Ar(r3), code: "too_big", maximum: t2.maximum, inclusive: true, input: r3, inst: e11, continue: !t2.abort });
    };
  }));
  var yu = Gn("$ZodCheckMinSize", (function(e11, t2) {
    var n2, r2;
    fu.init(e11, t2), null !== (n2 = (r2 = e11._zod.def).when) && void 0 !== n2 || (r2.when = function(e12) {
      var t3 = e12.value;
      return !ur(t3) && void 0 !== t3.size;
    }), e11._zod.onattach.push((function(e12) {
      var n3, r3 = null !== (n3 = e12._zod.bag.minimum) && void 0 !== n3 ? n3 : Number.NEGATIVE_INFINITY;
      t2.minimum > r3 && (e12._zod.bag.minimum = t2.minimum);
    })), e11._zod.check = function(n3) {
      var r3 = n3.value;
      r3.size >= t2.minimum || n3.issues.push({ origin: Ar(r3), code: "too_small", minimum: t2.minimum, inclusive: true, input: r3, inst: e11, continue: !t2.abort });
    };
  }));
  var gu = Gn("$ZodCheckSizeEquals", (function(e11, t2) {
    var n2, r2;
    fu.init(e11, t2), null !== (n2 = (r2 = e11._zod.def).when) && void 0 !== n2 || (r2.when = function(e12) {
      var t3 = e12.value;
      return !ur(t3) && void 0 !== t3.size;
    }), e11._zod.onattach.push((function(e12) {
      var n3 = e12._zod.bag;
      n3.minimum = t2.size, n3.maximum = t2.size, n3.size = t2.size;
    })), e11._zod.check = function(n3) {
      var r3 = n3.value, u2 = r3.size;
      if (u2 !== t2.size) {
        var a2 = u2 > t2.size;
        n3.issues.push(un(un({ origin: Ar(r3) }, a2 ? { code: "too_big", maximum: t2.size } : { code: "too_small", minimum: t2.size }), {}, { inclusive: true, exact: true, input: n3.value, inst: e11, continue: !t2.abort }));
      }
    };
  }));
  var Fu = Gn("$ZodCheckMaxLength", (function(e11, t2) {
    var n2, r2;
    fu.init(e11, t2), null !== (n2 = (r2 = e11._zod.def).when) && void 0 !== n2 || (r2.when = function(e12) {
      var t3 = e12.value;
      return !ur(t3) && void 0 !== t3.length;
    }), e11._zod.onattach.push((function(e12) {
      var n3, r3 = null !== (n3 = e12._zod.bag.maximum) && void 0 !== n3 ? n3 : Number.POSITIVE_INFINITY;
      t2.maximum < r3 && (e12._zod.bag.maximum = t2.maximum);
    })), e11._zod.check = function(n3) {
      var r3 = n3.value;
      if (!(r3.length <= t2.maximum)) {
        var u2 = wr(r3);
        n3.issues.push({ origin: u2, code: "too_big", maximum: t2.maximum, inclusive: true, input: r3, inst: e11, continue: !t2.abort });
      }
    };
  }));
  var Eu = Gn("$ZodCheckMinLength", (function(e11, t2) {
    var n2, r2;
    fu.init(e11, t2), null !== (n2 = (r2 = e11._zod.def).when) && void 0 !== n2 || (r2.when = function(e12) {
      var t3 = e12.value;
      return !ur(t3) && void 0 !== t3.length;
    }), e11._zod.onattach.push((function(e12) {
      var n3, r3 = null !== (n3 = e12._zod.bag.minimum) && void 0 !== n3 ? n3 : Number.NEGATIVE_INFINITY;
      t2.minimum > r3 && (e12._zod.bag.minimum = t2.minimum);
    })), e11._zod.check = function(n3) {
      var r3 = n3.value;
      if (!(r3.length >= t2.minimum)) {
        var u2 = wr(r3);
        n3.issues.push({ origin: u2, code: "too_small", minimum: t2.minimum, inclusive: true, input: r3, inst: e11, continue: !t2.abort });
      }
    };
  }));
  var bu = Gn("$ZodCheckLengthEquals", (function(e11, t2) {
    var n2, r2;
    fu.init(e11, t2), null !== (n2 = (r2 = e11._zod.def).when) && void 0 !== n2 || (r2.when = function(e12) {
      var t3 = e12.value;
      return !ur(t3) && void 0 !== t3.length;
    }), e11._zod.onattach.push((function(e12) {
      var n3 = e12._zod.bag;
      n3.minimum = t2.length, n3.maximum = t2.length, n3.length = t2.length;
    })), e11._zod.check = function(n3) {
      var r3 = n3.value, u2 = r3.length;
      if (u2 !== t2.length) {
        var a2 = wr(r3), i2 = u2 > t2.length;
        n3.issues.push(un(un({ origin: a2 }, i2 ? { code: "too_big", maximum: t2.length } : { code: "too_small", minimum: t2.length }), {}, { inclusive: true, exact: true, input: n3.value, inst: e11, continue: !t2.abort }));
      }
    };
  }));
  var _u = Gn("$ZodCheckStringFormat", (function(e11, t2) {
    var n2, r2, u2, a2;
    fu.init(e11, t2), e11._zod.onattach.push((function(e12) {
      var n3, r3 = e12._zod.bag;
      r3.format = t2.format, t2.pattern && (null !== (n3 = r3.patterns) && void 0 !== n3 || (r3.patterns = /* @__PURE__ */ new Set()), r3.patterns.add(t2.pattern));
    })), t2.pattern ? null !== (n2 = (u2 = e11._zod).check) && void 0 !== n2 || (u2.check = function(n3) {
      t2.pattern.lastIndex = 0, t2.pattern.test(n3.value) || n3.issues.push(un(un({ origin: "string", code: "invalid_format", format: t2.format, input: n3.value }, t2.pattern ? { pattern: t2.pattern.toString() } : {}), {}, { inst: e11, continue: !t2.abort }));
    }) : null !== (r2 = (a2 = e11._zod).check) && void 0 !== r2 || (a2.check = function() {
    });
  }));
  var ku = Gn("$ZodCheckRegex", (function(e11, t2) {
    _u.init(e11, t2), e11._zod.check = function(n2) {
      t2.pattern.lastIndex = 0, t2.pattern.test(n2.value) || n2.issues.push({ origin: "string", code: "invalid_format", format: "regex", input: n2.value, pattern: t2.pattern.toString(), inst: e11, continue: !t2.abort });
    };
  }));
  var Cu = Gn("$ZodCheckLowerCase", (function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = cu), _u.init(e11, t2);
  }));
  var Au = Gn("$ZodCheckUpperCase", (function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = lu), _u.init(e11, t2);
  }));
  var wu = Gn("$ZodCheckIncludes", (function(e11, t2) {
    fu.init(e11, t2);
    var n2 = yr(t2.includes), r2 = new RegExp("number" == typeof t2.position ? "^.{".concat(t2.position, "}").concat(n2) : n2);
    t2.pattern = r2, e11._zod.onattach.push((function(e12) {
      var t3, n3 = e12._zod.bag;
      null !== (t3 = n3.patterns) && void 0 !== t3 || (n3.patterns = /* @__PURE__ */ new Set()), n3.patterns.add(r2);
    })), e11._zod.check = function(n3) {
      n3.value.includes(t2.includes, t2.position) || n3.issues.push({ origin: "string", code: "invalid_format", format: "includes", includes: t2.includes, input: n3.value, inst: e11, continue: !t2.abort });
    };
  }));
  var xu = Gn("$ZodCheckStartsWith", (function(e11, t2) {
    var n2;
    fu.init(e11, t2);
    var r2 = new RegExp("^".concat(yr(t2.prefix), ".*"));
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = r2), e11._zod.onattach.push((function(e12) {
      var t3, n3 = e12._zod.bag;
      null !== (t3 = n3.patterns) && void 0 !== t3 || (n3.patterns = /* @__PURE__ */ new Set()), n3.patterns.add(r2);
    })), e11._zod.check = function(n3) {
      n3.value.startsWith(t2.prefix) || n3.issues.push({ origin: "string", code: "invalid_format", format: "starts_with", prefix: t2.prefix, input: n3.value, inst: e11, continue: !t2.abort });
    };
  }));
  var Su = Gn("$ZodCheckEndsWith", (function(e11, t2) {
    var n2;
    fu.init(e11, t2);
    var r2 = new RegExp(".*".concat(yr(t2.suffix), "$"));
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = r2), e11._zod.onattach.push((function(e12) {
      var t3, n3 = e12._zod.bag;
      null !== (t3 = n3.patterns) && void 0 !== t3 || (n3.patterns = /* @__PURE__ */ new Set()), n3.patterns.add(r2);
    })), e11._zod.check = function(n3) {
      n3.value.endsWith(t2.suffix) || n3.issues.push({ origin: "string", code: "invalid_format", format: "ends_with", suffix: t2.suffix, input: n3.value, inst: e11, continue: !t2.abort });
    };
  }));
  function Bu(e11, t2, n2) {
    var r2;
    e11.issues.length && (r2 = t2.issues).push.apply(r2, ln(_r(n2, e11.issues)));
  }
  var Ou = Gn("$ZodCheckProperty", (function(e11, t2) {
    fu.init(e11, t2), e11._zod.check = function(e12) {
      var n2 = t2.schema._zod.run({ value: e12.value[t2.property], issues: [] }, {});
      if (n2 instanceof Promise) return n2.then((function(n3) {
        return Bu(n3, e12, t2.property);
      }));
      Bu(n2, e12, t2.property);
    };
  }));
  var Iu = Gn("$ZodCheckMimeType", (function(e11, t2) {
    fu.init(e11, t2);
    var n2 = new Set(t2.mime);
    e11._zod.onattach.push((function(e12) {
      e12._zod.bag.mime = t2.mime;
    })), e11._zod.check = function(r2) {
      n2.has(r2.value.type) || r2.issues.push({ code: "invalid_value", values: t2.mime, input: r2.value.type, inst: e11, continue: !t2.abort });
    };
  }));
  var Tu = Gn("$ZodCheckOverwrite", (function(e11, t2) {
    fu.init(e11, t2), e11._zod.check = function(e12) {
      e12.value = t2.tx(e12.value);
    };
  }));
  var Pu = Gt((function e2() {
    var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    Wt(this, e2), this.content = [], this.indent = 0, this && (this.args = t2);
  }), [{ key: "indented", value: function(e11) {
    this.indent += 1, e11(this), this.indent -= 1;
  } }, { key: "write", value: function(e11) {
    var t2 = this;
    if ("function" == typeof e11) return e11(this, { execution: "sync" }), void e11(this, { execution: "async" });
    var n2, r2 = e11.split("\n").filter((function(e12) {
      return e12;
    })), u2 = Math.min.apply(Math, ln(r2.map((function(e12) {
      return e12.length - e12.trimStart().length;
    })))), a2 = Qt(r2.map((function(e12) {
      return e12.slice(u2);
    })).map((function(e12) {
      return " ".repeat(2 * t2.indent) + e12;
    })));
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
    var e11, t2 = Function, n2 = null == this ? void 0 : this.args, r2 = ln((null !== (e11 = null == this ? void 0 : this.content) && void 0 !== e11 ? e11 : [""]).map((function(e12) {
      return "  ".concat(e12);
    })));
    return Kt(t2, ln(n2).concat([r2.join("\n")]));
  } }]);
  var ju = { major: 4, minor: 1, patch: 8 };
  var Nu = Gn("$ZodType", (function(e11, t2) {
    var n2, r2;
    null != e11 || (e11 = {}), e11._zod.def = t2, e11._zod.bag = e11._zod.bag || {}, e11._zod.version = ju;
    var u2 = ln(null !== (n2 = e11._zod.def.checks) && void 0 !== n2 ? n2 : []);
    e11._zod.traits.has("$ZodCheck") && u2.unshift(e11);
    var a2, i2 = Qt(u2);
    try {
      for (i2.s(); !(a2 = i2.n()).done; ) {
        var o2, s2 = Qt(a2.value._zod.onattach);
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
      null !== (c2 = (r2 = e11._zod).deferred) && void 0 !== c2 || (r2.deferred = []), null === (l2 = e11._zod.deferred) || void 0 === l2 || l2.push((function() {
        e11._zod.run = e11._zod.parse;
      }));
    } else {
      var f2 = function(e12, t3, n3) {
        var r3, u3, a3 = br(e12), i3 = Qt(t3);
        try {
          var o3 = function() {
            var t4 = u3.value;
            if (t4._zod.def.when) {
              if (!t4._zod.def.when(e12)) return 0;
            } else if (a3) return 0;
            var i4 = e12.issues.length, o4 = t4._zod.check(e12);
            if (o4 instanceof Promise && false === (null == n3 ? void 0 : n3.async)) throw new Qn();
            if (r3 || o4 instanceof Promise) r3 = (null != r3 ? r3 : Promise.resolve()).then(Vt(on().mark((function t5() {
              return on().wrap((function(t6) {
                for (; ; ) switch (t6.prev = t6.next) {
                  case 0:
                    return t6.next = 2, o4;
                  case 2:
                    if (e12.issues.length !== i4) {
                      t6.next = 5;
                      break;
                    }
                    return t6.abrupt("return");
                  case 5:
                    a3 || (a3 = br(e12, i4));
                  case 6:
                  case "end":
                    return t6.stop();
                }
              }), t5);
            }))));
            else {
              if (e12.issues.length === i4) return 0;
              a3 || (a3 = br(e12, i4));
            }
          };
          for (i3.s(); !(u3 = i3.n()).done; ) o3();
        } catch (e13) {
          i3.e(e13);
        } finally {
          i3.f();
        }
        return r3 ? r3.then((function() {
          return e12;
        })) : e12;
      }, d2 = function(t3, n3, r3) {
        if (br(t3)) return t3.aborted = true, t3;
        var a3 = f2(n3, u2, r3);
        if (a3 instanceof Promise) {
          if (false === r3.async) throw new Qn();
          return a3.then((function(t4) {
            return e11._zod.parse(t4, r3);
          }));
        }
        return e11._zod.parse(a3, r3);
      };
      e11._zod.run = function(t3, n3) {
        if (n3.skipChecks) return e11._zod.parse(t3, n3);
        if ("backward" === n3.direction) {
          var r3 = e11._zod.parse({ value: t3.value, issues: [] }, un(un({}, n3), {}, { skipChecks: true }));
          return r3 instanceof Promise ? r3.then((function(e12) {
            return d2(e12, t3, n3);
          })) : d2(r3, t3, n3);
        }
        var a3 = e11._zod.parse(t3, n3);
        if (a3 instanceof Promise) {
          if (false === n3.async) throw new Qn();
          return a3.then((function(e12) {
            return f2(e12, u2, n3);
          }));
        }
        return f2(a3, u2, n3);
      };
    }
    e11["~standard"] = { validate: function(t3) {
      try {
        var n3, r3 = jr(e11, t3);
        return r3.success ? { value: r3.data } : { issues: null === (n3 = r3.error) || void 0 === n3 ? void 0 : n3.issues };
      } catch (n4) {
        return zr(e11, t3).then((function(e12) {
          var t4;
          return e12.success ? { value: e12.data } : { issues: null === (t4 = e12.error) || void 0 === t4 ? void 0 : t4.issues };
        }));
      }
    }, vendor: "zod", version: 1 };
  }));
  var zu = Gn("$ZodString", (function(e11, t2) {
    var n2, r2, u2;
    Nu.init(e11, t2), e11._zod.pattern = null !== (n2 = ln(null !== (r2 = null == e11 || null === (u2 = e11._zod.bag) || void 0 === u2 ? void 0 : u2.patterns) && void 0 !== r2 ? r2 : []).pop()) && void 0 !== n2 ? n2 : (function(e12) {
      var t3, n3, r3 = e12 ? "[\\s\\S]{".concat(null !== (t3 = null == e12 ? void 0 : e12.minimum) && void 0 !== t3 ? t3 : 0, ",").concat(null !== (n3 = null == e12 ? void 0 : e12.maximum) && void 0 !== n3 ? n3 : "", "}") : "[\\s\\S]*";
      return new RegExp("^".concat(r3, "$"));
    })(e11._zod.bag), e11._zod.parse = function(n3, r3) {
      if (t2.coerce) try {
        n3.value = String(n3.value);
      } catch (r4) {
      }
      return "string" == typeof n3.value || n3.issues.push({ expected: "string", code: "invalid_type", input: n3.value, inst: e11 }), n3;
    };
  }));
  var Ru = Gn("$ZodStringFormat", (function(e11, t2) {
    _u.init(e11, t2), zu.init(e11, t2);
  }));
  var Mu = Gn("$ZodGUID", (function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = Vr), Ru.init(e11, t2);
  }));
  var Zu = Gn("$ZodUUID", (function(e11, t2) {
    var n2;
    if (t2.version) {
      var r2, u2 = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[t2.version];
      if (void 0 === u2) throw new Error('Invalid UUID version: "'.concat(t2.version, '"'));
      null !== (r2 = t2.pattern) && void 0 !== r2 || (t2.pattern = Hr(u2));
    } else null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = Hr());
    Ru.init(e11, t2);
  }));
  var Lu = Gn("$ZodEmail", (function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = Wr), Ru.init(e11, t2);
  }));
  var $u = Gn("$ZodURL", (function(e11, t2) {
    Ru.init(e11, t2), e11._zod.check = function(n2) {
      try {
        var r2 = n2.value.trim(), u2 = new URL(r2);
        return t2.hostname && (t2.hostname.lastIndex = 0, t2.hostname.test(u2.hostname) || n2.issues.push({ code: "invalid_format", format: "url", note: "Invalid hostname", pattern: eu.source, input: n2.value, inst: e11, continue: !t2.abort })), t2.protocol && (t2.protocol.lastIndex = 0, t2.protocol.test(u2.protocol.endsWith(":") ? u2.protocol.slice(0, -1) : u2.protocol) || n2.issues.push({ code: "invalid_format", format: "url", note: "Invalid protocol", pattern: t2.protocol.source, input: n2.value, inst: e11, continue: !t2.abort })), void (t2.normalize ? n2.value = u2.href : n2.value = r2);
      } catch (r3) {
        n2.issues.push({ code: "invalid_format", format: "url", input: n2.value, inst: e11, continue: !t2.abort });
      }
    };
  }));
  var qu = Gn("$ZodEmoji", (function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Ru.init(e11, t2);
  }));
  var Uu = Gn("$ZodNanoID", (function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = qr), Ru.init(e11, t2);
  }));
  var Vu = Gn("$ZodCUID", (function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = Rr), Ru.init(e11, t2);
  }));
  var Hu = Gn("$ZodCUID2", (function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = Mr), Ru.init(e11, t2);
  }));
  var Wu = Gn("$ZodULID", (function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = Zr), Ru.init(e11, t2);
  }));
  var Ku = Gn("$ZodXID", (function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = Lr), Ru.init(e11, t2);
  }));
  var Ju = Gn("$ZodKSUID", (function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = $r), Ru.init(e11, t2);
  }));
  var Gu = Gn("$ZodISODateTime", (function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = (function(e12) {
      var t3 = uu({ precision: e12.precision }), n3 = ["Z"];
      e12.local && n3.push(""), e12.offset && n3.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
      var r2 = "".concat(t3, "(?:").concat(n3.join("|"), ")");
      return new RegExp("^".concat(nu, "T(?:").concat(r2, ")$"));
    })(t2)), Ru.init(e11, t2);
  }));
  var Qu = Gn("$ZodISODate", (function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = ru), Ru.init(e11, t2);
  }));
  var Yu = Gn("$ZodISOTime", (function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = new RegExp("^".concat(uu(t2), "$"))), Ru.init(e11, t2);
  }));
  var Xu = Gn("$ZodISODuration", (function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = Ur), Ru.init(e11, t2);
  }));
  var ea = Gn("$ZodIPv4", (function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = Kr), Ru.init(e11, t2), e11._zod.onattach.push((function(e12) {
      e12._zod.bag.format = "ipv4";
    }));
  }));
  var ta = Gn("$ZodIPv6", (function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = Jr), Ru.init(e11, t2), e11._zod.onattach.push((function(e12) {
      e12._zod.bag.format = "ipv6";
    })), e11._zod.check = function(n3) {
      try {
        new URL("http://[".concat(n3.value, "]"));
      } catch (r2) {
        n3.issues.push({ code: "invalid_format", format: "ipv6", input: n3.value, inst: e11, continue: !t2.abort });
      }
    };
  }));
  var na = Gn("$ZodCIDRv4", (function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = Gr), Ru.init(e11, t2);
  }));
  var ra = Gn("$ZodCIDRv6", (function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = Qr), Ru.init(e11, t2), e11._zod.check = function(n3) {
      var r2 = n3.value.split("/");
      try {
        if (2 !== r2.length) throw new Error();
        var u2 = cn(r2, 2), a2 = u2[0], i2 = u2[1];
        if (!i2) throw new Error();
        var o2 = Number(i2);
        if ("".concat(o2) !== i2) throw new Error();
        if (o2 < 0 || o2 > 128) throw new Error();
        new URL("http://[".concat(a2, "]"));
      } catch (r3) {
        n3.issues.push({ code: "invalid_format", format: "cidrv6", input: n3.value, inst: e11, continue: !t2.abort });
      }
    };
  }));
  function ua(e11) {
    if ("" === e11) return true;
    if (e11.length % 4 != 0) return false;
    try {
      return atob(e11), true;
    } catch (e12) {
      return false;
    }
  }
  var aa = Gn("$ZodBase64", (function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = Yr), Ru.init(e11, t2), e11._zod.onattach.push((function(e12) {
      e12._zod.bag.contentEncoding = "base64";
    })), e11._zod.check = function(n3) {
      ua(n3.value) || n3.issues.push({ code: "invalid_format", format: "base64", input: n3.value, inst: e11, continue: !t2.abort });
    };
  }));
  var ia = Gn("$ZodBase64URL", (function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = Xr), Ru.init(e11, t2), e11._zod.onattach.push((function(e12) {
      e12._zod.bag.contentEncoding = "base64url";
    })), e11._zod.check = function(n3) {
      (function(e12) {
        if (!Xr.test(e12)) return false;
        var t3 = e12.replace(/[-_]/g, (function(e13) {
          return "-" === e13 ? "+" : "/";
        }));
        return ua(t3.padEnd(4 * Math.ceil(t3.length / 4), "="));
      })(n3.value) || n3.issues.push({ code: "invalid_format", format: "base64url", input: n3.value, inst: e11, continue: !t2.abort });
    };
  }));
  var oa = Gn("$ZodE164", (function(e11, t2) {
    var n2;
    null !== (n2 = t2.pattern) && void 0 !== n2 || (t2.pattern = tu), Ru.init(e11, t2);
  }));
  var sa = Gn("$ZodJWT", (function(e11, t2) {
    Ru.init(e11, t2), e11._zod.check = function(n2) {
      (function(e12) {
        var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        try {
          var n3 = e12.split(".");
          if (3 !== n3.length) return false;
          var r2 = cn(n3, 1)[0];
          if (!r2) return false;
          var u2 = JSON.parse(atob(r2));
          return !("typ" in u2 && "JWT" !== (null == u2 ? void 0 : u2.typ) || !u2.alg || t3 && (!("alg" in u2) || u2.alg !== t3));
        } catch (e13) {
          return false;
        }
      })(n2.value, t2.alg) || n2.issues.push({ code: "invalid_format", format: "jwt", input: n2.value, inst: e11, continue: !t2.abort });
    };
  }));
  var ca = Gn("$ZodNumber", (function(e11, t2) {
    var n2;
    Nu.init(e11, t2), e11._zod.pattern = null !== (n2 = e11._zod.bag.pattern) && void 0 !== n2 ? n2 : iu, e11._zod.parse = function(n3, r2) {
      if (t2.coerce) try {
        n3.value = Number(n3.value);
      } catch (e12) {
      }
      var u2 = n3.value;
      if ("number" == typeof u2 && !Number.isNaN(u2) && Number.isFinite(u2)) return n3;
      var a2 = "number" == typeof u2 ? Number.isNaN(u2) ? "NaN" : Number.isFinite(u2) ? void 0 : "Infinity" : void 0;
      return n3.issues.push(un({ expected: "number", code: "invalid_type", input: u2, inst: e11 }, a2 ? { received: a2 } : {})), n3;
    };
  }));
  var la = Gn("$ZodNumber", (function(e11, t2) {
    mu.init(e11, t2), ca.init(e11, t2);
  }));
  var fa = Gn("$ZodBoolean", (function(e11, t2) {
    Nu.init(e11, t2), e11._zod.pattern = ou, e11._zod.parse = function(n2, r2) {
      if (t2.coerce) try {
        n2.value = Boolean(n2.value);
      } catch (e12) {
      }
      var u2 = n2.value;
      return "boolean" == typeof u2 || n2.issues.push({ expected: "boolean", code: "invalid_type", input: u2, inst: e11 }), n2;
    };
  }));
  var da = Gn("$ZodNull", (function(e11, t2) {
    Nu.init(e11, t2), e11._zod.pattern = su, e11._zod.values = /* @__PURE__ */ new Set([null]), e11._zod.parse = function(t3, n2) {
      var r2 = t3.value;
      return null === r2 || t3.issues.push({ expected: "null", code: "invalid_type", input: r2, inst: e11 }), t3;
    };
  }));
  var pa = Gn("$ZodUnknown", (function(e11, t2) {
    Nu.init(e11, t2), e11._zod.parse = function(e12) {
      return e12;
    };
  }));
  var ha = Gn("$ZodNever", (function(e11, t2) {
    Nu.init(e11, t2), e11._zod.parse = function(t3, n2) {
      return t3.issues.push({ expected: "never", code: "invalid_type", input: t3.value, inst: e11 }), t3;
    };
  }));
  function va(e11, t2, n2) {
    var r2;
    e11.issues.length && (r2 = t2.issues).push.apply(r2, ln(_r(n2, e11.issues))), t2.value[n2] = e11.value;
  }
  var ma = Gn("$ZodArray", (function(e11, t2) {
    Nu.init(e11, t2), e11._zod.parse = function(n2, r2) {
      var u2 = n2.value;
      if (!Array.isArray(u2)) return n2.issues.push({ expected: "array", code: "invalid_type", input: u2, inst: e11 }), n2;
      n2.value = Array(u2.length);
      for (var a2 = [], i2 = function(e12) {
        var i3 = u2[e12], o3 = t2.element._zod.run({ value: i3, issues: [] }, r2);
        o3 instanceof Promise ? a2.push(o3.then((function(t3) {
          return va(t3, n2, e12);
        }))) : va(o3, n2, e12);
      }, o2 = 0; o2 < u2.length; o2++) i2(o2);
      return a2.length ? Promise.all(a2).then((function() {
        return n2;
      })) : n2;
    };
  }));
  function Da(e11, t2, n2, r2) {
    var u2;
    e11.issues.length && (u2 = t2.issues).push.apply(u2, ln(_r(n2, e11.issues))), void 0 === e11.value ? n2 in r2 && (t2.value[n2] = void 0) : t2.value[n2] = e11.value;
  }
  function ya(e11) {
    for (var t2 = Object.keys(e11.shape), n2 = 0, r2 = t2; n2 < r2.length; n2++) {
      var u2, a2 = r2[n2];
      if (null === (u2 = e11.shape) || void 0 === u2 || null === (u2 = u2[a2]) || void 0 === u2 || null === (u2 = u2._zod) || void 0 === u2 || null === (u2 = u2.traits) || void 0 === u2 || !u2.has("$ZodType")) throw new Error('Invalid element at key "'.concat(a2, '": expected a Zod schema'));
    }
    var i2, o2 = (i2 = e11.shape, Object.keys(i2).filter((function(e12) {
      return "optional" === i2[e12]._zod.optin && "optional" === i2[e12]._zod.optout;
    })));
    return un(un({}, e11), {}, { keys: t2, keySet: new Set(t2), numKeys: t2.length, optionalKeys: new Set(o2) });
  }
  function ga(e11, t2, n2, r2, u2, a2) {
    for (var i2 = [], o2 = u2.keySet, s2 = u2.catchall._zod, c2 = s2.def.type, l2 = function() {
      var u3 = d2[f2];
      if (o2.has(u3)) return 0;
      if ("never" === c2) return i2.push(u3), 0;
      var a3 = s2.run({ value: t2[u3], issues: [] }, r2);
      a3 instanceof Promise ? e11.push(a3.then((function(e12) {
        return Da(e12, n2, u3, t2);
      }))) : Da(a3, n2, u3, t2);
    }, f2 = 0, d2 = Object.keys(t2); f2 < d2.length; f2++) l2();
    return i2.length && n2.issues.push({ code: "unrecognized_keys", keys: i2, input: t2, inst: a2 }), e11.length ? Promise.all(e11).then((function() {
      return n2;
    })) : n2;
  }
  var Fa = Gn("$ZodObject", (function(e11, t2) {
    Nu.init(e11, t2);
    var n2 = rr((function() {
      return ya(t2);
    }));
    or(e11._zod, "propValues", (function() {
      var e12 = t2.shape, n3 = {};
      for (var r3 in e12) {
        var u3 = e12[r3]._zod;
        if (u3.values) {
          var a3;
          null !== (a3 = n3[r3]) && void 0 !== a3 || (n3[r3] = /* @__PURE__ */ new Set());
          var i2, o2 = Qt(u3.values);
          try {
            for (o2.s(); !(i2 = o2.n()).done; ) {
              var s2 = i2.value;
              n3[r3].add(s2);
            }
          } catch (e13) {
            o2.e(e13);
          } finally {
            o2.f();
          }
        }
      }
      return n3;
    }));
    var r2, u2 = pr, a2 = t2.catchall;
    e11._zod.parse = function(t3, i2) {
      null != r2 || (r2 = n2.value);
      var o2 = t3.value;
      if (!u2(o2)) return t3.issues.push({ expected: "object", code: "invalid_type", input: o2, inst: e11 }), t3;
      t3.value = {};
      var s2, c2 = [], l2 = r2.shape, f2 = Qt(r2.keys);
      try {
        var d2 = function() {
          var e12 = s2.value, n3 = l2[e12]._zod.run({ value: o2[e12], issues: [] }, i2);
          n3 instanceof Promise ? c2.push(n3.then((function(n4) {
            return Da(n4, t3, e12, o2);
          }))) : Da(n3, t3, e12, o2);
        };
        for (f2.s(); !(s2 = f2.n()).done; ) d2();
      } catch (e12) {
        f2.e(e12);
      } finally {
        f2.f();
      }
      return a2 ? ga(c2, o2, t3, i2, n2.value, e11) : c2.length ? Promise.all(c2).then((function() {
        return t3;
      })) : t3;
    };
  }));
  var Ea = Gn("$ZodObjectJIT", (function(e11, t2) {
    Fa.init(e11, t2);
    var n2, r2, u2 = e11._zod.parse, a2 = rr((function() {
      return ya(t2);
    })), i2 = pr, o2 = !Xn.jitless, s2 = o2 && hr.value, c2 = t2.catchall;
    e11._zod.parse = function(l2, f2) {
      null != r2 || (r2 = a2.value);
      var d2 = l2.value;
      return i2(d2) ? o2 && s2 && false === (null == f2 ? void 0 : f2.async) && true !== f2.jitless ? (n2 || (n2 = (function(e12) {
        var t3 = new Pu(["shape", "payload", "ctx"]), n3 = a2.value, r3 = function(e13) {
          var t4 = fr(e13);
          return "shape[".concat(t4, "]._zod.run({ value: input[").concat(t4, "], issues: [] }, ctx)");
        };
        t3.write("const input = payload.value;");
        var u3, i3 = /* @__PURE__ */ Object.create(null), o3 = 0, s3 = Qt(n3.keys);
        try {
          for (s3.s(); !(u3 = s3.n()).done; ) i3[u3.value] = "key_".concat(o3++);
        } catch (e13) {
          s3.e(e13);
        } finally {
          s3.f();
        }
        t3.write("const newResult = {};");
        var c3, l3 = Qt(n3.keys);
        try {
          for (l3.s(); !(c3 = l3.n()).done; ) {
            var f3 = c3.value, d3 = i3[f3], p2 = fr(f3);
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
      })(t2.shape)), l2 = n2(l2, f2), c2 ? ga([], d2, l2, f2, r2, e11) : l2) : u2(l2, f2) : (l2.issues.push({ expected: "object", code: "invalid_type", input: d2, inst: e11 }), l2);
    };
  }));
  function ba(e11, t2, n2, r2) {
    var u2, a2 = Qt(e11);
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
    var o2 = e11.filter((function(e12) {
      return !br(e12);
    }));
    return 1 === o2.length ? (t2.value = o2[0].value, o2[0]) : (t2.issues.push({ code: "invalid_union", input: t2.value, inst: n2, errors: e11.map((function(e12) {
      return e12.issues.map((function(e13) {
        return Cr(e13, r2, er());
      }));
    })) }), t2);
  }
  var _a = Gn("$ZodUnion", (function(e11, t2) {
    Nu.init(e11, t2), or(e11._zod, "optin", (function() {
      return t2.options.some((function(e12) {
        return "optional" === e12._zod.optin;
      })) ? "optional" : void 0;
    })), or(e11._zod, "optout", (function() {
      return t2.options.some((function(e12) {
        return "optional" === e12._zod.optout;
      })) ? "optional" : void 0;
    })), or(e11._zod, "values", (function() {
      if (t2.options.every((function(e12) {
        return e12._zod.values;
      }))) return new Set(t2.options.flatMap((function(e12) {
        return Array.from(e12._zod.values);
      })));
    })), or(e11._zod, "pattern", (function() {
      if (t2.options.every((function(e13) {
        return e13._zod.pattern;
      }))) {
        var e12 = t2.options.map((function(e13) {
          return e13._zod.pattern;
        }));
        return new RegExp("^(".concat(e12.map((function(e13) {
          return ar(e13.source);
        })).join("|"), ")$"));
      }
    }));
    var n2 = 1 === t2.options.length, r2 = t2.options[0]._zod.run;
    e11._zod.parse = function(u2, a2) {
      if (n2) return r2(u2, a2);
      var i2, o2 = false, s2 = [], c2 = Qt(t2.options);
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
      return o2 ? Promise.all(s2).then((function(t3) {
        return ba(t3, u2, e11, a2);
      })) : ba(s2, u2, e11, a2);
    };
  }));
  var ka = Gn("$ZodDiscriminatedUnion", (function(e11, t2) {
    _a.init(e11, t2);
    var n2 = e11._zod.parse;
    or(e11._zod, "propValues", (function() {
      var e12, n3 = {}, r3 = Qt(t2.options);
      try {
        for (r3.s(); !(e12 = r3.n()).done; ) {
          var u2 = e12.value, a2 = u2._zod.propValues;
          if (!a2 || 0 === Object.keys(a2).length) throw new Error('Invalid discriminated union option at index "'.concat(t2.options.indexOf(u2), '"'));
          for (var i2 = 0, o2 = Object.entries(a2); i2 < o2.length; i2++) {
            var s2 = cn(o2[i2], 2), c2 = s2[0], l2 = s2[1];
            n3[c2] || (n3[c2] = /* @__PURE__ */ new Set());
            var f2, d2 = Qt(l2);
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
    }));
    var r2 = rr((function() {
      var e12, n3 = t2.options, r3 = /* @__PURE__ */ new Map(), u2 = Qt(n3);
      try {
        for (u2.s(); !(e12 = u2.n()).done; ) {
          var a2, i2 = e12.value, o2 = null === (a2 = i2._zod.propValues) || void 0 === a2 ? void 0 : a2[t2.discriminator];
          if (!o2 || 0 === o2.size) throw new Error('Invalid discriminated union option at index "'.concat(t2.options.indexOf(i2), '"'));
          var s2, c2 = Qt(o2);
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
    }));
    e11._zod.parse = function(u2, a2) {
      var i2 = u2.value;
      if (!pr(i2)) return u2.issues.push({ code: "invalid_type", expected: "object", input: i2, inst: e11 }), u2;
      var o2 = r2.value.get(null == i2 ? void 0 : i2[t2.discriminator]);
      return o2 ? o2._zod.run(u2, a2) : t2.unionFallback ? n2(u2, a2) : (u2.issues.push({ code: "invalid_union", errors: [], note: "No matching discriminator", discriminator: t2.discriminator, input: i2, path: [t2.discriminator], inst: e11 }), u2);
    };
  }));
  var Ca = Gn("$ZodIntersection", (function(e11, t2) {
    Nu.init(e11, t2), e11._zod.parse = function(e12, n2) {
      var r2 = e12.value, u2 = t2.left._zod.run({ value: r2, issues: [] }, n2), a2 = t2.right._zod.run({ value: r2, issues: [] }, n2);
      return u2 instanceof Promise || a2 instanceof Promise ? Promise.all([u2, a2]).then((function(t3) {
        var n3 = cn(t3, 2), r3 = n3[0], u3 = n3[1];
        return wa(e12, r3, u3);
      })) : wa(e12, u2, a2);
    };
  }));
  function Aa(e11, t2) {
    if (e11 === t2) return { valid: true, data: e11 };
    if (e11 instanceof Date && t2 instanceof Date && +e11 == +t2) return { valid: true, data: e11 };
    if (vr(e11) && vr(t2)) {
      var n2, r2 = Object.keys(t2), u2 = Object.keys(e11).filter((function(e12) {
        return -1 !== r2.indexOf(e12);
      })), a2 = un(un({}, e11), t2), i2 = Qt(u2);
      try {
        for (i2.s(); !(n2 = i2.n()).done; ) {
          var o2 = n2.value, s2 = Aa(e11[o2], t2[o2]);
          if (!s2.valid) return { valid: false, mergeErrorPath: [o2].concat(ln(s2.mergeErrorPath)) };
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
        var f2 = Aa(e11[l2], t2[l2]);
        if (!f2.valid) return { valid: false, mergeErrorPath: [l2].concat(ln(f2.mergeErrorPath)) };
        c2.push(f2.data);
      }
      return { valid: true, data: c2 };
    }
    return { valid: false, mergeErrorPath: [] };
  }
  function wa(e11, t2, n2) {
    var r2, u2;
    if (t2.issues.length && (r2 = e11.issues).push.apply(r2, ln(t2.issues)), n2.issues.length && (u2 = e11.issues).push.apply(u2, ln(n2.issues)), br(e11)) return e11;
    var a2 = Aa(t2.value, n2.value);
    if (!a2.valid) throw new Error("Unmergable intersection. Error path: " + "".concat(JSON.stringify(a2.mergeErrorPath)));
    return e11.value = a2.data, e11;
  }
  var xa = Gn("$ZodRecord", (function(e11, t2) {
    Nu.init(e11, t2), e11._zod.parse = function(n2, r2) {
      var u2 = n2.value;
      if (!vr(u2)) return n2.issues.push({ expected: "record", code: "invalid_type", input: u2, inst: e11 }), n2;
      var a2 = [];
      if (t2.keyType._zod.values) {
        var i2 = t2.keyType._zod.values;
        n2.value = {};
        var o2, s2, c2 = Qt(i2);
        try {
          var l2 = function() {
            var e12 = o2.value;
            if ("string" == typeof e12 || "number" == typeof e12 || "symbol" === dn(e12)) {
              var i3, s3 = t2.valueType._zod.run({ value: u2[e12], issues: [] }, r2);
              if (s3 instanceof Promise) a2.push(s3.then((function(t3) {
                var r3;
                t3.issues.length && (r3 = n2.issues).push.apply(r3, ln(_r(e12, t3.issues))), n2.value[e12] = t3.value;
              })));
              else s3.issues.length && (i3 = n2.issues).push.apply(i3, ln(_r(e12, s3.issues))), n2.value[e12] = s3.value;
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
        var d2, p2 = Qt(Reflect.ownKeys(u2));
        try {
          var h2 = function() {
            var i3 = d2.value;
            if ("__proto__" === i3) return 0;
            var o3 = t2.keyType._zod.run({ value: i3, issues: [] }, r2);
            if (o3 instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
            if (o3.issues.length) return n2.issues.push({ code: "invalid_key", origin: "record", issues: o3.issues.map((function(e12) {
              return Cr(e12, r2, er());
            })), input: i3, path: [i3], inst: e11 }), n2.value[o3.value] = o3.value, 0;
            var s3, c3 = t2.valueType._zod.run({ value: u2[i3], issues: [] }, r2);
            c3 instanceof Promise ? a2.push(c3.then((function(e12) {
              var t3;
              e12.issues.length && (t3 = n2.issues).push.apply(t3, ln(_r(i3, e12.issues))), n2.value[o3.value] = e12.value;
            }))) : (c3.issues.length && (s3 = n2.issues).push.apply(s3, ln(_r(i3, c3.issues))), n2.value[o3.value] = c3.value);
          };
          for (p2.s(); !(d2 = p2.n()).done; ) h2();
        } catch (e12) {
          p2.e(e12);
        } finally {
          p2.f();
        }
      }
      return a2.length ? Promise.all(a2).then((function() {
        return n2;
      })) : n2;
    };
  }));
  var Sa = Gn("$ZodEnum", (function(e11, t2) {
    Nu.init(e11, t2);
    var n2 = tr(t2.entries), r2 = new Set(n2);
    e11._zod.values = r2, e11._zod.pattern = new RegExp("^(".concat(n2.filter((function(e12) {
      return Dr.has(dn(e12));
    })).map((function(e12) {
      return "string" == typeof e12 ? yr(e12) : e12.toString();
    })).join("|"), ")$")), e11._zod.parse = function(t3, u2) {
      var a2 = t3.value;
      return r2.has(a2) || t3.issues.push({ code: "invalid_value", values: n2, input: a2, inst: e11 }), t3;
    };
  }));
  var Ba = Gn("$ZodLiteral", (function(e11, t2) {
    if (Nu.init(e11, t2), 0 === t2.values.length) throw new Error("Cannot create literal schema with no valid values");
    e11._zod.values = new Set(t2.values), e11._zod.pattern = new RegExp("^(".concat(t2.values.map((function(e12) {
      return "string" == typeof e12 ? yr(e12) : e12 ? yr(e12.toString()) : String(e12);
    })).join("|"), ")$")), e11._zod.parse = function(n2, r2) {
      var u2 = n2.value;
      return e11._zod.values.has(u2) || n2.issues.push({ code: "invalid_value", values: t2.values, input: u2, inst: e11 }), n2;
    };
  }));
  var Oa = Gn("$ZodTransform", (function(e11, t2) {
    Nu.init(e11, t2), e11._zod.parse = function(n2, r2) {
      if ("backward" === r2.direction) throw new Yn(e11.constructor.name);
      var u2 = t2.transform(n2.value, n2);
      if (r2.async) return (u2 instanceof Promise ? u2 : Promise.resolve(u2)).then((function(e12) {
        return n2.value = e12, n2;
      }));
      if (u2 instanceof Promise) throw new Qn();
      return n2.value = u2, n2;
    };
  }));
  function Ia(e11, t2) {
    return e11.issues.length && void 0 === t2 ? { issues: [], value: void 0 } : e11;
  }
  var Ta = Gn("$ZodOptional", (function(e11, t2) {
    Nu.init(e11, t2), e11._zod.optin = "optional", e11._zod.optout = "optional", or(e11._zod, "values", (function() {
      return t2.innerType._zod.values ? new Set([].concat(ln(t2.innerType._zod.values), [void 0])) : void 0;
    })), or(e11._zod, "pattern", (function() {
      var e12 = t2.innerType._zod.pattern;
      return e12 ? new RegExp("^(".concat(ar(e12.source), ")?$")) : void 0;
    })), e11._zod.parse = function(e12, n2) {
      if ("optional" === t2.innerType._zod.optin) {
        var r2 = t2.innerType._zod.run(e12, n2);
        return r2 instanceof Promise ? r2.then((function(t3) {
          return Ia(t3, e12.value);
        })) : Ia(r2, e12.value);
      }
      return void 0 === e12.value ? e12 : t2.innerType._zod.run(e12, n2);
    };
  }));
  var Pa = Gn("$ZodNullable", (function(e11, t2) {
    Nu.init(e11, t2), or(e11._zod, "optin", (function() {
      return t2.innerType._zod.optin;
    })), or(e11._zod, "optout", (function() {
      return t2.innerType._zod.optout;
    })), or(e11._zod, "pattern", (function() {
      var e12 = t2.innerType._zod.pattern;
      return e12 ? new RegExp("^(".concat(ar(e12.source), "|null)$")) : void 0;
    })), or(e11._zod, "values", (function() {
      return t2.innerType._zod.values ? new Set([].concat(ln(t2.innerType._zod.values), [null])) : void 0;
    })), e11._zod.parse = function(e12, n2) {
      return null === e12.value ? e12 : t2.innerType._zod.run(e12, n2);
    };
  }));
  var ja = Gn("$ZodDefault", (function(e11, t2) {
    Nu.init(e11, t2), e11._zod.optin = "optional", or(e11._zod, "values", (function() {
      return t2.innerType._zod.values;
    })), e11._zod.parse = function(e12, n2) {
      if ("backward" === n2.direction) return t2.innerType._zod.run(e12, n2);
      if (void 0 === e12.value) return e12.value = t2.defaultValue, e12;
      var r2 = t2.innerType._zod.run(e12, n2);
      return r2 instanceof Promise ? r2.then((function(e13) {
        return Na(e13, t2);
      })) : Na(r2, t2);
    };
  }));
  function Na(e11, t2) {
    return void 0 === e11.value && (e11.value = t2.defaultValue), e11;
  }
  var za = Gn("$ZodPrefault", (function(e11, t2) {
    Nu.init(e11, t2), e11._zod.optin = "optional", or(e11._zod, "values", (function() {
      return t2.innerType._zod.values;
    })), e11._zod.parse = function(e12, n2) {
      return "backward" === n2.direction || void 0 === e12.value && (e12.value = t2.defaultValue), t2.innerType._zod.run(e12, n2);
    };
  }));
  var Ra = Gn("$ZodNonOptional", (function(e11, t2) {
    Nu.init(e11, t2), or(e11._zod, "values", (function() {
      var e12 = t2.innerType._zod.values;
      return e12 ? new Set(ln(e12).filter((function(e13) {
        return void 0 !== e13;
      }))) : void 0;
    })), e11._zod.parse = function(n2, r2) {
      var u2 = t2.innerType._zod.run(n2, r2);
      return u2 instanceof Promise ? u2.then((function(t3) {
        return Ma(t3, e11);
      })) : Ma(u2, e11);
    };
  }));
  function Ma(e11, t2) {
    return e11.issues.length || void 0 !== e11.value || e11.issues.push({ code: "invalid_type", expected: "nonoptional", input: e11.value, inst: t2 }), e11;
  }
  var Za = Gn("$ZodCatch", (function(e11, t2) {
    Nu.init(e11, t2), or(e11._zod, "optin", (function() {
      return t2.innerType._zod.optin;
    })), or(e11._zod, "optout", (function() {
      return t2.innerType._zod.optout;
    })), or(e11._zod, "values", (function() {
      return t2.innerType._zod.values;
    })), e11._zod.parse = function(e12, n2) {
      if ("backward" === n2.direction) return t2.innerType._zod.run(e12, n2);
      var r2 = t2.innerType._zod.run(e12, n2);
      return r2 instanceof Promise ? r2.then((function(r3) {
        return e12.value = r3.value, r3.issues.length && (e12.value = t2.catchValue(un(un({}, e12), {}, { error: { issues: r3.issues.map((function(e13) {
          return Cr(e13, n2, er());
        })) }, input: e12.value })), e12.issues = []), e12;
      })) : (e12.value = r2.value, r2.issues.length && (e12.value = t2.catchValue(un(un({}, e12), {}, { error: { issues: r2.issues.map((function(e13) {
        return Cr(e13, n2, er());
      })) }, input: e12.value })), e12.issues = []), e12);
    };
  }));
  var La = Gn("$ZodPipe", (function(e11, t2) {
    Nu.init(e11, t2), or(e11._zod, "values", (function() {
      return t2.in._zod.values;
    })), or(e11._zod, "optin", (function() {
      return t2.in._zod.optin;
    })), or(e11._zod, "optout", (function() {
      return t2.out._zod.optout;
    })), or(e11._zod, "propValues", (function() {
      return t2.in._zod.propValues;
    })), e11._zod.parse = function(e12, n2) {
      if ("backward" === n2.direction) {
        var r2 = t2.out._zod.run(e12, n2);
        return r2 instanceof Promise ? r2.then((function(e13) {
          return $a(e13, t2.in, n2);
        })) : $a(r2, t2.in, n2);
      }
      var u2 = t2.in._zod.run(e12, n2);
      return u2 instanceof Promise ? u2.then((function(e13) {
        return $a(e13, t2.out, n2);
      })) : $a(u2, t2.out, n2);
    };
  }));
  function $a(e11, t2, n2) {
    return e11.issues.length ? (e11.aborted = true, e11) : t2._zod.run({ value: e11.value, issues: e11.issues }, n2);
  }
  var qa = Gn("$ZodReadonly", (function(e11, t2) {
    Nu.init(e11, t2), or(e11._zod, "propValues", (function() {
      return t2.innerType._zod.propValues;
    })), or(e11._zod, "values", (function() {
      return t2.innerType._zod.values;
    })), or(e11._zod, "optin", (function() {
      return t2.innerType._zod.optin;
    })), or(e11._zod, "optout", (function() {
      return t2.innerType._zod.optout;
    })), e11._zod.parse = function(e12, n2) {
      if ("backward" === n2.direction) return t2.innerType._zod.run(e12, n2);
      var r2 = t2.innerType._zod.run(e12, n2);
      return r2 instanceof Promise ? r2.then(Ua) : Ua(r2);
    };
  }));
  function Ua(e11) {
    return e11.value = Object.freeze(e11.value), e11;
  }
  var Va = Gn("$ZodLazy", (function(e11, t2) {
    Nu.init(e11, t2), or(e11._zod, "innerType", (function() {
      return t2.getter();
    })), or(e11._zod, "pattern", (function() {
      return e11._zod.innerType._zod.pattern;
    })), or(e11._zod, "propValues", (function() {
      return e11._zod.innerType._zod.propValues;
    })), or(e11._zod, "optin", (function() {
      var t3;
      return null !== (t3 = e11._zod.innerType._zod.optin) && void 0 !== t3 ? t3 : void 0;
    })), or(e11._zod, "optout", (function() {
      var t3;
      return null !== (t3 = e11._zod.innerType._zod.optout) && void 0 !== t3 ? t3 : void 0;
    })), e11._zod.parse = function(t3, n2) {
      return e11._zod.innerType._zod.run(t3, n2);
    };
  }));
  var Ha = Gn("$ZodCustom", (function(e11, t2) {
    fu.init(e11, t2), Nu.init(e11, t2), e11._zod.parse = function(e12, t3) {
      return e12;
    }, e11._zod.check = function(n2) {
      var r2 = n2.value, u2 = t2.fn(r2);
      if (u2 instanceof Promise) return u2.then((function(t3) {
        return Wa(t3, n2, r2, e11);
      }));
      Wa(u2, n2, r2, e11);
    };
  }));
  function Wa(e11, t2, n2, r2) {
    if (!e11) {
      var u2, a2 = { code: "custom", input: n2, inst: r2, path: ln(null !== (u2 = r2._zod.def.path) && void 0 !== u2 ? u2 : []), continue: !r2._zod.def.abort };
      r2._zod.def.params && (a2.params = r2._zod.def.params), t2.issues.push(xr(a2));
    }
  }
  var Ka = Gt((function e3() {
    Wt(this, e3), this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }), [{ key: "add", value: function(e11) {
    var t2 = arguments.length <= 1 ? void 0 : arguments[1];
    if (this._map.set(e11, t2), t2 && "object" === dn(t2) && "id" in t2) {
      if (this._idmap.has(t2.id)) throw new Error("ID ".concat(t2.id, " already exists in the registry"));
      this._idmap.set(t2.id, e11);
    }
    return this;
  } }, { key: "clear", value: function() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  } }, { key: "remove", value: function(e11) {
    var t2 = this._map.get(e11);
    return t2 && "object" === dn(t2) && "id" in t2 && this._idmap.delete(t2.id), this._map.delete(e11), this;
  } }, { key: "get", value: function(e11) {
    var t2 = e11._zod.parent;
    if (t2) {
      var n2, r2 = un({}, null !== (n2 = this.get(t2)) && void 0 !== n2 ? n2 : {});
      delete r2.id;
      var u2 = un(un({}, r2), this._map.get(e11));
      return Object.keys(u2).length ? u2 : void 0;
    }
    return this._map.get(e11);
  } }, { key: "has", value: function(e11) {
    return this._map.has(e11);
  } }]);
  var Ja = new Ka();
  function Ga(e11, t2) {
    return new e11(un({ type: "string", format: "guid", check: "string_format", abort: false }, Fr(t2)));
  }
  function Qa(e11, t2) {
    return new e11(un({ type: "string", format: "base64", check: "string_format", abort: false }, Fr(t2)));
  }
  function Ya(e11, t2) {
    return new pu(un(un({ check: "less_than" }, Fr(t2)), {}, { value: e11, inclusive: false }));
  }
  function Xa(e11, t2) {
    return new pu(un(un({ check: "less_than" }, Fr(t2)), {}, { value: e11, inclusive: true }));
  }
  function ei(e11, t2) {
    return new hu(un(un({ check: "greater_than" }, Fr(t2)), {}, { value: e11, inclusive: false }));
  }
  function ti(e11, t2) {
    return new hu(un(un({ check: "greater_than" }, Fr(t2)), {}, { value: e11, inclusive: true }));
  }
  function ni(e11, t2) {
    return new vu(un(un({ check: "multiple_of" }, Fr(t2)), {}, { value: e11 }));
  }
  function ri(e11, t2) {
    return new Fu(un(un({ check: "max_length" }, Fr(t2)), {}, { maximum: e11 }));
  }
  function ui(e11, t2) {
    return new Eu(un(un({ check: "min_length" }, Fr(t2)), {}, { minimum: e11 }));
  }
  function ai(e11, t2) {
    return new bu(un(un({ check: "length_equals" }, Fr(t2)), {}, { length: e11 }));
  }
  function ii(e11, t2) {
    return new ku(un(un({ check: "string_format", format: "regex" }, Fr(t2)), {}, { pattern: e11 }));
  }
  function oi(e11) {
    return new Cu(un({ check: "string_format", format: "lowercase" }, Fr(e11)));
  }
  function si(e11) {
    return new Au(un({ check: "string_format", format: "uppercase" }, Fr(e11)));
  }
  function ci(e11, t2) {
    return new wu(un(un({ check: "string_format", format: "includes" }, Fr(t2)), {}, { includes: e11 }));
  }
  function li(e11, t2) {
    return new xu(un(un({ check: "string_format", format: "starts_with" }, Fr(t2)), {}, { prefix: e11 }));
  }
  function fi(e11, t2) {
    return new Su(un(un({ check: "string_format", format: "ends_with" }, Fr(t2)), {}, { suffix: e11 }));
  }
  function di(e11) {
    return new Tu({ check: "overwrite", tx: e11 });
  }
  function pi(e11) {
    return di((function(t2) {
      return t2.normalize(e11);
    }));
  }
  function hi() {
    return di((function(e11) {
      return e11.trim();
    }));
  }
  function vi() {
    return di((function(e11) {
      return e11.toLowerCase();
    }));
  }
  function mi() {
    return di((function(e11) {
      return e11.toUpperCase();
    }));
  }
  var Di = Gt((function e4(t2) {
    var n2, r2, u2, a2, i2;
    Wt(this, e4), this.counter = 0, this.metadataRegistry = null !== (n2 = null == t2 ? void 0 : t2.metadata) && void 0 !== n2 ? n2 : Ja, this.target = null !== (r2 = null == t2 ? void 0 : t2.target) && void 0 !== r2 ? r2 : "draft-2020-12", this.unrepresentable = null !== (u2 = null == t2 ? void 0 : t2.unrepresentable) && void 0 !== u2 ? u2 : "throw", this.override = null !== (a2 = null == t2 ? void 0 : t2.override) && void 0 !== a2 ? a2 : function() {
    }, this.io = null !== (i2 = null == t2 ? void 0 : t2.io) && void 0 !== i2 ? i2 : "output", this.seen = /* @__PURE__ */ new Map();
  }), [{ key: "process", value: function(e11) {
    var t2, n2, r2, u2, a2 = this, i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { path: [], schemaPath: [] }, o2 = e11._zod.def, s2 = this.seen.get(e11);
    if (s2) return s2.count++, i2.schemaPath.includes(e11) && (s2.cycle = i2.path), s2.schema;
    var c2 = { schema: {}, count: 1, cycle: void 0, path: i2.path };
    this.seen.set(e11, c2);
    var l2 = null === (t2 = (n2 = e11._zod).toJSONSchema) || void 0 === t2 ? void 0 : t2.call(n2);
    if (l2) c2.schema = l2;
    else {
      var f2 = un(un({}, i2), {}, { schemaPath: [].concat(ln(i2.schemaPath), [e11]), path: i2.path }), d2 = e11._zod.parent;
      if (d2) c2.ref = d2, this.process(d2, f2), this.seen.get(d2).isParent = true;
      else {
        var p2 = c2.schema;
        switch (o2.type) {
          case "string":
            var h2 = p2;
            h2.type = "string";
            var v2, m2 = e11._zod.bag, D2 = m2.minimum, y2 = m2.maximum, g2 = m2.format, F2 = m2.patterns, E2 = m2.contentEncoding;
            if ("number" == typeof D2 && (h2.minLength = D2), "number" == typeof y2 && (h2.maxLength = y2), g2 && (h2.format = null !== (v2 = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" }[g2]) && void 0 !== v2 ? v2 : g2, "" === h2.format && delete h2.format), E2 && (h2.contentEncoding = E2), F2 && F2.size > 0) {
              var b2 = ln(F2);
              1 === b2.length ? h2.pattern = b2[0].source : b2.length > 1 && (c2.schema.allOf = ln(b2.map((function(e12) {
                return un(un({}, "draft-7" === a2.target || "draft-4" === a2.target || "openapi-3.0" === a2.target ? { type: "string" } : {}), {}, { pattern: e12.source });
              }))));
            }
            break;
          case "number":
            var _2 = p2, k2 = e11._zod.bag, C2 = k2.minimum, A2 = k2.maximum, w2 = k2.format, x2 = k2.multipleOf, S2 = k2.exclusiveMaximum, B2 = k2.exclusiveMinimum;
            "string" == typeof w2 && w2.includes("int") ? _2.type = "integer" : _2.type = "number", "number" == typeof B2 && ("draft-4" === this.target || "openapi-3.0" === this.target ? (_2.minimum = B2, _2.exclusiveMinimum = true) : _2.exclusiveMinimum = B2), "number" == typeof C2 && (_2.minimum = C2, "number" == typeof B2 && "draft-4" !== this.target && (B2 >= C2 ? delete _2.minimum : delete _2.exclusiveMinimum)), "number" == typeof S2 && ("draft-4" === this.target || "openapi-3.0" === this.target ? (_2.maximum = S2, _2.exclusiveMaximum = true) : _2.exclusiveMaximum = S2), "number" == typeof A2 && (_2.maximum = A2, "number" == typeof S2 && "draft-4" !== this.target && (S2 <= A2 ? delete _2.maximum : delete _2.exclusiveMaximum)), "number" == typeof x2 && (_2.multipleOf = x2);
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
            var O2 = p2, I2 = e11._zod.bag, T2 = I2.minimum, P2 = I2.maximum;
            "number" == typeof T2 && (O2.minItems = T2), "number" == typeof P2 && (O2.maxItems = P2), O2.type = "array", O2.items = this.process(o2.element, un(un({}, f2), {}, { path: [].concat(ln(f2.path), ["items"]) }));
            break;
          case "object":
            var j2, N2 = p2;
            N2.type = "object", N2.properties = {};
            var z2 = o2.shape;
            for (var R2 in z2) N2.properties[R2] = this.process(z2[R2], un(un({}, f2), {}, { path: [].concat(ln(f2.path), ["properties", R2]) }));
            var M2 = new Set(Object.keys(z2)), Z2 = new Set(ln(M2).filter((function(e12) {
              var t3 = o2.shape[e12]._zod;
              return "input" === a2.io ? void 0 === t3.optin : void 0 === t3.optout;
            })));
            Z2.size > 0 && (N2.required = Array.from(Z2)), "never" === (null === (j2 = o2.catchall) || void 0 === j2 ? void 0 : j2._zod.def.type) ? N2.additionalProperties = false : o2.catchall ? o2.catchall && (N2.additionalProperties = this.process(o2.catchall, un(un({}, f2), {}, { path: [].concat(ln(f2.path), ["additionalProperties"]) }))) : "output" === this.io && (N2.additionalProperties = false);
            break;
          case "union":
            var L2 = p2, $2 = o2.options.map((function(e12, t3) {
              return a2.process(e12, un(un({}, f2), {}, { path: [].concat(ln(f2.path), ["anyOf", t3]) }));
            }));
            L2.anyOf = $2;
            break;
          case "intersection":
            var q2 = p2, U2 = this.process(o2.left, un(un({}, f2), {}, { path: [].concat(ln(f2.path), ["allOf", 0]) })), V2 = this.process(o2.right, un(un({}, f2), {}, { path: [].concat(ln(f2.path), ["allOf", 1]) })), H2 = function(e12) {
              return "allOf" in e12 && 1 === Object.keys(e12).length;
            }, W2 = [].concat(ln(H2(U2) ? U2.allOf : [U2]), ln(H2(V2) ? V2.allOf : [V2]));
            q2.allOf = W2;
            break;
          case "tuple":
            var K2 = p2;
            K2.type = "array";
            var J2 = "draft-2020-12" === this.target ? "prefixItems" : "items", G2 = "draft-2020-12" === this.target || "openapi-3.0" === this.target ? "items" : "additionalItems", Q2 = o2.items.map((function(e12, t3) {
              return a2.process(e12, un(un({}, f2), {}, { path: [].concat(ln(f2.path), [J2, t3]) }));
            })), Y2 = o2.rest ? this.process(o2.rest, un(un({}, f2), {}, { path: [].concat(ln(f2.path), [G2], ln("openapi-3.0" === this.target ? [o2.items.length] : [])) })) : null;
            "draft-2020-12" === this.target ? (K2.prefixItems = Q2, Y2 && (K2.items = Y2)) : "openapi-3.0" === this.target ? (K2.items = { anyOf: Q2 }, Y2 && K2.items.anyOf.push(Y2), K2.minItems = Q2.length, Y2 || (K2.maxItems = Q2.length)) : (K2.items = Q2, Y2 && (K2.additionalItems = Y2));
            var X2 = e11._zod.bag, ee2 = X2.minimum, te2 = X2.maximum;
            "number" == typeof ee2 && (K2.minItems = ee2), "number" == typeof te2 && (K2.maxItems = te2);
            break;
          case "record":
            var ne2 = p2;
            ne2.type = "object", "draft-7" !== this.target && "draft-2020-12" !== this.target || (ne2.propertyNames = this.process(o2.keyType, un(un({}, f2), {}, { path: [].concat(ln(f2.path), ["propertyNames"]) }))), ne2.additionalProperties = this.process(o2.valueType, un(un({}, f2), {}, { path: [].concat(ln(f2.path), ["additionalProperties"]) }));
            break;
          case "map":
            if ("throw" === this.unrepresentable) throw new Error("Map cannot be represented in JSON Schema");
            break;
          case "set":
            if ("throw" === this.unrepresentable) throw new Error("Set cannot be represented in JSON Schema");
            break;
          case "enum":
            var re2 = p2, ue2 = tr(o2.entries);
            ue2.every((function(e12) {
              return "number" == typeof e12;
            })) && (re2.type = "number"), ue2.every((function(e12) {
              return "string" == typeof e12;
            })) && (re2.type = "string"), re2.enum = ue2;
            break;
          case "literal":
            var ae2, ie2 = p2, oe2 = [], se2 = Qt(o2.values);
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
              ie2.type = null === le2 ? "null" : dn(le2), "draft-4" === this.target || "openapi-3.0" === this.target ? ie2.enum = [le2] : ie2.const = le2;
            } else oe2.every((function(e12) {
              return "number" == typeof e12;
            })) && (ie2.type = "number"), oe2.every((function(e12) {
              return "string" == typeof e12;
            })) && (ie2.type = "string"), oe2.every((function(e12) {
              return "boolean" == typeof e12;
            })) && (ie2.type = "string"), oe2.every((function(e12) {
              return null === e12;
            })) && (ie2.type = "null"), ie2.enum = oe2;
            break;
          case "file":
            var fe2 = p2, de2 = { type: "string", format: "binary", contentEncoding: "binary" }, pe2 = e11._zod.bag, he2 = pe2.minimum, ve2 = pe2.maximum, me2 = pe2.mime;
            void 0 !== he2 && (de2.minLength = he2), void 0 !== ve2 && (de2.maxLength = ve2), me2 ? 1 === me2.length ? (de2.contentMediaType = me2[0], Object.assign(fe2, de2)) : fe2.anyOf = me2.map((function(e12) {
              return un(un({}, de2), {}, { contentMediaType: e12 });
            })) : Object.assign(fe2, de2);
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
            var be2 = e11._zod.innerType;
            this.process(be2, f2), c2.ref = be2;
            break;
          case "custom":
            if ("throw" === this.unrepresentable) throw new Error("Custom types cannot be represented in JSON Schema");
            break;
          case "function":
            if ("throw" === this.unrepresentable) throw new Error("Function types cannot be represented in JSON Schema");
        }
      }
    }
    var _e2 = this.metadataRegistry.get(e11);
    return _e2 && Object.assign(c2.schema, _e2), "input" === this.io && yi(e11) && (delete c2.schema.examples, delete c2.schema.default), "input" === this.io && c2.schema._prefault && (null !== (r2 = (u2 = c2.schema).default) && void 0 !== r2 || (u2.default = c2.schema._prefault)), delete c2.schema._prefault, this.seen.get(e11).schema;
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
        t3.def = un({}, t3.schema), u3 && (t3.defId = u3);
        var a3 = t3.schema;
        for (var i3 in a3) delete a3[i3];
        a3.$ref = r3;
      }
    };
    if ("throw" === c2.cycles) {
      var d2, p2 = Qt(this.seen.entries());
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
    var m2, D2 = Qt(this.seen.entries());
    try {
      for (D2.s(); !(m2 = D2.n()).done; ) {
        var y2, g2 = m2.value, F2 = g2[1];
        if (e11 !== g2[0]) {
          if (c2.external) {
            var E2, b2 = null === (E2 = c2.external.registry.get(g2[0])) || void 0 === E2 ? void 0 : E2.id;
            if (e11 !== g2[0] && b2) {
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
    var _2, k2 = function(e12, t3) {
      var n3, r3, u3 = s2.seen.get(e12), a3 = null !== (n3 = u3.def) && void 0 !== n3 ? n3 : u3.schema, i3 = un({}, a3);
      if (null !== u3.ref) {
        var o3 = u3.ref;
        if (u3.ref = null, o3) {
          k2(o3, t3);
          var c3, l3 = s2.seen.get(o3).schema;
          !l3.$ref || "draft-7" !== t3.target && "draft-4" !== t3.target && "openapi-3.0" !== t3.target ? (Object.assign(a3, l3), Object.assign(a3, i3)) : (a3.allOf = null !== (c3 = a3.allOf) && void 0 !== c3 ? c3 : [], a3.allOf.push(l3));
        }
        u3.isParent || s2.override({ zodSchema: e12, jsonSchema: a3, path: null !== (r3 = u3.path) && void 0 !== r3 ? r3 : [] });
      }
    }, C2 = Qt(ln(this.seen.entries()).reverse());
    try {
      for (C2.s(); !(_2 = C2.n()).done; ) {
        var A2 = _2.value;
        k2(A2[0], { target: this.target });
      }
    } catch (e12) {
      C2.e(e12);
    } finally {
      C2.f();
    }
    var w2 = {};
    if ("draft-2020-12" === this.target ? w2.$schema = "https://json-schema.org/draft/2020-12/schema" : "draft-7" === this.target ? w2.$schema = "http://json-schema.org/draft-07/schema#" : "draft-4" === this.target ? w2.$schema = "http://json-schema.org/draft-04/schema#" : "openapi-3.0" === this.target || console.warn("Invalid target: ".concat(this.target)), null !== (a2 = c2.external) && void 0 !== a2 && a2.uri) {
      var x2, S2 = null === (x2 = c2.external.registry.get(e11)) || void 0 === x2 ? void 0 : x2.id;
      if (!S2) throw new Error("Schema is missing an `id` property");
      w2.$id = c2.external.uri(S2);
    }
    Object.assign(w2, l2.def);
    var B2, O2 = null !== (i2 = null === (o2 = c2.external) || void 0 === o2 ? void 0 : o2.defs) && void 0 !== i2 ? i2 : {}, I2 = Qt(this.seen.entries());
    try {
      for (I2.s(); !(B2 = I2.n()).done; ) {
        var T2 = B2.value[1];
        T2.def && T2.defId && (O2[T2.defId] = T2.def);
      }
    } catch (e12) {
      I2.e(e12);
    } finally {
      I2.f();
    }
    c2.external || Object.keys(O2).length > 0 && ("draft-2020-12" === this.target ? w2.$defs = O2 : w2.definitions = O2);
    try {
      return JSON.parse(JSON.stringify(w2));
    } catch (e12) {
      throw new Error("Error converting schema to JSON.");
    }
  } }]);
  function yi(e11, t2) {
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
        return yi(r2.element, n2);
      case "object":
        for (var u2 in r2.shape) if (yi(r2.shape[u2], n2)) return true;
        return false;
      case "union":
        var a2, i2 = Qt(r2.options);
        try {
          for (i2.s(); !(a2 = i2.n()).done; ) if (yi(a2.value, n2)) return true;
        } catch (e12) {
          i2.e(e12);
        } finally {
          i2.f();
        }
        return false;
      case "intersection":
        return yi(r2.left, n2) || yi(r2.right, n2);
      case "tuple":
        var o2, s2 = Qt(r2.items);
        try {
          for (s2.s(); !(o2 = s2.n()).done; ) if (yi(o2.value, n2)) return true;
        } catch (e12) {
          s2.e(e12);
        } finally {
          s2.f();
        }
        return !(!r2.rest || !yi(r2.rest, n2));
      case "record":
      case "map":
        return yi(r2.keyType, n2) || yi(r2.valueType, n2);
      case "set":
        return yi(r2.valueType, n2);
      case "promise":
      case "optional":
      case "nonoptional":
      case "nullable":
      case "readonly":
      case "default":
      case "prefault":
        return yi(r2.innerType, n2);
      case "lazy":
        return yi(r2.getter(), n2);
      case "transform":
        return true;
      case "pipe":
        return yi(r2.in, n2) || yi(r2.out, n2);
    }
    throw new Error("Unknown schema type: ".concat(r2.type));
  }
  var gi = Object.freeze({ __proto__: null, endsWith: fi, gt: ei, gte: ti, includes: ci, length: ai, lowercase: oi, lt: Ya, lte: Xa, maxLength: ri, maxSize: function(e11, t2) {
    return new Du(un(un({ check: "max_size" }, Fr(t2)), {}, { maximum: e11 }));
  }, mime: function(e11, t2) {
    return new Iu(un({ check: "mime_type", mime: e11 }, Fr(t2)));
  }, minLength: ui, minSize: function(e11, t2) {
    return new yu(un(un({ check: "min_size" }, Fr(t2)), {}, { minimum: e11 }));
  }, multipleOf: ni, negative: function(e11) {
    return Ya(0, e11);
  }, nonnegative: function(e11) {
    return ti(0, e11);
  }, nonpositive: function(e11) {
    return Xa(0, e11);
  }, normalize: pi, overwrite: di, positive: function(e11) {
    return ei(0, e11);
  }, property: function(e11, t2, n2) {
    return new Ou(un({ check: "property", property: e11, schema: t2 }, Fr(n2)));
  }, regex: ii, size: function(e11, t2) {
    return new gu(un(un({ check: "size_equals" }, Fr(t2)), {}, { size: e11 }));
  }, startsWith: li, toLowerCase: vi, toUpperCase: mi, trim: hi, uppercase: si });
  var Fi = Gn("ZodISODateTime", (function(e11, t2) {
    Gu.init(e11, t2), Li.init(e11, t2);
  }));
  var Ei = Gn("ZodISODate", (function(e11, t2) {
    Qu.init(e11, t2), Li.init(e11, t2);
  }));
  var bi = Gn("ZodISOTime", (function(e11, t2) {
    Yu.init(e11, t2), Li.init(e11, t2);
  }));
  var _i = Gn("ZodISODuration", (function(e11, t2) {
    Xu.init(e11, t2), Li.init(e11, t2);
  }));
  var ki = Gn("ZodError", (function(e11, t2) {
    Br.init(e11, t2), e11.name = "ZodError", Object.defineProperties(e11, { format: { value: function(t3) {
      return (function(e12, t4) {
        var n2 = t4 || function(e13) {
          return e13.message;
        }, r2 = { _errors: [] }, u2 = function(e13) {
          var t5, a2 = Qt(e13.issues);
          try {
            for (a2.s(); !(t5 = a2.n()).done; ) {
              var i2 = t5.value;
              if ("invalid_union" === i2.code && i2.errors.length) i2.errors.map((function(e14) {
                return u2({ issues: e14 });
              }));
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
        }, r2 = {}, u2 = [], a2 = Qt(e12.issues);
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
      e11.issues.push(t3), e11.message = JSON.stringify(e11.issues, nr, 2);
    } }, addIssues: { value: function(t3) {
      var n2;
      (n2 = e11.issues).push.apply(n2, ln(t3)), e11.message = JSON.stringify(e11.issues, nr, 2);
    } }, isEmpty: { get: function() {
      return 0 === e11.issues.length;
    } } });
  }), { Parent: Error });
  var Ci = Ir(ki);
  var Ai = Tr(ki);
  var wi = Pr(ki);
  var xi = Nr(ki);
  var Si = /* @__PURE__ */ (function(e11) {
    return function(t2, n2, r2) {
      var u2 = r2 ? Object.assign(r2, { direction: "backward" }) : { direction: "backward" };
      return Ir(e11)(t2, n2, u2);
    };
  })(ki);
  var Bi = /* @__PURE__ */ (function(e11) {
    return function(t2, n2, r2) {
      return Ir(e11)(t2, n2, r2);
    };
  })(ki);
  var Oi = (function(e11) {
    return (function() {
      var t2 = Vt(on().mark((function t3(n2, r2, u2) {
        var a2;
        return on().wrap((function(t4) {
          for (; ; ) switch (t4.prev = t4.next) {
            case 0:
              return a2 = u2 ? Object.assign(u2, { direction: "backward" }) : { direction: "backward" }, t4.abrupt("return", Tr(e11)(n2, r2, a2));
            case 2:
            case "end":
              return t4.stop();
          }
        }), t3);
      })));
      return function(e12, n2, r2) {
        return t2.apply(this, arguments);
      };
    })();
  })(ki);
  var Ii = (function(e11) {
    return (function() {
      var t2 = Vt(on().mark((function t3(n2, r2, u2) {
        return on().wrap((function(t4) {
          for (; ; ) switch (t4.prev = t4.next) {
            case 0:
              return t4.abrupt("return", Tr(e11)(n2, r2, u2));
            case 1:
            case "end":
              return t4.stop();
          }
        }), t3);
      })));
      return function(e12, n2, r2) {
        return t2.apply(this, arguments);
      };
    })();
  })(ki);
  var Ti = /* @__PURE__ */ (function(e11) {
    return function(t2, n2, r2) {
      var u2 = r2 ? Object.assign(r2, { direction: "backward" }) : { direction: "backward" };
      return Pr(e11)(t2, n2, u2);
    };
  })(ki);
  var Pi = /* @__PURE__ */ (function(e11) {
    return function(t2, n2, r2) {
      return Pr(e11)(t2, n2, r2);
    };
  })(ki);
  var ji = (function(e11) {
    return (function() {
      var t2 = Vt(on().mark((function t3(n2, r2, u2) {
        var a2;
        return on().wrap((function(t4) {
          for (; ; ) switch (t4.prev = t4.next) {
            case 0:
              return a2 = u2 ? Object.assign(u2, { direction: "backward" }) : { direction: "backward" }, t4.abrupt("return", Nr(e11)(n2, r2, a2));
            case 2:
            case "end":
              return t4.stop();
          }
        }), t3);
      })));
      return function(e12, n2, r2) {
        return t2.apply(this, arguments);
      };
    })();
  })(ki);
  var Ni = (function(e11) {
    return (function() {
      var t2 = Vt(on().mark((function t3(n2, r2, u2) {
        return on().wrap((function(t4) {
          for (; ; ) switch (t4.prev = t4.next) {
            case 0:
              return t4.abrupt("return", Nr(e11)(n2, r2, u2));
            case 1:
            case "end":
              return t4.stop();
          }
        }), t3);
      })));
      return function(e12, n2, r2) {
        return t2.apply(this, arguments);
      };
    })();
  })(ki);
  var zi = Gn("ZodType", (function(e11, t2) {
    return Nu.init(e11, t2), e11.def = t2, e11.type = t2.type, Object.defineProperty(e11, "_def", { value: t2 }), e11.check = function() {
      for (var n2, r2 = arguments.length, u2 = new Array(r2), a2 = 0; a2 < r2; a2++) u2[a2] = arguments[a2];
      return e11.clone(un(un({}, t2), {}, { checks: [].concat(ln(null !== (n2 = t2.checks) && void 0 !== n2 ? n2 : []), ln(u2.map((function(e12) {
        return "function" == typeof e12 ? { _zod: { check: e12, def: { check: "custom" }, onattach: [] } } : e12;
      })))) }));
    }, e11.clone = function(t3, n2) {
      return gr(e11, t3, n2);
    }, e11.brand = function() {
      return e11;
    }, e11.register = function(t3, n2) {
      return t3.add(e11, n2), e11;
    }, e11.parse = function(t3, n2) {
      return Ci(e11, t3, n2, { callee: e11.parse });
    }, e11.safeParse = function(t3, n2) {
      return wi(e11, t3, n2);
    }, e11.parseAsync = (function() {
      var t3 = Vt(on().mark((function t4(n2, r2) {
        return on().wrap((function(t5) {
          for (; ; ) switch (t5.prev = t5.next) {
            case 0:
              return t5.abrupt("return", Ai(e11, n2, r2, { callee: e11.parseAsync }));
            case 1:
            case "end":
              return t5.stop();
          }
        }), t4);
      })));
      return function(e12, n2) {
        return t3.apply(this, arguments);
      };
    })(), e11.safeParseAsync = (function() {
      var t3 = Vt(on().mark((function t4(n2, r2) {
        return on().wrap((function(t5) {
          for (; ; ) switch (t5.prev = t5.next) {
            case 0:
              return t5.abrupt("return", xi(e11, n2, r2));
            case 1:
            case "end":
              return t5.stop();
          }
        }), t4);
      })));
      return function(e12, n2) {
        return t3.apply(this, arguments);
      };
    })(), e11.spa = e11.safeParseAsync, e11.encode = function(t3, n2) {
      return Si(e11, t3, n2);
    }, e11.decode = function(t3, n2) {
      return Bi(e11, t3, n2);
    }, e11.encodeAsync = (function() {
      var t3 = Vt(on().mark((function t4(n2, r2) {
        return on().wrap((function(t5) {
          for (; ; ) switch (t5.prev = t5.next) {
            case 0:
              return t5.abrupt("return", Oi(e11, n2, r2));
            case 1:
            case "end":
              return t5.stop();
          }
        }), t4);
      })));
      return function(e12, n2) {
        return t3.apply(this, arguments);
      };
    })(), e11.decodeAsync = (function() {
      var t3 = Vt(on().mark((function t4(n2, r2) {
        return on().wrap((function(t5) {
          for (; ; ) switch (t5.prev = t5.next) {
            case 0:
              return t5.abrupt("return", Ii(e11, n2, r2));
            case 1:
            case "end":
              return t5.stop();
          }
        }), t4);
      })));
      return function(e12, n2) {
        return t3.apply(this, arguments);
      };
    })(), e11.safeEncode = function(t3, n2) {
      return Ti(e11, t3, n2);
    }, e11.safeDecode = function(t3, n2) {
      return Pi(e11, t3, n2);
    }, e11.safeEncodeAsync = (function() {
      var t3 = Vt(on().mark((function t4(n2, r2) {
        return on().wrap((function(t5) {
          for (; ; ) switch (t5.prev = t5.next) {
            case 0:
              return t5.abrupt("return", ji(e11, n2, r2));
            case 1:
            case "end":
              return t5.stop();
          }
        }), t4);
      })));
      return function(e12, n2) {
        return t3.apply(this, arguments);
      };
    })(), e11.safeDecodeAsync = (function() {
      var t3 = Vt(on().mark((function t4(n2, r2) {
        return on().wrap((function(t5) {
          for (; ; ) switch (t5.prev = t5.next) {
            case 0:
              return t5.abrupt("return", Ni(e11, n2, r2));
            case 1:
            case "end":
              return t5.stop();
          }
        }), t4);
      })));
      return function(e12, n2) {
        return t3.apply(this, arguments);
      };
    })(), e11.refine = function(t3, n2) {
      return e11.check((function(e12) {
        return (function(e13, t4, n3) {
          return new Yo(un({ type: "custom", check: "custom", fn: t4 }, Fr(n3)));
        })(0, e12, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {});
      })(t3, n2));
    }, e11.superRefine = function(t3) {
      return e11.check((function(e12) {
        var t4 = (function(e13) {
          var t5 = new fu(un({ check: "custom" }, Fr(void 0)));
          return t5._zod.check = e13, t5;
        })((function(n2) {
          return n2.addIssue = function(e13) {
            if ("string" == typeof e13) n2.issues.push(xr(e13, n2.value, t4._zod.def));
            else {
              var r2, u2, a2, i2, o2 = e13;
              o2.fatal && (o2.continue = false), null !== (r2 = o2.code) && void 0 !== r2 || (o2.code = "custom"), null !== (u2 = o2.input) && void 0 !== u2 || (o2.input = n2.value), null !== (a2 = o2.inst) && void 0 !== a2 || (o2.inst = t4), null !== (i2 = o2.continue) && void 0 !== i2 || (o2.continue = !t4._zod.def.abort), n2.issues.push(xr(o2));
            }
          }, e12(n2.value, n2);
        }));
        return t4;
      })(t3));
    }, e11.overwrite = function(t3) {
      return e11.check(di(t3));
    }, e11.optional = function() {
      return Mo(e11);
    }, e11.nullable = function() {
      return Lo(e11);
    }, e11.nullish = function() {
      return Mo(Lo(e11));
    }, e11.nonoptional = function(t3) {
      return (function(e12, t4) {
        return new Uo(un({ type: "nonoptional", innerType: e12 }, Fr(t4)));
      })(e11, t3);
    }, e11.array = function() {
      return bo(e11);
    }, e11.or = function(t3) {
      return xo([e11, t3]);
    }, e11.and = function(t3) {
      return new Bo({ type: "intersection", left: e11, right: t3 });
    }, e11.transform = function(t3) {
      return Wo(e11, new zo({ type: "transform", transform: t3 }));
    }, e11.default = function(t3) {
      return n2 = t3, new $o({ type: "default", innerType: e11, get defaultValue() {
        return "function" == typeof n2 ? n2() : mr(n2);
      } });
      var n2;
    }, e11.prefault = function(t3) {
      return n2 = t3, new qo({ type: "prefault", innerType: e11, get defaultValue() {
        return "function" == typeof n2 ? n2() : mr(n2);
      } });
      var n2;
    }, e11.catch = function(t3) {
      return new Vo({ type: "catch", innerType: e11, catchValue: "function" == typeof (n2 = t3) ? n2 : function() {
        return n2;
      } });
      var n2;
    }, e11.pipe = function(t3) {
      return Wo(e11, t3);
    }, e11.readonly = function() {
      return new Go({ type: "readonly", innerType: e11 });
    }, e11.describe = function(t3) {
      var n2 = e11.clone();
      return Ja.add(n2, { description: t3 }), n2;
    }, Object.defineProperty(e11, "description", { get: function() {
      var t3;
      return null === (t3 = Ja.get(e11)) || void 0 === t3 ? void 0 : t3.description;
    }, configurable: true }), e11.meta = function() {
      if (0 === arguments.length) return Ja.get(e11);
      var t3 = e11.clone();
      return Ja.add(t3, arguments.length <= 0 ? void 0 : arguments[0]), t3;
    }, e11.isOptional = function() {
      return e11.safeParse(void 0).success;
    }, e11.isNullable = function() {
      return e11.safeParse(null).success;
    }, e11;
  }));
  var Ri = Gn("_ZodString", (function(e11, t2) {
    var n2, r2, u2;
    zu.init(e11, t2), zi.init(e11, t2);
    var a2 = e11._zod.bag;
    e11.format = null !== (n2 = a2.format) && void 0 !== n2 ? n2 : null, e11.minLength = null !== (r2 = a2.minimum) && void 0 !== r2 ? r2 : null, e11.maxLength = null !== (u2 = a2.maximum) && void 0 !== u2 ? u2 : null, e11.regex = function() {
      return e11.check(ii.apply(gi, arguments));
    }, e11.includes = function() {
      return e11.check(ci.apply(gi, arguments));
    }, e11.startsWith = function() {
      return e11.check(li.apply(gi, arguments));
    }, e11.endsWith = function() {
      return e11.check(fi.apply(gi, arguments));
    }, e11.min = function() {
      return e11.check(ui.apply(gi, arguments));
    }, e11.max = function() {
      return e11.check(ri.apply(gi, arguments));
    }, e11.length = function() {
      return e11.check(ai.apply(gi, arguments));
    }, e11.nonempty = function() {
      for (var t3 = arguments.length, n3 = new Array(t3), r3 = 0; r3 < t3; r3++) n3[r3] = arguments[r3];
      return e11.check(ui.apply(gi, [1].concat(n3)));
    }, e11.lowercase = function(t3) {
      return e11.check(oi(t3));
    }, e11.uppercase = function(t3) {
      return e11.check(si(t3));
    }, e11.trim = function() {
      return e11.check(hi());
    }, e11.normalize = function() {
      return e11.check(pi.apply(gi, arguments));
    }, e11.toLowerCase = function() {
      return e11.check(vi());
    }, e11.toUpperCase = function() {
      return e11.check(mi());
    };
  }));
  var Mi = Gn("ZodString", (function(e11, t2) {
    zu.init(e11, t2), Ri.init(e11, t2), e11.email = function(t3) {
      return e11.check((function(e12, t4) {
        return new $i(un({ type: "string", format: "email", check: "string_format", abort: false }, Fr(t4)));
      })(0, t3));
    }, e11.url = function(t3) {
      return e11.check((function(e12, t4) {
        return new Vi(un({ type: "string", format: "url", check: "string_format", abort: false }, Fr(t4)));
      })(0, t3));
    }, e11.jwt = function(t3) {
      return e11.check((function(e12, t4) {
        return new oo(un({ type: "string", format: "jwt", check: "string_format", abort: false }, Fr(t4)));
      })(0, t3));
    }, e11.emoji = function(t3) {
      return e11.check((function(e12, t4) {
        return new Hi(un({ type: "string", format: "emoji", check: "string_format", abort: false }, Fr(t4)));
      })(0, t3));
    }, e11.guid = function(t3) {
      return e11.check(Ga(qi, t3));
    }, e11.uuid = function(t3) {
      return e11.check((function(e12, t4) {
        return new Ui(un({ type: "string", format: "uuid", check: "string_format", abort: false }, Fr(t4)));
      })(0, t3));
    }, e11.uuidv4 = function(t3) {
      return e11.check((function(e12, t4) {
        return new Ui(un({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v4" }, Fr(t4)));
      })(0, t3));
    }, e11.uuidv6 = function(t3) {
      return e11.check((function(e12, t4) {
        return new Ui(un({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v6" }, Fr(t4)));
      })(0, t3));
    }, e11.uuidv7 = function(t3) {
      return e11.check((function(e12, t4) {
        return new Ui(un({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v7" }, Fr(t4)));
      })(0, t3));
    }, e11.nanoid = function(t3) {
      return e11.check((function(e12, t4) {
        return new Wi(un({ type: "string", format: "nanoid", check: "string_format", abort: false }, Fr(t4)));
      })(0, t3));
    }, e11.guid = function(t3) {
      return e11.check(Ga(qi, t3));
    }, e11.cuid = function(t3) {
      return e11.check((function(e12, t4) {
        return new Ki(un({ type: "string", format: "cuid", check: "string_format", abort: false }, Fr(t4)));
      })(0, t3));
    }, e11.cuid2 = function(t3) {
      return e11.check((function(e12, t4) {
        return new Ji(un({ type: "string", format: "cuid2", check: "string_format", abort: false }, Fr(t4)));
      })(0, t3));
    }, e11.ulid = function(t3) {
      return e11.check((function(e12, t4) {
        return new Gi(un({ type: "string", format: "ulid", check: "string_format", abort: false }, Fr(t4)));
      })(0, t3));
    }, e11.base64 = function(t3) {
      return e11.check(Qa(ro, t3));
    }, e11.base64url = function(t3) {
      return e11.check((function(e12, t4) {
        return new ao(un({ type: "string", format: "base64url", check: "string_format", abort: false }, Fr(t4)));
      })(0, t3));
    }, e11.xid = function(t3) {
      return e11.check((function(e12, t4) {
        return new Qi(un({ type: "string", format: "xid", check: "string_format", abort: false }, Fr(t4)));
      })(0, t3));
    }, e11.ksuid = function(t3) {
      return e11.check((function(e12, t4) {
        return new Yi(un({ type: "string", format: "ksuid", check: "string_format", abort: false }, Fr(t4)));
      })(0, t3));
    }, e11.ipv4 = function(t3) {
      return e11.check((function(e12, t4) {
        return new Xi(un({ type: "string", format: "ipv4", check: "string_format", abort: false }, Fr(t4)));
      })(0, t3));
    }, e11.ipv6 = function(t3) {
      return e11.check((function(e12, t4) {
        return new eo(un({ type: "string", format: "ipv6", check: "string_format", abort: false }, Fr(t4)));
      })(0, t3));
    }, e11.cidrv4 = function(t3) {
      return e11.check((function(e12, t4) {
        return new to(un({ type: "string", format: "cidrv4", check: "string_format", abort: false }, Fr(t4)));
      })(0, t3));
    }, e11.cidrv6 = function(t3) {
      return e11.check((function(e12, t4) {
        return new no(un({ type: "string", format: "cidrv6", check: "string_format", abort: false }, Fr(t4)));
      })(0, t3));
    }, e11.e164 = function(t3) {
      return e11.check((function(e12, t4) {
        return new io(un({ type: "string", format: "e164", check: "string_format", abort: false }, Fr(t4)));
      })(0, t3));
    }, e11.datetime = function(t3) {
      return e11.check((function(e12) {
        return (function(e13, t4) {
          return new Fi(un({ type: "string", format: "datetime", check: "string_format", offset: false, local: false, precision: null }, Fr(t4)));
        })(0, e12);
      })(t3));
    }, e11.date = function(t3) {
      return e11.check((function(e12) {
        return (function(e13, t4) {
          return new Ei(un({ type: "string", format: "date", check: "string_format" }, Fr(t4)));
        })(0, e12);
      })(t3));
    }, e11.time = function(t3) {
      return e11.check((function(e12) {
        return (function(e13, t4) {
          return new bi(un({ type: "string", format: "time", check: "string_format", precision: null }, Fr(t4)));
        })(0, e12);
      })(t3));
    }, e11.duration = function(t3) {
      return e11.check((function(e12) {
        return (function(e13, t4) {
          return new _i(un({ type: "string", format: "duration", check: "string_format" }, Fr(t4)));
        })(0, e12);
      })(t3));
    };
  }));
  function Zi(e11) {
    return (function(e12, t2) {
      return new Mi(un({ type: "string" }, Fr(t2)));
    })(0, e11);
  }
  var Li = Gn("ZodStringFormat", (function(e11, t2) {
    Ru.init(e11, t2), Ri.init(e11, t2);
  }));
  var $i = Gn("ZodEmail", (function(e11, t2) {
    Lu.init(e11, t2), Li.init(e11, t2);
  }));
  var qi = Gn("ZodGUID", (function(e11, t2) {
    Mu.init(e11, t2), Li.init(e11, t2);
  }));
  var Ui = Gn("ZodUUID", (function(e11, t2) {
    Zu.init(e11, t2), Li.init(e11, t2);
  }));
  var Vi = Gn("ZodURL", (function(e11, t2) {
    $u.init(e11, t2), Li.init(e11, t2);
  }));
  var Hi = Gn("ZodEmoji", (function(e11, t2) {
    qu.init(e11, t2), Li.init(e11, t2);
  }));
  var Wi = Gn("ZodNanoID", (function(e11, t2) {
    Uu.init(e11, t2), Li.init(e11, t2);
  }));
  var Ki = Gn("ZodCUID", (function(e11, t2) {
    Vu.init(e11, t2), Li.init(e11, t2);
  }));
  var Ji = Gn("ZodCUID2", (function(e11, t2) {
    Hu.init(e11, t2), Li.init(e11, t2);
  }));
  var Gi = Gn("ZodULID", (function(e11, t2) {
    Wu.init(e11, t2), Li.init(e11, t2);
  }));
  var Qi = Gn("ZodXID", (function(e11, t2) {
    Ku.init(e11, t2), Li.init(e11, t2);
  }));
  var Yi = Gn("ZodKSUID", (function(e11, t2) {
    Ju.init(e11, t2), Li.init(e11, t2);
  }));
  var Xi = Gn("ZodIPv4", (function(e11, t2) {
    ea.init(e11, t2), Li.init(e11, t2);
  }));
  var eo = Gn("ZodIPv6", (function(e11, t2) {
    ta.init(e11, t2), Li.init(e11, t2);
  }));
  var to = Gn("ZodCIDRv4", (function(e11, t2) {
    na.init(e11, t2), Li.init(e11, t2);
  }));
  var no = Gn("ZodCIDRv6", (function(e11, t2) {
    ra.init(e11, t2), Li.init(e11, t2);
  }));
  var ro = Gn("ZodBase64", (function(e11, t2) {
    aa.init(e11, t2), Li.init(e11, t2);
  }));
  function uo(e11) {
    return Qa(ro, e11);
  }
  var ao = Gn("ZodBase64URL", (function(e11, t2) {
    ia.init(e11, t2), Li.init(e11, t2);
  }));
  var io = Gn("ZodE164", (function(e11, t2) {
    oa.init(e11, t2), Li.init(e11, t2);
  }));
  var oo = Gn("ZodJWT", (function(e11, t2) {
    sa.init(e11, t2), Li.init(e11, t2);
  }));
  var so = Gn("ZodNumber", (function(e11, t2) {
    var n2, r2, u2, a2, i2, o2, s2, c2, l2;
    ca.init(e11, t2), zi.init(e11, t2), e11.gt = function(t3, n3) {
      return e11.check(ei(t3, n3));
    }, e11.gte = function(t3, n3) {
      return e11.check(ti(t3, n3));
    }, e11.min = function(t3, n3) {
      return e11.check(ti(t3, n3));
    }, e11.lt = function(t3, n3) {
      return e11.check(Ya(t3, n3));
    }, e11.lte = function(t3, n3) {
      return e11.check(Xa(t3, n3));
    }, e11.max = function(t3, n3) {
      return e11.check(Xa(t3, n3));
    }, e11.int = function(t3) {
      return e11.check(fo(t3));
    }, e11.safe = function(t3) {
      return e11.check(fo(t3));
    }, e11.positive = function(t3) {
      return e11.check(ei(0, t3));
    }, e11.nonnegative = function(t3) {
      return e11.check(ti(0, t3));
    }, e11.negative = function(t3) {
      return e11.check(Ya(0, t3));
    }, e11.nonpositive = function(t3) {
      return e11.check(Xa(0, t3));
    }, e11.multipleOf = function(t3, n3) {
      return e11.check(ni(t3, n3));
    }, e11.step = function(t3, n3) {
      return e11.check(ni(t3, n3));
    }, e11.finite = function() {
      return e11;
    };
    var f2 = e11._zod.bag;
    e11.minValue = null !== (n2 = Math.max(null !== (r2 = f2.minimum) && void 0 !== r2 ? r2 : Number.NEGATIVE_INFINITY, null !== (u2 = f2.exclusiveMinimum) && void 0 !== u2 ? u2 : Number.NEGATIVE_INFINITY)) && void 0 !== n2 ? n2 : null, e11.maxValue = null !== (a2 = Math.min(null !== (i2 = f2.maximum) && void 0 !== i2 ? i2 : Number.POSITIVE_INFINITY, null !== (o2 = f2.exclusiveMaximum) && void 0 !== o2 ? o2 : Number.POSITIVE_INFINITY)) && void 0 !== a2 ? a2 : null, e11.isInt = (null !== (s2 = f2.format) && void 0 !== s2 ? s2 : "").includes("int") || Number.isSafeInteger(null !== (c2 = f2.multipleOf) && void 0 !== c2 ? c2 : 0.5), e11.isFinite = true, e11.format = null !== (l2 = f2.format) && void 0 !== l2 ? l2 : null;
  }));
  function co(e11) {
    return (function(e12, t2) {
      return new so(un({ type: "number", checks: [] }, Fr(t2)));
    })(0, e11);
  }
  var lo = Gn("ZodNumberFormat", (function(e11, t2) {
    la.init(e11, t2), so.init(e11, t2);
  }));
  function fo(e11) {
    return (function(e12, t2) {
      return new lo(un({ type: "number", check: "number_format", abort: false, format: "safeint" }, Fr(t2)));
    })(0, e11);
  }
  var po = Gn("ZodBoolean", (function(e11, t2) {
    fa.init(e11, t2), zi.init(e11, t2);
  }));
  function ho(e11) {
    return (function(e12, t2) {
      return new po(un({ type: "boolean" }, Fr(t2)));
    })(0, e11);
  }
  var vo = Gn("ZodNull", (function(e11, t2) {
    da.init(e11, t2), zi.init(e11, t2);
  }));
  function mo(e11) {
    return (function(e12, t2) {
      return new vo(un({ type: "null" }, Fr(t2)));
    })(0, e11);
  }
  var Do = Gn("ZodUnknown", (function(e11, t2) {
    pa.init(e11, t2), zi.init(e11, t2);
  }));
  function yo() {
    return new Do({ type: "unknown" });
  }
  var go = Gn("ZodNever", (function(e11, t2) {
    ha.init(e11, t2), zi.init(e11, t2);
  }));
  function Fo(e11) {
    return (function(e12, t2) {
      return new go(un({ type: "never" }, Fr(t2)));
    })(0, e11);
  }
  var Eo = Gn("ZodArray", (function(e11, t2) {
    ma.init(e11, t2), zi.init(e11, t2), e11.element = t2.element, e11.min = function(t3, n2) {
      return e11.check(ui(t3, n2));
    }, e11.nonempty = function(t3) {
      return e11.check(ui(1, t3));
    }, e11.max = function(t3, n2) {
      return e11.check(ri(t3, n2));
    }, e11.length = function(t3, n2) {
      return e11.check(ai(t3, n2));
    }, e11.unwrap = function() {
      return e11.element;
    };
  }));
  function bo(e11, t2) {
    return (function(e12, t3, n2) {
      return new Eo(un({ type: "array", element: t3 }, Fr(n2)));
    })(0, e11, t2);
  }
  var _o = Gn("ZodObject", (function(e11, t2) {
    Ea.init(e11, t2), zi.init(e11, t2), or(e11, "shape", (function() {
      return t2.shape;
    })), e11.keyof = function() {
      return Po(Object.keys(e11._zod.def.shape));
    }, e11.catchall = function(t3) {
      return e11.clone(un(un({}, e11._zod.def), {}, { catchall: t3 }));
    }, e11.passthrough = function() {
      return e11.clone(un(un({}, e11._zod.def), {}, { catchall: yo() }));
    }, e11.loose = function() {
      return e11.clone(un(un({}, e11._zod.def), {}, { catchall: yo() }));
    }, e11.strict = function() {
      return e11.clone(un(un({}, e11._zod.def), {}, { catchall: Fo() }));
    }, e11.strip = function() {
      return e11.clone(un(un({}, e11._zod.def), {}, { catchall: void 0 }));
    }, e11.extend = function(t3) {
      return (function(e12, t4) {
        if (!vr(t4)) throw new Error("Invalid input to extend: expected a plain object");
        var n2 = e12._zod.def.checks;
        if (n2 && n2.length > 0) throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
        var r2 = lr(e12._zod.def, { get shape() {
          var n3 = un(un({}, e12._zod.def.shape), t4);
          return cr(this, "shape", n3), n3;
        }, checks: [] });
        return gr(e12, r2);
      })(e11, t3);
    }, e11.safeExtend = function(t3) {
      return (function(e12, t4) {
        if (!vr(t4)) throw new Error("Invalid input to safeExtend: expected a plain object");
        var n2 = un(un({}, e12._zod.def), {}, { get shape() {
          var n3 = un(un({}, e12._zod.def.shape), t4);
          return cr(this, "shape", n3), n3;
        }, checks: e12._zod.def.checks });
        return gr(e12, n2);
      })(e11, t3);
    }, e11.merge = function(t3) {
      return (function(e12, t4) {
        var n2 = lr(e12._zod.def, { get shape() {
          var n3 = un(un({}, e12._zod.def.shape), t4._zod.def.shape);
          return cr(this, "shape", n3), n3;
        }, get catchall() {
          return t4._zod.def.catchall;
        }, checks: [] });
        return gr(e12, n2);
      })(e11, t3);
    }, e11.pick = function(t3) {
      return (function(e12, t4) {
        var n2 = e12._zod.def;
        return gr(e12, lr(e12._zod.def, { get shape() {
          var e13 = {};
          for (var r2 in t4) {
            if (!(r2 in n2.shape)) throw new Error('Unrecognized key: "'.concat(r2, '"'));
            t4[r2] && (e13[r2] = n2.shape[r2]);
          }
          return cr(this, "shape", e13), e13;
        }, checks: [] }));
      })(e11, t3);
    }, e11.omit = function(t3) {
      return (function(e12, t4) {
        var n2 = e12._zod.def, r2 = lr(e12._zod.def, { get shape() {
          var r3 = un({}, e12._zod.def.shape);
          for (var u2 in t4) {
            if (!(u2 in n2.shape)) throw new Error('Unrecognized key: "'.concat(u2, '"'));
            t4[u2] && delete r3[u2];
          }
          return cr(this, "shape", r3), r3;
        }, checks: [] });
        return gr(e12, r2);
      })(e11, t3);
    }, e11.partial = function() {
      return (function(e12, t3, n2) {
        var r2 = lr(t3._zod.def, { get shape() {
          var r3 = t3._zod.def.shape, u2 = un({}, r3);
          if (n2) for (var a2 in n2) {
            if (!(a2 in r3)) throw new Error('Unrecognized key: "'.concat(a2, '"'));
            n2[a2] && (u2[a2] = new e12({ type: "optional", innerType: r3[a2] }));
          }
          else for (var i2 in r3) u2[i2] = new e12({ type: "optional", innerType: r3[i2] });
          return cr(this, "shape", u2), u2;
        }, checks: [] });
        return gr(t3, r2);
      })(Ro, e11, arguments.length <= 0 ? void 0 : arguments[0]);
    }, e11.required = function() {
      return (function(e12, t3, n2) {
        var r2 = lr(t3._zod.def, { get shape() {
          var r3 = t3._zod.def.shape, u2 = un({}, r3);
          if (n2) for (var a2 in n2) {
            if (!(a2 in u2)) throw new Error('Unrecognized key: "'.concat(a2, '"'));
            n2[a2] && (u2[a2] = new e12({ type: "nonoptional", innerType: r3[a2] }));
          }
          else for (var i2 in r3) u2[i2] = new e12({ type: "nonoptional", innerType: r3[i2] });
          return cr(this, "shape", u2), u2;
        }, checks: [] });
        return gr(t3, r2);
      })(Uo, e11, arguments.length <= 0 ? void 0 : arguments[0]);
    };
  }));
  function ko(e11, t2) {
    var n2 = un({ type: "object", get shape() {
      return cr(this, "shape", e11 ? sr(e11) : {}), this.shape;
    } }, Fr(t2));
    return new _o(n2);
  }
  function Co(e11, t2) {
    return new _o(un({ type: "object", get shape() {
      return cr(this, "shape", sr(e11)), this.shape;
    }, catchall: Fo() }, Fr(t2)));
  }
  function Ao(e11, t2) {
    return new _o(un({ type: "object", get shape() {
      return cr(this, "shape", sr(e11)), this.shape;
    }, catchall: yo() }, Fr(t2)));
  }
  var wo = Gn("ZodUnion", (function(e11, t2) {
    _a.init(e11, t2), zi.init(e11, t2), e11.options = t2.options;
  }));
  function xo(e11, t2) {
    return new wo(un({ type: "union", options: e11 }, Fr(t2)));
  }
  var So = Gn("ZodDiscriminatedUnion", (function(e11, t2) {
    wo.init(e11, t2), ka.init(e11, t2);
  }));
  var Bo = Gn("ZodIntersection", (function(e11, t2) {
    Ca.init(e11, t2), zi.init(e11, t2);
  }));
  var Oo = Gn("ZodRecord", (function(e11, t2) {
    xa.init(e11, t2), zi.init(e11, t2), e11.keyType = t2.keyType, e11.valueType = t2.valueType;
  }));
  function Io(e11, t2, n2) {
    return new Oo(un({ type: "record", keyType: e11, valueType: t2 }, Fr(n2)));
  }
  var To = Gn("ZodEnum", (function(e11, t2) {
    Sa.init(e11, t2), zi.init(e11, t2), e11.enum = t2.entries, e11.options = Object.values(t2.entries);
    var n2 = new Set(Object.keys(t2.entries));
    e11.extract = function(e12, r2) {
      var u2, a2 = {}, i2 = Qt(e12);
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
      return new To(un(un(un({}, t2), {}, { checks: [] }, Fr(r2)), {}, { entries: a2 }));
    }, e11.exclude = function(e12, r2) {
      var u2, a2 = un({}, t2.entries), i2 = Qt(e12);
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
      return new To(un(un(un({}, t2), {}, { checks: [] }, Fr(r2)), {}, { entries: a2 }));
    };
  }));
  function Po(e11, t2) {
    var n2 = Array.isArray(e11) ? Object.fromEntries(e11.map((function(e12) {
      return [e12, e12];
    }))) : e11;
    return new To(un({ type: "enum", entries: n2 }, Fr(t2)));
  }
  var jo = Gn("ZodLiteral", (function(e11, t2) {
    Ba.init(e11, t2), zi.init(e11, t2), e11.values = new Set(t2.values), Object.defineProperty(e11, "value", { get: function() {
      if (t2.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t2.values[0];
    } });
  }));
  function No(e11, t2) {
    return new jo(un({ type: "literal", values: Array.isArray(e11) ? e11 : [e11] }, Fr(t2)));
  }
  var zo = Gn("ZodTransform", (function(e11, t2) {
    Oa.init(e11, t2), zi.init(e11, t2), e11._zod.parse = function(n2, r2) {
      if ("backward" === r2.direction) throw new Yn(e11.constructor.name);
      n2.addIssue = function(r3) {
        if ("string" == typeof r3) n2.issues.push(xr(r3, n2.value, t2));
        else {
          var u3, a2, i2, o2 = r3;
          o2.fatal && (o2.continue = false), null !== (u3 = o2.code) && void 0 !== u3 || (o2.code = "custom"), null !== (a2 = o2.input) && void 0 !== a2 || (o2.input = n2.value), null !== (i2 = o2.inst) && void 0 !== i2 || (o2.inst = e11), n2.issues.push(xr(o2));
        }
      };
      var u2 = t2.transform(n2.value, n2);
      return u2 instanceof Promise ? u2.then((function(e12) {
        return n2.value = e12, n2;
      })) : (n2.value = u2, n2);
    };
  }));
  var Ro = Gn("ZodOptional", (function(e11, t2) {
    Ta.init(e11, t2), zi.init(e11, t2), e11.unwrap = function() {
      return e11._zod.def.innerType;
    };
  }));
  function Mo(e11) {
    return new Ro({ type: "optional", innerType: e11 });
  }
  var Zo = Gn("ZodNullable", (function(e11, t2) {
    Pa.init(e11, t2), zi.init(e11, t2), e11.unwrap = function() {
      return e11._zod.def.innerType;
    };
  }));
  function Lo(e11) {
    return new Zo({ type: "nullable", innerType: e11 });
  }
  var $o = Gn("ZodDefault", (function(e11, t2) {
    ja.init(e11, t2), zi.init(e11, t2), e11.unwrap = function() {
      return e11._zod.def.innerType;
    }, e11.removeDefault = e11.unwrap;
  }));
  var qo = Gn("ZodPrefault", (function(e11, t2) {
    za.init(e11, t2), zi.init(e11, t2), e11.unwrap = function() {
      return e11._zod.def.innerType;
    };
  }));
  var Uo = Gn("ZodNonOptional", (function(e11, t2) {
    Ra.init(e11, t2), zi.init(e11, t2), e11.unwrap = function() {
      return e11._zod.def.innerType;
    };
  }));
  var Vo = Gn("ZodCatch", (function(e11, t2) {
    Za.init(e11, t2), zi.init(e11, t2), e11.unwrap = function() {
      return e11._zod.def.innerType;
    }, e11.removeCatch = e11.unwrap;
  }));
  var Ho = Gn("ZodPipe", (function(e11, t2) {
    La.init(e11, t2), zi.init(e11, t2), e11.in = t2.in, e11.out = t2.out;
  }));
  function Wo(e11, t2) {
    return new Ho({ type: "pipe", in: e11, out: t2 });
  }
  var Ko;
  var Jo;
  var Go = Gn("ZodReadonly", (function(e11, t2) {
    qa.init(e11, t2), zi.init(e11, t2), e11.unwrap = function() {
      return e11._zod.def.innerType;
    };
  }));
  var Qo = Gn("ZodLazy", (function(e11, t2) {
    Va.init(e11, t2), zi.init(e11, t2), e11.unwrap = function() {
      return e11._zod.def.getter();
    };
  }));
  var Yo = Gn("ZodCustom", (function(e11, t2) {
    Ha.init(e11, t2), zi.init(e11, t2);
  }));
  function Xo(e11) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { error: "Input not instance of ".concat(e11.name) }, n2 = new Yo(un({ type: "custom", check: "custom", fn: function(t3) {
      return t3 instanceof e11;
    }, abort: true }, Fr(t2)));
    return n2._zod.bag.Class = e11, n2;
  }
  !(function(e11) {
    e11.assertEqual = function(e12) {
    }, e11.assertIs = function(e12) {
    }, e11.assertNever = function(e12) {
      throw new Error();
    }, e11.arrayToEnum = function(e12) {
      var t2, n2 = {}, r2 = Qt(e12);
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
      var n2, r2 = {}, u2 = Qt(e11.objectKeys(t2).filter((function(e12) {
        return "number" != typeof t2[t2[e12]];
      })));
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
      return e11.objectKeys(t2).map((function(e12) {
        return t2[e12];
      }));
    }, e11.objectKeys = "function" == typeof Object.keys ? function(e12) {
      return Object.keys(e12);
    } : function(e12) {
      var t2 = [];
      for (var n2 in e12) Object.prototype.hasOwnProperty.call(e12, n2) && t2.push(n2);
      return t2;
    }, e11.find = function(e12, t2) {
      var n2, r2 = Qt(e12);
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
      return e12.map((function(e13) {
        return "string" == typeof e13 ? "'".concat(e13, "'") : e13;
      })).join(t2);
    }, e11.jsonStringifyReplacer = function(e12, t2) {
      return "bigint" == typeof t2 ? t2.toString() : t2;
    };
  })(Ko || (Ko = {})), (Jo || (Jo = {})).mergeShapes = function(e11, t2) {
    return un(un({}, e11), t2);
  };
  var es = Ko.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
  var ts = function(e11) {
    switch (dn(e11)) {
      case "undefined":
        return es.undefined;
      case "string":
        return es.string;
      case "number":
        return Number.isNaN(e11) ? es.nan : es.number;
      case "boolean":
        return es.boolean;
      case "function":
        return es.function;
      case "bigint":
        return es.bigint;
      case "symbol":
        return es.symbol;
      case "object":
        return Array.isArray(e11) ? es.array : null === e11 ? es.null : e11.then && "function" == typeof e11.then && e11.catch && "function" == typeof e11.catch ? es.promise : "undefined" != typeof Map && e11 instanceof Map ? es.map : "undefined" != typeof Set && e11 instanceof Set ? es.set : "undefined" != typeof Date && e11 instanceof Date ? es.date : es.object;
      default:
        return es.unknown;
    }
  };
  var ns = Ko.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
  var rs = (function() {
    function e11(t2) {
      var n2;
      Wt(this, e11), (n2 = Ht(this, e11)).issues = [], n2.addIssue = function(e12) {
        n2.issues = [].concat(ln(n2.issues), [e12]);
      }, n2.addIssues = function() {
        var e12 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        n2.issues = [].concat(ln(n2.issues), ln(e12));
      };
      var r2 = (this instanceof e11 ? this.constructor : void 0).prototype;
      return Object.setPrototypeOf ? Object.setPrototypeOf(n2, r2) : n2.__proto__ = r2, n2.name = "ZodError", n2.issues = t2, n2;
    }
    return tn(e11, hn(Error)), Gt(e11, [{ key: "errors", get: function() {
      return this.issues;
    } }, { key: "format", value: function(e12) {
      var t2 = e12 || function(e13) {
        return e13.message;
      }, n2 = { _errors: [] }, r2 = function(e13) {
        var u2, a2 = Qt(e13.issues);
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
      return JSON.stringify(this.issues, Ko.jsonStringifyReplacer, 2);
    } }, { key: "isEmpty", get: function() {
      return 0 === this.issues.length;
    } }, { key: "flatten", value: function() {
      var e12, t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function(e13) {
        return e13.message;
      }, n2 = {}, r2 = [], u2 = Qt(this.issues);
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
  rs.create = function(e11) {
    return new rs(e11);
  };
  var us = function(e11, t2) {
    var n2;
    switch (e11.code) {
      case ns.invalid_type:
        n2 = e11.received === es.undefined ? "Required" : "Expected ".concat(e11.expected, ", received ").concat(e11.received);
        break;
      case ns.invalid_literal:
        n2 = "Invalid literal value, expected ".concat(JSON.stringify(e11.expected, Ko.jsonStringifyReplacer));
        break;
      case ns.unrecognized_keys:
        n2 = "Unrecognized key(s) in object: ".concat(Ko.joinValues(e11.keys, ", "));
        break;
      case ns.invalid_union:
        n2 = "Invalid input";
        break;
      case ns.invalid_union_discriminator:
        n2 = "Invalid discriminator value. Expected ".concat(Ko.joinValues(e11.options));
        break;
      case ns.invalid_enum_value:
        n2 = "Invalid enum value. Expected ".concat(Ko.joinValues(e11.options), ", received '").concat(e11.received, "'");
        break;
      case ns.invalid_arguments:
        n2 = "Invalid function arguments";
        break;
      case ns.invalid_return_type:
        n2 = "Invalid function return type";
        break;
      case ns.invalid_date:
        n2 = "Invalid date";
        break;
      case ns.invalid_string:
        "object" === dn(e11.validation) ? "includes" in e11.validation ? (n2 = 'Invalid input: must include "'.concat(e11.validation.includes, '"'), "number" == typeof e11.validation.position && (n2 = "".concat(n2, " at one or more positions greater than or equal to ").concat(e11.validation.position))) : "startsWith" in e11.validation ? n2 = 'Invalid input: must start with "'.concat(e11.validation.startsWith, '"') : "endsWith" in e11.validation ? n2 = 'Invalid input: must end with "'.concat(e11.validation.endsWith, '"') : Ko.assertNever(e11.validation) : n2 = "regex" !== e11.validation ? "Invalid ".concat(e11.validation) : "Invalid";
        break;
      case ns.too_small:
        n2 = "array" === e11.type ? "Array must contain ".concat(e11.exact ? "exactly" : e11.inclusive ? "at least" : "more than", " ").concat(e11.minimum, " element(s)") : "string" === e11.type ? "String must contain ".concat(e11.exact ? "exactly" : e11.inclusive ? "at least" : "over", " ").concat(e11.minimum, " character(s)") : "number" === e11.type || "bigint" === e11.type ? "Number must be ".concat(e11.exact ? "exactly equal to " : e11.inclusive ? "greater than or equal to " : "greater than ").concat(e11.minimum) : "date" === e11.type ? "Date must be ".concat(e11.exact ? "exactly equal to " : e11.inclusive ? "greater than or equal to " : "greater than ").concat(new Date(Number(e11.minimum))) : "Invalid input";
        break;
      case ns.too_big:
        n2 = "array" === e11.type ? "Array must contain ".concat(e11.exact ? "exactly" : e11.inclusive ? "at most" : "less than", " ").concat(e11.maximum, " element(s)") : "string" === e11.type ? "String must contain ".concat(e11.exact ? "exactly" : e11.inclusive ? "at most" : "under", " ").concat(e11.maximum, " character(s)") : "number" === e11.type ? "Number must be ".concat(e11.exact ? "exactly" : e11.inclusive ? "less than or equal to" : "less than", " ").concat(e11.maximum) : "bigint" === e11.type ? "BigInt must be ".concat(e11.exact ? "exactly" : e11.inclusive ? "less than or equal to" : "less than", " ").concat(e11.maximum) : "date" === e11.type ? "Date must be ".concat(e11.exact ? "exactly" : e11.inclusive ? "smaller than or equal to" : "smaller than", " ").concat(new Date(Number(e11.maximum))) : "Invalid input";
        break;
      case ns.custom:
        n2 = "Invalid input";
        break;
      case ns.invalid_intersection_types:
        n2 = "Intersection results could not be merged";
        break;
      case ns.not_multiple_of:
        n2 = "Number must be a multiple of ".concat(e11.multipleOf);
        break;
      case ns.not_finite:
        n2 = "Number must be finite";
        break;
      default:
        n2 = t2.defaultError, Ko.assertNever(e11);
    }
    return { message: n2 };
  };
  var as = us;
  function is() {
    return as;
  }
  var os = function(e11) {
    var t2 = e11.data, n2 = e11.path, r2 = e11.errorMaps, u2 = e11.issueData, a2 = [].concat(ln(n2), ln(u2.path || [])), i2 = un(un({}, u2), {}, { path: a2 });
    if (void 0 !== u2.message) return un(un({}, u2), {}, { path: a2, message: u2.message });
    var o2, s2 = "", c2 = r2.filter((function(e12) {
      return !!e12;
    })).slice().reverse(), l2 = Qt(c2);
    try {
      for (l2.s(); !(o2 = l2.n()).done; ) s2 = (0, o2.value)(i2, { data: t2, defaultError: s2 }).message;
    } catch (e12) {
      l2.e(e12);
    } finally {
      l2.f();
    }
    return un(un({}, u2), {}, { path: a2, message: s2 });
  };
  function ss(e11, t2) {
    var n2 = is(), r2 = os({ issueData: t2, data: e11.data, path: e11.path, errorMaps: [e11.common.contextualErrorMap, e11.schemaErrorMap, n2, n2 === us ? void 0 : us].filter((function(e12) {
      return !!e12;
    })) });
    e11.common.issues.push(r2);
  }
  var cs;
  var ls = (function() {
    function e11() {
      Wt(this, e11), this.value = "valid";
    }
    return Gt(e11, [{ key: "dirty", value: function() {
      "valid" === this.value && (this.value = "dirty");
    } }, { key: "abort", value: function() {
      "aborted" !== this.value && (this.value = "aborted");
    } }], [{ key: "mergeArray", value: function(e12, t3) {
      var n2, r2 = [], u2 = Qt(t3);
      try {
        for (u2.s(); !(n2 = u2.n()).done; ) {
          var a2 = n2.value;
          if ("aborted" === a2.status) return fs;
          "dirty" === a2.status && e12.dirty(), r2.push(a2.value);
        }
      } catch (e13) {
        u2.e(e13);
      } finally {
        u2.f();
      }
      return { status: e12.value, value: r2 };
    } }, { key: "mergeObjectAsync", value: (t2 = Vt(on().mark((function t3(n2, r2) {
      var u2, a2, i2, o2, s2, c2;
      return on().wrap((function(t4) {
        for (; ; ) switch (t4.prev = t4.next) {
          case 0:
            u2 = [], a2 = Qt(r2), t4.prev = 2, a2.s();
          case 4:
            if ((i2 = a2.n()).done) {
              t4.next = 15;
              break;
            }
            return o2 = i2.value, t4.next = 8, o2.key;
          case 8:
            return s2 = t4.sent, t4.next = 11, o2.value;
          case 11:
            c2 = t4.sent, u2.push({ key: s2, value: c2 });
          case 13:
            t4.next = 4;
            break;
          case 15:
            t4.next = 20;
            break;
          case 17:
            t4.prev = 17, t4.t0 = t4.catch(2), a2.e(t4.t0);
          case 20:
            return t4.prev = 20, a2.f(), t4.finish(20);
          case 23:
            return t4.abrupt("return", e11.mergeObjectSync(n2, u2));
          case 24:
          case "end":
            return t4.stop();
        }
      }), t3, null, [[2, 17, 20, 23]]);
    }))), function(e12, n2) {
      return t2.apply(this, arguments);
    }) }, { key: "mergeObjectSync", value: function(e12, t3) {
      var n2, r2 = {}, u2 = Qt(t3);
      try {
        for (u2.s(); !(n2 = u2.n()).done; ) {
          var a2 = n2.value, i2 = a2.key, o2 = a2.value;
          if ("aborted" === i2.status) return fs;
          if ("aborted" === o2.status) return fs;
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
  var fs = Object.freeze({ status: "aborted" });
  var ds = function(e11) {
    return { status: "dirty", value: e11 };
  };
  var ps = function(e11) {
    return { status: "valid", value: e11 };
  };
  var hs = function(e11) {
    return "aborted" === e11.status;
  };
  var vs = function(e11) {
    return "dirty" === e11.status;
  };
  var ms = function(e11) {
    return "valid" === e11.status;
  };
  var Ds = function(e11) {
    return "undefined" != typeof Promise && e11 instanceof Promise;
  };
  !(function(e11) {
    e11.errToObj = function(e12) {
      return "string" == typeof e12 ? { message: e12 } : e12 || {};
    }, e11.toString = function(e12) {
      return "string" == typeof e12 ? e12 : null == e12 ? void 0 : e12.message;
    };
  })(cs || (cs = {}));
  var ys = Gt((function e5(t2, n2, r2, u2) {
    Wt(this, e5), this._cachedPath = [], this.parent = t2, this.data = n2, this._path = r2, this._key = u2;
  }), [{ key: "path", get: function() {
    var e11, t2;
    return this._cachedPath.length || (Array.isArray(this._key) ? (e11 = this._cachedPath).push.apply(e11, ln(this._path).concat(ln(this._key))) : (t2 = this._cachedPath).push.apply(t2, ln(this._path).concat([this._key]))), this._cachedPath;
  } }]);
  var gs = function(e11, t2) {
    if (ms(t2)) return { success: true, data: t2.value };
    if (!e11.common.issues.length) throw new Error("Validation failed but no issues detected.");
    return { success: false, get error() {
      if (this._error) return this._error;
      var t3 = new rs(e11.common.issues);
      return this._error = t3, this._error;
    } };
  };
  function Fs(e11) {
    if (!e11) return {};
    var t2 = e11.errorMap, n2 = e11.invalid_type_error, r2 = e11.required_error, u2 = e11.description;
    if (t2 && (n2 || r2)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return t2 ? { errorMap: t2, description: u2 } : { errorMap: function(t3, u3) {
      var a2, i2, o2 = e11.message;
      return "invalid_enum_value" === t3.code ? { message: null != o2 ? o2 : u3.defaultError } : void 0 === u3.data ? { message: null !== (i2 = null != o2 ? o2 : r2) && void 0 !== i2 ? i2 : u3.defaultError } : "invalid_type" !== t3.code ? { message: u3.defaultError } : { message: null !== (a2 = null != o2 ? o2 : n2) && void 0 !== a2 ? a2 : u3.defaultError };
    }, description: u2 };
  }
  var Es;
  var bs = (function() {
    return Gt((function e12(t2) {
      var n2 = this;
      Wt(this, e12), this.spa = this.safeParseAsync, this._def = t2, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = { version: 1, vendor: "zod", validate: function(e13) {
        return n2["~validate"](e13);
      } };
    }), [{ key: "description", get: function() {
      return this._def.description;
    } }, { key: "_getType", value: function(e12) {
      return ts(e12.data);
    } }, { key: "_getOrReturnCtx", value: function(e12, t2) {
      return t2 || { common: e12.parent.common, data: e12.data, parsedType: ts(e12.data), schemaErrorMap: this._def.errorMap, path: e12.path, parent: e12.parent };
    } }, { key: "_processInputParams", value: function(e12) {
      return { status: new ls(), ctx: { common: e12.parent.common, data: e12.data, parsedType: ts(e12.data), schemaErrorMap: this._def.errorMap, path: e12.path, parent: e12.parent } };
    } }, { key: "_parseSync", value: function(e12) {
      var t2 = this._parse(e12);
      if (Ds(t2)) throw new Error("Synchronous parse encountered promise.");
      return t2;
    } }, { key: "_parseAsync", value: function(e12) {
      var t2 = this._parse(e12);
      return Promise.resolve(t2);
    } }, { key: "parse", value: function(e12, t2) {
      var n2 = this.safeParse(e12, t2);
      if (n2.success) return n2.data;
      throw n2.error;
    } }, { key: "safeParse", value: function(e12, t2) {
      var n2, r2 = { common: { issues: [], async: null !== (n2 = null == t2 ? void 0 : t2.async) && void 0 !== n2 && n2, contextualErrorMap: null == t2 ? void 0 : t2.errorMap }, path: (null == t2 ? void 0 : t2.path) || [], schemaErrorMap: this._def.errorMap, parent: null, data: e12, parsedType: ts(e12) }, u2 = this._parseSync({ data: e12, path: r2.path, parent: r2 });
      return gs(r2, u2);
    } }, { key: "~validate", value: function(e12) {
      var t2 = { common: { issues: [], async: !!this["~standard"].async }, path: [], schemaErrorMap: this._def.errorMap, parent: null, data: e12, parsedType: ts(e12) };
      if (!this["~standard"].async) try {
        var n2 = this._parseSync({ data: e12, path: [], parent: t2 });
        return ms(n2) ? { value: n2.value } : { issues: t2.common.issues };
      } catch (e13) {
        var r2;
        null != e13 && null !== (r2 = e13.message) && void 0 !== r2 && null !== (r2 = r2.toLowerCase()) && void 0 !== r2 && r2.includes("encountered") && (this["~standard"].async = true), t2.common = { issues: [], async: true };
      }
      return this._parseAsync({ data: e12, path: [], parent: t2 }).then((function(e13) {
        return ms(e13) ? { value: e13.value } : { issues: t2.common.issues };
      }));
    } }, { key: "parseAsync", value: (e11 = Vt(on().mark((function e12(t2, n2) {
      var r2;
      return on().wrap((function(e13) {
        for (; ; ) switch (e13.prev = e13.next) {
          case 0:
            return e13.next = 2, this.safeParseAsync(t2, n2);
          case 2:
            if (!(r2 = e13.sent).success) {
              e13.next = 5;
              break;
            }
            return e13.abrupt("return", r2.data);
          case 5:
            throw r2.error;
          case 6:
          case "end":
            return e13.stop();
        }
      }), e12, this);
    }))), function(t2, n2) {
      return e11.apply(this, arguments);
    }) }, { key: "safeParseAsync", value: (function() {
      var e12 = Vt(on().mark((function e13(t2, n2) {
        var r2, u2, a2;
        return on().wrap((function(e14) {
          for (; ; ) switch (e14.prev = e14.next) {
            case 0:
              return r2 = { common: { issues: [], contextualErrorMap: null == n2 ? void 0 : n2.errorMap, async: true }, path: (null == n2 ? void 0 : n2.path) || [], schemaErrorMap: this._def.errorMap, parent: null, data: t2, parsedType: ts(t2) }, u2 = this._parse({ data: t2, path: r2.path, parent: r2 }), e14.next = 4, Ds(u2) ? u2 : Promise.resolve(u2);
            case 4:
              return a2 = e14.sent, e14.abrupt("return", gs(r2, a2));
            case 6:
            case "end":
              return e14.stop();
          }
        }), e13, this);
      })));
      return function(t2, n2) {
        return e12.apply(this, arguments);
      };
    })() }, { key: "refine", value: function(e12, t2) {
      return this._refinement((function(n2, r2) {
        var u2 = e12(n2), a2 = function() {
          return r2.addIssue(un({ code: ns.custom }, (function(e13) {
            return "string" == typeof t2 || void 0 === t2 ? { message: t2 } : "function" == typeof t2 ? t2(e13) : t2;
          })(n2)));
        };
        return "undefined" != typeof Promise && u2 instanceof Promise ? u2.then((function(e13) {
          return !!e13 || (a2(), false);
        })) : !!u2 || (a2(), false);
      }));
    } }, { key: "refinement", value: function(e12, t2) {
      return this._refinement((function(n2, r2) {
        return !!e12(n2) || (r2.addIssue("function" == typeof t2 ? t2(n2, r2) : t2), false);
      }));
    } }, { key: "_refinement", value: function(e12) {
      return new Ec({ schema: this, typeName: wc.ZodEffects, effect: { type: "refinement", refinement: e12 } });
    } }, { key: "superRefine", value: function(e12) {
      return this._refinement(e12);
    } }, { key: "optional", value: function() {
      return bc.create(this, this._def);
    } }, { key: "nullable", value: function() {
      return _c.create(this, this._def);
    } }, { key: "nullish", value: function() {
      return this.nullable().optional();
    } }, { key: "array", value: function() {
      return nc.create(this);
    } }, { key: "promise", value: function() {
      return Fc.create(this, this._def);
    } }, { key: "or", value: function(e12) {
      return ac.create([this, e12], this._def);
    } }, { key: "and", value: function(e12) {
      return cc.create(this, e12, this._def);
    } }, { key: "transform", value: function(e12) {
      return new Ec(un(un({}, Fs(this._def)), {}, { schema: this, typeName: wc.ZodEffects, effect: { type: "transform", transform: e12 } }));
    } }, { key: "default", value: function(e12) {
      var t2 = "function" == typeof e12 ? e12 : function() {
        return e12;
      };
      return new kc(un(un({}, Fs(this._def)), {}, { innerType: this, defaultValue: t2, typeName: wc.ZodDefault }));
    } }, { key: "brand", value: function() {
      return new xc(un({ typeName: wc.ZodBranded, type: this }, Fs(this._def)));
    } }, { key: "catch", value: function(e12) {
      var t2 = "function" == typeof e12 ? e12 : function() {
        return e12;
      };
      return new Cc(un(un({}, Fs(this._def)), {}, { innerType: this, catchValue: t2, typeName: wc.ZodCatch }));
    } }, { key: "describe", value: function(e12) {
      return new this.constructor(un(un({}, this._def), {}, { description: e12 }));
    } }, { key: "pipe", value: function(e12) {
      return Sc.create(this, e12);
    } }, { key: "readonly", value: function() {
      return Bc.create(this);
    } }, { key: "isOptional", value: function() {
      return this.safeParse(void 0).success;
    } }, { key: "isNullable", value: function() {
      return this.safeParse(null).success;
    } }]);
    var e11;
  })();
  var _s = /^c[^\s-]{8,}$/i;
  var ks = /^[0-9a-z]+$/;
  var Cs = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
  var As = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
  var ws = /^[a-z0-9_-]{21}$/i;
  var xs = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
  var Ss = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
  var Bs = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
  var Os = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
  var Is = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
  var Ts = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
  var Ps = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
  var js = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  var Ns = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
  var zs = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))";
  var Rs = new RegExp("^".concat(zs, "$"));
  function Ms(e11) {
    var t2 = "[0-5]\\d";
    e11.precision ? t2 = "".concat(t2, "\\.\\d{").concat(e11.precision, "}") : null == e11.precision && (t2 = "".concat(t2, "(\\.\\d+)?"));
    var n2 = e11.precision ? "+" : "?";
    return "([01]\\d|2[0-3]):[0-5]\\d(:".concat(t2, ")").concat(n2);
  }
  function Zs(e11) {
    var t2 = "".concat(zs, "T").concat(Ms(e11)), n2 = [];
    return n2.push(e11.local ? "Z?" : "Z"), e11.offset && n2.push("([+-]\\d{2}:?\\d{2})"), t2 = "".concat(t2, "(").concat(n2.join("|"), ")"), new RegExp("^".concat(t2, "$"));
  }
  function Ls(e11, t2) {
    return !("v4" !== t2 && t2 || !Os.test(e11)) || !("v6" !== t2 && t2 || !Ts.test(e11));
  }
  function $s(e11, t2) {
    if (!xs.test(e11)) return false;
    try {
      var n2 = cn(e11.split("."), 1)[0];
      if (!n2) return false;
      var r2 = n2.replace(/-/g, "+").replace(/_/g, "/").padEnd(n2.length + (4 - n2.length % 4) % 4, "="), u2 = JSON.parse(atob(r2));
      return !("object" !== dn(u2) || null === u2 || "typ" in u2 && "JWT" !== (null == u2 ? void 0 : u2.typ) || !u2.alg || t2 && u2.alg !== t2);
    } catch (e12) {
      return false;
    }
  }
  function qs(e11, t2) {
    return !("v4" !== t2 && t2 || !Is.test(e11)) || !("v6" !== t2 && t2 || !Ps.test(e11));
  }
  var Us = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      if (this._def.coerce && (e12.data = String(e12.data)), this._getType(e12) !== es.string) {
        var t2 = this._getOrReturnCtx(e12);
        return ss(t2, { code: ns.invalid_type, expected: es.string, received: t2.parsedType }), fs;
      }
      var n2, r2 = new ls(), u2 = void 0, a2 = Qt(this._def.checks);
      try {
        for (a2.s(); !(n2 = a2.n()).done; ) {
          var i2 = n2.value;
          if ("min" === i2.kind) e12.data.length < i2.value && (ss(u2 = this._getOrReturnCtx(e12, u2), { code: ns.too_small, minimum: i2.value, type: "string", inclusive: true, exact: false, message: i2.message }), r2.dirty());
          else if ("max" === i2.kind) e12.data.length > i2.value && (ss(u2 = this._getOrReturnCtx(e12, u2), { code: ns.too_big, maximum: i2.value, type: "string", inclusive: true, exact: false, message: i2.message }), r2.dirty());
          else if ("length" === i2.kind) {
            var o2 = e12.data.length > i2.value, s2 = e12.data.length < i2.value;
            (o2 || s2) && (u2 = this._getOrReturnCtx(e12, u2), o2 ? ss(u2, { code: ns.too_big, maximum: i2.value, type: "string", inclusive: true, exact: true, message: i2.message }) : s2 && ss(u2, { code: ns.too_small, minimum: i2.value, type: "string", inclusive: true, exact: true, message: i2.message }), r2.dirty());
          } else if ("email" === i2.kind) Bs.test(e12.data) || (ss(u2 = this._getOrReturnCtx(e12, u2), { validation: "email", code: ns.invalid_string, message: i2.message }), r2.dirty());
          else if ("emoji" === i2.kind) Es || (Es = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Es.test(e12.data) || (ss(u2 = this._getOrReturnCtx(e12, u2), { validation: "emoji", code: ns.invalid_string, message: i2.message }), r2.dirty());
          else if ("uuid" === i2.kind) As.test(e12.data) || (ss(u2 = this._getOrReturnCtx(e12, u2), { validation: "uuid", code: ns.invalid_string, message: i2.message }), r2.dirty());
          else if ("nanoid" === i2.kind) ws.test(e12.data) || (ss(u2 = this._getOrReturnCtx(e12, u2), { validation: "nanoid", code: ns.invalid_string, message: i2.message }), r2.dirty());
          else if ("cuid" === i2.kind) _s.test(e12.data) || (ss(u2 = this._getOrReturnCtx(e12, u2), { validation: "cuid", code: ns.invalid_string, message: i2.message }), r2.dirty());
          else if ("cuid2" === i2.kind) ks.test(e12.data) || (ss(u2 = this._getOrReturnCtx(e12, u2), { validation: "cuid2", code: ns.invalid_string, message: i2.message }), r2.dirty());
          else if ("ulid" === i2.kind) Cs.test(e12.data) || (ss(u2 = this._getOrReturnCtx(e12, u2), { validation: "ulid", code: ns.invalid_string, message: i2.message }), r2.dirty());
          else if ("url" === i2.kind) try {
            new URL(e12.data);
          } catch (t3) {
            ss(u2 = this._getOrReturnCtx(e12, u2), { validation: "url", code: ns.invalid_string, message: i2.message }), r2.dirty();
          }
          else "regex" === i2.kind ? (i2.regex.lastIndex = 0, i2.regex.test(e12.data) || (ss(u2 = this._getOrReturnCtx(e12, u2), { validation: "regex", code: ns.invalid_string, message: i2.message }), r2.dirty())) : "trim" === i2.kind ? e12.data = e12.data.trim() : "includes" === i2.kind ? e12.data.includes(i2.value, i2.position) || (ss(u2 = this._getOrReturnCtx(e12, u2), { code: ns.invalid_string, validation: { includes: i2.value, position: i2.position }, message: i2.message }), r2.dirty()) : "toLowerCase" === i2.kind ? e12.data = e12.data.toLowerCase() : "toUpperCase" === i2.kind ? e12.data = e12.data.toUpperCase() : "startsWith" === i2.kind ? e12.data.startsWith(i2.value) || (ss(u2 = this._getOrReturnCtx(e12, u2), { code: ns.invalid_string, validation: { startsWith: i2.value }, message: i2.message }), r2.dirty()) : "endsWith" === i2.kind ? e12.data.endsWith(i2.value) || (ss(u2 = this._getOrReturnCtx(e12, u2), { code: ns.invalid_string, validation: { endsWith: i2.value }, message: i2.message }), r2.dirty()) : "datetime" === i2.kind ? Zs(i2).test(e12.data) || (ss(u2 = this._getOrReturnCtx(e12, u2), { code: ns.invalid_string, validation: "datetime", message: i2.message }), r2.dirty()) : "date" === i2.kind ? Rs.test(e12.data) || (ss(u2 = this._getOrReturnCtx(e12, u2), { code: ns.invalid_string, validation: "date", message: i2.message }), r2.dirty()) : "time" === i2.kind ? new RegExp("^".concat(Ms(i2), "$")).test(e12.data) || (ss(u2 = this._getOrReturnCtx(e12, u2), { code: ns.invalid_string, validation: "time", message: i2.message }), r2.dirty()) : "duration" === i2.kind ? Ss.test(e12.data) || (ss(u2 = this._getOrReturnCtx(e12, u2), { validation: "duration", code: ns.invalid_string, message: i2.message }), r2.dirty()) : "ip" === i2.kind ? Ls(e12.data, i2.version) || (ss(u2 = this._getOrReturnCtx(e12, u2), { validation: "ip", code: ns.invalid_string, message: i2.message }), r2.dirty()) : "jwt" === i2.kind ? $s(e12.data, i2.alg) || (ss(u2 = this._getOrReturnCtx(e12, u2), { validation: "jwt", code: ns.invalid_string, message: i2.message }), r2.dirty()) : "cidr" === i2.kind ? qs(e12.data, i2.version) || (ss(u2 = this._getOrReturnCtx(e12, u2), { validation: "cidr", code: ns.invalid_string, message: i2.message }), r2.dirty()) : "base64" === i2.kind ? js.test(e12.data) || (ss(u2 = this._getOrReturnCtx(e12, u2), { validation: "base64", code: ns.invalid_string, message: i2.message }), r2.dirty()) : "base64url" === i2.kind ? Ns.test(e12.data) || (ss(u2 = this._getOrReturnCtx(e12, u2), { validation: "base64url", code: ns.invalid_string, message: i2.message }), r2.dirty()) : Ko.assertNever(i2);
        }
      } catch (e13) {
        a2.e(e13);
      } finally {
        a2.f();
      }
      return { status: r2.value, value: e12.data };
    } }, { key: "_regex", value: function(e12, t2, n2) {
      return this.refinement((function(t3) {
        return e12.test(t3);
      }), un({ validation: t2, code: ns.invalid_string }, cs.errToObj(n2)));
    } }, { key: "_addCheck", value: function(t2) {
      return new e11(un(un({}, this._def), {}, { checks: [].concat(ln(this._def.checks), [t2]) }));
    } }, { key: "email", value: function(e12) {
      return this._addCheck(un({ kind: "email" }, cs.errToObj(e12)));
    } }, { key: "url", value: function(e12) {
      return this._addCheck(un({ kind: "url" }, cs.errToObj(e12)));
    } }, { key: "emoji", value: function(e12) {
      return this._addCheck(un({ kind: "emoji" }, cs.errToObj(e12)));
    } }, { key: "uuid", value: function(e12) {
      return this._addCheck(un({ kind: "uuid" }, cs.errToObj(e12)));
    } }, { key: "nanoid", value: function(e12) {
      return this._addCheck(un({ kind: "nanoid" }, cs.errToObj(e12)));
    } }, { key: "cuid", value: function(e12) {
      return this._addCheck(un({ kind: "cuid" }, cs.errToObj(e12)));
    } }, { key: "cuid2", value: function(e12) {
      return this._addCheck(un({ kind: "cuid2" }, cs.errToObj(e12)));
    } }, { key: "ulid", value: function(e12) {
      return this._addCheck(un({ kind: "ulid" }, cs.errToObj(e12)));
    } }, { key: "base64", value: function(e12) {
      return this._addCheck(un({ kind: "base64" }, cs.errToObj(e12)));
    } }, { key: "base64url", value: function(e12) {
      return this._addCheck(un({ kind: "base64url" }, cs.errToObj(e12)));
    } }, { key: "jwt", value: function(e12) {
      return this._addCheck(un({ kind: "jwt" }, cs.errToObj(e12)));
    } }, { key: "ip", value: function(e12) {
      return this._addCheck(un({ kind: "ip" }, cs.errToObj(e12)));
    } }, { key: "cidr", value: function(e12) {
      return this._addCheck(un({ kind: "cidr" }, cs.errToObj(e12)));
    } }, { key: "datetime", value: function(e12) {
      var t2, n2;
      return "string" == typeof e12 ? this._addCheck({ kind: "datetime", precision: null, offset: false, local: false, message: e12 }) : this._addCheck(un({ kind: "datetime", precision: void 0 === (null == e12 ? void 0 : e12.precision) ? null : null == e12 ? void 0 : e12.precision, offset: null !== (t2 = null == e12 ? void 0 : e12.offset) && void 0 !== t2 && t2, local: null !== (n2 = null == e12 ? void 0 : e12.local) && void 0 !== n2 && n2 }, cs.errToObj(null == e12 ? void 0 : e12.message)));
    } }, { key: "date", value: function(e12) {
      return this._addCheck({ kind: "date", message: e12 });
    } }, { key: "time", value: function(e12) {
      return "string" == typeof e12 ? this._addCheck({ kind: "time", precision: null, message: e12 }) : this._addCheck(un({ kind: "time", precision: void 0 === (null == e12 ? void 0 : e12.precision) ? null : null == e12 ? void 0 : e12.precision }, cs.errToObj(null == e12 ? void 0 : e12.message)));
    } }, { key: "duration", value: function(e12) {
      return this._addCheck(un({ kind: "duration" }, cs.errToObj(e12)));
    } }, { key: "regex", value: function(e12, t2) {
      return this._addCheck(un({ kind: "regex", regex: e12 }, cs.errToObj(t2)));
    } }, { key: "includes", value: function(e12, t2) {
      return this._addCheck(un({ kind: "includes", value: e12, position: null == t2 ? void 0 : t2.position }, cs.errToObj(null == t2 ? void 0 : t2.message)));
    } }, { key: "startsWith", value: function(e12, t2) {
      return this._addCheck(un({ kind: "startsWith", value: e12 }, cs.errToObj(t2)));
    } }, { key: "endsWith", value: function(e12, t2) {
      return this._addCheck(un({ kind: "endsWith", value: e12 }, cs.errToObj(t2)));
    } }, { key: "min", value: function(e12, t2) {
      return this._addCheck(un({ kind: "min", value: e12 }, cs.errToObj(t2)));
    } }, { key: "max", value: function(e12, t2) {
      return this._addCheck(un({ kind: "max", value: e12 }, cs.errToObj(t2)));
    } }, { key: "length", value: function(e12, t2) {
      return this._addCheck(un({ kind: "length", value: e12 }, cs.errToObj(t2)));
    } }, { key: "nonempty", value: function(e12) {
      return this.min(1, cs.errToObj(e12));
    } }, { key: "trim", value: function() {
      return new e11(un(un({}, this._def), {}, { checks: [].concat(ln(this._def.checks), [{ kind: "trim" }]) }));
    } }, { key: "toLowerCase", value: function() {
      return new e11(un(un({}, this._def), {}, { checks: [].concat(ln(this._def.checks), [{ kind: "toLowerCase" }]) }));
    } }, { key: "toUpperCase", value: function() {
      return new e11(un(un({}, this._def), {}, { checks: [].concat(ln(this._def.checks), [{ kind: "toUpperCase" }]) }));
    } }, { key: "isDatetime", get: function() {
      return !!this._def.checks.find((function(e12) {
        return "datetime" === e12.kind;
      }));
    } }, { key: "isDate", get: function() {
      return !!this._def.checks.find((function(e12) {
        return "date" === e12.kind;
      }));
    } }, { key: "isTime", get: function() {
      return !!this._def.checks.find((function(e12) {
        return "time" === e12.kind;
      }));
    } }, { key: "isDuration", get: function() {
      return !!this._def.checks.find((function(e12) {
        return "duration" === e12.kind;
      }));
    } }, { key: "isEmail", get: function() {
      return !!this._def.checks.find((function(e12) {
        return "email" === e12.kind;
      }));
    } }, { key: "isURL", get: function() {
      return !!this._def.checks.find((function(e12) {
        return "url" === e12.kind;
      }));
    } }, { key: "isEmoji", get: function() {
      return !!this._def.checks.find((function(e12) {
        return "emoji" === e12.kind;
      }));
    } }, { key: "isUUID", get: function() {
      return !!this._def.checks.find((function(e12) {
        return "uuid" === e12.kind;
      }));
    } }, { key: "isNANOID", get: function() {
      return !!this._def.checks.find((function(e12) {
        return "nanoid" === e12.kind;
      }));
    } }, { key: "isCUID", get: function() {
      return !!this._def.checks.find((function(e12) {
        return "cuid" === e12.kind;
      }));
    } }, { key: "isCUID2", get: function() {
      return !!this._def.checks.find((function(e12) {
        return "cuid2" === e12.kind;
      }));
    } }, { key: "isULID", get: function() {
      return !!this._def.checks.find((function(e12) {
        return "ulid" === e12.kind;
      }));
    } }, { key: "isIP", get: function() {
      return !!this._def.checks.find((function(e12) {
        return "ip" === e12.kind;
      }));
    } }, { key: "isCIDR", get: function() {
      return !!this._def.checks.find((function(e12) {
        return "cidr" === e12.kind;
      }));
    } }, { key: "isBase64", get: function() {
      return !!this._def.checks.find((function(e12) {
        return "base64" === e12.kind;
      }));
    } }, { key: "isBase64url", get: function() {
      return !!this._def.checks.find((function(e12) {
        return "base64url" === e12.kind;
      }));
    } }, { key: "minLength", get: function() {
      var e12, t2 = null, n2 = Qt(this._def.checks);
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
      var e12, t2 = null, n2 = Qt(this._def.checks);
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
  Us.create = function(e11) {
    var t2;
    return new Us(un({ checks: [], typeName: wc.ZodString, coerce: null !== (t2 = null == e11 ? void 0 : e11.coerce) && void 0 !== t2 && t2 }, Fs(e11)));
  };
  var Vs = (function() {
    function e11() {
      var t2;
      return Wt(this, e11), (t2 = Ht(this, e11, arguments)).min = t2.gte, t2.max = t2.lte, t2.step = t2.multipleOf, t2;
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      if (this._def.coerce && (e12.data = Number(e12.data)), this._getType(e12) !== es.number) {
        var t2 = this._getOrReturnCtx(e12);
        return ss(t2, { code: ns.invalid_type, expected: es.number, received: t2.parsedType }), fs;
      }
      var n2, r2, u2, a2, i2, o2, s2 = void 0, c2 = new ls(), l2 = Qt(this._def.checks);
      try {
        for (l2.s(); !(n2 = l2.n()).done; ) {
          var f2 = n2.value;
          "int" === f2.kind ? Ko.isInteger(e12.data) || (ss(s2 = this._getOrReturnCtx(e12, s2), { code: ns.invalid_type, expected: "integer", received: "float", message: f2.message }), c2.dirty()) : "min" === f2.kind ? (f2.inclusive ? e12.data < f2.value : e12.data <= f2.value) && (ss(s2 = this._getOrReturnCtx(e12, s2), { code: ns.too_small, minimum: f2.value, type: "number", inclusive: f2.inclusive, exact: false, message: f2.message }), c2.dirty()) : "max" === f2.kind ? (f2.inclusive ? e12.data > f2.value : e12.data >= f2.value) && (ss(s2 = this._getOrReturnCtx(e12, s2), { code: ns.too_big, maximum: f2.value, type: "number", inclusive: f2.inclusive, exact: false, message: f2.message }), c2.dirty()) : "multipleOf" === f2.kind ? 0 != (r2 = e12.data, u2 = f2.value, void 0, void 0, void 0, o2 = (a2 = (r2.toString().split(".")[1] || "").length) > (i2 = (u2.toString().split(".")[1] || "").length) ? a2 : i2, Number.parseInt(r2.toFixed(o2).replace(".", "")) % Number.parseInt(u2.toFixed(o2).replace(".", "")) / Math.pow(10, o2)) && (ss(s2 = this._getOrReturnCtx(e12, s2), { code: ns.not_multiple_of, multipleOf: f2.value, message: f2.message }), c2.dirty()) : "finite" === f2.kind ? Number.isFinite(e12.data) || (ss(s2 = this._getOrReturnCtx(e12, s2), { code: ns.not_finite, message: f2.message }), c2.dirty()) : Ko.assertNever(f2);
        }
      } catch (e13) {
        l2.e(e13);
      } finally {
        l2.f();
      }
      return { status: c2.value, value: e12.data };
    } }, { key: "gte", value: function(e12, t2) {
      return this.setLimit("min", e12, true, cs.toString(t2));
    } }, { key: "gt", value: function(e12, t2) {
      return this.setLimit("min", e12, false, cs.toString(t2));
    } }, { key: "lte", value: function(e12, t2) {
      return this.setLimit("max", e12, true, cs.toString(t2));
    } }, { key: "lt", value: function(e12, t2) {
      return this.setLimit("max", e12, false, cs.toString(t2));
    } }, { key: "setLimit", value: function(t2, n2, r2, u2) {
      return new e11(un(un({}, this._def), {}, { checks: [].concat(ln(this._def.checks), [{ kind: t2, value: n2, inclusive: r2, message: cs.toString(u2) }]) }));
    } }, { key: "_addCheck", value: function(t2) {
      return new e11(un(un({}, this._def), {}, { checks: [].concat(ln(this._def.checks), [t2]) }));
    } }, { key: "int", value: function(e12) {
      return this._addCheck({ kind: "int", message: cs.toString(e12) });
    } }, { key: "positive", value: function(e12) {
      return this._addCheck({ kind: "min", value: 0, inclusive: false, message: cs.toString(e12) });
    } }, { key: "negative", value: function(e12) {
      return this._addCheck({ kind: "max", value: 0, inclusive: false, message: cs.toString(e12) });
    } }, { key: "nonpositive", value: function(e12) {
      return this._addCheck({ kind: "max", value: 0, inclusive: true, message: cs.toString(e12) });
    } }, { key: "nonnegative", value: function(e12) {
      return this._addCheck({ kind: "min", value: 0, inclusive: true, message: cs.toString(e12) });
    } }, { key: "multipleOf", value: function(e12, t2) {
      return this._addCheck({ kind: "multipleOf", value: e12, message: cs.toString(t2) });
    } }, { key: "finite", value: function(e12) {
      return this._addCheck({ kind: "finite", message: cs.toString(e12) });
    } }, { key: "safe", value: function(e12) {
      return this._addCheck({ kind: "min", inclusive: true, value: Number.MIN_SAFE_INTEGER, message: cs.toString(e12) })._addCheck({ kind: "max", inclusive: true, value: Number.MAX_SAFE_INTEGER, message: cs.toString(e12) });
    } }, { key: "minValue", get: function() {
      var e12, t2 = null, n2 = Qt(this._def.checks);
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
      var e12, t2 = null, n2 = Qt(this._def.checks);
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
      return !!this._def.checks.find((function(e12) {
        return "int" === e12.kind || "multipleOf" === e12.kind && Ko.isInteger(e12.value);
      }));
    } }, { key: "isFinite", get: function() {
      var e12, t2 = null, n2 = null, r2 = Qt(this._def.checks);
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
  Vs.create = function(e11) {
    return new Vs(un({ checks: [], typeName: wc.ZodNumber, coerce: (null == e11 ? void 0 : e11.coerce) || false }, Fs(e11)));
  };
  var Hs = (function() {
    function e11() {
      var t2;
      return Wt(this, e11), (t2 = Ht(this, e11, arguments)).min = t2.gte, t2.max = t2.lte, t2;
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      if (this._def.coerce) try {
        e12.data = BigInt(e12.data);
      } catch (t3) {
        return this._getInvalidInput(e12);
      }
      if (this._getType(e12) !== es.bigint) return this._getInvalidInput(e12);
      var t2, n2 = void 0, r2 = new ls(), u2 = Qt(this._def.checks);
      try {
        for (u2.s(); !(t2 = u2.n()).done; ) {
          var a2 = t2.value;
          "min" === a2.kind ? (a2.inclusive ? e12.data < a2.value : e12.data <= a2.value) && (ss(n2 = this._getOrReturnCtx(e12, n2), { code: ns.too_small, type: "bigint", minimum: a2.value, inclusive: a2.inclusive, message: a2.message }), r2.dirty()) : "max" === a2.kind ? (a2.inclusive ? e12.data > a2.value : e12.data >= a2.value) && (ss(n2 = this._getOrReturnCtx(e12, n2), { code: ns.too_big, type: "bigint", maximum: a2.value, inclusive: a2.inclusive, message: a2.message }), r2.dirty()) : "multipleOf" === a2.kind ? e12.data % a2.value !== BigInt(0) && (ss(n2 = this._getOrReturnCtx(e12, n2), { code: ns.not_multiple_of, multipleOf: a2.value, message: a2.message }), r2.dirty()) : Ko.assertNever(a2);
        }
      } catch (e13) {
        u2.e(e13);
      } finally {
        u2.f();
      }
      return { status: r2.value, value: e12.data };
    } }, { key: "_getInvalidInput", value: function(e12) {
      var t2 = this._getOrReturnCtx(e12);
      return ss(t2, { code: ns.invalid_type, expected: es.bigint, received: t2.parsedType }), fs;
    } }, { key: "gte", value: function(e12, t2) {
      return this.setLimit("min", e12, true, cs.toString(t2));
    } }, { key: "gt", value: function(e12, t2) {
      return this.setLimit("min", e12, false, cs.toString(t2));
    } }, { key: "lte", value: function(e12, t2) {
      return this.setLimit("max", e12, true, cs.toString(t2));
    } }, { key: "lt", value: function(e12, t2) {
      return this.setLimit("max", e12, false, cs.toString(t2));
    } }, { key: "setLimit", value: function(t2, n2, r2, u2) {
      return new e11(un(un({}, this._def), {}, { checks: [].concat(ln(this._def.checks), [{ kind: t2, value: n2, inclusive: r2, message: cs.toString(u2) }]) }));
    } }, { key: "_addCheck", value: function(t2) {
      return new e11(un(un({}, this._def), {}, { checks: [].concat(ln(this._def.checks), [t2]) }));
    } }, { key: "positive", value: function(e12) {
      return this._addCheck({ kind: "min", value: BigInt(0), inclusive: false, message: cs.toString(e12) });
    } }, { key: "negative", value: function(e12) {
      return this._addCheck({ kind: "max", value: BigInt(0), inclusive: false, message: cs.toString(e12) });
    } }, { key: "nonpositive", value: function(e12) {
      return this._addCheck({ kind: "max", value: BigInt(0), inclusive: true, message: cs.toString(e12) });
    } }, { key: "nonnegative", value: function(e12) {
      return this._addCheck({ kind: "min", value: BigInt(0), inclusive: true, message: cs.toString(e12) });
    } }, { key: "multipleOf", value: function(e12, t2) {
      return this._addCheck({ kind: "multipleOf", value: e12, message: cs.toString(t2) });
    } }, { key: "minValue", get: function() {
      var e12, t2 = null, n2 = Qt(this._def.checks);
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
      var e12, t2 = null, n2 = Qt(this._def.checks);
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
  Hs.create = function(e11) {
    var t2;
    return new Hs(un({ checks: [], typeName: wc.ZodBigInt, coerce: null !== (t2 = null == e11 ? void 0 : e11.coerce) && void 0 !== t2 && t2 }, Fs(e11)));
  };
  var Ws = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      if (this._def.coerce && (e12.data = Boolean(e12.data)), this._getType(e12) !== es.boolean) {
        var t2 = this._getOrReturnCtx(e12);
        return ss(t2, { code: ns.invalid_type, expected: es.boolean, received: t2.parsedType }), fs;
      }
      return ps(e12.data);
    } }]);
  })();
  Ws.create = function(e11) {
    return new Ws(un({ typeName: wc.ZodBoolean, coerce: (null == e11 ? void 0 : e11.coerce) || false }, Fs(e11)));
  };
  var Ks = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      if (this._def.coerce && (e12.data = new Date(e12.data)), this._getType(e12) !== es.date) {
        var t2 = this._getOrReturnCtx(e12);
        return ss(t2, { code: ns.invalid_type, expected: es.date, received: t2.parsedType }), fs;
      }
      if (Number.isNaN(e12.data.getTime())) return ss(this._getOrReturnCtx(e12), { code: ns.invalid_date }), fs;
      var n2, r2 = new ls(), u2 = void 0, a2 = Qt(this._def.checks);
      try {
        for (a2.s(); !(n2 = a2.n()).done; ) {
          var i2 = n2.value;
          "min" === i2.kind ? e12.data.getTime() < i2.value && (ss(u2 = this._getOrReturnCtx(e12, u2), { code: ns.too_small, message: i2.message, inclusive: true, exact: false, minimum: i2.value, type: "date" }), r2.dirty()) : "max" === i2.kind ? e12.data.getTime() > i2.value && (ss(u2 = this._getOrReturnCtx(e12, u2), { code: ns.too_big, message: i2.message, inclusive: true, exact: false, maximum: i2.value, type: "date" }), r2.dirty()) : Ko.assertNever(i2);
        }
      } catch (e13) {
        a2.e(e13);
      } finally {
        a2.f();
      }
      return { status: r2.value, value: new Date(e12.data.getTime()) };
    } }, { key: "_addCheck", value: function(t2) {
      return new e11(un(un({}, this._def), {}, { checks: [].concat(ln(this._def.checks), [t2]) }));
    } }, { key: "min", value: function(e12, t2) {
      return this._addCheck({ kind: "min", value: e12.getTime(), message: cs.toString(t2) });
    } }, { key: "max", value: function(e12, t2) {
      return this._addCheck({ kind: "max", value: e12.getTime(), message: cs.toString(t2) });
    } }, { key: "minDate", get: function() {
      var e12, t2 = null, n2 = Qt(this._def.checks);
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
      var e12, t2 = null, n2 = Qt(this._def.checks);
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
  Ks.create = function(e11) {
    return new Ks(un({ checks: [], coerce: (null == e11 ? void 0 : e11.coerce) || false, typeName: wc.ZodDate }, Fs(e11)));
  };
  var Js = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      if (this._getType(e12) !== es.symbol) {
        var t2 = this._getOrReturnCtx(e12);
        return ss(t2, { code: ns.invalid_type, expected: es.symbol, received: t2.parsedType }), fs;
      }
      return ps(e12.data);
    } }]);
  })();
  Js.create = function(e11) {
    return new Js(un({ typeName: wc.ZodSymbol }, Fs(e11)));
  };
  var Gs = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      if (this._getType(e12) !== es.undefined) {
        var t2 = this._getOrReturnCtx(e12);
        return ss(t2, { code: ns.invalid_type, expected: es.undefined, received: t2.parsedType }), fs;
      }
      return ps(e12.data);
    } }]);
  })();
  Gs.create = function(e11) {
    return new Gs(un({ typeName: wc.ZodUndefined }, Fs(e11)));
  };
  var Qs = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      if (this._getType(e12) !== es.null) {
        var t2 = this._getOrReturnCtx(e12);
        return ss(t2, { code: ns.invalid_type, expected: es.null, received: t2.parsedType }), fs;
      }
      return ps(e12.data);
    } }]);
  })();
  Qs.create = function(e11) {
    return new Qs(un({ typeName: wc.ZodNull }, Fs(e11)));
  };
  var Ys = (function() {
    function e11() {
      var t2;
      return Wt(this, e11), (t2 = Ht(this, e11, arguments))._any = true, t2;
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      return ps(e12.data);
    } }]);
  })();
  Ys.create = function(e11) {
    return new Ys(un({ typeName: wc.ZodAny }, Fs(e11)));
  };
  var Xs = (function() {
    function e11() {
      var t2;
      return Wt(this, e11), (t2 = Ht(this, e11, arguments))._unknown = true, t2;
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      return ps(e12.data);
    } }]);
  })();
  Xs.create = function(e11) {
    return new Xs(un({ typeName: wc.ZodUnknown }, Fs(e11)));
  };
  var ec = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      var t2 = this._getOrReturnCtx(e12);
      return ss(t2, { code: ns.invalid_type, expected: es.never, received: t2.parsedType }), fs;
    } }]);
  })();
  ec.create = function(e11) {
    return new ec(un({ typeName: wc.ZodNever }, Fs(e11)));
  };
  var tc = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      if (this._getType(e12) !== es.undefined) {
        var t2 = this._getOrReturnCtx(e12);
        return ss(t2, { code: ns.invalid_type, expected: es.void, received: t2.parsedType }), fs;
      }
      return ps(e12.data);
    } }]);
  })();
  tc.create = function(e11) {
    return new tc(un({ typeName: wc.ZodVoid }, Fs(e11)));
  };
  var nc = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      var t2 = this._processInputParams(e12), n2 = t2.ctx, r2 = t2.status, u2 = this._def;
      if (n2.parsedType !== es.array) return ss(n2, { code: ns.invalid_type, expected: es.array, received: n2.parsedType }), fs;
      if (null !== u2.exactLength) {
        var a2 = n2.data.length > u2.exactLength.value, i2 = n2.data.length < u2.exactLength.value;
        (a2 || i2) && (ss(n2, { code: a2 ? ns.too_big : ns.too_small, minimum: i2 ? u2.exactLength.value : void 0, maximum: a2 ? u2.exactLength.value : void 0, type: "array", inclusive: true, exact: true, message: u2.exactLength.message }), r2.dirty());
      }
      if (null !== u2.minLength && n2.data.length < u2.minLength.value && (ss(n2, { code: ns.too_small, minimum: u2.minLength.value, type: "array", inclusive: true, exact: false, message: u2.minLength.message }), r2.dirty()), null !== u2.maxLength && n2.data.length > u2.maxLength.value && (ss(n2, { code: ns.too_big, maximum: u2.maxLength.value, type: "array", inclusive: true, exact: false, message: u2.maxLength.message }), r2.dirty()), n2.common.async) return Promise.all(ln(n2.data).map((function(e13, t3) {
        return u2.type._parseAsync(new ys(n2, e13, n2.path, t3));
      }))).then((function(e13) {
        return ls.mergeArray(r2, e13);
      }));
      var o2 = ln(n2.data).map((function(e13, t3) {
        return u2.type._parseSync(new ys(n2, e13, n2.path, t3));
      }));
      return ls.mergeArray(r2, o2);
    } }, { key: "element", get: function() {
      return this._def.type;
    } }, { key: "min", value: function(t2, n2) {
      return new e11(un(un({}, this._def), {}, { minLength: { value: t2, message: cs.toString(n2) } }));
    } }, { key: "max", value: function(t2, n2) {
      return new e11(un(un({}, this._def), {}, { maxLength: { value: t2, message: cs.toString(n2) } }));
    } }, { key: "length", value: function(t2, n2) {
      return new e11(un(un({}, this._def), {}, { exactLength: { value: t2, message: cs.toString(n2) } }));
    } }, { key: "nonempty", value: function(e12) {
      return this.min(1, e12);
    } }]);
  })();
  function rc(e11) {
    if (e11 instanceof uc) {
      var t2 = {};
      for (var n2 in e11.shape) {
        var r2 = e11.shape[n2];
        t2[n2] = bc.create(rc(r2));
      }
      return new uc(un(un({}, e11._def), {}, { shape: function() {
        return t2;
      } }));
    }
    return e11 instanceof nc ? new nc(un(un({}, e11._def), {}, { type: rc(e11.element) })) : e11 instanceof bc ? bc.create(rc(e11.unwrap())) : e11 instanceof _c ? _c.create(rc(e11.unwrap())) : e11 instanceof lc ? lc.create(e11.items.map((function(e12) {
      return rc(e12);
    }))) : e11;
  }
  nc.create = function(e11, t2) {
    return new nc(un({ type: e11, minLength: null, maxLength: null, exactLength: null, typeName: wc.ZodArray }, Fs(t2)));
  };
  var uc = (function() {
    function e11() {
      var t2;
      return Wt(this, e11), (t2 = Ht(this, e11, arguments))._cached = null, t2.nonstrict = t2.passthrough, t2.augment = t2.extend, t2;
    }
    return tn(e11, bs), Gt(e11, [{ key: "_getCached", value: function() {
      if (null !== this._cached) return this._cached;
      var e12 = this._def.shape(), t2 = Ko.objectKeys(e12);
      return this._cached = { shape: e12, keys: t2 }, this._cached;
    } }, { key: "_parse", value: function(e12) {
      if (this._getType(e12) !== es.object) {
        var t2 = this._getOrReturnCtx(e12);
        return ss(t2, { code: ns.invalid_type, expected: es.object, received: t2.parsedType }), fs;
      }
      var n2 = this._processInputParams(e12), r2 = n2.status, u2 = n2.ctx, a2 = this._getCached(), i2 = a2.shape, o2 = a2.keys, s2 = [];
      if (!(this._def.catchall instanceof ec && "strip" === this._def.unknownKeys)) for (var c2 in u2.data) o2.includes(c2) || s2.push(c2);
      var l2, f2 = [], d2 = Qt(o2);
      try {
        for (d2.s(); !(l2 = d2.n()).done; ) {
          var p2 = l2.value, h2 = i2[p2], v2 = u2.data[p2];
          f2.push({ key: { status: "valid", value: p2 }, value: h2._parse(new ys(u2, v2, u2.path, p2)), alwaysSet: p2 in u2.data });
        }
      } catch (e13) {
        d2.e(e13);
      } finally {
        d2.f();
      }
      if (this._def.catchall instanceof ec) {
        var m2 = this._def.unknownKeys;
        if ("passthrough" === m2) {
          var D2, y2 = Qt(s2);
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
        } else if ("strict" === m2) s2.length > 0 && (ss(u2, { code: ns.unrecognized_keys, keys: s2 }), r2.dirty());
        else if ("strip" !== m2) throw new Error("Internal ZodObject error: invalid unknownKeys value.");
      } else {
        var F2, E2 = this._def.catchall, b2 = Qt(s2);
        try {
          for (b2.s(); !(F2 = b2.n()).done; ) {
            var _2 = F2.value, k2 = u2.data[_2];
            f2.push({ key: { status: "valid", value: _2 }, value: E2._parse(new ys(u2, k2, u2.path, _2)), alwaysSet: _2 in u2.data });
          }
        } catch (e13) {
          b2.e(e13);
        } finally {
          b2.f();
        }
      }
      return u2.common.async ? Promise.resolve().then(Vt(on().mark((function e13() {
        var t3, n3, r3, u3, a3, i3;
        return on().wrap((function(e14) {
          for (; ; ) switch (e14.prev = e14.next) {
            case 0:
              t3 = [], n3 = Qt(f2), e14.prev = 2, n3.s();
            case 4:
              if ((r3 = n3.n()).done) {
                e14.next = 15;
                break;
              }
              return u3 = r3.value, e14.next = 8, u3.key;
            case 8:
              return a3 = e14.sent, e14.next = 11, u3.value;
            case 11:
              i3 = e14.sent, t3.push({ key: a3, value: i3, alwaysSet: u3.alwaysSet });
            case 13:
              e14.next = 4;
              break;
            case 15:
              e14.next = 20;
              break;
            case 17:
              e14.prev = 17, e14.t0 = e14.catch(2), n3.e(e14.t0);
            case 20:
              return e14.prev = 20, n3.f(), e14.finish(20);
            case 23:
              return e14.abrupt("return", t3);
            case 24:
            case "end":
              return e14.stop();
          }
        }), e13, null, [[2, 17, 20, 23]]);
      })))).then((function(e13) {
        return ls.mergeObjectSync(r2, e13);
      })) : ls.mergeObjectSync(r2, f2);
    } }, { key: "shape", get: function() {
      return this._def.shape();
    } }, { key: "strict", value: function(t2) {
      var n2 = this;
      return cs.errToObj, new e11(un(un({}, this._def), {}, { unknownKeys: "strict" }, void 0 !== t2 ? { errorMap: function(e12, r2) {
        var u2, a2, i2, o2, s2 = null !== (u2 = null === (a2 = (i2 = n2._def).errorMap) || void 0 === a2 ? void 0 : a2.call(i2, e12, r2).message) && void 0 !== u2 ? u2 : r2.defaultError;
        return "unrecognized_keys" === e12.code ? { message: null !== (o2 = cs.errToObj(t2).message) && void 0 !== o2 ? o2 : s2 } : { message: s2 };
      } } : {}));
    } }, { key: "strip", value: function() {
      return new e11(un(un({}, this._def), {}, { unknownKeys: "strip" }));
    } }, { key: "passthrough", value: function() {
      return new e11(un(un({}, this._def), {}, { unknownKeys: "passthrough" }));
    } }, { key: "extend", value: function(t2) {
      var n2 = this;
      return new e11(un(un({}, this._def), {}, { shape: function() {
        return un(un({}, n2._def.shape()), t2);
      } }));
    } }, { key: "merge", value: function(t2) {
      var n2 = this;
      return new e11({ unknownKeys: t2._def.unknownKeys, catchall: t2._def.catchall, shape: function() {
        return un(un({}, n2._def.shape()), t2._def.shape());
      }, typeName: wc.ZodObject });
    } }, { key: "setKey", value: function(e12, t2) {
      return this.augment(Yt({}, e12, t2));
    } }, { key: "catchall", value: function(t2) {
      return new e11(un(un({}, this._def), {}, { catchall: t2 }));
    } }, { key: "pick", value: function(t2) {
      var n2, r2 = {}, u2 = Qt(Ko.objectKeys(t2));
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
      return new e11(un(un({}, this._def), {}, { shape: function() {
        return r2;
      } }));
    } }, { key: "omit", value: function(t2) {
      var n2, r2 = {}, u2 = Qt(Ko.objectKeys(this.shape));
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
      return new e11(un(un({}, this._def), {}, { shape: function() {
        return r2;
      } }));
    } }, { key: "deepPartial", value: function() {
      return rc(this);
    } }, { key: "partial", value: function(t2) {
      var n2, r2 = {}, u2 = Qt(Ko.objectKeys(this.shape));
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
      return new e11(un(un({}, this._def), {}, { shape: function() {
        return r2;
      } }));
    } }, { key: "required", value: function(t2) {
      var n2, r2 = {}, u2 = Qt(Ko.objectKeys(this.shape));
      try {
        for (u2.s(); !(n2 = u2.n()).done; ) {
          var a2 = n2.value;
          if (t2 && !t2[a2]) r2[a2] = this.shape[a2];
          else {
            for (var i2 = this.shape[a2]; i2 instanceof bc; ) i2 = i2._def.innerType;
            r2[a2] = i2;
          }
        }
      } catch (e12) {
        u2.e(e12);
      } finally {
        u2.f();
      }
      return new e11(un(un({}, this._def), {}, { shape: function() {
        return r2;
      } }));
    } }, { key: "keyof", value: function() {
      return Dc(Ko.objectKeys(this.shape));
    } }]);
  })();
  uc.create = function(e11, t2) {
    return new uc(un({ shape: function() {
      return e11;
    }, unknownKeys: "strip", catchall: ec.create(), typeName: wc.ZodObject }, Fs(t2)));
  }, uc.strictCreate = function(e11, t2) {
    return new uc(un({ shape: function() {
      return e11;
    }, unknownKeys: "strict", catchall: ec.create(), typeName: wc.ZodObject }, Fs(t2)));
  }, uc.lazycreate = function(e11, t2) {
    return new uc(un({ shape: e11, unknownKeys: "strip", catchall: ec.create(), typeName: wc.ZodObject }, Fs(t2)));
  };
  var ac = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      var t2 = this._processInputParams(e12).ctx, n2 = this._def.options;
      if (t2.common.async) return Promise.all(n2.map((function() {
        var e13 = Vt(on().mark((function e14(n3) {
          var r3;
          return on().wrap((function(e15) {
            for (; ; ) switch (e15.prev = e15.next) {
              case 0:
                return r3 = un(un({}, t2), {}, { common: un(un({}, t2.common), {}, { issues: [] }), parent: null }), e15.next = 3, n3._parseAsync({ data: t2.data, path: t2.path, parent: r3 });
              case 3:
                return e15.t0 = e15.sent, e15.t1 = r3, e15.abrupt("return", { result: e15.t0, ctx: e15.t1 });
              case 6:
              case "end":
                return e15.stop();
            }
          }), e14);
        })));
        return function(t3) {
          return e13.apply(this, arguments);
        };
      })())).then((function(e13) {
        var n3, r3 = Qt(e13);
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
        var a3, i3 = Qt(e13);
        try {
          for (i3.s(); !(a3 = i3.n()).done; ) {
            var o3, s3 = a3.value;
            if ("dirty" === s3.result.status) return (o3 = t2.common.issues).push.apply(o3, ln(s3.ctx.common.issues)), s3.result;
          }
        } catch (e14) {
          i3.e(e14);
        } finally {
          i3.f();
        }
        var c3 = e13.map((function(e14) {
          return new rs(e14.ctx.common.issues);
        }));
        return ss(t2, { code: ns.invalid_union, unionErrors: c3 }), fs;
      }));
      var r2, u2, a2 = void 0, i2 = [], o2 = Qt(n2);
      try {
        for (o2.s(); !(r2 = o2.n()).done; ) {
          var s2 = r2.value, c2 = un(un({}, t2), {}, { common: un(un({}, t2.common), {}, { issues: [] }), parent: null }), l2 = s2._parseSync({ data: t2.data, path: t2.path, parent: c2 });
          if ("valid" === l2.status) return l2;
          "dirty" !== l2.status || a2 || (a2 = { result: l2, ctx: c2 }), c2.common.issues.length && i2.push(c2.common.issues);
        }
      } catch (e13) {
        o2.e(e13);
      } finally {
        o2.f();
      }
      if (a2) return (u2 = t2.common.issues).push.apply(u2, ln(a2.ctx.common.issues)), a2.result;
      var f2 = i2.map((function(e13) {
        return new rs(e13);
      }));
      return ss(t2, { code: ns.invalid_union, unionErrors: f2 }), fs;
    } }, { key: "options", get: function() {
      return this._def.options;
    } }]);
  })();
  ac.create = function(e11, t2) {
    return new ac(un({ options: e11, typeName: wc.ZodUnion }, Fs(t2)));
  };
  var ic = function(e11) {
    return e11 instanceof vc ? ic(e11.schema) : e11 instanceof Ec ? ic(e11.innerType()) : e11 instanceof mc ? [e11.value] : e11 instanceof yc ? e11.options : e11 instanceof gc ? Ko.objectValues(e11.enum) : e11 instanceof kc ? ic(e11._def.innerType) : e11 instanceof Gs ? [void 0] : e11 instanceof Qs ? [null] : e11 instanceof bc ? [void 0].concat(ln(ic(e11.unwrap()))) : e11 instanceof _c ? [null].concat(ln(ic(e11.unwrap()))) : e11 instanceof xc || e11 instanceof Bc ? ic(e11.unwrap()) : e11 instanceof Cc ? ic(e11._def.innerType) : [];
  };
  var oc = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      var t2 = this._processInputParams(e12).ctx;
      if (t2.parsedType !== es.object) return ss(t2, { code: ns.invalid_type, expected: es.object, received: t2.parsedType }), fs;
      var n2 = this.discriminator, r2 = t2.data[n2], u2 = this.optionsMap.get(r2);
      return u2 ? t2.common.async ? u2._parseAsync({ data: t2.data, path: t2.path, parent: t2 }) : u2._parseSync({ data: t2.data, path: t2.path, parent: t2 }) : (ss(t2, { code: ns.invalid_union_discriminator, options: Array.from(this.optionsMap.keys()), path: [n2] }), fs);
    } }, { key: "discriminator", get: function() {
      return this._def.discriminator;
    } }, { key: "options", get: function() {
      return this._def.options;
    } }, { key: "optionsMap", get: function() {
      return this._def.optionsMap;
    } }], [{ key: "create", value: function(t2, n2, r2) {
      var u2, a2 = /* @__PURE__ */ new Map(), i2 = Qt(n2);
      try {
        for (i2.s(); !(u2 = i2.n()).done; ) {
          var o2 = u2.value, s2 = ic(o2.shape[t2]);
          if (!s2.length) throw new Error("A discriminator value for key `".concat(t2, "` could not be extracted from all schema options"));
          var c2, l2 = Qt(s2);
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
      return new e11(un({ typeName: wc.ZodDiscriminatedUnion, discriminator: t2, options: n2, optionsMap: a2 }, Fs(r2)));
    } }]);
  })();
  function sc(e11, t2) {
    var n2 = ts(e11), r2 = ts(t2);
    if (e11 === t2) return { valid: true, data: e11 };
    if (n2 === es.object && r2 === es.object) {
      var u2, a2 = Ko.objectKeys(t2), i2 = Ko.objectKeys(e11).filter((function(e12) {
        return -1 !== a2.indexOf(e12);
      })), o2 = un(un({}, e11), t2), s2 = Qt(i2);
      try {
        for (s2.s(); !(u2 = s2.n()).done; ) {
          var c2 = u2.value, l2 = sc(e11[c2], t2[c2]);
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
    if (n2 === es.array && r2 === es.array) {
      if (e11.length !== t2.length) return { valid: false };
      for (var f2 = [], d2 = 0; d2 < e11.length; d2++) {
        var p2 = sc(e11[d2], t2[d2]);
        if (!p2.valid) return { valid: false };
        f2.push(p2.data);
      }
      return { valid: true, data: f2 };
    }
    return n2 === es.date && r2 === es.date && +e11 == +t2 ? { valid: true, data: e11 } : { valid: false };
  }
  var cc = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      var t2 = this._processInputParams(e12), n2 = t2.status, r2 = t2.ctx, u2 = function(e13, t3) {
        if (hs(e13) || hs(t3)) return fs;
        var u3 = sc(e13.value, t3.value);
        return u3.valid ? ((vs(e13) || vs(t3)) && n2.dirty(), { status: n2.value, value: u3.data }) : (ss(r2, { code: ns.invalid_intersection_types }), fs);
      };
      return r2.common.async ? Promise.all([this._def.left._parseAsync({ data: r2.data, path: r2.path, parent: r2 }), this._def.right._parseAsync({ data: r2.data, path: r2.path, parent: r2 })]).then((function(e13) {
        var t3 = cn(e13, 2), n3 = t3[0], r3 = t3[1];
        return u2(n3, r3);
      })) : u2(this._def.left._parseSync({ data: r2.data, path: r2.path, parent: r2 }), this._def.right._parseSync({ data: r2.data, path: r2.path, parent: r2 }));
    } }]);
  })();
  cc.create = function(e11, t2, n2) {
    return new cc(un({ left: e11, right: t2, typeName: wc.ZodIntersection }, Fs(n2)));
  };
  var lc = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      var t2 = this, n2 = this._processInputParams(e12), r2 = n2.status, u2 = n2.ctx;
      if (u2.parsedType !== es.array) return ss(u2, { code: ns.invalid_type, expected: es.array, received: u2.parsedType }), fs;
      if (u2.data.length < this._def.items.length) return ss(u2, { code: ns.too_small, minimum: this._def.items.length, inclusive: true, exact: false, type: "array" }), fs;
      !this._def.rest && u2.data.length > this._def.items.length && (ss(u2, { code: ns.too_big, maximum: this._def.items.length, inclusive: true, exact: false, type: "array" }), r2.dirty());
      var a2 = ln(u2.data).map((function(e13, n3) {
        var r3 = t2._def.items[n3] || t2._def.rest;
        return r3 ? r3._parse(new ys(u2, e13, u2.path, n3)) : null;
      })).filter((function(e13) {
        return !!e13;
      }));
      return u2.common.async ? Promise.all(a2).then((function(e13) {
        return ls.mergeArray(r2, e13);
      })) : ls.mergeArray(r2, a2);
    } }, { key: "items", get: function() {
      return this._def.items;
    } }, { key: "rest", value: function(t2) {
      return new e11(un(un({}, this._def), {}, { rest: t2 }));
    } }]);
  })();
  lc.create = function(e11, t2) {
    if (!Array.isArray(e11)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new lc(un({ items: e11, typeName: wc.ZodTuple, rest: null }, Fs(t2)));
  };
  var fc = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "keySchema", get: function() {
      return this._def.keyType;
    } }, { key: "valueSchema", get: function() {
      return this._def.valueType;
    } }, { key: "_parse", value: function(e12) {
      var t2 = this._processInputParams(e12), n2 = t2.status, r2 = t2.ctx;
      if (r2.parsedType !== es.object) return ss(r2, { code: ns.invalid_type, expected: es.object, received: r2.parsedType }), fs;
      var u2 = [], a2 = this._def.keyType, i2 = this._def.valueType;
      for (var o2 in r2.data) u2.push({ key: a2._parse(new ys(r2, o2, r2.path, o2)), value: i2._parse(new ys(r2, r2.data[o2], r2.path, o2)), alwaysSet: o2 in r2.data });
      return r2.common.async ? ls.mergeObjectAsync(n2, u2) : ls.mergeObjectSync(n2, u2);
    } }, { key: "element", get: function() {
      return this._def.valueType;
    } }], [{ key: "create", value: function(t2, n2, r2) {
      return new e11(n2 instanceof bs ? un({ keyType: t2, valueType: n2, typeName: wc.ZodRecord }, Fs(r2)) : un({ keyType: Us.create(), valueType: t2, typeName: wc.ZodRecord }, Fs(n2)));
    } }]);
  })();
  var dc = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "keySchema", get: function() {
      return this._def.keyType;
    } }, { key: "valueSchema", get: function() {
      return this._def.valueType;
    } }, { key: "_parse", value: function(e12) {
      var t2 = this._processInputParams(e12), n2 = t2.status, r2 = t2.ctx;
      if (r2.parsedType !== es.map) return ss(r2, { code: ns.invalid_type, expected: es.map, received: r2.parsedType }), fs;
      var u2 = this._def.keyType, a2 = this._def.valueType, i2 = ln(r2.data.entries()).map((function(e13, t3) {
        var n3 = cn(e13, 2), i3 = n3[0], o3 = n3[1];
        return { key: u2._parse(new ys(r2, i3, r2.path, [t3, "key"])), value: a2._parse(new ys(r2, o3, r2.path, [t3, "value"])) };
      }));
      if (r2.common.async) {
        var o2 = /* @__PURE__ */ new Map();
        return Promise.resolve().then(Vt(on().mark((function e13() {
          var t3, r3, u3, a3, s3;
          return on().wrap((function(e14) {
            for (; ; ) switch (e14.prev = e14.next) {
              case 0:
                t3 = Qt(i2), e14.prev = 1, t3.s();
              case 3:
                if ((r3 = t3.n()).done) {
                  e14.next = 17;
                  break;
                }
                return u3 = r3.value, e14.next = 7, u3.key;
              case 7:
                return a3 = e14.sent, e14.next = 10, u3.value;
              case 10:
                if (s3 = e14.sent, "aborted" !== a3.status && "aborted" !== s3.status) {
                  e14.next = 13;
                  break;
                }
                return e14.abrupt("return", fs);
              case 13:
                "dirty" !== a3.status && "dirty" !== s3.status || n2.dirty(), o2.set(a3.value, s3.value);
              case 15:
                e14.next = 3;
                break;
              case 17:
                e14.next = 22;
                break;
              case 19:
                e14.prev = 19, e14.t0 = e14.catch(1), t3.e(e14.t0);
              case 22:
                return e14.prev = 22, t3.f(), e14.finish(22);
              case 25:
                return e14.abrupt("return", { status: n2.value, value: o2 });
              case 26:
              case "end":
                return e14.stop();
            }
          }), e13, null, [[1, 19, 22, 25]]);
        }))));
      }
      var s2, c2 = /* @__PURE__ */ new Map(), l2 = Qt(i2);
      try {
        for (l2.s(); !(s2 = l2.n()).done; ) {
          var f2 = s2.value, d2 = f2.key, p2 = f2.value;
          if ("aborted" === d2.status || "aborted" === p2.status) return fs;
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
  dc.create = function(e11, t2, n2) {
    return new dc(un({ valueType: t2, keyType: e11, typeName: wc.ZodMap }, Fs(n2)));
  };
  var pc = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      var t2 = this._processInputParams(e12), n2 = t2.status, r2 = t2.ctx;
      if (r2.parsedType !== es.set) return ss(r2, { code: ns.invalid_type, expected: es.set, received: r2.parsedType }), fs;
      var u2 = this._def;
      null !== u2.minSize && r2.data.size < u2.minSize.value && (ss(r2, { code: ns.too_small, minimum: u2.minSize.value, type: "set", inclusive: true, exact: false, message: u2.minSize.message }), n2.dirty()), null !== u2.maxSize && r2.data.size > u2.maxSize.value && (ss(r2, { code: ns.too_big, maximum: u2.maxSize.value, type: "set", inclusive: true, exact: false, message: u2.maxSize.message }), n2.dirty());
      var a2 = this._def.valueType;
      function i2(e13) {
        var t3, r3 = /* @__PURE__ */ new Set(), u3 = Qt(e13);
        try {
          for (u3.s(); !(t3 = u3.n()).done; ) {
            var a3 = t3.value;
            if ("aborted" === a3.status) return fs;
            "dirty" === a3.status && n2.dirty(), r3.add(a3.value);
          }
        } catch (e14) {
          u3.e(e14);
        } finally {
          u3.f();
        }
        return { status: n2.value, value: r3 };
      }
      var o2 = ln(r2.data.values()).map((function(e13, t3) {
        return a2._parse(new ys(r2, e13, r2.path, t3));
      }));
      return r2.common.async ? Promise.all(o2).then((function(e13) {
        return i2(e13);
      })) : i2(o2);
    } }, { key: "min", value: function(t2, n2) {
      return new e11(un(un({}, this._def), {}, { minSize: { value: t2, message: cs.toString(n2) } }));
    } }, { key: "max", value: function(t2, n2) {
      return new e11(un(un({}, this._def), {}, { maxSize: { value: t2, message: cs.toString(n2) } }));
    } }, { key: "size", value: function(e12, t2) {
      return this.min(e12, t2).max(e12, t2);
    } }, { key: "nonempty", value: function(e12) {
      return this.min(1, e12);
    } }]);
  })();
  pc.create = function(e11, t2) {
    return new pc(un({ valueType: e11, minSize: null, maxSize: null, typeName: wc.ZodSet }, Fs(t2)));
  };
  var hc = (function() {
    function e11() {
      var t2;
      return Wt(this, e11), (t2 = Ht(this, e11, arguments)).validate = t2.implement, t2;
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      var t2 = this._processInputParams(e12).ctx;
      if (t2.parsedType !== es.function) return ss(t2, { code: ns.invalid_type, expected: es.function, received: t2.parsedType }), fs;
      function n2(e13, n3) {
        return os({ data: e13, path: t2.path, errorMaps: [t2.common.contextualErrorMap, t2.schemaErrorMap, is(), us].filter((function(e14) {
          return !!e14;
        })), issueData: { code: ns.invalid_arguments, argumentsError: n3 } });
      }
      function r2(e13, n3) {
        return os({ data: e13, path: t2.path, errorMaps: [t2.common.contextualErrorMap, t2.schemaErrorMap, is(), us].filter((function(e14) {
          return !!e14;
        })), issueData: { code: ns.invalid_return_type, returnTypeError: n3 } });
      }
      var u2 = { errorMap: t2.common.contextualErrorMap }, a2 = t2.data;
      if (this._def.returns instanceof Fc) {
        var i2 = this;
        return ps(Vt(on().mark((function e13() {
          var t3, o3, s2, c2, l2, f2, d2, p2 = arguments;
          return on().wrap((function(e14) {
            for (; ; ) switch (e14.prev = e14.next) {
              case 0:
                for (t3 = p2.length, o3 = new Array(t3), s2 = 0; s2 < t3; s2++) o3[s2] = p2[s2];
                return c2 = new rs([]), e14.next = 4, i2._def.args.parseAsync(o3, u2).catch((function(e15) {
                  throw c2.addIssue(n2(o3, e15)), c2;
                }));
              case 4:
                return l2 = e14.sent, e14.next = 7, Reflect.apply(a2, this, l2);
              case 7:
                return f2 = e14.sent, e14.next = 10, i2._def.returns._def.type.parseAsync(f2, u2).catch((function(e15) {
                  throw c2.addIssue(r2(f2, e15)), c2;
                }));
              case 10:
                return d2 = e14.sent, e14.abrupt("return", d2);
              case 12:
              case "end":
                return e14.stop();
            }
          }), e13, this);
        }))));
      }
      var o2 = this;
      return ps((function() {
        for (var e13 = arguments.length, t3 = new Array(e13), i3 = 0; i3 < e13; i3++) t3[i3] = arguments[i3];
        var s2 = o2._def.args.safeParse(t3, u2);
        if (!s2.success) throw new rs([n2(t3, s2.error)]);
        var c2 = Reflect.apply(a2, this, s2.data), l2 = o2._def.returns.safeParse(c2, u2);
        if (!l2.success) throw new rs([r2(c2, l2.error)]);
        return l2.data;
      }));
    } }, { key: "parameters", value: function() {
      return this._def.args;
    } }, { key: "returnType", value: function() {
      return this._def.returns;
    } }, { key: "args", value: function() {
      for (var t2 = arguments.length, n2 = new Array(t2), r2 = 0; r2 < t2; r2++) n2[r2] = arguments[r2];
      return new e11(un(un({}, this._def), {}, { args: lc.create(n2).rest(Xs.create()) }));
    } }, { key: "returns", value: function(t2) {
      return new e11(un(un({}, this._def), {}, { returns: t2 }));
    } }, { key: "implement", value: function(e12) {
      return this.parse(e12);
    } }, { key: "strictImplement", value: function(e12) {
      return this.parse(e12);
    } }], [{ key: "create", value: function(t2, n2, r2) {
      return new e11(un({ args: t2 || lc.create([]).rest(Xs.create()), returns: n2 || Xs.create(), typeName: wc.ZodFunction }, Fs(r2)));
    } }]);
  })();
  var vc = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "schema", get: function() {
      return this._def.getter();
    } }, { key: "_parse", value: function(e12) {
      var t2 = this._processInputParams(e12).ctx;
      return this._def.getter()._parse({ data: t2.data, path: t2.path, parent: t2 });
    } }]);
  })();
  vc.create = function(e11, t2) {
    return new vc(un({ getter: e11, typeName: wc.ZodLazy }, Fs(t2)));
  };
  var mc = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      if (e12.data !== this._def.value) {
        var t2 = this._getOrReturnCtx(e12);
        return ss(t2, { received: t2.data, code: ns.invalid_literal, expected: this._def.value }), fs;
      }
      return { status: "valid", value: e12.data };
    } }, { key: "value", get: function() {
      return this._def.value;
    } }]);
  })();
  function Dc(e11, t2) {
    return new yc(un({ values: e11, typeName: wc.ZodEnum }, Fs(t2)));
  }
  mc.create = function(e11, t2) {
    return new mc(un({ value: e11, typeName: wc.ZodLiteral }, Fs(t2)));
  };
  var yc = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      if ("string" != typeof e12.data) {
        var t2 = this._getOrReturnCtx(e12), n2 = this._def.values;
        return ss(t2, { expected: Ko.joinValues(n2), received: t2.parsedType, code: ns.invalid_type }), fs;
      }
      if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e12.data)) {
        var r2 = this._getOrReturnCtx(e12), u2 = this._def.values;
        return ss(r2, { received: r2.data, code: ns.invalid_enum_value, options: u2 }), fs;
      }
      return ps(e12.data);
    } }, { key: "options", get: function() {
      return this._def.values;
    } }, { key: "enum", get: function() {
      var e12, t2 = {}, n2 = Qt(this._def.values);
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
      var e12, t2 = {}, n2 = Qt(this._def.values);
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
      var e12, t2 = {}, n2 = Qt(this._def.values);
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
      return e11.create(t2, un(un({}, this._def), n2));
    } }, { key: "exclude", value: function(t2) {
      var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._def;
      return e11.create(this.options.filter((function(e12) {
        return !t2.includes(e12);
      })), un(un({}, this._def), n2));
    } }]);
  })();
  yc.create = Dc;
  var gc = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      var t2 = Ko.getValidEnumValues(this._def.values), n2 = this._getOrReturnCtx(e12);
      if (n2.parsedType !== es.string && n2.parsedType !== es.number) {
        var r2 = Ko.objectValues(t2);
        return ss(n2, { expected: Ko.joinValues(r2), received: n2.parsedType, code: ns.invalid_type }), fs;
      }
      if (this._cache || (this._cache = new Set(Ko.getValidEnumValues(this._def.values))), !this._cache.has(e12.data)) {
        var u2 = Ko.objectValues(t2);
        return ss(n2, { received: n2.data, code: ns.invalid_enum_value, options: u2 }), fs;
      }
      return ps(e12.data);
    } }, { key: "enum", get: function() {
      return this._def.values;
    } }]);
  })();
  gc.create = function(e11, t2) {
    return new gc(un({ values: e11, typeName: wc.ZodNativeEnum }, Fs(t2)));
  };
  var Fc = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "unwrap", value: function() {
      return this._def.type;
    } }, { key: "_parse", value: function(e12) {
      var t2 = this, n2 = this._processInputParams(e12).ctx;
      if (n2.parsedType !== es.promise && false === n2.common.async) return ss(n2, { code: ns.invalid_type, expected: es.promise, received: n2.parsedType }), fs;
      var r2 = n2.parsedType === es.promise ? n2.data : Promise.resolve(n2.data);
      return ps(r2.then((function(e13) {
        return t2._def.type.parseAsync(e13, { path: n2.path, errorMap: n2.common.contextualErrorMap });
      })));
    } }]);
  })();
  Fc.create = function(e11, t2) {
    return new Fc(un({ type: e11, typeName: wc.ZodPromise }, Fs(t2)));
  };
  var Ec = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "innerType", value: function() {
      return this._def.schema;
    } }, { key: "sourceType", value: function() {
      return this._def.schema._def.typeName === wc.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
    } }, { key: "_parse", value: function(e12) {
      var t2 = this, n2 = this._processInputParams(e12), r2 = n2.status, u2 = n2.ctx, a2 = this._def.effect || null, i2 = { addIssue: function(e13) {
        ss(u2, e13), e13.fatal ? r2.abort() : r2.dirty();
      }, get path() {
        return u2.path;
      } };
      if (i2.addIssue = i2.addIssue.bind(i2), "preprocess" === a2.type) {
        var o2 = a2.transform(u2.data, i2);
        if (u2.common.async) return Promise.resolve(o2).then((function() {
          var e13 = Vt(on().mark((function e14(n3) {
            var a3;
            return on().wrap((function(e15) {
              for (; ; ) switch (e15.prev = e15.next) {
                case 0:
                  if ("aborted" !== r2.value) {
                    e15.next = 2;
                    break;
                  }
                  return e15.abrupt("return", fs);
                case 2:
                  return e15.next = 4, t2._def.schema._parseAsync({ data: n3, path: u2.path, parent: u2 });
                case 4:
                  if ("aborted" !== (a3 = e15.sent).status) {
                    e15.next = 7;
                    break;
                  }
                  return e15.abrupt("return", fs);
                case 7:
                  if ("dirty" !== a3.status) {
                    e15.next = 9;
                    break;
                  }
                  return e15.abrupt("return", ds(a3.value));
                case 9:
                  if ("dirty" !== r2.value) {
                    e15.next = 11;
                    break;
                  }
                  return e15.abrupt("return", ds(a3.value));
                case 11:
                  return e15.abrupt("return", a3);
                case 12:
                case "end":
                  return e15.stop();
              }
            }), e14);
          })));
          return function(t3) {
            return e13.apply(this, arguments);
          };
        })());
        if ("aborted" === r2.value) return fs;
        var s2 = this._def.schema._parseSync({ data: o2, path: u2.path, parent: u2 });
        return "aborted" === s2.status ? fs : "dirty" === s2.status || "dirty" === r2.value ? ds(s2.value) : s2;
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
          return "aborted" === l2.status ? fs : ("dirty" === l2.status && r2.dirty(), c2(l2.value), { status: r2.value, value: l2.value });
        }
        return this._def.schema._parseAsync({ data: u2.data, path: u2.path, parent: u2 }).then((function(e13) {
          return "aborted" === e13.status ? fs : ("dirty" === e13.status && r2.dirty(), c2(e13.value).then((function() {
            return { status: r2.value, value: e13.value };
          })));
        }));
      }
      if ("transform" === a2.type) {
        if (false === u2.common.async) {
          var f2 = this._def.schema._parseSync({ data: u2.data, path: u2.path, parent: u2 });
          if (!ms(f2)) return fs;
          var d2 = a2.transform(f2.value, i2);
          if (d2 instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
          return { status: r2.value, value: d2 };
        }
        return this._def.schema._parseAsync({ data: u2.data, path: u2.path, parent: u2 }).then((function(e13) {
          return ms(e13) ? Promise.resolve(a2.transform(e13.value, i2)).then((function(e14) {
            return { status: r2.value, value: e14 };
          })) : fs;
        }));
      }
      Ko.assertNever(a2);
    } }]);
  })();
  Ec.create = function(e11, t2, n2) {
    return new Ec(un({ schema: e11, typeName: wc.ZodEffects, effect: t2 }, Fs(n2)));
  }, Ec.createWithPreprocess = function(e11, t2, n2) {
    return new Ec(un({ schema: t2, effect: { type: "preprocess", transform: e11 }, typeName: wc.ZodEffects }, Fs(n2)));
  };
  var bc = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      return this._getType(e12) === es.undefined ? ps(void 0) : this._def.innerType._parse(e12);
    } }, { key: "unwrap", value: function() {
      return this._def.innerType;
    } }]);
  })();
  bc.create = function(e11, t2) {
    return new bc(un({ innerType: e11, typeName: wc.ZodOptional }, Fs(t2)));
  };
  var _c = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      return this._getType(e12) === es.null ? ps(null) : this._def.innerType._parse(e12);
    } }, { key: "unwrap", value: function() {
      return this._def.innerType;
    } }]);
  })();
  _c.create = function(e11, t2) {
    return new _c(un({ innerType: e11, typeName: wc.ZodNullable }, Fs(t2)));
  };
  var kc = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      var t2 = this._processInputParams(e12).ctx, n2 = t2.data;
      return t2.parsedType === es.undefined && (n2 = this._def.defaultValue()), this._def.innerType._parse({ data: n2, path: t2.path, parent: t2 });
    } }, { key: "removeDefault", value: function() {
      return this._def.innerType;
    } }]);
  })();
  kc.create = function(e11, t2) {
    return new kc(un({ innerType: e11, typeName: wc.ZodDefault, defaultValue: "function" == typeof t2.default ? t2.default : function() {
      return t2.default;
    } }, Fs(t2)));
  };
  var Cc = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      var t2 = this, n2 = this._processInputParams(e12).ctx, r2 = un(un({}, n2), {}, { common: un(un({}, n2.common), {}, { issues: [] }) }), u2 = this._def.innerType._parse({ data: r2.data, path: r2.path, parent: un({}, r2) });
      return Ds(u2) ? u2.then((function(e13) {
        return { status: "valid", value: "valid" === e13.status ? e13.value : t2._def.catchValue({ get error() {
          return new rs(r2.common.issues);
        }, input: r2.data }) };
      })) : { status: "valid", value: "valid" === u2.status ? u2.value : this._def.catchValue({ get error() {
        return new rs(r2.common.issues);
      }, input: r2.data }) };
    } }, { key: "removeCatch", value: function() {
      return this._def.innerType;
    } }]);
  })();
  Cc.create = function(e11, t2) {
    return new Cc(un({ innerType: e11, typeName: wc.ZodCatch, catchValue: "function" == typeof t2.catch ? t2.catch : function() {
      return t2.catch;
    } }, Fs(t2)));
  };
  var Ac = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      if (this._getType(e12) !== es.nan) {
        var t2 = this._getOrReturnCtx(e12);
        return ss(t2, { code: ns.invalid_type, expected: es.nan, received: t2.parsedType }), fs;
      }
      return { status: "valid", value: e12.data };
    } }]);
  })();
  Ac.create = function(e11) {
    return new Ac(un({ typeName: wc.ZodNaN }, Fs(e11)));
  };
  var wc;
  var xc = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      var t2 = this._processInputParams(e12).ctx, n2 = t2.data;
      return this._def.type._parse({ data: n2, path: t2.path, parent: t2 });
    } }, { key: "unwrap", value: function() {
      return this._def.type;
    } }]);
  })();
  var Sc = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      var t2 = this, n2 = this._processInputParams(e12), r2 = n2.status, u2 = n2.ctx;
      if (u2.common.async) {
        var a2 = (function() {
          var e13 = Vt(on().mark((function e14() {
            var n3;
            return on().wrap((function(e15) {
              for (; ; ) switch (e15.prev = e15.next) {
                case 0:
                  return e15.next = 2, t2._def.in._parseAsync({ data: u2.data, path: u2.path, parent: u2 });
                case 2:
                  if ("aborted" !== (n3 = e15.sent).status) {
                    e15.next = 5;
                    break;
                  }
                  return e15.abrupt("return", fs);
                case 5:
                  if ("dirty" !== n3.status) {
                    e15.next = 10;
                    break;
                  }
                  return r2.dirty(), e15.abrupt("return", ds(n3.value));
                case 10:
                  return e15.abrupt("return", t2._def.out._parseAsync({ data: n3.value, path: u2.path, parent: u2 }));
                case 11:
                case "end":
                  return e15.stop();
              }
            }), e14);
          })));
          return function() {
            return e13.apply(this, arguments);
          };
        })();
        return a2();
      }
      var i2 = this._def.in._parseSync({ data: u2.data, path: u2.path, parent: u2 });
      return "aborted" === i2.status ? fs : "dirty" === i2.status ? (r2.dirty(), { status: "dirty", value: i2.value }) : this._def.out._parseSync({ data: i2.value, path: u2.path, parent: u2 });
    } }], [{ key: "create", value: function(t2, n2) {
      return new e11({ in: t2, out: n2, typeName: wc.ZodPipeline });
    } }]);
  })();
  var Bc = (function() {
    function e11() {
      return Wt(this, e11), Ht(this, e11, arguments);
    }
    return tn(e11, bs), Gt(e11, [{ key: "_parse", value: function(e12) {
      var t2 = this._def.innerType._parse(e12), n2 = function(e13) {
        return ms(e13) && (e13.value = Object.freeze(e13.value)), e13;
      };
      return Ds(t2) ? t2.then((function(e13) {
        return n2(e13);
      })) : n2(t2);
    } }, { key: "unwrap", value: function() {
      return this._def.innerType;
    } }]);
  })();
  Bc.create = function(e11, t2) {
    return new Bc(un({ innerType: e11, typeName: wc.ZodReadonly }, Fs(t2)));
  }, uc.lazycreate, (function(e11) {
    e11.ZodString = "ZodString", e11.ZodNumber = "ZodNumber", e11.ZodNaN = "ZodNaN", e11.ZodBigInt = "ZodBigInt", e11.ZodBoolean = "ZodBoolean", e11.ZodDate = "ZodDate", e11.ZodSymbol = "ZodSymbol", e11.ZodUndefined = "ZodUndefined", e11.ZodNull = "ZodNull", e11.ZodAny = "ZodAny", e11.ZodUnknown = "ZodUnknown", e11.ZodNever = "ZodNever", e11.ZodVoid = "ZodVoid", e11.ZodArray = "ZodArray", e11.ZodObject = "ZodObject", e11.ZodUnion = "ZodUnion", e11.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e11.ZodIntersection = "ZodIntersection", e11.ZodTuple = "ZodTuple", e11.ZodRecord = "ZodRecord", e11.ZodMap = "ZodMap", e11.ZodSet = "ZodSet", e11.ZodFunction = "ZodFunction", e11.ZodLazy = "ZodLazy", e11.ZodLiteral = "ZodLiteral", e11.ZodEnum = "ZodEnum", e11.ZodEffects = "ZodEffects", e11.ZodNativeEnum = "ZodNativeEnum", e11.ZodOptional = "ZodOptional", e11.ZodNullable = "ZodNullable", e11.ZodDefault = "ZodDefault", e11.ZodCatch = "ZodCatch", e11.ZodPromise = "ZodPromise", e11.ZodBranded = "ZodBranded", e11.ZodPipeline = "ZodPipeline", e11.ZodReadonly = "ZodReadonly";
  })(wc || (wc = {})), Us.create, Vs.create, Ac.create, Hs.create, Ws.create, Ks.create, Js.create, Gs.create, Qs.create, Ys.create, Xs.create, ec.create, tc.create, nc.create, uc.create, uc.strictCreate, ac.create, oc.create, cc.create, lc.create, fc.create, dc.create, pc.create, hc.create, vc.create, mc.create, yc.create, gc.create, Fc.create, Ec.create, bc.create, _c.create, Ec.createWithPreprocess, Sc.create;
  var Oc = function() {
    var e11 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t2 = e11.prefix, n2 = e11.size, r2 = void 0 === n2 ? 16 : n2, u2 = e11.alphabet, a2 = void 0 === u2 ? "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" : u2, i2 = e11.separator, o2 = void 0 === i2 ? "-" : i2, s2 = function() {
      for (var e12 = a2.length, t3 = new Array(r2), n3 = 0; n3 < r2; n3++) t3[n3] = a2[Math.random() * e12 | 0];
      return t3.join("");
    };
    if (null == t2) return s2;
    if (a2.includes(o2)) throw new Nn({ argument: "separator", message: 'The separator "'.concat(o2, '" must not be part of the alphabet "').concat(a2, '".') });
    return function() {
      return "".concat(t2).concat(o2).concat(s2());
    };
  };
  var Ic = Oc();
  var Tc = /"__proto__"\s*:/;
  var Pc = /"constructor"\s*:/;
  function jc(e11) {
    var t2 = JSON.parse(e11);
    return null === t2 || "object" != b(t2) || false === Tc.test(e11) && false === Pc.test(e11) ? t2 : (function(e12) {
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
              o2 && "object" == b(o2) && t3.push(o2);
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
  var Nc = Symbol.for("vercel.ai.validator");
  function zc(e11) {
    return (function(e12) {
      return "object" == b(e12) && null !== e12 && Nc in e12 && true === e12[Nc] && "validate" in e12;
    })(e11) ? e11 : (t2 = e11, n2 = (function() {
      var e12 = r(D().mark((function e13(n3) {
        var r2;
        return D().wrap((function(e14) {
          for (; ; ) switch (e14.prev = e14.next) {
            case 0:
              return e14.next = 2, t2["~standard"].validate(n3);
            case 2:
              return r2 = e14.sent, e14.abrupt("return", null == r2.issues ? { success: true, value: r2.value } : { success: false, error: new Hn({ value: n3, cause: r2.issues }) });
            case 4:
            case "end":
              return e14.stop();
          }
        }), e13);
      })));
      return function(t3) {
        return e12.apply(this, arguments);
      };
    })(), c(c({}, Nc, true), "validate", n2));
    var t2, n2;
  }
  function Rc(e11) {
    return Mc.apply(this, arguments);
  }
  function Mc() {
    return Mc = r(D().mark((function e11(t2) {
      var n2, r2, u2;
      return D().wrap((function(e12) {
        for (; ; ) switch (e12.prev = e12.next) {
          case 0:
            return n2 = t2.value, r2 = t2.schema, e12.next = 3, Zc({ value: n2, schema: r2 });
          case 3:
            if ((u2 = e12.sent).success) {
              e12.next = 6;
              break;
            }
            throw Hn.wrap({ value: n2, cause: u2.error });
          case 6:
            return e12.abrupt("return", u2.value);
          case 7:
          case "end":
            return e12.stop();
        }
      }), e11);
    }))), Mc.apply(this, arguments);
  }
  function Zc(e11) {
    return Lc.apply(this, arguments);
  }
  function Lc() {
    return Lc = r(D().mark((function e11(t2) {
      var n2, r2, u2, a2;
      return D().wrap((function(e12) {
        for (; ; ) switch (e12.prev = e12.next) {
          case 0:
            if (n2 = t2.value, r2 = t2.schema, u2 = zc(r2), e12.prev = 2, null != u2.validate) {
              e12.next = 5;
              break;
            }
            return e12.abrupt("return", { success: true, value: n2, rawValue: n2 });
          case 5:
            return e12.next = 7, u2.validate(n2);
          case 7:
            return a2 = e12.sent, e12.abrupt("return", a2.success ? { success: true, value: a2.value, rawValue: n2 } : { success: false, error: Hn.wrap({ value: n2, cause: a2.error }), rawValue: n2 });
          case 11:
            return e12.prev = 11, e12.t0 = e12.catch(2), e12.abrupt("return", { success: false, error: Hn.wrap({ value: n2, cause: e12.t0 }), rawValue: n2 });
          case 14:
          case "end":
            return e12.stop();
        }
      }), e11, null, [[2, 11]]);
    }))), Lc.apply(this, arguments);
  }
  function $c(e11) {
    return qc.apply(this, arguments);
  }
  function qc() {
    return qc = r(D().mark((function e11(t2) {
      var n2, r2, u2;
      return D().wrap((function(e12) {
        for (; ; ) switch (e12.prev = e12.next) {
          case 0:
            if (n2 = t2.text, r2 = t2.schema, e12.prev = 1, u2 = (function(e13) {
              var t3 = Error.stackTraceLimit;
              Error.stackTraceLimit = 0;
              try {
                return jc(e13);
              } finally {
                Error.stackTraceLimit = t3;
              }
            })(n2), null != r2) {
              e12.next = 7;
              break;
            }
            e12.t0 = { success: true, value: u2, rawValue: u2 }, e12.next = 10;
            break;
          case 7:
            return e12.next = 9, Zc({ value: u2, schema: r2 });
          case 9:
            e12.t0 = e12.sent;
          case 10:
            return e12.abrupt("return", e12.t0);
          case 13:
            return e12.prev = 13, e12.t1 = e12.catch(1), e12.abrupt("return", { success: false, error: Ln.isInstance(e12.t1) ? e12.t1 : new Ln({ text: n2, cause: e12.t1 }), rawValue: void 0 });
          case 16:
          case "end":
            return e12.stop();
        }
      }), e11, null, [[1, 13]]);
    }))), qc.apply(this, arguments);
  }
  function Uc(e11) {
    return Vc.apply(this, arguments);
  }
  function Vc() {
    return Vc = r(D().mark((function e11(t2) {
      return D().wrap((function(e12) {
        for (; ; ) switch (e12.prev = e12.next) {
          case 0:
            return e12.abrupt("return", ("function" == typeof t2 && (t2 = t2()), Promise.resolve(t2)));
          case 1:
          case "end":
            return e12.stop();
        }
      }), e11);
    }))), Vc.apply(this, arguments);
  }
  var Hc = function(e11, t2) {
    for (var n2 = 0; n2 < e11.length && n2 < t2.length && e11[n2] === t2[n2]; n2++) ;
    return [(e11.length - n2).toString()].concat(F(t2.slice(n2))).join("/");
  };
  var Wc = Symbol("Let zodToJsonSchema decide on which parser to use");
  var Kc = { name: void 0, $refStrategy: "root", basePath: ["#"], effectStrategy: "input", pipeStrategy: "all", dateStrategy: "format:date-time", mapStrategy: "entries", removeAdditionalStrategy: "passthrough", allowedAdditionalProperties: true, rejectedAdditionalProperties: false, definitionPath: "definitions", strictUnions: false, definitions: {}, errorMessages: false, patternStrategy: "escape", applyRegexFlags: false, emailStrategy: "format:email", base64Strategy: "contentEncoding:base64", nameStrategy: "ref" };
  function Jc(e11, t2) {
    return gl(e11.type._def, t2);
  }
  function Gc(e11, t2, n2) {
    var r2 = null != n2 ? n2 : t2.dateStrategy;
    if (Array.isArray(r2)) return { anyOf: r2.map((function(n3, r3) {
      return Gc(e11, t2, n3);
    })) };
    switch (r2) {
      case "string":
      case "format:date-time":
        return { type: "string", format: "date-time" };
      case "format:date":
        return { type: "string", format: "date" };
      case "integer":
        return Qc(e11);
    }
  }
  var Qc = function(e11) {
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
  var Yc = void 0;
  var Xc = /^[cC][^\s-]{8,}$/;
  var el = /^[0-9a-z]+$/;
  var tl = /^[0-9A-HJKMNP-TV-Z]{26}$/;
  var nl = /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/;
  var rl = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
  var ul = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
  var al = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  var il = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
  var ol = /^[a-zA-Z0-9_-]{21}$/;
  var sl = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
  function cl(e11, t2) {
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
                  dl(n2, "email", a2.message, t2);
                  break;
                case "format:idn-email":
                  dl(n2, "idn-email", a2.message, t2);
                  break;
                case "pattern:zod":
                  pl(n2, nl, a2.message, t2);
              }
              break;
            case "url":
              dl(n2, "uri", a2.message, t2);
              break;
            case "uuid":
              dl(n2, "uuid", a2.message, t2);
              break;
            case "regex":
              pl(n2, a2.regex, a2.message, t2);
              break;
            case "cuid":
              pl(n2, Xc, a2.message, t2);
              break;
            case "cuid2":
              pl(n2, el, a2.message, t2);
              break;
            case "startsWith":
              pl(n2, RegExp("^".concat(ll(a2.value, t2))), a2.message, t2);
              break;
            case "endsWith":
              pl(n2, RegExp("".concat(ll(a2.value, t2), "$")), a2.message, t2);
              break;
            case "datetime":
              dl(n2, "date-time", a2.message, t2);
              break;
            case "date":
              dl(n2, "date", a2.message, t2);
              break;
            case "time":
              dl(n2, "time", a2.message, t2);
              break;
            case "duration":
              dl(n2, "duration", a2.message, t2);
              break;
            case "length":
              n2.minLength = "number" == typeof n2.minLength ? Math.max(n2.minLength, a2.value) : a2.value, n2.maxLength = "number" == typeof n2.maxLength ? Math.min(n2.maxLength, a2.value) : a2.value;
              break;
            case "includes":
              pl(n2, RegExp(ll(a2.value, t2)), a2.message, t2);
              break;
            case "ip":
              "v6" !== a2.version && dl(n2, "ipv4", a2.message, t2), "v4" !== a2.version && dl(n2, "ipv6", a2.message, t2);
              break;
            case "base64url":
              pl(n2, il, a2.message, t2);
              break;
            case "jwt":
              pl(n2, sl, a2.message, t2);
              break;
            case "cidr":
              "v6" !== a2.version && pl(n2, rl, a2.message, t2), "v4" !== a2.version && pl(n2, ul, a2.message, t2);
              break;
            case "emoji":
              pl(n2, (void 0 === Yc && (Yc = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Yc), a2.message, t2);
              break;
            case "ulid":
              pl(n2, tl, a2.message, t2);
              break;
            case "base64":
              switch (t2.base64Strategy) {
                case "format:binary":
                  dl(n2, "binary", a2.message, t2);
                  break;
                case "contentEncoding:base64":
                  n2.contentEncoding = "base64";
                  break;
                case "pattern:zod":
                  pl(n2, al, a2.message, t2);
              }
              break;
            case "nanoid":
              pl(n2, ol, a2.message, t2);
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
  function ll(e11, t2) {
    return "escape" === t2.patternStrategy ? (function(e12) {
      for (var t3 = "", n2 = 0; n2 < e12.length; n2++) fl.has(e12[n2]) || (t3 += "\\"), t3 += e12[n2];
      return t3;
    })(e11) : e11;
  }
  var fl = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
  function dl(e11, t2, n2, r2) {
    var u2;
    e11.format || (null == (u2 = e11.anyOf) ? void 0 : u2.some((function(e12) {
      return e12.format;
    }))) ? (e11.anyOf || (e11.anyOf = []), e11.format && (e11.anyOf.push({ format: e11.format }), delete e11.format), e11.anyOf.push(v({ format: t2 }, n2 && r2.errorMessages && { errorMessage: { format: n2 } }))) : e11.format = t2;
  }
  function pl(e11, t2, n2, r2) {
    var u2;
    e11.pattern || (null == (u2 = e11.allOf) ? void 0 : u2.some((function(e12) {
      return e12.pattern;
    }))) ? (e11.allOf || (e11.allOf = []), e11.pattern && (e11.allOf.push({ pattern: e11.pattern }), delete e11.pattern), e11.allOf.push(v({ pattern: hl(t2, r2) }, n2 && r2.errorMessages && { errorMessage: { pattern: n2 } }))) : e11.pattern = hl(t2, r2);
  }
  function hl(e11, t2) {
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
  function vl(e11, t2) {
    var n2, r2, u2, a2, i2, o2, s2 = { type: "object", additionalProperties: null != (n2 = gl(e11.valueType._def, v(v({}, t2), {}, { currentPath: [].concat(F(t2.currentPath), ["additionalProperties"]) }))) ? n2 : t2.allowedAdditionalProperties };
    if ((null == (r2 = e11.keyType) ? void 0 : r2._def.typeName) === wc.ZodString && (null == (u2 = e11.keyType._def.checks) ? void 0 : u2.length)) {
      var c2 = cl(e11.keyType._def, t2);
      c2.type;
      var l2 = m(c2, Nt);
      return v(v({}, s2), {}, { propertyNames: l2 });
    }
    if ((null == (a2 = e11.keyType) ? void 0 : a2._def.typeName) === wc.ZodEnum) return v(v({}, s2), {}, { propertyNames: { enum: e11.keyType._def.values } });
    if ((null == (i2 = e11.keyType) ? void 0 : i2._def.typeName) === wc.ZodBranded && e11.keyType._def.type._def.typeName === wc.ZodString && (null == (o2 = e11.keyType._def.type._def.checks) ? void 0 : o2.length)) {
      var f2 = Jc(e11.keyType._def, t2);
      f2.type;
      var d2 = m(f2, zt);
      return v(v({}, s2), {}, { propertyNames: d2 });
    }
    return s2;
  }
  var ml = { ZodString: "string", ZodNumber: "number", ZodBigInt: "integer", ZodBoolean: "boolean", ZodNull: "null" };
  function Dl(e11) {
    try {
      return e11.isOptional();
    } catch (e12) {
      return true;
    }
  }
  var yl = function(e11, t2, n2) {
    switch (t2) {
      case wc.ZodString:
        return cl(e11, n2);
      case wc.ZodNumber:
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
      case wc.ZodObject:
        return (function(e12, t3) {
          var n3 = { type: "object", properties: {} }, r2 = [], u2 = e12.shape();
          for (var a2 in u2) {
            var i2 = u2[a2];
            if (void 0 !== i2 && void 0 !== i2._def) {
              var o2 = Dl(i2), s2 = gl(i2._def, v(v({}, t3), {}, { currentPath: [].concat(F(t3.currentPath), ["properties", a2]), propertyPath: [].concat(F(t3.currentPath), ["properties", a2]) }));
              void 0 !== s2 && (n3.properties[a2] = s2, o2 || r2.push(a2));
            }
          }
          r2.length && (n3.required = r2);
          var c2 = (function(e13, t4) {
            if ("ZodNever" !== e13.catchall._def.typeName) return gl(e13.catchall._def, v(v({}, t4), {}, { currentPath: [].concat(F(t4.currentPath), ["additionalProperties"]) }));
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
      case wc.ZodBigInt:
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
      case wc.ZodBoolean:
        return { type: "boolean" };
      case wc.ZodDate:
        return Gc(e11, n2);
      case wc.ZodUndefined:
        return { not: {} };
      case wc.ZodNull:
        return { type: "null" };
      case wc.ZodArray:
        return (function(e12, t3) {
          var n3, r2, u2, a2 = { type: "array" };
          return (null == (n3 = e12.type) ? void 0 : n3._def) && (null == (u2 = null == (r2 = e12.type) ? void 0 : r2._def) ? void 0 : u2.typeName) !== wc.ZodAny && (a2.items = gl(e12.type._def, v(v({}, t3), {}, { currentPath: [].concat(F(t3.currentPath), ["items"]) }))), e12.minLength && (a2.minItems = e12.minLength.value), e12.maxLength && (a2.maxItems = e12.maxLength.value), e12.exactLength && (a2.minItems = e12.exactLength.value, a2.maxItems = e12.exactLength.value), a2;
        })(e11, n2);
      case wc.ZodUnion:
      case wc.ZodDiscriminatedUnion:
        return (function(e12, t3) {
          var n3 = e12.options instanceof Map ? Array.from(e12.options.values()) : e12.options;
          if (n3.every((function(e13) {
            return e13._def.typeName in ml && (!e13._def.checks || !e13._def.checks.length);
          }))) {
            var r2 = n3.reduce((function(e13, t4) {
              var n4 = ml[t4._def.typeName];
              return n4 && !e13.includes(n4) ? [].concat(F(e13), [n4]) : e13;
            }), []);
            return { type: r2.length > 1 ? r2 : r2[0] };
          }
          if (n3.every((function(e13) {
            return "ZodLiteral" === e13._def.typeName && !e13.description;
          }))) {
            var u2 = n3.reduce((function(e13, t4) {
              var n4 = b(t4._def.value);
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
            }), []);
            if (u2.length === n3.length) {
              var a2 = u2.filter((function(e13, t4, n4) {
                return n4.indexOf(e13) === t4;
              }));
              return { type: a2.length > 1 ? a2 : a2[0], enum: n3.reduce((function(e13, t4) {
                return e13.includes(t4._def.value) ? e13 : [].concat(F(e13), [t4._def.value]);
              }), []) };
            }
          } else if (n3.every((function(e13) {
            return "ZodEnum" === e13._def.typeName;
          }))) return { type: "string", enum: n3.reduce((function(e13, t4) {
            return [].concat(F(e13), F(t4._def.values.filter((function(t5) {
              return !e13.includes(t5);
            }))));
          }), []) };
          return (function(e13, t4) {
            var n4 = (e13.options instanceof Map ? Array.from(e13.options.values()) : e13.options).map((function(e14, n5) {
              return gl(e14._def, v(v({}, t4), {}, { currentPath: [].concat(F(t4.currentPath), ["anyOf", "".concat(n5)]) }));
            })).filter((function(e14) {
              return !!e14 && (!t4.strictUnions || "object" == b(e14) && Object.keys(e14).length > 0);
            }));
            return n4.length ? { anyOf: n4 } : void 0;
          })(e12, t3);
        })(e11, n2);
      case wc.ZodIntersection:
        return (function(e12, t3) {
          var n3 = [gl(e12.left._def, v(v({}, t3), {}, { currentPath: [].concat(F(t3.currentPath), ["allOf", "0"]) })), gl(e12.right._def, v(v({}, t3), {}, { currentPath: [].concat(F(t3.currentPath), ["allOf", "1"]) }))].filter((function(e13) {
            return !!e13;
          })), r2 = [];
          return n3.forEach((function(e13) {
            if ("type" in (n4 = e13) && "string" === n4.type || !("allOf" in n4)) {
              var t4 = e13;
              if ("additionalProperties" in e13 && false === e13.additionalProperties) e13.additionalProperties, t4 = m(e13, Rt);
              r2.push(t4);
            } else r2.push.apply(r2, F(e13.allOf));
            var n4;
          })), r2.length ? { allOf: r2 } : void 0;
        })(e11, n2);
      case wc.ZodTuple:
        return (function(e12, t3) {
          return e12.rest ? { type: "array", minItems: e12.items.length, items: e12.items.map((function(e13, n3) {
            return gl(e13._def, v(v({}, t3), {}, { currentPath: [].concat(F(t3.currentPath), ["items", "".concat(n3)]) }));
          })).reduce((function(e13, t4) {
            return void 0 === t4 ? e13 : [].concat(F(e13), [t4]);
          }), []), additionalItems: gl(e12.rest._def, v(v({}, t3), {}, { currentPath: [].concat(F(t3.currentPath), ["additionalItems"]) })) } : { type: "array", minItems: e12.items.length, maxItems: e12.items.length, items: e12.items.map((function(e13, n3) {
            return gl(e13._def, v(v({}, t3), {}, { currentPath: [].concat(F(t3.currentPath), ["items", "".concat(n3)]) }));
          })).reduce((function(e13, t4) {
            return void 0 === t4 ? e13 : [].concat(F(e13), [t4]);
          }), []) };
        })(e11, n2);
      case wc.ZodRecord:
        return vl(e11, n2);
      case wc.ZodLiteral:
        return (function(e12) {
          var t3 = b(e12.value);
          return "bigint" !== t3 && "number" !== t3 && "boolean" !== t3 && "string" !== t3 ? { type: Array.isArray(e12.value) ? "array" : "object" } : { type: "bigint" === t3 ? "integer" : t3, const: e12.value };
        })(e11);
      case wc.ZodEnum:
        return (function(e12) {
          return { type: "string", enum: Array.from(e12.values) };
        })(e11);
      case wc.ZodNativeEnum:
        return (function(e12) {
          var t3 = e12.values, n3 = Object.keys(e12.values).filter((function(e13) {
            return "number" != typeof t3[t3[e13]];
          })).map((function(e13) {
            return t3[e13];
          })), r2 = Array.from(new Set(n3.map((function(e13) {
            return b(e13);
          }))));
          return { type: 1 === r2.length ? "string" === r2[0] ? "string" : "number" : ["string", "number"], enum: n3 };
        })(e11);
      case wc.ZodNullable:
        return (function(e12, t3) {
          if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(e12.innerType._def.typeName) && (!e12.innerType._def.checks || !e12.innerType._def.checks.length)) return { type: [ml[e12.innerType._def.typeName], "null"] };
          var n3 = gl(e12.innerType._def, v(v({}, t3), {}, { currentPath: [].concat(F(t3.currentPath), ["anyOf", "0"]) }));
          return n3 && { anyOf: [n3, { type: "null" }] };
        })(e11, n2);
      case wc.ZodOptional:
        return (function(e12, t3) {
          var n3;
          if (t3.currentPath.toString() === (null == (n3 = t3.propertyPath) ? void 0 : n3.toString())) return gl(e12.innerType._def, t3);
          var r2 = gl(e12.innerType._def, v(v({}, t3), {}, { currentPath: [].concat(F(t3.currentPath), ["anyOf", "1"]) }));
          return r2 ? { anyOf: [{ not: {} }, r2] } : {};
        })(e11, n2);
      case wc.ZodMap:
        return (function(e12, t3) {
          return "record" === t3.mapStrategy ? vl(e12, t3) : { type: "array", maxItems: 125, items: { type: "array", items: [gl(e12.keyType._def, v(v({}, t3), {}, { currentPath: [].concat(F(t3.currentPath), ["items", "items", "0"]) })) || {}, gl(e12.valueType._def, v(v({}, t3), {}, { currentPath: [].concat(F(t3.currentPath), ["items", "items", "1"]) })) || {}], minItems: 2, maxItems: 2 } };
        })(e11, n2);
      case wc.ZodSet:
        return (function(e12, t3) {
          var n3 = { type: "array", uniqueItems: true, items: gl(e12.valueType._def, v(v({}, t3), {}, { currentPath: [].concat(F(t3.currentPath), ["items"]) })) };
          return e12.minSize && (n3.minItems = e12.minSize.value), e12.maxSize && (n3.maxItems = e12.maxSize.value), n3;
        })(e11, n2);
      case wc.ZodLazy:
        return function() {
          return e11.getter()._def;
        };
      case wc.ZodPromise:
        return (function(e12, t3) {
          return gl(e12.type._def, t3);
        })(e11, n2);
      case wc.ZodNaN:
      case wc.ZodNever:
        return { not: {} };
      case wc.ZodEffects:
        return (function(e12, t3) {
          return "input" === t3.effectStrategy ? gl(e12.schema._def, t3) : {};
        })(e11, n2);
      case wc.ZodAny:
      case wc.ZodUnknown:
        return {};
      case wc.ZodDefault:
        return (function(e12, t3) {
          return v(v({}, gl(e12.innerType._def, t3)), {}, { default: e12.defaultValue() });
        })(e11, n2);
      case wc.ZodBranded:
        return Jc(e11, n2);
      case wc.ZodReadonly:
      case wc.ZodCatch:
        return (function(e12, t3) {
          return gl(e12.innerType._def, t3);
        })(e11, n2);
      case wc.ZodPipeline:
        return (function(e12, t3) {
          if ("input" === t3.pipeStrategy) return gl(e12.in._def, t3);
          if ("output" === t3.pipeStrategy) return gl(e12.out._def, t3);
          var n3 = gl(e12.in._def, v(v({}, t3), {}, { currentPath: [].concat(F(t3.currentPath), ["allOf", "0"]) }));
          return { allOf: [n3, gl(e12.out._def, v(v({}, t3), {}, { currentPath: [].concat(F(t3.currentPath), ["allOf", n3 ? "1" : "0"]) }))].filter((function(e13) {
            return void 0 !== e13;
          })) };
        })(e11, n2);
      case wc.ZodFunction:
      case wc.ZodVoid:
      case wc.ZodSymbol:
      default:
        return;
    }
  };
  function gl(e11, t2) {
    var n2, r2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], u2 = t2.seen.get(e11);
    if (t2.override) {
      var a2 = null == (n2 = t2.override) ? void 0 : n2.call(t2, e11, t2, u2, r2);
      if (a2 !== Wc) return a2;
    }
    if (u2 && !r2) {
      var i2 = Fl(u2, t2);
      if (void 0 !== i2) return i2;
    }
    var o2 = { def: e11, path: t2.currentPath, jsonSchema: void 0 };
    t2.seen.set(e11, o2);
    var s2 = yl(e11, e11.typeName, t2), c2 = "function" == typeof s2 ? gl(s2(), t2) : s2;
    if (c2 && El(e11, t2, c2), t2.postProcess) {
      var l2 = t2.postProcess(c2, e11, t2);
      return o2.jsonSchema = c2, l2;
    }
    return o2.jsonSchema = c2, c2;
  }
  var Fl = function(e11, t2) {
    switch (t2.$refStrategy) {
      case "root":
        return { $ref: e11.path.join("/") };
      case "relative":
        return { $ref: Hc(t2.currentPath, e11.path) };
      case "none":
      case "seen":
        return e11.path.length < t2.currentPath.length && e11.path.every((function(e12, n2) {
          return t2.currentPath[n2] === e12;
        })) ? (console.warn("Recursive reference detected at ".concat(t2.currentPath.join("/"), "! Defaulting to any")), {}) : "seen" === t2.$refStrategy ? {} : void 0;
    }
  };
  var El = function(e11, t2, n2) {
    return e11.description && (n2.description = e11.description), n2;
  };
  var bl = function(e11, t2) {
    var n2, r2 = (function(e12) {
      var t3 = (function(e13) {
        return "string" == typeof e13 ? v(v({}, Kc), {}, { name: e13 }) : v(v({}, Kc), e13);
      })(e12), n3 = void 0 !== t3.name ? [].concat(F(t3.basePath), [t3.definitionPath, t3.name]) : t3.basePath;
      return v(v({}, t3), {}, { currentPath: n3, propertyPath: void 0, seen: new Map(Object.entries(t3.definitions).map((function(e13) {
        var n4 = g(e13, 2), r3 = n4[0], u3 = n4[1];
        return [u3._def, { def: u3._def, path: [].concat(F(t3.basePath), [t3.definitionPath, r3]), jsonSchema: void 0 }];
      }))) });
    })(t2), u2 = "object" == b(t2) && t2.definitions ? Object.entries(t2.definitions).reduce((function(e12, t3) {
      var n3, u3 = g(t3, 2), a3 = u3[0], i3 = u3[1];
      return v(v({}, e12), {}, c({}, a3, null != (n3 = gl(i3._def, v(v({}, r2), {}, { currentPath: [].concat(F(r2.basePath), [r2.definitionPath, a3]) }), true)) ? n3 : {}));
    }), {}) : void 0, a2 = "string" == typeof t2 ? t2 : "title" === (null == t2 ? void 0 : t2.nameStrategy) || null == t2 ? void 0 : t2.name, i2 = null != (n2 = gl(e11._def, void 0 === a2 ? r2 : v(v({}, r2), {}, { currentPath: [].concat(F(r2.basePath), [r2.definitionPath, a2]) }), false)) ? n2 : {}, o2 = "object" == b(t2) && void 0 !== t2.name && "title" === t2.nameStrategy ? t2.name : void 0;
    void 0 !== o2 && (i2.title = o2);
    var s2 = void 0 === a2 ? u2 ? v(v({}, i2), {}, c({}, r2.definitionPath, u2)) : i2 : c({ $ref: [].concat(F("relative" === r2.$refStrategy ? [] : r2.basePath), [r2.definitionPath, a2]).join("/") }, r2.definitionPath, v(v({}, u2), {}, c({}, a2, i2)));
    return s2.$schema = "http://json-schema.org/draft-07/schema#", s2;
  };
  function _l(e11, t2) {
    return (function(e12) {
      return "_zod" in e12;
    })(e11) ? (function(e12) {
      return Cl((function(e13, t4) {
        if (e13 instanceof Ka) {
          var n2, r2 = new Di(t4), u2 = {}, a2 = Qt(e13._idmap.entries());
          try {
            for (a2.s(); !(n2 = a2.n()).done; ) {
              var i2 = cn(n2.value, 2), o2 = (i2[0], i2[1]);
              r2.process(o2);
            }
          } catch (e14) {
            a2.e(e14);
          } finally {
            a2.f();
          }
          var s2, c2 = {}, l2 = { registry: e13, uri: null == t4 ? void 0 : t4.uri, defs: u2 }, f2 = Qt(e13._idmap.entries());
          try {
            for (f2.s(); !(s2 = f2.n()).done; ) {
              var d2 = cn(s2.value, 2), p2 = d2[0], h2 = d2[1];
              c2[p2] = r2.emit(h2, un(un({}, t4), {}, { external: l2 }));
            }
          } catch (e14) {
            f2.e(e14);
          } finally {
            f2.f();
          }
          if (Object.keys(u2).length > 0) {
            var v2 = "draft-2020-12" === r2.target ? "$defs" : "definitions";
            c2.__shared = Yt({}, v2, u2);
          }
          return { schemas: c2 };
        }
        var m2 = new Di(t4);
        return m2.process(e13), m2.emit(e13, t4);
      })(e12, { target: "draft-7", io: "output", reused: "inline" }), { validate: (t3 = r(D().mark((function t4(n2) {
        var r2;
        return D().wrap((function(t5) {
          for (; ; ) switch (t5.prev = t5.next) {
            case 0:
              return t5.next = 2, xi(e12, n2);
            case 2:
              return r2 = t5.sent, t5.abrupt("return", r2.success ? { success: true, value: r2.data } : { success: false, error: r2.error });
            case 4:
            case "end":
              return t5.stop();
          }
        }), t4);
      }))), function(e13) {
        return t3.apply(this, arguments);
      }) });
      var t3;
    })(e11) : (function(e12) {
      return Cl(bl(e12, { $refStrategy: "none" }), { validate: (t3 = r(D().mark((function t4(n2) {
        var r2;
        return D().wrap((function(t5) {
          for (; ; ) switch (t5.prev = t5.next) {
            case 0:
              return t5.next = 2, e12.safeParseAsync(n2);
            case 2:
              return r2 = t5.sent, t5.abrupt("return", r2.success ? { success: true, value: r2.data } : { success: false, error: r2.error });
            case 4:
            case "end":
              return t5.stop();
          }
        }), t4);
      }))), function(e13) {
        return t3.apply(this, arguments);
      }) });
      var t3;
    })(e11);
  }
  var kl = Symbol.for("vercel.ai.schema");
  function Cl(e11) {
    var t2 = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).validate;
    return c(c(c(c(c({}, kl, true), "_type", void 0), Nc, true), "jsonSchema", e11), "validate", t2);
  }
  var Al;
  var wl = Object.defineProperty;
  var xl = "AI_NoObjectGeneratedError";
  var Sl = "vercel.ai.error.".concat(xl);
  var Bl = Symbol.for(Sl);
  var Ol = (function() {
    function e11(t2) {
      var n2, r2 = t2.message, i2 = void 0 === r2 ? "No object generated." : r2, o2 = t2.cause, s2 = t2.text, c2 = t2.response, l2 = t2.usage, f2 = t2.finishReason;
      return a(this, e11), (n2 = u(this, e11, [{ name: xl, message: i2, cause: o2 }]))[Al] = true, n2.text = s2, n2.response = c2, n2.usage = l2, n2.finishReason = f2, n2;
    }
    return d(e11, Bn), o(e11, null, [{ key: "isInstance", value: function(e12) {
      return Bn.hasMarker(e12, Sl);
    } }]);
  })();
  Al = Bl;
  var Il;
  var Tl;
  var Pl = xo([Zi(), Xo(Uint8Array), Xo(ArrayBuffer), (Il = function(e11) {
    var t2, n2;
    return null != (n2 = null == (t2 = globalThis.Buffer) ? void 0 : t2.isBuffer(e11)) && n2;
  }, Tl = { message: "Must be a Buffer" }, (function(e11, t2) {
    var n2, r2 = Fr(Tl);
    return null !== (n2 = r2.abort) && void 0 !== n2 || (r2.abort = true), new e11(un({ type: "custom", check: "custom", fn: t2 }, r2));
  })(Yo, null != Il ? Il : function() {
    return true;
  }))]);
  var jl = new Qo({ type: "lazy", getter: function() {
    return xo([mo(), Zi(), co(), ho(), Io(Zi(), jl), bo(jl)]);
  } });
  var Nl = Io(Zi(), Io(Zi(), jl));
  var zl = ko({ type: No("text"), text: Zi(), providerOptions: Nl.optional() });
  var Rl = ko({ type: No("image"), image: xo([Pl, Xo(URL)]), mediaType: Zi().optional(), providerOptions: Nl.optional() });
  var Ml = ko({ type: No("file"), data: xo([Pl, Xo(URL)]), filename: Zi().optional(), mediaType: Zi(), providerOptions: Nl.optional() });
  var Zl = ko({ type: No("reasoning"), text: Zi(), providerOptions: Nl.optional() });
  var Ll = ko({ type: No("tool-call"), toolCallId: Zi(), toolName: Zi(), input: yo(), providerOptions: Nl.optional(), providerExecuted: ho().optional() });
  var $l = new So(un({ type: "union", options: [ko({ type: No("text"), value: Zi() }), ko({ type: No("json"), value: jl }), ko({ type: No("error-text"), value: Zi() }), ko({ type: No("error-json"), value: jl }), ko({ type: No("content"), value: bo(xo([ko({ type: No("text"), text: Zi() }), ko({ type: No("media"), data: Zi(), mediaType: Zi() })])) })], discriminator: "type" }, Fr(void 0)));
  var ql = ko({ type: No("tool-result"), toolCallId: Zi(), toolName: Zi(), output: $l, providerOptions: Nl.optional() });
  var Ul = ko({ role: No("system"), content: Zi(), providerOptions: Nl.optional() });
  var Vl = ko({ role: No("user"), content: xo([Zi(), bo(xo([zl, Rl, Ml]))]), providerOptions: Nl.optional() });
  var Hl = ko({ role: No("assistant"), content: xo([Zi(), bo(xo([zl, Ml, Zl, Ll, ql]))]), providerOptions: Nl.optional() });
  xo([Ul, Vl, Hl, ko({ role: No("tool"), content: bo(ql), providerOptions: Nl.optional() })]), Oc({ prefix: "aitxt", size: 24 }), TransformStream;
  var Wl = xo([Co({ type: No("text-start"), id: Zi(), providerMetadata: Nl.optional() }), Co({ type: No("text-delta"), id: Zi(), delta: Zi(), providerMetadata: Nl.optional() }), Co({ type: No("text-end"), id: Zi(), providerMetadata: Nl.optional() }), Co({ type: No("error"), errorText: Zi() }), Co({ type: No("tool-input-start"), toolCallId: Zi(), toolName: Zi(), providerExecuted: ho().optional(), dynamic: ho().optional() }), Co({ type: No("tool-input-delta"), toolCallId: Zi(), inputTextDelta: Zi() }), Co({ type: No("tool-input-available"), toolCallId: Zi(), toolName: Zi(), input: yo(), providerExecuted: ho().optional(), providerMetadata: Nl.optional(), dynamic: ho().optional() }), Co({ type: No("tool-input-error"), toolCallId: Zi(), toolName: Zi(), input: yo(), providerExecuted: ho().optional(), providerMetadata: Nl.optional(), dynamic: ho().optional(), errorText: Zi() }), Co({ type: No("tool-output-available"), toolCallId: Zi(), output: yo(), providerExecuted: ho().optional(), dynamic: ho().optional(), preliminary: ho().optional() }), Co({ type: No("tool-output-error"), toolCallId: Zi(), errorText: Zi(), providerExecuted: ho().optional(), dynamic: ho().optional() }), Co({ type: No("reasoning"), text: Zi(), providerMetadata: Nl.optional() }), Co({ type: No("reasoning-start"), id: Zi(), providerMetadata: Nl.optional() }), Co({ type: No("reasoning-delta"), id: Zi(), delta: Zi(), providerMetadata: Nl.optional() }), Co({ type: No("reasoning-end"), id: Zi(), providerMetadata: Nl.optional() }), Co({ type: No("reasoning-part-finish") }), Co({ type: No("source-url"), sourceId: Zi(), url: Zi(), title: Zi().optional(), providerMetadata: Nl.optional() }), Co({ type: No("source-document"), sourceId: Zi(), mediaType: Zi(), title: Zi(), filename: Zi().optional(), providerMetadata: Nl.optional() }), Co({ type: No("file"), url: Zi(), mediaType: Zi(), providerMetadata: Nl.optional() }), Co({ type: Zi().startsWith("data-"), id: Zi().optional(), data: yo(), transient: ho().optional() }), Co({ type: No("start-step") }), Co({ type: No("finish-step") }), Co({ type: No("start"), messageId: Zi().optional(), messageMetadata: yo().optional() }), Co({ type: No("finish"), messageMetadata: yo().optional() }), Co({ type: No("abort") }), Co({ type: No("message-metadata"), messageMetadata: yo() })]);
  function Kl(e11, t2) {
    if (void 0 !== e11 || void 0 !== t2) {
      if (void 0 === e11) return t2;
      if (void 0 === t2) return e11;
      var n2 = v({}, e11);
      for (var r2 in t2) if (Object.prototype.hasOwnProperty.call(t2, r2)) {
        var u2 = t2[r2];
        if (void 0 === u2) continue;
        var a2 = r2 in e11 ? e11[r2] : void 0, i2 = !(null === u2 || "object" != b(u2) || Array.isArray(u2) || u2 instanceof Date || u2 instanceof RegExp), o2 = !(null == a2 || "object" != b(a2) || Array.isArray(a2) || a2 instanceof Date || a2 instanceof RegExp);
        n2[r2] = i2 && o2 ? Kl(a2, u2) : u2;
      }
      return n2;
    }
  }
  function Jl(e11) {
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
  function Gl(e11) {
    return Ql.apply(this, arguments);
  }
  function Ql() {
    return Ql = r(D().mark((function e11(t2) {
      var n2;
      return D().wrap((function(e12) {
        for (; ; ) switch (e12.prev = e12.next) {
          case 0:
            if (void 0 !== t2) {
              e12.next = 2;
              break;
            }
            return e12.abrupt("return", { value: void 0, state: "undefined-input" });
          case 2:
            return e12.next = 4, $c({ text: t2 });
          case 4:
            if (!(n2 = e12.sent).success) {
              e12.next = 9;
              break;
            }
            e12.t0 = { value: n2.value, state: "successful-parse" }, e12.next = 13;
            break;
          case 9:
            return e12.next = 11, $c({ text: Jl(t2) });
          case 11:
            n2 = e12.sent, e12.t0 = n2.success ? { value: n2.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" };
          case 13:
            return e12.abrupt("return", e12.t0);
          case 14:
          case "end":
            return e12.stop();
        }
      }), e11);
    }))), Ql.apply(this, arguments);
  }
  function Yl(e11) {
    return e11.type.startsWith("tool-");
  }
  function Xl(e11) {
    return Yl(e11) || (function(e12) {
      return "dynamic-tool" === e12.type;
    })(e11);
  }
  function ef(e11) {
    return e11.type.split("-").slice(1).join("-");
  }
  function tf(e11) {
    var t2 = e11.lastMessage, n2 = e11.messageId;
    return { message: "assistant" === (null == t2 ? void 0 : t2.role) ? t2 : { id: n2, metadata: void 0, role: "assistant", parts: [] }, activeTextParts: {}, activeReasoningParts: {}, partialToolCalls: {} };
  }
  function nf(e11) {
    var t2 = e11.stream, n2 = e11.messageMetadataSchema, u2 = e11.dataPartSchemas, a2 = e11.runUpdateMessageJob, i2 = e11.onError, o2 = e11.onToolCall, s2 = e11.onData;
    return t2.pipeThrough(new TransformStream({ transform: function(e12, t3) {
      return r(D().mark((function c2() {
        return D().wrap((function(c3) {
          for (; ; ) switch (c3.prev = c3.next) {
            case 0:
              return c3.next = 2, a2((function() {
                var a3 = r(D().mark((function a4(c4) {
                  var l2, f2, d2, p2, h2, m2, y2, g2, F2, E2, b2, _2, k2, C2, A2, w2, x2, S2, B2, O2, I2, T2, P2, j2, N2, z2, R2, M2;
                  return D().wrap((function(a5) {
                    for (; ; ) switch (a5.prev = a5.next) {
                      case 0:
                        _2 = function() {
                          return _2 = r(D().mark((function e13(t4) {
                            var r2;
                            return D().wrap((function(e14) {
                              for (; ; ) switch (e14.prev = e14.next) {
                                case 0:
                                  if (null == t4) {
                                    e14.next = 7;
                                    break;
                                  }
                                  if (r2 = null != l2.message.metadata ? Kl(l2.message.metadata, t4) : t4, e14.t0 = null != n2, !e14.t0) {
                                    e14.next = 6;
                                    break;
                                  }
                                  return e14.next = 6, Rc({ value: r2, schema: n2 });
                                case 6:
                                  l2.message.metadata = r2;
                                case 7:
                                case "end":
                                  return e14.stop();
                              }
                            }), e13);
                          }))), _2.apply(this, arguments);
                        }, b2 = function(e13) {
                          return _2.apply(this, arguments);
                        }, E2 = function(e13) {
                          var t4, n3 = l2.message.parts.find((function(t5) {
                            return "dynamic-tool" === t5.type && t5.toolCallId === e13.toolCallId;
                          })), r2 = e13, u3 = n3;
                          null != n3 ? (n3.state = e13.state, u3.toolName = e13.toolName, u3.input = r2.input, u3.output = r2.output, u3.errorText = r2.errorText, u3.rawInput = null != (t4 = r2.rawInput) ? t4 : u3.rawInput, u3.preliminary = r2.preliminary, null != r2.providerMetadata && "input-available" === n3.state && (n3.callProviderMetadata = r2.providerMetadata)) : l2.message.parts.push(v({ type: "dynamic-tool", toolName: e13.toolName, toolCallId: e13.toolCallId, state: e13.state, input: r2.input, output: r2.output, errorText: r2.errorText, preliminary: r2.preliminary }, null != r2.providerMetadata ? { callProviderMetadata: r2.providerMetadata } : {}));
                        }, F2 = function(e13) {
                          var t4, n3 = l2.message.parts.find((function(t5) {
                            return Yl(t5) && t5.toolCallId === e13.toolCallId;
                          })), r2 = e13, u3 = n3;
                          null != n3 ? (n3.state = e13.state, u3.input = r2.input, u3.output = r2.output, u3.errorText = r2.errorText, u3.rawInput = r2.rawInput, u3.preliminary = r2.preliminary, u3.providerExecuted = null != (t4 = r2.providerExecuted) ? t4 : n3.providerExecuted, null != r2.providerMetadata && "input-available" === n3.state && (n3.callProviderMetadata = r2.providerMetadata)) : l2.message.parts.push(v({ type: "tool-".concat(e13.toolName), toolCallId: e13.toolCallId, state: e13.state, input: r2.input, output: r2.output, rawInput: r2.rawInput, errorText: r2.errorText, providerExecuted: r2.providerExecuted, preliminary: r2.preliminary }, null != r2.providerMetadata ? { callProviderMetadata: r2.providerMetadata } : {}));
                        }, g2 = function(e13) {
                          var t4 = l2.message.parts.filter((function(e14) {
                            return "dynamic-tool" === e14.type;
                          })).find((function(t5) {
                            return t5.toolCallId === e13;
                          }));
                          if (null == t4) throw new Error("tool-output-error must be preceded by a tool-input-available");
                          return t4;
                        }, y2 = function(e13) {
                          var t4 = l2.message.parts.filter(Yl).find((function(t5) {
                            return t5.toolCallId === e13;
                          }));
                          if (null == t4) throw new Error("tool-output-error must be preceded by a tool-input-available");
                          return t4;
                        }, l2 = c4.state, f2 = c4.write, a5.t0 = e12.type, a5.next = "text-start" === a5.t0 ? 10 : "text-delta" === a5.t0 ? 13 : "text-end" === a5.t0 ? 16 : "reasoning-start" === a5.t0 ? 19 : "reasoning-delta" === a5.t0 ? 22 : "reasoning-end" === a5.t0 ? 25 : "file" === a5.t0 ? 28 : "source-url" === a5.t0 ? 30 : "source-document" === a5.t0 ? 32 : "tool-input-start" === a5.t0 ? 34 : "tool-input-delta" === a5.t0 ? 37 : "tool-input-available" === a5.t0 ? 45 : "tool-input-error" === a5.t0 ? 52 : "tool-output-available" === a5.t0 ? 54 : "tool-output-error" === a5.t0 ? 57 : "start-step" === a5.t0 ? 60 : "finish-step" === a5.t0 ? 62 : "start" === a5.t0 ? 64 : "finish" === a5.t0 || "message-metadata" === a5.t0 ? 69 : "error" === a5.t0 ? 73 : 75;
                        break;
                      case 10:
                        return k2 = { type: "text", text: "", providerMetadata: e12.providerMetadata, state: "streaming" }, l2.activeTextParts[e12.id] = k2, l2.message.parts.push(k2), f2(), a5.abrupt("break", 86);
                      case 13:
                        return (C2 = l2.activeTextParts[e12.id]).text += e12.delta, C2.providerMetadata = null != (d2 = e12.providerMetadata) ? d2 : C2.providerMetadata, f2(), a5.abrupt("break", 86);
                      case 16:
                        return (A2 = l2.activeTextParts[e12.id]).state = "done", A2.providerMetadata = null != (p2 = e12.providerMetadata) ? p2 : A2.providerMetadata, delete l2.activeTextParts[e12.id], f2(), a5.abrupt("break", 86);
                      case 19:
                        return w2 = { type: "reasoning", text: "", providerMetadata: e12.providerMetadata, state: "streaming" }, l2.activeReasoningParts[e12.id] = w2, l2.message.parts.push(w2), f2(), a5.abrupt("break", 86);
                      case 22:
                        return (x2 = l2.activeReasoningParts[e12.id]).text += e12.delta, x2.providerMetadata = null != (h2 = e12.providerMetadata) ? h2 : x2.providerMetadata, f2(), a5.abrupt("break", 86);
                      case 25:
                        return (S2 = l2.activeReasoningParts[e12.id]).providerMetadata = null != (m2 = e12.providerMetadata) ? m2 : S2.providerMetadata, S2.state = "done", delete l2.activeReasoningParts[e12.id], f2(), a5.abrupt("break", 86);
                      case 28:
                        return l2.message.parts.push({ type: "file", mediaType: e12.mediaType, url: e12.url }), f2(), a5.abrupt("break", 86);
                      case 30:
                        return l2.message.parts.push({ type: "source-url", sourceId: e12.sourceId, url: e12.url, title: e12.title, providerMetadata: e12.providerMetadata }), f2(), a5.abrupt("break", 86);
                      case 32:
                        return l2.message.parts.push({ type: "source-document", sourceId: e12.sourceId, mediaType: e12.mediaType, title: e12.title, filename: e12.filename, providerMetadata: e12.providerMetadata }), f2(), a5.abrupt("break", 86);
                      case 34:
                        return B2 = l2.message.parts.filter(Yl), l2.partialToolCalls[e12.toolCallId] = { text: "", toolName: e12.toolName, index: B2.length, dynamic: e12.dynamic }, e12.dynamic ? E2({ toolCallId: e12.toolCallId, toolName: e12.toolName, state: "input-streaming", input: void 0 }) : F2({ toolCallId: e12.toolCallId, toolName: e12.toolName, state: "input-streaming", input: void 0, providerExecuted: e12.providerExecuted }), f2(), a5.abrupt("break", 86);
                      case 37:
                        return (O2 = l2.partialToolCalls[e12.toolCallId]).text += e12.inputTextDelta, a5.next = 41, Gl(O2.text);
                      case 41:
                        return I2 = a5.sent, T2 = I2.value, O2.dynamic ? E2({ toolCallId: e12.toolCallId, toolName: O2.toolName, state: "input-streaming", input: T2 }) : F2({ toolCallId: e12.toolCallId, toolName: O2.toolName, state: "input-streaming", input: T2 }), f2(), a5.abrupt("break", 86);
                      case 45:
                        if (e12.dynamic ? E2({ toolCallId: e12.toolCallId, toolName: e12.toolName, state: "input-available", input: e12.input, providerMetadata: e12.providerMetadata }) : F2({ toolCallId: e12.toolCallId, toolName: e12.toolName, state: "input-available", input: e12.input, providerExecuted: e12.providerExecuted, providerMetadata: e12.providerMetadata }), f2(), a5.t1 = o2 && !e12.providerExecuted, !a5.t1) {
                          a5.next = 51;
                          break;
                        }
                        return a5.next = 51, o2({ toolCall: e12 });
                      case 51:
                        return a5.abrupt("break", 86);
                      case 52:
                        return e12.dynamic ? E2({ toolCallId: e12.toolCallId, toolName: e12.toolName, state: "output-error", input: e12.input, errorText: e12.errorText, providerMetadata: e12.providerMetadata }) : F2({ toolCallId: e12.toolCallId, toolName: e12.toolName, state: "output-error", input: void 0, rawInput: e12.input, errorText: e12.errorText, providerExecuted: e12.providerExecuted, providerMetadata: e12.providerMetadata }), f2(), a5.abrupt("break", 86);
                      case 54:
                        return e12.dynamic ? (P2 = g2(e12.toolCallId), E2({ toolCallId: e12.toolCallId, toolName: P2.toolName, state: "output-available", input: P2.input, output: e12.output, preliminary: e12.preliminary })) : (j2 = y2(e12.toolCallId), F2({ toolCallId: e12.toolCallId, toolName: ef(j2), state: "output-available", input: j2.input, output: e12.output, providerExecuted: e12.providerExecuted, preliminary: e12.preliminary })), f2(), a5.abrupt("break", 86);
                      case 57:
                        return e12.dynamic ? (N2 = g2(e12.toolCallId), E2({ toolCallId: e12.toolCallId, toolName: N2.toolName, state: "output-error", input: N2.input, errorText: e12.errorText })) : (z2 = y2(e12.toolCallId), F2({ toolCallId: e12.toolCallId, toolName: ef(z2), state: "output-error", input: z2.input, rawInput: z2.rawInput, errorText: e12.errorText })), f2(), a5.abrupt("break", 86);
                      case 60:
                        return l2.message.parts.push({ type: "step-start" }), a5.abrupt("break", 86);
                      case 62:
                        return l2.activeTextParts = {}, l2.activeReasoningParts = {}, a5.abrupt("break", 86);
                      case 64:
                        return null != e12.messageId && (l2.message.id = e12.messageId), a5.next = 67, b2(e12.messageMetadata);
                      case 67:
                        return null == e12.messageId && null == e12.messageMetadata || f2(), a5.abrupt("break", 86);
                      case 69:
                        return a5.next = 71, b2(e12.messageMetadata);
                      case 71:
                        return null != e12.messageMetadata && f2(), a5.abrupt("break", 86);
                      case 73:
                        return null == i2 || i2(new Error(e12.errorText)), a5.abrupt("break", 86);
                      case 75:
                        if (!(function(e13) {
                          return e13.type.startsWith("data-");
                        })(e12)) {
                          a5.next = 86;
                          break;
                        }
                        if (a5.t2 = null != (null == u2 ? void 0 : u2[e12.type]), !a5.t2) {
                          a5.next = 80;
                          break;
                        }
                        return a5.next = 80, Rc({ value: e12.data, schema: u2[e12.type] });
                      case 80:
                        if (!(R2 = e12).transient) {
                          a5.next = 84;
                          break;
                        }
                        return null == s2 || s2(R2), a5.abrupt("break", 86);
                      case 84:
                        M2 = null != R2.id ? l2.message.parts.find((function(e13) {
                          return R2.type === e13.type && R2.id === e13.id;
                        })) : void 0, null != M2 ? M2.data = R2.data : l2.message.parts.push(R2), null == s2 || s2(R2), f2();
                      case 86:
                        t3.enqueue(e12);
                      case 87:
                      case "end":
                        return a5.stop();
                    }
                  }), a4);
                })));
                return function(e13) {
                  return a3.apply(this, arguments);
                };
              })());
            case 2:
            case "end":
              return c3.stop();
          }
        }), c2);
      })))();
    } }));
  }
  Oc({ prefix: "aitxt", size: 24 }), Oc({ prefix: "aiobj", size: 24 });
  var rf = (function() {
    return o((function e12() {
      a(this, e12), this.queue = [], this.isProcessing = false;
    }), [{ key: "processQueue", value: (t2 = r(D().mark((function e12() {
      return D().wrap((function(e13) {
        for (; ; ) switch (e13.prev = e13.next) {
          case 0:
            if (this.isProcessing) {
              e13.next = 9;
              break;
            }
            this.isProcessing = true;
          case 2:
            if (!(this.queue.length > 0)) {
              e13.next = 8;
              break;
            }
            return e13.next = 5, this.queue[0]();
          case 5:
            this.queue.shift();
          case 6:
            e13.next = 2;
            break;
          case 8:
            this.isProcessing = false;
          case 9:
          case "end":
            return e13.stop();
        }
      }), e12, this);
    }))), function() {
      return t2.apply(this, arguments);
    }) }, { key: "run", value: (e11 = r(D().mark((function e12(t3) {
      var n2 = this;
      return D().wrap((function(e13) {
        for (; ; ) switch (e13.prev = e13.next) {
          case 0:
            return e13.abrupt("return", new Promise((function(e14, u2) {
              n2.queue.push(r(D().mark((function n3() {
                return D().wrap((function(n4) {
                  for (; ; ) switch (n4.prev = n4.next) {
                    case 0:
                      return n4.prev = 0, n4.next = 3, t3();
                    case 3:
                      e14(), n4.next = 9;
                      break;
                    case 6:
                      n4.prev = 6, n4.t0 = n4.catch(0), u2(n4.t0);
                    case 9:
                    case "end":
                      return n4.stop();
                  }
                }), n3, null, [[0, 6]]);
              })))), n2.processQueue();
            })));
          case 1:
          case "end":
            return e13.stop();
        }
      }), e12);
    }))), function(t3) {
      return e11.apply(this, arguments);
    }) }]);
    var e11, t2;
  })();
  Oc({ prefix: "aiobj", size: 24 }), (function(e11, t2) {
    for (var n2 in t2) wl(e11, n2, { get: t2[n2], enumerable: true });
  })({}, { object: function() {
    return af;
  }, text: function() {
    return uf;
  } });
  var uf = function() {
    return { type: "text", responseFormat: { type: "text" }, parsePartial: (t2 = r(D().mark((function e12(t3) {
      var n2;
      return D().wrap((function(e13) {
        for (; ; ) switch (e13.prev = e13.next) {
          case 0:
            return n2 = t3.text, e13.abrupt("return", { partial: n2 });
          case 2:
          case "end":
            return e13.stop();
        }
      }), e12);
    }))), function(e12) {
      return t2.apply(this, arguments);
    }), parseOutput: (e11 = r(D().mark((function e12(t3) {
      var n2;
      return D().wrap((function(e13) {
        for (; ; ) switch (e13.prev = e13.next) {
          case 0:
            return n2 = t3.text, e13.abrupt("return", n2);
          case 2:
          case "end":
            return e13.stop();
        }
      }), e12);
    }))), function(t3) {
      return e11.apply(this, arguments);
    }) };
    var e11, t2;
  };
  var af = function(e11) {
    var t2 = (function(e12) {
      return null == e12 ? Cl({ properties: {}, additionalProperties: false }) : "object" == b(t3 = e12) && null !== t3 && kl in t3 && true === t3[kl] && "jsonSchema" in t3 && "validate" in t3 ? e12 : _l(e12);
      var t3;
    })(e11.schema);
    return { type: "object", responseFormat: { type: "json", schema: t2.jsonSchema }, parsePartial: function(e12) {
      return r(D().mark((function t3() {
        var n2, r2, u2;
        return D().wrap((function(t4) {
          for (; ; ) switch (t4.prev = t4.next) {
            case 0:
              return n2 = e12.text, t4.next = 3, Gl(n2);
            case 3:
              r2 = t4.sent, t4.t0 = r2.state, t4.next = "failed-parse" === t4.t0 || "undefined-input" === t4.t0 ? 7 : "repaired-parse" === t4.t0 || "successful-parse" === t4.t0 ? 8 : 9;
              break;
            case 7:
              return t4.abrupt("return");
            case 8:
              return t4.abrupt("return", { partial: r2.value });
            case 9:
              throw u2 = r2.state, new Error("Unsupported parse state: ".concat(u2));
            case 11:
            case "end":
              return t4.stop();
          }
        }), t3);
      })))();
    }, parseOutput: function(e12, n2) {
      return r(D().mark((function r2() {
        var u2, a2, i2;
        return D().wrap((function(r3) {
          for (; ; ) switch (r3.prev = r3.next) {
            case 0:
              return u2 = e12.text, r3.next = 3, $c({ text: u2 });
            case 3:
              if ((a2 = r3.sent).success) {
                r3.next = 6;
                break;
              }
              throw new Ol({ message: "No object generated: could not parse the response.", cause: a2.error, text: u2, response: n2.response, usage: n2.usage, finishReason: n2.finishReason });
            case 6:
              return r3.next = 8, Zc({ value: a2.value, schema: t2 });
            case 8:
              if ((i2 = r3.sent).success) {
                r3.next = 11;
                break;
              }
              throw new Ol({ message: "No object generated: response did not match schema.", cause: i2.error, text: u2, response: n2.response, usage: n2.usage, finishReason: n2.finishReason });
            case 11:
              return r3.abrupt("return", i2.value);
            case 12:
            case "end":
              return r3.stop();
          }
        }), r2);
      })))();
    } };
  };
  var of = Ao({ name: Zi(), version: Zi() });
  var sf = Ao({ _meta: Mo(ko({}).loose()) });
  var cf = sf;
  var lf = ko({ method: Zi(), params: Mo(sf) });
  var ff = Ao({ experimental: Mo(ko({}).loose()), logging: Mo(ko({}).loose()), prompts: Mo(Ao({ listChanged: Mo(ho()) })), resources: Mo(Ao({ subscribe: Mo(ho()), listChanged: Mo(ho()) })), tools: Mo(Ao({ listChanged: Mo(ho()) })) });
  cf.extend({ protocolVersion: Zi(), capabilities: ff, serverInfo: of, instructions: Mo(Zi()) });
  var df = cf.extend({ nextCursor: Mo(Zi()) });
  var pf = ko({ name: Zi(), description: Mo(Zi()), inputSchema: ko({ type: No("object"), properties: Mo(ko({}).loose()) }).loose() }).loose();
  df.extend({ tools: bo(pf) });
  var hf = ko({ type: No("text"), text: Zi() }).loose();
  var vf = ko({ type: No("image"), data: uo(), mimeType: Zi() }).loose();
  var mf = ko({ uri: Zi(), mimeType: Mo(Zi()) }).loose();
  var Df = mf.extend({ text: Zi() });
  var yf = mf.extend({ blob: uo() });
  var gf = ko({ type: No("resource"), resource: xo([Df, yf]) }).loose();
  cf.extend({ content: bo(xo([hf, vf, gf])), isError: ho().default(false).optional() }).or(cf.extend({ toolResult: yo() }));
  var Ff = "2.0";
  var Ef = ko({ jsonrpc: No(Ff), id: xo([Zi(), co().int()]) }).merge(lf).strict();
  var bf = ko({ jsonrpc: No(Ff), id: xo([Zi(), co().int()]), result: cf }).strict();
  var _f = ko({ jsonrpc: No(Ff), id: xo([Zi(), co().int()]), error: ko({ code: co().int(), message: Zi(), data: Mo(yo()) }) }).strict();
  xo([Ef, ko({ jsonrpc: No(Ff) }).merge(ko({ method: Zi(), params: Mo(sf) })).strict(), bf, _f]);
  var kf = (function() {
    return o((function e12(t3) {
      var n2 = t3.api, r2 = void 0 === n2 ? "/api/chat" : n2, u2 = t3.credentials, i2 = t3.headers, o2 = t3.body, s2 = t3.fetch, c2 = t3.prepareSendMessagesRequest, l2 = t3.prepareReconnectToStreamRequest;
      a(this, e12), this.api = r2, this.credentials = u2, this.headers = i2, this.body = o2, this.fetch = s2, this.prepareSendMessagesRequest = c2, this.prepareReconnectToStreamRequest = l2;
    }), [{ key: "sendMessages", value: (t2 = r(D().mark((function e12(t3) {
      var n2, r2, u2, a2, i2, o2, s2, c2, l2, f2, d2, p2, h2, y2, g2, F2, E2;
      return D().wrap((function(e13) {
        for (; ; ) switch (e13.prev = e13.next) {
          case 0:
            return n2 = t3.abortSignal, r2 = m(t3, Mt), e13.next = 3, Uc(this.body);
          case 3:
            return c2 = e13.sent, e13.next = 6, Uc(this.headers);
          case 6:
            return l2 = e13.sent, e13.next = 9, Uc(this.credentials);
          case 9:
            return f2 = e13.sent, e13.next = 12, null == (u2 = this.prepareSendMessagesRequest) ? void 0 : u2.call(this, { api: this.api, id: r2.chatId, messages: r2.messages, body: v(v({}, c2), r2.body), headers: v(v({}, l2), r2.headers), credentials: f2, requestMetadata: r2.metadata, trigger: r2.trigger, messageId: r2.messageId });
          case 12:
            return d2 = e13.sent, p2 = null != (a2 = null == d2 ? void 0 : d2.api) ? a2 : this.api, h2 = void 0 !== (null == d2 ? void 0 : d2.headers) ? d2.headers : v(v({}, l2), r2.headers), y2 = void 0 !== (null == d2 ? void 0 : d2.body) ? d2.body : v(v(v({}, c2), r2.body), {}, { id: r2.chatId, messages: r2.messages, trigger: r2.trigger, messageId: r2.messageId }), g2 = null != (i2 = null == d2 ? void 0 : d2.credentials) ? i2 : f2, F2 = null != (o2 = this.fetch) ? o2 : globalThis.fetch, e13.next = 20, F2(p2, { method: "POST", headers: v({ "Content-Type": "application/json" }, h2), body: JSON.stringify(y2), credentials: g2, signal: n2 });
          case 20:
            if ((E2 = e13.sent).ok) {
              e13.next = 33;
              break;
            }
            return e13.t0 = Error, e13.next = 25, E2.text();
          case 25:
            if (e13.t1 = s2 = e13.sent, null == e13.t1) {
              e13.next = 30;
              break;
            }
            e13.t2 = s2, e13.next = 31;
            break;
          case 30:
            e13.t2 = "Failed to fetch the chat response.";
          case 31:
            throw e13.t3 = e13.t2, new e13.t0(e13.t3);
          case 33:
            if (E2.body) {
              e13.next = 35;
              break;
            }
            throw new Error("The response body is empty.");
          case 35:
            return e13.abrupt("return", this.processResponseStream(E2.body));
          case 36:
          case "end":
            return e13.stop();
        }
      }), e12, this);
    }))), function(e12) {
      return t2.apply(this, arguments);
    }) }, { key: "reconnectToStream", value: (e11 = r(D().mark((function e12(t3) {
      var n2, r2, u2, a2, i2, o2, s2, c2, l2, f2, d2, p2, h2, m2;
      return D().wrap((function(e13) {
        for (; ; ) switch (e13.prev = e13.next) {
          case 0:
            return e13.next = 2, Uc(this.body);
          case 2:
            return o2 = e13.sent, e13.next = 5, Uc(this.headers);
          case 5:
            return s2 = e13.sent, e13.next = 8, Uc(this.credentials);
          case 8:
            return c2 = e13.sent, e13.next = 11, null == (n2 = this.prepareReconnectToStreamRequest) ? void 0 : n2.call(this, { api: this.api, id: t3.chatId, body: v(v({}, o2), t3.body), headers: v(v({}, s2), t3.headers), credentials: c2, requestMetadata: t3.metadata });
          case 11:
            return l2 = e13.sent, f2 = null != (r2 = null == l2 ? void 0 : l2.api) ? r2 : "".concat(this.api, "/").concat(t3.chatId, "/stream"), d2 = void 0 !== (null == l2 ? void 0 : l2.headers) ? l2.headers : v(v({}, s2), t3.headers), p2 = null != (u2 = null == l2 ? void 0 : l2.credentials) ? u2 : c2, h2 = null != (a2 = this.fetch) ? a2 : globalThis.fetch, e13.next = 18, h2(f2, { method: "GET", headers: d2, credentials: p2 });
          case 18:
            if (204 !== (m2 = e13.sent).status) {
              e13.next = 21;
              break;
            }
            return e13.abrupt("return", null);
          case 21:
            if (m2.ok) {
              e13.next = 33;
              break;
            }
            return e13.t0 = Error, e13.next = 25, m2.text();
          case 25:
            if (e13.t1 = i2 = e13.sent, null == e13.t1) {
              e13.next = 30;
              break;
            }
            e13.t2 = i2, e13.next = 31;
            break;
          case 30:
            e13.t2 = "Failed to fetch the chat response.";
          case 31:
            throw e13.t3 = e13.t2, new e13.t0(e13.t3);
          case 33:
            if (m2.body) {
              e13.next = 35;
              break;
            }
            throw new Error("The response body is empty.");
          case 35:
            return e13.abrupt("return", this.processResponseStream(m2.body));
          case 36:
          case "end":
            return e13.stop();
        }
      }), e12, this);
    }))), function(t3) {
      return e11.apply(this, arguments);
    }) }]);
    var e11, t2;
  })();
  var Cf = (function() {
    function e11() {
      var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return a(this, e11), u(this, e11, [t2]);
    }
    return d(e11, kf), o(e11, [{ key: "processResponseStream", value: function(e12) {
      return (function(e13) {
        var t2 = e13.schema;
        return e13.stream.pipeThrough(new TextDecoderStream()).pipeThrough(new Jn()).pipeThrough(new TransformStream({ transform: function(e14, n2) {
          return r(D().mark((function r2() {
            var u2;
            return D().wrap((function(r3) {
              for (; ; ) switch (r3.prev = r3.next) {
                case 0:
                  if (u2 = e14.data, r3.t0 = "[DONE]" !== u2, !r3.t0) {
                    r3.next = 8;
                    break;
                  }
                  return r3.t1 = n2, r3.next = 6, $c({ text: u2, schema: t2 });
                case 6:
                  r3.t2 = r3.sent, r3.t1.enqueue.call(r3.t1, r3.t2);
                case 8:
                case "end":
                  return r3.stop();
              }
            }), r2);
          })))();
        } }));
      })({ stream: e12, schema: Wl }).pipeThrough(new TransformStream({ transform: function(e13, t2) {
        return r(D().mark((function n2() {
          return D().wrap((function(n3) {
            for (; ; ) switch (n3.prev = n3.next) {
              case 0:
                if (e13.success) {
                  n3.next = 2;
                  break;
                }
                throw e13.error;
              case 2:
                t2.enqueue(e13.value);
              case 3:
              case "end":
                return n3.stop();
            }
          }), n2);
        })))();
      } }));
    } }]);
  })();
  var Af = (function() {
    return o((function e12(t2) {
      var n2 = this, u2 = t2.generateId, i2 = void 0 === u2 ? Ic : u2, o2 = t2.id, s2 = void 0 === o2 ? i2() : o2, c2 = t2.transport, l2 = void 0 === c2 ? new Cf() : c2, f2 = t2.messageMetadataSchema, d2 = t2.dataPartSchemas, p2 = t2.state, h2 = t2.onError, y2 = t2.onToolCall, g2 = t2.onFinish, E2 = t2.onData, b2 = t2.sendAutomaticallyWhen;
      a(this, e12), this.activeResponse = void 0, this.jobExecutor = new rf(), this.sendMessage = (function() {
        var e13 = r(D().mark((function e14(t3, u3) {
          var a2, i3, o3, s3, c3, l3, f3;
          return D().wrap((function(e15) {
            for (; ; ) switch (e15.prev = e15.next) {
              case 0:
                if (null != t3) {
                  e15.next = 4;
                  break;
                }
                return e15.next = 3, n2.makeRequest(v({ trigger: "submit-message", messageId: null == (a2 = n2.lastMessage) ? void 0 : a2.id }, u3));
              case 3:
                return e15.abrupt("return", void e15.sent);
              case 4:
                if (!("text" in t3) && !("files" in t3)) {
                  e15.next = 16;
                  break;
                }
                if (!Array.isArray(t3.files)) {
                  e15.next = 9;
                  break;
                }
                e15.t0 = t3.files, e15.next = 12;
                break;
              case 9:
                return e15.next = 11, (function() {
                  var e16 = r(D().mark((function e17(t4) {
                    return D().wrap((function(e18) {
                      for (; ; ) switch (e18.prev = e18.next) {
                        case 0:
                          if (null != t4) {
                            e18.next = 2;
                            break;
                          }
                          return e18.abrupt("return", []);
                        case 2:
                          if (globalThis.FileList && t4 instanceof globalThis.FileList) {
                            e18.next = 4;
                            break;
                          }
                          throw new Error("FileList is not supported in the current environment");
                        case 4:
                          return e18.abrupt("return", Promise.all(Array.from(t4).map((function() {
                            var e19 = r(D().mark((function e20(t5) {
                              var n3, r2;
                              return D().wrap((function(e21) {
                                for (; ; ) switch (e21.prev = e21.next) {
                                  case 0:
                                    return n3 = t5.name, r2 = t5.type, e21.t0 = r2, e21.t1 = n3, e21.next = 5, new Promise((function(e22, n4) {
                                      var r3 = new FileReader();
                                      r3.onload = function(t6) {
                                        var n5;
                                        e22(null == (n5 = t6.target) ? void 0 : n5.result);
                                      }, r3.onerror = function(e23) {
                                        return n4(e23);
                                      }, r3.readAsDataURL(t5);
                                    }));
                                  case 5:
                                    return e21.t2 = e21.sent, e21.abrupt("return", { type: "file", mediaType: e21.t0, filename: e21.t1, url: e21.t2 });
                                  case 7:
                                  case "end":
                                    return e21.stop();
                                }
                              }), e20);
                            })));
                            return function(t5) {
                              return e19.apply(this, arguments);
                            };
                          })())));
                        case 5:
                        case "end":
                          return e18.stop();
                      }
                    }), e17);
                  })));
                  return function(t4) {
                    return e16.apply(this, arguments);
                  };
                })()(t3.files);
              case 11:
                e15.t0 = e15.sent;
              case 12:
                l3 = e15.t0, c3 = { parts: [].concat(F(l3), F("text" in t3 && null != t3.text ? [{ type: "text", text: t3.text }] : [])) }, e15.next = 17;
                break;
              case 16:
                c3 = t3;
              case 17:
                if (null == t3.messageId) {
                  e15.next = 26;
                  break;
                }
                if (f3 = n2.state.messages.findIndex((function(e16) {
                  return e16.id === t3.messageId;
                })), -1 !== f3) {
                  e15.next = 21;
                  break;
                }
                throw new Error("message with id ".concat(t3.messageId, " not found"));
              case 21:
                if ("user" === n2.state.messages[f3].role) {
                  e15.next = 23;
                  break;
                }
                throw new Error("message with id ".concat(t3.messageId, " is not a user message"));
              case 23:
                n2.state.messages = n2.state.messages.slice(0, f3 + 1), n2.state.replaceMessage(f3, v(v({}, c3), {}, { id: t3.messageId, role: null != (i3 = c3.role) ? i3 : "user", metadata: t3.metadata })), e15.next = 27;
                break;
              case 26:
                n2.state.pushMessage(v(v({}, c3), {}, { id: null != (o3 = c3.id) ? o3 : n2.generateId(), role: null != (s3 = c3.role) ? s3 : "user", metadata: t3.metadata }));
              case 27:
                return e15.next = 29, n2.makeRequest(v({ trigger: "submit-message", messageId: t3.messageId }, u3));
              case 29:
              case "end":
                return e15.stop();
            }
          }), e14);
        })));
        return function(t3, n3) {
          return e13.apply(this, arguments);
        };
      })(), this.regenerate = r(D().mark((function e13() {
        var t3, r2, u3, a2, i3 = arguments;
        return D().wrap((function(e14) {
          for (; ; ) switch (e14.prev = e14.next) {
            case 0:
              if (r2 = (t3 = i3.length > 0 && void 0 !== i3[0] ? i3[0] : {}).messageId, u3 = m(t3, Zt), a2 = null == r2 ? n2.state.messages.length - 1 : n2.state.messages.findIndex((function(e15) {
                return e15.id === r2;
              })), -1 !== a2) {
                e14.next = 4;
                break;
              }
              throw new Error("message ".concat(r2, " not found"));
            case 4:
              return n2.state.messages = n2.state.messages.slice(0, "assistant" === n2.messages[a2].role ? a2 : a2 + 1), e14.next = 7, n2.makeRequest(v({ trigger: "regenerate-message", messageId: r2 }, u3));
            case 7:
            case "end":
              return e14.stop();
          }
        }), e13);
      }))), this.resumeStream = r(D().mark((function e13() {
        var t3, r2 = arguments;
        return D().wrap((function(e14) {
          for (; ; ) switch (e14.prev = e14.next) {
            case 0:
              return t3 = r2.length > 0 && void 0 !== r2[0] ? r2[0] : {}, e14.next = 3, n2.makeRequest(v({ trigger: "resume-stream" }, t3));
            case 3:
            case "end":
              return e14.stop();
          }
        }), e13);
      }))), this.clearError = function() {
        "error" === n2.status && (n2.state.error = void 0, n2.setStatus({ status: "ready" }));
      }, this.addToolResult = (function() {
        var e13 = r(D().mark((function e14(t3) {
          var u3, a2;
          return D().wrap((function(e15) {
            for (; ; ) switch (e15.prev = e15.next) {
              case 0:
                return t3.tool, u3 = t3.toolCallId, a2 = t3.output, e15.abrupt("return", n2.jobExecutor.run(r(D().mark((function e16() {
                  var t4, r2, i3, o3;
                  return D().wrap((function(e17) {
                    for (; ; ) switch (e17.prev = e17.next) {
                      case 0:
                        i3 = n2.state.messages, o3 = i3[i3.length - 1], n2.state.replaceMessage(i3.length - 1, v(v({}, o3), {}, { parts: o3.parts.map((function(e18) {
                          return Xl(e18) && e18.toolCallId === u3 ? v(v({}, e18), {}, { state: "output-available", output: a2 }) : e18;
                        })) })), n2.activeResponse && (n2.activeResponse.state.message.parts = n2.activeResponse.state.message.parts.map((function(e18) {
                          return Xl(e18) && e18.toolCallId === u3 ? v(v({}, e18), {}, { state: "output-available", output: a2, errorText: void 0 }) : e18;
                        }))), "streaming" !== n2.status && "submitted" !== n2.status && (null == (t4 = n2.sendAutomaticallyWhen) ? void 0 : t4.call(n2, { messages: n2.state.messages })) && n2.makeRequest({ trigger: "submit-message", messageId: null == (r2 = n2.lastMessage) ? void 0 : r2.id });
                      case 2:
                      case "end":
                        return e17.stop();
                    }
                  }), e16);
                })))));
              case 2:
              case "end":
                return e15.stop();
            }
          }), e14);
        })));
        return function(t3) {
          return e13.apply(this, arguments);
        };
      })(), this.stop = r(D().mark((function e13() {
        var t3;
        return D().wrap((function(e14) {
          for (; ; ) switch (e14.prev = e14.next) {
            case 0:
              "streaming" !== n2.status && "submitted" !== n2.status || (null == (t3 = n2.activeResponse) ? void 0 : t3.abortController) && n2.activeResponse.abortController.abort();
            case 1:
            case "end":
              return e14.stop();
          }
        }), e13);
      }))), this.id = s2, this.transport = l2, this.generateId = i2, this.messageMetadataSchema = f2, this.dataPartSchemas = d2, this.state = p2, this.onError = h2, this.onToolCall = y2, this.onFinish = g2, this.onData = E2, this.sendAutomaticallyWhen = b2;
    }), [{ key: "status", get: function() {
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
    } }, { key: "makeRequest", value: (e11 = r(D().mark((function e12(t2) {
      var n2, u2, a2, i2, o2, s2, c2, l2, f2, d2, p2, h2, v2, m2, y2, g2, F2 = this;
      return D().wrap((function(e13) {
        for (; ; ) switch (e13.prev = e13.next) {
          case 0:
            if (n2 = t2.trigger, u2 = t2.metadata, a2 = t2.headers, i2 = t2.body, o2 = t2.messageId, this.setStatus({ status: "submitted", error: void 0 }), f2 = this.lastMessage, d2 = false, p2 = false, h2 = false, e13.prev = 4, (v2 = { state: tf({ lastMessage: this.state.snapshot(f2), messageId: this.generateId() }), abortController: new AbortController() }).abortController.signal.addEventListener("abort", (function() {
              d2 = true;
            })), this.activeResponse = v2, "resume-stream" !== n2) {
              e13.next = 15;
              break;
            }
            return e13.next = 9, this.transport.reconnectToStream({ chatId: this.id, metadata: u2, headers: a2, body: i2 });
          case 9:
            if (null != (y2 = e13.sent)) {
              e13.next = 12;
              break;
            }
            return e13.abrupt("return", void this.setStatus({ status: "ready" }));
          case 12:
            m2 = y2, e13.next = 18;
            break;
          case 15:
            return e13.next = 17, this.transport.sendMessages({ chatId: this.id, messages: this.state.messages, abortSignal: v2.abortController.signal, metadata: u2, headers: a2, body: i2, trigger: n2, messageId: o2 });
          case 17:
            m2 = e13.sent;
          case 18:
            return g2 = function(e14) {
              return F2.jobExecutor.run((function() {
                return e14({ state: v2.state, write: function() {
                  var e15;
                  F2.setStatus({ status: "streaming" }), v2.state.message.id === (null == (e15 = F2.lastMessage) ? void 0 : e15.id) ? F2.state.replaceMessage(F2.state.messages.length - 1, v2.state.message) : F2.state.pushMessage(v2.state.message);
                } });
              }));
            }, e13.next = 21, (function() {
              var e14 = r(D().mark((function e15(t3) {
                var n3, r2, u3;
                return D().wrap((function(e16) {
                  for (; ; ) switch (e16.prev = e16.next) {
                    case 0:
                      n3 = t3.stream, r2 = t3.onError, u3 = n3.getReader(), e16.prev = 2;
                    case 3:
                      return e16.next = 5, u3.read();
                    case 5:
                      if (!e16.sent.done) {
                        e16.next = 9;
                        break;
                      }
                      return e16.abrupt("break", 11);
                    case 9:
                      e16.next = 3;
                      break;
                    case 11:
                      e16.next = 16;
                      break;
                    case 13:
                      e16.prev = 13, e16.t0 = e16.catch(2), null == r2 || r2(e16.t0);
                    case 16:
                      return e16.prev = 16, u3.releaseLock(), e16.finish(16);
                    case 19:
                    case "end":
                      return e16.stop();
                  }
                }), e15, null, [[2, 13, 16, 19]]);
              })));
              return function(t3) {
                return e14.apply(this, arguments);
              };
            })()({ stream: nf({ stream: m2, onToolCall: this.onToolCall, onData: this.onData, messageMetadataSchema: this.messageMetadataSchema, dataPartSchemas: this.dataPartSchemas, runUpdateMessageJob: g2, onError: function(e14) {
              throw e14;
            } }), onError: function(e14) {
              throw e14;
            } });
          case 21:
            this.setStatus({ status: "ready" }), e13.next = 29;
            break;
          case 24:
            if (e13.prev = 24, e13.t0 = e13.catch(4), !d2 && "AbortError" !== e13.t0.name) {
              e13.next = 28;
              break;
            }
            return e13.abrupt("return", (d2 = true, this.setStatus({ status: "ready" }), null));
          case 28:
            h2 = true, e13.t0 instanceof TypeError && (e13.t0.message.toLowerCase().includes("fetch") || e13.t0.message.toLowerCase().includes("network")) && (p2 = true), this.onError && e13.t0 instanceof Error && this.onError(e13.t0), this.setStatus({ status: "error", error: e13.t0 });
          case 29:
            e13.prev = 29;
            try {
              null == (s2 = this.onFinish) || s2.call(this, { message: this.activeResponse.state.message, messages: this.state.messages, isAbort: d2, isDisconnect: p2, isError: h2 });
            } catch (e14) {
              console.error(e14);
            }
            return this.activeResponse = void 0, e13.finish(29);
          case 33:
            if (e13.t1 = null == (c2 = this.sendAutomaticallyWhen) ? void 0 : c2.call(this, { messages: this.state.messages }), !e13.t1) {
              e13.next = 37;
              break;
            }
            return e13.next = 37, this.makeRequest({ trigger: "submit-message", messageId: null == (l2 = this.lastMessage) ? void 0 : l2.id, metadata: u2, headers: a2, body: i2 });
          case 37:
          case "end":
            return e13.stop();
        }
      }), e12, this, [[4, 24, 29, 33]]);
    }))), function(t2) {
      return e11.apply(this, arguments);
    }) }]);
    var e11;
  })();
  function wf(e11) {
    var t2 = e11.messages, n2 = t2[t2.length - 1];
    if (!n2) return false;
    if ("assistant" !== n2.role) return false;
    var r2 = n2.parts.reduce((function(e12, t3, n3) {
      return "step-start" === t3.type ? n3 : e12;
    }), -1), u2 = n2.parts.slice(r2 + 1).filter(Xl);
    return u2.length > 0 && u2.every((function(e12) {
      return "output-available" === e12.state;
    }));
  }
  var xf;
  var Sf;
  var Bf = ko({ type: No("text"), text: Zi(), state: Po(["streaming", "done"]).optional(), providerMetadata: Nl.optional() });
  var Of = ko({ type: No("reasoning"), text: Zi(), state: Po(["streaming", "done"]).optional(), providerMetadata: Nl.optional() });
  var If = ko({ type: No("source-url"), sourceId: Zi(), url: Zi(), title: Zi().optional(), providerMetadata: Nl.optional() });
  var Tf = ko({ type: No("source-document"), sourceId: Zi(), mediaType: Zi(), title: Zi(), filename: Zi().optional(), providerMetadata: Nl.optional() });
  var Pf = ko({ type: No("file"), mediaType: Zi(), filename: Zi().optional(), url: Zi(), providerMetadata: Nl.optional() });
  var jf = ko({ type: No("step-start") });
  var Nf = ko({ type: Zi().startsWith("data-"), id: Zi().optional(), data: yo() });
  var zf = [ko({ type: No("dynamic-tool"), toolName: Zi(), toolCallId: Zi(), state: No("input-streaming"), input: yo().optional(), output: Fo().optional(), errorText: Fo().optional() }), ko({ type: No("dynamic-tool"), toolName: Zi(), toolCallId: Zi(), state: No("input-available"), input: yo(), output: Fo().optional(), errorText: Fo().optional(), callProviderMetadata: Nl.optional() }), ko({ type: No("dynamic-tool"), toolName: Zi(), toolCallId: Zi(), state: No("output-available"), input: yo(), output: yo(), errorText: Fo().optional(), callProviderMetadata: Nl.optional(), preliminary: ho().optional() }), ko({ type: No("dynamic-tool"), toolName: Zi(), toolCallId: Zi(), state: No("output-error"), input: yo(), output: Fo().optional(), errorText: Zi(), callProviderMetadata: Nl.optional() })];
  var Rf = [ko({ type: Zi().startsWith("tool-"), toolCallId: Zi(), state: No("input-streaming"), input: yo().optional(), output: Fo().optional(), errorText: Fo().optional() }), ko({ type: Zi().startsWith("tool-"), toolCallId: Zi(), state: No("input-available"), input: yo(), output: Fo().optional(), errorText: Fo().optional(), callProviderMetadata: Nl.optional() }), ko({ type: Zi().startsWith("tool-"), toolCallId: Zi(), state: No("output-available"), input: yo(), output: yo(), errorText: Fo().optional(), callProviderMetadata: Nl.optional(), preliminary: ho().optional() }), ko({ type: Zi().startsWith("tool-"), toolCallId: Zi(), state: No("output-error"), input: yo(), output: Fo().optional(), errorText: Zi(), callProviderMetadata: Nl.optional() })];
  ko({ id: Zi(), role: Po(["system", "user", "assistant"]), metadata: yo().optional(), parts: bo(xo([Bf, Of, If, Tf, Pf, jf, Nf].concat(zf, Rf))) });
  var Mf;
  var Zf;
  var Lf;
  var $f;
  var qf;
  var Uf;
  var Vf;
  var Hf;
  var Wf;
  var Kf;
  var Jf = (function(e11) {
    return e11 && e11.__esModule && Object.prototype.hasOwnProperty.call(e11, "default") ? e11.default : e11;
  })((Sf || (Sf = 1, xf = function(e11, t2) {
    if ("function" != typeof e11) throw new TypeError("Expected the first argument to be a `function`, got `".concat(dn(e11), "`."));
    var n2, r2 = 0;
    return function() {
      for (var u2 = this, a2 = arguments.length, i2 = new Array(a2), o2 = 0; o2 < a2; o2++) i2[o2] = arguments[o2];
      clearTimeout(n2);
      var s2 = Date.now(), c2 = t2 - (s2 - r2);
      c2 <= 0 ? (r2 = s2, e11.apply(this, i2)) : n2 = setTimeout((function() {
        r2 = Date.now(), e11.apply(u2, i2);
      }), c2);
    };
  }), xf));
  var Gf = function(e11, t2, n2) {
    if (!t2.has(e11)) throw TypeError("Cannot " + n2);
  };
  var Qf = function(e11, t2, n2) {
    return Gf(e11, t2, "read from private field"), n2 ? n2.call(e11) : t2.get(e11);
  };
  var Yf = function(e11, t2, n2) {
    if (t2.has(e11)) throw TypeError("Cannot add the same private member more than once");
    t2 instanceof WeakSet ? t2.add(e11) : t2.set(e11, n2);
  };
  var Xf = function(e11, t2, n2, r2) {
    return Gf(e11, t2, "write to private field"), t2.set(e11, n2), n2;
  };
  var ed = (function() {
    return o((function e11() {
      var t2 = this, n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      a(this, e11), Yf(this, Mf, void 0), Yf(this, Zf, "ready"), Yf(this, Lf, void 0), Yf(this, $f, /* @__PURE__ */ new Set()), Yf(this, qf, /* @__PURE__ */ new Set()), Yf(this, Uf, /* @__PURE__ */ new Set()), this.pushMessage = function(e12) {
        Xf(t2, Mf, Qf(t2, Mf).concat(e12)), Qf(t2, Vf).call(t2);
      }, this.popMessage = function() {
        Xf(t2, Mf, Qf(t2, Mf).slice(0, -1)), Qf(t2, Vf).call(t2);
      }, this.replaceMessage = function(e12, n3) {
        Xf(t2, Mf, [].concat(F(Qf(t2, Mf).slice(0, e12)), [t2.snapshot(n3)], F(Qf(t2, Mf).slice(e12 + 1)))), Qf(t2, Vf).call(t2);
      }, this.snapshot = function(e12) {
        return structuredClone(e12);
      }, this["~registerMessagesCallback"] = function(e12, n3) {
        var r2 = n3 ? (function(e13, t3) {
          return null != t3 ? Jf(e13, t3) : e13;
        })(e12, n3) : e12;
        return Qf(t2, $f).add(r2), function() {
          Qf(t2, $f).delete(r2);
        };
      }, this["~registerStatusCallback"] = function(e12) {
        return Qf(t2, qf).add(e12), function() {
          Qf(t2, qf).delete(e12);
        };
      }, this["~registerErrorCallback"] = function(e12) {
        return Qf(t2, Uf).add(e12), function() {
          Qf(t2, Uf).delete(e12);
        };
      }, Yf(this, Vf, (function() {
        Qf(t2, $f).forEach((function(e12) {
          return e12();
        }));
      })), Yf(this, Hf, (function() {
        Qf(t2, qf).forEach((function(e12) {
          return e12();
        }));
      })), Yf(this, Wf, (function() {
        Qf(t2, Uf).forEach((function(e12) {
          return e12();
        }));
      })), Xf(this, Mf, n2);
    }), [{ key: "status", get: function() {
      return Qf(this, Zf);
    }, set: function(e11) {
      Xf(this, Zf, e11), Qf(this, Hf).call(this);
    } }, { key: "error", get: function() {
      return Qf(this, Lf);
    }, set: function(e11) {
      Xf(this, Lf, e11), Qf(this, Wf).call(this);
    } }, { key: "messages", get: function() {
      return Qf(this, Mf);
    }, set: function(e11) {
      Xf(this, Mf, F(e11)), Qf(this, Vf).call(this);
    } }]);
  })();
  Mf = /* @__PURE__ */ new WeakMap(), Zf = /* @__PURE__ */ new WeakMap(), Lf = /* @__PURE__ */ new WeakMap(), $f = /* @__PURE__ */ new WeakMap(), qf = /* @__PURE__ */ new WeakMap(), Uf = /* @__PURE__ */ new WeakMap(), Vf = /* @__PURE__ */ new WeakMap(), Hf = /* @__PURE__ */ new WeakMap(), Wf = /* @__PURE__ */ new WeakMap();
  var td = (function() {
    function e11(n2) {
      var r2, i2 = n2.messages, o2 = m(n2, Lt);
      a(this, e11);
      var s2 = new ed(i2);
      return r2 = u(this, e11, [v(v({}, o2), {}, { state: s2 })]), Yf(t(r2), Kf, void 0), r2["~registerMessagesCallback"] = function(e12, n3) {
        return Qf(t(r2), Kf)["~registerMessagesCallback"](e12, n3);
      }, r2["~registerStatusCallback"] = function(e12) {
        return Qf(t(r2), Kf)["~registerStatusCallback"](e12);
      }, r2["~registerErrorCallback"] = function(e12) {
        return Qf(t(r2), Kf)["~registerErrorCallback"](e12);
      }, Xf(t(r2), Kf, s2), r2;
    }
    return d(e11, Af), o(e11);
  })();
  function nd(e11, t2) {
    var n2 = void 0;
    return function() {
      for (var r2 = arguments.length, u2 = new Array(r2), a2 = 0; a2 < r2; a2++) u2[a2] = arguments[a2];
      n2 && clearTimeout(n2), n2 = setTimeout((function() {
        return e11.apply(void 0, u2);
      }), t2);
    };
  }
  function rd(e11) {
    return e11.reduce((function(e12, t2) {
      return e12.concat(t2);
    }), []);
  }
  Kf = /* @__PURE__ */ new WeakMap();
  var ud = 0;
  function ad(e11) {
    return 0 === e11.collections.length ? 0 : e11.collections.reduce((function(e12, t2) {
      return e12 + t2.items.length;
    }), 0);
  }
  function id(e11) {
    return e11 !== Object(e11);
  }
  function od(e11, t2) {
    if (e11 === t2) return true;
    if (id(e11) || id(t2) || "function" == typeof e11 || "function" == typeof t2) return e11 === t2;
    if (Object.keys(e11).length !== Object.keys(t2).length) return false;
    for (var n2 = 0, r2 = Object.keys(e11); n2 < r2.length; n2++) {
      var u2 = r2[n2];
      if (!(u2 in t2)) return false;
      if (!od(e11[u2], t2[u2])) return false;
    }
    return true;
  }
  var sd = function() {
  };
  var cd = [{ segment: "autocomplete-core", version: "1.19.2" }];
  function ld(e11) {
    var t2 = e11.item, n2 = e11.items, r2 = void 0 === n2 ? [] : n2;
    return { index: t2.__autocomplete_indexName, items: [t2], positions: [1 + r2.findIndex((function(e12) {
      return e12.objectID === t2.objectID;
    }))], queryID: t2.__autocomplete_queryID, algoliaSource: ["autocomplete"] };
  }
  function fd(e11, t2) {
    (null == t2 || t2 > e11.length) && (t2 = e11.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e11[n2];
    return r2;
  }
  var dd = ["items"];
  var pd = ["items"];
  function hd(e11) {
    return hd = "function" == typeof Symbol && "symbol" == b(Symbol.iterator) ? function(e12) {
      return b(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : b(e12);
    }, hd(e11);
  }
  function vd(e11) {
    return (function(e12) {
      if (Array.isArray(e12)) return md(e12);
    })(e11) || (function(e12) {
      if ("undefined" != typeof Symbol && null != e12[Symbol.iterator] || null != e12["@@iterator"]) return Array.from(e12);
    })(e11) || (function(e12, t2) {
      if (e12) {
        if ("string" == typeof e12) return md(e12, t2);
        var n2 = Object.prototype.toString.call(e12).slice(8, -1);
        return "Object" === n2 && e12.constructor && (n2 = e12.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e12) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? md(e12, t2) : void 0;
      }
    })(e11) || (function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function md(e11, t2) {
    (null == t2 || t2 > e11.length) && (t2 = e11.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e11[n2];
    return r2;
  }
  function Dd(e11, t2) {
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
  function yd(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter((function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      }))), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function gd(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? yd(Object(n2), true).forEach((function(t3) {
        Fd(e11, t3, n2[t3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : yd(Object(n2)).forEach((function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      }));
    }
    return e11;
  }
  function Fd(e11, t2, n2) {
    return (t2 = (function(e12) {
      var t3 = (function(e13) {
        if ("object" !== hd(e13) || null === e13) return e13;
        var t4 = e13[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e13, "string");
          if ("object" !== hd(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e13);
      })(e12);
      return "symbol" === hd(t3) ? t3 : String(t3);
    })(t2)) in e11 ? Object.defineProperty(e11, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e11[t2] = n2, e11;
  }
  function Ed(e11) {
    return e11.map((function(e12) {
      var t2 = e12.items, n2 = Dd(e12, dd);
      return gd(gd({}, n2), {}, { objectIDs: (null == t2 ? void 0 : t2.map((function(e13) {
        return e13.objectID;
      }))) || n2.objectIDs });
    }));
  }
  function bd(e11) {
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
          if ("string" == typeof e13) return fd(e13, t4);
          var n3 = Object.prototype.toString.call(e13).slice(8, -1);
          return "Object" === n3 && e13.constructor && (n3 = e13.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(e13) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? fd(e13, t4) : void 0;
        }
      })(e12, t3) || (function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      })();
    })((e11.version || "").split(".").map(Number), 2), n2 = t2[0], r2 = t2[1], n2 >= 3 || 2 === n2 && r2 >= 4 || 1 === n2 && r2 >= 10);
    function a2(t3, n3, r3) {
      if (u2 && void 0 !== r3) {
        var a3 = r3[0].__autocomplete_algoliaCredentials, i2 = { "X-Algolia-Application-Id": a3.appId, "X-Algolia-API-Key": a3.apiKey };
        e11.apply(void 0, [t3].concat(vd(n3), [{ headers: i2 }]));
      } else e11.apply(void 0, [t3].concat(vd(n3)));
    }
    return { init: function(t3, n3) {
      e11("init", { appId: t3, apiKey: n3 });
    }, setAuthenticatedUserToken: function(t3) {
      e11("setAuthenticatedUserToken", t3);
    }, setUserToken: function(t3) {
      e11("setUserToken", t3);
    }, clickedObjectIDsAfterSearch: function() {
      for (var e12 = arguments.length, t3 = new Array(e12), n3 = 0; n3 < e12; n3++) t3[n3] = arguments[n3];
      t3.length > 0 && a2("clickedObjectIDsAfterSearch", Ed(t3), t3[0].items);
    }, clickedObjectIDs: function() {
      for (var e12 = arguments.length, t3 = new Array(e12), n3 = 0; n3 < e12; n3++) t3[n3] = arguments[n3];
      t3.length > 0 && a2("clickedObjectIDs", Ed(t3), t3[0].items);
    }, clickedFilters: function() {
      for (var t3 = arguments.length, n3 = new Array(t3), r3 = 0; r3 < t3; r3++) n3[r3] = arguments[r3];
      n3.length > 0 && e11.apply(void 0, ["clickedFilters"].concat(n3));
    }, convertedObjectIDsAfterSearch: function() {
      for (var e12 = arguments.length, t3 = new Array(e12), n3 = 0; n3 < e12; n3++) t3[n3] = arguments[n3];
      t3.length > 0 && a2("convertedObjectIDsAfterSearch", Ed(t3), t3[0].items);
    }, convertedObjectIDs: function() {
      for (var e12 = arguments.length, t3 = new Array(e12), n3 = 0; n3 < e12; n3++) t3[n3] = arguments[n3];
      t3.length > 0 && a2("convertedObjectIDs", Ed(t3), t3[0].items);
    }, convertedFilters: function() {
      for (var t3 = arguments.length, n3 = new Array(t3), r3 = 0; r3 < t3; r3++) n3[r3] = arguments[r3];
      n3.length > 0 && e11.apply(void 0, ["convertedFilters"].concat(n3));
    }, viewedObjectIDs: function() {
      for (var e12 = arguments.length, t3 = new Array(e12), n3 = 0; n3 < e12; n3++) t3[n3] = arguments[n3];
      t3.length > 0 && t3.reduce((function(e13, t4) {
        var n4 = t4.items, r3 = Dd(t4, pd);
        return [].concat(vd(e13), vd((function(e14) {
          for (var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20, n5 = [], r4 = 0; r4 < e14.objectIDs.length; r4 += t5) n5.push(gd(gd({}, e14), {}, { objectIDs: e14.objectIDs.slice(r4, r4 + t5) }));
          return n5;
        })(gd(gd({}, r3), {}, { objectIDs: (null == n4 ? void 0 : n4.map((function(e14) {
          return e14.objectID;
        }))) || r3.objectIDs })).map((function(e14) {
          return { items: n4, payload: e14 };
        }))));
      }), []).forEach((function(e13) {
        var t4 = e13.items;
        return a2("viewedObjectIDs", [e13.payload], t4);
      }));
    }, viewedFilters: function() {
      for (var t3 = arguments.length, n3 = new Array(t3), r3 = 0; r3 < t3; r3++) n3[r3] = arguments[r3];
      n3.length > 0 && e11.apply(void 0, ["viewedFilters"].concat(n3));
    } };
  }
  function _d(e11) {
    var t2 = e11.items.reduce((function(e12, t3) {
      var n2;
      return e12[t3.__autocomplete_indexName] = (null !== (n2 = e12[t3.__autocomplete_indexName]) && void 0 !== n2 ? n2 : []).concat(t3), e12;
    }), {});
    return Object.keys(t2).map((function(e12) {
      return { index: e12, items: t2[e12], algoliaSource: ["autocomplete"] };
    }));
  }
  function kd(e11) {
    return e11.objectID && e11.__autocomplete_indexName && e11.__autocomplete_queryID;
  }
  function Cd(e11) {
    return Cd = "function" == typeof Symbol && "symbol" == b(Symbol.iterator) ? function(e12) {
      return b(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : b(e12);
    }, Cd(e11);
  }
  function Ad(e11) {
    return (function(e12) {
      if (Array.isArray(e12)) return wd(e12);
    })(e11) || (function(e12) {
      if ("undefined" != typeof Symbol && null != e12[Symbol.iterator] || null != e12["@@iterator"]) return Array.from(e12);
    })(e11) || (function(e12, t2) {
      if (e12) {
        if ("string" == typeof e12) return wd(e12, t2);
        var n2 = Object.prototype.toString.call(e12).slice(8, -1);
        return "Object" === n2 && e12.constructor && (n2 = e12.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e12) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? wd(e12, t2) : void 0;
      }
    })(e11) || (function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function wd(e11, t2) {
    (null == t2 || t2 > e11.length) && (t2 = e11.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e11[n2];
    return r2;
  }
  function xd(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter((function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      }))), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Sd(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? xd(Object(n2), true).forEach((function(t3) {
        Bd(e11, t3, n2[t3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : xd(Object(n2)).forEach((function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      }));
    }
    return e11;
  }
  function Bd(e11, t2, n2) {
    return (t2 = (function(e12) {
      var t3 = (function(e13) {
        if ("object" !== Cd(e13) || null === e13) return e13;
        var t4 = e13[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e13, "string");
          if ("object" !== Cd(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e13);
      })(e12);
      return "symbol" === Cd(t3) ? t3 : String(t3);
    })(t2)) in e11 ? Object.defineProperty(e11, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e11[t2] = n2, e11;
  }
  var Od = "2.15.0";
  var Id = "https://cdn.jsdelivr.net/npm/search-insights@".concat(Od, "/dist/search-insights.min.js");
  var Td = nd((function(e11) {
    var t2 = e11.onItemsChange, n2 = e11.items, r2 = e11.insights, u2 = e11.state;
    t2({ insights: r2, insightsEvents: _d({ items: n2 }).map((function(e12) {
      return Sd({ eventName: "Items Viewed" }, e12);
    })), state: u2 });
  }), 400);
  function Pd(e11) {
    var t2 = (function(e12) {
      return Sd({ onItemsChange: function(e13) {
        var t3 = e13.insights, n3 = e13.insightsEvents, r3 = e13.state;
        t3.viewedObjectIDs.apply(t3, Ad(n3.map((function(e14) {
          return Sd(Sd({}, e14), {}, { algoliaSource: jd(e14.algoliaSource, r3.context) });
        }))));
      }, onSelect: function(e13) {
        var t3 = e13.insights, n3 = e13.insightsEvents, r3 = e13.state;
        t3.clickedObjectIDsAfterSearch.apply(t3, Ad(n3.map((function(e14) {
          return Sd(Sd({}, e14), {}, { algoliaSource: jd(e14.algoliaSource, r3.context) });
        }))));
      }, onActive: sd, __autocomplete_clickAnalytics: true }, e12);
    })(e11), n2 = t2.insightsClient, r2 = t2.insightsInitParams, u2 = t2.onItemsChange, a2 = t2.onSelect, i2 = t2.onActive, o2 = t2.__autocomplete_clickAnalytics, s2 = n2;
    if (n2 || "undefined" != typeof window && (function(e12) {
      var t3 = e12.window, n3 = t3.AlgoliaAnalyticsObject || "aa";
      "string" == typeof n3 && (s2 = t3[n3]), s2 || (t3.AlgoliaAnalyticsObject = n3, t3[n3] || (t3[n3] = function() {
        t3[n3].queue || (t3[n3].queue = []);
        for (var e13 = arguments.length, r3 = new Array(e13), u3 = 0; u3 < e13; u3++) r3[u3] = arguments[u3];
        t3[n3].queue.push(r3);
      }), t3[n3].version = Od, s2 = t3[n3], (function(e13) {
        var t4 = "[Autocomplete]: Could not load search-insights.js. Please load it manually following https://alg.li/insights-autocomplete";
        try {
          var n4 = e13.document.createElement("script");
          n4.async = true, n4.src = Id, n4.onerror = function() {
            console.error(t4);
          }, document.body.appendChild(n4);
        } catch (e14) {
          console.error(t4);
        }
      })(t3));
    })({ window }), !s2) return {};
    r2 && s2("init", Sd({ partial: true }, r2));
    var c2 = bd(s2), l2 = { current: [] }, f2 = nd((function(e12) {
      var t3 = e12.state;
      if (t3.isOpen) {
        var n3 = t3.collections.reduce((function(e13, t4) {
          return [].concat(Ad(e13), Ad(t4.items));
        }), []).filter(kd);
        od(l2.current.map((function(e13) {
          return e13.objectID;
        })), n3.map((function(e13) {
          return e13.objectID;
        }))) || (l2.current = n3, n3.length > 0 && Td({ onItemsChange: u2, items: n3, insights: c2, state: t3 }));
      }
    }), 0);
    return { name: "aa.algoliaInsightsPlugin", subscribe: function(e12) {
      var t3 = e12.setContext, n3 = e12.onSelect, r3 = e12.onActive;
      function u3(e13) {
        t3({ algoliaInsightsPlugin: { __algoliaSearchParameters: Sd(Sd({}, o2 ? { clickAnalytics: true } : {}), e13 ? { userToken: Nd(e13) } : {}), insights: c2 } });
      }
      s2("addAlgoliaAgent", "insights-plugin"), u3(), s2("onUserTokenChange", (function(e13) {
        u3(e13);
      })), s2("getUserToken", null, (function(e13, t4) {
        u3(t4);
      })), n3((function(e13) {
        var t4 = e13.item, n4 = e13.state, r4 = e13.event, u4 = e13.source;
        kd(t4) && a2({ state: n4, event: r4, insights: c2, item: t4, insightsEvents: [Sd({ eventName: "Item Selected" }, ld({ item: t4, items: u4.getItems().filter(kd) }))] });
      })), r3((function(e13) {
        var t4 = e13.item, n4 = e13.source, r4 = e13.state, u4 = e13.event;
        kd(t4) && i2({ state: r4, event: u4, insights: c2, item: t4, insightsEvents: [Sd({ eventName: "Item Active" }, ld({ item: t4, items: n4.getItems().filter(kd) }))] });
      }));
    }, onStateChange: function(e12) {
      var t3 = e12.state;
      f2({ state: t3 });
    }, __autocomplete_pluginOptions: e11 };
  }
  function jd() {
    var e11, t2 = arguments.length > 1 ? arguments[1] : void 0;
    return [].concat(Ad(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []), ["autocomplete-internal"], Ad(null !== (e11 = t2.algoliaInsightsPlugin) && void 0 !== e11 && e11.__automaticInsights ? ["autocomplete-automatic"] : []));
  }
  function Nd(e11) {
    return "number" == typeof e11 ? e11.toString() : e11;
  }
  function zd(e11, t2) {
    var n2 = t2;
    return { then: function(t3, r2) {
      return zd(e11.then(Md(t3, n2, e11), Md(r2, n2, e11)), n2);
    }, catch: function(t3) {
      return zd(e11.catch(Md(t3, n2, e11)), n2);
    }, finally: function(t3) {
      return t3 && n2.onCancelList.push(t3), zd(e11.finally(Md(t3 && function() {
        return n2.onCancelList = [], t3();
      }, n2, e11)), n2);
    }, cancel: function() {
      n2.isCanceled = true;
      var e12 = n2.onCancelList;
      n2.onCancelList = [], e12.forEach((function(e13) {
        e13();
      }));
    }, isCanceled: function() {
      return true === n2.isCanceled;
    } };
  }
  function Rd(e11) {
    return zd(e11, { isCanceled: false, onCancelList: [] });
  }
  function Md(e11, t2, n2) {
    return e11 ? function(n3) {
      return t2.isCanceled ? n3 : e11(n3);
    } : n2;
  }
  var Zd;
  var Ld = true;
  function $d() {
    var e11 = [];
    return { add: function(t2) {
      return e11.push(t2), t2.finally((function() {
        e11 = e11.filter((function(e12) {
          return e12 !== t2;
        }));
      }));
    }, cancelAll: function() {
      e11.forEach((function(e12) {
        return e12.cancel();
      }));
    }, isEmpty: function() {
      return 0 === e11.length;
    }, wait: function(t2) {
      return Ld ? (Ld = false, (Zd = t2 ? Promise.race([Promise.all(e11), new Promise((function(e12) {
        return setTimeout(e12, t2);
      }))]) : Promise.all(e11)).then((function() {
        Ld = true;
      }))) : Zd;
    } };
  }
  function qd(e11, t2, n2, r2) {
    if (!n2) return null;
    if (e11 < 0 && (null === t2 || null !== r2 && 0 === t2)) return n2 + e11;
    var u2 = (null === t2 ? -1 : t2) + e11;
    return u2 <= -1 || u2 >= n2 ? null === r2 ? null : 0 : u2;
  }
  function Ud(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter((function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      }))), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Vd(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Ud(Object(n2), true).forEach((function(t3) {
        Hd(e11, t3, n2[t3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : Ud(Object(n2)).forEach((function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      }));
    }
    return e11;
  }
  function Hd(e11, t2, n2) {
    return (t2 = (function(e12) {
      var t3 = (function(e13) {
        if ("object" !== Wd(e13) || null === e13) return e13;
        var t4 = e13[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e13, "string");
          if ("object" !== Wd(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e13);
      })(e12);
      return "symbol" === Wd(t3) ? t3 : String(t3);
    })(t2)) in e11 ? Object.defineProperty(e11, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e11[t2] = n2, e11;
  }
  function Wd(e11) {
    return Wd = "function" == typeof Symbol && "symbol" == b(Symbol.iterator) ? function(e12) {
      return b(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : b(e12);
    }, Wd(e11);
  }
  function Kd(e11, t2) {
    (null == t2 || t2 > e11.length) && (t2 = e11.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e11[n2];
    return r2;
  }
  var Jd = function(e11, t2) {
    var n2, r2 = false, u2 = [], a2 = (function(e12, t3) {
      var n3 = "undefined" != typeof Symbol && e12[Symbol.iterator] || e12["@@iterator"];
      if (!n3) {
        if (Array.isArray(e12) || (n3 = (function(e13, t4) {
          if (e13) {
            if ("string" == typeof e13) return Kd(e13, t4);
            var n4 = Object.prototype.toString.call(e13).slice(8, -1);
            return "Object" === n4 && e13.constructor && (n4 = e13.constructor.name), "Map" === n4 || "Set" === n4 ? Array.from(e13) : "Arguments" === n4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4) ? Kd(e13, t4) : void 0;
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
  function Gd(e11) {
    var t2 = (function(e12) {
      var t3 = e12.collections.map((function(e13) {
        return e13.items.length;
      })).reduce((function(e13, t4, n3) {
        var r3 = (e13[n3 - 1] || 0) + t4;
        return e13.push(r3), e13;
      }), []).reduce((function(t4, n3) {
        return n3 <= e12.activeItemId ? t4 + 1 : t4;
      }), 0);
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
  function Qd(e11, t2, n2) {
    return [e11, null == n2 ? void 0 : n2.sourceId, t2].filter(Boolean).join("-").replace(/\s/g, "");
  }
  var Yd = /((gt|sm)-|galaxy nexus)|samsung[- ]|samsungbrowser/i;
  function Xd(e11) {
    return e11.nativeEvent || e11;
  }
  function ep(e11) {
    return ep = "function" == typeof Symbol && "symbol" == b(Symbol.iterator) ? function(e12) {
      return b(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : b(e12);
    }, ep(e11);
  }
  function tp(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter((function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      }))), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function np(e11, t2, n2) {
    return (t2 = (function(e12) {
      var t3 = (function(e13) {
        if ("object" !== ep(e13) || null === e13) return e13;
        var t4 = e13[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e13, "string");
          if ("object" !== ep(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e13);
      })(e12);
      return "symbol" === ep(t3) ? t3 : String(t3);
    })(t2)) in e11 ? Object.defineProperty(e11, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e11[t2] = n2, e11;
  }
  function rp(e11) {
    return rp = "function" == typeof Symbol && "symbol" == b(Symbol.iterator) ? function(e12) {
      return b(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : b(e12);
    }, rp(e11);
  }
  function up(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter((function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      }))), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function ap(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? up(Object(n2), true).forEach((function(t3) {
        ip(e11, t3, n2[t3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : up(Object(n2)).forEach((function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      }));
    }
    return e11;
  }
  function ip(e11, t2, n2) {
    return (t2 = (function(e12) {
      var t3 = (function(e13) {
        if ("object" !== rp(e13) || null === e13) return e13;
        var t4 = e13[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e13, "string");
          if ("object" !== rp(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e13);
      })(e12);
      return "symbol" === rp(t3) ? t3 : String(t3);
    })(t2)) in e11 ? Object.defineProperty(e11, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e11[t2] = n2, e11;
  }
  function op(e11) {
    return op = "function" == typeof Symbol && "symbol" == b(Symbol.iterator) ? function(e12) {
      return b(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : b(e12);
    }, op(e11);
  }
  function sp(e11, t2) {
    (null == t2 || t2 > e11.length) && (t2 = e11.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e11[n2];
    return r2;
  }
  function cp(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter((function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      }))), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function lp(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? cp(Object(n2), true).forEach((function(t3) {
        fp(e11, t3, n2[t3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : cp(Object(n2)).forEach((function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      }));
    }
    return e11;
  }
  function fp(e11, t2, n2) {
    return (t2 = (function(e12) {
      var t3 = (function(e13) {
        if ("object" !== op(e13) || null === e13) return e13;
        var t4 = e13[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e13, "string");
          if ("object" !== op(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e13);
      })(e12);
      return "symbol" === op(t3) ? t3 : String(t3);
    })(t2)) in e11 ? Object.defineProperty(e11, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e11[t2] = n2, e11;
  }
  function dp(e11, t2) {
    var n2, r2 = "undefined" != typeof window ? window : {}, u2 = e11.plugins || [];
    return lp(lp({ debug: false, openOnFocus: false, enterKeyHint: void 0, ignoreCompositionEvents: false, placeholder: "", autoFocus: false, defaultActiveItemId: null, stallThreshold: 300, insights: void 0, environment: r2, shouldPanelOpen: function(e12) {
      return ad(e12.state) > 0;
    }, reshape: function(e12) {
      return e12.sources;
    } }, e11), {}, { id: null !== (n2 = e11.id) && void 0 !== n2 ? n2 : "autocomplete-".concat(ud++), plugins: u2, initialState: lp({ activeItemId: null, query: "", completion: null, collections: [], isOpen: false, status: "idle", context: {} }, e11.initialState), onStateChange: function(t3) {
      var n3;
      null === (n3 = e11.onStateChange) || void 0 === n3 || n3.call(e11, t3), u2.forEach((function(e12) {
        var n4;
        return null === (n4 = e12.onStateChange) || void 0 === n4 ? void 0 : n4.call(e12, t3);
      }));
    }, onSubmit: function(t3) {
      var n3;
      null === (n3 = e11.onSubmit) || void 0 === n3 || n3.call(e11, t3), u2.forEach((function(e12) {
        var n4;
        return null === (n4 = e12.onSubmit) || void 0 === n4 ? void 0 : n4.call(e12, t3);
      }));
    }, onReset: function(t3) {
      var n3;
      null === (n3 = e11.onReset) || void 0 === n3 || n3.call(e11, t3), u2.forEach((function(e12) {
        var n4;
        return null === (n4 = e12.onReset) || void 0 === n4 ? void 0 : n4.call(e12, t3);
      }));
    }, getSources: function(n3) {
      return Promise.all([].concat((function(e12) {
        return (function(e13) {
          if (Array.isArray(e13)) return sp(e13);
        })(e12) || (function(e13) {
          if ("undefined" != typeof Symbol && null != e13[Symbol.iterator] || null != e13["@@iterator"]) return Array.from(e13);
        })(e12) || (function(e13, t3) {
          if (e13) {
            if ("string" == typeof e13) return sp(e13, t3);
            var n4 = Object.prototype.toString.call(e13).slice(8, -1);
            return "Object" === n4 && e13.constructor && (n4 = e13.constructor.name), "Map" === n4 || "Set" === n4 ? Array.from(e13) : "Arguments" === n4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4) ? sp(e13, t3) : void 0;
          }
        })(e12) || (function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        })();
      })(u2.map((function(e12) {
        return e12.getSources;
      }))), [e11.getSources]).filter(Boolean).map((function(e12) {
        return (function(e13, t3) {
          var n4 = [];
          return Promise.resolve(e13(t3)).then((function(e14) {
            return Promise.all(e14.filter((function(e15) {
              return Boolean(e15);
            })).map((function(e15) {
              if (e15.sourceId, n4.includes(e15.sourceId)) throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(e15.sourceId), " is not unique."));
              n4.push(e15.sourceId);
              var t4 = { getItemInputValue: function(e16) {
                return e16.state.query;
              }, getItemUrl: function() {
              }, onSelect: function(e16) {
                (0, e16.setIsOpen)(false);
              }, onActive: sd, onResolve: sd };
              Object.keys(t4).forEach((function(e16) {
                t4[e16].__default = true;
              }));
              var r3 = Vd(Vd({}, t4), e15);
              return Promise.resolve(r3);
            })));
          }));
        })(e12, n3);
      }))).then((function(e12) {
        return rd(e12);
      })).then((function(e12) {
        return e12.map((function(e13) {
          return lp(lp({}, e13), {}, { onSelect: function(n4) {
            e13.onSelect(n4), t2.forEach((function(e14) {
              var t3;
              return null === (t3 = e14.onSelect) || void 0 === t3 ? void 0 : t3.call(e14, n4);
            }));
          }, onActive: function(n4) {
            e13.onActive(n4), t2.forEach((function(e14) {
              var t3;
              return null === (t3 = e14.onActive) || void 0 === t3 ? void 0 : t3.call(e14, n4);
            }));
          }, onResolve: function(n4) {
            e13.onResolve(n4), t2.forEach((function(e14) {
              var t3;
              return null === (t3 = e14.onResolve) || void 0 === t3 ? void 0 : t3.call(e14, n4);
            }));
          } });
        }));
      }));
    }, navigator: lp({ navigate: function(e12) {
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
  function pp(e11) {
    return pp = "function" == typeof Symbol && "symbol" == b(Symbol.iterator) ? function(e12) {
      return b(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : b(e12);
    }, pp(e11);
  }
  function hp(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter((function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      }))), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function vp(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? hp(Object(n2), true).forEach((function(t3) {
        mp(e11, t3, n2[t3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : hp(Object(n2)).forEach((function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      }));
    }
    return e11;
  }
  function mp(e11, t2, n2) {
    return (t2 = (function(e12) {
      var t3 = (function(e13) {
        if ("object" !== pp(e13) || null === e13) return e13;
        var t4 = e13[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e13, "string");
          if ("object" !== pp(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e13);
      })(e12);
      return "symbol" === pp(t3) ? t3 : String(t3);
    })(t2)) in e11 ? Object.defineProperty(e11, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e11[t2] = n2, e11;
  }
  function Dp(e11) {
    return Dp = "function" == typeof Symbol && "symbol" == b(Symbol.iterator) ? function(e12) {
      return b(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : b(e12);
    }, Dp(e11);
  }
  function yp(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter((function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      }))), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function gp(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? yp(Object(n2), true).forEach((function(t3) {
        Fp(e11, t3, n2[t3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : yp(Object(n2)).forEach((function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      }));
    }
    return e11;
  }
  function Fp(e11, t2, n2) {
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
  function Ep(e11) {
    return (function(e12) {
      if (Array.isArray(e12)) return bp(e12);
    })(e11) || (function(e12) {
      if ("undefined" != typeof Symbol && null != e12[Symbol.iterator] || null != e12["@@iterator"]) return Array.from(e12);
    })(e11) || (function(e12, t2) {
      if (e12) {
        if ("string" == typeof e12) return bp(e12, t2);
        var n2 = Object.prototype.toString.call(e12).slice(8, -1);
        return "Object" === n2 && e12.constructor && (n2 = e12.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e12) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? bp(e12, t2) : void 0;
      }
    })(e11) || (function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function bp(e11, t2) {
    (null == t2 || t2 > e11.length) && (t2 = e11.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e11[n2];
    return r2;
  }
  function _p(e11) {
    return Boolean(e11.execute);
  }
  function kp(e11) {
    var t2 = e11.reduce((function(e12, t3) {
      if (!_p(t3)) return e12.push(t3), e12;
      var n2 = t3.searchClient, r2 = t3.execute, u2 = t3.requesterId, a2 = t3.requests, i2 = e12.find((function(e13) {
        return _p(t3) && _p(e13) && e13.searchClient === n2 && Boolean(u2) && e13.requesterId === u2;
      }));
      if (i2) {
        var o2;
        (o2 = i2.items).push.apply(o2, Ep(a2));
      } else {
        var s2 = { execute: r2, requesterId: u2, items: a2, searchClient: n2 };
        e12.push(s2);
      }
      return e12;
    }), []).map((function(e12) {
      if (!_p(e12)) return Promise.resolve(e12);
      var t3 = e12, n2 = t3.execute, r2 = t3.items;
      return n2({ searchClient: t3.searchClient, requests: r2 });
    }));
    return Promise.all(t2).then((function(e12) {
      return rd(e12);
    }));
  }
  function Cp(e11) {
    return Cp = "function" == typeof Symbol && "symbol" == b(Symbol.iterator) ? function(e12) {
      return b(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : b(e12);
    }, Cp(e11);
  }
  var Ap = ["event", "nextState", "props", "query", "refresh", "store"];
  function wp(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter((function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      }))), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function xp(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? wp(Object(n2), true).forEach((function(t3) {
        Sp(e11, t3, n2[t3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : wp(Object(n2)).forEach((function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      }));
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
  var Bp;
  var Op;
  var Ip;
  var Tp = null;
  var Pp = (Bp = -1, Op = -1, Ip = void 0, function(e11) {
    var t2 = ++Bp;
    return Promise.resolve(e11).then((function(e12) {
      return Ip && t2 < Op ? Ip : (Op = t2, Ip = e12, e12);
    }));
  });
  function jp(e11) {
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
    })(e11, Ap);
    Tp && u2.environment.clearTimeout(Tp);
    var c2 = s2.setCollections, l2 = s2.setIsOpen, f2 = s2.setQuery, d2 = s2.setActiveItemId, p2 = s2.setStatus, h2 = s2.setContext;
    if (f2(a2), d2(u2.defaultActiveItemId), !a2 && false === u2.openOnFocus) {
      var v2, m2 = o2.getState().collections.map((function(e12) {
        return xp(xp({}, e12), {}, { items: [] });
      }));
      p2("idle"), c2(m2), l2(null !== (v2 = r2.isOpen) && void 0 !== v2 ? v2 : u2.shouldPanelOpen({ state: o2.getState() }));
      var D2 = Rd(Pp(m2).then((function() {
        return Promise.resolve();
      })));
      return o2.pendingRequests.add(D2);
    }
    p2("loading"), Tp = u2.environment.setTimeout((function() {
      p2("stalled");
    }), u2.stallThreshold);
    var y2 = Rd(Pp(u2.getSources(xp({ query: a2, refresh: i2, state: o2.getState() }, s2)).then((function(e12) {
      return Promise.all(e12.map((function(e13) {
        return Promise.resolve(e13.getItems(xp({ query: a2, refresh: i2, state: o2.getState() }, s2))).then((function(t3) {
          return (function(e14, t4, n3) {
            if (u3 = e14, Boolean(null == u3 ? void 0 : u3.execute)) {
              var r3 = "algolia" === e14.requesterId ? Object.assign.apply(Object, [{}].concat(Ep(Object.keys(n3.context).map((function(e15) {
                var t5;
                return null === (t5 = n3.context[e15]) || void 0 === t5 ? void 0 : t5.__algoliaSearchParameters;
              }))))) : {};
              return gp(gp({}, e14), {}, { requests: e14.queries.map((function(n4) {
                return { query: "algolia" === e14.requesterId ? gp(gp({}, n4), {}, { params: gp(gp({}, r3), n4.params) }) : n4, sourceId: t4, transformResponse: e14.transformResponse };
              })) });
            }
            var u3;
            return { items: e14, sourceId: t4 };
          })(t3, e13.sourceId, o2.getState());
        }));
      }))).then(kp).then((function(t3) {
        var n3, r3 = t3.some((function(e13) {
          return (function(e14) {
            return !Array.isArray(e14) && Boolean(null == e14 ? void 0 : e14._automaticInsights);
          })(e13.items);
        }));
        return r3 && h2({ algoliaInsightsPlugin: xp(xp({}, (null === (n3 = o2.getState().context) || void 0 === n3 ? void 0 : n3.algoliaInsightsPlugin) || {}), {}, { __automaticInsights: r3 }) }), (function(e13, t4, n4) {
          return t4.map((function(t5) {
            var r4, u3 = e13.filter((function(e14) {
              return e14.sourceId === t5.sourceId;
            })), a3 = u3.map((function(e14) {
              return e14.items;
            })), i3 = u3[0].transformResponse, o3 = i3 ? i3({ results: r4 = a3, hits: r4.map((function(e14) {
              return e14.hits;
            })).filter(Boolean), facetHits: r4.map((function(e14) {
              var t6;
              return null === (t6 = e14.facetHits) || void 0 === t6 ? void 0 : t6.map((function(e15) {
                return { label: e15.value, count: e15.count, _highlightResult: { label: { value: e15.highlighted } } };
              }));
            })).filter(Boolean) }) : a3;
            return t5.onResolve({ source: t5, results: a3, items: o3, state: n4.getState() }), o3.every(Boolean), 'The `getItems` function from source "'.concat(t5.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"), { source: t5, items: o3 };
          }));
        })(t3, e12, o2);
      })).then((function(e13) {
        return (function(e14) {
          var t3 = e14.props, n3 = e14.state, r3 = e14.collections.reduce((function(e15, t4) {
            return vp(vp({}, e15), {}, mp({}, t4.source.sourceId, vp(vp({}, t4.source), {}, { getItems: function() {
              return rd(t4.items);
            } })));
          }), {}), u3 = t3.plugins.reduce((function(e15, t4) {
            return t4.reshape ? t4.reshape(e15) : e15;
          }), { sourcesBySourceId: r3, state: n3 }).sourcesBySourceId;
          return rd(t3.reshape({ sourcesBySourceId: u3, sources: Object.values(u3), state: n3 })).filter(Boolean).map((function(e15) {
            return { source: e15, items: e15.getItems() };
          }));
        })({ collections: e13, props: u2, state: o2.getState() });
      }));
    })))).then((function(e12) {
      var n3;
      p2("idle"), c2(e12);
      var f3 = u2.shouldPanelOpen({ state: o2.getState() });
      l2(null !== (n3 = r2.isOpen) && void 0 !== n3 ? n3 : u2.openOnFocus && !a2 && f3 || f3);
      var d3 = Gd(o2.getState());
      if (null !== o2.getState().activeItemId && d3) {
        var h3 = d3.item, v3 = d3.itemInputValue, m3 = d3.itemUrl, D3 = d3.source;
        D3.onActive(xp({ event: t2, item: h3, itemInputValue: v3, itemUrl: m3, refresh: i2, source: D3, state: o2.getState() }, s2));
      }
    })).finally((function() {
      p2("idle"), Tp && u2.environment.clearTimeout(Tp);
    }));
    return o2.pendingRequests.add(y2);
  }
  function Np(e11) {
    return Np = "function" == typeof Symbol && "symbol" == b(Symbol.iterator) ? function(e12) {
      return b(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : b(e12);
    }, Np(e11);
  }
  var zp = ["event", "props", "refresh", "store"];
  function Rp(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter((function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      }))), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Mp(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Rp(Object(n2), true).forEach((function(t3) {
        Zp(e11, t3, n2[t3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : Rp(Object(n2)).forEach((function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      }));
    }
    return e11;
  }
  function Zp(e11, t2, n2) {
    return (t2 = (function(e12) {
      var t3 = (function(e13) {
        if ("object" !== Np(e13) || null === e13) return e13;
        var t4 = e13[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e13, "string");
          if ("object" !== Np(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e13);
      })(e12);
      return "symbol" === Np(t3) ? t3 : String(t3);
    })(t2)) in e11 ? Object.defineProperty(e11, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e11[t2] = n2, e11;
  }
  function Lp(e11) {
    return Lp = "function" == typeof Symbol && "symbol" == b(Symbol.iterator) ? function(e12) {
      return b(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : b(e12);
    }, Lp(e11);
  }
  var $p = ["props", "refresh", "store"];
  var qp = ["inputElement", "formElement", "panelElement"];
  var Up = ["inputElement"];
  var Vp = ["inputElement", "maxLength"];
  var Hp = ["source"];
  var Wp = ["item", "source"];
  function Kp(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter((function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      }))), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Jp(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Kp(Object(n2), true).forEach((function(t3) {
        Gp(e11, t3, n2[t3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : Kp(Object(n2)).forEach((function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      }));
    }
    return e11;
  }
  function Gp(e11, t2, n2) {
    return (t2 = (function(e12) {
      var t3 = (function(e13) {
        if ("object" !== Lp(e13) || null === e13) return e13;
        var t4 = e13[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e13, "string");
          if ("object" !== Lp(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e13);
      })(e12);
      return "symbol" === Lp(t3) ? t3 : String(t3);
    })(t2)) in e11 ? Object.defineProperty(e11, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e11[t2] = n2, e11;
  }
  function Qp(e11, t2) {
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
  function Yp(e11) {
    var t2 = e11.props, n2 = e11.refresh, r2 = e11.store, u2 = Qp(e11, $p);
    return { getEnvironmentProps: function(e12) {
      var n3 = e12.inputElement, u3 = e12.formElement, a2 = e12.panelElement;
      function i2(e13) {
        !r2.getState().isOpen && r2.pendingRequests.isEmpty() || e13.target === n3 || false === [u3, a2].some((function(t3) {
          return (n4 = t3) === (r3 = e13.target) || n4.contains(r3);
          var n4, r3;
        })) && (r2.dispatch("blur", null), t2.debug || r2.pendingRequests.cancelAll());
      }
      return Jp({ onTouchStart: i2, onMouseDown: i2, onTouchMove: function(e13) {
        false !== r2.getState().isOpen && n3 === t2.environment.document.activeElement && e13.target !== n3 && n3.blur();
      } }, Qp(e12, qp));
    }, getRootProps: function(e12) {
      return Jp({ role: "combobox", "aria-expanded": r2.getState().isOpen, "aria-haspopup": "listbox", "aria-controls": r2.getState().isOpen ? r2.getState().collections.map((function(e13) {
        var n3 = e13.source;
        return Qd(t2.id, "list", n3);
      })).join(" ") : void 0, "aria-labelledby": Qd(t2.id, "label") }, e12);
    }, getFormProps: function(e12) {
      e12.inputElement;
      var a2 = Qp(e12, Up), i2 = function(a3) {
        var i3;
        t2.onSubmit(Jp({ event: a3, refresh: n2, state: r2.getState() }, u2)), r2.dispatch("submit", null), null === (i3 = e12.inputElement) || void 0 === i3 || i3.blur();
      };
      return Jp({ action: "", noValidate: true, role: "search", onSubmit: function(e13) {
        e13.preventDefault();
        var n3 = Jd(t2.plugins, r2.pendingRequests);
        void 0 !== n3 ? n3.then((function() {
          return i2(e13);
        })) : i2(e13);
      }, onReset: function(a3) {
        var i3;
        a3.preventDefault(), t2.onReset(Jp({ event: a3, refresh: n2, state: r2.getState() }, u2)), r2.dispatch("reset", null), null === (i3 = e12.inputElement) || void 0 === i3 || i3.focus();
      } }, a2);
    }, getLabelProps: function(e12) {
      return Jp({ htmlFor: Qd(t2.id, "input"), id: Qd(t2.id, "label") }, e12);
    }, getInputProps: function(e12) {
      var a2;
      function i2(e13) {
        (t2.openOnFocus || Boolean(r2.getState().query)) && jp(Jp({ event: e13, props: t2, query: r2.getState().completion || r2.getState().query, refresh: n2, store: r2 }, u2)), r2.dispatch("focus", null);
      }
      var o2 = e12 || {};
      o2.inputElement;
      var s2 = o2.maxLength, c2 = void 0 === s2 ? 512 : s2, l2 = Qp(o2, Vp), f2 = Gd(r2.getState()), d2 = (function(e13) {
        return Boolean(e13 && e13.match(Yd));
      })((null === (a2 = t2.environment.navigator) || void 0 === a2 ? void 0 : a2.userAgent) || ""), p2 = t2.enterKeyHint || (null != f2 && f2.itemUrl && !d2 ? "go" : "search");
      return Jp({ "aria-autocomplete": "both", "aria-activedescendant": r2.getState().isOpen && null !== r2.getState().activeItemId ? Qd(t2.id, "item-".concat(r2.getState().activeItemId), null == f2 ? void 0 : f2.source) : void 0, "aria-controls": r2.getState().isOpen ? r2.getState().collections.filter((function(e13) {
        return e13.items.length > 0;
      })).map((function(e13) {
        var n3 = e13.source;
        return Qd(t2.id, "list", n3);
      })).join(" ") : void 0, "aria-labelledby": Qd(t2.id, "label"), value: r2.getState().completion || r2.getState().query, id: Qd(t2.id, "input"), autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", enterKeyHint: p2, spellCheck: "false", autoFocus: t2.autoFocus, placeholder: t2.placeholder, maxLength: c2, type: "search", onChange: function(e13) {
        var a3 = e13.currentTarget.value;
        t2.ignoreCompositionEvents && Xd(e13).isComposing ? u2.setQuery(a3) : jp(Jp({ event: e13, props: t2, query: a3.slice(0, c2), refresh: n2, store: r2 }, u2));
      }, onCompositionEnd: function(e13) {
        jp(Jp({ event: e13, props: t2, query: e13.currentTarget.value.slice(0, c2), refresh: n2, store: r2 }, u2));
      }, onKeyDown: function(e13) {
        Xd(e13).isComposing || (function(e14) {
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
          })(e14, zp);
          if ("ArrowUp" === t3.key || "ArrowDown" === t3.key) {
            var i3 = function() {
              var e15 = Gd(u3.getState()), t4 = n3.environment.document.getElementById(Qd(n3.id, "item-".concat(u3.getState().activeItemId), null == e15 ? void 0 : e15.source));
              t4 && (t4.scrollIntoViewIfNeeded ? t4.scrollIntoViewIfNeeded(false) : t4.scrollIntoView(false));
            }, o3 = function() {
              var e15 = Gd(u3.getState());
              if (null !== u3.getState().activeItemId && e15) {
                var n4 = e15.item, i4 = e15.itemInputValue, o4 = e15.itemUrl, s4 = e15.source;
                s4.onActive(Mp({ event: t3, item: n4, itemInputValue: i4, itemUrl: o4, refresh: r3, source: s4, state: u3.getState() }, a3));
              }
            };
            t3.preventDefault(), false === u3.getState().isOpen && (n3.openOnFocus || Boolean(u3.getState().query)) ? jp(Mp({ event: t3, props: n3, query: u3.getState().query, refresh: r3, store: u3 }, a3)).then((function() {
              u3.dispatch(t3.key, { nextActiveItemId: n3.defaultActiveItemId }), o3(), setTimeout(i3, 0);
            })) : (u3.dispatch(t3.key, {}), o3(), i3());
          } else if ("Escape" === t3.key) t3.preventDefault(), u3.dispatch(t3.key, null), u3.pendingRequests.cancelAll();
          else if ("Tab" === t3.key) u3.dispatch("blur", null), u3.pendingRequests.cancelAll();
          else if ("Enter" === t3.key) {
            if (null === u3.getState().activeItemId || u3.getState().collections.every((function(e15) {
              return 0 === e15.items.length;
            }))) {
              var s3 = Jd(n3.plugins, u3.pendingRequests);
              return void (void 0 !== s3 ? s3.then(u3.pendingRequests.cancelAll) : n3.debug || u3.pendingRequests.cancelAll());
            }
            t3.preventDefault();
            var c3 = Gd(u3.getState()), l3 = c3.item, f3 = c3.itemInputValue, d3 = c3.itemUrl, p3 = c3.source;
            if (t3.metaKey || t3.ctrlKey) void 0 !== d3 && (p3.onSelect(Mp({ event: t3, item: l3, itemInputValue: f3, itemUrl: d3, refresh: r3, source: p3, state: u3.getState() }, a3)), n3.navigator.navigateNewTab({ itemUrl: d3, item: l3, state: u3.getState() }));
            else if (t3.shiftKey) void 0 !== d3 && (p3.onSelect(Mp({ event: t3, item: l3, itemInputValue: f3, itemUrl: d3, refresh: r3, source: p3, state: u3.getState() }, a3)), n3.navigator.navigateNewWindow({ itemUrl: d3, item: l3, state: u3.getState() }));
            else if (t3.altKey) ;
            else {
              if (void 0 !== d3) return p3.onSelect(Mp({ event: t3, item: l3, itemInputValue: f3, itemUrl: d3, refresh: r3, source: p3, state: u3.getState() }, a3)), void n3.navigator.navigate({ itemUrl: d3, item: l3, state: u3.getState() });
              jp(Mp({ event: t3, nextState: { isOpen: false }, props: n3, query: f3, refresh: r3, store: u3 }, a3)).then((function() {
                p3.onSelect(Mp({ event: t3, item: l3, itemInputValue: f3, itemUrl: d3, refresh: r3, source: p3, state: u3.getState() }, a3));
              }));
            }
          }
        })(Jp({ event: e13, props: t2, refresh: n2, store: r2 }, u2));
      }, onFocus: i2, onBlur: sd, onClick: function(n3) {
        e12.inputElement !== t2.environment.document.activeElement || r2.getState().isOpen || i2(n3);
      } }, l2);
    }, getPanelProps: function(e12) {
      return Jp({ onMouseDown: function(e13) {
        e13.preventDefault();
      }, onMouseLeave: function() {
        r2.dispatch("mouseleave", null);
      } }, e12);
    }, getListProps: function(e12) {
      var n3 = e12 || {}, r3 = n3.source, u3 = Qp(n3, Hp);
      return Jp({ role: "listbox", "aria-labelledby": Qd(t2.id, "label"), id: Qd(t2.id, "list", r3) }, u3);
    }, getItemProps: function(e12) {
      var a2 = e12.item, i2 = e12.source, o2 = Qp(e12, Wp);
      return Jp({ id: Qd(t2.id, "item-".concat(a2.__autocomplete_id), i2), role: "option", "aria-selected": r2.getState().activeItemId === a2.__autocomplete_id, onMouseMove: function(e13) {
        if (a2.__autocomplete_id !== r2.getState().activeItemId) {
          r2.dispatch("mousemove", a2.__autocomplete_id);
          var t3 = Gd(r2.getState());
          if (null !== r2.getState().activeItemId && t3) {
            var i3 = t3.item, o3 = t3.itemInputValue, s2 = t3.itemUrl, c2 = t3.source;
            c2.onActive(Jp({ event: e13, item: i3, itemInputValue: o3, itemUrl: s2, refresh: n2, source: c2, state: r2.getState() }, u2));
          }
        }
      }, onMouseDown: function(e13) {
        e13.preventDefault();
      }, onClick: function(e13) {
        var o3 = i2.getItemInputValue({ item: a2, state: r2.getState() }), s2 = i2.getItemUrl({ item: a2, state: r2.getState() });
        (s2 ? Promise.resolve() : jp(Jp({ event: e13, nextState: { isOpen: false }, props: t2, query: o3, refresh: n2, store: r2 }, u2))).then((function() {
          i2.onSelect(Jp({ event: e13, item: a2, itemInputValue: o3, itemUrl: s2, refresh: n2, source: i2, state: r2.getState() }, u2));
        }));
      } }, o2);
    } };
  }
  function Xp(e11) {
    return Xp = "function" == typeof Symbol && "symbol" == b(Symbol.iterator) ? function(e12) {
      return b(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : b(e12);
    }, Xp(e11);
  }
  function eh(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter((function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      }))), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function th(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? eh(Object(n2), true).forEach((function(t3) {
        nh(e11, t3, n2[t3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : eh(Object(n2)).forEach((function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      }));
    }
    return e11;
  }
  function nh(e11, t2, n2) {
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
  function rh(e11) {
    var t2, n2, r2, u2, a2 = e11.plugins, i2 = e11.options, o2 = null === (t2 = ((null === (n2 = i2.__autocomplete_metadata) || void 0 === n2 ? void 0 : n2.userAgents) || [])[0]) || void 0 === t2 ? void 0 : t2.segment, s2 = o2 ? nh({}, o2, Object.keys((null === (r2 = i2.__autocomplete_metadata) || void 0 === r2 ? void 0 : r2.options) || {})) : {};
    return { plugins: a2.map((function(e12) {
      return { name: e12.name, options: Object.keys(e12.__autocomplete_pluginOptions || []) };
    })), options: th({ "autocomplete-core": Object.keys(i2) }, s2), ua: cd.concat((null === (u2 = i2.__autocomplete_metadata) || void 0 === u2 ? void 0 : u2.userAgents) || []) };
  }
  function uh(e11) {
    var t2, n2 = e11.state;
    return false === n2.isOpen || null === n2.activeItemId ? null : (null === (t2 = Gd(n2)) || void 0 === t2 ? void 0 : t2.itemInputValue) || null;
  }
  function ah(e11) {
    return ah = "function" == typeof Symbol && "symbol" == b(Symbol.iterator) ? function(e12) {
      return b(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : b(e12);
    }, ah(e11);
  }
  function ih(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter((function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      }))), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function oh(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? ih(Object(n2), true).forEach((function(t3) {
        sh(e11, t3, n2[t3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : ih(Object(n2)).forEach((function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      }));
    }
    return e11;
  }
  function sh(e11, t2, n2) {
    return (t2 = (function(e12) {
      var t3 = (function(e13) {
        if ("object" !== ah(e13) || null === e13) return e13;
        var t4 = e13[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e13, "string");
          if ("object" !== ah(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e13);
      })(e12);
      return "symbol" === ah(t3) ? t3 : String(t3);
    })(t2)) in e11 ? Object.defineProperty(e11, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e11[t2] = n2, e11;
  }
  var ch = function(e11, t2) {
    switch (t2.type) {
      case "setActiveItemId":
      case "mousemove":
        return oh(oh({}, e11), {}, { activeItemId: t2.payload });
      case "setQuery":
        return oh(oh({}, e11), {}, { query: t2.payload, completion: null });
      case "setCollections":
        return oh(oh({}, e11), {}, { collections: t2.payload });
      case "setIsOpen":
        return oh(oh({}, e11), {}, { isOpen: t2.payload });
      case "setStatus":
        return oh(oh({}, e11), {}, { status: t2.payload });
      case "setContext":
        return oh(oh({}, e11), {}, { context: oh(oh({}, e11.context), t2.payload) });
      case "ArrowDown":
        var n2 = oh(oh({}, e11), {}, { activeItemId: t2.payload.hasOwnProperty("nextActiveItemId") ? t2.payload.nextActiveItemId : qd(1, e11.activeItemId, ad(e11), t2.props.defaultActiveItemId) });
        return oh(oh({}, n2), {}, { completion: uh({ state: n2 }) });
      case "ArrowUp":
        var r2 = oh(oh({}, e11), {}, { activeItemId: qd(-1, e11.activeItemId, ad(e11), t2.props.defaultActiveItemId) });
        return oh(oh({}, r2), {}, { completion: uh({ state: r2 }) });
      case "Escape":
        return e11.isOpen ? oh(oh({}, e11), {}, { activeItemId: null, isOpen: false, completion: null }) : oh(oh({}, e11), {}, { activeItemId: null, query: "", status: "idle", collections: [] });
      case "submit":
        return oh(oh({}, e11), {}, { activeItemId: null, isOpen: false, status: "idle" });
      case "reset":
        return oh(oh({}, e11), {}, { activeItemId: true === t2.props.openOnFocus ? t2.props.defaultActiveItemId : null, status: "idle", completion: null, query: "" });
      case "focus":
        return oh(oh({}, e11), {}, { activeItemId: t2.props.defaultActiveItemId, isOpen: (t2.props.openOnFocus || Boolean(e11.query)) && t2.props.shouldPanelOpen({ state: e11 }) });
      case "blur":
        return t2.props.debug ? e11 : oh(oh({}, e11), {}, { isOpen: false, activeItemId: null });
      case "mouseleave":
        return oh(oh({}, e11), {}, { activeItemId: t2.props.defaultActiveItemId });
      default:
        return "The reducer action ".concat(JSON.stringify(t2.type), " is not supported."), e11;
    }
  };
  function lh(e11) {
    return lh = "function" == typeof Symbol && "symbol" == b(Symbol.iterator) ? function(e12) {
      return b(e12);
    } : function(e12) {
      return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : b(e12);
    }, lh(e11);
  }
  function fh(e11, t2) {
    var n2 = Object.keys(e11);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e11);
      t2 && (r2 = r2.filter((function(t3) {
        return Object.getOwnPropertyDescriptor(e11, t3).enumerable;
      }))), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function dh(e11) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? fh(Object(n2), true).forEach((function(t3) {
        ph(e11, t3, n2[t3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e11, Object.getOwnPropertyDescriptors(n2)) : fh(Object(n2)).forEach((function(t3) {
        Object.defineProperty(e11, t3, Object.getOwnPropertyDescriptor(n2, t3));
      }));
    }
    return e11;
  }
  function ph(e11, t2, n2) {
    return (t2 = (function(e12) {
      var t3 = (function(e13) {
        if ("object" !== lh(e13) || null === e13) return e13;
        var t4 = e13[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e13, "string");
          if ("object" !== lh(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e13);
      })(e12);
      return "symbol" === lh(t3) ? t3 : String(t3);
    })(t2)) in e11 ? Object.defineProperty(e11, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e11[t2] = n2, e11;
  }
  function hh(e11) {
    var t2 = [], n2 = dp(e11, t2), r2 = (function(e12, t3, n3) {
      var r3 = t3.initialState;
      return { getState: function() {
        return r3;
      }, dispatch: function(u3, a3) {
        var i3 = (function(e13) {
          for (var t4 = 1; t4 < arguments.length; t4++) {
            var n4 = null != arguments[t4] ? arguments[t4] : {};
            t4 % 2 ? tp(Object(n4), true).forEach((function(t5) {
              np(e13, t5, n4[t5]);
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e13, Object.getOwnPropertyDescriptors(n4)) : tp(Object(n4)).forEach((function(t5) {
              Object.defineProperty(e13, t5, Object.getOwnPropertyDescriptor(n4, t5));
            }));
          }
          return e13;
        })({}, r3);
        r3 = e12(r3, { type: u3, props: t3, payload: a3 }), n3({ state: r3, prevState: i3 });
      }, pendingRequests: $d() };
    })(ch, n2, (function(e12) {
      var t3, r3, a3 = e12.prevState, c3 = e12.state;
      if (n2.onStateChange(dh({ prevState: a3, state: c3, refresh: i2, navigator: n2.navigator }, u2)), !s2() && null !== (t3 = c3.context) && void 0 !== t3 && null !== (r3 = t3.algoliaInsightsPlugin) && void 0 !== r3 && r3.__automaticInsights && false !== n2.insights) {
        var l2 = Pd({ __autocomplete_clickAnalytics: false });
        n2.plugins.push(l2), o2([l2]);
      }
    })), u2 = (function(e12) {
      var t3 = e12.store;
      return { setActiveItemId: function(e13) {
        t3.dispatch("setActiveItemId", e13);
      }, setQuery: function(e13) {
        t3.dispatch("setQuery", e13);
      }, setCollections: function(e13) {
        var n3 = 0, r3 = e13.map((function(e14) {
          return ap(ap({}, e14), {}, { items: rd(e14.items).map((function(e15) {
            return ap(ap({}, e15), {}, { __autocomplete_id: n3++ });
          })) });
        }));
        t3.dispatch("setCollections", r3);
      }, setIsOpen: function(e13) {
        t3.dispatch("setIsOpen", e13);
      }, setStatus: function(e13) {
        t3.dispatch("setStatus", e13);
      }, setContext: function(e13) {
        t3.dispatch("setContext", e13);
      } };
    })({ store: r2 }), a2 = Yp(dh({ props: n2, refresh: i2, store: r2, navigator: n2.navigator }, u2));
    function i2() {
      return jp(dh({ event: new Event("input"), nextState: { isOpen: r2.getState().isOpen }, props: n2, navigator: n2.navigator, query: r2.getState().query, refresh: i2, store: r2 }, u2));
    }
    function o2(e12) {
      e12.forEach((function(e13) {
        var r3;
        return null === (r3 = e13.subscribe) || void 0 === r3 ? void 0 : r3.call(e13, dh(dh({}, u2), {}, { navigator: n2.navigator, refresh: i2, onSelect: function(e14) {
          t2.push({ onSelect: e14 });
        }, onActive: function(e14) {
          t2.push({ onActive: e14 });
        }, onResolve: function(e14) {
          t2.push({ onResolve: e14 });
        } }));
      }));
    }
    function s2() {
      return n2.plugins.some((function(e12) {
        return "aa.algoliaInsightsPlugin" === e12.name;
      }));
    }
    if (n2.insights && !s2()) {
      var c2 = "boolean" == typeof n2.insights ? {} : n2.insights;
      n2.plugins.push(Pd(c2));
    }
    return o2(n2.plugins), (function(e12) {
      var t3, n3, r3 = e12.metadata, u3 = e12.environment;
      if (null === (t3 = u3.navigator) || void 0 === t3 || null === (n3 = t3.userAgent) || void 0 === n3 ? void 0 : n3.includes("Algolia Crawler")) {
        var a3 = u3.document.createElement("meta"), i3 = u3.document.querySelector("head");
        a3.name = "algolia:metadata", setTimeout((function() {
          a3.content = JSON.stringify(r3), i3.appendChild(a3);
        }), 0);
      }
    })({ metadata: rh({ plugins: n2.plugins, options: e11 }), environment: n2.environment }), dh(dh({ refresh: i2, navigator: n2.navigator }, a2), u2);
  }
  var vh = "https://askai.algolia.com/chat";
  var mh = "askai_token";
  var Dh = function(e11) {
    if (!e11) return true;
    try {
      var t2 = (function(e12) {
        var t3 = cn(e12.split("."), 1)[0];
        return JSON.parse(atob(t3));
      })(e11), n2 = t2.exp;
      return Date.now() / 1e3 > n2 - 30;
    } catch (e12) {
      return true;
    }
  };
  var yh = null;
  var gh = (function() {
    var e11 = Vt(on().mark((function e12(t2) {
      var n2, r2;
      return on().wrap((function(e13) {
        for (; ; ) switch (e13.prev = e13.next) {
          case 0:
            if (n2 = t2.assistantId, r2 = sessionStorage.getItem(mh), Dh(r2)) {
              e13.next = 4;
              break;
            }
            return e13.abrupt("return", r2);
          case 4:
            return yh || (yh = fetch("".concat(vh, "/token"), { method: "POST", headers: { "x-algolia-assistant-id": n2, "content-type": "application/json" } }).then((function(e14) {
              return e14.json();
            })).then((function(e14) {
              var t3 = e14.token;
              return sessionStorage.setItem(mh, t3), t3;
            })).finally((function() {
              return yh = null;
            }))), e13.abrupt("return", yh);
          case 6:
          case "end":
            return e13.stop();
        }
      }), e12);
    })));
    return function(t2) {
      return e11.apply(this, arguments);
    };
  })();
  var Fh = (function() {
    var e11 = Vt(on().mark((function e12(t2) {
      var n2, r2, u2, a2, i2, o2;
      return on().wrap((function(e13) {
        for (; ; ) switch (e13.prev = e13.next) {
          case 0:
            return n2 = t2.assistantId, r2 = t2.thumbs, u2 = t2.messageId, a2 = t2.appId, (i2 = new Headers()).set("x-algolia-assistant-id", n2), i2.set("content-type", "application/json"), e13.next = 7, gh({ assistantId: n2 });
          case 7:
            o2 = e13.sent, i2.set("authorization", "TOKEN ".concat(o2));
          case 9:
            return e13.abrupt("return", fetch("".concat(vh, "/feedback"), { method: "POST", body: JSON.stringify({ appId: a2, messageId: u2, thumbs: r2 }), headers: i2 }));
          case 10:
          case "end":
            return e13.stop();
        }
      }), e12);
    })));
    return function(t2) {
      return e11.apply(this, arguments);
    };
  })();
  function Eh(e11) {
    var t2 = e11.translations, n2 = (void 0 === t2 ? {} : t2).poweredByText, r2 = void 0 === n2 ? "Powered by" : n2;
    return jt.createElement("a", { href: "https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname, "&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"), target: "_blank", rel: "noopener noreferrer" }, jt.createElement("span", { className: "DocSearch-Label" }, r2), jt.createElement("svg", { width: "80", height: "24", "aria-label": "Algolia", role: "img", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2196.2 500" }, jt.createElement("defs", null, jt.createElement("style", null, ".cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}")), jt.createElement("path", { className: "cls-2", d: "M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), jt.createElement("rect", { className: "cls-1", x: "1845.88", y: "104.73", width: "62.58", height: "277.9", rx: "5.9", ry: "5.9" }), jt.createElement("path", { className: "cls-2", d: "M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z" }), jt.createElement("path", { className: "cls-2", d: "M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), jt.createElement("path", { className: "cls-2", d: "M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z" }), jt.createElement("path", { className: "cls-2", d: "M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), jt.createElement("path", { className: "cls-2", d: "M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), jt.createElement("path", { className: "cls-2", d: "M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z" }), jt.createElement("path", { className: "cls-1", d: "M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z" })));
  }
  function bh(e11) {
    return jt.createElement("svg", { width: "20", height: "20", "aria-label": e11.ariaLabel, viewBox: "0 0 24 24", role: "img" }, jt.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.4" }, e11.children));
  }
  function _h(e11) {
    var t2 = e11.translations, n2 = void 0 === t2 ? {} : t2, r2 = e11.isAskAiActive, u2 = void 0 !== r2 && r2, a2 = n2.selectText, i2 = void 0 === a2 ? "Select" : a2, o2 = n2.selectKeyAriaLabel, s2 = void 0 === o2 ? "Enter key" : o2, c2 = n2.submitQuestionText, l2 = void 0 === c2 ? "Submit question" : c2, f2 = n2.navigateText, d2 = void 0 === f2 ? "Navigate" : f2, p2 = n2.navigateUpKeyAriaLabel, h2 = void 0 === p2 ? "Arrow up" : p2, v2 = n2.navigateDownKeyAriaLabel, m2 = void 0 === v2 ? "Arrow down" : v2, D2 = n2.closeText, y2 = void 0 === D2 ? "Close" : D2, g2 = n2.backToSearchText, F2 = void 0 === g2 ? "Back to search" : g2, E2 = n2.closeKeyAriaLabel, b2 = void 0 === E2 ? "Escape key" : E2, _2 = n2.poweredByText, k2 = void 0 === _2 ? "Powered by" : _2;
    return jt.createElement(jt.Fragment, null, jt.createElement("div", { className: "DocSearch-Logo" }, jt.createElement(Eh, { translations: { poweredByText: k2 } })), jt.createElement("ul", { className: "DocSearch-Commands" }, jt.createElement("li", null, jt.createElement("kbd", { className: "DocSearch-Commands-Key" }, jt.createElement(bh, { ariaLabel: m2 }, jt.createElement("path", { d: "M12 5v14" }), jt.createElement("path", { d: "m19 12-7 7-7-7" }))), jt.createElement("kbd", { className: "DocSearch-Commands-Key" }, jt.createElement(bh, { ariaLabel: h2 }, jt.createElement("path", { d: "m5 12 7-7 7 7" }), jt.createElement("path", { d: "M12 19V5" }))), jt.createElement("span", { className: "DocSearch-Label" }, d2)), jt.createElement("li", null, jt.createElement("kbd", { className: "DocSearch-Commands-Key" }, jt.createElement(bh, { ariaLabel: s2 }, jt.createElement("polyline", { points: "9 10 4 15 9 20" }), jt.createElement("path", { d: "M20 4v7a4 4 0 0 1-4 4H4" }))), jt.createElement("span", { className: "DocSearch-Label" }, u2 ? l2 : i2)), jt.createElement("li", null, jt.createElement("kbd", { className: "DocSearch-Commands-Key" }, jt.createElement("span", { className: "DocSearch-Escape-Key" }, "ESC")), jt.createElement("span", { className: "DocSearch-Label", "aria-label": b2 }, u2 ? F2 : y2))));
  }
  function kh(e11) {
    var t2 = e11.hit, n2 = e11.children;
    return jt.createElement("a", { href: t2.url }, n2);
  }
  function Ch(e11) {
    var t2 = e11.className;
    return jt.createElement("svg", { viewBox: "0 0 38 38", className: t2, stroke: "currentColor", strokeOpacity: ".5" }, jt.createElement("g", { fill: "none", fillRule: "evenodd" }, jt.createElement("g", { transform: "translate(1 1)", strokeWidth: "2" }, jt.createElement("circle", { strokeOpacity: ".3", cx: "18", cy: "18", r: "18" }), jt.createElement("path", { d: "M36 18c0-9.94-8.06-18-18-18" }, jt.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" })))));
  }
  function Ah() {
    return jt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", strokeLinejoin: "round", className: "DocSearch-Hit-icon-sparkles" }, jt.createElement("path", { d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" }), jt.createElement("path", { d: "M20 3v4" }), jt.createElement("path", { d: "M22 5h-4" }), jt.createElement("path", { d: "M4 17v2" }), jt.createElement("path", { d: "M5 18H3" }));
  }
  function wh() {
    return jt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, jt.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, jt.createElement("path", { d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0" }), jt.createElement("path", { d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13" })));
  }
  function xh() {
    return jt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, jt.createElement("path", { d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  function Sh() {
    return jt.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", className: "lucide lucide-triangle-alert-icon lucide-triangle-alert" }, jt.createElement("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" }), jt.createElement("path", { d: "M12 9v4" }), jt.createElement("path", { d: "M12 17h.01" }));
  }
  function Bh() {
    return jt.createElement("svg", { className: "DocSearch-Hit-Select-Icon", width: "20", height: "20", viewBox: "0 0 20 20" }, jt.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, jt.createElement("path", { d: "M18 3v4c0 2-2 4-4 4H2" }), jt.createElement("path", { d: "M8 17l-6-6 6-6" })));
  }
  var Oh = function() {
    return jt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, jt.createElement("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }), jt.createElement("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }), jt.createElement("path", { d: "M10 9H8" }), jt.createElement("path", { d: "M16 13H8" }), jt.createElement("path", { d: "M16 17H8" }));
  };
  function Ih(e11) {
    switch (e11.type) {
      case "lvl1":
        return jt.createElement(Oh, null);
      case "content":
        return jt.createElement(Ph, null);
      default:
        return jt.createElement(Th, null);
    }
  }
  function Th() {
    return jt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, jt.createElement("line", { x1: "4", x2: "20", y1: "9", y2: "9" }), jt.createElement("line", { x1: "4", x2: "20", y1: "15", y2: "15" }), jt.createElement("line", { x1: "10", x2: "8", y1: "3", y2: "21" }), jt.createElement("line", { x1: "16", x2: "14", y1: "3", y2: "21" }));
  }
  function Ph() {
    return jt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, jt.createElement("path", { d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
  }
  function jh() {
    return jt.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, jt.createElement("path", { d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
  }
  function Nh() {
    return jt.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, jt.createElement("path", { d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0" }));
  }
  function zh() {
    return jt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "64", height: "64", viewBox: "0 0 24 24", fill: "none", stroke: "#5a5e9a", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, jt.createElement("path", { d: "m13.5 8.5-5 5" }), jt.createElement("path", { d: "m8.5 8.5 5 5" }), jt.createElement("circle", { cx: "11", cy: "11", r: "8" }), jt.createElement("path", { d: "m21 21-4.3-4.3" }));
  }
  var Rh;
  var Mh = { before: "Searched for ", separator: ", ", lastSeparator: " and ", after: "" };
  function Zh(e11) {
    var t2 = e11.queries, n2 = e11.translations, r2 = e11.onSearchQueryClick;
    if (0 === t2.length) return null;
    if ("function" == typeof n2.aggregatedToolCallNode) return jt.createElement(jt.Fragment, null, n2.aggregatedToolCallNode(t2, r2));
    var u2 = (n2.aggregatedToolCallText ? n2.aggregatedToolCallText(t2) : Mh) || {}, a2 = u2.before, i2 = void 0 === a2 ? "" : a2, o2 = u2.separator, s2 = void 0 === o2 ? ", " : o2, c2 = u2.lastSeparator, l2 = void 0 === c2 ? " and " : c2, f2 = u2.after, d2 = void 0 === f2 ? "" : f2;
    return jt.createElement("div", { className: "DocSearch-AskAiScreen-MessageContent-Tool Tool--AggregatedResult" }, jt.createElement(Fn, { size: 18 }), jt.createElement("span", null, i2 && jt.createElement("span", null, i2), t2.map((function(e12, n3) {
      return jt.createElement(V, { key: e12 + n3 }, jt.createElement("span", { role: "button", tabIndex: 0, className: "DocSearch-AskAiScreen-MessageContent-Tool-Query", onKeyDown: function(t3) {
        "enter" !== t3.key && " " !== t3.key || (t3.preventDefault(), r2(e12));
      }, onClick: function() {
        return r2(e12);
      } }, '"', e12, '"'), n3 < t2.length - 2 && s2, n3 === t2.length - 2 && l2);
    })), d2 && jt.createElement("span", null, d2)));
  }
  var Lh = { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
  function $h(e11) {
    Lh = e11;
  }
  var qh = { exec: function() {
    return null;
  } };
  function Uh(e11) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n2 = "string" == typeof e11 ? e11 : e11.source, r2 = { replace: function(e12, t3) {
      var u2 = "string" == typeof t3 ? t3 : t3.source;
      return u2 = u2.replace(Vh.caret, "$1"), n2 = n2.replace(e12, u2), r2;
    }, getRegex: function() {
      return new RegExp(n2, t2);
    } };
    return r2;
  }
  var Vh = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDD40-\uDD65\uDD6F-\uDD85\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDED0-\uDEE3\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0\uDFF0-\uDFF9]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D\uDD30-\uDD39]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDD70-\uDD79\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD833[\uDCF0-\uDCF9]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDDD0-\uDDED\uDDF0-\uDDFA\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])/, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: function(e11) {
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
  var Hh = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
  var Wh = /(?:[*+-]|\d{1,9}[.)])/;
  var Kh = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
  var Jh = Uh(Kh).replace(/bull/g, Wh).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
  var Gh = Uh(Kh).replace(/bull/g, Wh).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
  var Qh = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
  var Yh = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
  var Xh = Uh(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Yh).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
  var ev = Uh(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Wh).getRegex();
  var tv = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
  var nv = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
  var rv = Uh("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", nv).replace("tag", tv).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
  var uv = Uh(Qh).replace("hr", Hh).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", tv).getRegex();
  var av = { blockquote: Uh(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", uv).getRegex(), code: /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, def: Xh, fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, hr: Hh, html: rv, lheading: Jh, list: ev, newline: /^(?:[ \t]*(?:\n|$))+/, paragraph: uv, table: qh, text: /^[^\n]+/ };
  var iv = Uh("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Hh).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", tv).getRegex();
  var ov = un(un({}, av), {}, { lheading: Gh, table: iv, paragraph: Uh(Qh).replace("hr", Hh).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", iv).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", tv).getRegex() });
  var sv = un(un({}, av), {}, { html: Uh(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", nv).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: qh, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Uh(Qh).replace("hr", Hh).replace("heading", " *#{1,6} *[^\n]").replace("lheading", Jh).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() });
  var cv = /^( {2,}|\\)\n(?!\s*$)/;
  var lv = /(?:[!-\/:-@\[-`\{-~\xA1-\xA9\xAB\xAC\xAE-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u037E\u0384\u0385\u0387\u03F6\u0482\u055A-\u055F\u0589\u058A\u058D-\u058F\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0606-\u060F\u061B\u061D-\u061F\u066A-\u066D\u06D4\u06DE\u06E9\u06FD\u06FE\u0700-\u070D\u07F6-\u07F9\u07FE\u07FF\u0830-\u083E\u085E\u0888\u0964\u0965\u0970\u09F2\u09F3\u09FA\u09FB\u09FD\u0A76\u0AF0\u0AF1\u0B70\u0BF3-\u0BFA\u0C77\u0C7F\u0C84\u0D4F\u0D79\u0DF4\u0E3F\u0E4F\u0E5A\u0E5B\u0F01-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F85\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u104A-\u104F\u109E\u109F\u10FB\u1360-\u1368\u1390-\u1399\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DB\u1800-\u180A\u1940\u1944\u1945\u19DE-\u19FF\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B4E\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2010-\u2027\u2030-\u205E\u207A-\u207E\u208A-\u208E\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2429\u2440-\u244A\u249C-\u24E9\u2500-\u2775\u2794-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E5D\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3001-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u303F\u309B\u309C\u30A0\u30FB\u3190\u3191\u3196-\u319F\u31C0-\u31E5\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAA77-\uAA79\uAADE\uAADF\uAAF0\uAAF1\uAB5B\uAB6A\uAB6B\uABEB\uFB29\uFBB2-\uFBC2\uFD3E-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD00-\uDD02\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDC77\uDC78\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEC8\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDD6E\uDD8E\uDD8F\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9\uDFD4\uDFD5\uDFD7\uDFD8]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3F]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09\uDFE1]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFD5-\uDFF1\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3F\uDF44\uDF45]|\uD81B[\uDD6D-\uDD6F\uDE97-\uDE9A\uDFE2]|\uD82F[\uDC9C\uDC9F]|\uD833[\uDC00-\uDCEF\uDD00-\uDEB3\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE8B]|\uD838[\uDD4F\uDEFF]|\uD839\uDDFF|\uD83A[\uDD5E\uDD5F]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0-\uDCBB\uDCC0\uDCC1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFEF])/;
  var fv = /(?:[\t-\r -\/:-@\[-`\{-~\xA0-\xA9\xAB\xAC\xAE-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u037E\u0384\u0385\u0387\u03F6\u0482\u055A-\u055F\u0589\u058A\u058D-\u058F\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0606-\u060F\u061B\u061D-\u061F\u066A-\u066D\u06D4\u06DE\u06E9\u06FD\u06FE\u0700-\u070D\u07F6-\u07F9\u07FE\u07FF\u0830-\u083E\u085E\u0888\u0964\u0965\u0970\u09F2\u09F3\u09FA\u09FB\u09FD\u0A76\u0AF0\u0AF1\u0B70\u0BF3-\u0BFA\u0C77\u0C7F\u0C84\u0D4F\u0D79\u0DF4\u0E3F\u0E4F\u0E5A\u0E5B\u0F01-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F85\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u104A-\u104F\u109E\u109F\u10FB\u1360-\u1368\u1390-\u1399\u1400\u166D\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DB\u1800-\u180A\u1940\u1944\u1945\u19DE-\u19FF\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B4E\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2000-\u200A\u2010-\u2029\u202F-\u205F\u207A-\u207E\u208A-\u208E\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2429\u2440-\u244A\u249C-\u24E9\u2500-\u2775\u2794-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E5D\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u303F\u309B\u309C\u30A0\u30FB\u3190\u3191\u3196-\u319F\u31C0-\u31E5\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAA77-\uAA79\uAADE\uAADF\uAAF0\uAAF1\uAB5B\uAB6A\uAB6B\uABEB\uFB29\uFBB2-\uFBC2\uFD3E-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFEFF\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD00-\uDD02\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDC77\uDC78\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEC8\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDD6E\uDD8E\uDD8F\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9\uDFD4\uDFD5\uDFD7\uDFD8]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3F]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09\uDFE1]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFD5-\uDFF1\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3F\uDF44\uDF45]|\uD81B[\uDD6D-\uDD6F\uDE97-\uDE9A\uDFE2]|\uD82F[\uDC9C\uDC9F]|\uD833[\uDC00-\uDCEF\uDD00-\uDEB3\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE8B]|\uD838[\uDD4F\uDEFF]|\uD839\uDDFF|\uD83A[\uDD5E\uDD5F]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0-\uDCBB\uDCC0\uDCC1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFEF])/;
  var dv = /(?:[\0-\x08\x0E-\x1F0-9A-Za-z\x7F-\x9F\xAA\xAD\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376-\u037D\u037F-\u0383\u0386\u0388-\u03F5\u03F7-\u0481\u0483-\u0559\u0560-\u0588\u058B\u058C\u0590-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7-\u05F2\u05F5-\u0605\u0610-\u061A\u061C\u0620-\u0669\u066E-\u06D3\u06D5-\u06DD\u06DF-\u06E8\u06EA-\u06FC\u06FF\u070E-\u07F5\u07FA-\u07FD\u0800-\u082F\u083F-\u085D\u085F-\u0887\u0889-\u0963\u0966-\u096F\u0971-\u09F1\u09F4-\u09F9\u09FC\u09FE-\u0A75\u0A77-\u0AEF\u0AF2-\u0B6F\u0B71-\u0BF2\u0BFB-\u0C76\u0C78-\u0C7E\u0C80-\u0C83\u0C85-\u0D4E\u0D50-\u0D78\u0D7A-\u0DF3\u0DF5-\u0E3E\u0E40-\u0E4E\u0E50-\u0E59\u0E5C-\u0F00\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39\u0F3E-\u0F84\u0F86-\u0FBD\u0FC6\u0FCD\u0FDB-\u1049\u1050-\u109D\u10A0-\u10FA\u10FC-\u135F\u1369-\u138F\u139A-\u13FF\u1401-\u166C\u166F-\u167F\u1681-\u169A\u169D-\u16EA\u16EE-\u1734\u1737-\u17D3\u17D7\u17DC-\u17FF\u180B-\u193F\u1941-\u1943\u1946-\u19DD\u1A00-\u1A1D\u1A20-\u1A9F\u1AA7\u1AAE-\u1B4D\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BFB\u1C00-\u1C3A\u1C40-\u1C7D\u1C80-\u1CBF\u1CC8-\u1CD2\u1CD4-\u1FBC\u1FBE\u1FC2-\u1FCC\u1FD0-\u1FDC\u1FE0-\u1FEC\u1FF0-\u1FFC\u1FFF\u200B-\u200F\u202A-\u202E\u2060-\u2079\u207F-\u2089\u208F-\u209F\u20C1-\u20FF\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u218C-\u218F\u242A-\u243F\u244B-\u249B\u24EA-\u24FF\u2776-\u2793\u2B74\u2B75\u2B96\u2C00-\u2CE4\u2CEB-\u2CF8\u2CFD\u2D00-\u2D6F\u2D71-\u2DFF\u2E2F\u2E5E-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3040-\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u318F\u3192-\u3195\u31A0-\u31BF\u31E6-\u31EE\u31F0-\u31FF\u321F-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48F\uA4C7-\uA4FD\uA500-\uA60C\uA610-\uA672\uA674-\uA67D\uA67F-\uA6F1\uA6F8-\uA6FF\uA717-\uA71F\uA722-\uA788\uA78B-\uA827\uA82C-\uA835\uA83A-\uA873\uA878-\uA8CD\uA8D0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA95E\uA960-\uA9C0\uA9CE-\uA9DD\uA9E0-\uAA5B\uAA60-\uAA76\uAA7A-\uAADD\uAAE0-\uAAEF\uAAF2-\uAB5A\uAB5C-\uAB69\uAB6C-\uABEA\uABEC-\uD7FF\uE000-\uFB28\uFB2A-\uFBB1\uFBC3-\uFD3D\uFD50-\uFDCE\uFDD0-\uFDFB\uFE00-\uFE0F\uFE1A-\uFE2F\uFE53\uFE67\uFE6C-\uFEFE\uFF00\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF]|\uD800[\uDC00-\uDCFF\uDD03-\uDD36\uDD40-\uDD78\uDD8A\uDD8B\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFD-\uDF9E\uDFA0-\uDFCF\uDFD1-\uDFFF]|\uD801[\uDC00-\uDD6E\uDD70-\uDFFF]|\uD802[\uDC00-\uDC56\uDC58-\uDC76\uDC79-\uDD1E\uDD20-\uDD3E\uDD40-\uDE4F\uDE59-\uDE7E\uDE80-\uDEC7\uDEC9-\uDEEF\uDEF7-\uDF38\uDF40-\uDF98\uDF9D-\uDFFF]|\uD803[\uDC00-\uDD6D\uDD6F-\uDD8D\uDD90-\uDEAC\uDEAE-\uDF54\uDF5A-\uDF85\uDF8A-\uDFFF]|\uD804[\uDC00-\uDC46\uDC4E-\uDCBA\uDCBD\uDCC2-\uDD3F\uDD44-\uDD73\uDD76-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDDE0-\uDE37\uDE3E-\uDEA8\uDEAA-\uDFD3\uDFD6\uDFD9-\uDFFF]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5C\uDC5E-\uDCC5\uDCC7-\uDDC0\uDDD8-\uDE40\uDE44-\uDE5F\uDE6D-\uDEB8\uDEBA-\uDF3B\uDF40-\uDFFF]|\uD806[\uDC00-\uDC3A\uDC3C-\uDD43\uDD47-\uDDE1\uDDE3-\uDE3E\uDE47-\uDE99\uDE9D\uDEA3-\uDEFF\uDF0A-\uDFE0\uDFE2-\uDFFF]|\uD807[\uDC00-\uDC40\uDC46-\uDC6F\uDC72-\uDEF6\uDEF9-\uDF42\uDF50-\uDFD4\uDFF2-\uDFFE]|[\uD808\uD80A\uD80C-\uD819\uD81C-\uD82E\uD830-\uD832\uD837\uD83F-\uDBFF][\uDC00-\uDFFF]|\uD809[\uDC00-\uDC6F\uDC75-\uDFFF]|\uD80B[\uDC00-\uDFF0\uDFF3-\uDFFF]|\uD81A[\uDC00-\uDE6D\uDE70-\uDEF4\uDEF6-\uDF36\uDF40-\uDF43\uDF46-\uDFFF]|\uD81B[\uDC00-\uDD6C\uDD70-\uDE96\uDE9B-\uDFE1\uDFE3-\uDFFF]|\uD82F[\uDC00-\uDC9B\uDC9D\uDC9E\uDCA0-\uDFFF]|\uD833[\uDCF0-\uDCFF\uDEB4-\uDF4F\uDFC4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD65-\uDD69\uDD6D-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDDEB-\uDDFF\uDE42-\uDE44\uDE46-\uDEFF\uDF57-\uDFFF]|\uD835[\uDC00-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE8C-\uDFFF]|\uD838[\uDC00-\uDD4E\uDD50-\uDEFE\uDF00-\uDFFF]|\uD839[\uDC00-\uDDFE\uDE00-\uDFFF]|\uD83A[\uDC00-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDD2D\uDD2F-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDD0C\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDB\uDEED-\uDEEF\uDEFD-\uDEFF\uDF77-\uDF7A\uDFDA-\uDFDF\uDFEC-\uDFEF\uDFF1-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCBC-\uDCBF\uDCC2-\uDCFF\uDE54-\uDE5F\uDE6E\uDE6F\uDE7D-\uDE7F\uDE8A-\uDE8E\uDEC7-\uDECD\uDEDD\uDEDE\uDEEA-\uDEEF\uDEF9-\uDEFF\uDF93\uDFF0-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/;
  var pv = Uh(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, fv).getRegex();
  var hv = /(?!~)(?:[!-\/:-@\[-`\{-~\xA1-\xA9\xAB\xAC\xAE-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u037E\u0384\u0385\u0387\u03F6\u0482\u055A-\u055F\u0589\u058A\u058D-\u058F\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0606-\u060F\u061B\u061D-\u061F\u066A-\u066D\u06D4\u06DE\u06E9\u06FD\u06FE\u0700-\u070D\u07F6-\u07F9\u07FE\u07FF\u0830-\u083E\u085E\u0888\u0964\u0965\u0970\u09F2\u09F3\u09FA\u09FB\u09FD\u0A76\u0AF0\u0AF1\u0B70\u0BF3-\u0BFA\u0C77\u0C7F\u0C84\u0D4F\u0D79\u0DF4\u0E3F\u0E4F\u0E5A\u0E5B\u0F01-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F85\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u104A-\u104F\u109E\u109F\u10FB\u1360-\u1368\u1390-\u1399\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DB\u1800-\u180A\u1940\u1944\u1945\u19DE-\u19FF\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B4E\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2010-\u2027\u2030-\u205E\u207A-\u207E\u208A-\u208E\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2429\u2440-\u244A\u249C-\u24E9\u2500-\u2775\u2794-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E5D\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3001-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u303F\u309B\u309C\u30A0\u30FB\u3190\u3191\u3196-\u319F\u31C0-\u31E5\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAA77-\uAA79\uAADE\uAADF\uAAF0\uAAF1\uAB5B\uAB6A\uAB6B\uABEB\uFB29\uFBB2-\uFBC2\uFD3E-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD00-\uDD02\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDC77\uDC78\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEC8\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDD6E\uDD8E\uDD8F\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9\uDFD4\uDFD5\uDFD7\uDFD8]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3F]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09\uDFE1]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFD5-\uDFF1\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3F\uDF44\uDF45]|\uD81B[\uDD6D-\uDD6F\uDE97-\uDE9A\uDFE2]|\uD82F[\uDC9C\uDC9F]|\uD833[\uDC00-\uDCEF\uDD00-\uDEB3\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE8B]|\uD838[\uDD4F\uDEFF]|\uD839\uDDFF|\uD83A[\uDD5E\uDD5F]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0-\uDCBB\uDCC0\uDCC1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFEF])/;
  var vv = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/;
  var mv = Uh(vv, "u").replace(/punct/g, lv).getRegex();
  var Dv = Uh(vv, "u").replace(/punct/g, hv).getRegex();
  var yv = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
  var gv = Uh(yv, "gu").replace(/notPunctSpace/g, dv).replace(/punctSpace/g, fv).replace(/punct/g, lv).getRegex();
  var Fv = Uh(yv, "gu").replace(/notPunctSpace/g, /(?:(?:[\0-\x08\x0E-\x1F0-9A-Za-z\x7F-\x9F\xAA\xAD\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376-\u037D\u037F-\u0383\u0386\u0388-\u03F5\u03F7-\u0481\u0483-\u0559\u0560-\u0588\u058B\u058C\u0590-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7-\u05F2\u05F5-\u0605\u0610-\u061A\u061C\u0620-\u0669\u066E-\u06D3\u06D5-\u06DD\u06DF-\u06E8\u06EA-\u06FC\u06FF\u070E-\u07F5\u07FA-\u07FD\u0800-\u082F\u083F-\u085D\u085F-\u0887\u0889-\u0963\u0966-\u096F\u0971-\u09F1\u09F4-\u09F9\u09FC\u09FE-\u0A75\u0A77-\u0AEF\u0AF2-\u0B6F\u0B71-\u0BF2\u0BFB-\u0C76\u0C78-\u0C7E\u0C80-\u0C83\u0C85-\u0D4E\u0D50-\u0D78\u0D7A-\u0DF3\u0DF5-\u0E3E\u0E40-\u0E4E\u0E50-\u0E59\u0E5C-\u0F00\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39\u0F3E-\u0F84\u0F86-\u0FBD\u0FC6\u0FCD\u0FDB-\u1049\u1050-\u109D\u10A0-\u10FA\u10FC-\u135F\u1369-\u138F\u139A-\u13FF\u1401-\u166C\u166F-\u167F\u1681-\u169A\u169D-\u16EA\u16EE-\u1734\u1737-\u17D3\u17D7\u17DC-\u17FF\u180B-\u193F\u1941-\u1943\u1946-\u19DD\u1A00-\u1A1D\u1A20-\u1A9F\u1AA7\u1AAE-\u1B4D\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BFB\u1C00-\u1C3A\u1C40-\u1C7D\u1C80-\u1CBF\u1CC8-\u1CD2\u1CD4-\u1FBC\u1FBE\u1FC2-\u1FCC\u1FD0-\u1FDC\u1FE0-\u1FEC\u1FF0-\u1FFC\u1FFF\u200B-\u200F\u202A-\u202E\u2060-\u2079\u207F-\u2089\u208F-\u209F\u20C1-\u20FF\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u218C-\u218F\u242A-\u243F\u244B-\u249B\u24EA-\u24FF\u2776-\u2793\u2B74\u2B75\u2B96\u2C00-\u2CE4\u2CEB-\u2CF8\u2CFD\u2D00-\u2D6F\u2D71-\u2DFF\u2E2F\u2E5E-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3040-\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u318F\u3192-\u3195\u31A0-\u31BF\u31E6-\u31EE\u31F0-\u31FF\u321F-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48F\uA4C7-\uA4FD\uA500-\uA60C\uA610-\uA672\uA674-\uA67D\uA67F-\uA6F1\uA6F8-\uA6FF\uA717-\uA71F\uA722-\uA788\uA78B-\uA827\uA82C-\uA835\uA83A-\uA873\uA878-\uA8CD\uA8D0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA95E\uA960-\uA9C0\uA9CE-\uA9DD\uA9E0-\uAA5B\uAA60-\uAA76\uAA7A-\uAADD\uAAE0-\uAAEF\uAAF2-\uAB5A\uAB5C-\uAB69\uAB6C-\uABEA\uABEC-\uD7FF\uE000-\uFB28\uFB2A-\uFBB1\uFBC3-\uFD3D\uFD50-\uFDCE\uFDD0-\uFDFB\uFE00-\uFE0F\uFE1A-\uFE2F\uFE53\uFE67\uFE6C-\uFEFE\uFF00\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF]|\uD800[\uDC00-\uDCFF\uDD03-\uDD36\uDD40-\uDD78\uDD8A\uDD8B\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFD-\uDF9E\uDFA0-\uDFCF\uDFD1-\uDFFF]|\uD801[\uDC00-\uDD6E\uDD70-\uDFFF]|\uD802[\uDC00-\uDC56\uDC58-\uDC76\uDC79-\uDD1E\uDD20-\uDD3E\uDD40-\uDE4F\uDE59-\uDE7E\uDE80-\uDEC7\uDEC9-\uDEEF\uDEF7-\uDF38\uDF40-\uDF98\uDF9D-\uDFFF]|\uD803[\uDC00-\uDD6D\uDD6F-\uDD8D\uDD90-\uDEAC\uDEAE-\uDF54\uDF5A-\uDF85\uDF8A-\uDFFF]|\uD804[\uDC00-\uDC46\uDC4E-\uDCBA\uDCBD\uDCC2-\uDD3F\uDD44-\uDD73\uDD76-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDDE0-\uDE37\uDE3E-\uDEA8\uDEAA-\uDFD3\uDFD6\uDFD9-\uDFFF]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5C\uDC5E-\uDCC5\uDCC7-\uDDC0\uDDD8-\uDE40\uDE44-\uDE5F\uDE6D-\uDEB8\uDEBA-\uDF3B\uDF40-\uDFFF]|\uD806[\uDC00-\uDC3A\uDC3C-\uDD43\uDD47-\uDDE1\uDDE3-\uDE3E\uDE47-\uDE99\uDE9D\uDEA3-\uDEFF\uDF0A-\uDFE0\uDFE2-\uDFFF]|\uD807[\uDC00-\uDC40\uDC46-\uDC6F\uDC72-\uDEF6\uDEF9-\uDF42\uDF50-\uDFD4\uDFF2-\uDFFE]|[\uD808\uD80A\uD80C-\uD819\uD81C-\uD82E\uD830-\uD832\uD837\uD83F-\uDBFF][\uDC00-\uDFFF]|\uD809[\uDC00-\uDC6F\uDC75-\uDFFF]|\uD80B[\uDC00-\uDFF0\uDFF3-\uDFFF]|\uD81A[\uDC00-\uDE6D\uDE70-\uDEF4\uDEF6-\uDF36\uDF40-\uDF43\uDF46-\uDFFF]|\uD81B[\uDC00-\uDD6C\uDD70-\uDE96\uDE9B-\uDFE1\uDFE3-\uDFFF]|\uD82F[\uDC00-\uDC9B\uDC9D\uDC9E\uDCA0-\uDFFF]|\uD833[\uDCF0-\uDCFF\uDEB4-\uDF4F\uDFC4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD65-\uDD69\uDD6D-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDDEB-\uDDFF\uDE42-\uDE44\uDE46-\uDEFF\uDF57-\uDFFF]|\uD835[\uDC00-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE8C-\uDFFF]|\uD838[\uDC00-\uDD4E\uDD50-\uDEFE\uDF00-\uDFFF]|\uD839[\uDC00-\uDDFE\uDE00-\uDFFF]|\uD83A[\uDC00-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDD2D\uDD2F-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDD0C\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDB\uDEED-\uDEEF\uDEFD-\uDEFF\uDF77-\uDF7A\uDFDA-\uDFDF\uDFEC-\uDFEF\uDFF1-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCBC-\uDCBF\uDCC2-\uDCFF\uDE54-\uDE5F\uDE6E\uDE6F\uDE7D-\uDE7F\uDE8A-\uDE8E\uDEC7-\uDECD\uDEDD\uDEDE\uDEEA-\uDEEF\uDEF9-\uDEFF\uDF93\uDFF0-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])|~)/).replace(/punctSpace/g, /(?!~)(?:[\t-\r -\/:-@\[-`\{-~\xA0-\xA9\xAB\xAC\xAE-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u037E\u0384\u0385\u0387\u03F6\u0482\u055A-\u055F\u0589\u058A\u058D-\u058F\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0606-\u060F\u061B\u061D-\u061F\u066A-\u066D\u06D4\u06DE\u06E9\u06FD\u06FE\u0700-\u070D\u07F6-\u07F9\u07FE\u07FF\u0830-\u083E\u085E\u0888\u0964\u0965\u0970\u09F2\u09F3\u09FA\u09FB\u09FD\u0A76\u0AF0\u0AF1\u0B70\u0BF3-\u0BFA\u0C77\u0C7F\u0C84\u0D4F\u0D79\u0DF4\u0E3F\u0E4F\u0E5A\u0E5B\u0F01-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F85\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u104A-\u104F\u109E\u109F\u10FB\u1360-\u1368\u1390-\u1399\u1400\u166D\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DB\u1800-\u180A\u1940\u1944\u1945\u19DE-\u19FF\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B4E\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2000-\u200A\u2010-\u2029\u202F-\u205F\u207A-\u207E\u208A-\u208E\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2429\u2440-\u244A\u249C-\u24E9\u2500-\u2775\u2794-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E5D\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u303F\u309B\u309C\u30A0\u30FB\u3190\u3191\u3196-\u319F\u31C0-\u31E5\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAA77-\uAA79\uAADE\uAADF\uAAF0\uAAF1\uAB5B\uAB6A\uAB6B\uABEB\uFB29\uFBB2-\uFBC2\uFD3E-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFEFF\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD00-\uDD02\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDC77\uDC78\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEC8\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDD6E\uDD8E\uDD8F\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9\uDFD4\uDFD5\uDFD7\uDFD8]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3F]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09\uDFE1]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFD5-\uDFF1\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3F\uDF44\uDF45]|\uD81B[\uDD6D-\uDD6F\uDE97-\uDE9A\uDFE2]|\uD82F[\uDC9C\uDC9F]|\uD833[\uDC00-\uDCEF\uDD00-\uDEB3\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE8B]|\uD838[\uDD4F\uDEFF]|\uD839\uDDFF|\uD83A[\uDD5E\uDD5F]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0-\uDCBB\uDCC0\uDCC1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFEF])/).replace(/punct/g, hv).getRegex();
  var Ev = Uh("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, dv).replace(/punctSpace/g, fv).replace(/punct/g, lv).getRegex();
  var bv = Uh(/\\(punct)/, "gu").replace(/punct/g, lv).getRegex();
  var _v = Uh(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
  var kv = Uh(nv).replace("(?:-->|$)", "-->").getRegex();
  var Cv = Uh("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", kv).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
  var Av = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
  var wv = Uh(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", Av).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
  var xv = Uh(/^!?\[(label)\]\[(ref)\]/).replace("label", Av).replace("ref", Yh).getRegex();
  var Sv = Uh(/^!?\[(ref)\](?:\[\])?/).replace("ref", Yh).getRegex();
  var Bv = { _backpedal: qh, anyPunctuation: bv, autolink: _v, blockSkip: /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, br: cv, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, del: qh, emStrongLDelim: mv, emStrongRDelimAst: gv, emStrongRDelimUnd: Ev, escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, link: wv, nolink: Sv, punctuation: pv, reflink: xv, reflinkSearch: Uh("reflink|nolink(?!\\()", "g").replace("reflink", xv).replace("nolink", Sv).getRegex(), tag: Cv, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, url: qh };
  var Ov = un(un({}, Bv), {}, { link: Uh(/^!?\[(label)\]\((.*?)\)/).replace("label", Av).getRegex(), reflink: Uh(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Av).getRegex() });
  var Iv = un(un({}, Bv), {}, { emStrongRDelimAst: Fv, emStrongLDelim: Dv, url: Uh(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ });
  var Tv = un(un({}, Iv), {}, { br: Uh(cv).replace("{2,}", "*").getRegex(), text: Uh(Iv.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() });
  var Pv = { normal: av, gfm: ov, pedantic: sv };
  var jv = { normal: Bv, gfm: Iv, breaks: Tv, pedantic: Ov };
  var Nv = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  var zv = function(e11) {
    return Nv[e11];
  };
  function Rv(e11, t2) {
    if (t2) {
      if (Vh.escapeTest.test(e11)) return e11.replace(Vh.escapeReplace, zv);
    } else if (Vh.escapeTestNoEncode.test(e11)) return e11.replace(Vh.escapeReplaceNoEncode, zv);
    return e11;
  }
  function Mv(e11) {
    try {
      e11 = encodeURI(e11).replace(Vh.percentDecode, "%");
    } catch (e12) {
      return null;
    }
    return e11;
  }
  function Zv(e11, t2) {
    var n2, r2 = e11.replace(Vh.findPipe, (function(e12, t3, n3) {
      for (var r3 = false, u3 = t3; --u3 >= 0 && "\\" === n3[u3]; ) r3 = !r3;
      return r3 ? "|" : " |";
    })).split(Vh.splitPipe), u2 = 0;
    if (r2[0].trim() || r2.shift(), r2.length > 0 && (null === (n2 = r2.at(-1)) || void 0 === n2 || !n2.trim()) && r2.pop(), t2) if (r2.length > t2) r2.splice(t2);
    else for (; r2.length < t2; ) r2.push("");
    for (; u2 < r2.length; u2++) r2[u2] = r2[u2].trim().replace(Vh.slashPipe, "|");
    return r2;
  }
  function Lv(e11, t2, n2) {
    var r2 = e11.length;
    if (0 === r2) return "";
    for (var u2 = 0; u2 < r2 && e11.charAt(r2 - u2 - 1) === t2; ) u2++;
    return e11.slice(0, r2 - u2);
  }
  function $v(e11, t2, n2, r2, u2) {
    var a2 = t2.href, i2 = t2.title || null, o2 = e11[1].replace(u2.other.outputLinkReplace, "$1");
    r2.state.inLink = true;
    var s2 = { type: "!" === e11[0].charAt(0) ? "image" : "link", raw: n2, href: a2, title: i2, text: o2, tokens: r2.inlineTokens(o2) };
    return r2.state.inLink = false, s2;
  }
  var qv = Gt((function e6(t2) {
    Wt(this, e6), Yt(this, "options", void 0), Yt(this, "rules", void 0), Yt(this, "lexer", void 0), this.options = t2 || Lh;
  }), [{ key: "space", value: function(e11) {
    var t2 = this.rules.block.newline.exec(e11);
    if (t2 && t2[0].length > 0) return { type: "space", raw: t2[0] };
  } }, { key: "code", value: function(e11) {
    var t2 = this.rules.block.code.exec(e11);
    if (t2) {
      var n2 = t2[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t2[0], codeBlockStyle: "indented", text: this.options.pedantic ? n2 : Lv(n2, "\n") };
    }
  } }, { key: "fences", value: function(e11) {
    var t2 = this.rules.block.fences.exec(e11);
    if (t2) {
      var n2 = t2[0], r2 = (function(e12, t3, n3) {
        var r3 = e12.match(n3.other.indentCodeCompensation);
        if (null === r3) return t3;
        var u2 = r3[1];
        return t3.split("\n").map((function(e13) {
          var t4 = e13.match(n3.other.beginningSpace);
          return null === t4 ? e13 : cn(t4, 1)[0].length >= u2.length ? e13.slice(u2.length) : e13;
        })).join("\n");
      })(n2, t2[3] || "", this.rules);
      return { type: "code", raw: n2, lang: t2[2] ? t2[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t2[2], text: r2 };
    }
  } }, { key: "heading", value: function(e11) {
    var t2 = this.rules.block.heading.exec(e11);
    if (t2) {
      var n2 = t2[2].trim();
      if (this.rules.other.endingHash.test(n2)) {
        var r2 = Lv(n2, "#");
        this.options.pedantic ? n2 = r2.trim() : r2 && !this.rules.other.endingSpaceChar.test(r2) || (n2 = r2.trim());
      }
      return { type: "heading", raw: t2[0], depth: t2[1].length, text: n2, tokens: this.lexer.inline(n2) };
    }
  } }, { key: "hr", value: function(e11) {
    var t2 = this.rules.block.hr.exec(e11);
    if (t2) return { type: "hr", raw: Lv(t2[0], "\n") };
  } }, { key: "blockquote", value: function(e11) {
    var t2 = this.rules.block.blockquote.exec(e11);
    if (t2) {
      for (var n2 = Lv(t2[0], "\n").split("\n"), r2 = "", u2 = "", a2 = []; n2.length > 0; ) {
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
        if (!(n2 = i2.exec(e11))) break;
        if (this.rules.block.hr.test(e11)) break;
        c2 = n2[0], e11 = e11.substring(c2.length);
        var f2 = n2[2].split("\n", 1)[0].replace(this.rules.other.listReplaceTabs, (function(e12) {
          return " ".repeat(3 * e12.length);
        })), d2 = e11.split("\n", 1)[0], p2 = !f2.trim(), h2 = 0;
        if (this.options.pedantic ? (h2 = 2, l2 = f2.trimStart()) : p2 ? h2 = n2[1].length + 1 : (h2 = (h2 = n2[2].search(this.rules.other.nonSpaceChar)) > 4 ? 1 : h2, l2 = f2.slice(h2), h2 += n2[1].length), p2 && this.rules.other.blankLine.test(d2) && (c2 += d2 + "\n", e11 = e11.substring(d2.length + 1), s2 = true), !s2) for (var v2 = this.rules.other.nextBulletRegex(h2), m2 = this.rules.other.hrRegex(h2), D2 = this.rules.other.fencesBeginRegex(h2), y2 = this.rules.other.headingBeginRegex(h2), g2 = this.rules.other.htmlBeginRegex(h2); e11; ) {
          var F2 = e11.split("\n", 1)[0], E2 = void 0;
          if (d2 = F2, E2 = this.options.pedantic ? d2 = d2.replace(this.rules.other.listReplaceNesting, "  ") : d2.replace(this.rules.other.tabCharGlobal, "    "), D2.test(d2)) break;
          if (y2.test(d2)) break;
          if (g2.test(d2)) break;
          if (v2.test(d2)) break;
          if (m2.test(d2)) break;
          if (E2.search(this.rules.other.nonSpaceChar) >= h2 || !d2.trim()) l2 += "\n" + E2.slice(h2);
          else {
            if (p2) break;
            if (f2.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4) break;
            if (D2.test(f2)) break;
            if (y2.test(f2)) break;
            if (m2.test(f2)) break;
            l2 += "\n" + d2;
          }
          p2 || d2.trim() || (p2 = true), c2 += F2 + "\n", e11 = e11.substring(F2.length + 1), f2 = E2.slice(h2);
        }
        a2.loose || (o2 ? a2.loose = true : this.rules.other.doubleBlankLine.test(c2) && (o2 = true));
        var b2 = null, _2 = void 0;
        this.options.gfm && (b2 = this.rules.other.listIsTask.exec(l2)) && (_2 = "[ ] " !== b2[0], l2 = l2.replace(this.rules.other.listReplaceTask, "")), a2.items.push({ type: "list_item", raw: c2, task: !!b2, checked: _2, loose: false, text: l2, tokens: [] }), a2.raw += c2;
      }
      var k2 = a2.items.at(-1);
      if (!k2) return;
      k2.raw = k2.raw.trimEnd(), k2.text = k2.text.trimEnd(), a2.raw = a2.raw.trimEnd();
      for (var C2 = 0; C2 < a2.items.length; C2++) if (this.lexer.state.top = false, a2.items[C2].tokens = this.lexer.blockTokens(a2.items[C2].text, []), !a2.loose) {
        var A2 = a2.items[C2].tokens.filter((function(e12) {
          return "space" === e12.type;
        })), w2 = A2.length > 0 && A2.some((function(e12) {
          return t2.rules.other.anyLine.test(e12.raw);
        }));
        a2.loose = w2;
      }
      if (a2.loose) for (var x2 = 0; x2 < a2.items.length; x2++) a2.items[x2].loose = true;
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
      var u2 = Zv(r2[1]), a2 = r2[2].replace(this.rules.other.tableAlignChars, "").split("|"), i2 = null !== (t2 = r2[3]) && void 0 !== t2 && t2.trim() ? r2[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [], o2 = { type: "table", raw: r2[0], header: [], align: [], rows: [] };
      if (u2.length === a2.length) {
        var s2, c2 = Qt(a2);
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
        var d2, p2 = Qt(i2);
        try {
          for (p2.s(); !(d2 = p2.n()).done; ) {
            var h2 = d2.value;
            o2.rows.push(Zv(h2, o2.header.length).map((function(e12, t3) {
              return { text: e12, tokens: n2.lexer.inline(e12), header: false, align: o2.align[t3] };
            })));
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
        var r2 = Lv(n2.slice(0, -1), "\\");
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
      return i2 = i2.trim(), this.rules.other.startAngleBracket.test(i2) && (i2 = this.options.pedantic && !this.rules.other.endAngleBracket.test(n2) ? i2.slice(1) : i2.slice(1, -1)), $v(t2, { href: i2 ? i2.replace(this.rules.inline.anyPunctuation, "$1") : i2, title: o2 ? o2.replace(this.rules.inline.anyPunctuation, "$1") : o2 }, t2[0], this.lexer, this.rules);
    }
  } }, { key: "reflink", value: function(e11, t2) {
    var n2;
    if ((n2 = this.rules.inline.reflink.exec(e11)) || (n2 = this.rules.inline.nolink.exec(e11))) {
      var r2 = t2[(n2[2] || n2[1]).replace(this.rules.other.multipleSpaceGlobal, " ").toLowerCase()];
      if (!r2) {
        var u2 = n2[0].charAt(0);
        return { type: "text", raw: u2, text: u2 };
      }
      return $v(n2, r2, n2[0], this.lexer, this.rules);
    }
  } }, { key: "emStrong", value: function(e11, t2) {
    var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", r2 = this.rules.inline.emStrongLDelim.exec(e11);
    if (r2 && (!r2[3] || !n2.match(this.rules.other.unicodeAlphaNumeric)) && (!r2[1] && !r2[2] || !n2 || this.rules.inline.punctuation.exec(n2))) {
      var u2, a2, i2 = ln(r2[0]).length - 1, o2 = i2, s2 = 0, c2 = "*" === r2[0][0] ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (c2.lastIndex = 0, t2 = t2.slice(-1 * e11.length + i2); null != (r2 = c2.exec(t2)); ) if (u2 = r2[1] || r2[2] || r2[3] || r2[4] || r2[5] || r2[6]) if (a2 = ln(u2).length, r2[3] || r2[4]) o2 += a2;
      else if (!((r2[5] || r2[6]) && i2 % 3) || (i2 + a2) % 3) {
        if (!((o2 -= a2) > 0)) {
          a2 = Math.min(a2, a2 + o2 + s2);
          var l2 = ln(r2[0])[0].length, f2 = e11.slice(0, i2 + r2.index + l2 + a2);
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
  var Uv = (function() {
    function e11(t2) {
      Wt(this, e11), Yt(this, "tokens", void 0), Yt(this, "options", void 0), Yt(this, "state", void 0), Yt(this, "tokenizer", void 0), Yt(this, "inlineQueue", void 0), this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t2 || Lh, this.options.tokenizer = this.options.tokenizer || new qv(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
      var n2 = { other: Vh, block: Pv.normal, inline: jv.normal };
      this.options.pedantic ? (n2.block = Pv.pedantic, n2.inline = jv.pedantic) : this.options.gfm && (n2.block = Pv.gfm, this.options.breaks ? n2.inline = jv.breaks : n2.inline = jv.gfm), this.tokenizer.rules = n2;
    }
    return Gt(e11, [{ key: "lex", value: function(e12) {
      e12 = e12.replace(Vh.carriageReturn, "\n"), this.blockTokens(e12, this.tokens);
      for (var t2 = 0; t2 < this.inlineQueue.length; t2++) {
        var n2 = this.inlineQueue[t2];
        this.inlineTokens(n2.src, n2.tokens);
      }
      return this.inlineQueue = [], this.tokens;
    } }, { key: "blockTokens", value: function(e12) {
      var t2 = this, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], r2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      this.options.pedantic && (e12 = e12.replace(Vh.tabCharGlobal, "    ").replace(Vh.spaceLine, ""));
      for (var u2, a2 = function() {
        var u3, a3, i2;
        if (null !== (u3 = t2.options.extensions) && void 0 !== u3 && null !== (u3 = u3.block) && void 0 !== u3 && u3.some((function(r3) {
          return !!(i2 = r3.call({ lexer: t2 }, e12, n2)) && (e12 = e12.substring(i2.raw.length), n2.push(i2), true);
        }))) return 0;
        if (i2 = t2.tokenizer.space(e12)) {
          e12 = e12.substring(i2.raw.length);
          var o2 = n2.at(-1);
          return 1 === i2.raw.length && void 0 !== o2 ? o2.raw += "\n" : n2.push(i2), 0;
        }
        if (i2 = t2.tokenizer.code(e12)) {
          e12 = e12.substring(i2.raw.length);
          var s2 = n2.at(-1);
          return "paragraph" === (null == s2 ? void 0 : s2.type) || "text" === (null == s2 ? void 0 : s2.type) ? (s2.raw += "\n" + i2.raw, s2.text += "\n" + i2.text, t2.inlineQueue.at(-1).src = s2.text) : n2.push(i2), 0;
        }
        if (i2 = t2.tokenizer.fences(e12)) return e12 = e12.substring(i2.raw.length), n2.push(i2), 0;
        if (i2 = t2.tokenizer.heading(e12)) return e12 = e12.substring(i2.raw.length), n2.push(i2), 0;
        if (i2 = t2.tokenizer.hr(e12)) return e12 = e12.substring(i2.raw.length), n2.push(i2), 0;
        if (i2 = t2.tokenizer.blockquote(e12)) return e12 = e12.substring(i2.raw.length), n2.push(i2), 0;
        if (i2 = t2.tokenizer.list(e12)) return e12 = e12.substring(i2.raw.length), n2.push(i2), 0;
        if (i2 = t2.tokenizer.html(e12)) return e12 = e12.substring(i2.raw.length), n2.push(i2), 0;
        if (i2 = t2.tokenizer.def(e12)) {
          e12 = e12.substring(i2.raw.length);
          var c2 = n2.at(-1);
          return "paragraph" === (null == c2 ? void 0 : c2.type) || "text" === (null == c2 ? void 0 : c2.type) ? (c2.raw += "\n" + i2.raw, c2.text += "\n" + i2.raw, t2.inlineQueue.at(-1).src = c2.text) : t2.tokens.links[i2.tag] || (t2.tokens.links[i2.tag] = { href: i2.href, title: i2.title }), 0;
        }
        if (i2 = t2.tokenizer.table(e12)) return e12 = e12.substring(i2.raw.length), n2.push(i2), 0;
        if (i2 = t2.tokenizer.lheading(e12)) return e12 = e12.substring(i2.raw.length), n2.push(i2), 0;
        var l2 = e12;
        if (null !== (a3 = t2.options.extensions) && void 0 !== a3 && a3.startBlock) {
          var f2, d2 = 1 / 0, p2 = e12.slice(1);
          t2.options.extensions.startBlock.forEach((function(e13) {
            "number" == typeof (f2 = e13.call({ lexer: t2 }, p2)) && f2 >= 0 && (d2 = Math.min(d2, f2));
          })), d2 < 1 / 0 && d2 >= 0 && (l2 = e12.substring(0, d2 + 1));
        }
        if (t2.state.top && (i2 = t2.tokenizer.paragraph(l2))) {
          var h2 = n2.at(-1);
          return r2 && "paragraph" === (null == h2 ? void 0 : h2.type) ? (h2.raw += "\n" + i2.raw, h2.text += "\n" + i2.text, t2.inlineQueue.pop(), t2.inlineQueue.at(-1).src = h2.text) : n2.push(i2), r2 = l2.length !== e12.length, e12 = e12.substring(i2.raw.length), 0;
        }
        if (i2 = t2.tokenizer.text(e12)) {
          e12 = e12.substring(i2.raw.length);
          var v2 = n2.at(-1);
          return "text" === (null == v2 ? void 0 : v2.type) ? (v2.raw += "\n" + i2.raw, v2.text += "\n" + i2.text, t2.inlineQueue.pop(), t2.inlineQueue.at(-1).src = v2.text) : n2.push(i2), 0;
        }
        if (e12) {
          var m2 = "Infinite loop on byte: " + e12.charCodeAt(0);
          if (t2.options.silent) return console.error(m2), 1;
          throw new Error(m2);
        }
      }; e12 && (0 === (u2 = a2()) || 1 !== u2); ) ;
      return this.state.top = true, n2;
    } }, { key: "inline", value: function(e12) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      return this.inlineQueue.push({ src: e12, tokens: t2 }), t2;
    } }, { key: "inlineTokens", value: function(e12) {
      var t2 = this, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], r2 = e12, u2 = null;
      if (this.tokens.links) {
        var a2 = Object.keys(this.tokens.links);
        if (a2.length > 0) for (; null != (u2 = this.tokenizer.rules.inline.reflinkSearch.exec(r2)); ) a2.includes(u2[0].slice(u2[0].lastIndexOf("[") + 1, -1)) && (r2 = r2.slice(0, u2.index) + "[" + "a".repeat(u2[0].length - 2) + "]" + r2.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
      }
      for (; null != (u2 = this.tokenizer.rules.inline.anyPunctuation.exec(r2)); ) r2 = r2.slice(0, u2.index) + "++" + r2.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
      for (; null != (u2 = this.tokenizer.rules.inline.blockSkip.exec(r2)); ) r2 = r2.slice(0, u2.index) + "[" + "a".repeat(u2[0].length - 2) + "]" + r2.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      for (var i2, o2 = false, s2 = "", c2 = function() {
        var u3, a3, i3;
        if (o2 || (s2 = ""), o2 = false, null !== (u3 = t2.options.extensions) && void 0 !== u3 && null !== (u3 = u3.inline) && void 0 !== u3 && u3.some((function(r3) {
          return !!(i3 = r3.call({ lexer: t2 }, e12, n2)) && (e12 = e12.substring(i3.raw.length), n2.push(i3), true);
        }))) return 0;
        if (i3 = t2.tokenizer.escape(e12)) return e12 = e12.substring(i3.raw.length), n2.push(i3), 0;
        if (i3 = t2.tokenizer.tag(e12)) return e12 = e12.substring(i3.raw.length), n2.push(i3), 0;
        if (i3 = t2.tokenizer.link(e12)) return e12 = e12.substring(i3.raw.length), n2.push(i3), 0;
        if (i3 = t2.tokenizer.reflink(e12, t2.tokens.links)) {
          e12 = e12.substring(i3.raw.length);
          var c3 = n2.at(-1);
          return "text" === i3.type && "text" === (null == c3 ? void 0 : c3.type) ? (c3.raw += i3.raw, c3.text += i3.text) : n2.push(i3), 0;
        }
        if (i3 = t2.tokenizer.emStrong(e12, r2, s2)) return e12 = e12.substring(i3.raw.length), n2.push(i3), 0;
        if (i3 = t2.tokenizer.codespan(e12)) return e12 = e12.substring(i3.raw.length), n2.push(i3), 0;
        if (i3 = t2.tokenizer.br(e12)) return e12 = e12.substring(i3.raw.length), n2.push(i3), 0;
        if (i3 = t2.tokenizer.del(e12)) return e12 = e12.substring(i3.raw.length), n2.push(i3), 0;
        if (i3 = t2.tokenizer.autolink(e12)) return e12 = e12.substring(i3.raw.length), n2.push(i3), 0;
        if (!t2.state.inLink && (i3 = t2.tokenizer.url(e12))) return e12 = e12.substring(i3.raw.length), n2.push(i3), 0;
        var l2 = e12;
        if (null !== (a3 = t2.options.extensions) && void 0 !== a3 && a3.startInline) {
          var f2, d2 = 1 / 0, p2 = e12.slice(1);
          t2.options.extensions.startInline.forEach((function(e13) {
            "number" == typeof (f2 = e13.call({ lexer: t2 }, p2)) && f2 >= 0 && (d2 = Math.min(d2, f2));
          })), d2 < 1 / 0 && d2 >= 0 && (l2 = e12.substring(0, d2 + 1));
        }
        if (i3 = t2.tokenizer.inlineText(l2)) {
          e12 = e12.substring(i3.raw.length), "_" !== i3.raw.slice(-1) && (s2 = i3.raw.slice(-1)), o2 = true;
          var h2 = n2.at(-1);
          return "text" === (null == h2 ? void 0 : h2.type) ? (h2.raw += i3.raw, h2.text += i3.text) : n2.push(i3), 0;
        }
        if (e12) {
          var v2 = "Infinite loop on byte: " + e12.charCodeAt(0);
          if (t2.options.silent) return console.error(v2), 1;
          throw new Error(v2);
        }
      }; e12 && (0 === (i2 = c2()) || 1 !== i2); ) ;
      return n2;
    } }], [{ key: "rules", get: function() {
      return { block: Pv, inline: jv };
    } }, { key: "lex", value: function(t2, n2) {
      return new e11(n2).lex(t2);
    } }, { key: "lexInline", value: function(t2, n2) {
      return new e11(n2).inlineTokens(t2);
    } }]);
  })();
  var Vv = Gt((function e7(t2) {
    Wt(this, e7), Yt(this, "options", void 0), Yt(this, "parser", void 0), this.options = t2 || Lh;
  }), [{ key: "space", value: function(e11) {
    return "";
  } }, { key: "code", value: function(e11) {
    var t2, n2 = e11.text, r2 = e11.lang, u2 = e11.escaped, a2 = null === (t2 = (r2 || "").match(Vh.notSpaceStart)) || void 0 === t2 ? void 0 : t2[0], i2 = n2.replace(Vh.endingNewline, "") + "\n";
    return a2 ? '<pre><code class="language-' + Rv(a2) + '">' + (u2 ? i2 : Rv(i2, true)) + "</code></pre>\n" : "<pre><code>" + (u2 ? i2 : Rv(i2, true)) + "</code></pre>\n";
  } }, { key: "blockquote", value: function(e11) {
    var t2 = e11.tokens, n2 = this.parser.parse(t2);
    return "<blockquote>\n".concat(n2, "</blockquote>\n");
  } }, { key: "html", value: function(e11) {
    return e11.text;
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
      e11.loose ? "paragraph" === (null === (n2 = e11.tokens[0]) || void 0 === n2 ? void 0 : n2.type) ? (e11.tokens[0].text = r2 + " " + e11.tokens[0].text, e11.tokens[0].tokens && e11.tokens[0].tokens.length > 0 && "text" === e11.tokens[0].tokens[0].type && (e11.tokens[0].tokens[0].text = r2 + " " + Rv(e11.tokens[0].tokens[0].text), e11.tokens[0].tokens[0].escaped = true)) : e11.tokens.unshift({ type: "text", raw: r2 + " ", text: r2 + " ", escaped: true }) : t2 += r2 + " ";
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
    return "<code>".concat(Rv(t2, true), "</code>");
  } }, { key: "br", value: function(e11) {
    return "<br>";
  } }, { key: "del", value: function(e11) {
    var t2 = e11.tokens;
    return "<del>".concat(this.parser.parseInline(t2), "</del>");
  } }, { key: "link", value: function(e11) {
    var t2 = e11.href, n2 = e11.title, r2 = e11.tokens, u2 = this.parser.parseInline(r2), a2 = Mv(t2);
    if (null === a2) return u2;
    var i2 = '<a href="' + (t2 = a2) + '"';
    return n2 && (i2 += ' title="' + Rv(n2) + '"'), i2 + ">" + u2 + "</a>";
  } }, { key: "image", value: function(e11) {
    var t2 = e11.href, n2 = e11.title, r2 = e11.text, u2 = e11.tokens;
    u2 && (r2 = this.parser.parseInline(u2, this.parser.textRenderer));
    var a2 = Mv(t2);
    if (null === a2) return Rv(r2);
    var i2 = '<img src="'.concat(t2 = a2, '" alt="').concat(r2, '"');
    return n2 && (i2 += ' title="'.concat(Rv(n2), '"')), i2 + ">";
  } }, { key: "text", value: function(e11) {
    return "tokens" in e11 && e11.tokens ? this.parser.parseInline(e11.tokens) : "escaped" in e11 && e11.escaped ? e11.text : Rv(e11.text);
  } }]);
  var Hv = Gt((function e8() {
    Wt(this, e8);
  }), [{ key: "strong", value: function(e11) {
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
  var Wv = (function() {
    function e11(t2) {
      Wt(this, e11), Yt(this, "options", void 0), Yt(this, "renderer", void 0), Yt(this, "textRenderer", void 0), this.options = t2 || Lh, this.options.renderer = this.options.renderer || new Vv(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Hv();
    }
    return Gt(e11, [{ key: "parse", value: function(e12) {
      for (var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n2 = "", r2 = 0; r2 < e12.length; r2++) {
        var u2, a2 = e12[r2];
        if (null !== (u2 = this.options.extensions) && void 0 !== u2 && null !== (u2 = u2.renderers) && void 0 !== u2 && u2[a2.type]) {
          var i2 = a2, o2 = this.options.extensions.renderers[i2.type].call({ parser: this }, i2);
          if (false !== o2 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(i2.type)) {
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
  var Kv = (Rh = Gt((function e9(t2) {
    Wt(this, e9), Yt(this, "options", void 0), Yt(this, "block", void 0), this.options = t2 || Lh;
  }), [{ key: "preprocess", value: function(e11) {
    return e11;
  } }, { key: "postprocess", value: function(e11) {
    return e11;
  } }, { key: "processAllTokens", value: function(e11) {
    return e11;
  } }, { key: "provideLexer", value: function() {
    return this.block ? Uv.lex : Uv.lexInline;
  } }, { key: "provideParser", value: function() {
    return this.block ? Wv.parse : Wv.parseInline;
  } }]), Yt(Rh, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), Rh);
  var Jv = Gt((function e10() {
    Wt(this, e10), Yt(this, "defaults", { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null }), Yt(this, "options", this.setOptions), Yt(this, "parse", this.parseMarkdown(true)), Yt(this, "parseInline", this.parseMarkdown(false)), Yt(this, "Parser", Wv), Yt(this, "Renderer", Vv), Yt(this, "TextRenderer", Hv), Yt(this, "Lexer", Uv), Yt(this, "Tokenizer", qv), Yt(this, "Hooks", Kv), this.use.apply(this, arguments);
  }), [{ key: "walkTokens", value: function(e11, t2) {
    var n2, r2 = this, u2 = [], a2 = Qt(e11);
    try {
      var i2 = function() {
        var e12 = n2.value;
        switch (u2 = u2.concat(t2.call(r2, e12)), e12.type) {
          case "table":
            var a3, i3 = e12, o2 = Qt(i3.header);
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
            var c2, l2 = Qt(i3.rows);
            try {
              for (l2.s(); !(c2 = l2.n()).done; ) {
                var f2, d2 = Qt(c2.value);
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
            null !== (v2 = r2.defaults.extensions) && void 0 !== v2 && null !== (v2 = v2.childTokens) && void 0 !== v2 && v2[m2.type] ? r2.defaults.extensions.childTokens[m2.type].forEach((function(e13) {
              var n3 = m2[e13].flat(1 / 0);
              u2 = u2.concat(r2.walkTokens(n3, t2));
            })) : m2.tokens && (u2 = u2.concat(r2.walkTokens(m2.tokens, t2)));
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
    return r2.forEach((function(n3) {
      var r3 = un({}, n3);
      if (r3.async = e11.defaults.async || r3.async || false, n3.extensions && (n3.extensions.forEach((function(e12) {
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
      })), r3.extensions = t2), n3.renderer) {
        var u3 = e11.defaults.renderer || new Vv(e11.defaults), a2 = function() {
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
        var o2 = e11.defaults.tokenizer || new qv(e11.defaults), s2 = function() {
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
        var l2 = e11.defaults.hooks || new Kv(), f2 = function() {
          if (!(d2 in l2)) throw new Error("hook '".concat(d2, "' does not exist"));
          if (["options", "block"].includes(d2)) return 1;
          var t3 = d2, r4 = n3.hooks[t3], u4 = l2[t3];
          Kv.passThroughHooks.has(d2) ? l2[t3] = function(t4) {
            if (e11.defaults.async) return Promise.resolve(r4.call(l2, t4)).then((function(e12) {
              return u4.call(l2, e12);
            }));
            var n4 = r4.call(l2, t4);
            return u4.call(l2, n4);
          } : l2[t3] = function() {
            for (var e12 = arguments.length, t4 = new Array(e12), n4 = 0; n4 < e12; n4++) t4[n4] = arguments[n4];
            var a3 = r4.apply(l2, t4);
            return false === a3 && (a3 = u4.apply(l2, t4)), a3;
          };
        };
        for (var d2 in n3.hooks) f2();
        r3.hooks = l2;
      }
      if (n3.walkTokens) {
        var p2 = e11.defaults.walkTokens, h2 = n3.walkTokens;
        r3.walkTokens = function(e12) {
          var t3 = [];
          return t3.push(h2.call(this, e12)), p2 && (t3 = t3.concat(p2.call(this, e12))), t3;
        };
      }
      e11.defaults = un(un({}, e11.defaults), r3);
    })), this;
  } }, { key: "setOptions", value: function(e11) {
    return this.defaults = un(un({}, this.defaults), e11), this;
  } }, { key: "lexer", value: function(e11, t2) {
    return Uv.lex(e11, null != t2 ? t2 : this.defaults);
  } }, { key: "parser", value: function(e11, t2) {
    return Wv.parse(e11, null != t2 ? t2 : this.defaults);
  } }, { key: "parseMarkdown", value: function(e11) {
    var t2 = this;
    return function(n2, r2) {
      var u2 = un({}, r2), a2 = un(un({}, t2.defaults), u2), i2 = t2.onError(!!a2.silent, !!a2.async);
      if (true === t2.defaults.async && false === u2.async) return i2(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (null == n2) return i2(new Error("marked(): input parameter is undefined or null"));
      if ("string" != typeof n2) return i2(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n2) + ", string expected"));
      a2.hooks && (a2.hooks.options = a2, a2.hooks.block = e11);
      var o2 = a2.hooks ? a2.hooks.provideLexer() : e11 ? Uv.lex : Uv.lexInline, s2 = a2.hooks ? a2.hooks.provideParser() : e11 ? Wv.parse : Wv.parseInline;
      if (a2.async) return Promise.resolve(a2.hooks ? a2.hooks.preprocess(n2) : n2).then((function(e12) {
        return o2(e12, a2);
      })).then((function(e12) {
        return a2.hooks ? a2.hooks.processAllTokens(e12) : e12;
      })).then((function(e12) {
        return a2.walkTokens ? Promise.all(t2.walkTokens(e12, a2.walkTokens)).then((function() {
          return e12;
        })) : e12;
      })).then((function(e12) {
        return s2(e12, a2);
      })).then((function(e12) {
        return a2.hooks ? a2.hooks.postprocess(e12) : e12;
      })).catch(i2);
      try {
        a2.hooks && (n2 = a2.hooks.preprocess(n2));
        var c2 = o2(n2, a2);
        a2.hooks && (c2 = a2.hooks.processAllTokens(c2)), a2.walkTokens && t2.walkTokens(c2, a2.walkTokens);
        var l2 = s2(c2, a2);
        return a2.hooks && (l2 = a2.hooks.postprocess(l2)), l2;
      } catch (e12) {
        return i2(e12);
      }
    };
  } }, { key: "onError", value: function(e11, t2) {
    return function(n2) {
      if (n2.message += "\nPlease report this to https://github.com/markedjs/marked.", e11) {
        var r2 = "<p>An error occurred:</p><pre>" + Rv(n2.message + "", true) + "</pre>";
        return t2 ? Promise.resolve(r2) : r2;
      }
      if (t2) return Promise.reject(n2);
      throw n2;
    };
  } }]);
  var Gv = new Jv();
  function Qv(e11, t2) {
    return Gv.parse(e11, t2);
  }
  function Yv(e11) {
    return e11.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  Qv.options = Qv.setOptions = function(e11) {
    return Gv.setOptions(e11), Qv.defaults = Gv.defaults, $h(Qv.defaults), Qv;
  }, Qv.getDefaults = function() {
    return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
  }, Qv.defaults = Lh, Qv.use = function() {
    return Gv.use.apply(Gv, arguments), Qv.defaults = Gv.defaults, $h(Qv.defaults), Qv;
  }, Qv.walkTokens = function(e11, t2) {
    return Gv.walkTokens(e11, t2);
  }, Qv.parseInline = Gv.parseInline, Qv.Parser = Wv, Qv.parser = Wv.parse, Qv.Renderer = Vv, Qv.TextRenderer = Hv, Qv.Lexer = Uv, Qv.lexer = Uv.lex, Qv.Tokenizer = qv, Qv.Hooks = Kv, Qv.parse = Qv, Qv.options, Qv.setOptions, Qv.use, Qv.walkTokens, Qv.parseInline, Wv.parse, Uv.lex;
  var Xv = new Qv.Renderer();
  Xv.code = function(e11) {
    var t2 = e11.text, n2 = e11.lang, r2 = void 0 === n2 ? "" : n2, u2 = e11.escaped, a2 = r2 ? "language-".concat(r2) : "", i2 = u2 ? t2 : Yv(t2), o2 = encodeURIComponent(t2);
    return '\n    <div class="DocSearch-CodeSnippet">\n      <button class="DocSearch-CodeSnippet-CopyButton" data-code="'.concat(o2, '" aria-label="copy code">').concat('<svg class="DocSearch-CodeSnippet-CopyIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>').concat('<svg class="DocSearch-CodeSnippet-CheckIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>', '<span class="DocSearch-CodeSnippet-CopyButton-Label"></span></button>\n      <pre><code class="').concat(a2, '">').concat(i2, "</code></pre>\n    </div>\n  ");
  }, Xv.link = function(e11) {
    var t2 = e11.href, n2 = e11.title, r2 = e11.text, u2 = n2 ? ' title="'.concat(Yv(n2), '"') : "", a2 = t2 ? Yv(t2) : "", i2 = Yv(r2);
    return '<a href="'.concat(a2, '"').concat(u2, ' target="_blank" rel="noopener noreferrer">').concat(i2, "</a>");
  };
  var em = et((function(e11) {
    var t2 = e11.content, n2 = e11.copyButtonText, r2 = e11.copyButtonCopiedText, u2 = e11.isStreaming, a2 = Te((function() {
      return Qv.parse(t2, { gfm: true, breaks: true, renderer: Xv });
    }), [t2]), i2 = Oe(null);
    return Se((function() {
      var e12 = i2.current;
      if (e12) return Array.from(e12.querySelectorAll(".DocSearch-CodeSnippet-CopyButton")).forEach((function(e13) {
        var t4 = e13.querySelector(".DocSearch-CodeSnippet-CopyButton-Label");
        t4 && (t4.textContent = n2), e13.classList.remove("DocSearch-CodeSnippet-CopyButton--copied");
      })), e12.addEventListener("click", t3), function() {
        e12.removeEventListener("click", t3);
      };
      function t3(e13) {
        var t4, u3 = e13.target.closest(".DocSearch-CodeSnippet-CopyButton");
        if (u3) {
          var a3 = null !== (t4 = u3.getAttribute("data-code")) && void 0 !== t4 ? t4 : "";
          navigator.clipboard.writeText(decodeURIComponent(a3)).catch((function() {
          }));
          var i3 = u3.querySelector(".DocSearch-CodeSnippet-CopyButton-Label");
          if (i3) {
            u3.classList.add("DocSearch-CodeSnippet-CopyButton--copied");
            var o2 = n2;
            i3.textContent = r2, setTimeout((function() {
              u3.classList.remove("DocSearch-CodeSnippet-CopyButton--copied"), i3.textContent = o2;
            }), 1500);
          }
        }
      }
    }), [a2, n2, r2]), jt.createElement("div", { ref: i2, className: "DocSearch-Markdown-Content ".concat(u2 ? "DocSearch-Markdown-Content--streaming" : ""), dangerouslySetInnerHTML: { __html: a2 } });
  }));
  em.displayName = "MemoizedMarkdown";
  var tm = function(e11, t2) {
    var n2, r2, u2 = t2[0].parts.find((function(e12) {
      return "text" === e12.type;
    }));
    return { query: e11, objectID: null !== (n2 = null == u2 ? void 0 : u2.text) && void 0 !== n2 ? n2 : "", messages: t2, type: "askAI", anchor: "stored", content: null, hierarchy: { lvl0: "askAI", lvl1: null !== (r2 = null == u2 ? void 0 : u2.text) && void 0 !== r2 ? r2 : "", lvl2: null, lvl3: null, lvl4: null, lvl5: null, lvl6: null }, url: "", url_without_anchor: "" };
  };
  var nm = function(e11) {
    return null == e11 ? void 0 : e11.parts.find((function(e12) {
      return "text" === e12.type;
    }));
  };
  var rm = ["translations"];
  function um(e11) {
    var t2 = e11.disclaimerText;
    return jt.createElement("p", { className: "DocSearch-AskAiScreen-Disclaimer" }, t2);
  }
  function am(e11) {
    var t2, n2 = e11.exchange, r2 = e11.askAiStreamError, u2 = e11.isLastExchange, a2 = e11.loadingStatus, i2 = e11.onSearchQueryClick, o2 = e11.translations, s2 = e11.conversations, c2 = e11.onFeedback, l2 = n2.userMessage, f2 = n2.assistantMessage, d2 = !u2 || u2 && "ready" === a2 && Boolean(f2), p2 = Te((function() {
      return nm(f2);
    }), [f2]), h2 = Te((function() {
      return nm(l2);
    }), [l2]), v2 = jt.useMemo((function() {
      return e12 = f2, t3 = [], n3 = /* @__PURE__ */ new Set(), e12 ? (e12.parts.forEach((function(e13) {
        if ("text" === e13.type && 0 !== e13.text.length) {
          var r3, u3 = e13.text.replace(/```[\s\S]*?```/g, "").replace(/`[^`]*`/g, ""), a3 = Qt(u3.matchAll(/\[([^\]]*)\]\(([^)]+)\)/g));
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
          var c3, l3 = Qt(u3.matchAll(/(?<!\]\()https?:\/\/[^\s<>"{}|\\^`[\]]+/g));
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
      })), t3) : [];
      var e12, t3, n3;
    }), [f2]), m2 = jt.useMemo((function() {
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
      })((null == f2 ? void 0 : f2.parts) || []);
    }), [f2]), D2 = ["submitted", "streaming"].includes(a2) && u2 && !m2.some((function(e12) {
      return "step-start" !== e12.type;
    }));
    return jt.createElement("div", { className: "DocSearch-AskAiScreen-Response-Container" }, jt.createElement("div", { className: "DocSearch-AskAiScreen-Response" }, jt.createElement("div", { className: "DocSearch-AskAiScreen-Message DocSearch-AskAiScreen-Message--user" }, jt.createElement("p", { className: "DocSearch-AskAiScreen-Query" }, null !== (t2 = null == h2 ? void 0 : h2.text) && void 0 !== t2 ? t2 : "")), jt.createElement("div", { className: "DocSearch-AskAiScreen-Message DocSearch-AskAiScreen-Message--assistant" }, jt.createElement("div", { className: "DocSearch-AskAiScreen-MessageContent" }, "error" === a2 && r2 && u2 && jt.createElement("div", { className: "DocSearch-AskAiScreen-MessageContent DocSearch-AskAiScreen-Error" }, jt.createElement(Sh, null), jt.createElement(em, { content: r2.message, copyButtonText: "", copyButtonCopiedText: "", isStreaming: false })), D2 && jt.createElement("div", { className: "DocSearch-AskAiScreen-MessageContent-Reasoning" }, jt.createElement("span", { className: "shimmer" }, o2.thinkingText || "Thinking...")), m2.map((function(e12, t3) {
      var n3, r3 = t3;
      if ("string" == typeof e12) return jt.createElement(em, { key: r3, content: e12, copyButtonText: o2.copyButtonText || "Copy", copyButtonCopiedText: o2.copyButtonCopiedText || "Copied!", isStreaming: "streaming" === a2 });
      if ("aggregated-tool-call" === e12.type) return jt.createElement(Zh, { key: r3, queries: e12.queries, translations: o2, onSearchQueryClick: i2 });
      if ("reasoning" === e12.type && "streaming" === e12.state) return jt.createElement("div", { key: r3, className: "DocSearch-AskAiScreen-MessageContent-Reasoning shimmer" }, jt.createElement(Ch, { className: "DocSearch-AskAiScreen-SmallerLoadingIcon" }), jt.createElement("span", { className: "shimmer" }, "Reasoning..."));
      if ("text" === e12.type) return jt.createElement(em, { key: r3, content: e12.text, copyButtonText: o2.copyButtonText || "Copy", copyButtonCopiedText: o2.copyButtonCopiedText || "Copied!", isStreaming: "streaming" === e12.state });
      if ("tool-searchIndex" === e12.type) switch (e12.state) {
        case "input-streaming":
          return jt.createElement("div", { key: r3, className: "DocSearch-AskAiScreen-MessageContent-Tool Tool--PartialCall shimmer" }, jt.createElement(Ch, { className: "DocSearch-AskAiScreen-SmallerLoadingIcon" }), jt.createElement("span", null, o2.preToolCallText || "Searching..."));
        case "input-available":
          return jt.createElement("div", { key: r3, className: "DocSearch-AskAiScreen-MessageContent-Tool Tool--Call shimmer" }, jt.createElement(Ch, { className: "DocSearch-AskAiScreen-SmallerLoadingIcon" }), jt.createElement("span", null, "".concat(o2.duringToolCallText || "Searching for ", ' "').concat(e12.input.query || "", '" ...')));
        case "output-available":
          return jt.createElement("div", { key: r3, className: "DocSearch-AskAiScreen-MessageContent-Tool Tool--Result" }, jt.createElement(Fn, null), jt.createElement("span", null, "".concat(o2.afterToolCallText || "Searched for"), " ", jt.createElement("span", { role: "button", tabIndex: 0, className: "DocSearch-AskAiScreen-MessageContent-Tool-Query", onKeyDown: function(t4) {
            "Enter" !== t4.key && " " !== t4.key || (t4.preventDefault(), i2(e12.output.query || ""));
          }, onClick: function() {
            return i2(e12.output.query || "");
          } }, " ", '"', e12.output.query || "", '"'), " ", "found ", (null === (n3 = e12.output.hits) || void 0 === n3 ? void 0 : n3.length) || 0, " results"));
      }
      return null;
    })))), jt.createElement("div", { className: "DocSearch-AskAiScreen-Answer-Footer" }, jt.createElement(im, { id: (null == l2 ? void 0 : l2.id) || n2.id, showActions: d2, latestAssistantMessageContent: (null == p2 ? void 0 : p2.text) || null, translations: o2, conversations: s2, onFeedback: c2 }))), v2.length > 0 ? jt.createElement(om, { urlsToDisplay: v2, relatedSourcesText: o2.relatedSourcesText }) : null);
  }
  function im(e11) {
    var t2 = e11.id, n2 = e11.showActions, r2 = e11.latestAssistantMessageContent, u2 = e11.translations, a2 = e11.conversations, i2 = e11.onFeedback, o2 = jt.useMemo((function() {
      var e12, n3, r3 = null === (e12 = a2.getOne) || void 0 === e12 ? void 0 : e12.call(a2, t2);
      return null !== (n3 = null == r3 ? void 0 : r3.feedback) && void 0 !== n3 ? n3 : null;
    }), [a2, t2]), s2 = cn(jt.useState(o2), 2), c2 = s2[0], l2 = s2[1], f2 = cn(jt.useState(false), 2), d2 = f2[0], p2 = f2[1], h2 = cn(jt.useState(null), 2), v2 = h2[0], m2 = h2[1], D2 = (function() {
      var e12 = Vt(on().mark((function e13(n3) {
        return on().wrap((function(e14) {
          for (; ; ) switch (e14.prev = e14.next) {
            case 0:
              if (!d2) {
                e14.next = 2;
                break;
              }
              return e14.abrupt("return");
            case 2:
              return m2(null), p2(true), e14.prev = 4, e14.next = 7, null == i2 ? void 0 : i2(t2, "like" === n3 ? 1 : 0);
            case 7:
              l2(n3), e14.next = 13;
              break;
            case 10:
              e14.prev = 10, e14.t0 = e14.catch(4), m2(e14.t0);
            case 13:
              return e14.prev = 13, p2(false), e14.finish(13);
            case 16:
            case "end":
              return e14.stop();
          }
        }), e13, null, [[4, 10, 13, 16]]);
      })));
      return function(t3) {
        return e12.apply(this, arguments);
      };
    })(), y2 = u2.likeButtonTitle, g2 = void 0 === y2 ? "Like" : y2, F2 = u2.dislikeButtonTitle, E2 = void 0 === F2 ? "Dislike" : F2, b2 = u2.thanksForFeedbackText, _2 = void 0 === b2 ? "Thanks for your feedback!" : b2;
    return n2 && r2 ? jt.createElement("div", { className: "DocSearch-AskAiScreen-Actions" }, null === c2 ? jt.createElement(jt.Fragment, null, d2 ? jt.createElement(Ch, { className: "DocSearch-AskAiScreen-SmallerLoadingIcon" }) : jt.createElement(jt.Fragment, null, jt.createElement(fm, { title: g2, onClick: function() {
      return D2("like");
    } }), jt.createElement(dm, { title: E2, onClick: function() {
      return D2("dislike");
    } })), v2 && jt.createElement("p", { className: "DocSearch-AskAiScreen-FeedbackText" }, v2.message || "An error occured")) : jt.createElement("p", { className: "DocSearch-AskAiScreen-FeedbackText DocSearch-AskAiScreen-FeedbackText--visible" }, _2), jt.createElement(lm, { translations: u2, onClick: function() {
      return navigator.clipboard.writeText(r2);
    } })) : null;
  }
  function om(e11) {
    var t2 = e11.urlsToDisplay, n2 = e11.relatedSourcesText;
    return jt.createElement("div", { className: "DocSearch-AskAiScreen-RelatedSources" }, jt.createElement("p", { className: "DocSearch-AskAiScreen-RelatedSources-Title" }, n2 || "Related sources"), jt.createElement("div", { className: "DocSearch-AskAiScreen-RelatedSources-List" }, t2.length > 0 && t2.map((function(e12) {
      return jt.createElement("a", { key: e12.url, href: e12.url, className: "DocSearch-AskAiScreen-RelatedSources-Item-Link", target: "_blank", rel: "noopener noreferrer" }, jt.createElement(cm, null), jt.createElement("span", null, e12.title || e12.url));
    }))));
  }
  function sm(e11) {
    var t2 = e11.translations, n2 = void 0 === t2 ? {} : t2, r2 = an(e11, rm), u2 = n2.disclaimerText, a2 = void 0 === u2 ? "Answers are generated with AI which can make mistakes. Verify responses." : u2, i2 = r2.messages, o2 = Te((function() {
      for (var e12 = [], t3 = 0; t3 < i2.length; t3++) if ("user" === i2[t3].role) {
        var n3, r3 = i2[t3], u3 = "assistant" === (null === (n3 = i2[t3 + 1]) || void 0 === n3 ? void 0 : n3.role) ? i2[t3 + 1] : null;
        e12.push({ id: r3.id, userMessage: r3, assistantMessage: u3 }), u3 && t3++;
      }
      return e12;
    }), [i2]), s2 = function(e12) {
      r2.onAskAiToggle(false), r2.setQuery(e12);
    };
    return jt.createElement("div", { className: "DocSearch-AskAiScreen DocSearch-AskAiScreen-Container" }, jt.createElement(um, { disclaimerText: a2 }), jt.createElement("div", { className: "DocSearch-AskAiScreen-Body" }, jt.createElement("div", { className: "DocSearch-AskAiScreen-ExchangesList" }, o2.slice().reverse().map((function(e12, t3) {
      return jt.createElement(am, { key: e12.id, exchange: e12, askAiStreamError: r2.askAiStreamError, isLastExchange: 0 === t3, loadingStatus: r2.status, translations: n2, conversations: r2.conversations, onSearchQueryClick: s2, onFeedback: r2.onFeedback });
    })))));
  }
  function cm() {
    return jt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, jt.createElement("line", { x1: "4", x2: "20", y1: "9", y2: "9" }), jt.createElement("line", { x1: "4", x2: "20", y1: "15", y2: "15" }), jt.createElement("line", { x1: "10", x2: "8", y1: "3", y2: "21" }), jt.createElement("line", { x1: "16", x2: "14", y1: "3", y2: "21" }));
  }
  function lm(e11) {
    var t2 = e11.onClick, n2 = e11.translations, r2 = n2.copyButtonTitle, u2 = void 0 === r2 ? "Copy" : r2, a2 = n2.copyButtonCopiedText, i2 = void 0 === a2 ? "Copied!" : a2, o2 = cn(we(false), 2), s2 = o2[0], c2 = o2[1];
    return Se((function() {
      if (s2) {
        var e12 = setTimeout((function() {
          c2(false);
        }), 1500);
        return function() {
          return clearTimeout(e12);
        };
      }
    }), [s2]), jt.createElement("button", { type: "button", className: "DocSearch-AskAiScreen-ActionButton DocSearch-AskAiScreen-CopyButton ".concat(s2 ? "DocSearch-AskAiScreen-CopyButton--copied" : ""), disabled: s2, title: s2 ? i2 : u2, onClick: function() {
      t2(), c2(true);
    } }, s2 ? jt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-check-icon lucide-check" }, jt.createElement("path", { d: "M20 6 9 17l-5-5" })) : jt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-copy-icon lucide-copy" }, jt.createElement("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }), jt.createElement("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })));
  }
  function fm(e11) {
    var t2 = e11.title, n2 = e11.onClick;
    return jt.createElement("button", { type: "button", className: "DocSearch-AskAiScreen-ActionButton DocSearch-AskAiScreen-LikeButton", title: t2, onClick: n2 }, jt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-thumbs-up-icon lucide-thumbs-up" }, jt.createElement("path", { d: "M7 10v12" }), jt.createElement("path", { d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" })));
  }
  function dm(e11) {
    var t2 = e11.title, n2 = e11.onClick;
    return jt.createElement("button", { type: "button", className: "DocSearch-AskAiScreen-ActionButton DocSearch-AskAiScreen-DislikeButton", title: t2, onClick: n2 }, jt.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-thumbs-down-icon lucide-thumbs-down" }, jt.createElement("path", { d: "M17 14V2" }), jt.createElement("path", { d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" })));
  }
  function pm(e11) {
    var t2 = e11.translations, n2 = void 0 === t2 ? {} : t2, r2 = n2.titleText, u2 = void 0 === r2 ? "Unable to fetch results" : r2, a2 = n2.helpText, i2 = void 0 === a2 ? "You might want to check your network connection." : a2;
    return jt.createElement("div", { className: "DocSearch-ErrorScreen" }, jt.createElement("div", { className: "DocSearch-Screen-Icon" }, jt.createElement(Nh, null)), jt.createElement("p", { className: "DocSearch-Title" }, u2), jt.createElement("p", { className: "DocSearch-Help" }, i2));
  }
  var hm = ["translations"];
  function vm(e11) {
    var t2 = e11.translations, n2 = void 0 === t2 ? {} : t2, r2 = an(e11, hm), u2 = n2.noResultsText, a2 = void 0 === u2 ? "No results found for" : u2, i2 = n2.suggestedQueryText, o2 = void 0 === i2 ? "Try searching for" : i2, s2 = n2.reportMissingResultsText, c2 = void 0 === s2 ? "Believe this query should return results?" : s2, l2 = n2.reportMissingResultsLinkText, f2 = void 0 === l2 ? "Let us know." : l2, d2 = r2.state.context.searchSuggestions;
    return jt.createElement("div", { className: "DocSearch-NoResults ".concat(r2.canHandleAskAi ? "DocSearch-NoResults--withAskAi" : "") }, jt.createElement("div", { className: "DocSearch-Screen-Icon" }, jt.createElement(zh, null)), jt.createElement("p", { className: "DocSearch-Title" }, a2, ' "', jt.createElement("strong", null, r2.state.query), '"'), d2 && d2.length > 0 && jt.createElement("div", { className: "DocSearch-NoResults-Prefill-List" }, jt.createElement("p", { className: "DocSearch-Help" }, o2, ":"), jt.createElement("div", { className: "DocSearch-NoResults-Prefill-List-Items" }, d2.slice(0, 3).reduce((function(e12, t3) {
      return [].concat(ln(e12), [jt.createElement("p", { key: t3 }, jt.createElement(Fn, { size: 16 }), jt.createElement("button", { className: "DocSearch-Prefill", key: t3, type: "button", onClick: function() {
        r2.setQuery(t3.toLowerCase() + " "), r2.refresh(), r2.inputRef.current.focus();
      } }, t3))]);
    }), []))), r2.getMissingResultsUrl && jt.createElement("p", { className: "DocSearch-Help" }, "".concat(c2, " "), jt.createElement("a", { href: r2.getMissingResultsUrl({ query: r2.state.query }), target: "_blank", rel: "noopener noreferrer" }, f2)));
  }
  var mm = ["hit", "attribute", "tagName"];
  function Dm(e11, t2) {
    return t2.split(".").reduce((function(e12, t3) {
      return null != e12 && e12[t3] ? e12[t3] : null;
    }), e11);
  }
  function ym(e11) {
    var t2 = e11.hit, n2 = e11.attribute, r2 = e11.tagName;
    return q(void 0 === r2 ? "span" : r2, un(un({}, an(e11, mm)), {}, { dangerouslySetInnerHTML: { __html: Dm(t2, "_snippetResult.".concat(n2, ".value")) || Dm(t2, n2) } }));
  }
  function gm(e11) {
    return e11.collection && 0 !== e11.collection.items.length ? "askAI" === e11.collection.source.sourceId ? jt.createElement("section", { className: "DocSearch-AskAi-Section" }, jt.createElement("ul", e11.getListProps({ source: e11.collection.source }), jt.createElement(Em, Xt({ item: e11.collection.items[0], translations: e11.translations }, e11)))) : (e11.collection.source.sourceId, jt.createElement("section", { className: "DocSearch-Hits" }, jt.createElement("div", { className: "DocSearch-Hit-source" }, e11.title), jt.createElement("ul", e11.getListProps({ source: e11.collection.source }), e11.collection.items.map((function(t2, n2) {
      return jt.createElement(Fm, Xt({ key: [e11.title, t2.objectID].join(":"), item: t2, index: n2 }, e11));
    }))))) : null;
  }
  function Fm(e11) {
    var t2 = e11.item, n2 = e11.index, r2 = e11.renderIcon, u2 = e11.renderAction, a2 = e11.getItemProps, i2 = e11.onItemClick, o2 = e11.collection, s2 = e11.hitComponent, c2 = cn(jt.useState("idle"), 2), l2 = c2[0], f2 = c2[1], d2 = jt.useRef(null), p2 = s2;
    return jt.createElement("li", Xt({ className: ["DocSearch-Hit", t2.__docsearch_parent && "DocSearch-Hit--Child", "favoriting" === l2 && "DocSearch-Hit--favoriting", "deleting" === l2 && "DocSearch-Hit--deleting"].filter(Boolean).join(" "), onAnimationEnd: function() {
      var e12;
      null === (e12 = d2.current) || void 0 === e12 || e12.call(d2), d2.current = null;
    } }, a2({ item: t2, source: o2.source, onClick: function(e12) {
      i2(t2, e12);
    } })), jt.createElement(p2, { hit: t2 }, jt.createElement("div", { className: "DocSearch-Hit-Container" }, r2({ item: t2, index: n2 }), t2.hierarchy[t2.type] && "lvl1" === t2.type && jt.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, jt.createElement(ym, { className: "DocSearch-Hit-title", hit: t2, attribute: "hierarchy.lvl1" }), t2.content && jt.createElement(ym, { className: "DocSearch-Hit-path", hit: t2, attribute: "content" })), "askAI" === t2.type && jt.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, jt.createElement(ym, { className: "DocSearch-Hit-title", hit: t2, attribute: "hierarchy.lvl1" })), t2.hierarchy[t2.type] && ("lvl2" === t2.type || "lvl3" === t2.type || "lvl4" === t2.type || "lvl5" === t2.type || "lvl6" === t2.type) && jt.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, jt.createElement(ym, { className: "DocSearch-Hit-title", hit: t2, attribute: "hierarchy.".concat(t2.type) }), jt.createElement(ym, { className: "DocSearch-Hit-path", hit: t2, attribute: "hierarchy.lvl1" })), "content" === t2.type && jt.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, jt.createElement(ym, { className: "DocSearch-Hit-title", hit: t2, attribute: "content" }), jt.createElement(ym, { className: "DocSearch-Hit-path", hit: t2, attribute: "hierarchy.lvl1" })), u2({ item: t2, runDeleteTransition: function(e12) {
      f2("deleting"), d2.current = e12;
    }, runFavoriteTransition: function(e12) {
      f2("favoriting"), d2.current = e12;
    } }))));
  }
  function Em(e11) {
    var t2 = e11.item, n2 = e11.getItemProps, r2 = e11.onItemClick, u2 = e11.translations, a2 = e11.collection, i2 = (u2 || {}).askAiPlaceholder, o2 = void 0 === i2 ? "Ask AI: " : i2;
    return jt.createElement("li", Xt({ className: "DocSearch-Hit" }, n2({ item: t2, source: a2.source, onClick: function(e12) {
      r2(t2, e12);
    } })), jt.createElement("div", { className: "DocSearch-Hit--AskAI" }, jt.createElement("div", { className: "DocSearch-Hit-AskAIButton DocSearch-Hit-Container" }, jt.createElement("div", { className: " DocSearch-Hit-AskAIButton-icon DocSearch-Hit-icon" }, jt.createElement(Ah, null)), jt.createElement("div", { className: "DocSearch-Hit-AskAIButton-title" }, jt.createElement("span", { className: "DocSearch-Hit-AskAIButton-title-highlight" }, o2), jt.createElement("mark", { className: "DocSearch-Hit-AskAIButton-title-query" }, t2.query || "")))));
  }
  function bm(e11, t2, n2) {
    return e11.reduce((function(e12, r2) {
      var u2 = t2(r2);
      return e12.hasOwnProperty(u2) || (e12[u2] = []), e12[u2].length < (n2 || 5) && e12[u2].push(r2), e12;
    }), {});
  }
  function _m(e11) {
    return e11;
  }
  function km(e11) {
    return 1 === e11.button || e11.altKey || e11.ctrlKey || e11.metaKey || e11.shiftKey;
  }
  function Cm() {
  }
  var Am = /(<mark>|<\/mark>)/g;
  var wm = RegExp(Am.source);
  function xm(e11) {
    var t2, n2, r2 = e11;
    if (!r2.__docsearch_parent && !e11._highlightResult) return e11.hierarchy.lvl0;
    var u2 = r2.__docsearch_parent ? null === (t2 = r2.__docsearch_parent) || void 0 === t2 || null === (t2 = t2._highlightResult) || void 0 === t2 || null === (t2 = t2.hierarchy) || void 0 === t2 ? void 0 : t2.lvl0 : null === (n2 = e11._highlightResult) || void 0 === n2 || null === (n2 = n2.hierarchy) || void 0 === n2 ? void 0 : n2.lvl0;
    return u2 ? u2.value && wm.test(u2.value) ? u2.value.replace(Am, "") : u2.value : e11.hierarchy.lvl0;
  }
  var Sm = ["translations"];
  function Bm(e11) {
    var t2 = e11.translations, n2 = void 0 === t2 ? {} : t2, r2 = an(e11, Sm);
    return jt.createElement("div", { className: "DocSearch-Dropdown-Container" }, r2.state.collections.map((function(e12) {
      if (0 === e12.items.length) return null;
      var t3 = xm(e12.items[0]);
      return jt.createElement(gm, Xt({}, r2, { key: e12.source.sourceId, translations: n2, title: t3, collection: e12, renderIcon: function(t4) {
        var n3, r3 = t4.item, u2 = t4.index;
        return jt.createElement(jt.Fragment, null, r3.__docsearch_parent && jt.createElement("svg", { className: "DocSearch-Hit-Tree", viewBox: "0 0 24 54" }, jt.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, r3.__docsearch_parent !== (null === (n3 = e12.items[u2 + 1]) || void 0 === n3 ? void 0 : n3.__docsearch_parent) ? jt.createElement("path", { d: "M8 6v21M20 27H8.3" }) : jt.createElement("path", { d: "M8 6v42M20 27H8.3" }))), jt.createElement("div", { className: "DocSearch-Hit-icon" }, jt.createElement(Ih, { type: r3.type })));
      }, renderAction: function() {
        return jt.createElement("div", { className: "DocSearch-Hit-action" }, jt.createElement(Bh, null));
      } }));
    })), r2.resultsFooterComponent && jt.createElement("section", { className: "DocSearch-HitsFooter" }, jt.createElement(r2.resultsFooterComponent, { state: r2.state })));
  }
  var Om = ["translations"];
  function Im(e11) {
    var t2 = e11.translations, n2 = void 0 === t2 ? {} : t2, r2 = an(e11, Om), u2 = n2.recentSearchesTitle, a2 = void 0 === u2 ? "Recent" : u2, i2 = n2.saveRecentSearchButtonTitle, o2 = void 0 === i2 ? "Save this search" : i2, s2 = n2.removeRecentSearchButtonTitle, c2 = void 0 === s2 ? "Remove this search from history" : s2, l2 = n2.favoriteSearchesTitle, f2 = void 0 === l2 ? "Favorite" : l2, d2 = n2.removeFavoriteSearchButtonTitle, p2 = void 0 === d2 ? "Remove this search from favorites" : d2, h2 = n2.recentConversationsTitle, v2 = void 0 === h2 ? "Recent conversations" : h2, m2 = n2.removeRecentConversationButtonTitle, D2 = void 0 === m2 ? "Remove this conversation from history" : m2;
    return jt.createElement("div", { className: "DocSearch-Dropdown-Container" }, jt.createElement(gm, Xt({}, r2, { title: a2, collection: r2.state.collections[0], renderIcon: function() {
      return jt.createElement("div", { className: "DocSearch-Hit-icon" }, jt.createElement(wh, null));
    }, renderAction: function(e12) {
      var t3 = e12.item, n3 = e12.runFavoriteTransition, u3 = e12.runDeleteTransition;
      return jt.createElement(jt.Fragment, null, jt.createElement("div", { className: "DocSearch-Hit-action" }, jt.createElement("button", { className: "DocSearch-Hit-action-button", title: o2, type: "submit", onClick: function(e13) {
        e13.preventDefault(), e13.stopPropagation(), n3((function() {
          r2.favoriteSearches.add(t3), r2.recentSearches.remove(t3), r2.refresh();
        }));
      } }, jt.createElement(jh, null))), jt.createElement("div", { className: "DocSearch-Hit-action" }, jt.createElement("button", { className: "DocSearch-Hit-action-button", title: c2, type: "submit", onClick: function(e13) {
        e13.preventDefault(), e13.stopPropagation(), u3((function() {
          r2.recentSearches.remove(t3), r2.refresh();
        }));
      } }, jt.createElement(xh, null))));
    } })), jt.createElement(gm, Xt({}, r2, { title: f2, collection: r2.state.collections[1], renderIcon: function() {
      return jt.createElement("div", { className: "DocSearch-Hit-icon" }, jt.createElement(jh, null));
    }, renderAction: function(e12) {
      var t3 = e12.item, n3 = e12.runDeleteTransition;
      return jt.createElement("div", { className: "DocSearch-Hit-action" }, jt.createElement("button", { className: "DocSearch-Hit-action-button", title: p2, type: "submit", onClick: function(e13) {
        e13.preventDefault(), e13.stopPropagation(), n3((function() {
          r2.favoriteSearches.remove(t3), r2.refresh();
        }));
      } }, jt.createElement(xh, null)));
    } })), jt.createElement(gm, Xt({}, r2, { title: v2, collection: r2.state.collections[2], renderIcon: function() {
      return jt.createElement("div", { className: "DocSearch-Hit-icon" }, jt.createElement(Ah, null));
    }, renderAction: function(e12) {
      var t3 = e12.item, n3 = e12.runDeleteTransition;
      return jt.createElement("div", { className: "DocSearch-Hit-action" }, jt.createElement("button", { className: "DocSearch-Hit-action-button", title: D2, type: "submit", onClick: function(e13) {
        e13.preventDefault(), e13.stopPropagation(), n3((function() {
          r2.conversations.remove(t3), r2.refresh();
        }));
      } }, jt.createElement(xh, null)));
    } })));
  }
  var Tm = ["translations"];
  var Pm = jt.memo((function(e11) {
    var t2, n2 = e11.translations, r2 = void 0 === n2 ? {} : n2, u2 = an(e11, Tm);
    return u2.isAskAiActive && u2.canHandleAskAi ? jt.createElement(sm, Xt({}, u2, { messages: u2.messages, status: u2.status, askAiStreamError: u2.askAiStreamError, askAiFetchError: u2.askAiFetchError, translations: null == r2 ? void 0 : r2.askAiScreen })) : "error" === (null === (t2 = u2.state) || void 0 === t2 ? void 0 : t2.status) ? jt.createElement(pm, { translations: null == r2 ? void 0 : r2.errorScreen }) : u2.state.query ? u2.hasCollections || u2.canHandleAskAi ? jt.createElement(jt.Fragment, null, jt.createElement(Bm, Xt({}, u2, { translations: null == r2 ? void 0 : r2.resultsScreen })), u2.canHandleAskAi && 1 === u2.state.collections.length && jt.createElement(vm, Xt({}, u2, { translations: null == r2 ? void 0 : r2.noResultsScreen }))) : jt.createElement(vm, Xt({}, u2, { translations: null == r2 ? void 0 : r2.noResultsScreen })) : jt.createElement(Im, Xt({}, u2, { hasCollections: u2.hasCollections, translations: null == r2 ? void 0 : r2.startScreen }));
  }), (function(e11, t2) {
    return "loading" === t2.state.status || "stalled" === t2.state.status;
  }));
  function jm(e11) {
    var t2 = e11.size, n2 = void 0 === t2 ? 20 : t2, r2 = e11.color, u2 = void 0 === r2 ? "currentColor" : r2;
    return jt.createElement("svg", { width: n2, height: n2, className: "DocSearch-Back-Icon", viewBox: "0 0 24 24", fill: "none", stroke: u2, strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, jt.createElement("path", { d: "m12 19-7-7 7-7" }), jt.createElement("path", { d: "M19 12H5" }));
  }
  var Nm = ["translations"];
  function zm(e11) {
    var t2 = e11.translations, n2 = void 0 === t2 ? {} : t2, r2 = an(e11, Nm), u2 = n2.clearButtonTitle, a2 = void 0 === u2 ? "Clear" : u2, i2 = n2.clearButtonAriaLabel, o2 = void 0 === i2 ? "Clear the query" : i2, s2 = n2.closeButtonText, c2 = void 0 === s2 ? "Close" : s2, l2 = n2.closeButtonAriaLabel, f2 = void 0 === l2 ? "Close" : l2, d2 = n2.searchInputLabel, p2 = void 0 === d2 ? "Search" : d2, h2 = n2.backToKeywordSearchButtonText, v2 = void 0 === h2 ? "Back to keyword search" : h2, m2 = n2.backToKeywordSearchButtonAriaLabel, D2 = void 0 === m2 ? "Back to keyword search" : m2, y2 = n2.placeholderTextAskAiStreaming, g2 = void 0 === y2 ? "Answering..." : y2, F2 = r2.getFormProps({ inputElement: r2.inputRef.current }).onReset;
    jt.useEffect((function() {
      r2.autoFocus && r2.inputRef.current && r2.inputRef.current.focus();
    }), [r2.autoFocus, r2.inputRef]), jt.useEffect((function() {
      r2.isFromSelection && r2.inputRef.current && r2.inputRef.current.select();
    }), [r2.isFromSelection, r2.inputRef]);
    var E2 = r2.getInputProps({ inputElement: r2.inputRef.current, autoFocus: r2.autoFocus, maxLength: 512 }), b2 = /* @__PURE__ */ new Set(["ArrowUp", "ArrowDown", "Enter"]), _2 = E2.onKeyDown, k2 = E2.onChange, C2 = "streaming" === r2.askAiStatus || "submitted" === r2.askAiStatus, A2 = "stalled" === r2.state.status;
    jt.useEffect((function() {
      "streaming" !== r2.askAiStatus && "submitted" !== r2.askAiStatus && r2.inputRef.current && r2.inputRef.current.focus();
    }), [r2.askAiStatus, r2.inputRef]);
    var w2 = un(un({}, E2), {}, { enterKeyHint: r2.isAskAiActive ? "enter" : "search", onKeyDown: function(e12) {
      if (r2.isAskAiActive && b2.has(e12.key)) return "Enter" === e12.key && !C2 && r2.state.query && r2.onAskAgain(r2.state.query), e12.preventDefault(), void e12.stopPropagation();
      null == _2 || _2(e12);
    }, onChange: function(e12) {
      if (r2.isAskAiActive) return r2.setQuery(e12.currentTarget.value), e12.preventDefault(), void e12.stopPropagation();
      null == k2 || k2(e12);
    }, disabled: C2 });
    return jt.createElement(jt.Fragment, null, jt.createElement("form", { className: "DocSearch-Form", onSubmit: function(e12) {
      e12.preventDefault();
    }, onReset: F2 }, r2.isAskAiActive ? jt.createElement(jt.Fragment, null, jt.createElement("button", { type: "button", tabIndex: 0, className: "DocSearch-AskAi-Return", title: v2, "aria-label": D2, onClick: function() {
      return r2.onAskAiToggle(false);
    } }, jt.createElement(jm, null))) : jt.createElement(jt.Fragment, null, A2 && jt.createElement("div", { className: "DocSearch-LoadingIndicator" }, jt.createElement(Ch, null)), !A2 && jt.createElement("label", Xt({ className: "DocSearch-MagnifierLabel" }, r2.getLabelProps()), jt.createElement(Fn, null), jt.createElement("span", { className: "DocSearch-VisuallyHiddenForAccessibility" }, p2))), jt.createElement("input", Xt({ className: "DocSearch-Input", ref: r2.inputRef }, w2, { placeholder: C2 ? g2 : r2.placeholder })), jt.createElement("div", { className: "DocSearch-Actions" }, C2 && jt.createElement("button", { type: "button", className: "DocSearch-StreamingIndicator", onClick: function() {
      return r2.onAskAiToggle(true);
    } }, jt.createElement(Ah, null)), jt.createElement("button", { className: "DocSearch-Clear", type: "reset", "aria-label": o2, hidden: !r2.state.query, tabIndex: r2.state.query ? 0 : -1, "aria-hidden": r2.state.query ? "false" : "true" }, a2), (C2 || r2.state.query) && jt.createElement("div", { className: "DocSearch-Divider" }), jt.createElement("button", { type: "button", title: c2, className: "DocSearch-Close", "aria-label": f2, onClick: r2.onClose }, jt.createElement(xh, null)))));
  }
  function Rm() {
    if ("undefined" != typeof window && window.localStorage) {
      var e11 = [];
      for (var t2 in window.localStorage) if (t2.includes("__DOCSEARCH_")) {
        var n2 = window.localStorage[t2];
        e11.push({ key: t2, size: n2.length + t2.length });
      }
      e11.sort((function(e12, t3) {
        return t3.size - e12.size;
      }));
      for (var r2 = Math.ceil(e11.length / 2), u2 = 0; u2 < r2 && u2 < e11.length; u2++) try {
        window.localStorage.removeItem(e11[u2].key);
      } catch (e12) {
      }
    }
  }
  function Mm(e11) {
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
            Rm(), window.localStorage.setItem(e12, JSON.stringify(t3));
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
  var Zm = ["_highlightResult", "_snippetResult"];
  function Lm(e11) {
    var t2 = e11.key, n2 = e11.limit, r2 = void 0 === n2 ? 5 : n2, u2 = Mm(t2), a2 = u2.getItem().slice(0, r2);
    return { add: function(e12) {
      var t3 = e12;
      t3._highlightResult, t3._snippetResult;
      var n3 = an(t3, Zm), i2 = a2.findIndex((function(e13) {
        return e13.objectID === n3.objectID;
      }));
      i2 > -1 && a2.splice(i2, 1), a2.unshift(n3), a2 = a2.slice(0, r2), u2.setItem(a2);
    }, remove: function(e12) {
      a2 = a2.filter((function(t3) {
        return t3.objectID !== e12.objectID;
      })), u2.setItem(a2);
    }, getAll: function() {
      return a2;
    } };
  }
  function $m(e11) {
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
      return Promise.resolve().then((function() {
        var n4, r4, i2;
        return n4 = e11.timeToLive ? 1e3 * e11.timeToLive : null, r4 = u2(), a2(i2 = Object.fromEntries(Object.entries(r4).filter((function(e12) {
          return void 0 !== cn(e12, 2)[1].timestamp;
        })))), n4 && a2(Object.fromEntries(Object.entries(i2).filter((function(e12) {
          var t4 = cn(e12, 2)[1], r5 = (/* @__PURE__ */ new Date()).getTime();
          return !(t4.timestamp + n4 < r5);
        })))), u2()[JSON.stringify(t3)];
      })).then((function(e12) {
        return Promise.all([e12 ? e12.value : n3(), void 0 !== e12]);
      })).then((function(e12) {
        var t4 = cn(e12, 2), n4 = t4[0], u3 = t4[1];
        return Promise.all([n4, u3 || r3.miss(n4)]);
      })).then((function(e12) {
        return cn(e12, 1)[0];
      }));
    }, set: function(e12, t3) {
      return Promise.resolve().then((function() {
        var a3 = u2();
        return a3[JSON.stringify(e12)] = { timestamp: (/* @__PURE__ */ new Date()).getTime(), value: t3 }, r2().setItem(n2, JSON.stringify(a3)), t3;
      }));
    }, delete: function(e12) {
      return Promise.resolve().then((function() {
        var t3 = u2();
        delete t3[JSON.stringify(e12)], r2().setItem(n2, JSON.stringify(t3));
      }));
    }, clear: function() {
      return Promise.resolve().then((function() {
        r2().removeItem(n2);
      }));
    } };
  }
  function qm(e11) {
    var t2 = ln(e11.caches), n2 = t2.shift();
    return void 0 === n2 ? { get: function(e12, t3) {
      var n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } };
      return t3().then((function(e13) {
        return Promise.all([e13, n3.miss(e13)]);
      })).then((function(e13) {
        return cn(e13, 1)[0];
      }));
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
      return n2.get(e12, r2, u2).catch((function() {
        return qm({ caches: t2 }).get(e12, r2, u2);
      }));
    }, set: function(e12, r2) {
      return n2.set(e12, r2).catch((function() {
        return qm({ caches: t2 }).set(e12, r2);
      }));
    }, delete: function(e12) {
      return n2.delete(e12).catch((function() {
        return qm({ caches: t2 }).delete(e12);
      }));
    }, clear: function() {
      return n2.clear().catch((function() {
        return qm({ caches: t2 }).clear();
      }));
    } };
  }
  function Um() {
    var e11 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { serializable: true }, t2 = {};
    return { get: function(n2, r2) {
      var u2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } }, a2 = JSON.stringify(n2);
      if (a2 in t2) return Promise.resolve(e11.serializable ? JSON.parse(t2[a2]) : t2[a2]);
      var i2 = r2();
      return i2.then((function(e12) {
        return u2.miss(e12);
      })).then((function() {
        return i2;
      }));
    }, set: function(n2, r2) {
      return t2[JSON.stringify(n2)] = e11.serializable ? JSON.stringify(r2) : r2, Promise.resolve(r2);
    }, delete: function(e12) {
      return delete t2[JSON.stringify(e12)], Promise.resolve();
    }, clear: function() {
      return t2 = {}, Promise.resolve();
    } };
  }
  function Vm(e11) {
    var t2 = e11.algoliaAgents, n2 = e11.client, r2 = e11.version, u2 = (function(e12) {
      var t3 = { value: "Algolia for JavaScript (".concat(e12, ")"), add: function(e13) {
        var n3 = "; ".concat(e13.segment).concat(void 0 !== e13.version ? " (".concat(e13.version, ")") : "");
        return -1 === t3.value.indexOf(n3) && (t3.value = "".concat(t3.value).concat(n3)), t3;
      } };
      return t3;
    })(r2).add({ segment: n2, version: r2 });
    return t2.forEach((function(e12) {
      return u2.add(e12);
    })), u2;
  }
  var Hm = 12e4;
  function Wm(e11) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "up", n2 = Date.now();
    return un(un({}, e11), {}, { status: t2, lastUpdate: n2, isUp: function() {
      return "up" === t2 || Date.now() - n2 > Hm;
    }, isTimedOut: function() {
      return "timed out" === t2 && Date.now() - n2 <= Hm;
    } });
  }
  var Km = (function() {
    function e11(t2, n2) {
      var r2;
      return Wt(this, e11), Yt(r2 = Ht(this, e11, [t2]), "name", "AlgoliaError"), n2 && (r2.name = n2), r2;
    }
    return tn(e11, hn(Error)), Gt(e11);
  })();
  var Jm = (function() {
    function e11(t2, n2, r2) {
      var u2;
      return Wt(this, e11), Yt(u2 = Ht(this, e11, [t2, r2]), "stackTrace", void 0), u2.stackTrace = n2, u2;
    }
    return tn(e11, Km), Gt(e11);
  })();
  var Gm = (function() {
    function e11(t2) {
      return Wt(this, e11), Ht(this, e11, ["Unreachable hosts - your application id may be incorrect. If the error persists, please reach out to the Algolia Support team: https://alg.li/support.", t2, "RetryError"]);
    }
    return tn(e11, Jm), Gt(e11);
  })();
  var Qm = (function() {
    function e11(t2, n2, r2) {
      var u2, a2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "ApiError";
      return Wt(this, e11), Yt(u2 = Ht(this, e11, [t2, r2, a2]), "status", void 0), u2.status = n2, u2;
    }
    return tn(e11, Jm), Gt(e11);
  })();
  var Ym = (function() {
    function e11(t2, n2) {
      var r2;
      return Wt(this, e11), Yt(r2 = Ht(this, e11, [t2, "DeserializationError"]), "response", void 0), r2.response = n2, r2;
    }
    return tn(e11, Km), Gt(e11);
  })();
  var Xm = (function() {
    function e11(t2, n2, r2, u2) {
      var a2;
      return Wt(this, e11), Yt(a2 = Ht(this, e11, [t2, n2, u2, "DetailedApiError"]), "error", void 0), a2.error = r2, a2;
    }
    return tn(e11, Qm), Gt(e11);
  })();
  function eD(e11, t2, n2) {
    var r2, u2 = (r2 = n2, Object.keys(r2).filter((function(e12) {
      return void 0 !== r2[e12];
    })).sort().map((function(e12) {
      return "".concat(e12, "=").concat(encodeURIComponent("[object Array]" === Object.prototype.toString.call(r2[e12]) ? r2[e12].join(",") : r2[e12]).replace(/\+/g, "%20"));
    })).join("&")), a2 = "".concat(e11.protocol, "://").concat(e11.url).concat(e11.port ? ":".concat(e11.port) : "", "/").concat("/" === t2.charAt(0) ? t2.substring(1) : t2);
    return u2.length && (a2 += "?".concat(u2)), a2;
  }
  function tD(e11, t2) {
    if ("GET" !== e11.method && (void 0 !== e11.data || void 0 !== t2.data)) {
      var n2 = Array.isArray(e11.data) ? e11.data : un(un({}, e11.data), t2.data);
      return JSON.stringify(n2);
    }
  }
  function nD(e11, t2, n2) {
    var r2 = un(un(un({ Accept: "application/json" }, e11), t2), n2), u2 = {};
    return Object.keys(r2).forEach((function(e12) {
      var t3 = r2[e12];
      u2[e12.toLowerCase()] = t3;
    })), u2;
  }
  function rD(e11) {
    try {
      return JSON.parse(e11.content);
    } catch (t2) {
      throw new Ym(t2.message, e11);
    }
  }
  function uD(e11, t2) {
    var n2 = e11.content, r2 = e11.status;
    try {
      var u2 = JSON.parse(n2);
      return "error" in u2 ? new Xm(u2.message, r2, u2.error, t2) : new Qm(u2.message, r2, t2);
    } catch (e12) {
    }
    return new Qm(n2, r2, t2);
  }
  function aD(e11) {
    return e11.map((function(e12) {
      return iD(e12);
    }));
  }
  function iD(e11) {
    var t2 = e11.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
    return un(un({}, e11), {}, { request: un(un({}, e11.request), {}, { headers: un(un({}, e11.request.headers), t2) }) });
  }
  var oD = ["appId", "apiKey", "authMode", "algoliaAgents"];
  var sD = ["params"];
  var cD = "5.28.0";
  function lD(e11) {
    return [{ url: "".concat(e11, "-dsn.algolia.net"), accept: "read", protocol: "https" }, { url: "".concat(e11, ".algolia.net"), accept: "write", protocol: "https" }].concat((function(e12) {
      for (var t2 = e12, n2 = e12.length - 1; n2 > 0; n2--) {
        var r2 = Math.floor(Math.random() * (n2 + 1)), u2 = e12[n2];
        t2[n2] = e12[r2], t2[r2] = u2;
      }
      return t2;
    })([{ url: "".concat(e11, "-1.algolianet.com"), accept: "readWrite", protocol: "https" }, { url: "".concat(e11, "-2.algolianet.com"), accept: "readWrite", protocol: "https" }, { url: "".concat(e11, "-3.algolianet.com"), accept: "readWrite", protocol: "https" }]));
  }
  var fD = "4.0.1";
  function dD(e11, t2, n2) {
    var r2 = jt.useMemo((function() {
      var r3 = (function(e12, t3) {
        if (!e12 || "string" != typeof e12) throw new Error("`appId` is missing.");
        if (!t3 || "string" != typeof t3) throw new Error("`apiKey` is missing.");
        return (function(e13) {
          var t4 = e13.appId, n3 = e13.apiKey, r4 = e13.authMode, u2 = e13.algoliaAgents, a2 = an(e13, oD), i2 = (function(e14, t5) {
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
              return (d2 = Vt(on().mark((function e15(t6) {
                var r6, u4, a4, i4, o4;
                return on().wrap((function(e16) {
                  for (; ; ) switch (e16.prev = e16.next) {
                    case 0:
                      return e16.next = 2, Promise.all(t6.map((function(e17) {
                        return n4.get(e17, (function() {
                          return Promise.resolve(Wm(e17));
                        }));
                      })));
                    case 2:
                      return r6 = e16.sent, u4 = r6.filter((function(e17) {
                        return e17.isUp();
                      })), a4 = r6.filter((function(e17) {
                        return e17.isTimedOut();
                      })), i4 = [].concat(ln(u4), ln(a4)), o4 = i4.length > 0 ? i4 : t6, e16.abrupt("return", { hosts: o4, getTimeout: function(e17, t7) {
                        return (0 === a4.length && 0 === e17 ? 1 : a4.length + 3 + e17) * t7;
                      } });
                    case 8:
                    case "end":
                      return e16.stop();
                  }
                }), e15);
              })))).apply(this, arguments);
            }
            function p2(e15, t6) {
              return h2.apply(this, arguments);
            }
            function h2() {
              return h2 = Vt(on().mark((function e15(c3, l3) {
                var d3, p3, h3, v2, m2, D2, y2, g2, F2, E2, b2, _2, k2, C2 = arguments;
                return on().wrap((function(e16) {
                  for (; ; ) switch (e16.prev = e16.next) {
                    case 0:
                      if (d3 = !(C2.length > 2 && void 0 !== C2[2]) || C2[2], p3 = [], h3 = tD(c3, l3), v2 = nD(r5, c3.headers, l3.headers), m2 = "GET" === c3.method ? un(un({}, c3.data), l3.data) : {}, D2 = un(un(un({}, a3), c3.queryParameters), m2), i3.value && (D2["x-algolia-agent"] = i3.value), l3 && l3.queryParameters) for (y2 = 0, g2 = Object.keys(l3.queryParameters); y2 < g2.length; y2++) F2 = g2[y2], l3.queryParameters[F2] && "[object Object]" !== Object.prototype.toString.call(l3.queryParameters[F2]) ? D2[F2] = l3.queryParameters[F2].toString() : D2[F2] = l3.queryParameters[F2];
                      return E2 = 0, b2 = (function() {
                        var e17 = Vt(on().mark((function e18(t6, r6) {
                          var a4, i4, f3, m3, y3, g3;
                          return on().wrap((function(e19) {
                            for (; ; ) switch (e19.prev = e19.next) {
                              case 0:
                                if (void 0 !== (a4 = t6.pop())) {
                                  e19.next = 3;
                                  break;
                                }
                                throw new Gm(aD(p3));
                              case 3:
                                return i4 = un(un({}, o3), l3.timeouts), f3 = { data: h3, headers: v2, method: c3.method, url: eD(a4, c3.path, D2), connectTimeout: r6(E2, i4.connect), responseTimeout: r6(E2, d3 ? i4.read : i4.write) }, m3 = function(e20) {
                                  var n5 = { request: f3, response: e20, host: a4, triesLeft: t6.length };
                                  return p3.push(n5), n5;
                                }, e19.next = 8, s2.send(f3);
                              case 8:
                                if (_3 = (F3 = y3 = e19.sent).isTimedOut, k3 = F3.status, !(_3 || (function(e20) {
                                  return !e20.isTimedOut && !~~e20.status;
                                })({ isTimedOut: _3, status: k3 }) || 2 != ~~(k3 / 100) && 4 != ~~(k3 / 100))) {
                                  e19.next = 16;
                                  break;
                                }
                                return g3 = m3(y3), y3.isTimedOut && E2++, u3.info("Retryable failure", iD(g3)), e19.next = 15, n4.set(a4, Wm(a4, y3.isTimedOut ? "timed out" : "down"));
                              case 15:
                                return e19.abrupt("return", b2(t6, r6));
                              case 16:
                                if (2 != ~~(y3.status / 100)) {
                                  e19.next = 18;
                                  break;
                                }
                                return e19.abrupt("return", rD(y3));
                              case 18:
                                throw m3(y3), uD(y3, p3);
                              case 20:
                              case "end":
                                return e19.stop();
                            }
                            var F3, _3, k3;
                          }), e18);
                        })));
                        return function(t6, n5) {
                          return e17.apply(this, arguments);
                        };
                      })(), _2 = t5.filter((function(e17) {
                        return "readWrite" === e17.accept || (d3 ? "read" === e17.accept : "write" === e17.accept);
                      })), e16.next = 13, f2(_2);
                    case 13:
                      return k2 = e16.sent, e16.abrupt("return", b2(ln(k2.hosts).reverse(), k2.getTimeout));
                    case 15:
                    case "end":
                      return e16.stop();
                  }
                }), e15);
              }))), h2.apply(this, arguments);
            }
            return { hostsCache: n4, requester: s2, timeouts: o3, logger: u3, algoliaAgent: i3, baseHeaders: r5, baseQueryParameters: a3, hosts: t5, request: function(e15) {
              var t6 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n5 = e15.useReadTransporter || "GET" === e15.method;
              if (!n5) return p2(e15, t6, n5);
              var u4 = function() {
                return p2(e15, t6);
              };
              if (true !== (t6.cacheable || e15.cacheable)) return u4();
              var i4 = { request: e15, requestOptions: t6, transporter: { queryParameters: a3, headers: r5 } };
              return l2.get(i4, (function() {
                return c2.get(i4, (function() {
                  return c2.set(i4, u4()).then((function(e16) {
                    return Promise.all([c2.delete(i4), e16]);
                  }), (function(e16) {
                    return Promise.all([c2.delete(i4), Promise.reject(e16)]);
                  })).then((function(e16) {
                    var t7 = cn(e16, 2);
                    return t7[0], t7[1];
                  }));
                }));
              }), { miss: function(e16) {
                return l2.set(i4, e16);
              } });
            }, requestsCache: c2, responsesCache: l2 };
          })(un(un({ hosts: lD(t4) }, a2), {}, { algoliaAgent: Vm({ algoliaAgents: u2, client: "Lite", version: cD }), baseHeaders: un(un({ "content-type": "text/plain" }, i2.headers()), a2.baseHeaders), baseQueryParameters: un(un({}, i2.queryParameters()), a2.baseQueryParameters) }));
          return { transporter: o2, appId: t4, apiKey: n3, clearCache: function() {
            return Promise.all([o2.requestsCache.clear(), o2.responsesCache.clear()]).then((function() {
            }));
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
              var n4 = { requests: e14.map((function(e15) {
                var t6 = e15.params, n5 = an(e15, sD);
                return "facet" === n5.type ? un(un(un({}, n5), t6), {}, { type: "facet" }) : un(un(un({}, n5), t6), {}, { facet: void 0, maxFacetHits: void 0, facetQuery: void 0 });
              })) };
              e14 = n4;
            }
            if (!e14) throw new Error("Parameter `searchMethodParams` is required when calling `search`.");
            if (!e14.requests) throw new Error("Parameter `searchMethodParams.requests` is required when calling `search`.");
            var r5 = { method: "POST", path: "/1/indexes/*/queries", queryParameters: {}, headers: {}, data: e14, useReadTransporter: true, cacheable: true };
            return o2.request(r5, t5);
          } };
        })(un({ appId: e12, apiKey: t3, timeouts: { connect: 1e3, read: 2e3, write: 3e4 }, logger: { debug: function(e13, t4) {
          return Promise.resolve();
        }, info: function(e13, t4) {
          return Promise.resolve();
        }, error: function(e13, t4) {
          return Promise.resolve();
        } }, requester: { send: function(e13) {
          return new Promise((function(t4) {
            var n3 = new XMLHttpRequest();
            n3.open(e13.method, e13.url, true), Object.keys(e13.headers).forEach((function(t5) {
              return n3.setRequestHeader(t5, e13.headers[t5]);
            }));
            var r4, u2 = function(e14, r5) {
              return setTimeout((function() {
                n3.abort(), t4({ status: 0, content: r5, isTimedOut: true });
              }), e14);
            }, a2 = u2(e13.connectTimeout, "Connection timeout");
            n3.onreadystatechange = function() {
              n3.readyState > n3.OPENED && void 0 === r4 && (clearTimeout(a2), r4 = u2(e13.responseTimeout, "Socket timeout"));
            }, n3.onerror = function() {
              0 === n3.status && (clearTimeout(a2), clearTimeout(r4), t4({ content: n3.responseText || "Network request failed", status: n3.status, isTimedOut: false }));
            }, n3.onload = function() {
              clearTimeout(a2), clearTimeout(r4), t4({ content: n3.responseText, status: n3.status, isTimedOut: false });
            }, n3.send(e13.data);
          }));
        } }, algoliaAgents: [{ segment: "Browser" }], authMode: "WithinQueryParameters", responsesCache: Um(), requestsCache: Um({ serializable: false }), hostsCache: qm({ caches: [$m({ key: "".concat(cD, "-").concat(e12) }), Um()] }) }, void 0));
      })(e11, t2);
      return r3.addAlgoliaAgent("docsearch", fD), false === /docsearch.js \(.*\)/.test(r3.transporter.algoliaAgent.value) && r3.addAlgoliaAgent("docsearch-react", fD), n2(r3);
    }), [e11, t2, n2]);
    return r2;
  }
  var pD = ["footer", "searchBox"];
  var hD = (function() {
    var e11 = Vt(on().mark((function e12(t2) {
      var n2, r2, u2, a2, i2, o2, s2, c2, l2, f2, d2, p2, h2, v2, m2, D2, y2, g2;
      return on().wrap((function(e13) {
        for (; ; ) switch (e13.prev = e13.next) {
          case 0:
            return n2 = t2.query, r2 = t2.state, u2 = t2.setContext, a2 = t2.setStatus, i2 = t2.searchClient, o2 = t2.indexes, s2 = t2.snippetLength, c2 = t2.insights, l2 = t2.appId, f2 = t2.apiKey, d2 = t2.maxResultsPerGroup, p2 = t2.transformItems, h2 = void 0 === p2 ? _m : p2, v2 = t2.saveRecentSearch, m2 = t2.onClose, D2 = c2, e13.prev = 2, e13.next = 5, i2.search({ requests: o2.map((function(e14) {
              var t3, r3, u3, a3, i3, o3, c3, l3 = "string" == typeof e14 ? e14 : e14.name, f3 = "string" == typeof e14 ? {} : e14.searchParameters;
              return un({ query: n2, indexName: l3, attributesToRetrieve: null !== (t3 = null == f3 ? void 0 : f3.attributesToRetrieve) && void 0 !== t3 ? t3 : ["hierarchy.lvl0", "hierarchy.lvl1", "hierarchy.lvl2", "hierarchy.lvl3", "hierarchy.lvl4", "hierarchy.lvl5", "hierarchy.lvl6", "content", "type", "url"], attributesToSnippet: null !== (r3 = null == f3 ? void 0 : f3.attributesToSnippet) && void 0 !== r3 ? r3 : ["hierarchy.lvl1:".concat(s2.current), "hierarchy.lvl2:".concat(s2.current), "hierarchy.lvl3:".concat(s2.current), "hierarchy.lvl4:".concat(s2.current), "hierarchy.lvl5:".concat(s2.current), "hierarchy.lvl6:".concat(s2.current), "content:".concat(s2.current)], snippetEllipsisText: null !== (u3 = null == f3 ? void 0 : f3.snippetEllipsisText) && void 0 !== u3 ? u3 : "\u2026", highlightPreTag: null !== (a3 = null == f3 ? void 0 : f3.highlightPreTag) && void 0 !== a3 ? a3 : "<mark>", highlightPostTag: null !== (i3 = null == f3 ? void 0 : f3.highlightPostTag) && void 0 !== i3 ? i3 : "</mark>", hitsPerPage: null !== (o3 = null == f3 ? void 0 : f3.hitsPerPage) && void 0 !== o3 ? o3 : 20, clickAnalytics: null !== (c3 = null == f3 ? void 0 : f3.clickAnalytics) && void 0 !== c3 ? c3 : D2 }, null != f3 ? f3 : {});
            })) });
          case 5:
            return y2 = e13.sent, g2 = y2.results, e13.abrupt("return", g2.flatMap((function(e14) {
              var t3, n3 = e14, a3 = n3.hits, i3 = n3.nbHits, o3 = bm(h2(a3), (function(e15) {
                return xm(e15);
              }), d2);
              if (r2.context.searchSuggestions.length < Object.keys(o3).length && u2({ searchSuggestions: un(un({}, null !== (t3 = r2.context.searchSuggestions) && void 0 !== t3 ? t3 : []), Object.keys(o3)) }), i3) {
                var s3 = r2.context.nbHits;
                u2({ nbHits: (null != s3 ? s3 : 0) + i3 });
              }
              var c3 = {};
              return D2 && (c3 = { __autocomplete_indexName: n3.index, __autocomplete_queryID: n3.queryID, __autocomplete_algoliaCredentials: { appId: l2, apiKey: f2 } }), Object.values(o3).map((function(e15, t4) {
                return { sourceId: "hits_".concat(n3.index, "_").concat(t4), onSelect: function(e16) {
                  var t5 = e16.item, n4 = e16.event;
                  v2(t5), km(n4) || m2();
                }, getItemUrl: function(e16) {
                  return e16.item.url;
                }, getItems: function() {
                  return Object.values(bm(e15, (function(e16) {
                    return e16.hierarchy.lvl1;
                  }), d2)).map((function(e16) {
                    return e16.map((function(t5) {
                      var n4 = null, r3 = e16.find((function(e17) {
                        return "lvl1" === e17.type && e17.hierarchy.lvl1 === t5.hierarchy.lvl1;
                      }));
                      return "lvl1" !== t5.type && r3 && (n4 = r3), un(un({}, t5), {}, { __docsearch_parent: n4 }, c3);
                    }));
                  })).flat();
                } };
              }));
            })));
          case 10:
            throw e13.prev = 10, e13.t0 = e13.catch(2), "RetryError" === e13.t0.name && a2("error"), e13.t0;
          case 14:
          case "end":
            return e13.stop();
        }
      }), e12, null, [[2, 10]]);
    })));
    return function(t2) {
      return e11.apply(this, arguments);
    };
  })();
  function vD(e11) {
    var t2 = e11.appId, n2 = e11.apiKey, r2 = e11.placeholder, u2 = e11.askAi, a2 = e11.maxResultsPerGroup, i2 = e11.theme, o2 = e11.onClose, s2 = void 0 === o2 ? Cm : o2, c2 = e11.transformItems, l2 = void 0 === c2 ? _m : c2, f2 = e11.hitComponent, d2 = void 0 === f2 ? kh : f2, p2 = e11.resultsFooterComponent, h2 = void 0 === p2 ? function() {
      return null;
    } : p2, v2 = e11.navigator, D2 = e11.initialScrollY, y2 = void 0 === D2 ? 0 : D2, g2 = e11.transformSearchClient, F2 = void 0 === g2 ? _m : g2, E2 = e11.disableUserPersonalization, b2 = void 0 !== E2 && E2, _2 = e11.initialQuery, k2 = void 0 === _2 ? "" : _2, C2 = e11.translations, A2 = void 0 === C2 ? {} : C2, w2 = e11.getMissingResultsUrl, x2 = e11.insights, S2 = void 0 !== x2 && x2, B2 = e11.onAskAiToggle, O2 = e11.isAskAiActive, I2 = void 0 !== O2 && O2, T2 = e11.canHandleAskAi, P2 = void 0 !== T2 && T2, j2 = e11.recentSearchesLimit, N2 = void 0 === j2 ? 7 : j2, z2 = e11.recentSearchesWithFavoritesLimit, R2 = void 0 === z2 ? 4 : z2, M2 = e11.indices, Z2 = void 0 === M2 ? [] : M2, L2 = e11.indexName, $2 = e11.searchParameters, q2 = A2.footer, U2 = A2.searchBox, V2 = an(A2, pD), H2 = cn(jt.useState({ query: "", collections: [], completion: null, context: {}, isOpen: false, activeItemId: null, status: "idle" }), 2), W2 = H2[0], K2 = H2[1], J2 = jt.useRef(null), G2 = jt.useRef(null), Q2 = jt.useRef(null), Y2 = jt.useRef(null), X2 = jt.useRef(null), ee2 = jt.useRef(15), te2 = jt.useRef("undefined" != typeof window ? window.getSelection().toString().slice(0, 512) : "").current, ne2 = jt.useRef(k2 || te2).current, re2 = dD(t2, n2, F2), ue2 = "object" === dn(u2) ? u2 : null, ae2 = "string" == typeof u2 ? u2 : (null == ue2 ? void 0 : ue2.assistantId) || null, ie2 = null == ue2 ? void 0 : ue2.searchParameters, oe2 = [];
    if (L2 && "" !== L2 && oe2.push({ name: L2, searchParameters: $2 }), Z2.length > 0 && Z2.forEach((function(e12) {
      oe2.push("string" == typeof e12 ? { name: e12 } : e12);
    })), oe2.length < 1) throw new Error("Must supply either `indexName` or `indices` for DocSearch to work");
    var se2, ce2, le2, fe2, de2, pe2, he2, ve2 = oe2[0].name, me2 = jt.useRef((se2 = { key: "__DOCSEARCH_ASKAI_CONVERSATIONS__".concat((null == ue2 ? void 0 : ue2.indexName) || ve2), limit: 10 }, ce2 = se2.key, le2 = se2.limit, fe2 = void 0 === le2 ? 5 : le2, de2 = Mm(ce2), pe2 = de2.getItem().slice(0, fe2), { add: function(e12) {
      var t3 = e12.objectID, n3 = e12.query, r3 = pe2.findIndex((function(e13) {
        return e13.objectID === t3 || e13.query === n3;
      }));
      r3 > -1 ? pe2[r3] = e12 : (pe2.unshift(e12), pe2 = pe2.slice(0, fe2)), de2.setItem(pe2);
    }, addFeedback: function(e12, t3) {
      var n3 = pe2.find((function(t4) {
        var n4;
        return null === (n4 = t4.messages) || void 0 === n4 ? void 0 : n4.some((function(t5) {
          return t5.id === e12;
        }));
      }));
      if (n3 && n3.messages) {
        var r3 = n3.messages.find((function(t4) {
          return t4.id === e12;
        }));
        r3 && (r3.feedback = t3, de2.setItem(pe2));
      }
    }, getOne: function(e12) {
      var t3, n3 = pe2.find((function(t4) {
        var n4;
        return null === (n4 = t4.messages) || void 0 === n4 ? void 0 : n4.some((function(t5) {
          return t5.id === e12;
        }));
      }));
      return null == n3 || null === (t3 = n3.messages) || void 0 === t3 ? void 0 : t3.find((function(t4) {
        return t4.id === e12;
      }));
    }, getAll: function() {
      return pe2;
    }, remove: function(e12) {
      pe2 = pe2.filter((function(t3) {
        return t3.objectID !== e12.objectID;
      })), de2.setItem(pe2);
    } })).current, De2 = jt.useRef(Lm({ key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(ve2), limit: 10 })).current, ye2 = jt.useRef(Lm({ key: "__DOCSEARCH_RECENT_SEARCHES__".concat(ve2), limit: 0 === De2.getAll().length ? N2 : R2 })).current, ge2 = cn(jt.useState(null), 2), Fe2 = ge2[0], Ee2 = ge2[1], be2 = (function() {
      var e12 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t3 = e12.experimental_throttle, n3 = e12.resume, r3 = void 0 !== n3 && n3, u3 = m(e12, $t), a3 = Oe("chat" in u3 ? u3.chat : new td(u3));
      ("chat" in u3 && u3.chat !== a3.current || "id" in u3 && a3.current.id !== u3.id) && (a3.current = "chat" in u3 ? u3.chat : new td(u3));
      var i3 = "id" in u3 ? u3.id : null, o3 = Pe((function(e13) {
        return a3.current["~registerMessagesCallback"](e13, t3);
      }), [t3, i3]), s3 = We(o3, (function() {
        return a3.current.messages;
      })), c3 = We(a3.current["~registerStatusCallback"], (function() {
        return a3.current.status;
      })), l3 = We(a3.current["~registerErrorCallback"], (function() {
        return a3.current.error;
      })), f3 = Pe((function(e13) {
        "function" == typeof e13 && (e13 = e13(a3.current.messages)), a3.current.messages = e13;
      }), [a3]);
      return Se((function() {
        r3 && a3.current.resumeStream();
      }), [r3, a3]), { id: a3.current.id, messages: s3, setMessages: f3, sendMessage: a3.current.sendMessage, regenerate: a3.current.regenerate, clearError: a3.current.clearError, stop: a3.current.stop, error: l3, resumeStream: a3.current.resumeStream, status: c3, addToolResult: a3.current.addToolResult };
    })({ sendAutomaticallyWhen: wf, transport: new Cf({ api: vh, headers: (he2 = Vt(on().mark((function e12() {
      var r3;
      return on().wrap((function(e13) {
        for (; ; ) switch (e13.prev = e13.next) {
          case 0:
            if (ae2) {
              e13.next = 2;
              break;
            }
            throw new Error("Ask AI assistant ID is required");
          case 2:
            return r3 = null, e13.next = 6, gh({ assistantId: ae2 });
          case 6:
            r3 = e13.sent;
          case 7:
            return e13.abrupt("return", un(un({}, r3 ? { authorization: "TOKEN ".concat(r3) } : {}), {}, { "X-Algolia-API-Key": (null == ue2 ? void 0 : ue2.apiKey) || n2, "X-Algolia-Application-Id": (null == ue2 ? void 0 : ue2.appId) || t2, "X-Algolia-Index-Name": (null == ue2 ? void 0 : ue2.indexName) || ve2, "X-Algolia-Assistant-Id": ae2 || "", "X-AI-SDK-Version": "v5" }));
          case 8:
          case "end":
            return e13.stop();
        }
      }), e12);
    }))), function() {
      return he2.apply(this, arguments);
    }), body: ie2 ? { searchParameters: ie2 } : {} }), onError: function(e12) {
      Ee2(e12);
    } }), _e2 = be2.messages, ke2 = be2.sendMessage, Ce2 = be2.status, Ae2 = be2.setMessages, we2 = be2.error, xe2 = jt.useRef(Ce2);
    jt.useEffect((function() {
      if (!b2) {
        if ("streaming" === xe2.current && "ready" === Ce2) {
          var e12, t3 = Qt(_e2[0].parts);
          try {
            for (t3.s(); !(e12 = t3.n()).done; ) {
              var n3 = e12.value;
              "text" === n3.type && me2.add(tm(n3.text, _e2));
            }
          } catch (e13) {
            t3.e(e13);
          } finally {
            t3.f();
          }
        }
        xe2.current = Ce2;
      }
    }), [Ce2, _e2, me2, b2]);
    var Be2 = jt.useCallback((function(e12) {
      var t3 = e12.hierarchy, n3 = ["lvl6", "lvl5", "lvl4", "lvl3", "lvl2", "lvl1", "lvl0"].find((function(e13) {
        return t3[e13];
      }));
      return un(un({}, e12), {}, { type: n3 || "lvl0", content: null });
    }), []), Ie2 = jt.useCallback((function(e12) {
      if (!b2) {
        var t3 = "content" === e12.type ? e12.__docsearch_parent || Be2(e12) : e12;
        t3 && -1 === De2.getAll().findIndex((function(e13) {
          return e13.objectID === t3.objectID;
        })) && ye2.add(t3);
      }
    }), [De2, ye2, b2, Be2]), Te2 = jt.useCallback((function(e12) {
      if (W2.context.algoliaInsightsPlugin && e12.__autocomplete_id) {
        var t3 = e12, n3 = { eventName: "Item Selected", index: t3.__autocomplete_indexName, items: [t3], positions: [e12.__autocomplete_id], queryID: t3.__autocomplete_queryID };
        W2.context.algoliaInsightsPlugin.insights.clickedObjectIDsAfterSearch(n3);
      }
    }), [W2.context.algoliaInsightsPlugin]), je2 = jt.useRef(void 0), Ne2 = jt.useCallback((function(e12, t3) {
      if (B2(e12), ke2({ role: "user", parts: [{ type: "text", text: t3 }] }), Y2.current) {
        var n3 = Y2.current;
        "function" == typeof n3.scrollTo ? n3.scrollTo({ top: 0, behavior: "smooth" }) : n3.scrollTop = 0;
      }
      je2.current && je2.current.setQuery("");
    }), [B2, ke2]), ze2 = jt.useCallback((function() {
      var e12 = Vt(on().mark((function e13(n3, r3) {
        var u3;
        return on().wrap((function(e14) {
          for (; ; ) switch (e14.prev = e14.next) {
            case 0:
              if (ae2 && t2) {
                e14.next = 2;
                break;
              }
              return e14.abrupt("return");
            case 2:
              return e14.next = 4, Fh({ assistantId: ae2, thumbs: r3, messageId: n3, appId: t2 });
            case 4:
              if (!(e14.sent.status >= 300)) {
                e14.next = 7;
                break;
              }
              throw new Error("Failed, try again later");
            case 7:
              null === (u3 = me2.addFeedback) || void 0 === u3 || u3.call(me2, n3, 1 === r3 ? "like" : "dislike");
            case 8:
            case "end":
              return e14.stop();
          }
        }), e13);
      })));
      return function(t3, n3) {
        return e12.apply(this, arguments);
      };
    })(), [ae2, t2, me2]);
    je2.current || (je2.current = hh({ id: "docsearch", defaultActiveItemId: 0, openOnFocus: true, initialState: { query: ne2, context: { searchSuggestions: [] } }, insights: Boolean(S2), navigator: v2, onStateChange: function(e12) {
      K2(e12.state);
    }, getSources: function(e12) {
      var r3 = e12.query, u3 = e12.state, i3 = e12.setContext, o3 = e12.setStatus;
      if (!r3) {
        var c3 = (function(e13) {
          var t3 = e13.recentSearches, n3 = e13.favoriteSearches, r4 = e13.saveRecentSearch, u4 = e13.onClose;
          return e13.disableUserPersonalization ? [] : [{ sourceId: "recentSearches", onSelect: function(e14) {
            var t4 = e14.item, n4 = e14.event;
            r4(t4), km(n4) || u4();
          }, getItemUrl: function(e14) {
            return e14.item.url;
          }, getItems: function() {
            return t3.getAll();
          } }, { sourceId: "favoriteSearches", onSelect: function(e14) {
            var t4 = e14.item, n4 = e14.event;
            r4(t4), km(n4) || u4();
          }, getItemUrl: function(e14) {
            return e14.item.url;
          }, getItems: function() {
            return n3.getAll();
          } }];
        })({ recentSearches: ye2, favoriteSearches: De2, saveRecentSearch: Ie2, onClose: s2, disableUserPersonalization: b2, canHandleAskAi: P2 }), f3 = P2 ? [{ sourceId: "recentConversations", getItems: function() {
          return b2 ? [] : me2.getAll();
        }, onSelect: function(e13) {
          var t3 = e13.item;
          t3.messages && (Ae2(t3.messages), B2(true));
        } }] : [];
        return [].concat(ln(c3), f3);
      }
      var d3 = { context: u3.context }, p3 = hD({ query: r3, state: d3, setContext: i3, setStatus: o3, searchClient: re2, indexes: oe2, snippetLength: ee2, insights: Boolean(S2), appId: t2, apiKey: n2, maxResultsPerGroup: a2, transformItems: l2, saveRecentSearch: Ie2, onClose: s2 }), h3 = P2 ? [{ sourceId: "askAI", getItems: function() {
        return [{ type: "askAI", query: r3, url_without_anchor: "", objectID: "ask-ai-button", content: null, url: "", anchor: null, hierarchy: { lvl0: "Ask AI", lvl1: r3, lvl2: null, lvl3: null, lvl4: null, lvl5: null, lvl6: null }, _highlightResult: {}, _snippetResult: {}, __docsearch_parent: null }];
      }, onSelect: function(e13) {
        var t3 = e13.item;
        "askAI" === t3.type && t3.query && Ne2(true, t3.query);
      } }] : [];
      return p3.then((function(e13) {
        return [].concat(h3, ln(e13));
      }));
    } }));
    var Re2, Me2, Ze2 = je2.current, Le2 = Ze2.getEnvironmentProps, $e2 = Ze2.getRootProps, qe2 = Ze2.refresh;
    !(function(e12) {
      var t3 = e12.getEnvironmentProps, n3 = e12.panelElement, r3 = e12.formElement, u3 = e12.inputElement;
      jt.useEffect((function() {
        if (n3 && r3 && u3) {
          var e13 = t3({ panelElement: n3, formElement: r3, inputElement: u3 }), a3 = e13.onTouchStart, i3 = e13.onTouchMove;
          return window.addEventListener("touchstart", a3), window.addEventListener("touchmove", i3), function() {
            window.removeEventListener("touchstart", a3), window.removeEventListener("touchmove", i3);
          };
        }
      }), [t3, n3, r3, u3]);
    })({ getEnvironmentProps: Le2, panelElement: Y2.current, formElement: Q2.current, inputElement: X2.current }), Re2 = { container: J2.current }, Me2 = Re2.container, jt.useEffect((function() {
      if (Me2) {
        var e12 = Me2.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"), t3 = e12[0], n3 = e12[e12.length - 1];
        return Me2.addEventListener("keydown", r3), function() {
          Me2.removeEventListener("keydown", r3);
        };
      }
      function r3(e13) {
        "Tab" === e13.key && (e13.shiftKey ? document.activeElement === t3 && (e13.preventDefault(), n3.focus()) : document.activeElement === n3 && (e13.preventDefault(), t3.focus()));
      }
    }), [Me2]), En({ theme: i2 }), jt.useEffect((function() {
      return document.body.classList.add("DocSearch--active"), function() {
        var e12, t3;
        document.body.classList.remove("DocSearch--active"), null === (e12 = (t3 = window).scrollTo) || void 0 === e12 || e12.call(t3, 0, y2);
      };
    }), []), jt.useEffect((function() {
      "undefined" != typeof window && window.localStorage && (function() {
        if ("undefined" == typeof window || !window.localStorage) return 0;
        var e12 = 0;
        for (var t3 in window.localStorage) window.localStorage.hasOwnProperty(t3) && (e12 += window.localStorage[t3].length + t3.length);
        return e12;
      })() > 4194304 && Rm();
    }), []), jt.useLayoutEffect((function() {
      var e12 = window.innerWidth - document.body.clientWidth;
      return document.body.style.marginRight = "".concat(e12, "px"), function() {
        document.body.style.marginRight = "0px";
      };
    }), []), jt.useEffect((function() {
      window.matchMedia("(max-width: 768px)").matches && (ee2.current = 5);
    }), []), jt.useEffect((function() {
      var e12;
      Y2.current && !I2 && ("function" == typeof (e12 = Y2.current).scrollTo ? e12.scrollTo({ top: 0, behavior: "smooth" }) : e12.scrollTop = 0);
    }), [W2.query, I2]), jt.useEffect((function() {
      ne2.length > 0 && (qe2(), X2.current && X2.current.focus());
    }), [ne2, qe2]), jt.useEffect((function() {
      function e12() {
        if (G2.current) {
          var e13 = 0.01 * window.innerHeight;
          G2.current.style.setProperty("--docsearch-vh", "".concat(e13, "px"));
        }
      }
      return e12(), window.addEventListener("resize", e12), function() {
        window.removeEventListener("resize", e12);
      };
    }), []), jt.useEffect((function() {
      I2 || (Ze2.refresh(), Ae2([]));
    }), [I2, Ze2, Ae2]);
    var Ue2 = true, Ve2 = W2.collections.some((function(e12) {
      return e12.items.length > 0;
    }));
    return "idle" !== W2.status || false !== Ve2 || 0 !== W2.query.length || I2 || (Ue2 = false), jt.createElement("div", Xt({ ref: J2 }, $e2({ "aria-expanded": true }), { className: ["DocSearch", "DocSearch-Container", "stalled" === W2.status && "DocSearch-Container--Stalled", "error" === W2.status && "DocSearch-Container--Errored"].filter(Boolean).join(" "), role: "button", tabIndex: 0, onMouseDown: function(e12) {
      e12.target === e12.currentTarget && s2();
    } }), jt.createElement("div", { className: "DocSearch-Modal", ref: G2 }, jt.createElement("header", { className: "DocSearch-SearchBar", ref: Q2 }, jt.createElement(zm, Xt({}, Ze2, { state: W2, placeholder: r2 || "Search docs", autoFocus: 0 === ne2.length, inputRef: X2, isFromSelection: Boolean(ne2) && ne2 === te2, translations: U2, isAskAiActive: I2, askAiStatus: Ce2, onClose: s2, onAskAiToggle: B2, onAskAgain: function(e12) {
      Ne2(true, e12);
    } }))), Ue2 && jt.createElement("div", { className: "DocSearch-Dropdown", ref: Y2 }, jt.createElement(Pm, Xt({}, Ze2, { indexName: ve2, state: W2, hitComponent: d2, resultsFooterComponent: h2, disableUserPersonalization: b2, recentSearches: ye2, favoriteSearches: De2, conversations: me2, inputRef: X2, translations: V2, getMissingResultsUrl: w2, isAskAiActive: I2, canHandleAskAi: P2, messages: _e2, askAiStreamError: Fe2, askAiFetchError: we2, status: Ce2, hasCollections: Ve2, onAskAiToggle: B2, onItemClick: function(e12, t3) {
      if ("askAI" === e12.type && e12.query) return "stored" === e12.anchor && "messages" in e12 ? (Ae2(e12.messages), B2(true)) : Ne2(true, e12.query), void t3.preventDefault();
      Te2(e12), Ie2(e12), km(t3) || s2();
    }, onFeedback: ze2 }))), jt.createElement("footer", { className: "DocSearch-Footer" }, jt.createElement(_h, { translations: q2, isAskAiActive: I2 }))));
  }
  function mD(e11) {
    var t2, n2, r2, u2, a2, i2, o2 = jt.useRef(null), s2 = cn(jt.useState(false), 2), c2 = s2[0], l2 = s2[1], f2 = cn(jt.useState((null == e11 ? void 0 : e11.initialQuery) || void 0), 2), d2 = f2[0], p2 = f2[1], h2 = cn(jt.useState(false), 2), v2 = h2[0], m2 = h2[1], D2 = (null == e11 || null === (t2 = e11.translations) || void 0 === t2 || null === (t2 = t2.modal) || void 0 === t2 || null === (t2 = t2.searchBox) || void 0 === t2 ? void 0 : t2.placeholderText) || (null == e11 ? void 0 : e11.placeholder) || "Search docs", y2 = Boolean(null == e11 ? void 0 : e11.askAi);
    y2 && (D2 = (null == e11 || null === (a2 = e11.translations) || void 0 === a2 || null === (a2 = a2.modal) || void 0 === a2 || null === (a2 = a2.searchBox) || void 0 === a2 ? void 0 : a2.placeholderText) || "Search docs or ask AI a question"), v2 && (D2 = (null == e11 || null === (i2 = e11.translations) || void 0 === i2 || null === (i2 = i2.modal) || void 0 === i2 || null === (i2 = i2.searchBox) || void 0 === i2 ? void 0 : i2.placeholderTextAskAi) || "Ask another question...");
    var g2 = jt.useCallback((function(e12) {
      m2(e12);
    }), [m2]), F2 = jt.useCallback((function() {
      l2(true);
    }), [l2]), E2 = jt.useCallback((function() {
      l2(false), p2(null == e11 ? void 0 : e11.initialQuery), v2 && m2(false);
    }), [l2, e11.initialQuery, v2, m2]);
    return (function(e12) {
      var t3 = e12.isOpen, n3 = e12.onOpen, r3 = e12.onClose, u3 = e12.onInput, a3 = e12.isAskAiActive, i3 = e12.onAskAiToggle, o3 = e12.searchButtonRef, s3 = mn(e12.keyboardShortcuts);
      jt.useEffect((function() {
        function e13(e14) {
          var c3;
          if (t3 && "Escape" === e14.code && a3) i3(false);
          else {
            var l3 = s3["Ctrl/Cmd+K"] && "k" === (null === (c3 = e14.key) || void 0 === c3 ? void 0 : c3.toLowerCase()) && (e14.metaKey || e14.ctrlKey), f3 = s3["/"] && "/" === e14.key;
            if ("Escape" === e14.code && t3 || l3 || !(function(e15) {
              var t4 = e15.composedPath()[0], n4 = t4.tagName;
              return t4.isContentEditable || "INPUT" === n4 || "SELECT" === n4 || "TEXTAREA" === n4;
            })(e14) && f3 && !t3) return e14.preventDefault(), void (t3 ? r3() : document.body.classList.contains("DocSearch--active") || n3());
            o3 && o3.current === document.activeElement && u3 && /[a-zA-Z0-9]/.test(String.fromCharCode(e14.keyCode)) && u3(e14);
          }
        }
        return window.addEventListener("keydown", e13), function() {
          window.removeEventListener("keydown", e13);
        };
      }), [t3, n3, r3, u3, o3, a3, i3, s3]);
    })({ isOpen: c2, onOpen: F2, onClose: E2, onInput: jt.useCallback((function(e12) {
      l2(true), p2(e12.key);
    }), [l2, p2]), isAskAiActive: v2, onAskAiToggle: g2, searchButtonRef: o2, keyboardShortcuts: e11.keyboardShortcuts }), En({ theme: e11.theme }), jt.createElement(jt.Fragment, null, jt.createElement(kn, { ref: o2, translations: null == e11 || null === (n2 = e11.translations) || void 0 === n2 ? void 0 : n2.button, keyboardShortcuts: e11.keyboardShortcuts, onClick: F2 }), c2 && vt(jt.createElement(vD, Xt({}, e11, { placeholder: D2, initialScrollY: window.scrollY, initialQuery: d2, translations: null == e11 || null === (r2 = e11.translations) || void 0 === r2 ? void 0 : r2.modal, isAskAiActive: v2, canHandleAskAi: y2, onAskAiToggle: g2, onClose: E2 })), null !== (u2 = e11.portalContainer) && void 0 !== u2 ? u2 : document.body));
  }
  function DD(e11) {
    var t2 = (function(e12) {
      var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
      return "string" == typeof e12 ? t3.document.querySelector(e12) : e12;
    })(e11.container, e11.environment);
    return bt(jt.createElement(mD, l({}, e11, { transformSearchClient: function(t3) {
      return t3.addAlgoliaAgent("docsearch.js", fD), e11.transformSearchClient ? e11.transformSearchClient(t3) : t3;
    } })), t2), function() {
      Pt(t2);
    };
  }

  // ns-hugo-imp:/home/runner/work/paketo-website/paketo-website/build-environment/assets/js/components/search.js
  function Search({ element }) {
    DD({
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
  (*! @docsearch/js 4.0.1 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com *)
*/
