"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
require('rxjs/add/operator/map');
var UserService = (function () {
    function UserService(router, http) {
        this.router = router;
        this.http = http;
        this.loggedIn = new BehaviorSubject_1.BehaviorSubject(false); // {1}
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    Object.defineProperty(UserService.prototype, "isLoggedIn", {
        get: function () {
            if (localStorage.getItem('currentUser')) {
                this.loggedIn = new BehaviorSubject_1.BehaviorSubject(true);
            }
            return this.loggedIn.asObservable(); // {2}
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.login = function (user) {
        if (user.userName !== '' && user.password != '') {
            localStorage.setItem('currentUser', JSON.stringify({ username: user.userName }));
            this.loggedIn.next(true);
            this.router.navigate(['/home']);
        }
    };
    UserService.prototype.logout = function () {
        this.token = null;
        localStorage.removeItem('currentUser');
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
