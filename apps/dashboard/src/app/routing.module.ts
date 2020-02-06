import { AuthGaurd } from '@mdv-thirteen/core-data';
import { ComputersItemComponent } from './computers/computers-item/computers-item.component';
import { ComputersComponent } from './computers/computers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { LoginComponent } from 'libs/ui-lib/src/lib/login/login.component';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { WildcardComponent } from 'libs/ui-lib/src/lib/wildcard/wildcard.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'computers', canActivate: [AuthGaurd], children: [
    { path: '', component: ComputersComponent },
    { path: ':id', component: ComputersItemComponent }
  ] },
  { path: 'login', component: LoginComponent },
  { path: '404', component: WildcardComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }
