import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VivaMapCmpComponent } from './viva-map-cmp/viva-map-cmp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VivaModalCmpComponent } from './viva-modal-cmp/viva-modal-cmp.component';

import { VivaChartCmpComponent } from './viva-chart-cmp/viva-chart-cmp.component';
import { VivaDrcMapCmpComponent } from './viva-drc-map-cmp/viva-drc-map-cmp.component';
import { ChartsModule } from 'ng2-charts';
import { VivaStaticsCmpComponent } from './viva-statics-cmp/viva-statics-cmp.component';
import { VivaForumCmpComponent } from './viva-forum-cmp/viva-forum-cmp.component';
import { VivaSigninSignupCmpComponent } from './viva-signin-signup-cmp/viva-signin-signup-cmp.component';
import { VivaBelCaseCmpComponent } from './viva-bel-case-cmp/viva-bel-case-cmp.component';
import { VivaFootCmpComponent } from './viva-foot-cmp/viva-foot-cmp.component';
import { VivaHomeCmpComponent } from './viva-home-cmp/viva-home-cmp.component';
import {ForStatisticsService} from './services/for-statistics.service';
import {ForAuthService} from './services/for-auth.service';
import { VivaTestingCmpComponent } from './viva-testing-cmp/viva-testing-cmp.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CasePgNotFoundRouteComponent } from './case-pg-not-found-route/case-pg-not-found-route.component';
import {AuthGuard} from './services/auth-guard.service';
import {CitoyenClasse} from './services/citoyen-classe';
import { VivaSglInfoCmpComponent } from './viva-sgl-info-cmp/viva-sgl-info-cmp.component';
@NgModule({
  declarations: [
    AppComponent,
    VivaMapCmpComponent,
    VivaModalCmpComponent,
    VivaChartCmpComponent,
    VivaDrcMapCmpComponent,
    VivaStaticsCmpComponent,
    VivaForumCmpComponent,
    VivaSigninSignupCmpComponent,
    VivaBelCaseCmpComponent,
    VivaFootCmpComponent,
    VivaHomeCmpComponent,
    VivaTestingCmpComponent,
    CasePgNotFoundRouteComponent,
    VivaSglInfoCmpComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ChartsModule,
        // RouterModule.forRoot(routes),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyB4QzyCWPJoMAX4KY2hC1E8Sri_jJKuYiM'
        }),
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [
    ForStatisticsService,
    ForAuthService,
    CitoyenClasse,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
