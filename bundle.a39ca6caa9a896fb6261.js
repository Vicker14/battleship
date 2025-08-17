/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Mozilla+Text:wght@200..700&family=Teko:wght@300..700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    font-family: "Mozilla Text";
    font-weight: 400;

    --tile-size: 3rem;
    --board-size: calc(10 * var(--tile-size) + 11 * var(--border-size));

    --color-white: hsl(225, 100%, 98%);
    --color-bg-board: hsl(208, 100%, 97%);
    --color-boder-tile: hsl(203, 92%, 75%);
    --border-size: 2px;
}

body {
    margin: 0;
    text-align: center;
    width: 100vw;
    height: 100vh;
    background-color: var(--color-white);
}

#title {
    padding-top: 3rem;
    font-size: 6rem;
    font-family: "Teko";
    font-weight: 500;
}

#play-zone {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.player-names {
    display: flex;
    justify-content: center;

    gap: var(--tile-size);

    margin: calc(var(--tile-size) / 3);
    position: relative;
}

.player {
    width: var(--board-size);
    font-weight: 600;
    font-size: 1.5rem;
    z-index: 0;
    position: relative;

    display: flex;
    justify-content: center;
}

.randomizer {
    position: absolute;
    bottom: 0;
}

.player::after {
    content: "";

    position: absolute;

    z-index: -1;
    left: center;
    top: 1rem;

    width: 25%;
    height: 0.7rem;

    background-color: var(--color-boder-tile);
}

