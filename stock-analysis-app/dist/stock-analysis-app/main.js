(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yuhaozhang/Desktop/eb-node/stock-analysis-app/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "BGhG":
/*!***************************************************************!*\
  !*** ./src/app/components/sell-modal/sell-modal.component.ts ***!
  \***************************************************************/
/*! exports provided: SellModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellModalComponent", function() { return SellModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");




class SellModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.parentUpdatePortfolio = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.updatePortfolio = () => {
            // Close the modal
            this.activeModal.dismiss('Cross click');
            // Update local storage
            let portfolioList = [];
            const localPortfolioList = JSON.parse(window.localStorage.getItem('portfolio'));
            if (localPortfolioList) {
                portfolioList = localPortfolioList;
            }
            for (let i = 0; i < portfolioList.length; i++) {
                if (portfolioList[i].ticker == this.ticker) {
                    let prevQuantity = portfolioList[i].quantity;
                    portfolioList[i].quantity = prevQuantity - this.sellQuantity;
                    portfolioList[i].totalCost = portfolioList[i].quantity * portfolioList[i].avgPrice;
                    portfolioList[i].curPrice = this.curPrice;
                    portfolioList[i].change = portfolioList[i].avgPrice - portfolioList[i].curPrice;
                    portfolioList[i].marketValue = portfolioList[i].curPrice * portfolioList[i].quantity;
                    break;
                }
            }
            // Store to local storage
            window.localStorage.setItem('portfolio', JSON.stringify(portfolioList));
            // Let parent update portfolio item prices
            this.parentUpdatePortfolio.emit();
        };
    }
    ngOnInit() {
    }
}
SellModalComponent.ɵfac = function SellModalComponent_Factory(t) { return new (t || SellModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
SellModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SellModalComponent, selectors: [["app-sell-modal"]], inputs: { ticker: "ticker", name: "name", curPrice: "curPrice", sellQuantity: "sellQuantity", curQuantity: "curQuantity" }, outputs: { parentUpdatePortfolio: "parentUpdatePortfolio" }, decls: 20, vars: 5, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["ngbAutofocus", "", "type", "number", 1, "quantity", 3, "ngModel", "ngModelChange"], [1, "modal-footer", "footer"], ["type", "button", 1, "btn", "btn-success", "buy-button", 3, "disabled", "click"]], template: function SellModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SellModalComponent_Template_button_click_4_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SellModalComponent_Template_input_ngModelChange_14_listener($event) { return ctx.sellQuantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SellModalComponent_Template_button_click_18_listener() { return ctx.updatePortfolio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ticker);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current Price: ", ctx.curPrice, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sellQuantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total: ", (ctx.curPrice * ctx.sellQuantity).toFixed(2), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.sellQuantity <= 0 || ctx.sellQuantity > ctx.curQuantity);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".quantity[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWxsLW1vZGFsL3NlbGwtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlbGwtbW9kYWwvc2VsbC1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1YW50aXR5IHtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cblxuLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SellModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sell-modal',
                templateUrl: './sell-modal.component.html',
                styleUrls: ['./sell-modal.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, { ticker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], curPrice: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sellQuantity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], curQuantity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], parentUpdatePortfolio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "DJtH":
/*!**********************************************************************!*\
  !*** ./src/app/components/body/main-search/main-search.component.ts ***!
  \**********************************************************************/
/*! exports provided: MainSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSearchComponent", function() { return MainSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "qfBg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");









function MainSearchComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainSearchComponent_mat_field_11_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r4, " ");
} }
function MainSearchComponent_mat_field_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainSearchComponent_mat_field_11_mat_option_1_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.options);
} }
class MainSearchComponent {
    constructor(userService) {
        this.userService = userService;
        // Remove company name in the input
        this.keepTickerOnly = () => {
            if (this.label.includes('|')) {
                const ticker = this.label.split(' | ')[0];
                this.label = ticker;
            }
        };
        this.getOptions = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["debounce"])(this.getOptions, 800);
    }
    ngOnInit() {
        this.loading = false;
    }
    // Fetch autocomplete options
    getOptions(userInput) {
        if (userInput) {
            this.loading = true;
            this.userService.getAutoCompleteOptions(userInput).subscribe(options => {
                this.options = options;
                this.loading = false;
            });
        }
    }
}
MainSearchComponent.ɵfac = function MainSearchComponent_Factory(t) { return new (t || MainSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
MainSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainSearchComponent, selectors: [["app-main-search"]], inputs: { label: "label" }, decls: 12, vars: 6, consts: [[1, "inner-addon", "right-addon"], [3, "href"], [1, "fa", "fa-search"], ["type", "text", "matInput", "", "placeholder", "Enter stock name", 1, "form-control", 3, "ngModel", "matAutocomplete", "ngModelChange", "input"], [3, "panelWidth", "optionSelected"], ["auto", "matAutocomplete"], [4, "ngIf"], ["diameter", "25"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function MainSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "STOCK SEARCH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MainSearchComponent_Template_input_ngModelChange_7_listener($event) { return ctx.label = $event; })("input", function MainSearchComponent_Template_input_input_7_listener($event) { return ctx.getOptions($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-autocomplete", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function MainSearchComponent_Template_mat_autocomplete_optionSelected_8_listener() { return ctx.keepTickerOnly(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MainSearchComponent_mat_option_10_Template, 2, 0, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MainSearchComponent_mat_field_11_Template, 2, 1, "mat-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/details/", ctx.label, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.label)("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("panelWidth", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["div[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n\ni[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nh1[_ngcontent-%COMP%] {\n  padding-top: 80px;\n  text-align: center;\n  font-size: 55px;\n  font-weight: bold;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n  border-color: #cccccc;\n  -webkit-box-shadow: none;\n}\n\n.inner-addon[_ngcontent-%COMP%] {\n  position: relative;\n  width: 240px;\n  margin: 0 auto;\n  padding-top: 35px;\n}\n\n\n\n.inner-addon[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 10px;\n  color: #6f4ffb;\n}\n\n\n\n.right-addon[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  right: 15px;\n}\n\n\n\n.right-addon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 30px;\n  border-radius: 30px;\n  border: 2px solid #6f4ffb;\n}\n\n  .mat-autocomplete-panel {\n  margin-left: 20px;\n  margin-top: -5px;\n  box-shadow: 5px 5px 5px 6px #ccc;\n  z-index: 1;\n  background-color: white;\n}\n\n  .mat-option:hover:not(.mat-option-disabled) {\n  background: lightgray !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib2R5L21haW4tc2VhcmNoL21haW4tc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUEsZUFBZTs7QUFDZjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQSxlQUFlOztBQUNmO0VBQ0UsV0FBVztBQUNiOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFFaEIsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JvZHkvbWFpbi1zZWFyY2gvbWFpbi1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5pIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5oMSB7XG4gIHBhZGRpbmctdG9wOiA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItY29sb3I6ICNjY2NjY2M7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmlubmVyLWFkZG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogMzVweDtcbn1cblxuLyogc3R5bGUgaWNvbiAqL1xuLmlubmVyLWFkZG9uIC5mYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICM2ZjRmZmI7XG59XG5cbi8qIGFsaWduIGljb24gKi9cbi5yaWdodC1hZGRvbiAuZmEge1xuICByaWdodDogMTVweDtcbn1cblxuLyogYWRkIHBhZGRpbmcgICovXG4ucmlnaHQtYWRkb24gaW5wdXQge1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjNmY0ZmZiO1xufVxuXG46Om5nLWRlZXAgLm1hdC1hdXRvY29tcGxldGUtcGFuZWwge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgLW1vei1ib3gtc2hhZG93OiA1cHggNXB4IDVweCA2cHggI2NjYztcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggNnB4ICNjY2M7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1vcHRpb246aG92ZXI6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-search',
                templateUrl: './main-search.component.html',
                styleUrls: ['./main-search.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "F/Y2":
/*!*************************************************************!*\
  !*** ./src/app/components/buy-modal/buy-modal.component.ts ***!
  \*************************************************************/
/*! exports provided: BuyModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyModalComponent", function() { return BuyModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "bvlS");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");





class BuyModalComponent {
    constructor(activeModal, _flashMessagesService) {
        this.activeModal = activeModal;
        this._flashMessagesService = _flashMessagesService;
        this.updatePortfolio = () => {
            // Close the modal
            this.activeModal.dismiss('Cross click');
            this._flashMessagesService.show(`${this.ticker} bought successfully!`, { cssClass: 'alert-success', timeout: 3000, showCloseBtn: true });
            // Update local storage
            let portfolioList = [];
            let found = false;
            const localPortfolioList = JSON.parse(window.localStorage.getItem('portfolio'));
            if (localPortfolioList) {
                portfolioList = localPortfolioList;
            }
            for (let i = 0; i < portfolioList.length; i++) {
                if (portfolioList[i].ticker == this.ticker) {
                    found = true;
                    let prevQuantity = portfolioList[i].quantity;
                    let prevTotalCost = portfolioList[i].totalCost;
                    portfolioList[i].quantity = prevQuantity + this.quantity;
                    portfolioList[i].totalCost = prevTotalCost + this.quantity * this.curPrice;
                    portfolioList[i].avgPrice = portfolioList[i].totalCost / portfolioList[i].quantity;
                    portfolioList[i].curPrice = this.curPrice;
                    portfolioList[i].change = portfolioList[i].avgPrice - portfolioList[i].curPrice;
                    portfolioList[i].marketValue = portfolioList[i].curPrice * portfolioList[i].quantity;
                    break;
                }
            }
            if (!found) {
                portfolioList.push({
                    ticker: this.ticker,
                    name: this.name,
                    quantity: this.quantity,
                    totalCost: this.quantity * this.curPrice,
                    avgPrice: this.curPrice,
                    curPrice: this.curPrice,
                    change: 0,
                    marketValue: this.quantity * this.curPrice
                });
            }
            // Store to local storage
            window.localStorage.setItem('portfolio', JSON.stringify(portfolioList));
        };
    }
    ngOnInit() {
    }
}
BuyModalComponent.ɵfac = function BuyModalComponent_Factory(t) { return new (t || BuyModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"])); };
BuyModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuyModalComponent, selectors: [["app-buy-modal"]], inputs: { ticker: "ticker", name: "name", curPrice: "curPrice", quantity: "quantity" }, decls: 20, vars: 5, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["ngbAutofocus", "", "type", "number", 1, "quantity", 3, "ngModel", "ngModelChange"], [1, "modal-footer", "footer"], ["type", "button", 1, "btn", "btn-success", "buy-button", 3, "disabled", "click"]], template: function BuyModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuyModalComponent_Template_button_click_4_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BuyModalComponent_Template_input_ngModelChange_14_listener($event) { return ctx.quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuyModalComponent_Template_button_click_18_listener() { return ctx.updatePortfolio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ticker);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current Price: ", ctx.curPrice, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total: ", (ctx.curPrice * ctx.quantity).toFixed(2), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.quantity <= 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".quantity[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idXktbW9kYWwvYnV5LW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9idXktbW9kYWwvYnV5LW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXVhbnRpdHkge1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuXG4uZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuyModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-buy-modal',
                templateUrl: './buy-modal.component.html',
                styleUrls: ['./buy-modal.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }, { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"] }]; }, { ticker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], curPrice: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], quantity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "FX67":
/*!*********************************************************************************!*\
  !*** ./src/app/components/buy-modal-portfolio/buy-modal-portfolio.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BuyModalPortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyModalPortfolioComponent", function() { return BuyModalPortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");




class BuyModalPortfolioComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.parentUpdatePortfolio = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.updatePortfolio = () => {
            // Close the modal
            this.activeModal.dismiss('Cross click');
            // Update local storage
            let portfolioList = [];
            const localPortfolioList = JSON.parse(window.localStorage.getItem('portfolio'));
            if (localPortfolioList) {
                portfolioList = localPortfolioList;
            }
            for (let i = 0; i < portfolioList.length; i++) {
                if (portfolioList[i].ticker == this.ticker) {
                    let prevQuantity = portfolioList[i].quantity;
                    let prevTotalCost = portfolioList[i].totalCost;
                    portfolioList[i].quantity = prevQuantity + this.quantity;
                    portfolioList[i].totalCost = prevTotalCost + this.quantity * this.curPrice;
                    portfolioList[i].avgPrice = portfolioList[i].totalCost / portfolioList[i].quantity;
                    portfolioList[i].curPrice = this.curPrice;
                    portfolioList[i].change = portfolioList[i].avgPrice - portfolioList[i].curPrice;
                    portfolioList[i].marketValue = portfolioList[i].curPrice * portfolioList[i].quantity;
                    break;
                }
            }
            // Store to local storage
            window.localStorage.setItem('portfolio', JSON.stringify(portfolioList));
            // Let parent update portfolio item prices
            this.parentUpdatePortfolio.emit();
        };
    }
    ngOnInit() {
    }
}
BuyModalPortfolioComponent.ɵfac = function BuyModalPortfolioComponent_Factory(t) { return new (t || BuyModalPortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
BuyModalPortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuyModalPortfolioComponent, selectors: [["app-buy-modal-portfolio"]], inputs: { ticker: "ticker", name: "name", curPrice: "curPrice", quantity: "quantity" }, outputs: { parentUpdatePortfolio: "parentUpdatePortfolio" }, decls: 20, vars: 5, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["ngbAutofocus", "", "type", "number", 1, "quantity", 3, "ngModel", "ngModelChange"], [1, "modal-footer", "footer"], ["type", "button", 1, "btn", "btn-success", "buy-button", 3, "disabled", "click"]], template: function BuyModalPortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuyModalPortfolioComponent_Template_button_click_4_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BuyModalPortfolioComponent_Template_input_ngModelChange_14_listener($event) { return ctx.quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuyModalPortfolioComponent_Template_button_click_18_listener() { return ctx.updatePortfolio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ticker);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current Price: ", ctx.curPrice, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total: ", (ctx.curPrice * ctx.quantity).toFixed(2), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.quantity <= 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".quantity[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idXktbW9kYWwtcG9ydGZvbGlvL2J1eS1tb2RhbC1wb3J0Zm9saW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2J1eS1tb2RhbC1wb3J0Zm9saW8vYnV5LW1vZGFsLXBvcnRmb2xpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1YW50aXR5IHtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cblxuLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuyModalPortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-buy-modal-portfolio',
                templateUrl: './buy-modal-portfolio.component.html',
                styleUrls: ['./buy-modal-portfolio.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, { ticker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], curPrice: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], quantity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], parentUpdatePortfolio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "GkKS":
/*!**************************************************************!*\
  !*** ./src/app/components/footer/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Powered by Tiingo. Developed by Yuhao Zhang.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["p[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 12px;\n  margin-bottom: -15px;\n  height: 45px;\n  background-color: lightgrey;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n    \"Lucida Sans\", Arial, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQjtvQ0FDa0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLFxuICAgIFwiTHVjaWRhIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _components_header_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/nav-bar/nav-bar.component */ "cX0s");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _components_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer/footer.component */ "GkKS");





