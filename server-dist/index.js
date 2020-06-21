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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar account = __webpack_require__(/*! ./models/account.model.js */ \"./models/account.model.js\");\n\nvar id = 1;\nvar initialState = {\n  balance: 10000,\n  transactions: []\n};\nvar userAccount = account(id, initialState);\nvar dirname = process.cwd();\nvar app = express();\napp.use(\"/public/images\", express[\"static\"](path.resolve(dirname, \"public\", \"images\")));\napp.use(\"/public/css\", express[\"static\"](path.resolve(dirname, \"client-dist\", \"css\")));\napp.use(\"/public/js\", express[\"static\"](path.resolve(dirname, \"client-dist\", \"js\")));\napp.use(bodyParser.json());\napp.use(bodyParser.urlencoded({\n  extended: true\n}));\napp.get(\"/\", function (req, res) {\n  res.sendFile(path.resolve(dirname, \"public\", \"index.html\"));\n});\napp.get(\"/account\", function (req, res) {\n  res.send(JSON.stringify(userAccount.getBalance()));\n});\napp.get(\"/account/transactions\", function (req, res) {\n  console.log('send transactions');\n  res.send(JSON.stringify(userAccount.getTransactions()));\n});\napp.post(\"/account/transactions\", function (req, res) {\n  var _req$body = req.body,\n      type = _req$body.type,\n      amount = _req$body.amount,\n      id = _req$body.id;\n  console.log('get transaction:', req.body);\n  var result = false;\n\n  switch (type) {\n    case \"debit\":\n      result = userAccount.debit(id, Math.abs(amount));\n      break;\n\n    case \"credit\":\n      result = userAccount.credit(id, Math.abs(amount));\n      break;\n  }\n\n  console.log(userAccount.getBalance());\n  res.send(JSON.stringify({\n    success: result\n  }));\n});\napp.get(\"/account/transactions/:id\", function (req, res) {\n  var id = req.params.id;\n  res.send(JSON.stringify(userAccount.getTransactionById(id)));\n});\napp.listen(process.env.PORT || 8080, function () {\n  return console.log(\"Listening on port \".concat(process.env.PORT || 8080, \"!\"));\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./models/account.model.js":
/*!*********************************!*\
  !*** ./models/account.model.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function account(id, initialState) {\n  var balance = initialState.balance,\n      transactions = initialState.transactions;\n  return {\n    id: id,\n    debit: function debit(id, amount) {\n      if (balance - amount < 0) {\n        return false;\n      }\n\n      balance -= amount;\n      transactions.push({\n        id: id,\n        type: 'debit',\n        amount: amount,\n        effectiveDate: Date.now()\n      });\n    },\n    credit: function credit(id, amount) {\n      balance += amount;\n      transactions.push({\n        id: id,\n        type: 'credit',\n        amount: amount,\n        effectiveDate: Date.now()\n      });\n    },\n    getBalance: function getBalance() {\n      return balance;\n    },\n    getTransactions: function getTransactions() {\n      return transactions;\n    },\n    getTransactionById: function getTransactionById(id) {\n      return transactions.find(function (trans) {\n        return trans.id === id;\n      });\n    }\n  };\n}\n\nmodule.exports = account;\n\n//# sourceURL=webpack:///./models/account.model.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

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

/***/ })

/******/ });