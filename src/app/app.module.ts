import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent, AddMessageComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { ModelsService } from './models.service';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, AddMessageComponent
  ],

entryComponents: [
    AppComponent,
    AddMessageComponent
  ],

  imports: [
    BrowserModule,BrowserAnimationsModule, MatButtonModule, MatCheckboxModule,MatSidenavModule, MatToolbarModule, MatGridListModule, FlexLayoutModule,
        MatTabsModule, MatIconModule, MatCardModule, MatDialogModule, MatInputModule, FormsModule
  ],
  exports: [MatGridListModule, MatButtonModule,MatSidenavModule, MatToolbarModule, MatCheckboxModule, MatTabsModule, MatIconModule, MatCardModule, MatDialogModule, MatInputModule, FormsModule],
  providers: [ModelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
