import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import { AppComponent } from './app.component';
import { CryptoBarComponent } from './crypto-bar/crypto-bar.component';
import { AisecDataComponent } from './aisec-data/aisec-data.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptoBarComponent,
    AisecDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MultiselectDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
