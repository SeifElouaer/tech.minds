(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<app-welcome></app-welcome>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'heal-front';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/app/components/welcome/welcome.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/welcome/welcome.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/welcome/welcome.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header-area\">\n  <div class=\"navgition navgition-transparent\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <nav class=\"navbar navbar-expand-lg\">\n            <a class=\"navbar-brand\" href=\"#\">\n              <img src=\"assets/images/favicon.png\" width=\"40\" height=\"50\" alt=\"Logo\">\n            </a>\n\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarOne\"\n              aria-controls=\"navbarOne\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <span class=\"toggler-icon\"></span>\n              <span class=\"toggler-icon\"></span>\n              <span class=\"toggler-icon\"></span>\n            </button>\n\n            <div class=\"collapse navbar-collapse sub-menu-bar\" id=\"navbarOne\">\n              <ul class=\"navbar-nav m-auto\">\n                <li class=\"nav-item active\">\n                  <a class=\"page-scroll\" href=\"#home\">HOME</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"page-scroll\" href=\"#service\">SERVICES</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"page-scroll\" href=\"#pricing\">PRICING</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"page-scroll\" href=\"#contact\">CONTACT</a>\n                </li>\n              </ul>\n            </div>\n\n            <div class=\"navbar-social d-none d-sm-flex align-items-center\">\n              <span>FOLLOW US</span>\n              <ul>\n                <li><a href=\"#\"><i class=\"lni-facebook-filled\"></i></a></li>\n                <li><a href=\"#\"><i class=\"lni-twitter-original\"></i></a></li>\n                <li><a href=\"#\"><i class=\"lni-instagram-original\"></i></a></li>\n                <li><a href=\"#\"><i class=\"lni-linkedin-original\"></i></a></li>\n              </ul>\n            </div>\n          </nav> <!-- navbar -->\n        </div>\n      </div> <!-- row -->\n    </div> <!-- container -->\n  </div> <!-- navgition -->\n\n  <div id=\"home\" class=\"header-hero bg_cover\" style=\"background-image: url(assets/images/header-bg.jpg)\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-xl-8 col-lg-10\">\n          <div class=\"header-content text-center\">\n            <h3 class=\"header-title\">Tech Minds association</h3>\n            <p class=\"text\">familiarize young people with technology and especially young people who cannot access the\n              technological field for reasons of poverty.</p>\n            <ul class=\"header-btn\">\n              <li><a class=\"main-btn btn-one\" href=\"https://www.youtube.com/channel/UCFFWR1DnBhkVWnEtkJMStHQ\"  target=\"_blank\">YOUTUBE</a></li>\n              <li><a class=\"main-btn btn-two video-popup\" href=\"https://www.youtube.com/watch?v=aIsR57N028o\">WATCH THE\n                  VIDEO <i class=\"lni-play\"></i></a></li>\n            </ul>\n          </div> <!-- header content -->\n        </div>\n      </div> <!-- row -->\n    </div> <!-- container -->\n    <div class=\"header-shape\">\n      <img src=\"assets/images/header-shape.svg\" alt=\"shape\">\n    </div>\n  </div> <!-- header content -->\n</header>\n\n<!--====== HEADER PART ENDS ======-->\n\n<!--====== SERVICES PART START ======-->\n\n<section id=\"service\" class=\"services-area\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n        <div class=\"section-title pb-10\">\n          <h4 class=\"title\">Created To</h4>\n          <p class=\"text\"> attract our young people to science and technology and supervise them in order to have a\n            brilliant generation</p>\n        </div> <!-- section title -->\n      </div>\n    </div> <!-- row -->\n    <div class=\"row\">\n      <div class=\"col-lg-8\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"services-content mt-40 d-sm-flex\">\n              <div class=\"services-icon\">\n                <i class=\"lni-bulb\"></i>\n              </div>\n              <div class=\"services-content media-body\">\n                <h4 class=\"services-title\">Innovation</h4>\n                <p class=\"text\">Short description for the ones<br> who look for something new.</p>\n              </div>\n            </div> <!-- services content -->\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"services-content mt-40 d-sm-flex\">\n              <div class=\"services-icon\">\n                <i class=\"lni-bar-chart\"></i>\n              </div>\n              <div class=\"services-content media-body\">\n                <h4 class=\"services-title\">Training</h4>\n                <p class=\"text\">Short description for the ones<br> who look for something new.</p>\n              </div>\n            </div> <!-- services content -->\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"services-content mt-40 d-sm-flex\">\n              <div class=\"services-icon\">\n                <i class=\"lni-brush\"></i>\n              </div>\n              <div class=\"services-content media-body\">\n                <h4 class=\"services-title\">Competition</h4>\n                <p class=\"text\">Short description for the ones<br> who look for something new.</p>\n              </div>\n            </div> <!-- services content -->\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"services-content mt-40 d-sm-flex\">\n              <div class=\"services-icon\">\n                <i class=\"lni-bolt\"></i>\n              </div>\n              <div class=\"services-content media-body\">\n                <h4 class=\"services-title\">Events</h4>\n                <p class=\"text\">Short description for the ones<br> who look for something new.</p>\n              </div>\n            </div> <!-- services content -->\n          </div>\n        </div> <!-- row -->\n      </div> <!-- row -->\n    </div> <!-- row -->\n  </div> <!-- conteiner -->\n  <div class=\"services-image d-lg-flex align-items-center\">\n    <div class=\"image\">\n      <img src=\"assets/images/favicon.png\" height=\"470\" alt=\"Services\">\n    </div>\n  </div> <!-- services image -->\n</section>\n\n<!--====== SERVICES PART ENDS ======-->\n\n<!--====== PRICING PART START ======-->\n<!--\n<section id=\"pricing\" class=\"pricing-area\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-6\">\n        <div class=\"section-title text-center pb-10\">\n          <h4 class=\"title\">Our activity</h4>\n          <p class=\"text\"></p>\n        </div> --><!-- section title -->\n   <!--   </div>\n    </div> --><!-- row -->\n  <!-- <div class=\"row justify-content-center\">\n      <div class=\"col-lg-4 col-md-7 col-sm-9\">\n        <div class=\"single-pricing mt-40\">\n          <div class=\"pricing-header text-center\">\n            <h5 class=\"sub-title\">Basic</h5>\n            <span class=\"price\">$ 199</span>\n            <p class=\"year\">per year</p>\n          </div>\n          <div class=\"pricing-list\">\n            <ul>\n              <li><i class=\"lni-check-mark-circle\"></i> Carefully crafted components</li>\n              <li><i class=\"lni-check-mark-circle\"></i> Amazing page examples</li>\n              <li><i class=\"lni-check-mark-circle\"></i> Super friendly support team</li>\n              <li><i class=\"lni-check-mark-circle\"></i> Awesome Support</li>\n            </ul>\n          </div>\n          <div class=\"pricing-btn text-center\">\n            <a class=\"main-btn\" href=\"#\">GET STARTED</a>\n          </div>\n          <div class=\"buttom-shape\">\n            <svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 350 112.35\">\n              <defs>\n                <style>\n                  .color-1 {\n                    fill: #2bdbdc;\n                    isolation: isolate;\n                  }\n\n                  .cls-1 {\n                    opacity: 0.1;\n                  }\n\n                  .cls-2 {\n                    opacity: 0.2;\n                  }\n\n                  .cls-3 {\n                    opacity: 0.4;\n                  }\n\n                  .cls-4 {\n                    opacity: 0.6;\n                  }\n                </style>\n              </defs>\n              <title>bottom-part1</title>\n              <g id=\"bottom-part\">\n                <g id=\"Group_747\" data-name=\"Group 747\">\n                  <path id=\"Path_294\" data-name=\"Path 294\" class=\"cls-1 color-1\"\n                    d=\"M0,24.21c120-55.74,214.32,2.57,267,0S349.18,7.4,349.18,7.4V82.35H0Z\"\n                    transform=\"translate(0 0)\" />\n                  <path id=\"Path_297\" data-name=\"Path 297\" class=\"cls-2 color-1\"\n                    d=\"M350,34.21c-120-55.74-214.32,2.57-267,0S.82,17.4.82,17.4V92.35H350Z\"\n                    transform=\"translate(0 0)\" />\n                  <path id=\"Path_296\" data-name=\"Path 296\" class=\"cls-3 color-1\"\n                    d=\"M0,44.21c120-55.74,214.32,2.57,267,0S349.18,27.4,349.18,27.4v74.95H0Z\"\n                    transform=\"translate(0 0)\" />\n                  <path id=\"Path_295\" data-name=\"Path 295\" class=\"cls-4 color-1\"\n                    d=\"M349.17,54.21c-120-55.74-214.32,2.57-267,0S0,37.4,0,37.4v74.95H349.17Z\"\n                    transform=\"translate(0 0)\" />\n                </g>\n              </g>\n            </svg>\n          </div>\n        </div> --> <!-- single pricing -->\n    <!--  </div>\n\n      <div class=\"col-lg-4 col-md-7 col-sm-9\">\n        <div class=\"single-pricing pro mt-40\">\n          <div class=\"pricing-baloon\">\n            <img src=\"assets/images/baloon.svg\" alt=\"baloon\">\n          </div>\n          <div class=\"pricing-header\">\n            <h5 class=\"sub-title\">Pro</h5>\n            <span class=\"price\">$ 399</span>\n            <p class=\"year\">per year</p>\n          </div>\n          <div class=\"pricing-list\">\n            <ul>\n              <li><i class=\"lni-check-mark-circle\"></i> Carefully crafted components</li>\n              <li><i class=\"lni-check-mark-circle\"></i> Amazing page examples</li>\n              <li><i class=\"lni-check-mark-circle\"></i> Super friendly support team</li>\n              <li><i class=\"lni-check-mark-circle\"></i> Awesome Support</li>\n            </ul>\n          </div>\n          <div class=\"pricing-btn text-center\">\n            <a class=\"main-btn\" href=\"#\">GET STARTED</a>\n          </div>\n          <div class=\"buttom-shape\">\n            <svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 350 112.35\">\n              <defs>\n                <style>\n                  .color-2 {\n                    fill: #0067f4;\n                    isolation: isolate;\n                  }\n\n                  .cls-1 {\n                    opacity: 0.1;\n                  }\n\n                  .cls-2 {\n                    opacity: 0.2;\n                  }\n\n                  .cls-3 {\n                    opacity: 0.4;\n                  }\n\n                  .cls-4 {\n                    opacity: 0.6;\n                  }\n                </style>\n              </defs>\n              <title>bottom-part1</title>\n              <g id=\"bottom-part\">\n                <g id=\"Group_747\" data-name=\"Group 747\">\n                  <path id=\"Path_294\" data-name=\"Path 294\" class=\"cls-1 color-2\"\n                    d=\"M0,24.21c120-55.74,214.32,2.57,267,0S349.18,7.4,349.18,7.4V82.35H0Z\"\n                    transform=\"translate(0 0)\" />\n                  <path id=\"Path_297\" data-name=\"Path 297\" class=\"cls-2 color-2\"\n                    d=\"M350,34.21c-120-55.74-214.32,2.57-267,0S.82,17.4.82,17.4V92.35H350Z\"\n                    transform=\"translate(0 0)\" />\n                  <path id=\"Path_296\" data-name=\"Path 296\" class=\"cls-3 color-2\"\n                    d=\"M0,44.21c120-55.74,214.32,2.57,267,0S349.18,27.4,349.18,27.4v74.95H0Z\"\n                    transform=\"translate(0 0)\" />\n                  <path id=\"Path_295\" data-name=\"Path 295\" class=\"cls-4 color-2\"\n                    d=\"M349.17,54.21c-120-55.74-214.32,2.57-267,0S0,37.4,0,37.4v74.95H349.17Z\"\n                    transform=\"translate(0 0)\" />\n                </g>\n              </g>\n            </svg>\n          </div>\n        </div> --><!-- single pricing -->\n    <!--  </div>\n\n      <div class=\"col-lg-4 col-md-7 col-sm-9\">\n        <div class=\"single-pricing enterprise mt-40\">\n          <div class=\"pricing-flower\">\n            <img src=\"assets/images/flower.svg\" alt=\"flower\">\n          </div>\n          <div class=\"pricing-header text-right\">\n            <h5 class=\"sub-title\">Enterprise</h5>\n            <span class=\"price\">$ 799</span>\n            <p class=\"year\">per year</p>\n          </div>\n          <div class=\"pricing-list\">\n            <ul>\n              <li><i class=\"lni-check-mark-circle\"></i> Carefully crafted components</li>\n              <li><i class=\"lni-check-mark-circle\"></i> Amazing page examples</li>\n              <li><i class=\"lni-check-mark-circle\"></i> Super friendly support team</li>\n              <li><i class=\"lni-check-mark-circle\"></i> Awesome Support</li>\n            </ul>\n          </div>\n          <div class=\"pricing-btn text-center\">\n            <a class=\"main-btn\" href=\"#\">GET STARTED</a>\n          </div>\n          <div class=\"buttom-shape\">\n            <svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 350 112.35\">\n              <defs>\n                <style>\n                  .color-3 {\n                    fill: #4da422;\n                    isolation: isolate;\n                  }\n\n                  .cls-1 {\n                    opacity: 0.1;\n                  }\n\n                  .cls-2 {\n                    opacity: 0.2;\n                  }\n\n                  .cls-3 {\n                    opacity: 0.4;\n                  }\n\n                  .cls-4 {\n                    opacity: 0.6;\n                  }\n                </style>\n              </defs>\n              <title>bottom-part1</title>\n              <g id=\"bottom-part\">\n                <g id=\"Group_747\" data-name=\"Group 747\">\n                  <path id=\"Path_294\" data-name=\"Path 294\" class=\"cls-1 color-3\"\n                    d=\"M0,24.21c120-55.74,214.32,2.57,267,0S349.18,7.4,349.18,7.4V82.35H0Z\"\n                    transform=\"translate(0 0)\" />\n                  <path id=\"Path_297\" data-name=\"Path 297\" class=\"cls-2 color-3\"\n                    d=\"M350,34.21c-120-55.74-214.32,2.57-267,0S.82,17.4.82,17.4V92.35H350Z\"\n                    transform=\"translate(0 0)\" />\n                  <path id=\"Path_296\" data-name=\"Path 296\" class=\"cls-3 color-3\"\n                    d=\"M0,44.21c120-55.74,214.32,2.57,267,0S349.18,27.4,349.18,27.4v74.95H0Z\"\n                    transform=\"translate(0 0)\" />\n                  <path id=\"Path_295\" data-name=\"Path 295\" class=\"cls-4 color-3\"\n                    d=\"M349.17,54.21c-120-55.74-214.32,2.57-267,0S0,37.4,0,37.4v74.95H349.17Z\"\n                    transform=\"translate(0 0)\" />\n                </g>\n              </g>\n            </svg>\n          </div>\n        </div>--> <!-- single pricing -->\n     <!-- </div>\n    </div>--> <!-- row -->\n  <!--/div--> <!-- conteiner -->\n<!---  \n</section>-->\n\n<!--====== PRICING PART ENDS ======-->\n\n<!--====== CALL TO ACTION PART START ======-->\n<!--\n<section id=\"call-to-action\" class=\"call-to-action\">\n  <div class=\"call-action-image\">\n    <img src=\"assets/images/call.jpg\" alt=\"call-to-action\">\n  </div>\n\n  <div class=\"container-fluid\">\n    <div class=\"row justify-content-end\">\n      <div class=\"col-lg-6\">\n        <div class=\"call-action-content text-center\">\n          <h2 class=\"call-title\">Curious to Learn More? Stay Tuned</h2>\n          <p class=\"text\">You let us know whenever you want us to update anything or think something can be optimised.\n          </p>\n          <div class=\"call-newsletter\">\n            <i class=\"lni-envelope\"></i>\n            <input type=\"text\" placeholder=\"mouhammed@gmail.com\">\n            <button type=\"submit\">SUBSCRIBE</button>\n          </div>\n        </div> \n      </div>\n    </div> \n  </div>\n</section>\n-->\n<!--====== CALL TO ACTION PART ENDS ======-->\n\n<!--====== CONTACT PART START ======-->\n<!--\n<section id=\"contact\" class=\"contact-area\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-6\">\n        <div class=\"section-title text-center pb-10\">\n          <h4 class=\"title\">Get In touch</h4>\n          <p class=\"text\">Stop wasting time and money designing and managing a website that doesn’t get results.\n            Happiness guaranteed!</p>\n        </div> \n      </div>\n    </div> \n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-8\">\n        <div class=\"contact-form\">\n          <form id=\"contact-form\" action=\"../../../assets/contact.php\" method=\"post\" data-toggle=\"validator\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"single-form form-group\">\n                  <input type=\"text\" name=\"name\" placeholder=\"Your Name\" data-error=\"Name is required.\"\n                    required=\"required\">\n                  <div class=\"help-block with-errors\"></div>\n                </div> \n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"single-form form-group\">\n                  <input type=\"email\" name=\"email\" placeholder=\"Your Email\" data-error=\"Valid email is required.\"\n                    required=\"required\">\n                  <div class=\"help-block with-errors\"></div>\n                </div> \n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"single-form form-group\">\n                  <input type=\"text\" name=\"subject\" placeholder=\"Subject\" data-error=\"Subject is required.\"\n                    required=\"required\">\n                  <div class=\"help-block with-errors\"></div>\n                </div> \n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"single-form form-group\">\n                  <input type=\"text\" name=\"phone\" placeholder=\"Phone\" data-error=\"Phone is required.\"\n                    required=\"required\">\n                  <div class=\"help-block with-errors\"></div>\n                </div> \n              </div>\n              <div class=\"col-md-12\">\n                <div class=\"single-form form-group\">\n                  <textarea placeholder=\"Your Mesaage\" name=\"message\" data-error=\"Please, leave us a message.\"\n                    required=\"required\"></textarea>\n                  <div class=\"help-block with-errors\"></div>\n                </div> \n              </div>\n              <p class=\"form-message\"></p>\n              <div class=\"col-md-12\">\n                <div class=\"single-form form-group text-center\">\n                  <button type=\"submit\" class=\"main-btn\">send message</button>\n                </div> \n              </div>\n            </div> \n          </form>\n        </div> \n      </div>\n    </div> \n  </div> \n</section> -->\n<footer id=\"footer\" class=\"footer-area\">\n  <div class=\"footer-widget\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"footer-logo-support d-md-flex align-items-end justify-content-between\">\n            <div class=\"footer-logo d-flex align-items-end\">\n              <a class=\"mt-30\" href=\"index.html\"><img src=\"assets/images/favicon.png\" alt=\"Logo\" style=\"width: 50px; height: 50px;\"></a>\n\n              <ul class=\"social mt-30\">\n                <li><a href=\"#\"><i class=\"lni-facebook-filled\"></i></a></li>\n                <li><a href=\"#\"><i class=\"lni-twitter-original\"></i></a></li>\n                <li><a href=\"#\"><i class=\"lni-instagram-original\"></i></a></li>\n                <li><a href=\"#\"><i class=\"lni-linkedin-original\"></i></a></li>\n              </ul>\n            </div> <!-- footer logo -->\n\n          </div> <!-- footer logo support -->\n        </div>\n      </div> <!-- row -->\n      <div class=\"row\">\n        <div class=\"col-lg-2 col-md-4 col-sm-6\">\n          <div class=\"footer-link\">\n            <h6 class=\"footer-title\">Company</h6>\n            <ul>\n              <li><a href=\"#\">About</a></li>\n              <li><a href=\"#\">Contact</a></li>\n              <li><a href=\"#\">Career</a></li>\n\n            </ul>\n          </div> <!-- footer link -->\n        </div>\n        <div class=\"col-lg-3 col-md-4 col-sm-6\">\n          <div class=\"footer-link\">\n            <h6 class=\"footer-title\">Product & Services</h6>\n            <ul>\n              <li><a href=\"#\">Products</a></li>\n              <li><a href=\"#\">Business</a></li>\n              <li><a href=\"#\">Developer</a></li>\n            </ul>\n          </div> <!-- footer link -->\n        </div>\n        <div class=\"col-lg-3 col-md-4 col-sm-5\">\n          <div class=\"footer-link\">\n            <h6 class=\"footer-title\">Help & Suuport</h6>\n            <ul>\n              <li><a href=\"#\">Support Center</a></li>\n              <li><a href=\"#\">FAQ</a></li>\n              <li><a href=\"#\">Terms & Conditions</a></li>\n            </ul>\n          </div> <!-- footer link -->\n        </div>\n        <div class=\"col-lg-4 col-md-6 col-sm-7\">\n          <div class=\"footer-newsletter\">\n            <h6 class=\"footer-title\">Subscribe Newsletter</h6>\n            <div class=\"newsletter\">\n              <form action=\"#\">\n                <input type=\"text\" placeholder=\"Your Email\">\n                <button type=\"submit\"><i class=\"lni-angle-double-right\"></i></button>\n              </form>\n            </div>\n            <p class=\"text\">Subscribe weekly newsletter to stay upto date. We don’t send spam.</p>\n          </div> <!-- footer newsletter -->\n        </div>\n      </div> <!-- row -->\n    </div> <!-- container -->\n  </div> <!-- footer widget -->\n\n  <div class=\"footer-copyright\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"copyright text-center\">\n            <p class=\"text\">created by <a rel=\"nofollow\" href=\"#\">Tech-Minds</a></p>\n          </div>\n        </div>\n      </div> <!-- row -->\n    </div> <!-- container -->\n  </div> <!-- footer copyright -->\n</footer>\n\n<!--====== FOOTER PART ENDS ======-->\n\n<!--====== BACK TO TOP PART START ======-->\n\n<a class=\"back-to-top\" href=\"#\"><i class=\"lni-chevron-up\"></i></a>\n\n<!--====== BACK TO TOP PART ENDS ======-->"

/***/ }),

/***/ "./src/app/components/welcome/welcome.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.ts ***!
  \*********************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/components/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/components/welcome/welcome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Hp_EliteBook\Projects\heal\heal-front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map