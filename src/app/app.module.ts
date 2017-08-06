import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StorageService } from 'app/services/storage.service';
import { LoggedInGuardService } from 'app/services/logged-in-guard.service';

import { routing } from "app/routes/app.routes";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

import { NavModule } from 'app/modules/navigation/nav.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NavModule
  ],
  providers: [
    StorageService,
    LoggedInGuardService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
