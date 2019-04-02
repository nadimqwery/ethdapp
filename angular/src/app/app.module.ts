import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@Angular/forms';
import { AppComponent } from './app.component';
import { EthcontractService } from './ethcontract.service';
import { TransferFormComponent } from './transfer-form/transfer-form.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { SmartContractComponent } from './smart-contract/smart-contract.component';
import { AboutTokenComponent } from './about-token/about-token.component';
import { PlatformServicesComponent } from './platform-services/platform-services.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LeftSectionComponent } from './left-section/left-section.component';
import { AccountInformationComponent } from './account-information/account-information.component';
import { SellerComponent } from './escrow/seller/seller.component';
import { BuyerComponent } from './escrow/buyer/buyer.component';
import { EscrowComponent } from './escrow/escrow/escrow.component';
import { RegisterBuyerComponent } from './escrow/register-buyer/register-buyer.component';
import { RegisterSellerComponent } from './escrow/register-seller/register-seller.component';
import { RegisterEscrowComponent } from './escrow/register-escrow/register-escrow.component';
import {InlineNotificationComponent} from './inline-notification/inline-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    TransferFormComponent,
    HomeComponent,
    SmartContractComponent,
    AboutTokenComponent,
    PlatformServicesComponent,
    DashboardComponent,
    FooterComponent,
    NavigationBarComponent,
    LeftSectionComponent,
    AccountInformationComponent,
    SellerComponent,
    BuyerComponent,
    EscrowComponent,
    RegisterBuyerComponent,
    RegisterSellerComponent,
    RegisterEscrowComponent,
    InlineNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [EthcontractService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
