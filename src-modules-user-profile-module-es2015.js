(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-modules-user-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/pages/user-profile/user-profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/user-profile/user-profile.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <h2>Edit Profile</h2>\r\n  <form [formGroup]=\"updateForm\"\r\n  (ngSubmit)=\"onSubmit()\">\r\n  <div>\r\n    <label for=\"email\" class=\"input-label\">Email address\r\n      <input type=\"text\"\r\n      placeholder=\"Email\"\r\n      formControlName=\"email\">\r\n    </label>\r\n  </div>\r\n\r\n  <div class=\"flex-position\">\r\n    <div class=\"data\">\r\n      <label for=\"firstName\" class=\"input-label\">First name\r\n        <input type=\"text\"\r\n        placeholder=\"Company\"\r\n        formControlName=\"firstName\">\r\n      </label>\r\n    </div>\r\n    <div class=\"data\">\r\n      <label for=\"secondName\" class=\"input-label\">Last name\r\n        <input type=\"text\"\r\n        placeholder=\"Last name\"\r\n        formControlName=\"secondName\">\r\n      </label>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <label for=\"address\" class=\"input-label\">Address\r\n    <input type=\"text\"\r\n    placeholder=\"Home address\"\r\n    formControlName=\"address\">\r\n  </label>\r\n\r\n  <div class=\"flex-position\">\r\n    <div class=\"address\">\r\n      <label for=\"city\" class=\"input-label\">City\r\n        <input type=\"text\"\r\n        placeholder=\"City\"\r\n        formControlName=\"city\">\r\n      </label>\r\n    </div>\r\n    <div class=\"address\">\r\n      <label for=\"country\" class=\"input-label\">Country\r\n        <input type=\"text\"\r\n        placeholder=\"Country\"\r\n        formControlName=\"country\">\r\n      </label>\r\n    </div>\r\n    <div class=\"address\">\r\n      <label for=\"postalCode\" class=\"input-label\">Postal code\r\n        <input type=\"text\"\r\n        placeholder=\"ZIP code\"\r\n        formControlName=\"postalCode\">\r\n      </label>\r\n    </div>\r\n  </div>\r\n\r\n  <label for=\"description\" class=\"input-label\">About me\r\n    <input type=\"text\"\r\n    placeholder=\"Here can be your description\"\r\n    formControlName=\"aboutMe\">\r\n  </label>\r\n  <div class=\"update-button\">\r\n    <button class=\"bold-text\">Update</button>\r\n  </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/modules/user-profile.module.ts":
/*!********************************************!*\
  !*** ./src/modules/user-profile.module.ts ***!
  \********************************************/
/*! exports provided: UserProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileModule", function() { return UserProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/user-profile/user-profile.component */ "./src/pages/user-profile/user-profile.component.ts");






const routes = [
    {
        path: '',
        component: _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["UserProfileComponent"],
    },
];
let UserProfileModule = class UserProfileModule {
};
UserProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["UserProfileComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
    })
], UserProfileModule);



/***/ }),

