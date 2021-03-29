import { FormsModule } from './forms/forms.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FakeDbService } from './fake-db/fake-db.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./forms/forms.module').then(m => FormsModule) ,
  },

];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(FakeDbService, {
      delay : 0,
      passThruUnknownUrl: true
    }),
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
