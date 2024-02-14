import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { WifiSpeedComponent } from './wifi-speed/wifi-speed.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  { path: 'file-manager', component: FileManagerComponent },
  { path: 'chatbox', component: ChatboxComponent },
  { path: 'wifi-speed', component: WifiSpeedComponent },
  {  path: 'todo-list', component: TodoListComponent},
  // Add other routes if needed
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
