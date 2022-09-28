import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResourcesComponent } from './resources/resources.component';
import { AddPWAComponent } from './add-pwa/add-pwa.component';

import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ServiceworkerConfigComponent } from './serviceworker-config/serviceworker-config.component';
import { ServiceworkerPushComponent } from './serviceworker-push/serviceworker-push.component';

@Injectable({
  providedIn: 'root'
})
export class MyResolver implements Resolve<Observable<string>> {
  resolve(): Observable<string> {
    performance.mark('resolved-data-start');
    return of('Resolved Data').pipe(delay(500));
  }
}

const routes: Routes = [
  {
    path: '', component: DashboardComponent, pathMatch: "full",
  },
  {
    path: 'dashboard', component: DashboardComponent,
  },
  {
    path: 'add-pwa', component: AddPWAComponent,
  },
  {
    path: 'serviceworker-config', component: ServiceworkerConfigComponent,
  },
  {
    path: 'serviceworker-push', component: ServiceworkerPushComponent,
  },
  {
    path: 'resources', component: ResourcesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
