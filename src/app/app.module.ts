import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
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
import { EditAchatTravauxComponent } from './finance/operationsTravaux/achat/edit-achat-travaux/edit-achat-travaux.component';
import { EditPaieLoyerComponent } from './finance/operationsTravaux/loyer/edit-paie-loyer/edit-paie-loyer.component';
import { EditLocationTravauxComponent } from './finance/operationsTravaux/location/edit-detail/edit-location-travaux.component';
import { EditMainouvreTravauxComponent } from './finance/operationsTravaux/mainouvre/edit-mainouvre-travaux/edit-mainouvre-travaux.component';
import { EditTranspTravauxComponent } from './finance/operationsTravaux/transport/edit-detail/edit-transp-travaux.component';
import { EditAutredepenseTravauxComponent } from './finance/operationsTravaux/autres/edit-detail/edit-autredepense-travaux.component';
import {JwtInterceptor} from './helper/jwt.interceptor';
import {ErrorInterceptor} from './helper/error.interceptor';
import {JWT_OPTIONS, JwtHelperService, JwtModule} from '@auth0/angular-jwt';
import { ListeSiteTravauComponent } from './finance/siteTravaux/liste-site-travau/liste-site-travau.component';
import { DetailSiteTravauxComponent } from './finance/siteTravaux/detail-site-travaux/detail-site-travaux.component';
import { EditSiteTravauxComponent } from './finance/siteTravaux/edit-site-travaux/edit-site-travaux.component';
import { ListAchatComponent } from './finance/operationsTravaux/achat/list-achat/list-achat.component';
import { ListeSiteTravauxOperationComponent } from './finance/siteTravaux/liste-site-travaux-operation/liste-site-travaux-operation.component';
import {AchatTravauxService} from './service/achat-travaux.service';
import {MatMenuModule} from '@angular/material/menu';
import { EditAchatComponent } from './finance/operationsTravaux/achat/edit-achat/edit-achat.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { SuccessDialogComponent } from './service/shared/dialogs/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './service/shared/dialogs/error-dialog/error-dialog.component';
import { EditLocationComponent } from './finance/operationsTravaux/location/edit-location/edit-location.component';
import { ListLocationComponent } from './finance/operationsTravaux/location/list-location/list-location.component';
import { EditAutreDepenseComponent } from './finance/operationsTravaux/autres/edit-autre-depense/edit-autre-depense.component';
import { ListAutreDepenseComponent } from './finance/operationsTravaux/autres/list-autre-depense/list-autre-depense.component';
import { ListMainDoeuvreComponent } from './finance/operationsTravaux/mainouvre/list-main-doeuvre/list-main-doeuvre.component';
import { EditMainDoeuvreComponent } from './finance/operationsTravaux/mainouvre/edit-main-doeuvre/edit-main-doeuvre.component';
import { ListTransportComponent } from './finance/operationsTravaux/transport/list-transport/list-transport.component';
import { EditTransportComponent } from './finance/operationsTravaux/transport/edit-transport/edit-transport.component';
import { DatailAchatDialogComponent } from './finance/operationsTravaux/achat/dialogue/datail-achat-dialog/datail-achat-dialog.component';
import { BanqueComponent } from './banque/banque.component';
import { EditTecniqueComponent } from './technique/edit-tecnique/edit-tecnique.component';
import { DialogLocationComponent } from './finance/operationsTravaux/location/dialog-location/dialog-location.component';
import { DialogTransportComponent } from './finance/operationsTravaux/transport/dialog-transport/dialog-transport.component';

import { DialogMainouvreComponent } from './finance/operationsTravaux/mainouvre/dialog-mainouvre/dialog-mainouvre.component';
import { DialogLoyerComponent } from './finance/operationsTravaux/loyer/dialog-loyer/dialog-loyer.component';
import { DialogAutresComponent } from './finance/operationsTravaux/autres/dialog-autres/dialog-autres.component';
import { ListLoyerComponent } from './finance/operationsTravaux/loyer/list-loyer/list-loyer.component';
import { DetailLoyerComponent } from './finance/operationsTravaux/loyer/detail-loyer/detail-loyer.component';
import { ManageTechnicComponent } from './technique/manage-technic/manage-technic.component';
import { EditOperationComponent } from './banque/edit-operation/edit-operation.component';
import { ListOperationComponent } from './banque/list-operation/list-operation.component';
/* Custom Hammer configuration */
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { DetailTechComponent } from './technique/detail-tech/detail-tech.component';
import {ListComponent} from './technique/list/list.component';
import { AddImageComponent } from './technique/add-image/add-image.component';
import { ManageBanqueComponent } from './banque/manage-banque/manage-banque.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ManageComponent } from './salaire/manage/manage.component';
import { EnregistrerEmployeComponent } from './salaire/enregistrer-employe/enregistrer-employe.component';
import { PayeSalaireComponent } from './salaire/paye-salaire/paye-salaire.component';
import { SalaireGesComponent } from './salaire/salaire-ges/salaire-ges.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ConnexionComponent } from './connexion/connexion.component';
import {ComponentsModule} from './components/components.module';
import { UserProfilComponent } from './user-profil/user-profil.component';
import {AdminLayoutModule} from "./layouts/admin-layout/admin-layout.module";
export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    'pan': {
      direction: Hammer.DIRECTION_ALL,
    }
  }
}
/* End Custom hammer configuration */


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FinanceComponent,
    TechniqueComponent,
    AccueilComponent,
    FooterComponent,
    ManageSiteTravauxComponent,
    EditAchatTravauxComponent,
    EditPaieLoyerComponent,
    EditLocationTravauxComponent,
    EditMainouvreTravauxComponent,
    EditTranspTravauxComponent,
    EditAutredepenseTravauxComponent,
    ListeSiteTravauComponent,
    DetailSiteTravauxComponent,
    EditSiteTravauxComponent,
    ListAchatComponent,
    ListeSiteTravauxOperationComponent,
    EditAchatComponent,
    SuccessDialogComponent,
    ErrorDialogComponent,
    EditLocationComponent,
    ListLocationComponent,
    EditAutreDepenseComponent,
    ListAutreDepenseComponent,
    ListMainDoeuvreComponent,
    EditMainDoeuvreComponent,
    ListTransportComponent,
    EditTransportComponent,
    DatailAchatDialogComponent,
    BanqueComponent,
    EditTecniqueComponent,
    DialogLocationComponent,
    DialogTransportComponent,
    DialogMainouvreComponent,
    DialogLoyerComponent,
    DialogAutresComponent,
    ListLoyerComponent,
    DetailLoyerComponent,
    ManageTechnicComponent,
    EditOperationComponent,
    ListOperationComponent,
    DetailTechComponent,
    ListComponent,
    AddImageComponent,
    ManageBanqueComponent,
    ManageComponent,
    EnregistrerEmployeComponent,
    PayeSalaireComponent,
    SalaireGesComponent,
    ConnexionComponent,
    UserProfilComponent,
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
    NgxGalleryModule,
    ComponentsModule,
    AdminLayoutModule

  ],
  providers: [AuthService, AuthGuardService,
    SteTravauxService, AchatTravauxService, MatDatepickerModule,
    MatNativeDateModule,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig},
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