class AppComponent {
    constructor() {
        this.title = 'stock-analysis-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "YeaI":
/*!*******************************************************************************!*\
  !*** ./src/app/components/news-modal-content/news-modal-content.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NewsModalContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModalContentComponent", function() { return NewsModalContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");



class NewsModalContentComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    ngOnInit() {
    }
}
NewsModalContentComponent.ɵfac = function NewsModalContentComponent_Factory(t) { return new (t || NewsModalContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
NewsModalContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsModalContentComponent, selectors: [["app-news-modal-content"]], inputs: { source: "source", publishedAt: "publishedAt", title: "title", description: "description", url: "url" }, decls: 30, vars: 8, consts: [[1, "modal-header"], ["ngbAutofocus", "", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "title"], [1, "desc"], [1, "link"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [1, "share-container"], ["target", "_blank", "rel", "noopener noreferrer", 1, "twitter-share-button", 3, "href"], [1, "fa", "fa-twitter", "fa-3x"], ["data-layout", "button_count", "data-size", "small", 1, "fb-share-button", "fb"], ["target", "_blank", 1, "fb-xfbml-parse-ignore", 3, "href"], [1, "fa", "fa-facebook-square", "fa-3x"]], template: function NewsModalContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsModalContentComponent_Template_button_click_7_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "For more details click");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.source, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.publishedAt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("href", "https://twitter.com/intent/tweet?text=", ctx.title, "&url=", ctx.url, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/sharer/sharer.php?u=", ctx.url, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: medium !important;\n  font-size: medium !important;\n  margin-top: -6px;\n  color: grey;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: medium;\n}\n\n.desc[_ngcontent-%COMP%] {\n  font-size: small;\n}\n\n.link[_ngcontent-%COMP%] {\n  font-size: smaller;\n  font-weight: lighter;\n}\n\na[_ngcontent-%COMP%] {\n  font-size: smaller;\n  margin-left: 2px;\n}\n\n.share-container[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  border: 1px solid lightgray;\n  border-radius: 6px;\n  padding: 20px;\n}\n\n.fb[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdzLW1vZGFsLWNvbnRlbnQvbmV3cy1tb2RhbC1jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25ld3MtbW9kYWwtY29udGVudC9uZXdzLW1vZGFsLWNvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImg0IHNwYW4ge1xuICBmb250LXdlaWdodDogbWVkaXVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogbWVkaXVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IC02cHg7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4udGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiBtZWRpdW07XG59XG5cbi5kZXNjIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLmxpbmsge1xuICBmb250LXNpemU6IHNtYWxsZXI7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG5hIHtcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xuICBtYXJnaW4tbGVmdDogMnB4O1xufVxuXG4uc2hhcmUtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5mYiB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsModalContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news-modal-content',
                templateUrl: './news-modal-content.component.html',
                styleUrls: ['./news-modal-content.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, { source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], publishedAt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! highcharts-angular */ "JUyF");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-flash-messages */ "bvlS");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/header/nav-bar/nav-bar.component */ "cX0s");
