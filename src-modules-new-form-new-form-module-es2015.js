(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-modules-new-form-new-form-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/pages/new-form/new-form.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/new-form/new-form.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation\">\r\n    <div>\r\n      <button class=\"color-violet\"  data-toggle=\"modal\" data-target=\"#exampleModalCenter\"><i class=\"fas fa-plus\"></i> ADD NEW FIELD</button>\r\n      <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" >\r\n          <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">New field</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <form>\r\n                  <div class='form-input'>\r\n                    <label>Name</label>\r\n                    <input class=\"form-control\" type=\"text\">\r\n                </div>\r\n                <div class='form-input'>\r\n                  <label>Pattern</label>\r\n                  <input class=\"form-control\" type=\"text\">\r\n                </div>\r\n                <div class='form-input'>\r\n                    <label>Type</label>\r\n                    <select class=\"form-control\">\r\n                      <option value=\"\" selected disabled hidden>Choose here</option>\r\n                      <option value=\"button\">button</option>\r\n                      <option value=\"checkbox\">checkbox\t</option>\r\n                      <option value=\"file\">file</option>\r\n                      <option value=\"password\">password</option>\r\n                      <option value=\"radio\">radio</option>\r\n                      <option value=\"text\">text</option>\r\n                    </select>\r\n                </div>\r\n                <div class='form-input'>\r\n                  <label>Placeholder</label>\r\n                  <input class=\"form-control\" type=\"text\">\r\n                </div>\r\n                <div class='form-required'>\r\n                  <input type=\"checkbox\">\r\n                  <label>Required</label>\r\n                </div>\r\n                </form>\r\n\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"button\"  data-dismiss=\"modal\"  class=\"btn btn-primary\" (click)=\"addField()\">Save changes</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div>\r\n        <button class=\"color-violet\">SAVE</button>\r\n    </div>\r\n    <div>\r\n        <button class =\"color-green\">SHARE</button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"general-configs\">\r\n        <div >\r\n            <label for=\"title\" class=\"input-label\">Title\r\n            </label><br/>\r\n            <input type=\"text\" placeholder=\"form name\" name=\"title\" class=\"enter-form\">\r\n        </div><br/>\r\n        <div class=\"data\">\r\n            <label for=\"styles\" class=\"input-label\">CSS Styles\r\n            </label><br/>\r\n            <textarea placeholder=\"styles for form\" name=\"styles\" class=\"enter-form\"></textarea>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/modules/new-form/new-form.module.ts":
/*!*************************************************!*\
  !*** ./src/modules/new-form/new-form.module.ts ***!
  \*************************************************/
/*! exports provided: NewFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFormModule", function() { return NewFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_pages_new_form_new_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/pages/new-form/new-form.component */ "./src/pages/new-form/new-form.component.ts");





const routes = [
    {
        path: '',
        component: src_pages_new_form_new_form_component__WEBPACK_IMPORTED_MODULE_4__["NewFormComponent"],
    },
];
let NewFormModule = class NewFormModule {
};
NewFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_pages_new_form_new_form_component__WEBPACK_IMPORTED_MODULE_4__["NewFormComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
    })
], NewFormModule);



/***/ }),

