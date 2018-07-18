import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnectComponent } from './connect/connect.component';
import { CreateEventComponent } from './event/create-event/create-event.component';
import { EventsListComponent } from './event/events-list/events-list.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: EventsListComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'new-event',
    component: CreateEventComponent
  },
  {
    path: 'connect',
    component: ConnectComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'test',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