.controls {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

button {
    border: none;
    border-radius: 0.3rem;
    padding: 0.2rem 0.5rem;

    background-color: var(--color-boder-tile);
    text-align: center;
    font-size: 1rem;
}
button:hover {
    background-color: hsl(from var(--color-bg-board) h s calc(l - 30));
    cursor: pointer;
}

.game-boards {
    display: flex;
    justify-content: center;
    gap: var(--tile-size);
}

.board {
    height: var(--board-size);
    aspect-ratio: 1 / 1;

    background-color: var(--color-bg-board);
}

[class*="grid"] {
    display: grid;
    grid-template: repeat(10, var(--tile-size)) / repeat(10, var(--tile-size));

    gap: var(--border-size);
}

.tile {
    height: var(--tile-size);
    aspect-ratio: 1 / 1;

    border: solid var(--border-size) var(--color-boder-tile);

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
}

.ship {
    height: 90%;
    aspect-ratio: 1/1;
    position: absolute;

    background-color: gray;
}

.hit {
    height: 50%;
    aspect-ratio: 1/1;

    position: absolute;
    top: center;
    left: center;

    background-color: black;
    border-radius: 50%;
}

.miss {
    height: 50%;
    aspect-ratio: 1/1;

    position: absolute;
    top: center;
    left: center;

    border: solid black 0.15rem;
    border-radius: 50%;
}

.winner-screen {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;

    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba(0, 0, 0, 0.3); /* color translúcido */
    backdrop-filter: blur(4px);
}

.winner-text {
    font-size: var(--tile-size);
    font-weight: 700;
}

.box {
    background-color: var(--color-bg-board);

    padding: 2rem;
    border-radius: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
}

.new-game-button {
    flex: 0;
    padding: 0.5rem 1.2rem;
}

.hidden {
    display: none;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;IACI,2BAA2B;IAC3B,gBAAgB;;IAEhB,iBAAiB;IACjB,mEAAmE;;IAEnE,kCAAkC;IAClC,qCAAqC;IACrC,sCAAsC;IACtC,kBAAkB;AACtB;;AAEA;IACI,SAAS;IACT,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;;IAEvB,qBAAqB;;IAErB,kCAAkC;IAClC,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,iBAAiB;IACjB,UAAU;IACV,kBAAkB;;IAElB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,WAAW;;IAEX,kBAAkB;;IAElB,WAAW;IACX,YAAY;IACZ,SAAS;;IAET,UAAU;IACV,cAAc;;IAEd,yCAAyC;AAC7C;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,qBAAqB;IACrB,sBAAsB;;IAEtB,yCAAyC;IACzC,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,kEAAkE;IAClE,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;;IAEnB,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,0EAA0E;;IAE1E,uBAAuB;AAC3B;;AAEA;IACI,wBAAwB;IACxB,mBAAmB;;IAEnB,wDAAwD;;IAExD,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,kBAAkB;;IAElB,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,iBAAiB;;IAEjB,kBAAkB;IAClB,WAAW;IACX,YAAY;;IAEZ,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,iBAAiB;;IAEjB,kBAAkB;IAClB,WAAW;IACX,YAAY;;IAEZ,2BAA2B;IAC3B,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,UAAU;IACV,MAAM;IACN,OAAO;;IAEP,YAAY;IACZ,WAAW;;IAEX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,8BAA8B,EAAE,sBAAsB;IACtD,0BAA0B;AAC9B;;AAEA;IACI,2BAA2B;IAC3B,gBAAgB;AACpB;;AAEA;IACI,uCAAuC;;IAEvC,aAAa;IACb,mBAAmB;;IAEnB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,OAAO;IACP,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Mozilla+Text:wght@200..700&family=Teko:wght@300..700&display=swap\");\n\n* {\n    font-family: \"Mozilla Text\";\n    font-weight: 400;\n\n    --tile-size: 3rem;\n    --board-size: calc(10 * var(--tile-size) + 11 * var(--border-size));\n\n    --color-white: hsl(225, 100%, 98%);\n    --color-bg-board: hsl(208, 100%, 97%);\n    --color-boder-tile: hsl(203, 92%, 75%);\n    --border-size: 2px;\n}\n\nbody {\n    margin: 0;\n    text-align: center;\n    width: 100vw;\n    height: 100vh;\n    background-color: var(--color-white);\n}\n\n#title {\n    padding-top: 3rem;\n    font-size: 6rem;\n    font-family: \"Teko\";\n    font-weight: 500;\n}\n\n#play-zone {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.player-names {\n    display: flex;\n    justify-content: center;\n\n    gap: var(--tile-size);\n\n    margin: calc(var(--tile-size) / 3);\n    position: relative;\n}\n\n.player {\n    width: var(--board-size);\n    font-weight: 600;\n    font-size: 1.5rem;\n    z-index: 0;\n    position: relative;\n\n    display: flex;\n    justify-content: center;\n}\n\n.randomizer {\n    position: absolute;\n    bottom: 0;\n}\n\n.player::after {\n    content: \"\";\n\n    position: absolute;\n\n    z-index: -1;\n    left: center;\n    top: 1rem;\n\n    width: 25%;\n    height: 0.7rem;\n\n    background-color: var(--color-boder-tile);\n}\n\n.controls {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nbutton {\n    border: none;\n    border-radius: 0.3rem;\n    padding: 0.2rem 0.5rem;\n\n    background-color: var(--color-boder-tile);\n    text-align: center;\n    font-size: 1rem;\n}\nbutton:hover {\n    background-color: hsl(from var(--color-bg-board) h s calc(l - 30));\n    cursor: pointer;\n}\n\n.game-boards {\n    display: flex;\n    justify-content: center;\n    gap: var(--tile-size);\n}\n\n.board {\n    height: var(--board-size);\n    aspect-ratio: 1 / 1;\n\n    background-color: var(--color-bg-board);\n}\n\n[class*=\"grid\"] {\n    display: grid;\n    grid-template: repeat(10, var(--tile-size)) / repeat(10, var(--tile-size));\n\n    gap: var(--border-size);\n}\n\n.tile {\n    height: var(--tile-size);\n    aspect-ratio: 1 / 1;\n\n    border: solid var(--border-size) var(--color-boder-tile);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    position: relative;\n}\n\n.ship {\n    height: 90%;\n    aspect-ratio: 1/1;\n    position: absolute;\n\n    background-color: gray;\n}\n\n.hit {\n    height: 50%;\n    aspect-ratio: 1/1;\n\n    position: absolute;\n    top: center;\n    left: center;\n\n    background-color: black;\n    border-radius: 50%;\n}\n\n.miss {\n    height: 50%;\n    aspect-ratio: 1/1;\n\n    position: absolute;\n    top: center;\n    left: center;\n\n    border: solid black 0.15rem;\n    border-radius: 50%;\n}\n\n.winner-screen {\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    left: 0;\n\n    height: 100%;\n    width: 100%;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    background: rgba(0, 0, 0, 0.3); /* color translúcido */\n    backdrop-filter: blur(4px);\n}\n\n.winner-text {\n    font-size: var(--tile-size);\n    font-weight: 700;\n}\n\n.box {\n    background-color: var(--color-bg-board);\n\n    padding: 2rem;\n    border-radius: 1rem;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1.5rem;\n}\n\n.new-game-button {\n    flex: 0;\n    padding: 0.5rem 1.2rem;\n}\n\n.hidden {\n    display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/game-controller-class.js":
/*!**********************************************!*\
  !*** ./src/scripts/game-controller-class.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Gameboard = __webpack_require__(/*! ./gameboard-class */ "./src/scripts/gameboard-class.js");
var HtmlController = __webpack_require__(/*! ./html-controller-class */ "./src/scripts/html-controller-class.js");
var Ship = __webpack_require__(/*! ./ship-class */ "./src/scripts/ship-class.js");
var GameController = /*#__PURE__*/function () {
  function GameController() {
    _classCallCheck(this, GameController);
  }
  return _createClass(GameController, null, [{
    key: "startGame",
    value: function startGame(htmlGameboard1, htmlGameboard2) {
      this.shipListP1 = GameController.generateShips(2, 2, 3, 4, 5);
      this.shipListCPU = GameController.generateShips(2, 2, 3, 4, 5);
      this.gameboardP1 = new Gameboard(this.gameboardSize);
      this.gameboardCPU = new Gameboard(this.gameboardSize);
      this.htmlControllerP1 = new HtmlController(htmlGameboard1, this.gameboardP1, false);
      this.htmlControllerCPU = new HtmlController(htmlGameboard2, this.gameboardCPU, true);
      this.randomShipPlacement(this.gameboardP1, this.shipListP1);
      this.randomShipPlacement(this.gameboardCPU, this.shipListCPU);
      this.htmlTileListP1 = this.htmlControllerP1.buildHTML();
      this.htmlTileListCPU = this.htmlControllerCPU.buildHTML();
      this.attackOnClick(this.htmlTileListCPU, this.gameboardCPU);
    }
  }, {
    key: "randomShipPlacement",
    value: function randomShipPlacement(gameboard, shipList) {
      shipList.forEach(function (ship) {
        while (true) {
          var x = Math.floor(Math.random() * 10);
          var y = Math.floor(Math.random() * 10);
          var direction = Math.random() > 0.5 ? "h" : "v";
          try {
            gameboard.placeShip(x, y, ship, direction);
            break;
          } catch (_unused) {}
        }
      });
    }
  }, {
    key: "generateShips",
    value: function generateShips() {
      var shipList = [];
      for (var _len = arguments.length, lengthX = new Array(_len), _key = 0; _key < _len; _key++) {
        lengthX[_key] = arguments[_key];
      }
      lengthX.forEach(function (value) {
        shipList.push(new Ship(value, 0));
      });
      return shipList;
    }
  }, {
    key: "cpuAttack",
    value: function cpuAttack() {
      while (true) {
        var x = Math.floor(Math.random() * 10);
        var y = Math.floor(Math.random() * 10);
        try {
          this.gameboardP1.receiveAttack(x, y);
          HtmlController.updateHtmlTile(this.htmlTileListP1[x][y], this.gameboardP1.grid[x][y]);
          break;
        } catch (_unused2) {}
      }
    }
  }, {
    key: "checkWinner",
    value: function checkWinner() {
      if (this.gameboardP1.shipList.length === 0 || this.gameboardCPU.shipList.length === 0) return true;else return false;
    }
  }, {
    key: "attackOnClick",
    value: function attackOnClick(htmlTileList, ownGameboard) {
      var _this = this;
      var _loop = function _loop(i) {
        var _loop2 = function _loop2(j) {
          var tileHtml = htmlTileList[i][j];
          var tileGameboard = ownGameboard.grid[i][j];
          tileHtml.addEventListener("click", function () {
            try {
              ownGameboard.receiveAttack(i, j);
              HtmlController.updateHtmlTile(tileHtml, tileGameboard, _this.htmlControllerP1.rival);
              if (_this.checkWinner()) {
                HtmlController.declareWinner("Player 1");
                throw new Error("Game end");
              }
              _this.cpuAttack();
              if (_this.checkWinner()) HtmlController.declareWinner("CPU");
            } catch (_unused3) {}
          });
        };
        for (var j = 0; j < htmlTileList[i].length; j++) {
          _loop2(j);
        }
      };
      for (var i = 0; i < htmlTileList.length; i++) {
        _loop(i);
      }
    }
  }]);
}();
_defineProperty(GameController, "gameboardSize", 10);
module.exports = GameController;

/***/ }),

