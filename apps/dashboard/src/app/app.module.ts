import { ComputersItemComponent } from './computers/computers-item/computers-item.component';
import { CoreStateModule } from '@mdv-thirteen/core-state';
import { UiLibModule } from '@mdv-thirteen/ui-lib';
import { CoreDataModule } from '@mdv-thirteen/core-data';
import { MaterialModule } from '@mdv-thirteen/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComputersComponent } from './computers/computers.component';
import { ComputersListComponent } from './computers/computers-list/computers-list.component';
import { ComputersDetailsComponent } from './computers/computers-details/computers-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [AppComponent, ComputersComponent, ComputersListComponent, ComputersDetailsComponent, ComputersItemComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    UiLibModule,
    CoreStateModule,
    UiLibModule,
    CoreStateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
