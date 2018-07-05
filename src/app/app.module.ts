import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
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
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