/***/ "./src/scripts/gameboard-class.js":
/*!****************************************!*\
  !*** ./src/scripts/gameboard-class.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Tile = __webpack_require__(/*! ./tile-class */ "./src/scripts/tile-class.js");
var Gameboard = /*#__PURE__*/function () {
  function Gameboard(size) {
    _classCallCheck(this, Gameboard);
    _defineProperty(this, "shipList", []);
    var initialGrid = [];
    for (var i = 0; i < size; i++) {
      var array = [];
      for (var j = 0; j < size; j++) {
        array.push(new Tile(i, j));
      }
      initialGrid.push(array);
    }
    this.grid = initialGrid;
  }
  return _createClass(Gameboard, [{
    key: "isValidPosition",
    value: function isValidPosition(x, y, ship, direction) {
      if (direction === "v" && !x + ship.length < this.grid.length) {
        for (var i = 0; i < ship.length; i++) {
          if (!this.grid[x + i][y].isWater()) {
            return false;
          }
        }
      } else if (direction === "h" && !y + ship.length < this.grid[x].length) {
        for (var _i = 0; _i < ship.length; _i++) {
          if (!this.grid[x][y + _i].isWater()) {
            return false;
          }
        }
      }
      return true;
    }
  }, {
    key: "placeShip",
    value: function placeShip(x, y, ship, direction) {
      if (this.isValidPosition(x, y, ship, direction)) {
        if (direction === "v") {
          for (var i = 0; i < ship.length; i++) {
            this.grid[x + i][y].setTile(ship);
          }
        } else if (direction === "h") {
          for (var _i2 = 0; _i2 < ship.length; _i2++) {
            this.grid[x][y + _i2].setTile(ship);
          }
        } else throw new Error("Invalid direction");
      } else throw new Error("Invalid position");
      this.shipList.push(ship);
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(x, y) {
      var tile = this.grid[x][y];
      if (tile.isWater()) {
        tile.setTile(Tile.miss);
      } else if (tile.isShip()) {
        var boat = tile.status;
        boat.hit();
        if (boat.isSunk()) {
          this.shipList = this.shipList.filter(function (s) {
            return s !== boat;
          });
        }
        tile.setTile(Tile.hit);
      } else {
        throw new Error("Already hitted position");
      }
    }
  }]);
}();
module.exports = Gameboard;

/***/ }),

