(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (cb, mod) => () => (mod || cb((mod = {exports: {}}).exports, mod), mod.exports);
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {get: () => module.default, enumerable: true} : {value: module, enumerable: true})), module);
  };

  // node_modules/clipboard/dist/clipboard.js
  var require_clipboard = __commonJS((exports, module) => {
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
      return function() {
        var __webpack_modules__ = {
          747: function(__unused_webpack_module, __webpack_exports__, __webpack_require__2) {
            "use strict";
            __webpack_require__2.d(__webpack_exports__, {
              default: function() {
                return clipboard;
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
            var clipboard_action_cut = ClipboardActionCut;
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
            var ClipboardActionCopy = function ClipboardActionCopy2(target) {
              var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                container: document.body
              };
              var selectedText = "";
              if (typeof target === "string") {
                var fakeElement = createFakeElement(target);
                options.container.appendChild(fakeElement);
                selectedText = select_default()(fakeElement);
                command("copy");
                fakeElement.remove();
              } else {
                selectedText = select_default()(target);
                command("copy");
              }
              return selectedText;
            };
            var clipboard_action_copy = ClipboardActionCopy;
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
                return clipboard_action_copy(text, {
                  container
                });
              }
              if (target) {
                return action === "cut" ? clipboard_action_cut(target) : clipboard_action_copy(target, {
                  container
                });
              }
            };
            var clipboard_action_default = ClipboardActionDefault;
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
              subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
              if (superClass)
                _setPrototypeOf(subClass, superClass);
            }
            function _setPrototypeOf(o, p) {
              _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
                o2.__proto__ = p2;
                return o2;
              };
              return _setPrototypeOf(o, p);
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
              } catch (e) {
                return false;
              }
            }
            function _getPrototypeOf(o) {
              _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
                return o2.__proto__ || Object.getPrototypeOf(o2);
              };
              return _getPrototypeOf(o);
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
                _this.ClipboardActionCut = clipboard_action_cut.bind(_assertThisInitialized(_this));
                _this.ClipboardActionCopy = clipboard_action_copy.bind(_assertThisInitialized(_this));
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
              }, {
                key: "listenClick",
                value: function listenClick(trigger) {
                  var _this2 = this;
                  this.listener = listen_default()(trigger, "click", function(e) {
                    return _this2.onClick(e);
                  });
                }
              }, {
                key: "onClick",
                value: function onClick(e) {
                  var trigger = e.delegateTarget || e.currentTarget;
                  var selectedText = clipboard_action_default({
                    action: this.action(trigger),
                    container: this.container,
                    target: this.target(trigger),
                    text: this.text(trigger)
                  });
                  this.emit(selectedText ? "success" : "error", {
                    action: this.action,
                    text: selectedText,
                    trigger,
                    clearSelection: function clearSelection() {
                      if (trigger) {
                        trigger.focus();
                      }
                      document.activeElement.blur();
                      window.getSelection().removeAllRanges();
                    }
                  });
                }
              }, {
                key: "defaultAction",
                value: function defaultAction(trigger) {
                  return getAttributeValue("action", trigger);
                }
              }, {
                key: "defaultTarget",
                value: function defaultTarget(trigger) {
                  var selector = getAttributeValue("target", trigger);
                  if (selector) {
                    return document.querySelector(selector);
                  }
                }
              }, {
                key: "defaultText",
                value: function defaultText(trigger) {
                  return getAttributeValue("text", trigger);
                }
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
                  return clipboard_action_copy(target, options);
                }
              }, {
                key: "cut",
                value: function cut(target) {
                  return clipboard_action_cut(target);
                }
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
          },
          828: function(module2) {
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
          },
          438: function(module2, __unused_webpack_exports, __webpack_require__2) {
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
            function delegate(elements2, selector, type, callback, useCapture) {
              if (typeof elements2.addEventListener === "function") {
                return _delegate.apply(null, arguments);
              }
              if (typeof type === "function") {
                return _delegate.bind(null, document).apply(null, arguments);
              }
              if (typeof elements2 === "string") {
                elements2 = document.querySelectorAll(elements2);
              }
              return Array.prototype.map.call(elements2, function(element) {
                return _delegate(element, selector, type, callback, useCapture);
              });
            }
            function listener(element, selector, type, callback) {
              return function(e) {
                e.delegateTarget = closest(e.target, selector);
                if (e.delegateTarget) {
                  callback.call(element, e);
                }
              };
            }
            module2.exports = delegate;
          },
          879: function(__unused_webpack_module, exports2) {
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
          },
          370: function(module2, __unused_webpack_exports, __webpack_require__2) {
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
          },
          817: function(module2) {
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
          },
          279: function(module2) {
            function E() {
            }
            E.prototype = {
              on: function(name, callback, ctx) {
                var e = this.e || (this.e = {});
                (e[name] || (e[name] = [])).push({
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
                var e = this.e || (this.e = {});
                var evts = e[name];
                var liveEvents = [];
                if (evts && callback) {
                  for (var i2 = 0, len = evts.length; i2 < len; i2++) {
                    if (evts[i2].fn !== callback && evts[i2].fn._ !== callback)
                      liveEvents.push(evts[i2]);
                  }
                }
                liveEvents.length ? e[name] = liveEvents : delete e[name];
                return this;
              }
            };
            module2.exports = E;
            module2.exports.TinyEmitter = E;
          }
        };
        var __webpack_module_cache__ = {};
        function __webpack_require__(moduleId) {
          if (__webpack_module_cache__[moduleId]) {
            return __webpack_module_cache__[moduleId].exports;
          }
          var module2 = __webpack_module_cache__[moduleId] = {
            exports: {}
          };
          __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
          return module2.exports;
        }
        !function() {
          __webpack_require__.n = function(module2) {
            var getter = module2 && module2.__esModule ? function() {
              return module2["default"];
            } : function() {
              return module2;
            };
            __webpack_require__.d(getter, {a: getter});
            return getter;
          };
        }();
        !function() {
          __webpack_require__.d = function(exports2, definition) {
            for (var key in definition) {
              if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                Object.defineProperty(exports2, key, {enumerable: true, get: definition[key]});
              }
            }
          };
        }();
        !function() {
          __webpack_require__.o = function(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
          };
        }();
        return __webpack_require__(747);
      }().default;
    });
  });

  // ns-hugo:/home/runner/work/paketo-website/paketo-website/build-environment/assets/js/components/navigation.js
  var Navigation = class {
    constructor({element}) {
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
  var navigation_default = Navigation;

  // ns-hugo:/home/runner/work/paketo-website/paketo-website/build-environment/assets/js/components/links.js
  function OpenExternalLinksInNewTab({links, hostname}) {
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
  var import_clipboard = __toModule(require_clipboard());
  var CodeSnippet = class {
    constructor({element}) {
      this.element = element;
      if (element.classList.contains("copyable")) {
        new Clipboard({
          element: this.element,
          button: this.element.querySelector(".copyable__clipboard"),
          code: this.element.querySelector(".copyable__code").innerText
        });
      }
      if (element.nextElementSibling && element.nextElementSibling.classList.contains("code-output")) {
        new Output({
          element: element.nextElementSibling,
          button: element.nextElementSibling.querySelector(".code-output__btn")
        });
      }
    }
  };
  var code_snippet_default = CodeSnippet;
  var Clipboard = class {
    constructor({element, button, code}) {
      this.element = element;
      this.code = code;
      button.addEventListener("click", this.handleClick.bind(this));
    }
    handleClick() {
      import_clipboard.default.copy(this.code);
      this.element.classList.add("copyable--clicked");
    }
  };
  var Output = class {
    constructor({element, button}) {
      this.element = element;
      button.addEventListener("click", this.handleClick.bind(this));
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
  var DocsSidebarExpander = class {
    constructor({element}) {
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
  var docs_sidebar_default = DocsSidebarExpander;

  // <stdin>
  window.addEventListener("load", (event) => {
    new navigation_default({
      element: document.querySelector("#navigation")
    });
    OpenExternalLinksInNewTab({
      links: document.getElementsByTagName("a"),
      hostname: window.location.hostname
    });
    for (const element of document.querySelectorAll(".docs pre")) {
      new code_snippet_default({element});
    }
    for (const element of document.querySelectorAll(".docs-menu__parent")) {
      new docs_sidebar_default({element: elements[i]});
    }
  });
})();
/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
