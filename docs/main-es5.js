function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: "post",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | posts-posts-module */
        "posts-posts-module").then(__webpack_require__.bind(null,
        /*! ./posts/posts.module */
        "./src/app/posts/posts.module.ts")).then(function (m) {
          return m.PostsModule;
        });
      }
    }, {
      path: "",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/carousel */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = function _c0(a0) {
      return {
        display: a0
      };
    };

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(viewScroller) {
        _classCallCheck(this, AppComponent);

        this.viewScroller = viewScroller;
        this.title = 'mean-course';
        this.show = true;
        this.scrollNumber = 100;
      } // @HostListener Decorator


      _createClass(AppComponent, [{
        key: "onWindowScroll",
        value: function onWindowScroll() {
          var number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

          if (number > 600) {
            this.show = true;
          } else {
            this.show = false;
          }
        }
      }, {
        key: "tapToTop",
        value: function tapToTop() {
          this.viewScroller.scrollToPosition([0, 0]);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      hostBindings: function AppComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler() {
            return ctx.onWindowScroll();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 244,
      vars: 3,
      consts: [[1, "container-fluid", "p-0"], [1, "tap-top", "top-cls", 3, "ngStyle"], [1, "btn", "btn-default", 3, "click"], [2, "color", "white"], [1, ""], [1, "row"], [1, "col-md-2"], [1, "col-md-5", 2, "padding", "100px"], ["src", "assets/images/book12.jpg", "alt", "first slide", 2, "display", "block", "width", "100%"], ["src", "assets/images/cover.jpg", "alt", "second slide", 2, "display", "block", "width", "100%"], ["src", "assets/images/pray.jpg", "alt", "third slide", 2, "display", "block", "width", "100%"], [1, "col-md-5"], [1, "section-1"], [1, "container", "text-center"], [1, "col-md-6"], [1, "pray"], ["src", "../assets/images/covaction.jpg", "alt", "", 1, "pray-img"], [1, "col-md-6", "pray-dec"], [1, "panel", "text-left"], [1, "pt-4"], [1, "section-2", "p-0", "container-fluid"], [1, "cover"], [1, "content", "text-center"], [1, "container-fluid", "text-center"], [1, "numbers", "d-flex", "flex-md-row", "justify-content-center"], [1, "rect"], [1, "perchage", "text-center"], [1, "cards"], [1, "d-flex", "flex-row", "justify-content-center", "flex-wrap"], [1, "card"], [1, "card-body"], [1, "title"], [1, "card-title"], [1, "card-text"], [1, "pricing"], ["href", "#", 1, "btn", "btn-dark", "px-5", "py-2", "mb-5"], [1, "section-3", "container-fluid", "text-center", "p-0"], [1, "col-sm-12", "col-md-12"], [1, "download-app-title"], [1, "download-app-description"], [1, "platform", "row"], [1, "col-md-6", "col-sm-6", "text-right"], [1, "desktop", "shadow-lg"], [1, "d-flex", "flex-row", "justify-content-center"], [1, "fa", "fa-external-link", "fa-3x", "py-2", "pr-3"], [1, "text", "text-left"], [1, "pt-1", "m-0"], [1, "p-0", "m-0"], [1, "col-md-6", "col-sm-6", "text-left"], [1, "section-4"], [1, "text-dark"], [1, "text-secodary"], [1, "tean", "row"], [1, "col-md-4", "col-sm-12", "text-center"], [1, "card", "d-inlineblock", "shadow-lg"], [1, "card-img-top"], ["src", "../assets/images/hostel.jpg", "alt", "member", 1, "img-fluid", "border-radius", "p-4"], ["href", "#", 1, "text-secondary", "text-decoration-none"], [1, "text-black-50"], ["src", "../assets/images/hostel.jpg", "alt", "member", 1, "img-fluid", "rounded-circle", "w-50", "p-4"], ["src", "../assets/images/covaction.jpg", "alt", "member", 1, "img-fluid", "rounded-circle", "w-50", "p-4"], ["src", "../assets/images/profesional.jpg", "alt", "member", 1, "img-fluid", "rounded-circle", "w-50", "p-4"], [1, "col-md-4", "col-12", "text-center"], ["src", "../assets/images/profesional.jpg", "alt", "member", 1, "img-fluid", "border-radius", "p-4"], [1, "row", "text-left"], [1, "text-right"], [1, "text-muted"], [1, "mt-5"], [1, "text-light"], ["action", "", 1, "form-inline"], [1, "col", "pl-0"], [1, "input-group", "pr-5"], ["type", "text", "placeholder", "Email", 1, "form-control", "ng-dark", "text-white"], [1, "input-group-prepend"], [1, "input-group-tex"], [1, "fa", "fa-arrow-circle-o-right"], [1, "col-md-2", "col-sm-12"], [1, "column"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_5_listener() {
            return ctx.tapToTop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ">");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "carousel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Mr. Dinesh Kumar Sah");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ipsam. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius iste velit, vel veritatis nam minima nulla provident cupiditate minus doloremque, labore ut numquam, molestias dolores atque ipsam inventore consequuntur porro. Corporis, hic saepe? Magnam a sint voluptate nesciunt cumque nisi numquam illo, porro aspernatur, possimus nulla nostrum incidunt odit excepturi sapiente nam minus harum libero beatae dolorem ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "section", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Some feature that make us unique");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, natus!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "2345");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Happy client");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "674");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "cups cofee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "1056");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "ticket submitted");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "9152");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Total project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Perchage whatever you want");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Lorem ipsum dolor sit amet consectetur adipisicing elit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h5", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " PDF ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Lorem ipsum dolor sit amet consectetur adipisicing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "$1234");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Perchage now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h5", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " E-book ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Lorem ipsum dolor sit amet consectetur adipisicing elit. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "$99.99");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Perchage now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h5", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " print Coppy text ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Lorem ipsum dolor sit amet consectetur adipisicing elit. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "$58.00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Perchage now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "section", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h1", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Download our app for all platform");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo architecto ea recusandae, velit facere quasi, ad vel dolor explicabo labore, vero saepe tempora maiores officia. Quisquam, nesciunt. Dolorem, blanditiis aliquid!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "i", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h3", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Desktop ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "On Websiyte");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h3", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " mobile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "On Mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "section", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h1", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "What our reader say ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Lorem ipsum dolor sit amet.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h3", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Dinesh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam cum vel, autem doloremque natus impedit vitae pariatur inventore dolorum, ab quos possimus rem. Maiores, sint totam? Deserunt, hic velit ratione eveniet sit adipisci aperiam quidem repellendus quia ipsum error molestias fuga at natus magni, minima rerum saepe neque tempore? Doloribus!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "a", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Go Somewhere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "CEO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "carousel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "h3", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Dinesh Sah");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eos dolorem unde numquam? Ducimus earum asperiores, obcaecati reprehenderit ex beatae tempora, voluptatem et laboriosam sit praesentium suscipit rem ratione laborum odio. Odit dolorem quos, doloremque velit fugiat veritatis ut consequuntur!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "a", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Go Somewhere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "UI/UX Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "img", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "h3", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Dinesh Sah");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eos dolorem unde numquam? Ducimus earum asperiores, obcaecati reprehenderit ex beatae tempora, voluptatem et laboriosam sit praesentium suscipit rem ratione laborum odio. Odit dolorem quos, doloremque velit fugiat veritatis ut consequuntur!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "a", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Go Somewhere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "UI/UX Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "h3", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Dinesh Sah");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eos dolorem unde numquam? Ducimus earum asperiores, obcaecati reprehenderit ex beatae tempora, voluptatem et laboriosam sit praesentium suscipit rem ratione laborum odio. Odit dolorem quos, doloremque velit fugiat veritatis ut consequuntur!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "a", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Go Somewhere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "UI/UX Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "img", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "h3", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Dev Dinesh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem ullam eius distinctio explicabo nam nulla, quae, numquam officia ipsum molestias omnis odit est asperiores ducimus unde sequi praesentium. Obcaecati, laudantium.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "a", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Go Somewhere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "UI/UX Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "h1", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " about us ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "p", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum architecto necessitatibus excepturi at voluptatum nobis, voluptatem eos ducimus optio sequi!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "p", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Lorem ipsum dolor sit amet consectetur adipisicing elit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " Sint, a?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "h4", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " Newslatter ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "p", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Statay updated");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "form", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "i", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "h4", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Follow Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "p", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Lorem ipsum dolor sit amet.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "i", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "i", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "i", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "i", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.show ? "block" : "none"));
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["SlideComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"]],
      styles: ["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');\n\n*[_ngcontent-%COMP%]{\r\n    box-sizing: border-box;\r\n}\nheader[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\r\n    overflow-x: hidden;\r\n}\nheader[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-family: var(--sanigle-font);\r\n    font-size: 0.9em;\r\n    color: whitesmoke;\r\n}\nheader[_ngcontent-%COMP%] {\r\n    background: var(--bggredient);\r\n}\n.dropdown-content[_ngcontent-%COMP%] {\r\n    display: none;\r\n    position: absolute;\r\n    background: whitesmoke;\r\n    min-width: 170px;\r\n    box-shadow: rgba(0, 0, 0, 0.3);\r\n    z-index: 1;\r\n}\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n}\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background: #ddd;\r\n}\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\nheader[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\r\n    padding-right: 10.5em;\r\n}\nheader[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{\r\n    padding: 0.9em;\r\n}\nheader[_ngcontent-%COMP%]   .nav-brand[_ngcontent-%COMP%]{\r\n    padding-left: 8rem;\r\n}\nheader[_ngcontent-%COMP%]   nav-link[_ngcontent-%COMP%]:hover{\r\n    color:black\r\n}\nheader.row.col-md-5[_ngcontent-%COMP%]{\r\n    padding: 4.2vmin 1vmin;\r\n}\n.author_details[_ngcontent-%COMP%]{\r\n    padding: 22vmin 1vmin;\r\n    padding-bottom: 35vmin;\r\n    font-family: var(--Rubik);\r\n    color: white;\r\n}\n\n.section-1[_ngcontent-%COMP%]{\r\n    padding: 20vmin 0;\r\n}\nimg.pray-img[_ngcontent-%COMP%] {\r\n    opacity: 0.8;\r\n    width: 508px;\r\n    height: 655px;\r\n    border-radius: 0.2em;\r\n}\n.pray-dec[_ngcontent-%COMP%]{\r\n    position: relative;\r\n   \r\n}\n.pray[_ngcontent-%COMP%]{\r\n    min-height: 600px;\r\n}\n.panel[_ngcontent-%COMP%]{\r\n position: absolute;\r\n top: 7vmin;\r\n left: -18vmin;\r\n background: white;\r\n border-radius: 3px;\r\n text-align: left;\r\n padding: 13vmin 5vmin 20vmin 10vmin;\r\n box-shadow: 0px 22px 45px rgba(0, 0, 0, 0.2);\r\n z-index: 1;\r\n}\n.panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    padding: 0.4em 0;\r\n    font-weight: bold;\r\n    font-size: 2em;\r\n}\n.panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 0.9em;\r\n    color: rgba(0, 0, 0, 0.5);\r\n}\n\n.cover[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 55vmin;\r\n    background: url(\"/assets/cover.jpg\");\r\n    background-position: -29rem -19rem;\r\n    background-size: 150%;\r\n    position: relative;\r\n}\n.content[_ngcontent-%COMP%] {\r\n    background: rgba(0, 0, 0, 0.7);\r\n    height: 100%;\r\n    width: 100%;\r\n    padding-top: 19vmin;\r\n}\n.content[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{\r\n    font-family: var(--Patua);\r\n    font-size: 6vmin;\r\n    color: whitesmoke;\r\n}\n.content[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\r\n    font-family: var(--Patua);\r\n    font-size: 2vmin;\r\n    color: whitesmoke;\r\n}\n.rect[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    z-index: 1;\r\n    background:white ;\r\n    width: 17rem;\r\n    height: 12rem;\r\n    padding-top: 3.5vmin;\r\n    margin: 1rem;\r\n    border-radius: 1em;\r\n    box-shadow: 1px 2px 50px 0px rgba(255, 0, 0, 0.3);\r\n\r\n\r\n}\n.numbers[_ngcontent-%COMP%] {\r\n    margin-top: -15vmin;\r\n}\n.rect[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size: 5rem;\r\n    color: tomato;\r\n\r\n}\n.rect[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-family: var(--Patua);\r\n    \r\n}\n.perchage[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{\r\n padding-top: 15vmin;\r\n padding-bottom: 0.1em;\r\n font-family: var(--Lobster);\r\n}\n.perchage[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\r\n    color: var(--light-black);\r\n    font-size: 3vmin;\r\n    padding-bottom: 3vmin;\r\n}\n.card[_ngcontent-%COMP%]{\r\n    width: 22rem;\r\n    margin: 3vmin\r\n}\n.cards[_ngcontent-%COMP%]{\r\n    padding: 0;\r\n    margin: 0;\r\n}\n.title[_ngcontent-%COMP%]{\r\n    background: rgba(208, 241, 241, 0.4);\r\n    padding: 1.4rem 2.5rem;\r\n    font-size: 2vmin;\r\n}\n.card-text[_ngcontent-%COMP%]{\r\n padding: 2.5rem 3rem;\r\n color: var(--light-black);\r\n}\n.pricing[_ngcontent-%COMP%] {\r\n    background: rgba(208, 241, 241, 0.1);\r\n    border-top-right-radius: 170px;\r\n    border-top-left-radius: 170px;\r\n}\n.pricing[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%] {\r\n    font-size: 7vmin;\r\n    padding: 1em 0.5em;\r\n}\n\n.section-3[_ngcontent-%COMP%] {\r\n    height: 70vmin;\r\n    margin-top: 15vmin;\r\n    background: var(--bggredient);\r\n}\n.download-app-title[_ngcontent-%COMP%] {\r\n    padding: 2em 0em 0.5em 0;\r\n    color: whitesmoke;\r\n    font-size: 6vmin;\r\n}\n.download-app-description[_ngcontent-%COMP%] {\r\n    padding: 0 4em;\r\n    padding-bottom: 2em;\r\n    font-size: var(--light-grey);\r\n    font-size: 2vmin;\r\n}\n.desktop[_ngcontent-%COMP%] {\r\n    background: white;\r\n    display: inline-block;\r\n    border-radius: 3em;\r\n    padding: 2vmin 4.5vmin;\r\n    margin: 1em;\r\n}\n.desktop[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 4vmin;\r\n}\n.desktop[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 2vmin;\r\n}\n\n.section-4[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size: 6vmin;\r\n    padding-top: 14vmin;\r\n}\n.tean[_ngcontent-%COMP%] {\r\n    padding: 10vmin 4vmin;\r\n}\n.section-4.card[_ngcontent-%COMP%] {\r\n    width: 22rem ;\r\n    margin-top: 10vmin;\r\n\r\n}\n.card-text[_ngcontent-%COMP%] {\r\n    padding: 0.5em;\r\n}\n.section-4[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{\r\n    font-size: 1.5em;\r\n}\n.section-4[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{\r\n    padding-left: 3rem;\r\n}\n.border-radius[_ngcontent-%COMP%] {\r\n    border-radius: 340px;\r\n    width: 60%;\r\n}\n\nfooter[_ngcontent-%COMP%]{\r\n    background-color: rgba(0,0, 0, 0.815);\r\n    overflow-x: hidden;\r\n    padding: 14vmin 18vmin;\r\n}\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{\r\n    color: #ff512f;\r\n}\nfooter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    border: none !important;\r\n}\nfooter[_ngcontent-%COMP%]   .input-group.input-group-text[_ngcontent-%COMP%]{\r\n    background-color: var(--bggredient);\r\n    border: none;\r\n}\nfooter[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    color: #ff512f;\r\n}\nfooter[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] + i[_ngcontent-%COMP%]{\r\n    padding: 0 0.5rem;\r\n}\n.nav-dropdown[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index: 1;\r\n    \r\n    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);\r\n    display: none;\r\n  }\n.dropdown1[_ngcontent-%COMP%]:hover   .nav-dropdown[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\ndiv.tap-top[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 30px;\r\n    z-index: 99;\r\n    font-size: 18px;\r\n    border: none;\r\n    outline: none;\r\n    background-color: blue;\r\n    color: white !important;\r\n    cursor: pointer;\r\n    padding: 5px;\r\n    border-radius: 4px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdGQUF3RjtBQUR4RixnQkFBZ0I7QUFFaEI7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUdBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQU1BLGNBQWM7QUFDZDtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLG1DQUFtQztDQUNuQyw0Q0FBNEM7Q0FDNUMsVUFBVTtBQUNYO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7QUFDQSxjQUFjO0FBQ2Q7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLG9DQUFvQztJQUNwQyxrQ0FBa0M7SUFDbEMscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaURBQWlEOzs7QUFHckQ7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7O0FBRWpCO0FBQ0E7SUFDSSx5QkFBeUI7O0FBRTdCO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIscUJBQXFCO0NBQ3JCLDJCQUEyQjtBQUM1QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFlBQVk7SUFDWjtBQUNKO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjtBQUNBO0NBQ0Msb0JBQW9CO0NBQ3BCLHlCQUF5QjtBQUMxQjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLDhCQUE4QjtJQUM5Qiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQSxjQUFjO0FBQ2Q7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQSxjQUFjO0FBQ2Q7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLFVBQVU7QUFDZDtBQUNBLFdBQVc7QUFDWDtJQUNJLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YscUVBQXFFO0lBQ3JFLDBDQUEwQztJQUMxQyxhQUFhO0VBQ2Y7QUFDRjtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHb29nbGUgZm9udCAqL1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMjAwJmRpc3BsYXk9c3dhcCcpO1xyXG4qe1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5oZWFkZXIsc2VjdGlvbiB7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcblxyXG5oZWFkZXIgYXtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1zYW5pZ2xlLWZvbnQpO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcbmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZ2dyZWRpZW50KTtcclxufVxyXG4uZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuICAgIG1pbi13aWR0aDogMTcwcHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcbi5kcm9wZG93bi1jb250ZW50IGF7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbn1cclxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmhlYWRlciAubmF2LWl0ZW0gOmxhc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAuNWVtO1xyXG59XHJcbmhlYWRlciAubmF2LWl0ZW17XHJcbiAgICBwYWRkaW5nOiAwLjllbTtcclxufVxyXG5oZWFkZXIgLm5hdi1icmFuZHtcclxuICAgIHBhZGRpbmctbGVmdDogOHJlbTtcclxufVxyXG5oZWFkZXIgbmF2LWxpbms6aG92ZXJ7XHJcbiAgICBjb2xvcjpibGFja1xyXG59XHJcbmhlYWRlci5yb3cuY29sLW1kLTV7XHJcbiAgICBwYWRkaW5nOiA0LjJ2bWluIDF2bWluO1xyXG59XHJcbi5hdXRob3JfZGV0YWlsc3tcclxuICAgIHBhZGRpbmc6IDIydm1pbiAxdm1pbjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzNXZtaW47XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tUnViaWspO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLyogc2VjdGlvbi0xICovXHJcbi5zZWN0aW9uLTF7XHJcbiAgICBwYWRkaW5nOiAyMHZtaW4gMDtcclxufVxyXG5pbWcucHJheS1pbWcge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgd2lkdGg6IDUwOHB4O1xyXG4gICAgaGVpZ2h0OiA2NTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xyXG59XHJcbi5wcmF5LWRlY3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgXHJcbn1cclxuLnByYXl7XHJcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcclxufVxyXG4ucGFuZWx7XHJcbiBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiB0b3A6IDd2bWluO1xyXG4gbGVmdDogLTE4dm1pbjtcclxuIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gdGV4dC1hbGlnbjogbGVmdDtcclxuIHBhZGRpbmc6IDEzdm1pbiA1dm1pbiAyMHZtaW4gMTB2bWluO1xyXG4gYm94LXNoYWRvdzogMHB4IDIycHggNDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiB6LWluZGV4OiAxO1xyXG59IFxyXG4ucGFuZWwgaDN7XHJcbiAgICBwYWRkaW5nOiAwLjRlbSAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufVxyXG4ucGFuZWwgcHtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcbi8qIHNlY3Rpb24gMiAqL1xyXG4uY292ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTV2bWluO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9jb3Zlci5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjlyZW0gLTE5cmVtO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxNTAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDE5dm1pbjtcclxufVxyXG4uY29udGVudD5oMXtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1QYXR1YSk7XHJcbiAgICBmb250LXNpemU6IDZ2bWluO1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuLmNvbnRlbnQ+cHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1QYXR1YSk7XHJcbiAgICBmb250LXNpemU6IDJ2bWluO1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuLnJlY3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJhY2tncm91bmQ6d2hpdGUgO1xyXG4gICAgd2lkdGg6IDE3cmVtO1xyXG4gICAgaGVpZ2h0OiAxMnJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAzLjV2bWluO1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCA1MHB4IDBweCByZ2JhKDI1NSwgMCwgMCwgMC4zKTtcclxuXHJcblxyXG59XHJcbi5udW1iZXJzIHtcclxuICAgIG1hcmdpbi10b3A6IC0xNXZtaW47XHJcbn1cclxuLnJlY3QgaDF7XHJcbiAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICBjb2xvcjogdG9tYXRvO1xyXG5cclxufVxyXG4ucmVjdCBwe1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLVBhdHVhKTtcclxuICAgIFxyXG59XHJcbi5wZXJjaGFnZT4gaDF7XHJcbiBwYWRkaW5nLXRvcDogMTV2bWluO1xyXG4gcGFkZGluZy1ib3R0b206IDAuMWVtO1xyXG4gZm9udC1mYW1pbHk6IHZhcigtLUxvYnN0ZXIpO1xyXG59XHJcbi5wZXJjaGFnZT4gcHtcclxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1ibGFjayk7XHJcbiAgICBmb250LXNpemU6IDN2bWluO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDN2bWluO1xyXG59XHJcbi5jYXJke1xyXG4gICAgd2lkdGg6IDIycmVtO1xyXG4gICAgbWFyZ2luOiAzdm1pblxyXG59XHJcbi5jYXJkc3tcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLnRpdGxle1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMDgsIDI0MSwgMjQxLCAwLjQpO1xyXG4gICAgcGFkZGluZzogMS40cmVtIDIuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMnZtaW47XHJcbn1cclxuLmNhcmQtdGV4dHtcclxuIHBhZGRpbmc6IDIuNXJlbSAzcmVtO1xyXG4gY29sb3I6IHZhcigtLWxpZ2h0LWJsYWNrKTtcclxufVxyXG4ucHJpY2luZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwOCwgMjQxLCAyNDEsIDAuMSk7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTcwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNzBweDtcclxufVxyXG4ucHJpY2luZz5oMSB7XHJcbiAgICBmb250LXNpemU6IDd2bWluO1xyXG4gICAgcGFkZGluZzogMWVtIDAuNWVtO1xyXG59XHJcbi8qIHNlY3Rpb24tMyAqL1xyXG4uc2VjdGlvbi0zIHtcclxuICAgIGhlaWdodDogNzB2bWluO1xyXG4gICAgbWFyZ2luLXRvcDogMTV2bWluO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmdncmVkaWVudCk7XHJcbn1cclxuLmRvd25sb2FkLWFwcC10aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAyZW0gMGVtIDAuNWVtIDA7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGZvbnQtc2l6ZTogNnZtaW47XHJcbn1cclxuLmRvd25sb2FkLWFwcC1kZXNjcmlwdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAwIDRlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyZW07XHJcbiAgICBmb250LXNpemU6IHZhcigtLWxpZ2h0LWdyZXkpO1xyXG4gICAgZm9udC1zaXplOiAydm1pbjtcclxufSBcclxuLmRlc2t0b3Age1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzZW07XHJcbiAgICBwYWRkaW5nOiAydm1pbiA0LjV2bWluO1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbn1cclxuLmRlc2t0b3AgaDMge1xyXG4gICAgZm9udC1zaXplOiA0dm1pbjtcclxufVxyXG4uZGVza3RvcCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMnZtaW47XHJcbn1cclxuLyogc2VjdGlvbiA0ICovXHJcbi5zZWN0aW9uLTQgaDF7XHJcbiAgICBmb250LXNpemU6IDZ2bWluO1xyXG4gICAgcGFkZGluZy10b3A6IDE0dm1pbjtcclxufVxyXG4udGVhbiB7XHJcbiAgICBwYWRkaW5nOiAxMHZtaW4gNHZtaW47XHJcbn1cclxuLnNlY3Rpb24tNC5jYXJkIHtcclxuICAgIHdpZHRoOiAyMnJlbSA7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHZtaW47XHJcblxyXG59XHJcbi5jYXJkLXRleHQge1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbn1cclxuLnNlY3Rpb24tNCAuY2FyZC1ib2R5PmF7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcbi5zZWN0aW9uLTQgLmNhcm91c2VsLWl0ZW0+YXtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxufVxyXG4uYm9yZGVyLXJhZGl1cyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNDBweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuLyogZm9vdGVyICovXHJcbmZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLCAwLCAwLjgxNSk7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAxNHZtaW4gMTh2bWluO1xyXG59XHJcbmZvb3RlciBwPiBzcGFue1xyXG4gICAgY29sb3I6ICNmZjUxMmY7XHJcbn1cclxuZm9vdGVyIGlucHV0e1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuZm9vdGVyIC5pbnB1dC1ncm91cC5pbnB1dC1ncm91cC10ZXh0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdncmVkaWVudCk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuZm9vdGVyIC5jb2x1bW4gaXtcclxuICAgIGNvbG9yOiAjZmY1MTJmO1xyXG59XHJcbmZvb3RlciAuY29sdW1uIGkraXtcclxuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG59XHJcbi5uYXYtZHJvcGRvd24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIC8qIEd1YXJhbnRlZXMgdGhhdCB0aGUgZHJvcGRvd24gd2lsbCBkaXNwbGF5IG9uIHRvcCBvZiBhbnkgY29udGVudC4gKi9cclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4uZHJvcGRvd24xOmhvdmVyIC5uYXYtZHJvcGRvd24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuZGl2LnRhcC10b3Age1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDMwcHg7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"]
        }];
      }, {
        onWindowScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["window:scroll", []]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ag-grid-angular */
    "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ngx-bootstrap/carousel */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ngx-bootstrap/collapse */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js"); // import { MainNavComponent } from './main-nav/main-nav.component';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_15__["AgGridModule"].withComponents([]), _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__["LayoutModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_23__["CarouselModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_25__["CollapseModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_24__["SidebarComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_15__["AgGridModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__["LayoutModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_23__["CarouselModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_25__["CollapseModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_24__["SidebarComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_15__["AgGridModule"].withComponents([]), _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__["LayoutModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_23__["CarouselModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_25__["CollapseModule"].forRoot()],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a0) {
      return {
        "show": a0
      };
    };

    var HeaderComponent = function HeaderComponent() {
      _classCallCheck(this, HeaderComponent);

      this.isShown = false;
    };

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 17,
      vars: 3,
      consts: [[1, "navbar", "nav-bg", "navbar-expand-md", "bg-light", "p-2", "fixed-top"], [1, "logo"], [1, "navbar-brand"], ["src", "/assets/images/logo.jpg", "alt", "logo"], ["type", "button", "data-toggle", "collapse", 1, "navbar-toggler", "d-lg-none", 3, "click"], [1, "navbar-toggler-icon"], [1, "collapse", "navbar-collapse", "d-lg-flex", "flex-row-reverse", 3, "ngClass"], [1, "navbar-nav"], [1, "nav-item", "active"], ["routerLink", "/post", 1, "nav-link"], ["routerLink", "post/create-post", 1, "nav-link"], ["routerLink", "", 1, "nav-link"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_4_listener() {
            return ctx.isShown = !ctx.isShown;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Posts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "New Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.isShown));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".logo[_ngcontent-%COMP%] {\r\n    width: 75px;\r\n    height: 61px;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.nav-bg[_ngcontent-%COMP%]{\r\n    background: #e1296e !important;\r\n}\r\n\r\na.nav-link[_ngcontent-%COMP%]{\r\n    color: white !important;\r\n    font-size: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBoZWlnaHQ6IDYxcHg7XHJcbn1cclxuXHJcbi5sb2dvIGEgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5uYXYtYmd7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTEyOTZlICFpbXBvcnRhbnQ7XHJcbn1cclxuYS5uYXYtbGlua3tcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 14,
      vars: 0,
      consts: [[1, "home-content"], [1, "container", "text-center"], [1, "row"], [1, "col-md-7", "col-sm-12", "author_details"], [1, "author"], [1, "author-sub-title"], [1, "author-description"], [1, "btn", "btn-light", "px-5", "py-2", "buy-now-button"], [1, "col-md-5", "col-sm-12", "h-25"], ["src", "assets/images/book12.jpg", "alt", "", 1, "book-img"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Author: Dinesh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "EXCITING ADVENTURE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "P", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ducimus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Buy now for $165");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["[_nghost-%COMP%]{\r\n    display: block;\r\n    margin-top: 200px;\r\n}\r\n.author[_ngcontent-%COMP%] {\r\n    padding: 1vmin;\r\n    letter-spacing: 4px;\r\n}\r\n.author-sub-title[_ngcontent-%COMP%] {\r\n    font-size: 5.5vmin;\r\n    font-weight: bold;\r\n    padding: 0.1em 0em;\r\n}\r\n.author-description[_ngcontent-%COMP%] {\r\n    padding: 1vmin 5vmin;\r\n}\r\n.buy-now-button[_ngcontent-%COMP%] {\r\n    border-radius: 30px;\r\n    font-weight: bold;\r\n}\r\nimg.book-img[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxufVxyXG4uYXV0aG9yIHtcclxuICAgIHBhZGRpbmc6IDF2bWluO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxufVxyXG5cclxuLmF1dGhvci1zdWItdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiA1LjV2bWluO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAwLjFlbSAwZW07XHJcbn1cclxuXHJcbi5hdXRob3ItZGVzY3JpcHRpb24ge1xyXG4gICAgcGFkZGluZzogMXZtaW4gNXZtaW47XHJcbn1cclxuXHJcbi5idXktbm93LWJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmltZy5ib29rLWltZyB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sidebar/sidebar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sidebar/sidebar.component.ts ***!
    \**********************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-bootstrap/collapse */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js");

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent() {
        _classCallCheck(this, SidebarComponent);

        this.isCollapsed = false;
        this.isme = false;
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "clickd",
        value: function clickd() {
          this.isme = !this.isme;
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)();
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      decls: 6,
      vars: 2,
      consts: [["type", "button", "aria-controls", "collapseBasic", 1, "btn", "btn-primary", 3, "click"], ["id", "collapseBasic", 3, "collapse"], [1, "well", "well-lg", "card", "card-block", "card-header"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_0_listener() {
            return ctx.isCollapsed = !ctx.isCollapsed;
          })("click", function SidebarComponent_Template_button_click_0_listener() {
            return ctx.clickd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Toggle collapse\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Some content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", ctx.isCollapsed);
        }
      },
      directives: [ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_1__["CollapseDirective"]],
      styles: ["[_nghost-%COMP%] {\r\n    display: block;\r\n    padding-top: 100px;\r\n    padding-left: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! H:\Project\mean-project\mean-course\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map