/***/ "./src/scripts/html-controller-class.js":
/*!**********************************************!*\
  !*** ./src/scripts/html-controller-class.js ***!
  \**********************************************/
/***/ ((module) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var HtmlController = /*#__PURE__*/function () {
  function HtmlController(htmlElement, gameboard, rival) {
    _classCallCheck(this, HtmlController);
    this.htmlElement = htmlElement;
    this.rival = rival;
    this.gameboard = gameboard;
    this.grid = this.gameboard.grid;
  }
  return _createClass(HtmlController, [{
    key: "buildHTML",
    value: function buildHTML() {
      this.htmlElement.textContent = "";
      var htmlTileList = [];
      for (var i = 0; i < this.grid.length; i++) {
        var xHtmlTileList = [];
        for (var j = 0; j < this.grid[i].length; j++) {
          var gameboardTile = this.grid[i][j];
          var htmlTile = document.createElement("div");
          htmlTile.classList.add("tile");
          this.constructor.updateHtmlTile(htmlTile, gameboardTile, this.rival);
          this.htmlElement.appendChild(htmlTile);
          xHtmlTileList.push(htmlTile);
        }
        htmlTileList.push(xHtmlTileList);
      }
      return htmlTileList;
    }
  }], [{
    key: "updateHtmlTile",
    value: function updateHtmlTile(htmlTile, gameboardTile, isRival) {
      if (!gameboardTile.isWater()) {
        var newCellStatus = document.createElement("div");
        var addClass;
        if (gameboardTile.isShip()) {
          if (!isRival) addClass = "ship";
        } else {
          addClass = gameboardTile.status;
        }
        newCellStatus.classList.add(addClass);
        htmlTile.appendChild(newCellStatus);
      }
    }
  }, {
    key: "declareWinner",
    value: function declareWinner(winner) {
      var htmlWinnerText = document.querySelector(".winner-text");
      var htmlWinnerScreen = document.querySelector(".winner-screen");
      htmlWinnerText.textContent = "The winner is ".concat(winner);
      htmlWinnerScreen.classList.toggle("hidden");
    }
  }]);
}();
module.exports = HtmlController;

/***/ }),

