"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var angular_highcharts_1 = require('angular-highcharts');
var DashboardComponent = (function () {
    function DashboardComponent(user) {
        this.user = user;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.init();
    };
    DashboardComponent.prototype.addPoint = function () {
        if (this.chart) {
            this.chart.addPoint(Math.floor(Math.random() * 10));
        }
        else {
            alert('init chart, first!');
        }
    };
    DashboardComponent.prototype.addSerie = function () {
        this.chart.addSerie({
            name: 'Line ' + Math.floor(Math.random() * 10),
            data: [
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10)
            ]
        });
    };
    DashboardComponent.prototype.removePoint = function () {
        this.chart.removePoint(this.chart.ref.series[0].data.length - 1);
    };
    DashboardComponent.prototype.removeSerie = function () {
        this.chart.removeSerie(this.chart.ref.series.length - 1);
    };
    DashboardComponent.prototype.init = function () {
        var chart = new angular_highcharts_1.Chart({
            chart: {
                type: 'line'
            },
            title: {
                text: 'Linechart'
            },
            credits: {
                enabled: false
            },
            series: [{
                    name: 'Line 1',
                    data: [1, 2, 3]
                }]
        });
        chart.addPoint(4);
        this.chart = chart;
        chart.addPoint(5);
        setTimeout(function () {
            chart.addPoint(6);
        }, 2000);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['../app.component.css', './dashboard.component.css']
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
