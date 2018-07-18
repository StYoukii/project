import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateProfileComponent } from './profile/create-profile/create-profile.component';
import { LoggedComponent } from './home/logged/logged.component';
import { NotLoggedComponent } from './home/not-logged/not-logged.component';
import { EventComponent } from './event/event/event.component';
import { CreateEventComponent } from './event/create-event/create-event.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ConnectComponent } from './connect/connect.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { ToggleMenuComponent } from './sidebar/toggle-menu/toggle-menu.component';
import { EventsListComponent } from './event/events-list/events-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProfileComponent,
    CreateProfileComponent,
    LoggedComponent,
    NotLoggedComponent,
    EventComponent,
    CreateEventComponent,
    SearchBarComponent,
    ConnectComponent,
    RegisterComponent,
    NavbarComponent,
    UserComponent,
    ToggleMenuComponent,
    EventsListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
