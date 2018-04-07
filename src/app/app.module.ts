import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule, MatButtonModule, MatCheckboxModule,MatSidenavModule, MatToolbarModule, MatGridListModule, FlexLayoutModule,
        MatTabsModule, MatIconModule
  ],
  exports: [MatGridListModule, MatButtonModule,MatSidenavModule, MatToolbarModule, MatCheckboxModule, MatTabsModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