/* harmony import */ var _components_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/footer/footer/footer.component */ "GkKS");
/* harmony import */ var _components_body_main_search_main_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/body/main-search/main-search.component */ "DJtH");
/* harmony import */ var _components_body_stock_detail_stock_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/body/stock-detail/stock-detail.component */ "pubf");
/* harmony import */ var _components_body_summary_summary_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/body/summary/summary.component */ "o89s");
/* harmony import */ var _components_body_news_news_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/body/news/news.component */ "rbjG");
/* harmony import */ var _components_news_modal_content_news_modal_content_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/news-modal-content/news-modal-content.component */ "YeaI");
/* harmony import */ var _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/watchlist/watchlist.component */ "zcMl");
/* harmony import */ var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/portfolio/portfolio.component */ "kBmi");
/* harmony import */ var _components_buy_modal_buy_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/buy-modal/buy-modal.component */ "F/Y2");
/* harmony import */ var _components_sell_modal_sell_modal_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/sell-modal/sell-modal.component */ "BGhG");
/* harmony import */ var _components_buy_modal_portfolio_buy_modal_portfolio_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/buy-modal-portfolio/buy-modal-portfolio.component */ "FX67");





























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            highcharts_angular__WEBPACK_IMPORTED_MODULE_11__["HighchartsChartModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_12__["FlashMessagesModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
        _components_header_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_15__["NavBarComponent"],
        _components_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
        _components_body_main_search_main_search_component__WEBPACK_IMPORTED_MODULE_17__["MainSearchComponent"],
        _components_body_stock_detail_stock_detail_component__WEBPACK_IMPORTED_MODULE_18__["StockDetailComponent"],
        _components_body_summary_summary_component__WEBPACK_IMPORTED_MODULE_19__["SummaryComponent"],
        _components_body_news_news_component__WEBPACK_IMPORTED_MODULE_20__["NewsComponent"],
        _components_news_modal_content_news_modal_content_component__WEBPACK_IMPORTED_MODULE_21__["NewsModalContentComponent"],
        _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_22__["WatchlistComponent"],
        _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_23__["PortfolioComponent"],
        _components_buy_modal_buy_modal_component__WEBPACK_IMPORTED_MODULE_24__["BuyModalComponent"],
        _components_sell_modal_sell_modal_component__WEBPACK_IMPORTED_MODULE_25__["SellModalComponent"],
        _components_buy_modal_portfolio_buy_modal_portfolio_component__WEBPACK_IMPORTED_MODULE_26__["BuyModalPortfolioComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        highcharts_angular__WEBPACK_IMPORTED_MODULE_11__["HighchartsChartModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_12__["FlashMessagesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                    _components_header_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_15__["NavBarComponent"],
                    _components_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                    _components_body_main_search_main_search_component__WEBPACK_IMPORTED_MODULE_17__["MainSearchComponent"],
                    _components_body_stock_detail_stock_detail_component__WEBPACK_IMPORTED_MODULE_18__["StockDetailComponent"],
                    _components_body_summary_summary_component__WEBPACK_IMPORTED_MODULE_19__["SummaryComponent"],
                    _components_body_news_news_component__WEBPACK_IMPORTED_MODULE_20__["NewsComponent"],
                    _components_news_modal_content_news_modal_content_component__WEBPACK_IMPORTED_MODULE_21__["NewsModalContentComponent"],
                    _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_22__["WatchlistComponent"],
                    _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_23__["PortfolioComponent"],
                    _components_buy_modal_buy_modal_component__WEBPACK_IMPORTED_MODULE_24__["BuyModalComponent"],
                    _components_sell_modal_sell_modal_component__WEBPACK_IMPORTED_MODULE_25__["SellModalComponent"],
                    _components_buy_modal_portfolio_buy_modal_portfolio_component__WEBPACK_IMPORTED_MODULE_26__["BuyModalPortfolioComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    highcharts_angular__WEBPACK_IMPORTED_MODULE_11__["HighchartsChartModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                    angular2_flash_messages__WEBPACK_IMPORTED_MODULE_12__["FlashMessagesModule"].forRoot()
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cX0s":
/*!****************************************************************!*\
  !*** ./src/app/components/header/nav-bar/nav-bar.component.ts ***!
  \****************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");





function NavBarComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Portfolio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Portfolio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavBarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 14, vars: 6, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "navbar-custom"], [1, "navbar-brand", "mb-0", "h1"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "navbar-nav"], [1, "nav-item"], [4, "ngIf"], ["href", "/", 1, "nav-link", "focus-style"], ["href", "/", 1, "nav-link"], ["href", "/watchlist", 1, "nav-link", "focus-style"], ["href", "/watchlist", 1, "nav-link"], ["href", "/portfolio", 1, "nav-link", "focus-style"], ["href", "/portfolio", 1, "nav-link"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Stock Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavBarComponent_div_6_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavBarComponent_div_7_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavBarComponent_div_9_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavBarComponent_div_10_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavBarComponent_div_12_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NavBarComponent_div_13_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url === "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url != "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url === "/watchlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url != "/watchlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url === "/portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url != "/portfolio");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["nav[_ngcontent-%COMP%] {\n  background-color: #6f4ffb;\n  height: 8vh;\n}\n\n.navbar-custom[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.712);\n  margin-right: 15px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.navbar-custom[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n\n.focus-style[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  border-radius: 12px !important;\n  border: 2px solid white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsa0NBQWtDO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmY0ZmZiO1xuICBoZWlnaHQ6IDh2aDtcbn1cblxuLm5hdmJhci1jdXN0b20gLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MTIpO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLm5hdmJhci1jdXN0b20gLm5hdi1pdGVtIC5uYXYtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZm9jdXMtc3R5bGUge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "kBmi":
/*!*************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.ts ***!
  \*************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _buy_modal_portfolio_buy_modal_portfolio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buy-modal-portfolio/buy-modal-portfolio.component */ "FX67");
/* harmony import */ var _sell_modal_sell_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sell-modal/sell-modal.component */ "BGhG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");









function PortfolioComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PortfolioComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Currently you don't have any stock. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PortfolioComponent_div_5_div_1_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.change.toFixed(2));
} }
function PortfolioComponent_div_5_div_1_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.change.toFixed(2));
} }
function PortfolioComponent_div_5_div_1_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.change.toFixed(2));
} }
function PortfolioComponent_div_5_div_1_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.curPrice.toFixed(2));
} }
function PortfolioComponent_div_5_div_1_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.curPrice.toFixed(2));
} }
function PortfolioComponent_div_5_div_1_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.curPrice.toFixed(2));
} }
function PortfolioComponent_div_5_div_1_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.marketValue.toFixed(1));
} }
function PortfolioComponent_div_5_div_1_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.marketValue.toFixed(1));
} }
function PortfolioComponent_div_5_div_1_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.marketValue.toFixed(1));
} }
function PortfolioComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioComponent_div_5_div_1_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const item_r4 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.goToDetail(item_r4.ticker); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Quantity:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Avg. Cost / Share:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Total Cost:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Change:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, PortfolioComponent_div_5_div_1_div_28_Template, 5, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, PortfolioComponent_div_5_div_1_div_29_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, PortfolioComponent_div_5_div_1_div_30_Template, 5, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Current Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, PortfolioComponent_div_5_div_1_span_34_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, PortfolioComponent_div_5_div_1_span_35_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, PortfolioComponent_div_5_div_1_span_36_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Market Value:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, PortfolioComponent_div_5_div_1_span_40_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, PortfolioComponent_div_5_div_1_span_41_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, PortfolioComponent_div_5_div_1_span_42_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioComponent_div_5_div_1_Template_button_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const item_r4 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.onBuy(item_r4.ticker, item_r4.name, item_r4.curPrice); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioComponent_div_5_div_1_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const item_r4 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.onSell(item_r4.ticker, item_r4.name, item_r4.curPrice, item_r4.quantity); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Sell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.ticker);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.avgPrice.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.totalCost.toFixed(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.change < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.change == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.change > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.change < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.change == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.change > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.change < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.change == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.change > 0);
} }
function PortfolioComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PortfolioComponent_div_5_div_1_Template, 48, 14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.portfolioList);
} }
class PortfolioComponent {
    constructor(router, modalService, userService) {
        this.router = router;
        this.modalService = modalService;
        this.userService = userService;
        this.goToDetail = (ticker) => {
            this.router.navigate([`/details/${ticker}`]);
        };
        this.onBuy = (ticker, name, curPrice) => {
            const modalRef = this.modalService.open(_buy_modal_portfolio_buy_modal_portfolio_component__WEBPACK_IMPORTED_MODULE_2__["BuyModalPortfolioComponent"]);
            modalRef.componentInstance.ticker = ticker;
            modalRef.componentInstance.name = name;
            modalRef.componentInstance.quantity = 0;
            modalRef.componentInstance.curPrice = curPrice;
            // Finish buying
            modalRef.componentInstance.parentUpdatePortfolio.subscribe(_ => {
                let tmpPortfolioList = JSON.parse(window.localStorage.getItem('portfolio'));
                let promisesArray = [];
                tmpPortfolioList.forEach(item => {
                    const call = this.userService.getStockPrices(item.ticker);
                    promisesArray.push(call);
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(promisesArray).subscribe(resultArray => {
                    for (let i = 0; i < resultArray.length; i++) {
                        let prices = resultArray[i][0];
                        tmpPortfolioList[i].curPrice = prices.last;
                        tmpPortfolioList[i].change = tmpPortfolioList[i].curPrice - tmpPortfolioList[i].avgPrice;
                        tmpPortfolioList[i].marketValue = tmpPortfolioList[i].curPrice * tmpPortfolioList[i].quantity;
                    }
                    this.portfolioList = tmpPortfolioList.sort((a, b) => (a.ticker > b.ticker) ? 1 : ((b.ticker > a.ticker) ? -1 : 0));
                    window.localStorage.setItem('portfolio', JSON.stringify(this.portfolioList));
                });
            });
        };
        this.onSell = (ticker, name, curPrice, quantity) => {
            const modalRef = this.modalService.open(_sell_modal_sell_modal_component__WEBPACK_IMPORTED_MODULE_3__["SellModalComponent"]);
            modalRef.componentInstance.ticker = ticker;
            modalRef.componentInstance.name = name;
            modalRef.componentInstance.curQuantity = quantity;
            modalRef.componentInstance.curPrice = curPrice;
            modalRef.componentInstance.sellQuantity = 0;
            // Finish selling
            modalRef.componentInstance.parentUpdatePortfolio.subscribe(_ => {
                let tmpPortfolioList = JSON.parse(window.localStorage.getItem('portfolio'));
                let promisesArray = [];
                tmpPortfolioList.forEach(item => {
                    const call = this.userService.getStockPrices(item.ticker);
                    promisesArray.push(call);
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(promisesArray).subscribe(resultArray => {
                    for (let i = 0; i < resultArray.length; i++) {
                        let prices = resultArray[i][0];
                        tmpPortfolioList[i].curPrice = prices.last;
                        tmpPortfolioList[i].change = tmpPortfolioList[i].curPrice - tmpPortfolioList[i].avgPrice;
                        tmpPortfolioList[i].marketValue = tmpPortfolioList[i].curPrice * tmpPortfolioList[i].quantity;
                    }
                    tmpPortfolioList = tmpPortfolioList.filter(item => item.quantity != 0);
                    this.portfolioList = tmpPortfolioList.sort((a, b) => (a.ticker > b.ticker) ? 1 : ((b.ticker > a.ticker) ? -1 : 0));
                    window.localStorage.setItem('portfolio', JSON.stringify(this.portfolioList));
                });
            });
        };
    }
    ngOnInit() {
        this.loading = true;
        let tmpPortfolioList = JSON.parse(window.localStorage.getItem('portfolio'));
        if (!tmpPortfolioList || tmpPortfolioList.length === 0) {
            this.portfolioList = [];
            this.loading = false;
        }
        else {
            let promisesArray = [];
            tmpPortfolioList.forEach(item => {
                const call = this.userService.getStockPrices(item.ticker);
                promisesArray.push(call);
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(promisesArray).subscribe(resultArray => {
                for (let i = 0; i < resultArray.length; i++) {
                    let prices = resultArray[i][0];
                    tmpPortfolioList[i].curPrice = prices.last;
                    tmpPortfolioList[i].change = tmpPortfolioList[i].curPrice - tmpPortfolioList[i].avgPrice;
                    tmpPortfolioList[i].marketValue = tmpPortfolioList[i].curPrice * tmpPortfolioList[i].quantity;
                }
                tmpPortfolioList = tmpPortfolioList.filter(item => item.quantity != 0);
                this.portfolioList = tmpPortfolioList.sort((a, b) => (a.ticker > b.ticker) ? 1 : ((b.ticker > a.ticker) ? -1 : 0));
                this.loading = false;
                window.localStorage.setItem('portfolio', JSON.stringify(this.portfolioList));
            });
        }
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"])); };
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], decls: 6, vars: 3, consts: [[1, "container"], ["class", "d-flex justify-content-center", 4, "ngIf"], ["class", "alarm alert alert-warning d-flex justify-content-center", 4, "ngIf"], ["class", "item-container", 4, "ngIf"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border", "spinner"], [1, "sr-only"], [1, "alarm", "alert", "alert-warning", "d-flex", "justify-content-center"], [1, "item-container"], [4, "ngFor", "ngForOf"], [1, "single-item"], [1, "ticker-container", 3, "click"], [1, "ticker-name"], [1, "company-name"], [1, "info-container"], [1, "col", "fst"], [1, "row"], [1, "col", "snd"], [4, "ngIf"], ["class", "decrease", 4, "ngIf"], ["class", "no-change", 4, "ngIf"], ["class", "increase", 4, "ngIf"], [1, "footer"], ["type", "button", 1, "btn", "blue", 3, "disabled", "click"], ["type", "button", 1, "btn", "red", 3, "disabled", "click"], [1, "fa", "fa-caret-down", "down-arrow"], [1, "decrease"], [1, "no-change"], [1, "fa", "fa-caret-up", "up-arrow"], [1, "increase"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PortfolioComponent_div_3_Template, 4, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PortfolioComponent_div_4_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PortfolioComponent_div_5_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && (!ctx.portfolioList || ctx.portfolioList.length === 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.portfolioList.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 65%;\n  min-height: 100vh;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-top: 36px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  color: #6f4ffb;\n  margin-top: 35px;\n  width: 3rem;\n  height: 3rem;\n}\n\n.alarm[_ngcontent-%COMP%] {\n  margin-top: 36px;\n}\n\n.item-container[_ngcontent-%COMP%] {\n  margin-top: 36px;\n}\n\n.single-item[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.ticker-container[_ngcontent-%COMP%] {\n  padding: 1px;\n  padding-top: 8px;\n  cursor: pointer;\n  display: flex;\n  justify-content: left;\n  background-color: rgb(243, 243, 243);\n  border: 1px solid rgb(184, 182, 182);\n}\n\n.ticker-name[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n\n.company-name[_ngcontent-%COMP%] {\n  color: grey;\n  font-size: 1.3em;\n  margin-left: 8px;\n}\n\n.info-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid rgb(184, 182, 182);\n  border-top: none;\n  border-bottom: none;\n  font-family: Courier;\n  font-size: 1.2em;\n}\n\n.col[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.no-change[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.decrease[_ngcontent-%COMP%], .down-arrow[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.increase[_ngcontent-%COMP%], .up-arrow[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.up-arrow[_ngcontent-%COMP%], .down-arrow[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  background-color: rgb(243, 243, 243);\n  padding: 10px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  border: 1px solid rgb(184, 182, 182);\n}\n\n.blue[_ngcontent-%COMP%] {\n  background-color: rgb(17, 126, 189);\n  border-color: rgb(17, 126, 189);\n  margin-right: 15px;\n  color: white;\n}\n\n.red[_ngcontent-%COMP%] {\n  background-color: rgb(241, 33, 33);\n  border-color: rgb(241, 33, 33);\n  margin-right: 10px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixvQ0FBb0M7RUFDcEMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztFQUVFLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDY1JTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbmgxIHtcbiAgbWFyZ2luLXRvcDogMzZweDtcbn1cblxuLnNwaW5uZXIge1xuICBjb2xvcjogIzZmNGZmYjtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbn1cblxuLmFsYXJtIHtcbiAgbWFyZ2luLXRvcDogMzZweDtcbn1cblxuLml0ZW0tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMzZweDtcbn1cblxuLnNpbmdsZS1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRpY2tlci1jb250YWluZXIge1xuICBwYWRkaW5nOiAxcHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyNDMsIDI0Myk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODQsIDE4MiwgMTgyKTtcbn1cblxuLnRpY2tlci1uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG5cbi5jb21wYW55LW5hbWUge1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmluZm8tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTg0LCAxODIsIDE4Mik7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBDb3VyaWVyO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4uY29sIHtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubm8tY2hhbmdlIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZGVjcmVhc2UsXG4uZG93bi1hcnJvdyB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5pbmNyZWFzZSxcbi51cC1hcnJvdyB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnVwLWFycm93LFxuLmRvd24tYXJyb3cge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDI0MywgMjQzKTtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4NCwgMTgyLCAxODIpO1xufVxuXG4uYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNywgMTI2LCAxODkpO1xuICBib3JkZXItY29sb3I6IHJnYigxNywgMTI2LCAxODkpO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDMzLCAzMyk7XG4gIGJvcmRlci1jb2xvcjogcmdiKDI0MSwgMzMsIDMzKTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio',
                templateUrl: './portfolio.component.html',
                styleUrls: ['./portfolio.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }]; }, null); })();


/***/ }),

/***/ "o89s":
/*!**************************************************************!*\
  !*** ./src/app/components/body/summary/summary.component.ts ***!
  \**************************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts/highstock */ "5ZEx");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts-angular */ "JUyF");





function SummaryComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Mid Price: ", ctx_r0.prices.mid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ask Price: ", ctx_r0.prices.askPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ask Size: ", ctx_r0.prices.askSize, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Bid Price: ", ctx_r0.prices.bidPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Bid Size: ", ctx_r0.prices.bidSize, "");
} }
function SummaryComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cannot display chart, no data found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SummaryComponent_highcharts_chart_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "highcharts-chart", 11);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx_r2.Highcharts)("constructorType", "stockChart")("options", ctx_r2.chartOptions);
} }
class SummaryComponent {
    constructor() {
        this.Highcharts = highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__;
    }
    ngOnInit() {
        let prices = [];
        this.chartData.map(entry => {
            const year = parseInt(entry.date.slice(0, 4));
            const month = parseInt(entry.date.slice(5, 7));
            const day = parseInt(entry.date.slice(8, 10));
            const hour = parseInt(entry.date.slice(11, 13));
            const minute = parseInt(entry.date.slice(14, 16));
            const date = Date.UTC(year, month - 1, day, hour - 8, minute);
            prices.push([date, entry.close]);
        });
        let chartColor;
        if (this.change > 0) {
            chartColor = 'green';
        }
        else if (this.change === 0) {
            chartColor = 'black';
        }
        else {
            chartColor = 'red';
        }
        this.chartOptions = {
            title: {
                text: this.stockInfo.ticker.toUpperCase()
            },
            xAxis: {
                type: 'datetime'
            },
            rangeSelector: {
                enabled: false
            },
            series: [
                {
                    type: 'line',
                    name: this.stockInfo.ticker.toUpperCase(),
                    pointInterval: 24 * 3600 * 1000,
                    data: prices
                }
            ],
            colors: [
                chartColor
            ]
        };
    }
}
SummaryComponent.ɵfac = function SummaryComponent_Factory(t) { return new (t || SummaryComponent)(); };
SummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SummaryComponent, selectors: [["app-summary"]], inputs: { stockInfo: "stockInfo", prices: "prices", chartError: "chartError", chartData: "chartData", marketClose: "marketClose", change: "change" }, decls: 30, vars: 10, consts: [[1, "container"], [1, "desc-container"], [1, "stats-container"], [1, "fst-col"], ["class", "snd-col", 4, "ngIf"], [1, "description"], [1, "chart"], ["class", "error alert alert-danger d-flex justify-content-center", 4, "ngIf"], [3, "Highcharts", "constructorType", "options", 4, "ngIf"], [1, "snd-col"], [1, "error", "alert", "alert-danger", "d-flex", "justify-content-center"], [3, "Highcharts", "constructorType", "options"]], template: function SummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SummaryComponent_div_19_Template, 16, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Company's Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SummaryComponent_div_28_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SummaryComponent_highcharts_chart_29_Template, 1, 3, "highcharts-chart", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("High Price: ", ctx.prices.high, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Low Price: ", ctx.prices.low, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Open Price: ", ctx.prices.open, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Prev. Close: ", ctx.prices.prevClose, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Volume: ", ctx.prices.volume, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.marketClose);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Start Date: ", ctx.stockInfo.startDate, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.stockInfo.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chartError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.chartError);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], highcharts_angular__WEBPACK_IMPORTED_MODULE_3__["HighchartsChartComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  font-size: 0.9em;\n}\n\n.desc-container[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n.stats-container[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 0.9em;\n}\n\n.fst-col[_ngcontent-%COMP%] {\n  margin-left: 62px;\n}\n\n.snd-col[_ngcontent-%COMP%] {\n  margin-left: 100px;\n}\n\n.description[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.description[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.chart[_ngcontent-%COMP%] {\n  margin-left: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib2R5L3N1bW1hcnkvc3VtbWFyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ib2R5L3N1bW1hcnkvc3VtbWFyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuLmRlc2MtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLnN0YXRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi5mc3QtY29sIHtcbiAgbWFyZ2luLWxlZnQ6IDYycHg7XG59XG5cbi5zbmQtY29sIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uZGVzY3JpcHRpb24gaDUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jaGFydCB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-summary',
                templateUrl: './summary.component.html',
                styleUrls: ['./summary.component.css']
            }]
    }], function () { return []; }, { stockInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], prices: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], chartError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], chartData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], marketClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "pubf":
