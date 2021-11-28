import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {Route, RouterModule} from '@angular/router';
import {PoolPumpControllerComponent} from './pool-pump-controller/pool-pump-controller.component';
import {ConfigurationEditComponent} from './pool-pump-controller/configuration-edit/configuration-edit.component';
import {FormsModule} from '@angular/forms';
import {OptionsComponent} from './pool-pump-controller/options/options.component';
import {HttpClientModule} from '@angular/common/http';
import {PumpControllerDashboardComponent} from './pool-pump-controller/pump-controller-dashboard/pump-controller-dashboard.component';
import {SecurityControllerComponent} from './security-controller/security-controller.component';
import {SecurityDashboardComponent} from './security-controller/security-dashboard/security-dashboard.component';
import {SecurityControlsComponent} from './security-controller/security-controls/security-controls.component';
import {SecurityControlsOutputComponent} from './security-controller/security-controls-output/security-controls-output.component';

const routes: Route[] = [
  {path: 'control-hub-frontend', component: HomeComponent},
  {path: 'pool-pump-controller', component: PoolPumpControllerComponent, children: [
      {path: '', component: OptionsComponent},
      {path: 'edit-configuration', component: ConfigurationEditComponent}
    ]},
  {path: 'security-controller', component: SecurityControllerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PoolPumpControllerComponent,
    ConfigurationEditComponent,
    OptionsComponent,
    PumpControllerDashboardComponent,
    SecurityControllerComponent,
    SecurityDashboardComponent,
    SecurityControlsComponent,
    SecurityControlsOutputComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
