import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ConnexionComponent } from './connexion/connexion/connexion.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MaterialModule} from './material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FinanceComponent } from './finance/finance.component';
import { TechniqueComponent } from './technique/technique.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import {AuthService} from './service/auth.service';
import {AuthGuardService} from './helper/auth-guard.service';
import {ManageSiteTravauxComponent} from './finance/siteTravaux/manage-site-travaux/manage-site-travaux.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SteTravauxService} from './service/ste-travaux.service';
import { EditAchatTravauxComponent } from './finance/operationsTravaux/edit-achat-travaux/edit-achat-travaux.component';
import { EditPaiementSalaireTravauxComponent } from './finance/operationsTravaux/edit-paiement-salaire-travaux/edit-paiement-salaire-travaux.component';
import { EditPaieLoyerComponent } from './finance/operationsTravaux/edit-paie-loyer/edit-paie-loyer.component';
import { EditLocationTravauxComponent } from './finance/operationsTravaux/edit-location-travaux/edit-location-travaux.component';
import { EditMainouvreTravauxComponent } from './finance/operationsTravaux/edit-mainouvre-travaux/edit-mainouvre-travaux.component';
import { EditTranspTravauxComponent } from './finance/operationsTravaux/edit-transp-travaux/edit-transp-travaux.component';
import { EditAutredepenseTravauxComponent } from './finance/operationsTravaux/edit-autredepense-travaux/edit-autredepense-travaux.component';
import {JwtInterceptor} from './helper/jwt.interceptor';
import {ErrorInterceptor} from './helper/error.interceptor';
import {JWT_OPTIONS, JwtHelperService, JwtModule} from '@auth0/angular-jwt';
import { ListeSiteTravauComponent } from './finance/siteTravaux/liste-site-travau/liste-site-travau.component';
import { DetailSiteTravauxComponent } from './finance/siteTravaux/detail-site-travaux/detail-site-travaux.component';
import { EditSiteTravauxComponent } from './finance/siteTravaux/edit-site-travaux/edit-site-travaux.component';
import { EditOperationTravauxComponent } from './finance/operationsTravaux/edit-operation-travaux/edit-operation-travaux.component';
import { ListAchatComponent } from './finance/operationsTravaux/list-achat/list-achat.component';
import { ListeSiteTravauxOperationComponent } from './finance/siteTravaux/liste-site-travaux-operation/liste-site-travaux-operation.component';
import {AchatTravauxService} from "./service/achat-travaux.service";
import {MatMenuModule} from "@angular/material/menu";
import { EditAchatComponent } from './finance/operationsTravaux/edit-achat/edit-achat.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConnexionComponent,
    FinanceComponent,
    TechniqueComponent,
    AccueilComponent,
    FooterComponent,
    ManageSiteTravauxComponent,
    EditAchatTravauxComponent,
    EditPaiementSalaireTravauxComponent,
    EditPaieLoyerComponent,
    EditLocationTravauxComponent,
    EditMainouvreTravauxComponent,
    EditTranspTravauxComponent,
    EditAutredepenseTravauxComponent,
    ListeSiteTravauComponent,
    DetailSiteTravauxComponent,
    EditSiteTravauxComponent,
    EditOperationTravauxComponent,
    ListAchatComponent,
    ListeSiteTravauxOperationComponent,
    EditAchatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,

  ],
  providers: [AuthService, AuthGuardService,
    SteTravauxService, AchatTravauxService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
