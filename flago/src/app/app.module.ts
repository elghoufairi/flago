import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RightNavbarComponent } from './right-navbar/right-navbar.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { WifiSpeedComponent } from './wifi-speed/wifi-speed.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { WifiSpeedService } from './wifi-speed/wifi-speed.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
   
    RightNavbarComponent,
    FileManagerComponent,
    ChatboxComponent,
    WifiSpeedComponent,
    TodoListComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
