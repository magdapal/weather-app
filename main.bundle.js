webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-show-weather></app-show-weather>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=/home/magda/Desktop/weather/weather-app/src/app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__show_weather_show_weather_component__ = __webpack_require__("./src/app/show-weather/show-weather.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__show_weather_show_weather_component__["a" /* ShowWeatherComponent */],
            __WEBPACK_IMPORTED_MODULE_5__show_weather_show_weather_component__["a" /* ShowWeatherComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/home/magda/Desktop/weather/weather-app/src/app.module.js.map

/***/ }),

/***/ "./src/app/show-weather/show-weather.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"weather-forecast\">\n\t<h1 class=\"text-center weather-header\">Your Weather</h1>\n\t<div class=\"text-center city\">\n\t  <span>{{ myLocalization?.city }}</span>\n\t</div>\n\t<div class=\"text-center icon-weather\">\n\t  <img src={{weather?.icon}}/>\n\t</div>\n\t<div class=\"text-center temperature\">\n\t\t<div *ngIf=\"!farenheit\">\n\t\t  <span> {{ tempC }}</span>\n\t\t</div>\n\t\t<div *ngIf=\"farenheit\">\n\t\t  <span> {{ tempF }}</span>\n\t\t</div>\n\t\t<span class=\"unit\" (click)=\"toFarenheit()\">{{unit}}</span>\n\t</div>\n\t<div class=\"text-center other-data\">\n\t  <div class=\"weather-icon pressure\"><img src=\"assets/barometer.png\" /><span>{{generalData?.main.pressure}} hPa</span></div>\n\t  <div class=\"weather-icon humidity\"><img src=\"assets/humidity.png\" /><span>{{generalData?.main.humidity}} %</span></div>\n\t  <div class=\"weather-icon wind\"><img src=\"assets/wind.png\" /><span>{{generalData?.wind.speed}} m/s</span></div>\n\t  <span></span>\n\t</div>\n\n\n\n</section>\n\n\n\n"

/***/ }),

/***/ "./src/app/show-weather/show-weather.component.scss":
/***/ (function(module, exports) {

module.exports = "#weather-forecast {\n  color: #ffffff;\n  font-family: 'Source Sans Pro', sans-serif !important;\n  margin-top: 50px; }\n  #weather-forecast .weather-header {\n    font-size: 4.2em;\n    font-weight: bold; }\n  #weather-forecast .city {\n    margin-top: 30px; }\n  #weather-forecast .city span {\n      font-size: 2.3em; }\n  #weather-forecast .icon-weather img {\n    width: 80px; }\n  #weather-forecast .temperature {\n    margin-top: 10px; }\n  #weather-forecast .temperature div {\n      display: inline; }\n  #weather-forecast .temperature span {\n      font-size: 1.7em;\n      font-weight: bold; }\n  #weather-forecast .temperature .unit {\n      color: #ffff00;\n      cursor: pointer; }\n  #weather-forecast .other-data {\n    margin-top: 5px; }\n  #weather-forecast .other-data .weather-icon {\n      display: inline;\n      margin-right: 15px; }\n  #weather-forecast .other-data .weather-icon img {\n        margin-right: 5px; }\n  #weather-forecast .other-data .weather-icon.humidity img {\n        position: relative;\n        top: -3px; }\n"

/***/ }),

/***/ "./src/app/show-weather/show-weather.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowWeatherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowWeatherComponent = (function () {
    function ShowWeatherComponent(http) {
        this.http = http;
        this.farenheit = false;
        this.unit = "°C";
    }
    ShowWeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://geoip.nekudo.com/api/en/')
            .subscribe(function (response) {
            _this.myLocalization = response.json();
            var latitude = _this.myLocalization.location.latitude;
            var longitude = _this.myLocalization.location.longitude;
            var url = 'https://fcc-weather-api.glitch.me/api/current?lon=' + longitude + '&' + 'lat=' + latitude;
            _this.http.get(url)
                .subscribe(function (response) {
                _this.tempC = response.json().main.temp;
                _this.tempF = Math.round(((response.json().main.temp * 1.8) + 32) * 100) / 100;
                _this.weather = response.json().weather[0];
                _this.generalData = response.json();
            });
        });
    };
    ShowWeatherComponent.prototype.toFarenheit = function () {
        this.farenheit = !this.farenheit;
        if (this.farenheit) {
            this.unit = "°F";
        }
        else {
            this.unit = "°C";
        }
    };
    return ShowWeatherComponent;
}());
ShowWeatherComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-show-weather',
        template: __webpack_require__("./src/app/show-weather/show-weather.component.html"),
        styles: [__webpack_require__("./src/app/show-weather/show-weather.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ShowWeatherComponent);

var _a;
//# sourceMappingURL=/home/magda/Desktop/weather/weather-app/src/show-weather.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/home/magda/Desktop/weather/weather-app/src/environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/magda/Desktop/weather/weather-app/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map