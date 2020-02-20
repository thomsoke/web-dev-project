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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/description/description.js":
/*!****************************************!*\
  !*** ./src/description/description.js ***!
  \****************************************/
/*! exports provided: generateDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateDescription\", function() { return generateDescription; });\n///////////////////////////////////////////////////////////////\n// *todo* add to constants\nconst generateDescription = (htmlElement) => {\n  const homepageDescription = document.createElement(\"p\")\n  homepageDescription.id = \"hompage-description\"\n  homepageDescription.innerHTML = \"this is a test description from description.js\"\n  htmlElement.appendChild(homepageDescription)\n}\n\n///////////////////////////////////////////////////////////////\n\n\n\n//# sourceURL=webpack:///./src/description/description.js?");

/***/ }),

/***/ "./src/header/header.js":
/*!******************************!*\
  !*** ./src/header/header.js ***!
  \******************************/
/*! exports provided: generateHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateHeader\", function() { return generateHeader; });\n///////////////////////////////////////////////////////////////\nconst generateHeader = (htmlElement) => {\n  const mainHeader = document.createElement(\"h1\")\n  mainHeader.id = \"main-header\"\n  mainHeader.innerHTML = \"Ultimate Grand Supreme Show Tracker Experience 1.0\"\n  htmlElement.appendChild(mainHeader)\n}\n\n///////////////////////////////////////////////////////////////\n\n\n\n//# sourceURL=webpack:///./src/header/header.js?");

/***/ }),

/***/ "./src/header/subheader-items.js":
/*!***************************************!*\
  !*** ./src/header/subheader-items.js ***!
  \***************************************/
/*! exports provided: generateSubheader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateSubheader\", function() { return generateSubheader; });\n///////////////////////////////////////////////////////////////\nconst home = {\n  childText: \"home\",\n  className: \"active\",\n  href: \"#home\"\n}\nconst subpage1 = {\n  childText: \"subpage 1\",\n  className: \"\",\n  href: \"http://watertowers.com/\"\n}\nconst subpage2 = {\n  childText: \"subpage 2\",\n  className: \"\",\n  href: \"https://www.tigers-world.com/\"\n}\nconst subpage3 = {\n  childText: \"subpage 3\",\n  className: \"\",\n  href: \"https://www.wikihow.com/Survive-a-Bank-Robbery\"\n}\n\n///////////////////////////////////////////////////////////////\nconst METADATA_ITEMS = [ home, subpage1, subpage2, subpage3 ]\n\n///////////////////////////////////////////////////////////////\nconst generateSubheaderItem = (metadata) => {\n  const { childText, className, href } = metadata\n  const subheaderItem = document.createElement(\"a\")\n\n  subheaderItem.innerHTML = childText\n  subheaderItem.setAttribute(\"class\", className)\n  subheaderItem.setAttribute(\"href\", href)\n\n  return subheaderItem\n}\n\n///////////////////////////////////////////////////////////////\nconst fillSubheaderArray = (metadataItems) => {\n  return metadataItems.map(item => generateSubheaderItem(item))\n}\n\n///////////////////////////////////////////////////////////////\nconst generateSubheader = (htmlElement) => {\n  const subheader = document.createElement(\"div\")\n  subheader.id = \"sub-header\"\n  const subheaderItems = fillSubheaderArray(METADATA_ITEMS)\n\n  for(let i = 0; i < subheaderItems.length; i++)\n  {\n    htmlElement.appendChild(subheaderItems[i])\n  }\n  console.log(\"after html elem for loop\", htmlElement)\n}\n\n///////////////////////////////////////////////////////////////\n\n\n\n//# sourceURL=webpack:///./src/header/subheader-items.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header */ \"./src/header/header.js\");\n/* harmony import */ var _header_subheader_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/subheader-items */ \"./src/header/subheader-items.js\");\n/* harmony import */ var _description_description__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./description/description */ \"./src/description/description.js\");\n/* harmony import */ var _subtitle_subtitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subtitle/subtitle */ \"./src/subtitle/subtitle.js\");\n/* harmony import */ var _slideshow_slideshow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slideshow/slideshow */ \"./src/slideshow/slideshow.js\");\n///////////////////////////////////////////////////////////////\n\n\n\n\n\n\n\n\n\n\n///////////////////////////////////////////////////////////////\ndocument.addEventListener('DOMContentLoaded', () => {\n  const title = document.getElementById(\"title-container\")\n  Object(_header_header__WEBPACK_IMPORTED_MODULE_0__[\"generateHeader\"])(title)\n\n  const subheader = document.getElementById(\"navigation\")\n  Object(_header_subheader_items__WEBPACK_IMPORTED_MODULE_1__[\"generateSubheader\"])(subheader)\n\n\n  const subtitle = document.getElementById(\"subtitle\")\n  Object(_subtitle_subtitle__WEBPACK_IMPORTED_MODULE_3__[\"generateSubtitle\"])(subtitle)\n\n  const description = document.getElementById(\"description\")\n  Object(_description_description__WEBPACK_IMPORTED_MODULE_2__[\"generateDescription\"])(description)\n\n\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/slideshow/slideshow.js":
/*!************************************!*\
  !*** ./src/slideshow/slideshow.js ***!
  \************************************/
/*! exports provided: showSlides */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showSlides\", function() { return showSlides; });\n//\n\n\n// this is the code that actually RUNS the slideshow\n// image slideshow - automatic\nvar slideIndex = 0;\nshowSlides();\n\nfunction showSlides() {\n  var i;\n  var slides = document.getElementsByClassName(\"mySlides\");\n\n  for (i = 0; i < slides.length; i++) {\n    slides[i].style.display = \"none\";\n  }\n  slideIndex++;\n  if (slideIndex > slides.length) {slideIndex = 1}\n  slides[slideIndex-1].style.display = \"block\";\n  setTimeout(showSlides, 3000); // Change image every 3 seconds\n}\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/slideshow/slideshow.js?");

/***/ }),

/***/ "./src/subtitle/subtitle.js":
/*!**********************************!*\
  !*** ./src/subtitle/subtitle.js ***!
  \**********************************/
/*! exports provided: generateSubtitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateSubtitle\", function() { return generateSubtitle; });\n///////////////////////////////////////////////////////////////\n// *todo* add to constants\nconst generateSubtitle = (htmlElement) => {\n  const pageSubtitle = document.createElement(\"h1\")\n  pageSubtitle.id = \"main-header\"\n  pageSubtitle.innerHTML = \"welcome to the show tracker site\"\n  htmlElement.appendChild(pageSubtitle)\n}\n\n///////////////////////////////////////////////////////////////\n\n\n\n//# sourceURL=webpack:///./src/subtitle/subtitle.js?");

/***/ })

/******/ });