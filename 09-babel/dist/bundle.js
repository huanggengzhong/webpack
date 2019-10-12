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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\91583\\\\Desktop\\\\webpack\\\\09-babel\\\\src\\\\main.js: Support for the experimental syntax 'classProperties' isn't currently enabled (45:9):\\n\\n\\u001b[0m \\u001b[90m 43 | \\u001b[39m\\u001b[90m//es6更高级的语法\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 44 | \\u001b[39m\\u001b[36mclass\\u001b[39m \\u001b[33mDog\\u001b[39m{\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 45 | \\u001b[39m    name\\u001b[33m=\\u001b[39m\\u001b[32m'大黄'\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m        \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 46 | \\u001b[39m    static color\\u001b[33m=\\u001b[39m\\u001b[32m'yellow'\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 47 | \\u001b[39m}\\u001b[0m\\n\\u001b[0m \\u001b[90m 48 | \\u001b[39mlet d\\u001b[33m=\\u001b[39m\\u001b[36mnew\\u001b[39m \\u001b[33mDog\\u001b[39m()\\u001b[0m\\n\\nAdd @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.\\n    at Parser.raise (C:\\\\Users\\\\91583\\\\Desktop\\\\webpack\\\\09-babel\\\\node_modules\\\\_@babel_parser@7.6.4@@babel\\\\parser\\\\lib\\\\index.js:6420:17)\\n    at Parser.expectPlugin (C:\\\\Users\\\\91583\\\\Desktop\\\\webpack\\\\09-babel\\\\node_modules\\\\_@babel_parser@7.6.4@@babel\\\\parser\\\\lib\\\\index.js:7778:18)\\n    at Parser.parseClassProperty (C:\\\\Users\\\\91583\\\\Desktop\\\\webpack\\\\09-babel\\\\node_modules\\\\_@babel_parser@7.6.4@@babel\\\\parser\\\\lib\\\\index.js:11013:12)\\n    at Parser.pushClassProperty (C:\\\\Users\\\\91583\\\\Desktop\\\\webpack\\\\09-babel\\\\node_modules\\\\_@babel_parser@7.6.4@@babel\\\\parser\\\\lib\\\\index.js:10978:30)\\n    at Parser.parseClassMemberWithIsStatic (C:\\\\Users\\\\91583\\\\Desktop\\\\webpack\\\\09-babel\\\\node_modules\\\\_@babel_parser@7.6.4@@babel\\\\parser\\\\lib\\\\index.js:10917:14)\\n    at Parser.parseClassMember (C:\\\\Users\\\\91583\\\\Desktop\\\\webpack\\\\09-babel\\\\node_modules\\\\_@babel_parser@7.6.4@@babel\\\\parser\\\\lib\\\\index.js:10851:10)\\n    at withTopicForbiddingContext (C:\\\\Users\\\\91583\\\\Desktop\\\\webpack\\\\09-babel\\\\node_modules\\\\_@babel_parser@7.6.4@@babel\\\\parser\\\\lib\\\\index.js:10806:14)\\n    at Parser.withTopicForbiddingContext (C:\\\\Users\\\\91583\\\\Desktop\\\\webpack\\\\09-babel\\\\node_modules\\\\_@babel_parser@7.6.4@@babel\\\\parser\\\\lib\\\\index.js:9884:14)\\n    at Parser.parseClassBody (C:\\\\Users\\\\91583\\\\Desktop\\\\webpack\\\\09-babel\\\\node_modules\\\\_@babel_parser@7.6.4@@babel\\\\parser\\\\lib\\\\index.js:10783:10)\\n    at Parser.parseClass (C:\\\\Users\\\\91583\\\\Desktop\\\\webpack\\\\09-babel\\\\node_modules\\\\_@babel_parser@7.6.4@@babel\\\\parser\\\\lib\\\\index.js:10757:22)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\91583\\\\Desktop\\\\webpack\\\\09-babel\\\\node_modules\\\\_@babel_parser@7.6.4@@babel\\\\parser\\\\lib\\\\index.js:10051:21)\\n    at Parser.parseStatement (C:\\\\Users\\\\91583\\\\Desktop\\\\webpack\\\\09-babel\\\\node_modules\\\\_@babel_parser@7.6.4@@babel\\\\parser\\\\lib\\\\index.js:10009:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\91583\\\\Desktop\\\\webpack\\\\09-babel\\\\node_modules\\\\_@babel_parser@7.6.4@@babel\\\\parser\\\\lib\\\\index.js:10585:25)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\91583\\\\Desktop\\\\webpack\\\\09-babel\\\\node_modules\\\\_@babel_parser@7.6.4@@babel\\\\parser\\\\lib\\\\index.js:10572:10)\\n    at Parser.parseTopLevel (C:\\\\Users\\\\91583\\\\Desktop\\\\webpack\\\\09-babel\\\\node_modules\\\\_@babel_parser@7.6.4@@babel\\\\parser\\\\lib\\\\index.js:9940:10)\\n    at Parser.parse (C:\\\\Users\\\\91583\\\\Desktop\\\\webpack\\\\09-babel\\\\node_modules\\\\_@babel_parser@7.6.4@@babel\\\\parser\\\\lib\\\\index.js:11447:17)\\n    at parse (C:\\\\Users\\\\91583\\\\Desktop\\\\webpack\\\\09-babel\\\\node_modules\\\\_@babel_parser@7.6.4@@babel\\\\parser\\\\lib\\\\index.js:11483:38)\\n    at parser (C:\\\\Users\\\\91583\\\\Desktop\\\\webpack\\\\09-babel\\\\node_modules\\\\_@babel_core@7.6.4@@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:168:34)\\n    at normalizeFile (C:\\\\Users\\\\91583\\\\Desktop\\\\webpack\\\\09-babel\\\\node_modules\\\\_@babel_core@7.6.4@@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:102:11)\\n    at runSync (C:\\\\Users\\\\91583\\\\Desktop\\\\webpack\\\\09-babel\\\\node_modules\\\\_@babel_core@7.6.4@@babel\\\\core\\\\lib\\\\transformation\\\\index.js:44:43)\\n    at runAsync (C:\\\\Users\\\\91583\\\\Desktop\\\\webpack\\\\09-babel\\\\node_modules\\\\_@babel_core@7.6.4@@babel\\\\core\\\\lib\\\\transformation\\\\index.js:35:14)\\n    at process.nextTick (C:\\\\Users\\\\91583\\\\Desktop\\\\webpack\\\\09-babel\\\\node_modules\\\\_@babel_core@7.6.4@@babel\\\\core\\\\lib\\\\transform.js:34:34)\\n    at process._tickCallback (internal/process/next_tick.js:61:11)\");\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });