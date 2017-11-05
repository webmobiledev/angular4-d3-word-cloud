webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<word-cloud [wordData]=\"data\"></word-cloud>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_data__ = __webpack_require__("../../../../../src/app/share/data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.data = __WEBPACK_IMPORTED_MODULE_1__share_data__["a" /* Data */];
        console.log(this.data);
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__word_cloud_word_cloud_component__ = __webpack_require__("../../../../../src/app/word-cloud/word-cloud.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__word_cloud_word_cloud_component__["a" /* WordCloudComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/share/data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
var Data = {
    data: "CSS is used to control style of web document in simple and easy way CSS is acronym for Cascading Style Sheet This tutorial covers both versions CSS1 CSS2 and CSS3 and gives complete understanding of CSS starting from its basics to advanced concepts AudienceThis tutorial will help both students as well as professionals who want to make their websites or personal blogs more attractive Prerequisites You should be familiar with Basic word processing using any text editor How to create directories and files How to navigate through different directories Internet browsing using popular browsers like Internet Explorer or Firefox Developing simple Web Pages using HTML or XHTML If you are new to HTML and XHTML then we would suggest you to go through our HTML Tutorial or XHTML Tutorial first",
    settings: {
        minFontSize: 10,
        maxFontSize: 300,
    }
};
//# sourceMappingURL=data.js.map

/***/ }),

/***/ "../../../../../src/app/word-cloud/word-cloud.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordCloudComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WordCloudComponent = (function () {
    function WordCloudComponent() {
        this.data = [];
        this.tempData = [];
    }
    WordCloudComponent.prototype.ngOnInit = function () {
        var cls = this;
        this.data = this.wordData.data.split(' ').map(function (d) {
            return { text: d, size: cls.getRandom() };
        });
        this.setup();
        this.buildSVG();
        this.populate();
    };
    WordCloudComponent.prototype.getRandom = function () {
        var cls = this;
        var size = 10 + Math.random() * 100;
        if (size > 70 && this.tempData.length <= 10) {
            this.tempData.push(size);
        }
        if (this.tempData.length > 10 && size > 14) {
            return 12;
        }
        return size;
    };
    WordCloudComponent.prototype.setup = function () {
        this.margin = {
            top: 10,
            right: 10,
            bottom: 10,
            left: 10
        };
        this.width = window.innerWidth - this.margin.left - this.margin.right;
        this.height = this.width * 0.75 - this.margin.top - this.margin.bottom;
        var minFontSize = (this.wordData.settings.minFontSize == null) ? 18 : this.wordData.settings.minFontSize;
        var maxFontSize = (this.wordData.settings.maxFontSize == null) ? 96 : this.wordData.settings.maxFontSize;
        this.fillScale = __WEBPACK_IMPORTED_MODULE_1_d3__["a" /* scaleOrdinal */](__WEBPACK_IMPORTED_MODULE_1_d3__["b" /* schemeCategory20 */]);
    };
    WordCloudComponent.prototype.buildSVG = function () {
        this.svg = __WEBPACK_IMPORTED_MODULE_1_d3__["c" /* select */]("div.word-cloud")
            .append('svg')
            .attr('width', this.width + this.margin.left + this.margin.right)
            .attr('height', this.height + this.margin.top + this.margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + ~~(this.width / 2) + ',' + ~~(this.height / 2) + ')');
    };
    WordCloudComponent.prototype.populate = function () {
        var _this = this;
        var fontFace = (this.wordData.settings.fontFace == null) ? 'Roboto' : this.wordData.settings.fontFace;
        var fontWeight = (this.wordData.settings.fontWeight == null) ? 'normal' : this.wordData.settings.fontWeight;
        var spiralType = (this.wordData.settings.spiral == null) ? 'archimedean' : this.wordData.settings.spiral;
        d3.layout.cloud()
            .size([this.width, this.height])
            .words(this.data)
            .padding(5)
            .rotate(function () { return (~~(Math.random() * 2) * 90); })
            .font(fontFace)
            .fontWeight(fontWeight)
            .fontSize(function (d) { return (d.size); })
            .spiral(spiralType)
            .on('end', function () {
            _this.drawWordCloud(_this.data);
        })
            .start();
    };
    WordCloudComponent.prototype.drawWordCloud = function (words) {
        var _this = this;
        this.svg
            .selectAll('text')
            .data(words)
            .enter()
            .append('text')
            .style('font-size', function (d) { return d.size + 'px'; })
            .style('fill', function (d, i) {
            return _this.fillScale(i);
        })
            .attr('text-anchor', 'middle')
            .attr('transform', function (d) { return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')'; })
            .attr('class', 'word-cloud')
            .text(function (d) {
            return d.text;
        });
    };
    return WordCloudComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], WordCloudComponent.prototype, "wordData", void 0);
WordCloudComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'word-cloud',
        template: "<div class=\"word-cloud\"></div>"
    }),
    __metadata("design:paramtypes", [])
], WordCloudComponent);

//# sourceMappingURL=word-cloud.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map