/***/ "./src/pages/new-form/new-form.component.scss":
/*!****************************************************!*\
  !*** ./src/pages/new-form/new-form.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  height: 45px;\n  border-radius: 5px;\n  color: white;\n  border: white 1px solid;\n  border-radius: 5px;\n}\n\n.color-violet {\n  background: #9c68d9;\n}\n\n.color-green {\n  background: #69AFB6;\n}\n\n.navigation {\n  padding: 2px;\n  background: white;\n  width: 40%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.add-field {\n  padding: 20px;\n  top: 10%;\n  position: absolute;\n  left: 40%;\n  border: 1px solid gray;\n  background: white;\n  width: 400px;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 0 0 100px rgba(0, 0, 0, 0.5);\n}\n\n.fa-times {\n  color: gray;\n}\n\n.btn-close {\n  background: none;\n  border: none;\n}\n\n.form-input {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.form-head {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  border-bottom: 1px solid gray;\n}\n\n.btn-close_gray {\n  background: #6c757d;\n  color: white;\n  border: 0 solid gray;\n  border-radius: 5px;\n}\n\n.btn-save {\n  color: white;\n  background: #297aff;\n  margin-left: 5px;\n}\n\n.btn-save, .btn-close_gray {\n  width: 70px;\n  height: 40px;\n}\n\n.form-btn {\n  border-top: 1px solid gray;\n  padding-top: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.general-configs {\n  padding: 2px;\n  background: white;\n  width: 40%;\n}\n\n.enter-form {\n  width: 100%;\n  height: 45px;\n  border: lightgray 1px solid;\n  border-radius: 5px;\n}\n\n.form-input {\n  margin: 0 5px 10px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9uZXctZm9ybS9EOlxcZm9ybXNQcm9qZWN0XFxBbmd1bGFyUHJvamVjdC9zcmNcXHBhZ2VzXFxuZXctZm9ybVxcbmV3LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvcGFnZXMvbmV3LWZvcm0vbmV3LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksbUJBQUE7QUNFSjs7QURBQTtFQUNJLG1CQUFBO0FDR0o7O0FEREE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0lKOztBRERBO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FDSUY7O0FEREE7RUFDRSxXQUFBO0FDSUY7O0FERkE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUNLRjs7QURIQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ01GOztBREpBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLDZCQUFBO0FDT0Y7O0FESkE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDT0Y7O0FETEE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ1FBOztBRExBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNRQTs7QURMQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDUUE7O0FETkE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDU0o7O0FEUEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNVSjs7QURQRTtFQUNFLHNCQUFBO0FDVUoiLCJmaWxlIjoic3JjL3BhZ2VzL25ldy1mb3JtL25ldy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9ue1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiB3aGl0ZSAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmNvbG9yLXZpb2xldHtcclxuICAgIGJhY2tncm91bmQ6IzljNjhkOTtcclxufVxyXG4uY29sb3ItZ3JlZW57XHJcbiAgICBiYWNrZ3JvdW5kOiM2OUFGQjY7XHJcbn1cclxuLm5hdmlnYXRpb257XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxufVxyXG4uYWRkLWZpZWxke1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgdG9wOjEwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNDAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMDBweCByZ2JhKDAsMCwwLDAuNSk7XHJcbn1cclxuXHJcbi5mYS10aW1lc3tcclxuICBjb2xvciA6Z3JheTtcclxufVxyXG4uYnRuLWNsb3Nle1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5mb3JtLWlucHV0e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG59XHJcbi5mb3JtLWhlYWR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcclxufVxyXG5cclxuLmJ0bi1jbG9zZV9ncmF5e1xyXG4gIGJhY2tncm91bmQ6cmdiKDEwOCwgMTE3LDEyNSk7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYm9yZGVyOiAwIHNvbGlkIGdyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5idG4tc2F2ZXtcclxuY29sb3I6IHdoaXRlO1xyXG5iYWNrZ3JvdW5kOiByZ2IoNDEsIDEyMiwgMjU2KTtcclxubWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmJ0bi1zYXZlLCAuYnRuLWNsb3NlX2dyYXl7XHJcbndpZHRoOiA3MHB4O1xyXG5oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWJ0bntcclxuYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XHJcbnBhZGRpbmctdG9wOiAxMHB4O1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbi5nZW5lcmFsLWNvbmZpZ3N7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbn1cclxuLmVudGVyLWZvcm17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGJvcmRlcjogbGlnaHRncmF5IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcblxyXG4gIC5mb3JtLWlucHV0e1xyXG4gICAgbWFyZ2luOjAgNXB4IDEwcHggNXB4O1xyXG4gIH1cclxuIiwiYnV0dG9uIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiB3aGl0ZSAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNvbG9yLXZpb2xldCB7XG4gIGJhY2tncm91bmQ6ICM5YzY4ZDk7XG59XG5cbi5jb2xvci1ncmVlbiB7XG4gIGJhY2tncm91bmQ6ICM2OUFGQjY7XG59XG5cbi5uYXZpZ2F0aW9uIHtcbiAgcGFkZGluZzogMnB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDQwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYWRkLWZpZWxkIHtcbiAgcGFkZGluZzogMjBweDtcbiAgdG9wOiAxMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDQwMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmZhLXRpbWVzIHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5idG4tY2xvc2Uge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5mb3JtLWlucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZvcm0taGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG59XG5cbi5idG4tY2xvc2VfZ3JheSB7XG4gIGJhY2tncm91bmQ6ICM2Yzc1N2Q7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAwIHNvbGlkIGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmJ0bi1zYXZlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMjk3YWZmO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uYnRuLXNhdmUsIC5idG4tY2xvc2VfZ3JheSB7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5mb3JtLWJ0biB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmdlbmVyYWwtY29uZmlncyB7XG4gIHBhZGRpbmc6IDJweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi5lbnRlci1mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyOiBsaWdodGdyYXkgMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5mb3JtLWlucHV0IHtcbiAgbWFyZ2luOiAwIDVweCAxMHB4IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/pages/new-form/new-form.component.ts":
/*!**************************************************!*\
  !*** ./src/pages/new-form/new-form.component.ts ***!
  \**************************************************/
/*! exports provided: NewFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFormComponent", function() { return NewFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NewFormComponent = class NewFormComponent {
    constructor() {
        this.openModal = false;
    }
    addField() {
        console.log("new Window");
        //service method
    }
    ngOnInit() {
    }
};
NewFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-form',
        template: __webpack_require__(/*! raw-loader!./new-form.component.html */ "./node_modules/raw-loader/index.js!./src/pages/new-form/new-form.component.html"),
        styles: [__webpack_require__(/*! ./new-form.component.scss */ "./src/pages/new-form/new-form.component.scss")]
    })
], NewFormComponent);



/***/ })

}]);
//# sourceMappingURL=src-modules-new-form-new-form-module-es2015.js.map