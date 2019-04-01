import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TransferFormComponent } from './transfer-form/transfer-form.component';
import { HomeComponent } from './home/home.component';
import { AboutTokenComponent } from './about-token/about-token.component';

import { PlatformServicesComponent } from './platform-services/platform-services.component';

import { SmartContractComponent } from './smart-contract/smart-contract.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'about-token', component: AboutTokenComponent },
 {path: 'home', component: HomeComponent},
 {path: 'platform-services', component: PlatformServicesComponent},
 {path: 'transfer', component: TransferFormComponent},
 {path: 'smart-contract', component: SmartContractComponent},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