/*!************************************************************************!*\
  !*** ./src/app/components/body/stock-detail/stock-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: StockDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockDetailComponent", function() { return StockDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts/highstock */ "5ZEx");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _news_modal_content_news_modal_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../news-modal-content/news-modal-content.component */ "YeaI");
/* harmony import */ var _buy_modal_buy_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../buy-modal/buy-modal.component */ "F/Y2");
/* harmony import */ var highcharts_indicators_indicators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts/indicators/indicators */ "HuDP");
/* harmony import */ var highcharts_indicators_indicators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highcharts_indicators_indicators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var highcharts_indicators_volume_by_price__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highcharts/indicators/volume-by-price */ "5DRE");
/* harmony import */ var highcharts_indicators_volume_by_price__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(highcharts_indicators_volume_by_price__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/user.service */ "qfBg");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-flash-messages */ "bvlS");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../summary/summary.component */ "o89s");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../news/news.component */ "rbjG");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! highcharts-angular */ "JUyF");

















function StockDetailComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StockDetailComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No results found. Please enter valid Ticker ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StockDetailComponent_div_5_i_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StockDetailComponent_div_5_i_6_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.toggleStar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StockDetailComponent_div_5_i_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StockDetailComponent_div_5_i_7_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.toggleStar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StockDetailComponent_div_5_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" No current price found for ", ctx_r7.ticker, " ");
} }
function StockDetailComponent_div_5_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.lastPrice.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.change.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r8.changePercent.toFixed(2), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.curTime);
} }
function StockDetailComponent_div_5_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.lastPrice.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.change.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r9.changePercent.toFixed(2), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.curTime);
} }
function StockDetailComponent_div_5_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.lastPrice.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.change.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r10.changePercent.toFixed(2), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.curTime);
} }
function StockDetailComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StockDetailComponent_div_5_i_6_Template, 1, 0, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, StockDetailComponent_div_5_i_7_Template, 1, 0, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, StockDetailComponent_div_5_div_12_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, StockDetailComponent_div_5_div_13_Template, 15, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, StockDetailComponent_div_5_div_14_Template, 15, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, StockDetailComponent_div_5_div_15_Template, 12, 4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.ticker.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.star);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.star);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.stockInfo.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.stockInfo.exchangeCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.pricesError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.pricesError && ctx_r2.change > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.pricesError && ctx_r2.change < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.pricesError && ctx_r2.change === 0);
} }
function StockDetailComponent_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Market is Open");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StockDetailComponent_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Market Closed on ", ctx_r16.closeTime, "");
} }
function StockDetailComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StockDetailComponent_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.openBuyModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StockDetailComponent_div_6_div_3_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StockDetailComponent_div_6_div_4_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.marketClose);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.marketClose);
} }
function StockDetailComponent_mat_tab_group_7_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No news found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StockDetailComponent_mat_tab_group_7_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-news", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function StockDetailComponent_mat_tab_group_7_div_5_div_1_Template_app_news_clicked_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r24.openNewsContentModal($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const new_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("news", new_r23);
} }
function StockDetailComponent_mat_tab_group_7_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StockDetailComponent_mat_tab_group_7_div_5_div_1_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r20.news);
} }
function StockDetailComponent_mat_tab_group_7_ng_template_7_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cannot display chart, no historical data found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StockDetailComponent_mat_tab_group_7_ng_template_7_highcharts_chart_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "highcharts-chart", 49);
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx_r27.Highcharts)("constructorType", "stockChart")("options", ctx_r27.twoYearsChartsOptions);
} }
function StockDetailComponent_mat_tab_group_7_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StockDetailComponent_mat_tab_group_7_ng_template_7_div_0_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StockDetailComponent_mat_tab_group_7_ng_template_7_highcharts_chart_1_Template, 1, 3, "highcharts-chart", 48);
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.twoYearsChartError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r21.twoYearsChartError);
} }
function StockDetailComponent_mat_tab_group_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-summary", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StockDetailComponent_mat_tab_group_7_div_4_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StockDetailComponent_mat_tab_group_7_div_5_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-tab", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, StockDetailComponent_mat_tab_group_7_ng_template_7_Template, 2, 2, "ng-template", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stockInfo", ctx_r4.stockInfo)("prices", ctx_r4.prices)("marketClose", ctx_r4.marketClose)("chartData", ctx_r4.chartData)("chartError", ctx_r4.chartError)("change", ctx_r4.change);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.newsError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.newsError);
} }
highcharts_indicators_indicators__WEBPACK_IMPORTED_MODULE_5___default()(highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__);
highcharts_indicators_volume_by_price__WEBPACK_IMPORTED_MODULE_6___default()(highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__);
class StockDetailComponent {
    constructor(route, userService, modalService, _flashMessagesService) {
        this.route = route;
        this.userService = userService;
        this.modalService = modalService;
        this._flashMessagesService = _flashMessagesService;
        this.Highcharts = highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__;
        this.periodicUpdate = () => {
            if (!this.marketClose) {
                this.userService.getStockPrices(this.ticker).subscribe(res => {
                    this.prices = res[0];
                    this.fillMarketStatus();
                    this.calculateChange();
                    this.userService.getChartData(this.ticker, this.curTime.slice(0, 10)).subscribe(res => {
                        this.chartData = res;
                    });
                });
            }
        };
        this.loadContent = () => {
            this.loading = true;
            this.error = false;
            // Fetch watchlist
            const curWatchlist = JSON.parse(window.localStorage.getItem('watchlist'));
            this.star = false;
            if (curWatchlist) {
                for (let i = 0; i < curWatchlist.length; i++) {
                    if (curWatchlist[i].ticker === this.ticker) {
                        this.star = true;
                        break;
                    }
                }
            }
            // Get ticker, company name, ...
            const call1 = this.userService.getStockInfo(this.ticker);
            // Get prices...
            const call2 = this.userService.getStockPrices(this.ticker);
            // Get News info
            const call4 = this.userService.getNews(this.ticker);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([call1, call2])
                .subscribe(results => {
                this.stockInfo = results[0];
                this.prices = results[1][0];
                console.log('hi', this.prices);
                if (this.prices.prevClose === null) {
                    this.pricesError = true;
                }
                this.curTime = this.formatTime(new Date());
                const twoYearAgo = (parseInt(this.curTime.slice(0, 4)) - 2).toString() + this.curTime.slice(4);
                this.fillMarketStatus();
                this.calculateChange();
                // Get chart info
                const call3 = this.marketClose ? this.userService.getChartData(this.ticker, this.closeTime.slice(0, 10)) : this.userService.getChartData(this.ticker, this.curTime.slice(0, 10));
                // Get 2 years chart info
                const call5 = this.userService.getTwoYearsChartsData(this.ticker, twoYearAgo);
                Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([call3, call4, call5])
                    .subscribe(results => {
                    this.chartData = results[0];
                    if (this.chartData.length === 0) {
                        this.chartError = true;
                    }
                    this.news = results[1];
                    if (this.news.length === 0) {
                        this.newsError = true;
                    }
                    const twoYearsChartsRawData = results[2];
                    if (twoYearsChartsRawData.length === 0) {
                        this.twoYearsChartError = true;
                    }
                    else {
                        this.fillInOptions(twoYearsChartsRawData);
                    }
                    this.loading = false;
                });
            }, err => {
                if (err.status === 404) {
                    this.error = true;
                    this.loading = false;
                }
            });
        };
        this.toggleStar = () => {
            if (this.star) {
                this._flashMessagesService.show(`${this.ticker} removed from Watchlist.`, { cssClass: 'alert-danger', timeout: 3000, showCloseBtn: true });
            }
            else {
                this._flashMessagesService.show(`${this.ticker} added to Watchlist.`, { cssClass: 'alert-success', timeout: 3000, showCloseBtn: true });
            }
            this.star = !this.star;
        };
        this.fillMarketStatus = () => {
            // Market close or not
            if (!this.prices.bidPrice) {
                this.marketClose = true;
                // Convert to local time
                const closeDate = new Date(this.prices.timestamp);
                this.closeTime = this.formatTime(closeDate);
            }
            else {
                this.marketClose = false;
                if (!this.prices.mid) {
                    this.prices.mid = '-';
                }
            }
        };
        this.calculateChange = () => {
            this.lastPrice = this.prices.last;
            this.change = this.prices.last - this.prices.prevClose;
            this.changePercent = (this.prices.last - this.prices.prevClose) / this.prices.prevClose * 100;
        };
        this.formatTime = (date) => {
            return date.getFullYear() +
                '-' +
                (date.getMonth() > 8
                    ? date.getMonth() + 1
                    : '0' + (date.getMonth() + 1)) +
                '-' +
                (date.getDate() > 9
                    ? date.getDate()
                    : '0' + date.getDate()) +
                ' ' +
                (date.getHours() < 10
                    ? '0'
                    : '') + date.getHours() +
                ':' +
                (date.getMinutes() < 10
                    ? '0'
                    : '') + date.getMinutes() +
                ':' +
                (date.getSeconds() < 10
                    ? '0'
                    : '') + date.getSeconds();
        };
        this.openNewsContentModal = (singleNews) => {
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            const publishedDate = new Date(singleNews.publishedAt);
            const formattedDate = `${monthNames[publishedDate.getMonth()]} ${publishedDate.getDate()}, ${publishedDate.getFullYear()}`;
            const modalRef = this.modalService.open(_news_modal_content_news_modal_content_component__WEBPACK_IMPORTED_MODULE_3__["NewsModalContentComponent"]);
            modalRef.componentInstance.source = singleNews.source.name;
            modalRef.componentInstance.publishedAt = formattedDate;
            modalRef.componentInstance.title = singleNews.title;
            modalRef.componentInstance.description = singleNews.description;
            modalRef.componentInstance.url = singleNews.url;
        };
        this.openBuyModal = () => {
            const modalRef = this.modalService.open(_buy_modal_buy_modal_component__WEBPACK_IMPORTED_MODULE_4__["BuyModalComponent"]);
            modalRef.componentInstance.ticker = this.ticker;
            modalRef.componentInstance.name = this.stockInfo.name;
            modalRef.componentInstance.quantity = 0;
            modalRef.componentInstance.curPrice = this.lastPrice;
        };
        this.fillInOptions = (twoYearsChartsRawData) => {
            let prices = [];
            let volumes = [];
            let candleSticks = [];
            twoYearsChartsRawData.map(entry => {
                const year = parseInt(entry.date.slice(0, 4));
                const month = parseInt(entry.date.slice(5, 7));
                const day = parseInt(entry.date.slice(8, 10));
                const hour = parseInt(entry.date.slice(11, 13));
                const minute = parseInt(entry.date.slice(14, 16));
                const date = Date.UTC(year, month - 1, day, hour - 8, minute);
                prices.push([date, entry.close]);
                volumes.push([date, entry.volume]);
                candleSticks.push([date, entry.open, entry.high, entry.low, entry.close]);
            });
            // Fill in 2 years charts options
            this.twoYearsChartsOptions = {
                chart: {
                    height: 680
                },
                rangeSelector: {
                    selected: 2
                },
                title: {
                    text: this.ticker.toUpperCase() + ' Historical'
                },
                subtitle: {
                    text: 'With SMA and Volume by Price technical indicators'
                },
                xAxis: {
                    type: 'datetime'
                },
                yAxis: [
                    {
                        startOnTick: false,
                        endOnTick: false,
                        labels: {
                            align: 'right',
                            x: -3
                        },
                        title: {
                            text: 'OHLC'
                        },
                        height: '60%',
                        lineWidth: 2,
                        resize: {
                            enabled: true
                        }
                    },
                    {
                        labels: {
                            align: 'right',
                            x: -3
                        },
                        title: {
                            text: 'Volume'
                        },
                        top: '65%',
                        height: '35%',
                        offset: 0,
                        lineWidth: 2
                    }
                ],
                tooltip: {
                    split: true
                },
                series: [
                    {
                        type: 'candlestick',
                        name: this.ticker.toUpperCase(),
                        id: 'ticker',
                        zIndex: 2,
                        data: candleSticks,
                        yAxis: 0
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        id: 'volume',
                        data: volumes,
                        yAxis: 1
                    },
                    {
                        type: 'vbp',
                        linkedTo: 'ticker',
                        params: {
                            volumeSeriesID: 'volume'
                        },
                        dataLabels: {
                            enabled: false
                        },
                        zoneLines: {
                            enabled: false
                        }
                    },
                    {
                        type: 'sma',
                        linkedTo: 'ticker',
                        zIndex: 1,
                        marker: {
                            enabled: false
                        }
                    }
                ]
            };
        };
        this.route.params.subscribe(params => this.ticker = params.ticker.toUpperCase());
    }
    ngOnInit() {
        this.loadContent();
        const source = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(15000);
        this.subscription = source.subscribe(_ => this.periodicUpdate());
    }
    ngOnDestroy() {
        this.subscription && this.subscription.unsubscribe();
    }
    updateLocalStorage() {
        let found = false;
        let curWatchlist = JSON.parse(window.localStorage.getItem('watchlist'));
        if (curWatchlist) {
            for (let i = 0; i < curWatchlist.length; i++) {
                if (curWatchlist[i].ticker === this.ticker) {
                    found = true;
                    break;
                }
            }
        }
        else {
            curWatchlist = [];
        }
        if (this.star) {
            if (!found) {
                curWatchlist.push({
                    ticker: this.ticker,
                    name: this.stockInfo.name,
                    lastPrice: this.lastPrice,
                    change: this.change,
                    changePercent: this.changePercent
                });
                window.localStorage.setItem('watchlist', JSON.stringify(curWatchlist));
            }
        }
        else {
            if (found) {
                const newWatchList = curWatchlist.filter(item => (item.ticker !== this.ticker));
                window.localStorage.setItem('watchlist', JSON.stringify(newWatchList));
            }
        }
    }
}
StockDetailComponent.ɵfac = function StockDetailComponent_Factory(t) { return new (t || StockDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__["FlashMessagesService"])); };
StockDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StockDetailComponent, selectors: [["app-stock-detail"]], hostBindings: function StockDetailComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeunload", function StockDetailComponent_beforeunload_HostBindingHandler() { return ctx.updateLocalStorage(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 8, vars: 5, consts: [[1, "container", 3, "beforeunload"], [1, "flash"], ["class", "d-flex justify-content-center", 4, "ngIf"], ["class", "error alert alert-danger d-flex justify-content-center", 4, "ngIf"], ["class", "info-container", 4, "ngIf"], [4, "ngIf"], ["mat-stretch-tabs", "", "class", "tab-container", 4, "ngIf"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border", "spinner"], [1, "sr-only"], [1, "error", "alert", "alert-danger", "d-flex", "justify-content-center"], [1, "info-container"], [1, "basic-info"], [1, "star-wrapper"], [1, "ticker"], ["class", "fa fa-star-o star", 3, "click", 4, "ngIf"], ["class", "fa fa-star star full-star", 3, "click", 4, "ngIf"], [1, "company-name"], [1, "code"], ["class", "price-info price-info-green", 4, "ngIf"], ["class", "price-info price-info-red", 4, "ngIf"], ["class", "price-info price-info-black", 4, "ngIf"], [1, "fa", "fa-star-o", "star", 3, "click"], [1, "fa", "fa-star", "star", "full-star", 3, "click"], [1, "price-info", "price-info-green"], [1, "last-price"], [1, "change-wrapper"], [1, "fa", "fa-caret-up"], [1, "cur-time"], [1, "price-info", "price-info-red"], [1, "fa", "fa-caret-down"], [1, "price-info", "price-info-black"], ["type", "button", 1, "btn", "btn-success", "buy-button", 3, "click"], ["class", "market-status market-open", 4, "ngIf"], ["class", "market-status market-close", 4, "ngIf"], [1, "market-status", "market-open"], [1, "market-status", "market-close"], ["mat-stretch-tabs", "", 1, "tab-container"], ["label", "Summary", 1, "tab"], [3, "stockInfo", "prices", "marketClose", "chartData", "chartError", "change"], ["label", "Top News"], ["class", "row", 4, "ngIf"], ["label", "Charts"], ["matTabContent", ""], [1, "row"], ["col-2", "", "col-sm-2", "", "col-md-2", "", "col-lg-2", "", "class", "news-container", 4, "ngFor", "ngForOf"], ["col-2", "", "col-sm-2", "", "col-md-2", "", "col-lg-2", "", 1, "news-container"], [3, "news", "clicked"], ["class", "chart", 3, "Highcharts", "constructorType", "options", 4, "ngIf"], [1, "chart", 3, "Highcharts", "constructorType", "options"]], template: function StockDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeunload", function StockDetailComponent_Template_div_beforeunload_0_listener() { return ctx.updateLocalStorage(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "flash-messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StockDetailComponent_div_3_Template, 4, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StockDetailComponent_div_4_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StockDetailComponent_div_5_Template, 16, 9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StockDetailComponent_div_6_Template, 5, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, StockDetailComponent_mat_tab_group_7_Template, 8, 8, "mat-tab-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.error && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.error && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.error && !ctx.loading);
    } }, directives: [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__["FlashMessagesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTab"], _summary_summary_component__WEBPACK_IMPORTED_MODULE_13__["SummaryComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabContent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _news_news_component__WEBPACK_IMPORTED_MODULE_14__["NewsComponent"], highcharts_angular__WEBPACK_IMPORTED_MODULE_15__["HighchartsChartComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n\n.flash[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 20px 0;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  color: #6f4ffb;\n  margin-top: 35px;\n  width: 3rem;\n  height: 3rem;\n}\n\n.info-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.error[_ngcontent-%COMP%] {\n  top: 50px;\n}\n\n.ticker[_ngcontent-%COMP%], .last-price[_ngcontent-%COMP%] {\n  font-size: 39px;\n}\n\n.star[_ngcontent-%COMP%] {\n  font-size: x-large;\n  margin-left: 6px;\n  cursor: pointer;\n}\n\n.full-star[_ngcontent-%COMP%] {\n  color: yellow;\n}\n\n.company-name[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: rgb(100, 98, 98);\n  margin-top: -12px;\n}\n\n.change-wrapper[_ngcontent-%COMP%] {\n  font-size: 26px;\n  margin-top: -28px;\n}\n\n.code[_ngcontent-%COMP%] {\n  margin-top: -5px;\n  font-size: 13px;\n}\n\n.cur-time[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-top: 9px;\n  color: black !important;\n}\n\n.price-info[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.price-info-green[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.price-info-red[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.price-info-black[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.buy-button[_ngcontent-%COMP%] {\n  margin-top: -10px;\n}\n\n.market-status[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n  margin-top: 16px;\n}\n\n.market-open[_ngcontent-%COMP%] {\n  background-color: rgb(168, 241, 168);\n}\n\n.market-close[_ngcontent-%COMP%] {\n  background-color: rgb(241, 136, 136);\n}\n\n  .mat-tab-labels {\n  justify-content: space-between;\n}\n\n.tab-container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.news-container[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.chart[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-bottom: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib2R5L3N0b2NrLWRldGFpbC9zdG9jay1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JvZHkvc3RvY2stZGV0YWlsL3N0b2NrLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uZmxhc2gge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4uc3Bpbm5lciB7XG4gIGNvbG9yOiAjNmY0ZmZiO1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xufVxuXG4uaW5mby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5lcnJvciB7XG4gIHRvcDogNTBweDtcbn1cblxuLnRpY2tlcixcbi5sYXN0LXByaWNlIHtcbiAgZm9udC1zaXplOiAzOXB4O1xufVxuXG4uc3RhciB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZnVsbC1zdGFyIHtcbiAgY29sb3I6IHllbGxvdztcbn1cblxuLmNvbXBhbnktbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6IHJnYigxMDAsIDk4LCA5OCk7XG4gIG1hcmdpbi10b3A6IC0xMnB4O1xufVxuXG4uY2hhbmdlLXdyYXBwZXIge1xuICBmb250LXNpemU6IDI2cHg7XG4gIG1hcmdpbi10b3A6IC0yOHB4O1xufVxuXG4uY29kZSB7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmN1ci10aW1lIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiA5cHg7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4ucHJpY2UtaW5mbyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucHJpY2UtaW5mby1ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnByaWNlLWluZm8tcmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnByaWNlLWluZm8tYmxhY2sge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5idXktYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbi5tYXJrZXQtc3RhdHVzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLm1hcmtldC1vcGVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OCwgMjQxLCAxNjgpO1xufVxuXG4ubWFya2V0LWNsb3NlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMTM2LCAxMzYpO1xufVxuXG46Om5nLWRlZXAgLm1hdC10YWItbGFiZWxzIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udGFiLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5uZXdzLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5jaGFydCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StockDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stock-detail',
                templateUrl: './stock-detail.component.html',
                styleUrls: ['./stock-detail.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"] }, { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__["FlashMessagesService"] }]; }, { updateLocalStorage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:beforeunload']
        }] }); })();


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class UserService {
    constructor(http) {
        this.http = http;
        // For dev uncomment the following line and add ${this.backendURL} in front of every /api
        // backendURL: String = 'http://localhost:3080'
        this.backendURL = 'http://nodeapp-env.eba-kgbwbpmw.us-east-1.elasticbeanstalk.com/';
    }
    getAutoCompleteOptions(input) {
        if (input) {
            return this.http.get(`/api/options/${input}`);
        }
    }
    getStockInfo(ticker) {
        console.log(`user service, ticker is: ${ticker}`);
        return this.http.get(`/api/info/${ticker}`);
    }
    getStockPrices(ticker) {
        return this.http.get(`/api/prices/${ticker}`);
    }
    getChartData(ticker, start) {
        return this.http.get(`/api/charts/${ticker}/${start}`);
    }
    getTwoYearsChartsData(ticker, start) {
        return this.http.get(`/api/twoyearscharts/${ticker}/${start}`);
    }
    getNews(ticker) {
        return this.http.get(`/api/news/${ticker}`);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "rbjG":
/*!********************************************************!*\
  !*** ./src/app/components/body/news/news.component.ts ***!
  \********************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class NewsComponent {
    constructor() {
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClick = () => {
            this.clicked.emit(this.news);
        };
    }
    ngOnInit() {
    }
}
NewsComponent.ɵfac = function NewsComponent_Factory(t) { return new (t || NewsComponent)(); };
NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsComponent, selectors: [["app-news"]], inputs: { news: "news" }, outputs: { clicked: "clicked" }, decls: 4, vars: 2, consts: [[1, "container", 3, "click"], [3, "src"], [1, "desc"]], template: function NewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsComponent_Template_div_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.news.urlToImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.news.title);
    } }, styles: [".container[_ngcontent-%COMP%] {\n  height: 120px;\n  width: 460px;\n  background-color: rgb(228, 226, 226);\n  margin-bottom: 10px;\n  margin-left: 76px;\n  border-radius: 8px;\n  border: 1px solid rgb(179, 176, 176);\n  display: flex;\n  align-items: center;\n  flex: 0 0 50%;\n  font-size: small;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 110px;\n  margin: 10px;\n  margin-left: 2px;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib2R5L25ld3MvbmV3cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JvZHkvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgd2lkdGg6IDQ2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAyMjYsIDIyNik7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA3NnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNzksIDE3NiwgMTc2KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleDogMCAwIDUwJTtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogMTEwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news',
                templateUrl: './news.component.html',
                styleUrls: ['./news.component.css']
            }]
    }], function () { return []; }, { news: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _components_body_main_search_main_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/body/main-search/main-search.component */ "DJtH");
/* harmony import */ var _components_body_stock_detail_stock_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/body/stock-detail/stock-detail.component */ "pubf");
/* harmony import */ var _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/watchlist/watchlist.component */ "zcMl");
/* harmony import */ var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/portfolio/portfolio.component */ "kBmi");








