"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var dashboard_component_1 = require('../dashboard/dashboard.component');
var library_component_1 = require('../library/library.component');
var user_component_1 = require('../user/user.component');
var opportunities_component_1 = require('../opportunities/opportunities.component');
var leads_component_1 = require('../leads/leads.component');
var tasks_component_1 = require('../tasks/tasks.component');
var files_component_1 = require('../files/files.component');
var accounts_component_1 = require('../accounts/accounts.component');
var contacts_component_1 = require('../contacts/contacts.component');
var compaigns_component_1 = require('../compaigns/compaigns.component');
var reports_component_1 = require('../reports/reports.component');
var groups_component_1 = require('../groups/groups.component');
var calendar_component_1 = require('../calendar/calendar.component');
var home_component_1 = require('../home/home.component');
var not_found_component_1 = require('../not-found/not-found.component');
var login_component_1 = require('../login/login.component');
//Guard
var auth_guard_1 = require('../_guards/auth.guard');
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'dashboards', component: dashboard_component_1.DashboardComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'library', component: library_component_1.LibraryComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'peopel', component: user_component_1.UserComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'opportunities', component: opportunities_component_1.OpportunitiesComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'leads', component: leads_component_1.LeadsComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'tasks', component: tasks_component_1.TasksComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'files', component: files_component_1.FilesComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'accounts', component: accounts_component_1.AccountsComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'contacts', component: contacts_component_1.ContactsComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'compaigns', component: compaigns_component_1.CompaignsComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'reports', component: reports_component_1.ReportsComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'groups', component: groups_component_1.GroupsComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'calendar', component: calendar_component_1.CalendarComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'login', component: login_component_1.LoginComponent },
    {
        path: '**',
        component: not_found_component_1.NotFoundComponent
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
