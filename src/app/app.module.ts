import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { AlltaskComponent } from './alltask/alltask.component';
import { RemovetaskComponent } from './removetask/removetask.component';


@NgModule({
  declarations: [
    AppComponent,
    AddtaskComponent,
    AlltaskComponent,
    RemovetaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'alltask',
        component:AlltaskComponent
      },
      {
        path:'addtask',
        component:AddtaskComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
