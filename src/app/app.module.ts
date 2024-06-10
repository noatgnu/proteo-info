import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatLegacyCardModule as MatCardModule} from "@angular/material/legacy-card";
import {MatDividerModule} from "@angular/material/divider";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatToolbarModule} from "@angular/material/toolbar";
import { StuffsComponent } from './stuffs/stuffs.component';
import {MatIconModule} from "@angular/material/icon";
import { AboutMeComponent } from './about-me/about-me.component';
import { PythonModulesComponent } from './python-modules/python-modules.component';
import { WebApplicationComponent } from './web-application/web-application.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatLegacyListModule as MatListModule} from "@angular/material/legacy-list";
import { NodeModulesComponent } from './node-modules/node-modules.component';

@NgModule({
  declarations: [
    AppComponent,
    StuffsComponent,
    AboutMeComponent,
    PythonModulesComponent,
    WebApplicationComponent,
    NodeModulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
