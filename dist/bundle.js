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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cloud.js":
/*!**********************!*\
  !*** ./src/cloud.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nconst img = new Image();\nimg.src = \"../lastdream/img/ccc.png\";\n\nclass Cloud {\n    constructor(ctx, x, y) {\n        this.ctx = ctx;\n        this.cloudHeight = 50;\n        this.cloudWidth = 100;\n        this.x = x;\n        this.y = y;\n    }\n\n    draw(){ \n            this.ctx.drawImage(img, \n                0, 0, 200, 105,\n                this.x, ( this.y ), this.cloudWidth, this.cloudHeight);\n            this.y += 0.5;\n\n    }\n\n    collide(char) {\n        var cloudLeft = this.x;\n        var cloudRight = this.x + this.cloudWidth;\n        var cloudTop = this.y;\n        var cloudBot = this.y + this.cloudHeight;\n\n        var charLeft = char.x;\n        var charRight = char.x + char.charWidth;\n        var charTop = char.y + 5;\n        var charBot = char.y + char.charHeight - 10;\n\n        if (Math.abs(cloudTop - charBot) < 3 && char.vel_y > 0) {\n            if ((charLeft >= cloudLeft && charLeft <= cloudRight) || (charRight >= cloudLeft && charRight <= cloudRight)) {\n                return true;\n            } \n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cloud);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xvdWQuanM/OTg4OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhO0FBQ0E7QUFDQTtBQUNBOztBQUVlLG9FQUFLIiwiZmlsZSI6Ii4vc3JjL2Nsb3VkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbmltZy5zcmMgPSBcIi4uL2xhc3RkcmVhbS9pbWcvY2NjLnBuZ1wiO1xuXG5jbGFzcyBDbG91ZCB7XG4gICAgY29uc3RydWN0b3IoY3R4LCB4LCB5KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNsb3VkSGVpZ2h0ID0gNTA7XG4gICAgICAgIHRoaXMuY2xvdWRXaWR0aCA9IDEwMDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG5cbiAgICBkcmF3KCl7IFxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGltZywgXG4gICAgICAgICAgICAgICAgMCwgMCwgMjAwLCAxMDUsXG4gICAgICAgICAgICAgICAgdGhpcy54LCAoIHRoaXMueSApLCB0aGlzLmNsb3VkV2lkdGgsIHRoaXMuY2xvdWRIZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy55ICs9IDAuNTtcblxuICAgIH1cblxuICAgIGNvbGxpZGUoY2hhcikge1xuICAgICAgICB2YXIgY2xvdWRMZWZ0ID0gdGhpcy54O1xuICAgICAgICB2YXIgY2xvdWRSaWdodCA9IHRoaXMueCArIHRoaXMuY2xvdWRXaWR0aDtcbiAgICAgICAgdmFyIGNsb3VkVG9wID0gdGhpcy55O1xuICAgICAgICB2YXIgY2xvdWRCb3QgPSB0aGlzLnkgKyB0aGlzLmNsb3VkSGVpZ2h0O1xuXG4gICAgICAgIHZhciBjaGFyTGVmdCA9IGNoYXIueDtcbiAgICAgICAgdmFyIGNoYXJSaWdodCA9IGNoYXIueCArIGNoYXIuY2hhcldpZHRoO1xuICAgICAgICB2YXIgY2hhclRvcCA9IGNoYXIueSArIDU7XG4gICAgICAgIHZhciBjaGFyQm90ID0gY2hhci55ICsgY2hhci5jaGFySGVpZ2h0IC0gMTA7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKGNsb3VkVG9wIC0gY2hhckJvdCkgPCAzICYmIGNoYXIudmVsX3kgPiAwKSB7XG4gICAgICAgICAgICBpZiAoKGNoYXJMZWZ0ID49IGNsb3VkTGVmdCAmJiBjaGFyTGVmdCA8PSBjbG91ZFJpZ2h0KSB8fCAoY2hhclJpZ2h0ID49IGNsb3VkTGVmdCAmJiBjaGFyUmlnaHQgPD0gY2xvdWRSaWdodCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENsb3VkOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/cloud.js\n");

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score */ \"./src/score.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nconst canvas = document.getElementById(\"myCanvas\");\nconst ctx = canvas.getContext(\"2d\");\n\n\nlet game = new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nlet gameOver = false;\nlet score = new _score__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n\n\nfunction draw() {\n    gameOver = gameOver || game.gameOver();\n        if (gameOver) {\n\n            console.log('loser');\n        } else {\n\n            game.draw();\n        }\n    }\n\n    setInterval(draw, 7);\n\n// testing // \n    // window.canvas = Player.canvas;\n    // window.char = Player.char;\n    // window.ctx = Player.ctx;\n// testing //\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZW50cnkuanM/N2NkNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBNEI7QUFDRjtBQUMxQjtBQUNBOzs7QUFHQSxlQUFlLDZDQUFJO0FBQ25CO0FBQ0EsZ0JBQWdCLDhDQUFLOzs7O0FBSXJCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvZW50cnkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2NvcmUgZnJvbSAnLi9zY29yZSc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cblxubGV0IGdhbWUgPSBuZXcgR2FtZSgpO1xubGV0IGdhbWVPdmVyID0gZmFsc2U7XG5sZXQgc2NvcmUgPSBuZXcgU2NvcmUoKTtcblxuXG5cbmZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgZ2FtZU92ZXIgPSBnYW1lT3ZlciB8fCBnYW1lLmdhbWVPdmVyKCk7XG4gICAgICAgIGlmIChnYW1lT3Zlcikge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9zZXInKTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgZ2FtZS5kcmF3KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRJbnRlcnZhbChkcmF3LCA3KTtcblxuLy8gdGVzdGluZyAvLyBcbiAgICAvLyB3aW5kb3cuY2FudmFzID0gUGxheWVyLmNhbnZhcztcbiAgICAvLyB3aW5kb3cuY2hhciA9IFBsYXllci5jaGFyO1xuICAgIC8vIHdpbmRvdy5jdHggPSBQbGF5ZXIuY3R4O1xuLy8gdGVzdGluZyAvL1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/entry.js\n");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _cloud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cloud */ \"./src/cloud.js\");\n/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./score */ \"./src/score.js\");\n\n\n\n\n\nconst canvas = document.getElementById(\"myCanvas\");\nconst ctx = canvas.getContext(\"2d\");\n\n\nconst keys = [];\ndocument.addEventListener(\"keydown\", function (e) {\n    keys[e.keyCode] = true;\n});\ndocument.addEventListener(\"keyup\", function (e) {\n    keys[e.keyCode] = false;\n});\n\nlet newClouds = [];\n    \n    var clouds = [];\n    for ( let y = 0; y < canvas.height * 2; y += 40) {\n        for (let i = 0; i < 4; i++) {\n            let x = Math.random(i, y) * canvas.width;\n            if ( Math.random() < 0.3) {\n                clouds.push(new _cloud__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, x, y));\n            }\n        }\n    }\n    // return clouds;\n// }\n\n//     for (let i = 0; i < 4; i++) {\n//         for (let j = 0; j < 4; j++) {\n//             let x = Math.random(i, j) * canvas.width;\n//             let y = Math.random(j, i) * canvas.height;\n//             clouds.push(new Cloud(ctx, x, y));\n//         }\n//     }\n\nconst char = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\nconst score = new _score__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx);\n\nclass Game {\n    constructor(){\n    }\n    keyHandle() {\n        char.drawChar();\n        if (keys[65]) {\n            \n            char.leftHandle();\n        }\n        if (keys[68]) {\n            char.rightHandle();\n            \n        }\n        if (keys[32]) {\n            \n            char.jumpHandle();\n        }\n    }\n    \n    draw() {\n        this.keyHandle();\n        score.counter += 1;\n        score.drawScore();\n\n        let scoreCount = Math.floor(score.counter / 100);\n\n        for (let i = 0; i < clouds.length; i++) {\n            clouds[i].draw();\n            if (clouds[i].collide(char)) {\n                char.vel_y = 0;\n                char.y = clouds[i].y;\n                char.jumped = false;\n            }\n        }\n\n        if (scoreCount < 5 ) {\n            if (Math.random() < 0.02) {\n            for (let i = 0; i < 10; i++) {\n                var x = Math.random(i) * canvas.width;\n            }\n            let y = 0;\n            newClouds.push(new _cloud__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, x, y));\n            }\n        } else if (scoreCount >= 5) {\n            if (Math.random() < 0.03) {\n            for (let i = 0; i < 10; i++) {\n                var x = Math.random(i) * canvas.width;\n            }\n            let y = 0;\n            newClouds.push(new _cloud__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, x, y));\n            }\n        } else if (scoreCount >= 15) {\n            if (Math.random() < 0.05) {\n                for (let i = 0; i < 10; i++) {\n                    var x = Math.random(i) * canvas.width;\n                }\n                let y = 0;\n                newClouds.push(new _cloud__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, x, y));\n            }\n        else if (scoreCount >= 20) {\n            if (Math.random() < 0.10) {\n                for (let i = 0; i < 10; i++) {\n                    var x = Math.random(i) * canvas.width;\n                }\n                let y = 0;\n                newClouds.push(new _cloud__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, x, y));\n            }\n        }\n        else if (scoreCount >= 25) {\n            if (Math.random() < 0.18) {\n                for (let i = 0; i < 10; i++) {\n                    var x = Math.random(i) * canvas.width;\n                }\n                let y = 0;\n                newClouds.push(new _cloud__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, x, y));\n            }\n        }\n        } else if (scoreCount >= 30) {\n            if (Math.random() < 0.29) {\n                for (let i = 0; i < 10; i++) {\n                    var x = Math.random(i) * canvas.width;\n                }\n                let y = 0;\n                newClouds.push(new _cloud__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, x, y));\n            }\n        } else if (scoreCount >= 40) {\n            if (Math.random() < 0.35) {\n                for (let i = 0; i < 10; i++) {\n                    var x = Math.random(i) * canvas.width;\n                }\n                let y = 0;\n                newClouds.push(new _cloud__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, x, y));\n            }\n        }\n\n        newClouds.forEach(cloud => {\n            cloud.draw();\n            if (cloud.collide(char)) {\n                char.vel_y = 0;\n                char.y = cloud.y;\n                char.jumped = false;\n            }\n\n            if (scoreCount > 5) {\n                cloud.y += 0.2;\n            }\n            if (scoreCount > 10) {\n                cloud.y += 0.15;\n            }\n            if (scoreCount > 15) {\n                cloud.y += 0.15;\n            }\n            if (scoreCount > 20) {\n                cloud.y += 0.1;\n            }\n            if (scoreCount > 25) {\n                cloud.y += 0.15;\n            }\n            if (scoreCount > 30) {\n                cloud.y += 0.15;\n            }\n            if (scoreCount > 35) {\n                cloud.y += 0.15;\n            }\n            if (scoreCount > 40) {\n                cloud.y += 0.1;\n            }\n\n        });\n \n        newClouds = newClouds.filter(cloud => cloud.y < canvas.height);\n    }\n    gameOver() {\n        return char.hitBottom();\n    }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcz83ZGUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQzRCO0FBQ0E7QUFDQTs7QUFFNUI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQyx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0EsZ0NBQWdDLDhDQUFLO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLE9BQU87QUFDN0IsMEJBQTBCLE9BQU87QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsK0NBQUk7QUFDckIsa0JBQWtCLDhDQUFLOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLFFBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDhDQUFLO0FBQ3BDO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMkJBQTJCLFFBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDhDQUFLO0FBQ3BDO0FBQ0EsU0FBUztBQUNUO0FBQ0EsK0JBQStCLFFBQVE7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDhDQUFLO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixRQUFRO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw4Q0FBSztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixRQUFRO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw4Q0FBSztBQUN4QztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsK0JBQStCLFFBQVE7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDhDQUFLO0FBQ3hDO0FBQ0EsU0FBUztBQUNUO0FBQ0EsK0JBQStCLFFBQVE7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDhDQUFLO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHZSxtRUFBSSIsImZpbGUiOiIuL3NyYy9nYW1lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgQ2hhciBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgQ2xvdWQgZnJvbSAnLi9jbG91ZCc7XG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9zY29yZSc7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5cbmNvbnN0IGtleXMgPSBbXTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAga2V5c1tlLmtleUNvZGVdID0gdHJ1ZTtcbn0pO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAga2V5c1tlLmtleUNvZGVdID0gZmFsc2U7XG59KTtcblxubGV0IG5ld0Nsb3VkcyA9IFtdO1xuICAgIFxuICAgIHZhciBjbG91ZHMgPSBbXTtcbiAgICBmb3IgKCBsZXQgeSA9IDA7IHkgPCBjYW52YXMuaGVpZ2h0ICogMjsgeSArPSA0MCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IHggPSBNYXRoLnJhbmRvbShpLCB5KSAqIGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgIGlmICggTWF0aC5yYW5kb20oKSA8IDAuMykge1xuICAgICAgICAgICAgICAgIGNsb3Vkcy5wdXNoKG5ldyBDbG91ZChjdHgsIHgsIHkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyByZXR1cm4gY2xvdWRzO1xuLy8gfVxuXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbi8vICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcbi8vICAgICAgICAgICAgIGxldCB4ID0gTWF0aC5yYW5kb20oaSwgaikgKiBjYW52YXMud2lkdGg7XG4vLyAgICAgICAgICAgICBsZXQgeSA9IE1hdGgucmFuZG9tKGosIGkpICogY2FudmFzLmhlaWdodDtcbi8vICAgICAgICAgICAgIGNsb3Vkcy5wdXNoKG5ldyBDbG91ZChjdHgsIHgsIHkpKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuY29uc3QgY2hhciA9IG5ldyBDaGFyKGN0eCk7XG5jb25zdCBzY29yZSA9IG5ldyBTY29yZShjdHgpO1xuXG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgIH1cbiAgICBrZXlIYW5kbGUoKSB7XG4gICAgICAgIGNoYXIuZHJhd0NoYXIoKTtcbiAgICAgICAgaWYgKGtleXNbNjVdKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNoYXIubGVmdEhhbmRsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChrZXlzWzY4XSkge1xuICAgICAgICAgICAgY2hhci5yaWdodEhhbmRsZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleXNbMzJdKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNoYXIuanVtcEhhbmRsZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMua2V5SGFuZGxlKCk7XG4gICAgICAgIHNjb3JlLmNvdW50ZXIgKz0gMTtcbiAgICAgICAgc2NvcmUuZHJhd1Njb3JlKCk7XG5cbiAgICAgICAgbGV0IHNjb3JlQ291bnQgPSBNYXRoLmZsb29yKHNjb3JlLmNvdW50ZXIgLyAxMDApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xvdWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjbG91ZHNbaV0uZHJhdygpO1xuICAgICAgICAgICAgaWYgKGNsb3Vkc1tpXS5jb2xsaWRlKGNoYXIpKSB7XG4gICAgICAgICAgICAgICAgY2hhci52ZWxfeSA9IDA7XG4gICAgICAgICAgICAgICAgY2hhci55ID0gY2xvdWRzW2ldLnk7XG4gICAgICAgICAgICAgICAgY2hhci5qdW1wZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzY29yZUNvdW50IDwgNSApIHtcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC4wMikge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHggPSBNYXRoLnJhbmRvbShpKSAqIGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB5ID0gMDtcbiAgICAgICAgICAgIG5ld0Nsb3Vkcy5wdXNoKG5ldyBDbG91ZChjdHgsIHgsIHkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzY29yZUNvdW50ID49IDUpIHtcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC4wMykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHggPSBNYXRoLnJhbmRvbShpKSAqIGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB5ID0gMDtcbiAgICAgICAgICAgIG5ld0Nsb3Vkcy5wdXNoKG5ldyBDbG91ZChjdHgsIHgsIHkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzY29yZUNvdW50ID49IDE1KSB7XG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuMDUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBNYXRoLnJhbmRvbShpKSAqIGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHkgPSAwO1xuICAgICAgICAgICAgICAgIG5ld0Nsb3Vkcy5wdXNoKG5ldyBDbG91ZChjdHgsIHgsIHkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2NvcmVDb3VudCA+PSAyMCkge1xuICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjEwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB4ID0gTWF0aC5yYW5kb20oaSkgKiBjYW52YXMud2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCB5ID0gMDtcbiAgICAgICAgICAgICAgICBuZXdDbG91ZHMucHVzaChuZXcgQ2xvdWQoY3R4LCB4LCB5KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2NvcmVDb3VudCA+PSAyNSkge1xuICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjE4KSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB4ID0gTWF0aC5yYW5kb20oaSkgKiBjYW52YXMud2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCB5ID0gMDtcbiAgICAgICAgICAgICAgICBuZXdDbG91ZHMucHVzaChuZXcgQ2xvdWQoY3R4LCB4LCB5KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzY29yZUNvdW50ID49IDMwKSB7XG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuMjkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBNYXRoLnJhbmRvbShpKSAqIGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHkgPSAwO1xuICAgICAgICAgICAgICAgIG5ld0Nsb3Vkcy5wdXNoKG5ldyBDbG91ZChjdHgsIHgsIHkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzY29yZUNvdW50ID49IDQwKSB7XG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuMzUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBNYXRoLnJhbmRvbShpKSAqIGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHkgPSAwO1xuICAgICAgICAgICAgICAgIG5ld0Nsb3Vkcy5wdXNoKG5ldyBDbG91ZChjdHgsIHgsIHkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0Nsb3Vkcy5mb3JFYWNoKGNsb3VkID0+IHtcbiAgICAgICAgICAgIGNsb3VkLmRyYXcoKTtcbiAgICAgICAgICAgIGlmIChjbG91ZC5jb2xsaWRlKGNoYXIpKSB7XG4gICAgICAgICAgICAgICAgY2hhci52ZWxfeSA9IDA7XG4gICAgICAgICAgICAgICAgY2hhci55ID0gY2xvdWQueTtcbiAgICAgICAgICAgICAgICBjaGFyLmp1bXBlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2NvcmVDb3VudCA+IDUpIHtcbiAgICAgICAgICAgICAgICBjbG91ZC55ICs9IDAuMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzY29yZUNvdW50ID4gMTApIHtcbiAgICAgICAgICAgICAgICBjbG91ZC55ICs9IDAuMTU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2NvcmVDb3VudCA+IDE1KSB7XG4gICAgICAgICAgICAgICAgY2xvdWQueSArPSAwLjE1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNjb3JlQ291bnQgPiAyMCkge1xuICAgICAgICAgICAgICAgIGNsb3VkLnkgKz0gMC4xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNjb3JlQ291bnQgPiAyNSkge1xuICAgICAgICAgICAgICAgIGNsb3VkLnkgKz0gMC4xNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzY29yZUNvdW50ID4gMzApIHtcbiAgICAgICAgICAgICAgICBjbG91ZC55ICs9IDAuMTU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2NvcmVDb3VudCA+IDM1KSB7XG4gICAgICAgICAgICAgICAgY2xvdWQueSArPSAwLjE1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNjb3JlQ291bnQgPiA0MCkge1xuICAgICAgICAgICAgICAgIGNsb3VkLnkgKz0gMC4xO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuIFxuICAgICAgICBuZXdDbG91ZHMgPSBuZXdDbG91ZHMuZmlsdGVyKGNsb3VkID0+IGNsb3VkLnkgPCBjYW52YXMuaGVpZ2h0KTtcbiAgICB9XG4gICAgZ2FtZU92ZXIoKSB7XG4gICAgICAgIHJldHVybiBjaGFyLmhpdEJvdHRvbSgpO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Char {\n    constructor(ctx, x) {\n        this.ctx = ctx;\n        this.charHeight = 10;\n        this.charWidth = 10;\n        this.x = this.ctx.canvas.width / 2;\n        this.y = 0;\n        this.vel_x = 0;\n        this.vel_y = 0;\n        this.jumped = true;\n        this.speed = 5;\n        this.radius = 5;\n        this.maxA = this.ctx.canvas.height / 2;\n    }\n\n    hitBottom() {\n        var bottom = (this.ctx.canvas.height - this.charHeight);\n        if (this.y >= bottom) {\n            this.y = bottom;\n            this.jumped = false;\n            this.vel_y = 0;\n            return true;\n        }\n        return false;\n    }\n\n    leftHandle() {\n        if (this.vel_x < this.speed) {\n            this.vel_x -= 0.7;\n        }\n    }\n    rightHandle() {\n        if (this.vel_x < this.speed) {\n            this.vel_x += 0.7;\n        }\n    }\n    jumpHandle() {\n        if (this.jumped == false) {\n            this.vel_y -= 30;\n            this.jumped = true;\n        }\n    }\n\n    drawChar() {\n        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);\n        this.ctx.beginPath();\n        this.ctx.arc(this.x, this.y, this.charWidth, this.charHeight, Math.PI * 5);\n        this.ctx.fillStyle = \"#483D8B\";\n        this.ctx.fill();\n        this.ctx.closePath();\n\n        if (this.x <= 0) {\n            this.x = this.ctx.canvas.width - this.charWidth * 1.001;\n        }\n        if (this.x >= this.ctx.canvas.width - this.charWidth) {\n            this.x = 0 ;\n        }\n        this.vel_y += 0.5;\n        this.y += this.vel_y;\n        this.x += this.vel_x;\n        this.vel_x *= 0.8;\n        this.vel_y *= 0.9;\n        // if (this.y < this.maxA) {\n        //     this.y = this.maxA;\n        // } \n        // this.maxA = (this.y  < this.ctx.canvas.height / 2) ? this.y / 2 : this.ctx.canvas.height / 2;\n        this.hitBottom();\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Char);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyLmpzP2E4YTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLG1FQUFJLEVBQUMiLCJmaWxlIjoiLi9zcmMvcGxheWVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBDaGFyIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2hhckhlaWdodCA9IDEwO1xuICAgICAgICB0aGlzLmNoYXJXaWR0aCA9IDEwO1xuICAgICAgICB0aGlzLnggPSB0aGlzLmN0eC5jYW52YXMud2lkdGggLyAyO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLnZlbF94ID0gMDtcbiAgICAgICAgdGhpcy52ZWxfeSA9IDA7XG4gICAgICAgIHRoaXMuanVtcGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDU7XG4gICAgICAgIHRoaXMucmFkaXVzID0gNTtcbiAgICAgICAgdGhpcy5tYXhBID0gdGhpcy5jdHguY2FudmFzLmhlaWdodCAvIDI7XG4gICAgfVxuXG4gICAgaGl0Qm90dG9tKCkge1xuICAgICAgICB2YXIgYm90dG9tID0gKHRoaXMuY3R4LmNhbnZhcy5oZWlnaHQgLSB0aGlzLmNoYXJIZWlnaHQpO1xuICAgICAgICBpZiAodGhpcy55ID49IGJvdHRvbSkge1xuICAgICAgICAgICAgdGhpcy55ID0gYm90dG9tO1xuICAgICAgICAgICAgdGhpcy5qdW1wZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudmVsX3kgPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxlZnRIYW5kbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnZlbF94IDwgdGhpcy5zcGVlZCkge1xuICAgICAgICAgICAgdGhpcy52ZWxfeCAtPSAwLjc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmlnaHRIYW5kbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnZlbF94IDwgdGhpcy5zcGVlZCkge1xuICAgICAgICAgICAgdGhpcy52ZWxfeCArPSAwLjc7XG4gICAgICAgIH1cbiAgICB9XG4gICAganVtcEhhbmRsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuanVtcGVkID09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnZlbF95IC09IDMwO1xuICAgICAgICAgICAgdGhpcy5qdW1wZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0NoYXIoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmN0eC5jYW52YXMud2lkdGgsIHRoaXMuY3R4LmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLmNoYXJXaWR0aCwgdGhpcy5jaGFySGVpZ2h0LCBNYXRoLlBJICogNSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzQ4M0Q4QlwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIGlmICh0aGlzLnggPD0gMCkge1xuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5jdHguY2FudmFzLndpZHRoIC0gdGhpcy5jaGFyV2lkdGggKiAxLjAwMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy54ID49IHRoaXMuY3R4LmNhbnZhcy53aWR0aCAtIHRoaXMuY2hhcldpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnggPSAwIDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZlbF95ICs9IDAuNTtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMudmVsX3k7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLnZlbF94O1xuICAgICAgICB0aGlzLnZlbF94ICo9IDAuODtcbiAgICAgICAgdGhpcy52ZWxfeSAqPSAwLjk7XG4gICAgICAgIC8vIGlmICh0aGlzLnkgPCB0aGlzLm1heEEpIHtcbiAgICAgICAgLy8gICAgIHRoaXMueSA9IHRoaXMubWF4QTtcbiAgICAgICAgLy8gfSBcbiAgICAgICAgLy8gdGhpcy5tYXhBID0gKHRoaXMueSAgPCB0aGlzLmN0eC5jYW52YXMuaGVpZ2h0IC8gMikgPyB0aGlzLnkgLyAyIDogdGhpcy5jdHguY2FudmFzLmhlaWdodCAvIDI7XG4gICAgICAgIHRoaXMuaGl0Qm90dG9tKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/player.js\n");

/***/ }),

/***/ "./src/score.js":
/*!**********************!*\
  !*** ./src/score.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Score {\n    constructor(ctx){\n        this.ctx = ctx;\n        this.counter = 0;\n    }\n\n    drawScore() {\n        let score = Math.floor(this.counter / 100);\n        this.ctx.font = \"16px Arial\";\n        this.ctx.fillStyle = \"#0095DD\";\n        this.ctx.fillText(\"Score: \" + score, 8, 20);\n\n    }\n    \n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Score);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NvcmUuanM/YjFhZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNlLG9FQUFLIiwiZmlsZSI6Ii4vc3JjL3Njb3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBTY29yZSB7XG4gICAgY29uc3RydWN0b3IoY3R4KXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgfVxuXG4gICAgZHJhd1Njb3JlKCkge1xuICAgICAgICBsZXQgc2NvcmUgPSBNYXRoLmZsb29yKHRoaXMuY291bnRlciAvIDEwMCk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjE2cHggQXJpYWxcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiU2NvcmU6IFwiICsgc2NvcmUsIDgsIDIwKTtcblxuICAgIH1cbiAgICBcbn1cbmV4cG9ydCBkZWZhdWx0IFNjb3JlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/score.js\n");

/***/ })

/******/ });