/***/ "./src/pages/user-profile/user-profile.component.scss":
/*!************************************************************!*\
  !*** ./src/pages/user-profile/user-profile.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  background: white;\n  margin: 10px;\n  padding: 20px;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n}\n\n.main {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n\n.input-label {\n  text-transform: uppercase;\n  font-family: sans-serif;\n  font-size: 10px;\n  display: block;\n  margin-bottom: 25px;\n}\n\ninput[type=text] {\n  width: 100%;\n  font-size: 16px;\n  border: lightgray 1px solid;\n  border-radius: 5px;\n  margin-right: 1%;\n  padding: 5px;\n}\n\n.flex-position {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.data {\n  width: calc(99% / 2);\n}\n\n.address {\n  width: calc(97% / 3);\n}\n\n.bold-text {\n  font-weight: 800;\n}\n\n.enter-form {\n  width: 30%;\n  height: 30px;\n  border: lightgray 1px solid;\n  border-radius: 5px;\n}\n\n.update-button {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\nbutton {\n  background-color: #5ec9e3;\n  color: white;\n  height: 40px;\n  border: lightgray 1px solid;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy91c2VyLXByb2ZpbGUvRDpcXGZvcm1zUHJvamVjdFxcQW5ndWxhclByb2plY3Qvc3JjXFxwYWdlc1xcdXNlci1wcm9maWxlXFx1c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvcGFnZXMvdXNlci1wcm9maWxlL0Q6XFxmb3Jtc1Byb2plY3RcXEFuZ3VsYXJQcm9qZWN0L3NyY1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvcGFnZXMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQ0RNO0VERU4sWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FFREY7O0FGSUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw2QkFBQTtBRURGOztBRkdBO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUVBRjs7QUZFQTtFQUNFLFdBQUE7RUFDRCxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBRUNEOztBRkNBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBRUVGOztBRkFBO0VBQ0Usb0JBQUE7QUVHRjs7QUZEQTtFQUNFLG9CQUFBO0FFSUY7O0FGRkE7RUFDRSxnQkFBQTtBRUtGOztBRkhBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FFTUY7O0FGSkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FFT0Y7O0FGTEE7RUFDRSx5QkFBQTtFQUNBLFlDcERNO0VEcUROLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FFUUYiLCJmaWxlIjoic3JjL3BhZ2VzL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvc3R5bGVzL3ZhcmlhYmxlcyc7XHJcblxyXG4uY29udGVudHtcclxuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0Z3JheTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5tYWlue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuLmlucHV0LWxhYmVse1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuaW5wdXRbdHlwZT1cInRleHRcIl17XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiBmb250LXNpemU6IDE2cHg7XHJcbiBib3JkZXI6ICRsaWdodGdyYXkgMXB4IHNvbGlkO1xyXG4gYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gbWFyZ2luLXJpZ2h0OiAxJTtcclxuIHBhZGRpbmc6IDVweDtcclxufVxyXG4uZmxleC1wb3NpdGlvbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uZGF0YXtcclxuICB3aWR0aDogY2FsYyg5OSUgLyAyKTtcclxufVxyXG4uYWRkcmVzc3tcclxuICB3aWR0aDogY2FsYyg5NyUgLyAzKTtcclxufVxyXG4uYm9sZC10ZXh0e1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuLmVudGVyLWZvcm17XHJcbiAgd2lkdGg6IDMwJTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyOiAkbGlnaHRncmF5IDFweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLnVwZGF0ZS1idXR0b257XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbmJ1dHRvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiM1ZWM5ZTM7XHJcbiAgY29sb3I6ICR3aGl0ZTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyOiAkbGlnaHRncmF5IDFweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuIiwiLy8gY29sb3JzXHJcbiRsaWdodGdyYXk6IGxpZ2h0Z3JheTtcclxuJHdoaXRlOiB3aGl0ZTtcclxuXHJcbiRwYWdlLWJhY2tncm91bmQ6ICNGN0Y3Rjg7XHJcbiRzaWRlYmFyLWJhY2tncm91bmQ6ICM5YzY4ZDk7XHJcbiIsIi5jb250ZW50IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5pbnB1dC1sYWJlbCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiBsaWdodGdyYXkgMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMSU7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmZsZXgtcG9zaXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5kYXRhIHtcbiAgd2lkdGg6IGNhbGMoOTklIC8gMik7XG59XG5cbi5hZGRyZXNzIHtcbiAgd2lkdGg6IGNhbGMoOTclIC8gMyk7XG59XG5cbi5ib2xkLXRleHQge1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uZW50ZXItZm9ybSB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyOiBsaWdodGdyYXkgMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi51cGRhdGUtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVlYzllMztcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogbGlnaHRncmF5IDFweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/pages/user-profile/user-profile.component.ts":
/*!**********************************************************!*\
  !*** ./src/pages/user-profile/user-profile.component.ts ***!
  \**********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/services/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let UserProfileComponent = class UserProfileComponent {
    constructor(formBuilder, userService, toastr) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.toastr = toastr;
        const user = this.userService.getCurrentUserInfo().subscribe(user => {
            this.currentUser = user;
        });
    }
    ngOnInit() {
        if (this.currentUser) {
            this.updateForm = this.formBuilder.group({
                firstName: [this.currentUser.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                lastName: [this.currentUser.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                email: [this.currentUser.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                address: [this.currentUser.address],
                country: [this.currentUser.country],
                city: [this.currentUser.city],
                postalCode: [this.currentUser.postalCode],
                aboutMe: [this.currentUser.aboutMe]
            });
        }
    }
    onSubmit() {
        const userInfo = {
            email: this.updateForm.get('email').value,
            firstName: this.updateForm.get('firstName').value,
            lastName: this.updateForm.get('lastName').value,
            address: this.updateForm.get('address').value,
            country: this.updateForm.get('country').value,
            city: this.updateForm.get('city').value,
            postalCode: this.updateForm.get('postalCode').value,
            aboutMe: this.updateForm.get('aboutMe').value,
        };
        this.userService.updateUser(userInfo).subscribe(res => {
            this.toastr.success('User profile is updated');
        }, err => {
            this.toastr.error('Try update user profile one more time');
        });
    }
};
UserProfileComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profile',
        template: __webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/index.js!./src/pages/user-profile/user-profile.component.html"),
        styles: [__webpack_require__(/*! ./user-profile.component.scss */ "./src/pages/user-profile/user-profile.component.scss")]
    })
], UserProfileComponent);



/***/ })

}]);
//# sourceMappingURL=src-modules-user-profile-module-es2015.js.map