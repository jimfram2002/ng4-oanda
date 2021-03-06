import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NvD3Module } from 'ng2-nvd3';

// d3 and nvd3 should be included somewhere
import 'd3';
import 'nvd3';

// Theming
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routing
import { Routes, RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { CanActivateRouteGuard } from './can-activate-route.guard';

// Services
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthenticatedComponent } from './components/authenticated/authenticated.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { BarchartComponent } from './components/shared/barchart/barchart.component';
import { CandlestickComponent } from './components/shared/candlestick/candlestick.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    AuthenticatedComponent,
    HeaderComponent,
    MainComponent,
    BarchartComponent,
    CandlestickComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NvD3Module
  ],
  providers: [AuthService, ApiService, UserService, CanActivateRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
