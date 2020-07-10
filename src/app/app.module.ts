import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ConnexionComponent } from './connexion/connexion/connexion.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MaterialModule} from "./material/material.module";
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FinanceComponent } from './finance/finance.component';
import { TechniqueComponent } from './technique/technique.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConnexionComponent,
    FinanceComponent,
    TechniqueComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