/***/ "./src/scripts/ship-class.js":
/*!***********************************!*\
  !*** ./src/scripts/ship-class.js ***!
  \***********************************/
/***/ ((module) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Ship = /*#__PURE__*/function () {
  function Ship(length, hits) {
    _classCallCheck(this, Ship);
    this.length = length;
    this.hits = hits;
  }
  return _createClass(Ship, [{
    key: "hit",
    value: function hit() {
      this.hits += 1;
    }
  }, {
    key: "isSunk",
    value: function isSunk() {
      return this.length === this.hits;
    }
  }]);
}();
module.exports = Ship;

/***/ }),

/***/ "./src/scripts/tile-class.js":
/*!***********************************!*\
  !*** ./src/scripts/tile-class.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Ship = __webpack_require__(/*! ./ship-class */ "./src/scripts/ship-class.js");
var Tile = /*#__PURE__*/function () {
  function Tile(x, y) {
    _classCallCheck(this, Tile);
    this.status = this.constructor.water;
    this.coordX = x;
    this.coordY = y;
  }
  return _createClass(Tile, [{
    key: "isMiss",
    value: function isMiss() {
      return this.status === this.constructor.miss;
    }
  }, {
    key: "isHit",
    value: function isHit() {
      return this.status === this.constructor.hit;
    }
  }, {
    key: "isWater",
    value: function isWater() {
      return this.status === this.constructor.water;
    }
  }, {
    key: "isShip",
    value: function isShip() {
      return this.status instanceof Ship;
    }
  }, {
    key: "setTile",
    value: function setTile(status) {
      if (status === this.constructor.miss) {
        this.status = this.constructor.miss;
      }
      if (status === this.constructor.hit) {
        this.status = this.constructor.hit;
      }
      if (status === this.constructor.water) {
        this.status = this.constructor.water;
      }
      if (status instanceof Ship) {
        this.status = status;
      }
    }
  }]);
}();
_defineProperty(Tile, "miss", "miss");
_defineProperty(Tile, "hit", "hit");
_defineProperty(Tile, "water", "water");
module.exports = Tile;

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_game_controller_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game-controller-class */ "./src/scripts/game-controller-class.js");
/* harmony import */ var _scripts_game_controller_class__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_game_controller_class__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_html_controller_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/html-controller-class */ "./src/scripts/html-controller-class.js");
/* harmony import */ var _scripts_html_controller_class__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_html_controller_class__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



var htmlP1Grid = document.querySelector(".P1grid");
var htmlCPUGrid = document.querySelector(".CPUgrid");
(_scripts_game_controller_class__WEBPACK_IMPORTED_MODULE_0___default().shipList) = _scripts_game_controller_class__WEBPACK_IMPORTED_MODULE_0___default().generateShips(2, 2, 3, 4, 5);
(_scripts_game_controller_class__WEBPACK_IMPORTED_MODULE_0___default().gameboardSize) = 10;
_scripts_game_controller_class__WEBPACK_IMPORTED_MODULE_0___default().startGame(htmlP1Grid, htmlCPUGrid);
var htmlRestartGame = document.querySelector(".new-game-button");
var htmlRandomizeShips = document.querySelector(".randomizer");
htmlRestartGame.addEventListener("click", function () {
  _scripts_game_controller_class__WEBPACK_IMPORTED_MODULE_0___default().startGame(htmlP1Grid, htmlCPUGrid);
  _scripts_html_controller_class__WEBPACK_IMPORTED_MODULE_1___default().declareWinner(null);
});
htmlRandomizeShips.addEventListener("click", function () {
  _scripts_game_controller_class__WEBPACK_IMPORTED_MODULE_0___default().startGame(htmlP1Grid, htmlCPUGrid);
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.a39ca6caa9a896fb6261.js.map