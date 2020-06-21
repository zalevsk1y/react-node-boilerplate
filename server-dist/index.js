/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../bundle-names-manifest.json":
/*!*************************************************************!*\
  !*** C:/wordpress_proj/test-app/bundle-names-manifest.json ***!
  \*************************************************************/
/*! exports provided: main.css, main.js, index.html, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"main.css\\\":\\\"./css/main27b97f9f4261a37e69e3.css\\\",\\\"main.js\\\":\\\"./js/main27b97f9f4261a37e69e3.js\\\",\\\"index.html\\\":\\\"index.html\\\"}\");\n\n//# sourceURL=webpack:///C:/wordpress_proj/test-app/bundle-names-manifest.json?");

/***/ }),

/***/ "../client/App.js":
/*!************************!*\
  !*** ../client/App.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar App = /*#__PURE__*/function (_Component) {\n  _inherits(App, _Component);\n\n  var _super = _createSuper(App);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    return _super.call(this, props);\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Hello World.\");\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///../client/App.js?");

/***/ }),

/***/ "../redux/actions/index.js":
/*!*********************************!*\
  !*** ../redux/actions/index.js ***!
  \*********************************/
/*! exports provided: REQUEST_POSTS, RECEIVE_POSTS, requestPosts, receivePosts, fetchPostsIfNeeded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REQUEST_POSTS\", function() { return REQUEST_POSTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RECEIVE_POSTS\", function() { return RECEIVE_POSTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"requestPosts\", function() { return requestPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receivePosts\", function() { return receivePosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchPostsIfNeeded\", function() { return fetchPostsIfNeeded; });\nvar REQUEST_POSTS = \"REQUEST_POSTS\";\nvar RECEIVE_POSTS = \"RECEIVE_POSTS\";\nvar requestPosts = function requestPosts() {\n  return {\n    type: REQUEST_POSTS\n  };\n};\nvar receivePosts = function receivePosts(json) {\n  return {\n    type: RECEIVE_POSTS,\n    posts: json\n  };\n};\n\nvar fetchPosts = function fetchPosts() {\n  return function (dispatch) {\n    dispatch(requestPosts());\n    return fetch(\"posts/\").then(function (response) {\n      return response.json();\n    }).then(function (json) {\n      return dispatch(receivePosts(json));\n    });\n  };\n};\n\nvar shouldFetchPosts = function shouldFetchPosts(state) {\n  var posts = state.posts;\n\n  if (posts.length == 0) {\n    return true;\n  } else if (state.isFetching) {\n    return false;\n  }\n};\n\nvar fetchPostsIfNeeded = function fetchPostsIfNeeded() {\n  return function (dispatch, getState) {\n    if (shouldFetchPosts(getState())) {\n      return dispatch(fetchPosts());\n    }\n  };\n};\n\n//# sourceURL=webpack:///../redux/actions/index.js?");

/***/ }),

/***/ "../redux/configureStore.js":
/*!**********************************!*\
  !*** ../redux/configureStore.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return configureStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ \"../redux/reducers/index.js\");\n\n\n\nfunction configureStore(preloadedState) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], preloadedState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\n}\n\n//# sourceURL=webpack:///../redux/configureStore.js?");

/***/ }),

/***/ "../redux/reducers/index.js":
/*!**********************************!*\
  !*** ../redux/reducers/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"../redux/actions/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nfunction mainReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    isFetching: false,\n    posts: []\n  };\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"REQUEST_POSTS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isFetching: true\n      });\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"RECEIVE_POSTS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isFetching: false,\n        posts: action.posts\n      });\n\n    default:\n      return state;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mainReducer);\n\n//# sourceURL=webpack:///../redux/reducers/index.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_utils_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/utils.render */ \"./utils/utils.render.js\");\n/* harmony import */ var _utils_utils_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/utils.template */ \"./utils/utils.template.js\");\n\n\n\n\nvar initialState = {\n  isFetching: false\n};\nvar dirname = process.cwd();\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use('/public/images', express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(dirname, 'public', 'images')));\napp.use('/public/css', express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(dirname, 'client-dist', 'css')));\napp.use('/public/js', express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(dirname, 'client-dist', 'js')));\napp.get('/', function (req, res) {\n  var _render = Object(_utils_utils_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(initialState),\n      preloadedState = _render.preloadedState,\n      content = _render.content;\n\n  var response = Object(_utils_utils_template__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('Tech test', preloadedState, content);\n  console.log(path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(dirname, 'public', 'images'));\n  res.send(response);\n});\napp.listen(process.env.PORT || 8080, function () {\n  return console.log(\"Listening on port \".concat(process.env.PORT || 8080, \"!\"));\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./utils/utils.render.js":
/*!*******************************!*\
  !*** ./utils/utils.render.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/configureStore */ \"../redux/configureStore.js\");\n/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client/App */ \"../client/App.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (initialState) {\n  var store = Object(_redux_configureStore__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(initialState);\n  var content = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n    store: store\n  }, [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_App__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    key: 0\n  })]));\n  var preloadedState = store.getState();\n  return {\n    preloadedState: preloadedState,\n    content: content\n  };\n});\n\n//# sourceURL=webpack:///./utils/utils.render.js?");

/***/ }),

/***/ "./utils/utils.template.js":
/*!*********************************!*\
  !*** ./utils/utils.template.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bundle_names_manifest_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../bundle-names-manifest.json */ \"../../bundle-names-manifest.json\");\nvar _bundle_names_manifest_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../bundle-names-manifest.json */ \"../../bundle-names-manifest.json\", 1);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'No Title';\n  var preloadedState = arguments.length > 1 ? arguments[1] : undefined;\n  var content = arguments.length > 2 ? arguments[2] : undefined;\n  var cssPath = \"public\".concat(_bundle_names_manifest_json__WEBPACK_IMPORTED_MODULE_0__['main.css'].slice(1));\n  var scripts = \"<script>window.__INIT_STATE__=\".concat(preloadedState !== undefined ? JSON.stringify(preloadedState) : {}, \"</script>\");\n  return \"<!DOCTYPE html>\\n        <html lang='en'>\\n            <head>\\n                <title>\".concat(title || 'Page for tech test.', \"</title>\\n                <meta charset='UTF-8'>\\n                <meta name='viewport' content='width=device-width, initial-scale=1.0'>\\n                <meta http-equiv='X-UA-Compatible' content='ie=edge'>\\n                <meta name='description' content='Page for tech test'>\\n                <link href='public/images/favicon.ico' rel='icon' type='image/png'>\\n                <link href='\").concat(cssPath, \"' rel='stylesheet' type='text/css'>\\n            </head>\\n            <body>\\n                <div class='content-container'>\\n                    <div class='content'>\\n                        \").concat(content || '', \"\\n                    </div>\\n                </div>\\n                \").concat(scripts, \"\\n            </body>\\n            </html>\");\n});\n\n//# sourceURL=webpack:///./utils/utils.template.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });