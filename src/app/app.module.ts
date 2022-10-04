import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HighlightService } from './highlight.service';
import { PerformanceService } from './performance.service';
import { ResourcesComponent } from './resources/resources.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AddPWAComponent } from './add-pwa/add-pwa.component';
import { ServiceworkerConfigComponent } from './serviceworker-config/serviceworker-config.component';
import { ServiceworkerPushComponent } from './serviceworker-push/serviceworker-push.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    ResourcesComponent,
    AddPWAComponent,
    ServiceworkerConfigComponent,
    ServiceworkerPushComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    // Custom Service Worker implemetation
    // use importScripts(./ngsw-worker.js) in my-service-worker.js
    // ServiceWorkerModule.register('my-service-worker.js', {
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      // registrationStrategy: 'registerWhenStable',
      registrationStrategy: 'registerImmediately',
    })
  ],
  providers: [HighlightService, PerformanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
