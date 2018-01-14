"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var ngx_bootstrap_1 = require('ngx-bootstrap');
var AppBootstrapModule = (function () {
    function AppBootstrapModule() {
    }
    AppBootstrapModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ngx_bootstrap_1.BsDropdownModule.forRoot(),
                ngx_bootstrap_1.TooltipModule.forRoot(),
                ngx_bootstrap_1.ModalModule.forRoot()
            ],
            exports: [ngx_bootstrap_1.BsDropdownModule, ngx_bootstrap_1.TooltipModule, ngx_bootstrap_1.ModalModule]
        })
    ], AppBootstrapModule);
    return AppBootstrapModule;
}());
exports.AppBootstrapModule = AppBootstrapModule;
