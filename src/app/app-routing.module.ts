import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FinanceComponent} from './finance/finance.component';
import {AccueilComponent} from './accueil/accueil.component';
import {ManageSiteTravauxComponent} from './finance/siteTravaux/manage-site-travaux/manage-site-travaux.component';
import {AuthGuardService} from './helper/auth-guard.service';
import {ListeSiteTravauComponent} from './finance/siteTravaux/liste-site-travau/liste-site-travau.component';
import {EditSiteTravauxComponent} from './finance/siteTravaux/edit-site-travaux/edit-site-travaux.component';
import {EditAchatTravauxComponent} from './finance/operationsTravaux/achat/edit-achat-travaux/edit-achat-travaux.component';
import {ListeSiteTravauxOperationComponent} from './finance/siteTravaux/liste-site-travaux-operation/liste-site-travaux-operation.component';
import {EditAchatComponent} from './finance/operationsTravaux/achat/edit-achat/edit-achat.component';
import {EditLocationComponent} from './finance/operationsTravaux/location/edit-location/edit-location.component';
import {EditPaieLoyerComponent} from './finance/operationsTravaux/loyer/edit-paie-loyer/edit-paie-loyer.component';
import {EditMainDoeuvreComponent} from './finance/operationsTravaux/mainouvre/edit-main-doeuvre/edit-main-doeuvre.component';
import {EditAutreDepenseComponent} from './finance/operationsTravaux/autres/edit-autre-depense/edit-autre-depense.component';
import {ManageTechnicComponent} from './technique/manage-technic/manage-technic.component';

import {ListComponent} from './technique/list/list.component';
import {EditTecniqueComponent} from './technique/edit-tecnique/edit-tecnique.component';
import {AddImageComponent} from './technique/add-image/add-image.component';
import {ManageBanqueComponent} from './banque/manage-banque/manage-banque.component';
import {EditOperationComponent} from './banque/edit-operation/edit-operation.component';
import {EditTransportComponent} from './finance/operationsTravaux/transport/edit-transport/edit-transport.component';
import {ManageComponent} from './salaire/manage/manage.component';

import {SalaireGesComponent} from './salaire/salaire-ges/salaire-ges.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/AdminLayoutModule.module#AdminLayoutModule'
    }]
  },
  /*{path: 'accueil', component: AccueilComponent},
  { path: 'finance', component: FinanceComponent, canActivate: [AuthGuardService] },
  { path: 'technique',
    canActivate: [AuthGuardService],
  children: [
    {path: '',
      component: ManageTechnicComponent},
    {path: 'liste',
      component: ListComponent,
    children: [
      {path: 'edite/:id', component: EditTecniqueComponent},
      {path: 'addImage/:id', component: AddImageComponent}
    ]},

  ]},
  { path: 'banque',
    canActivate: [AuthGuardService],
    children: [{
    path: '',
      component: ManageBanqueComponent
    },
      {path: 'add', component: EditOperationComponent}
      ]

  },
  { path: 'salaire',
    canActivate: [AuthGuardService],
    children: [{
      path: '',
      component: ManageComponent
    },
      {path: 'salaire', component: SalaireGesComponent}
    ]

  },
  { path: 'achatTravaux', component: EditAchatTravauxComponent, canActivate: [AuthGuardService] },
  {
    path: 'site',
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        component: ManageSiteTravauxComponent,

      },
      {
        path: 'liste',
       // canActivateChild: [AuthGuardService],
        component: ListeSiteTravauComponent,
        children: [
          {
            path: 'detail/:id',
            component: ListeSiteTravauxOperationComponent

          },
          {
            path: 'achat/:id',
            component: EditAchatComponent

          },
          {
            path: 'location/:id',
            component: EditLocationComponent

          },

          {
            path: 'loyer/:id',
            component: EditPaieLoyerComponent

          },
          {
            path: 'oeuvre/:id',
            component: EditMainDoeuvreComponent

          },
          {
            path: 'transport/:id',
            component: EditTransportComponent

          },
          {
            path: 'autre/:id',
            component: EditAutreDepenseComponent

          },

          {
            path: ':id/edite',
            component: EditSiteTravauxComponent,
          },
          {
            path: 'creer', component: EditSiteTravauxComponent,
          }

        ]

      }

    ]
  }
*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forRoot(routes,
      {
      useHash: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
