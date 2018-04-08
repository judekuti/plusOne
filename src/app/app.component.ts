import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModelsService } from './models.service';
import { Model } from './models';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenavModule;
  models: Model[]=[];
  selectedModel: Model;



  constructor(private modelsService: ModelsService, private vcr: ViewContainerRef, private matDialog: MatDialog){

  }
  ngOnInit(){
      this.models = this.modelsService.getAll();
  }

  showDetails(model: Model){
      // 1. set selected models
          // we select the model by creating a new property selectedModel within APpComponent
          this.selectedModel= model;
      // 2. open sidenav
          // In order to open the side nav it has to be referenced in component. Using ViewChild decorator will query the component's template from within the component. Firstly we create a local template variable #sidenav in the sidenav then we connect the #sidenav in template using ViewChild as above
          this.sidenav.open();
  }


  addMessage(){
      //Open dialog to add message
      // 1. create dialog config
      const dialogConfig = new MatDialogConfig();
      dialogConfig.viewContainerRef = this.vcr;
      // // 2. open dialog
      const dialog: any = this.matDialog.open(AddMessageComponent, dialogConfig);
      // // 3. pass selected model to dialog
      dialog.selectedModel = this.selectedModel;
      console.log(dialog);
  }
}
  @Component({
      selector: 'add-message',
      template: `
      <form (submit)="addMessage()">
      <mat-input-container>
      <input matInput name="message" [(ngModel)]= "message" placeholder="Message">
      </mat-input-container>
      <button mat-raised-button color="accent">Add Message</button>
      </form>
      `
  })

  export class AddMessageComponent{
      message = '';

      constructor(private matDialogRef: MatDialogRef<AddMessageComponent>){}

      addMessage(){
          //1. create message
          const newMessage = { who: 'John Doe', content: this.message};
          //2. add message to selected model
          const selectedModel : Model = (<any>this.matDialogRef.componentInstance).selectedModel;
          selectedModel.messages.push(newMessage);
          //3. close dialog
          this.matDialogRef.close();
      }
  }

