"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_bootstrap_module_1 = require('./app-bootstrap/app-bootstrap.module');
var app_component_1 = require('./app.component');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/common/http');
var app_routing_module_1 = require('./routing/app-routing.module');
var angular_highcharts_1 = require('angular-highcharts');
//import * as $ from 'jquery';
// Components
var main_menu_component_1 = require('./main-menu/main-menu.component');
var footer_component_1 = require('./footer/footer.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var library_component_1 = require('./library/library.component');
var user_component_1 = require('./user/user.component');
var opportunities_component_1 = require('./opportunities/opportunities.component');
var leads_component_1 = require('./leads/leads.component');
var tasks_component_1 = require('./tasks/tasks.component');
var files_component_1 = require('./files/files.component');
var accounts_component_1 = require('./accounts/accounts.component');
var contacts_component_1 = require('./contacts/contacts.component');
var compaigns_component_1 = require('./compaigns/compaigns.component');
var reports_component_1 = require('./reports/reports.component');
var groups_component_1 = require('./groups/groups.component');
var calendar_component_1 = require('./calendar/calendar.component');
var home_component_1 = require('./home/home.component');
var login_component_1 = require('./login/login.component');
var not_found_component_1 = require('./not-found/not-found.component');
//services
var user_service_1 = require('./_services/user.service');
//Guard
var auth_guard_1 = require('./_guards/auth.guard');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                main_menu_component_1.MainMenuComponent,
                footer_component_1.FooterComponent,
                dashboard_component_1.DashboardComponent,
                library_component_1.LibraryComponent,
                user_component_1.UserComponent,
                opportunities_component_1.OpportunitiesComponent,
                leads_component_1.LeadsComponent,
                tasks_component_1.TasksComponent,
                files_component_1.FilesComponent,
                accounts_component_1.AccountsComponent,
                contacts_component_1.ContactsComponent,
                compaigns_component_1.CompaignsComponent,
                reports_component_1.ReportsComponent,
                groups_component_1.GroupsComponent,
                calendar_component_1.CalendarComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                not_found_component_1.NotFoundComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_bootstrap_module_1.AppBootstrapModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                angular_highcharts_1.ChartModule
            ],
            providers: [
                user_service_1.UserService,
                auth_guard_1.AuthGuard
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
