"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var CompaignsComponent = (function () {
    function CompaignsComponent(user) {
        this.user = user;
    }
    CompaignsComponent.prototype.ngOnInit = function () {
    };
    CompaignsComponent = __decorate([
        core_1.Component({
            selector: 'app-compaigns',
            templateUrl: './compaigns.component.html',
            styleUrls: ['../app.component.css', './compaigns.component.css']
        })
    ], CompaignsComponent);
    return CompaignsComponent;
}());
exports.CompaignsComponent = CompaignsComponent;
