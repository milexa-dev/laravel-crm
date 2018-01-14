import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }      from '../dashboard/dashboard.component';
import { LibraryComponent }      from '../library/library.component';
import { UserComponent }      from '../user/user.component';
import { OpportunitiesComponent }      from '../opportunities/opportunities.component';
import { LeadsComponent }      from '../leads/leads.component';
import { TasksComponent }      from '../tasks/tasks.component';
import { FilesComponent }      from '../files/files.component';
import { AccountsComponent }      from '../accounts/accounts.component';
import { ContactsComponent }      from '../contacts/contacts.component';
import { CompaignsComponent }      from '../compaigns/compaigns.component';
import { ReportsComponent }      from '../reports/reports.component';
import { GroupsComponent }      from '../groups/groups.component';
import { CalendarComponent }      from '../calendar/calendar.component';
import { HomeComponent }      from '../home/home.component';
import { NotFoundComponent }      from '../not-found/not-found.component';
import { LoginComponent }      from '../login/login.component';

//Guard
import  { AuthGuard } from '../_guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent , canActivate: [AuthGuard]},
  { path: 'dashboards', component: DashboardComponent , canActivate: [AuthGuard] },
  { path: 'library', component: LibraryComponent , canActivate: [AuthGuard] },
  { path: 'peopel', component: UserComponent , canActivate: [AuthGuard] },
  { path: 'opportunities', component: OpportunitiesComponent , canActivate: [AuthGuard] },
  { path: 'leads', component: LeadsComponent , canActivate: [AuthGuard] },
  { path: 'tasks', component: TasksComponent , canActivate: [AuthGuard] },
  { path: 'files', component: FilesComponent , canActivate: [AuthGuard] },
  { path: 'accounts', component: AccountsComponent , canActivate: [AuthGuard] },
  { path: 'contacts', component: ContactsComponent , canActivate: [AuthGuard] },
  { path: 'compaigns', component: CompaignsComponent , canActivate: [AuthGuard] },
  { path: 'reports', component: ReportsComponent , canActivate: [AuthGuard] },
  { path: 'groups', component: GroupsComponent , canActivate: [AuthGuard] },
  { path: 'calendar', component: CalendarComponent , canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