const routes = [
    { path: '', component: _components_body_main_search_main_search_component__WEBPACK_IMPORTED_MODULE_2__["MainSearchComponent"] },
    { path: 'details/:ticker', component: _components_body_stock_detail_stock_detail_component__WEBPACK_IMPORTED_MODULE_3__["StockDetailComponent"] },
    { path: 'watchlist', component: _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_4__["WatchlistComponent"] },
    { path: 'portfolio', component: _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zcMl":
/*!*************************************************************!*\
  !*** ./src/app/components/watchlist/watchlist.component.ts ***!
  \*************************************************************/
/*! exports provided: WatchlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistComponent", function() { return WatchlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");






function WatchlistComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WatchlistComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Currently you don't have any stock in your watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WatchlistComponent_div_5_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WatchlistComponent_div_5_div_1_div_7_Template_span_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r8.onDelete(item_r4.ticker); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.lastPrice.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.change.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r4.changePercent.toFixed(2), "%");
} }
function WatchlistComponent_div_5_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WatchlistComponent_div_5_div_1_div_8_Template_span_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r12.onDelete(item_r4.ticker); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.lastPrice.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.change.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r4.changePercent.toFixed(2), "%");
} }
function WatchlistComponent_div_5_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WatchlistComponent_div_5_div_1_div_9_Template_span_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r16.onDelete(item_r4.ticker); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.lastPrice.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.change.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r4.changePercent.toFixed(2), "%");
} }
function WatchlistComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WatchlistComponent_div_5_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const item_r4 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.goToDetail(item_r4.ticker); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WatchlistComponent_div_5_div_1_div_7_Template, 17, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WatchlistComponent_div_5_div_1_div_8_Template, 17, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WatchlistComponent_div_5_div_1_div_9_Template, 17, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.ticker);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.change > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.change < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.change === 0);
} }
function WatchlistComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WatchlistComponent_div_5_div_1_Template, 10, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.watchlist);
} }
class WatchlistComponent {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
        this.onDelete = (ticker) => {
            let tmpWatchlist = JSON.parse(window.localStorage.getItem('watchlist'));
            tmpWatchlist = tmpWatchlist.filter(item => (item.ticker !== ticker));
            if (tmpWatchlist.length > 0) {
                let promisesArray = [];
                tmpWatchlist.forEach(item => {
                    const call = this.userService.getStockPrices(item.ticker);
                    promisesArray.push(call);
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(promisesArray).subscribe(resultArray => {
                    for (let i = 0; i < resultArray.length; i++) {
                        let prices = resultArray[i][0];
                        tmpWatchlist[i].lastPrice = prices.last;
                        tmpWatchlist[i].change = prices.last - prices.prevClose;
                        tmpWatchlist[i].changePercent = (prices.last - prices.prevClose) / prices.prevClose * 100;
                    }
                    this.watchlist = tmpWatchlist.sort((a, b) => (a.ticker > b.ticker) ? 1 : ((b.ticker > a.ticker) ? -1 : 0));
                    window.localStorage.setItem('watchlist', JSON.stringify(this.watchlist));
                });
            }
            else {
                this.watchlist = tmpWatchlist;
                window.localStorage.setItem('watchlist', JSON.stringify(this.watchlist));
            }
        };
        this.goToDetail = (ticker) => {
            this.router.navigate([`/details/${ticker}`]);
        };
    }
    ngOnInit() {
        this.loading = true;
        let tmpWatchlist = JSON.parse(window.localStorage.getItem('watchlist'));
        if (!tmpWatchlist || tmpWatchlist.length === 0) {
            this.watchlist = [];
            this.loading = false;
        }
        else {
            let promisesArray = [];
            tmpWatchlist.forEach(item => {
                const call = this.userService.getStockPrices(item.ticker);
                promisesArray.push(call);
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(promisesArray).subscribe(resultArray => {
                for (let i = 0; i < resultArray.length; i++) {
                    let prices = resultArray[i][0];
                    tmpWatchlist[i].lastPrice = prices.last;
                    tmpWatchlist[i].change = prices.last - prices.prevClose;
                    tmpWatchlist[i].changePercent = (prices.last - prices.prevClose) / prices.prevClose * 100;
                }
                this.watchlist = tmpWatchlist.sort((a, b) => (a.ticker > b.ticker) ? 1 : ((b.ticker > a.ticker) ? -1 : 0));
                this.loading = false;
                window.localStorage.setItem('watchlist', JSON.stringify(this.watchlist));
            });
        }
    }
}
WatchlistComponent.ɵfac = function WatchlistComponent_Factory(t) { return new (t || WatchlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
WatchlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WatchlistComponent, selectors: [["app-watchlist"]], decls: 6, vars: 3, consts: [[1, "container"], ["class", "d-flex justify-content-center", 4, "ngIf"], ["class", "alarm alert alert-warning d-flex justify-content-center", 4, "ngIf"], ["class", "item-container", 4, "ngIf"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border", "spinner"], [1, "sr-only"], [1, "alarm", "alert", "alert-warning", "d-flex", "justify-content-center"], [1, "item-container"], [4, "ngFor", "ngForOf"], [1, "single-item", 3, "click"], [1, "ticker-container"], [1, "company-name"], ["class", "price-info price-info-green", 4, "ngIf"], ["class", "price-info price-info-red", 4, "ngIf"], ["class", "price-info price-info-black", 4, "ngIf"], [1, "price-info", "price-info-green"], ["aria-hidden", "true", "id", "button-delete", 1, "close", 3, "click"], [1, "last-price"], [1, "change-wrapper"], [1, "fa", "fa-caret-up"], [1, "price-info", "price-info-red"], ["aria-hidden", "true", 1, "close", 3, "click"], [1, "fa", "fa-caret-down"], [1, "price-info", "price-info-black"]], template: function WatchlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Watchlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WatchlistComponent_div_3_Template, 4, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WatchlistComponent_div_4_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WatchlistComponent_div_5_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && (!ctx.watchlist || ctx.watchlist.length === 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.watchlist.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 75%;\n  min-height: 100vh;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-top: 36px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  color: #6f4ffb;\n  margin-top: 35px;\n  width: 3rem;\n  height: 3rem;\n}\n\n.alarm[_ngcontent-%COMP%] {\n  margin-top: 36px;\n}\n\n.item-container[_ngcontent-%COMP%] {\n  margin-top: 36px;\n}\n\n.ticker-container[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n\n.single-item[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  padding: 0 15px;\n  padding-bottom: 15px;\n  cursor: pointer;\n}\n\n.company-name[_ngcontent-%COMP%] {\n  color: grey;\n  font-size: 1.3em;\n}\n\n.price-info[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 1.3em;\n}\n\n.price-info-green[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.price-info-red[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.price-info-black[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.change-wrapper[_ngcontent-%COMP%] {\n  margin-top: 6px;\n}\n\n.close[_ngcontent-%COMP%] {\n  color: gray !important;\n  cursor: pointer;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93YXRjaGxpc3Qvd2F0Y2hsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2F0Y2hsaXN0L3dhdGNobGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA3NSU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5oMSB7XG4gIG1hcmdpbi10b3A6IDM2cHg7XG59XG5cbi5zcGlubmVyIHtcbiAgY29sb3I6ICM2ZjRmZmI7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDNyZW07XG59XG5cbi5hbGFybSB7XG4gIG1hcmdpbi10b3A6IDM2cHg7XG59XG5cbi5pdGVtLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDM2cHg7XG59XG5cbi50aWNrZXItY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLnNpbmdsZS1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29tcGFueS1uYW1lIHtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG59XG5cbi5wcmljZS1pbmZvIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG59XG5cbi5wcmljZS1pbmZvLWdyZWVuIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ucHJpY2UtaW5mby1yZWQge1xuICBjb2xvcjogcmVkO1xufVxuXG4ucHJpY2UtaW5mby1ibGFjayB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNoYW5nZS13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4uY2xvc2Uge1xuICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDE7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WatchlistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-watchlist',
                templateUrl: './watchlist.component.html',
                styleUrls: ['./watchlist.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map