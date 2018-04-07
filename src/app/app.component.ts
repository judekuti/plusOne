import { Component } from '@angular/core';
import { ModelsService } from './models.service';
import { Model } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  models: Model[]=[];
  constructor(private modelsService: ModelsService){

  }
  ngOnInit(){
      this.models = this.modelsService.getAll();
  }

  showDetails(model: Model){
      // 1. set selected models
          // we select the model by creating a new property selectedModel within APpComponent
      // 2. open sidenav
  }
}
