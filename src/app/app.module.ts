import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule }     from './routing/app-routing.module';
import { ChartModule } from 'angular-highcharts';

//import * as $ from 'jquery';

// Components
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LibraryComponent } from './library/library.component';
import { UserComponent } from './user/user.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { LeadsComponent } from './leads/leads.component';
import { TasksComponent } from './tasks/tasks.component';
import { FilesComponent } from './files/files.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CompaignsComponent } from './compaigns/compaigns.component';
import { ReportsComponent } from './reports/reports.component';
import { GroupsComponent } from './groups/groups.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

//services
import  { UserService } from './_services/user.service';

//Guard
import  { AuthGuard } from './_guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    FooterComponent,
    DashboardComponent,
    LibraryComponent,
    UserComponent,
    OpportunitiesComponent,
    LeadsComponent,
    TasksComponent,
    FilesComponent,
    AccountsComponent,
    ContactsComponent,
    CompaignsComponent,
    ReportsComponent,
    GroupsComponent,
    CalendarComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [
      UserService,
      AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
